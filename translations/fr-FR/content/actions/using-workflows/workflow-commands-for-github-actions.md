---
title: Workflow commands for GitHub Actions
shortTitle: Workflow commands
intro: Vous pouvez utiliser des commandes de workflow quand vous exécutez des commandes d’interpréteur de commandes dans un workflow ou dans le code d’une action.
defaultTool: bash
redirect_from:
  - /articles/development-tools-for-github-actions
  - /github/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/reference/development-tools-for-github-actions
  - /actions/reference/logging-commands-for-github-actions
  - /actions/reference/workflow-commands-for-github-actions
  - /actions/learn-github-actions/workflow-commands-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 69853702258a6a0acaa3501e007c8c20a52874d5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106884'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des commandes de workflow

Les actions peuvent communiquer avec la machine de l’exécuteur pour définir des variables d’environnement, générer des valeurs utilisées par d’autres actions, ajouter des messages de débogage aux journaux de sortie, entre autres tâches.

La plupart des commandes de workflow utilisent la commande `echo` dans un format spécifique, tandis que d’autres sont appelées en écrivant dans un fichier. Pour plus d’informations, consultez « [Fichiers d’environnement](#environment-files) ».

### Exemple

{% bash %}

```bash{:copy}
echo "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endpowershell %}

{% note %}

**Remarque :** Les noms de commandes et de paramètres de workflow ne respectent pas la casse.

{% endnote %}

{% warning %}

**Avertissement :** Si vous utilisez l’invite de commandes, omettez les guillemets doubles (`"`) lors de l’utilisation de commandes de workflow.

{% endwarning %}

## Utilisation de commandes de workflow pour accéder aux fonctions du kit de ressources

Les [actions/le kit de ressources](https://github.com/actions/toolkit) incluent un certain nombre de fonctions qui peuvent être exécutées en tant que commandes de workflow. Utilisez la syntaxe `::` pour exécuter les commandes de workflow dans votre fichier YAML. Ces commandes sont ensuite envoyées à l’exécuteur via `stdout`.

{%- ifversion actions-save-state-set-output-envs %} Par exemple, au lieu d’utiliser du code pour créer une annotation d’erreur, comme ci-dessous :

```javascript{:copy}
core.error('Missing semicolon', {file: 'app.js', startLine: 1})
```

### Exemple : Création d’une annotation pour une erreur

Vous pouvez utiliser la commande `error` dans votre workflow pour créer la même annotation d’erreur :

{% bash %}

{% raw %}
```yaml{:copy}
      - name: Create annotation for build error
        run: echo "::error file=app.js,line=1::Missing semicolon"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
      - name: Create annotation for build error
        run: Write-Output "::error file=app.js,line=1::Missing semicolon"
```
{% endraw %}

{% endpowershell %} {%- else %} Par exemple, au lieu d’utiliser du code pour définir une sortie, comme ci-dessous :

```javascript{:copy}
core.setOutput('SELECTED_COLOR', 'green');
```

### Exemple : Définition d’une valeur

Vous pouvez utiliser la commande `set-output` dans votre workflow pour définir la même valeur :

{% bash %}

{% raw %}
```yaml{:copy}
      - name: Set selected color
        run: echo '::set-output name=SELECTED_COLOR::green'
        id: random-color-generator
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
      - name: Set selected color
        run: Write-Output "::set-output name=SELECTED_COLOR::green"
        id: random-color-generator
      - name: Get color
        run: Write-Output "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endpowershell %}

{% endif %}

Le tableau suivant montre quelles fonctions du kit de ressources sont disponibles dans un workflow :

| Fonction du kit de ressources | Commande de workflow équivalente |
| ----------------- |  ------------- |
| `core.addPath`    | Accessible à l’aide du fichier d’environnement `GITHUB_PATH` |
| `core.debug`      | `debug` |
| `core.notice`     | `notice` |
| `core.error`      | `error` |
| `core.endGroup`   | `endgroup` |
| `core.exportVariable` | Accessible à l’aide du fichier d’environnement `GITHUB_ENV` |
| `core.getInput`   | Accessible à l’aide de la variable d’environnement `INPUT_{NAME}` |
| `core.getState`   | Accessible à l’aide de la variable d’environnement `STATE_{NAME}` |
| `core.isDebug`    |  Accessible à l’aide de la variable d’environnement `RUNNER_DEBUG` |
{%- ifversion actions-job-summaries %} | `core.summary` | Accessible avec le fichier d’environnement `GITHUB_STEP_SUMMARY` | {%- endif %} | `core.saveState`  | {% ifversion actions-save-state-set-output-envs %}Accessible avec le fichier d’environnement `GITHUB_STATE`{% else %}`save-state`{% endif %} | | `core.setCommandEcho` | `echo` | | `core.setFailed`  | Utilisé comme raccourci pour `::error` et `exit 1` | | `core.setOutput`  | {% ifversion actions-save-state-set-output-envs %}Accessible avec le fichier d’environnement `GITHUB_OUTPUT`{% else %}`set-output`{% endif %} | | `core.setSecret`  | `add-mask` | | `core.startGroup` | `group` | | `core.warning`    | `warning` |

{% ifversion actions-save-state-set-output-envs %}{% else %}
## Définition d’un paramètre de sortie

Définit le paramètre de sortie d’une action.

```{:copy}
::set-output name={name}::{value}
```

Si vous le souhaitez, vous pouvez également déclarer des paramètres de sortie dans le fichier de métadonnées d’une action. Pour plus d’informations, consultez « [Syntaxe des métadonnées pour {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions) ».

Vous pouvez échapper des chaînes multilignes pour définir un paramètre de sortie en créant une variable d’environnement et en l’utilisant dans une commande de workflow. Pour plus d’informations, consultez « [Définition d’une variable d’environnement](#setting-an-environment-variable) ».

### Exemple : Définition d’un paramètre de sortie

{% bash %}

```bash{:copy}
echo "::set-output name=action_fruit::strawberry"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::set-output name=action_fruit::strawberry"
```

{% endpowershell %} {% endif %}

## Définition d’un message de débogage

Imprime un message de débogage dans le journal. Vous devez créer un secret nommé `ACTIONS_STEP_DEBUG` avec la valeur `true` pour afficher les messages de débogage définis par cette commande dans le journal. Pour plus d’informations, consultez « [Activation de la journalisation du débogage](/actions/managing-workflow-runs/enabling-debug-logging) ».

```{:copy}
::debug::{message}
```

### Exemple : Définition d’un message de débogage

{% bash %}

```bash{:copy}
echo "::debug::Set the Octocat variable"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::debug::Set the Octocat variable"
```

{% endpowershell %}

## Définition d’un message de notification

Crée un message de notification et l’imprime dans le journal. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Exemple : Définition d’un message de notification

{% bash %}

```bash{:copy}
echo "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Définition d’un message d’avertissement

Crée un message d’avertissement et l’imprime dans le journal. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::warning file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Exemple : Définition d’un message d’avertissement

{% bash %}

```bash{:copy}
echo "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Définition d’un message d’erreur

Crée un message d’erreur et l’imprime dans le journal. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::error file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Exemple : Définition d’un message d’erreur

{% bash %}

```bash{:copy}
echo "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Regroupement de lignes de journal

Crée un groupe extensible dans le journal. Pour créer un groupe, utilisez la commande `group` et spécifiez un titre (`title`). Tout ce que vous imprimez dans le journal entre les commandes `group` et `endgroup` est imbriqué dans une entrée extensible dans le journal.

```{:copy}
::group::{title}
::endgroup::
```

### Exemple : Regroupement de lignes de journal

{% bash %}

```yaml{:copy}
jobs:
  bash-example:
    runs-on: ubuntu-latest
    steps:
      - name: Group of log lines
        run: |
            echo "::group::My title"
            echo "Inside group"
            echo "::endgroup::"
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  powershell-example:
    runs-on: windows-latest
    steps:
      - name: Group of log lines
        run: |
            Write-Output "::group::My title"
            Write-Output "Inside group"
            Write-Output "::endgroup::"
```

{% endpowershell %}

![Groupe pliable dans le journal d’exécution du workflow](/assets/images/actions-log-group.png)

## Masquage d’une valeur dans le journal

```{:copy}
::add-mask::{value}
```

Le masquage d’une valeur empêche l’impression d’une chaîne ou d’une variable dans le journal. Chaque mot masqué séparé par des espaces blancs est remplacé par le caractère `*`. Vous pouvez utiliser une variable d’environnement ou une chaîne pour la valeur (`value`) du masque. Lorsque vous masquez une valeur, elle est traitée comme un secret et est éditée sur l’exécuteur. Par exemple, après avoir masqué une valeur, vous ne pouvez pas définir cette valeur en tant que sortie.

### Exemple : Masquage d’une chaîne

Lorsque vous imprimez `"Mona The Octocat"` dans le journal, vous voyez `"***"`.

{% bash %}

```bash{:copy}
echo "::add-mask::Mona The Octocat"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::add-mask::Mona The Octocat"
```

{% endpowershell %}

{% warning %}

**Avertissement** : Veillez à inscrire le secret avec « add-mask » avant de l’afficher dans les journaux de génération ou de l’utiliser dans les autres commandes de workflow.

{% endwarning %}

### Exemple : Masquage d’une variable d’environnement

Lorsque vous imprimez la variable `MY_NAME` ou la valeur `"Mona The Octocat"` dans le journal, vous voyez `"***"` au lieu de `"Mona The Octocat"`.

{% bash %}

```yaml{:copy}
jobs:
  bash-example:
    runs-on: ubuntu-latest
    env:
      MY_NAME: "Mona The Octocat"
    steps:
      - name: bash-version
        run: echo "::add-mask::$MY_NAME"
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  powershell-example:
    runs-on: windows-latest
    env:
      MY_NAME: "Mona The Octocat"
    steps:
      - name: powershell-version
        run: Write-Output "::add-mask::$env:MY_NAME"
```

{% endpowershell %}

## Arrêt et démarrage de commandes de workflow

Arrête le traitement de toutes les commandes de workflow. Cette commande spéciale vous permet de tout journaliser sans exécuter accidentellement une commande de workflow. Par exemple, vous pouvez arrêter la journalisation pour générer l’intégralité d’un script contenant des commentaires.

```{:copy}
::stop-commands::{endtoken}
```

Pour arrêter le traitement des commandes de workflow, passez un jeton unique à `stop-commands`. Pour reprendre le traitement des commandes de workflow, passez le même jeton que celui que vous avez utilisé pour arrêter les commandes de workflow.

{% warning %}

**Avertissement :** Assurez-vous que le jeton que vous utilisez est généré de manière aléatoire et qu’il est unique pour chaque exécution.

{% endwarning %}

```{:copy}
::{endtoken}::
```

### Exemple : Arrêt et démarrage de commandes de workflow

{% bash %}

{% raw %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: Disable workflow commands
        run: |
          echo '::warning:: This is a warning message, to demonstrate that commands are being processed.'
          stopMarker=$(uuidgen)
          echo "::stop-commands::$stopMarker"
          echo '::warning:: This will NOT be rendered as a warning, because stop-commands has been invoked.'
          echo "::$stopMarker::"
          echo '::warning:: This is a warning again, because stop-commands has been turned off.'
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: windows-latest
    steps:
      - name: Disable workflow commands
        run: |
          Write-Output '::warning:: This is a warning message, to demonstrate that commands are being processed.'
          $stopMarker = New-Guid
          Write-Output "::stop-commands::$stopMarker"
          Write-Output '::warning:: This will NOT be rendered as a warning, because stop-commands has been invoked.'
          Write-Output "::$stopMarker::"
          Write-Output '::warning:: This is a warning again, because stop-commands has been turned off.'
```

{% endraw %}

{% endpowershell %}

{% ifversion actions-save-state-set-output-envs %}{% else %}
## Renvoi de sorties de commandes

Active ou désactive le renvoi de commandes de workflow. Par exemple, si vous utilisez la commande `set-output` dans un workflow, elle définit un paramètre de sortie, mais le journal de l’exécution du workflow n’affiche pas la commande elle-même. Si vous activez le renvoi des commandes, le journal affiche la commande, par exemple `::set-output name={name}::{value}`.

```{:copy}
::echo::on
::echo::off
```

Le renvoi des commandes est désactivé par défaut. Toutefois, une commande de workflow est renvoyée en cas d’erreurs lors de son traitement.

Les commandes `add-mask`, `debug`, `warning` et `error` ne prennent pas en charge le renvoi, car leurs sorties sont déjà répercutées dans le journal.

Vous pouvez également activer le renvoi des commandes globalement en activant la journalisation du débogage par étape à l’aide du secret `ACTIONS_STEP_DEBUG`. Pour plus d’informations, consultez « [Activation de la journalisation du débogage](/actions/managing-workflow-runs/enabling-debug-logging) ». En revanche, la commande de workflow `echo` vous permet d’activer le renvoi des commandes de façon plus précise, plutôt que de l’activer pour chaque workflow d’un dépôt.

### Exemple : Activation/désactivation du renvoi des commandes

{% bash %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: toggle workflow command echoing
        run: |
          echo '::set-output name=action_echo::disabled'
          echo '::echo::on'
          echo '::set-output name=action_echo::enabled'
          echo '::echo::off'
          echo '::set-output name=action_echo::disabled'
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: windows-latest
    steps:
      - name: toggle workflow command echoing
        run: |
          write-output "::set-output name=action_echo::disabled"
          write-output "::echo::on"
          write-output "::set-output name=action_echo::enabled"
          write-output "::echo::off"
          write-output "::set-output name=action_echo::disabled"
```

{% endpowershell %}

L’exemple ci-dessus imprime les lignes suivantes dans le journal :

```{:copy}
::set-output name=action_echo::enabled
::echo::off
```

Seules les deuxièmes commandes de workflow `set-output` et `echo` sont incluses dans le journal, car le renvoi des commandes n’a été activé que lors de leur exécution. Même s’il n’est pas toujours répercuté, le paramètre de sortie est défini dans tous les cas.
 
{% endif %}

## Envoi de valeurs aux actions de préalables (pre) et ultérieures (post)

{% ifversion actions-save-state-set-output-envs %}Vous pouvez créer des variables d’environnement pour les partager avec les actions `pre:` ou `post:` de votre workflow en écrivant sur le fichier situé dans `GITHUB_STATE`{% else %}Vous pouvez utiliser la commande `save-state` pour créer des variables d’environnement pour les partager avec les actions `pre:` ou `post:` de votre workflow{% endif %}. Par exemple, vous pouvez créer un fichier avec l’action `pre:`, passer l’emplacement du fichier à l’action `main:`, puis utiliser l’action `post:` pour supprimer le fichier. Vous pouvez également créer un fichier avec l’action `main:`, passer l’emplacement du fichier à l’action `post:`, puis également utiliser l’action `post:` pour supprimer le fichier.

Si vous avez plusieurs actions `pre:` ou `post:`, vous pouvez uniquement accéder à la valeur enregistrée dans l’action où {% ifversion actions-save-state-set-output-envs %}elle a été écrite dans `GITHUB_STATE`{% else %}`save-state` a été utilisé{% endif %}. Pour plus d’informations sur l’action `post:`, consultez « [Syntaxe des métadonnées pour {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#runspost) ».

{% ifversion actions-save-state-set-output-envs %} Le fichier `GITHUB_STATE` est disponible uniquement dans une action{% else %}La commande `save-state` ne peut être exécutée que dans une action et n’est pas disponible dans les fichiers YAML{% endif %}. La valeur enregistrée est stockée en tant que valeur d’environnement avec le préfixe `STATE_`.

{% ifversion actions-save-state-set-output-envs %} Cet exemple utilise JavaScript pour écrire dans le fichier `GITHUB_STATE`. La variable d’environnement obtenue est nommée `STATE_processID` avec la valeur `12345` :

```javascript{:copy}
import * as fs from 'fs'
import * as os from 'os'

fs.appendFileSync(process.env.GITHUB_STATE, `processID=12345${os.EOL}`, {
  encoding: 'utf8'
})
```

{% else %} Cet exemple utilise JavaScript pour exécuter la commande `save-state`. La variable d’environnement obtenue est nommée `STATE_processID` avec la valeur `12345` :

```javascript{:copy}
console.log('::save-state name=processID::12345')
```
{% endif %}

La variable `STATE_processID` est ensuite disponible exclusivement pour le script de nettoyage s’exécutant sous l’action `main`. Cet exemple s’exécute dans `main` et utilise JavaScript pour afficher la valeur affectée à la variable d’environnement `STATE_processID` :

```javascript{:copy}
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```

## Fichiers d’environnement

Pendant l’exécution d’un workflow, l’exécuteur génère des fichiers temporaires qui peuvent être utilisés pour effectuer certaines actions. Le chemin de ces fichiers est exposé via des variables d’environnement. Vous devez utiliser l’encodage UTF-8 lors de l’écriture dans ces fichiers pour garantir le traitement approprié des commandes. Plusieurs commandes peuvent être écrites dans le même fichier, séparées par des sauts de ligne.

{% powershell %}

{% note %}

**Remarque :** Les versions 5.1 et antérieures de PowerShell (`shell: powershell`) n’utilisent pas UTF-8 par défaut. Vous devez donc spécifier l’encodage UTF-8. Par exemple :

```yaml{:copy}
jobs:
  legacy-powershell-example:
    runs-on: windows-latest
    steps:
      - shell: powershell
        run: |
          "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

PowerShell Core versions 6 et ultérieures (`shell: pwsh`) utilisent UTF-8 par défaut. Par exemple :

```yaml{:copy}
jobs:
  powershell-core-example:
    runs-on: windows-latest
    steps:
      - shell: pwsh
        run: |
          "mypath" >> $env:GITHUB_PATH
```

{% endnote %}

{% endpowershell %}

## Définition d’une variable d’environnement

{% bash %}

```bash{:copy}
echo "{environment_variable_name}={value}" >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

- Utilisation de PowerShell version 6 et ultérieures :

  ```pwsh{:copy}
  "{environment_variable_name}={value}" >> $env:GITHUB_ENV
  ```

- Utilisation de PowerShell version 5.1 et antérieures :

  ```powershell{:copy}
  "{environment_variable_name}={value}" | Out-File -FilePath $env:GITHUB_ENV -Encoding utf8 -Append
  ```

{% endpowershell %}

Vous pouvez rendre une variable d’environnement disponible pour toutes les étapes suivantes d’un travail de workflow en définissant ou en mettant à jour la variable d’environnement, puis en écrivant ceci dans le fichier d’environnement `GITHUB_ENV`. L’étape qui crée ou met à jour la variable d’environnement n’a pas accès à la nouvelle valeur, mais toutes les étapes suivantes d’un travail y ont accès. Les noms des variables d’environnement respectent la casse et vous pouvez inclure des signes de ponctuation. Pour en savoir plus, consultez « [Variables d’environnement](/actions/learn-github-actions/environment-variables) ».

### Exemple

{% bash %}

{% raw %}
```yaml{:copy}
steps:
  - name: Set the value
    id: step_one
    run: |
      echo "action_state=yellow" >> $GITHUB_ENV
  - name: Use the value
    id: step_two
    run: |
      echo "${{ env.action_state }}" # This will output 'yellow'
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
steps:
  - name: Set the value
    id: step_one
    run: |
      "action_state=yellow" >> $env:GITHUB_ENV
  - name: Use the value
    id: step_two
    run: |
      Write-Output "${{ env.action_state }}" # This will output 'yellow'
```
{% endraw %}

{% endpowershell %}

### Chaînes multilignes

Pour les chaînes multilignes, vous pouvez utiliser un délimiteur avec la syntaxe suivante.

```{:copy}
{name}<<{delimiter}
{value}
{delimiter}
```

{% warning %}

**Avertissement :** Assurez-vous que le séparateur que vous utilisez est généré de manière aléatoire et qu’il est unique pour chaque exécution. Pour plus d’informations, consultez « [Présentation du risque d’injections de scripts](/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections) ».

{% endwarning %}

#### Exemple

Cet exemple utilise `EOF` comme délimiteur et définit la variable d’environnement `JSON_RESPONSE` sur la valeur de la réponse `curl`.

{% bash %}

```yaml{:copy}
steps:
  - name: Set the value in bash
    id: step_one
    run: |
      echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
      curl https://example.lab >> $GITHUB_ENV
      echo 'EOF' >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

```yaml{:copy}
steps:
  - name: Set the value in pwsh
    id: step_one
    run: |
      "JSON_RESPONSE<<EOF" >> $env:GITHUB_ENV
      (Invoke-WebRequest -Uri "https://example.lab").Content >> $env:GITHUB_ENV
      "EOF" >> $env:GITHUB_ENV
    shell: pwsh
```

{% endpowershell %}

{% ifversion actions-save-state-set-output-envs %}
## Définition d’un paramètre de sortie

Définit le paramètre de sortie d’une étape. Notez que l’étape a besoin d’un `id` pour être définie afin de récupérer ensuite la valeur de sortie.

{% bash %}

```bash{:copy}
echo "{name}={value}" >> $GITHUB_OUTPUT
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
"{name}=value" >> $env:GITHUB_OUTPUT
```

{% endpowershell %}

### Exemple

{% bash %}

Cet exemple montre comment définir le paramètre de sortie `SELECTED_COLOR` pour le récupérer par la suite :

{% raw %}
```yaml{:copy}
      - name: Set color
        id: random-color-generator
        run: echo "SELECTED_COLOR=green" >> $GITHUB_OUTPUT
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %} Cet exemple montre comment définir le paramètre de sortie `SELECTED_COLOR` pour le récupérer par la suite :

```yaml{:copy}
      - name: Set color
        id: random-color-generator
        run: |
            "SELECTED_COLOR=green" >> $env:GITHUB_OUTPUT
      - name: Get color
        run: Write-Output "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endpowershell %} {% endif %}

{% ifversion actions-job-summaries %}

## Ajout d’un résumé de travail

{% bash %}

```bash{:copy}
echo "{markdown content}" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
"{markdown content}" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

Vous pouvez définir un Markdown personnalisé pour chaque travail afin qu’il s’affiche sur la page Résumé d’une exécution de workflow. Vous pouvez utiliser des résumés de travaux pour afficher et regrouper du contenu unique, tel que des résumés de résultats de test, afin qu’un utilisateur qui affiche le résultat d’une exécution de workflow n’ait pas besoin d’accéder aux journaux pour voir des informations importantes relatives à l’exécution, telles que les défaillances.

Les résumés de travaux prennent en charge [Markdown adapté {% data variables.product.prodname_dotcom %}](https://github.github.com/gfm/) et vous pouvez ajouter votre contenu Markdown pour une étape au fichier d’environnement `GITHUB_STEP_SUMMARY`. `GITHUB_STEP_SUMMARY` est unique pour chaque étape d’un travail. Pour plus d’informations sur le fichier par étape auquel `GITHUB_STEP_SUMMARY` fait référence, consultez « [Fichiers d’environnement](#environment-files) ».

Lorsqu’un travail se termine, les résumés de toutes les étapes d’un travail sont regroupés dans un résumé de travail unique et sont affichés sur la page résumé de l’exécution du workflow. Si plusieurs travaux génèrent des résumés, les résumés des travaux sont classés par heure d’achèvement du travail.

### Exemple

{% bash %}

```bash{:copy}
echo "### Hello world! :rocket:" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
"### Hello world! :rocket:" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

![Exemple de résumé Markdown](/assets/images/actions-job-summary-simple-example.png)

### Contenu Markdown multiligne

Pour le contenu Markdown multiligne, vous pouvez utiliser `>>` pour ajouter en continu du contenu pour l’étape actuelle. Avec chaque opération d’ajout, un caractère de nouvelle ligne est automatiquement ajouté.

#### Exemple

{% bash %}

```yaml
- name: Generate list using Markdown
  run: |
    echo "This is the lead in sentence for the list" >> $GITHUB_STEP_SUMMARY
    echo "" >> $GITHUB_STEP_SUMMARY # this is a blank line
    echo "- Lets add a bullet point" >> $GITHUB_STEP_SUMMARY
    echo "- Lets add a second bullet point" >> $GITHUB_STEP_SUMMARY
    echo "- How about a third one?" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Generate list using Markdown
  run: |
    "This is the lead in sentence for the list" >> $env:GITHUB_STEP_SUMMARY
    "" >> $env:GITHUB_STEP_SUMMARY # this is a blank line
    "- Lets add a bullet point" >> $env:GITHUB_STEP_SUMMARY
    "- Lets add a second bullet point" >> $env:GITHUB_STEP_SUMMARY
    "- How about a third one?" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

### Remplacement de résumés des travaux

Pour effacer tout le contenu de l’étape actuelle, vous pouvez utiliser `>` pour remplacer tout contenu précédemment ajouté.

#### Exemple

{% bash %}

```yaml
- name: Overwrite Markdown
  run: |
    echo "Adding some Markdown content" >> $GITHUB_STEP_SUMMARY
    echo "There was an error, we need to clear the previous Markdown with some new content." > $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Overwrite Markdown
  run: |
    "Adding some Markdown content" >> $env:GITHUB_STEP_SUMMARY
    "There was an error, we need to clear the previous Markdown with some new content." > $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

### Suppression de résumés de travaux

Pour supprimer complètement un résumé de l’étape actuelle, le fichier auquel `GITHUB_STEP_SUMMARY` fait référence peut être supprimé.

#### Exemple

{% bash %}

```yaml
- name: Delete all summary content
  run: |
    echo "Adding Markdown content that we want to remove before the step ends" >> $GITHUB_STEP_SUMMARY
    rm $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Delete all summary content
  run: |
    "Adding Markdown content that we want to remove before the step ends" >> $env:GITHUB_STEP_SUMMARY
    rm $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

Une fois l’étape terminée, les résumés des travaux sont chargés et les étapes suivantes ne peuvent pas modifier le contenu Markdown précédemment chargé. Les résumés masquent automatiquement les secrets qui peuvent avoir été ajoutés accidentellement. Si un résumé de travail contient des informations sensibles qui doivent être supprimées, vous pouvez supprimer l’exécution entière du workflow pour supprimer tous ses résumés de travaux. Pour plus d’informations, consultez « [Suppression d’une exécution de workflow](/actions/managing-workflow-runs/deleting-a-workflow-run) ».

### Isolation et limites des étapes

Les résumés de travaux sont isolés entre les étapes et chaque étape est limitée à une taille maximale de 1MiB. L’isolation est appliquée entre les étapes afin que Markdown potentiellement mal formé à partir d’une seule étape ne puisse pas interrompre le rendu Markdown pour les étapes suivantes. Si plus de 1MiB de contenu est ajouté pour une étape, le chargement de l’étape échoue et une annotation d’erreur est créée. Télécharger des défaillances de résumés des travaux n’affecte pas l’état global d’une étape ou d’un travail. Un maximum de 20 résumés de travaux à partir des étapes s’affichent par travail.

{% endif %}

## Ajout d’un chemin système

Ajoute un répertoire à la variable système `PATH` et le rend automatiquement disponible pour toutes les actions suivantes dans le travail actuel. L’action en cours d’exécution ne peut pas accéder à la variable de chemin mise à jour. Pour afficher les chemins actuellement définis pour votre travail, vous pouvez utiliser `echo "$PATH"` dans une étape ou une action.

{% bash %}

```bash{:copy}
echo "{path}" >> $GITHUB_PATH
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
"{path}" >> $env:GITHUB_PATH
```

{% endpowershell %}

### Exemple

{% bash %}

Cet exemple montre comment ajouter le répertoire `$HOME/.local/bin` de l’utilisateur à `PATH` :

```bash{:copy}
echo "$HOME/.local/bin" >> $GITHUB_PATH
```

{% endbash %}

{% powershell %}

Cet exemple montre comment ajouter le répertoire `$env:HOMEPATH/.local/bin` de l’utilisateur à `PATH` :

```pwsh{:copy}
"$env:HOMEPATH/.local/bin" >> $env:GITHUB_PATH
```

{% endpowershell %}
