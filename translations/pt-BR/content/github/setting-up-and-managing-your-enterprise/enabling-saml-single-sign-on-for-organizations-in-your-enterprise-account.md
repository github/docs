---
title: Habilitar logon único de SAML para organizações na conta corporativa
intro: 'You can control and secure access to resources like repositories, issues, and pull requests by enabling SAML single sign-on (SSO) and centralized authentication through an IdP across all organizations owned by an enterprise account.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners can enable SAML single sign-on for organizations in an enterprise account.
versions:
  free-pro-team: '*'
---

### About SAML single sign-on for enterprise accounts

{% data reusables.saml.dotcom-saml-explanation %} Para obter mais informações, consulte "[Sobre identidade e gerenciamento de acesso com o logon único SAML](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)".

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} Para obter mais informações, consulte "[Visualizar e gerenciar o acesso de SAML de um usuário à sua conta corporativa](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)".

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %} Se você não estiver participando do beta privado, o SCIM não será compatível para as contas corporativas. For more information, see "[About user provisioning for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account)."

### Enabling SAML single-sign on for organizations in your enterprise account

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
7. Optionally, in the **Issuer** field, type your SAML issuer URL to verify the authenticity of sent messages. ![Campo referente ao nome do emissor de SAML](/assets/images/help/saml/saml_issuer.png)
8. Em **Public Certificate** (Certificado público), cole um certificado para verificar as respostas de SAML. ![Campo referente ao certificado público do seu provedor de identidade](/assets/images/help/saml/saml_public_certificate.png)
9. Para verificar a integridade das solicitações do emissor de SAML, clique em {% octicon "pencil" aria-label="The edit icon" %}. Then in the "Signature Method" and "Digest Method" drop-downs, choose the hashing algorithm used by your SAML issuer. ![Menus suspensos Signature Method (Método de assinatura) e Digest Method (Método de compilação) para os algoritmos de hash usados pelo emissor de SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Antes de habilitar o SAML SSO para sua empresa, clique em **Test SAML configuration** (Testar configuração de SAML) para garantir que as informações que você digitou estão corretas. ![Botão para testar a configuração de SAML antes da aplicação](/assets/images/help/saml/saml_test.png)
11. Clique em **Salvar**.
