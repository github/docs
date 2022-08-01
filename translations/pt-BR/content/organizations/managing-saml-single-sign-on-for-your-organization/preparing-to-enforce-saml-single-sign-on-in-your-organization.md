---
title: Preparar para exigir o logon único SAML na organização
intro: 'Antes de exigir o logon único SAML na organização, você deve verificar a associação da organização e configurar as definições de conexão para seu provedor de identidade.'
redirect_from:
  - /articles/preparing-to-enforce-saml-single-sign-on-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-enforce-saml-single-sign-on-in-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Prepare-se para aplicar o SSO do SAML
---

{% data reusables.saml.ghec-only %}

{% data reusables.saml.when-you-enforce %} antes de aplicar o SAML SSO na sua organização, você deverá revisar a associação da organização, habilitar o SAML SSO e revisar o acesso SAML dos integrantes da organização. Para obter mais informações, consulte o seguinte.

| Tarefa                                                                                         | Mais informações          |
|:---------------------------------------------------------------------------------------------- |:------------------------- |
| Adicionar ou remover integrantes da sua organização                                            | <ul><li>"[Convidar usuários para participar da sua organização](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)"</li><li>"[Remover um integrante da sua organização](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)"</li></ul> |
| Conecte seu IdP à sua organização habilitando o SAML SSO                                       | <ul><li>"[Conectando seu provedor de identidade à sua organização](/organizations/managing-saml-one-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)"</li><li>"[Habilitando e testando o logon único SAML para a sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)"</li></ul> |
| Certifique-se de que os integrantes da organização registraram e vincularam suas contas ao IdP | <ul><li>"[Visualizando e gerenciando o acesso SAML de um integrante para a sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"</li></ul> |

Após concluir estas tarefas, você pode aplicar o SAML SSO SAML para a sua organização. Para obter mais informações, consulte "[Aplicando o logon único SAML para a sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)".

{% data reusables.saml.outside-collaborators-exemption %}
