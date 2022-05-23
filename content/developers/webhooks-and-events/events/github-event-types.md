---
title: GitHub event types
intro: 'For the {% data variables.product.prodname_dotcom %} Events API, learn about each event type, the triggering action on {% data variables.product.prodname_dotcom %}, and each event''s unique properties.'
redirect_from:
  - /v3/activity/event_types
  - /developers/webhooks-and-events/github-event-types
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Events
---
The Events API can return different types of events triggered by activity on GitHub. Each event response contains shared properties, but has a unique `payload` object determined by its event type. The [Event object common properties](#event-object-common-properties) describes the properties shared by all events, and each event type describes the `payload` properties that are unique to the specific event.

{% ifversion fpt or ghec %}

{% endif %}

## Event object common properties

The event objects returned from the Events API endpoints have the same structure.

| Event API attribute name | Description |
|--------------------------|-------------|
| `id` | Unique identifier for the event. |
| `type` | The type of event. Events uses PascalCase for the name. |
| `actor` | The user that triggered the event. |
| `actor.id` | The unique identifier for the actor. |
| `actor.login` | The username of the actor. |
| `actor.display_login` | The specific display format of the username. |
| `actor.gravatar_id` | The unique identifier of the Gravatar profile for the actor. |
| `actor.url` | The REST API URL used to retrieve the user object, which includes additional user information. |
| `actor.avatar_url` | The URL of the actor's profile image. |
| `repo` | The repository object where the event occurred.  |
| `repo.id` | The unique identifier of the repository. |
| `repo.name` | The name of the repository, which includes the owner and repository name. For example, `octocat/hello-world` is the name of the `hello-world` repository owned by the `octocat` personal account. |
| `repo.url` | The REST API URL used to retrieve the repository object, which includes additional repository information. |
| `payload` | The event payload object is unique to the event type. See the event type below for the event API `payload` object. |

### Example WatchEvent event object

This example shows the format of the [WatchEvent](#watchevent) response when using the [Events API](/rest/reference/activity#events).

```
HTTP/2 200
Link: <https://api.github.com/resource?page=2>; rel="next",
      <https://api.github.com/resource?page=5>; rel="last"
```
```json
[
  {
    "type": "WatchEvent",
    "public": false,
    "payload": {
    },
    "repo": {
      "id": 3,
      "name": "octocat/Hello-World",
      "url": "https://api.github.com/repos/octocat/Hello-World"
    },
    "actor": {
      "id": 1,
      "login": "octocat",
      "gravatar_id": "",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "url": "https://api.github.com/users/octocat"
    },
    "org": {
      "id": 1,
      "login": "github",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/github",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif"
    },
    "created_at": "2011-09-06T17:26:27Z",
    "id": "12345"
  }
]
```

## CommitCommentEvent

{% data reusables.webhooks.commit_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object

{% data reusables.webhooks.commit_comment_properties %}

## CreateEvent

{% data reusables.webhooks.create_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object

{% data reusables.webhooks.create_properties %}

## DeleteEvent

{% data reusables.webhooks.delete_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object

{% data reusables.webhooks.delete_properties %}

## ForkEvent

{% data reusables.webhooks.fork_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object

{% data reusables.webhooks.fork_properties %}

## GollumEvent

{% data reusables.webhooks.gollum_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object

{% data reusables.webhooks.gollum_properties %}

## IssueCommentEvent

{% data reusables.webhooks.issue_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object

{% data reusables.webhooks.issue_comment_webhook_properties %}
{% data reusables.webhooks.issue_comment_properties %}

## IssuesEvent

{% data reusables.webhooks.issues_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object

{% data reusables.webhooks.issue_event_api_properties %}
{% data reusables.webhooks.issue_properties %}

## MemberEvent

{% data reusables.webhooks.member_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object

{% data reusables.webhooks.member_event_api_properties %}
{% data reusables.webhooks.member_properties %}

{% ifversion fpt or ghes or ghec %}
## PublicEvent

{% data reusables.webhooks.public_short_desc %}
### Event `payload` object

This event returns an empty `payload` object.
{% endif %}
## PullRequestEvent

{% data reusables.webhooks.pull_request_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object

{% data reusables.webhooks.pull_request_event_api_properties %}
{% data reusables.webhooks.pull_request_properties %}

## PullRequestReviewEvent

{% data reusables.webhooks.pull_request_review_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object

Key | Type | Description
----|------|-------------
`action` | `string` | The action that was performed. Can be `created`.
`pull_request` | `object` | The pull request the review pertains to.
`review` | `object` |	The review that was affected.

## PullRequestReviewCommentEvent

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object

{% data reusables.webhooks.pull_request_review_comment_event_api_properties %}
{% data reusables.webhooks.pull_request_review_comment_properties %}

## PullRequestReviewThreadEvent

{% data reusables.webhooks.pull_request_review_thread_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object

{% data reusables.webhooks.pull_request_thread_properties %}

## PushEvent

{% data reusables.webhooks.push_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object

Key | Type | Description
----|------|-------------
`push_id` | `integer` | Unique identifier for the push.
`size`|`integer` | The number of commits in the push.
`distinct_size`|`integer` | The number of distinct commits in the push.
`ref`|`string` | The full [`git ref`](/rest/reference/git#refs) that was pushed. Example: `refs/heads/main`.
`head`|`string` | The SHA of the most recent commit on `ref` after the push.
`before`|`string` | The SHA of the most recent commit on `ref` before the push.
`commits`|`array` | An array of commit objects describing the pushed commits. (The array includes a maximum of 20 commits. If necessary, you can use the [Commits API](/rest/reference/repos#commits) to fetch additional commits. This limit is applied to timeline events only and isn't applied to webhook deliveries.)
`commits[][sha]`|`string` | The SHA of the commit.
`commits[][message]`|`string` | The commit message.
`commits[][author]`|`object` | The git author of the commit.
`commits[][author][name]`|`string` | The git author's name.
`commits[][author][email]`|`string` | The git author's email address.
`commits[][url]`|`url` | URL that points to the commit API resource.
`commits[][distinct]`|`boolean` | Whether this commit is distinct from any that have been pushed before.

## ReleaseEvent

{% data reusables.webhooks.release_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object

{% data reusables.webhooks.release_event_api_properties %}
{% data reusables.webhooks.release_properties %}

{% ifversion fpt or ghec %}
## SponsorshipEvent

{% data reusables.webhooks.sponsorship_short_desc %}

### Event `payload` object

{% data reusables.webhooks.sponsorship_event_api_properties %}
{% data reusables.webhooks.sponsorship_properties %}
{% endif %}

## WatchEvent

{% data reusables.webhooks.watch_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### Event `payload` object

{% data reusables.webhooks.watch_properties %}
