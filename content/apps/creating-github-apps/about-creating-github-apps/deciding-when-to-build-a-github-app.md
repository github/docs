---
title: Deciding when to build a GitHub App
shortTitle: GitHub App versus other options
intro: 'When building an integration, you should consider using a {% data variables.product.prodname_github_app %} in the following scenarios, instead of an {% data variables.product.prodname_oauth_app %}, {% data variables.product.pat_generic%}, or {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub Apps
---

## Using a {% data variables.product.prodname_github_app %} instead of an {% data variables.product.prodname_oauth_app %}

In general, {% data variables.product.prodname_github_apps %} are preferred over {% data variables.product.prodname_oauth_apps %}.

Both {% data variables.product.prodname_oauth_apps %} and {% data variables.product.prodname_github_apps %} use OAuth 2.0.

{% data variables.product.prodname_oauth_apps %} can only act on behalf of a user while {% data variables.product.prodname_github_apps %} can either act on behalf of a user or independently of a user.

For more information, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps)."

For information on how to migrate an existing {% data variables.product.prodname_oauth_app %} to a {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/creating-github-apps/guides/migrating-oauth-apps-to-github-apps)."

### {% data variables.product.prodname_github_apps %} offer enhanced security

{% data variables.product.prodname_github_apps %} provide more control over what the app can do. Instead of the broad scopes that {% data variables.product.prodname_oauth_apps %} use, {% data variables.product.prodname_github_apps %} use fine-grained permissions. For example, if your app needs to read the contents of a repository, an {% data variables.product.prodname_oauth_app %} would require the `repo` scope, which would also let the app edit the repository contents and settings. A {% data variables.product.prodname_github_app %} can request read-only access to repository contents, which will not let the app take more privileged actions like editing the repository contents or settings.

{% data variables.product.prodname_github_apps %} also offer more control over repository access. With a {% data variables.product.prodname_github_app %}, the user or organization owner who installed the app can decide what repositories the app can access. Conversely, an {% data variables.product.prodname_oauth_app %} can access every repository that the user who authorized the app can access.

{% data variables.product.prodname_github_apps %} use short lived tokens. If the token is leaked, the token will be valid for a shorter amount of time, which reduces the damage that can be done. Conversely, {% data variables.product.prodname_oauth_app %} tokens do not expire until the person who authorized the {% data variables.product.prodname_oauth_app %} revokes the token.

These security features help harden your {% data variables.product.prodname_github_app %}'s security by limiting the damage that could be done if your app's credentials were leaked. Additionally, this lets organizations with stricter security policies use your app.

### {% data variables.product.prodname_github_apps %} can act independently of or on behalf of a user

{% data variables.product.prodname_github_apps %} can act independently of a user. This is beneficial for automations that do not require user input.

Similar to {% data variables.product.prodname_oauth_apps %}, {% data variables.product.prodname_github_apps %} can still take actions on behalf of a user. Unlike {% data variables.product.prodname_oauth_apps %}, which don't indicate that the action was performed by the app, {% data variables.product.prodname_github_apps %} indicate that the action was performed by the app on behalf of the user.

{% data variables.product.prodname_github_apps %} are not tied to a user account and do not consume a seat on {% data variables.product.product_name %}. {% data variables.product.prodname_github_apps %} remain installed even when the person who initially installed the app leaves the organization. This lets your integrations continue to work even if people leave your team.

### {% data variables.product.prodname_github_apps %} have scalable rate limits

The rate limit for {% data variables.product.prodname_github_apps %} using an installation access token scales with the number of repositories and number of organization users. Conversely, {% data variables.product.prodname_oauth_apps %} have lower rate limits and do not scale. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/rate-limits-for-github-apps)."

### {% data variables.product.prodname_github_apps %} have built in webhooks

{% data variables.product.prodname_github_apps %} have built-in, centralized webhooks. {% data variables.product.prodname_github_apps %} can receive webhook events for all repositories and organizations the app can access. Conversely, {% data variables.product.prodname_oauth_apps %}  must configure webhooks individually for each repository and organization.

### API access differs slightly

In general, {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} can make the same API requests. However, there are some differences:

* The REST API to manage check runs and check suites is only available to {% data variables.product.prodname_github_apps %}.
* Enterprise-level resources such as the enterprise object itself are not available to {% data variables.product.prodname_github_apps %}. This means that {% data variables.product.prodname_github_apps %} cannot call endpoints like `GET /enterprise/settings/license`. However, enterprise-owned organization and repository resources are available.
* Some requests may return incomplete data depending on the permissions and repository access that was granted to an {% data variables.product.prodname_github_app %}. For example, if your app makes a request to get all repositories that a user can access, the response will only include the repositories that the app was also granted access to.

For more information about the REST API endpoints that are available to {% data variables.product.prodname_github_apps %}, see "[AUTOTITLE](/rest/overview/endpoints-available-for-github-apps)."

## Choosing between a {% data variables.product.prodname_github_app %} or a {% data variables.product.pat_generic %}

 If you want to access {% data variables.product.prodname_dotcom %} resources on behalf of a user or in an organization, or you anticipate a long-lived integration, we recommend building a {% data variables.product.prodname_github_app %}.

 You can use {% data variables.product.pat_generic_plural %} for API testing or short-lived scripts. Since a {% data variables.product.pat_generic %} is associated with a user, your automation could break if the user no longer has access to the resources you need. A {% data variables.product.prodname_github_app %} installed in an organization is not dependent on a user. Additionally, unlike a user, a {% data variables.product.prodname_github_app %} does not consume a {% data variables.product.company_short %} seat.

{% data variables.product.company_short %} supports two types of {% data variables.product.pat_generic_plural %}, but recommends that you use {% data variables.product.pat_v2 %}s instead of {% data variables.product.pat_v1_plural %} whenever possible. For more information about {% data variables.product.pat_generic_plural %}, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#types-of-personal-access-tokens)."

## Choosing between a {% data variables.product.prodname_github_app %} or {% data variables.product.prodname_actions %}

{% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_actions %} both provide ways to build automation and workflow tools.

_{% data variables.product.prodname_actions %}_ provide automation that can perform jobs like continuous integration, deployment tasks, and project management in a repository. They run directly on {% data variables.product.prodname_dotcom %}-hosted runner machines or self-hosted runners that your administrator sets up. {% data variables.product.prodname_actions %} do not run persistently. {% data variables.product.prodname_actions %} workflows run in response to events that occur in their repository, and only have access to the resources of the repository that they are set up for. However, custom actions can be shared across repositories and organizations, allowing developers to reuse and modify existing actions to meet their needs. {% data variables.product.prodname_actions %} also come with built-in secret management, which you can use to securely interact with third-party services and manage deploy keys safely.

_{% data variables.product.prodname_github_apps %}_ run persistently on a server or compute infrastructure that you provide or run on a user device. They can react to {% data variables.product.company_short %} webhook events as well as events from outside the {% data variables.product.prodname_dotcom %} ecosystem. They are a good option for operations that span multiple repositories or organizations, or for providing hosted services to other organizations. A {% data variables.product.prodname_github_app %} is the best choice when building a tool with functions that occur primarily outside of {% data variables.product.prodname_dotcom %} or require more execution time or permissions than what a {% data variables.product.prodname_actions %} workflow is allotted.

For more information about comparing {% data variables.product.prodname_actions %} to {% data variables.product.prodname_github_apps %}, see "[AUTOTITLE](/actions/creating-actions/about-custom-actions#comparing-github-actions-to-github-apps)."

You can use a {% data variables.product.prodname_github_app %} to authenticate in a {% data variables.product.prodname_actions %}
workflow if the built in `GITHUB_TOKEN` does not have sufficient permissions. For more information, see "[AUTOTITLE](/apps/creating-github-apps/guides/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow)."
