---
title: Habilitando declarações criptografadas
shortTitle: Enable encrypted assertions
intro: 'You can improve {% data variables.product.product_location %}''s security with SAML single sign-on (SSO) by encrypting the messages that your SAML identity provider (IdP) sends.'
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
---

## About encrypted assertions

If your IdP support encryption of assertions, you can configure encrypted assertions on {% data variables.product.product_name %} for increased security during the authentication process.

## Pré-requisitos

To enable encrypted assertions for authentication to {% data variables.product.product_name %}, you must configure SAML authentication, and your IdP must support encrypted assertions.

## Habilitando declarações criptografadas

To enable encrypted assertions, you must provide {% data variables.product.product_location %}'s public certificate to your IdP, and configure encryption settings that match your IdP.

{% note %}

**Observação**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

1. Opcionalmente, habilite a depuração do SAML. A depuração do SAML registra entradas detalhadas no registro de autenticação de {% data variables.product.product_name %} e pode ajudar você a solucionar problemas com falha nas tentativas de autenticação. For more information, see "[Troubleshooting SAML authentication](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)."
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. Selecione **Exigir declarações criptografadas**.

   ![Captura de tela da caixa de seleção "Habilitar declarações criptografadas" na seção de gerenciamento do console "Autenticação"](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
1. À direita do "Certificado de criptografia", clique em **Download** para salvar uma cópia do certificado público de {% data variables.product.product_location %} em sua máquina local.

   ![Captura de tela do botão "Download" para certificado público para declarações criptografadas](/assets/images/help/saml/management-console-encrypted-assertions-download-certificate.png)
1. Efetue o login no seu IdP do SAML como administrador.
1. No aplicativo para {% data variables.product.product_location %}, habilite as declarações criptografadas.
   - Observe o método de criptografia e o método de transporte principal.
   - Forneça o certificado público que você baixou na etapa 7.
1. Retorne ao console de gerenciamento em {% data variables.product.product_location %}.
1. À direita de "Método de criptografia", selecione o método de criptografia para seu IdP a partir da etapa 9.

   ![Captura de tela de "Método de criptografia" para declarações criptografadas](/assets/images/help/saml/management-console-encrypted-assertions-encryption-method.png)
1. À direita do "Principal método de transporte", selecione o principal método de transporte para seu IdP da etapa 9.

   ![Captura de tela de "Principal método de transporte" para declarações criptografadas](/assets/images/help/saml/management-console-encrypted-assertions-key-transport-method.png)
1. Clique em **Save settings** (Salvar configurações).
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

Se você habilitou a depuração do SAML para testar a autenticação com declarações criptografadas, desabilite a depuração do SAML quando terminar o teste. For more information, see "[Troubleshooting SAML authentication](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)."
