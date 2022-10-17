---
title: Contexts
shortTitle: Contexts
intro: You can access context information in workflows and actions.
redirect_from:
  - /articles/contexts-and-expression-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/context-and-expression-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About contexts

Contexts are a way to access information about workflow runs, runner environments, jobs, and steps. Each context is an object that contains properties, which can be strings or other objects.

{% data reusables.actions.context-contents %} For example, the `matrix` context is only populated for jobs in a [matrix](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix).

You can access contexts using the expression syntax. For more information, see "[Expressions](/actions/learn-github-actions/expressions)."

{% raw %}
`${{ <context> }}`
{% endraw %}

{% data reusables.actions.context-injection-warning %}

| Context name | Type | Description |
|---------------|------|-------------|
| `github` | `object` | Information about the workflow run. For more information, see [`github` context](#github-context). |
| `env` | `object` | Contains environment variables set in a workflow, job, or step. For more information, see [`env` context](#env-context). |
| `job` | `object` | Information about the currently running job. For more information, see [`job` context](#job-context). |
{%- ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
| `jobs` | `object` | For reusable workflows only, contains outputs of jobs from the reusable workflow. For more information, see [`jobs` context](#jobs-context). |{% endif %}
| `steps` | `object` | Information about the steps that have been run in the current job. For more information, see [`steps` context](#steps-context). |
| `runner` | `object` | Information about the runner that is running the current job. For more information, see [`runner` context](#runner-context). |
| `secrets` | `object` | Contains the names and values of secrets that are available to a workflow run. For more information, see [`secrets` context](#secrets-context). |
| `strategy` | `object` | Information about the matrix execution strategy for the current job. For more information, see [`strategy` context](#strategy-context). |
| `matrix` | `object` | Contains the matrix properties defined in the workflow that apply to the current job. For more information, see [`matrix` context](#matrix-context). |
| `needs` | `object` | Contains the outputs of all jobs that are defined as a dependency of the current job. For more information, see [`needs` context](#needs-context). |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
| `inputs` | `object` | Contains the inputs of a reusable {% ifversion actions-unified-inputs %}or manually triggered {% endif %}workflow. For more information, see [`inputs` context](#inputs-context). |{% endif %}

As part of an expression, you can access context information using one of two syntaxes.

- Index syntax: `github['sha']`
- Property dereference syntax: `github.sha`

In order to use property dereference syntax, the property name must start with a letter or `_` and contain only alphanumeric characters, `-`, or `_`.

If you attempt to dereference a non-existent property, it will evaluate to an empty string.

### Determining when to use contexts

{% data reusables.actions.using-context-or-environment-variables %}

### Context availability

Different contexts are available throughout a workflow run. For example, the `secrets` context may only be used at certain places within a job.

In addition, some functions may only be used in certain places. For example, the `hashFiles` function is not available everywhere.

The following table indicates where each context and special function can be used within a workflow. Unless listed below, a function can be used anywhere.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}

| Workflow key | Context | Special functions |
| ---- | ------- | ----------------- |
{%- ifversion actions-run-name %}
| <code>run-name</code> | <code>github, inputs</code> | |
{%- endif %}
| <code>concurrency</code> | <code>github, inputs</code> | |
| <code>env</code> | <code>github, secrets, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.concurrency</code> | <code>github, needs, strategy, matrix, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.container</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.container.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs, inputs</code> | <code>always, cancelled, success, failure</code> |
| <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.secrets.&lt;secrets_id&gt;</code> | <code>github, needs,{% ifversion actions-reusable-workflow-matrix %} strategy, matrix,{% endif %} secrets{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | <code>always, cancelled, success, failure, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix, inputs</code> | |
| <code>jobs.&lt;job_id&gt;.with.&lt;with_id&gt;</code> | <code>github, needs{% ifversion actions-reusable-workflow-matrix %}, strategy, matrix{% endif %}{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | |
| <code>on.workflow_call.inputs.&lt;inputs_id&gt;.default</code> | <code>github{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | |
| <code>on.workflow_call.outputs.&lt;output_id&gt;.value</code> | <code>github, jobs, inputs</code> | |
{% else %}
| Path | Context | Special functions |
| ---- | ------- | ----------------- |
| <code>concurrency</code> | <code>github</code> | |
| <code>env</code> | <code>github, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.concurrency</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.container</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.container.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env</code> | |
| <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | |
| <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs</code> | <code>always, cancelled, success, failure</code> |
| <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | |
| <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | <code>always, cancelled, success, failure, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs</code> | |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix</code> | |
{% endif %}

### Example: printing context information to the log

You can print the contents of contexts to the log for debugging. The [`toJSON` function](/actions/learn-github-actions/expressions#tojson) is required to pretty-print JSON objects to the log.

{% data reusables.actions.github-context-warning %}

{% raw %}
```yaml{:copy}
name: Context testing
on: push

jobs:
  dump_contexts_to_log:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        id: github_context_step
        run: echo '${{ toJSON(github) }}'
      - name: Dump job context
        run: echo '${{ toJSON(job) }}'
      - name: Dump steps context
        run: echo '${{ toJSON(steps) }}'
      - name: Dump runner context
        run: echo '${{ toJSON(runner) }}'
      - name: Dump strategy context
        run: echo '${{ toJSON(strategy) }}'
      - name: Dump matrix context
        run: echo '${{ toJSON(matrix) }}'
```
{% endraw %}

## `github` context

The `github` context contains information about the workflow run and the event that triggered the run. You can also read most of the `github` context data in environment variables. For more information about environment variables, see "[Using environment variables](/actions/automating-your-workflow-with-github-actions/using-environment-variables)."

{% data reusables.actions.github-context-warning %}
{% data reusables.actions.context-injection-warning %}

| Property name | Type | Description |
|---------------|------|-------------|
| `github` | `object` | The top-level context available during any job or step in a workflow. This object contains all the properties listed below. |
| `github.action` | `string` | The name of the action currently running, or the [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) of a step. {% data variables.product.prodname_dotcom %} removes special characters, and uses the name `__run` when the current step runs a script without an `id`. If you use the same action more than once in the same job, the name will include a suffix with the sequence number with underscore before it. For example, the first script you run will have the name `__run`, and the second script will be named `__run_2`. Similarly, the second invocation of `actions/checkout` will be `actionscheckout2`. |
| `github.action_path` | `string` | The path where an action is located. This property is only supported in composite actions. You can use this path to access files located in the same repository as the action. |
| `github.action_ref` | `string` | For a step executing an action, this is the ref of the action being executed. For example, `v2`. |
| `github.action_repository` | `string` | For a step executing an action, this is the owner and repository name of the action. For example, `actions/checkout`. |
| `github.action_status` | `string` | For a composite action, the current result of the composite action. |
| `github.actor` | `string` | {% ifversion actions-stable-actor-ids %}The username of the user that triggered the initial workflow run. If the workflow run is a re-run, this value may differ from `github.triggering_actor`. Any workflow re-runs will use the privileges of `github.actor`, even if the actor initiating the re-run (`github.triggering_actor`) has different privileges.{% else %}The username of the user that initiated the workflow run.{% endif %} |
| `github.api_url` | `string` | The URL of the {% data variables.product.prodname_dotcom %} REST API. |
| `github.base_ref` | `string` | The `base_ref` or target branch of the pull request in a workflow run. This property is only available when the event that triggers a workflow run is either `pull_request` or `pull_request_target`. |
| `github.env` | `string` | Path on the runner to the file that sets environment variables from workflow commands. This file is unique to the current step and is a different file for each step in a job. For more information, see "[Workflow commands for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-commands-for-github-actions#setting-an-environment-variable)." |
| `github.event` | `object` | The full event webhook payload. You can access individual properties of the event using this context. This object is identical to the webhook payload of the event that triggered the workflow run, and is different for each event. The webhooks for each {% data variables.product.prodname_actions %} event is linked in "[Events that trigger workflows](/articles/events-that-trigger-workflows/)." For example, for a workflow run triggered by the [`push` event](/actions/using-workflows/events-that-trigger-workflows#push), this object contains the contents of the [push webhook payload](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push). |
| `github.event_name` | `string` | The name of the event that triggered the workflow run. |
| `github.event_path` | `string` | The path to the file on the runner that contains the full event webhook payload. |
| `github.graphql_url` | `string` | The URL of the {% data variables.product.prodname_dotcom %} GraphQL API. |
| `github.head_ref` | `string` | The `head_ref` or source branch of the pull request in a workflow run. This property is only available when the event that triggers a workflow run is either `pull_request` or `pull_request_target`. |
| `github.job` | `string` | The [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) of the current job. <br /> Note: This context property is set by the Actions runner, and is only available within the execution `steps` of a job. Otherwise, the value of this property will be `null`. |
| `github.ref` | `string` | {% data reusables.actions.ref-description %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
| `github.ref_name` | `string` | {% data reusables.actions.ref_name-description %} |
| `github.ref_protected` | `boolean` | {% data reusables.actions.ref_protected-description %} |
| `github.ref_type` | `string` | {% data reusables.actions.ref_type-description %} |
{%- endif %}
| `github.path` | `string` | Path on the runner to the file that sets system `PATH` variables from workflow commands. This file is unique to the current step and is a different file for each step in a job. For more information, see "[Workflow commands for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-commands-for-github-actions#adding-a-system-path)." |
| `github.repository` | `string` | The owner and repository name. For example, `Codertocat/Hello-World`. |
| `github.repository_owner` | `string` | The repository owner's name. For example, `Codertocat`. |
| `github.repositoryUrl` | `string` | The Git URL to the repository. For example, `git://github.com/codertocat/hello-world.git`. |
| `github.retention_days` | `string` | The number of days that workflow run logs and artifacts are kept. |
| `github.run_id` | `string` | {% data reusables.actions.run_id_description %} |
| `github.run_number` | `string` | {% data reusables.actions.run_number_description %} |
{%- ifversion fpt or ghec or ghes > 3.5 or ghae > 3.4 %}
| `github.run_attempt` | `string` | A unique number for each attempt of a particular workflow run in a repository. This number begins at 1 for the workflow run's first attempt, and increments with each re-run. |
{%- endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
| `github.secret_source` | `string` | The source of a secret used in a workflow. Possible values are `None`, `Actions`, `Dependabot`, or `Codespaces`. |
{%- endif %}
| `github.server_url` | `string` | The URL of the GitHub server. For example: `https://github.com`. |
| `github.sha` | `string` | {% data reusables.actions.github_sha_description %} |
| `github.token` | `string` | A token to authenticate on behalf of the GitHub App installed on your repository. This is functionally equivalent to the `GITHUB_TOKEN` secret. For more information, see "[Automatic token authentication](/actions/security-guides/automatic-token-authentication)."  <br /> Note: This context property is set by the Actions runner, and is only available within the execution `steps` of a job. Otherwise, the value of this property will be `null`. |{% ifversion actions-stable-actor-ids %}
| `github.triggering_actor` | `string` | The username of the user that initiated the workflow run. If the workflow run is a re-run, this value may differ from `github.actor`. Any workflow re-runs will use the privileges of `github.actor`, even if the actor initiating the re-run (`github.triggering_actor`) has different privileges. |{% endif %}
| `github.workflow` | `string` | The name of the workflow. If the workflow file doesn't specify a `name`, the value of this property is the full path of the workflow file in the repository. |
| `github.workspace` | `string` | The default working directory on the runner for steps, and the default location of your repository when using the [`checkout`](https://github.com/actions/checkout) action. |

### Example contents of the `github` context

The following example context is from a workflow run triggered by the `push` event. The `event` object in this example has been truncated because it is identical to the contents of the [`push` webhook payload](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push).

{% data reusables.actions.context-example-note %}

```json
{
  "token": "***",
  "job": "dump_contexts_to_log",
  "ref": "refs/heads/my_branch",
  "sha": "c27d339ee6075c1f744c5d4b200f7901aad2c369",
  "repository": "octocat/hello-world",
  "repository_owner": "octocat",
  "repositoryUrl": "git://github.com/octocat/hello-world.git",
  "run_id": "1536140711",
  "run_number": "314",
  "retention_days": "90",
  "run_attempt": "1",
  "actor": "octocat",
  "workflow": "Context testing",
  "head_ref": "",
  "base_ref": "",
  "event_name": "push",
  "event": {
    ...
  },
  "server_url": "https://github.com",
  "api_url": "https://api.github.com",
  "graphql_url": "https://api.github.com/graphql",
  "ref_name": "my_branch",
  "ref_protected": false,
  "ref_type": "branch",
  "secret_source": "Actions",
  "workspace": "/home/runner/work/hello-world/hello-world",
  "action": "github_step",
  "event_path": "/home/runner/work/_temp/_github_workflow/event.json",
  "action_repository": "",
  "action_ref": "",
  "path": "/home/runner/work/_temp/_runner_file_commands/add_path_b037e7b5-1c88-48e2-bf78-eaaab5e02602",
  "env": "/home/runner/work/_temp/_runner_file_commands/set_env_b037e7b5-1c88-48e2-bf78-eaaab5e02602"
}
```

### Example usage of the `github` context

This example workflow uses the `github.event_name` context to run a job only if the workflow run was triggered by the `pull_request` event.

```yaml{:copy}
name: Run CI
on: [push, pull_request]

jobs:
  normal_ci:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run normal CI
        run: ./run-tests

  pull_request_ci:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run PR CI
        run: ./run-additional-pr-ci
```

## `env` context

The `env` context contains environment variables that have been set in a workflow, job, or step. For more information about setting environment variables in your workflow, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)."

The `env` context syntax allows you to use the value of an environment variable in your workflow file. You can use the `env` context in the value of any key in a step except for the `id` and `uses` keys. For more information on the step syntax, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)."

If you want to use the value of an environment variable inside a runner, use the runner operating system's normal method for reading environment variables.

| Property name | Type | Description |
|---------------|------|-------------|
| `env` | `object` | This context changes for each step in a job. You can access this context from any step in a job. This object contains the properties listed below. |
| `env.<env_name>` | `string` | The value of a specific environment variable. |

### Example contents of the `env` context

The contents of the `env` context is a mapping of environment variable names to their values. The context's contents can change depending on where it is used in the workflow run.

```json
{
  "first_name": "Mona",
  "super_duper_var": "totally_awesome"
}
```

### Example usage of the `env` context

This example workflow shows how the `env` context can be configured at the workflow, job, and step levels, as well as using the context in steps.

{% data reusables.repositories.actions-env-var-note %}

{% raw %}
```yaml{:copy}
name: Hi Mascot
on: push
env:
  mascot: Mona
  super_duper_var: totally_awesome

jobs:
  windows_job:
    runs-on: windows-latest
    steps:
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Mona
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Octocat
        env:
          mascot: Octocat
  linux_job:
    runs-on: ubuntu-latest
    env:
      mascot: Tux
    steps:
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Tux
```
{% endraw %}

## `job` context

The `job` context contains information about the currently running job.

| Property name | Type | Description |
|---------------|------|-------------|
| `job` | `object` | This context changes for each job in a workflow run. You can access this context from any step in a job. This object contains all the properties listed below. |
| `job.container` | `object` | Information about the job's container. For more information about containers, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)." |
| `job.container.id` | `string` | The ID of the container. |
| `job.container.network` | `string` | The ID of the container network. The runner creates the network used by all containers in a job. |
| `job.services` | `object` | The service containers created for a job. For more information about service containers, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)." |
| `job.services.<service_id>.id` | `string` | The ID of the service container. |
| `job.services.<service_id>.network` | `string` | The ID of the service container network. The runner creates the network used by all containers in a job. |
| `job.services.<service_id>.ports` | `object` | The exposed ports of the service container. |
| `job.status` | `string` | The current status of the job. Possible values are `success`, `failure`, or `cancelled`. |

### Example contents of the `job` context

This example `job` context uses a PostgreSQL service container with mapped ports. If there are no containers or service containers used in a job, the `job` context only contains the `status` property.

```json
{
  "status": "success",
  "container": {
    "network": "github_network_53269bd575974817b43f4733536b200c"
  },
  "services": {
    "postgres": {
      "id": "60972d9aa486605e66b0dad4abb638dc3d9116f566579e418166eedb8abb9105",
      "ports": {
        "5432": "49153"
      },
      "network": "github_network_53269bd575974817b43f4733536b200c"
    }
  }
}
```

### Example usage of the `job` context

This example workflow configures a PostgreSQL service container, and automatically maps port 5432 in the service container to a randomly chosen available port on the host. The `job` context is used to access the number of the port that was assigned on the host.

```yaml{:copy}
name: PostgreSQL Service Example
on: push
jobs:
  postgres-job:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5
        ports:
          # Maps TCP port 5432 in the service container to a randomly chosen available port on the host.
          - 5432

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: pg_isready -h localhost -p {% raw %}${{ job.services.postgres.ports[5432] }}{% endraw %}
      - run: ./run-tests
```

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}

## `jobs` context

The `jobs` context is only available in reusable workflows, and can only be used to set outputs for a reusable workflow. For more information, see "[Reusing workflows](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow)."

| Property name | Type | Description |
|---------------|------|-------------|
| `jobs` | `object` | This is only available in reusable workflows, and can only be used to set outputs for a reusable workflow. This object contains all the properties listed below.
| `jobs.<job_id>.result` | `string` | The result of a job in the reusable workflow. Possible values are `success`, `failure`, `cancelled`, or `skipped`. |
| `jobs.<job_id>.outputs` | `object` | The set of outputs of a job in a reusable workflow. |
| `jobs.<job_id>.outputs.<output_name>` | `string` | The value of a specific output for a job in a reusable workflow. |

### Example contents of the `jobs` context

This example `jobs` context contains the result and outputs of a job from a reusable workflow run.

```json
{
  "example_job": {
    "result": "success",
    "outputs": {
      "output1": "hello",
      "output2": "world"
    }
  }
}
```

### Example usage of the `jobs` context

This example reusable workflow uses the `jobs` context to set outputs for the reusable workflow. Note how the outputs flow up from the steps, to the job, then to the `workflow_call` trigger. For more information, see "[Reusing workflows](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow)."

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
      - id: step1
        run: echo "::set-output name=firstword::hello"
      - id: step2
        run: echo "::set-output name=secondword::world"
```
{% endraw %}

{% endif %}

## `steps` context

The `steps` context contains information about the steps in the current job that have an [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) specified and have already run.

| Property name | Type | Description |
|---------------|------|-------------|
| `steps` | `object` | This context changes for each step in a job. You can access this context from any step in a job. This object contains all the properties listed below. |
| `steps.<step_id>.outputs` | `object` | The set of outputs defined for the step. For more information, see "[Metadata syntax for {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)." |
| `steps.<step_id>.conclusion` | `string` | The result of a completed step after [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) is applied. Possible values are `success`, `failure`, `cancelled`, or `skipped`. When a `continue-on-error` step fails, the `outcome` is `failure`, but the final `conclusion` is `success`. |
| `steps.<step_id>.outcome` | `string` | The result of a completed step before [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) is applied. Possible values are `success`, `failure`, `cancelled`, or `skipped`. When a `continue-on-error` step fails, the `outcome` is `failure`, but the final `conclusion` is `success`. |
| `steps.<step_id>.outputs.<output_name>` | `string` | The value of a specific output. |

### Example contents of the `steps` context

This example `steps` context shows two previous steps that had an [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) specified. The first step had the `id` named `checkout`, the second `generate_number`. The `generate_number` step had an output named `random_number`.

```json
{
  "checkout": {
    "outputs": {},
    "outcome": "success",
    "conclusion": "success"
  },
  "generate_number": {
    "outputs": {
      "random_number": "1"
    },
    "outcome": "success",
    "conclusion": "success"
  }
}
```

### Example usage of the `steps` context

This example workflow generates a random number as an output in one step, and a later step uses the `steps` context to read the value of that output.

```yaml{:copy}
name: Generate random failure
on: push
jobs:
  randomly-failing-job:
    runs-on: ubuntu-latest
    steps:
      - id: checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Generate 0 or 1
        id: generate_number
        run:  echo "::set-output name=random_number::$(($RANDOM % 2))"
      - name: Pass or fail
        run: |
          if [[ {% raw %}${{ steps.generate_number.outputs.random_number }}{% endraw %} == 0 ]]; then exit 0; else exit 1; fi
```

## `runner` context

The `runner` context contains information about the runner that is executing the current job.

| Property name | Type | Description |
|---------------|------|-------------|
| `runner` | `object` | This context changes for each job in a workflow run. This object contains all the properties listed below. |
| `runner.name` | `string` | {% data reusables.actions.runner-name-description %} |
| `runner.os` | `string` | {% data reusables.actions.runner-os-description %} |{% ifversion actions-runner-arch-envvars %}
| `runner.arch` | `string` | {% data reusables.actions.runner-arch-description %} |{% endif %}
| `runner.temp` | `string` | {% data reusables.actions.runner-temp-directory-description %} |
| `runner.tool_cache` | `string` | {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %} {% data reusables.actions.runner-tool-cache-description %} {% endif %}|
| `runner.debug` | `string` | {% data reusables.actions.runner-debug-description %} |

{%- comment %}
The `runner.workspace` property is purposefully not documented. It is an early Actions property that now isn't relevant for users, compared to `github.workspace`. It is kept around for compatibility.
| `runner.workspace` | `string` | |
{%- endcomment %}

### Example contents of the `runner` context

The following example context is from a Linux {% data variables.product.prodname_dotcom %}-hosted runner.

```json
{
  "os": "Linux",
  "arch": "X64",
  "name": "GitHub Actions 2",
  "tool_cache": "/opt/hostedtoolcache",
  "temp": "/home/runner/work/_temp"
  {%- comment %}
  # The `runner.workspace` property is purposefully not documented. It is an early Actions property that now isn't relevant for users, compared to `github.workspace`. It is kept around for compatibility.
  "workspace": "/home/runner/work/hello-world"
  {%- endcomment %}
}
```

### Example usage of the `runner` context

This example workflow uses the `runner` context to set the path to the temporary directory to write logs, and if the workflow fails, it uploads those logs as artifact.

```yaml{:copy}
name: Build
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build with logs
        run: |
          mkdir {% raw %}${{ runner.temp }}{% endraw %}/build_logs
          ./build.sh --log-path {% raw %}${{ runner.temp }}{% endraw %}/build_logs
      - name: Upload logs on fail
        if: {% raw %}${{ failure() }}{% endraw %}
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Build failure logs
          path: {% raw %}${{ runner.temp }}{% endraw %}/build_logs
```

## `secrets` context

The `secrets` context contains the names and values of secrets that are available to a workflow run. The `secrets` context is not available for composite actions. For more information about secrets, see "[Encrypted secrets](/actions/security-guides/encrypted-secrets)."

`GITHUB_TOKEN` is a secret that is automatically created for every workflow run, and is always included in the `secrets` context. For more information, see "[Automatic token authentication](/actions/security-guides/automatic-token-authentication)."

{% data reusables.actions.secrets-redaction-warning %}

| Property name | Type | Description |
|---------------|------|-------------|
| `secrets` | `object` | This context is the same for each job in a workflow run. You can access this context from any step in a job. This object contains all the properties listed below. |
| `secrets.GITHUB_TOKEN` | `string` | Automatically created token for each workflow run. For more information, see "[Automatic token authentication](/actions/security-guides/automatic-token-authentication)." |
| `secrets.<secret_name>` | `string` | The value of a specific secret. |

### Example contents of the `secrets` context

The following example contents of the `secrets` context shows the automatic `GITHUB_TOKEN`, as well as two other secrets available to the workflow run.

```json
{
  "github_token": "***",
  "NPM_TOKEN": "***",
  "SUPERSECRET": "***"
}
```

### Example usage of the `secrets` context

{% data reusables.actions.github_token-input-example %}

## `strategy` context

For workflows with a matrix, the `strategy` context contains information about the matrix execution strategy for the current job.

| Property name | Type | Description |
|---------------|------|-------------|
| `strategy` | `object` | This context changes for each job in a workflow run. You can access this context from any job or step in a workflow. This object contains all the properties listed below. |
| `strategy.fail-fast` | `boolean` | When `true`, all in-progress jobs are canceled if any job in a matrix fails. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast)." |
| `strategy.job-index` | `number` | The index of the current job in the matrix. **Note:** This number is a zero-based number. The first job's index in the matrix is `0`. |
| `strategy.job-total` | `number` | The total number of jobs in the matrix. **Note:** This number **is not** a zero-based number. For example, for a matrix with four jobs, the value of `job-total` is `4`. |
| `strategy.max-parallel` | `number` | The maximum number of jobs that can run simultaneously when using a `matrix` job strategy. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel)." |

### Example contents of the `strategy` context

The following example contents of the `strategy` context is from a matrix with four jobs, and is taken from the final job. Note the difference between the zero-based `job-index` number, and `job-total` which is not zero-based.

```json
{
  "fail-fast": true,
  "job-index": 3,
  "job-total": 4,
  "max-parallel": 4
}
```

### Example usage of the `strategy` context

This example workflow uses the `strategy.job-index` property to set a unique name for a log file for each job in a matrix.

```yaml{:copy}
name: Test matrix
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        test-group: [1, 2]
        node: [14, 16]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: npm test > test-job-{% raw %}${{ strategy.job-index }}{% endraw %}.txt
      - name: Upload logs
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Build log for job {% raw %}${{ strategy.job-index }}{% endraw %}
          path: test-job-{% raw %}${{ strategy.job-index }}{% endraw %}.txt
```

## `matrix` context

For workflows with a matrix, the `matrix` context contains the matrix properties defined in the workflow file that apply to the current job. For example, if you configure a matrix with the `os` and `node` keys, the `matrix` context object includes the `os` and `node` properties with the values that are being used for the current job.

There are no standard properties in the `matrix` context, only those which are defined in the workflow file.

| Property name | Type | Description |
|---------------|------|-------------|
| `matrix` | `object` | This context is only available for jobs in a matrix, and changes for each job in a workflow run. You can access this context from any job or step in a workflow. This object contains the properties listed below. |
| `matrix.<property_name>` | `string` | The value of a matrix property. |

### Example contents of the `matrix` context

The following example contents of the `matrix` context is from a job in a matrix that has the `os` and `node` matrix properties defined in the workflow. The job is executing the matrix combination of an `ubuntu-latest` OS and Node.js version `16`.

```json
{
  "os": "ubuntu-latest",
  "node": 16
}
```

### Example usage of the `matrix` context

This example workflow creates a matrix with `os` and `node` keys. It uses the `matrix.os` property to set the runner type for each job, and uses the `matrix.node` property to set the Node.js version for each job.

```yaml{:copy}
name: Test matrix
on: push

jobs:
  build:
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
        node: [14, 16]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
```

## `needs` context

The `needs` context contains outputs from all jobs that are defined as a direct dependency of the current job. Note that this doesn't include implicitly dependent jobs (for example, dependent jobs of a dependent job). For more information on defining job dependencies, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds)."

| Property name | Type | Description |
|---------------|------|-------------|
| `needs` | `object` | This context is only populated for workflow runs that have dependent jobs, and changes for each job in a workflow run. You can access this context from any job or step in a workflow. This object contains all the properties listed below. |
| `needs.<job_id>` | `object` | A single job that the current job depends on. |
| `needs.<job_id>.outputs` | `object` | The set of outputs of a job that the current job depends on. |
| `needs.<job_id>.outputs.<output name>` | `string` | The value of a specific output for a job that the current job depends on. |
| `needs.<job_id>.result` | `string` | The result of a job that the current job depends on. Possible values are `success`, `failure`, `cancelled`, or `skipped`. |

### Example contents of the `needs` context

The following example contents of the `needs` context shows information for two jobs that the current job depends on.

```json
{
  "build": {
    "result": "success",
    "outputs": {
      "build_id": "ABC123"
    }
  },
  "deploy": {
    "result": "failure",
    "outputs": {}
  }
}
```

### Example usage of the `needs` context

This example workflow has three jobs: a `build` job that does a build, a `deploy` job that requires the `build` job, and a `debug` job that requires both the `build` and `deploy` jobs and runs only if there is a failure in the workflow. The `deploy` job also uses the `needs` context to access an output from the `build` job.

```yaml{:copy}
name: Build and deploy
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      build_id: {% raw %}${{ steps.build_step.outputs.build_id }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        id: build_step
        run: |
          ./build
          echo "::set-output name=build_id::$BUILD_ID"
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: ./deploy --build {% raw %}${{ needs.build.outputs.build_id }}{% endraw %}
  debug:
    needs: [build, deploy]
    runs-on: ubuntu-latest
    if: {% raw %}${{ failure() }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: ./debug
```

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
## `inputs` context

The `inputs` context contains input properties passed to an action{% ifversion actions-unified-inputs %},{% else %} or{% endif %} to a reusable workflow{% ifversion actions-unified-inputs %}, or to a manually triggered workflow{% endif %}. {% ifversion actions-unified-inputs %}For reusable workflows, the{% else %}The{% endif %} input names and types are defined in the [`workflow_call` event configuration](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events) of a reusable workflow, and the input values are passed from [`jobs.<job_id>.with`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idwith) in an external workflow that calls the reusable workflow. {% ifversion actions-unified-inputs %}For manually triggered workflows, the inputs are defined in the [`workflow_dispatch` event configuration](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch) of a workflow.{% endif %}

There are no standard properties in the `inputs` context, only those which are defined in the workflow file.

{% data reusables.actions.reusable-workflows-ghes-beta %}

| Property name | Type | Description |
|---------------|------|-------------|
| `inputs` | `object` | This context is only available in a [reusable workflow](/actions/learn-github-actions/reusing-workflows){% ifversion actions-unified-inputs %} or in a workflow triggered by the [`workflow_dispatch` event](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch){% endif %}. You can access this context from any job or step in a workflow. This object contains the properties listed below. |
| `inputs.<name>` | `string` or `number` or `boolean` | Each input value passed from an external workflow. |

### Example contents of the `inputs` context

The following example contents of the `inputs` context is from a workflow that has defined the `build_id`, `deploy_target`, and `perform_deploy` inputs.

```json
{
  "build_id": 123456768,
  "deploy_target": "deployment_sys_1a",
  "perform_deploy": true
}
```

### Example usage of the `inputs` context in a reusable workflow

This example reusable workflow uses the `inputs` context to get the values of the `build_id`, `deploy_target`, and `perform_deploy` inputs that were passed to the reusable workflow from the caller workflow.

{% raw %}
```yaml{:copy}
name: Reusable deploy workflow
on:
  workflow_call:
    inputs:
      build_id:
        required: true
        type: number
      deploy_target:
        required: true
        type: string
      perform_deploy:
        required: true
        type: boolean

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ inputs.perform_deploy }}
    steps:
      - name: Deploy build to target
        run: deploy --build ${{ inputs.build_id }} --target ${{ inputs.deploy_target }}
```
{% endraw %}

{% ifversion actions-unified-inputs %}
### Example usage of the `inputs` context in a manually triggered workflow

This example workflow triggered by a `workflow_dispatch` event uses the `inputs` context to get the values of the `build_id`, `deploy_target`, and `perform_deploy` inputs that were passed to the workflow.

{% raw %}
```yaml{:copy}
on:
  workflow_dispatch:
    inputs:
      build_id:
        required: true
        type: string
      deploy_target:
        required: true
        type: string
      perform_deploy:
        required: true
        type: boolean

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ inputs.perform_deploy }}
    steps:
      - name: Deploy build to target
        run: deploy --build ${{ inputs.build_id }} --target ${{ inputs.deploy_target }}
```
{% endraw %}
{% endif %}

{% endif %}
