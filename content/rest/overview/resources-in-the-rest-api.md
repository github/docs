---
title: Resources in the REST API
intro: 'Learn how to navigate the resources provided by the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API.'
redirect_from:
  - /rest/initialize-the-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
---

## Root endpoint

You can issue a `GET` request to the root endpoint to get all the endpoint categories that the REST API supports:

```shell
$ curl {% ifversion fpt or ghae or ghec %}
-u USERNAME:TOKEN {% endif %}{% ifversion ghes %}-u USERNAME:PASSWORD {% endif %}{% data variables.product.api_url_pre %}
```

## GraphQL global node IDs

See the guide on "[AUTOTITLE](/graphql/guides/using-global-node-ids)" for detailed information about how to find `node_id`s via the REST API and use them in GraphQL operations.

## Hypermedia

All resources may have one or more `*_url` properties linking to other
resources.  These are meant to provide explicit URLs so that proper API clients
don't need to construct URLs on their own.  It is highly recommended that API
clients use these.  Doing so will make future upgrades of the API easier for
developers.  All URLs are expected to be proper [RFC 6570](https://datatracker.ietf.org/doc/html/rfc6570) URI templates.

You can then expand these templates using something like the [uri_template](https://github.com/hannesg/uri_template)
gem:

    >> tmpl = URITemplate.new('/notifications{?since,all,participating}')
    >> tmpl.expand
    => "/notifications"

    >> tmpl.expand all: 1
    => "/notifications?all=1"

    >> tmpl.expand all: 1, participating: 1
    => "/notifications?all=1&participating=1"

## Cross origin resource sharing

The API supports Cross Origin Resource Sharing (CORS) for AJAX requests from
any origin.
You can read the [CORS W3C Recommendation](http://www.w3.org/TR/cors/), or
[this intro](https://code.google.com/archive/p/html5security/wikis/CrossOriginRequestSecurity.wiki) from the
HTML 5 Security Guide.

Here's a sample request sent from a browser hitting
`http://example.com`:

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com"
HTTP/2 302
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
```

This is what the CORS preflight request looks like:

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com" -X OPTIONS
HTTP/2 204
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With
Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Access-Control-Max-Age: 86400
```

## JSON-P callbacks

You can send a `?callback` parameter to any GET call to have the results
wrapped in a JSON function.  This is typically used when browsers want
to embed {% data variables.product.product_name %} content in web pages by getting around cross domain
issues.  The response includes the same data output as the regular API,
plus the relevant HTTP Header information.

```shell
$ curl {% data variables.product.api_url_pre %}?callback=foo

> /**/foo({
>   "meta": {
>     "status": 200,
>     "x-ratelimit-limit": "5000",
>     "x-ratelimit-remaining": "4966",
>     "x-ratelimit-reset": "1372700873",
>     "Link": [ // pagination headers and other links
>       ["{% data variables.product.api_url_pre %}?page=2", {"rel": "next"}]
>     ]
>   },
>   "data": {
>     // the data
>   }
> })
```

You can write a JavaScript handler to process the callback. Here's a minimal example you can try out:

    <html>
    <head>
    <script type="text/javascript">
    function foo(response) {
      var meta = response.meta;
      var data = response.data;
      console.log(meta);
      console.log(data);
    }

    var script = document.createElement('script');
    script.src = '{% data variables.product.api_url_code %}?callback=foo';

    document.getElementsByTagName('head')[0].appendChild(script);
    </script>
    </head>

    <body>
      <p>Open up your browser's console.</p>
    </body>
    </html>

All of the headers are the same String value as the HTTP Headers with one
notable exception: Link.  Link headers are pre-parsed for you and come
through as an array of `[url, options]` tuples.

A link that looks like this:

    Link: <url1>; rel="next", <url2>; rel="foo"; bar="baz"

... will look like this in the Callback output:

```json
{
  "Link": [
    [
      "url1",
      {
        "rel": "next"
      }
    ],
    [
      "url2",
      {
        "rel": "foo",
        "bar": "baz"
      }
    ]
  ]
}
```

## Timezones

Some requests that create new data, such as creating a new commit, allow you to provide time zone information when specifying or generating timestamps. We apply the following rules, in order of priority, to determine timezone information for such API calls.

- [Explicitly providing an ISO 8601 timestamp with timezone information](#explicitly-providing-an-iso-8601-timestamp-with-timezone-information)
- [Using the `Time-Zone` header](#using-the-time-zone-header)
- [Using the last known timezone for the user](#using-the-last-known-timezone-for-the-user)
- [Defaulting to UTC without other timezone information](#defaulting-to-utc-without-other-timezone-information)

Note that these rules apply only to data passed to the API, not to data returned by the API. As mentioned in "[Schema](#schema)," timestamps returned by the API are in UTC time, ISO 8601 format.

### Explicitly providing an ISO 8601 timestamp with timezone information

For API calls that allow for a timestamp to be specified, we use that exact timestamp. An example of this is the API to manage commits. For more information, see "[AUTOTITLE](/rest/git#commits)."

These timestamps look something like `2014-02-27T15:05:06+01:00`. Also see [this example](/rest/git#example-input) for how these timestamps can be specified.

### Using the `Time-Zone` header

It is possible to supply a `Time-Zone` header which defines a timezone according to the [list of names from the Olson database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```shell
curl -H "Time-Zone: Europe/Amsterdam" -X POST {% data variables.product.api_url_pre %}/repos/github-linguist/linguist/contents/new_file.md
```

This means that we generate a timestamp for the moment your API call is made in the timezone this header defines. For example, the API to manage contents generates a git commit for each addition or change and uses the current time as the timestamp. For more information, see "[AUTOTITLE](/rest/repos#contents)." This header will determine the timezone used for generating that current timestamp.

### Using the last known timezone for the user

If no `Time-Zone` header is specified and you make an authenticated call to the API, we use the last known timezone for the authenticated user. The last known timezone is updated whenever you browse the {% data variables.product.product_name %} website.

### Defaulting to UTC without other timezone information

If the steps above don't result in any information, we use UTC as the timezone to create the git commit.
