---
title: Types d’événement de problème
intro: 'Pour les API Événements de problème et Chronologie, découvrez chaque type d’événement, l’action de déclenchement sur {% data variables.product.prodname_dotcom %}, et les propriétés uniques de chaque événement.'
redirect_from:
  - /v3/issues/issue-event-types
  - /developers/webhooks-and-events/issue-event-types
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Events
ms.openlocfilehash: 2459e4fbdcd4e857c603b7aa7354d4f2d5d6a062
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876784'
---
Les événements de problème sont déclenchés par l’activité dans les problèmes et les demandes de tirage, et sont disponibles dans l’[API Événements de problème](/rest/reference/issues#events) et [API Événements de chronologie](/rest/reference/issues#timeline). Chaque type d’événement spécifie si l’événement est disponible dans les API Événements de problème ou Événements de chronologie.

L’API REST GitHub traite chaque demande de tirage comme un problème, mais ne traite pas chaque problème comme une demande de tirage. Pour cette raison, les points de terminaison Événements de problème et Événements de chronologie peuvent retourner des problèmes et des demandes de tirage dans la réponse. Les demandes de tirage ont une propriété `pull_request` dans l’objet `issue`. Comme les demandes de tirage sont des problèmes, les numéros de demande de tirage et de problème ne se chevauchent pas dans un dépôt. Par exemple, si vous ouvrez votre premier problème dans un dépôt, son numéro est 1. Si vous ouvrez ensuite une demande de tirage, son numéro est 2. Chaque type d’événement spécifie si l’événement se produit dans une demande de tirage, des problèmes ou les deux.

## Propriétés courantes des objets d’événement de problème

Les événements de problème ont tous la même structure d’objet, à l’exception des événements qui sont disponibles seulement dans l’API Événements de chronologie. Certains événements comprennent également des propriétés supplémentaires qui fournissent plus de contexte sur les ressources d’événement. Consultez l’événement spécifique pour plus d’informations sur les propriétés qui diffèrent de ce format d’objet.

{% data reusables.issue-events.issue-event-common-properties %}

## added_to_project

Le problème ou la demande de tirage ont été ajoutés à un tableau de projet. {% data reusables.projects.disabled-projects %}

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demande de tirage (pull request)</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## Affecté

Le problème ou la demande de tirage ont été attribués à un utilisateur.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X**  |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.assignee-properties %}

## automatic_base_change_failed

GitHub n’a pas réussi à changer automatiquement la branche de base de la demande de tirage.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Demandes de tirage</li></ul> | **X** |  |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## automatic_base_change_succeeded

GitHub a réussi à changer automatiquement la branche de base de la demande de tirage.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Demandes de tirage</li></ul> | **X** | |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## base_ref_changed

La branche de référence de base de la demande de tirage a été changée.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Demandes de tirage</li></ul> | **X** | |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## Fermé

Le problème ou la demande de tirage ont été fermés. Quand `commit_id` est présent, il identifie le commit qui a fermé le problème en utilisant la syntaxe « closes / fixes ». Pour plus d’informations sur la syntaxe, consultez « [Liaison d’une demande de tirage à un problème](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) ».

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## a commenté

Un commentaire a été ajouté au problème ou à la demande de tirage.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> |  | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.timeline_events_object_properties %}

Nom | Type | Description
-----|------|--------------
`url` | `string` | URL de l’API REST pour récupérer le commentaire du problème.
`html_url` | `string` | URL HTML du commentaire du problème.
`issue_url` | `string` | URL HTML du problème.
`id` | `integer` | Identificateur unique de l’événement.
`node_id` | `string` | [ID de nœud global](/graphql/guides/using-global-node-ids) de l’événement.
`user` | `object` | Personne qui a commenté le problème.
`created_at` | `string` | Horodatage indiquant quand le commentaire a été ajouté.
`updated_at` | `string` | Horodatage indiquant quand le commentaire a été mis à jour ou créé, si le commentaire n’est jamais mis à jour.
`author_association` | `string` | Autorisations de l’utilisateur sur le dépôt du problème. Par exemple, la valeur est `"OWNER"` si le propriétaire du dépôt a créé un commentaire.
`body` | `string` | Texte du corps du commentaire.
`event` | `string` | La valeur de l’événement est `"commented"`.
`actor` | `object` | Personne qui a généré l’événement.

## validées

Un commit a été ajouté à la branche `HEAD` de la demande de tirage.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Demandes de tirage</li></ul> |  | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.timeline_events_object_properties %}

Nom | Type | Description
-----|------|--------------
`sha` | `string` | SHA du commit dans la demande de tirage.
`node_id` | `string` | [ID de nœud global](/graphql/guides/using-global-node-ids) de l’événement.
`url` | `string` | URL de l’API REST pour récupérer le commit.
`html_url` | `string` | URL HTML du commit.
`author` | `object` | Personne qui a créé le commit.
`committer` | `object` | Personne qui a commité le commit pour le compte de l’auteur.
`tree` | `object` | Arborescence Git du commit.
`message` | `string` | Message du commit.
`parents` | `array of objects` | Liste des commits parents.
`verification` | `object` | Résultat de la vérification de signature du commit. Pour plus d’informations, consultez « [Objet de vérification de signature](/rest/reference/git#get-a-commit) ».
`event` | `string` | La valeur de l’événement est `"committed"`.

## connected

Le problème ou la demande de tirage ont été liés à un autre problème ou une autre demande de tirage. Pour plus d’informations, consultez « [Liaison d’une demande de tirage à un problème](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue) ».

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## convert_to_draft

La demande de tirage a été convertie en brouillon.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## converted_note_to_issue

Le problème a été créé en convertissant une note du tableau de projet en problème. {% data reusables.projects.disabled-projects %}

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## référence croisée

Le problème ou la demande de tirage ont été référencés par un autre problème ou une autre demande de tirage.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> |  | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.timeline_events_object_properties %}

Nom | Type | Description
-----|------|--------------
`actor` | `object` | Personne qui a généré l’événement.
`created_at` | `string` | Horodatage indiquant quand la référence croisée a été ajoutée.
`updated_at` | `string` | Horodatage indiquant quand la référence croisée a été mise à jour ou créée, si la référence croisée n’est jamais mise à jour.
`source` | `object` | Le problème ou la demande de tirage qui a ajouté une référence croisée.
`source[type]` | `string` | Cette valeur est toujours `"issue"`, car les demandes de tirage sont toujours de type problème. Seuls les événements de référence croisée déclenchés par des problèmes ou des demandes de tirage sont retournés dans l’API Événements de chronologie. Pour déterminer si le problème qui a déclenché l’événement est une demande de tirage, vous pouvez vérifier si l’objet `source[issue][pull_request]` existe.
`source[issue]` | `object` | Objet `issue` qui a ajouté la référence croisée.
`event` | `string` | La valeur de l’événement est `"cross-referenced"`.

## demilestoned

Le problème ou la demande de tirage ont été supprimés d’un jalon.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %} `milestone` | `object` | Objet jalon.
`milestone[title]` | `string` | Titre du jalon.

## deployed

La demande de tirage a été déployée.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## deployment_environment_changed

L’environnement de déploiement de la demande de tirage a été changé.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Demandes de tirage</li></ul> | **X** |  |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## déconnecté

Le problème ou la demande de tirage ont été dissociés d’un autre problème ou d’une autre demande de tirage. Pour plus d’informations, consultez « [Liaison d’une demande de tirage à un problème](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue) ».

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_deleted

La branche `HEAD` de la demande de tirage a été supprimée.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_restored

La branche `HEAD` de la demande de tirage a été restaurée sur le dernier commit connu.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Demandes de tirage</li></ul> | **X** | **X** |

## head_ref_force_pushed

La branche HEAD de la demande de tirage a été poussée de force.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## a étiqueté

Une étiquette a été ajoutée au problème ou à la demande de tirage.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.label-properties %}

## locked

Le problème ou la demande de tirage ont été verrouillés.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %} `lock_reason` | `string` | Raison pour laquelle une conversation de problème ou de demande de tirage a été verrouillée, si une conversation était fournie.

## mentioned

L’`actor` était `@mentioned` dans le corps d’un problème ou d’une demande de tirage.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## marked_as_duplicate

Un utilisateur avec des autorisations d’écriture a marqué un problème comme doublon d’un autre problème, ou une demande de tirage comme doublon d’une autre demande de tirage.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## fusionnées

La demande de tirage a été fusionnée. L’attribut `commit_id` est le SHA1 du commit `HEAD` qui a été fusionné. Le `commit_repository` est toujours identique au dépôt principal.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## milestoned

Le problème ou la demande de tirage ont été ajoutés à un jalon.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %} `milestone` | `object` | Objet jalon.
`milestone[title]` | `string` | Titre du jalon.

## moved_columns_in_project

Le problème ou la demande de tirage ont été déplacés entre les colonnes d’un tableau de projet. {% data reusables.projects.disabled-projects %}

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %} `previous_column_name` | `string` | Nom de la colonne à partir de laquelle le problème a été déplacé.

## pinned

Le problème a été épinglé.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## ready_for_review

Un brouillon de demande de tirage a été marqué comme étant prêt pour la révision.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## referenced

Le problème a été référencé à partir d’un message de commit. L’attribut `commit_id` est le SHA1 de commit de l’endroit où cela s’est produit et le commit_repository est l’endroit où ce commit a été envoyé.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## removed_from_project

Le problème ou la demande de tirage ont été supprimés d’un tableau de projet. {% data reusables.projects.disabled-projects %}

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## renamed

Le problème ou le titre de la demande de tirage ont été changés.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %} `rename` | `object` | Détails du nom.
`rename[from]` | `string` | Nom précédent.
`rename[to]` | `string` | Nouveau nom.

## rouverte

Le problème ou la demande de tirage ont été rouverts.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## review_dismissed

La révision de la demande de tirage a été ignorée.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-dismissed-properties %}

## review_requested

Une révision de demande de tirage a été demandée.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-request-properties %}

## review_request_removed

Une demande de révision de demande de tirage a été supprimée.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-request-properties %}

## reviewed

La demande de tirage a été révisée.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Demandes de tirage</li></ul> |  | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.timeline_events_object_properties %}

Nom | Type | Description
-----|------|--------------
`id` | `integer` | Identificateur unique de l’événement.
`node_id` | `string` | [ID de nœud global](/graphql/guides/using-global-node-ids) de l’événement.
`user` | `object` | Personne qui a commenté le problème.
`body` | `string` | Texte récapitulatif de la révision.
`commit_id` | `string` | SHA du dernier commit dans la demande de tirage au moment de la révision.
`submitted_at` | `string` | Horodatage indiquant quand la révision a été envoyée.
`state` | `string` | État de la révision envoyée. Peut avoir une de ces valeurs : `commented`, `changes_requested` ou `approved`.
`html_url` | `string` | URL HTML de la révision.
`pull_request_url` | `string` | URL de l’API REST pour récupérer la demande de tirage.
`author_association` | `string` | Autorisations de l’utilisateur sur le dépôt du problème. Par exemple, la valeur est `"OWNER"` si le propriétaire du dépôt a créé un commentaire.
`_links` | `object` | `html_url` et `pull_request_url`.
`event` | `string` | La valeur de l’événement est `"reviewed"`.

## subscribed

Une personne s’est abonnée pour recevoir des notifications concernant un problème ou une demande de tirage.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## transferred

Le problème a été transféré dans un autre dépôt.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## non attribué

Un utilisateur a été désattribué du problème.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.assignee-properties %}

## unlabeled

Une étiquette a été supprimée du problème.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.label-properties %}

## unlocked

Le problème a été déverrouillé.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %} `lock_reason` | `string` | Raison pour laquelle une conversation de problème ou de demande de tirage a été verrouillée, si une conversation était fournie.

## unmarked_as_duplicate

Le problème qu’un utilisateur avait précédemment marqué comme doublon d’un autre problème n’est plus considéré comme un doublon, ou la demande de tirage que l’utilisateur avait précédemment marquée comme doublon d’une autre demande de tirage n’est plus considérée comme un doublon.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## unpinned

Le problème a été désépinglé.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

## unsubscribed

Une personne s’est désinscrite de la réception de notifications pour un problème ou une demande de tirage.

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> |  | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

{% ifversion fpt or ghec %}
## user_blocked

Un propriétaire de l’organisation a bloqué un utilisateur de l’organisation. Cela a été effectué [dans un des commentaires de l’utilisateur bloqué sur le problème](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization#blocking-a-user-in-a-comment).

### Disponibilité

|Type de problème | API Événements de problème | API Événements de chronologie|
|:----------|:----------------:|:-----------------:|
| <ul><li>Problèmes</li><li>Demandes de tirage</li></ul> | **X** | **X** |

### Propriétés de l’objet d’événement

{% data reusables.issue-events.issue-event-common-properties %}

{% endif %}
