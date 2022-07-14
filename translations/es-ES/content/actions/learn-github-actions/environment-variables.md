---
title: Environment variables
intro: '{% data variables.product.prodname_dotcom %} sets default environment variables for each {% data variables.product.prodname_actions %} workflow run. You can also set custom environment variables in your workflow file.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
  - /actions/reference/environment-variables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About environment variables

You can use environment variables to store information that you want to reference in your workflow. You reference environment variables within a workflow step or an action, and the variables are interpolated on the runner machine that runs your workflow. Commands that run in actions or workflow steps can create, read, and modify environment variables.

You can set your own custom environment variables, you can use the default environment variables that {% data variables.product.prodname_dotcom %} sets automatically, and you can also use any other environment variables that are set in the working environment on the runner. Environment variables are case-sensitive. 

To set a custom environment variable, you must define it in the workflow file. The scope of a custom environment variable is limited to the element in which it is defined. You can define environment variables that are scoped for:

* The entire workflow, by using [`env`](/actions/using-workflows/workflow-syntax-for-github-actions#env) at the top level of the workflow file.
* The contents of a job within a workflow, by using [`jobs.<job_id>.env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenv).
* A specific step within a job, by using [`jobs.<job_id>.steps[*].env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsenv).

{% raw %}
```yaml
name: Greeting on variable day

on:
  workflow_dispatch

env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

The example above shows three custom environment variables being used in an `echo` command: `$DAY_OF_WEEK`, `$Greeting`, and  `$First_Name`. The values for these environment variables are set, and scoped, at the workflow, job, and step level respectively. 

Because environment variable interpolation is done after a workflow job is sent to a runner machine, you must use the appropriate syntax for the shell that's used on the runner. In this example, the workflow specifies `ubuntu-latest`. By default, Linux runners use the bash shell, so you must use the syntax `$NAME`. If the workflow specified a Windows runner, you would use the syntax for PowerShell, `$env:NAME`. For more information about shells, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsshell)."

{% note %}

**Note**: You can list the entire set of environment variables that are available to a workflow step by using <span style="white-space: nowrap;">`run: env`</span> in a step and then examining the output for the step.

{% endnote %}

## Using contexts to access environment variable values

In addition to environment variables, {% data variables.product.prodname_actions %} also allows you to set and read values using contexts. Environment variables and contexts are intended for use at different points in the workflow.

Environment variables are always interpolated on the virtual machine runner. However, parts of a workflow are processed by {% data variables.product.prodname_actions %} and are not sent to the runner. You cannot use environment variables in these parts of a workflow file. Instead, you can use contexts. For example, an `if` conditional, which determines whether a job or step is sent to the runner, is always processed by {% data variables.product.prodname_actions %}. You can use a context in an `if` conditional statement to access the value of an environment variable.

{% raw %}
```yaml
env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        if: ${{ env.DAY_OF_WEEK == 'Monday' }}
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

In this modification of the first example, we've introduced an `if` conditional. The workflow step is now only run if `DAYS_OF_WEEK` is set to "Monday". We access this value from the `if` conditional statement by using the [`env` context](/actions/learn-github-actions/contexts#env-context).

{% note %}

**Note**: Contexts are usually denoted using the dollar sign and curly braces, as {% raw %}`${{ context.property }}`{% endraw %}. In an `if` conditional, the {% raw %}`${{` and `}}`{% endraw %} are optional, but if you use them they must enclose the entire comparison statement, as shown above. 

{% endnote %}

You will commonly use either the `env` or `github` context to access environment variable values in parts of the workflow that are processed before jobs are sent to runners. 


| Context | Use case | Example |
| --- | --- | --- |
| `env` | Reference custom environment variables defined in the workflow. | <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span> |
| `github` | Reference information about the workflow run and the event that triggered the run. | <span style="white-space: nowrap;">{% raw %}`${{ github.repository }}`{% endraw %}</span> |


 
There are many other contexts that you can use for a variety of purposes in your workflows. For more information, see "[Contexts](/actions/learn-github-actions/contexts)." For details of where you can use specific contexts within a workflow, see "[Context availability](/actions/learn-github-actions/contexts#context-availability)."

### Other types of variables

In most places in a workflow, the only types of variables that you can use are either environment variables, such as `$MY_VARIABLE`, or the equivalent context property, such as <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span>. Exceptions are:

* Inputs for the `workflow_call` and `workflow_dispatch` events, which allow you to pass values to a workflow. For more information, see [`on.workflow_call.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callinputs) and [`on.workflow_dispatch.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_dispatchinputs).
* Job outputs, which allow you to pass values between jobs in a workflow. For more information, see [`jobs.<job_id>.outputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs).
* The variables in a format expression, which allow you to replace parts of a string. For more information, see [`format`](/actions/learn-github-actions/expressions#format).

## Naming conventions for environment variables

When you set a custom environment variable, you cannot use any of the default environment variable names. For a complete list of these, see "[Default environment variables](#default-environment-variables)" below. If you attempt to override the value of one of these default environment variables, the assignment is ignored.

Any new environment variables you set that point to a location on the filesystem should have a `_PATH` suffix. The `HOME`, `GITHUB_ENV`, and `GITHUB_WORKSPACE` default environment variables are exceptions to this convention.

## Default environment variables

The default environment variables that {% data variables.product.prodname_dotcom %} sets are available to every step in a workflow. 

We strongly recommend that actions use environment variables to access the filesystem rather than using hardcoded file paths. {% data variables.product.prodname_dotcom %} sets environment variables for actions to use in all runner environments.

| Environment variable | Description |
| ---------------------|------------ |
| `CI` | Always set to `true`. |
| `GITHUB_ACTION` | The name of the action currently running, or the [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) of a step. For example, for an action, `__repo-owner_name-of-action-repo`.<br><br>{% data variables.product.prodname_dotcom %} removes special characters, and uses the name `__run` when the current step runs a script without an `id`. If you use the same script or action more than once in the same job, the name will include a suffix that consists of the sequence number preceded by an underscore. For example, the first script you run will have the name `__run`, and the second script will be named `__run_2`. Similarly, the second invocation of `actions/checkout` will be `actionscheckout2`. |
| `GITHUB_ACTION_PATH` | The path where an action is located. This property is only supported in composite actions. You can use this path to access files located in the same repository as the action. For example, `/home/runner/work/_actions/repo-owner/name-of-action-repo/v1`. |
| `GITHUB_ACTION_REPOSITORY` | For a step executing an action, this is the owner and repository name of the action. For example, `actions/checkout`. |
| `GITHUB_ACTIONS` | Always set to `true` when {% data variables.product.prodname_actions %} is running the workflow. You can use this variable to differentiate when tests are being run locally or by {% data variables.product.prodname_actions %}.
| `GITHUB_ACTOR` | The name of the person or app that initiated the workflow. For example, `octocat`. |
| `GITHUB_API_URL` | Returns the API URL. For example: `{% data variables.product.api_url_code %}`.
| `GITHUB_BASE_REF` | The name of the base ref or target branch of the pull request in a workflow run. This is only set when the event that triggers a workflow run is either `pull_request` or `pull_request_target`. For example, `main`. |
| `GITHUB_ENV` | The path on the runner to the file that sets environment variables from workflow commands. This file is unique to the current step and changes for each step in a job. For example, `/home/runner/work/_temp/_runner_file_commands/set_env_87406d6e-4979-4d42-98e1-3dab1f48b13a`. For more information, see "[Workflow commands for {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable)." | 
| `GITHUB_EVENT_NAME` | The name of the event that triggered the workflow. For example, `workflow_dispatch`. |
| `GITHUB_EVENT_PATH` | The path to the file on the runner that contains the full event webhook payload. For example, `/github/workflow/event.json`. |
| `GITHUB_GRAPHQL_URL` | Returns the GraphQL API URL. For example: `{% data variables.product.graphql_url_code %}`.
| `GITHUB_HEAD_REF` | The head ref or source branch of the pull request in a workflow run. This property is only set when the event that triggers a workflow run is either `pull_request` or `pull_request_target`. For example, `feature-branch-1`. |
| `GITHUB_JOB` | The [job_id](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) of the current job. For example, `greeting_job`. |
| `GITHUB_PATH` | The path on the runner to the file that sets system `PATH` variables from workflow commands. This file is unique to the current step and changes for each step in a job.  For example, `/home/runner/work/_temp/_runner_file_commands/add_path_899b9445-ad4a-400c-aa89-249f18632cf5`. For more information, see "[Workflow commands for {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-system-path)." |
| `GITHUB_REF` | {% data reusables.actions.ref-description %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5338 %}
| `GITHUB_REF_NAME` | {% data reusables.actions.ref_name-description %} For example, `feature-branch-1`.|
| `GITHUB_REF_PROTECTED` | {% data reusables.actions.ref_protected-description %} |
| `GITHUB_REF_TYPE` | {% data reusables.actions.ref_type-description %} |
{%- endif %}
| `GITHUB_REPOSITORY` | The owner and repository name. For example, `octocat/Hello-World`. |
| `GITHUB_REPOSITORY_OWNER` | The repository owner's name. For example, `octocat`. |
| `GITHUB_RETENTION_DAYS` | The number of days that workflow run logs and artifacts are kept. For example, `90`. |
| `GITHUB_RUN_ATTEMPT` | A unique number for each attempt of a particular workflow run in a repository. This number begins at 1 for the workflow run's first attempt, and increments with each re-run. For example, `3`. |
| `GITHUB_RUN_ID` | {% data reusables.actions.run_id_description %} For example, `1658821493`. |
| `GITHUB_RUN_NUMBER` | {% data reusables.actions.run_number_description %} For example, `3`. |
| `GITHUB_SERVER_URL`| The URL of the {% data variables.product.product_name %} server. For example: `https://{% data variables.product.product_url %}`.
| `GITHUB_SHA` | The commit SHA that triggered the workflow. The value of this commit SHA depends on the event that triggered the workflow. For more information, see [Events that trigger workflows](/actions/using-workflows/events-that-trigger-workflows). For example, `ffac537e6cbbf934b08745a378932722df287a53`. |
{%- ifversion actions-job-summaries %}
| `GITHUB_STEP_SUMMARY` | The path on the runner to the file that contains job summaries from workflow commands. This file is unique to the current step and changes for each step in a job. For example, `/home/rob/runner/_layout/_work/_temp/_runner_file_commands/step_summary_1cb22d7f-5663-41a8-9ffc-13472605c76c`. For more information, see "[Workflow commands for {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary)." |
{%- endif %}
| `GITHUB_WORKFLOW` | The name of the workflow. For example, `My test workflow`. If the workflow file doesn't specify a `name`, the value of this variable is the full path of the workflow file in the repository. |
| `GITHUB_WORKSPACE` | The default working directory on the runner for steps, and the default location of your repository when using the [`checkout`](https://github.com/actions/checkout) action. For example, `/home/runner/work/my-repo-name/my-repo-name`. |
{%- ifversion actions-runner-arch-envvars %}
| `RUNNER_ARCH` | {% data reusables.actions.runner-arch-description %}
{%- endif %} |
| `RUNNER_NAME` | {% data reusables.actions.runner-name-description %} For example, `Hosted Agent` |
| `RUNNER_OS` | {% data reusables.actions.runner-os-description %} For example, `Windows` |
| `RUNNER_TEMP` | {% data reusables.actions.runner-temp-directory-description %} For example, `D:\a\_temp` |
{% ifversion not ghae %}| `RUNNER_TOOL_CACHE` | {% data reusables.actions.runner-tool-cache-description %} For example, `C:\hostedtoolcache\windows` |{% endif %}

{% note %}

**Note:** 

* If you need to use a workflow run's URL from within a job, you can combine these environment variables: `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`
* Most of the default environment variables have a corresponding, and similarly named, context property. For example, the value of the `GITHUB_REF` environment variable can be read during workflow processing using the {% raw %}`${{ github.ref }}`{% endraw %} context property.

{% endnote %}

## Detecting the operating system

You can write a single workflow file that can be used for different operating systems by using the `RUNNER_OS` default environment variable and the corresponding context property <span style="white-space: nowrap;">{% raw %}`${{ runner.os }}`{% endraw %}</span>. For example, the following workflow could be run successfully if you changed the operating system from `macos-latest` to `windows-latest` without having to alter the syntax of the environment variables, which differs depending on the shell being used by the runner.

{% raw %}
```yaml
jobs:
  if-Windows-else:
    runs-on: macos-latest
    steps:
      - name: condition 1
        if: runner.os == 'Windows'
        run: echo "The operating system on the runner is $env:RUNNER_OS."
      - name: condition 2
        if: runner.os != 'Windows'
        run: echo "The operating system on the runner is not Windows, it's $RUNNER_OS."
```
{% endraw %}

In this example, the two `if` statements check the `os` property of the `runner` context to determine the operating system of the runner. `if` conditionals are processed by {% data variables.product.prodname_actions %}, and only steps where the check resolves as `true` are sent to the runner. Here one of the checks will always be `true` and the other `false`, so only one of these steps is sent to the runner. Once the job is sent to the runner, the step is executed and the environment variable in the `echo` command is interpolated using the appropriate syntax (`$env:NAME` for PowerShell on Windows, and `$NAME` for bash and sh on Linux and MacOS). In this example, the statement `runs-on: macos-latest` means that the second step will be run.

## Passing values between steps and jobs in a workflow

 If you generate a value in one step of a job, you can use the value in subsequent steps of the same job by assigning the value to an existing or new environment variable and then writing this to the `GITHUB_ENV` environment file. The environment file can be used directly by an action, or from a shell command in the workflow file by using the `run` keyword. For more information, see "[Workflow commands for {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)." 
 
 If you want to pass a value from a step in one job in a workflow to a step in another job in the workflow, you can define the value as a job output. You can then reference this job output from a step in another job. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)." 
 
