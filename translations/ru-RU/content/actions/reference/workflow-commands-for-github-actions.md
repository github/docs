---
title: Workflow commands for GitHub Actions
shortTitle: Workflow commands
intro: You can use workflow commands when running shell commands in a workflow or in an action's code.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/development-tools-for-github-actions
  - /github/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/reference/development-tools-for-github-actions
  - /actions/reference/logging-commands-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### About workflow commands

Actions can communicate with the runner machine to set environment variables, output values used by other actions, add debug messages to the output logs, and other tasks.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
Most workflow commands use the `echo` command in a specific format, while others are invoked by writing to a file. For more information, see ["Environment files".](#environment-files)
{% else %}
Workflow commands use the `echo` command in a specific format.
{% endif %}

``` bash
echo "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% note %}

**Note:** Workflow command and parameter names are not case-sensitive.

{% endnote %}

{% warning %}

**Warning:** If you are using Command Prompt, omit double quote characters (`"`) when using workflow commands.

{% endwarning %}

### Using workflow commands to access toolkit functions

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

| Toolkit function                                                                                                                                                                    | Equivalent workflow command                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `core.addPath`                                                                                                                                                                      |                                                      |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}Accessible using environment file `GITHUB_PATH`{% else %} `add-path` {% endif %} |                                                      |
|                                                                                                                                                                                     |                                                      |
| `core.debug`                                                                                                                                                                        | `debug`                                              |
| `core.error`                                                                                                                                                                        | `error`                                              |
| `core.endGroup`                                                                                                                                                                     | `endgroup`                                           |
| `core.exportVariable`                                                                                                                                                               |                                                      |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}Accessible using environment file `GITHUB_ENV`{% else %} `set-env` {% endif %}   |                                                      |
|                                                                                                                                                                                     |                                                      |
| `core.getInput`                                                                                                                                                                     | Accessible using environment variable `INPUT_{NAME}` |
| `core.getState`                                                                                                                                                                     | Accessible using environment variable `STATE_{NAME}` |
| `core.isDebug`                                                                                                                                                                      | Accessible using environment variable `RUNNER_DEBUG` |
| `core.saveState`                                                                                                                                                                    | `save-state`                                         |
| `core.setFailed`                                                                                                                                                                    | Used as a shortcut for `::error` and `exit 1`        |
| `core.setOutput`                                                                                                                                                                    | `set-output`                                         |
| `core.setSecret`                                                                                                                                                                    | `add-mask`                                           |
| `core.startGroup`                                                                                                                                                                   | `группа`                                             |
| `core.warning`                                                                                                                                                                      | `warning file`                                       |

{% if currentVersion ver_lt "enterprise-server@2.23" %}
### Setting an environment variable

`::set-env name={name}::{value}`

Creates or updates an environment variable for any actions running next in a job. The action that creates or updates the environment variable does not have access to the new value, but all subsequent actions in a job will have access. Environment variables are case-sensitive and you can include punctuation.

#### Пример

``` bash
echo "::set-env name=action_state::yellow"
```
{% endif %}

### Setting an output parameter

`::set-output name={name}::{value}`

Sets an action's output parameter.

Optionally, you can also declare output parameters in an action's metadata file. For more information, see "[Metadata syntax for {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs)."

#### Пример

``` bash
echo "::set-output name=action_fruit::strawberry"
```

{% if currentVersion ver_lt "enterprise-server@2.23" %}
### Adding a system path

`::add-path::{path}`

Prepends a directory to the system `PATH` variable for all subsequent actions in the current job. The currently running action cannot access the new path variable.

#### Пример

``` bash
echo "::add-path::/path/to/dir"
```
{% endif %}

### Setting a debug message

`::debug::{message}`

Prints a debug message to the log. You must create a secret named `ACTIONS_STEP_DEBUG` with the value `true` to see the debug messages set by this command in the log. For more information, see "[Enabling debug logging](/actions/managing-workflow-runs/enabling-debug-logging)."

#### Пример

``` bash
echo "::debug::Set the Octocat variable"
```

### Setting a warning message

`::warning file={name},line={line},col={col}::{message}`

Creates a warning message and prints the message to the log. You can optionally provide a filename (`file`), line number (`line`), and column (`col`) number where the warning occurred.

#### Пример

``` bash
echo "::warning file=app.js,line=1,col=5::Missing semicolon"
```

### Setting an error message

`::error file={name},line={line},col={col}::{message}`

Creates an error message and prints the message to the log. You can optionally provide a filename (`file`), line number (`line`), and column (`col`) number where the error occurred.

#### Пример

``` bash
echo "::error file=app.js,line=10,col=15::Something went wrong"
```

### Grouping log lines

```
::group::{title}
::endgroup::
```

Creates an expandable group in the log. To create a group, use the `group` command and specify a `title`. Anything you print to the log between the `group` and `endgroup` commands is nested inside an expandable entry in the log.

#### Пример

```bash
echo "::group::My title"
echo "Inside group"
echo "::endgroup::"
```

![Foldable group in workflow run log](/assets/images/actions-log-group.png)

### Masking a value in log

`::add-mask::{value}`

Masking a value prevents a string or variable from being printed in the log. Each masked word separated by whitespace is replaced with the `*` character. You can use an environment variable or string for the mask's `value`.

#### Example masking a string

When you print `"Mona The Octocat"` in the log, you'll see `"***"`.

```bash
echo "::add-mask::Mona The Octocat"
```

#### Example masking an environment variable

When you print the variable `MY_NAME` or the value `"Mona The Octocat"` in the log, you'll see `"***"` instead of `"Mona The Octocat"`.

```bash
MY_NAME="Mona The Octocat"
echo "::add-mask::$MY_NAME"
```

### Stopping and starting workflow commands

`::stop-commands::{endtoken}`

Stops processing any workflow commands. This special command allows you to log anything without accidentally running a workflow command. For example, you could stop logging to output an entire script that has comments.

#### Example stopping workflow commands

``` bash
echo "::stop-commands::pause-logging"
```

To start workflow commands, pass the token that you used to stop workflow commands.

`::{endtoken}::`

#### Example starting workflow commands

``` bash
echo "::pause-logging::"
```

### Sending values to the pre and post actions

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

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
## Environment Files

During the execution of a workflow, the runner generates temporary files that can be used to perform certain actions. The path to these files are exposed via environment variables. You will need to use UTF-8 encoding when writing to these files to ensure proper processing of the commands. Multiple commands can be written to the same file, separated by newlines.

{% warning %}

**Warning:** Powershell does not use UTF-8 by default. Make sure you write files using the correct encoding. For example, you need to set UTF-8 encoding when you set the path:

```yaml
steps:
  - run: echo "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

{% endwarning %}

### Setting an environment variable

`echo "{name}={value}" >> $GITHUB_ENV`

Creates or updates an environment variable for any actions running next in a job. The action that creates or updates the environment variable does not have access to the new value, but all subsequent actions in a job will have access. Environment variables are case-sensitive and you can include punctuation.

#### Пример

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

#### Multiline strings

For multiline strings, you may use a delimiter with the following syntax.

```
{name}<<{delimiter}
{value}
{delimiter}
```

##### Пример

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

### Adding a system path

`echo "{path}" >> $GITHUB_PATH`

Prepends a directory to the system `PATH` variable and makes it available to all subsequent actions in the current job; the currently running action cannot access the updated path variable. To see the currently defined paths for your job, you can use `echo "$PATH"` in a step or an action.

#### Пример

This example demonstrates how to add the user `$HOME/.local/bin` directory to `PATH`:

``` bash
echo "$HOME/.local/bin" >> $GITHUB_PATH
```
{% endif %}
