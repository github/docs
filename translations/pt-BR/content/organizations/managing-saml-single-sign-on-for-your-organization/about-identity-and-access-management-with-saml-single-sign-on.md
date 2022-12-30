---
title: Sobre o gerenciamento de identidades e de acesso com o logon único do SAML
intro: 'Se você gerencia centralmente as identidades e aplicativos dos seus usuários com um provedor de identidade (IdP), você pode configurar o Logon Único (SSO) da Linguagem de Markup de Declaração de Segurança (SAML) para proteger os recursos da sua organização em {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: IAM with SAML SSO
ms.openlocfilehash: 63ed023c1ca5d52ea7b06f5fd485c5e0b34c9750
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120614'
---
{% data reusables.saml.ghec-only %}

## Sobre o SAML SSO

{% data reusables.saml.dotcom-saml-explanation %}

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

Os proprietários da organização podem aplicar o SSO do SAML para uma organização individual ou os proprietários corporativos podem aplicar o SSO do SAML para todas as organizações em uma conta corporativa. Para obter mais informações, confira "[Como configurar o logon único do SAML para sua empresa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

Antes de ativar o SAML SSO para sua organização, é necessário conectar seu IdP à sua organização. Para obter mais informações, confira "[Como conectar seu provedor de identidade à sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)".

Para uma organização, o SAML SSO pode ser desabilitado, habilitado, mas não aplicado, ou habilitado e aplicado. Depois de ativar o SSO SAML para a sua organização e os integrantes da sua organização efetuarem a autenticação com sucesso com o seu IdP, você poderá aplicar a configuração SAML SSO. Para obter mais informações sobre como impor o SSO do SAML para sua organização do {% data variables.product.prodname_dotcom %}, confira "[Como impor o logon único do SAML para sua organização](/articles/enforcing-saml-single-sign-on-for-your-organization)".

Os integrantes devem efetuar a autenticação periodicamente com seu IdP para efetuar a autenticação e obter acesso aos recursos da sua organização. A duração desse período de login é especificado pelo seu IdP e geralmente é de 24 horas. Esse requisito de login periódico limita a duração do acesso e exige que os usuários identifiquem-se novamente para continuar.

Para acessar os recursos protegidos da organização que usam a API e o Git na linha de comando, os integrantes devem autorizar e efetuar a autenticação com um {% data variables.product.pat_generic %} ou chave SSH. Para obter mais informações, confira "[Como autorizar um {% data variables.product.pat_generic %} para uso com o logon único de SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" e "[Como autorizar uma chave SSH para uso com o logon único de SAML](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)".

Na primeira vez que um integrante utiliza o SSO de SAML para acessar sua organização, {% data variables.product.prodname_dotcom %} cria automaticamente um registro que vincula a sua organização, a conta do integrante no {% data variables.location.product_location %} e a conta do integrante no seu IdP. Você pode visualizar e revogar a identidade de SAML vinculada, as sessões ativas e credenciais autorizadas para integrantes da sua empresa ou conta corporativa. Para obter mais informações, confira "[Como ver e gerenciar o acesso do SAML de um membro à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)" e "[Como ver e gerenciar o acesso do SAML à sua conta empresarial](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)".

Se os integrantes estiverem conectados com uma sessão SAML SSO, ao criarem um novo repositório, a visibilidade-padrão desse repositório será privada. Caso contrário, a visibilidade-padrão será pública. Para obter mais informações sobre a visibilidade do repositório, confira "[Sobre os repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

Os integrantes da organização também devem ter uma sessão de SAML ativa para autorizar um {% data variables.product.prodname_oauth_app %}. Você pode optar por não participar deste requisito entrando em contato com {% data variables.contact.contact_support %}. {% data variables.product.product_name %} não recomenda a exclusão deste requisito, o que irá expor sua organização a um maior risco de aquisições de conta e perda potencial de dados.

{% data reusables.saml.saml-single-logout-not-supported %}

## Serviços SAML compatíveis

{% data reusables.saml.saml-supported-idps %}

Alguns IdPs são compatíveis com o o provisionamento de acesso a uma organização {% data variables.product.prodname_dotcom %} via SCIM. Para obter mais informações, confira "[Sobre o SCIM para organizações](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

{% data reusables.scim.enterprise-account-scim %} 

## Adicionar integrantes a uma organização usando SAML SSO

Depois de habilitar o SSO do SAML, há várias maneiras de adicionar membros à organização. Os proprietários da organização podem convidar novos integrantes manualmente no {% data variables.product.product_name %} ou usando a API. Para obter mais informações, confira "[Como convidar usuários para ingressar na sua organização](/articles/inviting-users-to-join-your-organization)" e "[Membros](/rest/reference/orgs#add-or-update-organization-membership)".

Para provisionar novos usuários sem o convite de um proprietário da organização, você pode usar a URL `https://github.com/orgs/ORGANIZATION/sso/sign_up`, substituindo _ORGANIZATION_ pelo nome da sua organização. Por exemplo, é possível configurar o IdP para que qualquer pessoa que tenha acesso possa clicar em um link no painel do IdP para ingressar na sua organização do {% data variables.product.prodname_dotcom %}.

{% note %}

**Observação:** o provisionamento de novos usuários por meio do `https://github.com/orgs/ORGANIZATION/sso/sign_up` só tem suporte quando o SSO de SAML é configurado no nível da organização, não quando o SSO de SAML é configurado no nível da conta corporativa. Para obter mais informações sobre o SSO de SAML para contas corporativas, confira "[Sobre o SAML para IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)".

{% endnote %}

Se o seu IdP é compatível com o SCIM, o {% data variables.product.prodname_dotcom %} poderá convidar automaticamente integrantes para participarem da sua organização ao conceder acesso no seu IdP. Se você remover o acesso de um integrante à organização do seu {% data variables.product.prodname_dotcom %} no seu IdP de SAML, o integrante será removido automaticamente da organização de {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Sobre o SCIM para organizações](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

{% data reusables.organizations.team-synchronization %}

{% data reusables.saml.saml-single-logout-not-supported %}

## Leitura adicional

- "[Referência de configuração do SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)"
- "[Sobre a autenticação de dois fatores e o logon único do SAML](/articles/about-two-factor-authentication-and-saml-single-sign-on)"
- "[Sobre a autenticação com o logon único do SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)"
