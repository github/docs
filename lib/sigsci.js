/*
 * NodeJS Module
 *
 * Copyright (c) 2019-2020 Signal Sciences Corp.
 *
 * Proprietary and Confidential - Do Not Distribute
 *
 */

/* jslint node: true */
'use strict'

/* jshint bitwise: true, curly: true, eqeqeq: true */
/* jshint freeze: true, funcscope: true, futurehostile: true */
/* jshint latedef: true, noarg: true, nocomma: true, nonbsp: true */
/* jshint nonew: true, notypeof: true, singleGroups: true */
/* jshint undef: true, unused: true */
/* jshint asi:true */

import Session from 'msgpack5rpc'
import net from 'node:net'
import util from 'node:util'
import stream from 'node:stream'

// default parameters
var defaultOptions = {
  // path specifies the UDS to connect to the agent
  path: '/var/run/sigsci.sock',

  // maxPostSize - if a POST body is larger than maxPostSize
  //  the post body is NOT sent to the agent.
  maxPostSize: 100000,

  // socketTime - if the agent does not respond in this number of
  //   milliseconds, "fail open" and allow the request to pass
  socketTimeout: 100 /* milliseconds */,

  // HTTP methods that can contain a body.  Unlikely this needs to be
  // changed.
  bodyMethods: {
    POST: true,
    PUT: true,
    PATCH: true,
  },

  // TK
  anomalySize: 524288,

  // TK
  anomalyDuration: 1000 /* milliseconds */,

  // Enable debug log
  debug: false,

  // Inspect additional content types of body: ['text/plain','text/html']
  expectedContentTypes: [],

  // log function to use
  log: function (msg) {
    console.log(util.format('SIGSCI %s', msg))
  },
}

// Utility functinon to merge two objects into another.
// Used for setting default values.
// from http://stackoverflow.com/a/8625261
var merge = function () {
  var obj = {}
  var i = 0
  var il = arguments.length
  var key
  for (; i < il; i++) {
    for (key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key)) {
        obj[key] = arguments[i][key]
      }
    }
  }
  return obj
}

// rawHeadersToPairs converts a nodejs raw header list
// to a list of pairs expected in the protocol.
var rawHeadersToPairs = function (raw) {
  var out = []
  var n = raw.length
  for (var i = 0; i < n; i += 2) {
    out.push([raw[i], raw[i + 1]])
  }
  return out
}

var headersToPairs = function (raw) {
  var out = []
  for (var key in raw) {
    out.push([key, raw[key]])
  }
  return out
}

var getRequestHeaders = function (req) {
  // modern
  if (req.rawHeaders) {
    return rawHeadersToPairs(req.rawHeaders)
  }
  // old 0.10.X series
  return headersToPairs(req.headers)
}

var getPost = function (req, maxSize, bodyMethods, expectedContentTypes) {
  // can this method even have a body?
  if (bodyMethods[req.method] !== true) {
    return false
  }

  var contentLength = parseInt(req.headers['content-length'])

  // does content-length not exist or not make sense?
  if (isNaN(contentLength) || contentLength <= 0) {
    return false
  }

  // too big?
  if (contentLength >= maxSize) {
    return false
  }

  // something the agent can decode?
  return isValidContentType(req, expectedContentTypes)
}

var isValidContentType = function (req, expectedContentTypes) {
  var contentType = ('' + req.headers['content-type']).toLowerCase()

  if (
    contentType.indexOf('application/x-www-form-urlencoded') !== -1 ||
    contentType.startsWith('multipart/form-data') ||
    contentType.startsWith('application/graphql') ||
    contentType.indexOf('json') !== -1 ||
    contentType.indexOf('javascript') !== -1 ||
    contentType.indexOf('xml') !== -1
  ) {
    return true
  }

  for (var i = 0; i < expectedContentTypes.length; i++) {
    if (contentType.startsWith(expectedContentTypes[i])) {
      return true
    }
  }

  if (req.rawHeaders) {
    var headers = req.rawHeaders
    for (var i = 0, count = 0; i < headers.length; i += 2) {
      if (headers[i].toLowerCase() === 'content-type') {
        if (++count > 1) {
          return true
        }
      }
    }
  }
  return false
}

var isNotSpace = function (header) {
  return header !== ''
}

var isBlocking = function (responseCode) {
  return responseCode >= 300 && responseCode <= 599
}

var isRedirect = function (responseCode) {
  return responseCode >= 300 && responseCode <= 399
}

var splitHeader = function (line) {
  var keyVal = line.split(':')
  if (keyVal.length < 2) {
    return [keyVal[0].trim(), '']
  } else {
    return [keyVal[0].trim(), keyVal.splice(1).join(':').trim()]
  }
}

var getResponseHeaders = function (res) {
  return (res._header || '').split('\r\n').filter(isNotSpace).map(splitHeader)
}

var getRpcHeader = function (rpcResponse, header) {
  var headers = rpcResponse.RequestHeaders
  for (var i = 0; i < headers.length; i++) {
    var entry = headers[i]
    if (header === entry[0]) {
      return entry[1]
    }
  }
  return null
}

var readPostBody = function (req, cb) {
  // POST - async read
  var postBody = []
  var fnOnData = function (chunk) {
    // append the current chunk of data to the fullBody variable
    postBody.push(chunk)
  }
  var fnOnEnd = function () {
    setImmediate(function () {
      // now we need to "push back" the postbody into a stream that
      // so the raw application can continue to function no matter
      // what

      // First remove the listeners we already set up
      req.removeListener('data', fnOnData)
      req.removeListener('end', fnOnEnd)

      // make new stream, copy it over into current request obj
      var s = new stream.Readable()
      s._read = function noop() {}
      for (var attr in s) {
        req[attr] = s[attr]
      }

      // push in new body and EOF marker
      postBody = Buffer.concat(postBody)
      req.push(postBody)
      req.push(null)
      cb(postBody.toString())
    })
  }

  req.on('data', fnOnData)
  req.on('end', fnOnEnd)
}

const wafCode = {
  WAF_CONNECT_ERROR: 'waf-connect-error',
  WAF_CONNECT_TIMEOUT: 'waf-connect-timeout',
  WAF_FAIL_OPEN: 'waf-fail-open',
  WAF_OK: 'waf-ok',
  WAF_BLOCKING: 'waf-blocking',
  WAF_UNKNOWN: 'waf-unknown',
}

function Sigsci(userOptions) {
  this.options = merge(defaultOptions, userOptions)

  // Determine if we are UDS or TCP
  //
  // The default is to use UDS, so 'path' is set, and 'port' is unset.
  //
  // For TCP:
  //   'port' must be specified
  //   'host' is optional and defaults to 'localhost'
  //
  // For UDS:
  //   'path' must be specified
  //
  // So:
  //   If 'port' is set after merge, then we are TCP, and
  //   delete the 'path' property to prevent node.js confusion.
  //
  // https://nodejs.org/api/net.html#net_socket_connect_options_connectlistener
  //
  if ('port' in this.options) {
    delete this.options.path
  }
}

Sigsci.prototype.express = function () {
  var self = this
  return function (req, res, next) {
    res.on('finish', function () {
      onAfterResponse(req, res, self.options)
    })
    middleware(req, res, self.options, function (wafResponse) {
      var wafSignalCode = wafResponse.wafCode
      var rpcResponse = wafResponse.response
      if (shouldContinue(wafSignalCode)) {
        next()
        return
      } else if (wafSignalCode == wafCode.WAF_BLOCKING) {
        handleNativeBlocking(res, rpcResponse)
        return
      }
      return
    })
  }
}

Sigsci.prototype.wrap = function (next) {
  var self = this
  return function (req, res) {
    res.on('finish', function () {
      onAfterResponse(req, res, self.options)
    })
    middleware(req, res, self.options, function (wafResponse) {
      var wafSignalCode = wafResponse.wafCode
      var rpcResponse = wafResponse.response
      if (shouldContinue(wafSignalCode)) {
        next(req, res)
        return
      } else if (wafSignalCode == wafCode.WAF_BLOCKING) {
        handleNativeBlocking(res, rpcResponse)
        return
      }
      return
    })
  }
}

function handleNativeBlocking(res, rpcResponse) {
  var responseCode = rpcResponse.WAFResponse
  if (isRedirect(responseCode)) {
    var redirectHeader = getRpcHeader(rpcResponse, 'X-Sigsci-Redirect')
    if (redirectHeader) {
      res.setHeader('Location', redirectHeader)
    }
    res.statusCode = responseCode
    res.end('redirect')
  } else {
    res.writeHead(responseCode, { 'Content-Type': 'text/plain' })
    res.end('not acceptable')
  }
}

// this is to be used for HAPI 14
Sigsci.prototype.hapi = function () {
  var self = this
  return function (request, reply) {
    var req = request.raw.req
    var res = request.raw.res
    middleware(req, res, self.options, function (wafResponse) {
      var wafSignalCode = wafResponse.wafCode
      var rpcResponse = wafResponse.response
      if (shouldContinue(wafSignalCode)) {
        reply.continue()
        return
      } else if (wafSignalCode == wafCode.WAF_BLOCKING) {
        var responseCode = rpcResponse.WAFResponse
        if (isRedirect(responseCode)) {
          var redirectHeader = getRpcHeader(rpcResponse, 'X-Sigsci-Redirect')
          reply(responseCode).code(responseCode).header('Location', redirectHeader)
        } else {
          reply(rpcResponse.WAFResponse).code(rpcResponse.WAFResponse)
        }
      }
      return
    })
  }
}

Sigsci.prototype.hapi18 = function () {
  return this.hapi17()
}

// this can be used for HAPI 17 and 18
Sigsci.prototype.hapi17 = function () {
  var self = this
  return function (request, reply) {
    var req = request.raw.req
    var res = request.raw.res
    return new Promise(function (resolve) {
      middleware(req, res, self.options, function (wafResponse) {
        var wafSignalCode = wafResponse.wafCode
        var rpcResponse = wafResponse.response
        if (shouldContinue(wafSignalCode)) {
          resolve(reply.continue)
          return
        } else if (wafSignalCode == wafCode.WAF_BLOCKING) {
          var responseCode = rpcResponse.WAFResponse
          if (isRedirect(responseCode)) {
            var redirectHeader = getRpcHeader(rpcResponse, 'X-Sigsci-Redirect')
            resolve(
              reply
                .response(responseCode)
                .code(responseCode)
                .header('Location', redirectHeader)
                .takeover()
            )
          } else {
            resolve(reply.response(responseCode).code(responseCode).takeover())
          }
          return
        }
        return
      })
    })
  }
}

Sigsci.prototype.koa = function () {
  var self = this
  return function (ctx, next) {
    var req = ctx.req
    var res = ctx.res
    return new Promise(function (resolve) {
      middleware(req, res, self.options, function (wafResponse) {
        res.on('finish', function () {
          onAfterResponse(req, res, self.options)
        })
        var wafSignalCode = wafResponse.wafCode
        var rpcResponse = wafResponse.response
        if (shouldContinue(wafSignalCode)) {
          resolve(next())
          return
        } else if (wafSignalCode == wafCode.WAF_BLOCKING) {
          resolve(handleNativeBlocking(res, rpcResponse))
          return
        }
        return
      })
    })
  }
}

Sigsci.prototype.hapi17Ending = function () {
  return this.hapiEnding()
}

Sigsci.prototype.hapi18Ending = function () {
  return this.hapiEnding()
}

Sigsci.prototype.hapiEnding = function () {
  var self = this
  return function (request) {
    onAfterResponse(request.raw.req, request.raw.res, self.options)
  }
}

function shouldContinue(wafSignalCode) {
  return (
    wafSignalCode == wafCode.WAF_CONNECT_ERROR ||
    wafSignalCode == wafCode.WAF_CONNECT_TIMEOUT ||
    wafSignalCode == wafCode.WAF_FAIL_OPEN ||
    wafSignalCode == wafCode.WAF_OK ||
    wafSignalCode == wafCode.WAF_UNKNOWN
  )
}

var makePre = function (req, postBody) {
  var now = Date.now()
  var sock = req.socket

  var scheme = 'http'
  var tlsProtocol = ''
  var tlsCipher = ''
  if (typeof sock.getCipher === 'function') {
    scheme = 'https'
    var cipherStuff = sock.getCipher()
    if (cipherStuff !== null) {
      tlsProtocol = cipherStuff.version
      tlsCipher = cipherStuff.name
    }
  }

  return {
    ModuleVersion: 'sigsci-module-nodejs 2.1.1',
    ServerVersion: 'nodejs ' + process.version,
    ServerFlavor: '',
    ServerName: req.headers.host, // TBD vs. require('os').hostname(); ? why include at all
    Timestamp: Math.floor(req._sigsciRequestStart / 1000),
    NowMillis: now,
    RemoteAddr: req.connection.remoteAddress,
    Method: req.method,
    Scheme: scheme,
    URI: req.url,
    Protocol: req.httpVersion,
    TLSProtocol: tlsProtocol,
    TLSCipher: tlsCipher,
    HeadersIn: getRequestHeaders(req),
    PostBody: postBody,
  }
}

var middleware = function (req, res, options, processWafResponse) {
  req._sigsciRequestStart = Date.now()
  req._sigsciBytesWritten = req.socket.bytesWritten

  // GET or other method without body
  if (!getPost(req, options.maxPostSize, options.bodyMethods, options.expectedContentTypes)) {
    preRequest(req, '', options, processWafResponse)
    return
  }

  readPostBody(req, function (postBody) {
    preRequest(req, postBody, options, processWafResponse)
    return
  })
}

var preRequest = function (req, postBody, options, processWafResponse) {
  var client = new net.Socket()

  client.setTimeout(options.socketTimeout)

  client.connect(options, function () {
    req._sigsciSession = new Session()
    req._sigsciSession.attach(client, client)
    req._sigsciClient = client

    var callback = function (err, rpcResponse) {
      var wafResponse = onPre(req, err, options, rpcResponse) // this is resolved
      processWafResponse(wafResponse)
    }
    req._sigsciSession.request('RPC.PreRequest', [makePre(req, postBody)], callback)
  })

  client.on('error', function (err) {
    options.log(util.format('PreRequest connection error ' + JSON.stringify(err)))
    client.destroy() // kill client after server's response
    processWafResponse(new WAFResponse(wafCode.WAF_CONNECT_ERROR))
  })

  client.on('timeout', function (err) {
    // err is typically undefined here since its a timeout
    // need to touch it to prevent lint error
    err = null
    options.log(util.format('PreRequest timeout after %d ms', Date.now() - req._sigsciRequestStart))
    client.destroy() // kill client after server's response
    processWafResponse(new WAFResponse(wafCode.WAF_CONNECT_TIMEOUT))
  })
}

var onPre = function (req, err, options, rpcResponse) {
  req._sigsciClient.destroy()

  if (err) {
    // fail open.
    options.log(util.format('onPre error: %s', err))
    return new WAFResponse(wafCode.WAF_FAIL_OPEN)
  }

  // save agent response since we'll use it later.
  req.SigSciAgent = rpcResponse
  var responseCode = rpcResponse.WAFResponse
  if (responseCode == 200) {
    return new WAFResponse(wafCode.WAF_OK, rpcResponse)
  }
  if (isBlocking(responseCode)) {
    return new WAFResponse(wafCode.WAF_BLOCKING, rpcResponse)
  }
  return new WAFResponse(wafCode.WAF_UNKNOWN, rpcResponse)
}

var onAfterResponse = function (req, res, options) {
  var obj
  var rpcResponse = req.SigSciAgent
  if (!rpcResponse) {
    // something bad happened
    return
  }

  var duration = Date.now() - req._sigsciRequestStart
  if (duration < 0) {
    duration = 0
  }

  var headers = getResponseHeaders(res)
  var contentLength = -1
  for (var i = 0; i < headers.length; i++) {
    if (headers[i][0].toLowerCase() === 'content-length') {
      contentLength = parseInt(headers[i][1])
    }
  }
  if (contentLength === -1 && req.socket && req.socket.bytesWritten) {
    contentLength = req.socket.bytesWritten - req._sigsciBytesWritten
  }
  if (options.debug) {
    options.log(
      util.format('after,%s,%s,%s', req._sigsciRequestStart, Date.now(), rpcResponse.RequestID)
    )
  }
  if (rpcResponse.RequestID) {
    obj = {
      WAFResponse: rpcResponse.WAFResponse,
      RequestID: rpcResponse.RequestID,
      ResponseCode: res.statusCode,
      ResponseMillis: duration,
      ResponseSize: contentLength,
      HeadersOut: getResponseHeaders(res),
    }
    send(req, res, 'RPC.UpdateRequest', obj, options, onUpdateResponse, null)
    return
  }
  // full post response
  if (
    res.statusCode >= 300 ||
    duration > options.anomalyDuration ||
    contentLength > options.anomalySize
  ) {
    obj = makePre(req, '')
    obj.WAFResponse = rpcResponse.WAFResponse
    obj.ResponseCode = res.statusCode
    obj.ResponseMillis = duration
    obj.ResponseSize = contentLength
    obj.HeadersOut = getResponseHeaders(res)

    // do update or post request
    send(req, res, 'RPC.PostRequest', obj, options, onPostResponse, null)
  }
  //
  // no update or post request --> nothing to do
  //
}

// onUpdateResponse is triggered after a RPC.UpdateRequest
var onUpdateResponse = function (options, err /* , rpcResponse */) {
  if (err !== null && err !== undefined) {
    options.log(util.format('RPC.UpdateResponse error: %s', err))
  }
}

// onPostResponse is triggered after a RPC.PostRequest
var onPostResponse = function (options, err /* , rpcResponse */) {
  if (err !== null && err !== undefined) {
    options.log(util.format('RPC.PostResponse error: %s', err))
  }
}

var send = function (req, res, method, obj, options, callback, onerror) {
  req._sigsciPostRequestStart = Date.now()
  var client = new net.Socket()
  var log = options.log
  var debug = options.debug

  var destroyCallback = function (err) {
    if (!client.destroyed) {
      client.destroy()
    }
    if (callback) {
      callback(options, err)
    }
  }

  client.setTimeout(options.socketTimeout)
  client.connect(options, function () {
    var session = new Session()
    session.attach(client, client)
    session.request(method, [obj], destroyCallback)
  })

  client.on('error', function (err) {
    log(util.format('Update/PostRequest connection error: %s', err.message))
    client.destroy() // kill client after server's response
    if (onerror) {
      onerror(req, res)
    }
  })

  client.on('timeout', function (err) {
    var duration = Date.now() - req._sigsciPostRequestStart
    if (debug) {
      var rpcResponse = req.SigSciAgent
      var requestId = ''
      if (rpcResponse) {
        requestId = rpcResponse.RequestID
      }
      log(
        util.format(
          'send,%s,%s,%s,%s',
          req._sigsciRequestStart,
          Date.now(),
          requestId,
          req._sigsciPostRequestStart
        )
      )
    }
    log(util.format('Update/PostRequest timeout after %d ms', duration))
    client.destroy() // kill client after server's response
  })
}

function WAFResponse(wafCode, response) {
  this.wafCode = wafCode
  this.response = response
}

export default Sigsci
