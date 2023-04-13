---
title: Generating a user access token for a GitHub App
intro: 'You can generate a user access token for your {% data variables.product.prodname_github_app %} in order to attribute app activity to a user.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Generate a user access token
---

## About user access tokens

{% data reusables.pre-release-program.expiring-user-access-tokens %}

A user access token is a type of OAuth token. Unlike a traditional OAuth token, the user access token does not use scopes. Instead, it uses fine-grained permissions. A user access token only has permissions that both the user and the app have. For example, if the app was granted permission to write the contents of a repository, but the user can only read the contents, then the user access token can only read the contents.

Similarly, a user access token can only access resources that both the user and app can access. For example, if an app is granted access to repository `A` and `B`, and the user can access repository `B` and `C`, the user access token can access repository `B` but not `A` or `C`. You can use the REST API to check which installations and which repositories within an installation a user access token can access. For more information, see `GET /user/installations` and `GET /user/installations/{installation_id}/repositories` in "[AUTOTITLE](/rest/apps/installations)."

When you make API requests with a user access token, the rate limits for user access tokens apply. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/rate-limits-for-github-apps)."

By default, the user access token expires after 8 hours. You can use a refresh token to regenerate a user access token. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/refreshing-user-access-tokens)."

Users can revoke their authorization of a {% data variables.product.prodname_github_app %}. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation)." If a user revokes their authorization of a {% data variables.product.prodname_github_app %}, the app will receive the `github_app_authorization` webhook. {% data variables.product.prodname_github_apps %} cannot unsubscribe from this event. If your app receives this webhook, you should stop calling the API on behalf of the user who revoked the token. If your app continues to use a revoked access token, it will receive the `401 Bad Credentials` error. For more information about this webhook, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#github_app_authorization)"

## Using the web application flow to generate a user access token

If your app runs in the browser, you should use the web application flow to generate a user access token. For a tutorial about using the web application flow, see "[AUTOTITLE](/apps/creating-github-apps/guides/using-the-web-application-flow-to-generate-a-user-access-token-for-a-github-app)."

1. Direct the user to this URL, and add any necessary query parameters from the following list of parameters: `{% data variables.product.oauth_host_code %}/login/oauth/authorize`. For example, this URL specifies the `client_id` and `state` parameters: `{% data variables.product.oauth_host_code %}/login/oauth/authorize?client_id=12345&state=abcdefg`.

   Query parameter | Type | Description
   -----|------|------------
   `client_id` | `string` | **Required.** The client ID for your {% data variables.product.prodname_github_app %}. The client ID is different from the app ID. You can find the client ID on the settings page for your app.<br><br>For user-owned apps, the settings page is `https://github.com/settings/apps/APP-SLUG`.<br><br>For organization-owned apps, the settings page is `https://github.com/organizations/ORGANIZATION/settings/apps/APP-SLUG`.<br><br>Replace `APP-SLUG` with the slugified name of your app and `ORGANIZATION` with the slugified name of your organization. For example, `https://github.com/organizations/octo-org/settings/apps/octo-app`.
   `redirect_uri` | `string` | The URL in your application where users will be sent after authorization. This must be an exact match to one of the URLs you provided as a "Callback URL" in your app's settings and can't contain any additional parameters.
   `state` | `string` | When specified, the value should contain a random string to protect against forgery attacks, and it can also contain any other arbitrary data.
   `login` | `string` | When specified, the web application flow will prompt users with a specific account they can use for signing in and authorizing your app.
   `allow_signup` | `boolean` | Whether unauthenticated users will be offered an option to sign up for {% data variables.product.prodname_dotcom %} during the OAuth flow. The default is `true`. Use `false` when a policy prohibits signups.

1. If the user accepts your authorization request, {% data variables.product.company_short %} will redirect the user to one of the callback URLs in your app settings, and provide a `code` query parameter you can use in the next step to create a user access token. If you specified `redirect_uri` in the previous step, that callback URL will be used. Otherwise, the first callback URL on your app's settings page will be used.

   If you specified the `state` parameter in the previous step, {% data variables.product.company_short %} will also include a `state` parameter. If the `state` parameter does not match the `state` parameter that you sent in the previous step, the request cannot be trusted, and the web application flow should be aborted.

{% data reusables.apps.web-app-flow-exchange-code %}

{% data reusables.apps.web-app-flow-token-response %}

{% data reusables.apps.user-access-token-example-request %}

## Using the device flow to generate a user access token

{% note %}

**Note:** The device flow is in public beta and subject to change.

{% endnote %}

If your app is headless or does not have access to a browser, you should use the device flow to generate a user access token. For example, CLI tools, simple Raspberry Pis, and desktop applications should use the device flow.

{% ifversion device-flow-is-opt-in %}Before you can use the device flow, you must first enable it in your app's settings. For more information on enabling device flow, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app)." {% endif %}

The device flow uses the OAuth 2.0 Device Authorization Grant.

1. Send a `POST` request to `{% data variables.product.oauth_host_code %}/login/device/code` along with a `client_id` query parameter. The client ID is different from the app ID. You can find the client ID on the settings page for your app.
   - For user-owned apps, the settings page is `https://github.com/settings/apps/APP-SLUG`.
   - For organization-owned apps, the settings page is `https://github.com/organizations/ORGANIZATION/settings/apps/APP-SLUG`.

   Replace `APP-SLUG` with the slugified name of your app and `ORGANIZATION` with the slugified name of your organization. For example, `https://github.com/organizations/octo-org/settings/apps/octo-app`.

1. {% data variables.product.company_short %} will give a response that includes the following query parameters:

   Response parameter | Type | Description
   --- | --- | ---
   `device_code` | `string` | A verification code that is used to verify the device. This code is 40 characters long.
   `user_code` | `string` | A verification code that your application should display so that the user can enter the code in a browser. This code is 8 characters with a hyphen in the middle. For example, `WDJB-MJHT`.
   `verification_uri` | `string` | The URL where users need to enter their `user_code`. The URL is:  {% data variables.product.device_authorization_url %}.
   `expires_in` | `integer` | The number of seconds before the `device_code` and `user_code` expire. The default is 900 seconds (15 minutes).
   `interval` | `integer` | The minimum number of seconds that must pass before you can make a new access token request (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) to complete the device authorization. If you make a request before this interval passes, then you will hit the rate limit and receive a `slow_down` error. The default is 5 seconds.
1. Prompt the user to enter the `user_code` from the previous step at {% data variables.product.device_authorization_url %}.

   If the user does not enter the code before the `expires_in` time passes, the code will be invalid. In this case, you should restart the device flow.
1. Poll `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` along with the `client_id`, `device_code`, and `grant_type` query parameters (described below) until the device and user codes expire or the user has successfully authorized the app by entering the `user_code`.

   Query parameter | Type | Description
   -----|------|--------------
   `client_id` | `string` | **Required.** The client ID for your {% data variables.product.prodname_github_app %}.
   `device_code` | `string` | **Required.** The device verification code you received in the previous step.
   `grant_type` | `string` | **Required.** The grant type must be `urn:ietf:params:oauth:grant-type:device_code`.

   Do not poll this endpoint at a higher frequency than the frequency indicated by `interval`. If you do, you will hit the rate limit and receive a `slow_down` error. The `slow_down` error response adds 5 seconds to the last `interval`.

   Until the user enters the code, {% data variables.product.company_short %} will respond with a 200 status and an `error` response query parameter.

   | Error name | Description |
   |----|----|
   | `authorization_pending`| This error occurs when the authorization request is pending and the user hasn't entered the user code yet. The app is expected to keep polling the `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` at a frequency no faster than the frequency specified by `interval`.
   | `slow_down` | When you receive the `slow_down` error, 5 extra seconds are added to the minimum `interval` or timeframe required between your requests using `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`. For example, if the starting interval required at least 5 seconds between requests and you get a `slow_down` error response, you must now wait a minimum of 10 seconds before making a new request for a token. The error response includes the new `interval` that you must use.
   | `expired_token` | If the device code expired, then you will see the `token_expired` error. You must make a new request for a device code.
   | `unsupported_grant_type` | The grant type must be `urn:ietf:params:oauth:grant-type:device_code` and included as an input parameter when you poll the OAuth token request `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`.
   | `incorrect_client_credentials` | For the device flow, you must pass your app's client ID, which you can find on your app settings page. The client ID is different from the app ID and client secret.
   | `incorrect_device_code` | The `device_code` provided is not valid.
   | `access_denied` | When a user clicks cancel during the authorization process, you'll receive an `access_denied` error, and the user won't be able to use the verification code again.{% ifversion device-flow-is-opt-in %}
   | `device_flow_disabled` | Device flow has not been enabled in the app's settings. For more information on enabling device flow, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app)."{% endif %}

1. Once the user has entered the `user_code`, {% data variables.product.company_short %} will give a response that includes the following query parameters:

   {% data reusables.apps.user-access-token-response-parameters %}

{% data reusables.apps.user-access-token-example-request %}

## Generating a user access token when a user installs your app

If you select **Request user authorization (OAuth) during installation** in your app settings, {% data variables.product.company_short %} will start the web application flow immediately after a user installs your app.

You can generate a user access token with this method regardless of whether the app is installed on a user account or an organization account. However, if the app was installed on an organization account, you will need to use the web application flow or device flow to generate a user access token for other users in the organization.

1. When a user installs your app, {% data variables.product.company_short %} will redirect the user to `{% data variables.product.oauth_host_code %}/login/oauth/authorize?client_id=CLIENT_ID`, where `CLIENT_ID` is the client ID of your app.
1. If the user accepts your authorization request, {% data variables.product.company_short %} will redirect the user to the first callback URL in your app settings, and provide a `code` query parameter.

   If you want to control which callback URL is used, do not select **Request user authorization (OAuth) during installation**. Instead, direct users through the full web application flow and specify the `redirect_uri` parameter.

{% data reusables.apps.web-app-flow-exchange-code %}

{% data reusables.apps.web-app-flow-token-response %}

{% data reusables.apps.user-access-token-example-request %}

## Using a refresh token to generate a user access token

By default, user access tokens expires after 8 hours. If you receive a user access token with an expiration, you will also receive a refresh token. The refresh token expire after 6 months. You can use this refresh token to regenerate a user access token. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/refreshing-user-access-tokens)."

{% data variables.product.company_short %} strongly encourages you to use user access tokens that expire. If you previously opted out of using user access tokens that expire but want to reenable this feature, see "[AUTOTITLE](/apps/maintaining-github-apps/activating-optional-features-for-apps)".

## Supported endpoints for user access tokens

{% ifversion fpt or ghec %}
### Actions Runners

* [List runner applications for a repository](/rest/actions#list-runner-applications-for-a-repository)
* [List self-hosted runners for a repository](/rest/actions#list-self-hosted-runners-for-a-repository)
* [Get a self-hosted runner for a repository](/rest/actions#get-a-self-hosted-runner-for-a-repository)
* [Delete a self-hosted runner from a repository](/rest/actions#delete-a-self-hosted-runner-from-a-repository)
* [Create a registration token for a repository](/rest/actions#create-a-registration-token-for-a-repository)
* [Create a remove token for a repository](/rest/actions#create-a-remove-token-for-a-repository)
* [List runner applications for an organization](/rest/actions#list-runner-applications-for-an-organization)
* [List self-hosted runners for an organization](/rest/actions#list-self-hosted-runners-for-an-organization)
* [Get a self-hosted runner for an organization](/rest/actions#get-a-self-hosted-runner-for-an-organization)
* [Delete a self-hosted runner from an organization](/rest/actions#delete-a-self-hosted-runner-from-an-organization)
* [Create a registration token for an organization](/rest/actions#create-a-registration-token-for-an-organization)
* [Create a remove token for an organization](/rest/actions#create-a-remove-token-for-an-organization)

### Actions Secrets

* [Get a repository public key](/rest/actions#get-a-repository-public-key)
* [List repository secrets](/rest/actions#list-repository-secrets)
* [Get a repository secret](/rest/actions#get-a-repository-secret)
* [Create or update a repository secret](/rest/actions#create-or-update-a-repository-secret)
* [Delete a repository secret](/rest/actions#delete-a-repository-secret)
* [Get an organization public key](/rest/actions#get-an-organization-public-key)
* [List organization secrets](/rest/actions#list-organization-secrets)
* [Get an organization secret](/rest/actions#get-an-organization-secret)
* [Create or update an organization secret](/rest/actions#create-or-update-an-organization-secret)
* [List selected repositories for an organization secret](/rest/actions#list-selected-repositories-for-an-organization-secret)
* [Set selected repositories for an organization secret](/rest/actions#set-selected-repositories-for-an-organization-secret)
* [Add selected repository to an organization secret](/rest/actions#add-selected-repository-to-an-organization-secret)
* [Remove selected repository from an organization secret](/rest/actions#remove-selected-repository-from-an-organization-secret)
* [Delete an organization secret](/rest/actions#delete-an-organization-secret)
{% endif %}

{% ifversion fpt or ghec %}
### Artifacts

* [List artifacts for a repository](/rest/actions#list-artifacts-for-a-repository)
* [List workflow run artifacts](/rest/actions#list-workflow-run-artifacts)
* [Get an artifact](/rest/actions#get-an-artifact)
* [Delete an artifact](/rest/actions#delete-an-artifact)
* [Download an artifact](/rest/actions#download-an-artifact)
{% endif %}

### Check Runs

* [Create a check run](/rest/checks#create-a-check-run)
* [Get a check run](/rest/checks#get-a-check-run)
* [Update a check run](/rest/checks#update-a-check-run)
* [List check run annotations](/rest/checks#list-check-run-annotations)
* [List check runs in a check suite](/rest/checks#list-check-runs-in-a-check-suite)
* [List check runs for a Git reference](/rest/checks#list-check-runs-for-a-git-reference)

### Check Suites

* [Create a check suite](/rest/checks#create-a-check-suite)
* [Get a check suite](/rest/checks#get-a-check-suite)
* [Rerequest a check suite](/rest/checks#rerequest-a-check-suite)
* [Update repository preferences for check suites](/rest/checks#update-repository-preferences-for-check-suites)
* [List check suites for a Git reference](/rest/checks#list-check-suites-for-a-git-reference)

### Codes Of Conduct

* [Get all codes of conduct](/rest/codes-of-conduct#get-all-codes-of-conduct)
* [Get a code of conduct](/rest/codes-of-conduct#get-a-code-of-conduct)

### Deployment Statuses

* [List deployment statuses](/rest/deployments#list-deployment-statuses)
* [Create a deployment status](/rest/deployments#create-a-deployment-status)
* [Get a deployment status](/rest/deployments#get-a-deployment-status)

### Deployments

* [List deployments](/rest/deployments#list-deployments)
* [Create a deployment](/rest/deployments#create-a-deployment)
* [Get a deployment](/rest/deployments#get-a-deployment)
* [Delete a deployment](/rest/deployments#delete-a-deployment)

### Events

* [List public events for a network of repositories](/rest/activity#list-public-events-for-a-network-of-repositories)
* [List public organization events](/rest/activity#list-public-organization-events)

### Feeds

* [Get feeds](/rest/activity#get-feeds)

### Git Blobs

* [Create a blob](/rest/git#create-a-blob)
* [Get a blob](/rest/git#get-a-blob)

### Git Commits

* [Create a commit](/rest/git#create-a-commit)
* [Get a commit](/rest/git#get-a-commit)

### Git Refs

* [Create a reference](/rest/git#create-a-reference)
* [Get a reference](/rest/git#get-a-reference)
* [List matching references](/rest/git#list-matching-references)
* [Update a reference](/rest/git#update-a-reference)
* [Delete a reference](/rest/git#delete-a-reference)

### Git Tags

* [Create a tag object](/rest/git#create-a-tag-object)
* [Get a tag](/rest/git#get-a-tag)

### Git Trees

* [Create a tree](/rest/git#create-a-tree)
* [Get a tree](/rest/git#get-a-tree)

### Gitignore Templates

* [Get all gitignore templates](/rest/gitignore#get-all-gitignore-templates)
* [Get a gitignore template](/rest/gitignore#get-a-gitignore-template)

### Installations

* [List repositories accessible to the user access token](/rest/apps#list-repositories-accessible-to-the-user-access-token)

{% ifversion fpt or ghec %}
### Interaction Limits

* [Get interaction restrictions for an organization](/rest/interactions#get-interaction-restrictions-for-an-organization)
* [Set interaction restrictions for an organization](/rest/interactions#set-interaction-restrictions-for-an-organization)
* [Remove interaction restrictions for an organization](/rest/interactions#remove-interaction-restrictions-for-an-organization)
* [Get interaction restrictions for a repository](/rest/interactions#get-interaction-restrictions-for-a-repository)
* [Set interaction restrictions for a repository](/rest/interactions#set-interaction-restrictions-for-a-repository)
* [Remove interaction restrictions for a repository](/rest/interactions#remove-interaction-restrictions-for-a-repository)
{% endif %}

### Issue Assignees

* [Add assignees to an issue](/rest/issues#add-assignees-to-an-issue)
* [Remove assignees from an issue](/rest/issues#remove-assignees-from-an-issue)

### Issue Comments

* [List issue comments](/rest/issues#list-issue-comments)
* [Create an issue comment](/rest/issues#create-an-issue-comment)
* [List issue comments for a repository](/rest/issues#list-issue-comments-for-a-repository)
* [Get an issue comment](/rest/issues#get-an-issue-comment)
* [Update an issue comment](/rest/issues#update-an-issue-comment)
* [Delete an issue comment](/rest/issues#delete-an-issue-comment)

### Issue Events

* [List issue events](/rest/issues#list-issue-events)

### Issue Timeline

* [List timeline events for an issue](/rest/issues#list-timeline-events-for-an-issue)

### Issues

* [List issues assigned to the authenticated user](/rest/issues#list-issues-assigned-to-the-authenticated-user)
* [List assignees](/rest/issues#list-assignees)
* [Check if a user can be assigned](/rest/issues#check-if-a-user-can-be-assigned)
* [List repository issues](/rest/issues#list-repository-issues)
* [Create an issue](/rest/issues#create-an-issue)
* [Get an issue](/rest/issues#get-an-issue)
* [Update an issue](/rest/issues#update-an-issue)
* [Lock an issue](/rest/issues#lock-an-issue)
* [Unlock an issue](/rest/issues#unlock-an-issue)

{% ifversion fpt or ghec %}
### Jobs

* [Get a job for a workflow run](/rest/actions#get-a-job-for-a-workflow-run)
* [Download job logs for a workflow run](/rest/actions#download-job-logs-for-a-workflow-run)
* [List jobs for a workflow run](/rest/actions#list-jobs-for-a-workflow-run)
{% endif %}

### Labels

* [List labels for an issue](/rest/issues#list-labels-for-an-issue)
* [Add labels to an issue](/rest/issues#add-labels-to-an-issue)
* [Set labels for an issue](/rest/issues#set-labels-for-an-issue)
* [Remove all labels from an issue](/rest/issues#remove-all-labels-from-an-issue)
* [Remove a label from an issue](/rest/issues#remove-a-label-from-an-issue)
* [List labels for a repository](/rest/issues#list-labels-for-a-repository)
* [Create a label](/rest/issues#create-a-label)
* [Get a label](/rest/issues#get-a-label)
* [Update a label](/rest/issues#update-a-label)
* [Delete a label](/rest/issues#delete-a-label)
* [Get labels for every issue in a milestone](/rest/issues#list-labels-for-issues-in-a-milestone)

### Licenses

* [Get all commonly used licenses](/rest/licenses#get-all-commonly-used-licenses)
* [Get a license](/rest/licenses#get-a-license)

### Markdown

* [Render a Markdown document](/rest/markdown#render-a-markdown-document)
* [Render a markdown document in raw mode](/rest/markdown#render-a-markdown-document-in-raw-mode)

### Meta

* [Meta](/rest/meta#meta)

### Milestones

* [List milestones](/rest/issues#list-milestones)
* [Create a milestone](/rest/issues#create-a-milestone)
* [Get a milestone](/rest/issues#get-a-milestone)
* [Update a milestone](/rest/issues#update-a-milestone)
* [Delete a milestone](/rest/issues#delete-a-milestone)

### Organization Hooks

* [List organization webhooks](/rest/orgs#webhooks/#list-organization-webhooks)
* [Create an organization webhook](/rest/orgs#webhooks/#create-an-organization-webhook)
* [Get an organization webhook](/rest/orgs#webhooks/#get-an-organization-webhook)
* [Update an organization webhook](/rest/orgs#webhooks/#update-an-organization-webhook)
* [Delete an organization webhook](/rest/orgs#webhooks/#delete-an-organization-webhook)
* [Ping an organization webhook](/rest/orgs#webhooks/#ping-an-organization-webhook)

{% ifversion fpt or ghec %}
### Organization Invitations

* [List pending organization invitations](/rest/orgs#list-pending-organization-invitations)
* [Create an organization invitation](/rest/orgs#create-an-organization-invitation)
* [List organization invitation teams](/rest/orgs#list-organization-invitation-teams)
{% endif %}

### Organization Members

* [List organization members](/rest/orgs#list-organization-members)
* [Check organization membership for a user](/rest/orgs#check-organization-membership-for-a-user)
* [Remove an organization member](/rest/orgs#remove-an-organization-member)
* [Get organization membership for a user](/rest/orgs#get-organization-membership-for-a-user)
* [Set organization membership for a user](/rest/orgs#set-organization-membership-for-a-user)
* [Remove organization membership for a user](/rest/orgs#remove-organization-membership-for-a-user)
* [List public organization members](/rest/orgs#list-public-organization-members)
* [Check public organization membership for a user](/rest/orgs#check-public-organization-membership-for-a-user)
* [Set public organization membership for the authenticated user](/rest/orgs#set-public-organization-membership-for-the-authenticated-user)
* [Remove public organization membership for the authenticated user](/rest/orgs#remove-public-organization-membership-for-the-authenticated-user)

### Organization Outside Collaborators

* [List outside collaborators for an organization](/rest/orgs#list-outside-collaborators-for-an-organization)
* [Convert an organization member to outside collaborator](/rest/orgs#convert-an-organization-member-to-outside-collaborator)
* [Remove outside collaborator from an organization](/rest/orgs#remove-outside-collaborator-from-an-organization)

{% ifversion ghes %}
### Organization Pre Receive Hooks

* [List pre-receive hooks for an organization](/rest/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [Get a pre-receive hook for an organization](/rest/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [Update pre-receive hook enforcement for an organization](/rest/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [Remove pre-receive hook enforcement for an organization](/rest/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization)
{% endif %}

### Organization Team Projects

* [List team projects](/rest/teams#list-team-projects)
* [Check team permissions for a project](/rest/teams#check-team-permissions-for-a-project)
* [Add or update team project permissions](/rest/teams#add-or-update-team-project-permissions)
* [Remove a project from a team](/rest/teams#remove-a-project-from-a-team)

### Organization Team Repositories

* [List team repositories](/rest/teams#list-team-repositories)
* [Check team permissions for a repository](/rest/teams#check-team-permissions-for-a-repository)
* [Add or update team repository permissions](/rest/teams#add-or-update-team-repository-permissions)
* [Remove a repository from a team](/rest/teams#remove-a-repository-from-a-team)

{% ifversion fpt or ghec %}
### Organization Team Sync

* [List IdP groups for a team](/rest/teams#list-idp-groups-for-a-team)
* [Create or update IdP group connections](/rest/teams#create-or-update-idp-group-connections)
* [List IdP groups for an organization](/rest/teams#list-idp-groups-for-an-organization)
{% endif %}

### Organization Teams

* [List teams](/rest/teams#list-teams)
* [Create a team](/rest/teams#create-a-team)
* [Get a team by name](/rest/teams#get-a-team-by-name)
* [Update a team](/rest/teams#update-a-team)
* [Delete a team](/rest/teams#delete-a-team)
{% ifversion fpt or ghec %}
* [List pending team invitations](/rest/teams#list-pending-team-invitations)
{% endif %}
* [List team members](/rest/teams#list-team-members)
* [Get team membership for a user](/rest/teams#get-team-membership-for-a-user)
* [Add or update team membership for a user](/rest/teams#add-or-update-team-membership-for-a-user)
* [Remove team membership for a user](/rest/teams#remove-team-membership-for-a-user)
* [List child teams](/rest/teams#list-child-teams)
* [List teams for the authenticated user](/rest/teams#list-teams-for-the-authenticated-user)

### Organizations

* [List organizations](/rest/orgs#list-organizations)
* [Get an organization](/rest/orgs#get-an-organization)
* [Update an organization](/rest/orgs#update-an-organization)
* [List organization memberships for the authenticated user](/rest/orgs#list-organization-memberships-for-the-authenticated-user)
* [Get an organization membership for the authenticated user](/rest/orgs#get-an-organization-membership-for-the-authenticated-user)
* [Update an organization membership for the authenticated user](/rest/orgs#update-an-organization-membership-for-the-authenticated-user)
* [List organizations for the authenticated user](/rest/orgs#list-organizations-for-the-authenticated-user)
* [List organizations for a user](/rest/orgs#list-organizations-for-a-user)

{% ifversion fpt or ghec %}
### Organizations Credential Authorizations

* [List SAML SSO authorizations for an organization](/rest/orgs#list-saml-sso-authorizations-for-an-organization)
* [Remove a SAML SSO authorization for an organization](/rest/orgs#remove-a-saml-sso-authorization-for-an-organization)
{% endif %}

{% ifversion fpt or ghec %}
### Organizations Scim

* [List SCIM provisioned identities](/rest/scim#list-scim-provisioned-identities)
* [Provision and invite a SCIM user](/rest/scim#provision-and-invite-a-scim-user)
* [Get SCIM provisioning information for a user](/rest/scim#get-scim-provisioning-information-for-a-user)
* [Set SCIM information for a provisioned user](/rest/scim#set-scim-information-for-a-provisioned-user)
* [Update an attribute for a SCIM user](/rest/scim#update-an-attribute-for-a-scim-user)
* [Delete a SCIM user from an organization](/rest/scim#delete-a-scim-user-from-an-organization)
{% endif %}

{% ifversion fpt or ghec %}
### Source Imports

* [Get an import status](/rest/migrations#get-an-import-status)
* [Start an import](/rest/migrations#start-an-import)
* [Update an import](/rest/migrations#update-an-import)
* [Cancel an import](/rest/migrations#cancel-an-import)
* [Get commit authors](/rest/migrations#get-commit-authors)
* [Map a commit author](/rest/migrations#map-a-commit-author)
* [Get large files](/rest/migrations#get-large-files)
* [Update Git LFS preference](/rest/migrations#update-git-lfs-preference)
{% endif %}

### Project Collaborators

* [List project collaborators](/rest/projects#list-project-collaborators)
* [Add project collaborator](/rest/projects#add-project-collaborator)
* [Remove project collaborator](/rest/projects#remove-project-collaborator)
* [Get project permission for a user](/rest/projects#get-project-permission-for-a-user)

### Projects

* [List organization projects](/rest/projects#list-organization-projects)
* [Create an organization project](/rest/projects#create-an-organization-project)
* [Get a project](/rest/projects#get-a-project)
* [Update a project](/rest/projects#update-a-project)
* [Delete a project](/rest/projects#delete-a-project)
* [List project columns](/rest/projects#list-project-columns)
* [Create a project column](/rest/projects#create-a-project-column)
* [Get a project column](/rest/projects#get-a-project-column)
* [Update a project column](/rest/projects#update-a-project-column)
* [Delete a project column](/rest/projects#delete-a-project-column)
* [List project cards](/rest/projects#list-project-cards)
* [Create a project card](/rest/projects#create-a-project-card)
* [Move a project column](/rest/projects#move-a-project-column)
* [Get a project card](/rest/projects#get-a-project-card)
* [Update a project card](/rest/projects#update-a-project-card)
* [Delete a project card](/rest/projects#delete-a-project-card)
* [Move a project card](/rest/projects#move-a-project-card)
* [List repository projects](/rest/projects#list-repository-projects)
* [Create a repository project](/rest/projects#create-a-repository-project)

### Pull Comments

* [List review comments on a pull request](/rest/pulls#list-review-comments-on-a-pull-request)
* [Create a review comment for a pull request](/rest/pulls#create-a-review-comment-for-a-pull-request)
* [List review comments in a repository](/rest/pulls#list-review-comments-in-a-repository)
* [Get a review comment for a pull request](/rest/pulls#get-a-review-comment-for-a-pull-request)
* [Update a review comment for a pull request](/rest/pulls#update-a-review-comment-for-a-pull-request)
* [Delete a review comment for a pull request](/rest/pulls#delete-a-review-comment-for-a-pull-request)

### Pull Request Review Events

* [Dismiss a review for a pull request](/rest/pulls#dismiss-a-review-for-a-pull-request)
* [Submit a review for a pull request](/rest/pulls#submit-a-review-for-a-pull-request)

### Pull Request Review Requests

* [List requested reviewers for a pull request](/rest/pulls#list-requested-reviewers-for-a-pull-request)
* [Request reviewers for a pull request](/rest/pulls#request-reviewers-for-a-pull-request)
* [Remove requested reviewers from a pull request](/rest/pulls#remove-requested-reviewers-from-a-pull-request)

### Pull Request Reviews

* [List reviews for a pull request](/rest/pulls#list-reviews-for-a-pull-request)
* [Create a review for a pull request](/rest/pulls#create-a-review-for-a-pull-request)
* [Get a review for a pull request](/rest/pulls#get-a-review-for-a-pull-request)
* [Update a review for a pull request](/rest/pulls#update-a-review-for-a-pull-request)
* [List comments for a pull request review](/rest/pulls#list-comments-for-a-pull-request-review)

### Pulls

* [List pull requests](/rest/pulls#list-pull-requests)
* [Create a pull request](/rest/pulls#create-a-pull-request)
* [Get a pull request](/rest/pulls#get-a-pull-request)
* [Update a pull request](/rest/pulls#update-a-pull-request)
* [List commits on a pull request](/rest/pulls#list-commits-on-a-pull-request)
* [List pull requests files](/rest/pulls#list-pull-requests-files)
* [Check if a pull request has been merged](/rest/pulls#check-if-a-pull-request-has-been-merged)
* [Merge a pull request (Merge Button)](/rest/pulls#merge-a-pull-request)

### Reactions

* [Delete a reaction](/rest/reactions)
* [List reactions for a commit comment](/rest/reactions#list-reactions-for-a-commit-comment)
* [Create reaction for a commit comment](/rest/reactions#create-reaction-for-a-commit-comment)
* [List reactions for an issue](/rest/reactions#list-reactions-for-an-issue)
* [Create reaction for an issue](/rest/reactions#create-reaction-for-an-issue)
* [List reactions for an issue comment](/rest/reactions#list-reactions-for-an-issue-comment)
* [Create reaction for an issue comment](/rest/reactions#create-reaction-for-an-issue-comment)
* [List reactions for a pull request review comment](/rest/reactions#list-reactions-for-a-pull-request-review-comment)
* [Create reaction for a pull request review comment](/rest/reactions#create-reaction-for-a-pull-request-review-comment)
* [List reactions for a team discussion comment](/rest/reactions#list-reactions-for-a-team-discussion-comment)
* [Create reaction for a team discussion comment](/rest/reactions#create-reaction-for-a-team-discussion-comment)
* [List reactions for a team discussion](/rest/reactions#list-reactions-for-a-team-discussion)
* [Create reaction for a team discussion](/rest/reactions#create-reaction-for-a-team-discussion)
* [Delete a commit comment reaction](/rest/reactions#delete-a-commit-comment-reaction)
* [Delete an issue reaction](/rest/reactions#delete-an-issue-reaction)
* [Delete a reaction to a commit comment](/rest/reactions#delete-an-issue-comment-reaction)
* [Delete a pull request comment reaction](/rest/reactions#delete-a-pull-request-comment-reaction)
* [Delete team discussion reaction](/rest/reactions#delete-team-discussion-reaction)
* [Delete team discussion comment reaction](/rest/reactions#delete-team-discussion-comment-reaction)

### Repositories

* [List organization repositories](/rest/repos#list-organization-repositories)
* [Create a repository for the authenticated user](/rest/repos#create-a-repository-for-the-authenticated-user)
* [Get a repository](/rest/repos#get-a-repository)
* [Update a repository](/rest/repos#update-a-repository)
* [Delete a repository](/rest/repos#delete-a-repository)
* [Compare two commits](/rest/commits#compare-two-commits)
* [List repository contributors](/rest/repos#list-repository-contributors)
* [List forks](/rest/repos#list-forks)
* [Create a fork](/rest/repos#create-a-fork)
* [List repository languages](/rest/repos#list-repository-languages)
* [List repository tags](/rest/repos#list-repository-tags)
* [List repository teams](/rest/repos#list-repository-teams)
* [Transfer a repository](/rest/repos#transfer-a-repository)
* [List public repositories](/rest/repos#list-public-repositories)
* [List repositories for the authenticated user](/rest/repos#list-repositories-for-the-authenticated-user)
* [List repositories for a user](/rest/repos#list-repositories-for-a-user)
* [Create repository using a repository template](/rest/repos#create-repository-using-a-repository-template)

### Repository Activity

* [List stargazers](/rest/activity#list-stargazers)
* [List watchers](/rest/activity#list-watchers)
* [List repositories starred by a user](/rest/activity#list-repositories-starred-by-a-user)
* [Check if a repository is starred by the authenticated user](/rest/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
* [Star a repository for the authenticated user](/rest/activity#star-a-repository-for-the-authenticated-user)
* [Unstar a repository for the authenticated user](/rest/activity#unstar-a-repository-for-the-authenticated-user)
* [List repositories watched by a user](/rest/activity#list-repositories-watched-by-a-user)

{% ifversion fpt or ghec %}
### Repository Automated Security Fixes

* [Enable automated security fixes](/rest/repos#enable-automated-security-fixes)
* [Disable automated security fixes](/rest/repos#disable-automated-security-fixes)
{% endif %}

### Repository Branches

* [List branches](/rest/branches#list-branches)
* [Get a branch](/rest/branches#get-a-branch)
* [Get branch protection](/rest/branches#get-branch-protection)
* [Update branch protection](/rest/branches#update-branch-protection)
* [Delete branch protection](/rest/branches#delete-branch-protection)
* [Get admin branch protection](/rest/branches#get-admin-branch-protection)
* [Set admin branch protection](/rest/branches#set-admin-branch-protection)
* [Delete admin branch protection](/rest/branches#delete-admin-branch-protection)
* [Get pull request review protection](/rest/branches#get-pull-request-review-protection)
* [Update pull request review protection](/rest/branches#update-pull-request-review-protection)
* [Delete pull request review protection](/rest/branches#delete-pull-request-review-protection)
* [Get commit signature protection](/rest/branches#get-commit-signature-protection)
* [Create commit signature protection](/rest/branches#create-commit-signature-protection)
* [Delete commit signature protection](/rest/branches#delete-commit-signature-protection)
* [Get status checks protection](/rest/branches#get-status-checks-protection)
* [Update status check protection](/rest/branches#update-status-check-protection)
* [Remove status check protection](/rest/branches#remove-status-check-protection)
* [Get all status check contexts](/rest/branches#get-all-status-check-contexts)
* [Add status check contexts](/rest/branches#add-status-check-contexts)
* [Set status check contexts](/rest/branches#set-status-check-contexts)
* [Remove status check contexts](/rest/branches#remove-status-check-contexts)
* [Get access restrictions](/rest/branches#get-access-restrictions)
* [Delete access restrictions](/rest/branches#delete-access-restrictions)
* [List teams with access to the protected branch](/rest/repos#list-teams-with-access-to-the-protected-branch)
* [Add team access restrictions](/rest/branches#add-team-access-restrictions)
* [Set team access restrictions](/rest/branches#set-team-access-restrictions)
* [Remove team access restriction](/rest/branches#remove-team-access-restrictions)
* [List user restrictions of protected branch](/rest/repos#list-users-with-access-to-the-protected-branch)
* [Add user access restrictions](/rest/branches#add-user-access-restrictions)
* [Set user access restrictions](/rest/branches#set-user-access-restrictions)
* [Remove user access restrictions](/rest/branches#remove-user-access-restrictions)
* [Merge a branch](/rest/branches#merge-a-branch)

### Repository Collaborators

* [List repository collaborators](/rest/collaborators#list-repository-collaborators)
* [Check if a user is a repository collaborator](/rest/collaborators#check-if-a-user-is-a-repository-collaborator)
* [Add a repository collaborator](/rest/collaborators#add-a-repository-collaborator)
* [Remove a repository collaborator](/rest/collaborators#remove-a-repository-collaborator)
* [Get repository permissions for a user](/rest/collaborators#get-repository-permissions-for-a-user)

### Repository Commit Comments

* [List commit comments for a repository](/rest/commits#list-commit-comments-for-a-repository)
* [Get a commit comment](/rest/commits#get-a-commit-comment)
* [Update a commit comment](/rest/commits#update-a-commit-comment)
* [Delete a commit comment](/rest/commits#delete-a-commit-comment)
* [List commit comments](/rest/commits#list-commit-comments)
* [Create a commit comment](/rest/commits#create-a-commit-comment)

### Repository Commits

* [List commits](/rest/commits#list-commits)
* [Get a commit](/rest/commits#get-a-commit)
* [List branches for head commit](/rest/commits#list-branches-for-head-commit)
* [List pull requests associated with commit](/rest/repos#list-pull-requests-associated-with-commit)

### Repository Community

* [Get the code of conduct for a repository](/rest/codes-of-conduct#get-the-code-of-conduct-for-a-repository)
{% ifversion fpt or ghec %}
* [Get community profile metrics](/rest/metrics#get-community-profile-metrics)
{% endif %}

### Repository Contents

* [Download a repository archive](/rest/repos#download-a-repository-archive)
* [Get repository content](/rest/repos#get-repository-content)
* [Create or update file contents](/rest/repos#create-or-update-file-contents)
* [Delete a file](/rest/repos#delete-a-file)
* [Get a repository README](/rest/repos#get-a-repository-readme)
* [Get the license for a repository](/rest/licenses#get-the-license-for-a-repository)

### Repository Event Dispatches

* [Create a repository dispatch event](/rest/repos#create-a-repository-dispatch-event)

### Repository Hooks

* [List repository webhooks](/rest/webhooks#list-repository-webhooks)
* [Create a repository webhook](/rest/webhooks#create-a-repository-webhook)
* [Get a repository webhook](/rest/webhooks#get-a-repository-webhook)
* [Update a repository webhook](/rest/webhooks#update-a-repository-webhook)
* [Delete a repository webhook](/rest/webhooks#delete-a-repository-webhook)
* [Ping a repository webhook](/rest/webhooks#ping-a-repository-webhook)
* [Test the push repository webhook](/rest/repos#test-the-push-repository-webhook)

### Repository Invitations

* [List repository invitations](/rest/collaborators#list-repository-invitations)
* [Update a repository invitation](/rest/collaborators#update-a-repository-invitation)
* [Delete a repository invitation](/rest/collaborators#delete-a-repository-invitation)
* [List repository invitations for the authenticated user](/rest/collaborators#list-repository-invitations-for-the-authenticated-user)
* [Accept a repository invitation](/rest/collaborators#accept-a-repository-invitation)
* [Decline a repository invitation](/rest/collaborators#decline-a-repository-invitation)

### Repository Keys

* [List deploy keys](/rest/deployments#list-deploy-keys)
* [Create a deploy key](/rest/deployments#create-a-deploy-key)
* [Get a deploy key](/rest/deployments#get-a-deploy-key)
* [Delete a deploy key](/rest/deployments#delete-a-deploy-key)

### Repository Pages

* [Get a GitHub Pages site](/rest/pages#get-a-github-pages-site)
* [Create a GitHub Pages site](/rest/pages#create-a-github-pages-site)
* [Update information about a GitHub Pages site](/rest/pages#update-information-about-a-github-pages-site)
* [Delete a GitHub Pages site](/rest/pages#delete-a-github-pages-site)
* [List GitHub Pages builds](/rest/pages#list-github-pages-builds)
* [Request a GitHub Pages build](/rest/pages#request-a-github-pages-build)
* [Get GitHub Pages build](/rest/pages#get-github-pages-build)
* [Get latest pages build](/rest/pages#get-latest-pages-build)

{% ifversion ghes %}
### Repository Pre Receive Hooks

* [List pre-receive hooks for a repository](/rest/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [Get a pre-receive hook for a repository](/rest/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [Update pre-receive hook enforcement for a repository](/rest/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [Remove pre-receive hook enforcement for a repository](/rest/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository)
{% endif %}

### Repository Releases

* [List releases](/rest/repos#list-releases)
* [Create a release](/rest/repos#create-a-release)
* [Get a release](/rest/repos#get-a-release)
* [Update a release](/rest/repos#update-a-release)
* [Delete a release](/rest/repos#delete-a-release)
* [List release assets](/rest/repos#list-release-assets)
* [Get a release asset](/rest/repos#get-a-release-asset)
* [Update a release asset](/rest/repos#update-a-release-asset)
* [Delete a release asset](/rest/repos#delete-a-release-asset)
* [Get the latest release](/rest/repos#get-the-latest-release)
* [Get a release by tag name](/rest/repos#get-a-release-by-tag-name)

### Repository Stats

* [Get the weekly commit activity](/rest/metrics#get-the-weekly-commit-activity)
* [Get the last year of commit activity](/rest/metrics#get-the-last-year-of-commit-activity)
* [Get all contributor commit activity](/rest/metrics#get-all-contributor-commit-activity)
* [Get the weekly commit count](/rest/metrics#get-the-weekly-commit-count)
* [Get the hourly commit count for each day](/rest/metrics#get-the-hourly-commit-count-for-each-day)

{% ifversion fpt or ghec %}
### Repository Vulnerability Alerts

* [Enable vulnerability alerts](/rest/repos#enable-vulnerability-alerts)
* [Disable vulnerability alerts](/rest/repos#disable-vulnerability-alerts)
{% endif %}

### Root

* [Root endpoint](/rest#root-endpoint)
* [Emojis](/rest/emojis#emojis)
* [Get rate limit status for the authenticated user](/rest/rate-limit#get-rate-limit-status-for-the-authenticated-user)

### Search

* [Search code](/rest/search#search-code)
* [Search commits](/rest/search#search-commits)
* [Search labels](/rest/search#search-labels)
* [Search repositories](/rest/search#search-repositories)
* [Search topics](/rest/search#search-topics)
* [Search users](/rest/search#search-users)

### Statuses

* [Get the combined status for a specific reference](/rest/commits#get-the-combined-status-for-a-specific-reference)
* [List commit statuses for a reference](/rest/commits#list-commit-statuses-for-a-reference)
* [Create a commit status](/rest/commits#create-a-commit-status)

### Team Discussions

* [List discussions](/rest/teams#list-discussions)
* [Create a discussion](/rest/teams#create-a-discussion)
* [Get a discussion](/rest/teams#get-a-discussion)
* [Update a discussion](/rest/teams#update-a-discussion)
* [Delete a discussion](/rest/teams#delete-a-discussion)
* [List discussion comments](/rest/teams#list-discussion-comments)
* [Create a discussion comment](/rest/teams#create-a-discussion-comment)
* [Get a discussion comment](/rest/teams#get-a-discussion-comment)
* [Update a discussion comment](/rest/teams#update-a-discussion-comment)
* [Delete a discussion comment](/rest/teams#delete-a-discussion-comment)

### Topics

* [Get all repository topics](/rest/repos#get-all-repository-topics)
* [Replace all repository topics](/rest/repos#replace-all-repository-topics)

{% ifversion fpt or ghec %}
### Traffic

* [Get repository clones](/rest/metrics#get-repository-clones)
* [Get top referral paths](/rest/metrics#get-top-referral-paths)
* [Get top referral sources](/rest/metrics#get-top-referral-sources)
* [Get page views](/rest/metrics#get-page-views)
{% endif %}

{% ifversion fpt or ghec %}
### User Blocking

* [List users blocked by the authenticated user](/rest/users#list-users-blocked-by-the-authenticated-user)
* [Check if a user is blocked by the authenticated user](/rest/users#check-if-a-user-is-blocked-by-the-authenticated-user)
* [List users blocked by an organization](/rest/orgs#list-users-blocked-by-an-organization)
* [Check if a user is blocked by an organization](/rest/orgs#check-if-a-user-is-blocked-by-an-organization)
* [Block a user from an organization](/rest/orgs#block-a-user-from-an-organization)
* [Unblock a user from an organization](/rest/orgs#unblock-a-user-from-an-organization)
* [Block a user](/rest/users#block-a-user)
* [Unblock a user](/rest/users#unblock-a-user)
{% endif %}

{% ifversion fpt or ghes or ghec %}
### User Emails

{% ifversion fpt or ghec %}
* [Set primary email visibility for the authenticated user](/rest/users#set-primary-email-visibility-for-the-authenticated-user)
{% endif %}
* [List email addresses for the authenticated user](/rest/users#list-email-addresses-for-the-authenticated-user)
* [Add email address(es)](/rest/users#add-an-email-address-for-the-authenticated-user)
* [Delete email address(es)](/rest/users#delete-an-email-address-for-the-authenticated-user)
* [List public email addresses for the authenticated user](/rest/users#list-public-email-addresses-for-the-authenticated-user)
{% endif %}

### User Followers

* [List followers of a user](/rest/users#list-followers-of-a-user)
* [List the people a user follows](/rest/users#list-the-people-a-user-follows)
* [Check if a person is followed by the authenticated user](/rest/users#check-if-a-person-is-followed-by-the-authenticated-user)
* [Follow a user](/rest/users#follow-a-user)
* [Unfollow a user](/rest/users#unfollow-a-user)
* [Check if a user follows another user](/rest/users#check-if-a-user-follows-another-user)

### User Gpg Keys

* [List GPG keys for the authenticated user](/rest/users#list-gpg-keys-for-the-authenticated-user)
* [Create a GPG key for the authenticated user](/rest/users#create-a-gpg-key-for-the-authenticated-user)
* [Get a GPG key for the authenticated user](/rest/users#get-a-gpg-key-for-the-authenticated-user)
* [Delete a GPG key for the authenticated user](/rest/users#delete-a-gpg-key-for-the-authenticated-user)
* [List gpg keys for a user](/rest/users#list-gpg-keys-for-a-user)

### User Public Keys

* [List public SSH keys for the authenticated user](/rest/users#list-public-ssh-keys-for-the-authenticated-user)
* [Create a public SSH key for the authenticated user](/rest/users#create-a-public-ssh-key-for-the-authenticated-user)
* [Get a public SSH key for the authenticated user](/rest/users#get-a-public-ssh-key-for-the-authenticated-user)
* [Delete a public SSH key for the authenticated user](/rest/users#delete-a-public-ssh-key-for-the-authenticated-user)
* [List public keys for a user](/rest/users#list-public-keys-for-a-user)

### Users

* [Get the authenticated user](/rest/users#get-the-authenticated-user)
* [List app installations accessible to the user access token](/rest/apps#list-app-installations-accessible-to-the-user-access-token)
{% ifversion fpt or ghec %}
* [List subscriptions for the authenticated user](/rest/apps#list-subscriptions-for-the-authenticated-user)
{% endif %}
* [List users](/rest/users#list-users)
* [Get a user](/rest/users#get-a-user)

{% ifversion fpt or ghec %}
### Workflow Runs

* [List workflow runs for a repository](/rest/actions#list-workflow-runs-for-a-repository)
* [Get a workflow run](/rest/actions#get-a-workflow-run)
* [Cancel a workflow run](/rest/actions#cancel-a-workflow-run)
* [Download workflow run logs](/rest/actions#download-workflow-run-logs)
* [Delete workflow run logs](/rest/actions#delete-workflow-run-logs)
* [Re run a workflow](/rest/actions#re-run-a-workflow)
* [List workflow runs](/rest/actions#list-workflow-runs)
* [Get workflow run usage](/rest/actions#get-workflow-run-usage)
{% endif %}

{% ifversion fpt or ghec %}
### Workflows

* [List repository workflows](/rest/actions#list-repository-workflows)
* [Get a workflow](/rest/actions#get-a-workflow)
* [Get workflow usage](/rest/actions#get-workflow-usage)
{% endif %}
