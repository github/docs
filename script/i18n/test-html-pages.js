#!/usr/bin/env node


client.js

Download
#! /usr/bin/env python3.6
"""
Python 3.6 or newer required.
"""
import json
import os
import stripe
# This is a public sample test API key.
# Don’t submit any personally identifiable information in requests made with this key.
# Sign in to see your own test API key embedded in code samples.
stripe.api_key = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"

from flask import Flask, render_template, jsonify, request


app = Flask(__name__, static_folder="public",
            static_url_path="", template_folder="public")


def calculate_order_amount(items):
    # Replace this constant with a calculation of the order's amount
    # Calculate the order total on the server to prevent
    # people from directly manipulating the amount on the client
    return 1400

@app.route('/create-payment-intent', methods=['POST'])
def create_payment():
    try:
        data = json.loads(request.data)
        intent = stripe.PaymentIntent.create(
            amount=calculate_order_amount(data['items']),
            currency='usd'
        )

        return jsonify({
          'clientSecret': intent['client_secret']
        })
    except Exception as e:
        return jsonify(error=str(e)), 403

if __name__ == '__main__':
    app.run()
import dotenv from 'dotenv'
import got from 'got'
import Bottleneck from 'bottleneck'

// NOTE: If you get this error:
//
//    Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'bottleneck' ...
//
// it's because you haven't installed all the *optional* dependencies.
// To do that, run:
//
//    npm install --include=optional
//

import { loadPages } from '../../lib/page-data.js'
import { allVersions } from '../../lib/all-versions.js'
import languages from '../../lib/languages.js'
const port = 4002

dotenv.config()
/*
  Good local testing values are MAX_CONCURRENT=30, MIN_TIME=20
*/
const MAX_CONCURRENT = parseInt(process.env.BUILD_RECORDS_MAX_CONCURRENT || '200', 10)
const MIN_TIME = parseInt(process.env.BUILD_RECORDS_MIN_TIME || '5', 10)
const languageCode = process.env.LANGUAGE
const singleVersion = process.env.VERSION

main()

async function main() {
  const start = process.hrtime.bigint()
  const opts = {
    maxConcurrent: MAX_CONCURRENT,
    minTime: MIN_TIME,
  }
  const limiter = new Bottleneck(opts)
  const allPages = await loadPages()
  const languageCodes =
    [languageCode] ||
    Object.keys(languages)
      .filter((language) => language !== 'en')
      .map((language) => languages[language].code)
  const versions = singleVersion ? [singleVersion] : Object.keys(allVersions)

  const allPermalinks = []
  for (const language of languageCodes) {
    for (const version of versions) {
      const pages = allPages.filter(
        (page) => page.languageCode === language && page.applicableVersions.includes(version)
      )

      const permalinks = pages
        .map((page) => {
          return page.permalinks.find((permalink) => {
            return permalink.languageCode === language && permalink.pageVersion === version
          })
        })
        .map((permalink) => {
          permalink.url = `http://localhost:${port}${permalink.href}`
          return permalink
        })
      allPermalinks.push(...permalinks)
    }
  }
  allPermalinks.forEach((page) => {
    limiter.schedule(getPage, page)
  })

  limiter
    .on('idle', () => {
      const end = process.hrtime.bigint()
      console.log(`Took ${Number(end - start) / 1000000000}s`)
      console.log('All done!')
    })
    .on('error', (err) => {
      console.log('error', err)
    })
}

async function getPage(page) {
  try {
    const response = await got.get(page.url, { throwHttpErrors: false })
    if (response.statusCode !== 200) {
      console.log('Status Code:', response.statusCode, 'Page: ', page.url)
    }
  } catch (err) {
    console.error(err)
  }
}
