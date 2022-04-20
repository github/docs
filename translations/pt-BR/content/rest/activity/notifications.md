---
title: Notifications
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

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
HTTP/2 200
Last-Modified: Thu, 25 Oct 2012 15:16:27 GMT
X-Poll-Interval: 60

# Pass the Last-Modified header exactly
$ curl -I {% data variables.product.api_url_pre %}/notifications
$    -H "If-Modified-Since: Thu, 25 Oct 2012 15:16:27 GMT"
> HTTP/2 304
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
`ci_activity` | A {% data variables.product.prodname_actions %} workflow run that you triggered was completed.
`invitation` | You accepted an invitation to contribute to the repository.
`manual` | You subscribed to the thread (via an issue or pull request).
`mention` | You were specifically **@mentioned** in the content.
`review_requested` | You, or a team you're a member of, were requested to review a pull request.{% ifversion fpt or ghec %}
`security_alert` | {% data variables.product.prodname_dotcom %} discovered a [security vulnerability](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) in your repository.{% endif %}
`state_change` | You changed the thread state (for example, closing an issue or merging a pull request).
`subscribed` | You're watching the repository.
`team_mention` | You were on a team that was mentioned.

Note that the `reason` is modified on a per-thread basis, and can change, if the `reason` on a later notification is different.

For example, if you are the author of an issue, subsequent notifications on that issue will have a `reason` of `author`. If you're then  **@mentioned** on the same issue, the notifications you fetch thereafter will have a `reason` of `mention`. The `reason` remains as `mention`, regardless of whether you're ever mentioned again.