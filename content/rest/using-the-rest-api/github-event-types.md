---
title: GitHub event types
intro: 'For the {% data variables.product.prodname_dotcom %} Events API, learn about each event type, the triggering action on {% data variables.product.prodname_dotcom %}, and each event''s unique properties.'
redirect_from:
  - /v3/activity/event_types
  - /developers/webhooks-and-events/github-event-types
  - /developers/webhooks-and-events/events/github-event-types
  - /webhooks-and-events/events/github-event-types
  - /developers/webhooks-and-events/events
  - /rest/overview/github-event-types
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Events
---
The Events API can return different types of events triggered by activity on GitHub. Each event response contains shared properties, but has a unique `payload` object determined by its event type. The [Event object common properties](#event-object-common-properties) describes the properties shared by all events, and each event type describes the `payload` properties that are unique to the specific event.

{% ifversion fpt or ghec %}

{% endif %}

## Event object common properties

The event objects returned from the Events API endpoints have the same structure.

| Event API attribute name | Type | Description |
|--------------------------|-------------|-------------|
| `id` | `integer` | Unique identifier for the event. |
| `type` | `string` | The type of event. Events uses PascalCase for the name. |
| `actor` | `object` | The user that triggered the event. |
| `actor.id` | `integer` | The unique identifier for the actor. |
| `actor.login` | `string` | The username of the actor. |
| `actor.display_login` | `string` | The specific display format of the username. |
| `actor.gravatar_id` | `string` | The unique identifier of the Gravatar profile for the actor. |
| `actor.url` | `string` | The REST API URL used to retrieve the user object, which includes additional user information. |
| `actor.avatar_url` | `string` | The URL of the actor's profile image. |
| `repo` | `object` | The repository object where the event occurred.  |
| `repo.id` | `integer` | The unique identifier of the repository. |
| `repo.name` | `string` | The name of the repository, which includes the owner and repository name. For example, `octocat/hello-world` is the name of the `hello-world` repository owned by the `octocat` personal account. |
| `repo.url` | `string` | The REST API URL used to retrieve the repository object, which includes additional repository information. |
| `payload` | `object` | The event payload object is unique to the event type. See the event type below for the event API `payload` object. |
| `public` | `boolean` | Whether the event is visible to all users. |
| `created_at` | `string` | The date and time when the event was triggered. It is formatted according to ISO 8601. |
| `org` | `object` | The organization that was chosen by the actor to perform action that triggers the event.<br />_The property appears in the event object only if it is applicable._ |
| `org.id` | `integer` | The unique identifier for the organization. |
| `org.login` | `string` | The name of the organization. |
| `org.gravatar_id` | `string` | The unique identifier of the Gravatar profile for the organization. |
| `org.url` | `string` | The REST API URL used to retrieve the organization object, which includes additional organization information. |
| `org.avatar_url` | `string` | The URL of the organization's profile image. |

### Example WatchEvent event object

This example shows the format of the [WatchEvent](#watchevent) response when using the [Events API](/rest/activity/events).

```http
HTTP/2 200
Link: <https://api.github.com/resource?page=2>; rel="next",
      <https://api.github.com/resource?page=5>; rel="last"
```

```json
[
  {
    "id": "12345",
    "type": "WatchEvent",
    "actor": {
      "id": 1,
      "login": "octocat",
      "display_login": "octocat",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif"
    },
    "repo": {
      "id": 3,
      "name": "octocat/Hello-World",
      "url": "https://api.github.com/repos/octocat/Hello-World"
    },
    "payload": {
      "action": "started"
    },
    "public": false,
    "created_at": "2011-09-06T17:26:27Z",
    "org": {
      "id": 1,
      "login": "github",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/github",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif"
    },
  }
]
```

## CommitCommentEvent

{% data reusables.webhooks.commit_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object for CommitCommentEvent

{% data reusables.webhooks.commit_comment_properties %}

## CreateEvent

{% data reusables.webhooks.create_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object for CreateEvent

{% data reusables.webhooks.create_properties %}

## DeleteEvent

{% data reusables.webhooks.delete_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object for DeleteEvent

{% data reusables.webhooks.delete_properties %}

{% ifversion fpt or ghec %}

## DiscussionEvent

{% data reusables.webhooks.discussion_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object for DiscussionEvent

{% data reusables.webhooks.discussion_properties %}

{% endif %}

## ForkEvent

{% data reusables.webhooks.fork_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object for ForkEvent

{% data reusables.webhooks.fork_properties %}

## GollumEvent

{% data reusables.webhooks.gollum_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object for GollumEvent

{% data reusables.webhooks.gollum_properties %}

## IssueCommentEvent

{% data reusables.webhooks.issue_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object for IssueCommentEvent

{% data reusables.webhooks.issue_comment_webhook_properties %}
{% data reusables.webhooks.issue_comment_properties %}

## IssuesEvent

{% data reusables.webhooks.issues_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object for IssuesEvent

{% data reusables.webhooks.issue_event_api_properties %}
{% data reusables.webhooks.issue_properties %}

## MemberEvent

{% data reusables.webhooks.member_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object for MemberEvent

{% data reusables.webhooks.member_event_api_properties %}
{% data reusables.webhooks.member_properties %}

## PublicEvent

{% data reusables.webhooks.public_short_desc %}

### Event `payload` object for PublicEvent

This event returns an empty `payload` object.

## PullRequestEvent

{% data reusables.webhooks.pull_request_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object for PullRequestEvent

{% data reusables.webhooks.pull_request_event_api_properties %}
{% data reusables.webhooks.pull_request_properties %}

## PullRequestReviewEvent

{% data reusables.webhooks.pull_request_review_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object for PullRequestReviewEvent

{% data reusables.webhooks.pull_request_review_properties %}

## PullRequestReviewCommentEvent

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object for PullRequestReviewCommentEvent

{% data reusables.webhooks.pull_request_review_comment_event_api_properties %}
{% data reusables.webhooks.pull_request_review_comment_properties %}

## PushEvent

{% data reusables.webhooks.push_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object for PushEvent

{% data reusables.webhooks.push_properties %}

## ReleaseEvent

{% data reusables.webhooks.release_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object for ReleaseEvent

{% data reusables.webhooks.release_event_api_properties %}
{% data reusables.webhooks.release_properties %}

## WatchEvent

{% data reusables.webhooks.watch_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object for WatchEvent

{% data reusables.webhooks.watch_properties %}
