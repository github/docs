---
title: SCIM
intro: Vous pouvez automatiser la création d’utilisateurs et l’appartenance à une équipe avec l’API SCIM.
versions:
  ghes: '>=3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ef20e958e8a0680425e116f9d7e576291b793766
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107276'
---
{% data reusables.scim.ghes-beta-note %}

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}
## À propos de l’API SCIM

{% data variables.product.product_name %} fournit une API SCIM destinée aux fournisseurs d’identité (IdP) prenant en charge SCIM. Une intégration sur l’IdP peut utiliser l’API pour provisionner, gérer ou déprovisionner automatiquement des comptes d’utilisateur sur une instance {% data variables.product.product_name %} qui utilise l’authentification unique (SSO) SAML pour l’authentification. Pour plus d’informations sur l’authentification unique SAML, consultez « [À propos de SAML pour la gestion des identités et des accès d’entreprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam) ».

L’API SCIM est basée sur SCIM 2.0. Pour en savoir plus, consultez la [spécification](https://www.simplecloud.info/#Specification).

### URL de point de terminaison SCIM

Un fournisseur d’identité peut utiliser l’URL racine suivante afin de communiquer avec l’API SCIM pour une instance {% data variables.product.product_name %}.

```
{% data variables.product.api_url_code %}/scim/v2/
```

Les URL de point de terminaison pour l’API SCIM respectent la casse. Par exemple, la première lettre du point de terminaison `Users` doit être en majuscule.

```shell
GET /scim/v2/Users/{scim_user_id}
```

### Authentification d’appels à l’API SCIM

L’intégration SCIM sur l’idP effectue des actions pour le compte d’un propriétaire d’entreprise pour l’instance {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Rôles dans une entreprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners) ».

Pour authentifier les demandes adressées à l’API, la personne qui configure SCIM sur l’IdP doit utiliser un {% data variables.product.pat_v1 %} avec l’étendue `admin:enterprise`, que l’IdP doit fournir dans l’en-tête `Authorization` de la demande. Pour plus d’informations sur les {% data variables.product.pat_v1_plural %}, consultez « [Création d’un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) ».

{% note %}

**Remarque :** Les propriétaires d’entreprise doivent générer et utiliser un {% data variables.product.pat_v1 %} pour l’authentification des demandes adressées à l’API SCIM. Les {% ifversion ghes > 3.8 %}{% data variables.product.pat_v2_caps %} et {% endif %}appelants d’application GitHub ne sont pas pris en charge.

{% endnote %}

### À propos du mappage des données SAML et SCIM
  
L’instance {% data variables.product.product_name %} lie chaque utilisateur qui s’authentifie avec succès avec l’authentification unique SAML à une identité SCIM. Pour lier correctement les identités, le fournisseur d’identité SAML et l’intégration SCIM doivent utiliser des valeurs SAML `NameID` et SCIM `userName` correspondantes pour chaque utilisateur.

{% ifversion ghes > 3.7 %} {% note %}

**Remarque :** Si {% data variables.product.product_name %} utilise Azure AD comme fournisseur d’identité SAML, {% data variables.product.product_name %} vérifie également la revendication SCIM `externalId` et la revendication SAML `http://schemas.microsoft.com/identity/claims/objectidentifier` pour établir une correspondance avec les utilisateurs en premier, au lieu d’utiliser `NameID` et `userName`. 

{% endnote %} {% endif %}

### Attributs utilisateur SCIM pris en charge

Les points de terminaison `User` de l’API SCIM prennent en charge les attributs suivants dans les paramètres d’une demande.

| Nom | Type | Description |
| :- | :- | :- |
| `displayName` | String | Nom lisible pour un utilisateur. |
| `name.formatted` | String | Nom complet de l’utilisateur, y compris tous les prénoms, titres et suffixes, mis en forme pour l’affichage.
| `name.givenName` | String | Prénom de l’utilisateur. |
| `name.familyName` | String | Nom de l’utilisateur. |
| `userName` | String | Nom d’utilisateur de l’utilisateur, généré par le fournisseur d’identité. Subit la [normalisation](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization) avant d’être utilisé. 
| `emails` | Array | Liste des e-mails de l’utilisateur. |
| `roles` | Array | Liste des rôles de l’utilisateur. |
| `externalId` | String | Cet identificateur est généré par un fournisseur d’identité. Vous pouvez trouver l’`externalId` pour un utilisateur sur l’IdP ou en utilisant le point de terminaison [Lister les identités provisionnées SCIM](#list-scim-provisioned-identities-for-an-enterprise) et en filtrant sur d’autres attributs connus, tels que le nom d’utilisateur ou l’adresse e-mail d’un utilisateur sur l’instance {% data variables.product.product_name %}. |
| `id` | String | Identificateur généré par le point de terminaison SCIM de l’instance. |
| `active` | Boolean | Indique si l’identité est active (`true`) ou doit être suspendue (`false`). |

