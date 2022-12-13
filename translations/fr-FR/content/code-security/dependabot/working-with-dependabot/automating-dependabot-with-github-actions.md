---
title: Automatisation de Dependabot avec GitHub Actions
intro: 'Exemples d’utilisation de {% data variables.product.prodname_actions %} pour automatiser les tâches courantes liées à {% data variables.product.prodname_dependabot %}.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_actions %} to respond to {% data variables.product.prodname_dependabot %}-created pull requests.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Use Dependabot with Actions
redirect_from:
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions
ms.openlocfilehash: 3280b42309b388c5faf2071d6e3a39d9a0e58474
ms.sourcegitcommit: 67aba5f277f3a8ef2ab1ccb14465ae486eabaa2b
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165080'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## À propos de {% data variables.product.prodname_dependabot %} et de {% data variables.product.prodname_actions %}

{% data variables.product.prodname_dependabot %} crée des demandes de tirage (pull request) pour maintenir vos dépendances à jour et vous pouvez utiliser {% data variables.product.prodname_actions %} pour effectuer des tâches automatisées quand ces demandes de tirage sont créées. Par exemple, extraire des artefacts supplémentaires, ajouter des étiquettes, exécuter des tests ou modifier la demande de tirage.

## Réponse aux événements

{% data variables.product.prodname_dependabot %} est en mesure de déclencher des workflows {% data variables.product.prodname_actions %} sur ses demandes de tirage requêtes et commentaires ; toutefois, certains événements sont traités différemment.

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Pour les workflows lancés par {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) en utilisant les événements `pull_request`, `pull_request_review`, `pull_request_review_comment`, `push`, `create`, `deployment` et `deployment_status`, les restrictions suivantes s’appliquent : {% endif %}

- {% ifversion ghes = 3.3 %}`GITHUB_TOKEN` dispose d’autorisations de lecture seule, sauf si votre administrateur a supprimé les restrictions.{% else %}`GITHUB_TOKEN` dispose d’autorisations de lecture seule par défaut.{% endif %}
- {% ifversion ghes = 3.3 %}Les secrets sont inaccessibles, sauf si votre administrateur a supprimé les restrictions.{% else %}Les secrets sont remplis à partir de secrets {% data variables.product.prodname_dependabot %}. Les secrets {% data variables.product.prodname_actions %} ne sont pas disponibles.{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Pour les workflows lancés par {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) en utilisant l’événement `pull_request_target`, si la référence de base de la demande de tirage a été créée par {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`), le `GITHUB_TOKEN` est en lecture seule et les secrets ne sont pas disponibles.
{% endif %}

{% ifversion actions-stable-actor-ids %}Ces restrictions s’appliquent même si le workflow est réexécuté par un autre acteur.{% endif %}

Pour plus d’informations, consultez « [Maintien de la sécurité de votre instance GitHub Actions et vos workflows : Prévention des demandes pwn](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/) ».

{% ifversion fpt or ghec or ghes > 3.3 %}

### Changement des autorisations `GITHUB_TOKEN`

Par défaut, les workflows {% data variables.product.prodname_actions %} déclenchés par {% data variables.product.prodname_dependabot %} obtiennent un `GITHUB_TOKEN` avec des autorisations de lecture seule. Vous pouvez utiliser la clé `permissions` dans votre workflow afin d’augmenter l’accès pour le jeton :

{% raw %}

```yaml
name: CI
on: pull_request

# Set the access for individual scopes, or use permissions: write-all
permissions:
  pull-requests: write
  issues: write
  repository-projects: write
  ...

jobs:
  ...
```

{% endraw %}

Pour plus d’informations, consultez « [Modification des autorisations pour GITHUB_TOKEN](/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token) ».

### Accès aux secrets

Quand un événement {% data variables.product.prodname_dependabot %} déclenche un workflow, les seuls secrets disponibles pour le workflow sont les secrets {% data variables.product.prodname_dependabot %}. Les secrets {% data variables.product.prodname_actions %} ne sont pas disponibles. Ainsi, vous devez stocker tous les secrets utilisés par un workflow déclenché par des événements {% data variables.product.prodname_dependabot %} en tant que secrets {% data variables.product.prodname_dependabot %}. Pour plus d’informations, consultez « [Gestion des secrets chiffrés pour Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot) ».

Les secrets {% data variables.product.prodname_dependabot %} sont ajoutés au contexte `secrets` et référencés avec exactement la même syntaxe que les secrets pour {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow) ».

Si vous disposez d’un workflow destiné à être déclenché par {% data variables.product.prodname_dependabot %} et par d’autres acteurs, la solution la plus simple consiste à stocker le jeton avec les autorisations requises dans une action et dans un secret {% data variables.product.prodname_dependabot %} portant des noms identiques. Ensuite, le workflow peut inclure un seul appel à ces secrets. Si le secret pour {% data variables.product.prodname_dependabot %} a un nom différent, utilisez des conditions pour spécifier les secrets corrects que doivent utiliser les différents acteurs. Pour obtenir des exemples qui utilisent des conditions, consultez « [Automatisations courantes](#common-dependabot-automations) » ci-après.

Pour accéder à un registre de conteneurs privé sur AWS avec un nom d’utilisateur et un mot de passe, un workflow doit inclure un secret pour `username` et `password`. Dans l’exemple ci-dessous, quand {% data variables.product.prodname_dependabot %} déclenche le workflow, les secrets {% data variables.product.prodname_dependabot %} portant les noms `READONLY_AWS_ACCESS_KEY_ID` et `READONLY_AWS_ACCESS_KEY` sont utilisés. Si un autre acteur déclenche le workflow, les secrets d’actions portant ces noms sont utilisés.

```yaml
name: CI
on:
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      - name: Login to private container registry for dependencies
        uses: docker/login-action@v1
        with:
          registry: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
          username: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY_ID }}{% endraw %}
          password: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY }}{% endraw %}

      - name: Build the Docker image
        run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)
```

{% endif %}

{% ifversion ghes = 3.3 %}

{% note %}

**Remarque :** Votre administrateur de site peut remplacer ces restrictions pour {% data variables.location.product_location %}. Pour plus d’informations, consultez « [Résolution des problèmes liés à {% data variables.product.prodname_actions %} pour votre entreprise](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#troubleshooting-failures-when-dependabot-triggers-existing-workflows) ».

Si les restrictions sont supprimées, quand un workflow est déclenché par {% data variables.product.prodname_dependabot %}, il a accès aux secrets {% data variables.product.prodname_actions %} et peut utiliser le terme `permissions` pour augmenter l’étendue par défaut du `GITHUB_TOKEN` au-delà de l’accès en lecture seule. Vous pouvez ignorer les étapes spécifiques des sections « Gestion des événements `pull_request` » et « Gestion des événements `push` », car elles ne s’appliquent plus.

{% endnote %}

### Gestion des événements `pull_request`

Si votre workflow a besoin d’accéder à des secrets ou à un `GITHUB_TOKEN` avec des autorisations d’écriture, vous avez deux options : utiliser `pull_request_target` ou utiliser deux workflows distincts. Nous allons détailler l’utilisation de `pull_request_target` dans cette section et utiliserons deux workflows plus bas dans « [Gestion des événements`push` ](#handling-push-events) ».

Voici un exemple simple de workflow `pull_request` qui peut maintenant échouer :

```yaml
### This workflow now has no secrets and a read-only token
name: Dependabot Workflow
on:
  pull_request

jobs:
  dependabot:
    runs-on: ubuntu-latest
    # Always check the actor is Dependabot to prevent your workflow from failing on non-Dependabot PRs
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
```

Vous pouvez remplacer `pull_request` par `pull_request_target`, qui est utilisé pour les demandes de tirage à partir de duplications (forks), et extraire explicitement la demande de tirage `HEAD`.

{% warning %}

**Avertissement :** L’utilisation de `pull_request_target` à la place de `pull_request` vous expose à un comportement non sécurisé. Nous vous recommandons d’utiliser la méthode à deux workflows, comme décrit ci-dessous dans « [Gestion des événements `push` ](#handling-push-events) ».

{% endwarning %}

```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Workflow
on:
  pull_request_target

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
        with:
          # Check out the pull request HEAD
          ref: {% raw %}${{ github.event.pull_request.head.sha }}{% endraw %}
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Il est également vivement recommandé de réduire la portée des autorisations accordées au `GITHUB_TOKEN` afin d’éviter la fuite d’un jeton avec plus de privilège que nécessaire. Pour plus d’informations, consultez « [Autorisations pour le `GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token) ».

### Gestion des événements `push`

Comme il n’existe aucun équivalent `pull_request_target` pour les événements `push`, vous devez utiliser deux workflows : un workflow non approuvé qui se termine par le chargement d’artefacts, ce qui déclenche un second workflow approuvé qui télécharge les artefacts et poursuit le traitement.

Le premier workflow effectue tout travail non approuvé :

{% raw %}

```yaml
### This workflow doesn't have access to secrets and has a read-only token
name: Dependabot Untrusted Workflow
on:
  push

jobs:
  check-dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: ...
```

{% endraw %}

Le second workflow effectue un travail approuvé une fois que le premier workflow s’est déroulé correctement :

{% raw %}

```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Trusted Workflow
on:
  workflow_run:
    workflows: ["Dependabot Untrusted Workflow"]
    types:
      - completed

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    steps:
      - uses: ...
```

{% endraw %}

{% endif %}

### Réexécution manuelle d’un workflow

{% ifversion actions-stable-actor-ids %}

Lorsque vous réexécutez manuellement un workflow Dependabot, celui-ci s’exécute avec les mêmes privilèges qu’avant même si l’utilisateur qui a lancé la réexécution a des privilèges différents. Pour plus d’informations, consultez « [Réexécution de workflows et de travaux](/actions/managing-workflow-runs/re-running-workflows-and-jobs) ».

{% else %}

Vous pouvez également réexécuter manuellement un workflow Dependabot ayant échoué ; il s’exécute alors avec un jeton de lecture-écriture et un accès en lecture-écriture aux secrets. Avant de réexécuter manuellement un workflow ayant échoué, vous devez toujours vérifier la dépendance mise à jour pour vous assurer que la modification n’introduit aucun comportement malveillant ou inattendu.

{% endif %}

## Automatisations Dependabot courantes

Voici plusieurs scénarios courants qui peuvent être automatisés avec {% data variables.product.prodname_actions %}.

{% ifversion ghes = 3.3 %}

{% note %}

**Remarque :** Si votre administrateur de site a remplacé des restrictions pour {% data variables.product.prodname_dependabot %} sur {% data variables.location.product_location %}, vous pouvez utiliser `pull_request` au lieu de `pull_request_target` dans les workflows suivants.

{% endnote %}

{% endif %}

### Extraire des métadonnées sur une demande de tirage

Pour une automatisation de grande envergure, il est nécessaire de connaître certaines informations sur le contenu de la demande de tirage : le nom de la dépendance, s’il s’agit ou non d’une dépendance de production et s’il s’agit d’une mise à jour principale, mineure ou corrective.

L’action `dependabot/fetch-metadata` fournit toutes ces informations pour vous :

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot fetch metadata
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.dependabot-metadata.outputs.dependency-names
      #  - steps.dependabot-metadata.outputs.dependency-type
      #  - steps.dependabot-metadata.outputs.update-type      
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot fetch metadata
on: pull_request

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.metadata.outputs.dependency-names
      #  - steps.metadata.outputs.dependency-type
      #  - steps.metadata.outputs.update-type      
```

{% endraw %}

{% endif %}

Pour plus d’informations, consultez le dépôt [`dependabot/fetch-metadata`](https://github.com/dependabot/fetch-metadata).

### Étiqueter une demande de tirage

Si vous avez d’autres workflows d’automatisation ou de triage basés sur des étiquettes {% data variables.product.prodname_dotcom %}, vous pouvez configurer une action pour affecter des étiquettes en fonction des métadonnées fournies.

Par exemple, si vous souhaitez marquer toutes les mises à jour de dépendance de production avec une étiquette :

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-label
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.dependabot-metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-label
on: pull_request

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```

{% endraw %}

{% endif %}

### Approuver une demande de tirage

Si vous souhaitez approuver automatiquement les demandes de tirage Dependabot, vous pouvez utiliser l’{% data variables.product.prodname_cli %} dans un workflow :

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-approve
on: pull_request_target

permissions:
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-approve
on: pull_request

permissions:
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% endif %}

### Activer la fusion automatique sur une demande de tirage

Si vous souhaitez autoriser les responsables de la maintenance à marquer certaines demandes de tirage pour la fusion automatique, vous pouvez utiliser la fonctionnalité de fusion automatique de {% data variables.product.prodname_dotcom %}. Cela permet à la demande de tirage d’être fusionnée une fois que les tests et approbations requis par les règles de protection de branche sont réussis. Pour plus d’informations, consultez « [Fusion automatique d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request) » et « [Gestion d’une règle de protection de branche](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) ».

{% note %}

**Remarque :** Si vous utilisez des vérifications d’état pour tester les demandes de tirage, vous devez activer **Exiger la réussite des vérifications d’état avant de fusionner** pour la branche cible des demandes de tirage {% data variables.product.prodname_dependabot %}. Cette règle de protection de branche garantit que les demandes de tirage ne sont pas fusionnées tant que toutes les vérifications d’état requises ne sont pas réussies. Pour plus d’informations, consultez « [Gestion d’une règle de protection de branche](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) ».

{% endnote %}

Vous pouvez plutôt utiliser {% data variables.product.prodname_actions %} et l’{% data variables.product.prodname_cli %}. Voici un exemple qui fusionne automatiquement toutes les mises à jour correctives dans `my-dependency` :

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request_target

permissions:
  contents: write
  pull-requests: write
  
jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.dependabot-metadata.outputs.dependency-names, 'my-dependency') && steps.dependabot-metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request

permissions:
  contents: write
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.metadata.outputs.dependency-names, 'my-dependency') && steps.metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% endif %}

## Résolution des problèmes liés aux exécutions de workflow ayant échoué

Si votre exécution de workflow échoue, vérifiez les éléments suivants :

{% ifversion ghes = 3.3 %}

- Vous exécutez le workflow uniquement quand l’acteur approprié le déclenche.
- Vous extrayez la `ref` correcte pour votre `pull_request`.
- Vous n’essayez pas d’accéder aux secrets à partir d’un événement `pull_request`, `pull_request_review`, `pull_request_review_comment` ou `push` déclenché par Dependabot.
- Vous n’essayez pas d’effectuer des actions `write` à partir d’un événement `pull_request`, `pull_request_review`, `pull_request_review_comment` ou `push` déclenché par Dependabot.

{% else %}

- Vous exécutez le workflow uniquement quand l’acteur approprié le déclenche.
- Vous extrayez la `ref` correcte pour votre `pull_request`.
- Vos secrets sont disponibles dans des secrets {% data variables.product.prodname_dependabot %} plutôt qu’en tant que secrets {% data variables.product.prodname_actions %}.
- Vous disposez d’un `GITHUB_TOKEN` avec les autorisations appropriées.

{% endif %}

Pour plus d’informations sur l’écriture et le débogage de {% data variables.product.prodname_actions %}, consultez « [Découvrir GitHub Actions](/actions/learn-github-actions) ».
