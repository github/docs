---
title: Configurar o logon único SAML para sua empresa
shortTitle: Configurar o SAML SSO
intro: 'Você pode controlar e garantir acesso a recursos {% ifversion ghec %}como repositórios, problemas, e pull requests para as organizações da sua empresa{% elsif ghae %}a sua empresa em {% data variables.product.prodname_ghe_managed %}{% endif %} {% ifversion ghec %}aplicando {% elsif ghae %}configurando{% endif %} logon único SAML (SSO) por meio do seu provedor de identidade (IdP).'
permissions: 'Enterprise owners can configure SAML SSO for an enterprise on {% data variables.product.product_name %}.'
versions:
  ghec: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-saml-single-sign-on-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## Sobre o SAML SSO para contas corporativas

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} Para obter mais informações, consulte "[Sobre identidade e gerenciamento de acesso com o logon único SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} Para obter mais informações, consulte "[Visualizar e gerenciar o acesso de SAML de um usuário à sua conta corporativa](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)".

{% data reusables.scim.enterprise-account-scim %}

{% elsif ghae %}

O SAML SSO permite que você controle centralmente e proteja o acesso ao {% data variables.product.product_location %} a partir do seu IdP SAML. Quando um usuário não autenticado visita {% data variables.product.product_location %} em um navegador, {% data variables.product.product_name %} redirecionará o usuário para seu IdP do SAML para efetuar a autenticação. Depois que o usuário efetua a autenticação com sucesso com uma conta no IdP, o usuário do IdP redireciona o usuário de volta para {% data variables.product.product_location %}. {% data variables.product.product_name %} valida a resposta do seu IdP e, em seguida, concede acesso ao usuário.

Depois que um usuário efetua a autenticação com sucesso no seu IdP, a sessão do SAML do usuário para {% data variables.product.product_location %} fica ativa no navegador por 24 horas. Depois de 24 horas, o usuário deve efetuar a autenticação novamente com o seu IdP.

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} Para obter mais informações, consulte "[Configurar provisionamento do usuário para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

{% endif %}

## Provedores de identidade compatíveis

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghec %}

## Aplicar o logon único SAML para organizações na sua conta corporativa

{% note %}

**Notas:**

- Ao aplicar o logon único SAML SSO para sua empresa, a configuração corporativa substituirá todas as configurações do SAML existentes no nível da organização. {% data reusables.saml.switching-from-org-to-enterprise %} Para obter mais informações, consulte "[Alterando sua configuração do SAML de uma organização para uma conta corporativa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".
- Ao aplicar o SAML SSO para uma organização, {% data variables.product.company_short %} removerá todos os integrantes da organização que não tenham efetuado a autenticação com sucesso com seu IdP do SAML. Ao exigir o SAML SSO para a sua empresa, {% data variables.product.company_short %} não irá remover os integrantes da empresa que não tenham efetuado a autenticação com sucesso com o IdP do SAML. Na próxima vez que um integrante acessar os recursos da empresa, ele deverá efetuar a autenticação com o seu IdP do SAML.

{% endnote %}

Para obter informações mais detalhadas sobre como habilitar o SAML usando o Okta, consulte "[Configurar o logon único SAML para a sua conta corporativa usando Okta](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)".

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

{% elsif ghae %}

## Habilitar o SAML SSO

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Os seguintes IdPs fornecem documentação sobre a configuração de do SAML SSO para {% data variables.product.product_name %}. Se seu IdP não estiver listado, entre em contato com seu IdP para solicitar suporte para {% data variables.product.product_name %}.

 | IdP         | Mais informações                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
 |:----------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | Azure AD    | [Tutorial: integração do logon único (SSO) do Azure Active Directory com {% data variables.product.prodname_ghe_managed %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) na documentação da Microsoft. Para configurar o Azure AD para {% data variables.product.prodname_ghe_managed %}, consulte "[Configurando a autenticação e provisionamento para sua empresa usando o Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)". |
 | Okta (Beta) | Para configurar o Okta para {% data variables.product.prodname_ghe_managed %}, consulte "[Configurando a autenticação e provisionamento para sua empresa usando o Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)".                                                                                                                                                                                                                                                         |

Durante a inicialização para {% data variables.product.product_name %}, você deve configurar {% data variables.product.product_name %} como um Provedor de Serviço do SAML (SP) no seu IdP. Você deve inserir vários valores únicos no seu IdP para configurar {% data variables.product.product_name %} como um SP válido.

| Valor                                                  | Outros nomes    | Descrição                                                                          | Exemplo                   |
|:------------------------------------------------------ |:--------------- |:---------------------------------------------------------------------------------- |:------------------------- |
| ID da Entidade do SP                                   | URL do SP       | Sua URL de nível superior para {% data variables.product.prodname_ghe_managed %} | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em></code> |
| URL do Serviço do Consumidor de Declaração (ACS) do SP | URL de resposta | URL em que o IdP envia respostas do SAML                                           | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/saml/consume</code> |
| URL de logon único (SSO) do SP                         |                 | URL em que o IdP começa com SSO                                                    | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/sso</code> |

## Editar a configuração SAML SSO

Se os detalhes para o seu IdP forem alterados, você deverá editar a configuração SAML SSO para o {% data variables.product.product_location %}. Por exemplo, se o certificado de seu IdP expirar, você poderá editar o valor para o certificado público.

{% ifversion ghae %}

{% note %}

**Observação**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Em "logon único SAML", digite os novos detalhes para o seu IdP. ![Os campos de entrada de texto com detalhes de IdP para configuração SAML SSO para uma empresa](/assets/images/help/saml/ae-edit-idp-details.png)
1. Opcionalmente, clique em {% octicon "pencil" aria-label="The edit icon" %} para configurar uma nova assinatura ou método de resumo. ![Ícone de editar para alterar a assinatura e o método de resumo](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest.png)

    - Use os menus suspensos e escolha a nova assinatura ou o método de resumo. ![Menus suspensos para escolher uma nova assinatura ou método de resumo](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest-drop-down-menus.png)
1. Para garantir que a informação inserida está correta, clique em **Testar configuração de SAML**. ![Botão "Testar configuração do SAML"](/assets/images/help/saml/ae-edit-idp-details-test-saml-configuration.png)
1. Clique em **Salvar**. ![Botão "Salvar" para configuração do SAML SSO](/assets/images/help/saml/ae-edit-idp-details-save.png)
1. Opcionalmente, para provisionar e desprovisionar contas de usuário automaticamente para {% data variables.product.product_location %}, reconfigure o provisionamento de usuário com SCIM. Para obter mais informações, consulte "[Configurar provisionamento do usuário para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

{% endif %}

{% ifversion ghae %}

## Desabilitar SAML SSO

{% warning %}

**Aviso**: se você desabilitar o SAML SSO para {% data variables.product.product_location %}, os usuários sem sessões SAML SSO existentes não poderão entrar em {% data variables.product.product_location %}. As sessões SAML SSO em {% data variables.product.product_location %} terminam após 24 horas.

{% endwarning %}

{% note %}

**Observação**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Em "Logon único SAML", selecione **Habilitar autenticação do SAML**. ![Caixa de seleção para "Habilitar autenticação do SAML"](/assets/images/help/saml/ae-saml-disabled.png)
1. Para desabilitar o SAML SSO e exigir o login com a conta de usuário integrada que você criou durante a inicialização, clique em **Salvar**. ![Botão "Salvar" para configuração do SAML SSO](/assets/images/help/saml/ae-saml-disabled-save.png)

{% endif %}

{% endif %}
