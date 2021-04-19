---
title: Habilitar logon único de SAML para organizações na conta corporativa
intro: 'É possível controlar e garantir o acesso a recursos como repositórios, problemas, e pull requests habilitando o logon único SAML (SSO) e a autenticação centralizada através de um IdP em todas as organizações pertencentes a uma conta corporativa.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Os proprietários das empresas podem habilitar o logon único SAML para organizações em uma conta corporativa.
versions:
  free-pro-team: '*'
topics:
  - enterprise
---

### Sobre o logon único SAML para contas corporativas

{% data reusables.saml.dotcom-saml-explanation %} Para obter mais informações, consulte "[Sobre identidade e gerenciamento de acesso com o logon único SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} Para obter mais informações, consulte "[Visualizar e gerenciar o acesso de SAML de um usuário à sua conta corporativa](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)".

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %} Se você não estiver participando do beta privado, o SCIM não será compatível para as contas corporativas. Para obter mais informações, consulte "[Sobre o provisionamento do usuário para organizações na sua conta corporativa](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account)".

### Habilitar o logn único SAML para organizações na sua conta corporativa

{% note %}

**Observação**: se você habilitar a autenticação com logon único SAML para a conta corporativa, as configurações SAML existentes no nível da organização serão substituídas.

{% endnote %}

Para obter informações mais detalhadas sobre como ativar o SAML usando o Okta, consulte "[Configurar o logon único SAML e SCIM para a sua conta corporativa usando o Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Em "SAML single sign-on" (Logon único de SAML), selecione **Enable SAML authentication** (Habilitar autenticação SAML). ![Caixa de seleção para habilitar SAML SSO](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. No campo **Sign on URL** (URL de logon), digite o ponto de extremidade HTTPS do seu IdP para solicitações de logon único. Esse valor está disponível na configuração do IdP. ![Campo referente à URL para a qual os integrantes serão encaminhados ao entrarem](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Opcionalmente, no campo **Emissor**, digite a URL do emissor do SAML para verificar a autenticidade das mensagens enviadas. ![Campo referente ao nome do emissor de SAML](/assets/images/help/saml/saml_issuer.png)
8. Em **Public Certificate** (Certificado público), cole um certificado para verificar as respostas de SAML. ![Campo referente ao certificado público do seu provedor de identidade](/assets/images/help/saml/saml_public_certificate.png)
9. Para verificar a integridade das solicitações do emissor de SAML, clique em {% octicon "pencil" aria-label="The edit icon" %}. Em seguida, no menu suspenso "Método de assinatura" e "Método de resumo", escolha o algoritmo de hashing usado pelo seu emissor do SAML. ![Menus suspensos Signature Method (Método de assinatura) e Digest Method (Método de compilação) para os algoritmos de hash usados pelo emissor de SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Antes de habilitar o SAML SSO para sua empresa, clique em **Test SAML configuration** (Testar configuração de SAML) para garantir que as informações que você digitou estão corretas. ![Botão para testar a configuração de SAML antes da aplicação](/assets/images/help/saml/saml_test.png)
11. Clique em **Salvar**.
