---
title: Store information in variables
shortTitle: Use variables
intro: '{% data variables.product.prodname_dotcom %} sets default variables for each {% data variables.product.prodname_actions %} workflow run. You can also set custom variables for use in a single workflow or multiple workflows.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
  - /actions/reference/environment-variables
  - /actions/learn-github-actions/environment-variables
  - /actions/learn-github-actions/variables
  - /actions/writing-workflows/choosing-what-your-workflow-does/variables
  - /actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables
  - /actions/tutorials/store-information-in-variables
  - /actions/how-tos/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

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

The commands in the `run` steps of a workflow, or a referenced action, are processed by the shell you are using on the runner. The instructions in the other parts of a workflow are processed by {% data variables.product.prodname_actions %} and are not sent to the runner. You can use either runner environment variables or contexts in `run` steps, but in the parts of a workflow that are not sent to the runner you must use contexts to access variable values. For more information, see [Using contexts to access variable values](#using-contexts-to-access-variable-values).

Because runner environment variable interpolation is done after a workflow job is sent to a runner machine, you must use the appropriate syntax for the shell that's used on the runner. In this example, the workflow specifies `ubuntu-latest`. By default, Linux runners use the bash shell, so you must use the syntax `$NAME`. By default, Windows runners use PowerShell, so you would use the syntax `$env:NAME`. For more information about shells, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsshell).

## Defining configuration variables for multiple workflows

You can create configuration variables for use across multiple workflows, and can define them at either the [organization](#creating-configuration-variables-for-an-organization), [repository](#creating-configuration-variables-for-a-repository), or [environment](#creating-configuration-variables-for-an-environment) level.

For example, you can use configuration variables to set default values for parameters passed to build tools at an organization level, but then allow repository owners to override these parameters on a case-by-case basis.

When you define configuration variables, they are automatically available in the `vars` context. For more information, see [Using the `vars` context to access configuration variable values](#using-the-vars-context-to-access-configuration-variable-values).

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

## Using contexts to access variable values

{% data reusables.actions.actions-contexts-about-description %} For more information, see [AUTOTITLE](/actions/learn-github-actions/contexts). There are many other contexts that you can use for a variety of purposes in your workflows. For details of where you can use specific contexts within a workflow, see [AUTOTITLE](/actions/learn-github-actions/contexts#context-availability).

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

> [!NOTE]
> Contexts are usually denoted using the dollar sign and curly braces, as {% raw %}`${{ context.property }}`{% endraw %}. In an `if` conditional, the {% raw %}`${{` and `}}`{% endraw %} are optional, but if you use them they must enclose the entire comparison statement, as shown above.

{% data reusables.actions.context-injection-warning %}

### Using the `vars` context to access configuration variable values

Configuration variables can be accessed across the workflow using `vars` context. For more information, see [AUTOTITLE](/actions/learn-github-actions/contexts#vars-context).

{% data reusables.actions.actions-vars-context-example-usage %}

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

 If you generate a value in one step of a job, you can use the value in subsequent steps of the same job by assigning the value to an existing or new environment variable and then writing this to the `GITHUB_ENV` environment file. The environment file can be used directly by an action, or from a shell command in the workflow file by using the `run` keyword. For more information, see [AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable).

 If you want to pass a value from a step in one job in a workflow to a step in another job in the workflow, you can define the value as a job output. You can then reference this job output from a step in another job. For more information, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idoutputs).

## Next steps

For reference information, see [AUTOTITLE](/actions/reference/variables-reference).
