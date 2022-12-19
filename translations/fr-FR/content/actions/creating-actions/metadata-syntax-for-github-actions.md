---
title: Metadata syntax for GitHub Actions
shortTitle: Metadata syntax
intro: Vous pouvez créer des actions pour effectuer des tâches dans votre référentiel. Les actions nécessitent un fichier de métadonnées qui utilise la syntaxe YAML.
redirect_from:
  - /articles/metadata-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/building-actions/metadata-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: 9bde653dd7f8b4d04831afa38d29db7300255f57
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107412'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos de la syntaxe YAML pour {% data variables.product.prodname_actions %}

Toutes les actions nécessitent un fichier de métadonnées. Le nom de fichier des métadonnées doit être soit `action.yml`, soit `action.yaml`. Les données du fichier de métadonnées définissent les entrées et les sorties, et exécutent la configuration de votre action.

Les fichiers de métadonnées d’action utilisent la syntaxe YAML. Si vous débutez avec YAML, vous pouvez lire « [Learn YAML in five minutes](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes) ».

## `name`

**Obligatoire** Le nom de votre action. {% data variables.product.prodname_dotcom %} affiche `name` sous l’onglet **Actions** pour identifier visuellement les actions de chaque travail.

## `author`

**Facultatif** Le nom de l’auteur de l’action.

## `description`

**Obligatoire** Une brève description de l’action.

## `inputs`

**Facultatif** Les paramètres d’entrée vous permettent de spécifier les données que l’action s’attend à utiliser lors de l’exécution. {% data variables.product.prodname_dotcom %} stocke les paramètres d’entrée en tant que variables d’environnement. Les lettres majuscules des ID d’entrée sont converties en lettres minuscules pendant l’exécution. Nous vous recommandons d’utiliser des ID d’entrée en minuscules.

### Exemple Spécifier des entrées

Cet exemple configure deux entrées : numOctocats et octocatEyeColor. L’entrée numOctocats n’est pas obligatoire et a par défaut la valeur « 1 ». L’entrée octocatEyeColor est obligatoire et n’a pas de valeur par défaut. Les fichiers de workflow qui utilisent cette action doivent utiliser le mot clé `with` afin de définir une valeur d’entrée pour octocatEyeColor. Pour plus d’informations sur la syntaxe `with`, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith) ».

```yaml
inputs:
  numOctocats:
    description: 'Number of Octocats'
    required: false
    default: '1'
  octocatEyeColor:
    description: 'Eye color of the Octocats'
    required: true
```

Si vous spécifiez une entrée dans un fichier de workflow ou utilisez une valeur d’entrée par défaut, {% data variables.product.prodname_dotcom %} crée une variable d’environnement pour l’entrée avec le nom `INPUT_<VARIABLE_NAME>`. La variable d’environnement créée convertit les noms d’entrée en lettres majuscules et remplace les espaces par des caractères `_`.

Si l’action est écrite à l’aide d’un [composite](/actions/creating-actions/creating-a-composite-action), elle n’obtiendra pas automatiquement `INPUT_<VARIABLE_NAME>`. Si la conversion ne se produit pas, vous pouvez modifier ces entrées manuellement.

Pour accéder à la variable d’environnement dans une action de conteneur Docker, vous devez passer l’entrée à l’aide du mot clé dans le fichier de métadonnées d’action `args`. Pour plus d’informations sur le fichier de métadonnées des actions de conteneur Docker, consultez « [Création d’une action de conteneur Docker](/articles/creating-a-docker-container-action#creating-an-action-metadata-file) ».

Par exemple, si un workflow a défini les entrées `numOctocats` et `octocatEyeColor`, le code d’action peut lire les valeurs des entrées à l’aide des variables d’environnement `INPUT_NUMOCTOCATS` et `INPUT_OCTOCATEYECOLOR`.

### `inputs.<input_id>`

**Obligatoire** Un identificateur `string` à associer à l’entrée. La valeur de `<input_id>` est une carte des métadonnées de l’entrée. `<input_id>` doit être un identificateur unique dans l’objet `inputs`. `<input_id>` doit commencer par une lettre ou par `_`, et contenir uniquement des caractères alphanumériques, des `-` ou des `_`.

### `inputs.<input_id>.description`

**Obligatoire** Une description `string` des paramètres d’entrée.

### `inputs.<input_id>.required`

**Facultatif** Un `boolean` pour indiquer si l’action nécessite le paramètre d’entrée. À définir sur `true` si le paramètre est obligatoire.

### `inputs.<input_id>.default`

**Facultatif** Un `string` représentant la valeur par défaut. La valeur par défaut est utilisée lorsqu’un paramètre d’entrée n’est pas spécifié dans un fichier de workflow.

### `inputs.<input_id>.deprecationMessage`

**Facultatif** Si le paramètre d’entrée est utilisé, cette `string` est journalisée en tant que message d’avertissement. Vous pouvez utiliser cet avertissement pour informer les utilisateurs que l’entrée est dépréciée et leur proposer des alternatives.

## `outputs` pour les actions de conteneur Docker et JavaScript

**Facultatif** Les paramètres de sortie vous permettent de déclarer les données qu’une action définit. Les actions qui s’exécutent par la suite dans un workflow peuvent utiliser le jeu de données de sortie des actions précédemment exécutées.  Par exemple, si vous avez une action qui a réalisé l’addition de deux entrées (x + y = z), l’action peut générer la somme (z) d’autres actions afin de l’utiliser en tant qu’entrée.

{% data reusables.actions.output-limitations %}

Si vous ne déclarez pas de sortie dans votre fichier de métadonnées d’action, vous pouvez toujours définir des sorties et les utiliser dans un workflow. Pour plus d’informations sur la définition de sorties dans une action, consultez « [Commandes de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter) ».

### Exemple : Déclaration de sorties pour les actions de conteneur Docker et JavaScript

```yaml
outputs:
  sum: # id of the output
    description: 'The sum of the inputs'
```

### `outputs.<output_id>`

**Obligatoire** Un identificateur `string` à associer à la sortie. La valeur de `<output_id>` est une carte des métadonnées de la sortie. `<output_id>` doit être un identificateur unique dans l’objet `outputs`. `<output_id>` doit commencer par une lettre ou par `_`, et contenir uniquement des caractères alphanumériques, des `-` ou des `_`.

### `outputs.<output_id>.description`

**Obligatoire** Une description `string` des paramètres de sortie.

## `outputs` pour les actions composites

**Optionnel** Les `outputs` utilisent les mêmes paramètres que `outputs.<output_id>` et `outputs.<output_id>.description` (voir « [`outputs` pour les actions de conteneur Docker et JavaScript](#outputs-for-docker-container-and-javascript-actions) »), mais ils comprennent également le jeton `value`.

{% data reusables.actions.output-limitations %}

### Exemple : Déclaration de sorties pour les actions composites

{% raw %}
```yaml
outputs:
  random-number:
    description: "Random number"
    value: ${{ steps.random-number-generator.outputs.random-id }}
runs:
  using: "composite"
  steps:
    - id: random-number-generator{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
      run: echo "random-id=$(echo $RANDOM)" >> $GITHUB_OUTPUT
{%- else %}
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
{%- endif %}{% raw %}
      shell: bash
```
{% endraw %}

### `outputs.<output_id>.value`

**Obligatoire** La valeur à laquelle le paramètre de sortie sera mappé. Vous pouvez définir cette valeur sur une `string` ou sur une expression avec un contexte. Par exemple, vous pouvez utiliser le contexte `steps` pour définir la `value` d’une sortie sur la valeur de sortie d’une étape.

Pour plus d’informations sur l’utilisation de la syntaxe de contexte, consultez « [Contextes](/actions/learn-github-actions/contexts) ».

## `runs`

**Obligatoire** Spécifie s’il s’agit d’une action JavaScript, d’une action composite ou d’une action de conteneur Docker, ainsi que la façon dont l’action est exécutée.

## `runs` pour les actions JavaScript

**Obligatoire** Configure le chemin du code de l’action et le runtime utilisé pour exécuter le code.

### Exemple : Utilisation de Node.js {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}v16{% else %}v12{% endif %}

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'main.js'
```

### `runs.using`

**Obligatoire** Le runtime utilisé pour exécuter le code spécifié dans [`main`](#runsmain).

- Utiliser `node12` pour Node.js v12.{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
- Utiliser `node16` pour Node.js v16.{% endif %}

### `runs.main`

**Obligatoire** Le fichier qui contient votre code d’action. Le runtime spécifié dans [`using`](#runsusing) exécute ce fichier.

### `runs.pre`

**Facultatif** Permet d’exécuter un script au début d’un travail, avant que l’action `main:` ne commence. Par exemple, vous pouvez utiliser `pre:` pour exécuter un script de configuration prérequis. Le runtime spécifié avec la syntaxe [`using`](#runsusing) exécute ce fichier. L’action `pre:` s’exécute toujours par défaut, mais vous pouvez modifier cela en utilisant [`runs.pre-if`](#runspre-if).

Dans cet exemple, l’action `pre:` exécute un script appelé `setup.js` :

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

### `runs.pre-if`

**Facultatif** Permet de définir des conditions pour l’exécution de l’action `pre:`. L’action `pre:` s’exécute uniquement si les conditions de `pre-if` sont remplies. Si les conditions ne sont pas définies, `pre-if` aura `always()` comme valeur par défaut. Dans `pre-if`, les fonctions de vérification d’état évaluent l’état du travail, et non l’état de l’action.

Notez que le contexte `step` n’est pas disponible, car aucune étape n’a encore été exécutée.

Dans cet exemple, `cleanup.js` exécute uniquement les exécuteurs :

```yaml
  pre: 'cleanup.js'
  pre-if: runner.os == 'linux'
```

### `runs.post`

**Optionnel** Permet d’exécuter un script à la fin d’un travail, une fois l’action `main:` terminée. Par exemple, vous pouvez utiliser `post:` pour arrêter certains processus ou supprimer des fichiers inutiles. Le runtime spécifié avec la syntaxe [`using`](#runsusing) exécute ce fichier.

Dans cet exemple, l’action `post:` exécute un script appelé `cleanup.js` :

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
  post: 'cleanup.js'
```

L’action `post:` s’exécute toujours par défaut, mais vous pouvez modifier cela en utilisant `post-if`.

### `runs.post-if`

**Facultatif** Permet de définir des conditions pour l’exécution de l’action `post:`. L’action `post:` s’exécute uniquement si les conditions de `post-if` sont remplies. Si les conditions ne sont pas définies, `post-if` aura `always()` comme valeur par défaut. Dans `post-if`, les fonctions de vérification d’état évaluent l’état du travail, et non l’état de l’action.

Par exemple, ce `cleanup.js` ne s’exécutera que sur les exécuteurs Linux :

```yaml
  post: 'cleanup.js'
  post-if: runner.os == 'linux'
```

## `runs` pour les actions composites

**Obligatoire** Configure le chemin de l’action composite.

### `runs.using`

**Obligatoire** Vous devez définir cette valeur sur `'composite'`.

### `runs.steps`

**Obligatoire** Les étapes que vous prévoyez d’exécuter dans cette action. Il peut s’agir d’étapes `run` ou `uses`.

#### `runs.steps[*].run`

**Facultatif** La commande que vous souhaitez exécuter. Il peut s’agir d’un inline ou d’un script de votre dépôt d’actions :

{% raw %}
```yaml
runs:
  using: "composite"
  steps:
    - run: ${{ github.action_path }}/test/script.sh
      shell: bash
```
{% endraw %}

Vous pouvez également utiliser `$GITHUB_ACTION_PATH` :

```yaml
runs:
  using: "composite"
  steps:
    - run: $GITHUB_ACTION_PATH/script.sh
      shell: bash
```

Pour plus d’informations, consultez « [`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) ».

#### `runs.steps[*].shell`

**Facultatif** L’interpréteur de commandes dans lequel vous souhaitez exécuter la commande. Vous pouvez utiliser l’un des interpréteurs de commandes [listés ici](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell). Obligatoire si `run` est défini.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
#### `runs.steps[*].if`

**Facultatif** Vous pouvez utiliser la condition `if` pour empêcher l’exécution d’une étape si une condition n’est pas remplie. Vous pouvez utiliser n’importe quel contexte et n’importe quelle expression pris en charge pour créer un conditionnel.

{% data reusables.actions.expression-syntax-if %} Pour plus d’informations, consultez « [Expressions](/actions/learn-github-actions/expressions) ».

**Exemple : Utilisation des contextes**

 Cette étape s’exécute uniquement lorsque le type d’événement est `pull_request` et que l’action d’événement est `unassigned`.

 ```yaml
steps:
  - run: echo This event is a pull request that had an assignee removed.
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
```

**Exemple : Utilisation des fonctions de vérification d’état**

`my backup step` s’exécute uniquement en cas d’échec de l’étape précédente d’une action composite. Pour plus d’informations, consultez « [Expressions](/actions/learn-github-actions/expressions#status-check-functions) ».

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```
{% endif %}

#### `runs.steps[*].name`

**Facultatif** Le nom de l’étape composite.

#### `runs.steps[*].id`

**Facultatif** Un identificateur unique pour l’étape. Vous pouvez utiliser l’étape `id` pour référencer l’étape dans des contextes. Pour plus d’informations, consultez « [Contextes](/actions/learn-github-actions/contexts) ».

#### `runs.steps[*].env`

**Facultatif** Définit une variable d’environnement `map` pour cette étape uniquement. Si vous souhaitez modifier la variable d’environnement stockée dans le workflow, utilisez `echo "{name}={value}" >> $GITHUB_ENV` dans une étape composite.

#### `runs.steps[*].working-directory`

**Facultatif** Spécifie le répertoire de travail dans lequel la commande est exécutée.

#### `runs.steps[*].uses`

**Facultatif** Sélectionne une action à exécuter dans le cadre d’une étape de votre travail. Une action est une unité de code réutilisable. Vous pouvez utiliser une action définie dans le même dépôt que le workflow, dans un dépôt public ou dans une [image conteneur Docker publiée](https://hub.docker.com/).

Nous vous recommandons vivement d’inclure la version de l’action que vous utilisez en spécifiant un numéro d’étiquette Git ref, SHA ou Docker. Si vous ne spécifiez pas de version, cela peut arrêter vos workflows ou provoquer un comportement inattendu lorsque le propriétaire de l’action publie une mise à jour.
- L’utilisation du SHA de commit d’une version d’action publiée est la solution la plus sûre en termes de stabilité et de sécurité.
- L’utilisation de la version d’action majeure spécifique vous permet de recevoir des correctifs critiques et des correctifs de sécurité tout en maintenant la compatibilité. Cela garantit également que votre workflow continue de fonctionner.
- L’utilisation de la branche par défaut d’une action peut être pratique. Toutefois, si un utilisateur publie une nouvelle version majeure avec un changement cassant, votre workflow peut s’arrêter.

Certaines actions nécessitent des entrées que vous devez définir à l’aide du mot clé [`with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith). Examinez le fichier README de l’action pour déterminer les entrées nécessaires.

```yaml
runs:
  using: "composite"
  steps:
    # Reference a specific commit
    - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
    # Reference the major version of a release
    - uses: {% data reusables.actions.action-checkout %}
    # Reference a specific version
    - uses: {% data reusables.actions.action-checkout %}.2.0
    # Reference a branch
    - uses: actions/checkout@main
    # References a subdirectory in a public GitHub repository at a specific branch, ref, or SHA
    - uses: actions/aws/ec2@main
    # References a local action
    - uses: ./.github/actions/my-action
    # References a docker public registry action
    - uses: docker://gcr.io/cloud-builders/gradle
    # Reference a docker image published on docker hub
    - uses: docker://alpine:3.8
```

#### `runs.steps[*].with`

**Facultatif** Une `map` des paramètres d’entrée définis par l’action. Chaque paramètre d’entrée est une paire clé-valeur. Pour plus d’informations, consultez « [Exemple : Spécification d’entrées](#example-specifying-inputs) ».

```yaml
runs:
  using: "composite"
  steps:
    - name: My first step
      uses: actions/hello_world@main
      with:
        first_name: Mona
        middle_name: The
        last_name: Octocat
```

{% ifversion ghes > 3.5 or ghae > 3.5 %}

#### `runs.steps[*].continue-on-error`

**Facultatif**  Empêche l’action d’échouer lorsqu’une étape échoue. Définissez la valeur `true` pour permettre à l’action de réussir en cas d’échec de cette étape.

{% endif %}

## `runs` pour les actions de conteneur Docker

**Obligatoire** Configure l’image utilisée pour l’action de conteneur Docker.

### Exemple : Utilisation d’un fichier Dockerfile dans votre dépôt

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
```

### Exemple : Utilisation d’un conteneur de registre Docker public

```yaml
runs:
  using: 'docker'
  image: 'docker://debian:stretch-slim'
```

### `runs.using`

**Obligatoire** Vous devez définir cette valeur sur `'docker'`.

### `runs.pre-entrypoint`

**Facultatif** Permet d’exécuter un script avant le début de l’action `entrypoint`. Par exemple, vous pouvez utiliser `pre-entrypoint:` pour exécuter un script de configuration prérequis. {% data variables.product.prodname_actions %} utilise `docker run` pour lancer cette action et exécute le script à l’intérieur d’un nouveau conteneur qui utilise la même image de base. Cela signifie que l’état du runtime est différent de celui du conteneur principal `entrypoint`, et que tous les états dont vous avez besoin doivent être accessibles dans l’espace de travail `HOME` ou sous forme de variable `STATE_`. L’action `pre-entrypoint:` s’exécute toujours par défaut, mais vous pouvez modifier cela en utilisant [`runs.pre-if`](#runspre-if).

Le runtime spécifié avec la syntaxe [`using`](#runsusing) exécute ce fichier.

Dans cet exemple, l’action `pre-entrypoint:` exécute un script appelé `setup.sh` :

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  pre-entrypoint: 'setup.sh'
  entrypoint: 'main.sh'
```

### `runs.image`

**Obligatoire** Image Docker à utiliser comme conteneur pour exécuter l’action. La valeur peut être le nom de l’image de base Docker, un `Dockerfile` local dans votre dépôt ou une image publique dans Docker Hub ou un autre registre. Pour référencer un `Dockerfile` local vers votre dépôt, le fichier doit être nommé `Dockerfile`. En outre, vous devez utiliser un chemin relatif à votre fichier de métadonnées d’action. L’application `docker` exécute ce fichier.

### `runs.env`

**Facultatif** Spécifie un mappage clé/valeur des variables d’environnement à définir dans l’environnement de conteneur.

### `runs.entrypoint`

**Facultatif** Remplace le `ENTRYPOINT` Docker dans le `Dockerfile`, ou définit celui-ci s’il n’a pas déjà été spécifié. Utilisez `entrypoint` si `Dockerfile` ne spécifie pas de `ENTRYPOINT` ou si vous souhaitez remplacer l’instruction `ENTRYPOINT`. Si vous omettez `entrypoint`, les commandes que vous spécifiez dans l’instruction Docker `ENTRYPOINT` s’exécuteront. L’instruction Docker `ENTRYPOINT` peut avoir un format _shell_ ou un format _exec_. La documentation Docker `ENTRYPOINT` recommande d’utiliser le format _exec_ de l’instruction `ENTRYPOINT`.

Pour plus d’informations sur l’exécution de `entrypoint`, consultez « [Prise en charge de Dockerfile pour {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint) ».

### `runs.post-entrypoint`

**Facultatif** Permet d’exécuter un script de nettoyage une fois l’action `runs.entrypoint` terminée. {% data variables.product.prodname_actions %} utilise `docker run` pour lancer cette action. Étant donné que {% data variables.product.prodname_actions %} exécute le script à l’intérieur d’un nouveau conteneur à l’aide de la même image de base, l’état d’exécution est différent de celui du conteneur principal `entrypoint`. Vous pouvez accéder à n’importe quel état dont vous avez besoin dans l’espace de travail `HOME` ou en tant que variable `STATE_`. L’action `post-entrypoint:` s’exécute toujours par défaut, mais vous pouvez modifier cela en utilisant [`runs.post-if`](#runspost-if).

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  entrypoint: 'main.sh'
  post-entrypoint: 'cleanup.sh'
```

### `runs.args`

**Facultatif** Tableau de chaînes qui définissent les entrées d’un conteneur Docker. Les entrées peuvent inclure des chaînes codées en dur. {% data variables.product.prodname_dotcom %} passe `args` au `ENTRYPOINT` du conteneur quand celui-ci démarre.

Les `args` sont utilisés à la place de l’instruction `CMD` dans un `Dockerfile`. Si vous utilisez `CMD` dans votre `Dockerfile`, utilisez les instructions classées par ordre de préférence :

{% data reusables.actions.dockerfile-guidelines %}

Si vous devez passer des variables d’environnement à une action, vérifiez que votre action exécute un interpréteur de commandes pour effectuer une substitution de variable. Par exemple, si votre attribut `entrypoint` est défini sur `"sh -c"`, `args` sera exécuté dans un interpréteur de commandes. Sinon, si `Dockerfile` utilise un `ENTRYPOINT` pour exécuter la même commande (`"sh -c"`), `args` s’exécutera dans un interpréteur de commandes.

Pour plus d’informations sur l’utilisation de l’instruction `CMD` avec {% data variables.product.prodname_actions %}, consultez « [Prise en charge de Dockerfile pour {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd) ».

#### Exemple : Définition d’arguments pour le conteneur Docker

{% raw %}
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.greeting }}
    - 'foo'
    - 'bar'
```
{% endraw %}

## `branding`

**Facultatif** Vous pouvez utiliser une couleur ainsi qu’une icône [Feather](https://feathericons.com/) pour créer un badge permettant de personnaliser et de distinguer votre action. Les badges s’affichent en regard du nom de l’action dans [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions).

### Exemple : Configuration de la personnalisation pour une action

```yaml
branding:
  icon: 'award'
  color: 'green'
```

### `branding.color`

Couleur d’arrière-plan du badge. Peut être : `white`, `yellow`, `blue`, `green`, `orange`, `red`, `purple` ou`gray-dark`.

### `branding.icon`

Nom de l’icône [Feather](https://feathericons.com/) v4.28.0 à utiliser. Les icônes de marque sont omises ainsi que les icônes suivantes :

<table>
<tr>
<td>coffee (café)</td>
<td>colonnes</td>
<td>divide-circle</td>
<td>divide-square</td>
</tr>
<tr>
<td>divide</td>
<td>frown</td>
<td>hexagon</td>
<td>key</td>
</tr>
<tr>
<td>meh</td>
<td>mouse-pointer</td>
<td>smile</td>
<td>outil</td>
</tr>
<tr>
<td>x-octagon</td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

Voici la liste exhaustive de toutes les icônes actuellement prises en charge :

<!--
  This table should match the icon list in `app/models/repository_actions/icons.rb` in the internal github repo.
  To support a new icon, update `app/models/repository_actions/icons.rb` and add the svg to `/static/images/icons/feather` in the internal github repo.
-->

<table>
<tr>
<td>activity</td>
<td>airplay</td>
<td>alert-circle</td>
<td>alert-octagon</td>
</tr>
<tr>
<td>alert-triangle</td>
<td>align-center</td>
<td>align-justify</td>
<td>align-left</td>
</tr>
<tr>
<td>align-right</td>
<td>ancre</td>
<td>aperture</td>
<td>archive</td>
</tr>
<tr>
<td>arrow-down-circle</td>
<td>arrow-down-left</td>
<td>arrow-down-right</td>
<td>arrow-down</td>
</tr>
<tr>
<td>arrow-left-circle</td>
<td>arrow-left</td>
<td>arrow-right-circle</td>
<td>arrow-right</td>
</tr>
<tr>
<td>arrow-up-circle</td>
<td>arrow-up-left</td>
<td>arrow-up-right</td>
<td>arrow-up</td>
</tr>
<tr>
<td>at-sign</td>
<td>award</td>
<td>bar-chart-2</td>
<td>bar-chart</td>
</tr>
<tr>
<td>battery-charging</td>
<td>battery</td>
<td>bell-off</td>
<td>clochette</td>
</tr>
<tr>
<td>bluetooth</td>
<td>gras</td>
<td>book-open</td>
<td>book</td>
</tr>
<tr>
<td>signet</td>
<td>box</td>
<td>briefcase</td>
<td>calendrier</td>
</tr>
<tr>
<td>camera-off</td>
<td>caméra</td>
<td>Caster</td>
<td>check-circle</td>
</tr>
<tr>
<td>check-square</td>
<td>case activée</td>
<td>chevron-down</td>
<td>chevron-left</td>
</tr>
<tr>
<td>chevron-right</td>
<td>chevron-up</td>
<td>chevrons-down</td>
<td>chevrons-left</td>
</tr>
<tr>
<td>chevrons-right</td>
<td>chevrons-up</td>
<td>circle</td>
<td>presse-papiers</td>
</tr>
<tr>
<td>horloge</td>
<td>cloud-drizzle</td>
<td>cloud-lightning</td>
<td>cloud-off</td>
</tr>
<tr>
<td>cloud-rain</td>
<td>cloud-snow</td>
<td>cloud</td>
<td>code</td>
</tr>
<tr>
<td>command</td>
<td>compass</td>
<td>copy</td>
<td>corner-down-left</td>
</tr>
<tr>
<td>corner-down-right</td>
<td>corner-left-down</td>
<td>corner-left-up</td>
<td>corner-right-down</td>
</tr>
<tr>
<td>corner-right-up</td>
<td>corner-up-left</td>
<td>corner-up-right</td>
<td>cpu</td>
</tr>
<tr>
<td>credit-card</td>
<td>crop</td>
<td>crosshair</td>
<td>database</td>
</tr>
<tr>
<td>supprimer</td>
<td>disc</td>
<td>dollar-sign</td>
<td>download-cloud</td>
</tr>
<tr>
<td>télécharger</td>
<td>droplet</td>
<td>edit-2</td>
<td>edit-3</td>
</tr>
<tr>
<td>modifier</td>
<td>external-link</td>
<td>eye-off</td>
<td>eye</td>
</tr>
<tr>
<td>fast-forward</td>
<td>feather</td>
<td>file-minus</td>
<td>file-plus</td>
</tr>
<tr>
<td>file-text</td>
<td>fichier</td>
<td>film</td>
<td>filter</td>
</tr>
<tr>
<td>indicateur</td>
<td>folder-minus</td>
<td>folder-plus</td>
<td>dossier</td>
</tr>
<tr>
<td>gift</td>
<td>git-branch</td>
<td>  git-commit</td>
<td>git-merge</td>
</tr>
<tr>
<td>git-pull-request</td>
<td>globe</td>
<td>grid</td>
<td>hard-drive</td>
</tr>
<tr>
<td>hash</td>
<td>headphones</td>
<td>heart</td>
<td>help-circle</td>
</tr>
<tr>
<td>home</td>
<td>image</td>
<td>inbox</td>
<td>info</td>
</tr>
<tr>
<td>italique</td>
<td>couches</td>
<td>disposition</td>
<td>life-buoy</td>
</tr>
<tr>
<td>link-2</td>
<td>link</td>
<td>list</td>
<td>loader</td>
</tr>
<tr>
<td>lock</td>
<td>log-in</td>
<td>log-out</td>
<td>mail</td>
</tr>
<tr>
<td>map-pin</td>
<td>carte</td>
<td>maximize-2</td>
<td>maximize</td>
</tr>
<tr>
<td>menu</td>
<td>message-circle</td>
<td>message-square</td>
<td>mic-off</td>
</tr>
<tr>
<td>mic</td>
<td>minimize-2</td>
<td>minimize</td>
<td>minus-circle</td>
</tr>
<tr>
<td>minus-square</td>
<td>minus</td>
<td>monitor</td>
<td>moon</td>
</tr>
<tr>
<td>more-horizontal</td>
<td>more-vertical</td>
<td>déplacer</td>
<td>music</td>
</tr>
<tr>
<td>navigation-2</td>
<td>navigation</td>
<td>octagon</td>
<td>package</td>
</tr>
<tr>
<td>paperclip</td>
<td>pause-circle</td>
<td>pause</td>
<td>pour cent</td>
</tr>
<tr>
<td>phone-call</td>
<td>phone-forwarded</td>
<td>phone-incoming</td>
<td>phone-missed</td>
</tr>
<tr>
<td>phone-off</td>
<td>phone-outgoing</td>
<td>phone</td>
<td>pie-chart</td>
</tr>
<tr>
<td>play-circle</td>
<td>play</td>
<td>plus-circle</td>
<td>plus-square</td>
</tr>
<tr>
<td>plus</td>
<td>pocket</td>
<td>puissance</td>
<td>printer</td>
</tr>
<tr>
<td>radio</td>
<td>refresh-ccw</td>
<td>refresh-cw</td>
<td>répéter</td>
</tr>
<tr>
<td>rewind</td>
<td>rotate-ccw</td>
<td>rotate-cw</td>
<td>rss</td>
</tr>
<tr>
<td>Enregistrer</td>
<td>scissors</td>
<td>recherche</td>
<td>Envoyer</td>
</tr>
<tr>
<td>server</td>
<td>paramètres</td>
<td>share-2</td>
<td>partager</td>
</tr>
<tr>
<td>shield-off</td>
<td>shield</td>
<td>shopping-bag</td>
<td>shopping-cart</td>
</tr>
<tr>
<td>lecture aléatoire</td>
<td>sidebar</td>
<td>skip-back</td>
<td>skip-forward</td>
</tr>
<tr>
<td>slash</td>
<td>contrôles Slider</td>
<td>smartphone</td>
<td>haut-parleur</td>
</tr>
<tr>
<td>square</td>
<td>étoile</td>
<td>stop-circle</td>
<td>sun</td>
</tr>
<tr>
<td>sunrise</td>
<td>coucher de soleil</td>
<td>tablette</td>
<td>étiquette</td>
</tr>
<tr>
<td>target</td>
<td>terminal</td>
<td>thermometer</td>
<td>thumbs-down</td>
</tr>
<tr>
<td>thumbs-up</td>
<td>toggle-left</td>
<td>toggle-right</td>
<td>trash-2</td>
</tr>
<tr>
<td>trash</td>
<td>trending-down</td>
<td>trending-up</td>
<td>triangle</td>
</tr>
<tr>
<td>camion</td>
<td>tv</td>
<td>type</td>
<td>parapluie</td>
</tr>
<tr>
<td>souligné</td>
<td>déverrouiller</td>
<td>upload-cloud</td>
<td>upload</td>
</tr>
<tr>
<td>user-check</td>
<td>user-minus</td>
<td>user-plus</td>
<td>user-x</td>
</tr>
<tr>
<td>utilisateur</td>
<td>users</td>
<td>video-off</td>
<td>video</td>
</tr>
<tr>
<td>voicemail</td>
<td>volume-1</td>
<td>volume-2</td>
<td>volume-x</td>
</tr>
<tr>
<td>volume</td>
<td>watch</td>
<td>wifi-off</td>
<td>wifi</td>
</tr>
<tr>
<td>wind</td>
<td>x-circle</td>
<td>x-square</td>
<td>x</td>
</tr>
<tr>
<td>zap-off</td>
<td>zap</td>
<td>zoom-in</td>
<td>zoom-out</td>
</tr>
</table>
