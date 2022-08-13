---
title: Events
intro: 'The Events API is a read-only API to the {% data variables.product.prodname_dotcom %} events.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

These events power the various activity streams on the site.

The Events API can return different types of events triggered by activity on {% data variables.product.product_name %}. For more information about the specific events that you can receive from the Events API, see "[{% data variables.product.prodname_dotcom %} Event types](/developers/webhooks-and-events/github-event-types)." An events API for repository issues is also available. For more information, see the "[Issue Events API](/rest/reference/issues#events)."

Events are optimized for polling with the "ETag" header. If no new events have been triggered, you will see a "304 Not Modified" response, and your current rate limit will be untouched. There is also an "X-Poll-Interval" header that specifies how often (in seconds) you are allowed to poll. In times of high server load, the time may increase. Please obey the header.

``` shell
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events
> HTTP/2 200
> X-Poll-Interval: 60
> ETag: "a18c3bded88eb5dbb5c849a489412bf3"

# The quotes around the ETag value are important
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events \
$    -H 'If-None-Match: "a18c3bded88eb5dbb5c849a489412bf3"'
> HTTP/2 304
> X-Poll-Interval: 60
```

Only events created within the past 90 days will be included in timelines. Events older than 90 days will not be included (even if the total number of events in the timeline is less than 300).
