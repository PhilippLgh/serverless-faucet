import { createCaptcha } from './lib/captcha'
import { sendFunds } from './lib/faucet'
import { createChallenge } from './lib/challenge'
import { isAddress } from './lib/utils'

const fail = (msg) => {
  return {
    statusCode: 400,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(msg)
  };
}

export const status = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Alive!`,
    }),
  };
};

export const hello = async (event, context) => {
  const { captcha, text } = await createCaptcha()
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      'Content-Type': 'text/html',
    },
    body: `<img src="data:image/png;base64,${captcha.toString('base64')}"/>`
  }
};

export const captchaTest = async (event, context) => {
  const { columns, rows } = event.pathParameters
  const { captcha, text } = await createCaptcha({ format: 'ansi', columns, rows })
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify({
      captcha,
      text
    })
  }
};

export const captcha = async (event, context) => {
  const { columns, rows } = event.pathParameters
  const { captcha, text } = await createCaptcha({ format: 'ansi', columns, rows })
  const challenge = await createChallenge(text)
  console.log('created new captcha', text, challenge)
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify({
      captcha,
      challenge
    })
  }
};

export const fundAccount = async (event, context) => {

  const { network: networkId, address } = event.pathParameters
  console.log('fund account', networkId, address)

  const to = isAddress(address)
  if (!to) {
    return fail('Not a valid address:'+address)
  }
  const amount = '1.0'
  const network = 'goerli'
  const result = await sendFunds(to, amount, network)
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      'Content-Type': 'text/plain',
    },
    body: result
  }
};
