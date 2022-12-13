---
title: SCIM
intro: Você pode automatizar a criação de usuários e as associações de equipe usando a API do SCIM.
versions:
  ghes: '>=3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ef20e958e8a0680425e116f9d7e576291b793766
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107274'
---
{% data reusables.scim.ghes-beta-note %}

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}
## Sobre a API do SCIM

O {% data variables.product.product_name %} fornece uma API do SCIM a ser usada pelos IdPs (provedores de identidade) habilitados para SCIM. Uma integração no IdP pode usar a API para provisionar, gerenciar ou desprovisionar automaticamente contas de usuário em uma instância do {% data variables.product.product_name %} que use o SSO (logon único) de SAML para autenticação. Para obter mais informações sobre o SSO de SAML, confira "[Sobre o SAML para IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)".

A API do SCIM é baseada no SCIM 2.0. Para obter mais informações, confira as [especificações](https://www.simplecloud.info/#Specification).

### URLs de ponto de extremidade do SCIM

Um IdP pode usar a URL raiz a seguir para se comunicar com a API do SCIM de uma instância do {% data variables.product.product_name %}.

```
{% data variables.product.api_url_code %}/scim/v2/
```

As URLs de ponto de extremidade da API do SCIM diferenciam maiúsculas de minúsculas. Por exemplo, a primeira letra no ponto de extremidade `Users` precisa ser maiúscula.

```shell
GET /scim/v2/Users/{scim_user_id}
```

### Autenticar chamadas para a API de SCIM

A integração do SCIM no IdP executa ações em nome de um proprietário corporativo na instância do {% data variables.product.product_name %}. Para obter mais informações, confira "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners)".

Para autenticar solicitações para a API, a pessoa que configura o SCIM no IdP precisa usar um {% data variables.product.pat_v1 %} com o escopo `admin:enterprise`, que o IdP precisa fornecer no cabeçalho da solicitação `Authorization`. Para obter mais informações sobre {% data variables.product.pat_v1_plural %}, confira "[Como criar um {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

{% note %}

**Observação:** os proprietários corporativos precisam gerar e usar um {% data variables.product.pat_v1 %} para autenticação de solicitações da a API do SCIM. {% ifversion ghes > 3.8 %}No momento, não há suporte para {% data variables.product.pat_v2_caps %} e {% endif %}os chamadores de aplicativo do GitHub.

{% endnote %}

### Sobre o mapeamento de dados do SAML e do SCIM
  
A instância do {% data variables.product.product_name %} vincula cada usuário que se autentica com êxito com o SSO do SAML a uma identidade do SCIM. Para vincular as identidades com êxito, o IdP do SAML e a integração ao SCIM precisam usar os de valores `NameID` do SAML e de `userName` do SCIM correspondentes para cada usuário.

{% ifversion ghes > 3.7 %} {% note %}

**Observação:** se o {% data variables.product.product_name %} usar o Azure AD como um IdP de SAML, o {% data variables.product.product_name %} também verificará a declaração de `externalId` do SCIM e a declaração de `http://schemas.microsoft.com/identity/claims/objectidentifier` do SAML para corresponder primeiro aos usuários, em vez de usar `NameID` e `userName`. 

{% endnote %} {% endif %}

### Atributos de usuário do SCIM com suporte

Os pontos de extremidade de `User` da API do SCIM dão suporte aos atributos a seguir dentro dos parâmetros de uma solicitação.

| Nome | Type | Descrição |
| :- | :- | :- |
| `displayName` | String | Nome de usuário legível por pessoas. |
| `name.formatted` | String | O nome completo do usuário, incluindo todos os nomes do meio, títulos e sufixos, formatados para exibição.
| `name.givenName` | String | Primeiro nome do usuário. |
| `name.familyName` | String | Sobrenome do usuário. |
| `userName` | String | O nome de usuário do usuário, gerado pelo IdP. Passa por [normalização](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization) antes de ser usado. 
| `emails` | Array | Lista de emails do usuário. |
| `roles` | Array | Lista de funções do usuário. |
| `externalId` | String | Esse identificador é gerado por um provedor IdP. Você pode encontrar a `externalId` de um usuário no IdP ou usando o ponto de extremidade [Listar identidades provisionadas do SCIM](#list-scim-provisioned-identities-for-an-enterprise) e a filtragem de outros atributos conhecidos, como o nome de usuário ou o endereço de email de um usuário na instância do {% data variables.product.product_name %}. |
| `id` | String | Identificador gerado pelo ponto de extremidade do SCIM da instância. |
| `active` | Boolean | Indica se a identidade está ativa (`true`) ou deve ser suspensa (`false`). |

