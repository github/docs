---
title: Variables d'environnement
intro: '{% data variables.product.prodname_dotcom %} définit les variables d’environnement par défaut pour chaque exécution de workflow {% data variables.product.prodname_actions %}. Vous pouvez également définir des variables d’environnement personnalisées dans votre fichier de workflow.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
  - /actions/reference/environment-variables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 578b85facbb8fc6a7ff45f0d56a460eb3e2ab217
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179539'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des variables d’environnement

Vous pouvez utiliser des variables d’environnement pour stocker les informations que vous souhaitez référencer dans votre workflow. Vous référencez des variables d’environnement au sein d’une étape de workflow ou d’une action, et les variables sont interpolées sur la machine de l’exécuteur qui exécute votre workflow. Les commandes qui s’exécutent dans des actions ou des étapes de workflow peuvent créer, lire ou modifier des variables d’environnement.

Vous pouvez définir vos propres variables d’environnement personnalisées, vous pouvez utiliser les variables d’environnement par défaut que {% data variables.product.prodname_dotcom %} définit automatiquement, et vous pouvez également utiliser toutes les autres variables d’environnement définies dans l’environnement de travail sur l’exécuteur. Les variables d’environnement respectent la casse. 

Pour définir une variable d’environnement personnalisée, vous devez la définir dans le fichier de workflow. L’étendue d’une variable d’environnement personnalisée est limitée à l’élément dans lequel elle est définie. Vous pouvez définir des variables d’environnement dont l’étendue est :

* Le workflow entier, en utilisant [`env`](/actions/using-workflows/workflow-syntax-for-github-actions#env) au niveau supérieur du fichier de workflow.
* Le contenu d’un travail au sein d’un workflow, en utilisant [`jobs.<job_id>.env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenv).
* Une étape spécifique dans un travail, en utilisant [`jobs.<job_id>.steps[*].env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsenv).

{% raw %}
```yaml
name: Greeting on variable day

on:
  workflow_dispatch

env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

L’exemple ci-dessus montre trois variables d’environnement personnalisées utilisées dans une commande `echo` : `$DAY_OF_WEEK`, `$Greeting` et `$First_Name`. Les valeurs de ces variables d’environnement sont définies et limitées au niveau du workflow, du travail et de l’étape, respectivement. 

Étant donné que l’interpolation des variables d’environnement est effectuée une fois qu’un travail de workflow est envoyé à une machine d’exécuteur, vous devez utiliser la syntaxe appropriée pour l’interpréteur de commandes utilisé sur l’exécuteur. Dans cet exemple, le workflow spécifie `ubuntu-latest`. Par défaut, les exécuteurs Linux utilisent l’interpréteur de commandes bash. Vous devez donc utiliser la syntaxe `$NAME`. Si le workflow a spécifié un exécuteur Windows, vous utiliserez la syntaxe pour PowerShell, `$env:NAME`. Pour plus d’informations sur les interpréteurs de commandes, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsshell) ».

{% note %}

**Remarque** : Vous pouvez lister l’ensemble des variables d’environnement disponibles pour une étape de workflow en utilisant <span style="white-space: nowrap;">`run: env`</span> dans une étape, puis en examinant la sortie de cette étape.

{% endnote %}

## Utilisation de contextes pour accéder aux valeurs des variables d’environnement

Outre les variables d’environnement, {% data variables.product.prodname_actions %} vous permet également de définir et de lire des valeurs à l’aide de contextes. Les variables d’environnement et les contextes sont destinés à être utilisés à différents points du workflow.

Les variables d’environnement sont toujours interpolées sur l’exécuteur de machine virtuelle. Toutefois, les parties d’un workflow sont traitées par {% data variables.product.prodname_actions %} et ne sont pas envoyées à l’exécuteur. Vous ne pouvez pas utiliser de variables d’environnement dans ces parties d’un fichier de workflow. À la place, vous pouvez utiliser des contextes. Par exemple, une condition `if`, qui détermine si un travail ou une étape sont envoyés à l’exécuteur, est toujours traitée par {% data variables.product.prodname_actions %}. Vous pouvez utiliser un contexte dans une instruction conditionnelle `if` pour accéder à la valeur d’une variable d’environnement.

{% raw %}
```yaml
env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        if: ${{ env.DAY_OF_WEEK == 'Monday' }}
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

Dans cette modification du premier exemple, nous avons introduit une condition `if`. L’étape de workflow est désormais exécutée uniquement si la variable `DAYS_OF_WEEK` a pour valeur « Monday » (Lundi). Nous accédons à cette valeur à partir de l’instruction conditionnelle `if` en utilisant le [contexte `env`](/actions/learn-github-actions/contexts#env-context).

{% note %}

**Remarque** : Les contextes sont généralement indiqués par un signe dollar et des accolades, comme {% raw %}`${{ context.property }}`{% endraw %}. Dans une condition `if`, les éléments {% raw %}`${{` et `}}`{% endraw %} sont facultatifs, mais si vous les utilisez, ils doivent contenir l’instruction de comparaison entière, comme indiqué ci-dessus. 

{% endnote %}

Vous utilisez généralement le contexte `env` ou `github` pour accéder aux valeurs des variables d’environnement figurant dans les parties du workflow traitées avant que les travaux soient envoyés aux exécuteurs. 


| Context | Cas d’utilisation | Exemple |
| --- | --- | --- |
| `env` | Référencer les variables d’environnement personnalisées définies dans le workflow. | <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span> |
| `github` | Référencer des informations sur l’exécution du workflow et l’événement qui a déclenché cette exécution. | <span style="white-space: nowrap;">{% raw %}`${{ github.repository }}`{% endraw %}</span> |


 
Il existe de nombreux autres contextes que vous pouvez utiliser à diverses fins dans vos workflows. Pour plus d’informations, consultez « [Contextes](/actions/learn-github-actions/contexts) ». Pour plus d’informations sur l’emplacement où vous pouvez utiliser des contextes spécifiques au sein d’un workflow, consultez « [Disponibilité des contextes](/actions/learn-github-actions/contexts#context-availability) ».

### Autres types de variables

Dans la plupart des parties d’un workflow, les seuls types de variables que vous pouvez utiliser sont des variables d’environnement, telles que `$MY_VARIABLE`, ou la propriété de contexte équivalente, telle que <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span>. Les exceptions sont les suivantes :

* Entrées pour les événements `workflow_call` et `workflow_dispatch`, qui vous permettent de transmettre des valeurs à un workflow. Pour plus d’informations, consultez [`on.workflow_call.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callinputs) et [`on.workflow_dispatch.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_dispatchinputs).
* Sorties de travail, qui vous permettent de transmettre des valeurs entre les travaux dans un workflow. Pour plus d’informations, consultez [`jobs.<job_id>.outputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs).
* Variables figurant dans une expression de format, qui vous permettent de remplacer des parties d’une chaîne. Pour plus d’informations, consultez [`format`](/actions/learn-github-actions/expressions#format).

## Conventions d’affectation de noms pour les variables d’environnement

Lorsque vous définissez une variable d’environnement personnalisée, vous ne pouvez pas utiliser les noms de variable d’environnement par défaut. Pour obtenir la liste complète de ces noms, consultez « [Variables d’environnement par défaut](#default-environment-variables) » ci-dessous. Si vous tentez de remplacer la valeur de l’une de ces variables d’environnement par défaut, l’affectation est ignorée.

Toutes les nouvelles variables d’environnement que vous définissez et qui pointent vers un emplacement dans le système de fichiers doivent avoir un suffixe `_PATH`. Les variables d’environnement par défaut `GITHUB_ENV` et `GITHUB_WORKSPACE` sont des exceptions à cette convention.

## Variables d’environnement par défaut

Les variables d’environnement par défaut que {% data variables.product.prodname_dotcom %} définit sont disponibles pour chaque étape d’un workflow. 

Nous recommandons vivement que les actions utilisent des variables d’environnement pour accéder au système de fichiers plutôt que des chemins de fichier codés en dur. {% data variables.product.prodname_dotcom %} définit les variables d’environnement pour les actions à utiliser dans tous les environnements d’exécution.

| Variable d’environnement | Description |
| ---------------------|------------ |
| `CI` | Toujours défini sur `true`. |
| `GITHUB_ACTION` | Nom de l’action en cours d’exécution ou [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) d’une étape. Par exemple, pour une action, `__repo-owner_name-of-action-repo`.<br><br>{% data variables.product.prodname_dotcom %} supprime les caractères spéciaux et utilise le nom `__run` quand l’étape actuelle exécute un script sans `id`. Si vous utilisez le même script ou la même action plusieurs fois dans un même travail, le nom inclut un suffixe qui se compose du numéro de séquence précédé d’un trait de soulignement. Par exemple, le premier script que vous exécutez aura le nom `__run` et le deuxième script sera nommé `__run_2`. De même, le deuxième appel de `actions/checkout` sera `actionscheckout2`. |
| `GITHUB_ACTION_PATH` | Chemin où figure une action. Cette propriété est prise en charge uniquement dans les actions composites. Vous pouvez utiliser ce chemin pour accéder aux fichiers situés dans le même dépôt que l’action. Par exemple : `/home/runner/work/_actions/repo-owner/name-of-action-repo/v1`. |
| `GITHUB_ACTION_REPOSITORY` | Pour une étape exécutant une action, il s’agit du propriétaire et du nom du dépôt de l’action. Par exemple : `actions/checkout`. |
| `GITHUB_ACTIONS` | Toujours définie sur `true` quand {% data variables.product.prodname_actions %} exécute le workflow. Vous pouvez utiliser cette variable pour différencier quand les tests sont exécutés localement ou par {% data variables.product.prodname_actions %}.
| `GITHUB_ACTOR` | Nom de la personne ou de l’application qui a lancé le workflow. Par exemple : `octocat`. |
| `GITHUB_API_URL` | Retourne l’URL de l’API. Par exemple : `{% data variables.product.api_url_code %}`.
| `GITHUB_BASE_REF` | Nom de la référence de base ou de la branche cible de la demande de tirage (pull request) dans une exécution de workflow. Il est défini uniquement lorsque l’événement qui déclenche une exécution de workflow est `pull_request` ou `pull_request_target`. Par exemple : `main`. |
| `GITHUB_ENV` | Chemin sur l’exécuteur jusqu’au fichier qui définit les variables d’environnement à partir des commandes de workflow. Ce fichier est unique à l’étape actuelle et change pour chaque étape d’un travail. Par exemple : `/home/runner/work/_temp/_runner_file_commands/set_env_87406d6e-4979-4d42-98e1-3dab1f48b13a`. Pour plus d’informations, consultez « [Commandes de workflow pour {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable) ». | 
| `GITHUB_EVENT_NAME` | Nom de l’événement qui a déclenché le workflow. Par exemple : `workflow_dispatch`. |
| `GITHUB_EVENT_PATH` | Chemin jusqu’au fichier sur l’exécuteur qui contient la charge utile de webhook d’événement complet. Par exemple : `/github/workflow/event.json`. |
| `GITHUB_GRAPHQL_URL` | Retourne l’URL de l’API GraphQL. Par exemple : `{% data variables.product.graphql_url_code %}`.
| `GITHUB_HEAD_REF` | Référence principale ou branche source de la demande de tirage (pull request) dans une exécution de workflow. Cette propriété est définie uniquement quand l’événement qui déclenche une exécution de workflow est `pull_request` ou `pull_request_target`. Par exemple : `feature-branch-1`. |
| `GITHUB_JOB` | Élément [job_id](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) du travail actuel. Par exemple : `greeting_job`. |
| `GITHUB_PATH` | Chemin sur l’exécuteur jusqu’au fichier qui définit les variables `PATH` système à partir des commandes de workflow. Ce fichier est unique à l’étape actuelle et change pour chaque étape d’un travail.  Par exemple : `/home/runner/work/_temp/_runner_file_commands/add_path_899b9445-ad4a-400c-aa89-249f18632cf5`. Pour plus d’informations, consultez « [Commandes de workflow pour {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-system-path) ». |
| `GITHUB_REF` | {% data reusables.actions.ref-description %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `GITHUB_REF_NAME` | {% data reusables.actions.ref_name-description %} | | `GITHUB_REF_PROTECTED` | {% data reusables.actions.ref_protected-description %} | | `GITHUB_REF_TYPE` | {% data reusables.actions.ref_type-description %} | {%- endif %} | `GITHUB_REPOSITORY` | Nom du propriétaire et du référentiel. Par exemple : `octocat/Hello-World`. | | `GITHUB_REPOSITORY_OWNER` | Nom du propriétaire du dépôt. Par exemple : `octocat`. | | `GITHUB_RETENTION_DAYS` | Nombre de jours pendant lesquels les journaux et artefacts d’exécution de workflow sont conservés. Par exemple : `90`. | | `GITHUB_RUN_ATTEMPT` | Numéro unique pour chaque tentative d’exécution d’un workflow particulier dans un dépôt. Ce numéro commence à 1 pour la première tentative d’exécution du workflow et augmente d’une unité à chaque nouvelle exécution. Par exemple : `3`. | | `GITHUB_RUN_ID` | {% data reusables.actions.run_id_description %} Par exemple, `1658821493`. | | `GITHUB_RUN_NUMBER` | {% data reusables.actions.run_number_description %} Par exemple, `3`. | | `GITHUB_SERVER_URL`| URL du serveur {% data variables.product.product_name %}. Par exemple : `https://{% data variables.product.product_url %}`.
| `GITHUB_SHA` | {% data reusables.actions.github_sha_description %} | {%- ifversion actions-job-summaries %} | `GITHUB_STEP_SUMMARY` | Chemin sur l’exécuteur du fichier qui contient les récapitulatifs des travaux des commandes de workflow. Ce fichier est unique à l’étape actuelle et change pour chaque étape d’un travail. Par exemple : `/home/rob/runner/_layout/_work/_temp/_runner_file_commands/step_summary_1cb22d7f-5663-41a8-9ffc-13472605c76c`. Pour plus d’informations, consultez « [Commandes de workflow pour {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary) ». | {%- endif %} | `GITHUB_WORKFLOW` | Nom du workflow. Par exemple : `My test workflow`. Si le fichier de workflow ne spécifie pas un `name`, la valeur de cette variable est le chemin complet du fichier de workflow dans le dépôt. | | `GITHUB_WORKSPACE` | Répertoire de travail par défaut sur l’exécuteur pour les étapes et emplacement par défaut de votre dépôt lors de l’utilisation de l’action [`checkout`](https://github.com/actions/checkout). Par exemple : `/home/runner/work/my-repo-name/my-repo-name`. | {%- ifversion actions-runner-arch-envvars %} | `RUNNER_ARCH` | {% data reusables.actions.runner-arch-description %} | {%- endif %} | `RUNNER_DEBUG` | {% data reusables.actions.runner-debug-description %} | | `RUNNER_NAME` | {% data reusables.actions.runner-name-description %} Par exemple, `Hosted Agent` | | `RUNNER_OS` | {% data reusables.actions.runner-os-description %} For example, `Windows` | | `RUNNER_TEMP` | {% data reusables.actions.runner-temp-directory-description %} Par exemple, `D:\a\_temp` | {%- ifversion not ghae %} | `RUNNER_TOOL_CACHE` | {% data reusables.actions.runner-tool-cache-description %} Par exemple, `C:\hostedtoolcache\windows` | {%- endif %}

{% note %}

**Remarque :** 

* Si vous devez utiliser l’URL de l’exécution d’un workflow à partir d’un travail, vous pouvez combiner ces variables d’environnement : `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`
* La plupart des variables d’environnement par défaut ont une propriété de contexte correspondante et portant un nom similaire. Par exemple, la valeur de la variable d’environnement `GITHUB_REF` peut être lue pendant le traitement du workflow à l’aide de la propriété de contexte {% raw %}`${{ github.ref }}`{% endraw %}.

{% endnote %}

## Détection du système d’exploitation

Vous pouvez écrire un fichier de workflow individuel qui peut être utilisé pour différents systèmes d’exploitation à l’aide de la variable d’environnement par défaut `RUNNER_OS` et de la propriété de contexte correspondante <span style="white-space: nowrap;">{% raw %}`${{ runner.os }}`{% endraw %}</span>. Par exemple, le workflow suivant peut être exécuté correctement si vous avez remplacé le système d’exploitation `macos-latest` par `windows-latest` sans avoir à modifier la syntaxe des variables d’environnement, ce qui diffère selon l’interpréteur de commandes utilisé par l’exécuteur.

{% raw %}
```yaml
jobs:
  if-Windows-else:
    runs-on: macos-latest
    steps:
      - name: condition 1
        if: runner.os == 'Windows'
        run: echo "The operating system on the runner is $env:RUNNER_OS."
      - name: condition 2
        if: runner.os != 'Windows'
        run: echo "The operating system on the runner is not Windows, it's $RUNNER_OS."
```
{% endraw %}

Dans cet exemple, les deux instructions `if` vérifient la propriété `os` du contexte `runner` pour déterminer le système d’exploitation de l’exécuteur. Les conditions `if` sont traitées par {% data variables.product.prodname_actions %} et seules les étapes où la vérification est résolue comme `true` sont envoyées à l’exécuteur. Ici, l’une des vérifications sera toujours `true` et l’autre `false`, si bien qu’une seule de ces étapes est envoyée à l’exécuteur. Une fois le travail envoyé à l’exécuteur, l’étape est exécutée et la variable d’environnement dans la commande `echo` est interpolée à l’aide de la syntaxe appropriée (`$env:NAME` pour PowerShell sur Windows, et `$NAME` pour bash et sh sur Linux et MacOS). Dans cet exemple, l’instruction `runs-on: macos-latest` signifie que la deuxième étape sera exécutée.

## Transmission de valeurs entre les étapes et les travaux dans un workflow

 Si vous générez une valeur dans une étape d’un travail, vous pouvez utiliser cette valeur dans les étapes suivantes du même travail en affectant la valeur à une variable d’environnement existante ou nouvelle, puis en écrivant cette dernière dans le fichier d’environnement `GITHUB_ENV`. Le fichier d’environnement peut être utilisé directement par une action ou à partir d’une commande shell dans le fichier de workflow à l’aide du mot clé `run`. Pour plus d’informations, consultez « [Commandes de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable) ». 
 
 Si vous souhaitez transmettre une valeur d’une étape d’un travail dans un workflow vers une étape d’un autre travail dans le workflow, vous pouvez définir la valeur en tant que sortie de travail. Vous pouvez ensuite référencer cette sortie de travail à partir d’une étape dans un autre travail. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs) ». 
 
