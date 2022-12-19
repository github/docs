---
title: Configurar o logon único SAML para a sua empresa usando o Okta
intro: 'Você pode usar o logon único (SSO) da linguagem de declaração de markup (SAML) com o Okta para gerenciar automaticamente o acesso à sua conta corporativa em {% data variables.product.product_name %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
type: how_to
shortTitle: Configure SAML SSO with Okta
ms.openlocfilehash: e9cbf6e70fb5e07f9cd2c5e27d9b952921e18fdc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108014'
---
{% data reusables.enterprise-accounts.emu-saml-note %}

## Sobre o SAML com Okta

Você pode controlar o acesso à conta corporativa no {% data variables.product.product_name %} e em outros aplicativos web, a partir de uma interface central, configurando a conta corporativa para usar SAML SSO com Okta, um provedor de identidade (IdP).

O SAML SSO controla e protege o acesso a recursos da conta corporativa, como, por exemplo, organizações, repositórios, problemas e pull requests. Para obter mais informações, confira "[Como configurar o logon único do SAML para sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.saml.switching-from-org-to-enterprise %} Para obter mais informações, confira "[Como alternar a configuração do SAML de uma organização para uma conta corporativa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".

Como alternativa, você também pode configurar SAML SSO usando o Okta para uma organização que usa {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, confira "[Como configurar o logon único do SAML e o SCIM usando o Okta](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)".

## Adicionar o aplicativo {% data variables.product.prodname_ghe_cloud %} no Okta

{% data reusables.saml.okta-sign-into-your-account %}
1. Navegue até o aplicativo [{% data variables.product.prodname_ghe_cloud %} – Contas Corporativas](https://www.okta.com/integrations/github-enterprise-cloud-enterprise-accounts) na Rede de Integração do Okta e clique em **Adicionar Integração**.
{% data reusables.saml.okta-dashboard-click-applications %}
1. Opcionalmente, à direita do "Etiqueta do aplicativo", digite um nome descritivo para o aplicativo.
1. À direita da "Empresas de {% data variables.product.prodname_dotcom %}", digite o nome da conta corporativa. Por exemplo, se a URL da sua conta corporativa for `https://github.com/enterprises/octo-corp`, digite `octo-corp`.
1. Clique em **Concluído**.

## Habilitar e e testar o SAML SSO

{% data reusables.saml.okta-sign-into-your-account %} {% data reusables.saml.okta-dashboard-click-applications %} {% data reusables.saml.click-enterprise-account-application %} {% data reusables.saml.assign-yourself-to-okta %} {% data reusables.saml.okta-sign-on-tab %}
1. À direita de Configurações, clique em **Editar**.
1. Em "Atributos do SAML Configurados", à direita de "Grupos", use o menu suspenso e selecione **Correspondências de regex**.
1. À direita do menu suspenso, digite `.*.*`.
1. Clique em **Salvar**.
{% data reusables.saml.okta-view-setup-instructions %}
1. Habilite o SAML para a conta corporativa usando as informações nas instruções de configuração. Para obter mais informações, confira "[Como configurar o logon único do SAML para sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".
