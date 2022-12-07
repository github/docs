---
title: Utilisation de scripts pour tester votre code sur un exécuteur
shortTitle: Using scripts to test your code on a runner
intro: 'Comment utiliser les fonctionnalités essentielles de {% data variables.product.prodname_actions %} pour l’intégration continue (CI).'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: f313a294bc2515564787268112f064b72d339d32
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146749527'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Présentation des exemples

{% data reusables.actions.example-workflow-intro-ci %} Quand ce workflow est déclenché, il exécute automatiquement un script qui vérifie si le site {% data variables.product.prodname_dotcom %} Docs comporte des liens rompus.

{% data reusables.actions.example-diagram-intro %}

![Diagramme de vue d’ensemble des étapes de workflow](/assets/images/help/images/overview-actions-using-scripts-ci-example.png)

## Fonctionnalités utilisées dans cet exemple

{% data reusables.actions.example-table-intro %}

| **Fonctionnalité**  | **Implémentation** |
| --- | --- | 
{% data reusables.actions.push-table-entry %} {% data reusables.actions.pull-request-table-entry %} {% data reusables.actions.workflow-dispatch-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.concurrency-table-entry %} | Exécution du travail sur différents exécuteurs, selon le dépôt : | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)| {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | Utilisation d’une action tierce : | [`trilom/file-changes-action`](https://github.com/trilom/file-changes-action)| | Exécution d’un script sur l’exécuteur : | Utilisation de `./script/rendered-content-link-checker.mjs` |

## Exemple de flux de travail

{% data reusables.actions.example-docs-engineering-intro %} [`link-check-all.yml`](https://github.com/github/docs/blob/main/.github/workflows/link-check-all.yml).

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
name: 'Link Checker: All English'

# **What it does**: Renders the content of every page and check all internal links.
# **Why we have it**: To make sure all links connect correctly.
# **Who does it impact**: Docs content.

on:
  workflow_dispatch:
  push:
    branches:
      - main
  pull_request:

permissions:
  contents: read
  # Needed for the 'trilom/file-changes-action' action
  pull-requests: read

# This allows a subsequently queued workflow run to interrupt previous runs
concurrency:
  group: {% raw %}'${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'{% endraw %}
  cancel-in-progress: true

jobs:
  check-links:
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}

      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm

      - name: Install
        run: npm ci

      # Creates file "${{ env.HOME }}/files.json", among others
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        with:
          fileOutput: 'json'

      # For verification
      - name: Show files changed
        run: cat $HOME/files.json

      - name: Link check (warnings, changed files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --max 100 \
            --check-anchors \
            --check-images \
            --verbose \
            --list $HOME/files.json

      - name: Link check (critical, all files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --exit \
            --verbose \
            --check-images \
            --level critical
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
name: 'Link Checker: All English'
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

Ajoutez l’événement `workflow_dispatch` si vous souhaitez pouvoir exécuter manuellement ce workflow à partir de l’IU. Pour plus d’informations, consultez [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
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

Ajoutez l’événement `push` pour que le workflow s’exécute automatiquement chaque fois qu’un commit est poussé vers une branche appelée `main`. Pour plus d’informations, consultez [`push`](/actions/using-workflows/events-that-trigger-workflows#push).
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

{% raw %}
```yaml{:copy}
concurrency:
  group: '${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'
```
{% endraw %}
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
  check-links:
```
</td>
<td>

Définit un travail ayant l’ID `check-links` stocké dans la clé `jobs`.
</td>
</tr>
<tr>
<td>

{% raw %}
```yaml{:copy}
    runs-on: ${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}
```
{% endraw %}
</td>
<td>

Configure le travail pour qu’il s’exécute sur un exécuteur hébergé par {% data variables.product.prodname_dotcom %} ou sur un exécuteur autohébergé, selon le dépôt qui exécute le workflow. Dans cet exemple, le travail s’exécute sur un exécuteur autohébergé si le dépôt se nomme `docs-internal`, et s’il se trouve dans l’organisation `github`. Si le dépôt ne correspond pas à ce chemin, il s’exécute sur un exécuteur `ubuntu-latest` hébergé par {% data variables.product.prodname_dotcom %}. Pour plus d’informations sur ces options, consultez « [Choix de l’exécuteur pour un travail](/actions/using-jobs/choosing-the-runner-for-a-job) ».
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Regroupe toutes les étapes qui vont s’exécuter dans le cadre du travail `check-links`. Chaque travail d’un workflow a sa propre section `steps`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
```
</td>
<td>

Le mot clé `uses` indique au travail de récupérer l’action nommée `actions/checkout`. Il s’agit d’une action qui extrait votre dépôt et le télécharge dans l’exécuteur, ce qui vous permet d’exécuter des actions sur votre code (par exemple des outils de test). Vous devez utiliser l’action d’extraction chaque fois que votre workflow s’exécute sur le code du dépôt, ou que vous utilisez une action définie dans le dépôt.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm
```
</td>
<td>

Cette étape utilise l’action `actions/setup-node` pour installer la version spécifiée du package logiciel Node.js sur l’exécuteur, ce qui vous permet d’accéder à la commande `npm`.
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Install
        run: npm ci
```
</td>
<td>

Le mot clé `run` indique au travail d’exécuter une commande sur l’exécuteur. Dans le cas présent, `npm ci` est utilisé pour installer les packages logiciels npm du projet.
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        with:
          fileOutput: 'json'
```
</td>
<td>

Utilise l’action `trilom/file-changes-action` pour regrouper tous les fichiers changés. Cet exemple est épinglé à une version spécifique de l’action, à l’aide de la valeur SHA `a6ca26c14274c33b15e6499323aac178af06ad4b`.
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Show files changed
        run: cat $HOME/files.json
```
</td>
<td>

Liste le contenu de `files.json`. Il est visible dans le journal de l’exécution de workflow et peut être utile pour le débogage.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Link check (warnings, changed files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --max 100 \
            --check-anchors \
            --check-images \
            --verbose \
            --list $HOME/files.json
```
</td>
<td>

Cette étape utilise la commande `run` pour exécuter un script stocké dans le dépôt sur `script/rendered-content-link-checker.mjs`, puis passe tous les paramètres nécessaires à l’exécution.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Link check (critical, all files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --exit \
            --verbose \
            --check-images \
            --level critical
```
</td>
<td>

Cette étape utilise également la commande `run` pour exécuter un script stocké dans le dépôt sur `script/rendered-content-link-checker.mjs`, puis passe un autre ensemble de paramètres.
</tr>

</tbody>
</table>

## Étapes suivantes

{% data reusables.actions.learning-actions %}
