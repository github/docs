---
title: Comandos do fluxo de trabalho para o GitHub Actions
shortTitle: Comandos do fluxo de trabalho
intro: Você pode usar comandos do fluxo de trabalho ao executar comandos do shell em um fluxo de trabalho ou no código de uma ação.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/development-tools-for-github-actions
  - /github/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/reference/development-tools-for-github-actions
  - /actions/reference/logging-commands-for-github-actions
  - /actions/reference/workflow-commands-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Sobre os comandos do fluxo de trabalho

As ações podem comunicar-se com a máquina do executor para definir as variáveis de ambiente, valores de saída usados por outras ações, adicionar mensagens de depuração aos registros de saída e outras tarefas.

{% ifversion fpt or ghes > 2.22 or ghae %}
A maioria dos comandos de fluxo de trabalho usa o comando `echo` em um formato específico, enquanto outros são chamados escrevendo um arquivo. Para obter mais informações, consulte ["Arquivos de ambiente".](#environment-files)
{% else %}
Os comandos do gluxo de trabalho usam o comando `echo` em um formato específico.
{% endif %}

``` bash
echo "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% note %}

**Observação:** Os nomes do comando do fluxo de trabalho e do parâmetro não diferenciam maiúsculas e minúsculas.

{% endnote %}

{% warning %}

**Aviso:** se você estiver usando um prompt do comando, omita as aspas duplas (`"`) ao usar comandos do fluxo de trabalho.

{% endwarning %}

## Usar comandos do fluxo de trabalho para acessar funções do kit de de ferramentas

O [actions/toolkit](https://github.com/actions/toolkit) inclui uma quantidade de funções que podem ser executadas como comandos do fluxo de trabalho. Use a sintaxe `::` para executar os comandos do fluxo de trabalho no arquivo YAML. Em seguida, esses comandos serão enviados para a o executor por meio do `stdout`. Por exemplo, em vez de usar o código para definir uma saída, como abaixo:

```javascript
core.setOutput('SELECTED_COLOR', 'green');
```

Você pode usar o comando `set-output` no seu fluxo de trabalho para definir o mesmo valor:

{% raw %}
``` yaml
      - name: Set selected color
        run: echo '::set-output name=SELECTED_COLOR::green'
        id: random-color-generator
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

A tabela a seguir mostra quais funções do conjunto de ferramentas estão disponíveis dentro de um fluxo de trabalho:

| Função do kit de ferramentas                                                                                               | Comando equivalente do fluxo de trabalho                         |
| -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `core.addPath`                                                                                                             |                                                                  |
| {% ifversion fpt or ghes > 2.22 or ghae %}Accessible using environment file `GITHUB_PATH`{% else %} `add-path` {% endif %} |                                                                  |
|                                                                                                                            |                                                                  |
| `core.debug`                                                                                                               | `debug` |{% ifversion fpt or ghes > 3.2 or ghae-issue-4929 %}
| `core.notice`                                                                                                              | `notice` 
{% endif %}
| `core.error`                                                                                                               | `erro`                                                           |
| `core.endGroup`                                                                                                            | `endgroup`                                                       |
| `core.exportVariable`                                                                                                      |                                                                  |
| {% ifversion fpt or ghes > 2.22 or ghae %}Accessible using environment file `GITHUB_ENV`{% else %} `set-env` {% endif %}   |                                                                  |
|                                                                                                                            |                                                                  |
| `core.getInput`                                                                                                            | Acessível por meio do uso da variável de ambiente `INPUT_{NAME}` |
| `core.getState`                                                                                                            | Acessível por meio do uso da variável de ambiente `STATE_{NAME}` |
| `core.isDebug`                                                                                                             | Acessível por meio do uso da variável de ambiente `RUNNER_DEBUG` |
| `core.saveState`                                                                                                           | `save-state`                                                     |
| `core.setFailed`                                                                                                           | Usado como um atalho para `::error` e `exit 1`                   |
| `core.setOutput`                                                                                                           | `set-output`                                                     |
| `core.setSecret`                                                                                                           | `add-mask`                                                       |
| `core.startGroup`                                                                                                          | `grupo`                                                          |
| `core.warning`                                                                                                             | `arquivo de aviso`                                               |

{% ifversion ghes < 3.0 %}
## Definir uma variável de ambiente

```
::set-env name={name}::{value}
```

Creates or updates an environment variable for any steps running next in a job. The step that creates or updates the environment variable does not have access to the new value, but all subsequent steps in a job will have access. As variáveis de ambiente diferenciam maiúsculas de minúsculas e podem ter pontuação.

### Exemplo

``` bash
echo "::set-env name=action_state::yellow"
```
{% endif %}

## Definir um parâmetro de saída

```
::set-output name={name}::{value}
```

Configura um parâmetro de saída da ação.

Opcionalmente, você também pode declarar os parâmetros de saída no arquivo de metadados de uma ação. Para obter mais informações, consulte "[Sintaxe de metadados para o {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs)".

### Exemplo

``` bash
echo "::set-output name=action_fruit::strawberry"
```

{% ifversion ghes < 3.0 %}
## Adicionar um caminho do sistema

```
::add-path::{path}
```

Agrega um diretório à variável de sistema `PATH` para todas as ações subsequentes no trabalho atual. A ação que está em execução não pode acessar a nova variável de caminho.

### Exemplo

``` bash
echo "::add-path::/path/to/dir"
```
{% endif %}

## Configurar uma mensagem de depuração

```
::debug::{message}
```

Imprime uma mensagem de erro no log. Você deve criar um segredo nomeado `ACTIONS_STEP_DEBUG` com o valor `true` para ver as mensagens de erro configuradas por esse comando no log. Para obter mais informações, consulte "[Habilitar o registro de depuração](/actions/managing-workflow-runs/enabling-debug-logging)".

### Exemplo

``` bash
echo "::debug::Set the Octocat variable"
```

{% ifversion fpt or ghes > 3.2 or ghae-issue-4929 %}

## Setting a notice message

```
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

Creates a notice message and prints the message to the log. {% data reusables.actions.message-annotation-explanation %}

{% data reusables.actions.message-parameters %}

### Exemplo

``` bash
echo "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endif %}

## Configurar uma mensagem de aviso

```
::warning file={name},line={line},endLine={endLine},title={title}::{message}
```

Cria uma mensagem de aviso e a imprime no log. {% data reusables.actions.message-annotation-explanation %}

{% data reusables.actions.message-parameters %}

### Exemplo

``` bash
echo "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

## Configurar uma mensagem de erro

```
::error file={name},line={line},endLine={endLine},title={title}::{message}
```

Cria uma mensagem de erro e a imprime no log. {% data reusables.actions.message-annotation-explanation %}

{% data reusables.actions.message-parameters %}

### Exemplo

``` bash
echo "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

## Agrupar linhas dos registros

```
::group::{title}
::endgroup::
```

Cria um grupo expansível no registro. Para criar um grupo, use o comando `grupo` e especifique um `título`. Qualquer coisa que você imprimir no registro entre os comandos `grupo` e `endgroup` estará aninhada dentro de uma entrada expansível no registro.

### Exemplo

```bash
echo "::group::My title"
echo "Inside group"
echo "::endgroup::"
```

![Grupo dobrável no registro da execução do fluxo de trabalho](/assets/images/actions-log-group.png)

## Mascarar um valor no registro

```
::add-mask::{value}
```

Mascarar um valor evita que uma string ou variável seja impressa no log. Cada palavra mascarada separada por espaço em branco é substituída pelo caractere `*`. Você pode usar uma variável de ambiente ou string para o `value` da máscara.

### Exemplo de máscara de string

Quando você imprime `"Mona The Octocat"` no log, você verá `"***"`.

```bash
echo "::add-mask::Mona The Octocat"
```

### Exemplo de máscara de uma variável de ambiente

Ao imprimir a variável `MY_NAME` ou o valor `"Mona The Octocat"` no log, você verá `"***"` em vez de `"Mona The Octocat"`.

```bash
MY_NAME="Mona The Octocat"
echo "::add-mask::$MY_NAME"
```

## Parar e iniciar os comandos no fluxo de trabalho

`::stop-commands::{endtoken}`

Para de processar quaisquer comandos de fluxo de trabalho. Esse comando especial permite fazer o registro do que você desejar sem executar um comando do fluxo de trabalho acidentalmente. Por exemplo, é possível parar o log para gerar um script inteiro que tenha comentários.

To stop the processing of workflow commands, pass a unique token to `stop-commands`. To resume processing workflow commands, pass the same token that you used to stop workflow commands.

{% warning %}

**Warning:** Make sure the token you're using is randomly generated and unique for each run. As demonstrated in the example below, you can generate a unique hash of your `github.token` for each run.

{% endwarning %}

```
::{endtoken}::
```

### Example stopping and starting workflow commands

{% raw %}

```yaml
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: disable workflow commands
        run: |
          echo '::warning:: this is a warning'
          echo "::stop-commands::`echo -n ${{ github.token }} | sha256sum | head -c 64`"
          echo '::warning:: this will NOT be a warning'
          echo "::`echo -n ${{ github.token }} | sha256sum | head -c 64`::"
          echo '::warning:: this is a warning again'
```

{% endraw %}

## Enviar valores para as ações anterior e posterior

Você pode usar o comando `save-state` para criar variáveis de ambiente para compartilhar com as ações `pre:` ou `post:`. Por exemplo, você pode criar um arquivo com a ação `pre:`, passar o local do arquivo para a ação `main:` e, em seguida, usar a ação `post:` para excluir o arquivo. Como alternativa, você pode criar um arquivo com a ação `main:` ação, passar o local do arquivo para a ação `post:`, além de usar a ação `post:` para excluir o arquivo.

Se você tiver múltiplas ações `pre:` ou `post:` ações, você poderá apenas acessar o valor salvo na ação em que `save-state` foi usado. Para obter mais informações sobre a ação `post:`, consulte "[Sintaxe de metadados para {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#post)".

O comando `save-state` pode ser executado apenas em uma ação e não está disponível para arquivos YAML. O valor salvo é armazenado como um valor de ambiente com o prefixo `STATE_`.

Este exemplo usa o JavaScript para executar o comando `save-state`. A variável de ambiente resultante é denominada `STATE_processID` com o valor de `12345`:

``` javascript
console.log('::save-state name=processID::12345')
```

A variável `STATE_processID` está exclusivamente disponível para o script de limpeza executado na ação `principal`. Este exemplo é executado em `principal` e usa o JavaScript para exibir o valor atribuído à variável de ambiente `STATE_processID`:

``` javascript
console.log("O PID em execução a partir da ação principal é: " +  process.env.STATE_processID);
```

{% ifversion fpt or ghes > 2.22 or ghae %}
## Arquivos de Ambiente

Durante a execução de um fluxo de trabalho, o executor gera arquivos temporários que podem ser usados para executar certas ações. O caminho para esses arquivos são expostos através de variáveis de ambiente. Você precisará usar a codificação UTF-8 ao escrever para esses arquivos para garantir o processamento adequado dos comandos. Vários comandos podem ser escritos no mesmo arquivo, separados por novas linhas.

{% warning %}

**Aviso:** O Powershell não usa UTF-8 por padrão. Certifique-se de escrever os arquivos usando a codificação correta. Por exemplo, você deve definir a codificação UTF-8 ao definir o caminho:

```yaml
steps:
  - run: echo "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

{% endwarning %}

## Definir uma variável de ambiente

``` bash
echo "{name}={value}" >> $GITHUB_ENV
```

Creates or updates an environment variable for any steps running next in a job. The step that creates or updates the environment variable does not have access to the new value, but all subsequent steps in a job will have access. As variáveis de ambiente diferenciam maiúsculas de minúsculas e podem ter pontuação.

### Exemplo

{% raw %}
```
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

### Strings de linha múltipla

Para strings linha múltipla, você pode usar um delimitador com a seguinte sintaxe.

```
{name}<<{delimiter}
{value}
{delimiter}
```

#### Exemplo

Neste exemplo, usamos `EOF` como um delimitador e definimos a variável de ambiente `JSON_RESPONSE` como o valor da resposta de curl.
```yaml
steps:
  - name: Set the value
    id: step_one
    run: |
      echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
      curl https://httpbin.org/json >> $GITHUB_ENV
      echo 'EOF' >> $GITHUB_ENV
```

## Adicionar um caminho do sistema

``` bash
echo "{path}" >> $GITHUB_PATH
```

Prepara um diretório para a variável `PATH` do sistema e o torna disponível para todas as ações subsequentes no trabalho atual; a ação atualmente em execução não pode acessar a variável de caminho atualizada. Para ver os caminhos atualmente definidos para o seu trabalho, você pode usar o `echo "$PATH"` em uma etapa ou ação.

### Exemplo

Este exemplo demonstra como adicionar o diretório `$HOME/.local/bin` ao `PATH`:

``` bash
echo "$HOME/.local/bin" >> $GITHUB_PATH
```
{% endif %}
