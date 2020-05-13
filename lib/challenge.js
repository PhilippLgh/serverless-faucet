import crypto from 'crypto'
import jwt from 'jsonwebtoken'

const createHmac = (text, key = process.env.CHALLENGE_KEY) => {
  const hmac = crypto.createHmac('sha512', key)
  hmac.update(text)
  return hmac.digest('hex')
}

const genRandomString = (length) => {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex') /** convert to hexadecimal format */
    .slice(0, length);   /** return required number of characters */
}

const createSaltedHash = (text) => {
  const salt = genRandomString(20)
  const hash = createHmac(text, salt)
  return {
    salt,
    hash
  }
}

export const createChallenge = async (text) => {
  // const hmac = createHmac(text)
  const { salt, hash } = createSaltedHash(text)
  const payload = {
    challenge: hash,
    salt
  }
  const signedToken = jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: 10 * 60 // in seconds
  })
  return signedToken
}

export const isValidChallenge = async (token) => {
  return jwt.verify(token, process.env.JWT_KEY)
}

export const isValidResponse = async (token, response) => {
  const decoded = jwt.decode(token)
  const { challenge, salt } = decoded
  const responseHmac = createHmac(response, salt)
  return challenge === responseHmac
}