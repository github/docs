---
title: Habilitando declarações criptografadas
shortTitle: Enable encrypted assertions
intro: 'Você pode aprimorar a segurança do {% data variables.product.product_location %} com o SSO (logon único) do SAML criptografando as mensagens enviadas pelo IdP (provedor de identidade) SAML.'
permissions: 'Site administrators can configure encrypted assertions for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '> 3.3'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
ms.openlocfilehash: ecb60a4398993155fa7498f26e7628660e88e54a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063775'
---
## Sobre declarações criptografadas

Se o seu IdP dá suporte a declarações criptografadas, você pode configurar asserções criptografadas no {% data variables.product.product_name %} para aumentar a segurança durante o processo de autenticação.

## Pré-requisitos

Para habilitar declarações criptografadas para autenticação para {% data variables.product.product_name %}, você deve configurar a autenticação SAML e seu IdP deve dar suporte a declarações criptografadas.

## Habilitando declarações criptografadas

Para habilitar declarações criptografadas, você deve fornecer o certificado público de {% data variables.product.product_location %} ao seu IdP e definir as configurações de criptografia que correspondem ao seu IdP.

{% note %}

**Observação**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

1. Opcionalmente, habilite a depuração do SAML. A depuração do SAML registra entradas detalhadas no registro de autenticação de {% data variables.product.product_name %} e pode ajudar você a solucionar problemas com falha nas tentativas de autenticação. Para saber mais, confira "[Solução de problemas de autenticação SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)".
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
1. Selecione **Exigir declarações criptografadas**.

   ![Captura de tela da caixa de seleção "Habilitar declarações criptografadas" na seção "Autenticação" do console de gerenciamento](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
1. À direita do "Certificado de Criptografia", clique em **Baixar** para salvar uma cópia do certificado público da {% data variables.product.product_location %} no computador local.

   ![Captura de tela do botão "Baixar" do certificado público para declarações criptografadas](/assets/images/help/saml/management-console-encrypted-assertions-download-certificate.png)
1. Efetue o login no seu IdP do SAML como administrador.
1. No aplicativo para {% data variables.product.product_location %}, habilite as declarações criptografadas.
   - Observe o método de criptografia e o método de transporte principal.
   - Forneça o certificado público que você baixou na etapa 7.
1. Retorne ao console de gerenciamento em {% data variables.product.product_location %}.
1. À direita de "Método de criptografia", selecione o método de criptografia para seu IdP a partir da etapa 9.

   ![Captura de tela de "Método de Criptografia" para declarações criptografadas](/assets/images/help/saml/management-console-encrypted-assertions-encryption-method.png)
1. À direita do "Principal método de transporte", selecione o principal método de transporte para seu IdP da etapa 9.

   ![Captura de tela de "Principal Método de Transporte" para declarações criptografadas](/assets/images/help/saml/management-console-encrypted-assertions-key-transport-method.png)
1. Clique em **Salvar alterações**.
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

Se você habilitou a depuração do SAML para testar a autenticação com declarações criptografadas, desabilite a depuração do SAML quando terminar o teste. Para saber mais, confira "[Solução de problemas de autenticação SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)".
