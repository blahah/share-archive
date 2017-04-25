#! /usr/bin/env node

const pumpify = require('pumpify')
const streamHits = require('@elastic/scrollsearch')

const url = `https://share.osf.io/api/v2/search/_search/`
const params = { query: {} }

pumpify(streamHits(url, params), process.stdout)
