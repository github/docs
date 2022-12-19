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
shortTitle: Enforce SAML single sign-on
ms.openlocfilehash: 78c6ca3297705511e419a96742a8887d01d7b70d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145097244'
---
## Sobre a aplicação do SAML SSO para sua organização

Ao habilitar o SAML SSO, {% data variables.product.prodname_dotcom %} solicitará que os integrantes que visitam os recursos da organização em {% data variables.product.prodname_dotcom_the_website %} efetuem a autenticação no seu IdP, que vincula a conta pessoal do integrante a uma identidade no IdP. Os integrantes ainda podem acessar os recursos da organização antes da autenticação com seu IdP.

![Banner com solicitação para efetuar a autenticação por meio do SAML SSO para acessar a organização](/assets/images/help/saml/sso-has-been-enabled.png)

Você também pode aplicar SAML SSO para a sua organização. {% data reusables.saml.when-you-enforce %} Aplicação remove todos os integrantes e administradores que não tenham efetuado a autenticação por meio do seu IdP da organização. {% data variables.product.company_short %} envia uma notificação de email para cada usuário removido. 

{% data reusables.saml.ghec-only %}

{% data reusables.saml.removed-users-can-rejoin %} Se um usuário juntar-se à organização em três meses, os privilégios e configurações de acesso do usuário serão restaurados. Para obter mais informações, confira "[Como restabelecer um ex-membro da sua organização](/articles/reinstating-a-former-member-of-your-organization)".

As contas de bots e serviços que não têm identidades externas configuradas no IdP da sua organização também serão removidas quando você aplicar o SAML SSO. Para obter mais informações sobre bots e contas de serviço, confira "[Como gerenciar bots e contas de serviço com o logon único do SAML](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on)".

Se a sua organização pertencer a uma conta corporativa que exigir o SAML para a conta corporativa substituirá a configuração SAML da organização e aplicará SAML SSO para todas as organizações da empresa. Para obter mais informações, confira "[Como configurar o logon único do SAML para sua empresa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

{% tip %}

**Dica:** {% data reusables.saml.testing-saml-sso %}

{% endtip %}

## Impondo o SAML SSO para a sua organização

1. Habilitar e testar o SAML SSO para a sua organização e, em seguida, efetuar a autenticação com seu IdP pelo menos uma vez. Para obter mais informações, confira "[Como habilitar e testar o logon único do SAML para sua organização](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)".
1. Prepare-se para aplicar o SAML SSO na sua organização. Para obter mais informações, confira "[Como se preparar para impor o logon único do SAML na sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/preparing-to-enforce-saml-single-sign-on-in-your-organization)".
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. Em "Logon único do SAML", selecione **Exigir a autenticação SSO do SAML para todos os membros da _ORGANIZATION_ organização**.
    ![Caixa de seleção "Exigir a autenticação SSO do SAML"](/assets/images/help/saml/require-saml-sso-authentication.png)
1. Se algum integrante da organização não tiver efetuado a autenticação por eio do seu IdP, {% data variables.product.company_short %} irá exibir os integrantes. Se você aplicar o SAML SSO, {% data variables.product.company_short %} removerá os integrantes da organização. Revise o aviso e clique em **Remover membros e exigir o logon único do SAML**.
    ![Caixa de diálogo "Confirmar a imposição do SSO do SAML" com a lista de membros a serem removidos da organização](/assets/images/help/saml/confirm-saml-sso-enforcement.png)
1. Em "Códigos de recuperação do logon único", revise seus códigos de recuperação. Armazene os códigos de recuperação em um local seguro, como um gerenciador de senhas.

## Leitura adicional

- "[Como ver e gerenciar o acesso do SAML de um membro à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"
