---
title: Comandos de fluxo de trabalho para o GitHub Actions
shortTitle: Workflow commands
intro: Você pode usar comandos do fluxo de trabalho ao executar comandos do shell em um fluxo de trabalho ou no código de uma ação.
defaultTool: bash
redirect_from:
  - /articles/development-tools-for-github-actions
  - /github/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/reference/development-tools-for-github-actions
  - /actions/reference/logging-commands-for-github-actions
  - /actions/reference/workflow-commands-for-github-actions
  - /actions/learn-github-actions/workflow-commands-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: b34a96bb62a885031584f3da017fd86b7469a277
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160829'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre os comandos do fluxo de trabalho

As ações podem comunicar-se com a máquina do executor para definir as variáveis de ambiente, valores de saída usados por outras ações, adicionar mensagens de depuração aos registros de saída e outras tarefas.

A maioria dos comandos do fluxo de trabalho usa o comando `echo` em um formato específico, enquanto outros são chamados pela gravação em um arquivo. Para obter mais informações, confira [Arquivos de ambiente](#environment-files).

### Exemplo

{% bash %}

```bash{:copy}
echo "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endpowershell %}

{% note %}

**Observação:** os nomes de parâmetros e de comandos do fluxo de trabalho não diferenciam maiúsculas e minúsculas.

{% endnote %}

{% warning %}

**Aviso:** se você estiver usando um prompt de comando, omita os caracteres de aspas duplas `"` ao usar comandos do fluxo de trabalho.

{% endwarning %}

## Usar comandos do fluxo de trabalho para acessar funções do kit de de ferramentas

O [actions/toolkit](https://github.com/actions/toolkit) inclui várias funções que podem ser executadas como comandos do fluxo de trabalho. Use a sintaxe `::` para executar os comandos do fluxo de trabalho no arquivo YAML. Em seguida, esses comandos são enviados ao executor por meio do `stdout`.

{%- ifversion actions-save-state-set-output-envs %} Por exemplo, em vez de usar o código para criar uma anotação de erro, como abaixo:

```javascript{:copy}
core.error('Missing semicolon', {file: 'app.js', startLine: 1})
```

### Exemplo: como criar uma anotação de erro

Use o comando `error` no fluxo de trabalho para criar a mesma anotação de erro:

{% bash %}

{% raw %}
```yaml{:copy}
      - name: Create annotation for build error
        run: echo "::error file=app.js,line=1::Missing semicolon"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
      - name: Create annotation for build error
        run: Write-Output "::error file=app.js,line=1::Missing semicolon"
```
{% endraw %}

{% endpowershell %} {%- else %} Por exemplo, em vez de usar o código para definir uma saída, como abaixo:

```javascript{:copy}
core.setOutput('SELECTED_COLOR', 'green');
```

### Exemplo: definição de um valor

Use o comando `set-output` no fluxo de trabalho para definir o mesmo valor:

{% bash %}

{% raw %}
```yaml{:copy}
      - name: Set selected color
        run: echo '::set-output name=SELECTED_COLOR::green'
        id: random-color-generator
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
      - name: Set selected color
        run: Write-Output "::set-output name=SELECTED_COLOR::green"
        id: random-color-generator
      - name: Get color
        run: Write-Output "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endpowershell %}

{% endif %}

A tabela a seguir mostra quais funções do conjunto de ferramentas estão disponíveis dentro de um fluxo de trabalho:

| Função do kit de ferramentas | Comando equivalente do fluxo de trabalho |
| ----------------- |  ------------- |
| `core.addPath`    | Acessível por meio do arquivo de ambiente `GITHUB_PATH` |
| `core.debug`      | `debug` |
| `core.notice`     | `notice` |
| `core.error`      | `error` |
| `core.endGroup`   | `endgroup` |
| `core.exportVariable` | Acessível por meio do arquivo de ambiente `GITHUB_ENV` |
| `core.getInput`   | Acessível por meio da variável de ambiente `INPUT_{NAME}` |
| `core.getState`   | Acessível por meio da variável de ambiente `STATE_{NAME}` |
| `core.isDebug`    |  Acessível por meio da variável de ambiente `RUNNER_DEBUG` |
{%- ifversion actions-job-summaries %} | `core.summary` | Acessível usando o arquivo de ambiente `GITHUB_STEP_SUMMARY` | {%- endif %} | `core.saveState`  | {% ifversion actions-save-state-set-output-envs %}Acessível usando o arquivo de ambiente `GITHUB_STATE`{% else %}`save-state`{% endif %} | | `core.setCommandEcho` | `echo` | | `core.setFailed`  | Usado como atalho para `::error` e `exit 1` | | `core.setOutput`  | {% ifversion actions-save-state-set-output-envs %}Acessível usando o arquivo de ambiente `GITHUB_OUTPUT`{% else %}`set-output`{% endif %} | | `core.setSecret`  | `add-mask` | | `core.startGroup` | `group` | | `core.warning`    | `warning` |

{% ifversion actions-save-state-set-output-envs %}{% else %}
## Definir um parâmetro de saída

Configura um parâmetro de saída da ação.

```{:copy}
::set-output name={name}::{value}
```

Opcionalmente, você também pode declarar os parâmetros de saída no arquivo de metadados de uma ação. Para obter mais informações, confira "[Sintaxe de metadados do {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)".

Você pode usar escape em cadeias de caracteres multilinha para definir um parâmetro de saída criando uma variável de ambiente a ser usada em um comando de fluxo de trabalho. Para obter mais informações, confira "[Como configurar uma variável de ambiente](#setting-an-environment-variable)".

### Exemplo: definição de um parâmetro de saída

{% bash %}

```bash{:copy}
echo "::set-output name=action_fruit::strawberry"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::set-output name=action_fruit::strawberry"
```

{% endpowershell %} {% endif %}

## Configurar uma mensagem de depuração

Imprime uma mensagem de erro no log. Você precisa criar um segredo chamado `ACTIONS_STEP_DEBUG` com o valor `true` para ver as mensagens de depuração definidas por esse comando no log. Para obter mais informações, confira "[Como habilitar o log de depuração](/actions/managing-workflow-runs/enabling-debug-logging)".

```{:copy}
::debug::{message}
```

### Exemplo: definição de uma mensagem de depuração

{% bash %}

```bash{:copy}
echo "::debug::Set the Octocat variable"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::debug::Set the Octocat variable"
```

{% endpowershell %}

## Configurando uma mensagem de aviso

Cria uma mensagem de aviso e a imprime no registro. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Exemplo: definição de uma mensagem de aviso

{% bash %}

```bash{:copy}
echo "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Configurar uma mensagem de aviso

Cria uma mensagem de aviso e a imprime no log. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::warning file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Exemplo: definição de uma mensagem de aviso

{% bash %}

```bash{:copy}
echo "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Configurar uma mensagem de erro

Cria uma mensagem de erro e a imprime no log. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::error file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Exemplo: definição de uma mensagem de erro

{% bash %}

```bash{:copy}
echo "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Agrupar linhas dos registros

Cria um grupo expansível no registro. Para criar um grupo, use o comando `group` e especifique um `title`. Qualquer coisa que você imprimir no log entre os comandos `group` e `endgroup` estará aninhada dentro de uma entrada expansível no log.

```{:copy}
::group::{title}
::endgroup::
```

### Exemplo: agrupamento de linhas de log

{% bash %}

```yaml{:copy}
jobs:
  bash-example:
    runs-on: ubuntu-latest
    steps:
      - name: Group of log lines
        run: |
            echo "::group::My title"
            echo "Inside group"
            echo "::endgroup::"
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  powershell-example:
    runs-on: windows-latest
    steps:
      - name: Group of log lines
        run: |
            Write-Output "::group::My title"
            Write-Output "Inside group"
            Write-Output "::endgroup::"
```

{% endpowershell %}

![Grupo dobrável no registro da execução do fluxo de trabalho](/assets/images/actions-log-group.png)

## Mascarar um valor no registro

```{:copy}
::add-mask::{value}
```

Mascarar um valor evita que uma string ou variável seja impressa no log. Cada palavra mascarada separada por um espaço em branco é substituída pelo caractere `*`. Use uma variável de ambiente ou uma cadeia de caracteres para o `value` da máscara. Quando você mascara um valor, ele é tratado como um segredo e será redigido no executor. Por exemplo, depois de mascarar um valor, você não poderá definir esse valor como uma saída.

### Exemplo: mascaramento de uma cadeia de caracteres

Ao imprimir `"Mona The Octocat"` no log, você verá `"***"`.

{% bash %}

```bash{:copy}
echo "::add-mask::Mona The Octocat"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::add-mask::Mona The Octocat"
```

{% endpowershell %}

{% warning %}

**Aviso:** registre o segredo com "add-mask" antes de enviá-lo aos logs de build ou usá-lo em comandos de outro fluxo de trabalho.

{% endwarning %}

### Exemplo: mascaramento de uma variável de ambiente

Ao imprimir a variável `MY_NAME` ou o valor `"Mona The Octocat"` no log, você verá `"***"` em vez de `"Mona The Octocat"`.

{% bash %}

```yaml{:copy}
jobs:
  bash-example:
    runs-on: ubuntu-latest
    env:
      MY_NAME: "Mona The Octocat"
    steps:
      - name: bash-version
        run: echo "::add-mask::$MY_NAME"
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  powershell-example:
    runs-on: windows-latest
    env:
      MY_NAME: "Mona The Octocat"
    steps:
      - name: powershell-version
        run: Write-Output "::add-mask::$env:MY_NAME"
```

{% endpowershell %}

## Parar e iniciar os comandos no fluxo de trabalho

Para de processar quaisquer comandos de fluxo de trabalho. Esse comando especial permite fazer o registro do que você desejar sem executar um comando do fluxo de trabalho acidentalmente. Por exemplo, é possível parar o log para gerar um script inteiro que tenha comentários.

```{:copy}
::stop-commands::{endtoken}
```

Para interromper o processamento de comandos do fluxo de trabalho, transmita um token único para `stop-commands`. Para retomar os comandos do fluxo de trabalho, passe o mesmo token que você usou para parar os comandos do fluxo de trabalho.

{% warning %}

**Aviso:** verifique se que o token que você está usando é gerado aleatoriamente e exclusivo para cada execução.

{% endwarning %}

```{:copy}
::{endtoken}::
```

### Exemplo: interrupção e inicialização de comandos do fluxo de trabalho

{% bash %}

{% raw %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: Disable workflow commands
        run: |
          echo '::warning:: This is a warning message, to demonstrate that commands are being processed.'
          stopMarker=$(uuidgen)
          echo "::stop-commands::$stopMarker"
          echo '::warning:: This will NOT be rendered as a warning, because stop-commands has been invoked.'
          echo "::$stopMarker::"
          echo '::warning:: This is a warning again, because stop-commands has been turned off.'
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: windows-latest
    steps:
      - name: Disable workflow commands
        run: |
          Write-Output '::warning:: This is a warning message, to demonstrate that commands are being processed.'
          $stopMarker = New-Guid
          Write-Output "::stop-commands::$stopMarker"
          Write-Output '::warning:: This will NOT be rendered as a warning, because stop-commands has been invoked.'
          Write-Output "::$stopMarker::"
          Write-Output '::warning:: This is a warning again, because stop-commands has been turned off.'
```

{% endraw %}

{% endpowershell %}

{% ifversion actions-save-state-set-output-envs %}{% else %}
## Eco de saídas de comando

Habilita ou desabilita o eco de comandos de fluxo de trabalho. Por exemplo, se você usar o comando `set-output` em um fluxo de trabalho, ele definirá um parâmetro de saída, mas o log da execução de fluxo de trabalho não mostrará o comando em si. Se você habilitar o retorno de comando, o log mostrará o comando, como `::set-output name={name}::{value}`.

```{:copy}
::echo::on
::echo::off
```

O eco de comandos encontra-se desabilitado por padrão. No entanto, um comando de fluxo de trabalho será refletido se houver algum erro que processa o comando.

Os comandos `add-mask`, `debug`, `warning` e `error` não dão suporte ao retorno porque as saídas já foram retornadas ao log.

Você também pode habilitar o comando de retorno globalmente ativando o log de depuração da etapa usando o segredo `ACTIONS_STEP_DEBUG`. Para obter mais informações, confira "[Como habilitar o log de depuração](/actions/managing-workflow-runs/enabling-debug-logging)". Por outro lado, o comando do fluxo de trabalho `echo` permite que você habilite o comando de retorno em um nível mais granular, em vez de habilitá-lo para cada fluxo de trabalho em um repositório.

### Exemplo: alternância do comando de retorno

{% bash %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: toggle workflow command echoing
        run: |
          echo '::set-output name=action_echo::disabled'
          echo '::echo::on'
          echo '::set-output name=action_echo::enabled'
          echo '::echo::off'
          echo '::set-output name=action_echo::disabled'
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: windows-latest
    steps:
      - name: toggle workflow command echoing
        run: |
          write-output "::set-output name=action_echo::disabled"
          write-output "::echo::on"
          write-output "::set-output name=action_echo::enabled"
          write-output "::echo::off"
          write-output "::set-output name=action_echo::disabled"
```

{% endpowershell %}

O exemplo acima imprime as seguintes linhas no log:

```{:copy}
::set-output name=action_echo::enabled
::echo::off
```

Apenas os comandos do fluxo de trabalho `set-output` e `echo` são incluídos no log, porque o retorno de comando só estava habilitado quando eles foram executados. Mesmo que nem sempre ele esteja ecoado, o parâmetro de saída é definido em todos os casos.
 
{% endif %}

## Enviar valores para as ações anterior e posterior

{% ifversion actions-save-state-set-output-envs %}Você pode criar variáveis de ambiente para compartilhar com as ações `pre:` ou `post:` do fluxo de trabalho gravando no arquivo localizado em `GITHUB_STATE`{% else %}Você pode usar o comando `save-state` para criar variáveis de ambiente a serem compartilhadas com as ações `pre:` ou `post:` do fluxo de trabalho{% endif %}. Por exemplo, você pode criar um arquivo com a ação `pre:`, transmitir a localização do arquivo para a ação `main:` e usar a ação `post:` para excluir o arquivo. Como alternativa, você pode criar um arquivo com a ação `main:`, transmitir a localização do arquivo para a ação `post:` e usar a ação `post:` para excluir o arquivo.

Se você tiver várias ações `pre:` ou `post:`, só poderá acessar o valor salvo na ação em que {% ifversion actions-save-state-set-output-envs %}ele foi gravado em `GITHUB_STATE`{% else %}`save-state` ele foi usado{% endif %}. Para obter mais informações sobre a ação `post:`, confira "[Sintaxe de metadados do {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#runspost)".

{% ifversion actions-save-state-set-output-envs %}O arquivo `GITHUB_STATE` só está disponível em uma ação{% else %}O comando `save-state` só pode ser executado em uma ação e não está disponível para arquivos YAML{% endif %}. O valor salvo é armazenado como um valor de ambiente com o prefixo `STATE_`.

{% ifversion actions-save-state-set-output-envs %} Este exemplo usa JavaScript para gravar no arquivo `GITHUB_STATE`. A variável de ambiente resultante é chamada `STATE_processID` com o valor de `12345`:

```javascript{:copy}
import * as fs from 'fs'
import * as os from 'os'

fs.appendFileSync(process.env.GITHUB_STATE, `processID=12345${os.EOL}`, {
  encoding: 'utf8'
})
```

{% else %} Este exemplo usa JavaScript para executar o comando `save-state`. A variável de ambiente resultante é chamada `STATE_processID` com o valor de `12345`:

```javascript{:copy}
console.log('::save-state name=processID::12345')
```
{% endif %}

Em seguida, a variável `STATE_processID` fica disponível exclusivamente para o script de limpeza em execução na ação `main`. Este exemplo é executado em `main` e usa o JavaScript para exibir o valor atribuído à variável de ambiente `STATE_processID`:

```javascript{:copy}
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```

## Arquivos de ambiente

Durante a execução de um fluxo de trabalho, o executor gera arquivos temporários que podem ser usados para executar certas ações. O caminho para esses arquivos são expostos através de variáveis de ambiente. Você precisará usar a codificação UTF-8 ao escrever para esses arquivos para garantir o processamento adequado dos comandos. Vários comandos podem ser escritos no mesmo arquivo, separados por novas linhas.

A maioria dos comandos nos exemplos a seguir usa aspas duplas para ecoar cadeias de caracteres, que tentarão interpolar caracteres como `$` para nomes de variáveis de shell. Para sempre usar valores literais em cadeias de caracteres entre aspas, você poderá usar aspas simples.

{% powershell %}

{% note %}

**Observação:** as versões 5.1 e inferior do PowerShell (`shell: powershell`) não usam UTF-8 por padrão, ou seja, você precisa especificar a codificação UTF-8. Por exemplo:

```yaml{:copy}
jobs:
  legacy-powershell-example:
    runs-on: windows-latest
    steps:
      - shell: powershell
        run: |
          "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

As versões 6 e superior do PowerShell Core (`shell: pwsh`) usam UTF-8 por padrão. Por exemplo:

```yaml{:copy}
jobs:
  powershell-core-example:
    runs-on: windows-latest
    steps:
      - shell: pwsh
        run: |
          "mypath" >> $env:GITHUB_PATH
```

{% endnote %}

{% endpowershell %}

## Configurar uma variável de ambiente

{% bash %}

```bash{:copy}
echo "{environment_variable_name}={value}" >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

- Como usar o PowerShell versão 6 e superior:

  ```pwsh{:copy}
  "{environment_variable_name}={value}" >> $env:GITHUB_ENV
  ```

- Como usar o PowerShell versão 5.1 e inferior:

  ```powershell{:copy}
  "{environment_variable_name}={value}" | Out-File -FilePath $env:GITHUB_ENV -Encoding utf8 -Append
  ```

{% endpowershell %}

Disponibilize uma variável de ambiente para todas as etapas posteriores em um trabalho de fluxo de trabalho definindo ou atualizando a variável de ambiente e gravando isso no arquivo de ambiente `GITHUB_ENV`. A etapa que cria ou atualiza a variável de ambiente não tem acesso ao novo valor, mas todos os passos subsequentes em um trabalho terão acesso. Os nomes das variáveis de ambiente são diferenciam maiúsculas e minúsculas e você pode incluir a pontuação. Para obter mais informações, confira "[Variáveis de ambiente](/actions/learn-github-actions/environment-variables)".

### Exemplo

{% bash %}

{% raw %}
```yaml{:copy}
steps:
  - name: Set the value
    id: step_one
    run: |
      echo "action_state=yellow" >> $GITHUB_ENV
  - name: Use the value
    id: step_two
    run: |
      echo "${{ env.action_state }}" # This will output 'yellow'
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
steps:
  - name: Set the value
    id: step_one
    run: |
      "action_state=yellow" >> $env:GITHUB_ENV
  - name: Use the value
    id: step_two
    run: |
      Write-Output "${{ env.action_state }}" # This will output 'yellow'
```
{% endraw %}

{% endpowershell %}

### Strings de linha múltipla

Para strings linha múltipla, você pode usar um delimitador com a seguinte sintaxe.

```{:copy}
{name}<<{delimiter}
{value}
{delimiter}
```

{% warning %}

**Aviso:** verifique se que o delimitador que você está usando é gerado aleatoriamente e exclusivo para cada execução. Para obter mais informações, confira "[Noções básicas sobre o risco de injeções de script](/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)".

{% endwarning %}

#### Exemplo

Este exemplo usa `EOF` como delimitador e define a variável de ambiente `JSON_RESPONSE` como o valor da resposta `curl`.

{% bash %}

```yaml{:copy}
steps:
  - name: Set the value in bash
    id: step_one
    run: |
      echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
      curl https://example.com >> $GITHUB_ENV
      echo 'EOF' >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

```yaml{:copy}
steps:
  - name: Set the value in pwsh
    id: step_one
    run: |
      "JSON_RESPONSE<<EOF" >> $env:GITHUB_ENV
      (Invoke-WebRequest -Uri "https://example.com").Content >> $env:GITHUB_ENV
      "EOF" >> $env:GITHUB_ENV
    shell: pwsh
```

{% endpowershell %}

{% ifversion actions-save-state-set-output-envs %}
## Definir um parâmetro de saída

Define o parâmetro de saída de uma etapa. Observe que a etapa precisará de um `id` a ser definido para recuperar o valor de saída mais tarde.

{% bash %}

```bash{:copy}
echo "{name}={value}" >> $GITHUB_OUTPUT
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
"{name}=value" >> $env:GITHUB_OUTPUT
```

{% endpowershell %}

### Exemplo

{% bash %}

Este exemplo demonstra como definir o parâmetro de saída `SELECTED_COLOR` e recuperá-lo mais tarde:

{% raw %}
```yaml{:copy}
      - name: Set color
        id: random-color-generator
        run: echo "SELECTED_COLOR=green" >> $GITHUB_OUTPUT
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %} Este exemplo demonstra como definir o parâmetro de saída `SELECTED_COLOR` e recuperá-lo:

```yaml{:copy}
      - name: Set color
        id: random-color-generator
        run: |
            "SELECTED_COLOR=green" >> $env:GITHUB_OUTPUT
      - name: Get color
        run: Write-Output "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endpowershell %} {% endif %}

{% ifversion actions-job-summaries %}

## Adicionando um resumo de trabalho

{% bash %}

```bash{:copy}
echo "{markdown content}" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
"{markdown content}" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

Você pode definir um Markdown personalizado para cada trabalho para que ele seja exibido na página de resumo de uma execução de fluxo de trabalho. Você pode usar resumos de trabalho para exibir e agrupar conteúdo exclusivo, como resumos de resultados de teste, para que alguém que exiba o resultado de uma execução de fluxo de trabalho não precise entrar nos logs para ver informações importantes relacionadas à execução, como falhas.

Os resumos de trabalho dão suporte ao [Markdown da variante do {% data variables.product.prodname_dotcom %}](https://github.github.com/gfm/) e você pode adicionar o conteúdo do Markdown para uma etapa ao arquivo do ambiente `GITHUB_STEP_SUMMARY`. O `GITHUB_STEP_SUMMARY` é exclusivo para cada etapa em um trabalho. Para obter mais informações sobre o arquivo por etapa que `GITHUB_STEP_SUMMARY` faz referência, confira "[Arquivos de ambiente](#environment-files)".

Quando um trabalho é concluído, os resumos de todas as etapas de um trabalho são agrupados em um único resumo de trabalho e são mostrados na página de resumo da execução do fluxo de trabalho. Se vários trabalhos gerarem resumos, os resumos do trabalho serão ordenados pelo tempo de conclusão do trabalho.

### Exemplo

{% bash %}

```bash{:copy}
echo "### Hello world! :rocket:" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
"### Hello world! :rocket:" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

![Exemplo de resumo de Markdown](/assets/images/actions-job-summary-simple-example.png)

### Conteúdo de Markdown de várias linhas

Para conteúdo de Markdown de várias linhas, você pode usar `>>` para acrescentar continuamente o conteúdo para a etapa atual. A cada operação de acréscimo, um caractere de nova linha é adicionado automaticamente.

#### Exemplo

{% bash %}

```yaml
- name: Generate list using Markdown
  run: |
    echo "This is the lead in sentence for the list" >> $GITHUB_STEP_SUMMARY
    echo "" >> $GITHUB_STEP_SUMMARY # this is a blank line
    echo "- Lets add a bullet point" >> $GITHUB_STEP_SUMMARY
    echo "- Lets add a second bullet point" >> $GITHUB_STEP_SUMMARY
    echo "- How about a third one?" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Generate list using Markdown
  run: |
    "This is the lead in sentence for the list" >> $env:GITHUB_STEP_SUMMARY
    "" >> $env:GITHUB_STEP_SUMMARY # this is a blank line
    "- Lets add a bullet point" >> $env:GITHUB_STEP_SUMMARY
    "- Lets add a second bullet point" >> $env:GITHUB_STEP_SUMMARY
    "- How about a third one?" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

### Substituindo resumos de trabalho

Para limpar todo o conteúdo da etapa atual, você pode usar `>` para substituir qualquer conteúdo adicionado anteriormente.

#### Exemplo

{% bash %}

```yaml
- name: Overwrite Markdown
  run: |
    echo "Adding some Markdown content" >> $GITHUB_STEP_SUMMARY
    echo "There was an error, we need to clear the previous Markdown with some new content." > $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Overwrite Markdown
  run: |
    "Adding some Markdown content" >> $env:GITHUB_STEP_SUMMARY
    "There was an error, we need to clear the previous Markdown with some new content." > $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

### Removendo resumos de trabalho

Para remover completamente um resumo da etapa atual, o arquivo que `GITHUB_STEP_SUMMARY` faz referência pode ser excluído.

#### Exemplo

{% bash %}

```yaml
- name: Delete all summary content
  run: |
    echo "Adding Markdown content that we want to remove before the step ends" >> $GITHUB_STEP_SUMMARY
    rm $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Delete all summary content
  run: |
    "Adding Markdown content that we want to remove before the step ends" >> $env:GITHUB_STEP_SUMMARY
    rm $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

Depois que uma etapa for concluída, os resumos de trabalho serão carregados e as etapas subsequentes não poderão modificar o conteúdo do Markdown carregado anteriormente. Os resumos mascaram automaticamente todos os segredos que podem ter sido adicionados acidentalmente. Se um resumo de trabalho contiver informações confidenciais que devem ser excluídas, você poderá excluir toda a execução do fluxo de trabalho para remover todos os resumos de trabalho. Para obter mais informações, confira "[Como excluir uma execução de fluxo de trabalho](/actions/managing-workflow-runs/deleting-a-workflow-run)".

### Limites e isolamento de etapa

Os resumos de trabalho são isolados entre as etapas e cada etapa é restrita a um tamanho máximo de 1MiB. O isolamento é imposto entre as etapas para que um Markdown potencialmente malformado de uma única etapa não possa interromper a renderização do Markdown para as etapas subsequentes. Se mais de 1MiB de conteúdo for adicionado a uma etapa, o upload da etapa falhará e uma anotação de erro será criada. O upload de falhas para resumos de trabalho não afeta o status geral de uma etapa ou de um trabalho. No máximo 20 resumos de trabalho das etapas são exibidos por trabalho.

{% endif %}

## Adicionar um caminho do sistema

Insere um diretório antes da variável `PATH` do sistema e o disponibiliza automaticamente para todas as ações posteriores do trabalho atual. A ação atualmente em execução não pode acessar a variável de caminho atualizada. Para ver os caminhos atualmente definidos para seu trabalho, use `echo "$PATH"` em uma etapa ou uma ação.

{% bash %}

```bash{:copy}
echo "{path}" >> $GITHUB_PATH
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
"{path}" >> $env:GITHUB_PATH
```

{% endpowershell %}

### Exemplo

{% bash %}

Este exemplo demonstra como adicionar o diretório `$HOME/.local/bin` do usuário a `PATH`:

```bash{:copy}
echo "$HOME/.local/bin" >> $GITHUB_PATH
```

{% endbash %}

{% powershell %}

Este exemplo demonstra como adicionar o diretório `$env:HOMEPATH/.local/bin` do usuário a `PATH`:

```pwsh{:copy}
"$env:HOMEPATH/.local/bin" >> $env:GITHUB_PATH
```

{% endpowershell %}
