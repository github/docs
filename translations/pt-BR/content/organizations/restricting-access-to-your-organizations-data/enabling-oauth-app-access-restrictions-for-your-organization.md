---
title: Habilitar restrições de acesso do aplicativo OAuth da sua organização
intro: 'Organization owners can enable {% data variables.product.prodname_oauth_app %} access restrictions to prevent untrusted apps from accessing the organization''s resources while allowing organization members to use {% data variables.product.prodname_oauth_apps %} for their personal accounts.'
redirect_from:
  - /articles/enabling-third-party-application-restrictions-for-your-organization/
  - /articles/enabling-oauth-app-access-restrictions-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
topics:
  - Organizations
  - Teams
shortTitle: Ativar aplicativo OAuth
---

{% data reusables.organizations.oauth_app_restrictions_default %}

{% warning %}

**Avisos**:
- Enabling {% data variables.product.prodname_oauth_app %} access restrictions will revoke organization access for all previously authorized {% data variables.product.prodname_oauth_apps %} and SSH keys. Para obter mais informações, consulte "[Sobre restrições de acesso do {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions)".
- Depois de configurar as restrições de acesso do {% data variables.product.prodname_oauth_app %}, lembre-se de tornar a autorizar qualquer {% data variables.product.prodname_oauth_app %} que requeira acesso aos dados privados da organização continuamente. Todos os integrantes da organização precisarão criar chaves SSH, e a organização precisará criar chaves de implantação conforme necessário.
- Quando as restrições de acesso do {% data variables.product.prodname_oauth_app %} estiverem habilitadas, os aplicativos poderão usar um token OAuth para acessar informações sobre transações do {% data variables.product.prodname_marketplace %}.

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. Em "Third-party application access policy" (Política de acesso a aplicativos de terceiros), clique em **Setup application access restrictions** (Configurar restrições de acesso a aplicativos). ![Botão Set up restrictions (Configurar restrições)](/assets/images/help/settings/settings-third-party-set-up-restrictions.png)
6. Depois de revisar as informações sobre restrições de acesso a terceiros, clique em **Restrict third-party application access** (Restringir acesso a aplicativos de terceiros). ![Botão Restriction confirmation (Confirmação de restrição)](/assets/images/help/settings/settings-third-party-restrict-confirm.png)
