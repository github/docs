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

Use `on.workflow_call` para definir as entradas e saídas para um fluxo de trabalho reutilizável. Você também pode mapear os segredos disponíveis para o fluxo de trabalho chamado. Para obter mais informações sobre fluxos de trabalho reutilizáveis, consulte "[Reutilizando fluxos de trabalho](/actions/using-workflows/reusing-workflows)".

### `on.workflow_call.inputs`

Ao usar a palavra-chave `workflow_call`, você poderá, opcionalmente, especificar entradas que são passadas para o fluxo de trabalho chamado no fluxo de trabalho de chamada. Para obter mais informações sobre a palavra-chave `workflow_call`, consulte "[Eventos que acionam fluxos de trabalho](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events)."

Além dos parâmetros de entrada padrão que estão disponíveis, `on.workflow_call.inputs` exige um parâmetro `tipo`. Para obter mais informações, consulte [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype).

Se um parâmetro `padrão` não fordefinido, o valor padrão da entrada será `falso` para um booleano, `0` para um número e `""` para uma string.

No fluxo de trabalho chamado, você pode usar o contexto `entradas` para referir-se a uma entrada.

Se um fluxo de trabalho de chamada passar uma entrada que não é especificada no fluxo de trabalho de chamada, isso irá gerar um erro.

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

Necessário se a entrada for definida para a palavra-chave `on.workflow_call`. O valor deste parâmetro é uma string que especifica o tipo de dados da entrada. Este deve ser um dos valores a seguir: `booleano`, `número` ou `string`.

### `on.workflow_call.outputs`

Um mapa de saídas para um fluxo de trabalho chamado. As saídas de fluxo de trabalho chamadas estão disponíveis para todas as tarefas a jusante no fluxo de trabalho de chamadas. Cada saída tem um identificador, uma `descrição` opcional e um `valor.` O `valor` deve ser definido para o valor de uma saída de um trabalho dentro do fluxo de trabalho chamado.

No exemplo abaixo, dois valores de saída são definidos para este fluxo de trabalho reutilizável: `workflow_output1` e `workflow_output2`. Eles são mapeados com as saídas chamadas `job_output1` e `job_output2`, ambas de um trabalho chamado `my_job`.

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

Para obter informações sobre como fazer referência a uma saída de trabalho, consulte [`trabalhos.<job_id>.outputs`](#jobsjob_idoutputs). Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".

### `on.workflow_call.secrets`

Um mapa dos segredos que pode ser usado no fluxo de trabalho de chamada.

Dentro do fluxo de trabalho de chamada, você pode usar o contexto `segredos` para consultar um segredo.

Se um fluxo de trabalho de chamada passar um segredo que não é especificado no fluxo de trabalho chamado, isso irá gerar um erro.

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

Um identificador de string para associar ao segredo.

#### `on.workflow_call.secrets.<secret_id>.required`

Um booleano que especifica se o segredo deve ser fornecido.
{% endif %}

## `on.workflow_run.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-specifying-branches %}

## `on.workflow_dispatch.inputs`

{% data reusables.actions.workflow-dispatch-inputs %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## `permissões`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs %}

{% endif %}

## `env`

Um `mapa` das variáveis de ambiente que estão disponíveis para as etapas de todos os trabalhos do fluxo de trabalho. Também é possível definir variáveis de ambiente que estão disponíveis apenas para as etapas de um único trabalho ou para uma única etapa. Para obter mais informações, consulte [`jobs.<job_id>.env`](#jobsjob_idenv) e [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

As variáveis no mapa `env` não podem ser definidas em termos de outras variáveis no mapa.

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

## `jobs.<job_id>.environment`

{% data reusables.actions.jobs.section-using-environments-for-jobs %}

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}
## `jobs.<job_id>.concurrency`

{% data reusables.actions.jobs.section-using-concurrency-jobs %}

{% endif %}
## `jobs.<job_id>.outputs`

{% data reusables.actions.jobs.section-defining-outputs-for-jobs %}

## `jobs.<job_id>.env`

Um `map` (mapa) das variáveis de ambiente que estão disponíveis para todos as etapas do trabalho. Também é possível definir variáveis de ambiente para todo o fluxo de trabalho ou uma etapa individual. Para obter mais informações, consulte [`env`](#env) e [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

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

Trabalhos contêm sequências de tarefas chamadas `steps`. As etapas podem executar comandos, executar trabalhos de configuração ou executar ações no seu repositório, em repositórios públicos, ou ações publicadas em registros do Docker. Nem todas as etapas executam ações, mas todas as ações são executadas como etapas. Cada etapa é executada em seu próprio processo no ambiente do executor, tendo acesso ao espaço de trabalho e ao sistema de arquivos. Como as etapas são executadas em seus próprios processos, as alterações nas variáveis de ambiente não são preservadas entre as etapas. O {% data variables.product.prodname_dotcom %} fornece etapas integradas para configurar e concluir trabalhos.

Você pode executar quantas etapas quiser, desde que esteja dentro dos limites de uso do fluxo de trabalho. Para obter mais informações, consulte {% ifversion fpt or ghec or ghes %}"[Limites de uso e cobrança](/actions/reference/usage-limits-billing-and-administration)" para executores hospedados em {% data variables.product.prodname_dotcom %} e {% endif %}"[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" para limites de uso de executor auto-hospedado.{% elsif ghae %}."{% endif %}

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

Identificador exclusivo da etapa. Você pode usar `id` para fazer referência à etapa em contextos. Para obter mais informações, consulte "[Contextos](/actions/learn-github-actions/contexts)".

### `jobs.<job_id>.steps[*].if`

Você pode usar a condicional `if` (se) para evitar que uma etapa trabalho seja executada a não ser que determinada condição seja atendida. Você pode usar qualquer contexto e expressão compatível para criar uma condicional.

{% data reusables.actions.expression-syntax-if %} Para obter mais informações, consulte "[Expressões](/actions/learn-github-actions/expressions)".

#### Exemplo: Usando contextos

 Essa etapa somente é executada quando o tipo de evento é uma `pull_request` e a ação do evento é `unassigned` (não atribuída).

 ```yaml
steps:
  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.
```

#### Exemplo: Usando funções de verificação de status

A função `my backup step` (minha etapa de backup) somente é executada quando houver falha em uma etapa anterior do trabalho. Para obter mais informações, consulte "[Expressões](/actions/learn-github-actions/expressions#job-status-check-functions)".

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```

#### Exemplo: Usando segredos

Não é possível fazer referência a segredos nas condicionais `if:`. Em vez disso, considere definir segredos como variáveis de ambiente no nível de trabalho e, em seguida, fazer referência às variáveis de ambiente para executar etapas condicionalmente no trabalho.

Se um segredo não tiver sido definido, o valor de retorno de uma expressão referente ao segredo (como {% raw %}`${{ secrets.SuperSecret }}`{% endraw %} no exemplo) será uma string vazia.

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

Para obter mais informações, consulte "[Disponibilidade de contexto](/actions/learn-github-actions/contexts#context-availability)" e "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

### `jobs.<job_id>.steps[*].name`

Nome da etapa no {% data variables.product.prodname_dotcom %}.

### `jobs.<job_id>.steps[*].uses`

Seleciona uma ação para executar como parte de uma etapa no trabalho. A ação é uma unidade reutilizável de código. Você pode usar uma ação definida no mesmo repositório que o fluxo de trabalho, um repositório público ou em uma [imagem publicada de contêiner Docker](https://hub.docker.com/).

É altamente recomendável incluir a versão da ação que você está usando ao especificar um número de tag Docker, SHA ou ref do Git. Se você não especificar uma versão, ela poderá interromper seus fluxos de trabalho ou causar um comportamento inesperado quando o proprietário da ação publicar uma atualização.
- Usar o commit SHA de uma versão de ação lançada é a maneira mais garantida de obter estabilidade e segurança.
- Usar a versão principal da ação permite receber correções importantes e patches de segurança sem perder a compatibilidade. Fazer isso também garante o funcionamento contínuo do fluxo de trabalho.
- Usar o branch-padrão de uma ação pode ser conveniente, mas se alguém lançar uma nova versão principal com uma mudança significativa, seu fluxo de trabalho poderá ter problemas.

Algumas ações requerem entradas que devem ser definidas com a palavra-chave [`with`](#jobsjob_idstepswith) (com). Revise o arquivo README da ação para determinar as entradas obrigatórias.

Ações são arquivos JavaScript ou contêineres Docker. Se a ação em uso for um contêiner do Docker, você deverá executar o trabalho em um ambiente do Linux. Para obter mais detalhes, consulte [`runs-on`](#jobsjob_idruns-on).

#### Exemplo: Usando ações de versão

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

#### Exemplo: Usando uma ação pública

`{owner}/{repo}@{ref}`

É possível especificar um branch, ref, ou SHA em um repositório público de {% data variables.product.prodname_dotcom %}.

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

Subdiretório em um repositório público do {% data variables.product.prodname_dotcom %} em um branch, ref ou SHA específico.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@main
```

#### Exemplo: Usando uma ação no mesmo repositório que o fluxo de trabalho

`./path/to/dir`

Caminho para o diretório que contém a ação no repositório do seu fluxo de trabalho. Você deve reservar seu repositório antes de usar a ação.

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

#### Exemplo: Usando uma ação do Docker Hub

`docker://{image}:{tag}`

Imagem Docker publicada no [Docker Hub](https://hub.docker.com/).

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

Uma imagem Docker em {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}.

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

Imagem Docker em um registro público. Este exemplo usa o Registro de Contêiner do Google em `gcr.io`.

```yaml
jobs:
  meu_primeiro_trabalho:
    steps:
      - name: minha primeira etapa
        uses: docker://gcr.io/cloud-builders/gradle
```

#### Exemplo: Usando uma ação dentro de um repositório privado diferente do fluxo de trabalho

Seu fluxo de trabalho deve fazer checkout no repositório privado e referenciar a ação localmente. Gere um token de acesso pessoal e adicione o token como um segredo criptografado. Para obter mais informações, consulte "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)" e "[Segredos criptografados](/actions/reference/encrypted-secrets)".

Substitua `PERSONAL_ACCESS_TOKEN` no exemplo pelo nome do seu segredo.

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

Executa programas de linha de comando usando o shell do sistema operacional. Se você não informar um `name`, o nome da etapa será configurado por padrão como o texto indicado no comando `run`.

Por padrão, os comandos run usam shells de não login. Você pode escolher um shell diferente e personalizar o shell usado para executar comandos. Para obter mais informações, consulte [`trabalhos.<job_id>.steps[*].shell`](#jobsjob_idstepsshell).

Cada palavra-chave `run` representa um novo processo e shell no ambiente do executor. Ao fornecer comandos de várias linhas, cada linha será executada no mesmo shell. Por exemplo:

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

Com a palavra-chave `working-directory` (diretório de trabalho), é possível especificar o diretório de trabalho de onde o comando será executado.

```yaml
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

### `jobs.<job_id>.steps[*].shell`

Você pode anular as configurações padrão de shell no sistema operacional do executor usando a palavra-chave `shell`. É possível usar palavras-chave integradas a `shell` ou definir um conjunto personalizado de opções de shell. O comando do shell que é executado internamente executa um arquivo temporário que contém os comandos especificados na palavra-chave `executar`.

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

Você pode usar o valor `shell` em um string modelo usando `command […options] {0} [..more_options]`. O {% data variables.product.prodname_dotcom %} interpreta a primeira palavra da string delimitada por um espaço em branco como o comando e insere o nome do arquivo para o script temporário em `{0}`.

Por exemplo:

```yaml
steps:
  - name: Display the environment variables and their values
    run: |
      print %ENV
    shell: perl {0}
```

O comando usado, `perl` neste exemplo, deve ser instalado no executor.

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% elsif fpt or ghec %}
Para informações sobre o software incluído nos executores hospedados no GitHub, consulte "[Especificações para os executores hospedados no GitHub](/actions/reference/specifications-for-github-hosted-runners#supported-software)."
{% endif %}

#### Preferências de ação de erro e códigos de saída

Para palavras-chave de shell integradas, fornecemos os seguintes padrões usados por executores hospedados no {% data variables.product.prodname_dotcom %}. Você deve seguir estas diretrizes quando executar scripts shell.

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

Um `map` (mapa) dos parâmetros de entrada definidos pela ação. Cada parâmetro de entrada é um par chave/valor. Parâmetros de entrada são definidos como variáveis de ambiente. A variável é precedida por `INPUT_` e convertida em letras maiúsculas.

#### Exemplo

Define os três parâmetros de entrada (`first_name`, `middle_name` e `last_name`) definidos pela ação `hello_world`. Essas variáveis de entrada estarão acessíveis para a ação `hello-world` como variáveis de ambiente `INPUT_FIRST_NAME`, `INPUT_MIDDLE_NAME` e `INPUT_LAST_NAME`.

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

Uma `string` que define as entradas para um contêiner Docker. O {% data variables.product.prodname_dotcom %} entrega os `args` ao `ENTRYPOINT` do contêiner quando o contêiner inicia. Um `array de strings` não é compatível com esse parâmetro.

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

Anula o `ENTRYPOINT` Docker no `Dockerfile` ou define-o caso ainda não tenha sido especificado. Diferentemente da instrução Docker `ENTRYPOINT` que tem um formulário shell e exec, a palavra-chave `entrypoint` aceita apena uma única string que define o executável.

#### Exemplo

```yaml
steps:
  - name: Run a custom command
    uses: octo-org/action-name@main
    with:
      entrypoint: /a/different/executable
```

A palavra-chave `entrypoint` é para ser usada com ações de contêiner Docker, mas você também pode usá-la com ações JavaScript que não definem nenhuma entrada.

### `jobs.<job_id>.steps[*].env`

Define variáveis de ambiente para etapas a serem usadas no ambiente do executor. Também é possível definir variáveis de ambiente para todo o fluxo de trabalho ou para um trabalho. Para obter mais informações, consulte [`env`](#env) e [`jobs.<job_id>.env`](#jobsjob_idenv).

{% data reusables.repositories.actions-env-var-note %}

Ações públicas podem especificar variáveis de ambiente esperadas no arquivo LEIAME. Se você está configurando um segredo em uma variável de ambiente, use o contexto `secrets`. Para obter mais informações, consulte "[Usando variáveis de ambiente](/actions/automating-your-workflow-with-github-actions/using-environment-variables)" e "[Contextos](/actions/learn-github-actions/contexts)".

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

Impede a falha de um trabalho se uma etapa não funcionar. Defina `true` (verdadeiro) para permitir que um trabalho aconteça quando essa etapa falhar.

### `jobs.<job_id>.steps[*].timeout-minutes`

Número máximo de minutos para executar a etapa antes de interromper o processo.

## `jobs.<job_id>.timeout-minutes`

Número máximo de minutos para permitir a execução de um trabalho o antes que o {% data variables.product.prodname_dotcom %} o cancele automaticamente. Padrão: 360

Se o tempo-limite exceder o tempo limite de execução do trabalho para o runner, o trabalho será cancelada quando o tempo limite de execução for atingido. Para obter mais informações sobre o limite de tempo de execução do trabalho, consulte {% ifversion fpt or ghec or ghes %}"[Limites de uso e cobrança](/actions/reference/usage-limits-billing-and-administration#usage-limits)" para executores hospedados em {% data variables.product.prodname_dotcom %} e {% endif %}"[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" para limites de uso de executores auto-hospedados.{% elsif ghae %}."{% endif %}

{% note %}

**Observação:** {% data reusables.actions.github-token-expiration %} para executores auto-hospedados, o token pode ser o fator de limitação se o tempo limite do trabalho for superior a 24 horas. Para obter mais informações sobre o `GITHUB_TOKEN`, consulte "[Sobre ](/actions/security-guides/automatic-token-authentication#about-the-github_token-secret)segredo do `GITHUB_TOKEN`."

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

Impede que ocorra falha na execução de um fluxo de trabalho quando ocorrer uma falha em um trabalho. Defina como `verdadeiro` para permitir que uma execução de um fluxo de trabalho passe quando este trabalho falhar.

### Exemplo: Evitando uma falha específica na matriz de trabalho por falha na execução de um fluxo de trabalho

Você pode permitir que as tarefas específicas em uma matriz de tarefas falhem sem que ocorra falha na execução do fluxo de trabalho. Por exemplo, se você deseja permitir apenas um trabalho experimental com o `nó` definido como `15` sem falhar a execução do fluxo de trabalho.

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

Usado para hospedar contêineres de serviço para um trabalho em um fluxo de trabalho. Contêineres de serviço são úteis para a criação de bancos de dados ou serviços armazenamento em cache como o Redis. O executor cria automaticamente uma rede do Docker e gerencia o ciclo de vida dos contêineres do serviço.

Se você configurar seu trabalho para ser executado em um contêiner, ou a sua etapa usar ações ao contêiner, você não precisará mapear as portas para acessar o serviço ou a ação. O Docker expõe automaticamente todas as portas entre os contêineres da mesma rede de ponte definida pelo usuário. Você pode fazer referência ao contêiner de serviço diretamente pelo seu nome de host. O nome do host é mapeado automaticamente com o nome da etiqueta que você configurar para o serviço no fluxo de trabalho.

Se você configurar a tarefa para executar diretamente na máquina do executor e sua etapa não usar uma ação de contêiner, você deverá mapear todas as portas de contêiner de serviço do Docker necessárias para o host do Docker (a máquina do executor). Você pode acessar o contêiner de serviço usando host local e a porta mapeada.

Para obter mais informações sobre as diferenças entre os contêineres de serviço de rede, consulte "[Sobre contêineres de serviço](/actions/automating-your-workflow-with-github-actions/about-service-containers)".

### Exemplo: Usando host local

Este exemplo cria dois serviços: nginx e redis. Ao especificar a porta do host do Docker mas não a porta do contêiner, a porta do contêiner será atribuída aleatoriamente a uma porta livre. O {% data variables.product.prodname_dotcom %} define a porta de contêiner atribuída no contexto {% raw %}`${{job.services.<service_name>.ports}}`{% endraw %}. Neste exemplo, você pode acessar as portas do contêiner de serviço usando os contextos {% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} e {% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %}.

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

Imagem Docker a ser usada como contêiner de serviço para executar a ação. O valor pode ser o nome da imagem do Docker Hub ou um nome de registro.

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

Define um `maá` das variáveis de ambiente no contêiner do serviço.

### `jobs.<job_id>.services.<service_id>.ports`

Define um `array` de portas para expor no contêiner de serviço.

### `jobs.<job_id>.services.<service_id>.volumes`

Define um `array` de volumes para uso do contêiner de serviço. É possível usar volumes para compartilhar dados entre serviços ou outras etapas em um trabalho. Você pode especificar volumes de nome Docker, volumes Docker anônimos ou vincular montagens no host.

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

Opções adicionais de recursos do contêiner Docker. Para obter uma lista de opções, consulte "[opções `docker create`](https://docs.docker.com/engine/reference/commandline/create/#options)".

{% warning %}

**Aviso:** A opção `--network` não é compatível.

{% endwarning %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## `jobs.<job_id>.uses`

{% data reusables.actions.reusable-workflows-ghes-beta %}

O local e a versão de um arquivo de fluxo de trabalho reutilizável para ser executado como job. {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}Use uma das seguintes sintaxes:{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

### Exemplo

{% data reusables.actions.uses-keyword-example %}

Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".

### `jobs.<job_id>.with`

Quando um trabalho é usado para chamar um fluxo de trabalho reutilizável, você pode usar `com` para fornecer um mapa de entradas que são passadas para o fluxo de trabalho de chamada.

Qualquer entrada que você passe deve corresponder às especificações de entrada definidas no fluxo de trabalho de chamada.

Diferentemente de [`jobs.<job_id>.steps[*].with`](#jobsjob_idstepswith), as entradas que você passar com `jobs.<job_id>.with` não estão disponíveis como variáveis de ambiente no fluxo de trabalho de chamada. Ao invés disso, você pode fazer referência às entradas usando o contexto `entrada`.

#### Exemplo

```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    with:
      username: mona
```

### `jobs.<job_id>.with.<input_id>`

Um par composto de um identificador de string para a entrada e o valor da entrada. O identificador deve corresponder ao nome de uma entrada definida por [`on.workflow_call.inputs.<inputs_id>`](/actions/creating-actions/metadata-syntax-for-github-actions#inputsinput_id) no fluxo de trabalho chamado. O tipo de dado do valor deve corresponder ao tipo definido por [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype) no fluxo de trabalho chamado.

Contextos de expressão permitidos: `github` e `needs`.

### `jobs.<job_id>.secrets`

Quando um trabalho é usado para chamar um fluxo de trabalho reutilizável, você pode usar `segredos` para fornecer um mapa de segredos que foram passados para o fluxo de trabalho chamado.

Qualquer segredo que você passar deve corresponder aos nomes definidos no fluxo de trabalho chamado.

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

Um par composto por um identificador string para o segredo e o valor do segredo. O identificador deve corresponder ao nome de um segredo definido por [`on.workflow_call.secrets.<secret_id>`](#onworkflow_callsecretssecret_id) no fluxo de trabalho chamado.

Contextos de expressão permitidos: `github`, `needs` e `segredos`.
{% endif %}

## Folha de consulta de filtro padrão

Você pode usar caracteres especiais nos filtros de caminhos, branches e tags.

- `*`: Corresponde a zero ou mais caracteres, mas não corresponde ao caractere `/`. Por exemplo, `Octo*` corresponde a `Octocat`.
- `**`: Corresponde a zero ou mais de qualquer caractere.
- `?`: Corresponde a zero ou a um dos caracteres anteriores.
- `+`: Corresponde a um ou mais dos caracteres anteriores.
- `[]` Corresponde a um caractere listado entre colchetes ou incluído nos intervalos. Os intervalos só podem incluir valores de `a-z`, `A-Z`, e `0-9`. Por exemplo, o intervalo`[0-9a-z]` corresponde a qualquer letra maiúscula ou minúscula. Por exemplo, `[CB]at` corresponde a `Cat` ou `Bat` e `[1-2]00` corresponde a `100` e `200`.
- `!` No início de um padrão faz com que ele anule padrões positivos anteriores. Não tem nenhum significado especial caso não seja o primeiro caractere.

Os caracteres `*`, `[` e `!` são caracteres especiais em YAML. Se você iniciar um padrão com `*`, `[` ou `!`, você deverá colocá-lo entre aspas.

```yaml
# Válido
- '**/README.md'

# Inválido - Cria um erro de análise que
# impede que o seu fluxo de trabalho seja executado.
- **/README.md
```

Par aobte rmais informações sobre branch, tag e sintaxe de filtro do caminho, consulte "[`on.<push>.<branches|tags>`](#onpushbranchestagsbranches-ignoretags-ignore)", "[`on.<pull_request>.<branches|tags>`](#onpull_requestpull_request_targetbranchesbranches-ignore)" e "[`on.<push|pull_request>.paths`](#onpushpull_requestpull_request_targetpathspaths-ignore)."

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

Padrões de caminhos devem corresponder ao caminho completo e iniciar a partir da raiz do repositório.

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
