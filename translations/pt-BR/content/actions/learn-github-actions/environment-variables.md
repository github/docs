---
title: Variáveis de ambiente
intro: '{% data variables.product.prodname_dotcom %} define as variáveis do ambiente para cada execução do fluxo de trabalho {% data variables.product.prodname_actions %}. Você também pode definir variáveis de ambiente personalizadas no seu arquivo do fluxo de trabalho.'
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

## Sobre as variáveis de ambiente

You can use environment variables to store information that you want to reference in your workflow. You reference environment variables within a workflow step or an action, and the variables are interpolated on the runner machine that runs your workflow. Commands that run in actions or workflow steps can create, read, and modify environment variables.

You can set your own custom environment variables, you can use the default environment variables that {% data variables.product.prodname_dotcom %} sets automatically, and you can also use any other environment variables that are set in the working environment on the runner. As variáveis de ambiente diferenciam entre maiúsculas e minúsculas.

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


| Contexto | Use case                                                                           | Exemplo                                                                                   |
| -------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `env`    | Reference custom environment variables defined in the workflow.                    | <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span>   |
| `github` | Reference information about the workflow run and the event that triggered the run. | <span style="white-space: nowrap;">{% raw %}`${{ github.repository }}`{% endraw %}</span> |



There are many other contexts that you can use for a variety of purposes in your workflows. Para obter mais informações, consulte "[Contextos](/actions/learn-github-actions/contexts)". For details of where you can use specific contexts within a workflow, see "[Context availability](/actions/learn-github-actions/contexts#context-availability)."

### Other types of variables

In most places in a workflow, the only types of variables that you can use are either environment variables, such as `$MY_VARIABLE`, or the equivalent context property, such as <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span>. Exceptions are:

* Inputs for the `workflow_call` and `workflow_dispatch` events, which allow you to pass values to a workflow. For more information, see [`on.workflow_call.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callinputs) and [`on.workflow_dispatch.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_dispatchinputs).
* Job outputs, which allow you to pass values between jobs in a workflow. For more information, see [`jobs.<job_id>.outputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs).
* The variables in a format expression, which allow you to replace parts of a string. For more information, see [`format`](/actions/learn-github-actions/expressions#format).

## Convenções de nomenclatura para variáveis de ambiente

When you set a custom environment variable, you cannot use any of the default environment variable names. For a complete list of these, see "[Default environment variables](#default-environment-variables)" below. Se você tentar substituir o valor de uma dessas variáveis de ambiente padrão, a atribuição será ignorada.

Qualquer variável de ambiente nova que você definir e apontar para um local no sistema de arquivos deve ter um sufixo `_PATH`. The `HOME`, `GITHUB_ENV`, and `GITHUB_WORKSPACE` default environment variables are exceptions to this convention.

## Variáveis padrão de ambiente

The default environment variables that {% data variables.product.prodname_dotcom %} sets are available to every step in a workflow.

É altamente recomendável que as ações usem as variáveis do ambiente para acessar o sistema do arquivo em vez de usar os caminhos do arquivo com codificação rígida. {% data variables.product.prodname_dotcom %} define as variáveis de ambiente para ações a serem usadas em todos os ambientes executores.

| Variável de ambiente       | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `CI`                       | Definido sempre como `verdadeiro`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `GITHUB_ACTION`            | O nome da ação atualmente em execução ou o [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) de uma etapa. For example, for an action, `__repo-owner_name-of-action-repo`.<br><br>{% data variables.product.prodname_dotcom %} removes special characters, and uses the name `__run` when the current step runs a script without an `id`. If you use the same script or action more than once in the same job, the name will include a suffix that consists of the sequence number preceded by an underscore. Por exemplo, o primeiro script que você executar terá o nome `__run` e o segundo script será denominado `__run_2`. Da mesma forma, a segunda invocação de `actions/checkout` será `actionscheckout2`. |
| `GITHUB_ACTION_PATH`       | O caminho onde uma ação está localizada. Esta propriedade só é compatível com ações compostas. Você pode usar este caminho para acessar arquivos localizados no mesmo repositório da ação. For example, `/home/runner/work/_actions/repo-owner/name-of-action-repo/v1`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `GITHUB_ACTION_REPOSITORY` | Para uma etpa que executa uma ação, este é o nome do proprietário e do repositório da ação. Por exemplo, `actions/checkout`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `GITHUB_ACTIONS`           | Definido sempre como `verdadeiro` quando {% data variables.product.prodname_actions %} estiver executando o fluxo de trabalho. Você pode usar esta variável para diferenciar quando os testes estão sendo executados localmente ou por {% data variables.product.prodname_actions %}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `GITHUB_ACTOR`             | Nome da pessoa ou aplicativo que iniciou o fluxo de trabalho. Por exemplo, `octocat`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `GITHUB_API_URL`           | Retorna a URL da API. For example: `{% data variables.product.api_url_code %}`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `GITHUB_BASE_REF`          | The name of the base ref or target branch of the pull request in a workflow run. This is only set when the event that triggers a workflow run is either `pull_request` or `pull_request_target`. For example, `main`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `GITHUB_ENV`               | The path on the runner to the file that sets environment variables from workflow commands. This file is unique to the current step and changes for each step in a job. For example, `/home/runner/work/_temp/_runner_file_commands/set_env_87406d6e-4979-4d42-98e1-3dab1f48b13a`. Para obter mais informações, consulte "[Comandos do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable)".                                                                                                                                                                                                                                                             |
| `GITHUB_EVENT_NAME`        | The name of the event that triggered the workflow. For example, `workflow_dispatch`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `GITHUB_EVENT_PATH`        | O caminho para o arquivo no executor que contém a carga completa do webhook do evento. Por exemplo, `/github/workflow/event.json`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `GITHUB_GRAPHQL_URL`       | Retorna a URL API do GraphQL. For example: `{% data variables.product.graphql_url_code %}`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `GITHUB_HEAD_REF`          | The head ref or source branch of the pull request in a workflow run. This property is only set when the event that triggers a workflow run is either `pull_request` or `pull_request_target`. For example, `feature-branch-1`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `GITHUB_JOB`               | O [job_id](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) do trabalho atual. For example, `greeting_job`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `GITHUB_PATH`              | The path on the runner to the file that sets system `PATH` variables from workflow commands. This file is unique to the current step and changes for each step in a job.  For example, `/home/runner/work/_temp/_runner_file_commands/add_path_899b9445-ad4a-400c-aa89-249f18632cf5`. Para obter mais informações, consulte "[Comandos do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-system-path)."                                                                                                                                                                                                                                                                    |
| `GITHUB_REF`               | Branch ou ref tag que acionou a execução do fluxo de trabalho. For branches this is the format `refs/heads/<branch_name>`, and for tags it is `refs/tags/<tag_name>`. This variable is only set if a branch or tag is available for the event type. Por exemplo, `refs/heads/feature-branch-1`.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5338 %}
| `GITHUB_REF_NAME` | {% data reusables.actions.ref_name-description %} For example, `feature-branch-1`.| | `GITHUB_REF_PROTECTED` | {% data reusables.actions.ref_protected-description %} | | `GITHUB_REF_TYPE` | {% data reusables.actions.ref_type-description %}
{%- endif %}
| `GITHUB_REPOSITORY` | The owner and repository name. Por exemplo, `octocat/Hello-World`. | | `GITHUB_REPOSITORY_OWNER` | The repository owner's name. Por exemplo, `octocat`. | | `GITHUB_RETENTION_DAYS` | The number of days that workflow run logs and artifacts are kept. For example, `90`. | | `GITHUB_RUN_ATTEMPT` | A unique number for each attempt of a particular workflow run in a repository. Este número começa em 1 para a primeira tentativa de execução do fluxo de trabalho e aumenta a cada nova execução. For example, `3`. | | `GITHUB_RUN_ID` | {% data reusables.github-actions.run_id_description %} For example, `1658821493`. | | `GITHUB_RUN_NUMBER` | {% data reusables.github-actions.run_number_description %} For example, `3`. | | `GITHUB_SERVER_URL`| The URL of the {% data variables.product.product_name %} server. For example: `https://{% data variables.product.product_url %}`. | `GITHUB_SHA` | The commit SHA that triggered the workflow. Por exemplo, `ffac537e6cbbf934b08745a378932722df287a53`. | | `GITHUB_WORKFLOW` | The name of the workflow. For example, `My test workflow`. If the workflow file doesn't specify a `name`, the value of this variable is the full path of the workflow file in the repository. | | `GITHUB_WORKSPACE` | The default working directory on the runner for steps, and the default location of your repository when using the [`checkout`](https://github.com/actions/checkout) action. Por exemplo, `/home/runner/work/my-repo-name/my-repo-name`. |
{%- if actions-runner-arch-envvars %}
| `RUNNER_ARCH` | {% data reusables.actions.runner-arch-description %}
{%- endif %}
| `RUNNER_NAME` | {% data reusables.actions.runner-name-description %} For example, `Hosted Agent` | | `RUNNER_OS` | {% data reusables.actions.runner-os-description %} For example, `Windows` | | `RUNNER_TEMP` | {% data reusables.actions.runner-temp-directory-description %} For example, `D:\a\_temp` |
{% ifversion not ghae %}| `RUNNER_TOOL_CACHE` | {% data reusables.actions.runner-tool-cache-description %} For example, `C:\hostedtoolcache\windows` |{% endif %}

{% note %}

**Observação:**

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

 If you generate a value in one step of a job, you can use the value in subsequent steps of the same job by assigning the value to an existing or new environment variable and then writing this to the `GITHUB_ENV` environment file. The environment file can be used directly by an action, or from a shell command in the workflow file by using the `run` keyword. Para obter mais informações, consulte "[Comandos do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)".

 If you want to pass a value from a step in one job in a workflow to a step in another job in the workflow, you can define the value as a job output. You can then reference this job output from a step in another job. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)". 
 
