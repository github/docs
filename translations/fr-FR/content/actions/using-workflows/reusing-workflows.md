---
title: Réutilisation des workflows
shortTitle: Reuse workflows
intro: Découvrez comment éviter les doublons quand vous créez un workflow en réutilisant des workflows existants.
redirect_from:
  - /actions/learn-github-actions/reusing-workflows
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.4'
  ghae: '>= 3.4'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: 2053b2bfd653a1f6633ab5d568e5b2fdb75d7335
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191925'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.reusable-workflows-enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Vue d’ensemble

Au lieu de copier et de coller d’un workflow vers un autre, vous pouvez rendre les workflows réutilisables. Vous et toute personne ayant accès au workflow réutilisable peut alors appeler le workflow réutilisable à partir d’un autre workflow.

La réutilisation de workflows évite la duplication. Cela facilite la maintenance des workflows et vous permet de créer plus rapidement de nouveaux workflows en s’appuyant sur le travail des autres, comme vous le faites avec des actions. La réutilisation des workflows favorise également les bonnes pratiques en vous aidant à utiliser des workflows bien conçus, qui ont déjà été testés et qui se sont avérés efficaces. Votre organisation peut créer une bibliothèque de workflows réutilisables qui peuvent être gérés de manière centralisée.

Le diagramme ci-dessous montre une exécution de flux de travail en cours qui utilise un workflow réutilisable.

* Une fois que chacun des trois travaux de build à gauche du diagramme se termine avec succès, un travail dépendant appelé « Déployer » est exécuté.
* Le travail « Déployer » appelle un workflow réutilisable qui contient trois travaux : « Préproduction », « Révision » et « Production ».
* Le travail de déploiement « Production » s’exécute uniquement une fois que le travail « Préproduction » s’est correctement terminé.
* Quand un travail cible un environnement, l’exécution du workflow affiche une barre de progression qui indique le nombre d’étapes du travail. Dans le diagramme ci-dessous, le travail « Production » contient 8 étapes, l’étape 6 étant en cours de traitement.
* L’utilisation d’un workflow réutilisable pour exécuter des travaux de déploiement vous permet d’exécuter ces travaux pour chaque build sans dupliquer du code dans les workflows.

![Diagramme d’un workflow réutilisable pour le déploiement](/assets/images/help/images/reusable-workflows-ci-cd.png)

Un workflow qui utilise un autre workflow est appelé workflow « appelant ». Le workflow réutilisable est workflow « appelé ». Un workflow appelant peut utiliser plusieurs workflows appelés. Chaque workflow appelé est référencé sur une seule ligne. Le résultat est que le workflow appelant peut ne contenir que quelques lignes de code YAML, mais effectuer un grand nombre de tâches quand il est exécuté. Lorsque vous réutilisez un workflow, l’ensemble du workflow appelé est utilisé, comme s’il faisait partie du workflow appelant.

Si vous réutilisez un workflow d’un autre dépôt, toutes les actions du workflow appelé s’exécutent comme si elles faisaient partie du workflow appelant. Par exemple, si le workflow appelé utilise `actions/checkout`, l’action extrait le contenu du dépôt qui héberge le workflow appelant, et non le workflow appelé.

Lorsqu’un workflow réutilisable est déclenché par un workflow appelant, le contexte `github` est toujours associé au workflow appelant. Le workflow appelé est automatiquement autorisé à accéder à `github.token` et à `secrets.GITHUB_TOKEN`. Pour plus d’informations sur le contexte `github`, consultez « [Syntaxe de contexte et d’expression pour GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) ».

Vous pouvez afficher les workflows réutilisés référencés dans vos workflows {% data variables.product.prodname_actions %} en tant que dépendances dans le graphique des dépendances du dépôt contenant vos workflows. Pour plus d’informations, consultez « [À propos du graphique des dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph) ».

### Workflows réutilisables et workflows de démarrage

Les workflows de démarrage permettent à tous les membres de votre organisation disposant de l’autorisation de créer des workflows de le faire plus rapidement et plus facilement. Lorsque des utilisateurs créent un workflow, ils peuvent choisir un workflow de démarrage, et tout ou partie du travail d’écriture du workflow sera effectué à leur place. Dans un workflow de démarrage, vous pouvez également référencer des workflows réutilisables pour permettre aux utilisateurs de tirer facilement parti de la réutilisation de code de workflow géré de manière centralisée. Si vous utilisez un SHA de commit lors du référencement du workflow réutilisable, vous garantissez que tous ceux qui réutilisent ce workflow utiliseront toujours le même code YAML. Toutefois, si vous référencez un workflow réutilisable par une étiquette ou une branche, assurez-vous que vous pouvez approuver cette version du workflow. Pour plus d’informations, consultez « [Renforcement de la sécurité pour {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#reusing-third-party-workflows) ».

Pour plus d’informations, consultez « [Création de workflows de démarrage pour votre organisation](/actions/learn-github-actions/creating-starter-workflows-for-your-organization) ».

## Accès aux workflows réutilisables

Un workflow réutilisable peut être utilisé par un autre workflow si {% ifversion ghes or ghec or ghae %}n’importe laquelle{% else %}l’une ou l’autre{% endif %} des conditions suivantes est vraie :

* Les deux workflows se trouvent dans le même dépôt.
* Le workflow appelé est stocké dans un dépôt public{% ifversion actions-workflow-policy %}, et votre {% ifversion ghec %}entreprise{% else %}organisation{% endif %} vous permet d’utiliser des workflows publics réutilisables{% endif %}.{% ifversion ghes or ghec or ghae %}
* Le workflow appelé est stocké dans un dépôt interne et les paramètres définis pour ce dépôt le rendent accessible. Pour plus d’informations, consultez {% ifversion internal-actions %}« [Partage d’actions et de workflows au sein de votre entreprise](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise){% else %}« [Gestion des paramètres de {% data variables.product.prodname_actions %} pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository){% endif %} ».{% endif %}

## Utilisation des exécuteurs

{% ifversion fpt or ghes or ghec %}

### Utilisation des exécuteurs hébergés par GitHub

L’affectation d’exécuteurs hébergés par {% data variables.product.prodname_dotcom %} est toujours évaluée à l’aide du contexte de l’appelant uniquement. La facturation des exécuteurs hébergés par {% data variables.product.prodname_dotcom %} est toujours associée à l’appelant. Le workflow appelant ne peut pas utiliser des exécuteurs hébergés par {% data variables.product.prodname_dotcom %} à partir du dépôt appelé. Pour plus d’informations, consultez « [À propos des exécuteurs hébergés par {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners) ».

### Utilisation des exécuteurs auto-hébergés

{% endif %}

Les workflows appelés qui appartiennent au même utilisateur ou à la même organisation{% ifversion ghes or ghec or ghae %} ou entreprise{% endif %} que le workflow appelant peuvent accéder aux exécuteurs auto-hébergés à partir du contexte de l’appelant. Cela signifie qu’un workflow appelé peut accéder aux exécuteurs auto-hébergés qui se trouvent :
* Dans le dépôt appelant
* Dans l’organisation{% ifversion ghes or ghec or ghae %} ou l’entreprise{% endif %} du dépôt appelant, à condition que l’exécuteur ait été mis à la disposition du dépôt appelant

## Limites

{% ifversion nested-reusable-workflow %}
* Vous pouvez connecter jusqu’à quatre niveaux de workflows. Pour plus d’informations, consultez « [Imbrication de workflows réutilisables](#nesting-reusable-workflows) ».
{% else %}
* Les workflows réutilisables ne peuvent pas appeler d’autres workflows réutilisables.
{% endif %}
* Les workflows réutilisables stockés dans un dépôt privé ne peuvent être utilisés que par des workflows se trouvant dans le même dépôt.
* Toutes les variables d’environnement configurées dans un contexte `env` défini au niveau du workflow dans le workflow appelant ne sont pas propagées au workflow appelé. Pour plus d’informations sur le contexte `env`, consultez « [Syntaxe de contexte et d’expression pour GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#env-context) ».{% ifversion actions-reusable-workflow-matrix %}{% else %}
* La propriété `strategy` n’est prise en charge dans aucun travail qui appelle un workflow réutilisable.{% endif %}

## Création d’un workflow réutilisable

Les workflows réutilisables sont des fichiers au format YAML, très similaires à tout autre fichier de workflow. Comme avec d’autres fichiers de workflow, vous localisez les workflows réutilisables dans le répertoire `.github/workflows` d’un dépôt. Les sous-répertoires du répertoire `workflows` ne sont pas pris en charge.

Pour qu’un workflow soit réutilisable, les valeurs de `on` devront inclure `workflow_call` :

```yaml
on:
  workflow_call:
```

### Utilisation d’entrées et de secrets dans un workflow réutilisable

Vous pouvez définir des entrées et des secrets, qui peuvent être passés à partir du workflow appelant, puis utilisés dans le workflow appelé. L’utiliser d’une entrée ou d’un secret dans un workflow réutilisable comporte trois étapes.

1. Dans le workflow réutilisable, utilisez les mots clés `inputs` et `secrets` pour définir des entrées ou des secrets qui seront passés à partir d’un workflow appelant.
   {% raw %}
   ```yaml
   on:
     workflow_call:
       inputs:
         config-path:
           required: true
           type: string
       secrets:
         envPAT:
           required: true
   ```
   {% endraw %} Pour obtenir des détails sur la syntaxe de la définition d’entrées et de secrets, consultez [`on.workflow_call.inputs`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callinputs) et [`on.workflow_call.secrets`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callsecrets).
   {% ifversion actions-inherit-secrets-reusable-workflows %}
1. Dans le workflow réutilisable, référencez l’entrée ou le secret que vous avez défini(e) dans la clé `on` à l’étape précédente.

   {% note %}

   **Remarque** :Si les secrets sont hérités par l’utilisation de `secrets: inherit` dans le workflow d’appel, vous pouvez les référencer même s’ils ne sont pas définis explicitement dans la clé `on`. Pour plus d’informations, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit) ».

   {% endnote %} {%- else %}
1. Dans le workflow réutilisable, référencez l’entrée ou le secret que vous avez défini(e) dans la clé `on` à l’étape précédente.
   {%- endif %}

   {% raw %}
   ```yaml
   jobs:
     reusable_workflow_job:
       runs-on: ubuntu-latest
       environment: production
       steps:
       - uses: actions/labeler@v4
         with:
           repo-token: ${{ secrets.envPAT }}
           configuration-path: ${{ inputs.config-path }}
   ```
   {% endraw %} Dans l’exemple ci-dessus, `envPAT` est un secret d’environnement qui a été ajouté à l’environnement `production`. Cet environnement est donc référencé dans le travail.

   {% note %}

   **Remarque** : Les secrets d’environnement sont des chaînes chiffrées stockées dans un environnement que vous avez défini pour un dépôt. Les secrets d’environnement sont disponibles uniquement pour les travaux de workflow qui référencent l’environnement approprié. Pour plus d’informations, consultez « [Utilisation d’environnements pour le déploiement](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets) ».

   {% endnote %}

1. Passez l’entrée ou le secret à partir du workflow appelant.

{% indented_data_reference reusables.actions.pass-inputs-to-reusable-workflows spaces=3 %}

### Exemple de workflow réutilisable

Ce fichier de workflow réutilisable nommé `workflow-B.yml` (auquel nous ferons référence plus tard dans l’[exemple de workflow appelant](#example-caller-workflow)) prend une chaîne d’entrée et un secret provenant du workflow appelant et les utilise dans une action.

{% raw %}
```yaml{:copy}
name: Reusable workflow example

on:
  workflow_call:
    inputs:
      config-path:
        required: true
        type: string
    secrets:
      token:
        required: true

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/labeler@v4
      with:
        repo-token: ${{ secrets.token }}
        configuration-path: ${{ inputs.config-path }}
```
{% endraw %}

## Appel d’un workflow réutilisable

Vous appelez un workflow réutilisable à l’aide du mot clé `uses`. Contrairement à l’étape dans laquelle vous utilisez des actions dans un workflow, vous appelez des workflows réutilisables directement au sein d’un travail, et non à partir d’étapes de travail.

[`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)

Vous référencez des fichiers de workflow réutilisable en utilisant {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}une des syntaxes suivantes :{% else %}la syntaxe :{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

Vous pouvez appeler plusieurs workflows, en référençant chacun dans un travail distinct.

{% data reusables.actions.uses-keyword-example %}

### Passage d’entrées et de secrets à un workflow réutilisable

{% data reusables.actions.pass-inputs-to-reusable-workflows%}

{% ifversion actions-reusable-workflow-matrix %}
### Utilisation d’une stratégie de matrice avec un workflow réutilisable

Les travaux qui utilisent la stratégie de matrice peuvent appeler un workflow réutilisable.

Une stratégie de matrice vous permet d’utiliser des variables dans une définition de travail unique pour créer automatiquement plusieurs exécutions de travaux basées sur les combinaisons des variables. Par exemple, vous pouvez utiliser une stratégie de matrice pour passer différentes entrées à un workflow réutilisable. Pour plus d’informations sur les matrices, consultez « [Utilisation d’une matrice pour vos travaux](/actions/using-jobs/using-a-matrix-for-your-jobs) ».

Cet exemple de travail ci-dessous appelle un workflow réutilisable et fait référence au contexte de matrice en définissant la variable `target` avec les valeurs `[dev, stage, prod]`. Il va exécuter trois travaux, un pour chaque valeur de la variable.

{% raw %}
```yaml{:copy}
jobs:
  ReuseableMatrixJobForDeployment:
    strategy:
      matrix:
        target: [dev, stage, prod]
    uses: octocat/octo-repo/.github/workflows/deployment.yml@main
    with:
      target: ${{ matrix.target }}
```
{% endraw %} {% endif %}

### Mots clés pris en charge pour les travaux qui appellent un workflow réutilisable

Lorsque vous appelez un workflow réutilisable, vous ne pouvez utiliser que les mots clés suivants dans le travail contenant l’appel :

* [`jobs.<job_id>.name`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idname)
* [`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)
* [`jobs.<job_id>.with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwith)
* [`jobs.<job_id>.with.<input_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwithinput_id)
* [`jobs.<job_id>.secrets`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecrets)
* [`jobs.<job_id>.secrets.<secret_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecretssecret_id) {%- ifversion actions-inherit-secrets-reusable-workflows %}
* [`jobs.<job_id>.secrets.inherit`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit) {%- endif %} {%- ifversion actions-reusable-workflow-matrix %}
* [`jobs.<job_id>.strategy`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategy) {%- endif %}
* [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)
* [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif)
* [`jobs.<job_id>.permissions`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idpermissions)
* [`jobs.<job_id>.concurrency`](/actions/reference/workflow-syntax-for-github-actions#concurrency)

   {% note %}

   **Remarque :**

   * Si `jobs.<job_id>.permissions` n’est pas spécifié dans le travail appelant, le workflow appelé a les autorisations par défaut de `GITHUB_TOKEN`. Pour plus d’informations, consultez « [Authentification dans un workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token) ».
   * Les autorisations `GITHUB_TOKEN` passées à partir du workflow appelant ne peuvent être rétrogradées (non élevées) que par le workflow appelé.

   {% endnote %}

### Exemple de workflow appelant

Ce fichier de workflow appelle deux fichiers de workflow. Une entrée (`config-path`) et un secret (`token`) sont passés au deuxième de ces fichiers, `workflow-B.yml` (illustré dans l’[exemple de workflow réutilisable](#example-reusable-workflow)).

{% raw %}
```yaml{:copy}
name: Call a reusable workflow

on:
  pull_request:
    branches:
      - main

jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/workflow-A.yml@v1

  call-workflow-passing-data:
    permissions:
      contents: read
      pull-requests: write
    uses: octo-org/example-repo/.github/workflows/workflow-B.yml@main
    with:
      config-path: .github/labeler.yml
    secrets:
      token: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% ifversion nested-reusable-workflow %}
## Imbrication des workflows réutilisables

Vous pouvez connecter un maximum de quatre niveaux de workflows, c’est-à-dire le workflow de l’appelant de niveau supérieur et jusqu’à trois niveaux de workflows réutilisables. Par exemple : _caller-workflow.yml_ → _called-workflow-1.yml_ → _called-workflow-2.yml_ → _called-workflow-3.yml_. Les boucles ne sont pas autorisées dans l’arborescence de workflows.

À partir d’un workflow réutilisable, vous pouvez appeler un autre workflow réutilisable.

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:

jobs:
  call-another-reusable:
    uses: octo-org/example-repo/.github/workflows/another-reusable.yml@v1
```
{% endraw %}

### Passage de secrets à des workflows imbriqués

Vous pouvez utiliser `jobs.<job_id>.secrets` dans un workflow appelant pour passer des secrets nommés à un workflow appelé directement. Vous pouvez également utiliser `jobs.<job_id>.secrets.inherit` pour passer tous les secrets du workflow appelant à un workflow directement appelé. Pour plus d’informations, consultez la section « [Passage d’entrées et de secrets à un workflow réutilisable](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow) » ci-dessus, ainsi que l’article de référence « [Syntaxe de workflow pour GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit) ». Les secrets sont passés uniquement au workflow appelé directement, de sorte que dans la chaîne de workflow A > B > C, le workflow C ne reçoit les secrets de A que s’ils ont été passés de A à B, puis de B à C.

Dans l’exemple suivant, le workflow A passe tous ses secrets au workflow B à l’aide du mot clé `inherit`, mais le workflow B ne passe qu’un seul secret au workflow C. Les autres secrets passés au workflow B ne sont pas disponibles pour le workflow C.

{% raw %}
```yaml
jobs:
  workflowA-calls-workflowB:
    uses: octo-org/example-repo/.github/workflows/B.yml@main
    secrets: inherit # pass all secrets
```

```yaml
jobs:
  workflowB-calls-workflowC:
    uses: different-org/example-repo/.github/workflows/C.yml@main
    secrets:
      envPAT: ${{ secrets.envPAT }} # pass just this secret
```
{% endraw %}

### Accès et autorisations

Un workflow qui contient des workflows réutilisables imbriqués échouera si l’un des workflows imbriqués n’est pas accessible au workflow de l’appelant initial. Pour plus d’informations, consultez « [Accès aux workflows réutilisables](/actions/using-workflows/reusing-workflows#access-to-reusable-workflows) ».

Dans les workflows imbriqués, les autorisations `GITHUB_TOKEN` ne peuvent être identiques ni plus restrictives. Par exemple, dans la chaîne de workflows A > B > C, si le workflow A dispose d’une autorisation de jeton `package: read`, B et C ne peuvent pas avoir d’autorisation `package: write`. Pour plus d’informations, consultez « [Authentification automatique par jeton](/actions/security-guides/automatic-token-authentication) ».

Pour plus d’informations sur l’utilisation de l’API pour déterminer quels fichiers de workflow ont été impliqués dans une exécution de workflow particulière, consultez « [Supervision des workflows qui ont été utilisés](#monitoring-which-workflows-are-being-used) ».
{% endif %}

## Utilisation de sorties à partir d’un workflow réutilisable

Un workflow réutilisable peut générer des données que vous souhaitez utiliser dans le workflow appelant. Pour utiliser ces sorties, vous devez les spécifier comme sorties du workflow réutilisable.{% ifversion actions-reusable-workflow-matrix %}

Si un workflow réutilisable qui définit une sortie est exécuté avec une stratégie de matrice, la sortie sera celle qui est définie par le dernier workflow réutilisable réussi de la matrice qui définit réellement une valeur.
Cela signifie que si le dernier workflow réutilisable réussi définit une chaîne vide pour sa sortie et que l’avant-dernier workflow réutilisable réussi définit une valeur réelle pour sa sortie, la sortie contiendra la valeur de l’avant-dernier workflow réutilisable.{% endif %}

Le workflow réutilisable suivant comprend un seul travail contenant deux étapes. Dans chacune de ces étapes, nous définissons un mot unique comme sortie : « hello » et « world ». Dans la section `outputs` du travail, nous mappons ces sorties d’étape aux sorties de travail appelées `output1` et `output2`. Dans la section `on.workflow_call.outputs`, nous définissons ensuite deux sorties pour le workflow lui-même : une appelée `firstword` que nous mappons à `output1`, et l’autre appelée `secondword` que nous mappons à `output2`.

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      firstword:
        description: "The first output string"
        value: ${{ jobs.example_job.outputs.output1 }}
      secondword:
        description: "The second output string"
        value: ${{ jobs.example_job.outputs.output2 }}

jobs:
  example_job:
    name: Generate output
    runs-on: ubuntu-latest
    # Map the job outputs to step outputs
    outputs:
      output1: ${{ steps.step1.outputs.firstword }}
      output2: ${{ steps.step2.outputs.secondword }}
    steps:
      - id: step1{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "firstword=hello" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=firstword::hello"
{%- endif %}{% raw %}
      - id: step2{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "secondword=world" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=secondword::world"
{%- endif %}{% raw %}
```
{% endraw %}

Nous pouvons maintenant utiliser les sorties dans le workflow appelant, de la même façon que vous utiliseriez les sorties d’un travail au sein du même workflow. Nous faisons référence aux sorties à l’aide des noms définis au niveau du workflow dans le workflow réutilisable : `firstword` et `secondword`. Dans ce workflow, `job1` appelle le workflow réutilisable et `job2` imprime les sorties de ce dernier (« hello world ») dans la sortie standard dans le journal du workflow.

{% raw %}
```yaml{:copy}
name: Call a reusable workflow and use its outputs

on:
  workflow_dispatch:

jobs:
  job1:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@v1

  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{ needs.job1.outputs.firstword }} ${{ needs.job1.outputs.secondword }}
```
{% endraw %}

Pour plus d’informations sur l’utilisation de sorties de travaux, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs) ».

## Monitoring des workflows en cours d’utilisation

Vous pouvez utiliser l’API REST {% data variables.product.prodname_dotcom %} pour superviser la façon dont les workflows réutilisables sont utilisés. L’action de journal d’audit `prepared_workflow_job` est déclenchée lors du démarrage d’un travail de workflow. Les données enregistrées sont les suivantes :
* `repo` : organisation/dépôt où se trouve le travail de workflow. Pour un travail qui appelle un autre workflow, il s’agit de l’organisation/du dépôt du workflow appelant.
* `@timestamp` : date et heure de démarrage du travail, au format Unix Epoch.
* `job_name` : nom du travail qui a été exécuté.
{% ifversion nested-reusable-workflow %}
* `calling_workflow_refs` - un tableau de chemins de fichiers pour tous les workflows de l’appelant impliqués dans ce travail de workflow. Les éléments du tableau sont dans l’ordre inverse de celui où ils ont été appelés. Par exemple, dans une chaîne de workflows A > B > C, lors de l’affichage des journaux pour un travail dans le workflow C, le tableau est `["octo-org/octo-repo/.github/workflows/B.yml", "octo-org/octo-repo/.github/workflows/A.yml"]`.
* `calling_workflow_shas` - un tableau de SHA pour tous les workflows de l’appelant impliqués dans ce travail de workflow. Le tableau contient le même nombre d’éléments, dans le même ordre, que le tableau `calling_workflow_refs`. {% endif %}
* `job_workflow_ref` : fichier de workflow qui a été utilisé, sous la forme `{owner}/{repo}/{path}/{filename}@{ref}`. Pour un travail qui appelle un autre workflow, cela identifie le workflow appelé.

Pour plus d’informations sur l’utilisation de l’API REST en vue d’interroger le journal d’audit d’une organisation, consultez « [Organisations](/rest/reference/orgs#get-the-audit-log-for-an-organization) ».

{% note %}

**Remarque** : Les données d’audit pour `prepared_workflow_job` ne peuvent être consultées qu’à l’aide de l’API REST. Elles ne sont pas visibles dans l’interface web {% data variables.product.prodname_dotcom %}, ni incluses dans les données d’audit exportées JSON/CSV.

{% endnote %}

{% ifversion partial-reruns-with-reusable %}

## Réexécution de workflows et de travaux avec des workflows réutilisables

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

## Étapes suivantes

Pour continuer à découvrir {% data variables.product.prodname_actions %}, consultez « [Événements qui déclenchent des workflows](/actions/learn-github-actions/events-that-trigger-workflows) ».

{% ifversion restrict-groups-to-workflows %}Vous pouvez standardiser les déploiements en créant un groupe d’exécuteurs autohébergés qui peut uniquement exécuter un workflow réutilisable spécifique. Pour plus d’informations, consultez « [Gestion de l’accès aux exécuteurs auto-hébergés à l’aide de groupes](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups) ».{% endif %}
