---
title: Comandos do fluxo de trabalho para o GitHub Actions
shortTitle: Comandos do fluxo de trabalho
intro: Você pode usar comandos do fluxo de trabalho ao executar comandos do shell em um fluxo de trabalho ou no código de uma ação.
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre os comandos do fluxo de trabalho

As ações podem comunicar-se com a máquina do executor para definir as variáveis de ambiente, valores de saída usados por outras ações, adicionar mensagens de depuração aos registros de saída e outras tarefas.

A maioria dos comandos de fluxo de trabalho usa o comando `echo` em um formato específico, enquanto outros são chamados escrevendo um arquivo. Para obter mais informações, consulte ["Arquivos de ambiente".](#environment-files)

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

| Função do kit de ferramentas | Comando equivalente do fluxo de trabalho                              |
| ---------------------------- | --------------------------------------------------------------------- |
| `core.addPath`               | Acessível usando o arquivo de ambiente `GITHUB_PATH`                  |
| `core.debug`                 | `debug` |{% ifversion fpt or ghes > 3.2 or ghae-issue-4929 or ghec %}
| `core.notice`                | `notice` 
{% endif %}
| `core.error`                 | `erro`                                                                |
| `core.endGroup`              | `endgroup`                                                            |
| `core.exportVariable`        | Acessível usando o arquivo de ambiente `GITHUB_ENV`                   |
| `core.getInput`              | Acessível por meio do uso da variável de ambiente `INPUT_{NAME}`      |
| `core.getState`              | Acessível por meio do uso da variável de ambiente `STATE_{NAME}`      |
| `core.isDebug`               | Acessível por meio do uso da variável de ambiente `RUNNER_DEBUG`      |
| `core.saveState`             | `save-state`                                                          |
| `core.setCommandEcho`        | `echo`                                                                |
| `core.setFailed`             | Usado como um atalho para `::error` e `exit 1`                        |
| `core.setOutput`             | `set-output`                                                          |
| `core.setSecret`             | `add-mask`                                                            |
| `core.startGroup`            | `grupo`                                                               |
| `core.warning`               | `aviso`                                                               |

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

## Configurar uma mensagem de depuração

```
::debug::{message}
```

Imprime uma mensagem de erro no log. Você deve criar um segredo nomeado `ACTIONS_STEP_DEBUG` com o valor `true` para ver as mensagens de erro configuradas por esse comando no log. Para obter mais informações, consulte "[Habilitar o registro de depuração](/actions/managing-workflow-runs/enabling-debug-logging)".

### Exemplo

``` bash
echo "::debug::Set the Octocat variable"
```

{% ifversion fpt or ghes > 3.2 or ghae-issue-4929 or ghec %}

## Configurando uma mensagem de aviso

```
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

Cria uma mensagem de aviso e a imprime no registro. {% data reusables.actions.message-annotation-explanation %}

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

Para parar o processamento de comandos de fluxo de trabalho, passe um token único para `stop-commands`. Para retomar os comandos do fluxo de trabalho, passe o mesmo token que você usou para parar os comandos do fluxo de trabalho.

{% warning %}

**Aviso:** Certifique-se de que o token que você está usando é gerado aleatoriamente e exclusivo para cada execução. Como demonstrado no exemplo abaixo, você pode gerar um hash exclusivo do seu `github.token` para cada execução.

{% endwarning %}

```
::{endtoken}::
```

### Exemplo de parar e iniciar comandos de workflow

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

## Eco de saídas de comando

```
::echo::on
::echo::off
```

Habilita ou desabilita o eco de comandos de fluxo de trabalho. Por exemplo, se você usar o comando `set-output` em um fluxo de trabalho, ele definirá um parâmetro de saída, mas o registro da execução do fluxo de trabalho não irá mostrar o comando em si. Se você habilitar o comando de eco, o registro mostrará o comando, como `::set-output name={name}::{value}`.

O eco de comandos encontra-se desabilitado por padrão. No entanto, um comando de fluxo de trabalho será refletido se houver algum erro que processa o comando.

Os comandos `add-mask`, `depurar`, `aviso` e `erro` não são compatíveis com o eco, porque suas saídas já estão ecoadas no registros.

Você também pode habilitar o comando de eco globalmente ativando o registrode depuração da etapa usando o segredo `ACTIONS_STEP_DEBUG`. Para obter mais informações, consulte[Habilitando o log de depuração](/actions/managing-workflow-runs/enabling-debug-logging)". Em contraste, o comando do fluxo de trabalho `echo` permite que você habilite o comando de eco em um nível mais granular em vez de habilitá-lo para cada fluxo de trabalho em um repositório.

### Exemplo de alternar o comando do eco

```yaml
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

A etapa acima imprime as seguintes linhas no registro:

```
::set-output name=action_echo::enabled
::echo::off
```

Apenas os comandos do fluxo de trabalho `set-output` e `echo` estão incluídos no registro, porque o recurso de comandos só estava habilitado quando eles foram executados. Mesmo que nem sempre ele esteja ecoado, o parâmetro de saída é definido em todos os casos.

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

## Environment files

Durante a execução de um fluxo de trabalho, o executor gera arquivos temporários que podem ser usados para executar certas ações. O caminho para esses arquivos são expostos através de variáveis de ambiente. Você precisará usar a codificação UTF-8 ao escrever para esses arquivos para garantir o processamento adequado dos comandos. Vários comandos podem ser escritos no mesmo arquivo, separados por novas linhas.

{% warning %}

**Aviso:** no Windows, o PowerShell de legado (`shell: powershell`) não usa UTF-8 por padrão. Certifique-se de escrever os arquivos usando a codificação correta. Por exemplo, você deve definir a codificação UTF-8 ao definir o caminho:

```yaml
jobs:
  legacy-powershell-example:
    uses: windows-2019
    steps:
      - shell: powershell
        run: echo "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

Ou mude para PowerShell Core, cujo padrão é UTF-8:

```yaml
jobs:
  modern-pwsh-example:
    uses: windows-2019
    steps:
      - shell: pwsh
        run: echo "mypath" | Out-File -FilePath $env:GITHUB_PATH -Append # no need for -Encoding utf8
```

Mais detalhes sobre UTF-8 e PowerShell Core encontrados nesta excelente [resposta do Stack Overflow](https://stackoverflow.com/a/40098904/162694):

> ### Leitura opcional: A perspectiva entre plataformas: PowerShell _Core_:
> 
> [O PowerShell agora é multiplataforma](https://blogs.msdn.microsoft.com/powershell/2016/08/18/powershell-on-linux-and-open-source-2/), por meio da sua edição do **[PowerShell _Core_](https://github.com/PowerShell/PowerShell)**, cuja codificação - sensívelmente - *** é igual a ***BOM-less UTF-8******, em linha com plataformas do Unix.

{% endwarning %}

## Definir uma variável de ambiente

``` bash
echo "{environment_variable_name}={value}" >> $GITHUB_ENV
```

You can make an environment variable available to any subsequent steps in a workflow job by defining or updating the environment variable and writing this to the `GITHUB_ENV` environment file. A etapa que cria ou atualiza a variável de ambiente não tem acesso ao novo valor, mas todos os passos subsequentes em um trabalho terão acesso. The names of environment variables are case-sensitive, and you can include punctuation. Para obter mais informações, consulte "[Variáveis de ambiente](/actions/learn-github-actions/environment-variables)".

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

Prepara um diretório para a variável `PATH` do sistema e disponibiliza automaticamente para todas as ações subsequentes no trabalho atual; a ação atualmente em execução não pode acessar a variável de caminho atualizada. Para ver os caminhos atualmente definidos para o seu trabalho, você pode usar o `echo "$PATH"` em uma etapa ou ação.

### Exemplo

Este exemplo demonstra como adicionar o diretório `$HOME/.local/bin` ao `PATH`:

``` bash
echo "$HOME/.local/bin" >> $GITHUB_PATH
```
