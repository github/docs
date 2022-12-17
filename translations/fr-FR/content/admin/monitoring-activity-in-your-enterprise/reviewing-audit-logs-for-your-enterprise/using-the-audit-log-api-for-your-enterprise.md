---
title: Utilisation de l’API de journal d’audit pour votre entreprise
intro: Vous pouvez récupérer par programmation des événements d’entreprise avec l’API REST ou GraphQL.
shortTitle: Audit log API
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can use the audit log API.'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - API
ms.openlocfilehash: f5dd0a3dcca1e7fd60361f0cb7c8ecf84296e036
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192656'
---
## Utilisation de l’API de journal d’audit

Vous pouvez interagir avec le journal d’audit à l’aide de l’API GraphQL ou de l’API REST.{% ifversion read-audit-scope %} Vous pouvez utiliser l’étendue `read:audit_log` pour accéder au journal d’audit via les API.{% endif %}

Les horodatages et les champs de date de la réponse de l’API sont mesurés en [millisecondes d’époque UTC](http://en.wikipedia.org/wiki/Unix_time).

## Interrogation de l’API GraphQL de journal d’audit

Pour garantir la sécurité de votre propriété intellectuelle et assurer la conformité de votre entreprise, vous pouvez utiliser l’API GraphQL de journal d’audit pour conserver des copies de vos données de journal d’audit et superviser : {% data reusables.audit_log.audit-log-api-info %}

Notez que vous ne pouvez pas récupérer les événements Git à l’aide de {% ifversion not ghec %}l’API de journal d’audit.{% else %}l’API GraphQL. Pour récupérer des événements Git, utilisez plutôt l’API REST. Pour plus d’informations, consultez les actions de catégorie `git` dans « [Actions de journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions) » ainsi que les points de terminaison de journal d’audit « [Administration Enterprise](/rest/reference/enterprise-admin#audit-log) » et « [Organizations](/rest/reference/orgs#get-the-audit-log-for-an-organization) » dans la documentation de l’API REST.{% endif %}

La réponse GraphQL peut inclure des données allant jusqu’à 90 à 120 jours.

### Exemple 1 : Membres ajoutés ou supprimés dans des organisations d’une entreprise

La requête ci-dessous extrait les journaux d’audit de l’entreprise `avocado-corp` et retourne les 10 premières organisations de l’entreprise, où la seule action effectuée a été l’ajout ou la suppression d’un membre dans une organisation. Les 20 premières entrées du journal d’audit pour chaque organisation sont retournées. 

Cette requête utilise le champ [auditlog](/graphql/reference/objects) de l’objet Organization ainsi que les objets [OrgAddMemberAuditEntry](/graphql/reference/objects#orgaddmemberauditentry) et [OrgRemoveMemberAuditEntry](/graphql/reference/objects#orgremovememberauditentry). Le compte {% data variables.product.prodname_dotcom %} qui interroge le journal d’audit d’entreprise doit être propriétaire de chaque organisation au sein de l’entreprise.

```shell
{
  enterprise(slug: "avocado-corp") {
    organizations(first: 10, orderBy: {field: LOGIN, direction: DESC}) {
      nodes {
        name
        auditLog(first: 20) {
          edges {
            node {
              ... on OrgAddMemberAuditEntry {
                action
                actorLogin
                createdAt
              }
              ... on OrgRemoveMemberAuditEntry {
                action
                actorLogin
                createdAt
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
```

L’API GraphQL retourne au maximum 100 nœuds par requête. Pour récupérer des résultats supplémentaires, vous devez implémenter la pagination. Pour plus d’informations, consultez « [Limitations des ressources](/graphql/overview/resource-limitations#node-limit) » dans la documentation sur l’API GraphQL et [Pagination](https://graphql.org/learn/pagination/) dans la documentation GraphQL officielle.
### Exemple 2 : Événements dans une organisation pour une date et un acteur spécifiques

Vous pouvez spécifier plusieurs expressions de recherche, par exemple `created` et `actor`, en les séparant par un espace dans votre chaîne de requête.

La requête ci-dessous extrait tous les journaux d’audit de l’entreprise `avocado-corp` qui sont liés à l’organisation `octo-org`, où les actions ont été effectuées par l’utilisateur `octocat` à partir du 1er janvier 2022. Les 20 premières entrées du journal d’audit sont retournées, avec l’entrée la plus récente en premier. 

Cette requête utilise l’interface [AuditEntry](/graphql/reference/interfaces#auditentry). Le compte {% data variables.product.prodname_dotcom %} qui interroge le journal d’audit d’entreprise doit être propriétaire de l’organisation `octo-org`.

```shell
{
  enterprise(slug: "avocado-corp") {
    organizations(first: 1, query: "octo-org") {
      nodes {
        name
        auditLog(first: 20, query: "actor:octocat created:>=2022-01-01T00:00:00.000Z", orderBy: {field: CREATED_AT, direction: DESC}) {
          edges {
            node {
              ... on AuditEntry {
                action
                actorLogin
                createdAt
                user {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
```

Pour obtenir d’autres exemples de requêtes, consultez le [dépôt platform-samples](https://github.com/github/platform-samples/blob/master/graphql/queries).

## Interrogation de l’API REST de journal d’audit

Pour garantir la sécurité de votre propriété intellectuelle et assurer la conformité de votre entreprise, vous pouvez utiliser l’API REST de journal d’audit pour conserver des copies de vos données de journal d’audit et superviser : {% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.retention-periods %}

Pour plus d’informations sur l’API REST de journal d’audit, consultez « [Administration Enterprise](/rest/reference/enterprise-admin#audit-log) » et « [Organizations](/rest/reference/orgs#get-the-audit-log-for-an-organization) ».

### Exemple 1 : Tous les événements d’une entreprise pour une date spécifique, avec pagination

Vous pouvez utiliser la pagination basée sur les pages ou la pagination basée sur les curseurs. Pour plus d’informations sur la pagination, consultez « [Utilisation de la pagination dans l’API REST](/rest/guides/using-pagination-in-the-rest-api) ».

#### Exemple de pagination basée sur les pages

La requête ci-dessous recherche les événements de journal d’audit créés le 1er janvier 2022 dans l’entreprise `avocado-corp` et retourne la première page avec un maximum de 100 éléments par page à l’aide de la pagination. Pour plus d’informations sur la pagination, consultez « [Utilisation de la pagination dans l’API REST](/rest/guides/using-pagination-in-the-rest-api) ».

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&page=1&per_page=100"
```

#### Exemple de pagination basée sur les curseurs

La requête ci-dessous recherche les événements de journal d’audit créés le 1er janvier 2022 dans l’entreprise `avocado-corp` et retourne la première page avec un maximum de 100 éléments par page à l’aide de la pagination. Pour plus d’informations sur la pagination, consultez « [Utilisation de la pagination dans l’API REST](/rest/guides/using-pagination-in-the-rest-api) ». L’indicateur `--include` entraîne le retour des en-têtes avec la réponse.

```
curl --include -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&per_page=100"
```

S’il y a plus de 100 résultats, l’en-tête `link` inclut des URL pour récupérer les prochaines, premières et précédentes pages des résultats.

```
link: <https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=MS42NjQzODMzNTk5MjdlKzEyfDloQzBxdURzaFdVbVlLWjkxRU9mNXc%3D&before=>; rel="next", 
<https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=&before=MS42Njc4NDA2MjM4MzNlKzEyfExqeG5sUElvNEZMbG1XZHA5akdKTVE%3D>; rel="prev"
```

Copiez le lien de pagination correspondant dans votre prochaine requête. Par exemple :

```shell
curl -I -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=MS42Njc4NDA2MjM5NDFlKzEyfHRYa3AwSkxUd2xyRjA5bWxfOS1RbFE%3D&before="
```

### Exemple 2 : Événements pour les demandes de tirage (pull request) dans une entreprise pour une date et un acteur spécifiques

Vous pouvez spécifier plusieurs expressions de recherche, par exemple `created` et `actor`, en les séparant par le symbole `+` ou le code de caractère ASCII `%20` dans votre URL formée.

La requête ci-dessous recherche les événements de journal d’audit pour les demandes de tirage, où l’événement s’est produit à partir du 1er janvier 2022 dans l’entreprise `avocado-corp` et où l’action a été effectuée par l’utilisateur `octocat` :

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=action:pull_request+created:>=2022-01-01+actor:octocat"
```






