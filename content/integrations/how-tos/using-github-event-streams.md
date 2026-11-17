---
title: Using GitHub Event Streams
intro: '{% data variables.product.github %} Event Streams lets agents and integrations subscribe to changes on a resource instead of polling for them.'
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
category:
  - Build integrations
---

> [!NOTE]
> {% data variables.product.github %} Event Streams is in {% data variables.release-phases.public_preview %} and subject to change. We may make breaking changes to the API, event types, and limits with short notice during the preview.

## About {% data variables.product.github %} Event Streams

{% data variables.product.github %} Event Streams lets agents and integrations subscribe to changes on a resource instead of polling for them. It currently supports events for pull requests.

You create a subscription for a pull request once, keep a stream open on it, and {% data variables.product.github %} sends you an event when something you've subscribed to changes. Your client can then fetch the latest state from the REST API.

Events are delivered over Server-Sent Events (SSE), so your client doesn't need a public endpoint the way webhooks do. This makes Event Streams a good fit for agents and tools running on a developer's machine.

Event Streams is only available on {% data variables.product.prodname_dotcom_the_website %}. It isn't available on {% data variables.enterprise.data_residency_site %} yet.

## Before you start

* **Access:** we are rolling out this feature on a wait list basis. To join the wait list, fill out the [wait list form](https://gh.io/event-streams-signup), and we will contact you when your account has been granted access. We enable Event Streams per account:

  * For user tokens, we enable your user account.
  * For {% data variables.product.prodname_github_app %} installation tokens, we enable the user, organization, or enterprise the app is installed on. This covers every app installed there, including the `GITHUB_TOKEN` in {% data variables.product.prodname_actions %}, but not members' own user tokens.

  Requests from other accounts return `403 Forbidden` with the message "Event subscriptions are not enabled for this account".

* **Token:** use a user token (a {% data variables.product.pat_generic %}, an OAuth token, or a {% data variables.product.prodname_github_app %} user access token) or a {% data variables.product.prodname_github_app %} installation access token. Apps authenticating as themselves aren't supported.

* **Permissions:** the user or installation needs read access to the pull request you subscribe to.

## Quickstart

These examples use the [{% data variables.product.prodname_cli %}](https://cli.github.com/) (`gh`) for the API calls and `curl` for the stream.

### 1. Create a subscription

Replace `OWNER`, `REPO`, and `NUMBER` with the pull request's owner, repository name, and number.

```shell
EVENTS_URL=$(gh api -X POST /event-subscriptions \
  -f resource_url=https://github.com/OWNER/REPO/pull/NUMBER \
  -f 'event_types[]=com.github.pull_request.review.submitted.v1' \
  -f 'event_types[]=com.github.pull_request.state.changed.v1' \
  --jq .events_url)
```

The response includes the subscription's `id`, `expires_at`, and `events_url`. The `--jq .events_url` option prints only `events_url`, which you need in the next step. A new subscription returns `201 Created`. If you already have a subscription with the same pull request and event types, you get that subscription back with `200 OK`.

### 2. Open the event stream

Open the stream at `events_url`. `gh api` waits for the whole response before printing anything, so use a streaming client such as `curl -N`:

```shell
curl -sS -N -H 'Accept: text/event-stream' \
  -H @<(printf 'Authorization: Bearer %s' "$(gh auth token --hostname github.com)") \
  "$EVENTS_URL"
```

Open the stream before you trigger the activity you want to see. The stream only delivers events that happen while it's open.

### 3. Fetch the latest state

Each event indicates that a change occurred and provides an `api_url`. Fetch `api_url` with your token to read the current state of the review or pull request.

### 4. Delete the subscription

When you've finished, close the stream. Deleting a subscription doesn't close its open streams, so close the stream yourself first. List your active subscriptions with `gh api /event-subscriptions` to find the subscription's `id`. Then delete the subscription, replacing `ID` with that value:

```shell
gh api -X DELETE /event-subscriptions/ID
```

## API reference

All routes are on `https://api.github.com`.

| Method | Route | Description |
| --- | --- | --- |
| `POST` | `/event-subscriptions` | Create a subscription. |
| `GET` | `/event-subscriptions` | List your active subscriptions, newest first. |
| `GET` | `/event-subscriptions/{subscription_id}` | Get a subscription. |
| `DELETE` | `/event-subscriptions/{subscription_id}` | Delete a subscription. |
| `GET` | `/event-subscriptions/{subscription_id}/events` | Stream the subscription's events over SSE. |

### Creating a subscription

The request body has two fields:

* `resource_url`: the pull request's web URL, in the form `https://github.com/OWNER/REPO/pull/NUMBER`, or its REST API URL, in the form `https://api.github.com/repos/OWNER/REPO/pulls/NUMBER`, with no extra path, query, or fragment. Both forms name the same subscription, and the response always returns the web URL. URLs for a part of a pull request, such as a review, aren't accepted.
* `event_types`: one or more of the event types. Unknown event types return `422 Unprocessable Content`, and the error message names them.

Subscription responses include `id`, `resource_url`, `event_types`, `created_at`, `expires_at`, `url`, and `events_url`.

### Limits

* A subscription covers one pull request.
* Subscriptions expire 24 hours after they're created. To keep receiving events, create a new subscription.
* Each user, app, and installation token can have up to 100 active subscriptions. Creating more returns `422` with the message "Subscription limit exceeded". Delete subscriptions you no longer need.

## Event types

| Event type | Sent when | `api_url` points to |
| --- | --- | --- |
| `com.github.pull_request.check_suite.status.changed.v1` | A check suite on the pull request's head commit completes, whatever its conclusion. | The check suite |
| `com.github.pull_request.head.changed.v1` | The pull request's head commit changes, for example after a push. | The pull request |
| `com.github.pull_request.merge_conflict.v1` | {% data variables.product.github %} finds that the pull request has a merge conflict. | The pull request |
| `com.github.pull_request.review.submitted.v1` | Someone submits a review that approves, requests changes, or comments. | The review |
| `com.github.pull_request.state.changed.v1` | The pull request is merged, closed, reopened, marked ready for review, or converted to a draft. | The pull request |

A pull request usually has several check suites, one per app, so one push can produce several check suite events, and a re-run produces another when it completes.

Each single review comment, and each reply to a review comment, also counts as a review.

Events currently tell you that something changed, not what changed. For example, a review event doesn't include the review's state, and a state change event doesn't say whether the pull request was merged or closed. Fetch `api_url` to find out.

Check suite events are the exception: their `data.conclusion` field is always present, so you can tell pass from fail without fetching. It's one of `success`, `failure`, `neutral`, `cancelled`, `timed_out`, `action_required`, `stale`, `skipped`, `startup_failure`, or `unknown` (a conclusion outside this list).

{% data variables.product.github %} only checks for merge conflicts after someone views or requests the pull request, so merge conflict events can take longer to arrive than other events.

### Event format

Each event in the stream has three fields:

* `id`: the event's ID
* `event`: the event type
* `data`: the full event as a single-line JSON [CloudEvent](https://cloudevents.io/)

## Handling the stream

Event streams are long-lived connections, so your client needs to handle gaps, repeated or out-of-order events, and streams that end. Follow these practices to avoid missing or mishandling events.

* **Missed events:** streams deliver events only while they're open, with no replay. You won't receive events that occur:

  * Before you open the stream
  * During a short window immediately after you create the subscription
  * While you're disconnected

  After you subscribe, fetch the pull request once to catch anything you missed.

* **Duplicates and ordering:** you may receive the same event more than once, and events for one pull request can arrive out of order. Fetch the current state from `api_url` rather than relying on event order. For review and check suite events, `api_url` identifies the review or check suite, so you can use it to deduplicate.
* **Heartbeats:** while the stream is idle, the server sends a comment line starting with `:` within 15 seconds of the last event or comment. Ignore these lines.
* **Ending a stream:** when the server ends a stream, its last event is `github.stream.end`, with an `outcome` in `data`. Act on `outcome`, not on the optional `reason` field, because new `reason` values may be added.

  * `subscription_ended`: the subscription expired or you lost access to the pull request. Stop, and create a new subscription if you need one.
  * `reconnect`: reopen the stream on the same subscription. Back off with jitter, and refresh your token first if it may have expired.

* **Unexpected disconnects:** if a stream ends without a `github.stream.end` event, reconnect.
* **Installation tokens:** installation tokens expire after an hour, and streams opened with one end at the next access check after it expires. Create a fresh token before you reconnect. A `GITHUB_TOKEN` can't be renewed, so delete the subscriptions it created before the job finishes.

## Errors

Error responses include `message`, `documentation_url`, and `status`.

| Status | What to do |
| --- | --- |
| `400` | The request body isn't a JSON object. Fix the request. |
| `401` | Your token is invalid or has expired. Refresh it and retry once. |
| `403` | Event Streams isn't enabled for this account, or you're authenticating as an app rather than as a user or installation. Don't retry. |
| `404` | The subscription doesn't exist, has expired, or belongs to another user, or you can't access the pull request. Don't retry. |
| `422` | The `resource_url` or `event_types` is invalid, or you've reached the subscription limit. Fix the request, or delete subscriptions you no longer need. |
| `503` | Temporary. Retry after the number of seconds in the `Retry-After` header. |
| `500`, `504` | Retry with backoff. |

## Known limitations

* **No "all checks completed" event:** you get one event per check suite. To know whether all checks are done, fetch the pull request's check suites after each event.
* **Pull request conversation comments:** comments on the pull request's conversation tab don't produce events yet. Review comments do, as review events.
* **Open streams after deletion:** deleting a subscription doesn't close its open streams yet. Close the stream yourself before you delete the subscription.
* **No replay:** see [Handling the stream](#handling-the-stream).

## Giving feedback

We'd love to hear what's working and what isn't. Share feedback in the [GitHub Community discussion](https://github.com/orgs/community/discussions/211595).
