---
title: Webhook events and payloads
intro: 'For each webhook event, you can review when the event occurs, an example payload, and descriptions about the payload object parameters.'
product: '{% data reusables.gated-features.enterprise_account_webhooks %}'
redirect_from:
  - /early-access/integrations/webhooks/
  - /v3/activity/events/types/
  - /webhooks/event-payloads
  - /developers/webhooks-and-events/webhook-events-and-payloads
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Webhooks
---

{% if currentVersion == "free-pro-team@latest" %}

{% endif %}

{% data reusables.webhooks.webhooks_intro %}

You can create webhooks that subscribe to the events listed on this page. Each webhook event includes a description of the webhook properties and an example payload. For more information, see "[Creating webhooks](/webhooks/creating/)."

### Webhook payload object common properties

Each webhook event payload also contains properties unique to the event. You can find the unique properties in the individual event type sections.

| 키    | 유형    | 설명                                                                                                               |
| ---- | ----- | ---------------------------------------------------------------------------------------------------------------- |
| `동작` | `문자열` | Most webhook payloads contain an `action` property that contains the specific activity that triggered the event. |
{% data reusables.webhooks.sender_desc %} This property is included in every webhook payload.
{% data reusables.webhooks.repo_desc %} Webhook payloads contain the `repository` property when the event occurs from activity in a repository.
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %} For more information, see "[Building {% data variables.product.prodname_github_app %}](/apps/building-github-apps/)."

The unique properties for a webhook event are the same properties you'll find in the `payload` property when using the [Events API](/rest/reference/activity#events). One exception is the [`push` event](#push). The unique properties of the `push` event webhook payload and the `payload` property in the Events API differ. The webhook payload contains more detailed information.

{% tip %}

**Note:** Payloads are capped at 25 MB. If your event generates a larger payload, a webhook will not be fired. This may happen, for example, on a `create` event if many branches or tags are pushed at once. We suggest monitoring your payload size to ensure delivery.

{% endtip %}

#### Delivery headers

HTTP POST payloads that are delivered to your webhook's configured URL endpoint will contain several special headers:

| Header                        | 설명                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `X-GitHub-Event`              | Name of the event that triggered the delivery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `X-GitHub-Delivery`           | A [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier) to identify the delivery.{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
| `X-GitHub-Enterprise-Version` | The version of the {% data variables.product.prodname_ghe_server %} instance that sent the HTTP POST payload.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `X-GitHub-Enterprise-Host`    | The hostname of the {% data variables.product.prodname_ghe_server %} instance that sent the HTTP POST payload.{% endif %}{% if currentVersion != "github-ae@latest" %}
| `X-Hub-Signature`             | This header is sent if the webhook is configured with a [`secret`](/rest/reference/repos#create-hook-config-params). This is the HMAC hex digest of the request body, and is generated using the SHA-1 hash function and the `secret` as the HMAC `key`.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} `X-Hub-Signature` is provided for compatibility with existing integrations, and we recommend that you use the more secure `X-Hub-Signature-256` instead.{% endif %}{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `X-Hub-Signature-256`         | This header is sent if the webhook is configured with a [`secret`](/rest/reference/repos#create-hook-config-params). This is the HMAC hex digest of the request body, and is generated using the SHA-256 hash function and the `secret` as the HMAC `key`.{% endif %}

Also, the `User-Agent` for the requests will have the prefix `GitHub-Hookshot/`.

#### Example delivery

```shell
> POST /payload HTTP/2

> Host: localhost:4567
> X-GitHub-Delivery: 72d3162e-cc78-11e3-81ab-4c9367dc0958{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
> X-GitHub-Enterprise-Version: 2.15.0
> X-GitHub-Enterprise-Host: example.com{% endif %}{% if currentVersion != "github-ae@latest" %}
> X-Hub-Signature: sha1=7d38cdd689735b008b3c702edd92eea23791c5f6{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
> X-Hub-Signature-256: sha256=d57c68ca6f92289e6987922ff26938930f6e66a2d161ef06abdf1859230aa23c{% endif %}
> User-Agent: GitHub-Hookshot/044aadd
> Content-Type: application/json
> Content-Length: 6615
> X-GitHub-Event: issues

> {
>   "action": "opened",
>   "issue": {
>     "url": "{% data variables.product.api_url_pre %}/repos/octocat/Hello-World/issues/1347",
>     "number": 1347,
>     ...
>   },
>   "repository" : {
>     "id": 1296269,
>     "full_name": "octocat/Hello-World",
>     "owner": {
>       "login": "octocat",
>       "id": 1,
>       ...
>     },
>     ...
>   },
>   "sender": {
>     "login": "octocat",
>     "id": 1,
>     ...
>   }
> }
```

### check_run

{% data reusables.webhooks.check_run_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

#### Availability

- Repository webhooks only receive payloads for the `created` and `completed` event types in a repository
- Organization webhooks only receive payloads for the `created` and `completed` event types in repositories
- {% data variables.product.prodname_github_app %}s with the `checks:read` permission receive payloads for the `created` and `completed` events that occur in the repository where the app is installed. The app must have the `checks:write` permission to receive the `rerequested` and `requested_action` event types. The `rerequested` and `requested_action` event type payloads are only sent to the {% data variables.product.prodname_github_app %} being requested. {% data variables.product.prodname_github_app %}s with the `checks:write` are automatically subscribed to this webhook event.

#### Webhook payload object

{% data reusables.webhooks.check_run_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.check_run.created }}

### check_suite

{% data reusables.webhooks.check_suite_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

#### Availability

- Repository webhooks only receive payloads for the `completed` event types in a repository
- Organization webhooks only receive payloads for the `completed` event types in repositories
- {% data variables.product.prodname_github_app %}s with the `checks:read` permission receive payloads for the `created` and `completed` events that occur in the repository where the app is installed. The app must have the `checks:write` permission to receive the `requested` and `rerequested` event types. The `requested` and `rerequested` event type payloads are only sent to the {% data variables.product.prodname_github_app %} being requested. {% data variables.product.prodname_github_app %}s with the `checks:write` are automatically subscribed to this webhook event.

#### Webhook payload object

{% data reusables.webhooks.check_suite_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.check_suite.completed }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### code_scanning_alert

{% data reusables.webhooks.code_scanning_alert_event_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `security_events :read` permission

#### Webhook payload object

{% data reusables.webhooks.code_scanning_alert_event_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
`sender` | `object` | If the `action` is `reopened_by_user` or `closed_by_user`, the `sender` object will be the user that triggered the event. The `sender` object is {% if currentVersion == "free-pro-team@latest" %}`github` {% elsif currentVersion ver_gt "enterprise-server@3.0" %}`github-enterprise` {% else %}empty {% endif %}for all other actions.

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.code_scanning_alert.reopened }}

### commit_comment

{% data reusables.webhooks.commit_comment_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `contents` permission

#### Webhook payload object

{% data reusables.webhooks.commit_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.commit_comment.created }}
{% endif %}

### content_reference

{% data reusables.webhooks.content_reference_short_desc %}

Webhook events are triggered based on the specificity of the domain you register. For example, if you register a subdomain (`https://subdomain.example.com`) then only URLs for the subdomain trigger this event. If you register a domain (`https://example.com`) then URLs for domain and all subdomains trigger this event. See "[Create a content attachment](/rest/reference/apps#create-a-content-attachment)" to create a new content attachment.

#### Availability

- {% data variables.product.prodname_github_app %}s with the `content_references:write` permission

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.content_reference.created }}

### create

{% data reusables.webhooks.create_short_desc %}

{% note %}

**Note:** You will not receive a webhook for this event when you push more than three tags at once.

{% endnote %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `contents` permission

#### Webhook payload object

{% data reusables.webhooks.create_properties %}
{% data reusables.webhooks.pusher_type_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.create }}

### delete

{% data reusables.webhooks.delete_short_desc %}

{% note %}

**Note:** You will not receive a webhook for this event when you delete more than three tags at once.

{% endnote %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `contents` permission

#### Webhook payload object

{% data reusables.webhooks.delete_properties %}
{% data reusables.webhooks.pusher_type_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.delete }}

### deploy_key

{% data reusables.webhooks.deploy_key_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks

#### Webhook payload object

{% data reusables.webhooks.deploy_key_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.deploy_key.created }}

### deployment

{% data reusables.webhooks.deployment_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `deployments` permission

#### Webhook payload object

| 키            | 유형                                                                                                                                          | 설명                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
| `동작`         | `문자열`                                                                                                                                       | The action performed. Can be `created`.{% endif %}
| `deployment` | `개체`                                                                                                                                        | The [deployment](/rest/reference/repos#list-deployments). |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.deployment }}

### deployment_status

{% data reusables.webhooks.deployment_status_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `deployments` permission

#### Webhook payload object

| 키                                  | 유형                                                                                                                                          | 설명                                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
| `동작`                               | `문자열`                                                                                                                                       | The action performed. Can be `created`.{% endif %}
| `deployment_status`                | `개체`                                                                                                                                        | The [deployment status](/rest/reference/repos#list-deployment-statuses).                      |
| `deployment_status["state"]`       | `문자열`                                                                                                                                       | The new state. Can be `pending`, `success`, `failure`, or `error`.                            |
| `deployment_status["target_url"]`  | `문자열`                                                                                                                                       | The optional link added to the status.                                                        |
| `deployment_status["description"]` | `문자열`                                                                                                                                       | The optional human-readable description added to the status.                                  |
| `deployment`                       | `개체`                                                                                                                                        | The [deployment](/rest/reference/repos#list-deployments) that this status is associated with. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.deployment_status }}

{% if currentVersion == "free-pro-team@latest" %}
### 토론

{% data reusables.webhooks.discussions-webhooks-beta %}

Activity related to a discussion. For more information, see the "[Using the GraphQL API for discussions](/graphql/guides/using-the-graphql-api-for-discussions)."
#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `discussions` permission

#### Webhook payload object

| 키    | 유형    | 설명                                                                                                                                                                       |
| ---- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `동작` | `문자열` | The action performed. Can be `created`, `edited`, `deleted`, `pinned`, `unpinned`, `locked`, `unlocked`, `transferred`, `category_changed`, `answered`, or `unanswered`. |
{% data reusables.webhooks.discussion_desc %}
{% data reusables.webhooks.repo_desc_graphql %}
{% data reusables.webhooks.org_desc_graphql %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.discussion.created }}

### discussion_comment

{% data reusables.webhooks.discussions-webhooks-beta %}

Activity related to a comment in a discussion. For more information, see "[Using the GraphQL API for discussions](/graphql/guides/using-the-graphql-api-for-discussions)."

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `discussions` permission

#### Webhook payload object

| 키    | 유형    | 설명                                                                                                            |
| ---- | ----- | ------------------------------------------------------------------------------------------------------------- |
| `동작` | `문자열` | The action performed. Can be `created`, `edited`, or `deleted`.                                               |
| `의견` | `개체`  | The [`discussion comment`](/graphql/guides/using-the-graphql-api-for-discussions#discussioncomment) resource. |
{% data reusables.webhooks.discussion_desc %}
{% data reusables.webhooks.repo_desc_graphql %}
{% data reusables.webhooks.org_desc_graphql %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.discussion_comment.created }}
{% endif %}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

### 엔터프라이즈

{% data reusables.webhooks.enterprise_short_desc %}

#### Availability

- GitHub Enterprise webhooks. For more information, "[Global webhooks](/rest/reference/enterprise-admin#global-webhooks/)."

#### Webhook payload object

| 키    | 유형    | 설명                                                                                      |
| ---- | ----- | --------------------------------------------------------------------------------------- |
| `동작` | `문자열` | The action performed. Can be `anonymous_access_enabled` or `anonymous_access_disabled`. |

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.enterprise.anonymous_access_enabled }}

{% endif %}

### 포크

{% data reusables.webhooks.fork_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `contents` permission

#### Webhook payload object

{% data reusables.webhooks.fork_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.fork }}

### github_app_authorization

When someone revokes their authorization of a {% data variables.product.prodname_github_app %}, this event occurs. A {% data variables.product.prodname_github_app %} receives this webhook by default and cannot unsubscribe from this event.

{% data reusables.webhooks.authorization_event %} For details about user-to-server requests, which require {% data variables.product.prodname_github_app %} authorization, see "[Identifying and authorizing users for {% data variables.product.prodname_github_app %}s](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)."

#### Availability

- {% data variables.product.prodname_github_app %}s

#### Webhook payload object

| 키    | 유형    | 설명                                      |
| ---- | ----- | --------------------------------------- |
| `동작` | `문자열` | The action performed. Can be `revoked`. |
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.github_app_authorization.revoked }}

### gollum

{% data reusables.webhooks.gollum_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `contents` permission

#### Webhook payload object

{% data reusables.webhooks.gollum_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.gollum }}

### 설치

{% data reusables.webhooks.installation_short_desc %}

{% note %}

**Note:** This event replaces the deprecated `integration_installation` event.

{% endnote %}

#### Availability

- {% data variables.product.prodname_github_app %}s

#### Webhook payload object

{% data reusables.webhooks.installation_properties %}
{% data reusables.webhooks.app_always_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.installation.deleted }}

### installation_repositories

{% data reusables.webhooks.installation_repositories_short_desc %}

{% note %}

**Note:** This event replaces the deprecated `integration_installation_repositories` event.

{% endnote %}

#### Availability

- {% data variables.product.prodname_github_app %}s

#### Webhook payload object

{% data reusables.webhooks.installation_repositories_properties %}
{% data reusables.webhooks.app_always_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.installation_repositories.added }}

### issue_comment

{% data reusables.webhooks.issue_comment_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `issues` permission

#### Webhook payload object

{% data reusables.webhooks.issue_comment_webhook_properties %}
{% data reusables.webhooks.issue_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.issue_comment.created }}

### issues

{% data reusables.webhooks.issues_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `issues` permission

#### Webhook payload object

{% data reusables.webhooks.issue_webhook_properties %}
{% data reusables.webhooks.issue_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example when someone edits an issue

{{ webhookPayloadsForCurrentVersion.issues.edited }}

### 레이블

{% data reusables.webhooks.label_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `metadata` permission

#### Webhook payload object

| 키                      | 유형    | 설명                                                                       |
| ---------------------- | ----- | ------------------------------------------------------------------------ |
| `동작`                   | `문자열` | The action that was performed. Can be `created`, `edited`, or `deleted`. |
| `레이블`                  | `개체`  | The label that was added.                                                |
| `changes`              | `개체`  | The changes to the label if the action was `edited`.                     |
| `changes[name][from]`  | `문자열` | The previous version of the name if the action was `edited`.             |
| `changes[color][from]` | `문자열` | The previous version of the color if the action was `edited`.            |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.label.deleted }}

{% if currentVersion == "free-pro-team@latest" %}
### marketplace_purchase

Activity related to a GitHub Marketplace purchase. {% data reusables.webhooks.action_type_desc %} For more information, see the "[GitHub Marketplace](/marketplace/)."

#### Availability

- {% data variables.product.prodname_github_app %}s

#### Webhook payload object

| 키    | 유형    | 설명                                                                                                                            |
| ---- | ----- | ----------------------------------------------------------------------------------------------------------------------------- |
| `동작` | `문자열` | The action performed for a [GitHub Marketplace](https://github.com/marketplace) plan. Can be one of:<ul><li>`purchased` - Someone purchased a GitHub Marketplace plan. The change should take effect on the account immediately.</li><li>`pending_change` - You will receive the `pending_change` event when someone has downgraded or cancelled a GitHub Marketplace plan to indicate a change will occur on the account. The new plan or cancellation takes effect at the end of the billing cycle.  The `cancelled` or `changed` event type will be sent when the billing cycle has ended and the cancellation or new plan should take effect.</li><li>`pending_change_cancelled` - Someone has cancelled a pending change. Pending changes include plan cancellations and downgrades that will take effect at the end of a billing cycle. </li><li>`changed` - Someone has upgraded or downgraded a GitHub Marketplace plan and the change should take effect on the account immediately.</li><li>`cancelled` - Someone cancelled a GitHub Marketplace plan and the last billing cycle has ended. The change should take effect on the account immediately.</li></ul> |

For a detailed description of this payload and the payload for each type of `action`, see [{% data variables.product.prodname_marketplace %} webhook events](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/).

#### Webhook payload example when someone purchases the plan

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

{% endif %}

### 구성원

{% data reusables.webhooks.member_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `members` permission

#### Webhook payload object

{% data reusables.webhooks.member_webhook_properties %}
{% data reusables.webhooks.member_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.member.added }}

### membership

{% data reusables.webhooks.membership_short_desc %}

#### Availability

- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `members` permission

#### Webhook payload object

{% data reusables.webhooks.membership_properties %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.membership.removed }}

### meta

The webhook this event is configured on was deleted. This event will only listen for changes to the particular hook the event is installed on. Therefore, it must be selected for each hook that you'd like to receive meta events for.

#### Availability

- Repository webhooks
- Organization webhooks

#### Webhook payload object

| 키         | 유형        | 설명                                                                                                                                                         |
| --------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `동작`      | `문자열`     | The action performed. Can be `deleted`.                                                                                                                    |
| `hook_id` | `integer` | The id of the modified webhook.                                                                                                                            |
| `후크`      | `개체`      | The modified webhook. This will contain different keys based on the type of webhook it is: repository, organization, business, app, or GitHub Marketplace. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.meta.deleted }}

### 마일스톤

{% data reusables.webhooks.milestone_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `pull_requests` permission

#### Webhook payload object

{% data reusables.webhooks.milestone_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.milestone.created }}

### 조직

{% data reusables.webhooks.organization_short_desc %}

#### Availability

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
- GitHub Enterprise webhooks only receive `created` and `deleted` events. For more information, "[Global webhooks](/rest/reference/enterprise-admin#global-webhooks/).{% endif %}
- Organization webhooks only receive the `deleted`, `added`, `removed`, `renamed`, and `invited` events
- {% data variables.product.prodname_github_app %}s with the `members` permission

#### Webhook payload object

| 키            | 유형    | 설명                                                                                                                                                                                                                                                |
| ------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `동작`         | `문자열` | The action that was performed. Can be one of:{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} `created`,{% endif %} `deleted`, `renamed`, `member_added`, `member_removed`, or `member_invited`. |
| `초대`         | `개체`  | The invitation for the user or email if the action is `member_invited`.                                                                                                                                                                           |
| `membership` | `개체`  | The membership between the user and the organization.  Not present when the action is `member_invited`.                                                                                                                                           |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.organization.member_added }}

{% if currentVersion == "free-pro-team@latest" %}

### org_block

{% data reusables.webhooks.org_block_short_desc %}

#### Availability

- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `organization_administration` permission

#### Webhook payload object

| 키              | 유형    | 설명                                                        |
| -------------- | ----- | --------------------------------------------------------- |
| `동작`           | `문자열` | The action performed. Can be `blocked` or `unblocked`.    |
| `blocked_user` | `개체`  | Information about the user that was blocked or unblocked. |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.org_block.blocked }}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}

### 패키지

Activity related to {% data variables.product.prodname_registry %}. {% data reusables.webhooks.action_type_desc %} For more information, see "[Managing packages with {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages)" to learn more about {% data variables.product.prodname_registry %}.

#### Availability

- Repository webhooks
- Organization webhooks

#### Webhook payload object

{% data reusables.webhooks.package_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.package.published }}
{% endif %}

### page_build

{% data reusables.webhooks.page_build_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `pages` permission

#### Webhook payload object

| 키       | 유형        | 설명                                                                                     |
| ------- | --------- | -------------------------------------------------------------------------------------- |
| `id`    | `integer` | The unique identifier of the page build.                                               |
| `build` | `개체`      | The [List GitHub Pages builds](/rest/reference/repos#list-github-pages-builds) itself. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.page_build }}

### ping

{% data reusables.webhooks.ping_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s receive a ping event with an `app_id` used to register the app

#### Webhook payload object

| 키              | 유형        | 설명                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `zen`          | `문자열`     | Random string of GitHub zen.                                                                                                                                                                                                                                                                                                                                                                         |
| `hook_id`      | `integer` | The ID of the webhook that triggered the ping.                                                                                                                                                                                                                                                                                                                                                       |
| `후크`           | `개체`      | The [webhook configuration](/rest/reference/repos#get-a-repository-webhook).                                                                                                                                                                                                                                                                                                                         |
| `hook[app_id]` | `integer` | When you register a new {% data variables.product.prodname_github_app %}, {% data variables.product.product_name %} sends a ping event to the **webhook URL** you specified during registration. The event contains the `app_id`, which is required for [authenticating](/apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps/) an app. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.ping }}

### project_card

{% data reusables.webhooks.project_card_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `repository_projects` or `organization_projects` permission

#### Webhook payload object

{% data reusables.webhooks.project_card_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.project_card.created }}

### project_column

{% data reusables.webhooks.project_column_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `repository_projects` or `organization_projects` permission

#### Webhook payload object

{% data reusables.webhooks.project_column_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.project_column.created }}

### 프로젝트

{% data reusables.webhooks.project_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `repository_projects` or `organization_projects` permission

#### Webhook payload object

{% data reusables.webhooks.project_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.project.created }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### public

{% data reusables.webhooks.public_short_desc %}
#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `metadata` permission

#### Webhook payload object

| 키 | 유형 | 설명 |
| - | -- | -- |
|   |    |    |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.public }}
{% endif %}
### pull_request

{% data reusables.webhooks.pull_request_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `pull_requests` permission

#### Webhook payload object

{% data reusables.webhooks.pull_request_webhook_properties %}
{% data reusables.webhooks.pull_request_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

Deliveries for `review_requested` and `review_request_removed` events will have an additional field called `requested_reviewer`.

{{ webhookPayloadsForCurrentVersion.pull_request.opened }}

### pull_request_review

{% data reusables.webhooks.pull_request_review_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `pull_requests` permission

#### Webhook payload object

{% data reusables.webhooks.pull_request_review_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.pull_request_review.submitted }}

### pull_request_review_comment

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `pull_requests` permission

#### Webhook payload object

{% data reusables.webhooks.pull_request_review_comment_webhook_properties %}
{% data reusables.webhooks.pull_request_review_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.pull_request_review_comment.created }}

### 푸시

{% data reusables.webhooks.push_short_desc %}

{% note %}

**Note:** You will not receive a webhook for this event when you push more than three tags at once.

{% endnote %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `contents` permission

#### Webhook payload object

| 키                          | 유형        | 설명                                                                                                                                                                                                                                                                                                     |
| -------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ref`                      | `문자열`     | The full [`git ref`](/rest/reference/git#refs) that was pushed. Example: `refs/heads/main`.                                                                                                                                                                                                            |
| `before`                   | `문자열`     | The SHA of the most recent commit on `ref` before the push.                                                                                                                                                                                                                                            |
| `after`                    | `문자열`     | The SHA of the most recent commit on `ref` after the push.                                                                                                                                                                                                                                             |
| `commits`                  | `array`   | An array of commit objects describing the pushed commits. (The array includes a maximum of 20 commits. If necessary, you can use the [Commits API](/rest/reference/repos#commits) to fetch additional commits. This limit is applied to timeline events only and isn't applied to webhook deliveries.) |
| `commits[][id]`            | `문자열`     | The SHA of the commit.                                                                                                                                                                                                                                                                                 |
| `commits[][timestamp]`     | `문자열`     | The ISO 8601 timestamp of the commit.                                                                                                                                                                                                                                                                  |
| `commits[][message]`       | `문자열`     | The commit message.                                                                                                                                                                                                                                                                                    |
| `commits[][author]`        | `개체`      | The git author of the commit.                                                                                                                                                                                                                                                                          |
| `commits[][author][name]`  | `문자열`     | The git author's name.                                                                                                                                                                                                                                                                                 |
| `commits[][author][email]` | `문자열`     | The git author's email address.                                                                                                                                                                                                                                                                        |
| `commits[][url]`           | `url`     | URL that points to the commit API resource.                                                                                                                                                                                                                                                            |
| `commits[][distinct]`      | `boolean` | Whether this commit is distinct from any that have been pushed before.                                                                                                                                                                                                                                 |
| `commits[][added]`         | `array`   | An array of files added in the commit.                                                                                                                                                                                                                                                                 |
| `commits[][modified]`      | `array`   | An array of files modified by the commit.                                                                                                                                                                                                                                                              |
| `commits[][removed]`       | `array`   | An array of files removed in the commit.                                                                                                                                                                                                                                                               |
| `pusher`                   | `개체`      | The user who pushed the commits.                                                                                                                                                                                                                                                                       |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.push }}

### 릴리스

{% data reusables.webhooks.release_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `contents` permission

#### Webhook payload object

{% data reusables.webhooks.release_webhook_properties %}
{% data reusables.webhooks.release_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.release.published }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
### repository_dispatch

This event occurs when a {% data variables.product.prodname_github_app %} sends a `POST` request to the "[Create a repository dispatch event](/rest/reference/repos#create-a-repository-dispatch-event)" endpoint.

#### Availability

- {% data variables.product.prodname_github_app %}s must have the `contents` permission to receive this webhook.

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.repository_dispatch }}
{% endif %}

### 리포지토리

{% data reusables.webhooks.repository_short_desc %}

#### Availability

- Repository webhooks receive all event types except `deleted`
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `metadata` permission receive all event types except `deleted`

#### Webhook payload object

| 키    | 유형    | 설명                                                                          |
| ---- | ----- | --------------------------------------------------------------------------- |
| `동작` | `문자열` | The action that was performed. This can be one of:<ul><li>`created` - A repository is created.</li><li>`deleted` - A repository is deleted.</li><li>`archived` - A repository is archived.</li><li>`unarchived` - A repository is unarchived.</li>{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}<li>`anonymous_access_enabled` - A repository is [enabled for anonymous Git access](/rest/overview/api-previews#anonymous-git-access-to-repositories), `anonymous_access_disabled` - A repository is [disabled for anonymous Git access](/rest/overview/api-previews#anonymous-git-access-to-repositories)</li>{% endif %}<li>`edited` - A repository's information is edited.</li><li>`renamed` - A repository is renamed.</li><li>`transferred` - A repository is transferred.</li><li>`publicized` - A repository is made public.</li><li> `privatized` - A repository is made private.</li></ul> |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.repository.publicized }}

{% if currentVersion == "free-pro-team@latest"%}
### repository_import

{% data reusables.webhooks.repository_import_short_desc %} To receive this event for a personal repository, you must create an empty repository prior to the import. This event can be triggered using either the [GitHub Importer](/articles/importing-a-repository-with-github-importer/) or the [Source imports API](/rest/reference/migrations#source-imports).

#### Availability

- Repository webhooks
- Organization webhooks

#### Webhook payload object

{% data reusables.webhooks.repository_import_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.repository_import }}

### repository_vulnerability_alert

{% data reusables.webhooks.repository_vulnerability_alert_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks

#### Webhook payload object

{% data reusables.webhooks.repository_vulnerability_alert_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.repository_vulnerability_alert.create }}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}

### secret_scanning_alert

{% data reusables.webhooks.secret_scanning_alert_event_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `secret_scanning_alerts:read` permission

#### Webhook payload object

{% data reusables.webhooks.secret_scanning_alert_event_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
`sender` | `object` | If the `action` is `resolved` or `reopened`, the `sender` object will be the user that triggered the event. The `sender` object is empty for all other actions.

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert.reopened }}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@1.19" %}
### security_advisory

Activity related to a security advisory. A security advisory provides information about security-related vulnerabilities in software on GitHub. The security advisory dataset also powers the GitHub security alerts, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/)."
{% endif %}

#### Availability

- {% data variables.product.prodname_github_app %}s with the `security_events` permission

#### Webhook payload object

| 키                   | 유형    | 설명                                                                                                                 |
| ------------------- | ----- | ------------------------------------------------------------------------------------------------------------------ |
| `동작`                | `문자열` | The action that was performed. The action can be one of `published`, `updated`, or `performed` for all new events. |
| `security_advisory` | `개체`  | The details of the security advisory, including summary, description, and severity.                                |

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.security_advisory.published }}

{% if currentVersion == "free-pro-team@latest" %}
### sponsorship

{% data reusables.webhooks.sponsorship_short_desc %}

You can only create a sponsorship webhook on {% data variables.product.prodname_dotcom %}. For more information, see "[Configuring webhooks for events in your sponsored account](/sponsors/integrating-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account)".

#### Availability

- Sponsored accounts

#### Webhook payload object

{% data reusables.webhooks.sponsorship_webhook_properties %}
{% data reusables.webhooks.sponsorship_properties %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example when someone creates a sponsorship

{{ webhookPayloadsForCurrentVersion.sponsorship.created }}

#### Webhook payload example when someone downgrades a sponsorship

{{ webhookPayloadsForCurrentVersion.sponsorship.downgraded }}

{% endif %}

### 별표

{% data reusables.webhooks.star_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks

#### Webhook payload object

{% data reusables.webhooks.star_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.star.created }}

### 상태

{% data reusables.webhooks.status_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `statuses` permission

#### Webhook payload object

| 키            | 유형        | 설명                                                                                                                                                                                            |
| ------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`         | `integer` | The unique identifier of the status.                                                                                                                                                          |
| `sha`        | `문자열`     | The Commit SHA.                                                                                                                                                                               |
| `state`      | `문자열`     | The new state. Can be `pending`, `success`, `failure`, or `error`.                                                                                                                            |
| `설명`         | `문자열`     | The optional human-readable description added to the status.                                                                                                                                  |
| `target_url` | `문자열`     | The optional link added to the status.                                                                                                                                                        |
| `branches`   | `array`   | An array of branch objects containing the status' SHA. Each branch contains the given SHA, but the SHA may or may not be the head of the branch. The array includes a maximum of 10 branches. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.status }}

### 팀

{% data reusables.webhooks.team_short_desc %}

#### Availability

- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `members` permission

#### Webhook payload object

| 키                                               | 유형        | 설명                                                                                                                                                                                                                                                         |
| ----------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `동작`                                            | `문자열`     | The action that was performed. Can be one of `created`, `deleted`, `edited`, `added_to_repository`, or `removed_from_repository`.                                                                                                                          |
| `팀`                                             | `개체`      | The team itself.                                                                                                                                                                                                                                           |
| `changes`                                       | `개체`      | The changes to the team if the action was `edited`.                                                                                                                                                                                                        |
| `changes[description][from]`                    | `문자열`     | The previous version of the description if the action was `edited`.                                                                                                                                                                                        |
| `changes[name][from]`                           | `문자열`     | The previous version of the name if the action was `edited`.                                                                                                                                                                                               |
| `changes[privacy][from]`                        | `문자열`     | The previous version of the team's privacy if the action was `edited`.                                                                                                                                                                                     |
| `changes[repository][permissions][from][admin]` | `boolean` | The previous version of the team member's `admin` permission on a repository, if the action was `edited`.                                                                                                                                                  |
| `changes[repository][permissions][from][pull]`  | `boolean` | The previous version of the team member's `pull` permission on a repository, if the action was `edited`.                                                                                                                                                   |
| `changes[repository][permissions][from][push]`  | `boolean` | The previous version of the team member's `push` permission on a repository, if the action was `edited`.                                                                                                                                                   |
| `리포지토리`                                         | `개체`      | The repository that was added or removed from to the team's purview if the action was `added_to_repository`, `removed_from_repository`, or `edited`. For `edited` actions, `repository` also contains the team's new permission levels for the repository. |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.team.added_to_repository }}

### team_add

{% data reusables.webhooks.team_add_short_desc %}

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `members` permission

#### Webhook payload object

| 키   | 유형   | 설명                                                                                                                |
| --- | ---- | ----------------------------------------------------------------------------------------------------------------- |
| `팀` | `개체` | The [team](/rest/reference/teams) that was modified.  **Note:** Older events may not include this in the payload. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.team_add }}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

### 사용자

When a user is `created` or `deleted`.

#### Availability
- GitHub Enterprise webhooks. For more information, "[Global webhooks](/rest/reference/enterprise-admin#global-webhooks/)."

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.user.created }}

{% endif %}

### 보기

{% data reusables.webhooks.watch_short_desc %}

The event’s actor is the [user](/rest/reference/users) who starred a repository, and the event’s repository is the [repository](/rest/reference/repos) that was starred.

#### Availability

- Repository webhooks
- Organization webhooks
- {% data variables.product.prodname_github_app %}s with the `metadata` permission

#### Webhook payload object

{% data reusables.webhooks.watch_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.watch.started }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### workflow_dispatch

This event occurs when someone triggers a workflow run on GitHub or sends a `POST` request to the "[Create a workflow dispatch event](/rest/reference/actions/#create-a-workflow-dispatch-event)" endpoint. For more information, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."

#### Availability

- {% data variables.product.prodname_github_app %}s must have the `contents` permission to receive this webhook.

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.workflow_dispatch }}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### workflow_run

When a {% data variables.product.prodname_actions %} workflow run is requested or completed. For more information, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_run)."

#### Availability

- {% data variables.product.prodname_github_app %}s with the `actions` or `contents` permissions.

#### Webhook payload object

{% data reusables.webhooks.workflow_run_properties %}
{% data reusables.webhooks.workflow_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.sender_desc %}

#### Webhook payload example

{{ webhookPayloadsForCurrentVersion.workflow_run }}
{% endif %}
