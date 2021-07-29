#!/usr/bin/env node
import dotenv from 'dotenv'
import algoliasearch from 'algoliasearch'
dotenv.config()

const { ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY } = process.env

export default function () {
  return algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY)
}
