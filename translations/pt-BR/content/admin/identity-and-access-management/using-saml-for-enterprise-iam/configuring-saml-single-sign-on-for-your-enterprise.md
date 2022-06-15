---
title: Configurar o logon único SAML para sua empresa
shortTitle: Configurar o SAML SSO
intro: 'Você pode controlar e proteger o acesso a recursos {% ifversion ghec %}, como repositórios, problemas e pull requests dentro das organizações da sua empresa{% elsif ghes %}{% data variables.product.product_location %}{% elsif ghae %}sua empresa em {% data variables.product.prodname_ghe_managed %}{% endif %}, {% ifversion ghec %}{% elsif ghes or ghae %}configurando{% endif %} o logon único SAML (SSO) através do seu provedor de identidade (IdP).'
permissions: '{% ifversion ghes %}Site administrators{% elsif ghec or ghae %}Enterprise owners{% endif %} can configure SAML SSO for {% ifversion ghec or ghae %}an enterprise on {% data variables.product.product_name %}{% elsif ghes %}a {% data variables.product.product_name %} instance{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
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
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## Sobre o SAML SSO

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} Para obter mais informações, consulte "[Sobre identidade e gerenciamento de acesso com o logon único SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} Para obter mais informações, consulte "[Visualizar e gerenciar o acesso de SAML de um usuário à sua conta corporativa](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)".

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.scim.enterprise-account-scim %}

{% elsif ghes or ghae %}

O SAML SSO permite que você controle centralmente e proteja o acesso ao {% data variables.product.product_location %} a partir do seu IdP SAML. Quando um usuário não autenticado visita {% data variables.product.product_location %} em um navegador, {% data variables.product.product_name %} redirecionará o usuário para seu IdP do SAML para efetuar a autenticação. Depois que o usuário efetua a autenticação com sucesso com uma conta no IdP, o usuário do IdP redireciona o usuário de volta para {% data variables.product.product_location %}. {% data variables.product.product_name %} valida a resposta do seu IdP e, em seguida, concede acesso ao usuário.

Depois que um usuário efetua a autenticação com sucesso no seu IdP, a sessão do SAML do usuário para {% data variables.product.product_location %} fica ativa no navegador por 24 horas. Depois de 24 horas, o usuário deve efetuar a autenticação novamente com o seu IdP.

{% data reusables.saml.saml-ghes-account-revocation %}

{% ifversion ghae %}

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} Para obter mais informações, consulte "[Configurar provisionamento do usuário para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

{% endif %}

{% endif %}

## Provedores de identidade compatíveis

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghec %}

## Considerações de nome de usuário no SAML

{% ifversion ghec %}Se você usar {% data variables.product.prodname_emus %}, {% endif %}{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Para obter mais informações, consulte "[Considerações de nome de usuário para autenticação externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

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
{% data reusables.enterprise-accounts.download-recovery-codes %}

{% elsif ghes %}

## Configurando o SAML SSO

Você pode habilitar ou desabilitar a autenticação do SAML para {% data variables.product.product_location %} ou você pode editar uma configuração existente. Você pode ver e editar as configurações de autenticação para {% data variables.product.product_name %} no console de gerenciamento. Para obter mais informações, consulte "[Acessando o console de gerenciamento](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

{% note %}

**Observação**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. Selecione **SAML**.

   ![Captura de tela da opção para habilitar a autenticação SAML no console de gerenciamento](/assets/images/enterprise/management-console/auth-select-saml.png)
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Captura de tela da opção para habilitar a autenticação integrada fora do IdP do SAML](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
1. Para habilitar SSO de resposta não solicitada, selecione **IdP initiated SSO** (SSO iniciado pelo IdP). Por padrão, o {% data variables.product.prodname_ghe_server %} responderá a uma solicitação iniciada pelo Provedor de identidade (IdP) não solicitado com `AuthnRequest`.

   ![Captura de tela da opção para habilitar resposta não solicitada iniciada pelo IdP](/assets/images/enterprise/management-console/saml-idp-sso.png)

   {% tip %}

   **Observação**: recomendamos manter este valor **não selecionado**. Você deve habilitar esse recurso **somente ** na rara instância em que sua implementação SAML não oferecer suporte ao SSO iniciado pelo provedor de serviços e quando recomendado pelo {% data variables.contact.enterprise_support %}.

   {% endtip %}

1. Selecione **Disable administrator demotion/promotion** (Desabilitar rebaixamento/promoção do administrador) se você **não** quiser que o provedor SAML determine direitos de administrador para usuários no {% data variables.product.product_location %}.

   ![Opção da captura de tela para habilitar a opção de respeitar o atributo do "administrador" do IdP para habilitar ou desabilitar as permissões administrativas](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png)
{%- ifversion ghes > 3.3 %}
1. Opcionalmente, para permitir que {% data variables.product.product_location %} receba asserções criptografadas do IdP do seu SAML, selecione **Exigir declarações criptografadas**. Você deve garantir que seu IdP é compatível com declarações e que a criptografia e os métodos de transporte principais no console de gerenciamento correspondem aos valores configurados no seu IdP. Você também deve fornecer o certificado público de {% data variables.product.product_location %} ao seu IdP. Para obter mais informações, consulte "[Habilitando declarações criptografadas](/admin/identity-and-access-management/using-saml-for-enterprise-iam/enabling-encrypted-assertions)".

   ![Captura de tela da caixa de seleção "Habilitar declarações criptografadas" na seção de gerenciamento do console "Autenticação"](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
{%- endif %}
1. No campo **URL de logon único**, digite o ponto de extremidade de HTTP ou HTTPS no seu IdP para solicitações de logon único. Esse valor é fornecido pela configuração do IdP. Se o host estiver disponível apenas na sua rede interna, você pode precisar que [configure {% data variables.product.product_location %} para usar servidores de nomes internos](/enterprise/admin/guides/installation/configuring-dns-nameservers/).

   ![Captura de tela do campo de texto para a URL de acesso único](/assets/images/enterprise/management-console/saml-single-sign-url.png)
1. Como alternativa, no campo **emissor**, digite o nome do emissor do SAML. Fazer isso verifica a autenticidade das mensagens enviadas para {% data variables.product.product_location %}.

   ![Screenshot do campo de texto para a URL do emissor do SAML](/assets/images/enterprise/management-console/saml-issuer.png)
1. Nos menus suspensos **Método de assinatura** e **Método de compilação**, escolha o algoritmo de hash usado pelo emissor SAML para verificar a integridade das solicitações do {% data variables.product.product_location %}. Especifique o formato com menu suspenso **Formato do Identificador do Nome**.

   ![Captura de tela dos menus suspensos para selecionar a assinatura e o método de resumo](/assets/images/enterprise/management-console/saml-method.png)
1. Em **Verification certificate** (Certificado de verificação), clique em **Choose File** (Escolher arquivo) e escolha um certificado para validar as respostas SAML do IdP.

   ![Captura de tela do botão para fazer o upload do certificado de validação do IdP](/assets/images/enterprise/management-console/saml-verification-cert.png)
1. Modifique os nomes do atributo SAML para corresponder ao IdP, se necessário, ou aceite os nomes padrão.

   ![Captura de tela dos campos para inserir atributos adicionais do SAML](/assets/images/enterprise/management-console/saml-attributes.png)

{% elsif ghae %}

## Habilitar o SAML SSO

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Os seguintes IdPs fornecem documentação sobre a configuração de do SAML SSO para {% data variables.product.product_name %}. Se seu IdP não estiver listado, entre em contato com seu IdP para solicitar suporte para {% data variables.product.product_name %}.

 | IdP      | Mais informações                                                                                                                                                                                                                                                   |
 |:-------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 | Azure AD | "[Configurando autenticação e provisionamento para a sua empresa usando o Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)" |
 | Okta     | "[Configurando a autenticação e o provisionamento para sua empresa usando o Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)"       |

Durante a inicialização de {% data variables.product.product_name %}, você deve configurar o {% data variables.product.product_name %} como um provedor de serviço SAML (SP) no seu IdP. Você deve inserir vários valores únicos no seu IdP para configurar {% data variables.product.product_name %} como um SP válido. Para obter mais informações, consulte "[Referência de configuração do SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-metadata)".

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

{% ifversion ghec or ghes %}

## Leia mais

{%- ifversion ghec %}
- "[Gerenciando o logon único SAML para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization)"
{%- endif %}
{%- ifversion ghes %}
- "[Promovendo ou rebaixando um administrador do site](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator)"
{%- endif %}

{% endif %}
