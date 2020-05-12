import crypto from 'crypto'
import jwt from 'jsonwebtoken'

const createHmac = (text) => {
  const hmac = crypto.createHmac('sha256', process.env.CHALLENGE_KEY)
  hmac.update(text)
  return hmac.digest('hex')
}

export const createChallenge = async (text) => {
  const hmac = createHmac(text)
  const payload = {
    challenge: hmac
  }
  const signedToken = jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: 10 * 60 // in seconds
  })
  return signedToken
}