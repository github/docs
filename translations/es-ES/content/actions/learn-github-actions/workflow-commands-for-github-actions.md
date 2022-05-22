---
title: Workflow commands for GitHub Actions
shortTitle: Workflow commands
intro: You can use workflow commands when running shell commands in a workflow or in an action's code.
redirect_from:
  - /articles/development-tools-for-github-actions
  - /github/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/reference/development-tools-for-github-actions
  - /actions/reference/logging-commands-for-github-actions
  - /actions/reference/workflow-commands-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## About workflow commands

Actions can communicate with the runner machine to set environment variables, output values used by other actions, add debug messages to the output logs, and other tasks.

Most workflow commands use the `echo` command in a specific format, while others are invoked by writing to a file. For more information, see ["Environment files".](#environment-files)

``` bash
echo "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% note %}

**Note:** Workflow command and parameter names are not case-sensitive.

{% endnote %}

{% warning %}

**Warning:** If you are using Command Prompt, omit double quote characters (`"`) when using workflow commands.

{% endwarning %}

## Using workflow commands to access toolkit functions

The [actions/toolkit](https://github.com/actions/toolkit) includes a number of functions that can be executed as workflow commands. Use the `::` syntax to run the workflow commands within your YAML file; these commands are then sent to the runner over `stdout`. For example, instead of using code to set an output, as below:

```javascript
core.setOutput('SELECTED_COLOR', 'green');
```

You can use the `set-output` command in your workflow to set the same value:

{% raw %}
``` yaml
      - name: Set selected color
        run: echo '::set-output name=SELECTED_COLOR::green'
        id: random-color-generator
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

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

```
::set-output name={name}::{value}
```

Sets an action's output parameter.

Optionally, you can also declare output parameters in an action's metadata file. For more information, see "[Metadata syntax for {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs)."

### Example

``` bash
echo "::set-output name=action_fruit::strawberry"
```

## Setting a debug message

```
::debug::{message}
```

Prints a debug message to the log. You must create a secret named `ACTIONS_STEP_DEBUG` with the value `true` to see the debug messages set by this command in the log. For more information, see "[Enabling debug logging](/actions/managing-workflow-runs/enabling-debug-logging)."

### Example

``` bash
echo "::debug::Set the Octocat variable"
```

{% ifversion fpt or ghes > 3.2 or ghae-issue-4929 or ghec %}

## Setting a notice message

```
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

Creates a notice message and prints the message to the log. {% data reusables.actions.message-annotation-explanation %}

{% data reusables.actions.message-parameters %}

### Example

``` bash
echo "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endif %}

## Setting a warning message

```
::warning file={name},line={line},endLine={endLine},title={title}::{message}
```

Creates a warning message and prints the message to the log. {% data reusables.actions.message-annotation-explanation %}

{% data reusables.actions.message-parameters %}

### Example

``` bash
echo "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

## Setting an error message

```
::error file={name},line={line},endLine={endLine},title={title}::{message}
```

Creates an error message and prints the message to the log. {% data reusables.actions.message-annotation-explanation %}

{% data reusables.actions.message-parameters %}

### Example

``` bash
echo "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

## Grouping log lines

```
::group::{title}
::endgroup::
```

Creates an expandable group in the log. To create a group, use the `group` command and specify a `title`. Anything you print to the log between the `group` and `endgroup` commands is nested inside an expandable entry in the log.

### Example

```bash
echo "::group::My title"
echo "Inside group"
echo "::endgroup::"
```

![Foldable group in workflow run log](/assets/images/actions-log-group.png)

## Masking a value in log

```
::add-mask::{value}
```

Masking a value prevents a string or variable from being printed in the log. Each masked word separated by whitespace is replaced with the `*` character. You can use an environment variable or string for the mask's `value`.

### Example masking a string

When you print `"Mona The Octocat"` in the log, you'll see `"***"`.

```bash
echo "::add-mask::Mona The Octocat"
```

### Example masking an environment variable

When you print the variable `MY_NAME` or the value `"Mona The Octocat"` in the log, you'll see `"***"` instead of `"Mona The Octocat"`.

```bash
MY_NAME="Mona The Octocat"
echo "::add-mask::$MY_NAME"
```

## Stopping and starting workflow commands

`::stop-commands::{endtoken}`

Stops processing any workflow commands. This special command allows you to log anything without accidentally running a workflow command. For example, you could stop logging to output an entire script that has comments.

To stop the processing of workflow commands, pass a unique token to `stop-commands`. To resume processing workflow commands, pass the same token that you used to stop workflow commands.

{% warning %}

**Warning:** Make sure the token you're using is randomly generated and unique for each run. As demonstrated in the example below, you can generate a unique hash of your `github.token` for each run.

{% endwarning %}

```
::{endtoken}::
```

### Example stopping and starting workflow commands

{% raw %}

```yaml
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: disable workflow commands
        run: |
          echo '::warning:: this is a warning'
          echo "::stop-commands::`echo -n ${{ github.token }} | sha256sum | head -c 64`"
          echo '::warning:: this will NOT be a warning'
          echo "::`echo -n ${{ github.token }} | sha256sum | head -c 64`::"
          echo '::warning:: this is a warning again'
```

{% endraw %}

## Echoing command outputs

```
::echo::on
::echo::off
```

Enables or disables echoing of workflow commands. For example, if you use the `set-output` command in a workflow, it sets an output parameter but the workflow run's log does not show the command itself. If you enable command echoing, then the log shows the command, such as `::set-output name={name}::{value}`.

Command echoing is disabled by default. However, a workflow command is echoed if there are any errors processing the command.

The `add-mask`, `debug`, `warning`, and `error` commands do not support echoing because their outputs are already echoed to the log.

You can also enable command echoing globally by turning on step debug logging using the `ACTIONS_STEP_DEBUG` secret. For more information, see "[Enabling debug logging](/actions/managing-workflow-runs/enabling-debug-logging)". In contrast, the `echo` workflow command lets you enable command echoing at a more granular level, rather than enabling it for every workflow in a repository.

### Example toggling command echoing

```yaml
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

The step above prints the following lines to the log:

```
::set-output name=action_echo::enabled
::echo::off
```

Only the second `set-output` and `echo` workflow commands are included in the log because command echoing was only enabled when they were run. Even though it is not always echoed, the output parameter is set in all cases.

## Sending values to the pre and post actions

You can use the `save-state` command to create environment variables for sharing with your workflow's `pre:` or `post:` actions. For example, you can create a file with the `pre:` action,  pass the file location to the `main:` action, and then use the `post:` action to delete the file. Alternatively, you could create a file with the `main:` action, pass the file location to the `post:` action, and also use the `post:` action to delete the file.

If you have multiple `pre:` or `post:` actions, you can only access the saved value in the action where `save-state` was used. For more information on the `post:` action, see "[Metadata syntax for {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#post)."

The `save-state`  command can only be run within an action, and is not available to YAML files. The saved value is stored as an environment value with the `STATE_` prefix.

This example uses JavaScript to run the `save-state` command. The resulting environment variable is named `STATE_processID` with the value of `12345`:

``` javascript
console.log('::save-state name=processID::12345')
```

The `STATE_processID` variable is then exclusively available to the cleanup script running under the `main` action. This example runs in `main` and uses JavaScript to display the value assigned to the `STATE_processID` environment variable:

``` javascript
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```

## Environment Files

During the execution of a workflow, the runner generates temporary files that can be used to perform certain actions. The path to these files are exposed via environment variables. You will need to use UTF-8 encoding when writing to these files to ensure proper processing of the commands. Multiple commands can be written to the same file, separated by newlines.

{% warning %}

**Warning:** On Windows, legacy PowerShell (`shell: powershell`) does not use UTF-8 by default. Make sure you write files using the correct encoding. For example, you need to set UTF-8 encoding when you set the path:

```yaml
jobs:
  legacy-powershell-example:
    uses: windows-2019
    steps:
      - shell: powershell
        run: echo "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

Or switch to PowerShell Core, which defaults to UTF-8: 

```yaml
jobs:
  modern-pwsh-example:
    uses: windows-2019
    steps:
      - shell: pwsh
        run: echo "mypath" | Out-File -FilePath $env:GITHUB_PATH -Append # no need for -Encoding utf8
```

More detail about UTF-8 and PowerShell Core found on this great [Stack Overflow answer](https://stackoverflow.com/a/40098904/162694):

> ### Optional reading: The cross-platform perspective: PowerShell _Core_:
> [PowerShell is now cross-platform](https://blogs.msdn.microsoft.com/powershell/2016/08/18/powershell-on-linux-and-open-source-2/), via its **[PowerShell _Core_](https://github.com/PowerShell/PowerShell)** edition, whose encoding - sensibly - **defaults to *BOM-less UTF-8***, in line with Unix-like platforms.  

{% endwarning %}

## Setting an environment variable

``` bash
echo "{name}={value}" >> $GITHUB_ENV
```

Creates or updates an environment variable for any steps running next in a job. The step that creates or updates the environment variable does not have access to the new value, but all subsequent steps in a job will have access. Environment variables are case-sensitive and you can include punctuation.

{% note %}

**Note:** Environment variables must be explicitly referenced using the [`env` context](/actions/reference/context-and-expression-syntax-for-github-actions#env-context) in expression syntax or through use of the `$GITHUB_ENV` file directly; environment variables are not implicitly available in shell commands.

{% endnote %}

### Example

{% raw %}
```
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

### Multiline strings

For multiline strings, you may use a delimiter with the following syntax. 

```
{name}<<{delimiter}
{value}
{delimiter}
```

#### Example

In this example, we use `EOF` as a delimiter and set the `JSON_RESPONSE` environment variable to the value of the curl response.
```yaml
steps:
  - name: Set the value
    id: step_one
    run: |
      echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
      curl https://httpbin.org/json >> $GITHUB_ENV
      echo 'EOF' >> $GITHUB_ENV
```

## Adding a system path

``` bash
echo "{path}" >> $GITHUB_PATH
```

Prepends a directory to the system `PATH` variable and automatically makes it available to all subsequent actions in the current job; the currently running action cannot access the updated path variable. To see the currently defined paths for your job, you can use `echo "$PATH"` in a step or an action.

### Example

This example demonstrates how to add the user `$HOME/.local/bin` directory to `PATH`:

``` bash
echo "$HOME/.local/bin" >> $GITHUB_PATH
```
