---
title: Dépannage de la gestion des identités et des accès pour votre organisation
intro: 'Examinez et résolvez les erreurs courantes pour gérer l’authentification unique SAML de votre organisation, la synchronisation des équipes ou la connexion du fournisseur d’identité.'
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Troubleshooting access
redirect_from:
  - /organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management
ms.openlocfilehash: d3110d61fb511f55aa840d0911c036dd342fa833
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106972'
---
{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% data reusables.saml.authentication-loop %}

## Certains utilisateurs ne sont pas approvisionnés ni déprovisionnés par SCIM

Lorsque vous rencontrez des problèmes d’approvisionnement avec les utilisateurs, nous vous recommandons de vérifier si les utilisateurs ne disposent pas de métadonnées SCIM. 

{% data reusables.scim.changes-should-come-from-idp %}

Si un membre de l’organisation a des métadonnées SCIM manquantes, vous pouvez reprovisionner SCIM pour l’utilisateur manuellement via votre fournisseur d’identité.

### Audit des utilisateurs pour les métadonnées SCIM manquantes

Si vous soupçonnez ou remarquez que tous les utilisateurs ne sont pas approvisionnés ou déprovisionnés comme prévu, nous vous recommandons d’auditer tous les utilisateurs de votre organisation.

Pour vérifier si les utilisateurs ont une identité SCIM (métadonnées SCIM) dans leur identité externe, vous pouvez consulter les métadonnées SCIM d’un membre de l’organisation à la fois sur {% data variables.product.prodname_dotcom %} ou vérifier programmatiquement tous les membres de l’organisation à l’aide de l’API {% data variables.product.prodname_dotcom %}.

#### Audit des membres de l’organisation sur {% data variables.product.prodname_dotcom %}

En tant que propriétaire de l’organisation, pour vérifier que les métadonnées SCIM existent pour un seul membre de l’organisation, visitez cette URL, en remplaçant `<organization>` et `<username>` : 

> `https://github.com/orgs/<organization>/people/<username>/sso`

Si l’identité externe de l’utilisateur inclut des métadonnées SCIM, le propriétaire de l’organisation doit voir une section d’identité SCIM sur cette page. Si leur identité externe n’inclut pas de métadonnées SCIM, la section Identité SCIM n’existe pas.

#### Audit des membres de l’organisation sur l’API {% data variables.product.prodname_dotcom %}

En tant que propriétaire de l’organisation, vous pouvez également interroger l’API REST SCIM ou GraphQL pour répertorier toutes les identités approvisionnées SCIM dans une organisation. 

#### En utilisant l’API REST

L’API REST SCIM retourne uniquement des données pour les utilisateurs dont les métadonnées SCIM sont remplies sous leurs identités externes. Nous vous recommandons de comparer une liste d’identités approvisionnées par SCIM à une liste de tous les membres de votre organisation.

Pour plus d'informations, consultez les pages suivantes :
  - « [Répertorier les identités configurées par SCIM](/rest/reference/scim#list-scim-provisioned-identities) »
  - « [Répertorier les membres de l’organisation](/rest/reference/orgs#list-organization-members) »

#### Utilisation de GraphQL

Cette requête GraphQL vous montre le SAML `NameId`, le SCIM `UserName` et le nom d’utilisateur {% data variables.product.prodname_dotcom %} nom d’utilisateur (`login`) pour chaque utilisateur de l’organisation. Pour utiliser cette requête, remplacez `ORG` par le nom de votre organisation. 

```graphql
{
  organization(login: "ORG") {
    samlIdentityProvider {
      ssoUrl
      externalIdentities(first: 100) {
        edges {
          node {
            samlIdentity {
              nameId
            }
            scimIdentity {
              username
            }
            user {
              login
            }
          }
        }
      }
    }
  }
}
```

```shell
curl -X POST -H "Authorization: Bearer YOUR_TOKEN" -H "Content-Type: application/json" -d '{ "query": "{ organization(login: \"ORG\") { samlIdentityProvider { externalIdentities(first: 100) { pageInfo { endCursor startCursor hasNextPage } edges { cursor node { samlIdentity { nameId } scimIdentity {username}  user { login } } } } } } }" }'  https://api.github.com/graphql
```

Pour plus d’informations sur l’utilisation de l’API GraphQL, consultez : 
   - « [Repères GraphQL](/graphql/guides) »
   - « [Afficheur GraphQL](/graphql/overview/explorer) »

### Réapprovisionnement de SCIM pour les utilisateurs via votre fournisseur d’identité

Vous pouvez reprovisionner SCIM pour les utilisateurs manuellement via votre fournisseur d’identité. Par exemple, pour résoudre les erreurs d’approvisionnement pour Okta, dans le portail d’administration Okta, vous pouvez annuler l’affectation et réaffecter des utilisateurs à l’application {% data variables.product.prodname_dotcom %}. Cela doit déclencher Okta pour effectuer un appel d’API afin de remplir les métadonnées SCIM pour ces utilisateurs sur {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Annuler l’affectation d’utilisateurs à partir d’applications](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-unassign-apps.htm) » ou « [Affecter des utilisateurs à des applications](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-assign-apps.htm) » dans la documentation Okta.

Pour vérifier que l’identité SCIM d’un utilisateur est créée, nous vous recommandons de tester ce processus avec un seul membre de l’organisation que vous avez confirmé qui n’a pas d’identité externe SCIM. Après avoir mis à jour manuellement les utilisateurs dans votre fournisseur d’identité, vous pouvez vérifier si l’identité SCIM de l’utilisateur a été créée à l’aide de l’API SCIM ou sur {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Audit des utilisateurs pour les métadonnées SCIM manquantes](#auditing-users-for-missing-scim-metadata) » ou le point de terminaison de l’API REST « [Obtenir des informations d’approvisionnement SCIM pour un utilisateur](/rest/reference/scim#get-scim-provisioning-information-for-a-user) ».

Si la reprovisionnement de SCIM pour les utilisateurs n’est pas utile, contactez le support technique {% data variables.product.prodname_dotcom %}.

## Pour aller plus loin

- « [À propos de la gestion des identités et des accès pour votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/troubleshooting-identity-and-access-management-for-your-enterprise) »
