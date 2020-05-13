import svgCaptcha from 'svg-captcha'
import sharp from 'sharp'
import Jimp from 'jimp'
import chalk from 'chalk'

chalk.level = 2

const createCaptchaSvg = async (size = 6, width = 250) => {
  const captcha = svgCaptcha.create({
    size,
    ignoreChars: '0oO1lIieyc',
    background: '#ffffff',
    width
  });
  const { data: svg, text } = captcha
  return { svg, text }
}

export const svgToPng = async (svg) => {
  return sharp(Buffer.from(svg), { density: 600 })
  .toFormat('png')
  .toBuffer()
}

// TODO consider using sharps's raw() https://sharp.pixelplumbing.com/api-output#raw instead of jimp
const pngToBitmap = async (buffer, columns, rows) => {
  const image = await Jimp.read(buffer);
  const { bitmap } = image;
  // scale down to terminal columns and rows
  const scaled = scale(columns, rows, bitmap.width, bitmap.height)
  image.resize(scaled.width, scaled.height)
  return image
}

function scale(width, height, originalWidth, originalHeight) {
	const originalRatio = originalWidth / originalHeight;
	const factor = (width / height > originalRatio ? height / originalHeight : width / originalWidth);
	width = factor * originalWidth;
	height = factor * originalHeight;
	return {width, height};
}

// https://github.com/sindresorhus/terminal-image/blob/master/index.js#L68
async function bitmapToAnsi(image) {
  const PIXEL = '\u2584';
  let result = [];
	for (let y = 0; y < image.bitmap.height - 1; y += 2) {
		for (let x = 0; x < image.bitmap.width; x++) {
			const {r, g, b, a} = Jimp.intToRGBA(image.getPixelColor(x, y));
			const {r: r2, g: g2, b: b2} = Jimp.intToRGBA(image.getPixelColor(x, y + 1));
			if (a === 0) {
				result.push(chalk.reset(' '))
			} else {
				result.push(chalk.bgRgb(r, g, b).rgb(r2, g2, b2)(PIXEL))
			}
		}
		result.push('\n')
  }
  return result.join('')
}

export const createCaptcha = async ({
  size = 6, 
  width = 250, 
  columns = 250,
  rows = 48,
  format = 'png'
} = {}) => {
  const { svg, text } = await createCaptchaSvg(size, width)
  if (format === 'svg') {
    return { 
      captcha: svg, 
      text, 
      format 
    }
  }
  const pngBuf = await svgToPng(svg)
  if (format === 'png') {
    return { 
      captcha: pngBuf, 
      text,
      format 
    }
  }
  const bmp = await pngToBitmap(pngBuf, columns, rows)
  const ansi = await bitmapToAnsi(bmp)
  return {
    captcha: ansi,
    text,
    format
  }
}