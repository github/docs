---
title: Gerenciar a sincronização de equipes para organizações na conta corporativa
intro: 'You can enable team synchronization between an identity provider (IdP) and {% data variables.product.product_name %} to allow organizations owned by your enterprise account to manage team membership through IdP groups.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners can manage team synchronization for an enterprise account.
versions:
  free-pro-team: '*'
---

### About team synchronization for enterprise accounts

If you use Azure AD as your IdP, you can enable team synchronization for your enterprise account to allow organization owners and team maintainers to synchronize teams in the organizations owned by your enterprise accounts with IdP groups.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

Você também pode configurar e gerenciar a sincronização da equipe para uma organização individual. Para obter mais informações, consulte "[Gerenciar a sincronização de equipe para a sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)".

### Pré-requisitos

Você ou o administrador do Azure AD deve ser um administrador global ou um administrador com função privilegiada no Azure AD.

Você deve habilitar o logon único SAML para organizações na conta corporativa com o IdP compatível. Para obter mais informações, consulte "[Habilitar o logon único SAML para organizações na conta corporativa](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)".

Você deve efetuar a autenticação na sua conta corporativa usando o SAML SSO e o IdP compatível. Para obter mais informações, consulte "[Autenticar com logon único de SAML](/articles/authenticating-with-saml-single-sign-on)".

### Gerenciar a sincronização de equipe para o Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
7. Review the details for the IdP tenant you want to connect to your enterprise account, then click **Approve**. ![Solicitação pendente para habilitar a sincronização de equipes para um determinado encarregado do IdP com opção de aprovar ou cancelar a solicitação](/assets/images/help/teams/approve-team-synchronization.png)
8. Para desativar a sincronização de equipe, clique **Desativar sincronização de equipe**. ![Desabilitar a sincronização de equipes](/assets/images/help/teams/disable-team-synchronization.png)
