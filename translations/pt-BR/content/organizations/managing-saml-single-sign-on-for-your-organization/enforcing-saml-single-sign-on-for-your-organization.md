---
title: Aplicar logon único de SAML para sua organização
intro: Administradores e proprietários da organização podem aplicar SAML SSO para que todos os integrantes da organização possam efetuar a autenticação por meio de um provedor de identidade (IdP).
redirect_from:
  - /articles/enforcing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enforcing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Aplicar logon único SAML
---

## Sobre a aplicação do SAML SSO para sua organização

When you enable SAML SSO, {% data variables.product.prodname_dotcom %} will prompt members who visit the organization's resources on {% data variables.product.prodname_dotcom_the_website %} to authenticate on your IdP, which links the member's personal account to an identity on the IdP. Os integrantes ainda podem acessar os recursos da organização antes da autenticação com seu IdP.

![Banner com solicitação para efetuar a autenticação por meio do SAML SSO para acessar a organização](/assets/images/help/saml/sso-has-been-enabled.png)

Você também pode aplicar SAML SSO para a sua organização. {% data reusables.saml.when-you-enforce %} Aplicação remove todos os integrantes e administradores que não tenham efetuado a autenticação por meio do seu IdP da organização. {% data variables.product.company_short %} envia uma notificação de email para cada usuário removido.

{% data reusables.saml.ghec-only %}

{% data reusables.saml.removed-users-can-rejoin %} Se um usuário juntar-se à organização em três meses, os privilégios e configurações de acesso do usuário serão restaurados. Para obter mais informações, consulte "[Restabelecer ex-integrantes da organização](/articles/reinstating-a-former-member-of-your-organization)".

As contas de bots e serviços que não têm identidades externas configuradas no IdP da sua organização também serão removidas quando você aplicar o SAML SSO. Para obter mais informações sobre bots e contas de serviço, consulte "[Gerenciar bots e contas de serviço com logon único SAML](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on)".

Se a sua organização pertencer a uma conta corporativa que exigir o SAML para a conta corporativa substituirá a configuração SAML da organização e aplicará SAML SSO para todas as organizações da empresa. Para obter mais informações, consulte "[Configurar logon único SAML para a sua empresa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

{% tip %}

**Dica:** {% data reusables.saml.testing-saml-sso %}

{% endtip %}

## Impondo o SAML SSO para a sua organização

1. Habilitar e testar o SAML SSO para a sua organização e, em seguida, efetuar a autenticação com seu IdP pelo menos uma vez. Para obter mais informações, consulte "[Habilitar e testar logon único de SAML para sua organização](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)".
1. Prepare-se para aplicar o SAML SSO na sua organização. Para obter mais informações, consulte "[Preparar para aplicar logon único de SAML na organização](/organizations/managing-saml-single-sign-on-for-your-organization/preparing-to-enforce-saml-single-sign-on-in-your-organization)".
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Em "logon único SAML", selecione **Exige augenticação SAML SSO para todos os integrantes da _ORGANIZAÇÃO_ organização**. ![Caixa de seleção "Exigir autenticação SAML SSO"](/assets/images/help/saml/require-saml-sso-authentication.png)
1. Se algum integrante da organização não tiver efetuado a autenticação por eio do seu IdP, {% data variables.product.company_short %} irá exibir os integrantes. Se você aplicar o SAML SSO, {% data variables.product.company_short %} removerá os integrantes da organização. Revise o aviso e clique em **Remover os integrantes e exigir o logon único SAML**. ![Diálogo "Confirmar a aplicação do SAML SSO" com a lista de integrantes a serem removidos da organização](/assets/images/help/saml/confirm-saml-sso-enforcement.png)
1. Em "Códigos de recuperação do logon único", revise seus códigos de recuperação. Armazene os códigos de recuperação em um local seguro, como um gerenciador de senhas.

## Leia mais

- "[Visualizar e gerenciar acesso de SAML de um integrante à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"
