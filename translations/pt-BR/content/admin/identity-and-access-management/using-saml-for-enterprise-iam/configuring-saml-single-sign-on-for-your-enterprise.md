---
title: Configurar o logon único SAML para sua empresa
shortTitle: Configure SAML SSO
intro: 'Você pode controlar e proteger o acesso a {% ifversion ghec %}recursos, como repositórios, problemas e solicitações de pull nas organizações da empresa{% elsif ghes %}{% data variables.location.product_location %}{% elsif ghae %}sua empresa no {% data variables.product.prodname_ghe_managed %}{% endif %} com a {% ifversion ghec %}imposição{% elsif ghes or ghae %}configuração{% endif %} do SSO (logon único) do SAML por meio do IdP (provedor de identidade).'
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
ms.openlocfilehash: 804ba3b262aae15b862e1a14694b82339c8d34a4
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183953'
---
{% data reusables.enterprise-accounts.emu-saml-note %}

## Sobre o SAML SSO

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} 

{% data reusables.saml.saml-accounts %}

Para obter mais informações, confira "[Sobre o gerenciamento de identidades e acesso com o logon único do SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} Para obter mais informações, confira "[Como ver e gerenciar o acesso do SAML de um usuário à sua conta corporativa](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)".

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.apps.reauthorize-apps-saml %}

{% elsif ghes or ghae %}

O SAML SSO permite que você controle centralmente e proteja o acesso ao {% data variables.location.product_location %} a partir do seu IdP SAML. Quando um usuário não autenticado visitar {% data variables.location.product_location %} em um navegador, {% data variables.product.product_name %} redirecionará o usuário para seu IdP do SAML para efetuar a autenticação. Depois que o usuário efetua a autenticação com sucesso com uma conta no IdP, o usuário do IdP redireciona o usuário de volta para {% data variables.location.product_location %}. {% data variables.product.product_name %} valida a resposta do seu IdP e, em seguida, concede acesso ao usuário.

Depois que um usuário efetua a autenticação com sucesso no IdP, a sessão do SAML do usuário para {% data variables.location.product_location %} fica ativa no navegador por 24 horas. Depois de 24 horas, o usuário deve efetuar a autenticação novamente com o seu IdP.

{% data reusables.saml.saml-ghes-account-revocation %}

{% ifversion ghae %}

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} Para obter mais informações, confira "[Como configurar o provisionamento de usuário para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

{% endif %}

{% endif %}

## Provedores de identidade compatíveis

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghec %}

## Considerações de nome de usuário no SAML

{% ifversion ghec %} Se você usar {% data variables.product.prodname_emus %}, {% endif %}{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Para obter mais informações, confira "[Considerações de nome de usuário para autenticação externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

## Aplicar o logon único SAML para organizações na sua conta corporativa

Ao aplicar o logon único SAML SSO para sua empresa, a configuração corporativa substituirá todas as configurações do SAML existentes no nível da organização. {% data reusables.saml.switching-from-org-to-enterprise %} Para obter mais informações, confira "[Como alternar a configuração do SAML de uma organização para uma conta corporativa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".

Ao aplicar o SAML SSO para uma organização, {% data variables.product.company_short %} removerá todos os integrantes da organização que não tenham efetuado a autenticação com sucesso com seu IdP do SAML. Ao exigir o SAML SSO para a sua empresa, {% data variables.product.company_short %} não irá remover os integrantes da empresa que não tenham efetuado a autenticação com sucesso com o IdP do SAML. Na próxima vez que um integrante acessar os recursos da empresa, ele deverá efetuar a autenticação com o seu IdP do SAML.

Para obter informações mais detalhadas sobre como habilitar o SAML usando o Okta, confira "[Como configurar o logon único do SAML para sua conta corporativa usando o Okta](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Em "Logon único do SAML", selecione **Exigir autenticação SAML**.
  ![Caixa de seleção para habilitar o SSO do SAML](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. No campo **URL de Logon**, digite o ponto de extremidade HTTPS do IdP para solicitações de logon único. Esse valor está disponível na configuração do IdP.
![Campo referente à URL para a qual os membros serão encaminhados após a entrada](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Opcionalmente, no campo **Emissor**, digite a URL do emissor do SAML para verificar a autenticidade das mensagens enviadas.
![Campo referente ao nome do emissor do SAML](/assets/images/help/saml/saml_issuer.png)
8. Em **Certificado Público**, cole um certificado para verificar as respostas do SAML.
![Campo referente ao certificado público do provedor de identidade](/assets/images/help/saml/saml_public_certificate.png)
9. Para verificar a integridade das solicitações do emissor do SAML, clique em {% octicon "pencil" aria-label="The edit icon" %}. Em seguida, no menu suspenso "Método de assinatura" e "Método de resumo", escolha o algoritmo de hashing usado pelo seu emissor do SAML.
![Menus suspensos dos algoritmos de hash Método de Assinatura e Método de resumo usados pelo emissor do SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Antes de habilitar o SSO do SAML para sua empresa, clique em **Testar configuração do SAML** para garantir que as informações que você inseriu estão corretas. ![Botão usado para testar a configuração do SAML antes da imposição](/assets/images/help/saml/saml_test.png)
11. Clique em **Salvar**.
{% data reusables.enterprise-accounts.download-recovery-codes %}

{% elsif ghes %}

## Configurando o SAML SSO

Você pode habilitar ou desabilitar a autenticação do SAML para {% data variables.location.product_location %} ou você pode editar uma configuração existente. Você pode ver e editar as configurações de autenticação do {% data variables.product.product_name %} no console de gerenciamento. Para obter mais informações, confira "[Como acessar o console de gerenciamento](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

{% note %}

**Observação**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
1. Selecione **SAML**.
   
   ![Captura de tela da opção para habilitar a autenticação SAML no console de gerenciamento](/assets/images/enterprise/management-console/auth-select-saml.png)
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Captura de tela da opção para habilitar a autenticação integrada fora do IdP do SAML](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
1. Opcionalmente, para habilitar o SSO de resposta não solicitado, selecione **SSO iniciado pelo IdP**. Por padrão, o {% data variables.product.prodname_ghe_server %} responderá a uma solicitação iniciada pelo IdP (provedor de identidade) não solicitada com uma `AuthnRequest`.

   ![Captura de tela da opção para habilitar resposta não solicitada iniciada pelo IdP](/assets/images/enterprise/management-console/saml-idp-sso.png)

   {% tip %}

   **Observação**: recomendamos manter esse valor **desmarcado**. Você **só** deverá habilitar esse recurso na rara ocasião em que a implementação do SAML não der suporte ao SSO iniciado pelo provedor de serviços e quando recomendado pelo {% data variables.contact.enterprise_support %}.

   {% endtip %}

1. Selecione **Desabilitar rebaixamento/promoção do administrador** se **não** quiser que o provedor do SAML determine direitos de administrador para os usuários na {% data variables.location.product_location %}.

   ![Captura de tela da opção para habilitar a opção para respeitar o atributo do "administrador" do IdP a fim de habilitar ou desabilitar direitos administrativos](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png) {%- ifversion ghes > 3.3 %}
1. Opcionalmente, para permitir que a {% data variables.location.product_location %} receba declarações criptografadas do IdP do SAML, selecione **Exigir declarações criptografadas**. Você deve garantir que seu IdP é compatível com declarações e que a criptografia e os métodos de transporte principais no console de gerenciamento correspondem aos valores configurados no seu IdP. Você também deve fornecer o certificado público de {% data variables.location.product_location %} ao IdP. Para obter mais informações, confira "[Como habilitar declarações criptografadas](/admin/identity-and-access-management/using-saml-for-enterprise-iam/enabling-encrypted-assertions)".

   ![Captura de tela da caixa de seleção "Habilitar declarações criptografadas" na seção "Autenticação" do console de gerenciamento](/assets/images/help/saml/management-console-enable-encrypted-assertions.png) {%- endif %}
1. No campo **URL de logon**, digite o ponto de extremidade HTTP ou HTTPS do IdP para solicitações de logon único. Esse valor é fornecido pela configuração do IdP. Se o host só estiver disponível somente na rede interna, talvez seja necessário [configurar a {% data variables.location.product_location %} para usar servidores de nomes internos](/enterprise/admin/guides/installation/configuring-dns-nameservers/).

   ![Captura de tela do campo de texto para a URL de acesso único](/assets/images/enterprise/management-console/saml-single-sign-url.png)
1. Opcionalmente, no campo **Emissor**, digite o nome do emissor do SAML. Fazer isso verifica a autenticidade das mensagens enviadas para {% data variables.location.product_location %}.

   ![Screenshot do campo de texto para a URL do emissor do SAML](/assets/images/enterprise/management-console/saml-issuer.png)
1. Nos menus suspensos **Método de Assinatura** e **Método de Hash**, escolha o algoritmo de hash usado pelo emissor do SAML para verificar a integridade das solicitações da {% data variables.location.product_location %}. Especifique o formato com o menu suspenso **Formato de Identificador de Nome**.

   ![Captura de tela dos menus suspensos para selecionar a assinatura e o método de resumo](/assets/images/enterprise/management-console/saml-method.png)
1. Em **Certificado de verificação**, clique em **Escolher Arquivo** e escolha um certificado para validar as respostas do SAML do IdP.

   ![Captura de tela do botão para fazer o upload do certificado de validação do IdP](/assets/images/enterprise/management-console/saml-verification-cert.png)
1. Modifique os nomes do atributo SAML para corresponder ao IdP, se necessário, ou aceite os nomes padrão.

   ![Captura de tela dos campos para inserir atributos adicionais do SAML](/assets/images/enterprise/management-console/saml-attributes.png)

{% elsif ghae %}

## Habilitar o SAML SSO

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Os seguintes IdPs fornecem documentação sobre a configuração de do SAML SSO para {% data variables.product.product_name %}. Se seu IdP não estiver listado, entre em contato com seu IdP para solicitar suporte para {% data variables.product.product_name %}.

 | IdP | Mais informações |
 | :- | :- |
 | Azure AD | "[Configurar a autenticação e o provisionamento para sua empresa usando o Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)" |
| Okta | "[Configurar autenticação e provisionamento para sua empresa usando o Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)" |

Durante a inicialização do {% data variables.product.product_name %}, você deve configurar o {% data variables.product.product_name %} como um SP (provedor de serviço) do SAML no seu IdP. Você deve inserir vários valores únicos no seu IdP para configurar {% data variables.product.product_name %} como um SP válido. Para obter mais informações, confira "[Referência de configuração do SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-metadata)".

## Editar a configuração SAML SSO

Se os detalhes do IdP forem alterados, você deverá editar a configuração SAML SSO para o {% data variables.location.product_location %}. Por exemplo, se o certificado de seu IdP expirar, você poderá editar o valor para o certificado público.

{% ifversion ghae %}

{% note %}

**Observação**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %} 

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Em "logon único SAML", digite os novos detalhes para o seu IdP.
  ![Campos de entrada de texto com detalhes do IdP para configuração do SSO do SAML para uma empresa](/assets/images/help/saml/ae-edit-idp-details.png)
1. Opcionalmente, clique em {% octicon "pencil" aria-label="The edit icon" %} para configurar uma nova assinatura ou método de resumo.
  ![Ícone de edição para alterar a assinatura e o método de resumo](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest.png)

    - Use os menus suspensos e escolha a nova assinatura ou o método de resumo.
      ![Menus suspensos para escolha de uma nova assinatura ou um método de resumo](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest-drop-down-menus.png)
1. Para garantir que as informações inseridas estão corretas, clique em **Testar configuração do SAML**.
  ![Botão "Testar configuração do SAML"](/assets/images/help/saml/ae-edit-idp-details-test-saml-configuration.png)
1. Clique em **Salvar**.
    ![Botão "Salvar" da configuração de SSO do SAML](/assets/images/help/saml/ae-edit-idp-details-save.png)
1. Opcionalmente, para provisionar e desprovisionar contas de usuário automaticamente para {% data variables.location.product_location %}, reconfigure o provisionamento de usuário com SCIM. Para obter mais informações, confira "[Como configurar o provisionamento de usuário para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

{% endif %}

{% ifversion ghae %}

## Desabilitar SAML SSO

{% warning %}

**Aviso**: se você desabilitar o SSO do SAML do {% data variables.location.product_location %}, os usuários sem sessões SSO do SAML existentes não poderão entrar no {% data variables.location.product_location %}. As sessões SAML SSO em {% data variables.location.product_location %} terminam após 24 horas.

{% endwarning %}

{% note %}

**Observação**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Em "Logon único do SAML", desmarque **Habilitar autenticação SAML**.
  ![Caixa de seleção para "Habilitar autenticação SAML"](/assets/images/help/saml/ae-saml-disabled.png)
1. Para desabilitar o SSO do SAML e exigir o logon com a conta de usuário interna que você criou durante a inicialização, clique em **Salvar**.
    ![Botão "Salvar" da configuração de SSO do SAML](/assets/images/help/saml/ae-saml-disabled-save.png)

{% endif %}

{% endif %}

{% ifversion ghec or ghes %}

## Leitura adicional

{%- ifversion ghec %}
- "[Gerenciar o logon único do SAML em sua organização](/organizations/managing-saml-single-sign-on-for-your-organization)" {%- endif %} {%- ifversion ghes %}
- "[Promover ou rebaixar um administrador do site](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator)" {%- endif %}

{% endif %}
