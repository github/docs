---
title: Revisar integrações autorizadas
intro: Você pode revisar as integrações autorizadas para auditar o acesso que cada integração tem com sua conta e seus dados.
redirect_from:
  - /articles/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/reviewing-your-authorized-integrations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---
### Revisar os {% data variables.product.prodname_oauth_app %} autorizados

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.access_applications %}
{% data reusables.user_settings.access_authorized_oauth_apps %}
{% data reusables.user_settings.review-oauth-apps %}

### Revisar os {% data variables.product.prodname_github_app %} autorizados

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.access_applications %}
3. Clique na guia **Authorized {% data variables.product.prodname_github_app %}s** (Apps GitHub autorizados). ![Guia Authorized {% data variables.product.prodname_github_app %}s (Apps GitHub autorizados)](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. Revise os {% data variables.product.prodname_github_app %} que têm acesso à sua conta. Para os aplicativos não reconhecidos ou desatualizados, clique em **Revoke** (Revogar). Para revogar todos os {% data variables.product.prodname_github_app %}, clique em **Revoke all** (Revogar todos). ![Lista de {% data variables.product.prodname_github_app %} autorizado](/assets/images/help/settings/revoke-github-app.png)

### Leia mais
{% if currentVersion == "free-pro-team@latest" %}
- "[Sobre integrações](/articles/about-integrations)"{% endif %}
- "[Revisar aplicativos autorizados (OAuth)](/articles/reviewing-your-authorized-applications-oauth)"
