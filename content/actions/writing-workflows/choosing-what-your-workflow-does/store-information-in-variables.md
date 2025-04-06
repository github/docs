---
title: Store information in variables
shortTitle: Variables
intro: '{% data variables.product.prodname_dotcom %} sets default variables for each {% data variables.product.prodname_actions %} workflow run. You can also set custom variables for use in a single workflow or multiple workflows.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
  - /actions/reference/environment-variables
  - /actions/learn-github-actions/environment-variables
  - /actions/learn-github-actions/variables
  - /actions/writing-workflows/choosing-what-your-workflow-does/variables
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## About variables

Variables provide a way to store and reuse non-sensitive configuration information. You can store any configuration data such as compiler flags, usernames, or server names as variables. Variables are interpolated on the runner machine that runs your workflow. Commands that run in actions or workflow steps can create, read, and modify variables.

You can set your own custom variables or use the default environment variables that {% data variables.product.prodname_dotcom %} sets automatically. For more information, see "[Default environment variables](#default-environment-variables)".

You can set a custom variable in two ways.

* To define an environment variable for use in a single workflow, you can use the `env` key in the workflow file.  For more information, see "[Defining environment variables for a single workflow](#defining-environment-variables-for-a-single-workflow)".
* To define a configuration variable across multiple workflows, you can define it at the organization, repository, or environment level. For more information, see "[Defining configuration variables for multiple workflows](#defining-configuration-variables-for-multiple-workflows)".

{% warning %}

**Warning:** By default, variables render unmasked in your build outputs. If you need greater security for sensitive information, such as passwords, use secrets instead. For more information, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)".

{% endwarning %}

## Defining environment variables for a single workflow

To set a custom environment variable for a single workflow, you can define it using the `env` key in the workflow file. The scope of a custom variable set by this method is limited to the element in which it is defined. You can define variables that are scoped for:

* The entire workflow, by using [`env`](/actions/using-workflows/workflow-syntax-for-github-actions#env) at the top level of the workflow file.
* The contents of a job within a workflow, by using [`jobs.<job_id>.env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenv).
* A specific step within a job, by using [`jobs.<job_id>.steps[*].env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsenv).

{% raw %}

```yaml copy
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

You can access `env` variable values using runner environment variables or using contexts. The example above shows three custom variables being used as runner environment variables in an `echo` command: `$DAY_OF_WEEK`, `$Greeting`, and `$First_Name`. The values for these variables are set, and scoped, at the workflow, job, and step level respectively. The interpolation of these variables happens on the runner.

The commands in the `run` steps of a workflow, or a referenced action, are processed by the shell you are using on the runner. The instructions in the other parts of a workflow are processed by {% data variables.product.prodname_actions %} and are not sent to the runner. You can use either runner environment variables or contexts in `run` steps, but in the parts of a workflow that are not sent to the runner you must use contexts to access variable values. For more information, see "[Using contexts to access variable values](#using-contexts-to-access-variable-values)."

Because runner environment variable interpolation is done after a workflow job is sent to a runner machine, you must use the appropriate syntax for the shell that's used on the runner. In this example, the workflow specifies `ubuntu-latest`. By default, Linux runners use the bash shell, so you must use the syntax `$NAME`. By default, Windows runners use PowerShell, so you would use the syntax `$env:NAME`. For more information about shells, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsshell)."

### Naming conventions for environment variables

When you set an environment variable, you cannot use any of the default environment variable names. For a complete list of default environment variables, see "[Default environment variables](#default-environment-variables)" below. If you attempt to override the value of one of these default variables, the assignment is ignored.

{% note %}

**Note**: You can list the entire set of environment variables that are available to a workflow step by using <span style="white-space: nowrap;">`run: env`</span> in a step and then examining the output for the step.

{% endnote %}

## Defining configuration variables for multiple workflows

{% data reusables.actions.configuration-variables-beta-note %}

You can create configuration variables for use across multiple workflows, and can define them at either the [organization](#creating-configuration-variables-for-an-organization), [repository](#creating-configuration-variables-for-a-repository), or [environment](#creating-configuration-variables-for-an-environment) level.

For example, you can use configuration variables to set default values for parameters passed to build tools at an organization level, but then allow repository owners to override these parameters on a case-by-case basis.

When you define configuration variables, they are automatically available in the `vars` context. For more information, see "[Using the `vars` context to access configuration variable values](#using-the-vars-context-to-access-configuration-variable-values)".

### Configuration variable precedence

If a variable with the same name exists at multiple levels, the variable at the lowest level takes precedence. For example, if an organization-level variable has the same name as a repository-level variable, then the repository-level variable takes precedence. Similarly, if an organization, repository, and environment all have a variable with the same name, the environment-level variable takes precedence.

For reusable workflows, the variables from the caller workflow's repository are used. Variables from the repository that contains the called workflow are not made available to the caller workflow.

### Naming conventions for configuration variables

The following rules apply to configuration variable names:

{% data reusables.actions.actions-secrets-and-variables-naming %}

### Creating configuration variables for a repository

{% data reusables.actions.permissions-statement-secrets-variables-repository %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-secrets-and-variables %}
{% data reusables.actions.actions-variables-tab %}
   ![Screenshot of the "Actions secrets and variables" page. The "Variables" tab is outlined in dark orange.](/assets/images/help/repository/actions-variables-tab.png)
1. Click **New repository variable**.
{% data reusables.actions.variable-fields %}
1. Click **Add variable**.

### Creating configuration variables for an environment

{% data reusables.actions.permissions-statement-secrets-environment %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
1. Click on the environment that you want to add a variable to.
1. Under **Environment variables**, click **Add variable**.
{% data reusables.actions.variable-fields %}
1. Click **Add variable**.

### Creating configuration variables for an organization

{% data reusables.actions.actions-secrets-variables-repository-access %}

{% data reusables.actions.permissions-statement-secrets-and-variables-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.actions.sidebar-secrets-and-variables %}
{% data reusables.actions.actions-variables-tab %}

   ![Screenshot of the "Actions secrets and variables" page. The "Variables" tab is outlined in dark orange.](/assets/images/help/repository/actions-variables-tab.png)

   {% data reusables.actions.secrets-and-variables-org-permissions %}
1. Click **New organization variable**.
{% data reusables.actions.variable-fields %}
1. From the **Repository access** dropdown list, choose an access policy.
1. Click **Add variable**.

### Limits for configuration variables

{% ifversion ghes %}

Individual variables are limited to 48 KB in size.

You can store up to 1,000 organization variables, 500 variables per repository, and 100 variables per environment. The total combined size limit for organization and repository variables is 10 MB per workflow run.

A workflow created in a repository can access the following number of variables:

* Up to 500 repository variables, if the total size of repository variables is less than 10 MB. If the total size of repository variables exceeds 10 MB, only the repository variables that fall below the limit will be available (as sorted alphabetically by variable name).
* Up to 1,000 organization variables, if the total combined size of repository and organization variables is less than 10 MB. If the total combined size of organization and repository variables exceeds 10 MB, only the organization variables that fall below that limit will be available (after accounting for repository variables and as sorted alphabetically by variable name).
* Up to 100 environment-level variables.

{% note %}

**Note**: Environment-level variables do not count toward the 10 MB total size limit. If you exceed the combined size limit for repository and organization variables and still need additional variables, you can use an environment and define additional variables in the environment.

{% endnote %}

{% else %}

Individual variables are limited to 48 KB in size.

You can store up to 1,000 organization variables, 500 variables per repository, and 100 variables per environment. The total combined size limit for organization and repository variables is 256 KB per workflow run.

A workflow created in a repository can access the following number of variables:

* Up to 500 repository variables, if the total size of repository variables is less than 256 KB. If the total size of repository variables exceeds 256 KB, only the repository variables that fall below the limit will be available (as sorted alphabetically by variable name).
* Up to 1,000 organization variables, if the total combined size of repository and organization variables is less than 256 KB. If the total combined size of organization and repository variables exceeds 256 KB, only the organization variables that fall below that limit will be available (after accounting for repository variables and as sorted alphabetically by variable name).
* Up to 100 environment-level variables.

{% note %}

**Note**: Environment-level variables do not count toward the 256 KB total size limit. If you exceed the combined size limit for repository and organization variables and still need additional variables, you can use an environment and define additional variables in the environment.

{% endnote %}

{% endif %}

## Using contexts to access variable values

{% data reusables.actions.actions-contexts-about-description %} For more information, see "[AUTOTITLE](/actions/learn-github-actions/contexts)". There are many other contexts that you can use for a variety of purposes in your workflows. For details of where you can use specific contexts within a workflow, see "[AUTOTITLE](/actions/learn-github-actions/contexts#context-availability)."

You can access environment variable values using the `env` context and configuration variable values using the `vars` context.

### Using the `env` context to access environment variable values

In addition to runner environment variables, {% data variables.product.prodname_actions %} allows you to set and read `env` key values using contexts. Environment variables and contexts are intended for use at different points in the workflow.

The `run` steps in a workflow, or in a referenced action, are processed by a runner. As a result, you can use runner environment variables here, using the appropriate syntax for the shell you are using on the runner - for example, `$NAME` for the bash shell on a Linux runner, or `$env:NAME` for PowerShell on a Windows runner. In most cases you can also use contexts, with the syntax {% raw %}`${{ CONTEXT.PROPERTY }}`{% endraw %}, to access the same value. The difference is that the context will be interpolated and replaced by a string before the job is sent to a runner.

However, you cannot use runner environment variables in parts of a workflow that are processed by {% data variables.product.prodname_actions %} and are not sent to the runner. Instead, you must use contexts. For example, an `if` conditional, which determines whether a job or step is sent to the runner, is always processed by {% data variables.product.prodname_actions %}. You must therefore use a context in an `if` conditional statement to access the value of an variable.

{% raw %}

```yaml copy
name: Conditional env variable

on: workflow_dispatch

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

In this modification of the earlier example, we've introduced an `if` conditional. The workflow step is now only run if `DAY_OF_WEEK` is set to "Monday". We access this value from the `if` conditional statement by using the [`env` context](/actions/learn-github-actions/contexts#env-context). The `env` context is not required for the variables referenced within the `run` command. They are referenced as runner environment variables and are interpolated after the job is received by the runner. We could, however, have chosen to interpolate those variables before sending the job to the runner, by using contexts. The resulting output would be the same.

{% raw %}

```yaml
run: echo "${{ env.Greeting }} ${{ env.First_Name }}. Today is ${{ env.DAY_OF_WEEK }}!"
```

{% endraw %}

{% note %}

**Note**: Contexts are usually denoted using the dollar sign and curly braces, as {% raw %}`${{ context.property }}`{% endraw %}. In an `if` conditional, the {% raw %}`${{` and `}}`{% endraw %} are optional, but if you use them they must enclose the entire comparison statement, as shown above.

{% endnote %}

You will commonly use either the `env` or `github` context to access variable values in parts of the workflow that are processed before jobs are sent to runners.

| Context | Use case | Example |
| --- | --- | --- |
| `env` | Reference custom variables defined in the workflow. | <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span> |
| `github` | Reference information about the workflow run and the event that triggered the run. | <span style="white-space: nowrap;">{% raw %}`${{ github.repository }}`{% endraw %}</span> |

{% data reusables.actions.context-injection-warning %}

### Using the `vars` context to access configuration variable values

Configuration variables can be accessed across the workflow using `vars` context. For more information, see "[AUTOTITLE](/actions/learn-github-actions/contexts#vars-context)".

{% data reusables.actions.actions-vars-context-example-usage %}

## Default environment variables

The default environment variables that {% data variables.product.prodname_dotcom %} sets are available to every step in a workflow.

Because default environment variables are set by {% data variables.product.prodname_dotcom %} and not defined in a workflow, they are not accessible through the `env` context. However, most of the default variables have a corresponding, and similarly named, context property. For example, the value of the `GITHUB_REF` variable can be read during workflow processing using the {% raw %}`${{ github.ref }}`{% endraw %} context property.

{% data reusables.actions.environment-variables-are-fixed %} For more information about setting environment variables, see "[Defining environment variables for a single workflow](#defining-environment-variables-for-a-single-workflow)" and "[AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable)."

We strongly recommend that actions use variables to access the filesystem rather than using hardcoded file paths. {% data variables.product.prodname_dotcom %} sets variables for actions to use in all runner environments.

| Variable | Description |
| ---------|------------ |
| `CI` | Always set to `true`. |
| `GITHUB_ACTION` | The name of the action currently running, or the [`id`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsid) of a step. For example, for an action, `__repo-owner_name-of-action-repo`.<br><br>{% data variables.product.prodname_dotcom %} removes special characters, and uses the name `__run` when the current step runs a script without an `id`. If you use the same script or action more than once in the same job, the name will include a suffix that consists of the sequence number preceded by an underscore. For example, the first script you run will have the name `__run`, and the second script will be named `__run_2`. Similarly, the second invocation of `actions/checkout` will be `actionscheckout2`. |
| `GITHUB_ACTION_PATH` | The path where an action is located. This property is only supported in composite actions. You can use this path to change directories to where the action is located and access other files in that same repository. For example, `/home/runner/work/_actions/repo-owner/name-of-action-repo/v1`. |
| `GITHUB_ACTION_REPOSITORY` | For a step executing an action, this is the owner and repository name of the action. For example, `actions/checkout`. |
| `GITHUB_ACTIONS` | Always set to `true` when {% data variables.product.prodname_actions %} is running the workflow. You can use this variable to differentiate when tests are being run locally or by {% data variables.product.prodname_actions %}. |
| `GITHUB_ACTOR` | The name of the person or app that initiated the workflow. For example, `octocat`. |
| `GITHUB_ACTOR_ID` | {% data reusables.actions.actor_id-description %} |
| `GITHUB_API_URL` | Returns the API URL. For example: `{% data variables.product.rest_url %}`. |
| `GITHUB_BASE_REF` | The name of the base ref or target branch of the pull request in a workflow run. This is only set when the event that triggers a workflow run is either `pull_request` or `pull_request_target`. For example, `main`. |
| `GITHUB_ENV` | The path on the runner to the file that sets variables from workflow commands. The path to this file is unique to the current step and changes for each step in a job. For example, `/home/runner/work/_temp/_runner_file_commands/set_env_87406d6e-4979-4d42-98e1-3dab1f48b13a`. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable)." |
| `GITHUB_EVENT_NAME` | The name of the event that triggered the workflow. For example, `workflow_dispatch`. |
| `GITHUB_EVENT_PATH` | The path to the file on the runner that contains the full event webhook payload. For example, `/github/workflow/event.json`. |
| `GITHUB_GRAPHQL_URL` | Returns the GraphQL API URL. For example: `{% data variables.product.graphql_url %}`. |
| `GITHUB_HEAD_REF` | The head ref or source branch of the pull request in a workflow run. This property is only set when the event that triggers a workflow run is either `pull_request` or `pull_request_target`. For example, `feature-branch-1`. |
| `GITHUB_JOB` | The [job_id](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_id) of the current job. For example, `greeting_job`. |
| `GITHUB_OUTPUT` | The path on the runner to the file that sets the current step's outputs from workflow commands. The path to this file is unique to the current step and changes for each step in a job. For example, `/home/runner/work/_temp/_runner_file_commands/set_output_a50ef383-b063-46d9-9157-57953fc9f3f0`. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter)." |
| `GITHUB_PATH` | The path on the runner to the file that sets system `PATH` variables from workflow commands. The path to this file is unique to the current step and changes for each step in a job. For example, `/home/runner/work/_temp/_runner_file_commands/add_path_899b9445-ad4a-400c-aa89-249f18632cf5`. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-system-path)." |
| `GITHUB_REF` | {% data reusables.actions.ref-description %} |
| `GITHUB_REF_NAME` | {% data reusables.actions.ref_name-description %} |
| `GITHUB_REF_PROTECTED` | {% data reusables.actions.ref_protected-description %} |
| `GITHUB_REF_TYPE` | {% data reusables.actions.ref_type-description %} |
| `GITHUB_REPOSITORY` | The owner and repository name. For example, `octocat/Hello-World`. |
| `GITHUB_REPOSITORY_ID` | {% data reusables.actions.repository_id-description %} |
| `GITHUB_REPOSITORY_OWNER` | The repository owner's name. For example, `octocat`. |
| `GITHUB_REPOSITORY_OWNER_ID` | {% data reusables.actions.repository_owner_id-description %} |
| `GITHUB_RETENTION_DAYS` | The number of days that workflow run logs and artifacts are kept. For example, `90`. |
| `GITHUB_RUN_ATTEMPT` | A unique number for each attempt of a particular workflow run in a repository. This number begins at 1 for the workflow run's first attempt, and increments with each re-run. For example, `3`. |
| `GITHUB_RUN_ID` | {% data reusables.actions.run_id_description %} For example, `1658821493`. |
| `GITHUB_RUN_NUMBER` | {% data reusables.actions.run_number_description %} For example, `3`. |
| `GITHUB_SERVER_URL`| The URL of the {% data variables.product.product_name %} server. For example: `https://{% data variables.product.product_url %}`. |
| `GITHUB_SHA` | {% data reusables.actions.github_sha_description %} |
| `GITHUB_STEP_SUMMARY` | The path on the runner to the file that contains job summaries from workflow commands. The path to this file is unique to the current step and changes for each step in a job. For example, `/home/runner/_layout/_work/_temp/_runner_file_commands/step_summary_1cb22d7f-5663-41a8-9ffc-13472605c76c`. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary)." |
| `GITHUB_TRIGGERING_ACTOR` | {% data reusables.actions.github-triggering-actor-description %} |
| `GITHUB_WORKFLOW` | The name of the workflow. For example, `My test workflow`. If the workflow file doesn't specify a `name`, the value of this variable is the full path of the workflow file in the repository. |
| `GITHUB_WORKFLOW_REF` | {% data reusables.actions.workflow-ref-description %} |
| `GITHUB_WORKFLOW_SHA` | {% data reusables.actions.workflow-sha-description %} |
| `GITHUB_WORKSPACE` | The default working directory on the runner for steps, and the default location of your repository when using the [`checkout`](https://github.com/actions/checkout) action. For example, `/home/runner/work/my-repo-name/my-repo-name`. |
| `RUNNER_ARCH` | {% data reusables.actions.runner-arch-description %} |
| `RUNNER_DEBUG` | {% data reusables.actions.runner-debug-description %} |
| `RUNNER_ENVIRONMENT` | {% data reusables.actions.runner-environment-description %} |
| `RUNNER_NAME` | {% data reusables.actions.runner-name-description %} For example, `Hosted Agent` |
| `RUNNER_OS` | {% data reusables.actions.runner-os-description %} For example, `Windows` |
| `RUNNER_TEMP` | {% data reusables.actions.runner-temp-directory-description %} For example, `D:\a\_temp` |
| `RUNNER_TOOL_CACHE` | {% data reusables.actions.runner-tool-cache-description %} For example, `C:\hostedtoolcache\windows` |

{% note %}

**Note:** If you need to use a workflow run's URL from within a job, you can combine these variables: `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`

{% endnote %}

## Detecting the operating system

You can write a single workflow file that can be used for different operating systems by using the `RUNNER_OS` default environment variable and the corresponding context property <span style="white-space: nowrap;">{% raw %}`${{ runner.os }}`{% endraw %}</span>. For example, the following workflow could be run successfully if you changed the operating system from `macos-latest` to `windows-latest` without having to alter the syntax of the environment variables, which differs depending on the shell being used by the runner.

{% raw %}

```yaml copy
on: workflow_dispatch

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

In this example, the two `if` statements check the `os` property of the `runner` context to determine the operating system of the runner. `if` conditionals are processed by {% data variables.product.prodname_actions %}, and only steps where the check resolves as `true` are sent to the runner. Here one of the checks will always be `true` and the other `false`, so only one of these steps is sent to the runner. Once the job is sent to the runner, the step is executed and the environment variable in the `echo` command is interpolated using the appropriate syntax (`$env:NAME` for PowerShell on Windows, and `$NAME` for bash and sh on Linux and macOS). In this example, the statement `runs-on: macos-latest` means that the second step will be run.

## Passing values between steps and jobs in a workflow

 If you generate a value in one step of a job, you can use the value in subsequent steps of the same job by assigning the value to an existing or new environment variable and then writing this to the `GITHUB_ENV` environment file. The environment file can be used directly by an action, or from a shell command in the workflow file by using the `run` keyword. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable)."

 If you want to pass a value from a step in one job in a workflow to a step in another job in the workflow, you can define the value as a job output. You can then reference this job output from a step in another job. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idoutputs)."
