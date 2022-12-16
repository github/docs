---
title: Déclenchement d’un workflow
shortTitle: Trigger a workflow
intro: 'Comment déclencher automatiquement des workflows {% data variables.product.prodname_actions %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: cd91670d3d06d4d8f954afa114f6c4f189825d86
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191902'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des déclencheurs de workflow

{% data reusables.actions.about-triggers %}

Les déclencheurs de workflow sont définis avec la clé `on`. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#on) ».

Les étapes suivantes se produisent pour déclencher une exécution de workflow :

1. Un événement se produit sur votre dépôt. Une référence Git et un SHA de commit sont associés à l’événement.
1. {% data variables.product.product_name %} recherche dans le répertoire `.github/workflows` de votre dépôt les fichiers de workflow qui sont présents dans la référence Git ou le SHA de commit associés de l’événement.
1. Une exécution de workflow est déclenchée pour tous les workflows qui ont des valeurs `on:` correspondant à l’événement de déclenchement. Certains événements nécessitent également que le fichier de workflow soit présent sur la branche par défaut du dépôt pour qu’il s’exécute.

  Chaque exécution de workflow utilise la version du workflow présente dans la référence Git ou le SHA de commit associés de l’événement. Lorsqu’un workflow s’exécute, {% data variables.product.product_name %} définit les variables d’environnement `GITHUB_SHA` (SHA de commit) et `GITHUB_REF` (référence Git) dans l’environnement de l’exécuteur. Pour en savoir plus, consultez « [Utilisation de variables d’environnement](/actions/automating-your-workflow-with-github-actions/using-environment-variables) ».

### Déclenchement d’un workflow à partir d’un workflow

{% data reusables.actions.actions-do-not-trigger-workflows %} Pour plus d’informations, consultez « [Authentification avec le GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token) ».

Si vous souhaitez déclencher un workflow à partir d’une exécution de workflow, vous pouvez utiliser un {% data variables.product.pat_generic %} au lieu de `GITHUB_TOKEN` pour déclencher des événements qui nécessitent un jeton. Vous devez créer un {% data variables.product.pat_generic %} et le stocker en tant que secret. Pour réduire vos coûts d’utilisation de {% data variables.product.prodname_actions %}, veillez à ne pas créer d’exécutions de workflow récursives ou involontaires. Pour plus d’informations sur la création d’un {% data variables.product.pat_generic %}, consultez « [Création d’un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) ». Pour plus d’informations sur le stockage d’un {% data variables.product.pat_generic %} en tant que secret, consultez « [Création et stockage de secrets chiffrés](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) ».

Par exemple, le workflow suivant utilise un {% data variables.product.pat_generic %} (stocké en tant que secret appelé `MY_TOKEN`) pour ajouter une étiquette à un problème via {% data variables.product.prodname_cli %}. Tous les workflows qui s’exécutent lorsqu’une étiquette est ajoutée s’exécutent une fois cette étape effectuée.

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GITHUB_TOKEN: {% raw %}${{ secrets.MY_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

À l’inverse, le workflow suivant utilise `GITHUB_TOKEN` pour ajouter une étiquette à un problème. Il ne déclenche aucun workflow qui s’exécute lorsqu’une étiquette est ajoutée.

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

## Utilisation d’événements pour déclencher des workflows

Utilisez la clé `on` pour spécifier quels événements déclenchent votre workflow. Pour plus d’informations sur les événements que vous pouvez utiliser, consultez « [Événements qui déclenchent des workflows](/actions/using-workflows/events-that-trigger-workflows) ».

### Utilisation d’un seul événement

{% data reusables.actions.on-single-example %}

### Utilisation de plusieurs événements

{% data reusables.actions.on-multiple-example %}

### Utilisation de types d’activités et de filtres avec plusieurs événements

Vous pouvez utiliser des types d’activités et des filtres pour contrôler davantage le moment où votre workflow s’exécute. Pour plus d’informations, consultez [Utilisation de types d’activités d’événement](#using-event-activity-types) et [Utilisation de filtres](#using-filters). {% data reusables.actions.actions-multiple-types %}

## Utilisation de types d’activités d’événement

{% data reusables.actions.actions-activity-types %}

## Utilisation de filtres

{% data reusables.actions.actions-filters %}

### Utilisation de filtres afin de cibler des branches spécifiques pour les événements de demande de tirage (pull request)

{% data reusables.actions.workflows.section-triggering-a-workflow-branches %}

### Utilisation de filtres afin de cibler des branches ou des étiquettes spécifiques pour les événements de transmission de type push

{% data reusables.actions.workflows.section-run-on-specific-branches-or-tags %}

### Utilisation de filtres afin de cibler des chemins spécifiques pour les événements de demande de tirage (pull request) ou de transmission de type push

{% data reusables.actions.workflows.section-triggering-a-workflow-paths %}

### Utilisation de filtres afin de cibler des branches spécifiques pour les événements d’exécution de workflow

{% data reusables.actions.workflows.section-specifying-branches %}

## Définition d’entrées pour les workflows déclenchés manuellement

{% data reusables.actions.workflow-dispatch-inputs %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## Définition d’entrées, de sorties et de secrets pour les workflows réutilisables

{% data reusables.actions.reusable-workflows-enterprise-beta %}

Vous pouvez définir des entrées et des secrets qu’un workflow réutilisable doit recevoir d’un workflow appelant. Vous pouvez également spécifier des sorties qu’un workflow réutilisable met à la disposition d’un workflow appelant. Pour plus d’informations, consultez « [Réutilisation de workflows](/actions/using-workflows/reusing-workflows) ».

{% endif %}

## Utilisation des informations sur l’événement

Des informations sur l’événement qui a déclenché une exécution de workflow sont disponibles dans le contexte `github.event`. Les propriétés du contexte `github.event` dépendent du type d’événement qui a déclenché le workflow. Par exemple, un workflow déclenché lorsqu’un problème est étiqueté aurait des informations concernant le problème et l’étiquette.

### Affichage de toutes les propriétés d’un événement

Reportez-vous à la documentation des événements de webhook pour connaître les propriétés courantes et obtenir des exemples de charges utiles. Pour plus d’informations, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads) ».

Vous pouvez également imprimer l’intégralité du contexte `github.event` pour voir quelles propriétés sont disponibles pour l’événement qui a déclenché votre workflow :

```yaml
jobs:
  print_context:
    runs-on: ubuntu-latest
    steps:
      - env:
          EVENT_CONTEXT: {% raw %}${{ toJSON(github.event) }}{% endraw %}
        run: |
          echo $EVENT_CONTEXT
```

### Accès et utilisation de propriétés d’événement

Vous pouvez utiliser le contexte `github.event` dans votre workflow. Par exemple, le workflow suivant s’exécute lorsqu’une demande de tirage qui change `package*.json`, `.github/CODEOWNERS` ou `.github/workflows/**` est ouverte. Si l’auteur de la demande de tirage (`github.event.pull_request.user.login`) n’est pas `octobot` ou `dependabot[bot]`, le workflow utilise l’{% data variables.product.prodname_cli %} pour étiqueter et commenter la demande de tirage (`github.event.pull_request.number`).

```yaml
on:
  pull_request:
    types:
      - opened
    paths:
      - '.github/workflows/**'
      - '.github/CODEOWNERS'
      - 'package*.json'

jobs:
  triage:
    if: >-
      github.event.pull_request.user.login != 'octobot' &&
      github.event.pull_request.user.login != 'dependabot[bot]'
    runs-on: ubuntu-latest
    steps:
      - name: "Comment about changes we can't accept"
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          PR: {% raw %}${{ github.event.pull_request.html_url }}{% endraw %}
        run: |
          gh pr edit $PR --add-label 'invalid'
          gh pr comment $PR --body 'It looks like you edited `package*.json`, `.github/CODEOWNERS`, or `.github/workflows/**`. We do not allow contributions to these files. Please review our [contributing guidelines](https://github.com/octo-org/octo-repo/blob/main/CONTRIBUTING.md) for what contributions are accepted.'
```

Pour plus d’informations sur les contextes, consultez « [Contextes](/actions/learn-github-actions/contexts) ». Pour plus d’informations sur les charges utiles d’événement, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads) ».

## Contrôle supplémentaire de l’exécution de votre workflow

Si vous souhaitez un contrôle plus précis que ne le permettent les événements, les types d’activité d’événement ou les filtres d’événement, vous pouvez utiliser des conditions et des environnements pour contrôler l’exécution de travaux ou d’étapes spécifiques de votre workflow.

### Utilisation de conditions

Vous pouvez utiliser des conditions pour contrôler davantage si des travaux ou des étapes de votre workflow s’exécuteront.

#### Exemple utilisant une valeur dans la charge utile de l’événement

Par exemple, si vous souhaitez que le workflow s’exécute lorsqu’une étiquette spécifique est ajoutée à un problème, vous pouvez effectuer le déclenchement sur le type d’activité d’événement `issues labeled` et utiliser une condition pour vérifier quelle étiquette a déclenché le workflow. Le workflow suivant s’exécute quand une étiquette est ajoutée à un problème dans le dépôt du workflow, mais le travail `run_if_label_matches` s’exécute uniquement si l’étiquette est nommée `bug`.

```yaml
on:
  issues:
    types:
      - labeled

jobs:
  run_if_label_matches:
    if: github.event.label.name == 'bug'
    runs-on: ubuntu-latest
    steps:
      - run: echo 'The label was bug'
```

#### Exemple utilisant un type d’événement

Par exemple, si vous souhaitez exécuter différents travaux ou différentes étapes en fonction de l’événement déclenché par le workflow, vous pouvez utiliser une condition pour vérifier s’il existe un type d’événement spécifique dans le contexte de l’événement. Le workflow suivant s’exécute chaque fois qu’un problème ou une demande de tirage est fermé. Si le workflow a été exécuté parce qu’un problème a été fermé, le contexte `github.event` contient une valeur pour `issue`, mais pas pour `pull_request`. Par conséquent, l’étape `if_issue` s’exécute, mais pas l’étape `if_pr`. À l’inverse, si le workflow a été exécuté parce qu’une demande de tirage a été fermée, l’étape `if_pr` s’exécute, mais pas l’étape `if_issue`.

```yaml
on:
  issues:
    types:
      - closed
  pull_request:
    types:
      - closed

jobs:
  state_event_type:
    runs-on: ubuntu-latest
    steps:
    - name: if_issue
      if: github.event.issue
      run: |
        echo An issue was closed
    - name: if_pr
      if: github.event.pull_request
      run: |
        echo A pull request was closed
```

Pour en savoir plus sur la nature des informations disponibles dans le contexte d’événement, consultez « [Utilisation des informations sur l’événement](#using-event-information) ». Pour plus d’informations sur l’utilisation de conditions, consultez « [Expressions](/actions/learn-github-actions/expressions) ».

### Utilisation d’environnements pour déclencher manuellement des travaux de workflow

Si vous souhaitez déclencher manuellement un travail spécifique d’un workflow, vous pouvez utiliser un environnement qui nécessite l’approbation d’une équipe ou d’un utilisateur spécifique. Tout d’abord, configurez un environnement avec les réviseurs obligatoires. Pour plus d’informations, consultez « [Utilisation d’environnements pour le déploiement](/actions/deployment/targeting-different-environments/using-environments-for-deployment) ». Ensuite, référencez le nom de l’environnement dans un travail de votre workflow à l’aide de la clé `environment:`. Tout travail référençant l’environnement ne s’exécute qu’une fois qu’un réviseur au moins a approuvé le travail.

Par exemple, le workflow suivant s’exécute chaque fois qu’il y a une transmission de type push dans la branche principale. Le travail `build` s’exécute toujours. Le travail `publish` s’exécute uniquement une fois que le travail `build` s’est terminé correctement (en raison de `needs: [build]`) et que toutes les règles (y compris les réviseurs obligatoires) définies pour l’environnement appelé `production` sont respectées ( en raison de `environment: production`).

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: build
        echo 'building'

  publish:
    needs: [build]
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: publish
        echo 'publishing'
```

{% note %}

{% data reusables.gated-features.environments %}

{% endnote %}

## Événements disponibles

Pour obtenir la liste complète des événements disponibles, consultez « [Événements qui déclenchent des workflows](/actions/using-workflows/events-that-trigger-workflows) ».
