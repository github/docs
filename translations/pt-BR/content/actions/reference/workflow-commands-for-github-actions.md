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
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre os comandos do fluxo de trabalho

As ações podem comunicar-se com a máquina do executor para definir as variáveis de ambiente, valores de saída usados por outras ações, adicionar mensagens de depuração aos registros de saída e outras tarefas.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
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

### Usar comandos do fluxo de trabalho para acessar funções do kit de de ferramentas

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

| Função do kit de ferramentas                                                                                                                                                        | Comando equivalente do fluxo de trabalho                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `core.addPath`                                                                                                                                                                      |                                                                  |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}Accessible using environment file `GITHUB_PATH`{% else %} `add-path` {% endif %} |                                                                  |
|                                                                                                                                                                                     |                                                                  |
| `core.debug`                                                                                                                                                                        | `debug`                                                          |
| `core.error`                                                                                                                                                                        | `erro`                                                           |
| `core.endGroup`                                                                                                                                                                     | `endgroup`                                                       |
| `core.exportVariable`                                                                                                                                                               |                                                                  |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}Accessible using environment file `GITHUB_ENV`{% else %} `set-env` {% endif %}   |                                                                  |
|                                                                                                                                                                                     |                                                                  |
| `core.getInput`                                                                                                                                                                     | Acessível por meio do uso da variável de ambiente `INPUT_{NAME}` |
| `core.getState`                                                                                                                                                                     | Acessível por meio do uso da variável de ambiente `STATE_{NAME}` |
| `core.isDebug`                                                                                                                                                                      | Acessível por meio do uso da variável de ambiente `RUNNER_DEBUG` |
| `core.saveState`                                                                                                                                                                    | `save-state`                                                     |
| `core.setFailed`                                                                                                                                                                    | Usado como um atalho para `::error` e `exit 1`                   |
| `core.setOutput`                                                                                                                                                                    | `set-output`                                                     |
| `core.setSecret`                                                                                                                                                                    | `add-mask`                                                       |
| `core.startGroup`                                                                                                                                                                   | `grupo`                                                          |
| `core.warning`                                                                                                                                                                      | `arquivo de aviso`                                               |

{% if currentVersion ver_lt "enterprise-server@2.23" %}
### Definir uma variável de ambiente

`::set-env name={name}::{value}`

Cria ou atualiza uma variável de ambiente para quaisquer ações a serem executadas em seguida no trabalho. A ação que cria ou atualiza a variável de ambiente não tem acesso a um valor novo, mas todas as ações subsequentes em um trabalho terão. As variáveis de ambiente diferenciam maiúsculas de minúsculas e podem ter pontuação.

#### Exemplo

``` bash
echo "::set-env name=action_state::yellow"
```
{% endif %}

### Definir um parâmetro de saída

`::set-output name={name}::{value}`

Configura um parâmetro de saída da ação.

Opcionalmente, você também pode declarar os parâmetros de saída no arquivo de metadados de uma ação. Para obter mais informações, consulte "[Sintaxe de metadados para o {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs)".

#### Exemplo

``` bash
echo "::set-output name=action_fruit::strawberry"
```

{% if currentVersion ver_lt "enterprise-server@2.23" %}
### Adicionar um caminho do sistema

`::add-path::{path}`

Agrega um diretório à variável de sistema `PATH` para todas as ações subsequentes no trabalho atual. A ação que está em execução não pode acessar a nova variável de caminho.

#### Exemplo

``` bash
echo "::add-path::/path/to/dir"
```
{% endif %}

### Configurar uma mensagem de depuração

`::debug::{message}`

Imprime uma mensagem de erro no log. Você deve criar um segredo nomeado `ACTIONS_STEP_DEBUG` com o valor `true` para ver as mensagens de erro configuradas por esse comando no log. Para obter mais informações, consulte "[Habilitar o registro de depuração](/actions/managing-workflow-runs/enabling-debug-logging)".

#### Exemplo

``` bash
echo "::debug::Set the Octocat variable"
```

### Configurar uma mensagem de aviso

`::warning file={name},line={line},col={col}::{message}`

Cria uma mensagem de aviso e a imprime no log. Como opção, você pode fornecer um nome de arquivo (`file`), número de linha (`line`) e número de coluna (`col`) onde o aviso ocorreu.

#### Exemplo

``` bash
echo "::warning file=app.js,line=1,col=5::Missing semicolon"
```

### Configurar uma mensagem de erro

`::error file={name},line={line},col={col}::{message}`

Cria uma mensagem de erro e a imprime no log. Cria uma mensagem de erro e a imprime no log. Como opção, você pode fornecer um nome de arquivo (`file`), número de linha (`line`) e número de coluna (`col`) onde o aviso ocorreu.

#### Exemplo

``` bash
echo "::error file=app.js,line=10,col=15::Something went wrong"
```

### Grouping log lines

```
::group::{title}
::endgroup::
```

Creates an expandable group in the log. To create a group, use the `group` command and specify a `title`. Anything you print to the log between the `group` and `endgroup` commands is nested inside an expandable entry in the log.

#### Exemplo

```bash
echo "::group::My title"
echo "Inside group"
echo "::endgroup::"
```

![Foldable group in workflow run log](/assets/images/actions-log-group.png)

### Mascarar um valor no registro

`::add-mask::{value}`

Mascarar um valor evita que uma string ou variável seja impressa no log. Cada palavra mascarada separada por espaço em branco é substituída pelo caractere `*`. Você pode usar uma variável de ambiente ou string para o `value` da máscara.

#### Exemplo de máscara de string

Quando você imprime `"Mona The Octocat"` no log, você verá `"***"`.

```bash
echo "::add-mask::Mona The Octocat"
```

#### Exemplo de máscara de uma variável de ambiente

Ao imprimir a variável `MY_NAME` ou o valor `"Mona The Octocat"` no log, você verá `"***"` em vez de `"Mona The Octocat"`.

```bash
MY_NAME="Mona The Octocat"
echo "::add-mask::$MY_NAME"
```

### Parar e iniciar os comandos no fluxo de trabalho

`::stop-commands::{endtoken}`

Para de processar quaisquer comandos de fluxo de trabalho. Esse comando especial permite fazer o registro do que você desejar sem executar um comando do fluxo de trabalho acidentalmente. Por exemplo, é possível parar o log para gerar um script inteiro que tenha comentários.

#### Exemplo de interrupção dos comandos do fluxo de trabalho

``` bash
echo "::stop-commands::pause-logging"
```

Para iniciar os comandos do fluxo de trabalho, passe o token que você usou para parar os comandos do fluxo de trabalho.

`::{endtoken}::`

#### Exemplo de inicialização dos comandos do fluxo de trabalho

``` bash
echo "::pause-logging::"
```

### Enviar valores para as ações anterior e posterior

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

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
## Arquivos de Ambiente

Durante a execução de um fluxo de trabalho, o executor gera arquivos temporários que podem ser usados para executar certas ações. O caminho para esses arquivos são expostos através de variáveis de ambiente. Você precisará usar a codificação UTF-8 ao escrever para esses arquivos para garantir o processamento adequado dos comandos. Vários comandos podem ser escritos no mesmo arquivo, separados por novas linhas.

{% warning %}

**Aviso:** O Powershell não usa UTF-8 por padrão. Certifique-se de escrever os arquivos usando a codificação correta. Por exemplo, você deve definir a codificação UTF-8 ao definir o caminho:

```
steps:
  - run: echo "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

{% endwarning %}

### Definir uma variável de ambiente

`echo "{name}={value}" >> $GITHUB_ENV`

Cria ou atualiza uma variável de ambiente para quaisquer ações a serem executadas em seguida no trabalho. A ação que cria ou atualiza a variável de ambiente não tem acesso a um valor novo, mas todas as ações subsequentes em um trabalho terão. As variáveis de ambiente diferenciam maiúsculas de minúsculas e podem ter pontuação.

#### Exemplo

```bash
echo "action_state=yellow" >> $GITHUB_ENV
```

Executar `$action_state` em uma etapa futura agora retornará `amarelo`

#### Multiline strings

Para strings linha múltipla, você pode usar um delimitador com a seguinte sintaxe.

```
{name}<<{delimiter}
{value}
{delimiter}
```

##### Exemplo

Neste exemplo, usamos `EOF` como um delimitador e definimos a variável de ambiente `JSON_RESPONSE` como o valor da resposta de curl.
```
steps:
  - name: Set the value
    id: step_one
    run: |
        echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
        curl https://httpbin.org/json >> $GITHUB_ENV
        echo 'EOF' >> $GITHUB_ENV
```

### Adicionar um caminho do sistema

`echo "{path}" >> $GITHUB_PATH`

Agrega um diretório à variável de sistema `PATH` para todas as ações subsequentes no trabalho atual. A ação que está em execução não pode acessar a nova variável de caminho.

#### Exemplo

``` bash
echo "/path/to/dir" >> $GITHUB_PATH
```
{% endif %}
