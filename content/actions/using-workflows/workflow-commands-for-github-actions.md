---
title: Workflow commands for GitHub Actions
shortTitle: Workflow commands
intro: You can use workflow commands when running shell commands in a workflow or in an action's code.
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About workflow commands

Actions can communicate with the runner machine to set environment variables, output values used by other actions, add debug messages to the output logs, and other tasks.

Most workflow commands use the `echo` command in a specific format, while others are invoked by writing to a file. For more information, see ["Environment files".](#environment-files)

### Example

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

**Note:** Workflow command and parameter names are not case-sensitive.

{% endnote %}

{% warning %}

**Warning:** If you are using Command Prompt, omit double quote characters (`"`) when using workflow commands.

{% endwarning %}

## Using workflow commands to access toolkit functions

The [actions/toolkit](https://github.com/actions/toolkit) includes a number of functions that can be executed as workflow commands. Use the `::` syntax to run the workflow commands within your YAML file; these commands are then sent to the runner over `stdout`. For example, instead of using code to set an output, as below:

```javascript{:copy}
core.setOutput('SELECTED_COLOR', 'green');
```

### Example: Setting a value

You can use the `set-output` command in your workflow to set the same value:

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

The following table shows which toolkit functions are available within a workflow:

| Toolkit function | Equivalent workflow command |
| ----------------- |  ------------- |
| `core.addPath`    | Accessible using environment file `GITHUB_PATH` |
| `core.debug`      | `debug` |{% ifversion fpt or ghes > 3.2 or ghae-issue-4929 or ghec %}
| `core.notice`     | `notice` |{% endif %}
| `core.error`      | `error` |
| `core.endGroup`   | `endgroup` |
| `core.exportVariable` | Accessible using environment file `GITHUB_ENV` |
| `core.getInput`   | Accessible using environment variable `INPUT_{NAME}` |
| `core.getState`   | Accessible using environment variable `STATE_{NAME}` |
| `core.isDebug`    |  Accessible using environment variable `RUNNER_DEBUG` |
| `core.saveState`  | `save-state` |
| `core.setCommandEcho` | `echo` |
| `core.setFailed`  | Used as a shortcut for `::error` and `exit 1` |
| `core.setOutput`  | `set-output` |
| `core.setSecret`  | `add-mask` |
| `core.startGroup` | `group` |
| `core.warning`    | `warning` |

## Setting an output parameter

Sets an action's output parameter.

```{:copy}
::set-output name={name}::{value}
```

Optionally, you can also declare output parameters in an action's metadata file. For more information, see "[Metadata syntax for {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)."

### Example: Setting an output parameter

{% bash %}

```bash{:copy}
echo "::set-output name=action_fruit::strawberry"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::set-output name=action_fruit::strawberry"
```

{% endpowershell %}

## Setting a debug message

Prints a debug message to the log. You must create a secret named `ACTIONS_STEP_DEBUG` with the value `true` to see the debug messages set by this command in the log. For more information, see "[Enabling debug logging](/actions/managing-workflow-runs/enabling-debug-logging)."

```{:copy}
::debug::{message}
```

### Example: Setting a debug message

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

{% ifversion fpt or ghes > 3.2 or ghae-issue-4929 or ghec %}

## Setting a notice message

Creates a notice message and prints the message to the log. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Example: Setting a notice message

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
{% endif %}

## Setting a warning message

Creates a warning message and prints the message to the log. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::warning file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Example: Setting a warning message

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

## Setting an error message

Creates an error message and prints the message to the log. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::error file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Example: Setting an error message

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

## Grouping log lines

Creates an expandable group in the log. To create a group, use the `group` command and specify a `title`. Anything you print to the log between the `group` and `endgroup` commands is nested inside an expandable entry in the log.

```{:copy}
::group::{title}
::endgroup::
```

### Example: Grouping log lines

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

![Foldable group in workflow run log](/assets/images/actions-log-group.png)

## Masking a value in log

```{:copy}
::add-mask::{value}
```

Masking a value prevents a string or variable from being printed in the log. Each masked word separated by whitespace is replaced with the `*` character. You can use an environment variable or string for the mask's `value`.

### Example: Masking a string

When you print `"Mona The Octocat"` in the log, you'll see `"***"`.

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

### Example: Masking an environment variable

When you print the variable `MY_NAME` or the value `"Mona The Octocat"` in the log, you'll see `"***"` instead of `"Mona The Octocat"`.

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

## Stopping and starting workflow commands

Stops processing any workflow commands. This special command allows you to log anything without accidentally running a workflow command. For example, you could stop logging to output an entire script that has comments.

```{:copy}
::stop-commands::{endtoken}
```

To stop the processing of workflow commands, pass a unique token to `stop-commands`. To resume processing workflow commands, pass the same token that you used to stop workflow commands.

{% warning %}

**Warning:** Make sure the token you're using is randomly generated and unique for each run.

{% endwarning %}

```{:copy}
::{endtoken}::
```

### Example: Stopping and starting workflow commands

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

## Echoing command outputs

Enables or disables echoing of workflow commands. For example, if you use the `set-output` command in a workflow, it sets an output parameter but the workflow run's log does not show the command itself. If you enable command echoing, then the log shows the command, such as `::set-output name={name}::{value}`.

```{:copy}
::echo::on
::echo::off
```

Command echoing is disabled by default. However, a workflow command is echoed if there are any errors processing the command.

The `add-mask`, `debug`, `warning`, and `error` commands do not support echoing because their outputs are already echoed to the log.

You can also enable command echoing globally by turning on step debug logging using the `ACTIONS_STEP_DEBUG` secret. For more information, see "[Enabling debug logging](/actions/managing-workflow-runs/enabling-debug-logging)". In contrast, the `echo` workflow command lets you enable command echoing at a more granular level, rather than enabling it for every workflow in a repository.

### Example: Toggling command echoing

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

The example above prints the following lines to the log:

```{:copy}
::set-output name=action_echo::enabled
::echo::off
```

Only the second `set-output` and `echo` workflow commands are included in the log because command echoing was only enabled when they were run. Even though it is not always echoed, the output parameter is set in all cases.

## Sending values to the pre and post actions

You can use the `save-state` command to create environment variables for sharing with your workflow's `pre:` or `post:` actions. For example, you can create a file with the `pre:` action,  pass the file location to the `main:` action, and then use the `post:` action to delete the file. Alternatively, you could create a file with the `main:` action, pass the file location to the `post:` action, and also use the `post:` action to delete the file.

If you have multiple `pre:` or `post:` actions, you can only access the saved value in the action where `save-state` was used. For more information on the `post:` action, see "[Metadata syntax for {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#runspost)."

The `save-state`  command can only be run within an action, and is not available to YAML files. The saved value is stored as an environment value with the `STATE_` prefix.

This example uses JavaScript to run the `save-state` command. The resulting environment variable is named `STATE_processID` with the value of `12345`:

```javascript{:copy}
console.log('::save-state name=processID::12345')
```

The `STATE_processID` variable is then exclusively available to the cleanup script running under the `main` action. This example runs in `main` and uses JavaScript to display the value assigned to the `STATE_processID` environment variable:

```javascript{:copy}
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```

## Environment files

During the execution of a workflow, the runner generates temporary files that can be used to perform certain actions. The path to these files are exposed via environment variables. You will need to use UTF-8 encoding when writing to these files to ensure proper processing of the commands. Multiple commands can be written to the same file, separated by newlines.

{% powershell %}

{% note %}

**Note:** PowerShell versions 5.1 and below (`shell: powershell`) do not use UTF-8 by default, so you must specify the UTF-8 encoding. For example:

```yaml{:copy}
jobs:
  legacy-powershell-example:
    runs-on: windows-latest
    steps:
      - shell: powershell
        run: |
          "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

PowerShell Core versions 6 and higher (`shell: pwsh`) use UTF-8 by default. For example:

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

## Setting an environment variable

{% bash %}

```bash{:copy}
echo "{environment_variable_name}={value}" >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

- Using PowerShell version 6 and higher:
```pwsh{:copy}
"{environment_variable_name}={value}" >> $env:GITHUB_ENV
```

- Using PowerShell version 5.1 and below:
```powershell{:copy}
"{environment_variable_name}={value}" | Out-File -FilePath $env:GITHUB_ENV -Encoding utf8 -Append
```

{% endpowershell %}

You can make an environment variable available to any subsequent steps in a workflow job by defining or updating the environment variable and writing this to the `GITHUB_ENV` environment file. The step that creates or updates the environment variable does not have access to the new value, but all subsequent steps in a job will have access. The names of environment variables are case-sensitive, and you can include punctuation. For more information, see "[Environment variables](/actions/learn-github-actions/environment-variables)."

### Example

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

### Multiline strings

For multiline strings, you may use a delimiter with the following syntax. 

```{:copy}
{name}<<{delimiter}
{value}
{delimiter}
```

#### Example

This example uses `EOF` as a delimiter, and sets the `JSON_RESPONSE` environment variable to the value of the `curl` response.

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

## Adding a system path

Prepends a directory to the system `PATH` variable and automatically makes it available to all subsequent actions in the current job; the currently running action cannot access the updated path variable. To see the currently defined paths for your job, you can use `echo "$PATH"` in a step or an action.

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

### Example

This example demonstrates how to add the user `$HOME/.local/bin` directory to `PATH`:

{% bash %}

```bash{:copy}
echo "$HOME/.local/bin" >> $GITHUB_PATH
```

{% endbash %}


This example demonstrates how to add the user `$env:HOMEPATH/.local/bin` directory to `PATH`:

{% powershell %}

```pwsh{:copy}
"$env:HOMEPATH/.local/bin" >> $env:GITHUB_PATH
```

{% endpowershell %}
