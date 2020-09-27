---
title: Revisar integrações autorizadas
intro: Você pode revisar as integrações autorizadas para auditar o acesso que cada integração tem com sua conta e seus dados.
redirect_from:
  - /articles/reviewing-your-authorized-integrations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Revisar os {{ site.data.variables.product.prodname_oauth_app }} autorizados

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.access_applications }}
{{ site.data.reusables.user_settings.access_authorized_oauth_apps }}
{{ site.data.reusables.user_settings.review-oauth-apps }}

### Revisar os {{ site.data.variables.product.prodname_github_app }} autorizados

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.access_applications }}
3. Clique na guia **Authorized {{ site.data.variables.product.prodname_github_app }}s** (Apps GitHub autorizados). ![Guia Authorized {{ site.data.variables.product.prodname_github_app }}s (Apps GitHub autorizados)](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. Revise os {{ site.data.variables.product.prodname_github_app }} que têm acesso à sua conta. Para os aplicativos não reconhecidos ou desatualizados, clique em **Revoke** (Revogar). Para revogar todos os {{ site.data.variables.product.prodname_github_app }}, clique em **Revoke all** (Revogar todos). ![Lista de {{ site.data.variables.product.prodname_github_app }} autorizado](/assets/images/help/settings/revoke-github-app.png)

### Leia mais
{% if currentVersion == "free-pro-team@latest" %}
- "[Sobre integrações](/articles/about-integrations)"{% endif %}
- "[Revisar aplicativos autorizados (OAuth)](/articles/reviewing-your-authorized-applications-oauth)"
