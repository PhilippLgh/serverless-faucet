# Serverless Faucet

This repository contains everything to host your own Ethereum Faucet as an AWS Lambda service.

## Hosted
A hosted faucet is available at:
https://api.ethfaucet.org

## API
The service has two API endpoints:

`/captcha/{columns}/{rows}`

Generates a captcha as image or string

`/faucet/{network}/{address}`

Sends funds to an Ethereum address.

## Captchas
The faucet has a special captcha renderer to be able to render captchas to the command line interface (CLI).
In order to reliably do this we need to call the API with information about the columns and rows of our terminal.

Node.js example:
```javascript
axios.get(`${FAUCET_API}/captcha/${process.stdout.columns}/${process.stdout.rows * 2}`)
```

Curl examples:
```shell
curl -X GET "https://ghvfuly6tj.execute-api.us-east-1.amazonaws.com/dev/captcha/$(tput cols)/$(tput lines)"
curl -H "Accept: application/json" -X GET "https://ghvfuly6tj.execute-api.us-east-1.amazonaws.com/dev/captcha/$COLUMNS/$LINES" 
curl -s "https://ghvfuly6tj.execute-api.us-east-1.amazonaws.com/dev/captcha/$COLUMNS/$LINES" | jq '.captcha' 
```


## Configuration

The faucet is configured with a `.env` file.
Three values need to be defined:
- PRIVATE_KEY : the private key managing the faucet's funds
- JWT_KEY : used to issue and verify json web tokens (JWT)

## Deploy
Serverless is required:
`npm install serverless -g`

The service can be deployed with `sls deploy`

