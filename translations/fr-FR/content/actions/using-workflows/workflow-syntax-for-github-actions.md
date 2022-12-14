---
title: Workflow syntax for GitHub Actions
shortTitle: Workflow syntax
intro: Un workflow est un processus automatisé configurable qui comprend un ou plusieurs travaux. Vous devez créer un fichier YAML pour définir votre configuration de workflow.
redirect_from:
  - /articles/workflow-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/reference/workflow-syntax-for-github-actions
  - /actions/learn-github-actions/workflow-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: ca5a79fbaeeafa474283cbabd67108cb22b6f985
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192047'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos de la syntaxe YAML pour les workflows

Les fichiers de workflow utilisent la syntaxe YAML, et doivent avoir une extension de fichier `.yml` ou `.yaml`. {% data reusables.actions.learn-more-about-yaml %}

Vous devez stocker les fichiers de workflow dans le répertoire `.github/workflows` de votre dépôt.

## `name`

nom de votre flux de travail. {% data variables.product.prodname_dotcom %} affiche les noms de vos workflows sous l’onglet « Actions » de votre dépôt. Si vous omettez `name`, {% data variables.product.prodname_dotcom %} lui attribue le chemin du fichier de workflow relatif à la racine du dépôt.

{% ifversion actions-run-name %}
## `run-name`

Nom des exécutions de workflow généré à partir du workflow. {% data variables.product.prodname_dotcom %} affiche le nom de l’exécution de workflow dans la liste des exécutions de workflow sous l’onglet « Actions » de votre dépôt. Si `run-name` est omis ou s’il est juste un espace blanc, le nom d’exécution est défini sur la base des informations spécifiques à l’événement pour l’exécution du workflow. Par exemple, pour un workflow déclenché par un événement `push` ou `pull_request`, il est défini avec le message de commit.

Cette valeur peut inclure des expressions et peut référencer les contextes [`github`](/actions/learn-github-actions/contexts#github-context) et [`inputs`](/actions/learn-github-actions/contexts#inputs-context).

### Exemple

{% raw %}
```yaml
run-name: Deploy to ${{ inputs.deploy_target }} by @${{ github.actor }}
```
{% endraw %} {% endif %}

## `on`

{% data reusables.actions.workflows.section-triggering-a-workflow %}

### `on.<event_name>.types`

{% data reusables.actions.workflows.section-triggering-a-workflow-types %}

### `on.<pull_request|pull_request_target>.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-triggering-a-workflow-branches %}

### `on.push.<branches|tags|branches-ignore|tags-ignore>`

{% data reusables.actions.workflows.section-run-on-specific-branches-or-tags %}

### `on.<push|pull_request|pull_request_target>.<paths|paths-ignore>`

{% data reusables.actions.workflows.section-triggering-a-workflow-paths %}

### `on.schedule`

{% data reusables.actions.workflows.section-triggering-a-workflow-schedule %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## `on.workflow_call`

{% data reusables.actions.reusable-workflows-enterprise-beta %}

Utilisez `on.workflow_call` pour définir les entrées et sorties d’un workflow réutilisable. Vous pouvez également mapper les secrets disponibles au workflow appelé. Pour plus d’informations sur les workflows réutilisables, consultez « [Réutilisation des workflows](/actions/using-workflows/reusing-workflows) ».

### `on.workflow_call.inputs`

Lorsque vous utilisez le mot clé `workflow_call`, vous pouvez éventuellement spécifier des entrées qui sont passées au workflow appelé à partir du workflow appelant. Pour plus d’informations sur le mot clé `workflow_call`, consultez « [Événements qui déclenchent des workflows](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events) ».

En plus des paramètres d’entrée standard disponibles, `on.workflow_call.inputs` nécessite un paramètre `type`. Pour plus d’informations, consultez [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype).

Si aucun paramètre `default` n’est défini, la valeur par défaut de l’entrée est `false` pour une valeur booléenne, `0` pour un nombre et `""` pour une chaîne.

Dans le workflow appelé, vous pouvez utiliser le contexte `inputs` pour référencer une entrée.

Si un workflow appelant passe une entrée qui n’est pas spécifiée dans le workflow appelé, cela entraîne une erreur.

#### Exemple

{% raw %}
```yaml
on:
  workflow_call:
    inputs:
      username:
        description: 'A username passed from the caller workflow'
        default: 'john-doe'
        required: false
        type: string

jobs:
  print-username:
    runs-on: ubuntu-latest

    steps:
      - name: Print the input name to STDOUT
        run: echo The username is ${{ inputs.username }}
```
{% endraw %}

Pour plus d’informations, consultez « [Réutilisation de workflows](/actions/learn-github-actions/reusing-workflows) ».

#### `on.workflow_call.inputs.<input_id>.type`

Obligatoire si l’entrée est définie pour le mot clé `on.workflow_call`. La valeur de ce paramètre est une chaîne spécifiant le type de données de l’entrée. Il doit s’agir de l’une des valeurs suivantes : `boolean`, `number` ou `string`.

### `on.workflow_call.outputs`

Mappage des sorties pour un workflow appelé. Les sorties de workflow appelé sont disponibles pour tous les travaux en aval dans le workflow appelant. Chaque sortie a un identificateur, une `description,` facultative et une valeur (`value.`). `value` doit être définie sur la valeur d’une sortie d’un travail dans le workflow appelé.

Dans l’exemple ci-dessous, deux sorties sont définies pour ce workflow réutilisable : `workflow_output1` et `workflow_output2`. Celles-ci sont mappées aux sorties appelées `job_output1` et `job_output2`, toutes les deux provenant d’un travail appelé `my_job`.

#### Exemple

{% raw %}
```yaml
on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      workflow_output1:
        description: "The first job output"
        value: ${{ jobs.my_job.outputs.job_output1 }}
      workflow_output2:
        description: "The second job output"
        value: ${{ jobs.my_job.outputs.job_output2 }}
```
{% endraw %}

Pour plus d’informations sur la façon de référencer une sortie de travail, consultez [`jobs.<job_id>.outputs`](#jobsjob_idoutputs). Pour plus d’informations, consultez « [Réutilisation de workflows](/actions/learn-github-actions/reusing-workflows) ».

### `on.workflow_call.secrets`

Mappage des secrets qui peuvent être utilisés dans le workflow appelé.

Dans le workflow appelé, vous pouvez utiliser le contexte `secrets` pour référencer un secret.

Si un workflow appelant passe un secret qui n’est pas spécifié dans le workflow appelé, cela entraîne une erreur.

#### Exemple

{% raw %}
```yaml
on:
  workflow_call:
    secrets:
      access-token:
        description: 'A token passed from the caller workflow'
        required: false

jobs:
  pass-secret-to-action:
    runs-on: ubuntu-latest

    steps:
      - name: Pass the received secret to an action
        uses: ./.github/actions/my-action
        with:
          token: ${{ secrets.access-token }}
```
{% endraw %}

#### `on.workflow_call.secrets.<secret_id>`

Identificateur de chaîne à associer au secret.

#### `on.workflow_call.secrets.<secret_id>.required`

Valeur booléenne spécifiant si le secret doit être fourni.
{% endif %}

## `on.workflow_run.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-specifying-branches %}

## `on.workflow_dispatch.inputs`

{% data reusables.actions.workflow-dispatch-inputs %}

## `permissions`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs %}

## `env`

Mappage (`map`) des variables d’environnement qui sont disponibles pour les étapes de tous les travaux du workflow. Vous pouvez également définir des variables d’environnement qui sont disponibles uniquement pour les étapes d’un seul travail ou pour une seule étape. Pour plus d’informations, consultez [`jobs.<job_id>.env`](#jobsjob_idenv) et [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

Les variables du mappage `env` ne peuvent pas être définies d’après d’autres variables du mappage.

{% data reusables.repositories.actions-env-var-note %}

### Exemple

```yaml
env:
  SERVER: production
```

## `defaults`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults %}

### `defaults.run`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-run %}

## `concurrency`

{% data reusables.actions.jobs.section-using-concurrency %}

## `jobs`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow %}

### `jobs.<job_id>`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-id %}

### `jobs.<job_id>.name`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-name %}

### `jobs.<job_id>.permissions`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs-specific %}

## `jobs.<job_id>.needs`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-needs %}

## `jobs.<job_id>.if`

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

## `jobs.<job_id>.runs-on`

{% data reusables.actions.jobs.section-choosing-the-runner-for-a-job %}

## `jobs.<job_id>.environment`

{% data reusables.actions.jobs.section-using-environments-for-jobs %}

## `jobs.<job_id>.concurrency`

{% data reusables.actions.jobs.section-using-concurrency-jobs %}

## `jobs.<job_id>.outputs`

{% data reusables.actions.jobs.section-defining-outputs-for-jobs %}

## `jobs.<job_id>.env`

Mappage (`map`) des variables d’environnement qui sont disponibles pour toutes les étapes du travail. Vous pouvez également définir des variables d’environnement pour l’ensemble du workflow ou pour une étape individuelle. Pour plus d’informations, consultez [`env`](#env) et [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

{% data reusables.repositories.actions-env-var-note %}

### Exemple

```yaml
jobs:
  job1:
    env:
      FIRST_NAME: Mona
```

## `jobs.<job_id>.defaults`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-job %}

### `jobs.<job_id>.defaults.run`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-job-run %}

## `jobs.<job_id>.steps`

Un travail contient une séquence de tâches appelées « étapes » (`steps`). Les étapes peuvent exécuter des commandes, exécuter des tâches de configuration ou exécuter une action dans votre dépôt ou dans un dépôt public, ou une action publiée dans un registre Docker. Toutes les étapes n’exécutent pas d’actions, mais toutes les actions s’exécutent en tant qu’étape. Chaque étape s’exécute dans son propre processus dans l’environnement de l’exécuteur et a accès à l’espace de travail et au système de fichiers. Étant donné que les étapes s’exécutent dans leur propre processus, les modifications apportées aux variables d’environnement ne sont pas conservées d’une étapes à l’autre. {% data variables.product.prodname_dotcom %} fournit des étapes intégrées pour configurer et effectuer un travail.

Vous pouvez exécuter un nombre illimité d’étapes tant que vous êtes dans les limites d’utilisation du workflow. Pour plus d’informations, consultez {% ifversion fpt or ghec or ghes %}« [Limites d’utilisation et facturation](/actions/reference/usage-limits-billing-and-administration) » pour les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} et {% endif %}« [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %} » pour connaître les limites d’utilisation des exécuteurs auto-hébergés.{% elsif ghae %} ».{% endif %}

### Exemple

{% raw %}
```yaml
name: Greeting from Mona

on: push

jobs:
  my-job:
    name: My Job
    runs-on: ubuntu-latest
    steps:
      - name: Print a greeting
        env:
          MY_VAR: Hi there! My name is
          FIRST_NAME: Mona
          MIDDLE_NAME: The
          LAST_NAME: Octocat
        run: |
          echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.
```
{% endraw %}

### `jobs.<job_id>.steps[*].id`

Identificateur unique pour l’étape. Vous pouvez utiliser l’`id` pour référencer l’étape dans des contextes. Pour plus d’informations, consultez « [Contextes](/actions/learn-github-actions/contexts) ».

### `jobs.<job_id>.steps[*].if`

Vous pouvez utiliser la condition `if` pour empêcher l’exécution d’une étape si une condition n’est pas remplie. {% data reusables.actions.if-supported-contexts %}

{% data reusables.actions.expression-syntax-if %} Pour plus d’informations, consultez « [Expressions](/actions/learn-github-actions/expressions) ».

#### Exemple : Utilisation des contextes

 Cette étape s’exécute uniquement lorsque le type d’événement est `pull_request` et que l’action d’événement est `unassigned`.

 ```yaml
steps:
  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.
```

#### Exemple : Utilisation des fonctions de vérification d’état

L’étape `my backup step` s’exécute uniquement lorsque l’étape précédente d’un travail échoue. Pour plus d’informations, consultez « [Expressions](/actions/learn-github-actions/expressions#status-check-functions) ».

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```

#### Exemple : Utilisation de secrets

Les secrets ne peuvent pas être directement référencés dans les conditions `if:`. Au lieu de cela, envisagez de définir des secrets en tant que variables d’environnement au niveau du travail, puis de référencer les variables d’environnement pour exécuter des étapes de manière conditionnelle dans le travail.

Si un secret n’a pas été défini, la valeur de retour d’une expression référençant le secret (comme {% raw %}`${{ secrets.SuperSecret }}`{% endraw %} dans l’exemple) est une chaîne vide.

{% raw %}
```yaml
name: Run a step if a secret has been set
on: push
jobs:
  my-jobname:
    runs-on: ubuntu-latest
    env:
      super_secret: ${{ secrets.SuperSecret }}
    steps:
      - if: ${{ env.super_secret != '' }}
        run: echo 'This step will only run if the secret has a value set.'
      - if: ${{ env.super_secret == '' }}
        run: echo 'This step will only run if the secret does not have a value set.'
```
{% endraw %}

Pour plus d’informations, consultez « [Disponibilité du contexte](/actions/learn-github-actions/contexts#context-availability) » et « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».

### `jobs.<job_id>.steps[*].name`

Nom de votre étape à afficher sur {% data variables.product.prodname_dotcom %}.

### `jobs.<job_id>.steps[*].uses`

Sélectionne une action à exécuter dans le cadre d’une étape de votre travail. Une action est une unité de code réutilisable. Vous pouvez utiliser une action définie dans le même dépôt que le workflow, dans un dépôt public ou dans une [image conteneur Docker publiée](https://hub.docker.com/).

Nous vous recommandons vivement d’inclure la version de l’action que vous utilisez en spécifiant une étiquette Git ref, SHA ou Docker. Si vous ne spécifiez pas de version, cela peut arrêter vos workflows ou provoquer un comportement inattendu lorsque le propriétaire de l’action publie une mise à jour.
- L’utilisation du SHA de commit d’une version d’action publiée est la solution la plus sûre en termes de stabilité et de sécurité.
- Si l’action publie des étiquettes de version principale, vous devez vous attendre à recevoir des correctifs critiques et des correctifs de sécurité qui conserveront la compatibilité. Notez que ce comportement est à la discrétion de l’auteur de l’action.
- L’utilisation de la branche par défaut d’une action peut être pratique. Toutefois, si un utilisateur publie une nouvelle version majeure avec un changement cassant, votre workflow peut s’arrêter.

Certaines actions nécessitent des entrées que vous devez définir à l’aide du mot clé [`with`](#jobsjob_idstepswith). Examinez le fichier README de l’action pour déterminer les entrées nécessaires.

Les actions sont des fichiers JavaScript ou des conteneurs Docker. Si l’action que vous utilisez est un conteneur Docker, vous devez exécuter le travail dans un environnement Linux. Pour plus d’informations, consultez la page [`runs-on`](#jobsjob_idruns-on).

#### Exemple : Utilisation d’actions avec versions gérées

```yaml
steps:
  # Reference a specific commit
  - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
  # Reference the major version of a release
  - uses: {% data reusables.actions.action-checkout %}
  # Reference a specific version
  - uses: {% data reusables.actions.action-checkout %}.2.0
  # Reference a branch
  - uses: actions/checkout@main
```

#### Exemple : Utilisation d’une action publique

`{owner}/{repo}@{ref}`

Vous pouvez spécifier une branche, une référence ou un SHA dans un dépôt {% data variables.product.prodname_dotcom %} public.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        # Uses the default branch of a public repository
        uses: actions/heroku@main
      - name: My second step
        # Uses a specific version tag of a public repository
        uses: actions/aws@v2.0.1
```

#### Exemple : Utilisation d’une action publique dans un sous-répertoire

`{owner}/{repo}/{path}@{ref}`

Sous-répertoire dans un dépôt {% data variables.product.prodname_dotcom %} public sur une branche, une référence ou un SHA spécifique.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@main
```

#### Exemple : Utilisation d’une action dans le même dépôt que le workflow

`./path/to/dir`

Chemin du répertoire qui contient l’action dans le dépôt de votre workflow. Vous devez valider votre dépôt avant d’utiliser l’action.

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

#### Exemple : Utilisation d’une action de Docker Hub

`docker://{image}:{tag}`

Image Docker publiée sur [Docker Hub](https://hub.docker.com/).

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

{% ifversion fpt or ghec %}
#### Exemple : Utilisation de {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}

`docker://{host}/{image}:{tag}`

Exemple : Image Docker de {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://ghcr.io/OWNER/IMAGE_NAME
```
{% endif %}
#### Exemple : Utilisation d’une action de registre public Docker

`docker://{host}/{image}:{tag}`

Image Docker dans un registre public. Cet exemple utilise Google Container Registry à l’adresse `gcr.io`.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://gcr.io/cloud-builders/gradle
```

#### Exemple : Utilisation d’une action à l’intérieur d’un autre dépôt privé que le workflow

Votre workflow doit valider le dépôt privé et référencer l’action localement. Générez un {% data variables.product.pat_generic %} et ajoutez le jeton comme secret chiffré. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token) » et « [Secrets chiffrés](/actions/reference/encrypted-secrets) ».

Remplacez `PERSONAL_ACCESS_TOKEN` dans l’exemple par le nom de votre secret.

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: {% data reusables.actions.action-checkout %}
        with:
          repository: octocat/my-private-repo
          ref: v1.0
          token: {% raw %}${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
          path: ./.github/actions/my-private-repo
      - name: Run my action
        uses: ./.github/actions/my-private-repo/my-action
```

### `jobs.<job_id>.steps[*].run`

Exécutez des programmes en ligne de commande avec l’interpréteur de commandes du système d’exploitation. Si vous ne fournissez pas d’élément `name`, le nom de l’étape est défini par défaut sur le texte spécifié dans la commande `run`.

Par défaut, les commandes s’exécutent à l’aide d’interpréteurs de commandes sans connexion. Vous pouvez choisir un autre interpréteur de commandes et personnaliser l’interpréteur de commandes utilisé pour exécuter des commandes. Pour plus d’informations, consultez [`jobs.<job_id>.steps[*].shell`](#jobsjob_idstepsshell).

Chaque mot clé `run` représente un nouveau processus et un nouvel interpréteur de commandes dans l’environnement de l’exécuteur. Lorsque vous fournissez des commandes qui s’étendent sur plusieurs lignes, chaque ligne s’exécute dans le même interpréteur de commandes. Par exemple :

* Commande sur une seule ligne :

  ```yaml
  - name: Install Dependencies
    run: npm install
  ```

* Commande sur plusieurs lignes :

  ```yaml
  - name: Clean install dependencies and build
    run: |
      npm ci
      npm run build
  ```

À l’aide du mot clé `working-directory`, vous pouvez spécifier le répertoire de travail d’où exécuter la commande.

```yaml
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

### `jobs.<job_id>.steps[*].shell`

Vous pouvez remplacer les paramètres d’interpréteur de commandes par défaut dans le système d’exploitation de l’exécuteur à l’aide du mot clé `shell`. Vous pouvez utiliser des mots clés `shell` intégrés ou définir un ensemble personnalisé d’options d’interpréteur de commandes. La commande d’interpréteur de commandes exécutée en interne exécute un fichier temporaire qui contient les commandes spécifiées dans le mot clé `run`.

| Plateforme prise en charge | Paramètre `shell` | Description | Commande exécutée en interne |
|--------------------|-------------------|-------------|------------------------|
| Linux / macOS | unspecified | Interpréteur de commandes par défaut sur les plateformes non Windows. Notez que cette opération exécute une commande différente par rapport à quand `bash` est spécifié explicitement. Si `bash` n’est pas trouvé dans le chemin, il est considéré comme `sh`. | `bash -e {0}` |
| Tous | `bash` | Interpréteur de commandes par défaut sur les plateformes non Windows avec `sh` comme valeur de secours. Lors de la spécification d’un interpréteur de commandes Bash sur Windows, l’interpréteur de commandes Bash inclus avec Git pour Windows est utilisé. | `bash --noprofile --norc -eo pipefail {0}` |
| Tous | `pwsh` | PowerShell Core. {% data variables.product.prodname_dotcom %} ajoute l’extension `.ps1` au nom de votre script. | `pwsh -command ". '{0}'"` |
| Tous | `python` | Exécute la commande Python. | `python {0}` |
| Linux / macOS | `sh` | Comportement de secours pour les plateformes non Windows si aucun interpréteur de commandes n’est fourni et que `bash` ne se trouve pas dans le chemin. | `sh -e {0}` |
| Windows | `cmd` | {% data variables.product.prodname_dotcom %} ajoute l’extension `.cmd` au nom de votre script et se substitue à `{0}`. | `%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`. |
| Windows | `pwsh` | Il s’agit de l’interpréteur de commandes par défaut utilisé sur Windows. PowerShell Core. {% data variables.product.prodname_dotcom %} ajoute l’extension `.ps1` au nom de votre script. Si _PowerShell Core_ n’est pas installé sur votre exécuteur Windows auto-hébergé, _PowerShell Desktop_ est utilisé à la place.| `pwsh -command ". '{0}'"`. |
| Windows | `powershell` | PowerShell Desktop. {% data variables.product.prodname_dotcom %} ajoute l’extension `.ps1` au nom de votre script. | `powershell -command ". '{0}'"`. |

#### Exemple : Exécution d’un script à l’aide de bash

```yaml
steps:
  - name: Display the path
    run: echo $PATH
    shell: bash
```

#### Exemple : Exécution d’un script à l’aide de `cmd` Windows

```yaml
steps:
  - name: Display the path
    run: echo %PATH%
    shell: cmd
```

#### Exemple : Exécution d’un script à l’aide de PowerShell Core

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: pwsh
```

#### Exemple : Utilisation de PowerShell Desktop pour exécuter un script

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: powershell
```

#### Exemple : Exécution d’un script Python

```yaml
steps:
  - name: Display the path
    run: |
      import os
      print(os.environ['PATH'])
    shell: python
```

#### Interpréteur de commandes personnalisé

Vous pouvez définir la valeur `shell` sur une chaîne de modèle à l’aide de `command […options] {0} [..more_options]`. {% data variables.product.prodname_dotcom %} interprète le premier mot délimité par des espaces blancs de la chaîne comme la commande, et insère le nom de fichier pour le script temporaire à l’emplacement `{0}`.

Par exemple :

```yaml
steps:
  - name: Display the environment variables and their values
    run: |
      print %ENV
    shell: perl {0}
```

La commande utilisée, `perl` dans cet exemple, doit être installée sur l’exécuteur.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% elsif fpt or ghec %} Pour plus d’informations sur les logiciels inclus dans les exécuteurs hébergés par GitHub, consultez « [Spécifications pour les exécuteurs hébergés par GitHub](/actions/reference/specifications-for-github-hosted-runners#supported-software) ».
{% endif %}

#### Codes de sortie et préférence d’action en cas d’erreur

Pour les mots clés d’interpréteur de commandes intégrés, nous fournissons les valeurs par défaut suivantes qui sont exécutées par les exécuteurs hébergés par {% data variables.product.prodname_dotcom %}. Vous devez utiliser ces instructions lors de l’exécution de scripts de l’interpréteur de commandes.

- `bash`/`sh`:
  - Comportement Fail-fast avec `set -eo pipefail` : cette option est définie quand `shell: bash` est spécifié explicitement. Elle n’est pas appliquée par défaut.
  - Vous pouvez prendre le contrôle total des paramètres de l’interpréteur de commandes en fournissant une chaîne de modèle aux options de l’interpréteur de commandes. Par exemple : `bash {0}`.
  - Les interpréteurs de commandes de type sh se terminent par le code de sortie de la dernière commande exécutée dans un script, ce qui est également le comportement par défaut pour les actions. L’exécuteur signale l’état de l’étape en tant qu’échec/réussite en fonction de ce code de sortie.

- `powershell`/`pwsh`
  - Comportement Fail-fast lorsque cela est possible. Pour l’interpréteur de commandes intégré `pwsh` et `powershell`, nous allons ajouter `$ErrorActionPreference = 'stop'` au contenu du script.
  - Nous ajoutons `if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }` aux scripts PowerShell afin que les états d’action reflètent le dernier code de sortie du script.
  - Les utilisateurs peuvent toujours choisir de ne pas utiliser l’interpréteur de commandes intégré et de fournir une option d’interpréteur de commandes personnalisée comme `pwsh -File {0}` ou `powershell -Command "& '{0}'"`, selon les besoins.

- `cmd`
  - Il semble qu’il n’existe pas de moyen d’adopter entièrement un comportement Fail-fast autre que l’écriture de votre script pour vérifier chaque code d’erreur et répondre en conséquence. Étant donné que nous ne pouvons en fait pas fournir ce comportement par défaut, vous devez écrire ce comportement dans votre script.
  - `cmd.exe` s’arrête avec le niveau d’erreur du dernier programme qu’il a exécuté, et retourne le code d’erreur à l’exécuteur. Ce comportement est cohérent en interne avec le comportement par défaut précédent de `sh` et de `pwsh`, et c’est la valeur par défaut de `cmd.exe`. Ce comportement reste donc intact.

### `jobs.<job_id>.steps[*].with`

Mappage (`map`) des paramètres d’entrée définis par l’action. Chaque paramètre d’entrée est une paire clé/valeur. Les paramètres d’entrée sont définis en tant que variables d’environnement. La variable est dotée du préfixe `INPUT_` et est convertie en majuscules.

#### Exemple

Définit les trois paramètres d’entrée (`first_name`, `middle_name` et `last_name`) définis par l’action `hello_world`. Ces variables d’entrée seront accessibles à l’action `hello-world` en tant que variables d’environnement `INPUT_FIRST_NAME`, `INPUT_MIDDLE_NAME` et `INPUT_LAST_NAME`.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/hello_world@main
        with:
          first_name: Mona
          middle_name: The
          last_name: Octocat
```

### `jobs.<job_id>.steps[*].with.args`

Une valeur `string` définit les entrées d’un conteneur Docker. {% data variables.product.prodname_dotcom %} passe `args` au `ENTRYPOINT` du conteneur quand ce dernier démarre. Un `array of strings` n’est pas pris en charge par ce paramètre.

#### Exemple

{% raw %}
```yaml
steps:
  - name: Explain why this job ran
    uses: octo-org/action-name@main
    with:
      entrypoint: /bin/echo
      args: The ${{ github.event_name }} event triggered this step.
```
{% endraw %}

Les valeurs `args` sont utilisées à la place de l’instruction `CMD` dans un `Dockerfile`. Si vous utilisez `CMD` dans votre `Dockerfile`, utilisez les instructions classées par ordre de préférence :

1. Documentez les arguments requis dans le fichier README de l’action et omettez-les de l’instruction `CMD`.
1. Utilisez les valeurs par défaut qui autorisent l’utilisation de l’action sans spécifier aucune valeur `args`.
1. Si l’action expose un indicateur `--help`, ou quelque chose de similaire, utilisez-le comme valeur par défaut pour rendre votre action auto-documentée.

### `jobs.<job_id>.steps[*].with.entrypoint`

Remplace la valeur `ENTRYPOINT` Docker dans le `Dockerfile`, ou la définit si aucune n’est encore spécifiée. Contrairement à l’instruction Docker `ENTRYPOINT` qui a un interpréteur de commandes et le format exec, le mot clé `entrypoint` accepte une seule chaîne définissant l’exécutable à exécuter.

#### Exemple

```yaml
steps:
  - name: Run a custom command
    uses: octo-org/action-name@main
    with:
      entrypoint: /a/different/executable
```

Le mot clé `entrypoint` est destiné à être utilisé avec des actions de conteneur Docker, mais vous pouvez également l’utiliser avec des actions JavaScript qui ne définissent aucune entrée.

### `jobs.<job_id>.steps[*].env`

Définit des variables d’environnement pour les étapes à utiliser dans l’environnement de l’exécuteur. Vous pouvez également définir des variables d’environnement pour l’ensemble du workflow ou pour un travail. Pour plus d’informations, consultez [`env`](#env) et [`jobs.<job_id>.env`](#jobsjob_idenv).

{% data reusables.repositories.actions-env-var-note %}

Les actions publiques peuvent spécifier les variables d’environnement attendues dans le fichier README. Si vous définissez un secret dans une variable d’environnement, vous devez définir des secrets à l’aide du contexte `secrets`. Pour en savoir plus, consultez « [Utilisation de variables d’environnement](/actions/automating-your-workflow-with-github-actions/using-environment-variables) » et « [Contextes](/actions/learn-github-actions/contexts) ».

#### Exemple

{% raw %}
```yaml
steps:
  - name: My first action
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      FIRST_NAME: Mona
      LAST_NAME: Octocat
```
{% endraw %}

### `jobs.<job_id>.steps[*].continue-on-error`

Empêche que l’échec d’une étape fasse échouer un travail. Définissez la valeur `true` pour permettre à un travail de réussir en cas d’échec de cette étape.

### `jobs.<job_id>.steps[*].timeout-minutes`

Nombre maximal de minutes pour exécuter l’étape avant l’arrêt du processus.

## `jobs.<job_id>.timeout-minutes`

Nombre maximal de minutes pour permettre à un travail de s’exécuter avant que {% data variables.product.prodname_dotcom %} l’annule automatiquement. Valeur par défaut : 360

Si le délai d’expiration dépasse le délai d’exécution du travail pour l’exécuteur, le travail est annulé lorsque le délai d’exécution est écoulé à la place. Pour plus d’informations sur les délais d’exécution des travaux, consultez {% ifversion fpt or ghec or ghes %}« [Limites d’utilisation et facturation](/actions/reference/usage-limits-billing-and-administration#usage-limits) » pour les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} et {% endif %}« [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %} » pour connaître les limites d’utilisation des exécuteurs auto-hébergés.{% elsif ghae %} ».{% endif %}

{% note %}

**Remarque :** {% data reusables.actions.github-token-expiration %} Pour les exécuteurs auto-hébergés, le jeton peut être le facteur restrictif si le délai d’expiration du travail est supérieur à 24 heures. Pour plus d’informations sur le `GITHUB_TOKEN`, consultez « [À propos du secret de `GITHUB_TOKEN`](/actions/security-guides/automatic-token-authentication#about-the-github_token-secret) ».

{% endnote %}

## `jobs.<job_id>.strategy`

Utilisez `jobs.<job_id>.strategy` pour utiliser une stratégie de matrice pour vos travaux. {% data reusables.actions.jobs.about-matrix-strategy %} Pour plus d’informations, consultez « [Utilisation d’une matrice pour vos travaux](/actions/using-jobs/using-a-matrix-for-your-jobs) ».

### `jobs.<job_id>.strategy.matrix`

{% data reusables.actions.jobs.using-matrix-strategy %}

#### Exemple : Utilisation d’une matrice à une seule dimension

{% data reusables.actions.jobs.single-dimension-matrix %}

#### Exemple : Utilisation d’une matrice à plusieurs dimensions

{% data reusables.actions.jobs.multi-dimension-matrix %}

#### Exemple : Utilisation de contextes pour créer des matrices

{% data reusables.actions.jobs.matrix-from-context %}

### `jobs.<job_id>.strategy.matrix.include`

{% data reusables.actions.jobs.matrix-include %}

#### Exemple : Développement de configurations

{% data reusables.actions.jobs.matrix-expand-with-include %}

#### Exemple : Ajout de configurations

{% data reusables.actions.jobs.matrix-add-with-include %}

### `jobs.<job_id>.strategy.matrix.exclude`

{% data reusables.actions.jobs.matrix-exclude %}

### `jobs.<job_id>.strategy.fail-fast`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

### `jobs.<job_id>.strategy.max-parallel`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}

## `jobs.<job_id>.continue-on-error`

Empêche que l’échec d’un travail fasse échouer une exécution de workflow. Définissez la valeur `true` pour permettre à un workflow de réussir en cas d’échec de ce travail.

### Exemple : Empêcher un travail de matrice défaillant spécifique de faire échouer une exécution de workflow

Vous pouvez autoriser l’échec de travaux spécifiques d’une matrice de travaux sans faire échouer l’exécution du workflow. Par exemple, si vous souhaitiez autoriser uniquement un travail expérimental avec `node` défini sur `15` à échouer sans faire échouer l’exécution du workflow.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
continue-on-error: ${{ matrix.experimental }}
strategy:
  fail-fast: false
  matrix:
    node: [13, 14]
    os: [macos-latest, ubuntu-latest]
    experimental: [false]
    include:
      - node: 15
        os: ubuntu-latest
        experimental: true
```
{% endraw %}

## `jobs.<job_id>.container`

{% data reusables.actions.docker-container-os-support %}

{% data reusables.actions.jobs.section-running-jobs-in-a-container %}

### `jobs.<job_id>.container.image`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-image %}

### `jobs.<job_id>.container.credentials`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-credentials %}

### `jobs.<job_id>.container.env`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-env %}

### `jobs.<job_id>.container.ports`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-ports %}

### `jobs.<job_id>.container.volumes`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-volumes %}

### `jobs.<job_id>.container.options`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-options %}

## `jobs.<job_id>.services`

{% data reusables.actions.docker-container-os-support %}

Utilisé pour héberger des conteneurs de service pour un travail dans un workflow. Les conteneurs de service sont utiles pour créer des bases de données ou des services de cache comme Redis. L’exécuteur crée automatiquement un réseau Docker et gère le cycle de vie des conteneurs de service.

Si vous configurez votre travail pour qu’il s’exécute dans un conteneur ou que votre étape utilise des actions de conteneur, vous n’avez pas besoin de mapper les ports pour accéder au service ou à l’action. Docker expose automatiquement tous les ports entre les conteneurs se trouvant sur le même réseau de pont défini par l’utilisateur Docker. Vous pouvez référencer directement le conteneur de service par son nom d’hôte. Le nom d’hôte est automatiquement mappé au nom d’étiquette que vous configurez pour le service dans le workflow.

Si vous configurez le travail pour qu’il s’exécute directement sur la machine de l’exécuteur et que votre étape n’utilise pas d’action de conteneur, vous devez mapper tous les ports de conteneur de service Docker requis à l’hôte Docker (la machine de l’exécuteur). Vous pouvez accéder au conteneur de service à l’aide de localhost et du port mappé.

Pour plus d’informations sur les différences entre les conteneurs de service réseau, consultez « [À propos des conteneurs de service](/actions/automating-your-workflow-with-github-actions/about-service-containers) ».

### Exemple : Utilisation de localhost

Cet exemple crée deux services : nginx et redis. Lorsque vous spécifiez le port d’hôte Docker, mais pas le port du conteneur, le port du conteneur est attribué de manière aléatoire à un port libre. {% data variables.product.prodname_dotcom %} définit le port de conteneur affecté dans le contexte {% raw %}`${{job.services.<service_name>.ports}}`{% endraw %}. Dans cet exemple, vous pouvez accéder aux ports de conteneur de service à l’aide des contextes {% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} and {% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %}.

```yaml
services:
  nginx:
    image: nginx
    # Map port 8080 on the Docker host to port 80 on the nginx container
    ports:
      - 8080:80
  redis:
    image: redis
    # Map TCP port 6379 on Docker host to a random free port on the Redis container
    ports:
      - 6379/tcp
```

### `jobs.<job_id>.services.<service_id>.image`

Image Docker à utiliser comme conteneur de service pour exécuter l’action. La valeur peut être le nom de l’image Docker Hub ou un nom de registre.

### `jobs.<job_id>.services.<service_id>.credentials`

{% data reusables.actions.registry-credentials %}

#### Exemple

{% raw %}
```yaml
services:
  myservice1:
    image: ghcr.io/owner/myservice1
    credentials:
      username: ${{ github.actor }}
      password: ${{ secrets.github_token }}
  myservice2:
    image: dockerhub_org/myservice2
    credentials:
      username: ${{ secrets.DOCKER_USER }}
      password: ${{ secrets.DOCKER_PASSWORD }}
```
{% endraw %}

### `jobs.<job_id>.services.<service_id>.env`

Définit un mappage (`map`) de variables d’environnement dans le conteneur de service.

### `jobs.<job_id>.services.<service_id>.ports`

Définit un tableau (`array`) de ports à exposer sur le conteneur de service.

### `jobs.<job_id>.services.<service_id>.volumes`

Définit un tableau (`array`) de volumes pour le conteneur de service à utiliser. Vous pouvez utiliser des volumes pour partager des données entre des services ou d’autres étapes d’un travail. Vous pouvez spécifier des volumes Docker nommés, des volumes Docker anonymes ou des montages de liaisons sur l’hôte.

Pour spécifier un volume, vous spécifiez le chemin source et le chemin de destination :

`<source>:<destinationPath>`.

La valeur `<source>` est un nom de volume ou un chemin absolu sur la machine hôte et `<destinationPath>` est un chemin absolu dans le conteneur.

#### Exemple

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

### `jobs.<job_id>.services.<service_id>.options`

Options de ressources de conteneur Docker supplémentaires. Pour obtenir la liste des options, consultez « [Options `docker create`](https://docs.docker.com/engine/reference/commandline/create/#options) ».

{% warning %}

**Avertissement :** L’option `--network` n’est pas prise en charge.

{% endwarning %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## `jobs.<job_id>.uses`

{% data reusables.actions.reusable-workflows-enterprise-beta %}

Emplacement et version d’un fichier de workflow réutilisable à exécuter en tant que travail. {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}Utilisez l’une des syntaxes suivantes :{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

### Exemple

{% data reusables.actions.uses-keyword-example %}

Pour plus d’informations, consultez « [Réutilisation de workflows](/actions/learn-github-actions/reusing-workflows) ».

### `jobs.<job_id>.with`

Lorsqu’un travail est utilisé pour appeler un workflow réutilisable, vous pouvez utiliser `with` pour fournir un mappage d’entrées qui sont passées au workflow appelé.

Toutes les entrées que vous passez doivent correspondre aux spécifications d’entrée définies dans le workflow appelé.

Contrairement à [`jobs.<job_id>.steps[*].with`](#jobsjob_idstepswith), les entrées que vous passez avec `jobs.<job_id>.with` ne sont pas disponibles en tant que variables d’environnement dans le workflow appelé. Au lieu de cela, vous pouvez référencer les entrées à l’aide du contexte `inputs`.

#### Exemple

```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    with:
      username: mona
```

### `jobs.<job_id>.with.<input_id>`

Paire composée d’un identificateur de chaîne pour l’entrée et de la valeur de l’entrée. L’identificateur doit correspondre au nom d’une entrée définie par [`on.workflow_call.inputs.<inputs_id>`](/actions/creating-actions/metadata-syntax-for-github-actions#inputsinput_id) dans le workflow appelé. Le type de données de la valeur doit correspondre au type défini par [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype) dans le workflow appelé.

Contextes d’expression autorisés : `github` et `needs`.

### `jobs.<job_id>.secrets`

Lorsqu’un travail est utilisé pour appeler un workflow réutilisable, vous pouvez utiliser `secrets` pour fournir un mappage de secrets qui sont passés au workflow appelé.

Les secrets que vous passez doivent correspondre aux noms définis dans le workflow appelé.

#### Exemple

{% raw %}
```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    secrets:
      access-token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
```
{% endraw %}

{% ifversion actions-inherit-secrets-reusable-workflows %}

### `jobs.<job_id>.secrets.inherit`

Utilisez le mot clé `inherit` pour passer tous les secrets du workflow appelant au workflow appelé. Sont inclus tous les secrets auxquels le workflow appelant a accès, notamment les secrets de l’organisation, des dépôts et de l’environnement. Le mot clé `inherit` peut être utilisé pour passer des secrets entre des dépôts au sein de la même organisation ou entre des organisations au sein de la même entreprise.

#### Exemple

{% raw %}

```yaml
on:
  workflow_dispatch:

jobs:
  pass-secrets-to-workflow:
    uses: ./.github/workflows/called-workflow.yml
    secrets: inherit
```

```yaml
on:
  workflow_call:

jobs:
  pass-secret-to-action:
    runs-on: ubuntu-latest
    steps:
      - name: Use a repo or org secret from the calling workflow.
        run: echo ${{ secrets.CALLING_WORKFLOW_SECRET }}
```

{% endraw %}

{%endif%}

### `jobs.<job_id>.secrets.<secret_id>`

Paire composée d’un identificateur de chaîne pour le secret et de la valeur du secret. L’identificateur doit correspondre au nom d’un secret défini par [`on.workflow_call.secrets.<secret_id>`](#onworkflow_callsecretssecret_id) dans le workflow appelé.

Contextes d’expression autorisés : `github`, `needs` et `secrets`.
{% endif %}

## Aide-mémoire de modèle de filtre

Vous pouvez utiliser des caractères spéciaux dans les filtres de chemin, de branche et d’étiquette.

- `*` : correspond à zéro caractère ou plus, mais ne correspond pas au caractère `/`. Par exemples, `Octo*` correspond à `Octocat`.
- `**` : correspond à zéro caractère, quel qu’il soit, ou plus.
- `?` : correspond à zéro caractère ou à l’un des caractères précédents.
- `+` : correspond à l’un des caractères précédents, ou plus.
- `[]` : correspond à un caractère indiqué entre crochets ou inclus dans des plages. Les plages ne peuvent inclure `a-z`, `A-Z` et `0-9`. Par exemple, la plage `[0-9a-z]` correspond à n’importe quel chiffre ou lettre minuscule. Par exemple, `[CB]at` correspond à `Cat` ou à `Bat`, et `[1-2]00` correspond à `100` et à `200`.
- `!` : Au début d’un modèle, neutralise des modèles positifs précédents. Il n’a pas de signification spéciale si ce n’est pas le premier caractère.

Les caractères `*`, `[` et `!` sont des caractères spéciaux dans YAML. Si vous commencez un modèle avec `*`, `[` ou `!`, vous devez placer ce modèle entre guillemets. En outre, si vous utilisez une [séquence de flux](https://yaml.org/spec/1.2.2/#flow-sequences) avec un modèle contenant `[` et/ou `]`, le modèle doit être placé entre guillemets.

```yaml
# Valid
branches:
  - '**/README.md'

# Invalid - creates a parse error that
# prevents your workflow from running.
branches:
  - **/README.md

# Valid
branches: [ main, 'release/v[0-9].[0-9]' ]

# Invalid - creates a parse error
branches: [ main, release/v[0-9].[0-9] ]
```

Pour plus d’informations sur la syntaxe des filtres de branche, d’étiquette et de chemin, consultez « [`on.<push>.<branches|tags>`](#onpushbranchestagsbranches-ignoretags-ignore) », « [`on.<pull_request>.<branches|tags>`](#onpull_requestpull_request_targetbranchesbranches-ignore) » et « [`on.<push|pull_request>.paths`](#onpushpull_requestpull_request_targetpathspaths-ignore) ».

### Modèles pour établir une correspondance avec des branches et des étiquettes

| Modèle | Description | Exemples de correspondances |
|---------|------------------------|---------|
| `feature/*` | Le caractère générique `*` correspond à n’importe quel caractère, mais ne correspond pas à la barre oblique (`/`). |  `feature/my-branch`<br/><br/>`feature/your-branch` |
| `feature/**` | Le caractère générique `**` correspond à n’importe quel caractère, y compris la barre oblique (`/`), dans les noms de branche et d’étiquette. | `feature/beta-a/my-branch`<br/><br/>`feature/your-branch`<br/><br/>`feature/mona/the/octocat` |
| `main`<br/><br/>`releases/mona-the-octocat` | Correspond au nom exact d’une branche ou d’une étiquette. | `main`<br/><br/>`releases/mona-the-octocat` |
| `'*'` | Correspond à tous les noms de branche et d’étiquette qui ne contiennent pas de barre oblique (`/`). Le caractère `*` est un caractère spécial dans YAML. Lorsque vous commencez un modèle par `*`, vous devez utiliser des guillemets. | `main`<br/><br/>`releases` |
| `'**'` | Correspond à tous les noms de branche et d’étiquette. Il s’agit du comportement par défaut lorsque vous n’utilisez pas de filtre `branches` ou `tags`. | `all/the/branches`<br/><br/>`every/tag` |
| `'*feature'` | Le caractère `*` est un caractère spécial dans YAML. Lorsque vous commencez un modèle par `*`, vous devez utiliser des guillemets. | `mona-feature`<br/><br/>`feature`<br/><br/>`ver-10-feature` |
| `v2*` | Correspond aux noms de branche et d’étiquette qui commencent par `v2`. | `v2`<br/><br/>`v2.0`<br/><br/>`v2.9` |
| `v[12].[0-9]+.[0-9]+` | Correspond à toutes les branches et étiquettes de gestion sémantique de version avec la version majeure 1 ou 2. | `v1.10.1`<br/><br/>`v2.0.0` |

### Modèles pour établir une correspondance avec des chemins de fichiers

Les modèles de chemin doivent correspondre au chemin complet et commencer à la racine du dépôt.

| Modèle | Description des correspondances | Exemples de correspondances |
|---------|------------------------|-----------------|
| `'*'` | Le caractère générique `*` correspond à n’importe quel caractère, mais ne correspond pas à la barre oblique (`/`). Le caractère `*` est un caractère spécial dans YAML. Lorsque vous commencez un modèle par `*`, vous devez utiliser des guillemets. | `README.md`<br/><br/>`server.rb` |
| `'*.jsx?'` | Le caractère `?` correspond à zéro caractère ou à l’un des caractères précédents. | `page.js`<br/><br/>`page.jsx` |
| `'**'` | Le caractère générique `**` correspond à n’importe quel caractère, y compris la barre oblique (`/`). Il s’agit du comportement par défaut lorsque vous n’utilisez pas de filtre `path`. | `all/the/files.md` |
| `'*.js'` | Le caractère générique `*` correspond à n’importe quel caractère, mais ne correspond pas à la barre oblique (`/`). Correspond à tous les fichiers `.js` se trouvant à la racine du dépôt. | `app.js`<br/><br/>`index.js`
| `'**.js'` | Correspond à tous les fichiers `.js` se trouvant dans le dépôt. | `index.js`<br/><br/>`js/index.js`<br/><br/>`src/js/app.js` |
| `docs/*`  | Tous les fichiers se trouvant à la racine du répertoire `docs`, à la racine du dépôt. | `docs/README.md`<br/><br/>`docs/file.txt` |
| `docs/**` | Tout fichier se trouvant à la racine du répertoire `/docs` situé à la racine du dépôt. | `docs/README.md`<br/><br/>`docs/mona/octocat.txt` |
| `docs/**/*.md` | Fichier avec un suffixe `.md` n’importe où dans le répertoire `docs`. | `docs/README.md`<br/><br/>`docs/mona/hello-world.md`<br/><br/>`docs/a/markdown/file.md`
| `'**/docs/**'`   | Tout fichier se trouvant dans un répertoire `docs` n’importe où dans le dépôt. | `docs/hello.md`<br/><br/>`dir/docs/my-file.txt`<br/><br/>`space/docs/plan/space.doc`
| `'**/README.md'` | Fichier README.md n’importe où dans le dépôt. | `README.md`<br/><br/>`js/README.md`
| `'**/*src/**'` | Tout fichier d’un dossier avec un suffixe `src` n’importe où dans le dépôt. | `a/src/app.js`<br/><br/>`my-src/code/js/app.js`
| `'**/*-post.md'` | Fichier avec le suffixe `-post.md` n’importe où dans le dépôt. | `my-post.md`<br/><br/>`path/their-post.md` |
| `'**/migrate-*.sql'` | Fichier avec le préfixe `migrate-` et le suffixe `.sql` n’importe où dans le dépôt. | `migrate-10909.sql`<br/><br/>`db/migrate-v1.0.sql`<br/><br/>`db/sept/migrate-v1.sql` |
| `*.md`<br/><br/>`!README.md` | L’utilisation d’un point d’exclamation (`!`) devant un modèle le neutralise. Lorsqu’un fichier correspond à un modèle et qu’il correspond également à un modèle négatif défini ultérieurement dans le fichier, ce fichier n’est pas inclus. | `hello.md`<br/><br/>_Ne correspond pas à_<br/><br/>`README.md`<br/><br/>`docs/hello.md` |
| `*.md`<br/><br/>`!README.md`<br/><br/>`README*` | Les modèles sont vérifiés de manière séquentielle. Un modèle qui neutralise un modèle précédent inclut à nouveau les chemins de fichier. | `hello.md`<br/><br/>`README.md`<br/><br/>`README.doc`|
