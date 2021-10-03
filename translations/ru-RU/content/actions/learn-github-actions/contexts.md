---
title: Contexts
shortTitle: Contexts
intro: You can access context information in workflows and actions.
product: '{% data reusables.gated-features.actions %}'
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
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## About contexts

{% data reusables.github-actions.context-injection-warning %}

Contexts are a way to access information about workflow runs, runner environments, jobs, and steps. Contexts use the expression syntax. For more information, see "[Expressions](/actions/learn-github-actions/expressions)."

{% raw %}
`${{ <context> }}`
{% endraw %}

| Context name | Тип      | Description                                                                                                                                                                                                                                       |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`     | `объект` | Information about the workflow run. For more information, see [`github` context](#github-context).                                                                                                                                                |
| `env`        | `объект` | Contains environment variables set in a workflow, job, or step. For more information, see [`env` context](#env-context).                                                                                                                          |
| `задание`    | `объект` | Information about the currently executing job. For more information, see [`job` context](#job-context).                                                                                                                                           |
| `steps`      | `объект` | Information about the steps that have been run in this job. For more information, see [`steps` context](#steps-context).                                                                                                                          |
| `runner`     | `объект` | Information about the runner that is running the current job. For more information, see [`runner` context](#runner-context).                                                                                                                      |
| `secrets`    | `объект` | Enables access to secrets. For more information about secrets, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."                                          |
| `strategy`   | `объект` | Enables access to the configured strategy parameters and information about the current job. Strategy parameters include `fail-fast`, `job-index`, `job-total`, and `max-parallel`.                                                                |
| `matrix`     | `объект` | Enables access to the matrix parameters you configured for the current job. For example, if you configure a matrix build with the `os` and `node` versions, the `matrix` context object includes the `os` and `node` versions of the current job. |
| `needs`      | `объект` | Enables access to the outputs of all jobs that are defined as a dependency of the current job. For more information, see [`needs` context](#needs-context).                                                                                       |

As part of an expression, you may access context information using one of two syntaxes.
- Index syntax: `github['sha']`
- Property dereference syntax: `github.sha`

In order to use property dereference syntax, the property name must:
- start with `a-Z` or `_`.
- be followed by `a-Z` `0-9` `-` or `_`.

### Determining when to use contexts

{% data reusables.github-actions.using-context-or-environment-variables %}

### `github` context

The `github` context contains information about the workflow run and the event that triggered the run. You can read most of the `github` context data in environment variables. For more information about environment variables, see "[Using environment variables](/actions/automating-your-workflow-with-github-actions/using-environment-variables)."

{% data reusables.github-actions.github-context-warning %}
{% data reusables.github-actions.context-injection-warning %}

| Property name             | Тип      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`                  | `объект` | The top-level context available during any job or step in a workflow.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `github.action`           | `строка` | The name of the action currently running. {% data variables.product.prodname_dotcom %} removes special characters or uses the name `run` when the current step runs a script.  If you use the same action more than once in the same job, the name will include a suffix with the sequence number.  For example, the first script you run will have the name `run1`, and the second script will be named `run2`. Similarly, the second invocation of `actions/checkout` will be `actionscheckout2`. |
| `github.action_path`      | `строка` | The path where your action is located. You can use this path to easily access files located in the same repository as your action. This attribute is only supported in composite actions.                                                                                                                                                                                                                                                                                                           |
| `github.actor`            | `строка` | The login of the user that initiated the workflow run.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `github.base_ref`         | `строка` | The `base_ref` or target branch of the pull request in a workflow run. This property is only available when the event that triggers a workflow run is either `pull_request` or `pull_request_target`.                                                                                                                                                                                                                                                                                               |
| `github.event`            | `объект` | The full event webhook payload. For more information, see "[Events that trigger workflows](/articles/events-that-trigger-workflows/)." You can access individual properties of the event using this context.                                                                                                                                                                                                                                                                                        |
| `github.event_name`       | `строка` | The name of the event that triggered the workflow run.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `github.event_path`       | `строка` | The path to the full event webhook payload on the runner.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `github.head_ref`         | `строка` | The `head_ref` or source branch of the pull request in a workflow run. This property is only available when the event that triggers a workflow run is either `pull_request` or `pull_request_target`.                                                                                                                                                                                                                                                                                               |
| `github.job`              | `строка` | The [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) of the current job.                                                                                                                                                                                                                                                                                                                                                                                                |
| `github.ref`              | `строка` | The branch or tag ref that triggered the workflow run. For branches this is the format  `refs/heads/<branch_name>`, and for tags it is `refs/tags/<tag_name>`.                                                                                                                                                                                                                                                                                                                          |
| `github.repository`       | `строка` | The owner and repository name. For example, `Codertocat/Hello-World`.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `github.repository_owner` | `строка` | The repository owner's name. For example, `Codertocat`.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `github.run_id`           | `строка` | {% data reusables.github-actions.run_id_description %}
| `github.run_number`       | `строка` | {% data reusables.github-actions.run_number_description %}
| `github.sha`              | `строка` | The commit SHA that triggered the workflow run.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `github.token`            | `строка` | A token to authenticate on behalf of the GitHub App installed on your repository. This is functionally equivalent to the `GITHUB_TOKEN` secret. For more information, see "[Authenticating with the GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)."                                                                                                                                                                                     |
| `github.workflow`         | `строка` | The name of the workflow. If the workflow file doesn't specify a `name`, the value of this property is the full path of the workflow file in the repository.                                                                                                                                                                                                                                                                                                                                        |
| `github.workspace`        | `строка` | The default working directory for steps and the default location of your repository when using the [`checkout`](https://github.com/actions/checkout) action.                                                                                                                                                                                                                                                                                                                                        |

### `env` context

The `env` context contains environment variables that have been set in a workflow, job, or step. For more information about setting environment variables in your workflow, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)."

The `env` context syntax allows you to use the value of an environment variable in your workflow file. You can use the `env` context in the value of any key in a **step** except for the `id` and `uses` keys. For more information on the step syntax, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)."

If you want to use the value of an environment variable inside a runner, use the runner operating system's normal method for reading environment variables.

| Property name          | Тип      | Description                                                                                      |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------ |
| `env`                  | `объект` | This context changes for each step in a job. You can access this context from any step in a job. |
| `env.<env_name>` | `строка` | The value of a specific environment variable.                                                    |

### `job` context

The `job` context contains information about the currently running job.

| Property name                             | Тип      | Description                                                                                                                                                                                                                          |
| ----------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `задание`                                 | `объект` | This context changes for each job in a workflow run. You can access this context from any step in a job.                                                                                                                             |
| `job.container`                           | `объект` | Information about the job's container. For more information about containers, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)."           |
| `job.container.id`                        | `строка` | The id of the container.                                                                                                                                                                                                             |
| `job.container.network`                   | `строка` | The id of the container network. The runner creates the network used by all containers in a job.                                                                                                                                     |
| `job.services`                            | `объект` | The service containers created for a job. For more information about service containers, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)." |
| `job.services.<service id>.id`      | `строка` | The id of the service container.                                                                                                                                                                                                     |
| `job.services.<service id>.network` | `строка` | The id of the service container network. The runner creates the network used by all containers in a job.                                                                                                                             |
| `job.services.<service id>.ports`   | `объект` | The exposed ports of the service container.                                                                                                                                                                                          |
| `job.status`                              | `строка` | The current status of the job. Possible values are `success`, `failure`, or `cancelled`.                                                                                                                                             |

### `steps` context

The `steps` context contains information about the steps in the current job that have already run.

| Property name                                       | Тип      | Description                                                                                                                                                                                                                                                                                                                                      |
| --------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `steps`                                             | `объект` | This context changes for each step in a job. You can access this context from any step in a job.                                                                                                                                                                                                                                                 |
| `steps.<step id>.outputs`                     | `объект` | The set of outputs defined for the step. For more information, see "[Metadata syntax for {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs)."                                                                                                                                                  |
| `steps.<step id>.conclusion`                  | `строка` | The result of a completed step after [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) is applied. Possible values are `success`, `failure`, `cancelled`, or `skipped`. When a `continue-on-error` step fails, the `outcome` is `failure`, but the final `conclusion` is `success`.  |
| `steps.<step id>.outcome`                     | `строка` | The result of a completed step before [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) is applied. Possible values are `success`, `failure`, `cancelled`, or `skipped`. When a `continue-on-error` step fails, the `outcome` is `failure`, but the final `conclusion` is `success`. |
| `steps.<step id>.outputs.<output name>` | `строка` | The value of a specific output.                                                                                                                                                                                                                                                                                                                  |

### `runner` context

The `runner` context contains information about the runner that is executing the current job.

| Property name       | Тип      | Description                                                                                                                                                                                                                                                                                                                  |
| ------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runner.os`         | `строка` | {% data reusables.actions.runner-os-description %}
| `runner.temp`       | `строка` | {% data reusables.actions.runner-temp-directory-description %}
| `runner.tool_cache` | `строка` | {% ifversion ghae %}For instructions on how to make sure your {% data variables.actions.hosted_runner %} has the required software installed, see "[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images)." {% else %} {% data reusables.actions.runner-tool-cache-description %} {% endif %}

### `needs` context

The `needs` context contains outputs from all jobs that are defined as a dependency of the current job. For more information on defining job dependencies, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)."

| Property name                                      | Тип      | Description                                                                                                               |
| -------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| `needs.<job id>`                             | `объект` | A single job that the current job depends on.                                                                             |
| `needs.<job id>.outputs`                     | `объект` | The set of outputs of a job that the current job depends on.                                                              |
| `needs.<job id>.outputs.<output name>` | `строка` | The value of a specific output for a job that the current job depends on.                                                 |
| `needs.<job id>.result`                      | `строка` | The result of a job that the current job depends on. Possible values are `success`, `failure`, `cancelled`, or `skipped`. |

#### Example printing context information to the log file

To inspect the information that is accessible in each context, you can use this workflow file example.

{% data reusables.github-actions.github-context-warning %}

**.github/workflows/main.yml**
{% raw %}
```yaml
on: push

jobs:
  one:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        env:
          GITHUB_CONTEXT: ${{ toJSON(github) }}
        run: echo "$GITHUB_CONTEXT"
      - name: Dump job context
        env:
          JOB_CONTEXT: ${{ toJSON(job) }}
        run: echo "$JOB_CONTEXT"
      - name: Dump steps context
        env:
          STEPS_CONTEXT: ${{ toJSON(steps) }}
        run: echo "$STEPS_CONTEXT"
      - name: Dump runner context
        env:
          RUNNER_CONTEXT: ${{ toJSON(runner) }}
        run: echo "$RUNNER_CONTEXT"
      - name: Dump strategy context
        env:
          STRATEGY_CONTEXT: ${{ toJSON(strategy) }}
        run: echo "$STRATEGY_CONTEXT"
      - name: Dump matrix context
        env:
          MATRIX_CONTEXT: ${{ toJSON(matrix) }}
        run: echo "$MATRIX_CONTEXT"
```
{% endraw %}

## Context availability

Different contexts are available throughout a workflow run. For example, the `secrets` context may only be used at certain places within a job.

In addition, some functions may only be used in certain places. For example, the `hashFiles` function is not available everywhere.

The following table indicates where each context and special function can be used within a workflow. Unless listed below, a function can be used anywhere.

| Path                       | Context                    | Special functions          |
| -------------------------- | -------------------------- | -------------------------- |
| <code>concurrency</code>  | <code>github</code>  |                            |
| <code>env</code>  | <code>github, secrets</code>  |                            |
| <code>jobs.&lt;job_id&gt;.concurrency</code>  | <code>github, needs, strategy, matrix</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container</code>  | <code>github, needs, strategy, matrix</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container.credentials</code>  | <code>github, needs, strategy, matrix, env, secrets</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> |                            |
| <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix</code> |                            |
| <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env</code> |                            |
| <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets</code> |                            |
| <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix</code> |                            |
| <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> |                            |
| <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs</code> | <code>always, cancelled, success, failure</code> |
| <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix</code> |                            |
| <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> |                            |
| <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix</code> |                            |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix</code> |                            |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> |                            |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> |                            |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | <code>always, cancelled, success, failure, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs</code> |                            |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix</code> |                            |
