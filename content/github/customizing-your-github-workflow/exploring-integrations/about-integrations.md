---
title: About integrations
intro: 'Integrations are tools and services that connect with {% data variables.product.product_name %} to complement and extend your workflow.'
redirect_from:
  - /articles/about-integrations
  - /github/customizing-your-github-workflow/about-integrations
versions:
  fpt: '*'
---
You can install integrations in your personal account or organizations you own. You can also install {% data variables.product.prodname_github_app %}s from a third-party in a specific repository where you have admin permissions or which is owned by your organization.

## Differences between {% data variables.product.prodname_github_app %}s and {% data variables.product.prodname_oauth_app %}s

Integrations can be {% data variables.product.prodname_github_app %}s, {% data variables.product.prodname_oauth_app %}s, or anything that utilizes {% data variables.product.product_name %} APIs or webhooks.

{% data variables.product.prodname_github_app %}s offer granular permissions and request access to only what the app needs. {% data variables.product.prodname_github_app %}s also offer specific user-level permissions that each user must authorize individually when an app is installed or when the integrator changes the permissions requested by the app.

For more information, see:
- "[Differences between {% data variables.product.prodname_github_app %}s and {% data variables.product.prodname_oauth_app %}s](/apps/differences-between-apps/)"
- "[About apps](/apps/about-apps/)"
- "[User-level permissions](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)"
- "[Authorizing {% data variables.product.prodname_oauth_app %}s](/articles/authorizing-oauth-apps/)"
- "[Reviewing your authorized integrations](/articles/reviewing-your-authorized-integrations/)"

You can install a preconfigured {% data variables.product.prodname_github_app %}, if the integrators or app creators have created their app with the {% data variables.product.prodname_github_app %} manifest flow. For information about how to  run your {% data variables.product.prodname_github_app %} with automated configuration, contact the integrator or app creator.

You can create a {% data variables.product.prodname_github_app %} with simplified configuration if you build your app with Probot. For more information, see the [Probot docs](https://probot.github.io/docs/) site.

## Discovering integrations in {% data variables.product.prodname_marketplace %}

You can find an integration to install or publish your own integration in {% data variables.product.prodname_marketplace %}.

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) contains {% data variables.product.prodname_github_app %}s and {% data variables.product.prodname_oauth_app %}s. For more information on finding an integration or creating your own integration, see "[About {% data variables.product.prodname_marketplace %}](/articles/about-github-marketplace)."

## Integrations purchased directly from integrators

You can also purchase some integrations directly from integrators. As an organization member, if you find a {% data variables.product.prodname_github_app %} that you'd like to use, you can request that an organization approve and install the app for the organization.

If you have admin permissions for all organization-owned repositories the app is installed on, you can install {% data variables.product.prodname_github_app %}s with repository-level permissions without having to ask an organization owner to approve the app. When an integrator changes an app's permissions, if the permissions are for a repository only, organization owners and people with admin permissions to a repository with that app installed can review and accept the new permissions.
