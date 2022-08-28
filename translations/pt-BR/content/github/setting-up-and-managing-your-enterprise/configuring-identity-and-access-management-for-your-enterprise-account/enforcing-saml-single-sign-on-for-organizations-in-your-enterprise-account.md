---
title: Aplicando o login único SAML para as organizações na sua conta corporativa
intro: 'É possível controlar e garantir o acesso a recursos como repositórios, problemas, e pull requests aplicando o logon único SAML (SSO) e a autenticação centralizada por meio de um IdP em todas as organizações pertencentes a uma conta corporativa.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners can enforce SAML single sign-on for organizations in an enterprise account.
versions:
  fpt: '*'
topics:
  - Enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
shortTitle: Aplicar o SAML
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## Sobre o logon único SAML para contas corporativas

{% data reusables.saml.dotcom-saml-explanation %} Para obter mais informações, consulte "[Sobre identidade e gerenciamento de acesso com o logon único SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} Para obter mais informações, consulte "[Visualizar e gerenciar o acesso de SAML de um usuário à sua conta corporativa](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)".

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %}

## Aplicar o logon único SAML para organizações na sua conta corporativa

{% note %}

**Notas:**

- Ao habilitar o logon único SAML SSO para sua empresa, a configuração corporativa substituirá todas as configurações do SAML existentes no nível da organização. {% data reusables.saml.switching-from-org-to-enterprise %} Para obter mais informações, consulte "[Alterando sua configuração do SAML de uma organização para uma conta corporativa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".
- Ao aplicar o SAML SSO para uma organização, {% data variables.product.company_short %} removerá todos os integrantes da organização que não tenham efetuado a autenticação com sucesso com seu IdP do SAML. Ao exigir o SAML SSO para a sua empresa, {% data variables.product.company_short %} não irá remover os integrantes da empresa que não tenham efetuado a autenticação com sucesso com o IdP do SAML. Na próxima vez que um integrante acessar os recursos da empresa, ele deverá efetuar a autenticação com o seu IdP do SAML.

{% endnote %}

Para obter informações mais detalhadas sobre como habilitar o SAML usando o Okta, consulte "[Configurar o logon único SAML para a sua conta corporativa usando Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Em "Logon único SAML", selecione **Exigir autenticação do SAML**. ![Caixa de seleção para habilitar SAML SSO](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. No campo **Sign on URL** (URL de logon), digite o ponto de extremidade HTTPS do seu IdP para solicitações de logon único. Esse valor está disponível na configuração do IdP. ![Campo referente à URL para a qual os integrantes serão encaminhados ao entrarem](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Opcionalmente, no campo **Emissor**, digite a URL do emissor do SAML para verificar a autenticidade das mensagens enviadas. ![Campo referente ao nome do emissor de SAML](/assets/images/help/saml/saml_issuer.png)
8. Em **Public Certificate** (Certificado público), cole um certificado para verificar as respostas de SAML. ![Campo referente ao certificado público do seu provedor de identidade](/assets/images/help/saml/saml_public_certificate.png)
9. Para verificar a integridade das solicitações do emissor de SAML, clique em {% octicon "pencil" aria-label="The edit icon" %}. Em seguida, no menu suspenso "Método de assinatura" e "Método de resumo", escolha o algoritmo de hashing usado pelo seu emissor do SAML. ![Menus suspensos Signature Method (Método de assinatura) e Digest Method (Método de compilação) para os algoritmos de hash usados pelo emissor de SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Antes de habilitar o SAML SSO para sua empresa, clique em **Test SAML configuration** (Testar configuração de SAML) para garantir que as informações que você digitou estão corretas. ![Botão para testar a configuração de SAML antes da aplicação](/assets/images/help/saml/saml_test.png)
11. Clique em **Salvar**.
