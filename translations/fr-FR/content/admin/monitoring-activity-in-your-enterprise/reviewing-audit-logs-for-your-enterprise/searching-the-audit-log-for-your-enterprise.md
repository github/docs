---
title: Recherche dans le journal d’audit de votre entreprise
intro: Vous pouvez effectuer des recherches dans une liste complète des actions auditées dans votre entreprise.
shortTitle: Search audit logs
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can search the audit log.'
redirect_from:
  - /enterprise/admin/articles/searching-the-audit-log
  - /enterprise/admin/installation/searching-the-audit-log
  - /enterprise/admin/user-management/searching-the-audit-log
  - /admin/user-management/searching-the-audit-log
  - /admin/user-management/monitoring-activity-in-your-enterprise/searching-the-audit-log
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 12bc44b7d81df55366f8b839261cf8899a53729d
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183995'
---
## À propos de la recherche dans le journal d’audit d’une entreprise

Vous pouvez effectuer une recherche dans le journal d’audit de votre entreprise directement à partir de l’interface utilisateur à l’aide de la liste déroulante **Filtres** ou en tapant une requête de recherche.

  ![Requête de recherche](/assets/images/enterprise/site-admin-settings/search-query.png)

Pour plus d’informations sur la visualisation du journal d’audit de votre entreprise, consultez « [Accès au journal d’audit de votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise) ». 

{% data reusables.audit_log.git-events-not-in-search-results %}

Vous pouvez également utiliser l’API pour récupérer les événements du journal d’audit. Pour plus d’informations, consultez « [Utilisation de l’API de journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise) ».

Vous ne pouvez pas rechercher d’entrées avec du texte. Toutefois, vous pouvez construire des requêtes de recherche à l’aide d’une variété de filtres. De nombreux opérateurs utilisés pour l’interrogation du journal, par exemple `-`, `>` ou `<`, ont le même format que pour la recherche dans {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Recherche sur {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github) ».

{% note %}

**Remarque** : {% data reusables.audit_log.retention-periods %}

{% endnote %}

## Filtres de requête de recherche

Filtrer| Description
--------------:| -----------
`Yesterday's activity` | Toutes les actions créées au cours du dernier jour
`Enterprise account management` | Toutes les actions de la catégorie `business`
`Organization membership` | Toutes les actions pour lesquelles un nouvel utilisateur a été invité à rejoindre une organisation
`Team management` | Toutes les actions liées à la gestion d’équipe<br/>- Quand un compte d’utilisateur ou un dépôt a été ajouté à une équipe ou supprimé d’une équipe<br/>- Quand un responsable d’équipe a été promu ou rétrogradé<br/>- Quand une équipe a été supprimée
`Repository management` | Toutes les actions liées à la gestion des dépôts<br/>- Quand un dépôt a été créé ou supprimé<br/>- Quand la visibilité d’un dépôt a été modifiée<br/>- Quand une équipe a été ajoutée à un dépôt ou supprimée d’un dépôt{% ifversion ghec %}
`Billing updates` | Toutes les actions concernant la façon dont votre entreprise paye pour {% data variables.product.prodname_dotcom %} et pour lesquelles votre adresse e-mail de facturation a été modifiée{% endif %}
`Hook activity` | Toutes les actions liées aux webhooks et hooks de pré-réception
`Security management` | Toutes les actions concernant des clés SSH, des clés de déploiement, des clés de sécurité, l’autorisation d’informations d’identification pour l’authentification à 2 facteurs et l’authentification unique SAML et les alertes de vulnérabilité pour les dépôts

## Syntaxe des requêtes de recherche

Vous pouvez composer une requête de recherche à partir d’une ou plusieurs paires `key:value` séparées par des opérateurs logiques AND/OR. Par exemple, pour voir toutes les actions qui ont affecté le dépôt `octocat/Spoon-Knife` depuis début 2017 :

  `repo:"octocat/Spoon-Knife" AND created:>=2017-01-01`

Les paires `key:value` qui peuvent être utilisées dans une requête de recherche sont les suivantes :

Clé            | Valeur
--------------:| --------------------------------------------------------
`actor_id`     | ID du compte d’utilisateur qui a initié l’action
`actor`        | Nom du compte d’utilisateur qui a initié l’action
`oauth_app_id` | ID de l’application OAuth associée à l’action
`action`       | Nom de l’action auditée
`user_id`      | ID de l’utilisateur affecté par l’action
`user`         | Nom de l’utilisateur affecté par l’action
`repo_id`      | ID du dépôt affecté par l’action (le cas échéant)
`repo`         | Nom du dépôt affecté par l’action (le cas échéant)
`actor_ip`     | Adresse IP à partir de laquelle l’action a été initiée
`created`      | Heure à laquelle l’action s’est produite{% ifversion ghes %}. Si vous interrogez le journal d’audit à partir du tableau de bord d’administrateur de site, utilisez plutôt `created_at`{% endif %}
`from`         | Vue à partir de laquelle l’action a été initiée
`note`         | Informations diverses spécifiques aux événements (en texte brut ou au format JSON)
`org`          | Nom de l’organisation affectée par l’action (le cas échéant)
`org_id`       | ID de l’organisation affectée par l’action (le cas échéant)
`business` | Nom de l’entreprise affectée par l’action (le cas échéant)
`business_id` | ID de l’entreprise affectée par l’action (le cas échéant)
{%- ifversion token-audit-log %} `hashed_token` | Jeton utilisé pour l’authentification pour l’action (le cas échéant, consultez « [Identification des événements de journal d’audit effectués par un jeton d’accès](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token) ») {%- endif %}

Pour voir les actions regroupées par catégorie, vous pouvez également utiliser le qualificateur d’action comme paire `key:value`. Pour plus d’informations, consultez « [Recherche basée sur l’action effectuée](#search-based-on-the-action-performed) ».

Pour obtenir la liste complète des actions dans le journal d’audit de votre entreprise, consultez « [Actions du journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise) ».

## Recherche dans le journal d’audit

{% data reusables.audit_log.audit-log-search-by-operation %}

{% data reusables.audit_log.audit-log-search-by-repo %}

{% data reusables.audit_log.audit-log-search-by-user %}

### Recherche basée sur l’action effectuée

Pour rechercher des événements spécifiques, utilisez le qualificateur `action` dans votre requête. Par exemple :

  * `action:team` recherche tous les événements regroupés dans la catégorie team.
  * `-action:hook` exclut tous les événements de la catégorie webhook.

Chaque catégorie a un ensemble d’actions associées sur lesquelles vous pouvez filtrer. Par exemple :

  * `action:team.create` recherche tous les événements ayant impliqué la création d’une équipe.
  * `-action:hook.events_changed` exclut tous les événements ayant impliqué la modification des événements sur un webhook.

Les actions figurant dans le journal d’audit de votre entreprise sont regroupées dans les catégories suivantes :

{% data reusables.audit_log.audit-log-action-categories %}

### Recherche basée sur l’heure de l’action

Utilisez le qualificateur `created` pour filtrer les événements du journal d’audit en fonction du moment où ils se sont produits.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

Par exemple :

  * `created:2014-07-08` recherche tous les événements qui se sont produits le 8 juillet 2014.
  * `created:>=2014-07-08` recherche tous les événements qui se sont produits le 8 juillet 2014 ou après cette date.
  * `created:<=2014-07-08` recherche tous les événements qui se sont produits le 8 juillet 2014 ou avant cette date.
  * `created:2014-07-01..2014-07-31` recherche tous les événements qui se sont produits en juillet 2014.

### Rechercher basée sur l’emplacement

À l’aide du qualificateur `country`, vous pouvez filtrer les événements du journal d’audit en fonction du pays d’origine. Vous pouvez utiliser le code court à deux lettres ou le nom complet d’un pays. Les pays dont le nom contient des espaces doivent être placés entre guillemets. Par exemple :

  * `country:de` recherche tous les événements qui se sont produits en Allemagne.
  * `country:Mexico` recherche tous les événements qui se sont produits au Mexique.
  * `country:"United States"` recherche tous les événements qui se sont produits aux États-Unis.

{% ifversion token-audit-log %}
### Recherche en fonction du jeton qui a effectué l’action

Utilisez le qualificateur `hashed_token` pour effectuer une recherche en fonction du jeton qui a effectué l’action. Avant de pouvoir rechercher un jeton, vous devez générer un hachage SHA-256. Pour plus d’informations, consultez « [Identification des événements de journal d’audit effectués par un jeton d’accès](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token) ».
{% endif %}
