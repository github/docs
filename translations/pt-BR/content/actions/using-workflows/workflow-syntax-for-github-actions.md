---
title: Sintaxe de fluxo de trabalho para o GitHub Actions
shortTitle: Sintaxe de fluxo de trabalho
intro: Um fluxo de trabalho é um processo automatizado configurável constituído de um ou mais trabalhos. Você deve criar um arquivo YAML para definir a configuração do seu fluxo de trabalho.
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

## Sobre sintaxe YAML para fluxos de trabalho

Arquivos de fluxo de trabalho usam sintaxe YAML e devem ter uma extensão de arquivo `.yml` ou `.yaml`. {% data reusables.actions.learn-more-about-yaml %}

Você deve armazenar os arquivos de fluxo de trabalho no diretório `.github/workflows` do seu repositório.

## `name`

Nome do fluxo de trabalho. O {% data variables.product.prodname_dotcom %} exibe os nomes dos fluxos de trabalho na página de ações do repositório. Se você omitir o `nome`, o {% data variables.product.prodname_dotcom %} irá defini-lo como o caminho do arquivo do fluxo de trabalho relativo à raiz do repositório.

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

#### Exemplo

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

Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".

#### `on.workflow_call.inputs.<input_id>.type`

Required if input is defined for the `on.workflow_call` keyword. The value of this parameter is a string specifying the data type of the input. This must be one of: `boolean`, `number`, or `string`.

### `on.workflow_call.outputs`

A map of outputs for a called workflow. Called workflow outputs are available to all downstream jobs in the caller workflow. Each output has an identifier, an optional `description,` and a `value.` The `value` must be set to the value of an output from a job within the called workflow.

In the example below, two outputs are defined for this reusable workflow: `workflow_output1` and `workflow_output2`. These are mapped to outputs called `job_output1` and `job_output2`, both from a job called `my_job`.

#### Exemplo

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

For information on how to reference a job output, see [`jobs.<job_id>.outputs`](#jobsjob_idoutputs). Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".

### `on.workflow_call.secrets`

A map of the secrets that can be used in the called workflow.

Within the called workflow, you can use the `secrets` context to refer to a secret.

If a caller workflow passes a secret that is not specified in the called workflow, this results in an error.

#### Exemplo

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

{% data reusables.github-actions.workflow-dispatch-inputs %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## `permissões`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs %}

{% endif %}

## `env`

A `map` of environment variables that are available to the steps of all jobs in the workflow. You can also set environment variables that are only available to the steps of a single job or to a single step. For more information, see [`jobs.<job_id>.env`](#jobsjob_idenv) and [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

{% data reusables.repositories.actions-env-var-note %}

### Exemplo

```yaml
env:
  SERVER: production
```

## `padrões`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults %}

### `defaults.run`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-run %}

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}
## `concorrência`

{% data reusables.actions.jobs.section-using-concurrency %}

{% endif %}
## `jobs`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow %}

### `jobs.<job_id>`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-id %}

### `jobs.<job_id>.name`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-name %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
### `jobs.<job_id>.permissions`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs-specific %}

{% endif %}

## `jobs.<job_id>.needs`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-needs %}

## `jobs.<job_id>.if`

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

## `jobs.<job_id>.runs-on`

{% data reusables.actions.jobs.section-choosing-the-runner-for-a-job %}

{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
## `jobs.<job_id>.environment`

{% data reusables.actions.jobs.section-using-environments-for-jobs %}

{% endif %}

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}
## `jobs.<job_id>.concurrency`

{% data reusables.actions.jobs.section-using-concurrency-jobs %}

{% endif %}
## `jobs.<job_id>.outputs`

{% data reusables.actions.jobs.section-defining-outputs-for-jobs %}

## `jobs.<job_id>.env`

A `map` of environment variables that are available to all steps in the job. You can also set environment variables for the entire workflow or an individual step. For more information, see [`env`](#env) and [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

{% data reusables.repositories.actions-env-var-note %}

### Exemplo

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

You can run an unlimited number of steps as long as you are within the workflow usage limits. Para obter mais informações, consulte {% ifversion fpt or ghec or ghes %}"[Limites de uso e cobrança](/actions/reference/usage-limits-billing-and-administration)" para executores hospedados em {% data variables.product.prodname_dotcom %} e {% endif %}"[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" para limites de uso de executor auto-hospedado.{% elsif ghae %}."{% endif %}

### Exemplo

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

A unique identifier for the step. Você pode usar `id` para fazer referência à etapa em contextos. Para obter mais informações, consulte "[Contextos](/actions/learn-github-actions/contexts)".

### `jobs.<job_id>.steps[*].if`

You can use the `if` conditional to prevent a step from running unless a condition is met. Você pode usar qualquer contexto e expressão compatível para criar uma condicional.

{% data reusables.github-actions.expression-syntax-if %} Para obter mais informações, consulte "[Expressões](/actions/learn-github-actions/expressions)".

#### Exemplo: Usando contextos

 Essa etapa somente é executada quando o tipo de evento é uma `pull_request` e a ação do evento é `unassigned` (não atribuída).

 ```yaml
steps:
  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.
```

#### Exemplo: Usando funções de verificação de status

The `my backup step` only runs when the previous step of a job fails. Para obter mais informações, consulte "[Expressões](/actions/learn-github-actions/expressions#job-status-check-functions)".

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```

### `jobs.<job_id>.steps[*].name`

A name for your step to display on {% data variables.product.prodname_dotcom %}.

### `jobs.<job_id>.steps[*].uses`

Selects an action to run as part of a step in your job. A ação é uma unidade reutilizável de código. Você pode usar uma ação definida no mesmo repositório que o fluxo de trabalho, um repositório público ou em uma [imagem publicada de contêiner Docker](https://hub.docker.com/).

É altamente recomendável incluir a versão da ação que você está usando ao especificar um número de tag Docker, SHA ou ref do Git. Se você não especificar uma versão, ela poderá interromper seus fluxos de trabalho ou causar um comportamento inesperado quando o proprietário da ação publicar uma atualização.
- Usar o commit SHA de uma versão de ação lançada é a maneira mais garantida de obter estabilidade e segurança.
- Usar a versão principal da ação permite receber correções importantes e patches de segurança sem perder a compatibilidade. Fazer isso também garante o funcionamento contínuo do fluxo de trabalho.
- Usar o branch-padrão de uma ação pode ser conveniente, mas se alguém lançar uma nova versão principal com uma mudança significativa, seu fluxo de trabalho poderá ter problemas.

Some actions require inputs that you must set using the [`with`](#jobsjob_idstepswith) keyword. Revise o arquivo README da ação para determinar as entradas obrigatórias.

Actions are either JavaScript files or Docker containers. If the action you're using is a Docker container you must run the job in a Linux environment. For more details, see [`runs-on`](#jobsjob_idruns-on).

#### Exemplo: Usando ações de versão

```yaml
steps:
  # Reference a specific commit
  - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
  # Reference the major version of a release
  - uses: actions/checkout@v2
  # Reference a specific version
  - uses: actions/checkout@v2.2.0
  # Reference a branch
  - uses: actions/checkout@main
```

#### Exemplo: Usando uma ação pública

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

#### Exemplo: Usando uma ação pública em um subdiretório

`{owner}/{repo}/{path}@{ref}`

A subdirectory in a public {% data variables.product.prodname_dotcom %} repository at a specific branch, ref, or SHA.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@main
```

#### Exemplo: Usando uma ação no mesmo repositório que o fluxo de trabalho

`./path/to/dir`

The path to the directory that contains the action in your workflow's repository. You must check out your repository before using the action.

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

#### Exemplo: Usando uma ação do Docker Hub

`docker://{image}:{tag}`

A Docker image published on [Docker Hub](https://hub.docker.com/).

```yaml
empregos:
  my_first_job:
    passos:
      - nome: Meu primeiro passo
        usa: docker://alpine:3.8
```

{% ifversion fpt or ghec %}
#### Exemplo: Usando o {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}

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
#### Exemplo: Usando uma ação do registro público do Docker

`docker://{host}/{image}:{tag}`

A Docker image in a public registry. This example uses the Google Container Registry at `gcr.io`.

```yaml
jobs:
  meu_primeiro_trabalho:
    steps:
      - name: minha primeira etapa
        uses: docker://gcr.io/cloud-builders/gradle
```

#### Exemplo: Usando uma ação dentro de um repositório privado diferente do fluxo de trabalho

Your workflow must checkout the private repository and reference the action locally. Generate a personal access token and add the token as an encrypted secret. Para obter mais informações, consulte "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)" e "[Segredos criptografados](/actions/reference/encrypted-secrets)".

Replace `PERSONAL_ACCESS_TOKEN` in the example with the name of your secret.

{% raw %}
```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
        with:
          repository: octocat/my-private-repo
          ref: v1.0
          token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
          path: ./.github/actions/my-private-repo
      - name: Run my action
        uses: ./.github/actions/my-private-repo/my-action
```
{% endraw %}

### `jobs.<job_id>.steps[*].run`

Runs command-line programs using the operating system's shell. If you do not provide a `name`, the step name will default to the text specified in the `run` command.

Commands run using non-login shells by default. You can choose a different shell and customize the shell used to run commands. For more information, see [`jobs.<job_id>.steps[*].shell`](#jobsjob_idstepsshell).

Each `run` keyword represents a new process and shell in the runner environment. When you provide multi-line commands, each line runs in the same shell. Por exemplo:

* Um comando de linha única:

  ```yaml
  - name: Install Dependencies
    run: npm install
  ```

* Um comando de várias linhas:

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

| Plataforma compatível | Parâmetro `shell` | Descrição                                                                                                                                                                                                                                                                  | Comando executado internamente                  |
| --------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Todas                 | `bash`            | O shell padrão em plataformas que não sejam Windows como uma alternativa para `sh`. Ao especificar um shell bash no Windows, é utilizado o shell bash incluído no Git para Windows.                                                                                        | `bash --noprofile --norc -eo pipefail {0}`      |
| Todas                 | `pwsh`            | Powershell Core. O {% data variables.product.prodname_dotcom %} anexa a extensão `.ps1` ao nome do script.                                                                                                                                                                 | `pwsh -command ". '{0}'"`                       |
| Todas                 | `python`          | Executa o comando python.                                                                                                                                                                                                                                                  | `python {0}`                                    |
| Linux / macOS         | `sh`              | Comportamento alternativo para plataformas que não sejam Windows se nenhum shell for fornecido e o `bash` não for encontrado no caminho.                                                                                                                                   | `sh -e {0}`                                     |
| Windows               | `cmd`             | O {% data variables.product.prodname_dotcom %} anexa a extensão `.cmd` ao nome do script e a substitui por `{0}`.                                                                                                                                                          | `%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`. |
| Windows               | `pwsh`            | Essa é a shell padrão usada no Windows. Powershell Core. O {% data variables.product.prodname_dotcom %} anexa a extensão `.ps1` ao nome do script. Se o seu executor do Windows auto-hospedado não tiver o _PowerShell Core_ instalado, será usado o _PowerShell Desktop_. | `pwsh -command ". '{0}'"`.                      |
| Windows               | `powershell`      | O PowerShell Desktop. O {% data variables.product.prodname_dotcom %} anexa a extensão `.ps1` ao nome do script.                                                                                                                                                            | `powershell -command ". '{0}'"`.                |

#### Exemplo: Executando um script usando o bash

```yaml
steps:
  - name: Display the path
    run: echo $PATH
    shell: bash
```

#### Exemplo: Executando um script usando `cmd` do Windows

```yaml
steps:
  - name: Display the path
    run: echo %PATH%
    shell: cmd
```

#### Exemplo: Executando um script usando PowerShell Core

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: pwsh
```

#### Exemplo: Usar o PowerShell Desktop para executar um script

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: powershell
```

#### Exemplo: Executando um script do Python

```yaml
steps:
  - name: Display the path
    run: |
      import os
      print(os.environ['PATH'])
    shell: python
```

#### Shell personalizado

You can set the `shell` value to a template string using `command […options] {0} [..more_options]`. {% data variables.product.prodname_dotcom %} interprets the first whitespace-delimited word of the string as the command, and inserts the file name for the temporary script at `{0}`.

Por exemplo:

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

#### Preferências de ação de erro e códigos de saída

For built-in shell keywords, we provide the following defaults that are executed by {% data variables.product.prodname_dotcom %}-hosted runners. You should use these guidelines when running shell scripts.

- `bash`/`sh`:
  - Comportamento de falha rápido que usa `set -eo pipefail`: Padrão para `bash` e `shell` embutido. Também é o padrão quando você não der opção em plataformas que não sejam Windows.
  - Você pode cancelar o fail-fast e assumir o controle fornecendo uma string de modelo para as opções do shell. Por exemplo, `bash {0}`.
  - Shells do tipo sh saem com o código de saída do último comando executado em um script, que também é o comportamento padrão das ações. O executor relatará o status da etapa como falha/êxito com base nesse código de saída.

- `powershell`/`pwsh`
  - Comportamento fail-fast quando possível. Para shell integrado `pwsh` e `powershell`, precederemos `$ErrorActionPreference = 'stop'` para conteúdos de script.
  - Vincularemos `if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }` a scripts powershell para que os status da ação reflitam o código de saída mais recente do script.
  - Os usuários podem sempre optar por não usar o shell integrado e fornecer uma opção personalizada, como: `pwsh -File {0}` ou `powershell -Command "& '{0}'"`, dependendo da situação.

- `cmd`
  - Parece não haver uma forma de optar totalmente por um comportamento fail-fast que não seja gravar seu script para verificar cada código de erro e reagir de acordo. Como não podemos fornecer esse comportamento por padrão, você precisa gravá-lo em seu script.
  - `cmd.exe` sairá com o nível de erro do último programa que executou e retornará o código de erro para o executor. Este comportamento é internamente consistente o padrão de comportamento anterior `sh` e `pwsh`, e é o padrão `cmd.exe`; portanto, ele fica intacto.

### `jobs.<job_id>.steps[*].with`

A `map` of the input parameters defined by the action. Cada parâmetro de entrada é um par chave/valor. Parâmetros de entrada são definidos como variáveis de ambiente. The variable is prefixed with `INPUT_` and converted to upper case.

#### Exemplo

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

A `string` that defines the inputs for a Docker container. O {% data variables.product.prodname_dotcom %} entrega os `args` ao `ENTRYPOINT` do contêiner quando o contêiner inicia. An `array of strings` is not supported by this parameter.

#### Exemplo

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

`args` são usados em substituição à instrução `CMD` em um `Dockerfile`. Se você usar `CMD` no `Dockerfile`, use as diretrizes ordenadas por preferência:

1. Documente os argumentos necessários no README das ações e omita-os da instrução `CMD`.
1. Use padrões que permitam o uso da ação sem especificação de `args`.
1. Se a ação expõe um sinalizador `--help` ou similar, use isso como padrão para que a ação se documente automaticamente.

### `jobs.<job_id>.steps[*].with.entrypoint`

Overrides the Docker `ENTRYPOINT` in the `Dockerfile`, or sets it if one wasn't already specified. Unlike the Docker `ENTRYPOINT` instruction which has a shell and exec form, `entrypoint` keyword accepts only a single string defining the executable to be run.

#### Exemplo

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

#### Exemplo

{% raw %}
```yaml
steps:
 - name: minha primeira ação
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

## `jobs.<job_id>.strategy`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-strategy %}

### `jobs.<job_id>.strategy.matrix`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-matrix %}

### `jobs.<job_id>.strategy.fail-fast`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

### `jobs.<job_id>.strategy.max-parallel`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}

## `jobs.<job_id>.continue-on-error`

Prevents a workflow run from failing when a job fails. Set to `true` to allow a workflow run to pass when this job fails.

### Exemplo: Evitando uma falha específica na matriz de trabalho por falha na execução de um fluxo de trabalho

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

{% data reusables.github-actions.docker-container-os-support %}

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

{% data reusables.github-actions.docker-container-os-support %}

Used to host service containers for a job in a workflow. Service containers are useful for creating databases or cache services like Redis. The runner  automatically creates a Docker network and manages the life cycle of the service containers.

If you configure your job to run in a container, or your step uses container actions, you don't need to map ports to access the service or action. Docker automatically exposes all ports between containers on the same Docker user-defined bridge network. You can directly reference the service container by its hostname. The hostname is automatically mapped to the label name you configure for the service in the workflow.

If you configure the job to run directly on the runner machine and your step doesn't use a container action, you must map any required Docker service container ports to the Docker host (the runner machine). You can access the service container using localhost and the mapped port.

For more information about the differences between networking service containers, see "[About service containers](/actions/automating-your-workflow-with-github-actions/about-service-containers)."

### Exemplo: Usando host local

This example creates two services: nginx and redis. Ao especificar a porta do host do Docker mas não a porta do contêiner, a porta do contêiner será atribuída aleatoriamente a uma porta livre. {% data variables.product.prodname_dotcom %} sets the assigned container port in the {% raw %}`${{job.services.<service_name>.ports}}`{% endraw %} context. In this example, you can access the service container ports using the {% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} and {% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %} contexts.

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

#### Exemplo

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

Sets an `array` of volumes for the service container to use. É possível usar volumes para compartilhar dados entre serviços ou outras etapas em um trabalho. Você pode especificar volumes de nome Docker, volumes Docker anônimos ou vincular montagens no host.

Para especificar um volume, especifique o caminho de origem e destino:

`<source>:<destinationPath>`.

`<source>` é um nome de volume ou caminho absoluto na máquina host, e `<destinationPath>` é um caminho absoluto no contêiner.

#### Exemplo

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

### `jobs.<job_id>.services.<service_id>.options`

Additional Docker container resource options. Para obter uma lista de opções, consulte "[opções `docker create`](https://docs.docker.com/engine/reference/commandline/create/#options)".

{% warning %}

**Aviso:** A opção `--network` não é compatível.

{% endwarning %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## `jobs.<job_id>.uses`

{% data reusables.actions.reusable-workflows-ghes-beta %}

The location and version of a reusable workflow file to run as a job. {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}Use one of the following syntaxes:{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

### Exemplo

{% data reusables.actions.uses-keyword-example %}

Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".

### `jobs.<job_id>.with`

When a job is used to call a reusable workflow, you can use `with` to provide a map of inputs that are passed to the called workflow.

Any inputs that you pass must match the input specifications defined in the called workflow.

Unlike [`jobs.<job_id>.steps[*].with`](#jobsjob_idstepswith), the inputs you pass with `jobs.<job_id>.with` are not be available as environment variables in the called workflow. Instead, you can reference the inputs by using the `inputs` context.

#### Exemplo

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

#### Exemplo

{% raw %}
```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    secrets:
      access-token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
```
{% endraw %}

### `jobs.<job_id>.secrets.<secret_id>`

A pair consisting of a string identifier for the secret and the value of the secret. The identifier must match the name of a secret defined by [`on.workflow_call.secrets.<secret_id>`](#onworkflow_callsecretssecret_id) in the called workflow.

Allowed expression contexts: `github`, `needs`, and `secrets`.
{% endif %}

## Folha de consulta de filtro padrão

You can use special characters in path, branch, and tag filters.

- `*`: Corresponde a zero ou mais caracteres, mas não corresponde ao caractere `/`. Por exemplo, `Octo*` corresponde a `Octocat`.
- `**`: Corresponde a zero ou mais de qualquer caractere.
- `?`: Corresponde a zero ou a um dos caracteres anteriores.
- `+`: Corresponde a um ou mais dos caracteres anteriores.
- `[]` Corresponde a um caractere listado entre colchetes ou incluído nos intervalos. Os intervalos só podem incluir valores de `a-z`, `A-Z`, e `0-9`. Por exemplo, o intervalo`[0-9a-z]` corresponde a qualquer letra maiúscula ou minúscula. Por exemplo, `[CB]at` corresponde a `Cat` ou `Bat` e `[1-2]00` corresponde a `100` e `200`.
- `!` No início de um padrão faz com que ele anule padrões positivos anteriores. Não tem nenhum significado especial caso não seja o primeiro caractere.

The characters `*`, `[`, and `!` are special characters in YAML. If you start a pattern with `*`, `[`, or `!`, you must enclose the pattern in quotes.

```yaml
# Válido
- '**/README.md'

# Inválido - Cria um erro de análise que
# impede que o seu fluxo de trabalho seja executado.
- **/README.md
```

For more information about branch, tag, and path filter syntax, see "[`on.<push>.<branches|tags>`](#onpushbranchestagsbranches-ignoretags-ignore)", "[`on.<pull_request>.<branches|tags>`](#onpull_requestpull_request_targetbranchesbranches-ignore)", and "[`on.<push|pull_request>.paths`](#onpushpull_requestpull_request_targetpathspaths-ignore)."

### Padrões para corresponder branches e tags

| Padrão                                                  | Descrição                                                                                                                                                                           | Exemplos de correspondências                                                                                          |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `feature/*`                                             | O caractere curinga `*` corresponde a qualquer caractere, mas não à barra (`/`).                                                                                                    | `feature/my-branch`<br/><br/>`feature/your-branch`                                                        |
| `feature/**`                                            | `**` correspondem a qualquer caractere, incluindo a barra (`/`) em nomes de branches e tags.                                                                                        | `feature/beta-a/my-branch`<br/><br/>`feature/your-branch`<br/><br/>`feature/mona/the/octocat` |
| `main`<br/><br/>`releases/mona-the-octocat` | Corresponde ao nome exato de um branch ou tag.                                                                                                                                      | `main`<br/><br/>`releases/mona-the-octocat`                                                               |
| `'*'`                                                   | Corresponde a todos os nomes de branches e tags que não contêm uma barra (`/`). O caractere `*` é um caractere especial em YAML. Ao inciar um padrão com `*`, você deve usar aspas. | `main`<br/><br/>`releases`                                                                                |
| `'**'`                                                  | Corresponde a todos os nomes de branches e tags. Esse é o comportamento padrão quando você não usa um filtro de `branches` ou `tags`.                                               | `all/the/branches`<br/><br/>`every/tag`                                                                   |
| `'*feature'`                                            | O caractere `*` é um caractere especial em YAML. Ao inciar um padrão com `*`, você deve usar aspas.                                                                                 | `mona-feature`<br/><br/>`feature`<br/><br/>`ver-10-feature`                                   |
| `v2*`                                                   | Corresponde aos nomes de branches e tags que iniciam com `v2`.                                                                                                                      | `v2`<br/><br/>`v2.0`<br/><br/>`v2.9`                                                          |
| `v[12].[0-9]+.[0-9]+`                                   | Corresponde a todas as tags de versão de branch semântica com a versão principal 1 ou 2.                                                                                            | `v1.10.1`<br/><br/>`v2.0.0`                                                                               |

### Padrões para corresponder a caminhos de arquivos

Path patterns must match the whole path, and start from the repository's root.

| Padrão                                                                  | Descrição das correspondências                                                                                                                                                                                         | Exemplos de correspondências                                                                                             |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `'*'`                                                                   | O caractere curinga `*` corresponde a qualquer caractere, mas não à barra (`/`). O caractere `*` é um caractere especial em YAML. Ao inciar um padrão com `*`, você deve usar aspas.                                   | `README.md`<br/><br/>`server.rb`                                                                             |
| `'*.jsx?'`                                                              | O caractere `?` corresponde a zero ou a um dos caracteres anteriores.                                                                                                                                                  | `page.js`<br/><br/>`page.jsx`                                                                                |
| `'**'`                                                                  | `**` corresponde a qualquer caractere incluindo a barra (`/`). Esse é o comportamento padrão quando você não usa um filtro de `path`.                                                                                  | `all/the/files.md`                                                                                                       |
| `'*.js'`                                                                | O caractere curinga `*` corresponde a qualquer caractere, mas não à barra (`/`). Corresponde a todos os arquivos `.js` na raiz do repositório.                                                                         | `app.js`<br/><br/>`index.js`                                                                                 |
| `'**.js'`                                                               | Corresponde a todos os arquivos `.js` no repositório.                                                                                                                                                                  | `index.js`<br/><br/>`js/index.js`<br/><br/>`src/js/app.js`                                       |
| `docs/*`                                                                | Todos os arquivos dentro da raiz do diretório `docs`, na raiz do repositório.                                                                                                                                          | `docs/README.md`<br/><br/>`docs/file.txt`                                                                    |
| `docs/**`                                                               | Qualquer arquivo no diretório `docs`, na raiz do repositório.                                                                                                                                                          | `docs/README.md`<br/><br/>`docs/mona/octocat.txt`                                                            |
| `docs/**/*.md`                                                          | Um arquivo com um sufixo `.md` em qualquer local do diretório `docs`.                                                                                                                                                  | `docs/README.md`<br/><br/>`docs/mona/hello-world.md`<br/><br/>`docs/a/markdown/file.md`          |
| `'**/docs/**'`                                                          | Qualquer arquivo no diretório `docs`, em qualquer local do repositório.                                                                                                                                                | `docs/hello.md`<br/><br/>`dir/docs/my-file.txt`<br/><br/>`space/docs/plan/space.doc`             |
| `'**/README.md'`                                                        | Um arquivo README.md em qualquer local do repositório.                                                                                                                                                                 | `README.md`<br/><br/>`js/README.md`                                                                          |
| `'**/*src/**'`                                                          | Qualquer arquivo em uma pasta com o sufixo `src` em qualquer local do repositório.                                                                                                                                     | `a/src/app.js`<br/><br/>`my-src/code/js/app.js`                                                              |
| `'**/*-post.md'`                                                        | Um arquivo com o sufixo `-post.md` em qualquer local do repositório.                                                                                                                                                   | `my-post.md`<br/><br/>`path/their-post.md`                                                                   |
| `'**/migrate-*.sql'`                                                    | Um arquivo com o prefixo `migrate-` e sufixo `.sql` em qualquer local do repositório.                                                                                                                                  | `migrate-10909.sql`<br/><br/>`db/migrate-v1.0.sql`<br/><br/>`db/sept/migrate-v1.sql`             |
| `*.md`<br/><br/>`!README.md`                                | Usar um sinal de exclamação (`!`) na frente de um padrão o anula. Quando um arquivo corresponde a um padrão e também corresponde a um padrão negativo definido posteriormente no arquivo, o arquivo não será incluído. | `hello.md`<br/><br/>_Does not match_<br/><br/>`README.md`<br/><br/>`docs/hello.md` |
| `*.md`<br/><br/>`!README.md`<br/><br/>`README*` | Os padrões são verificados sequencialmente. Um padrão que anula um padrão anterior irá incluir caminhos de arquivos novamente.                                                                                         | `hello.md`<br/><br/>`README.md`<br/><br/>`README.doc`                                            |
