---
title: Événements qui déclenchent des flux de travail
intro: 'Vous pouvez configurer vos workflows pour qu’ils s’exécutent quand une activité spécifique se produit sur {% data variables.product.product_name %}, à une heure planifiée, ou quand un événement externe à {% data variables.product.product_name %} se produit.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/events-that-trigger-workflows
  - /github/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/reference/events-that-trigger-workflows
  - /actions/learn-github-actions/events-that-trigger-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Events that trigger workflows
ms.openlocfilehash: 74fe579db353607b449106b41e9787cf055fd643
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147645664'
---
## À propos des événements qui déclenchent des workflows

Les déclencheurs de workflow sont des événements qui entraînent l’exécution d’un workflow. Pour plus d’informations sur l’utilisation de déclencheurs de workflow, consultez « [Déclenchement d’un workflow](/actions/using-workflows/triggering-a-workflow) ».

## Événements disponibles

Certains événements ont plusieurs types d’activités. Pour ces événements, vous pouvez spécifier les types d’activités qui déclenchent une exécution de workflow. Pour plus d’informations sur ce que signifie chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhook-events-and-payloads) ». Notez que tous les événements de webhook ne déclenchent pas des workflows.

{% ifversion fpt or ghec or ghes > 3.3 or ghae  %}
### `branch_protection_rule`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`branch_protection_rule`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule) | - `created`<br/>- `edited`<br/>- `deleted` | Dernier commit sur la branche par défaut | Branche par défaut |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Exécute votre workflow lorsque des règles de protection de branche dans le dépôt de workflow sont modifiées. Pour plus d’informations sur les règles de protection de branche, consultez « [À propos des branches protégées](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches) ». Pour plus d’informations sur les API de règle de protection de branche, consultez « [BranchProtectionRule](/graphql/reference/objects#branchprotectionrule) » dans la documentation sur l’API GraphQL ou « [Branches](/rest/reference/branches) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsqu’une règle de protection de branche a été créée (`created`) ou supprimée (`deleted`) :

```yaml
on:
  branch_protection_rule:
    types: [created, deleted]
```

{% endif %}

### `check_run`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed`<br/>-`requested_action` | Dernier commit sur la branche par défaut | Branche par défaut |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Exécute votre workflow lorsqu’une activité liée à une exécution de vérification se produit. Une exécution de vérification est un test individuel qui fait partie d’une suite de vérifications. Pour plus d’informations, consultez « [Bien démarrer avec l’API Vérifications](/rest/guides/getting-started-with-the-checks-api) ». Pour plus d’informations sur les API d’exécution de vérification, consultez « [CheckRun](/graphql/reference/objects#checkrun) » dans la documentation sur l’API GraphQL ou « [Vérifications](/rest/reference/checks#runs) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsqu’une exécution de vérification a été redemandée (`rerequested`) ou terminée (`completed`).

```yaml
on:
  check_run:
    types: [rerequested, completed]
```

### `check_suite`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_suite`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_suite) | - `completed` | Dernier commit sur la branche par défaut | Branche par défaut |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_suite) ». Même si seul le type d’activité `started` est pris en charge, la spécification du type d’activité maintient votre workflow spécifique si d’autres types d’activité sont ajoutés par la suite. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Remarque :** Pour empêcher les workflows récursifs, cet événement ne déclenche pas de workflows si la suite de vérifications a été créée par {% data variables.product.prodname_actions %}.

{% endnote %}

Exécute votre workflow lorsqu’une activité de suite de vérifications se produit. Une suite de vérifications est une collection des exécutions de vérification créées pour un commit spécifique. Les suites de vérifications récapitulent l’état et la conclusion des exécutions de vérification qui se trouvent dans la suite. Pour plus d’informations, consultez « [Bien démarrer avec l’API Vérifications](/rest/guides/getting-started-with-the-checks-api) ». Pour plus d’informations sur les API des suites de vérifications, consultez « [CheckSuite](/graphql/reference/objects#checksuite) » dans la documentation sur l’API GraphQL ou « [Vérifications](/rest/reference/checks#suites) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsqu’une suite de vérifications a été terminée (`completed`).

```yaml
on:
  check_suite:
    types: [completed]
```

### `create`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`create`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#create) | n/a | Dernier commit sur la branche ou l’étiquette créée | Branche ou étiquette créée |

{% note %}

**Remarque** : Un événement n’est pas créé lorsque vous créez plus de trois étiquettes à la fois.

{% endnote %}

Exécute votre workflow quand un utilisateur crée une référence Git (branche ou étiquette Git) dans le dépôt du workflow. Pour plus d’informations sur les API permettant de créer une référence Git, consultez « [createRef](/graphql/reference/mutations#createref) » dans la documentation sur l’API GraphQL ou « [Créer une référence](/rest/reference/git#create-a-reference) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsque l’événement `create` se produit.

```yaml
on:
  create
```

### `delete`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`delete`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#delete) | n/a | Dernier commit sur la branche par défaut | Branche par défaut |

{% data reusables.actions.branch-requirement %}

{% note %}

**Remarque** : Un événement n’est pas créé lorsque vous supprimez plus de trois étiquettes à la fois.

{% endnote %}

Exécute votre workflow quand un utilisateur supprime une référence Git (branche ou étiquette Git) dans le dépôt du workflow. Pour plus d’informations sur les API permettant de supprimer une référence Git, consultez « [deleteRef](/graphql/reference/mutations#deleteref) » dans la documentation sur l’API GraphQL ou « [Supprimer une référence](/rest/reference/git#delete-a-reference) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsque l’événement `delete` se produit.

```yaml
on:
  delete
```

### `deployment`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment) | n/a | Commit à déployer | Branche ou étiquette à déployer (vide en cas de création avec un SHA de commit)|

Exécute votre workflow lorsqu’un utilisateur crée un déploiement dans le dépôt du workflow. Les déploiements créés avec un SHA de commit peuvent ne pas avoir de référence Git. Pour plus d’informations sur les API permettant de créer un déploiement, consultez « [createDeployment](/graphql/reference/mutations#createdeployment) » dans la documentation sur l’API GraphQL ou « [Déploiements](/rest/reference/repos#deployments) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsque l’événement `deployment` se produit.

```yaml
on:
  deployment
```

### `deployment_status`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment_status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment_status) | n/a | Commit à déployer | Branche ou étiquette à déployer (vide en cas de commit)|

{% note %}

**Remarque :** Quand l’état d’un déploiement est défini sur `inactive`, aucune exécution de workflow n’est déclenchée.

{% endnote %}

Exécute votre workflow lorsqu’un tiers fournit un état de déploiement. Les déploiements créés avec un SHA de commit peuvent ne pas avoir de référence Git. Pour plus d’informations sur les API permettant de créer un statut de déploiement, consultez « [createDeploymentStatus](/graphql/reference/mutations#createdeploymentstatus) » dans la documentation sur l’API GraphQL ou « [Créer un état de déploiement](/rest/reference/deployments#create-a-deployment-status) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsque l’événement `deployment_status` se produit.

```yaml
on:
  deployment_status
```

{% ifversion discussions %}
### `discussion`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#discussion) | - `created`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `category_changed`<br/> - `answered`<br/> - `unanswered` | Dernier commit sur la branche par défaut | Branche par défaut |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Exécute votre workflow lorsqu’une discussion dans le dépôt du workflow est créée ou modifiée. Pour les activités liées aux commentaires sur une discussion, utilisez l’événement [`discussion_comment`](#discussion_comment). Pour plus d’informations sur les discussions, consultez « [À propos des discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions) ». Pour plus d’informations sur l’API GraphQL, consultez « [Discussion](/graphql/reference/objects#discussion) ».

Par exemple, vous pouvez exécuter un workflow lorsqu’une discussion a été créée (`created`), modifiée (`edited`) ou traitée (`answered`).

```yaml
on:
  discussion:
    types: [created, edited, answered]
```

### `discussion_comment`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#discussion_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Dernier commit sur la branche par défaut | Branche par défaut |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion_comment) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Exécute votre workflow lorsqu’un commentaire sur une discussion dans le dépôt du workflow est créé ou modifié. Pour une activité liée à une discussion plutôt qu’à des commentaires sur la discussion, utilisez l’événement [`discussion`](#discussion). Pour plus d’informations sur les discussions, consultez « [À propos des discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions) ». Pour plus d’informations sur l’API GraphQL, consultez « [Discussion](/graphql/reference/objects#discussion) ».

Par exemple, vous pouvez exécuter un workflow lorsqu’un commentaire de discussion a été créé (`created`) ou supprimé (`deleted`).

```yaml
on:
  discussion_comment:
    types: [created, deleted]
```

{% endif %}

### `fork`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`fork`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#fork) | n/a | Dernier commit sur la branche par défaut |  Branche par défaut |

{% data reusables.actions.branch-requirement %}

Exécute votre workflow lorsqu’un utilisateur duplique (fork) un dépôt. Pour plus d’informations sur l’API REST, consultez « [Créer une duplication (fork)](/rest/reference/repos#create-a-fork) ».

Par exemple, vous pouvez exécuter un workflow lorsque l’événement `fork` se produit.

```yaml
on:
  fork
```

### `gollum`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`gollum`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#gollum) | n/a | Dernier commit sur la branche par défaut |  Branche par défaut |

{% data reusables.actions.branch-requirement %}

Exécute votre workflow lorsqu’un utilisateur crée ou met à jour une page Wiki. Pour plus d’informations, consultez « [À propos des wikis](/communities/documenting-your-project-with-wikis/about-wikis) ».

Par exemple, vous pouvez exécuter un workflow lorsque l’événement `gollum` se produit.

```yaml
on:
  gollum
```

### `issue_comment`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issue_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Dernier commit sur la branche par défaut | Branche par défaut |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issue_comment) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Exécute votre workflow lorsqu’un commentaire sur un problème ou une demande de tirage (pull request) est créé, modifié ou supprimé. Pour plus d’informations sur les API de commentaires sur les problèmes, consultez « [IssueComment](/graphql/reference/objects#issuecomment) » dans la documentation sur l’API GraphQL ou « [Commentaires sur les problèmes](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsqu’un commentaire de problème ou demande de tirage a été créé (`created`) ou supprimé (`deleted`).

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

#### `issue_comment` sur les problèmes uniquement ou sur les demandes de tirage uniquement

L’événement `issue_comment` se produit pour les commentaires à la fois sur les problèmes et sur les demandes de tirage. Vous pouvez utiliser la propriété `github.event.issue.pull_request` dans une condition pour effectuer des actions différentes selon que l’objet de déclenchement était un problème ou une demande de tirage.

Par exemple, ce workflow exécute le travail `pr_commented` uniquement si l’événement `issue_comment` provient d’une demande de tirage. Il exécute le travail `issue_commented` uniquement si l’événement `issue_comment` provient d’un problème.

```yaml
on: issue_comment

jobs:
  pr_commented:
    # This job only runs for pull request comments
    name: PR comment
    if: {% raw %}${{ github.event.issue.pull_request }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo A comment on PR $NUMBER
        env:
          NUMBER: {% raw %}${{ github.event.issue.number }}{% endraw %}

  issue_commented:
    # This job only runs for issue comments
    name: Issue comment
    if: {% raw %}${{ !github.event.issue.pull_request }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo A comment on issue $NUMBER
        env:
          NUMBER: {% raw %}${{ github.event.issue.number }}{% endraw %}
```

### `issues`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issues`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | Dernier commit sur la branche par défaut | Branche par défaut |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issues) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Exécute votre workflow lorsqu’un problème dans le dépôt du workflow est créé ou modifié. Pour un activité liée à des commentaires dans un problème, utilisez l’événement [`issue_comment`](#issue_comment). Pour plus d’informations sur les problèmes, consultez « [À propos des problèmes](/issues/tracking-your-work-with-issues/about-issues) ». Pour plus d’informations sur les API de problème, consultez « [Issue](/graphql/reference/objects#issue) » dans la documentation sur l’API GraphQL ou « [Problèmes](/rest/reference/issues) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsqu’un problème a été ouvert (`opened`), modifié (`edited`) ou jalonné (`milestoned`).

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

### `label`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`label`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Dernier commit sur la branche par défaut | Branche par défaut |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#label) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Exécute votre workflow lorsqu’une étiquette du dépôt de votre workflow est créée ou modifiée. Pour plus d’informations sur les étiquettes, consultez « [Gestion des étiquettes](/issues/using-labels-and-milestones-to-track-work/managing-labels) ». Pour plus d’informations sur les API d’étiquette, consultez « [Label](/graphql/reference/objects#label) » dans la documentation sur l’API GraphQL ou « [Étiquettes](/rest/reference/issues#labels) » dans la documentation sur l’API REST.

Si vous souhaitez exécuter votre workflow lorsqu’une étiquette est ajoutée ou supprimée concernant un problème, une demande de tirage ou une discussion, utilisez plutôt les types d’activités `labeled` ou `unlabeled` pour les événements [`issues`](#issues), [`pull_request`](#pull_request), [`pull_request_target`](#pull_request_target) ou [`discussion`](#discussion).

Par exemple, vous pouvez exécuter un workflow lorsqu’une étiquette a été créée (`created`) ou supprimée (`deleted`).

```yaml
on:
  label:
    types: [created, deleted]
```

{% ifversion fpt or ghec  %}

### `merge_group`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`merge_group`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#merge_group) | `checks_requested` | SHA du groupe de fusion | Référence du groupe de fusion |

{% data reusables.pull_requests.merge-queue-beta %}

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Même si seul le type d’activité `checks_requested` est pris en charge, la spécification du type d’activité maintient votre workflow spécifique si d’autres types d’activité sont ajoutés par la suite. Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#merge_group) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Exécute votre workflow quand une demande de tirage (pull request) est ajoutée à une file d’attente de fusion, ce qui ajoute la demande de tirage (pull request) à un groupe de fusion. Pour plus d’informations, consultez « [Fusion d’une demande de tirage avec une file d’attente de fusion](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue) ».

Vous pouvez par exemple exécuter un workflow quand l’activité `checks_requested` s’est produite.

```yaml
on:
  merge_group:
    types: [checks_requested]

```

{% endif %}
### `milestone`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`milestone`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | Dernier commit sur la branche par défaut | Branche par défaut |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#milestone) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Exécute votre workflow lorsqu’un jalon dans le dépôt du workflow est créé ou modifié. Pour plus d’informations sur les jalons, consultez « [À propos des jalons](/issues/using-labels-and-milestones-to-track-work/about-milestones) ». Pour plus d’informations sur les API de jalon, consultez « [Milestone](/graphql/reference/objects#milestone) » dans la documentation sur l’API GraphQL ou « [Jalons](/rest/reference/issues#milestones) » dans la documentation sur l’API REST.

Si vous souhaitez exécuter votre workflow lorsqu’un problème est ajouté ou supprimé concernant un jalon, utilisez plutôt les types d’activités `milestoned` ou `demilestoned` pour l’événement [`issues`](#issues).

Par exemple, vous pouvez exécuter un workflow lorsqu’un jalon a été ouvert (`opened`) ou supprimé (`deleted`).

```yaml
on:
  milestone:
    types: [opened, deleted]
```

### `page_build`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`page_build`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#page_build) | n/a | Dernier commit sur la branche par défaut | n/a |

{% data reusables.actions.branch-requirement %}

Exécute votre workflow lorsqu’un utilisateur effectue des transmissions de type push à une branche qui est la source de publication pour {% data variables.product.prodname_pages %}, si {% data variables.product.prodname_pages %} est activé pour le dépôt. Pour plus d’informations sur les sources de publication {% data variables.product.prodname_pages %}, consultez « [Configuration d’une source de publication pour votre site GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) ». Pour plus d’informations sur l’API REST, consultez « [Pages](/rest/reference/repos#pages) ».

Par exemple, vous pouvez exécuter un workflow lorsque l’événement `page_build` se produit.

```yaml
on:
  page_build
```

### `project`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project) | - `created`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | Dernier commit sur la branche par défaut | Branche par défaut |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Le type d’activité `edited` fait référence au moment où un tableau de projet, et non une colonne ou une carte sur le tableau de projet, est modifié. Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Remarque** : Cet événement se produit uniquement pour les projets appartenant au dépôt du workflow, et non pour les projets appartenant à l’organisation ou à l’utilisateur, ou pour les projets appartenant à un autre dépôt.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**Remarque** : Cet événement se produit uniquement pour {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

Exécute votre workflow lorsqu’un tableau de projet est créé ou modifié. Pour une activité liée aux cartes ou aux colonnes d’un tableau de projet, utilisez plutôt les événements [`project_card`](#project_card) ou [`project_column`](#project_column). Pour plus d’informations sur les tableaux de projet, consultez « [À propos des tableaux de projet](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards) ». Pour plus d’informations sur les API de tableau de projet, consultez « [Project](/graphql/reference/objects#project) » dans la documentation sur l’API GraphQL ou « [Projets](/rest/reference/projects) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsqu’un projet a été créé (`created`) ou supprimé (`deleted`).

```yaml
on:
  project:
    types: [created, deleted]
```

### `project_card`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_card`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_card) | - `created`<br/>- `moved`<br/>- `converted` (converti) en problème<br/>- `edited`<br/>- `deleted` | Dernier commit sur la branche par défaut | Branche par défaut |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_card) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Remarque** : Cet événement se produit uniquement pour les projets appartenant au dépôt du workflow, et non pour les projets appartenant à l’organisation ou à l’utilisateur, ou pour les projets appartenant à un autre dépôt.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**Remarque** : Cet événement se produit uniquement pour {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

Exécute votre workflow lorsqu’une carte sur tableau de projet est créée ou modifiée. Pour une activité liée à des tableaux de projet ou à des colonnes d’un tableau de projet, utilisez plutôt l’événement [`project`](#project) ou [`project_column`](#project_column). Pour plus d’informations sur les tableaux de projet, consultez « [À propos des tableaux de projet](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards) ». Pour plus d’informations sur les API de carte de projet, consultez « [ProjectCard](/graphql/reference/objects#projectcard) » dans la documentation sur l’API GraphQL ou « [Cartes de projet](/rest/reference/projects#cards) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsqu’une carte de projet a été créée (`created`) ou supprimée (`deleted`).

```yaml
on:
  project_card:
    types: [created, deleted]
```

### `project_column`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_column`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | Dernier commit sur la branche par défaut | Branche par défaut |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_column) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Remarque** : Cet événement se produit uniquement pour les projets appartenant au dépôt du workflow, et non pour les projets appartenant à l’organisation ou à l’utilisateur, ou pour les projets appartenant à un autre dépôt.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**Remarque** : Cet événement se produit uniquement pour {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

Exécute votre workflow lorsqu’une colonne sur tableau de projet est créée ou modifiée. Pour une activité liée à des tableaux de projet ou à des cartes d’un tableau de projet, utilisez plutôt l’événement [`project`](#project) ou [`project_card`](#project_card). Pour plus d’informations sur les tableaux de projet, consultez « [À propos des tableaux de projet](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards) ». Pour plus d’informations sur les API de colonne de projet, consultez « [ProjectColumn](/graphql/reference/objects#projectcolumn) » dans la documentation sur l’API GraphQL ou « [Colonnes de projet](/rest/reference/projects#columns) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsqu’une colonne de projet a été créée (`created`) ou supprimée (`deleted`).

```yaml
on:
  project_column:
    types: [created, deleted]
```

### `public`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`public`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#public) | n/a | Dernier commit sur la branche par défaut |  Branche par défaut |

{% data reusables.actions.branch-requirement %}

Exécute votre workflow lorsque le dépôt de votre workflow passe de privé à public. Pour plus d’informations sur l’API REST, consultez « [Modifier des dépôts](/rest/reference/repos#edit) ».

Par exemple, vous pouvez exécuter un workflow lorsque l’événement `public` se produit.

```yaml
on:
  public
```

### `pull_request`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | Dernier commit de fusion sur la branche `GITHUB_REF` | Branche de fusion de demande de tirage `refs/pull/:prNumber/merge` |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request) ». Par défaut, un workflow s’exécute uniquement quand le type d’activité d’un événement `pull_request` est `opened`, `synchronize` ou `reopened`. Pour déclencher des workflows selon différents types d’activités, utilisez le mot clé `types`. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes) ».

{% endnote %}

{% note %}

**Remarque :** Les workflows ne s’exécutent pas sur une activité `pull_request` si la demande de tirage a un conflit de fusion. Le conflit de fusion doit d’abord être résolu.

À l’inverse, les workflows avec l’événement `pull_request_target` s’exécutent même si la demande de tirage a un conflit de fusion. Avant d’utiliser le déclencheur `pull_request_target`, vous devez être conscient des risques liés à la sécurité. Pour plus d’informations, consultez [`pull_request_target`](#pull_request_target).

{% endnote %}

Exécute votre workflow lorsqu’une activité sur une demande de tirage dans le dépôt du workflow se produit. Par exemple, si aucun type d’activité n’est spécifié, le workflow s’exécute lorsqu’une demande de tirage est ouverte ou rouverte, ou lorsque la branche principale de la demande de tirage est mise à jour. Pour une activité liée aux révisions de demande de tirage, aux commentaires de révision de demande de tirage ou aux commentaires de demande de tirage, utilisez plutôt les événements [`pull_request_review`](#pull_request_review), [`pull_request_review_comment`](#pull_request_review_comment) ou [`issue_comment`](#issue_comment). Pour plus d’informations sur les API de demande de tirage, consultez « [PullRequest](/graphql/reference/objects#pullrequest) » dans la documentation sur l’API GraphQL ou « [Demandes de tirage](/rest/reference/pulls) » dans la documentation sur l’API REST.

Notez que pour cet événement, `GITHUB_SHA` est le dernier commit de fusion de la branche de fusion de demande de tirage. Si vous souhaitez obtenir l’ID du dernier commit dans la branche principale de la demande de tirage, utilisez `github.event.pull_request.head.sha` à la place.

Par exemple, vous pouvez exécuter un workflow lorsqu’une demande de tirage a été ouverte ou rouverte.

```yaml
on:
  pull_request:
    types: [opened, reopened]
```

Vous pouvez utiliser le contexte d’événement pour mieux contrôler le moment où les travaux de votre workflow s’exécutent. Par exemple, ce workflow s’exécute lorsqu’une révision est demandée sur une demande de tirage, mais le travail `specific_review_requested` s’exécute uniquement lorsqu’une révision par `octo-team` est demandée.

```yaml
on:
  pull_request:
    types: [review_requested]
jobs:
  specific_review_requested:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.requested_team.name == 'octo-team'}}{% endraw %}
    steps:
      - run: echo 'A review from octo-team was requested'
```

#### Exécution de votre workflow en fonction de la branche de base ou de la branche de principale d’une demande de tirage

Vous pouvez utiliser le filtre `branches` ou `branches-ignore` afin de configurer votre workflow pour qu’il s’exécute uniquement sur les demandes de tirage qui ciblent des branches spécifiques. Pour plus d’informations, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) ».

Par exemple, ce workflow s’exécute lorsqu’un utilisateur ouvre une demande de tirage qui cible une branche dont le nom commence par `releases/` :

```yaml
on:
  pull_request:
    types:
      - opened
    branches:
      - 'releases/**'
```

{% note %}

**Remarque :** {% data reusables.actions.branch-paths-filter %} Par exemple, le workflow suivant s’exécute uniquement lorsqu’une demande de tirage qui inclut une modification apportée à un fichier JavaScript (`.js`) est ouverte sur une branche dont le nom commence par `releases/` :

```yaml
on:
  pull_request:
    types:
      - opened
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

Pour exécuter un travail en fonction du nom de branche principale de la demande de tirage (plutôt que du nom de branche de base de la demande de tirage), utilisez le contexte `github.head_ref` dans une condition. Par exemple, ce workflow s’exécute chaque fois qu’une demande de tirage est ouverte, mais le travail `run_if` s’exécute uniquement si la tête de la demande de tirage est une branche dont le nom commence par `releases/` :

```yaml
on:
  pull_request:
    types:
      - opened
jobs:
  run_if:
    if:  startsWith(github.head_ref, 'releases/')
    runs-on: ubuntu-latest
    steps:
      - run: echo "The head of this PR starts with 'releases/'"
```

#### Exécution de votre workflow en fonction des fichiers modifiés dans une demande de tirage

Vous pouvez également configurer votre workflow pour qu’il s’exécute lorsqu’une demande de tirage modifie des fichiers spécifiques. Pour plus d’informations, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) ».

Par exemple, ce workflow s’exécute lorsqu’une demande de tirage inclut une modification apportée à un fichier JavaScript (`.js`) :

```yaml
on:
  pull_request:
    paths:
      - '**.js'
```

{% note %}

**Remarque :** {% data reusables.actions.branch-paths-filter %} Par exemple, le workflow suivant s’exécute uniquement lorsqu’une demande de tirage qui inclut une modification apportée à un fichier JavaScript (`.js`) est ouverte sur une branche dont le nom commence par `releases/` :

```yaml
on:
  pull_request:
    types:
      - opened
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### Exécution de votre workflow lorsqu’une demande de tirage fusionne

Lorsqu’une demande de tirage fusionne, elle est automatiquement fermée. Pour exécuter un workflow lorsqu’une demande de tirage fusionne, utilisez le type d’événement `pull_request` `closed` avec une condition qui vérifie la valeur `merged` de l’événement. Par exemple, le workflow suivant s’exécute chaque fois qu’une demande de tirage se ferme. Le travail `if_merged` s’exécute uniquement si la demande de tirage a également été fusionnée.

```yaml
on:
  pull_request:
    types:
      - closed

jobs:
  if_merged:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo The PR was merged
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_comment` (utiliser `issue_comment`)

Pour exécuter votre workflow lorsqu’un commentaire sur une demande de tirage (et non sur une différence d’une demande de tirage) est créé, modifié ou supprimé, utilisez l’événement [`issue_comment`](#issue_comment). Pour une activité liée aux révisions de demande de tirage ou aux commentaires de révision de demande de tirage, utilisez les événements [`pull_request_review`](#pull_request_review) ou [`pull_request_review_comment`](#pull_request_review_comment).

### `pull_request_review`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | Dernier commit de fusion sur la branche `GITHUB_REF` | Branche de fusion de demande de tirage `refs/pull/:prNumber/merge` |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Exécute votre workflow lorsqu’une révision de demande de tirage est envoyée, modifiée ou ignorée. Une révision de demande de tirage est un groupe de commentaires de révision de demande de tirage en plus d’un commentaire de corps et d’un état. Pour une activité liée aux commentaires de révision de demande de tirage ou aux commentaires de demande de tirage, utilisez plutôt les événements [`pull_request_review_comment`](#pull_request_review_comment) ou [`issue_comment`](#issue_comment). Pour plus d’informations sur les API de révision de demande de tirage, consultez « [PullRequestReview](/graphql/reference/objects#pullrequest) » dans la documentation sur l’API GraphQL ou « [Révisions de demande de tirage](/rest/reference/pulls#reviews) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsqu’une révision de demande de tirage a été modifiée (`edited`) ou ignorée (`dismissed`).

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

#### Exécution d’un workflow lorsqu’une demande de tirage est approuvée

Pour exécuter votre workflow lorsqu’une demande de tirage a été approuvée, vous pouvez déclencher votre workflow avec le type `submitted` d’événement `pull_request_review`, puis vérifier l’état de révision avec la propriété `github.event.review.state`. Par exemple, ce workflow s’exécute chaque fois qu’une révision de demande de tirage est envoyée, mais le travail `approved` s’exécute uniquement si la révision soumise est une révision d’approbation :

```yaml
on:
  pull_request_review:
    types: [submitted]

jobs:
  approved:
    if: github.event.review.state == 'approved'
    runs-on: ubuntu-latest
    steps:
      - run: echo "This PR was approved"
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_review_comment`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review_comment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted`| Dernier commit de fusion sur la branche `GITHUB_REF` | Branche de fusion de demande de tirage `refs/pull/:prNumber/merge` |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review_comment) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Exécute votre workflow lorsqu’un commentaire de révision de demande de tirage est modifié. Un commentaire de révision de demande de tirage est un commentaire sur la différence d’une demande de tirage. Pour une activité liée aux révisions de demande de tirage ou aux commentaires de demande de tirage, utilisez plutôt les événements [`pull_request_review`](#pull_request_review) ou [`issue_comment`](#issue_comment). Pour plus d’informations sur les API de commentaire de révision de demande de tirage, consultez « [PullRequestReviewComment](/graphql/reference/objects#pullrequestreviewcomment) » dans la documentation sur l’API GraphQL ou « [Commentaires de révisions](/rest/reference/pulls#comments) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsqu’un commentaire de révision de demande de tirage a été créé (`created`) ou supprimé (`deleted`).

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_target`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | Dernier commit sur la branche de base de la demande de tirage | Branche de base de la demande de tirage |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_target) ». Par défaut, un workflow s’exécute uniquement quand le type d’activité d’un événement `pull_request_target` est `opened`, `synchronize` ou `reopened`. Pour déclencher des workflows selon différents types d’activités, utilisez le mot clé `types`. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes) ».

{% endnote %}

Exécute votre workflow lorsqu’une activité sur une demande de tirage dans le dépôt du workflow se produit. Par exemple, si aucun type d’activité n’est spécifié, le workflow s’exécute lorsqu’une demande de tirage est ouverte ou rouverte, ou lorsque la branche principale de la demande de tirage est mise à jour.

Cet événement s’exécute dans le contexte de la base de la demande de tirage, plutôt que dans le contexte du commit de fusion, comme l’événement `pull_request`. Cela empêche l’exécution de code non sécurisé à partir de la tête de la demande de tirage qui pourrait modifier votre dépôt ou voler des secrets que vous utilisez dans votre workflow. Cet événement permet à votre workflow d’effectuer des opérations comme placer des étiquettes ou effectuer des commentaires sur les demandes de tirage à partir de duplications. Évitez d’utiliser cet événement si vous devez générer ou exécuter du code à partir de la demande de tirage.

Pour garantir la sécurité des dépôts, les branches portant des noms qui correspondent à certains modèles (comme ceux qui ressemblent aux SHA) peuvent ne pas déclencher de workflows avec l’événement `pull_request_target`.

{% warning %}

**Avertissement :** Pour les workflows déclenchés par l’événement `pull_request_target`, l’autorisation d’accès en lecture/écriture au dépôt est accordée à `GITHUB_TOKEN`, sauf si la clé `permissions` est spécifiée et que le workflow peut accéder aux secrets, même lorsqu’il est déclenché à partir d’une duplication. Même si le workflow s’exécute dans le contexte de la base de la demande de tirage, vous devez vous assurer que vous n’extrayez pas, ne générez pas ou n’exécutez pas du code non approuvé à partir de la demande de tirage avec cet événement. De plus, tous les caches partagent la même étendue que la branche de base. Pour éviter l’empoisonnement du cache, vous ne devez pas enregistrer le cache s’il est possible que le contenu du cache ait été modifié. Pour plus d’informations, consultez « [Maintien de la sécurité de votre instance GitHub Actions et vos workflows : Prévention des demandes pwn](https://securitylab.github.com/research/github-actions-preventing-pwn-requests) » sur le site web GitHub Security Lab.

{% endwarning %}

Par exemple, vous pouvez exécuter un workflow lorsqu’une demande de tirage a été attribuée (`assigned`), ouverte (`opened`), synchronisée (`synchronize`) ou rouverte (`reopened`).

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

#### Exécution de votre workflow en fonction de la branche de base ou de la branche de principale d’une demande de tirage

Vous pouvez utiliser le filtre `branches` ou `branches-ignore` afin de configurer votre workflow pour qu’il s’exécute uniquement sur les demandes de tirage qui ciblent des branches spécifiques. Pour plus d’informations, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) ».

Par exemple, ce workflow s’exécute lorsqu’un utilisateur ouvre une demande de tirage qui cible une branche dont le nom commence par `releases/` :

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:
      - 'releases/**'
```

{% note %}

**Remarque :** {% data reusables.actions.branch-paths-filter %} Par exemple, le workflow suivant s’exécute uniquement lorsqu’une demande de tirage qui inclut une modification apportée à un fichier JavaScript (`.js`) est ouverte sur une branche dont le nom commence par `releases/` :

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

Pour exécuter un travail en fonction du nom de branche principale de la demande de tirage (plutôt que du nom de branche de base de la demande de tirage), utilisez le contexte `github.head_ref` dans une condition. Par exemple, ce workflow s’exécute chaque fois qu’une demande de tirage est ouverte, mais le travail `run_if` s’exécute uniquement si la tête de la demande de tirage est une branche dont le nom commence par `releases/` :

```yaml
on:
  pull_request:
    types:
      - opened
jobs:
  run_if:
    if:  startsWith(github.head_ref, 'releases/')
    runs-on: ubuntu-latest
    steps:
      - run: echo "The head of this PR starts with 'releases/'"
```

#### Exécution de votre workflow en fonction des fichiers modifiés dans une demande de tirage

Vous pouvez utiliser le filtre `paths` ou `paths-ignore` afin de configurer votre workflow pour qu’il s’exécute lorsqu’une demande de tirage modifie des fichiers spécifiques. Pour plus d’informations, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) ».

Par exemple, ce workflow s’exécute lorsqu’une demande de tirage inclut une modification apportée à un fichier JavaScript (`.js`) :

```yaml
on:
  pull_request_target:
    paths:
      - '**.js'
```

{% note %}

**Remarque :** {% data reusables.actions.branch-paths-filter %} Par exemple, le workflow suivant s’exécute uniquement lorsqu’une demande de tirage qui inclut une modification apportée à un fichier JavaScript (`.js`) est ouverte sur une branche dont le nom commence par `releases/` :

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### Exécution de votre workflow lorsqu’une demande de tirage fusionne

Lorsqu’une demande de tirage fusionne, elle est automatiquement fermée. Pour exécuter un workflow lorsqu’une demande de tirage fusionne, utilisez le type d’événement `pull_request_target` `closed` avec une condition qui vérifie la valeur `merged` de l’événement. Par exemple, le workflow suivant s’exécute chaque fois qu’une demande de tirage se ferme. Le travail `if_merged` s’exécute uniquement si la demande de tirage a également été fusionnée.

```yaml
on:
  pull_request_target:
    types:
      - closed

jobs:
  if_merged:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo The PR was merged
```

### `push`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`push`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#push) | n/a | Quand vous supprimez une branche, le SHA dans l’exécution du workflow(et ses références associées) revient à la branche par défaut du dépôt. | Référence mise à jour |

{% note %}

**Remarque :** La charge utile du webhook disponible pour GitHub Actions n’inclut pas les attributs `added`, `removed` et `modified` dans l’objet `commit`. Vous pouvez récupérer l’objet de commit complet à l’aide de l’API. Pour plus d’informations, consultez « [Commit](/graphql/reference/objects#commit) » dans la documentation sur l’API GraphQL ou « [Obtenir un commit](/rest/reference/commits#get-a-commit) » dans la documentation sur l’API REST.

{% endnote %}

{% note %}

**Remarque** : Un événement n’est pas créé lorsque vous poussez (push) plus de trois étiquettes à la fois.

{% endnote %}

Exécute votre workflow lorsque vous poussez (push) un commit ou une étiquette.

Par exemple, vous pouvez exécuter un workflow lorsque l’événement `push` se produit.

```yaml
on:
  push
```

{% note %}

**Remarque** : Quand un événement de webhook `push` déclenche une exécution de workflow, le champ « poussé par » de l’IU d’Actions affiche le compte du pousseur et non celui de l’auteur ou du commiteur. Toutefois, si les changements sont poussés vers un dépôt à l’aide de l’authentification SSH et d’une clé de déploiement, le champ « poussé par » indique l’administrateur de dépôt qui a vérifié la clé de déploiement au moment où elle a été ajoutée à un dépôt.

{% endnote %}

#### Exécution de votre workflow uniquement lorsqu’une transmission de type push vers des branches spécifiques se produit

Vous pouvez utiliser le filtre `branches` ou `branches-ignore` afin de configurer votre workflow pour qu’il s’exécute uniquement lorsque des branches spécifiques sont poussées (par push). Pour plus d’informations, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore) ».

Par exemple, ce workflow s’exécute quand un utilisateur pousse (par push) vers `main` ou vers une branche qui commence par `releases/`.

```yaml
on:
  push:
    branches:
      - 'main'
      - 'releases/**'
```

{% note %}

**Remarque :** {% data reusables.actions.branch-paths-filter %} Par exemple, le workflow suivant s’exécute uniquement lorsqu’une transmission de type push qui inclut une modification apportée à un fichier JavaScript (`.js`) est effectuée sur une branche dont le nom commence par `releases/` :

```yaml
on:
  push:
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### Exécution de votre workflow uniquement lorsqu’une transmission de type push d’étiquettes spécifiques se produit

Vous pouvez utiliser le filtre `tags` ou `tags-ignore` pour configurer votre workflow afin qu’il s’exécute uniquement quand des étiquettes spécifiques sont poussées. Pour plus d’informations, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore) ».

Par exemple, ce workflow s’exécute quand un utilisateur pousse (par push) une étiquette qui commence par `v1.`.

```yaml
on:
  push:
    tags:
      - v1.**
```

#### Exécution de votre workflow uniquement lorsqu’une transmission de type push affecte des fichiers spécifiques

Vous pouvez utiliser le filtre `paths` ou `paths-ignore` afin de configurer votre workflow pour qu’il s’exécute lorsqu’une transmission de type push à des fichiers spécifiques se produit. Pour plus d’informations, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) ».

Par exemple, ce workflow s’exécute lorsqu’un utilisateur pousse (par push) une modification à un fichier JavaScript (`.js`) :

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**Remarque :** {% data reusables.actions.branch-paths-filter %} Par exemple, le workflow suivant s’exécute uniquement lorsqu’une transmission de type push qui inclut une modification apportée à un fichier JavaScript (`.js`) est effectuée sur une branche dont le nom commence par `releases/` :

```yaml
on:
  push:
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

### `registry_package`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`registry_package`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#package) | - `published`<br/>- `updated` | Commit du package publié | Branche ou étiquette du package publié |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#registry_package) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Exécute votre workflow lorsqu’une activité liée à {% data variables.product.prodname_registry %} se produit dans votre dépôt. Pour plus d’informations, consultez la « [documentation de {% data variables.product.prodname_registry %}](/packages) ».

Par exemple, vous pouvez exécuter un workflow quand une nouvelle version de package est `published`.

```yaml
on:
  registry_package:
    types: [published]
```

### `release`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`release`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | Dernier commit dans la version étiquetée | Référence d’étiquette de la version `refs/tags/<tag_name>` |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#release) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% note %}

**Remarque :** Les workflows ne sont pas déclenchés pour les types d’activités `created`, `edited` ou `deleted` pour les versions brouillon. Lorsque vous créez votre version par le biais de l’interface utilisateur du navigateur {% data variables.product.product_name %}, votre version peut être enregistrée automatiquement en tant que brouillon.

{% endnote %}

{% note %}

**Remarque :** Le type `prereleased` ne se déclenche pas pour les préversions publiées à partir de versions brouillon, mais le type `published` se déclenche. Si vous souhaitez qu’un workflow s’exécute quand les préversions *et* stables sont publiées, abonnez-vous au type `published` plutôt qu’à `released` et `prereleased`.

{% endnote %}

Exécute votre workflow lorsqu’une activité de version dans votre dépôt se produit. Pour plus d’informations sur les API de version, consultez « [Release](/graphql/reference/objects#release) » dans la documentation sur l’API GraphQL ou « [Versions](/rest/reference/releases) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsqu’une version a été publiée (`published`).

```yaml
on:
  release:
    types: [published]
```

### `repository_dispatch`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [repository_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) | Custom | Dernier commit sur la branche par défaut | Branche par défaut |

{% data reusables.actions.branch-requirement %}

Vous pouvez utiliser l’API {% data variables.product.product_name %} pour déclencher un événement de webhook appelé [`repository_dispatch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) lorsque vous souhaitez déclencher un workflow pour une activité qui se produit en dehors de {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Créer un événement de répartition de dépôt](/rest/reference/repos#create-a-repository-dispatch-event) ».

Lorsque vous effectuez une demande de création d’un événement `repository_dispatch`, vous devez spécifier un `event_type` pour décrire le type d’activité. Par défaut, tous les types d’activités `repository_dispatch` déclenchent l’exécution d’un workflow. Vous pouvez utiliser le mot clé `types` pour limiter l’exécution de votre workflow lorsqu’une valeur `event_type` spécifique est envoyée dans la charge utile de webhook `repository_dispatch`.

```yaml
on:
  repository_dispatch:
    types: [on-demand-test]
```

{% note %}

**Remarque :** La valeur `event_type` de l’étiquette est limitée à 100 caractères.

{% endnote %}

Toutes les données que vous envoyez via le paramètre `client_payload` seront disponibles dans le contexte `github.event` de votre workflow. Par exemple, si vous envoyez ce corps de demande lorsque vous créez un événement de répartition de dépôt :

```json
{
  "event_type": "test_result",
  "client_payload": {
    "passed": false,
    "message": "Error: timeout"
  }
}
```

Vous pouvez ensuite accéder à la charge utile dans un workflow de la manière suivante :

```yaml
on:
  repository_dispatch:
    types: [test_result]

jobs:
  run_if_failure:
    if: {% raw %}${{ !github.event.client_payload.passed }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - env:
          MESSAGE: {% raw %}${{ github.event.client_payload.message }}{% endraw %}
        run: echo $MESSAGE
```

### `schedule`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| n/a | n/a | Dernier commit sur la branche par défaut | Branche par défaut | Lorsque le workflow planifié est défini comme devant s’exécuter. Un workflow planifié utilise la [syntaxe cron POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Pour plus d’informations, consultez « [Déclenchement d’un workflow avec des événements](/articles/configuring-a-workflow/#triggering-a-workflow-with-events) ». |

{% data reusables.actions.schedule-delay %}

L’événement `schedule` vous permet de déclencher un workflow à une heure planifiée.

{% data reusables.repositories.actions-scheduled-workflow-example %}

La syntaxe cron comporte cinq champs séparés par un espace, chaque champ représentant une unité de temps.

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)
│ │ │ │ │
│ │ │ │ │
│ │ │ │ │
* * * * *
```

Vous pouvez utiliser ces opérateurs dans n’importe lequel de ces cinq champs :

| Opérateur | Description | Exemple |
| -------- | ----------- | ------- |
| * | Valeur quelconque | `15 * * * *` s’exécute à chaque minute 15 de chaque heure de chaque jour. |
| , | Séparateur de liste de valeurs | `2,10 4,5 * * *` s’exécute à la minute 2 et 10 de la 4ème et 5ème heure de chaque jour. |
| - | Plage de valeurs | `30 4-6 * * *` s’exécute à la minute 30 de la 4ème, 5ème et 6ème heure. |
| / | Valeurs d’étape | `20/15 * * * *` s’exécute toutes les 15 minutes de la minute 20 à 59 (minutes 20, 35 et 50). |

{% note %}

**Remarque :** {% data variables.product.prodname_actions %} ne prend pas en charge la syntaxe `@yearly`, `@monthly`, `@weekly`, `@daily`, `@hourly` et `@reboot` non standard.

{% endnote %}

Vous pouvez utiliser [crontab guru](https://crontab.guru/) pour générer votre syntaxe cron et vérifier l’heure à laquelle elle s’exécutera. Pour vous aider à commencer, il existe également une liste d’[exemples crontab guru](https://crontab.guru/examples.html).

Les notifications pour les workflows planifiés sont envoyées à l’utilisateur qui a apporté la dernière modification à la syntaxe cron dans le fichier de workflow. Pour plus d’informations, consultez « [Notifications pour les exécutions de workflow](/actions/monitoring-and-troubleshooting-workflows/notifications-for-workflow-runs) ».

### `status`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#status) | n/a | Dernier commit sur la branche par défaut | n/a |

{% data reusables.actions.branch-requirement %}

Exécute votre workflow lorsque l’état d’un commit Git change. Par exemple, les commits peuvent être marqués comme `error`, `failure`, `pending` ou `success`. Si vous souhaitez fournir plus de détails sur le changement d’état, vous pouvez utiliser l’événement [`check_run`](#check_run). Pour plus d’informations sur les API d’état de commit, consultez « [Status](/graphql/reference/objects#statue) » dans la documentation sur l’API GraphQL ou « [États](/rest/reference/commits#commit-statuses) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsque l’événement `status` se produit.

```yaml
on:
  status
```

Si vous souhaitez exécuter un travail dans votre workflow en fonction du nouvel état de commit, vous pouvez utiliser le contexte `github.event.state`. Par exemple, le workflow suivant se déclenche lorsqu’un état de commit change, mais le travail `if_error_or_failure` s’exécute uniquement si le nouvel état de commit est `error` ou `failure`.

```yaml
on:
  status
jobs:
  if_error_or_failure:
    runs-on: ubuntu-latest
    if: >-
      github.event.state == 'error' ||
      github.event.state == 'failure'
    steps:
      - env:
          DESCRIPTION: {% raw %}${{ github.event.description }}{% endraw %}
        run: |
          echo The status is error or failed: $DESCRIPTION
```

### `watch`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`watch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#watch) | - `started` | Dernier commit sur la branche par défaut | Branche par défaut |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Même si seul le type d’activité `started` est pris en charge, la spécification du type d’activité maintient votre workflow spécifique si d’autres types d’activité sont ajoutés par la suite. Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#watch) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Exécute votre workflow lorsque le dépôt du workflow est marqué d’une étoile. Pour plus d’informations sur les API de demande de tirage, consultez « [addStar](/graphql/reference/mutations#addstar) » dans la documentation sur l’API GraphQL ou « [Mise en vedette](/rest/reference/activity#starring) » dans la documentation sur l’API REST.

Par exemple, vous pouvez exécuter un workflow lorsqu’un utilisateur met en vedette un dépôt, qui est le type d’activité `started` pour un événement espion.

```yaml
on:
  watch:
    types: [started]
```

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}

### `workflow_call`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| Identique au workflow appelant | n/a | Identique au workflow appelant | Identique au workflow appelant |

`workflow_call` est utilisé pour indiquer qu’un workflow peut être appelé par un autre workflow. Lorsqu’un workflow est déclenché avec l’événement `workflow_call`, la charge utile d’événement dans le workflow appelé est la même charge utile d’événement que celle du workflow appelant. Pour plus d’informations, consultez « [Réutilisation de workflows](/actions/learn-github-actions/reusing-workflows) ».

L’exemple ci-dessous exécute le workflow uniquement lorsqu’il est appelé à partir d’un autre workflow :

```yaml
on: workflow_call
```

{% endif %}

### `workflow_dispatch`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [workflow_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_dispatch) | n/a | Dernier commit sur la branche `GITHUB_REF` | Branche qui a reçu la distribution |

Pour déclencher manuellement un workflow, utilisez l’événement `workflow_dispatch`. Vous pouvez déclencher manuellement une exécution de workflow à l’aide de l’API {% data variables.product.product_name %}, de {% data variables.product.prodname_cli %} ou de l’interface de navigateur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Exécution manuelle d’un workflow](/actions/managing-workflow-runs/manually-running-a-workflow) ».

```yaml
on: workflow_dispatch
```

#### Fourniture d’entrées

Vous pouvez configurer des propriétés d’entrée personnalisées, des valeurs d’entrée par défaut et des entrées requises pour l’événement directement dans votre workflow. Lorsque vous déclenchez l’événement, vous pouvez fournir la valeur `ref` et toutes les valeurs `inputs`. Quand le workflow s’exécute, vous pouvez accéder aux valeurs d’entrée dans le contexte {% ifversion actions-unified-inputs %}`inputs`{% else %}`github.event.inputs`{% endif %}. Pour plus d’informations, consultez « [Contextes](/actions/learn-github-actions/contexts) ».

{% data reusables.actions.inputs-vs-github-event-inputs %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5511 %} Cet exemple définit les entrées appelées `logLevel`, `tags` et `environment`. Vous passez des valeurs pour ces entrées au workflow lorsque vous l’exécutez. Ce workflow affiche ensuite les valeurs dans le journal, en utilisant les propriétés de contexte {% ifversion actions-unified-inputs %}`inputs.logLevel`, `inputs.tags` et `inputs.environment`{% else %}`github.event.inputs.logLevel`, `github.event.inputs.tags` et `github.event.inputs.environment`{% endif %}.

```yaml
on:
  workflow_dispatch:
    inputs:
      logLevel:
        description: 'Log level'
        required: true
        default: 'warning'
        type: choice
        options:
        - info
        - warning
        - debug
      tags:
        description: 'Test scenario tags'
        required: false
        type: boolean
      environment:
        description: 'Environment to run tests against'
        type: environment
        required: true

jobs:
  log-the-inputs:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Log level: $LEVEL"
          echo "Tags: $TAGS"
          echo "Environment: $ENVIRONMENT"
        env:
          LEVEL: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.logLevel }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.logLevel }}{% endraw %}{% endif %}
          TAGS: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.tags }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.tags }}{% endraw %}{% endif %}
          ENVIRONMENT: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.environment }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.environment }}{% endraw %}{% endif %}
```

Si vous exécutez ce workflow à partir d’un navigateur, vous devez entrer manuellement des valeurs pour les entrées requises avant l’exécution du workflow.

![Saisie d’entrées pour un workflow](/assets/images/help/images/workflow-dispatch-inputs.png)

Vous pouvez également passer des entrées lorsque vous exécutez un workflow à partir d’un script ou à l’aide de {% data variables.product.prodname_cli %}. Par exemple :

```
gh workflow run run-tests.yml -f logLevel=warning -f tags=false -f environment=staging
```

Pour plus d’informations, consultez les informations sur {% data variables.product.prodname_cli %} dans « [Exécution manuelle d’un workflow](/actions/managing-workflow-runs/manually-running-a-workflow) ».

{% else %} Cet exemple définit les entrées `name` et `home`, et les affiche à l’aide des contextes {% ifversion actions-unified-inputs %}`inputs.name` et `inputs.home`{% else %}`github.event.inputs.name` et `github.event.inputs.home`{% endif %}. Si aucune valeur `home` n’est fournie, la valeur par défaut « The Octoverse » s’affiche.

```yaml
name: Manually triggered workflow
on:
  workflow_dispatch:
    inputs:
      name:
        description: 'Person to greet'
        required: true
        default: 'Mona the Octocat'
      home:
        description: 'location'
        required: false
        default: 'The Octoverse'

jobs:
  say_hello:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo Hello $NAME!
          echo -in $HOME
        env:
          NAME: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.name }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.name }}{% endraw %}{% endif %}
          HOME: {% ifversion actions-unified-inputs %}{% raw %}${{ github.event.inputs.home }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.home }}{% endraw %}{% endif %}
```
{% endif %}

### `workflow_run`

| Charge utile d’événement de webhook | Types d'activités | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_run) | - `completed`<br/>- `requested` | Dernier commit sur la branche par défaut | Branche par défaut |

{% note %}

**Remarque** : {% data reusables.developer-site.multiple_activity_types %} Le type d’activité `requested` ne se produit pas lorsqu’un workflow est réexécuté. Pour plus d’informations sur chaque type d’activité, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run) ». {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Remarque :** Vous ne pouvez pas utiliser `workflow_run` pour chaîner plus de trois niveaux de workflows. Par exemple, si vous tentez de déclencher cinq workflows (nommés `B` à `F`) pour qu’ils s’exécutent de manière séquentielle après l’exécution d’un workflow initial `A` (autrement dit : `A` → `B` → `C` → `D` → `E` → `F`), les workflows `E` et `F` ne sont pas exécutés.

{% endnote %}

Cet événement se produit lorsqu’une exécution de workflow est demandée ou terminée. Il vous permet d’exécuter un workflow en fonction de l’exécution ou de l’achèvement d’un autre workflow. Le workflow démarré par l’événement `workflow_run` est en mesure d’accéder aux secrets et aux jetons d’écriture, même si le workflow précédent ne l’était pas. Cela s’avère utile lorsque le workflow précédent est intentionnellement non privilégié, mais que vous devez effectuer une action privilégiée dans un workflow ultérieur.

Dans cet exemple, un workflow est configuré pour s’exécuter une fois le workflow « Exécuter les tests » distinct terminé.

```yaml
on:
  workflow_run:
    workflows: [Run Tests]
    types:
      - completed
```

Si vous spécifiez plusieurs `workflows` pour l’événement `workflow_run`, un seul des workflows doit s’exécuter. Par exemple, un workflow avec le déclencheur suivant s’exécute chaque fois que le workflow « Préproduction » ou le workflow « Lab » se termine.

```yaml
on:
  workflow_run:
    workflows: [Staging, Lab]
    types:
      - completed
```

#### Exécution d’un workflow en fonction de la conclusion d’un autre workflow

Une exécution de workflow est déclenchée indépendamment de la conclusion du workflow précédent. Si vous souhaitez exécuter un travail ou une étape en fonction du résultat du workflow déclencheur, vous pouvez utiliser une condition avec la propriété `github.event.workflow_run.conclusion`. Par exemple, ce workflow s’exécute chaque fois qu’un workflow nommé « Build » se termine, mais le travail `on-success` s’exécute uniquement si le workflow « Build » a réussi, et le travail `on-failure` s’exécute uniquement si le workflow « Build » a échoué :

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [completed]

jobs:
  on-success:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'success' }}{% endraw %}
    steps:
      - run: echo 'The triggering workflow passed'
  on-failure:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'failure' }}{% endraw %}
    steps:
      - run: echo 'The triggering workflow failed'
```

#### Limitation de votre workflow à exécuter en fonction des branches

Vous pouvez utiliser le filtre `branches` ou `branches-ignore` pour spécifier les branches sur lesquelles le workflow déclencheur doit s’exécuter afin de déclencher votre workflow. Pour plus d’informations, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_runbranchesbranches-ignore) ». Par exemple, un workflow avec le déclencheur suivant s’exécute uniquement lorsque le workflow nommé `Build` s’exécute sur une branche nommée `canary`.

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [requested]
    branches: [canary]
```

#### Utilisation de données à partir du workflow déclencheur

Vous pouvez accéder à la [charge utile d’événement `workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run) qui correspond au workflow ayant déclenché votre workflow. Par exemple, si votre workflow déclencheur génère des artefacts, un workflow déclenché avec l’événement `workflow_run` peut accéder à ces artefacts.

Le workflow suivant charge les données en tant qu’artefact. (Dans cet exemple simplifié, les données sont le numéro de la demande de tirage.)

```yaml
name: Upload data

on:
  pull_request:

jobs:
  upload:
    runs-on: ubuntu-latest

    steps:
      - name: Save PR number
        env:
          PR_NUMBER: {% raw %}${{ github.event.number }}{% endraw %}
        run: |
          mkdir -p ./pr
          echo $PR_NUMBER > ./pr/pr_number
      - uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: pr_number
          path: pr/
```

Lorsqu’une exécution du workflow ci-dessus se termine, cela déclenche une exécution du workflow suivant. Le workflow suivant utilise le contexte `github.event.workflow_run` et l’API REST {% data variables.product.product_name %} pour télécharger l’artefact chargé par le workflow ci-dessus, décompresse l’artefact téléchargé, puis commente la demande de tirage dont le numéro a été chargé en tant qu’artefact.

```yaml
name: Use the data

on:
  workflow_run:
    workflows: [Upload data]
    types:
      - completed

jobs:
  download:
    runs-on: ubuntu-latest
    steps:
      - name: 'Download artifact'
        uses: {% data reusables.actions.action-github-script %}
        with:
          script: |
            let allArtifacts = await github.rest.actions.listWorkflowRunArtifacts({
               owner: context.repo.owner,
               repo: context.repo.repo,
               run_id: context.payload.workflow_run.id,
            });
            let matchArtifact = allArtifacts.data.artifacts.filter((artifact) => {
              return artifact.name == "pr_number"
            })[0];
            let download = await github.rest.actions.downloadArtifact({
               owner: context.repo.owner,
               repo: context.repo.repo,
               artifact_id: matchArtifact.id,
               archive_format: 'zip',
            });
            let fs = require('fs');
            fs.writeFileSync(`${process.env.GITHUB_WORKSPACE}/pr_number.zip`, Buffer.from(download.data));

      - name: 'Unzip artifact'
        run: unzip pr_number.zip

      - name: 'Comment on PR'
        uses: {% data reusables.actions.action-github-script %}
        with:
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          script: |
            let fs = require('fs');
            let issue_number = Number(fs.readFileSync('./pr_number'));
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: issue_number,
              body: 'Thank you for the PR!'
            });
```
