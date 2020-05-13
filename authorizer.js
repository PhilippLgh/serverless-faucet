import { isValidChallenge, isValidResponse } from "./lib/challenge";

const generatePolicy = (principalId, effect, resource) => {
  const authResponse = {
    principalId,
    policyDocument: {
      Version: '2012-10-17',
      Statement: []
    }
  };

  authResponse.policyDocument.Statement.push({
    Action: 'execute-api:Invoke',
    Effect: 'Allow',
    Resource: 'arn:aws:execute-api:us-east-1:*' 
  })

  return authResponse;
}

export const verifyCaptcha = async (event, context) => {

  // check header or url parameters or post parameters for token
  let token = event.authorizationToken;

  if (!token) {
    console.log('Error: Auth token missing from request')
    throw new Error('Unauthorized - no session');
  }

  // 1. verify challenge
  const parts = token.split('.')
  // the response should be appended to challenge with dot
  const response = parts.pop()
  const jwt = parts.join('.')
  
  // verify that jwt was signed by this server
  const isValidToken = await isValidChallenge(jwt)
  if(!isValidToken) {
    throw new Error('Invalid jwt')
  }

  const passed = await isValidResponse(jwt, response)
  if (passed) {
    const principal = '12345'+ Date.now()
    const policy = generatePolicy(principal)
    console.log('policy', JSON.stringify(policy, null, 2))
    return policy
  } else {
    console.log('Invalid response', response)
  }

  throw new Error('Unauthorized - invalid session');

};