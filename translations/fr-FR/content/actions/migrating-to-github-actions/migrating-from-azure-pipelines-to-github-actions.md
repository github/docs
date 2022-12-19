---
title: Migration d’Azure Pipelines vers GitHub Actions
intro: '{% data variables.product.prodname_actions %} et Azure Pipelines partagent plusieurs similitudes de configuration, ce qui facilite grandement la migration vers {% data variables.product.prodname_actions %}.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-azure-pipelines-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Azure Pipelines
  - Migration
  - CI
  - CD
shortTitle: Migrate from Azure Pipelines
ms.openlocfilehash: 5890afb4c0f0e8eae6b5981a39e68f272bff7440
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145107249'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Azure Pipelines et {% data variables.product.prodname_actions %} vous permettent tous deux de créer des workflows qui génèrent, testent, publient, libèrent et déploient automatiquement du code. Azure Pipelines et {% data variables.product.prodname_actions %} partagent certaines similitudes dans la configuration de workflow :

- Les fichiers de configuration de workflow sont écrits en YAML et sont stockés dans le dépôt du code.
- Les workflows comportent un ou plusieurs travaux.
- Les travaux incluent une ou plusieurs étapes ou commandes individuelles.
- Les étapes ou les tâches peuvent être réutilisées et partagées avec la communauté.

Pour plus d’informations, consultez « [Concepts de base de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions) ».

## Différences clés

Lors de la migration à partir d’Azure Pipelines, tenez compte des différences suivantes :

- Azure Pipelines prend en charge un _éditeur classique_ hérité, qui vous permet de définir votre configuration CI dans un éditeur d’interface utilisateur graphique au lieu de créer la définition de pipeline dans un fichier YAML. {% data variables.product.prodname_actions %} utilise des fichiers YAML pour définir des workflows et ne prend pas en charge un éditeur graphique.
- Azure Pipelines vous permet d’omettre une structure dans les définitions de travaux. Par exemple, si vous n’avez qu’un seul travail, vous n’avez pas besoin de définir le travail, mais uniquement ses étapes. {% data variables.product.prodname_actions %} nécessite une configuration explicite et la structure YAML ne peut pas être omise.
- Azure Pipelines prend en charge les _phases_ définies dans le fichier YAML, qui peuvent être utilisées pour créer des workflows de déploiement. {% data variables.product.prodname_actions %} vous oblige à séparer les phases en fichiers de workflow YAML distincts.
- Les agents de build Azure Pipelines locaux peuvent être sélectionnés avec des fonctionnalités. Les exécuteurs auto-hébergés {% data variables.product.prodname_actions %} peuvent être sélectionnés avec des étiquettes.

## Migration des travaux et des étapes

Les travaux et les étapes dans Azure Pipelines sont très similaires aux travaux et aux étapes dans {% data variables.product.prodname_actions %}. Dans les deux systèmes, les travaux présentent les caractéristiques suivantes :

* Les travaux contiennent une série d’étapes qui s’exécutent de manière séquentielle.
* Les travaux s’exécutent sur des machines virtuelles distinctes ou dans des conteneurs distincts.
* Les travaux s’exécutent en parallèle par défaut, mais peuvent être configurés pour s’exécuter séquentiellement.

## Migration des étapes de script

Vous pouvez exécuter un script ou une commande d’environnement en tant qu’étape dans un workflow. Dans Azure Pipelines, les étapes de script peuvent être spécifiées à l’aide de la clé `script` ou des clés `bash`, `powershell` ou `pwsh`. Les scripts peuvent également être spécifiés en tant qu’entrée de la [tâche Bash](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/bash?view=azure-devops) ou de la [tâche PowerShell](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/powershell?view=azure-devops).

Dans {% data variables.product.prodname_actions %}, tous les scripts sont spécifiés à l’aide de la clé `run`. Pour sélectionner un shell particulier, vous pouvez spécifier la clé `shell` lors de la fourniture du script. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun) ».

Voici un exemple de syntaxe pour chaque système :

<table class="d-block">
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: scripts
    pool:
      vmImage: 'windows-latest'
    steps:
      - script: echo "This step runs in the default shell"
      - bash: echo "This step runs in bash"
      - pwsh: Write-Host "This step runs in PowerShell Core"
      - task: PowerShell@2
        inputs:
          script: Write-Host "This step runs in PowerShell"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  scripts:
    runs-on: windows-latest
    steps:
      - run: echo "This step runs in the default shell"
      - run: echo "This step runs in bash"
        shell: bash
      - run: Write-Host "This step runs in PowerShell Core"
        shell: pwsh
      - run: Write-Host "This step runs in PowerShell"
        shell: powershell
```
{% endraw %}
</td>
</tr>
</table>

## Différences dans la gestion des erreurs de script

Dans Azure Pipelines, les scripts peuvent être configurés pour retourner une erreur si une sortie est envoyée à `stderr`. {% data variables.product.prodname_actions %} ne prend pas en charge cette configuration.

{% data variables.product.prodname_actions %} configure les shells pour passer en « mode Fail-fast » dans la mesure du possible, ce qui arrête immédiatement le script si l’une des commandes d’un script se termine avec un code d’erreur. En revanche, Azure Pipelines nécessite une configuration explicite pour quitter immédiatement en cas d’erreur. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference) ».

## Différences dans l’interface par défaut sur Windows

Dans Azure Pipelines, l’interface par défaut pour les scripts sur les plateformes Windows est l’interface de commande (_cmd.exe_). Dans {% data variables.product.prodname_actions %}, l’interface par défaut pour les scripts sur les plateformes Windows est PowerShell. PowerShell présente plusieurs différences dans les commandes intégrées, l’expansion de variables et le contrôle de flux.

Si vous exécutez une commande simple, vous pouvez exécuter un script d’interface de commande dans PowerShell sans aucune modification. Toutefois, dans la plupart des cas, vous devez mettre à jour votre script avec la syntaxe PowerShell ou demander à {% data variables.product.prodname_actions %} d’exécuter le script avec l’interface de commande au lieu de PowerShell. Pour ce faire, spécifiez `shell` comme `cmd`.

Voici un exemple de syntaxe pour chaque système :

<table class="d-block">
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: run_command
    pool:
      vmImage: 'windows-latest'
    steps:
      - script: echo "This step runs in CMD on Windows by default"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  run_command:
    runs-on: windows-latest
    steps:
      - run: echo "This step runs in PowerShell on Windows by default"
      - run: echo "This step runs in CMD on Windows explicitly"
        shell: cmd
```
{% endraw %}
</td>
</tr>
</table>

Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#using-a-specific-shell) ».

## Migration de la syntaxe des expressions et conditions

Azure Pipelines et {% data variables.product.prodname_actions %} peuvent exécuter des étapes de manière conditionnelle. Dans Azure Pipelines, les expressions conditionnelles sont spécifiées à l’aide de la clé `condition`. Dans {% data variables.product.prodname_actions %}, les expressions conditionnelles sont spécifiées à l’aide de la clé `if`.

Azure Pipelines utilise des fonctions dans des expressions pour exécuter des étapes de manière conditionnelle. En revanche, {% data variables.product.prodname_actions %} utilise une notation infixe. Par exemple, vous devez remplacer la fonction `eq` dans Azure Pipelines par l’opérateur `==` dans {% data variables.product.prodname_actions %}.

Voici un exemple de syntaxe pour chaque système :

<table class="d-block">
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: conditional
    pool:
      vmImage: 'ubuntu-latest'
    steps:
      - script: echo "This step runs with str equals 'ABC' and num equals 123"
        condition: and(eq(variables.str, 'ABC'), eq(variables.num, 123))
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: ${{ env.str == 'ABC' && env.num == 123 }}
```
{% endraw %}
</td>
</tr>
</table>

Pour plus d’informations, consultez « [Expressions](/actions/learn-github-actions/expressions) ».

## Dépendances entre les travaux

Azure Pipelines et {% data variables.product.prodname_actions %} vous permettent de définir des dépendances pour un travail. Dans les deux systèmes, les travaux s’exécutent en parallèle par défaut, mais les dépendances de travaux peuvent être spécifiées explicitement. Dans Azure Pipelines, cette opération est effectuée avec la clé `dependsOn`. Dans {% data variables.product.prodname_actions %}, cette opération est effectuée avec la clé `needs`.

Voici un exemple de syntaxe pour chaque système. Les workflows démarrent un premier travail nommé `initial`et, une fois ce travail terminé, deux travaux nommés `fanout1` et `fanout2` s’exécutent. Enfin, une fois ces travaux terminés, le travail `fanin` s’exécute.

<table class="d-block">
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: initial
    pool:
      vmImage: 'ubuntu-latest'
    steps:
      - script: echo "This job will be run first."
  - job: fanout1
    pool:
      vmImage: 'ubuntu-latest'
    dependsOn: initial
    steps:
      - script: echo "This job will run after the initial job, in parallel with fanout2."
  - job: fanout2
    pool:
      vmImage: 'ubuntu-latest'
    dependsOn: initial
    steps:
      - script: echo "This job will run after the initial job, in parallel with fanout1."
  - job: fanin:
    pool:
      vmImage: 'ubuntu-latest'
    dependsOn: [fanout1, fanout2]
    steps:
      - script: echo "This job will run after fanout1 and fanout2 have finished."
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  initial:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first."
  fanout1:
    runs-on: ubuntu-latest
    needs: initial
    steps:
      - run: echo "This job will run after the initial job, in parallel with fanout2."
  fanout2:
    runs-on: ubuntu-latest
    needs: initial
    steps:
      - run: echo "This job will run after the initial job, in parallel with fanout1."
  fanin:
    runs-on: ubuntu-latest
    needs: [fanout1, fanout2]
    steps:
      - run: echo "This job will run after fanout1 and fanout2 have finished."
```
{% endraw %}
</td>
</tr>
</table>

Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds) ».

## Migration de tâches vers des actions

Azure Pipelines utilise des _tâches_, qui sont des composants d’application qui peuvent être réutilisés dans plusieurs workflows. {% data variables.product.prodname_actions %} utilise des _actions_ qui peuvent être utilisées pour effectuer des tâches et personnaliser votre workflow. Dans les deux systèmes, vous pouvez spécifier le nom de la tâche ou de l’action à exécuter, ainsi que toutes les entrées requises sous forme de paires clé/valeur.

Voici un exemple de syntaxe pour chaque système :

<table>
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: run_python
    pool:
      vmImage: 'ubuntu-latest'
    steps:
      - task: UsePythonVersion@0
        inputs:
          versionSpec: '3.7'
          architecture: 'x64'
      - script: python script.py
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

Vous pouvez trouver des actions que vous pouvez utiliser dans votre workflow dans [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions), ou vous pouvez créer vos propres actions. Pour plus d’informations, consultez « [Création d’actions](/actions/creating-actions) ».
