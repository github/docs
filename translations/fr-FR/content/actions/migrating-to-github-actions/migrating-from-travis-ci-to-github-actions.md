---
title: "Migration de Travis\_CI vers GitHub Actions"
intro: '{% data variables.product.prodname_actions %} et Travis CI partagent plusieurs similitudes, ce qui facilite grandement la migration vers {% data variables.product.prodname_actions %}.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-travis-ci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Travis CI
  - Migration
  - CI
  - CD
shortTitle: Migrate from Travis CI
ms.openlocfilehash: 00da8dc259ef4de197faffd8db654dd536c1c237
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146178990'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide vous aide à migrer de Travis CI vers {% data variables.product.prodname_actions %}. Il compare leurs concepts et leur syntaxe, décrit les similitudes et illustre leurs différentes approches des tâches courantes.

## Avant de commencer

Avant de commencer votre migration vers {% data variables.product.prodname_actions %}, il est utile de vous familiariser avec son fonctionnement :

- Pour obtenir un exemple rapide illustrant un travail {% data variables.product.prodname_actions %}, consultez « [Démarrage rapide pour {% data variables.product.prodname_actions %}](/actions/quickstart) ».
- Pour découvrir les concepts essentiels de {% data variables.product.prodname_actions %}, consultez « [Présentation de GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions) ».

## Comparaison de l’exécution des travaux

Pour vous permettre de contrôler quand des tâches CI sont exécutées, un _workflow_ {% data variables.product.prodname_actions %} utilise des _travaux_ qui s’exécutent en parallèle par défaut. Chaque travail contient des _étapes_ exécutées dans une séquence que vous définissez. Si vous devez exécuter des actions d’installation et de nettoyage pour un travail, vous pouvez définir des étapes dans chaque travail pour effectuer ces opérations.

## Similitudes clés

{% data variables.product.prodname_actions %} et Travis CI partagent certaines similitudes, et la compréhension de celles-ci à l’avance peut faciliter le processus de migration.

### Utilisation de la syntaxe YAML

Travis CI et {% data variables.product.prodname_actions %} utilisent tous deux YAML pour créer des travaux et des workflows, et ces fichiers sont stockés dans le dépôt du code. Pour plus d’informations sur la façon dont {% data variables.product.prodname_actions %} utilise YAML, consultez « [Création d’un fichier de workflow](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow) ».

### Variables d’environnement personnalisées

Travis CI vous permet de définir des variables d’environnement et de les partager entre les phases. De même, {% data variables.product.prodname_actions %} vous permet de définir des variables d’environnement pour une étape, un travail ou un workflow. Pour plus d’informations, consultez « [Variables d’environnement](/actions/reference/environment-variables) ».

### Variables d’environnement par défaut

Travis CI et {% data variables.product.prodname_actions %} incluent les variables d’environnement par défaut que vous pouvez utiliser dans vos fichiers YAML. Pour {% data variables.product.prodname_actions %}, vous pouvez les voir répertoriées dans « [Variables d’environnement par défaut](/actions/reference/environment-variables#default-environment-variables) ».

### Traitement parallèle des travaux

Travis CI peut utiliser des `stages` pour exécuter des travaux en parallèle. De même, {% data variables.product.prodname_actions %} exécute des `jobs` en parallèle. Pour plus d’informations, consultez « [Création de travaux dépendants](/actions/learn-github-actions/managing-complex-workflows#creating-dependent-jobs) ».

### Badges d’état

Travis CI et {% data variables.product.prodname_actions %} prennent en charge les badges d’état, qui vous permettent d’indiquer si une build réussit ou échoue.
Pour plus d’informations, consultez « [Ajout d’un badge d’état de workflow à votre dépôt](/actions/managing-workflow-runs/adding-a-workflow-status-badge) ».

### Utilisation d’une matrice

Travis CI et {% data variables.product.prodname_actions %} prennent en charge une matrice, ce qui vous permet d’effectuer des tests à l’aide de combinaisons de systèmes d’exploitation et de packages logiciels. Pour plus d’informations, consultez « [Utilisation d’une matrice pour vos travaux](/actions/using-jobs/using-a-matrix-for-your-jobs) ».

Voici un exemple de comparaison de la syntaxe pour chaque système :

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
matrix:
  include:
    - rvm: 2.5
    - rvm: 2.6.3
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build:
    strategy:
      matrix:
        ruby: [2.5, 2.6.3]
```
{% endraw %}
</td>
</tr>
</table>

### Ciblage de branches spécifiques

Travis CI et {% data variables.product.prodname_actions %} vous permettent de cibler votre CI vers une branche spécifique. Pour plus d’informations, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore) ».

Voici un exemple de syntaxe pour chaque système :

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
branches:
  only:
    - main
    - 'mona/octocat'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
on:
  push:
    branches:
      - main
      - 'mona/octocat'
```
{% endraw %}
</td>
</tr>
</table>

### Extraction de sous-modules

Travis CI et {% data variables.product.prodname_actions %} vous permettent de contrôler si les sous-modules sont inclus dans le clone du dépôt.

Voici un exemple de syntaxe pour chaque système :

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
git:
  submodules: false
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- uses: {% data reusables.actions.action-checkout %}
  with:
    submodules: false
```

</td>
</tr>
</table>

### Utilisation de variables d’environnement dans une matrice

Travis CI et {% data variables.product.prodname_actions %} peuvent ajouter des variables d’environnement personnalisées à une matrice de test, ce qui vous permet de faire référence à la variable dans une étape ultérieure.

Dans {% data variables.product.prodname_actions %}, vous pouvez utiliser la clé `include` pour ajouter des variables d’environnement personnalisées à une matrice. {% data reusables.actions.matrix-variable-example %}

## Fonctionnalités clés dans {% data variables.product.prodname_actions %}

Lors de la migration à partir de Travis CI, tenez compte des fonctionnalités clés suivantes dans {% data variables.product.prodname_actions %} :

### Stockage des secrets

{% data variables.product.prodname_actions %} vous permet de stocker des secrets et de les référencer dans vos travaux. Les organisations {% data variables.product.prodname_actions %} peuvent limiter les dépôts pouvant accéder aux secrets de l’organisation. Les règles de protection de l’environnement peuvent nécessiter une approbation manuelle pour qu’un workflow accède aux secrets d’environnement. Pour plus d’informations, consultez « [Secrets chiffrés](/actions/reference/encrypted-secrets) ».

### Partage de fichiers entre des travaux et des workflows

{% data variables.product.prodname_actions %} inclut la prise en charge intégrée du stockage d’artefacts, ce qui vous permet de partager des fichiers entre des travaux dans un workflow. Vous pouvez également enregistrer les fichiers résultants et les partager avec d’autres workflows. Pour plus d’informations, consultez « [Partage de données entre des travaux](/actions/learn-github-actions/essential-features-of-github-actions#sharing-data-between-jobs) ».

### Hébergement de vos propres exécuteurs

Si vos travaux nécessitent un matériel ou un logiciel spécifique, {% data variables.product.prodname_actions %} vous permet d’héberger vos propres exécuteurs et de leur envoyer vos travaux pour traitement. {% data variables.product.prodname_actions %} vous permet également d’utiliser des stratégies pour contrôler l’accès à ces exécuteurs, en accordant l’accès au niveau de l’organisation ou du dépôt. Pour plus d’informations, consultez « [Hébergement de vos propres exécuteurs](/actions/hosting-your-own-runners) ».

{% ifversion fpt or ghec %}

### Travaux simultanés et durée d’exécution

Les travaux simultanés et les durées d’exécution des workflows dans {% data variables.product.prodname_actions %} peuvent varier selon votre plan {% data variables.product.company_short %}. Pour plus d’informations, consultez « [Limites d’utilisation, facturation et administration](/actions/reference/usage-limits-billing-and-administration) ».

{% endif %}

### Utilisation de différents langages dans {% data variables.product.prodname_actions %}

Lorsque vous utilisez différents langages dans {% data variables.product.prodname_actions %}, vous pouvez créer une étape dans votre travail pour configurer vos dépendances de langages. Pour plus d’informations sur l’utilisation d’un langage particulier, consultez le guide spécifique :
  - [Génération et test de Node.js](/actions/guides/building-and-testing-nodejs)
  - [Génération et test de Python](/actions/guides/building-and-testing-python)
  - [Génération et test de PowerShell](/actions/guides/building-and-testing-powershell)
  - [Génération et test de Java avec Maven](/actions/guides/building-and-testing-java-with-maven)
  - [Génération et test de Java avec Gradle](/actions/guides/building-and-testing-java-with-gradle)
  - [Génération et test de Java avec Ant](/actions/guides/building-and-testing-java-with-ant)

## Exécution des scripts

{% data variables.product.prodname_actions %} peut utiliser des étapes `run` pour exécuter des scripts ou des commandes d’environnement. Pour utiliser un shell particulier, vous pouvez spécifier le type `shell` lors de la fourniture du chemin au script. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun) ».

Par exemple :

```yaml
steps:
  - name: Run build script
    run: ./.github/scripts/build.sh
    shell: bash
```

## Gestion des erreurs dans {% data variables.product.prodname_actions %}

Lors de la migration vers {% data variables.product.prodname_actions %}, il existe différentes approches de la gestion des erreurs que vous devrez peut-être connaître.

### Gestion des erreurs de script

{% data variables.product.prodname_actions %} arrête immédiatement un travail si l’une des étapes retourne un code d’erreur. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference) ».

### Gestion des erreurs de travail

{% data variables.product.prodname_actions %} utilise des conditions `if` pour exécuter des travaux ou des étapes dans certaines situations. Par exemple, vous pouvez exécuter une étape quand une autre étape entraîne un `failure()`. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#example-using-status-check-functions) ».  Vous pouvez également utiliser [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) pour empêcher l’arrêt de l’exécution d’un workflow quand un travail échoue.

## Migration de la syntaxe pour les expressions et les conditions

Pour exécuter des travaux sous des expressions conditionnelles, Travis CI et {% data variables.product.prodname_actions %} partagent une syntaxe de condition `if` similaire. {% data variables.product.prodname_actions %} vous permet d’utiliser la condition `if` pour empêcher l’exécution d’un travail ou d’une étape, sauf si une condition est remplie. Pour plus d’informations, consultez « [Expressions](/actions/learn-github-actions/expressions) ».

Cet exemple montre comment une condition `if` peut contrôler si une étape est exécutée :

```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: env.str == 'ABC' && env.num == 123
```

## Migration de phases vers des étapes

Là où Travis CI utilise des _phases_ pour exécuter des _étapes_, {% data variables.product.prodname_actions %} a des  _étapes_ qui exécutent des _actions_. Vous pouvez trouver des actions prédéfinies dans la [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions), ou vous pouvez créer vos propres actions. Pour plus d’informations, consultez « [Création d’actions](/actions/building-actions) ».

Voici un exemple de syntaxe pour chaque système :

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: python
python:
  - "3.7"

:
  - python script.py
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.7'
          architecture: 'x64'
      - run: python script.py
```

</td>
</tr>
</table>

## Mise en cache des dépendances

Travis CI et {% data variables.product.prodname_actions %} vous permettent de mettre manuellement en cache les dépendances pour une réutilisation ultérieure.

{% ifversion actions-caching %}

Cet exemple illustre la syntaxe du cache pour chaque système.

<table>
<tr>
<th>
Travis CI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: node_js
cache: npm
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- name: Cache node modules
  uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.npm
    key: {% raw %}v1-npm-deps-${{ hashFiles('**/package-lock.json') }}{% endraw %}
    restore-keys: v1-npm-deps-
```

</td>
</tr>
</table>

{% else %}

{% data reusables.actions.caching-availability %}

{% endif %}

## Exemples de tâches courantes

Cette section compare la façon dont {% data variables.product.prodname_actions %} et Travis CI effectuent des tâches courantes.

### Configuration des variables d’environnement

Vous pouvez créer des variables d’environnement personnalisées dans un travail {% data variables.product.prodname_actions %}. Par exemple :

<table>
<tr>
<th>
Travis CI
</th>
<th>
Workflow {% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td>

```yaml
env:
  - MAVEN_PATH="/usr/local/maven"
```

</td>
<td>

```yaml
jobs:
  maven-build:
    env:
      MAVEN_PATH: '/usr/local/maven'
```

</td>
</tr>
</table>

### Génération avec Node.js

<table>
<tr>
<th>
Travis CI
</th>
<th>
Workflow {% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td>
{% raw %}
```yaml
install:
  - npm install
script:
  - npm run build
  - npm test
```
{% endraw %}
</td>
<td>

```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '12.x'
      - run: npm install
      - run: npm run build
      - run: npm test
```

</td>
</tr>
</table>

## Étapes suivantes

Pour continuer à découvrir les principales fonctionnalités de {% data variables.product.prodname_actions %}, consultez « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) ».
