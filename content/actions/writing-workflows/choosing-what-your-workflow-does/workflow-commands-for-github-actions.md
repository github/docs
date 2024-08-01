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
  - /actions/using-workflows/workflow-commands-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## About workflow commands

Actions can communicate with the runner machine to set environment variables, output values used by other actions, add debug messages to the output logs, and other tasks.

Most workflow commands use the `echo` command in a specific format, while others are invoked by writing to a file. For more information, see "[Environment files](#environment-files)."

### Example of a workflow command

{% bash %}

```bash copy
echo "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endbash %}

{% powershell %}

```powershell copy
Write-Output "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endpowershell %}

{% note %}

**Note:** Workflow command and parameter names are case insensitive.

{% endnote %}

{% warning %}

**Warning:** If you are using Command Prompt, omit double quote characters (`"`) when using workflow commands.

{% endwarning %}

## Using workflow commands to access toolkit functions

The [actions/toolkit](https://github.com/actions/toolkit) includes a number of functions that can be executed as workflow commands. Use the `::` syntax to run the workflow commands within your YAML file; these commands are then sent to the runner over `stdout`.

For example, instead of using code to create an error annotation, as below:

```javascript copy
core.error('Missing semicolon', {file: 'app.js', startLine: 1})
```

### Example: Creating an annotation for an error

You can use the `error` command in your workflow to create the same error annotation:

{% bash %}

```yaml copy
      - name: Create annotation for build error
        run: echo "::error file=app.js,line=1::Missing semicolon"
```

{% endbash %}

{% powershell %}

```yaml copy
      - name: Create annotation for build error
        run: Write-Output "::error file=app.js,line=1::Missing semicolon"
```

{% endpowershell %}

The following table shows which toolkit functions are available within a workflow:

| Toolkit function | Equivalent workflow command |
| ----------------- |  ------------- |
| `core.addPath`    | Accessible using environment file `GITHUB_PATH` |
| `core.debug`      | `debug` |
| `core.notice`     | `notice` |
| `core.error`      | `error` |
| `core.endGroup`   | `endgroup` |
| `core.exportVariable` | Accessible using environment file `GITHUB_ENV` |
| `core.getInput`   | Accessible using environment variable `INPUT_{NAME}` |
| `core.getState`   | Accessible using environment variable `STATE_{NAME}` |
| `core.isDebug`    |  Accessible using environment variable `RUNNER_DEBUG` |
| `core.summary` | Accessible using environment file `GITHUB_STEP_SUMMARY` |
| `core.saveState`  | Accessible using environment file `GITHUB_STATE` |
| `core.setCommandEcho` | `echo` |
| `core.setFailed`  | Used as a shortcut for `::error` and `exit 1` |
| `core.setOutput`  | Accessible using environment file `GITHUB_OUTPUT` |
| `core.setSecret`  | `add-mask` |
| `core.startGroup` | `group` |
| `core.warning`    | `warning` |

## Setting a debug message

Prints a debug message to the log. You must create a secret named `ACTIONS_STEP_DEBUG` with the value `true` to see the debug messages set by this command in the log. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)."

```text copy
::debug::{message}
```

### Example: Setting a debug message

{% bash %}

```bash copy
echo "::debug::Set the Octocat variable"
```

{% endbash %}

{% powershell %}

```powershell copy
Write-Output "::debug::Set the Octocat variable"
```

{% endpowershell %}

## Setting a notice message

Creates a notice message and prints the message to the log. {% data reusables.actions.message-annotation-explanation %}

```text copy
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Example: Setting a notice message

{% bash %}

```bash copy
echo "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```powershell copy
Write-Output "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Setting a warning message

Creates a warning message and prints the message to the log. {% data reusables.actions.message-annotation-explanation %}

```text copy
::warning file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Example: Setting a warning message

{% bash %}

```bash copy
echo "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```powershell copy
Write-Output "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Setting an error message

Creates an error message and prints the message to the log. {% data reusables.actions.message-annotation-explanation %}

```text copy
::error file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Example: Setting an error message

{% bash %}

```bash copy
echo "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```powershell copy
Write-Output "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Grouping log lines

Creates an expandable group in the log. To create a group, use the `group` command and specify a `title`. Anything you print to the log between the `group` and `endgroup` commands is nested inside an expandable entry in the log.

```text copy
::group::{title}
::endgroup::
```

### Example: Grouping log lines

{% bash %}

```yaml copy
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

```yaml copy
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

![Screenshot of the log for the workflow step. The second line, "My title", is prefaced by a downward arrow, indicating an expanded group. The next line, "Inside group", is indented below.](/assets/images/help/actions/actions-log-group.png)

## Masking a value in a log

```text copy
::add-mask::{value}
```

Masking a value prevents a string or variable from being printed in the log. Each masked word separated by whitespace is replaced with the `*` character. You can use an environment variable or string for the mask's `value`. When you mask a value, it is treated as a secret and will be redacted on the runner. For example, after you mask a value, you won't be able to set that value as an output.

### Example: Masking a string

When you print `"Mona The Octocat"` in the log, you'll see `"***"`.

{% bash %}

```bash copy
echo "::add-mask::Mona The Octocat"
```

{% endbash %}

{% powershell %}

```powershell copy
Write-Output "::add-mask::Mona The Octocat"
```

{% endpowershell %}

{% warning %}

**Warning:** Make sure you register the secret with 'add-mask' before outputting it in the build logs or using it in any other workflow commands.

{% endwarning %}

### Example: Masking an environment variable

When you print the variable `MY_NAME` or the value `"Mona The Octocat"` in the log, you'll see `"***"` instead of `"Mona The Octocat"`.

{% bash %}

```yaml copy
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

```yaml copy
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

### Example: Masking a generated output within a single job

If you do not need to pass your secret from one job to another job, you can:
1. Generate the secret (without outputting it).
1. Mask it with `add-mask`.
1. Use `GITHUB_OUTPUT` to make the secret available to other steps within the job.

{% bash %}

```yaml copy
on: push
jobs:
  generate-a-secret-output:
    runs-on: ubuntu-latest
    steps:
      - id: sets-a-secret
        name: Generate, mask, and output a secret
        run: |
          the_secret=$((RANDOM))
          echo "::add-mask::$the_secret"
          echo "secret-number=$the_secret" >> "$GITHUB_OUTPUT"
      - name: Use that secret output (protected by a mask)
        run: |{% raw %}
          echo "the secret number is ${{ steps.sets-a-secret.outputs.secret-number }}"{% endraw %}
```

{% endbash %}

{% powershell %}

```yaml copy
on: push
jobs:
  generate-a-secret-output:
    runs-on: ubuntu-latest
    steps:
      - id: sets-a-secret
        name: Generate, mask, and output a secret
        shell: pwsh
        run: |
          Set-Variable -Name TheSecret -Value (Get-Random)
          Write-Output "::add-mask::$TheSecret"
          "secret-number=$TheSecret" >> $env:GITHUB_OUTPUT
      - name: Use that secret output (protected by a mask)
        shell: pwsh
        run: |{% raw %}
          Write-Output "the secret number is ${{ steps.sets-a-secret.outputs.secret-number }}"{% endraw %}
```

{% endpowershell %}

### Example: Masking and passing a secret between jobs or workflows

If you want to pass a masked secret between jobs or workflows, you should store the secret in a store and then retrieve it in the subsequent job or workflow.

#### Setup

1. Set up a secret store to store the secret that you will generate during your workflow. For example, Vault.
1. Generate a key for reading and writing to that secret store. Store the key as a repository secret. In the following example workflow, the secret name is `SECRET_STORE_CREDENTIALS`. For more information, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

#### Workflow

{% note %}

**Note**: This workflow uses an imaginary secret store, `secret-store`, which has imaginary commands `store-secret` and `retrieve-secret`. `some/secret-store@ 27b31702a0e7fc50959f5ad993c78deac1bdfc29` is an imaginary action that installs the `secret-store` application and configures it to connect to an `instance` with `credentials`.

{% endnote %}

{% bash %}

```yaml copy
on: push

jobs:
  secret-generator:
    runs-on: ubuntu-latest
    outputs:
      handle: {% raw %}${{ steps.generate-secret.outputs.handle }}{% endraw %}
    steps:
    - uses: some/secret-store@v1
      with:{% raw %}
        credentials: ${{ secrets.SECRET_STORE_CREDENTIALS }}
        instance: ${{ secrets.SECRET_STORE_INSTANCE }}{% endraw %}
    - name: generate secret
      id: generate-secret
      shell: bash
      run: |
        GENERATED_SECRET=$((RANDOM))
        echo "::add-mask::$GENERATED_SECRET"
        SECRET_HANDLE=$(secret-store store-secret "$GENERATED_SECRET")
        echo "handle=$SECRET_HANDLE" >> "$GITHUB_OUTPUT"
  secret-consumer:
    runs-on: macos-latest
    needs: secret-generator
    steps:
    - uses: some/secret-store@v1
      with:{% raw %}
        credentials: ${{ secrets.SECRET_STORE_CREDENTIALS }}
        instance: ${{ secrets.SECRET_STORE_INSTANCE }}{% endraw %}
    - name: use secret
      shell: bash
      run: |{% raw %}
        SECRET_HANDLE="${{ needs.secret-generator.outputs.handle }}"{% endraw %}
        RETRIEVED_SECRET=$(secret-store retrieve-secret "$SECRET_HANDLE")
        echo "::add-mask::$RETRIEVED_SECRET"
        echo "We retrieved our masked secret: $RETRIEVED_SECRET"
```

{% endbash %}

{% powershell %}

```yaml copy
on: push

jobs:
  secret-generator:
    runs-on: ubuntu-latest
    steps:
    - uses: some/secret-store@v1
      with:{% raw %}
        credentials: ${{ secrets.SECRET_STORE_CREDENTIALS }}
        instance: ${{ secrets.SECRET_STORE_INSTANCE }}{% endraw %}
    - name: generate secret
      shell: pwsh
      run: |
        Set-Variable -Name Generated_Secret -Value (Get-Random)
        Write-Output "::add-mask::$Generated_Secret"
        Set-Variable -Name Secret_Handle -Value (Store-Secret "$Generated_Secret")
        "handle=$Secret_Handle" >> $env:GITHUB_OUTPUT
  secret-consumer:
    runs-on: macos-latest
    needs: secret-generator
    steps:
    - uses: some/secret-store@v1
      with:{% raw %}
        credentials: ${{ secrets.SECRET_STORE_CREDENTIALS }}
        instance: ${{ secrets.SECRET_STORE_INSTANCE }}{% endraw %}
    - name: use secret
      shell: pwsh
      run: |{% raw %}
        Set-Variable -Name Secret_Handle -Value "${{ needs.secret-generator.outputs.handle }}"{% endraw %}
        Set-Variable -Name Retrieved_Secret -Value (Retrieve-Secret "$Secret_Handle")
        echo "::add-mask::$Retrieved_Secret"
        echo "We retrieved our masked secret: $Retrieved_Secret"
```

{% endpowershell %}

## Stopping and starting workflow commands

Stops processing any workflow commands. This special command allows you to log anything without accidentally running a workflow command. For example, you could stop logging to output an entire script that has comments.

```text copy
::stop-commands::{endtoken}
```

To stop the processing of workflow commands, pass a unique token to `stop-commands`. To resume processing workflow commands, pass the same token that you used to stop workflow commands.

{% warning %}

**Warning:** Make sure the token you're using is randomly generated and unique for each run.

{% endwarning %}

```text copy
::{endtoken}::
```

### Example: Stopping and starting workflow commands

{% bash %}

```yaml copy
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

{% endbash %}

{% powershell %}

```yaml copy
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

{% endpowershell %}

## Sending values to the pre and post actions

You can create environment variables for sharing with your workflow's `pre:` or `post:` actions by writing to the file located at `GITHUB_STATE`. For example, you can create a file with the `pre:` action,  pass the file location to the `main:` action, and then use the `post:` action to delete the file. Alternatively, you could create a file with the `main:` action, pass the file location to the `post:` action, and also use the `post:` action to delete the file.

If you have multiple `pre:` or `post:` actions, you can only access the saved value in the action where it was written to `GITHUB_STATE`. For more information on the `post:` action, see "[AUTOTITLE](/actions/creating-actions/metadata-syntax-for-github-actions#runspost)."

The `GITHUB_STATE` file is only available within an action. The saved value is stored as an environment value with the `STATE_` prefix.

This example uses JavaScript to write to the `GITHUB_STATE` file. The resulting environment variable is named `STATE_processID` with the value of `12345`:

```javascript copy
import * as fs from 'fs'
import * as os from 'os'

fs.appendFileSync(process.env.GITHUB_STATE, `processID=12345${os.EOL}`, {
  encoding: 'utf8'
})
```

The `STATE_processID` variable is then exclusively available to the cleanup script running under the `main` action. This example runs in `main` and uses JavaScript to display the value assigned to the `STATE_processID` environment variable:

```javascript copy
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```

## Environment files

During the execution of a workflow, the runner generates temporary files that can be used to perform certain actions. The path to these files can be accessed and edited using GitHub's default environment variables. See "[AUTOTITLE](/actions/learn-github-actions/variables#default-environment-variables)." You will need to use UTF-8 encoding when writing to these files to ensure proper processing of the commands. Multiple commands can be written to the same file, separated by newlines.
To use environment variables in a GitHub Action, you create or modify `.env` files using specific GitHub Actions commands.

Here's how:

```yaml copy
name: Example Workflow for Environment Files

on: push

jobs:
  set_and_use_env_vars:
    runs-on: ubuntu-latest
    steps:
      - name: Set environment variable
        run: echo "MY_ENV_VAR=myValue" >> $GITHUB_ENV

      - name: Use environment variable
        run: |
          echo "The value of MY_ENV_VAR is $MY_ENV_VAR"

```

Another example would be to use it to store metadata like build timestamps, commit SHAs, or artifact names:

```yaml copy
steps:
  - name: Store build timestamp
    run: echo "BUILD_TIME=$(date +'%T')" >> $GITHUB_ENV

  - name: Deploy using stored timestamp
    run: echo "Deploying at $BUILD_TIME"
```

{% powershell %}

{% note %}

**Note:** PowerShell versions 5.1 and below (`shell: powershell`) do not use UTF-8 by default, so you must specify the UTF-8 encoding. For example:

```yaml copy
jobs:
  legacy-powershell-example:
    runs-on: windows-latest
    steps:
      - shell: powershell
        run: |
          "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

PowerShell Core versions 6 and higher (`shell: pwsh`) use UTF-8 by default. For example:

```yaml copy
jobs:
  powershell-core-example:
    runs-on: windows-latest
    steps:
      - shell: pwsh
        run: |
          "mypath" | Out-File -FilePath $env:GITHUB_PATH -Append
```

{% endnote %}

{% endpowershell %}

## Setting an environment variable

{% data reusables.actions.environment-variables-as-case-sensitive %}

{% bash %}

```bash copy
echo "{environment_variable_name}={value}" >> "$GITHUB_ENV"
```

{% endbash %}

{% powershell %}

* Using PowerShell version 6 and higher:

  ```powershell copy
  "{environment_variable_name}={value}" | Out-File -FilePath $env:GITHUB_ENV -Append
  ```

* Using PowerShell version 5.1 and below:

  ```powershell copy
  "{environment_variable_name}={value}" | Out-File -FilePath $env:GITHUB_ENV -Encoding utf8 -Append
  ```

{% endpowershell %}

You can make an environment variable available to any subsequent steps in a workflow job by defining or updating the environment variable and writing this to the `GITHUB_ENV` environment file. The step that creates or updates the environment variable does not have access to the new value, but all subsequent steps in a job will have access.

{% data reusables.actions.environment-variables-are-fixed %} For more information about the default environment variables, see "[AUTOTITLE](/actions/learn-github-actions/environment-variables#default-environment-variables)."

{% ifversion github-env-node-options %}{% note %}

**Note:** Due to security restrictions, `GITHUB_ENV` cannot be used to set the `NODE_OPTIONS` environment variable.

{% endnote %}{% endif %}

### Example of writing an environment variable to `GITHUB_ENV`

{% bash %}

```yaml copy
steps:
  - name: Set the value
    id: step_one
    run: |
      echo "action_state=yellow" >> "$GITHUB_ENV"
  - name: Use the value
    id: step_two
    run: |
      printf '%s\n' "$action_state" # This will output 'yellow'
```

{% endbash %}

{% powershell %}

```yaml copy
steps:
  - name: Set the value
    id: step_one
    run: |
      "action_state=yellow" | Out-File -FilePath $env:GITHUB_ENV -Append
  - name: Use the value
    id: step_two
    run: |
      Write-Output "$env:action_state" # This will output 'yellow'
```

{% endpowershell %}

### Multiline strings

For multiline strings, you may use a delimiter with the following syntax.

```text copy
{name}<<{delimiter}
{value}
{delimiter}
```

{% warning %}

**Warning:** Make sure the delimiter you're using won't occur on a line of its own within the value. If the value is completely arbitrary then you shouldn't use this format. Write the value to a file instead.

{% endwarning %}

#### Example of a multiline string

This example uses `EOF` as the delimiter, and sets the `JSON_RESPONSE` environment variable to the value of the `curl` response.

{% bash %}

```yaml copy
steps:
  - name: Set the value in bash
    id: step_one
    run: |
      {
        echo 'JSON_RESPONSE<<EOF'
        curl https://example.com
        echo EOF
      } >> "$GITHUB_ENV"
```

{% endbash %}

{% powershell %}

```yaml copy
steps:
  - name: Set the value in pwsh
    id: step_one
    run: |
      $EOF = -join (1..15 | ForEach {[char]((48..57)+(65..90)+(97..122) | Get-Random)})
      "JSON_RESPONSE<<$EOF" | Out-File -FilePath $env:GITHUB_ENV -Append
      (Invoke-WebRequest -Uri "https://example.com").Content | Out-File -FilePath $env:GITHUB_ENV -Append
      "$EOF" | Out-File -FilePath $env:GITHUB_ENV -Append
    shell: pwsh
```

{% endpowershell %}

## Setting an output parameter

Sets a step's output parameter. Note that the step will need an `id` to be defined to later retrieve the output value. You can set multi-line output values with the same technique used in the "[Multiline strings](/actions/using-workflows/workflow-commands-for-github-actions#multiline-strings)" section to define multi-line environment variables.

{% bash %}

```bash copy
echo "{name}={value}" >> "$GITHUB_OUTPUT"
```

{% endbash %}

{% powershell %}

```powershell copy
"{name}=value" | Out-File -FilePath $env:GITHUB_OUTPUT -Append
```

{% endpowershell %}

### Example of setting an output parameter

{% bash %}

This example demonstrates how to set the `SELECTED_COLOR` output parameter and later retrieve it:

```yaml copy
      - name: Set color
        id: color-selector
        run: echo "SELECTED_COLOR=green" >> "$GITHUB_OUTPUT"
      - name: Get color
        env:{% raw %}
          SELECTED_COLOR: ${{ steps.color-selector.outputs.SELECTED_COLOR }}{% endraw %}
        run: echo "The selected color is $SELECTED_COLOR"
```

{% endbash %}

{% powershell %}

This example demonstrates how to set the `SELECTED_COLOR` output parameter and later retrieve it:

```yaml copy
      - name: Set color
        id: color-selector
        run: |
            "SELECTED_COLOR=green" | Out-File -FilePath $env:GITHUB_OUTPUT -Append
      - name: Get color
        env:{% raw %}
          SELECTED_COLOR: ${{ steps.color-selector.outputs.SELECTED_COLOR }}{% endraw %}
        run: Write-Output "The selected color is $env:SELECTED_COLOR"
```

{% endpowershell %}

## Adding a job summary

{% bash %}

```bash copy
echo "{markdown content}" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```powershell copy
"{markdown content}" | Out-File -FilePath $env:GITHUB_STEP_SUMMARY -Append
```

{% endpowershell %}

You can set some custom Markdown for each job so that it will be displayed on the summary page of a workflow run. You can use job summaries to display and group unique content, such as test result summaries, so that someone viewing the result of a workflow run doesn't need to go into the logs to see important information related to the run, such as failures.

Job summaries support [{% data variables.product.prodname_dotcom %} flavored Markdown](https://github.github.com/gfm/), and you can add your Markdown content for a step to the `GITHUB_STEP_SUMMARY` environment file. `GITHUB_STEP_SUMMARY` is unique for each step in a job. For more information about the per-step file that `GITHUB_STEP_SUMMARY` references, see "[Environment files](#environment-files)."

When a job finishes, the summaries for all steps in a job are grouped together into a single job summary and are shown on the workflow run summary page. If multiple jobs generate summaries, the job summaries are ordered by job completion time.

### Example of adding a job summary

{% bash %}

```bash copy
echo "### Hello world! :rocket:" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```powershell copy
"### Hello world! :rocket:" | Out-File -FilePath $env:GITHUB_STEP_SUMMARY -Append
```

{% endpowershell %}

![Screenshot of the summary page of a workflow run. Under "example summary" is "Hello world!" and a rocket emoji.](/assets/images/help/actions/actions-job-summary-simple-example.png)

### Multiline Markdown content

For multiline Markdown content, you can use `>>` to continuously append content for the current step. With every append operation, a newline character is automatically added.

#### Example of multiline Markdown content

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
    "This is the lead in sentence for the list" | Out-File -FilePath $env:GITHUB_STEP_SUMMARY -Append
    "" | Out-File -FilePath $env:GITHUB_STEP_SUMMARY -Append # this is a blank line
    "- Lets add a bullet point" | Out-File -FilePath $env:GITHUB_STEP_SUMMARY -Append
    "- Lets add a second bullet point" | Out-File -FilePath $env:GITHUB_STEP_SUMMARY -Append
    "- How about a third one?" | Out-File -FilePath $env:GITHUB_STEP_SUMMARY -Append
```

{% endpowershell %}

### Overwriting job summaries

To clear all content for the current step, you can use `>` to overwrite any previously added content in Bash, or remove `-Append` in PowerShell

#### Example of overwriting job summaries

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
    "Adding some Markdown content" | Out-File -FilePath $env:GITHUB_STEP_SUMMARY -Append
    "There was an error, we need to clear the previous Markdown with some new content." | Out-File -FilePath $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

### Removing job summaries

To completely remove a summary for the current step, the file that `GITHUB_STEP_SUMMARY` references can be deleted.

#### Example of removing job summaries

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
    "Adding Markdown content that we want to remove before the step ends" | Out-File -FilePath $env:GITHUB_STEP_SUMMARY -Append
    Remove-Item $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

After a step has completed, job summaries are uploaded and subsequent steps cannot modify previously uploaded Markdown content. Summaries automatically mask any secrets that might have been added accidentally. If a job summary contains sensitive information that must be deleted, you can delete the entire workflow run to remove all its job summaries. For more information see "[AUTOTITLE](/actions/managing-workflow-runs/deleting-a-workflow-run)."

### Step isolation and limits

Job summaries are isolated between steps and each step is restricted to a maximum size of 1MiB. Isolation is enforced between steps so that potentially malformed Markdown from a single step cannot break Markdown rendering for subsequent steps. If more than 1MiB of content is added for a step, then the upload for the step will fail and an error annotation will be created. Upload failures for job summaries do not affect the overall status of a step or a job. A maximum of 20 job summaries from steps are displayed per job.

## Adding a system path

Prepends a directory to the system `PATH` variable and automatically makes it available to all subsequent actions in the current job; the currently running action cannot access the updated path variable. To see the currently defined paths for your job, you can use `echo "$PATH"` in a step or an action.

### Example of adding a system path

{% bash %}

This example demonstrates how to add the user `$HOME/.local/bin` directory to `PATH`:

```bash copy
echo "$HOME/.local/bin" >> $GITHUB_PATH
```

{% endbash %}

{% powershell %}

This example demonstrates how to add the user `$env:HOMEPATH/.local/bin` directory to `PATH`:

```powershell copy
"$env:HOMEPATH/.local/bin" | Out-File -FilePath $env:GITHUB_PATH -Append
```

{% endpowershell %}
