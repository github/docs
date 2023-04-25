---
title: Reviewing your authorized integrations
intro: You can review your authorized integrations to audit the access that each integration has to your account and data.
redirect_from:
  - /articles/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations
  - /authentication/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Authorized integrations
---

## Reviewing your authorized {% data variables.product.prodname_github_apps %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.access_applications %}
3. Click the **Authorized {% data variables.product.prodname_github_apps %}** tab.
3. Review the {% data variables.product.prodname_github_apps %} that have access to your account. For those that you don't recognize or that are out of date, click **Revoke**. To revoke all {% data variables.product.prodname_github_apps %}, click **Revoke all**.

   ![Screenshot of the "Authorized {% data variables.product.prodname_github_apps %}" tab. Next to an app, a button, labeled "Revoke," is highlighted in orange.](/assets/images/help/settings/revoke-github-app.png)

## Further reading
{% ifversion fpt or ghec %}
- "[AUTOTITLE](/get-started/exploring-integrations/about-integrations)"{% endif %}
- "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps/reviewing-your-authorized-applications-oauth)"
