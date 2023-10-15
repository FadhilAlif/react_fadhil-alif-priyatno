# Summary Installation OpenAI

## Why OpenAI

- Free (trial)
- Easy to Install
- Many used
- Has many parameters

## How to Install

`npm install openai`

Lalu gunakan pada project kalian dengan cara import
`import OpenAI from "openai"`

## Using OpenAI API Key

https://platform.openai.com/docs/api-reference

Cara menggunakannya :
`import { Configuration, OpenAIApi } from "openai";const configuration = new Configuration({
    organization: "org-j002fxo0uJSXHm3JjVirkUnx",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();`
