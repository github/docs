---
title: Revisar tus integraciones autorizadas
intro: Puedes revisar tus integraciones autorizadas para auditar el acceso que cada integración tiene a tu cuenta y a tus datos.
redirect_from:
  - /articles/reviewing-your-authorized-integrations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Revisar tus {% data variables.product.prodname_oauth_app %}s autorizadas

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.access_applications %}
{% data reusables.user_settings.access_authorized_oauth_apps %}
{% data reusables.user_settings.review-oauth-apps %}

### Revisar tus {% data variables.product.prodname_github_app %}s autorizadas

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.access_applications %}
3. Haz clic en la pestaña **Authorized {% data variables.product.prodname_github_app %}s** ({% data variables.product.prodname_github_app %}s autorizadas). ![Pestaña de {% data variables.product.prodname_github_app %}s autorizadas](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. Revisa las {% data variables.product.prodname_github_app %}s que tienen acceso a tu cuenta. Para las que no reconozcas o las que estén desactualizadas, haz clic en **Revoke** (Revocar). Para revocar todas las {% data variables.product.prodname_github_app %}s, haz clic en **Revoke all** (Revocar todo). ![Lista de {% data variables.product.prodname_github_app %} autorizadas](/assets/images/help/settings/revoke-github-app.png)

### Leer más
{% if currentVersion == "free-pro-team@latest" %}
- "[Acerca de las integraciones](/articles/about-integrations)"{% endif %}
- "[Revisar tus aplicaciones autorizadas (OAuth)](/articles/reviewing-your-authorized-applications-oauth)"
