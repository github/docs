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
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Integrações autorizadas
---

## Revisar os seus {% data variables.product.prodname_oauth_apps %} autorizados

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.access_applications %}
{% data reusables.user-settings.access_authorized_oauth_apps %}
{% data reusables.user-settings.review-oauth-apps %}

## Revisar os seus {% data variables.product.prodname_github_apps %} autorizados

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.access_applications %}
3. Clique na aba **{% data variables.product.prodname_github_apps %} autorizado**. ![Aba {% data variables.product.prodname_github_apps %} autorizado](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. Revise o {% data variables.product.prodname_github_apps %} que tem acesso à sua conta. Para os aplicativos não reconhecidos ou desatualizados, clique em **Revoke** (Revogar). Para revogar todos os {% data variables.product.prodname_github_apps %}, clique em **Revogar todos**. ![Lista de {% data variables.product.prodname_github_app %} autorizado](/assets/images/help/settings/revoke-github-app.png)

## Leia mais
{% ifversion fpt or ghec %}
- "[Sobre integrações](/articles/about-integrations)"{% endif %}
- "[Revisar aplicativos autorizados (OAuth)](/articles/reviewing-your-authorized-applications-oauth)"
