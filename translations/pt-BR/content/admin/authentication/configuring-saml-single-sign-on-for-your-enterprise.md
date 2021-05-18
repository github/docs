---
title: Configurar o logon único SAML para sua empresa
shortTitle: Configurando o SAML SSO
intro: 'Você pode configurar o logon único SAML (SSO) para sua empresa, o que permite que você controle centralmente a autenticação para {% data variables.product.product_location %} usando seu provedor de identidade (IdP).'
product: '{% data reusables.gated-features.saml-sso %}'
permissions: 'Enterprise owners can configure SAML SSO for an enterprise on {% data variables.product.product_name %}.'
versions:
  github-ae: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

### Sobre o SAML SSO

{% if currentVersion == "github-ae@latest" %}

O SAML SSO permite que você controle centralmente e proteja o acesso ao {% data variables.product.product_location %} a partir do seu IdP SAML. Quando um usuário não autenticado visita {% data variables.product.product_location %} em um navegador, {% data variables.product.product_name %} redirecionará o usuário para seu IdP do SAML para efetuar a autenticação. Depois que o usuário efetua a autenticação com sucesso com uma conta no IdP, o usuário do IdP redireciona o usuário de volta para {% data variables.product.product_location %}. {% data variables.product.product_name %} valida a resposta do seu IdP e, em seguida, concede acesso ao usuário.

Depois que um usuário efetua a autenticação com sucesso no seu IdP, a sessão do SAML do usuário para {% data variables.product.product_location %} fica ativa no navegador por 24 horas. Depois de 24 horas, o usuário deve efetuar a autenticação novamente com o seu IdP.

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} Para obter mais informações, consulte "[Configurar provisionamento do usuário para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

{% endif %}

### Provedores de identidade compatíveis

{% data variables.product.product_name %} é compatível com o SAML SSO, com IdPs que implementam o padrão SAML 2.0. Para obter mais informações, consulte a [Wiki do SAML](https://wiki.oasis-open.org/security) no site do OASIS.

{% data variables.product.company_short %} testou o SAML SSO para {% data variables.product.product_name %} com os seguintes IdPs.

{% if currentVersion == "github-ae@latest" %}
- Azure AD
{% endif %}

### Habilitar o SAML SSO

{% if currentVersion == "github-ae@latest" %}

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Os seguintes IdPs fornecem documentação sobre a configuração de do SAML SSO para {% data variables.product.product_name %}. Se seu IdP não estiver listado, entre em contato com seu IdP para solicitar suporte para {% data variables.product.product_name %}.

 | IdP      | Mais informações                                                                                                                                                                                                                           |
 |:-------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 | Azure AD | [Tutorial: integração do logon único (SSO) do Azure Active Directory com {% data variables.product.prodname_ghe_managed %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) na documentação da Microsoft |

Durante a inicialização para {% data variables.product.product_name %}, você deve configurar {% data variables.product.product_name %} como um Provedor de Serviço do SAML (SP) no seu IdP. Você deve inserir vários valores únicos no seu IdP para configurar {% data variables.product.product_name %} como um SP válido.

| Valor                                                  | Outros nomes    | Descrição                                                                          | Exemplo                   |
|:------------------------------------------------------ |:--------------- |:---------------------------------------------------------------------------------- |:------------------------- |
| ID da Entidade do SP                                   | URL do SP       | Sua URL de nível superior para {% data variables.product.prodname_ghe_managed %} | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em></code> |
| URL do Serviço do Consumidor de Declaração (ACS) do SP | URL de resposta | URL em que o IdP envia respostas do SAML                                           | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/saml/consume</code> |
| URL de logon único (SSO) do SP                         |                 | URL em que o IdP começa com SSO                                                    | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/sso</code> |

{% endif %}

### Editar a configuração SAML SSO

Se os detalhes para o seu IdP forem alterados, você deverá editar a configuração SAML SSO para o {% data variables.product.product_location %}. Por exemplo, se o certificado de seu IdP expirar, você poderá editar o valor para o certificado público.

{% if currentVersion == "github-ae@latest" %}

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

### Desabilitar SAML SSO

{% if currentVersion == "github-ae@latest" %}

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
