# Serverless Faucet

This repository contains everything to host your own Ethereum Faucet as an AWS Lambda service.

The service has two API endpoints:

`/captcha/{columns}/{rows}`

Generates a captcha as image or string

`/faucet/{network}/{address}`

Sends funds to an Ethereum address.


## Configuration

The faucet is configured with the `.env` file.
Three values need to be defined:
- PRIVATE_KEY : the private key managing the faucet's funds
- CHALLENGE_KEY : a key used for hmac on the captcha solution 
- JWT_KEY : used to issue and verify json web tokens (JWT)

## Deploy

The service can be deployed with `sls deploy`

## Test API

```
curl -H "Accept: application/json" -X GET "https://ghvfuly6tj.execute-api.us-east-1.amazonaws.com/dev/captcha/$COLUMNS/$LINES" 
curl -X GET "https://ghvfuly6tj.execute-api.us-east-1.amazonaws.com/dev/captcha/$(tput cols)/$(tput lines)"
curl -s "https://ghvfuly6tj.execute-api.us-east-1.amazonaws.com/dev/captcha/$COLUMNS/$LINES" | jq '.captcha' 
```