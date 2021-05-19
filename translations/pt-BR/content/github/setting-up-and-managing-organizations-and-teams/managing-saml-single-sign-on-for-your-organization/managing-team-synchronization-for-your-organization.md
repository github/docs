---
title: Gerenciar a sincronização de equipe para a sua organização
intro: 'Você pode habilitar e desabilitar a sincronização de equipes entre o seu provedor de identidade (IdP) e a sua organização em {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.team-synchronization %}'
redirect_from:
  - /articles/synchronizing-teams-between-your-identity-provider-and-github
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-teams-between-your-identity-provider-and-github
  - /github/articles/synchronizing-teams-between-okta-and-github
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization
permissions: Os proprietários da organização podem gerenciar a sincronização de equipes para uma organização.
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---
{% data reusables.gated-features.okta-team-sync %}

### Sobre a sincronização de equipes

É possível habilitar a sincronização de equipes entre seu IdP e o {% data variables.product.product_name %} para permitir que os proprietários da organização e mantenedores da equipe conectem equipes na sua organização com grupos de IdP.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.supported-idps-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

Também é possível habilitar a sincronização de equipes para organizações que pertencem a uma conta corporativa. Para obter mais informações, consulte "[Aplicar as configurações de segurança na conta corporativa](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account)".

### Habilitar a sincronização de equipes

As etapas para habilitar a sincronização de equipe dependem do IdP que você deseja usar. Existem pré-requisitos para habilitar a sincronização de equipes que se aplicam a cada IdP. Cada IdP individual tem pré-requisitos adicionais.

#### Pré-requisitos

{% data reusables.identity-and-permissions.team-sync-required-permissions %}

Você deve habilitar o logon único SAML para sua organização e seu IdP compatível. Para obter mais informações, consulte "[Aplicando o logon único SAML para a sua organização](/articles/enforcing-saml-single-sign-on-for-your-organization)".

Você deve efetuar a autenticação para a sua organização usando SAML SSO e o IdP compatível. Para obter mais informações, consulte "[Autenticar com logon único de SAML](/articles/authenticating-with-saml-single-sign-on)".

#### Habilitar a sincronização de equipe para o Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
6. Reveja as informações do encarregado do provedor de identidade que você deseja conectar à organização e clique em **Approve** (Aprovar). ![Solicitação pendente para habilitar a sincronização de equipes para um determinado encarregado do IdP com opção de aprovar ou cancelar a solicitação](/assets/images/help/teams/approve-team-synchronization.png)

#### Habilitar a sincronização de equipe para o Okta

{% data reusables.identity-and-permissions.team-sync-okta-requirements %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-okta %}
7. No nome da sua organização, digite um token SSWS válido e a URL para sua instância do Okta. ![Formulário da organização do Okta para habilitar a sincronização de equipes](/assets/images/help/teams/confirm-team-synchronization-okta-organization.png)
6. Revise as informações do locatário do provedor de identidade que você deseja conectar à sua organização e clique em **Criar**. ![Botão de criar em habilitar a sincronização de equipes](/assets/images/help/teams/confirm-team-synchronization-okta.png)

### Desabilitar a sincronização de equipes

{% data reusables.identity-and-permissions.team-sync-disable %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
5. Em "Team synchronization" (Sincronização de equipes), clique em **Disable team synchronization** (Desabilitar sincronização de equipes). ![Desabilitar a sincronização de equipes](/assets/images/help/teams/disable-team-synchronization.png)
