---
title: Migrating from Azure Pipelines to GitHub Actions
intro: '{% data variables.product.prodname_actions %} and Azure Pipelines share several configuration similarities, which makes migrating to {% data variables.product.prodname_actions %} relatively straightforward.'
redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-azure-pipelines-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'руководство'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introduction

Azure Pipelines and {% data variables.product.prodname_actions %} both allow you to create workflows that automatically build, test, publish, release, and deploy code. Azure Pipelines and {% data variables.product.prodname_actions %} share some similarities in workflow configuration:

- Workflow configuration files are written in YAML and are stored in the code's repository.
- Workflows include one or more jobs.
- Jobs include one or more steps or individual commands.
- Steps or tasks can be reused and shared with the community.

For more information, see "[Core concepts for {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)."

### Key differences

When migrating from Azure Pipelines, consider the following differences:

- Azure Pipelines supports a legacy _classic editor_, which lets you define your CI configuration in a GUI editor instead of creating the pipeline definition in a YAML file. {% data variables.product.prodname_actions %} uses YAML files to define workflows and does not support a graphical editor.
- Azure Pipelines allows you to omit some structure in job definitions. For example, if you only have a single job, you don't need to define the job and only need to define its steps. {% data variables.product.prodname_actions %} requires explicit configuration, and YAML structure cannot be omitted.
- Azure Pipelines supports _stages_ defined in the YAML file, which can be used to create deployment workflows. {% data variables.product.prodname_actions %} requires you to separate stages into separate YAML workflow files.
- On-premises Azure Pipelines build agents can be selected with capabilities. {% data variables.product.prodname_actions %} self-hosted runners can be selected with labels.

### Migrating jobs and steps

Jobs and steps in Azure Pipelines are very similar to jobs and steps in {% data variables.product.prodname_actions %}. In both systems, jobs have the following characteristics:

* Jobs contain a series of steps that run sequentially.
* Jobs run on separate virtual machines or in separate containers.
* Jobs run in parallel by default, but can be configured to run sequentially.

### Migrating script steps

You can run a script or a shell command as a step in a workflow. In Azure Pipelines, script steps can be specified using the `script` key, or with the `bash`, `powershell`, or `pwsh` keys. Scripts can also be specified as an input to the [Bash task](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/bash?view=azure-devops) or the [PowerShell task](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/powershell?view=azure-devops).

In {% data variables.product.prodname_actions %}, all scripts are specified using the `run` key. To select a particular shell, you can specify the `shell` key when providing the script. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

Below is an example of the syntax for each system:

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

### Differences in script error handling

In Azure Pipelines, scripts can be configured to error if any output is sent to `stderr`. {% data variables.product.prodname_actions %} does not support this configuration.

{% data variables.product.prodname_actions %} configures shells to "fail fast" whenever possible, which stops the script immediately if one of the commands in a script exits with an error code. In contrast, Azure Pipelines requires explicit configuration to exit immediately on an error. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)."

### Differences in the default shell on Windows

In Azure Pipelines, the default shell for scripts on Windows platforms is the Command shell (_cmd.exe_). In {% data variables.product.prodname_actions %}, the default shell for scripts on Windows platforms is PowerShell. PowerShell has several differences in built-in commands, variable expansion, and flow control.

If you're running a simple command, you might be able to run a Command shell script in PowerShell without any changes. But in most cases, you will either need to update your script with PowerShell syntax or instruct {% data variables.product.prodname_actions %} to run the script with the Command shell instead of PowerShell. You can do this by specifying `shell` as `cmd`.

Below is an example of the syntax for each system:

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

For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#using-a-specific-shell)."

### Migrating conditionals and expression syntax

Azure Pipelines and {% data variables.product.prodname_actions %} can both run steps conditionally. In Azure Pipelines, conditional expressions are specified using the `condition` key. In {% data variables.product.prodname_actions %}, conditional expressions are specified using the `if` key.

Azure Pipelines uses functions within expressions to execute steps conditionally. In contrast, {% data variables.product.prodname_actions %} uses an infix notation. For example, you must replace the `eq` function in Azure Pipelines with the `==` operator in {% data variables.product.prodname_actions %}.

Below is an example of the syntax for each system:

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

For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."

### Dependencies between jobs

Both Azure Pipelines and {% data variables.product.prodname_actions %} allow you to set dependencies for a job. In both systems, jobs run in parallel by default, but job dependencies can be specified explicitly. In Azure Pipelines, this is done with the `dependsOn` key. In {% data variables.product.prodname_actions %}, this is done with the `needs` key.

Below is an example of the syntax for each system. The workflows start a first job named `initial`, and when that job completes, two jobs named `fanout1` and `fanout2` will run. Finally, when those jobs complete, the job `fanin` will run.

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

For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)."

### Migrating tasks to actions

Azure Pipelines uses _tasks_, which are application components that can be re-used in multiple workflows. {% data variables.product.prodname_actions %} uses _actions_, which can be used to perform tasks and customize your workflow. In both systems, you can specify the name of the task or action to run, along with any required inputs as key/value pairs.

Below is an example of the syntax for each system:

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
{% raw %}
```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/setup-python@v2
      with:
        python-version: '3.7'
        architecture: 'x64'
    - run: python script.py
```
{% endraw %}
</td>
</tr>
</table>

You can find actions that you can use in your workflow in [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions), or you can create your own actions. For more information, see "[Creating actions](/actions/creating-actions)."
