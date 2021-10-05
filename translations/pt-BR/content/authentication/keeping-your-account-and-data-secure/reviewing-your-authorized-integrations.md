---
title: Revisar integrações autorizadas
intro: Você pode revisar as integrações autorizadas para auditar o acesso que cada integração tem com sua conta e seus dados.
redirect_from:
  - /articles/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Identity
  - Access management
shortTitle: Integrações autorizadas
---

## Reviewing your authorized {% data variables.product.prodname_oauth_apps %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.access_applications %}
{% data reusables.user_settings.access_authorized_oauth_apps %}
{% data reusables.user_settings.review-oauth-apps %}

## Reviewing your authorized {% data variables.product.prodname_github_apps %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.access_applications %}
3. Click the **Authorized {% data variables.product.prodname_github_apps %}** tab. ![Authorized {% data variables.product.prodname_github_apps %} tab](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. Review the {% data variables.product.prodname_github_apps %} that have access to your account. Para os aplicativos não reconhecidos ou desatualizados, clique em **Revoke** (Revogar). To revoke all {% data variables.product.prodname_github_apps %}, click **Revoke all**. ![Lista de {% data variables.product.prodname_github_app %} autorizado](/assets/images/help/settings/revoke-github-app.png)

## Leia mais
{% ifversion fpt %}
- "[Sobre integrações](/articles/about-integrations)"{% endif %}
- "[Revisar aplicativos autorizados (OAuth)](/articles/reviewing-your-authorized-applications-oauth)"
