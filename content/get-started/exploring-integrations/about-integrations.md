---
title: About integrations
intro: 'Integrations are tools and services that connect with {% data variables.product.product_name %} to complement and extend your workflow.'
redirect_from:
  - /articles/about-integrations
  - /github/customizing-your-github-workflow/about-integrations
  - /github/customizing-your-github-workflow/exploring-integrations/about-integrations
  - /get-started/customizing-your-github-workflow/exploring-integrations/about-integrations
versions:
  fpt: '*'
  ghec: '*'
---
You can install integrations in your personal account or organizations you own. You can also install {% data variables.product.prodname_github_apps %} from a third-party in a specific repository where you have admin permissions or which is owned by your organization.

## Differences between {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}

Integrations can be {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_oauth_apps %}, or anything that utilizes {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIs or webhooks.

{% data variables.product.prodname_github_apps %} offer granular permissions and request access to only what the app needs. {% data variables.product.prodname_github_apps %} also offer specific user-level permissions that each user must authorize individually when an app is installed or when the integrator changes the permissions requested by the app.

For more information, see:
- "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/differences-between-github-apps-and-oauth-apps)"
- "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/about-apps)"
- "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user)"
- "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps)"
- "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)"
- "[AUTOTITLE](/apps/using-github-apps/reviewing-your-authorized-integrations)"

You can install a preconfigured {% data variables.product.prodname_github_app %}, if the integrators or app creators have created their app with the {% data variables.product.prodname_github_app %} manifest flow. For information about how to  run your {% data variables.product.prodname_github_app %} with automated configuration, contact the integrator or app creator.

You can create a {% data variables.product.prodname_github_app %} with simplified configuration if you build your app with Probot. For more information, see the [Probot docs](https://probot.github.io/docs/) site.

## Discovering integrations in {% data variables.product.prodname_marketplace %}

You can find an integration to install or publish your own integration in {% data variables.product.prodname_marketplace %}.

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) contains {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}. For more information on finding an integration or creating your own integration, see "[AUTOTITLE](/get-started/exploring-integrations/about-github-marketplace)."

## Integrations purchased directly from integrators

You can also purchase some integrations directly from integrators. As an organization member, if you find a {% data variables.product.prodname_github_app %} that you'd like to use, you can request that an organization approve and install the app for the organization.

If you have admin permissions for all organization-owned repositories the app is installed on, you can install {% data variables.product.prodname_github_apps %} with repository-level permissions without having to ask an organization owner to approve the app. When an integrator changes an app's permissions, if the permissions are for a repository only, organization owners and people with admin permissions to a repository with that app installed can review and accept the new permissions.
