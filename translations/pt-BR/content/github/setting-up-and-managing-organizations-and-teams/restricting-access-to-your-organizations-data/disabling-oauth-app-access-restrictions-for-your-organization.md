---
title: Desabilitar restrições de acesso do aplicativo OAuth da sua organização
intro: 'Os proprietários da organização podem desabilitar restrições nos {% data variables.product.prodname_oauth_app %}s que têm acesso aos recursos da organização.'
redirect_from:
  - /articles/disabling-third-party-application-restrictions-for-your-organization/
  - /articles/disabling-oauth-app-access-restrictions-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/disabling-oauth-app-access-restrictions-for-your-organization
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---
{% danger %}

**Aviso**: com a desabilitação das restrições de acesso do {% data variables.product.prodname_oauth_app %} da sua organização, qualquer integrante da organização autorizará automaticamente o acesso do {% data variables.product.prodname_oauth_app %} aos recursos privados da organização ao aprovar um aplicativo para ser usado nas configurações de conta pessoal dele.

{% enddanger %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. Clique em **Remove restrictions** (Remover restrições). ![Botão Remove restrictions (Remover restrições)](/assets/images/help/settings/settings-third-party-remove-restrictions.png)
6. Depois de revisar as informações sobre desabilitação de restrições de aplicativos de terceiros, clique em **Yes, remove application restrictions** (Sim, remover restrições de aplicativos). ![Botão de remover confirmação](/assets/images/help/settings/settings-third-party-confirm-disable.png)
