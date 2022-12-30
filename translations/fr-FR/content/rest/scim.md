---
title: SCIM
intro: Vous pouvez contrôler et gérer l’accès des membres de votre organisation GitHub à l’aide de l’API SCIM.
versions:
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/scim
ms.openlocfilehash: 314ed9433ffeb1ef3f189795727a3b654c529c96
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883042'
---
## À propos de l’API SCIM

### Approvisionnement de SCIM pour les organisations

L’API SCIM est utilisée par les fournisseurs d’identité compatibles SCIM pour automatiser l’approvisionnement de l’appartenance à l’organisation {% data variables.product.product_name %}. L’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} est basée sur la version 2.0 de la [norme SCIM](http://www.simplecloud.info/). Le point de terminaison SCIM {% data variables.product.product_name %} qu’un fournisseur d’identité doit utiliser est : `{% data variables.product.api_url_code %}/scim/v2/organizations/{org}/`.

{% note %}

**Remarques :** 
  - L’API SCIM est disponible uniquement pour des organisations individuelles qui utilisent [{% data variables.product.prodname_ghe_cloud %}](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts) avec [l’authentification unique SAML](/rest/overview/other-authentication-methods#authenticating-for-saml-sso) activée. Pour plus d’informations sur SCIM, consultez « [À propos de SCIM pour les organisations](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations) ».
  - L’API SCIM ne peut pas être utilisée avec un compte d’entreprise ou avec un {% data variables.product.prodname_emu_org %}.

{% endnote %}

### Authentification d’appels à l’API SCIM

Vous devez vous authentifier en tant que propriétaire d’une organisation {% data variables.product.product_name %} pour utiliser son API SCIM. L’API s’attend à ce qu’un jeton du [Porteur OAuth 2.0](/developers/apps/authenticating-with-github-apps) soit inclus dans l’en-tête `Authorization` . Vous pouvez également utiliser un jeton d’accès personnel, mais vous devez au préalable[autoriser son utilisation avec votre organisation SSO SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

### Mappage des données SAML et SCIM

{% data reusables.scim.nameid-and-username-must-match %}

### Attributs utilisateur SCIM pris en charge

Nom | Type | Description
-----|------|--------------
`userName`|`string` | Nom d’utilisateur de l’utilisateur.
`name.givenName`|`string` | Prénom de l’utilisateur.
`name.familyName`|`string` | Nom de l’utilisateur.
`emails` | `array` | Liste des e-mails de l’utilisateur.
`externalId` | `string` | Cet identificateur est généré par le fournisseur SAML, et utilisé comme ID unique par le fournisseur SAML pour établit une correspondance avec un utilisateur GitHub. Vous pouvez trouver l’`externalID` pour un utilisateur chez le fournisseur SAML ou en utilisant le point de terminaison [Répertorier les identités approvisionnées SCIM](#list-scim-provisioned-identities) et en filtrant sur d’autres attributs connus, tels que le nom d’utilisateur ou l’adresse e-mail GitHub d’un utilisateur.
`id` | `string` | Identificateur généré par le point de terminaison SCIM GitHub.
`active` | `boolean` | Utilisé pour indiquer si l’identité est active (true) ou devrait être déprovisionnée (false).

{% note %}

**Remarque :** les URL de point de terminaison pour l’API SCIM respectent la casse. Par exemple, la première lettre du point de terminaison `Users` doit être en majuscule :

```shell
GET /scim/v2/organizations/{org}/Users/{scim_user_id}
```

{% endnote %}
