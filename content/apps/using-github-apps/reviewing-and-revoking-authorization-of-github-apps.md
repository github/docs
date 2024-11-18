---
title: Reviewing and revoking authorization of GitHub Apps
intro: 'You can review the {% data variables.product.prodname_github_apps %} that you have authorized, and you can revoke your authorization.'
redirect_from:
  - /articles/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations
  - /authentication/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations
  - /apps/using-github-apps/reviewing-your-authorized-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Review your authorizations
---

## About authorized {% data variables.product.prodname_github_apps %}

You may authorize a {% data variables.product.prodname_github_app %} to give the app permission to access information on your {% data variables.product.company_short %} account and to act on your behalf. For more information, see "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)."

You should periodically review the {% data variables.product.prodname_github_apps %} that you have authorized. If you no longer use an app, consider revoking your authorization for that app.

The authorization can only be revoked by the person who authorized the {% data variables.product.prodname_github_app %}. Organization owners cannot revoke {% data variables.product.prodname_github_app %} authorizations for their organization members. However, organization owners can uninstall the {% data variables.product.prodname_github_app %} from their organization, which will prevent the app from accessing organization-owned resources. For more information, see "[AUTOTITLE](/apps/using-github-apps/reviewing-and-modifying-installed-github-apps)."

## Reviewing your authorized {% data variables.product.prodname_github_apps %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.access_applications %}
1. Click the **Authorized {% data variables.product.prodname_github_apps %}** tab.
1. Review the {% data variables.product.prodname_github_apps %} that have access to your account. For those that you don't recognize or that have not been used recently, click **Revoke**. To revoke your authorization for all {% data variables.product.prodname_github_apps %}, click **Revoke all**.

   ![Screenshot of the "Authorized {% data variables.product.prodname_github_apps %}" tab. Next to an app, a button, labeled "Revoke," is highlighted in orange.](/assets/images/help/settings/revoke-github-app.png)

## Further reading

* "[AUTOTITLE](/apps/using-github-apps/reviewing-and-modifying-installed-github-apps)"
* "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps/reviewing-your-authorized-applications-oauth)"
* "[AUTOTITLE](/apps/using-github-apps/internal-github-apps)"
