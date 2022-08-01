---
title: Habilitar e testar logon único de SAML para sua organização
intro: 'Os administradores e proprietários da organização podem habilitar o logon único (SSO, Single Sign-On) de SAML para adicionar uma camada extra de segurança à organização.'
redirect_from:
  - /articles/enabling-and-testing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enabling-and-testing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Habilitar & testar o SSO do SAML
---

## Sobre o logon único SAML

Você pode habilitar o SAML SSO na sua organização sem exigir que todos os integrantes o utilizem. A habilitação (em vez da aplicação) do SAML SSO facilitará a adoção dele pela organização. Depois que a maioria dos integrantes da sua organização já estiver usando o SAML SSO, você poderá aplicá-lo a toda a organização.

{% data reusables.saml.ghec-only %}

Se você habilitar em vez de aplicar o SAML SSO, os integrantes da organização que preferem não usá-lo poderão continuar sendo integrantes da organização. Para obter mais informações sobre a aplicação do SAML SSO, consulte "[Aplicar logon único de SAML para sua organização](/articles/enforcing-saml-single-sign-on-for-your-organization)".

{% data reusables.saml.outside-collaborators-exemption %}

{% data reusables.saml.saml-disabled-linked-identities-removed %}

## Habilitar e testar logon único de SAML para sua organização

Antes de aplicar o SAML SSO na sua organização, certifique-se de preparar a organização. Para obter mais informações, consulte "[Preparar para aplicar logon único de SAML na organização](/articles/preparing-to-enforce-saml-single-sign-on-in-your-organization)".

Para obter mais informações sobre os provedores de identidade (IdPs) que {% data variables.product.company_short %} tem compabilidade com o SAML SSO, consulte "[Conectando seu provedor de identidade à sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)".

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
5. Em "SAML single sign-on" (Logon único de SAML), selecione **Enable SAML authentication** (Habilitar autenticação SAML). ![Caixa de seleção para habilitar SAML SSO](/assets/images/help/saml/saml_enable.png)

  {% note %}

  **Observação:** depois de habilitar o SAML SSO, baixe os seus códigos de recuperação de logon único para poder acessar sua organização mesmo que o IdP esteja indisponível. Para obter mais informações, consulte "[Baixar códigos de recuperação de logon único de SAML da organização](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes)".

  {% endnote %}

6. No campo "Sign on URL" (URL de logon), digite o ponto de extremidade HTTPS do seu IdP para solicitações de logon único. Esse valor está disponível na configuração do IdP. ![Campo referente à URL para a qual os integrantes serão encaminhados ao entrarem](/assets/images/help/saml/saml_sign_on_url.png)
7. Como alternativa, no campo "Issuer" (Emissor), digite o nome do emissor do SAML. Isso confirma a autenticidade das mensagens enviadas. ![Campo referente ao nome do emissor de SAML](/assets/images/help/saml/saml_issuer.png)
8. Em "Public Certificate" (Certificado público), cole um certificado para verificar as respostas de SAML. ![Campo referente ao certificado público do seu provedor de identidade](/assets/images/help/saml/saml_public_certificate.png)
9. Clique em {% octicon "pencil" aria-label="The edit icon" %} e, nos menus suspensos Signature Method (Método de assinatura) e Digest Method (Método de compilação), escolha o algoritmo de hash usado pelo emissor de SAML para verificar a integridade das solicitações. ![Menus suspensos Signature Method (Método de assinatura) e Digest Method (Método de compilação) para os algoritmos de hash usados pelo emissor de SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Antes de habilitar o SAML SSO para sua organização, clique em **Test SAML configuration** (Testar configuração de SAML) para garantir que as informações que você digitou estão corretas. ![Botão para testar a configuração de SAML antes da aplicação](/assets/images/help/saml/saml_test.png)

  {% tip %}

  **Dica:** {% data reusables.saml.testing-saml-sso %}

  {% endtip %}
11. Para aplicar o SAML SSO e remover todos os integrantes da organização que não foram autenticados via IdP, selecione **Require SAML SSO authentication for all members of the _organization name_ organization** (Requer autenticação do SAML SSO para todos os integrantes da organização *nome da organização*). Para obter mais informações sobre a aplicação do SAML SSO, consulte "[Aplicar logon único de SAML para sua organização](/articles/enforcing-saml-single-sign-on-for-your-organization)". ![Caixa de seleção para exigir SAML SSO para sua organização ](/assets/images/help/saml/saml_require_saml_sso.png)
12. Clique em **Salvar**. ![Botão para salvar as configurações do SAML SSO](/assets/images/help/saml/saml_save.png)

## Leia mais

- "[Sobre gerenciamento de identidade e acesso com o SAML de logon único](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Referência da configuração do SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)"
