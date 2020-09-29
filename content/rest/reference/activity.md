---
title: Activity
redirect_from:
  - /v3/activity
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Events

The Events API is a read-only API to the {% data variables.product.prodname_dotcom %} events. These events power the various activity streams on the site.

The Events API can return different types of events triggered by activity on {% data variables.product.product_name %}. For more information about the specific events that you can receive from the Events API, see "[{% data variables.product.prodname_dotcom %} Event types](/developers/webhooks-and-events/github-event-types)." An events API for repository issues is also available. For more information, see the "[Issue Events API](/rest/reference/issues#events)."

Events are optimized for polling with the "ETag" header. If no new events have been triggered, you will see a "304 Not Modified" response, and your current rate limit will be untouched. There is also an "X-Poll-Interval" header that specifies how often (in seconds) you are allowed to poll. In times of high server load, the time may increase. Please obey the header.

``` shell
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events
> HTTP/1.1 200 OK
> X-Poll-Interval: 60
> ETag: "a18c3bded88eb5dbb5c849a489412bf3"

# The quotes around the ETag value are important
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events \
$    -H 'If-None-Match: "a18c3bded88eb5dbb5c849a489412bf3"'
> HTTP/1.1 304 Not Modified
> X-Poll-Interval: 60
```

Events support pagination, however the `per_page` option is unsupported. The fixed page size is 30 items. Fetching up to ten pages is supported, for a total of 300 events. For information, see "[Traversing with pagination](/rest/guides/traversing-with-pagination)."

Only events created within the past 90 days will be included in timelines. Events older than 90 days will not be included (even if the total number of events in the timeline is less than 300).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'events' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Feeds

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'feeds' %}{% include rest_operation %}{% endif %}
{% endfor %}

### Example of getting an Atom feed

To get a feed in Atom format, you must specify the `application/atom+xml` type in the `Accept` header. For example, to get the Atom feed for GitHub security advisories:

    curl -H "Accept: application/atom+xml" https://github.com/security-advisories

#### Response

```shell
Status: 200 OK
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" xml:lang="en-US">
  <id>tag:github.com,2008:/security-advisories</id>
  <link rel="self" type="application/atom+xml" href="https://github.com/security-advisories.atom"/>
  <title>GitHub Security Advisory Feed</title>
  <author>
    <name>GitHub</name>
  </author>
  <updated>2019-01-14T19:34:52Z</updated>
     <entry>
      <id>tag:github.com,2008:GHSA-abcd-12ab-23cd</id>
      <published>2018-07-26T15:14:52Z</published>
      <updated>2019-01-14T19:34:52Z</updated>
      <title type="html">[GHSA-abcd-12ab-23cd] Moderate severity vulnerability that affects Octoapp</title>
        <category term="NPM"/>
      <content type="html">
        &lt;p&gt;Octoapp node module before 4.17.5 suffers from a Modification of Assumed-Immutable Data (MAID) vulnerability via defaultsDeep, merge, and mergeWith functions, which allows a malicious user to modify the prototype of &quot;Object&quot; via &lt;strong&gt;proto&lt;/strong&gt;, causing the addition or modification of an existing property that will exist on all objects.&lt;/p&gt;
          &lt;p&gt;&lt;strong&gt;Affected Packages&lt;/strong&gt;&lt;/p&gt;

  &lt;dl&gt;
      &lt;dt&gt;Octoapp&lt;/dt&gt;
      &lt;dd&gt;Ecosystem: npm&lt;/dd&gt;
      &lt;dd&gt;Severity: moderate&lt;/dd&gt;
      &lt;dd&gt;Versions: &amp;lt; 4.17.5&lt;/dd&gt;
        &lt;dd&gt;Fixed in: 4.17.5&lt;/dd&gt;
  &lt;/dl&gt;

          &lt;p&gt;&lt;strong&gt;References&lt;/strong&gt;&lt;/p&gt;

  &lt;ul&gt;
      &lt;li&gt;https://nvd.nist.gov/vuln/detail/CVE-2018-123&lt;/li&gt;
  &lt;/ul&gt;

      </content>
    </entry>
</feed>
```

## Notifications

Users receive notifications for conversations in repositories they watch including:

* Issues and their comments
* Pull Requests and their comments
* Comments on any commits

Notifications are also sent for conversations in unwatched repositories when the user is involved including:

* **@mentions**
* Issue assignments
* Commits the user authors or commits
* Any discussion in which the user actively participates

All Notification API calls require the `notifications` or `repo` API scopes.  Doing this will give read-only access to some issue and commit content. You will still need the `repo` scope to access issues and commits from their respective endpoints.

Notifications come back as "threads".  A thread contains information about the current discussion of an issue, pull request, or commit.

Notifications are optimized for polling with the `Last-Modified` header.  If there are no new notifications, you will see a `304 Not Modified` response, leaving your current rate limit untouched.  There is an `X-Poll-Interval` header that specifies how often (in seconds) you are allowed to poll.  In times of high server load, the time may increase.  Please obey the header.

``` shell
# Add authentication to your requests
$ curl -I {% data variables.product.api_url_pre %}/notifications
HTTP/1.1 200 OK
Last-Modified: Thu, 25 Oct 2012 15:16:27 GMT
X-Poll-Interval: 60

# Pass the Last-Modified header exactly
$ curl -I {% data variables.product.api_url_pre %}/notifications
$    -H "If-Modified-Since: Thu, 25 Oct 2012 15:16:27 GMT"
> HTTP/1.1 304 Not Modified
> X-Poll-Interval: 60
```

### Notification reasons

When retrieving responses from the Notifications API, each payload has a key titled `reason`. These correspond to events that trigger a notification.

Here's a list of potential `reason`s for receiving a notification:

Reason Name | Description
------------|------------
`assign` | You were assigned to the issue.
`author` | You created the thread.
`comment` | You commented on the thread.
`invitation` | You accepted an invitation to contribute to the repository.
`manual` | You subscribed to the thread (via an issue or pull request).
`mention` | You were specifically **@mentioned** in the content.
`review_requested` | You, or a team you're a member of, were requested to review a pull request.{% if currentVersion == "free-pro-team@latest" %}
`security_alert` | {% data variables.product.prodname_dotcom %} discovered a [security vulnerability](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) in your repository.{% endif %}
`state_change` | You changed the thread state (for example, closing an issue or merging a pull request).
`subscribed` | You're watching the repository.
`team_mention` | You were on a team that was mentioned.

Note that the `reason` is modified on a per-thread basis, and can change, if the `reason` on a later notification is different.

For example, if you are the author of an issue, subsequent notifications on that issue will have a `reason` of `author`. If you're then  **@mentioned** on the same issue, the notifications you fetch thereafter will have a `reason` of `mention`. The `reason` remains as `mention`, regardless of whether you're ever mentioned again.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'notifications' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Starring

Repository starring is a feature that lets users bookmark repositories. Stars are shown next to repositories to show an approximate level of interest. Stars have no effect on notifications or the activity feed.

### Starring vs. Watching

In August 2012, we [changed the way watching
works](https://github.com/blog/1204-notifications-stars) on {% data variables.product.prodname_dotcom %}. Many API
client applications may be using the original "watcher" endpoints for accessing
this data. You can now start using the "star" endpoints instead (described
below). For more information, see the [Watcher API Change post](https://developer.github.com/changes/2012-09-05-watcher-api/) and the "[Repository Watching API](/rest/reference/activity#watching)."

### Custom media types for starring

There is one supported custom media type for the Starring REST API. When you use this custom media type, you will receive a response with the `starred_at` timestamp property that indicates the time the star was created. The response also has a second property that includes the resource that is returned when the custom media type is not included. The property that contains the resource will be either `user` or `repo`.

    application/vnd.github.v3.star+json

For more information about media types, see "[Custom media types](/rest/overview/media-types)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'starring' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Watching

Watching a repository registers the user to receive notifications on new discussions, as well as events in the user's activity feed. For simple repository bookmarks, see "[Repository starring](/rest/reference/activity#starring)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'watching' %}{% include rest_operation %}{% endif %}
{% endfor %}
