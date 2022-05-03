---
title: Configurar o logon único SAML para usuários gerenciados pela empresa
shortTitle: SAML para usuários gerenciados
intro: 'Pode gerenciar automaticamente o acesso à sua conta corporativa em {% data variables.product.prodname_dotcom %} configurando o logon único SAML (SSO) da Linguagem de Markup de Declaração de Segurança.'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users
versions:
  ghec: '*'
type: tutorial
topics:
  - Authentication
  - Enterprise
  - SSO
---

## Sobre o logon único SAML para {% data variables.product.prodname_emus %}

Com {% data variables.product.prodname_emus %}, a sua empresa usa o SAML SSO para autenticar todos os integrantes. Ao invés de efetuar o login em {% data variables.product.prodname_dotcom %} com um nome de usuário e senha {% data variables.product.prodname_dotcom %}, os integrantes da sua empresa efetuarão o login por meio do seu IdP.

{% data variables.product.prodname_emus %} é compatível com os seguintes IdPs:

{% data reusables.enterprise-accounts.emu-supported-idps %}

Depois de configurar o SAM SSO, recomendamos armazenar seus códigos de recuperação para que você possa recuperar o acesso à sua empresa no caso de o seu provedor de identidade não estar disponível.

{% note %}

**Observação:** Quando SAML SSO está habilitado, a única configuração que você pode atualizar em {% data variables.product.prodname_dotcom %} para a sua configuração SAML existente é o certificado SAML. Se você precisar atualizar o URL de login ou o emissor, primeiro desabilite o SAML SSO e, em seguida, redefina o SAML SSO com as novas configurações.

{% endnote %}

## Configurando o logon único da SAML para {% data variables.product.prodname_emus %}

Para configurar o SAML SSO para o seu {% data variables.product.prodname_emu_enterprise %}, configure um aplicativo no seu IdP e, em seguida, configure a sua empresa no GitHub.com. Depois de configurar o SAML SSO, você poderá configurar o provisionamento de usuários.

Para instalar e configurar o aplicativo {% data variables.product.prodname_emu_idp_application %} no seu IdP, você deve ter acesso a de inquilino e acesso administrativo em um IdP compatível.

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

1. [Configurando seu provedor de identidade](#configuring-your-identity-provider)
2. [Configurar a sua empresa](#configuring-your-enterprise)
3. [Habilitando o provisionamento](#enabling-provisioning)

### Configurando seu provedor de identidade

Para configurar seu IdP, siga as instruções fornecidas para configurar o aplicativo de {% data variables.product.prodname_emu_idp_application %} no seu IdP.

1. Para instalar o aplicativo {% data variables.product.prodname_emu_idp_application %}, clique no link para acessar o seu IdP abaixo:

     - [Aplicativo de {% data variables.product.prodname_emu_idp_application %} Diretório Ativo do Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/aad.githubenterprisemanageduser?tab=Overview)
     - [Alicativo de {% data variables.product.prodname_emu_idp_application %} no Okta](https://www.okta.com/integrations/github-enterprise-managed-user)

1. Para configurar o aplicativo de {% data variables.product.prodname_emu_idp_application %} e seu IdP, clique no link abaixo e siga as instruções fornecidas pelo seu IdP:

     - [Tutorial do Diretório Ativo do Azure para {% data variables.product.prodname_emus %}](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-tutorial)
     - [Documentação do Okta para {% data variables.product.prodname_emus %}](https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-GitHub-Enterprise-Managed-User.html)

1. Dessa forma, você pode testar e configurar a sua empresa, atribuir a si mesmo ou o usuário que irá configurar o SAML SSO em {% data variables.product.prodname_dotcom %} para a o aplicativo de {% data variables.product.prodname_emu_idp_application %} no seu IdP.

1. Para permitir que você continue configurando sua empresa em {% data variables.product.prodname_dotcom %}, localize e observe as informações a seguir do aplicativo que você instalou no seu IdP:

    | Valor                                           | Outros nomes        | Descrição                                                                    |
    |:----------------------------------------------- |:------------------- |:---------------------------------------------------------------------------- |
    | IdP Sign-On URL                                 | Login URL, IdP URL  | URL do aplicativo no seu IdP                                                 |
    | IdP Identifier URL                              | Emissor             | Identificador de o IdP para prestadores de serviço para autenticação do SAML |
    | Certificado de assinatura, codificado em Base64 | Certificado público | Certificado público que o IdP usa para assinar solicitações de autenticação  |

### Configurar a sua empresa

Após instalar e configurar o aplicativo de {% data variables.product.prodname_emu_idp_application %} no seu provedor de identidade, você poderá configurar a sua empresa.

1. Efetue o login em {% data variables.product.prodname_dotcom_the_website %} como usuário de configuração da sua nova empresa com o nome de usuário **@<em>SHORT-CODE</em>_admin**.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}

1. Em "Logon único SAML", selecione **Exigir autenticação do SAML**. ![Caixa de seleção para habilitar SAML SSO](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)

1. Em **URL de Login**, digite o ponto de extremidade HTTPS do seu IdP para solicitações de logon único que você tenha notado durante a configuração do seu IdP. ![Campo referente à URL para a qual os integrantes serão encaminhados ao entrarem](/assets/images/help/saml/saml_sign_on_url_business.png)

1. Em **Emissor**, digite a URL do emissor do SAML que você notou durante a configuração do seu IdP para verificar a autenticidade das mensagens enviadas. ![Campo referente ao nome do emissor de SAML](/assets/images/help/saml/saml_issuer.png)

1. Em **de Certificado Público**, cole o certificado que você anotou durante a configuração do seu IdP, para verificar as respostas do SAML. ![Campo referente ao certificado público do seu provedor de identidade](/assets/images/help/saml/saml_public_certificate.png)

1. Para verificar a integridade das solicitações do emissor de SAML, clique em {% octicon "pencil" aria-label="The edit icon" %}. Em seguida, no menu suspenso "Método de assinatura" e "Método de resumo", escolha o algoritmo de hashing usado pelo seu emissor do SAML. ![Menus suspensos Signature Method (Método de assinatura) e Digest Method (Método de compilação) para os algoritmos de hash usados pelo emissor de SAML](/assets/images/help/saml/saml_hashing_method.png)

1. Antes de habilitar o SAML SSO para a sua empresa, para garantir que a informação inserida está correta, clique em **Testar configuração do SAML**. ![Botão para testar a configuração de SAML antes da aplicação](/assets/images/help/saml/saml_test.png)

1. Clique em **Salvar**.

    {% note %}

    **Observação:** Quando você exige o SAML SSO para a sua empresa, o usuário de configuração não terá mais acesso à empresa, mas permanecerá conectado ao GitHub. Apenas {% data variables.product.prodname_managed_users %} provisionados pelo seu IdP terão acesso à empresa.

    {% endnote %}

{% data reusables.enterprise-accounts.download-recovery-codes %}


### Habilitando o provisionamento

Depois que você habilitar o SAML SSO, habilite o provisionamento. Para obter mais informações, consulte "[Configurando o provisionamento de SCIM para usuários gerenciados pela empresa](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users)".

