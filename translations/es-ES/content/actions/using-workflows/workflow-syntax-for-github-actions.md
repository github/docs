---
title: Workflow syntax for GitHub Actions
shortTitle: Workflow syntax
intro: A workflow is a configurable automated process made up of one or more jobs. You must create a YAML file to define your workflow configuration.
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About YAML syntax for workflows

Workflow files use YAML syntax, and must have either a `.yml` or `.yaml` file extension. {% data reusables.actions.learn-more-about-yaml %}

You must store workflow files in the `.github/workflows` directory of your repository.

## `name`

The name of your workflow. {% data variables.product.prodname_dotcom %} displays the names of your workflows on your repository's actions page. If you omit `name`, {% data variables.product.prodname_dotcom %} sets it to the workflow file path relative to the root of the repository.

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

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## `on.workflow_call`

{% data reusables.actions.reusable-workflows-ghes-beta %}

Use `on.workflow_call` to define the inputs and outputs for a reusable workflow. You can also map the secrets that are available to the called workflow. For more information on reusable workflows, see "[Reusing workflows](/actions/using-workflows/reusing-workflows)."

### `on.workflow_call.inputs`

When using the `workflow_call` keyword, you can optionally specify inputs that are passed to the called workflow from the caller workflow. For more information about the `workflow_call` keyword, see "[Events that trigger workflows](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events)."

In addition to the standard input parameters that are available, `on.workflow_call.inputs` requires a `type` parameter. For more information, see [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype).

If a `default` parameter is not set, the default value of the input is `false` for a boolean, `0` for a number, and `""` for a string.

Within the called workflow, you can use the `inputs` context to refer to an input.

If a caller workflow passes an input that is not specified in the called workflow, this results in an error.

#### Example

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

For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

#### `on.workflow_call.inputs.<input_id>.type`

Required if input is defined for the `on.workflow_call` keyword. The value of this parameter is a string specifying the data type of the input. This must be one of: `boolean`, `number`, or `string`.

### `on.workflow_call.outputs`

A map of outputs for a called workflow. Called workflow outputs are available to all downstream jobs in the caller workflow. Each output has an identifier, an optional `description,` and a `value.` The `value` must be set to the value of an output from a job within the called workflow.

In the example below, two outputs are defined for this reusable workflow: `workflow_output1` and `workflow_output2`. These are mapped to outputs called `job_output1` and `job_output2`, both from a job called `my_job`.

#### Example

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

For information on how to reference a job output, see [`jobs.<job_id>.outputs`](#jobsjob_idoutputs). For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

### `on.workflow_call.secrets`

A map of the secrets that can be used in the called workflow.

Within the called workflow, you can use the `secrets` context to refer to a secret.

If a caller workflow passes a secret that is not specified in the called workflow, this results in an error.

#### Example

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

A string identifier to associate with the secret.

#### `on.workflow_call.secrets.<secret_id>.required`

A boolean specifying whether the secret must be supplied.
{% endif %}

## `on.workflow_run.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-specifying-branches %}

## `on.workflow_dispatch.inputs`

{% data reusables.actions.workflow-dispatch-inputs %}

## `permissions`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs %}

## `env`

A `map` of environment variables that are available to the steps of all jobs in the workflow. You can also set environment variables that are only available to the steps of a single job or to a single step. For more information, see [`jobs.<job_id>.env`](#jobsjob_idenv) and [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

Variables in the `env` map cannot be defined in terms of other variables in the map.

{% data reusables.repositories.actions-env-var-note %}

### Example

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

A `map` of environment variables that are available to all steps in the job. You can also set environment variables for the entire workflow or an individual step. For more information, see [`env`](#env) and [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

{% data reusables.repositories.actions-env-var-note %}

### Example

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

A job contains a sequence of tasks called `steps`. Steps can run commands, run setup tasks, or run an action in your repository, a public repository, or an action published in a Docker registry. Not all steps run actions, but all actions run as a step. Each step runs in its own process in the runner environment and has access to the workspace and filesystem. Because steps run in their own process, changes to environment variables are not preserved between steps. {% data variables.product.prodname_dotcom %} provides built-in steps to set up and complete a job.

You can run an unlimited number of steps as long as you are within the workflow usage limits. For more information, see {% ifversion fpt or ghec or ghes %}"[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and {% endif %}"[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" for self-hosted runner usage limits.{% elsif ghae %}."{% endif %}

### Example

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

A unique identifier for the step. You can use the `id` to reference the step in contexts. For more information, see "[Contexts](/actions/learn-github-actions/contexts)."

### `jobs.<job_id>.steps[*].if`

You can use the `if` conditional to prevent a step from running unless a condition is met. You can use any supported context and expression to create a conditional.

{% data reusables.actions.expression-syntax-if %} For more information, see "[Expressions](/actions/learn-github-actions/expressions)."

#### Example: Using contexts

 This step only runs when the event type is a `pull_request` and the event action is `unassigned`.

 ```yaml
steps:
  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.
```

#### Example: Using status check functions

The `my backup step` only runs when the previous step of a job fails. For more information, see "[Expressions](/actions/learn-github-actions/expressions#status-check-functions)."

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```

#### Example: Using secrets

Secrets cannot be directly referenced in `if:` conditionals. Instead, consider setting secrets as job-level environment variables, then referencing the environment variables to conditionally run steps in the job.

If a secret has not been set, the return value of an expression referencing the secret (such as {% raw %}`${{ secrets.SuperSecret }}`{% endraw %} in the example) will be an empty string.

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

For more information, see "[Context availability](/actions/learn-github-actions/contexts#context-availability)" and "[Encrypted secrets](/actions/security-guides/encrypted-secrets)."

### `jobs.<job_id>.steps[*].name`

A name for your step to display on {% data variables.product.prodname_dotcom %}.

### `jobs.<job_id>.steps[*].uses`

Selects an action to run as part of a step in your job. An action is a reusable unit of code. You can use an action defined in the same repository as the workflow, a public repository, or in a [published Docker container image](https://hub.docker.com/).

We strongly recommend that you include the version of the action you are using by specifying a Git ref, SHA, or Docker tag number. If you don't specify a version, it could break your workflows or cause unexpected behavior when the action owner publishes an update.
- Using the commit SHA of a released action version is the safest for stability and security.
- Using the specific major action version allows you to receive critical fixes and security patches while still maintaining compatibility. It also assures that your workflow should still work.
- Using the default branch of an action may be convenient, but if someone releases a new major version with a breaking change, your workflow could break.

Some actions require inputs that you must set using the [`with`](#jobsjob_idstepswith) keyword. Review the action's README file to determine the inputs required.

Actions are either JavaScript files or Docker containers. If the action you're using is a Docker container you must run the job in a Linux environment. For more details, see [`runs-on`](#jobsjob_idruns-on).

#### Example: Using versioned actions

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

#### Example: Using a public action

`{owner}/{repo}@{ref}`

You can specify a branch, ref, or SHA in a public {% data variables.product.prodname_dotcom %} repository.

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

#### Example: Using a public action in a subdirectory

`{owner}/{repo}/{path}@{ref}`

A subdirectory in a public {% data variables.product.prodname_dotcom %} repository at a specific branch, ref, or SHA.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@main
```

#### Example: Using an action in the same repository as the workflow

`./path/to/dir`

The path to the directory that contains the action in your workflow's repository. You must check out your repository before using the action.

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

#### Example: Using a Docker Hub action

`docker://{image}:{tag}`

A Docker image published on [Docker Hub](https://hub.docker.com/).

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

{% ifversion fpt or ghec %}
#### Example: Using the {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}

`docker://{host}/{image}:{tag}`

A Docker image in the {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://ghcr.io/OWNER/IMAGE_NAME
```
{% endif %}
#### Example: Using a Docker public registry action

`docker://{host}/{image}:{tag}`

A Docker image in a public registry. This example uses the Google Container Registry at `gcr.io`.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://gcr.io/cloud-builders/gradle
```

#### Example: Using an action inside a different private repository than the workflow

Your workflow must checkout the private repository and reference the action locally. Generate a personal access token and add the token as an encrypted secret. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)" and "[Encrypted secrets](/actions/reference/encrypted-secrets)."

Replace `PERSONAL_ACCESS_TOKEN` in the example with the name of your secret.

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

Runs command-line programs using the operating system's shell. If you do not provide a `name`, the step name will default to the text specified in the `run` command.

Commands run using non-login shells by default. You can choose a different shell and customize the shell used to run commands. For more information, see [`jobs.<job_id>.steps[*].shell`](#jobsjob_idstepsshell).

Each `run` keyword represents a new process and shell in the runner environment. When you provide multi-line commands, each line runs in the same shell. For example:

* A single-line command:

  ```yaml
  - name: Install Dependencies
    run: npm install
  ```

* A multi-line command:

  ```yaml
  - name: Clean install dependencies and build
    run: |
      npm ci
      npm run build
  ```

Using the `working-directory` keyword, you can specify the working directory of where to run the command.

```yaml
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

### `jobs.<job_id>.steps[*].shell`

You can override the default shell settings in the runner's operating system using the `shell` keyword. You can use built-in `shell` keywords, or you can define a custom set of shell options. The shell command that is run internally executes a temporary file that contains the commands specified in the `run` keyword.

| Supported platform | `shell` parameter | Description | Command run internally |
|--------------------|-------------------|-------------|------------------------|
| All | `bash` | The default shell on non-Windows platforms with a fallback to `sh`. When specifying a bash shell on Windows, the bash shell included with Git for Windows is used. | `bash --noprofile --norc -eo pipefail {0}` |
| All | `pwsh` | The PowerShell Core. {% data variables.product.prodname_dotcom %} appends the extension `.ps1` to your script name. | `pwsh -command ". '{0}'"` |
| All | `python` | Executes the python command. | `python {0}` |
| Linux / macOS | `sh` | The fallback behavior for non-Windows platforms if no shell is provided and `bash` is not found in the path. | `sh -e {0}` |
| Windows | `cmd` | {% data variables.product.prodname_dotcom %} appends the extension `.cmd` to your script name and substitutes for `{0}`. | `%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`. |
| Windows | `pwsh` | This is the default shell used on Windows. The PowerShell Core. {% data variables.product.prodname_dotcom %} appends the extension `.ps1` to your script name. If your self-hosted Windows runner does not have _PowerShell Core_ installed, then _PowerShell Desktop_ is used instead.| `pwsh -command ". '{0}'"`. |
| Windows | `powershell` | The PowerShell Desktop. {% data variables.product.prodname_dotcom %} appends the extension `.ps1` to your script name. | `powershell -command ". '{0}'"`. |

#### Example: Running a script using bash

```yaml
steps:
  - name: Display the path
    run: echo $PATH
    shell: bash
```

#### Example: Running a script using Windows `cmd`

```yaml
steps:
  - name: Display the path
    run: echo %PATH%
    shell: cmd
```

#### Example: Running a script using PowerShell Core

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: pwsh
```

#### Example: Using PowerShell Desktop to run a script

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: powershell
```

#### Example: Running a python script

```yaml
steps:
  - name: Display the path
    run: |
      import os
      print(os.environ['PATH'])
    shell: python
```

#### Custom shell

You can set the `shell` value to a template string using `command […options] {0} [..more_options]`. {% data variables.product.prodname_dotcom %} interprets the first whitespace-delimited word of the string as the command, and inserts the file name for the temporary script at `{0}`.

For example:

```yaml
steps:
  - name: Display the environment variables and their values
    run: |
      print %ENV
    shell: perl {0}
```

The command used, `perl` in this example, must be installed on the runner.

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% elsif fpt or ghec %}
For information about the software included on GitHub-hosted runners, see "[Specifications for GitHub-hosted runners](/actions/reference/specifications-for-github-hosted-runners#supported-software)."
{% endif %}

#### Exit codes and error action preference

For built-in shell keywords, we provide the following defaults that are executed by {% data variables.product.prodname_dotcom %}-hosted runners. You should use these guidelines when running shell scripts.

- `bash`/`sh`:
  - Fail-fast behavior using `set -eo pipefail`: This option is set when `shell: bash` is explicitly specified. It is not applied by default.
  - You can take full control over shell parameters by providing a template string to the shell options. For example, `bash {0}`.
  - sh-like shells exit with the exit code of the last command executed in a script, which is also the default behavior for actions. The runner will report the status of the step as fail/succeed based on this exit code.

- `powershell`/`pwsh`
  - Fail-fast behavior when possible. For `pwsh` and `powershell` built-in shell, we will prepend `$ErrorActionPreference = 'stop'` to script contents.
  - We append `if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }` to powershell scripts so action statuses reflect the script's last exit code.
  - Users can always opt out by not using the built-in shell, and providing a custom shell option like: `pwsh -File {0}`, or `powershell -Command "& '{0}'"`, depending on need.

- `cmd`
  - There doesn't seem to be a way to fully opt into fail-fast behavior other than writing your script to check each error code and respond accordingly. Because we can't actually provide that behavior by default, you need to write this behavior into your script.
  - `cmd.exe` will exit with the error level of the last program it executed, and it will return the error code to the runner. This behavior is internally consistent with the previous `sh` and `pwsh` default behavior and is the `cmd.exe` default, so this behavior remains intact.

### `jobs.<job_id>.steps[*].with`

A `map` of the input parameters defined by the action. Each input parameter is a key/value pair. Input parameters are set as environment variables. The variable is prefixed with `INPUT_` and converted to upper case.

#### Example

Defines the three input parameters (`first_name`, `middle_name`, and `last_name`) defined by the `hello_world` action. These input variables will be accessible to the `hello-world` action as `INPUT_FIRST_NAME`, `INPUT_MIDDLE_NAME`, and `INPUT_LAST_NAME` environment variables.

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

A `string` that defines the inputs for a Docker container. {% data variables.product.prodname_dotcom %} passes the `args` to the container's `ENTRYPOINT` when the container starts up. An `array of strings` is not supported by this parameter.

#### Example

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

The `args` are used in place of the `CMD` instruction in a `Dockerfile`. If you use `CMD` in your `Dockerfile`, use the guidelines ordered by preference:

1. Document required arguments in the action's README and omit them from the `CMD` instruction.
1. Use defaults that allow using the action without specifying any `args`.
1. If the action exposes a `--help` flag, or something similar, use that as the default to make your action self-documenting.

### `jobs.<job_id>.steps[*].with.entrypoint`

Overrides the Docker `ENTRYPOINT` in the `Dockerfile`, or sets it if one wasn't already specified. Unlike the Docker `ENTRYPOINT` instruction which has a shell and exec form, `entrypoint` keyword accepts only a single string defining the executable to be run.

#### Example

```yaml
steps:
  - name: Run a custom command
    uses: octo-org/action-name@main
    with:
      entrypoint: /a/different/executable
```

The `entrypoint` keyword is meant to be used with Docker container actions, but you can also use it with JavaScript actions that don't define any inputs.

### `jobs.<job_id>.steps[*].env`

Sets environment variables for steps to use in the runner environment. You can also set environment variables for the entire workflow or a job. For more information, see [`env`](#env) and [`jobs.<job_id>.env`](#jobsjob_idenv).

{% data reusables.repositories.actions-env-var-note %}

Public actions may specify expected environment variables in the README file. If you are setting a secret in an environment variable, you must set secrets using the `secrets` context. For more information, see "[Using environment variables](/actions/automating-your-workflow-with-github-actions/using-environment-variables)" and "[Contexts](/actions/learn-github-actions/contexts)."

#### Example

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

Prevents a job from failing when a step fails. Set to `true` to allow a job to pass when this step fails.

### `jobs.<job_id>.steps[*].timeout-minutes`

The maximum number of minutes to run the step before killing the process.

## `jobs.<job_id>.timeout-minutes`

The maximum number of minutes to let a job run before {% data variables.product.prodname_dotcom %} automatically cancels it. Default: 360

If the timeout exceeds the job execution time limit for the runner, the job will be canceled when the execution time limit is met instead. For more information about job execution time limits, see {% ifversion fpt or ghec or ghes %}"[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration#usage-limits)" for {% data variables.product.prodname_dotcom %}-hosted runners and {% endif %}"[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" for self-hosted runner usage limits.{% elsif ghae %}."{% endif %}

{% note %}

**Note:** {% data reusables.actions.github-token-expiration %} For self-hosted runners, the token may be the limiting factor if the job timeout is greater than 24 hours. For more information on the `GITHUB_TOKEN`, see "[About the `GITHUB_TOKEN` secret](/actions/security-guides/automatic-token-authentication#about-the-github_token-secret)."

{% endnote %}

## `jobs.<job_id>.strategy`

Use `jobs.<job_id>.strategy` to use a matrix strategy for your jobs. {% data reusables.actions.jobs.about-matrix-strategy %} For more information, see "[Using a matrix for your jobs](/actions/using-jobs/using-a-matrix-for-your-jobs)."

### `jobs.<job_id>.strategy.matrix`

{% data reusables.actions.jobs.using-matrix-strategy %}

#### Example: Using a single-dimension matrix

{% data reusables.actions.jobs.single-dimension-matrix %}

#### Example: Using a multi-dimension matrix

{% data reusables.actions.jobs.multi-dimension-matrix %}

#### Example: Using contexts to create matrices

{% data reusables.actions.jobs.matrix-from-context %}

### `jobs.<job_id>.strategy.matrix.include`

{% data reusables.actions.jobs.matrix-include %}

#### Example: Expanding configurations

{% data reusables.actions.jobs.matrix-expand-with-include %}

#### Example: Adding configurations

{% data reusables.actions.jobs.matrix-add-with-include %}

### `jobs.<job_id>.strategy.matrix.exclude`

{% data reusables.actions.jobs.matrix-exclude %}

### `jobs.<job_id>.strategy.fail-fast`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

### `jobs.<job_id>.strategy.max-parallel`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}

## `jobs.<job_id>.continue-on-error`

Prevents a workflow run from failing when a job fails. Set to `true` to allow a workflow run to pass when this job fails.

### Example: Preventing a specific failing matrix job from failing a workflow run

You can allow specific jobs in a job matrix to fail without failing the workflow run. For example, if you wanted to only allow an experimental job with `node` set to `15` to fail without failing the workflow run.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
continue-on-error: ${{ matrix.experimental }}
strategy:
  fail-fast: false
  matrix:
    node: [13, 14]
    os: [macos-latest, ubuntu-18.04]
    experimental: [false]
    include:
      - node: 15
        os: ubuntu-18.04
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

Used to host service containers for a job in a workflow. Service containers are useful for creating databases or cache services like Redis. The runner  automatically creates a Docker network and manages the life cycle of the service containers.

If you configure your job to run in a container, or your step uses container actions, you don't need to map ports to access the service or action. Docker automatically exposes all ports between containers on the same Docker user-defined bridge network. You can directly reference the service container by its hostname. The hostname is automatically mapped to the label name you configure for the service in the workflow.

If you configure the job to run directly on the runner machine and your step doesn't use a container action, you must map any required Docker service container ports to the Docker host (the runner machine). You can access the service container using localhost and the mapped port.

For more information about the differences between networking service containers, see "[About service containers](/actions/automating-your-workflow-with-github-actions/about-service-containers)."

### Example: Using localhost

This example creates two services: nginx and redis. When you specify the Docker host port but not the container port, the container port is randomly assigned to a free port. {% data variables.product.prodname_dotcom %} sets the assigned container port in the {% raw %}`${{job.services.<service_name>.ports}}`{% endraw %} context. In this example, you can access the service container ports using the {% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} and {% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %} contexts.

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

The Docker image to use as the service container to run the action. The value can be the Docker Hub image name or a  registry name.

### `jobs.<job_id>.services.<service_id>.credentials`

{% data reusables.actions.registry-credentials %}

#### Example

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

Sets a `map` of environment variables in the service container.

### `jobs.<job_id>.services.<service_id>.ports`

Sets an `array` of ports to expose on the service container.

### `jobs.<job_id>.services.<service_id>.volumes`

Sets an `array` of volumes for the service container to use. You can use volumes to share data between services or other steps in a job. You can specify named Docker volumes, anonymous Docker volumes, or bind mounts on the host.

To specify a volume, you specify the source and destination path:

`<source>:<destinationPath>`.

The `<source>` is a volume name or an absolute path on the host machine, and `<destinationPath>` is an absolute path in the container.

#### Example

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

### `jobs.<job_id>.services.<service_id>.options`

Additional Docker container resource options. For a list of options, see "[`docker create` options](https://docs.docker.com/engine/reference/commandline/create/#options)."

{% warning %}

**Warning:** The `--network` option is not supported.

{% endwarning %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## `jobs.<job_id>.uses`

{% data reusables.actions.reusable-workflows-ghes-beta %}

The location and version of a reusable workflow file to run as a job. {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}Use one of the following syntaxes:{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

### Example

{% data reusables.actions.uses-keyword-example %}

For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

### `jobs.<job_id>.with`

When a job is used to call a reusable workflow, you can use `with` to provide a map of inputs that are passed to the called workflow.

Any inputs that you pass must match the input specifications defined in the called workflow.

Unlike [`jobs.<job_id>.steps[*].with`](#jobsjob_idstepswith), the inputs you pass with `jobs.<job_id>.with` are not be available as environment variables in the called workflow. Instead, you can reference the inputs by using the `inputs` context.

#### Example

```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    with:
      username: mona
```

### `jobs.<job_id>.with.<input_id>`

A pair consisting of a string identifier for the input and the value of the input. The identifier must match the name of an input defined by [`on.workflow_call.inputs.<inputs_id>`](/actions/creating-actions/metadata-syntax-for-github-actions#inputsinput_id) in the called workflow. The data type of the value must match the type defined by [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype) in the called workflow.

Allowed expression contexts: `github`, and `needs`.

### `jobs.<job_id>.secrets`

When a job is used to call a reusable workflow, you can use `secrets` to provide a map of secrets that are passed to the called workflow.

Any secrets that you pass must match the names defined in the called workflow.

#### Example

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

Use the `inherit` keyword to pass all the calling workflow's secrets to the called workflow. This includes all secrets the calling workflow has access to, namely organization, repository, and environment secrets. The `inherit` keyword can be used to pass secrets across repositories within the same organization, or across organizations within the same enterprise.

#### Example

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

A pair consisting of a string identifier for the secret and the value of the secret. The identifier must match the name of a secret defined by [`on.workflow_call.secrets.<secret_id>`](#onworkflow_callsecretssecret_id) in the called workflow.

Allowed expression contexts: `github`, `needs`, and `secrets`.
{% endif %}

## Filter pattern cheat sheet

You can use special characters in path, branch, and tag filters.

- `*`: Matches zero or more characters, but does not match the `/` character. For example, `Octo*` matches `Octocat`.
- `**`: Matches zero or more of any character.
- `?`: Matches zero or one of the preceding character.
- `+`: Matches one or more of the preceding character.
- `[]` Matches one character listed in the brackets or included in ranges. Ranges can only include `a-z`, `A-Z`, and `0-9`. For example, the range`[0-9a-z]` matches any digit or lowercase letter. For example, `[CB]at` matches `Cat` or `Bat` and `[1-2]00` matches `100` and `200`.
- `!`: At the start of a pattern makes it negate previous positive patterns. It has no special meaning if not the first character.

The characters `*`, `[`, and `!` are special characters in YAML. If you start a pattern with `*`, `[`, or `!`, you must enclose the pattern in quotes.

```yaml
# Valid
- '**/README.md'

# Invalid - creates a parse error that
# prevents your workflow from running.
- **/README.md
```

For more information about branch, tag, and path filter syntax, see "[`on.<push>.<branches|tags>`](#onpushbranchestagsbranches-ignoretags-ignore)", "[`on.<pull_request>.<branches|tags>`](#onpull_requestpull_request_targetbranchesbranches-ignore)", and "[`on.<push|pull_request>.paths`](#onpushpull_requestpull_request_targetpathspaths-ignore)."

### Patterns to match branches and tags

| Pattern | Description | Example matches |
|---------|------------------------|---------|
| `feature/*` | The `*` wildcard matches any character, but does not match slash (`/`). |  `feature/my-branch`<br/><br/>`feature/your-branch` |
| `feature/**` | The `**` wildcard matches any character including slash (`/`) in branch and tag names. | `feature/beta-a/my-branch`<br/><br/>`feature/your-branch`<br/><br/>`feature/mona/the/octocat` |
| `main`<br/><br/>`releases/mona-the-octocat` | Matches the exact name of a branch or tag name. | `main`<br/><br/>`releases/mona-the-octocat` |
| `'*'` | Matches all branch and tag names that don't contain a slash (`/`). The `*` character is a special character in YAML. When you start a pattern with `*`, you must use quotes. | `main`<br/><br/>`releases` |
| `'**'` | Matches all branch and tag names. This is the default behavior when you don't use a `branches` or `tags` filter. | `all/the/branches`<br/><br/>`every/tag` |
| `'*feature'` | The `*` character is a special character in YAML. When you start a pattern with `*`, you must use quotes. | `mona-feature`<br/><br/>`feature`<br/><br/>`ver-10-feature` |
| `v2*` | Matches branch and tag names that start with `v2`. | `v2`<br/><br/>`v2.0`<br/><br/>`v2.9` |
| `v[12].[0-9]+.[0-9]+` | Matches all semantic versioning branches and tags with major version 1 or 2. | `v1.10.1`<br/><br/>`v2.0.0` |

### Patterns to match file paths

Path patterns must match the whole path, and start from the repository's root.

| Pattern | Description of matches | Example matches |
|---------|------------------------|-----------------|
| `'*'` | The `*` wildcard matches any character, but does not match slash (`/`). The `*` character is a special character in YAML. When you start a pattern with `*`, you must use quotes. | `README.md`<br/><br/>`server.rb` |
| `'*.jsx?'` | The `?` character matches zero or one of the preceding character. | `page.js`<br/><br/>`page.jsx` |
| `'**'` | The `**` wildcard matches any character including slash (`/`). This is the default behavior when you don't use a `path` filter. | `all/the/files.md` |
| `'*.js'` | The `*` wildcard matches any character, but does not match slash (`/`). Matches all `.js` files at the root of the repository. | `app.js`<br/><br/>`index.js`
| `'**.js'` | Matches all `.js` files in the repository. | `index.js`<br/><br/>`js/index.js`<br/><br/>`src/js/app.js` |
| `docs/*`  | All files within the root of the `docs` directory, at the root of the repository. | `docs/README.md`<br/><br/>`docs/file.txt` |
| `docs/**` | Any files in the `/docs` directory at the root of the repository. | `docs/README.md`<br/><br/>`docs/mona/octocat.txt` |
| `docs/**/*.md` | A file with a `.md` suffix anywhere in the `docs` directory. | `docs/README.md`<br/><br/>`docs/mona/hello-world.md`<br/><br/>`docs/a/markdown/file.md`
| `'**/docs/**'`   | Any files in a `docs` directory anywhere in the repository. | `docs/hello.md`<br/><br/>`dir/docs/my-file.txt`<br/><br/>`space/docs/plan/space.doc`
| `'**/README.md'` | A README.md file anywhere in the repository. | `README.md`<br/><br/>`js/README.md`
| `'**/*src/**'` | Any file in a folder with a `src` suffix anywhere in the repository. | `a/src/app.js`<br/><br/>`my-src/code/js/app.js`
| `'**/*-post.md'` | A file with the suffix `-post.md` anywhere in the repository. | `my-post.md`<br/><br/>`path/their-post.md` |
| `'**/migrate-*.sql'` | A file with the prefix `migrate-` and suffix `.sql` anywhere in the repository. | `migrate-10909.sql`<br/><br/>`db/migrate-v1.0.sql`<br/><br/>`db/sept/migrate-v1.sql` |
| `*.md`<br/><br/>`!README.md` | Using an exclamation mark (`!`) in front of a pattern negates it. When a file matches a pattern and also matches a negative pattern defined later in the file, the file will not be included. | `hello.md`<br/><br/>_Does not match_<br/><br/>`README.md`<br/><br/>`docs/hello.md` |
| `*.md`<br/><br/>`!README.md`<br/><br/>`README*` | Patterns are checked sequentially. A pattern that negates a previous pattern will re-include file paths. | `hello.md`<br/><br/>`README.md`<br/><br/>`README.doc`|
