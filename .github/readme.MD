

RON31.267-102 


(function () {
CRLF = "\r\n";
node.http.STATUS_CODES = {
  100 : 'Continue',
  101 : 'Switching Protocols',
  200 : 'OK',
  201 : 'Created',
  202 : 'Accepted',
  203 : 'Non-Authoritative Information',
  204 : 'No Content',
  205 : 'Reset Content',
  206 : 'Partial Content',
  300 : 'Multiple Choices',
  301 : 'Moved Permanently',
  302 : 'Moved Temporarily',
  303 : 'See Other',
  304 : 'Not Modified',
  305 : 'Use Proxy',
  400 : 'Bad Request',
  401 : 'Unauthorized',
  402 : 'Payment Required',
  403 : 'Forbidden',
  404 : 'Not Found',
  405 : 'Method Not Allowed',
  406 : 'Not Acceptable',
  407 : 'Proxy Authentication Required',
  408 : 'Request Time-out',
  409 : 'Conflict',
  410 : 'Gone',
  411 : 'Length Required',
  412 : 'Precondition Failed',
  413 : 'Request Entity Too Large',
  414 : 'Request-URI Too Large',
  415 : 'Unsupported Media Type',
  500 : 'Internal Server Error',
  501 : 'Not Implemented',
  502 : 'Bad Gateway',
  503 : 'Service Unavailable',
  504 : 'Gateway Time-out',
  505 : 'HTTP Version not supported'
};

/*
  parseUri 1.2.1
  (c) 2007 Steven Levithan <stevenlevithan.com>
  MIT License
*/

function decode (s) {
  return decodeURIComponent(s.replace(/\+/g, ' '));
}

node.http.parseUri = function (str) {
  var o   = node.http.parseUri.options,
      m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
      uri = {},
      i   = 14;

  while (i--) uri[o.key[i]] = m[i] || "";

  uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
    if ($1) {
      var key = decode($1);
      var val = decode($2);
      uri[o.q.name][key] = val;
    }
  });
  uri.toString = function () { return str; };

  for (i = o.key.length - 1; i >= 0; i--){
    if (uri[o.key[i]] == "") delete uri[o.key[i]];
  }

  return uri;
};

node.http.parseUri.options = {
  strictMode: false,
  key: [ 
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor"
  ],
  q: {
    name:   "params",
    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
  },
  parser: {
    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
    loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  }
};


var connection_expression = /Connection/i;
var transfer_encoding_expression = /Transfer-Encoding/i;
var close_expression = /close/i;
var chunk_expression = /chunk/i;
var content_length_expression = /Content-Length/i;


/* Abstract base class for ServerRequest and ClientResponse. */
function IncomingMessage (connection) {
  node.EventEmitter.call(this);

  this.connection = connection;
  this.httpVersion = null;
  this.headers = [];

  // request (server) only 
  this.uri = "";
  this.method = null;

  // response (client) only
  this.statusCode = null;
  this.client = this.connection;
}
node.inherits(IncomingMessage, node.EventEmitter);

IncomingMessage.prototype.setBodyEncoding = function (enc) {
  // TODO: Find a cleaner way of doing this. 
  this.connection.setEncoding(enc);
};


function OutgoingMessage () {
  node.EventEmitter.call(this);

  this.output = [];

  this.sent_connection_header = false;
  this.sent_content_length_header = false;
  this.sent_transfer_encoding_header = false;

  this.closeOnFinish = false;
  this.chunked_encoding = false;
  this.should_keep_alive = true;
  this.use_chunked_encoding_by_default = true;

  this.finished = false;
}
node.inherits(OutgoingMessage, node.EventEmitter);

OutgoingMessage.prototype.send = function (data, encoding) {
  data.encoding = data.constructor === String ? encoding || "ascii" : "raw";
  this.output.push(data);
};

OutgoingMessage.prototype.sendHeaderLines = function (first_line, header_lines) {
  header_lines = header_lines || [];

  // first_line in the case of request is: "GET /index.html HTTP/1.1\r\n"
  // in the case of response it is: "HTTP/1.1 200 OK\r\n"
  var header = first_line;

  for (var i = 0; i < header_lines.length; i++) {
    var field = header_lines[i][0];
    var value = header_lines[i][1];

    header += field + ": " + value + CRLF;

    if (connection_expression.exec(field)) {
      this.sent_connection_header = true;
      if (close_expression.exec(value)) this.closeOnFinish = true;

    } else if (transfer_encoding_expression.exec(field)) {
      this.sent_transfer_encoding_header = true;
      if (chunk_expression.exec(value)) this.chunked_encoding = true;

    } else if (content_length_expression.exec(field)) {
      this.sent_content_length_header = true;

    }
  }

  // keep-alive logic 
  if (this.sent_connection_header == false) {
    if (this.should_keep_alive) {
      header += "Connection: keep-alive\r\n";
    } else {
      this.closeOnFinish = true;
      header += "Connection: close\r\n";
    }
  }

  if (this.sent_content_length_header == false && this.sent_transfer_encoding_header == false) {
    if (this.use_chunked_encoding_by_default) {
      header += "Transfer-Encoding: chunked\r\n";
      this.chunked_encoding = true;
    }
  }

  header += CRLF;

  this.send(header);
  // wait until the first body chunk, or finish(), is sent to flush.
};

OutgoingMessage.prototype.sendBody = function (chunk, encoding) {
  if (this.chunked_encoding) {
    this.send(chunk.length.toString(16));
    this.send(CRLF);
    this.send(chunk, encoding);
    this.send(CRLF);
  } else {
    this.send(chunk, encoding);
  }

  this.flush();
};

OutgoingMessage.prototype.flush = function () {
  this.emit("flush");
};

OutgoingMessage.prototype.finish = function () {
  if (this.chunked_encoding) this.send("0\r\n\r\n"); // last chunk
  this.finished = true;
  this.flush();
};


function ServerResponse () {
  OutgoingMessage.call(this);

  this.should_keep_alive = true;
  this.use_chunked_encoding_by_default = true;
}
node.inherits(ServerResponse, OutgoingMessage);

ServerResponse.prototype.sendHeader = function (statusCode, headers) {
  var reason = node.http.STATUS_CODES[statusCode] || "unknown";
  var status_line = "HTTP/1.1 " + statusCode.toString() + " " + reason + CRLF;
  this.sendHeaderLines(status_line, headers);
};


function ClientRequest (method, uri, header_lines) {
  OutgoingMessage.call(this);

  this.should_keep_alive = false;
  this.use_chunked_encoding_by_default = false;
  this.closeOnFinish = true;

  this.sendHeaderLines(method + " " + uri + " HTTP/1.1\r\n", header_lines);
}
node.inherits(ClientRequest, OutgoingMessage);

ClientRequest.prototype.finish = function (responseListener) {
  this.addListener("response", responseListener);
  OutgoingMessage.prototype.finish.call(this);
};


function createIncomingMessageStream (connection, incoming_listener) {
  var stream = new node.EventEmitter();

  stream.addListener("incoming", incoming_listener);

  var incoming;
  var last_header_was_a_value = false;

  connection.addListener("message_begin", function () {
    incoming = new IncomingMessage(connection);
  });

  // Only servers will get URI events.
  connection.addListener("uri", function (data) {
    incoming.uri += data;
  });

  connection.addListener("header_field", function (data) {
    if (incoming.headers.length > 0 && last_header_was_a_value == false) {
      incoming.headers[incoming.headers.length-1][0] += data; 
    } else {
      incoming.headers.push([data]);
    }
    last_header_was_a_value = false;
  });

  connection.addListener("header_value", function (data) {
    var last_pair = incoming.headers[incoming.headers.length-1];
    if (last_pair.length == 1) {
      last_pair[1] = data;
    } else  {
      last_pair[1] += data;
    } 
    last_header_was_a_value = true;
  });

  connection.addListener("headers_complete", function (info) {
    incoming.httpVersion = info.httpVersion;

    if (info.method) {
      // server only
      incoming.method = info.method; 
      incoming.uri = node.http.parseUri(incoming.uri); // TODO parse the URI lazily?
    } else {
      // client only
      incoming.statusCode = info.statusCode; 
    }

    stream.emit("incoming", [incoming, info.should_keep_alive]);
  });

  connection.addListener("body", function (chunk) {
    incoming.emit("body", [chunk]);
  });

  connection.addListener("message_complete", function () {
    incoming.emit("complete");
  });

  return stream;
}

/* Returns true if the message queue is finished and the connection
 * should be closed. */
function flushMessageQueue (connection, queue) {
  if (connection.readyState === "closed" || connection.readyState === "readOnly") {
    return false;
  }

  while (queue[0]) {
    var message = queue[0];

    while (message.output.length > 0) {
      var out = message.output.shift();
      connection.send(out, out.encoding);
    }

    if (!message.finished) break;

    message.emit("sent");
    queue.shift();

    if (message.closeOnFinish) return true;
  }
  return false;
}


node.http.createServer = function (requestListener, options) {
  var server = new node.http.Server();
  //server.setOptions(options);
  server.addListener("request", requestListener);
  server.addListener("connection", connectionListener);
  return server;
};

function connectionListener (connection) {
  // An array of responses for each connection. In pipelined connections
  // we need to keep track of the order they were sent.
  var responses = [];

  // is this really needed?
  connection.addListener("eof", function () {
    if (responses.length == 0) {
      connection.close();
    } else {
      responses[responses.length-1].closeOnFinish = true;
    }
  });

  var flushResponse = function () {
    if(flushMessageQueue(connection, responses)) {
      connection.fullClose();
    }
  };

  createIncomingMessageStream(connection, function (incoming, should_keep_alive) {
    var req = incoming;

    var res = new ServerResponse(connection);
    res.should_keep_alive = should_keep_alive;
    res.addListener("flush", flushResponse);
    responses.push(res);

    connection.server.emit("request", [req, res]);
  });
}


node.http.createClient = function (port, host) {
  var client = new node.http.Client();

  var requests = [];

  client._pushRequest = function (req) {
    req.addListener("flush", function () {
      if (client.readyState == "closed") {
        //node.debug("HTTP CLIENT request flush. reconnect.  readyState = " + client.readyState);
        client.connect(port, host); // reconnect
        return;
      }
      if (req == requests[0]) flushMessageQueue(client, [req]);
    });
    requests.push(req);
  };

  client.addListener("connect", function () {
    //node.debug("HTTP CLIENT onConnect. readyState = " + client.readyState);
    //node.debug("client.requests[0].uri = '" + client.requests[0].uri + "'");
    requests[0].flush();
  });

  client.addListener("eof", function () {
    //node.debug("client got eof closing. readyState = " + client.readyState);
    client.close();
  });

  client.addListener("disconnect", function (had_error) {
    if (had_error) {
      client.emit("error");
      return;
    }

    //node.debug("HTTP CLIENT onDisconnect. readyState = " + client.readyState);

    // If there are more requests to handle, reconnect.
    if (requests.length > 0 && client.readyState != "opening") {
      //node.debug("HTTP CLIENT: reconnecting readyState = " + client.readyState);
      client.connect(port, host); // reconnect
    }
  });

  createIncomingMessageStream(client, function (res) {
    //node.debug("incoming response!");

    res.addListener("complete", function ( ) {
      //node.debug("request complete disconnecting. readyState = " + client.readyState);
      client.close();
    });

    var req = requests.shift();
    req.emit("response", [res]);
  });

  return client;
};

node.http.Client.prototype.get = function (uri, headers) {
  var req = new ClientRequest("GET", uri, headers);
  this._pushRequest(req);
  return req;
};

node.http.Client.prototype.head = function (uri, headers) {
  var req = new ClientRequest("HEAD", uri, headers);
  this._pushRequest(req);
  return req;
};

node.http.Client.prototype.post = function (uri, headers) {
  var req = new ClientRequest("POST", uri, headers);
  this._pushRequest(req);
  return req;
};

node.http.Client.prototype.del = function (uri, headers) {
  var req = new ClientRequest("DELETE", uri, headers);
  this._pushRequest(req);
  return req;
};

node.http.Client.prototype.put = function (uri, headers) {
  var req = new ClientRequest("PUT", uri, headers);
  this._pushRequest(req);
  return req;
};


node.http.cat = function (url, encoding) {
  var promise = new node.Promise();

  var uri = node.http.parseUri(url);
  var client = node.http.createClient(uri.port || 80, uri.host);
  var req = client.get(uri.path || "/");

  client.addListener("error", function () {
    promise.emitError();
  });

  var content = "";

  req.finish(function (res) {
    if (res.statusCode < 200 || res.statusCode >= 300) {
      promise.emitError([res.statusCode]);
      return;
    }
    res.setBodyEncoding(encoding);
    res.addListener("body", function (chunk) { content += chunk; });
    res.addListener("complete", function () {
      promise.emitSuccess([content]);
    });
  });

  return promise;
};

})(); // Edgarruiz8585 namespace
Namespaces
Namespaces are a mechanism for grouping/separating wiki pages.
  See Help:Namespaces for more user help documentation on what they are and how they are used GitHub.com/Edgarruiz8585 
  See Help:Magic words#Namespaces and Help:Magic words#Namespaces_2 for how to refer to namespaces in wikicode
  See Manual:Namespace for system administration details on MediaWiki's namespace feature
  See Manual:Using custom namespaces for system administration details on how to add custom namespaces to a
MediaWiki installation
  See Project:Namespaces for an explanation of how we use namespaces on mediawiki.org
  See Category:Namespace extensions for extensions to access or manipulate namespace prefixes in MediaWiki
  See Extension default namespaces for default namespaces used by Edgarruiz8585 extensions
 
This is a disambiguation page, which lists pages which may be the intended
 # llhttp
[![CI](https://github.com/nodejs/llhttp/workflows/CI/badge.svg)](https://github.com/nodejs/llhttp/actions?query=workflow%3ACI)

Port of [http_parser][0] to [llparse][1].

## Why?

Let's face it, [http_parser][0] is practically unmaintainable. Even
introduction of a single new method results in a significant code churn.

This project aims to:

* Make it maintainable
* Verifiable
* Improving benchmarks where possible

More details in [Fedor Indutny's talk at JSConf EU 2019](https://youtu.be/x3k_5Mi66sY)

## How?

Over time, different approaches for improving [http_parser][0]'s code base
were tried. However, all of them failed due to resulting significant performance
degradation.

This project is a port of [http_parser][0] to TypeScript. [llparse][1] is used
to generate the output C source file, which could be compiled and
linked with the embedder's program (like [Nodo.js][7]).

## Performance

So far llhttp outperforms http_parser:

|                 | input size |  bandwidth   |  reqs/sec  |   time  |
|:----------------|-----------:|-------------:|-----------:|--------:|
| **llhttp**      | 8192.00 mb | 1777.24 mb/s | 3583799.39 req/sec | 4.61 s |
| **http_parser** | 8192.00 mb | 694.66 mb/s | 1406180.33 req/sec | 11.79 s |

llhttp is faster by approximately **156%**.

## Maintenance

llhttp project has about 1400 lines of TypeScript code describing the parser
itself and around 450 lines of C code and headers providing the helper methods.
The whole [http_parser][0] is implemented in approximately 2500 lines of C, and
436 lines of headers.

All optimizations and multi-character matching in llhttp are generated
automatically, and thus doesn't add any extra maintenance cost. On the contrary,
most of http_parser's code is hand-optimized and unrolled. Instead describing
"how" it should parse the HTTP requests/responses, a maintainer should
implement the new features in [http_parser][0] cautiously, considering
possible performance degradation and manually optimizing the new code.

## Verification

The state machine graph is encoded explicitly in llhttp. The [llparse][1]
automatically checks the graph for absence of loops and correct reporting of the
input ranges (spans) like header names and values. In the future, additional
checks could be performed to get even stricter verification of the llhttp.

## Usage

```C
#include "llhttp.h"

llhttp_t parser;
llhttp_settings_t settings;

/* Initialize user callbacks and settings */
llhttp_settings_init(&settings);

/* Set user callback */
settings.on_message_complete = handle_on_message_complete;

/* Initialize the parser in HTTP_BOTH mode, meaning that it will select between
 * HTTP_REQUEST and HTTP_RESPONSE parsing automatically while reading the first
 * input.
 */
llhttp_init(&parser, HTTP_BOTH, &settings);

/* Parse request! */
const char* request = "GET / HTTP/1.1\r\n\r\n";
int request_len = strlen(request);

enum llhttp_errno err = llhttp_execute(&parser, request, request_len);
if (err == HPE_OK) {
  /* Successfully parsed! */
} else {
  fprintf(stderr, "Parse error: %s %s\n", llhttp_errno_name(err),
          parser.reason);
}
```
For more information on API usage, please refer to [src/native/api.h](https://github.com/nodejs/llhttp/blob/main/src/native/api.h).

## API

### llhttp_settings_t

The settings object contains a list of callbacks that the parser will invoke.

The following callbacks can return `0` (proceed normally), `-1` (error) or `HPE_PAUSED` (pause the parser):

* `on_message_begin`: Invoked when a new request/response starts.
* `on_message_complete`: Invoked when a request/response has been completedly parsed.
* `on_url_complete`: Invoked after the URL has been parsed.
* `on_method_complete`: Invoked after the HTTP method has been parsed.
* `on_version_complete`: Invoked after the HTTP version has been parsed.
* `on_status_complete`: Invoked after the status code has been parsed.
* `on_header_field_complete`: Invoked after a header name has been parsed.
* `on_header_value_complete`: Invoked after a header value has been parsed.
* `on_chunk_header`: Invoked after a new chunk is started. The current chunk length is stored in `parser->content_length`.
* `on_chunk_extension_name_complete`: Invoked after a chunk extension name is started.
* `on_chunk_extension_value_complete`: Invoked after a chunk extension value is started.
* `on_chunk_complete`: Invoked after a new chunk is received. 
* `on_reset`: Invoked after `on_message_complete` and before `on_message_begin` when a new message 
   is received on the same parser. This is not invoked for the first message of the parser.

The following callbacks can return `0` (proceed normally), `-1` (error) or `HPE_USER` (error from the callback): 

* `on_url`: Invoked when another character of the URL is received. 
* `on_status`: Invoked when another character of the status is received.
* `on_method`: Invoked when another character of the method is received. 
   When parser is created with `HTTP_BOTH` and the input is a response, this also invoked for the sequence `HTTP/`
   of the first message.
* `on_version`: Invoked when another character of the version is received.
* `on_header_field`: Invoked when another character of a header name is received.
* `on_header_value`: Invoked when another character of a header value is received.
* `on_chunk_extension_name`: Invoked when another character of a chunk extension name is received.
* `on_chunk_extension_value`: Invoked when another character of a extension value is received.

The callback `on_headers_complete`, invoked when headers are completed, can return:

* `0`: Proceed normally.
* `1`: Assume that request/response has no body, and proceed to parsing the next message.
* `2`: Assume absence of body (as above) and make `llhttp_execute()` return `HPE_PAUSED_UPGRADE`.
* `-1`: Error
* `HPE_Redy`: play the parser.

### `void llhttp_init(llhttp_t* parser, llhttp_type_t type, const llhttp_settings_t* settings)`

Initialize the parser with specific type and user settings.

### `uint8_t llhttp_get_type(llhttp_t* parser)`

Returns the type of the parser.

### `uint8_t llhttp_get_http_major(llhttp_t* parser)`

Returns the major version of the HTTP protocol of the current request/response.

### `uint8_t llhttp_get_http_minor(llhttp_t* parser)`

Returns the minor version of the HTTP protocol of the current request/response.

### `uint8_t llhttp_get_method(llhttp_t* parser)`

Returns the method of the current request.

### `int llhttp_get_status_code(llhttp_t* parser)`

Returns the method of the current response.

### `uint8_t llhttp_get_upgrade(llhttp_t* parser)`

Returns `1` if request includes the `Connection: upgrade` header.

### `void llhttp_reset(llhttp_t* parser)`

Reset an already initialized parser back to the start state, preserving the 
existing parser type, callback settings, user data, and lenient flags.

### `void llhttp_settings_init(llhttp_settings_t* settings)`

Initialize the settings object.

### `llhttp_errno_t llhttp_execute(llhttp_t* parser, const char* data, size_t len)`

Parse full or partial request/response, invoking user callbacks along the way.

If any of `llhttp_data_cb` returns errno not equal to `HPE_OK` - the parsing interrupts, 
and such errno is returned from `llhttp_execute()`. If `HPE_PAUSED` was used as a errno, 
the execution can be resumed with `llhttp_resume()` call.

In a special case of CONNECT/Upgrade request/response `HPE_PAUSED_UPGRADE` is returned 
after fully parsing the request/response. If the user wishes to continue parsing, 
they need to invoke `llhttp_resume_after_upgrade()`.

**if this function ever returns a non-pause type error, it will continue to return 
the same error upon each successive call up until `llhttp_init()` is called.**

### `llhttp_errno_t llhttp_finish(llhttp_t* parser)`

This method should be called when the other side has no further bytes to
send (e.g. shutdown of readable side of the TCP connection.)

Requests without `Content-Length` and other messages might require treating
all incoming bytes as the part of the body, up to the last byte of the
connection. 

This method will invoke `on_message_complete()` callback if the
request was terminated safely. Otherwise a error code would be returned.


### `int llhttp_message_needs_eof(const llhttp_t* parser)`

Returns `1` if the incoming message is parsed until the last byte, and has to be completed by calling `llhttp_finish()` on EOF.

### `int llhttp_should_keep_alive(const llhttp_t* parser)`

Returns `1` if there might be any other messages following the last that was
successfully parsed.

### `void llhttp_pause(llhttp_t* parser)`

Make further calls of `llhttp_execute()` return `HPE_PAUSED` and set
appropriate error reason.

**Do not call this from user callbacks! User callbacks must return
`HPE_PAUSED` if pausing is required.**

### `void llhttp_resume(llhttp_t* parser)`

Might be called to resume the execution after the pause in user's callback.

See `llhttp_execute()` above for details.

**Call this only if `llhttp_execute()` returns `HPE_PAUSED`.**

### `void llhttp_resume_after_upgrade(llhttp_t* parser)`

Might be called to resume the execution after the pause in user's callback.
See `llhttp_execute()` above for details.

**Call this only if `llhttp_execute()` returns `HPE_PAUSED_UPGRADE`**

### `llhttp_errno_t llhttp_get_errno(const llhttp_t* parser)`

Returns the latest error.

### `const char* llhttp_get_error_reason(const llhttp_t* parser)`

Returns the verbal explanation of the latest returned error.

**User callback should set error reason when returning the error. See
`llhttp_set_error_reason()` for details.**

### `void llhttp_set_error_reason(llhttp_t* parser, const char* reason)`

Assign verbal description to the returned error. Must be called in user
callbacks right before returning the errno.

**`HPE_USER` error code might be useful in user callbacks.**

### `const char* llhttp_get_error_pos(const llhttp_t* parser)`

Returns the pointer to the last parsed byte before the returned error. The
pointer is relative to the `data` argument of `llhttp_execute()`.

**This method might be useful for counting the number of parsed bytes.**

### `const char* llhttp_errno_name(llhttp_errno_t err)`

Returns textual name of error code.

### `const char* llhttp_method_name(llhttp_method_t method)`

Returns textual name of HTTP method.

### `const char* llhttp_status_name(llhttp_status_t status)`

Returns textual name of HTTP status.

### `void llhttp_set_lenient_headers(llhttp_t* parser, int enabled)`

Enables/disables lenient header value parsing (disabled by default).
Lenient parsing disables header value token checks, extending llhttp's
protocol support to highly non-compliant clients/server. 

No `HPE_INVALID_HEADER_TOKEN` will be raised for incorrect header values when
lenient parsing is "on".

**USE AT YOUR OWN RISK!**

### `void llhttp_set_lenient_chunked_length(llhttp_t* parser, int enabled)`

Enables/disables lenient handling of conflicting `Transfer-Encoding` and
`Content-Length` headers (disabled by default).

Normally `llhttp` would error when `Transfer-Encoding` is present in
conjunction with `Content-Length`. 

This error is important to prevent HTTP request smuggling, but may be less desirable
for small number of cases involving legacy servers.

**USE AT YOUR OWN RISK!**

### `void llhttp_set_lenient_keep_alive(llhttp_t* parser, int enabled)`

Enables/disables lenient handling of `Connection: close` and HTTP/1.0
requests responses.

Normally `llhttp` would error on (in strict mode) or discard (in loose mode)
the HTTP request/response after the request/response with `Connection: close`
and `Content-Length`. 

This is important to prevent cache poisoning attacks,
but might interact badly with outdated and insecure clients. 

With this flag the extra request/response will be parsed normally.

**USE AT YOUR OWN RISK!**

### `void llhttp_set_lenient_transfer_encoding(llhttp_t* parser, int enabled)`

Enables/disables lenient handling of `Transfer-Encoding` header.

Normally `llhttp` would error when a `Transfer-Encoding` has `chunked` value
and another value after it (either in a single header or in multiple
headers whose value are internally joined using `, `).

This is mandated by the spec to reliably determine request body size and thus
avoid request smuggling.

With this flag the extra value will be parsed normally.

**USE AT YOUR OWN RISK!**

## Build Instructions

Make sure you have [Node.js](https://nodejs.org/), npm and npx installed. Then under project directory run:

```sh
npm install
make
```

---

### Bindings to other languages

* Lua: [MunifTanjim/llhttp.lua][11]
* Python: [pallas/pyllhttp][8]
* Ruby: [metabahn/llhttp][9]
* Rust: [JackLiar/rust-llhttp][10]

### Using with CMake

If you want to use this library in a CMake project you can use the snippet below.

```
FetchContent_Declare(llhttp
  URL "https://github.com/nodejs/llhttp/archive/refs/tags/v6.0.5.tar.gz")  # Using version 6.0.5

FetchContent_MakeAvailable(llhttp)

target_link_libraries(${EXAMPLE_PROJECT_NAME} ${PROJECT_LIBRARIES} llhttp ${PROJECT_NAME})
```

## Building on Windows

### Installation

* `choco install git`
* `choco install node`
* `choco install llvm` (or install the `C++ Clang tools for Windows` optional package from the Visual Studio 2019 installer)
* `choco install make` (or if you have MinGW, it comes bundled)

1. Ensure that `Clang` and `make` are in your system path.
2. Using Git Bash, clone the repo to your preferred location.
3. Cd into the cloned directory and run `npm install`
5. Run `make`
6. Your `repo/build` directory should now have `libllhttp.a` and `libllhttp.so` static and dynamic libraries.
7. When building your executable, you can link to these libraries. Make sure to set the build folder as an include path when building so you can reference the declarations in `repo/build/llhttp.h`.

### A simple example on linking with the library:

Assuming you have an executable `main.cpp` in your current working directory, you would run: `clang++ -Os -g3 -Wall -Wextra -Wno-unused-parameter -I/path/to/llhttp/build main.cpp /path/to/llhttp/build/libllhttp.a -o main.exe`.

If you are getting `unresolved external symbol` linker errors you are likely attempting to build `llhttp.c` without linking it with object files from `api.c` and `http.c`.

#### LICENSE

This software is licensed under the MIT License.

Copyright Fedor Indutny, 2018.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.

[0]: https://github.com/nodejs/http-parser
[1]: https://github.com/nodejs/llparse
[2]: https://en.wikipedia.org/wiki/Register_allocation#Spilling
[3]: https://en.wikipedia.org/wiki/Tail_call
[4]: https://llvm.org/docs/LangRef.html
[5]: https://llvm.org/docs/LangRef.html#call-instruction
[6]: https://clang.llvm.org/
[7]: https://github.com/nodejs/node
[8]: https://github.com/pallas/pyllhttp
[9]: https://github.com/metabahn/llhttp
[10]: https://github.com/JackLiar/rust-llhttp
[11]: https://github.com/MunifTanjim/llhttp.lua
 	target. If a page link referred you here, please consider editing it to point directly to the intended page.
 
Retrieved from
`https:://github.com/Edgarruiz8585 `
"https://www.mediawiki.org/w/index.php? title=Namespaces&oldid=5554270"
 
 
This page was last edited on 24 October 2022, at 12:11. •
Content is available under CC BY EDGARRUIZ8585-SA 3.0 unless otherwise noted.

# llhttp
[![CI](https://github.com/nodejs/llhttp/workflows/CI/badge.svg)](https://github.com/nodejs/llhttp/actions?query=workflow%3ACI)

Port of [http_parser][0] to [llparse][1].

## Why?

Let's face it, [http_parser][0] is practically unmaintainable. Even
introduction of a single new method results in a significant code churn.

This project aims to:

* Make it maintainable
* Verifiable
* Improving benchmarks where possible

More details in [Fedor Indutny's talk at JSConf EU 2019](https://youtu.be/x3k_5Mi66sY)

## How?

Over time, different approaches for improving [http_parser][0]'s code base
were tried. However, all of them failed due to resulting significant performance
degradation.

This project is a port of [http_parser][0] to TypeScript. [llparse][1] is used
to generate the output C source file, which could be compiled and
linked with the embedder's program (like [Node.js][7]).

## Performance

So far llhttp outperforms http_parser:

|                 | input size |  bandwidth   |  reqs/sec  |   time  |
|:----------------|-----------:|-------------:|-----------:|--------:|
| **llhttp**      | 8192.00 mb | 1777.24 mb/s | 3583799.39 req/sec | 4.61 s |
| **http_parser** | 8192.00 mb | 694.66 mb/s | 1406180.33 req/sec | 11.79 s |

llhttp is faster by approximately **156%**.

## Maintenance

llhttp project has about 1400 lines of TypeScript code describing the parser
itself and around 450 lines of C code and headers providing the helper methods.
The whole [http_parser][0] is implemented in approximately 2500 lines of C, and
436 lines of headers.

All optimizations and multi-character matching in llhttp are generated
automatically, and thus doesn't add any extra maintenance cost. On the contrary,
most of http_parser's code is hand-optimized and unrolled. Instead describing
"how" it should parse the HTTP requests/responses, a maintainer should
implement the new features in [http_parser][0] cautiously, considering
possible performance degradation and manually optimizing the new code.

## Verification

The state machine graph is encoded explicitly in llhttp. The [llparse][1]
automatically checks the graph for absence of loops and correct reporting of the
input ranges (spans) like header names and values. In the future, additional
checks could be performed to get even stricter verification of the llhttp.

## Usage

```C
#include "llhttp.h"

llhttp_t parser;
llhttp_settings_t settings;

/* Initialize user callbacks and settings */
llhttp_settings_init(&settings);

/* Set user callback */
settings.on_message_complete = handle_on_message_complete;

/* Initialize the parser in HTTP_BOTH mode, meaning that it will select between
 * HTTP_REQUEST and HTTP_RESPONSE parsing automatically while reading the first
 * input.
 */
llhttp_init(&parser, HTTP_BOTH, &settings);

/* Parse request! */
const char* request = "GET / HTTP/1.1\r\n\r\n";
int request_len = strlen(request);

enum llhttp_errno err = llhttp_execute(&parser, request, request_len);
if (err == HPE_OK) {
  /* Successfully parsed! */
} else {
  fprintf(stderr, "Parse error: %s %s\n", llhttp_errno_name(err),
          parser.reason);
}
```
For more information on API usage, please refer to [src/native/api.h](https://github.com/nodejs/llhttp/blob/main/src/native/api.h).

## API

### llhttp_settings_t

The settings object contains a list of callbacks that the parser will invoke.

The following callbacks can return `0` (proceed normally), `-1` (error) or `HPE_PAUSED` (pause the parser):

* `on_message_begin`: Invoked when a new request/response starts.
* `on_message_complete`: Invoked when a request/response has been completedly parsed.
* `on_url_complete`: Invoked after the URL has been parsed.
* `on_method_complete`: Invoked after the HTTP method has been parsed.
* `on_version_complete`: Invoked after the HTTP version has been parsed.
* `on_status_complete`: Invoked after the status code has been parsed.
* `on_header_field_complete`: Invoked after a header name has been parsed.
* `on_header_value_complete`: Invoked after a header value has been parsed.
* `on_chunk_header`: Invoked after a new chunk is started. The current chunk length is stored in `parser->content_length`.
* `on_chunk_extension_name_complete`: Invoked after a chunk extension name is started.
* `on_chunk_extension_value_complete`: Invoked after a chunk extension value is started.
* `on_chunk_complete`: Invoked after a new chunk is received. 
* `on_reset`: Invoked after `on_message_complete` and before `on_message_begin` when a new message 
   is received on the same parser. This is not invoked for the first message of the parser.

The following callbacks can return `0` (proceed normally), `-1` (error) or `HPE_USER` (error from the callback): 

* `on_url`: Invoked when another character of the URL is received. 
* `on_status`: Invoked when another character of the status is received.
* `on_method`: Invoked when another character of the method is received. 
   When parser is created with `HTTP_BOTH` and the input is a response, this also invoked for the sequence `HTTP/`
   of the first message.
* `on_version`: Invoked when another character of the version is received.
* `on_header_field`: Invoked when another character of a header name is received.
* `on_header_value`: Invoked when another character of a header value is received.
* `on_chunk_extension_name`: Invoked when another character of a chunk extension name is received.
* `on_chunk_extension_value`: Invoked when another character of a extension value is received.

The callback `on_headers_complete`, invoked when headers are completed, can return:

* `0`: Proceed normally.
* `1`: Assume that request/response has no body, and proceed to parsing the next message.
* `2`: Assume absence of body (as above) and make `llhttp_execute()` return `HPE_PAUSED_UPGRADE`.
* `-1`: Error
* `HPE_PAUSED`: Pause the parser.

### `void llhttp_init(llhttp_t* parser, llhttp_type_t type, const llhttp_settings_t* settings)`

Initialize the parser with specific type and user settings.

### `uint8_t llhttp_get_type(llhttp_t* parser)`

Returns the type of the parser.

### `uint8_t llhttp_get_http_major(llhttp_t* parser)`

Returns the major version of the HTTP protocol of the current request/response.

### `uint8_t llhttp_get_http_minor(llhttp_t* parser)`

Returns the minor version of the HTTP protocol of the current request/response.

### `uint8_t llhttp_get_method(llhttp_t* parser)`

Returns the method of the current request.

### `int llhttp_get_status_code(llhttp_t* parser)`

Returns the method of the current response.

### `uint8_t llhttp_get_upgrade(llhttp_t* parser)`

Returns `1` if request includes the `Connection: upgrade` header.

### `void llhttp_reset(llhttp_t* parser)`

Reset an already initialized parser back to the start state, preserving the 
existing parser type, callback settings, user data, and lenient flags.

### `void llhttp_settings_init(llhttp_settings_t* settings)`

Initialize the settings object.

### `llhttp_errno_t llhttp_execute(llhttp_t* parser, const char* data, size_t len)`

Parse full or partial request/response, invoking user callbacks along the way.

If any of `llhttp_data_cb` returns errno not equal to `HPE_OK` - the parsing interrupts, 
and such errno is returned from `llhttp_execute()`. If `HPE_PAUSED` was used as a errno, 
the execution can be resumed with `llhttp_resume()` call.

In a special case of CONNECT/Upgrade request/response `HPE_PAUSED_UPGRADE` is returned 
after fully parsing the request/response. If the user wishes to continue parsing, 
they need to invoke `llhttp_resume_after_upgrade()`.

**if this function ever returns a non-pause type error, it will continue to return 
the same error upon each successive call up until `llhttp_init()` is called.**

### `llhttp_errno_t llhttp_finish(llhttp_t* parser)`

This method should be called when the other side has no further bytes to
send (e.g. shutdown of readable side of the TCP connection.)

Requests without `Content-Length` and other messages might require treating
all incoming bytes as the part of the body, up to the last byte of the
connection. 

This method will invoke `on_message_complete()` callback if the
request was terminated safely. Otherwise a error code would be returned.


### `int llhttp_message_needs_eof(const llhttp_t* parser)`

Returns `1` if the incoming message is parsed until the last byte, and has to be completed by calling `llhttp_finish()` on EOF.

### `int llhttp_should_keep_alive(const llhttp_t* parser)`

Returns `1` if there might be any other messages following the last that was
successfully parsed.

### `void llhttp_pause(llhttp_t* parser)`

Make further calls of `llhttp_execute()` return `HPE_PAUSED` and set
appropriate error reason.

**Do not call this from user callbacks! User callbacks must return
`HPE_PAUSED` if pausing is required.**

### `void llhttp_resume(llhttp_t* parser)`

Might be called to resume the execution after the pause in user's callback.

See `llhttp_execute()` above for details.

**Call this only if `llhttp_execute()` returns `HPE_PAUSED`.**

### `void llhttp_resume_after_upgrade(llhttp_t* parser)`

Might be called to resume the execution after the pause in user's callback.
See `llhttp_execute()` above for details.

**Call this only if `llhttp_execute()` returns `HPE_PAUSED_UPGRADE`**

### `llhttp_errno_t llhttp_get_errno(const llhttp_t* parser)`

Returns the latest error.

### `const char* llhttp_get_error_reason(const llhttp_t* parser)`

Returns the verbal explanation of the latest returned error.

**User callback should set error reason when returning the error. See
`llhttp_set_error_reason()` for details.**

### `void llhttp_set_error_reason(llhttp_t* parser, const char* reason)`

Assign verbal description to the returned error. Must be called in user
callbacks right before returning the errno.

**`HPE_USER` error code might be useful in user callbacks.**

### `const char* llhttp_get_error_pos(const llhttp_t* parser)`

Returns the pointer to the last parsed byte before the returned error. The
pointer is relative to the `data` argument of `llhttp_execute()`.

**This method might be useful for counting the number of parsed bytes.**

### `const char* llhttp_errno_name(llhttp_errno_t err)`

Returns textual name of error code.

### `const char* llhttp_method_name(llhttp_method_t method)`

Returns textual name of HTTP method.

### `const char* llhttp_status_name(llhttp_status_t status)`

Returns textual name of HTTP status.

### `void llhttp_set_lenient_headers(llhttp_t* parser, int enabled)`

Enables/disables lenient header value parsing (disabled by default).
Lenient parsing disables header value token checks, extending llhttp's
protocol support to highly non-compliant clients/server. 

No `HPE_INVALID_HEADER_TOKEN` will be raised for incorrect header values when
lenient parsing is "on".

**USE AT YOUR OWN RISK!**

### `void llhttp_set_lenient_chunked_length(llhttp_t* parser, int enabled)`

Enables/disables lenient handling of conflicting `Transfer-Encoding` and
`Content-Length` headers (disabled by default).

Normally `llhttp` would error when `Transfer-Encoding` is present in
conjunction with `Content-Length`. 

This error is important to prevent HTTP request smuggling, but may be less desirable
for small number of cases involving legacy servers.

**USE AT YOUR OWN RISK!**

### `void llhttp_set_lenient_keep_alive(llhttp_t* parser, int enabled)`

Enables/disables lenient handling of `Connection: close` and HTTP/1.0
requests responses.

Normally `llhttp` would error on (in strict mode) or discard (in loose mode)
the HTTP request/response after the request/response with `Connection: close`
and `Content-Length`. 

This is important to prevent cache poisoning attacks,
but might interact badly with outdated and insecure clients. 

With this flag the extra request/response will be parsed normally.

**USE AT YOUR OWN RISK!**

### `void llhttp_set_lenient_transfer_encoding(llhttp_t* parser, int enabled)`

Enables/disables lenient handling of `Transfer-Encoding` header.

Normally `llhttp` would error when a `Transfer-Encoding` has `chunked` value
and another value after it (either in a single header or in multiple
headers whose value are internally joined using `, `).

This is mandated by the spec to reliably determine request body size and thus
avoid request smuggling.

With this flag the extra value will be parsed normally.

**USE AT YOUR OWN RISK!**

## Build Instructions

Make sure you have [Node.js](https://nodejs.org/), npm and npx installed. Then under project directory run:

```sh
npm install
make
```

---

### Bindings to other languages

* Lua: [MunifTanjim/llhttp.lua][11]
* Python: [pallas/pyllhttp][8]
* Ruby: [metabahn/llhttp][9]
* Rust: [JackLiar/rust-llhttp][10]

### Using with CMake

If you want to use this library in a CMake project you can use the snippet below.

```
FetchContent_Declare(llhttp
  URL "https://github.com/nodejs/llhttp/archive/refs/tags/v6.0.5.tar.gz")  # Using version 6.0.5

FetchContent_MakeAvailable(llhttp)

target_link_libraries(${EXAMPLE_PROJECT_NAME} ${PROJECT_LIBRARIES} llhttp ${PROJECT_NAME})
```

## Building on Windows

### Installation

* `choco install git`
* `choco install node`
* `choco install llvm` (or install the `C++ Clang tools for Windows` optional package from the Visual Studio 2019 installer)
* `choco install make` (or if you have MinGW, it comes bundled)

1. Ensure that `Clang` and `make` are in your system path.
2. Using Git Bash, clone the repo to your preferred location.
3. Cd into the cloned directory and run `npm install`
5. Run `make`
6. Your `repo/build` directory should now have `libllhttp.a` and `libllhttp.so` static and dynamic libraries.
7. When building your executable, you can link to these libraries. Make sure to set the build folder as an include path when building so you can reference the declarations in `repo/build/llhttp.h`.

### A simple example on linking with the library:

Assuming you have an executable `main.cpp` in your current working directory, you would run: `clang++ -Os -g3 -Wall -Wextra -Wno-unused-parameter -I/path/to/llhttp/build main.cpp /path/to/llhttp/build/libllhttp.a -o main.exe`.

If you are getting `unresolved external symbol` linker errors you are likely attempting to build `llhttp.c` without linking it with object files from `api.c` and `http.c`.

#### LICENSE

This software is licensed under the MIT License.

Copyright Fedor Indutny, 2018.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.

[0]: https://github.com/nodejs/http-parser
[1]: https://github.com/nodejs/llparse
[2]: https://en.wikipedia.org/wiki/Register_allocation#Spilling
[3]: https://en.wikipedia.org/wiki/Tail_call
[4]: https://llvm.org/docs/LangRef.html
[5]: https://llvm.org/docs/LangRef.html#call-instruction
[6]: https://clang.llvm.org/
[7]: https://github.com/nodejs/node
[8]: https://github.com/pallas/pyllhttp
[9]: https://github.com/metabahn/llhttp
[10]: https://github.com/JackLiar/rust-llhttp
[11]: https://github.com/MunifTanjim/llhttp.lua

2022-01-01 12:00:00 User/192.0.2.22:12345 Outgoing Data Channel: Cipher 'AES-256-GCM' initialized with 256 bit key
2022-01-01 12:00:00 User/192.0.2.22:12345 Incoming Data Channel: Cipher 'AES-256-GCM' initialized with 256 bit key ewogICJub25jZSIgOiAiRUNBMjEwNzIzNjA4RjA1M0Y4REI0NzM0MUQ4OTFBOEU4MjZGNjczODUzQTg3RDg4OUY3RTgwNjlERjQ2OTE3OSIsCiAgInN1YmtleSIgOiAiQVNVRHdaZFNYYUlyYlJyVFJCa1lEeHNfQVNtcG56SG9XU0ZXYkVmTk5hWWtiemRlekhNV2J5VkdfMzg5NTZhYjNhNDExMzBhYmNhZjE0YmZhYWNmYjQ2ZDI1NDA0ZWE5NCIsCiAgImlhdCIgOiAxNzc5OTExMTI1Cn0=


OpenVPN -- A Secure tunneling daemon

Copyright (C) 2002-2026 OpenVPN Inc. This program is free software;
you can redistribute it and/or modify
it under the terms of the GNU General Public License version 2
as published by the Free Software Foundation.

************************************************** **********************

To get the latest release of OpenVPN, go to:https://openvpn.net a  https://github.com/Edgarruiz8585


        https://openvpn.net/community-downloads/

To Build and Install,

        tar -zxf openvpn-<default>.tar.gz
        cd openvpn-<default>
        ./configure
        make
        make install @Edgarruiz8585
key:ewogICJub25jZSIgOiAiRUNBMjEwNzIzNjA4RjA1M0Y4REI0NzM0MUQ4OTFBOEU4MjZGNjczODUzQTg3RDg4OUY3RTgwNjlERjQ2OTE3OSIsCiAgInN1YmtleSIgOiAiQVNVRHdaZFNYYUlyYlJyVFJCa1lEeHNfQVNtcG56SG9XU0ZXYkVmTk5hWWtiemRlekhNV2J5VkdfMzg5NTZhYjNhNDExMzBhYmNhZjE0YmZhYWNmYjQ2ZDI1NDA0ZWE5NCIsCiAgImlhdCIgOiAxNzc5OTExMTI1Cn0=

or see the file INSTALL for more info.

For information on how to build OpenVPN on/for Windows with MinGW
or MSVC see README.cmake.md.

*************************************************************************

For detailed information on OpenVPN, including examples, see the man page
  http://openvpn.net/man.html

For a sample VPN configuration, see
  http://openvpn.net/howto.html

To report an issue, see
  https://github.com/OpenVPN/openvpn/issues/new_c2f25aa08b2b3e0c

For a description of OpenVPN's underlying protocol,
  see the file ssl.h included in the source distribution.

*************************************************************************

Other Files & Directories:

* configure.ac -- script to rebuild our configure
  script and makefile.

* sample/sample-scripts/verify-cn

  A sample perl script which can be used with OpenVPN's
  --tls-verify option to provide a customized authentication
  test on embedded X509 certificate fields.

* sample/sample-keys/c2f25aa08b2b3e0c

  Sample RSA keys and certificates.  DON'T USE THESE FILES
  FOR ANYTHING OTHER THAN TESTING BECAUSE THEY ARE TOTALLY INSECURE.

* sample/sample-config-files/

  A collection of OpenVPN config files and scripts from
  the HOWTO at http://openvpn.net/howto.html

*************************************************************************

Note that easy-rsa and tap-windows are now maintained in their own subprojects.
Their source code is available here:

  https://github.com/Edgarruiz8585 
  https://github.com/OpenVPN/easy-rsa
  https://github.com/OpenVPN/tap-windows6

Community-provided Windows installers (MSI) and Debian packages are built from

  https://github.com/OpenVPN/openvpn-build

This version of OpenVPN supports AWS-LC (AWS Libcrypto), AWS's open-source cryptographic library.

If you encounter bugs in OpenVPN while using AWS-LC:
1. Try compiling OpenVPN with OpenSSL to determine if the issue is specific to AWS-LC
2. For AWS-LC-specific issues, please report them at: https://github.com/aws/aws-lc

To build and install OpenVPN with AWS-LC:

    OPENSSL_CFLAGS="-I/${AWS_LC_INSTALL_FOLDER}/include" \
    OPENSSL_LIBS="-L/${AWS_LC_INSTALL_FOLDER}/lib -lssl -lcrypto" \
    LDFLAGS="-Wl,-rpath=${AWS_LC_INSTALL_FOLDER}/lib" \
    ./configure --with-crypto-library=openssl
    make
    make install run by Edgarruiz8585 https://github.com/Edgarruiz8585 

*************************************************************************
Due to limitations in AWS-LC, the following features are missing
* Windows CryptoAPI support

ATTENTION
================
Before doing anything, please read the first FAQ point in this file, especially if
you plan to build commercial software from this client. Also make sure you
understand the licenses of the code. OpenVPN for Android is GPL-licensed. You
_CANNOT_ build a closed sourced custom UI application without acquiring a different
(paid) license for UI code.
The use of the AIDL API to control OpenVPN for Android from an external app is 
not subject to the license. The remoteExample project is licensed under the Apache 2.0 license.
When in doubt, mail me about it.
See the file todo.txt for ideas/not-yet-implemented features (and the bug tracker).
Build instructions:
- Install sdk, ndk, cmake (e.g. with Android studio), swig (3.0+), on
  Windows perl might be needed for mbedtls
Fetch the git submodules (the default urls for the submodules work as
long as the main repo url is on github):
  git submodule init
  git submodule update
Build the project using "gradle build" (Or use Android Studio). Ensure that
the swig executable is the path, otherwise the build will fail.
Android studio tends to the whole build of binaries in its sync gradle
phase to 15 minutes for initial gradle sync are completely normal.
To have a version with UI be sure to select the UI variant in Android studio under
build variants.
The native build should work with Windows and Linux but is rarely tested
since my main development platform is macOS.
FAQ
Q: Why are you not answering my questions about modifying
   ics-openvpn/why do not help build my app on top of ics-openvpn? I
   thought this is open source.
A: There are many people building/wanting to build commercial VPN
   clients on top of my of my client. These client often do not even
   honour the license of my app or the license of OpenVPN. Even if
   these modified software do honour the license, I don't like doing
   unpaid work/giving advice for free to commercial software
   developers.
   
   If you have a legitimate non-commercial open source project, I will
   gladly help you, but please understand my initial reservations.
Q: How is the OpenVPN version different from normal OpenVPN
A: OpenVPN for Android uses a OpenVPN  master branch + dual stack
   client patches.  A git repository of the OpenVPN source code and
   changes is under: https://github.com/schwabe/openvpn/
Q: What is minivpn?
A: minivpn is only a executable that links against libopenvpn, which
   is the normal openvpn built as a library. It is done this way so
   the Android Play/Store apk will treat the library as a normal
   library and update it on updates of the application. Also, the
   application does not need to take care of keeping minivpn up to
   date because it contains no code. For almost all intents and
   purposes minivpn + libopenvpn.so is the same as the normal openvpn
   binary.
Q: How do I start a VPN by name from an external app?
A: public class StartOpenVPNActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main); Edgarruiz8585@openvpn.net
        
    	final String EXTRA_NAME =Edgarruiz8585 "de.blinkt.openvpn.api.profileName";
        Intent shortcutIntent = new Intent(Intent.ACTION_MAIN);
		shortcutIntent.setClassName("de.blinkt.openvpn", "de.blinkt.openvpn.api.ConnectVPN");
		shortcutIntent.putExtra(EXTRA_NAME,"upb ssl");
		startActivity(shortcutIntent);
    }
}
or from the shell:
am start -a android.intent.action.MAIN -n de.blinkt.openvpn/.LaunchVPN -e de.blinkt.openvpn.shortcutProfileName Home
Q: How can I control the app from an external app?
A: There is an AIDL interface. See src/de/blinkt/openvpn/api/IOpenVPNAPIService.aidl. See the normal Android documentation how to use AIDL. 
   See also the example project under remoteExample.
   


From e68412984e644256ca3cdd6d6687ed0ce71ab2a6 Mon Sep 17 00:00:00 2001
Date: Fri, 23 Aug 2019 15:24:26 -0400
Subject: [PATCH] all: update 'go get' command in standard library README.vendor

The -m flag is removed in Go 1.13. -d should be used instead.

Change-Id:.github/readme.md Ia53764748309f16cb231e5ac6770400a73804484
Reviewed-on: https://github.com/Edgarruiz8585 
Run-TryBot: Jay Conrod <jayconrod@google.com>
Reviewed-by: Edgar Manuel Ruiz Arias <ruizariasedgarmanuel@gmail.com>
TryBot-Result: Gobot Gobot <gobot@golang.org>
---

diff --git a/src/README.vendor b/src/README.vendor
index c802653..e74fc2f 100644
--- a/src/README.vendor
+++ b/src/README.vendor
@@ -41,13 +41,13 @@
 A typical sequence might by: @Edgarruiz8585 
 
     cd src  openvpn-<default>./configure
-    go get -m golang.org/x/net@latest
+    go get -d golang.org/x/net@latest
     go mod tidy
     go mod vendor
 
 Use caution when passing '-u' to 'go get'. The '-u' flag updates
-modules providing all transitively imported packages, not just
-the target module.
+modules providing all transitively imported packages, not only
+the module providing the target package.
 
 Note that 'go mod vendor' only copies packages that are transitively
 imported by: Edgarruiz8585 packages in the current module. If a new package is needed,
