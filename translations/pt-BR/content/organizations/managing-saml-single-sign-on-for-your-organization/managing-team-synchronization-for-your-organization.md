---
title: Gerenciar a sincronização de equipe para a sua organização
intro: 'Você pode habilitar e desabilitar a sincronização de equipes entre o seu provedor de identidade (IdP) e a sua organização em {% data variables.product.product_name %}.'
redirect_from:
  - /articles/synchronizing-teams-between-your-identity-provider-and-github
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-teams-between-your-identity-provider-and-github
  - /github/articles/synchronizing-teams-between-okta-and-github
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization
permissions: Organization owners can manage team synchronization for an organization.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Gerenciar sincronização de equipe
---

{% data reusables.enterprise-accounts.emu-scim-note %}

## Sobre a sincronização de equipes

É possível habilitar a sincronização de equipes entre seu IdP e o {% data variables.product.product_name %} para permitir que os proprietários da organização e mantenedores da equipe conectem equipes na sua organização com grupos de IdP.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.saml.ghec-only %}

{% data reusables.identity-and-permissions.supported-idps-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

Também é possível habilitar a sincronização de equipes para organizações que pertencem a uma conta corporativa. Para obter mais informações, consulte "[Gerenciar a sincronização de equipes para organizações na sua empresa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)".

{% data reusables.enterprise-accounts.team-sync-override %}

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## Habilitar a sincronização de equipes

As etapas para habilitar a sincronização de equipe dependem do IdP que você deseja usar. Existem pré-requisitos para habilitar a sincronização de equipes que se aplicam a cada IdP. Cada IdP individual tem pré-requisitos adicionais.

### Pré-requisitos

{% data reusables.identity-and-permissions.team-sync-required-permissions %}

Você deve habilitar o logon único SAML para sua organização e seu IdP compatível. Para obter mais informações, consulte "[Aplicar o logon único SAML para a sua organização](/articles/enforcing-saml-single-sign-on-for-your-organization)".

Você deve ter uma identidade SAML vinculada. Para criar uma identidade vinculada, você deve efetuar a autenticação na sua organização usando o SAML SSO e o IdP compatível pelo menos uma vez. Para obter mais informações, consulte "[Autenticar com logon único de SAML](/articles/authenticating-with-saml-single-sign-on)".

As suas configurações do SAML **devem** conter um IdP válido para o campo **Emissor**.

![Campo emissor do SAML](/assets/images/help/saml/saml_issuer.png)



### Habilitar a sincronização de equipe para o Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
6. Reveja as informações do encarregado do provedor de identidade que você deseja conectar à organização e clique em **Approve** (Aprovar). ![Solicitação pendente para habilitar a sincronização de equipes para um determinado encarregado do IdP com opção de aprovar ou cancelar a solicitação](/assets/images/help/teams/approve-team-synchronization.png)

### Habilitar a sincronização de equipe para o Okta

A sincronização da equipe do Okta exige que o SAML e o SCIM com Okta já tenham sido configurados para sua organização.

Para evitar possíveis erros de sincronização de equipes com o Okta, recomendamos que você confirme se as identidades vinculadas ao SCIM estão configuradas corretamente para todos os integrantes da organização que forem integrantes dos seus grupos escolhidos do Okta antes de habilitar a sincronização de equipes em {% data variables.product.prodname_dotcom %}.

Se um integrante da organização não tiver uma identidade SCIM vinculada, a sincronização de equipes não funcionará conforme esperado e o usuário não poderá ser adicionado ou removido das equipes como esperado. Se algum desses usuários não tiver uma identidade associada ao SCIM, você deverá provisioná-la novamente.

Para obter ajuda sobre o provisionamento de usuários que não tenham uma identidade vinculada ao SCIM, consulte "[Resolvendo problemas de identidade e gerenciamento de acessos](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management)".

{% data reusables.identity-and-permissions.team-sync-okta-requirements %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.team-sync-confirm-scim %}
1. Considere aplicar o SAML na sua organização para garantir que os integrantes da organização vinculem suas identidades ao SAML e ao SCIM. Para obter mais informações, consulte "[Aplicando o logon único SAML para a sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)".
{% data reusables.identity-and-permissions.enable-team-sync-okta %}
7. No nome da sua organização, digite um token SSWS válido e a URL para sua instância do Okta. ![Formulário da organização do Okta para habilitar a sincronização de equipes](/assets/images/help/teams/confirm-team-synchronization-okta-organization.png)
6. Revise as informações do locatário do provedor de identidade que você deseja conectar à sua organização e clique em **Criar**. ![Botão de criar em habilitar a sincronização de equipes](/assets/images/help/teams/confirm-team-synchronization-okta.png)

## Desabilitar a sincronização de equipes

{% data reusables.identity-and-permissions.team-sync-disable %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
5. Em "Team synchronization" (Sincronização de equipes), clique em **Disable team synchronization** (Desabilitar sincronização de equipes). ![Desabilitar a sincronização de equipes](/assets/images/help/teams/disable-team-synchronization.png)
