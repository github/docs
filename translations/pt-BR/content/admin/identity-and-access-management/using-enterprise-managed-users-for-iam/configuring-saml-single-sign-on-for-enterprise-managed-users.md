---
title: Configurar o logon único SAML para usuários gerenciados pela empresa
shortTitle: SAML for managed users
intro: 'Pode gerenciar automaticamente o acesso à sua conta corporativa em {% data variables.product.prodname_dotcom %} configurando o logon único SAML (SSO) da Linguagem de Markup de Declaração de Segurança.'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users
versions:
  ghec: '*'
type: tutorial
topics:
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: d83c6ea74ae6a27fc5f91ebdc5dcae83e0c22eb2
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180050'
---
## Sobre o logon único SAML para {% data variables.product.prodname_emus %}

Com {% data variables.product.prodname_emus %}, sua empresa usa o provedor de identidade corporativo para autenticar todos os membros. Ao invés de efetuar o login em {% data variables.product.prodname_dotcom %} com um nome de usuário e senha {% data variables.product.prodname_dotcom %}, os integrantes da sua empresa efetuarão o login por meio do seu IdP.

{% data variables.product.prodname_emus %} é compatível com os seguintes IdPs:

{% data reusables.enterprise-accounts.emu-supported-idps %}

Depois de configurar o SAM SSO, recomendamos armazenar seus códigos de recuperação para que você possa recuperar o acesso à sua empresa no caso de o seu provedor de identidade não estar disponível.


{% data reusables.enterprise_user_management.SAML-to-OIDC-migration-for-EMU %}

{% note %}

**Observação:** quando o SSO do SAML está habilitado, a única configuração que você pode atualizar no {% data variables.product.prodname_dotcom %} para a configuração do SAML existente é o certificado SAML. Se você precisar atualizar o URL de login ou o emissor, primeiro desabilite o SAML SSO e, em seguida, redefina o SAML SSO com as novas configurações.

{% endnote %}

## Configurando o logon único da SAML para {% data variables.product.prodname_emus %}

Para configurar o SSO do SAML para o seu {% data variables.enterprise.prodname_emu_enterprise %}, você deve configurar um aplicativo no seu IdP, depois configurar sua empresa no GitHub.com. Depois de configurar o SAML SSO, você poderá configurar o provisionamento de usuários. 

Para instalar e configurar o aplicativo {% data variables.product.prodname_emu_idp_application %} no seu IdP, você deve ter acesso a de inquilino e acesso administrativo em um IdP compatível.

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

1. [Como configurar seu provedor de identidade](#configuring-your-identity-provider)
2. [Configurar a sua empresa](#configuring-your-enterprise)
3. [Habilitando provisionamento](#enabling-provisioning)

### Configurando seu provedor de identidade

Para configurar seu IdP, siga as instruções fornecidas para configurar o aplicativo de {% data variables.product.prodname_emu_idp_application %} no seu IdP.

1. Para instalar o aplicativo {% data variables.product.prodname_emu_idp_application %}, clique no link para acessar o seu IdP abaixo:

     - [Aplicativo do {% data variables.product.prodname_emu_idp_application %} no Azure Active Directory](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/aad.githubenterprisemanageduser?tab=Overview)
     - [Aplicativo do {% data variables.product.prodname_emu_idp_application %} no Okta](https://www.okta.com/integrations/github-enterprise-managed-user)

1. Para configurar o aplicativo de {% data variables.product.prodname_emu_idp_application %} e seu IdP, clique no link abaixo e siga as instruções fornecidas pelo seu IdP:

     - [Tutorial do Azure Active Directory sobre o {% data variables.product.prodname_emus %}](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-tutorial)
     - [Documentação do Okta sobre o {% data variables.product.prodname_emus %}](https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-GitHub-Enterprise-Managed-User.html)

1. Dessa forma, você pode testar e configurar a sua empresa, atribuir a si mesmo ou o usuário que irá configurar o SAML SSO em {% data variables.product.prodname_dotcom %} para a o aplicativo de {% data variables.product.prodname_emu_idp_application %} no seu IdP.

1. Para permitir que você continue configurando sua empresa em {% data variables.product.prodname_dotcom %}, localize e observe as informações a seguir do aplicativo que você instalou no seu IdP:

    | Valor | Outros nomes | Descrição |
    | :- | :- | :- |
    | IdP Sign-On URL | Login URL, IdP URL | URL do aplicativo no seu IdP |
    | IdP Identifier URL | Emissor | Identificador de o IdP para prestadores de serviço para autenticação do SAML |
    | Certificado de assinatura, codificado em Base64 | Certificado público | Certificado público que o IdP usa para assinar solicitações de autenticação |

### Configurar a sua empresa

Após instalar e configurar o aplicativo de {% data variables.product.prodname_emu_idp_application %} no seu provedor de identidade, você poderá configurar a sua empresa. 

1. Entre no {% data variables.product.prodname_dotcom_the_website %} como o usuário de instalação para sua nova empresa com o nome de usuário **@<em>SHORT-CODE</em>_admin**.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. Em "Logon único do SAML", selecione **Exigir autenticação SAML**.
  ![Caixa de seleção usada para habilitar o SSO do SAML](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)

1. Na **URL de Logon**, digite o ponto de extremidade HTTPS do IdP para solicitações de logon único que você anotou ao configurar o IdP.
![Campo referente à URL para a qual os membros serão encaminhados após a entrada](/assets/images/help/saml/saml_sign_on_url_business.png)

1. No **Emissor**, digite a URL do emissor do SAML que você anotou ao configurar o IdP para verificar a autenticidade das mensagens enviadas.
![Campo referente ao nome do emissor do SAML](/assets/images/help/saml/saml_issuer.png)

1. Em **Certificado Público**, cole o certificado que você anotou ao configurar seu IdP para verificar as respostas SAML.
![Campo referente ao certificado público do provedor de identidade](/assets/images/help/saml/saml_public_certificate.png)

1. Para verificar a integridade das solicitações do emissor do SAML, clique em {% octicon "pencil" aria-label="The edit icon" %}. Em seguida, no menu suspenso "Método de assinatura" e "Método de resumo", escolha o algoritmo de hashing usado pelo seu emissor do SAML.
![Menus suspensos dos algoritmos de hash Método de Assinatura e Método de resumo usados pelo emissor do SAML](/assets/images/help/saml/saml_hashing_method.png)

1. Antes de habilitar o SSO do SAML para sua empresa, a fim de garantir que as informações inseridas estejam corretas, clique em **Testar configuração do SAML**. ![Botão usado para testar a configuração do SAML antes da imposição](/assets/images/help/saml/saml_test.png)

1. Clique em **Salvar**.

    {% note %}

    **Observação:** quando você precisar do SSO do SAML para sua empresa, o usuário de instalação não terá mais acesso à empresa, mas permanecerá conectado ao GitHub. Apenas {% data variables.enterprise.prodname_managed_users %} provisionados pelo seu IdP terão acesso à empresa.

    {% endnote %}

{% data reusables.enterprise-accounts.download-recovery-codes %}


### Habilitando provisionamento

Depois que você habilitar o SAML SSO, habilite o provisionamento. Para obter mais informações, confira "[Como configurar o provisionamento do SCIM para os usuários gerenciados corporativos](//admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)".

