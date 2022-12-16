---
title: 'Utilisation de la concurrence, d’expressions et d’une matrice de test'
shortTitle: 'Using concurrency, expressions, and a test matrix'
intro: 'Comment utiliser les fonctionnalités avancées de {% data variables.product.prodname_actions %} pour l’intégration continue (CI).'
versions:
  fpt: '*'
  ghes: '>= 3.5'
  ghae: '>= 3.5'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: f4edac59fdbcc8f8825a51e25b737b94b17128b0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147496579'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Présentation des exemples

{% data reusables.actions.example-workflow-intro-ci %} Quand ce workflow est déclenché, il teste votre code à l’aide d’une matrice de combinaisons de test avec `npm test`.

{% data reusables.actions.example-diagram-intro %}

![Diagramme de vue d’ensemble des étapes de workflow](/assets/images/help/images/overview-actions-using-concurrency-expressions-and-a-test-matrix.png)

## Fonctionnalités utilisées dans cet exemple

{% data reusables.actions.example-table-intro %}

| **Fonctionnalité**  | **Implémentation** |
| --- | --- |
{% data reusables.actions.workflow-dispatch-table-entry %} {% data reusables.actions.pull-request-table-entry %} {% data reusables.actions.cron-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.concurrency-table-entry %} | Exécution du travail sur différents exécuteurs, selon le dépôt : | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)| {% data reusables.actions.if-conditions-table-entry %} | Utilisation d’une matrice pour créer différentes configurations de test : | [`matrix`](/actions/using-jobs/using-a-build-matrix-for-your-jobs)| {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | Mise en cache des dépendances : | [`actions/cache`](/actions/advanced-guides/caching-dependencies-to-speed-up-workflows)| | Exécution de tests sur l’exécuteur : | `npm test`|

## Exemple de flux de travail

{% data reusables.actions.example-docs-engineering-intro %} [`test.yml`](https://github.com/github/docs/blob/main/.github/workflows/test.yml).

{% data reusables.actions.note-understanding-example %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:100%"></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: Node.js Tests

# **What it does**: Runs our tests.
# **Why we have it**: We want our tests to pass before merging code.
# **Who does it impact**: Docs engineering, open-source engineering contributors.

on:
  workflow_dispatch:
  pull_request:
  push:
    branches:
      - main

permissions:
  contents: read
  # Needed for the 'trilom/file-changes-action' action
  pull-requests: read

# This allows a subsequently queued workflow run to interrupt previous runs
concurrency:
  group: {% raw %}'${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'{% endraw %}
  cancel-in-progress: true

jobs:
  test:
    # Run on self-hosted if the private repo or ubuntu-latest if the public repo
    # See pull # 17442 in the private repo for context
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
    timeout-minutes: 60
    strategy:
      fail-fast: false
      matrix:
        # The same array lives in test-windows.yml, so make any updates there too.
        test-group:
          [
            content,
            graphql,
            meta,
            rendering,
            routing,
            unit,
            linting,
            translations,
          ]
    steps:
      # Each of these ifs needs to be repeated at each step to make sure the required check still runs
      # Even if if doesn't do anything
      - name: Check out repo
        uses: {% data reusables.actions.action-checkout %}
        with:
          # Not all test suites need the LFS files. So instead, we opt to
          # NOT clone them initially and instead, include them manually
          # only for the test groups that we know need the files.
          lfs: {% raw %}${{ matrix.test-group == 'content' }}{% endraw %}
          # Enables cloning the Early Access repo later with the relevant PAT
          persist-credentials: 'false'

      - name: Figure out which docs-early-access branch to checkout, if internal repo
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        id: check-early-access
        uses: {% data reusables.actions.action-github-script %}
        env:
          BRANCH_NAME: {% raw %}${{ github.head_ref || github.ref_name }}{% endraw %}
        with:
          github-token: {% raw %}${{ secrets.DOCUBOT_REPO_PAT }}{% endraw %}
          result-encoding: string
          script: |
            // If being run from a PR, this becomes 'my-cool-branch'.
            // If run on main, with the `workflow_dispatch` action for
            // example, the value becomes 'main'.
            const { BRANCH_NAME } = process.env
            try {
              const response = await github.repos.getBranch({
                owner: 'github',
                repo: 'docs-early-access',
                BRANCH_NAME,
              })
              console.log(`Using docs-early-access branch called '${BRANCH_NAME}'.`)
              return BRANCH_NAME
            } catch (err) {
              if (err.status === 404) {
                console.log(`There is no docs-early-access branch called '${BRANCH_NAME}' so checking out 'main' instead.`)
                return 'main'
              }
              throw err
            }

      - name: Check out docs-early-access too, if internal repo
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        uses: {% data reusables.actions.action-checkout %}
        with:
          repository: github/docs-early-access
          token: {% raw %}${{ secrets.DOCUBOT_REPO_PAT }}{% endraw %}
          path: docs-early-access
          ref: {% raw %}${{ steps.check-early-access.outputs.result }}{% endraw %}

      - name: Merge docs-early-access repo's folders
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        run: |
          mv docs-early-access/assets assets/images/early-access
          mv docs-early-access/content content/early-access
          mv docs-early-access/data data/early-access
          rm -r docs-early-access

      # This is necessary when LFS files where cloned but does nothing
      # if actions/checkout was run with `lfs:false`.
      - name: Checkout LFS objects
        run: git lfs checkout

      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        id: get_diff_files
        with:
          # So that `steps.get_diff_files.outputs.files` becomes
          # a string like `foo.js path/bar.md`
          output: ' '

      - name: Insight into changed files
        run: |

          # Must to do this because the list of files can be HUGE. Especially
          # in a repo-sync when there are lots of translation files involved.
          echo {% raw %}"${{ steps.get_diff_files.outputs.files }}" > get_diff_files.txt{% endraw %}

      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.14.x
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Cache nextjs build
        uses: {% data reusables.actions.action-cache %}
        with:
          path: .next/cache
          key: {% raw %}${{ runner.os }}-nextjs-${{ hashFiles('package*.json') }}{% endraw %}

      - name: Run build script
        run: npm run build

      - name: Run tests
        env:
          DIFF_FILE: get_diff_files.txt
          CHANGELOG_CACHE_FILE_PATH: tests/fixtures/changelog-feed.json
        run: npm test -- {% raw %}tests/${{ matrix.test-group }}/{% endraw %}
```
</tr>
</td>
</tbody>
</table>

## Vue d’ensemble de l’exemple

 {% data reusables.actions.example-explanation-table-intro %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:60%"><b>Code</b></th>
    <th style="width:40%"><b>Explication</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: Node.js Tests
```
</td>
<td>

{% data reusables.actions.explanation-name-key %}
</td>
</tr>
<tr>
<td>

```yaml{:copy}
on:
```
</td>
<td>

Le mot clé `on` vous permet de définir les événements qui se déclenchent quand le workflow s’exécute. Vous pouvez définir ici plusieurs événements. Pour plus d’informations, consultez « [Déclenchement d’un workflow](/actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows) ».
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  workflow_dispatch:
```
</td>
<td>

Ajoutez l’événement `workflow_dispatch` si vous souhaitez pouvoir exécuter manuellement ce workflow dans l’IU. Pour plus d’informations, consultez [`workflow_dispatch`](/actions/reference/events-that-trigger-workflows#workflow_dispatch).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  pull_request:
```
</td>
<td>

Ajoutez l’événement `pull_request` pour que le workflow s’exécute automatiquement chaque fois qu’une demande de tirage est créée ou mise à jour. Pour plus d’informations, consultez [`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  push:
    branches:
      - main
```
</td>
<td>

Ajoutez l’événement `push` pour que le workflow s’exécute automatiquement chaque fois qu’un commit est poussé vers une branche correspondant au filtre `main`. Pour plus d’informations, consultez [`push`](/actions/using-workflows/events-that-trigger-workflows#push).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
permissions:
  contents: read
  pull-requests: read
```
</td>
<td>

Modifie les autorisations par défaut octroyées à `GITHUB_TOKEN`. Cela varie en fonction des besoins de votre workflow. Pour plus d’informations, consultez « [Affectation d’autorisations à des travaux](/actions/using-jobs/assigning-permissions-to-jobs) ».
</td>
</tr>
<tr>
<td>


```yaml{:copy}
concurrency:
  group: {% raw %}'${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'{% endraw %}
```
</td>
<td>

Crée un groupe d’accès concurrentiel pour des événements spécifiques, et utilise l’opérateur `||` afin de définir les valeurs de secours. Pour plus d’informations, consultez « [Utilisation de la concurrence](/actions/using-jobs/using-concurrency) ».
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  cancel-in-progress: true
```
</td>
<td>

Annule tout travail ou workflow en cours d’exécution dans le même groupe d’accès concurrentiel.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

Regroupe tous les travaux qui s’exécutent dans le fichier de workflow.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  test:
```
</td>
<td>

Définit un travail ayant l’ID `test` stocké dans la clé `jobs`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
```
</td>
<td>

Configure le travail pour qu’il s’exécute sur un exécuteur hébergé par {% data variables.product.prodname_dotcom %} ou sur un exécuteur autohébergé, selon le dépôt qui exécute le workflow. Dans cet exemple, le travail s’exécute sur un exécuteur autohébergé si le dépôt se nomme `docs-internal`, et s’il se trouve dans l’organisation `github`. Si le dépôt ne correspond pas à ce chemin, il s’exécute sur un exécuteur `ubuntu-latest` hébergé par {% data variables.product.prodname_dotcom %}. Pour plus d’informations sur ces options, consultez « [Choix de l’exécuteur pour un travail](/actions/using-jobs/choosing-the-runner-for-a-job) ».
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    timeout-minutes: 60
```
</td>
<td>

Définit le nombre maximal de minutes d’exécution du travail avant qu’il ne soit automatiquement annulé. Pour plus d’informations, consultez [`timeout-minutes`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    strategy:
```
</td>
<td>
  Cette section définit la matrice de build de vos travaux.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      fail-fast: false
```
</td>
<td>

L’affectation de la valeur `false` à `fail-fast` empêche {% data variables.product.prodname_dotcom %} d’annuler tous les travaux en cours en cas d’échec d’un travail de matrice.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      matrix:
        test-group:
          [
            content,
            graphql,
            meta,
            rendering,
            routing,
            unit,
            linting,
            translations,
          ]
```
</td>
<td>

Crée une matrice nommée `test-group`, avec un tableau de groupes de test. Ces valeurs correspondent aux noms des groupes de test qui sont exécutés par `npm test`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Regroupe toutes les étapes qui vont s’exécuter dans le cadre du travail `test`. Chaque travail d’un workflow a sa propre section `steps`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Check out repo
        uses: {% data reusables.actions.action-checkout %}
        with:
          lfs: {% raw %}${{ matrix.test-group == 'content' }}{% endraw %}
          persist-credentials: 'false'
```
</td>
<td>

Le mot clé `uses` indique au travail de récupérer l’action nommée `actions/checkout`. Il s’agit d’une action qui extrait votre dépôt et le télécharge dans l’exécuteur, ce qui vous permet d’exécuter des actions sur votre code (par exemple des outils de test). Vous devez utiliser l’action d’extraction chaque fois que votre workflow s’exécute sur le code du dépôt, ou que vous utilisez une action définie dans le dépôt. Certaines options supplémentaires sont fournies à l’action à l’aide du mot-clé `with`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Figure out which docs-early-access branch to checkout, if internal repo
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        id: check-early-access
        uses: {% data reusables.actions.action-github-script %}
        env:
          BRANCH_NAME: {% raw %}${{ github.head_ref || github.ref_name }}{% endraw %}
        with:
          github-token: {% raw %}${{ secrets.DOCUBOT_REPO_PAT }}{% endraw %}
          result-encoding: string
          script: |
            // If being run from a PR, this becomes 'my-cool-branch'.
            // If run on main, with the `workflow_dispatch` action for
            // example, the value becomes 'main'.
            const { BRANCH_NAME } = process.env
            try {
              const response = await github.repos.getBranch({
                owner: 'github',
                repo: 'docs-early-access',
                BRANCH_NAME,
              })
              console.log(`Using docs-early-access branch called '${BRANCH_NAME}'.`)
              return BRANCH_NAME
            } catch (err) {
              if (err.status === 404) {
                console.log(`There is no docs-early-access branch called '${BRANCH_NAME}' so checking out 'main' instead.`)
                return 'main'
              }
              throw err
            }
```
</td>
<td>

Si le dépôt actuel est le dépôt `github/docs-internal`, cette étape utilise l’action `actions/github-script` pour exécuter un script permettant de vérifier s’il existe une branche appelée `docs-early-access`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Check out docs-early-access too, if internal repo
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        uses: {% data reusables.actions.action-checkout %}
        with:
          repository: github/docs-early-access
          token: {% raw %}${{ secrets.DOCUBOT_REPO_PAT }}{% endraw %}
          path: docs-early-access
          ref: {% raw %}${{ steps.check-early-access.outputs.result }}{% endraw %}
```
</td>
<td>

Si le dépôt actuel est le dépôt `github/docs-internal`, cette étape extrait la branche du dépôt `github/docs-early-access` identifié à l’étape précédente.
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Merge docs-early-access repo's folders
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        run: |
          mv docs-early-access/assets assets/images/early-access
          mv docs-early-access/content content/early-access
          mv docs-early-access/data data/early-access
          rm -r docs-early-access
```
</td>
<td>

Si le dépôt actuel est le dépôt `github/docs-internal`, cette étape utilise le mot clé `run` pour exécuter les commandes d’interpréteur de commandes afin de déplacer les dossiers du dépôt `docs-early-access` vers les dossiers du dépôt principal.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Checkout LFS objects
        run: git lfs checkout
```
</td>
<td>

Cette étape exécute une commande pour extraire les objets LFS du dépôt.
</td>
</tr>
<tr>
<td>


```yaml{:copy}
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        id: get_diff_files
        with:
          # So that `steps.get_diff_files.outputs.files` becomes
          # a string like `foo.js path/bar.md`
          output: ' '
```
</td>
<td>

Cette étape utilise l’action `trilom/file-changes-action` pour regrouper les fichiers changés dans la demande de tirage (pull request) afin qu’ils puissent être analysés à l’étape suivante. Cet exemple est épinglé à une version spécifique de l’action, à l’aide de la valeur SHA `a6ca26c14274c33b15e6499323aac178af06ad4b`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Insight into changed files
        run: |
          echo {% raw %}"${{ steps.get_diff_files.outputs.files }}" > get_diff_files.txt{% endraw %}
```
</td>
<td>

Cette étape exécute une commande d’interpréteur de commandes qui utilise une sortie de l’étape précédente pour créer un fichier contenant la liste des fichiers changés dans la demande de tirage.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.14.x
          cache: npm
```
</td>
<td>

Cette étape utilise l’action `actions/setup-node` pour installer la version spécifiée du package logiciel `node` sur l’exécuteur, ce qui vous permet d’accéder à la commande `npm`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Install dependencies
        run: npm ci
```
</td>
<td>

Cette étape exécute la commande d’interpréteur de commandes `npm ci` pour installer les packages logiciels npm du projet.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Cache nextjs build
        uses: {% data reusables.actions.action-cache %}
        with:
          path: .next/cache
          key: {% raw %}${{ runner.os }}-nextjs-${{ hashFiles('package*.json') }}{% endraw %}
```
</td>
<td>

Cette étape utilise l’action `actions/cache` pour mettre en cache la build Next.js. Ainsi, le workflow tente de récupérer une mise en cache de la build, au lieu d’effectuer une regénération à partir de zéro à chaque fois. Pour plus d’informations, consultez « [Mise en cache des dépendances pour accélérer les workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows) ».
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Run build script
        run: npm run build
```
</td>
<td>

Cette étape exécute le script de build.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Run tests
        env:
          DIFF_FILE: get_diff_files.txt
          CHANGELOG_CACHE_FILE_PATH: tests/fixtures/changelog-feed.json
        run: npm test -- {% raw %}tests/${{ matrix.test-group }}/{% endraw %}
```
</td>
<td>

Cette étape exécute les tests à l’aide de `npm test`. La matrice de test fournit une valeur différente pour {% raw %}`${{ matrix.test-group }}`{% endraw %} pour chaque travail de la matrice. Elle utilise la variable d’environnement `DIFF_FILE` pour identifier les fichiers qui ont changé ainsi que la variable d’environnement `CHANGELOG_CACHE_FILE_PATH` pour identifier le fichier cache du journal des modifications.
</td>
</tr>
</tbody>
</table>

## Étapes suivantes

{% data reusables.actions.learning-actions %}
