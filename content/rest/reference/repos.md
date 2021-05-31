---
title: Repositories
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/repos
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Branches

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'branches' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Collaborators

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'collaborators' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Comments

### Custom media types for commit comments

These are the supported media types for commit comments. You can read more
about the use of media types in the API [here](/rest/overview/media-types).

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

For more information, see "[Custom media types](/rest/overview/media-types)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Commits

The Repo Commits API supports listing, viewing, and comparing commits in a repository.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'commits' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## Community

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'community' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## Contents

These API endpoints let you create, modify, and delete Base64 encoded content in a repository. To request the raw format or rendered HTML (when supported), use custom media types for repository contents.

### Custom media types for repository contents

[READMEs](/rest/reference/repos#get-a-repository-readme), [files](/rest/reference/repos#get-repository-content), and [symlinks](/rest/reference/repos#get-repository-content) support the following custom media types:

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

Use the `.raw` media type to retrieve the contents of the file.

For markup files such as Markdown or AsciiDoc, you can retrieve the rendered HTML using the `.html` media type. Markup languages are rendered to HTML using our open-source [Markup library](https://github.com/github/markup).

[All objects](/rest/reference/repos#get-repository-content) support the following custom media type:

    application/vnd.github.VERSION.object

Use the `object` media type parameter to retrieve the contents in a consistent object format regardless of the content type. For example, instead of an array of objects
for a directory, the response will be an object with an `entries` attribute containing the array of objects.

You can read more about the use of media types in the API [here](/rest/overview/media-types).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'contents' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Deploy keys

{% data reusables.repositories.deploy-keys %}

Deploy keys can either be setup using the following API endpoints, or by using GitHub. To learn how to set deploy keys up in GitHub, see "[Managing deploy keys](/developers/overview/managing-deploy-keys)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'keys' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Deployments

Deployments are requests to deploy a specific ref (branch, SHA, tag). GitHub dispatches a [`deployment` event](/developers/webhooks-and-events/webhook-events-and-payloads#deployment) that external services can listen for and act on when new deployments are created. Deployments enable developers and organizations to build loosely coupled tooling around deployments, without having to worry about the implementation details of delivering different types of applications (e.g., web, native).

Deployment statuses allow external services to mark deployments with an `error`, `failure`, `pending`, `in_progress`, `queued`, or `success` state that systems listening to [`deployment_status` events](/developers/webhooks-and-events/webhook-events-and-payloads#deployment_status) can consume.

Deployment statuses can also include an optional `description` and `log_url`, which are highly recommended because they make deployment statuses more useful. The `log_url` is the full URL to the deployment output, and
the `description` is a high-level summary of what happened with the deployment.

GitHub dispatches `deployment` and `deployment_status` events when new deployments and deployment statuses are created. These events allows third-party integrations to receive respond to deployment requests and update the status of a deployment as progress is made.

Below is a simple sequence diagram for how these interactions would work.

```
+---------+             +--------+            +-----------+        +-------------+
| Tooling |             | GitHub |            | 3rd Party |        | Your Server |
+---------+             +--------+            +-----------+        +-------------+
     |                      |                       |                     |
     |  Create Deployment   |                       |                     |
     |--------------------->|                       |                     |
     |                      |                       |                     |
     |  Deployment Created  |                       |                     |
     |<---------------------|                       |                     |
     |                      |                       |                     |
     |                      |   Deployment Event    |                     |
     |                      |---------------------->|                     |
     |                      |                       |     SSH+Deploys     |
     |                      |                       |-------------------->|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
     |                      |                       |   Deploy Completed  |
     |                      |                       |<--------------------|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
```

Keep in mind that GitHub is never actually accessing your servers. It's up to your third-party integration to interact with deployment events. Multiple systems can listen for deployment events, and it's up to each of those systems to decide whether they're responsible for pushing the code out to your servers, building native code, etc.

Note that the `repo_deployment` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted access to deployments and deployment statuses **without** granting access to repository code, while the {% if currentVersion != "github-ae@latest" %}`public_repo` and{% endif %}`repo` scopes grant permission to code as well.


### Inactive deployments

When you set the state of a deployment to `success`, then all prior non-transient, non-production environment deployments in the same repository to the same environment name will become `inactive`. To avoid this, you can set `auto_inactive` to `false` when creating the deployment status.

You can communicate that a transient environment no longer exists by setting its `state` to `inactive`.  Setting the `state` to `inactive` shows the deployment as `destroyed` in {% data variables.product.prodname_dotcom %} and removes access to it.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'deployments' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
## Environments

The Environments API allows you to create, configure, and delete environments. For more information about environments, see "[Environments](/actions/reference/environments)." To manage environment secrets, see "[Secrets](/rest/reference/actions#secrets)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'environments' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}

## Forks

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'forks' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Invitations

The Repository Invitations API allows users or external services to invite other users to collaborate on a repo. The invited users (or external services on behalf of invited users) can choose to accept or decline the invitations.

Note that the `repo:invite` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted
access to invitations **without** also granting access to repository code, while the
`repo` scope grants permission to code as well as invitations.

### Invite a user to a repository		

Use the API endpoint for adding a collaborator. For more information, see "[Add a repository collaborator](/rest/reference/repos#add-a-repository-collaborator)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'invitations' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Merging

The Repo Merging API supports merging branches in a repository. This accomplishes
essentially the same thing as merging one branch into another in a local repository
and then pushing to {% data variables.product.product_name %}. The benefit is that the merge is done on the server side and a local repository is not needed. This makes it more appropriate for automation and other tools where maintaining local repositories would be cumbersome and inefficient.

The authenticated user will be the author of any merges done through this endpoint.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'merging' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Pages

The {% data variables.product.prodname_pages %} API retrieves information about your {% data variables.product.prodname_pages %} configuration, and the statuses of your builds. Information about the site and the builds can only be accessed by authenticated owners{% if currentVersion != "github-ae@latest" %}, even if the websites are public{% endif %}. For more information, see "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)."

In {% data variables.product.prodname_pages %} API endpoints with a `status` key in their response, the value can be one of:
* `null`: The site has yet to be built.
* `queued`: The build has been requested but not yet begun.
* `building`:The build is in progress.
* `built`: The site has been built.
* `errored`: Indicates an error occurred during the build.

In {% data variables.product.prodname_pages %} API endpoints that  return GitHub Pages site information, the JSON responses include these fields:
* `html_url`: The absolute URL (including scheme) of the rendered Pages site. For example, `https://username.github.io`.
* `source`: An object that contains the source branch and directory for the rendered Pages site. This includes:
   - `branch`: The repository branch used to publish your [site's source files](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). For example, _main_ or _gh-pages_.
   - `path`: The repository directory from which the site publishes. Will be either `/` or `/docs`.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pages' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Releases

{% note %}

**Note:** The Releases API replaces the Downloads API. You can retrieve the download count and browser download URL from the endpoints in this API that return releases and release assets.

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'releases' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Statistics

The Repository Statistics API allows you to fetch the data that {% data variables.product.product_name %} uses for visualizing different
types of repository activity.

### A word about caching

Computing repository statistics is an expensive operation, so we try to return cached
data whenever possible.  If the data hasn't been cached when you query a repository's
statistics, you'll receive a `202` response; a background job is also fired to
start compiling these statistics. Give the job a few moments to complete, and
then submit the request again. If the job has completed, that request will receive a
`200` response with the statistics in the response body.

Repository statistics are cached by the SHA of the repository's default branch; pushing to the default branch resets the statistics cache.

### Statistics exclude some types of commits

The statistics exposed by the API match the statistics shown by [different repository graphs](/github/visualizing-repository-data-with-graphs/about-repository-graphs).

To summarize:
- All statistics exclude merge commits.
- Contributor statistics also exclude empty commits.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statistics' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Statuses

The status API allows external services to mark commits with an `error`,
`failure`, `pending`, or `success` state, which is then reflected in pull requests
involving those commits.

Statuses can also include an optional `description` and `target_url`, and
we highly recommend providing them as they make statuses much more
useful in the GitHub UI.

As an example, one common use is for continuous integration
services to mark commits as passing or failing builds using status.  The
`target_url` would be the full URL to the build output, and the
`description` would be the high level summary of what happened with the
build.

Statuses can include a `context` to indicate what service is providing that status.
For example, you may have your continuous integration service push statuses with a context of `ci`, and a security audit tool push statuses with a context of `security`.  You can
then use the [Get the combined status for a specific reference](/rest/reference/repos#get-the-combined-status-for-a-specific-reference) to retrieve the whole status for a commit.

Note that the `repo:status` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted access to statuses **without** also granting access to repository code, while the
`repo` scope grants permission to code as well as statuses.

If you are developing a GitHub App and want to provide more detailed information about an external service, you may want to use the [Checks API](/rest/reference/checks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statuses' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## Traffic

For repositories that you have push access to, the traffic API provides access
to the information provided in your repository graph. For more information, see "<a href="/github/visualizing-repository-data-with-graphs/viewing-traffic-to-a-repository" class="dotcom-only">Viewing traffic to a repository</a>."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'traffic' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}

## Webhooks

The Repository Webhooks API allows repository admins to manage the post-receive hooks for a repository. Webhooks can be managed using the JSON HTTP API, or the [PubSubHubbub](#PubSubHubbub) API.

If you would like to set up a single webhook to receive events from all of your organization's repositories, see our API documentation for [Organization Webhooks](/rest/reference/orgs#webhooks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

### Receiving Webhooks

In order for {% data variables.product.product_name %} to send webhook payloads, your server needs to be accessible from the Internet. We also highly suggest using SSL so that we can send encrypted payloads over HTTPS.

#### Webhook headers

{% data variables.product.product_name %} will send along several HTTP headers to differentiate between event types and payload identifiers. See [webhook headers](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers) for details.

### PubSubHubbub

GitHub can also serve as a [PubSubHubbub](https://github.com/pubsubhubbub/PubSubHubbub) hub for all repositories. PSHB is a simple publish/subscribe protocol that lets servers register to receive updates when a topic is updated. The updates are sent with an HTTP POST request to a callback URL.
Topic URLs for a GitHub repository's pushes are in this format:

`https://github.com/{owner}/{repo}/events/{event}`

The event can be any available webhook event. For more information, see "[Webhook events and payloads](/developers/webhooks-and-events/webhook-events-and-payloads)."

#### Response format

The default format is what [existing post-receive hooks should expect](/post-receive-hooks/): A JSON body sent as the `payload` parameter in a POST.  You can also specify to receive the raw JSON body with either an `Accept` header, or a `.json` extension.

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

#### Callback URLs

Callback URLs can use the `http://` protocol. {% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}You can also `github://` callbacks to specify a GitHub service.
{% data reusables.apps.deprecating_github_services_ghe %}
{% endif %}

    # Send updates to postbin.org
    http://postbin.org/123

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}
    # Send updates to Campfire
    github://campfire?subdomain=github&room=Commits&token=abc123
{% endif %}

#### Subscribing

The GitHub PubSubHubbub endpoint is: `{% data variables.product.api_url_code %}/hub`. A successful request with curl looks like:

``` shell
curl -u "user" -i \
  {% data variables.product.api_url_pre %}/hub \
  -F "hub.mode=subscribe" \
  -F "hub.topic=https://github.com/{owner}/{repo}/events/push" \
  -F "hub.callback=http://postbin.org/123"
```

PubSubHubbub requests can be sent multiple times. If the hook already exists, it will be modified according to the request.

##### Parameters

Name | Type | Description
-----|------|--------------
``hub.mode``|`string` | **Required**. Either `subscribe` or `unsubscribe`.
``hub.topic``|`string` |**Required**.  The URI of the GitHub repository to subscribe to.  The path must be in the format of `/{owner}/{repo}/events/{event}`.
``hub.callback``|`string` | The URI to receive the updates to the topic.
``hub.secret``|`string` | A shared secret key that generates a hash signature of the outgoing body content.  You can verify a push came from GitHub by comparing the raw request body with the contents of the {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}`X-Hub-Signature` or `X-Hub-Signature-256` headers{% elsif currentVersion ver_lt "enterprise-server@2.23" %}`X-Hub-Signature` header{% elsif currentVersion == "github-ae@latest" %}`X-Hub-Signature-256` header{% endif %}. You can see [the PubSubHubbub documentation](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify) for more details.
