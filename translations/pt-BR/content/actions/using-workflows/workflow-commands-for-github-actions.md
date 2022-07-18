---
title: Comandos do fluxo de trabalho para o GitHub Actions
shortTitle: Comandos do fluxo de trabalho
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre os comandos do fluxo de trabalho

As ações podem comunicar-se com a máquina do executor para definir as variáveis de ambiente, valores de saída usados por outras ações, adicionar mensagens de depuração aos registros de saída e outras tarefas.

A maioria dos comandos de fluxo de trabalho usa o comando `echo` em um formato específico, enquanto outros são chamados escrevendo um arquivo. Para obter mais informações, consulte ["Arquivos de ambiente".](#environment-files)

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

**Observação:** Os nomes do comando do fluxo de trabalho e do parâmetro não diferenciam maiúsculas e minúsculas.

{% endnote %}

{% warning %}

**Aviso:** se você estiver usando um prompt do comando, omita as aspas duplas (`"`) ao usar comandos do fluxo de trabalho.

{% endwarning %}

## Usar comandos do fluxo de trabalho para acessar funções do kit de de ferramentas

O [actions/toolkit](https://github.com/actions/toolkit) inclui uma quantidade de funções que podem ser executadas como comandos do fluxo de trabalho. Use a sintaxe `::` para executar os comandos do fluxo de trabalho no arquivo YAML. Em seguida, esses comandos serão enviados para a o executor por meio do `stdout`. Por exemplo, em vez de usar o código para definir uma saída, como abaixo:

```javascript{:copy}
core.setOutput('SELECTED_COLOR', 'green');
```

### Exemplo: Definindo um valor

Você pode usar o comando `set-output` no seu fluxo de trabalho para definir o mesmo valor:

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

A tabela a seguir mostra quais funções do conjunto de ferramentas estão disponíveis dentro de um fluxo de trabalho:

| Função do kit de ferramentas | Comando equivalente do fluxo de trabalho                         |
| ---------------------------- | ---------------------------------------------------------------- |
| `core.addPath`               | Acessível usando o arquivo de ambiente `GITHUB_PATH`             |
| `core.debug`                 | `debug` |{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
| `core.notice`                | `notice` 
{% endif %}
| `core.error`                 | `erro`                                                           |
| `core.endGroup`              | `endgroup`                                                       |
| `core.exportVariable`        | Acessível usando o arquivo de ambiente `GITHUB_ENV`              |
| `core.getInput`              | Acessível por meio do uso da variável de ambiente `INPUT_{NAME}` |
| `core.getState`              | Acessível por meio do uso da variável de ambiente `STATE_{NAME}` |
| `core.isDebug`               | Acessível por meio do uso da variável de ambiente `RUNNER_DEBUG` |
{%- ifversion actions-job-summaries %}
| `core.summary` | Pode ser acessado usando a variável de ambiente `GITHUB_STEP_SUMMARY` |
{%- endif %}
| `core.saveState`  | `save-state` | | `core.setCommandEcho` | `echo` | | `core.setFailed`  | Usado como atalho para `::error` e `exit 1` | | `core.setOutput`  | `set-output` | | `core.setSecret`  | `add-mask` | | `core.startGroup` | `group` | | `core.warning`    | `warning` |

## Definir um parâmetro de saída

Configura um parâmetro de saída da ação.

```{:copy}
::set-output name={name}::{value}
```

Opcionalmente, você também pode declarar os parâmetros de saída no arquivo de metadados de uma ação. Para obter mais informações, consulte "[Sintaxe de metadados para o {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)".

### Exemplo: Definindo um parâmetro de saída

{% bash %}

```bash{:copy}
echo "::set-output name=action_fruit::strawberry"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::set-output name=action_fruit::strawberry"
```

{% endpowershell %}

## Configurar uma mensagem de depuração

Imprime uma mensagem de erro no log. Você deve criar um segredo nomeado `ACTIONS_STEP_DEBUG` com o valor `true` para ver as mensagens de erro configuradas por esse comando no log. Para obter mais informações, consulte "[Habilitar o registro de depuração](/actions/managing-workflow-runs/enabling-debug-logging)".

```{:copy}
::debug::{message}
```

### Exemplo: Definindo uma mensagem de depuração

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

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}

## Configurando uma mensagem de aviso

Cria uma mensagem de aviso e a imprime no registro. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Exemplo: Definindo uma mensagem de aviso

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
{% endif %}

## Configurar uma mensagem de aviso

Cria uma mensagem de aviso e a imprime no log. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::warning file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Exemplo: Configurando uma mensagem de aviso

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

### Exemplo: Configurando uma mensagem de erro

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

Cria um grupo expansível no registro. Para criar um grupo, use o comando `grupo` e especifique um `título`. Qualquer coisa que você imprimir no registro entre os comandos `grupo` e `endgroup` estará aninhada dentro de uma entrada expansível no registro.

```{:copy}
::group::{title}
::endgroup::
```

### Exemplo: Agrupamento de linhas de log

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

Mascarar um valor evita que uma string ou variável seja impressa no log. Cada palavra mascarada separada por espaço em branco é substituída pelo caractere `*`. Você pode usar uma variável de ambiente ou string para o `value` da máscara. Quando você mascara um valor, ele é tratado como um segredo e será redatado no executor. Por exemplo, depois de você mascarar um valor, você nãopoderá configurar esse valor como uma saída.

### Exemplo: Mascarando uma string

Quando você imprime `"Mona The Octocat"` no log, você verá `"***"`.

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

### Exemplo: Mascarando uma variável de ambiente

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

Para parar o processamento de comandos de fluxo de trabalho, passe um token único para `stop-commands`. Para retomar os comandos do fluxo de trabalho, passe o mesmo token que você usou para parar os comandos do fluxo de trabalho.

{% warning %}

**Aviso:** Certifique-se de que o token que você está usando é gerado aleatoriamente e exclusivo para cada execução.

{% endwarning %}

```{:copy}
::{endtoken}::
```

### Exemplo: Interrompendo e iniciando comandos do fluxo de trabalho

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

## Eco de saídas de comando

Habilita ou desabilita o eco de comandos de fluxo de trabalho. Por exemplo, se você usar o comando `set-output` em um fluxo de trabalho, ele definirá um parâmetro de saída, mas o registro da execução do fluxo de trabalho não irá mostrar o comando em si. Se você habilitar o comando de eco, o registro mostrará o comando, como `::set-output name={name}::{value}`.

```{:copy}
::echo::on
::echo::off
```

O eco de comandos encontra-se desabilitado por padrão. No entanto, um comando de fluxo de trabalho será refletido se houver algum erro que processa o comando.

Os comandos `add-mask`, `depurar`, `aviso` e `erro` não são compatíveis com o eco, porque suas saídas já estão ecoadas no registros.

Você também pode habilitar o comando de eco globalmente ativando o registrode depuração da etapa usando o segredo `ACTIONS_STEP_DEBUG`. Para obter mais informações, consulte[Habilitando o log de depuração](/actions/managing-workflow-runs/enabling-debug-logging)". Em contraste, o comando do fluxo de trabalho `echo` permite que você habilite o comando de eco em um nível mais granular em vez de habilitá-lo para cada fluxo de trabalho em um repositório.

### Exemplo: Alternando o comando echoing

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

O exemplo acima imprime as seguintes linhas no registro:

```{:copy}
::set-output name=action_echo::enabled
::echo::off
```

Apenas os comandos do fluxo de trabalho `set-output` e `echo` estão incluídos no registro, porque o recurso de comandos só estava habilitado quando eles foram executados. Mesmo que nem sempre ele esteja ecoado, o parâmetro de saída é definido em todos os casos.

## Enviar valores para as ações anterior e posterior

Você pode usar o comando `save-state` para criar variáveis de ambiente para compartilhar com as ações `pre:` ou `post:`. Por exemplo, você pode criar um arquivo com a ação `pre:`, passar o local do arquivo para a ação `main:` e, em seguida, usar a ação `post:` para excluir o arquivo. Como alternativa, você pode criar um arquivo com a ação `main:` ação, passar o local do arquivo para a ação `post:`, além de usar a ação `post:` para excluir o arquivo.

Se você tiver múltiplas ações `pre:` ou `post:` ações, você poderá apenas acessar o valor salvo na ação em que `save-state` foi usado. Para obter mais informações sobre a ação `post:`, consulte "[Sintaxe de metadados para {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#runspost)".

O comando `save-state` pode ser executado apenas em uma ação e não está disponível para arquivos YAML. O valor salvo é armazenado como um valor de ambiente com o prefixo `STATE_`.

Este exemplo usa o JavaScript para executar o comando `save-state`. A variável de ambiente resultante é denominada `STATE_processID` com o valor de `12345`:

```javascript{:copy}
console.log('::save-state name=processID::12345')
```

A variável `STATE_processID` está exclusivamente disponível para o script de limpeza executado na ação `principal`. Este exemplo é executado em `principal` e usa o JavaScript para exibir o valor atribuído à variável de ambiente `STATE_processID`:

```javascript{:copy}
console.log("O PID em execução a partir da ação principal é: " +  process.env.STATE_processID);
```

## Arquivos de ambiente

Durante a execução de um fluxo de trabalho, o executor gera arquivos temporários que podem ser usados para executar certas ações. O caminho para esses arquivos são expostos através de variáveis de ambiente. Você precisará usar a codificação UTF-8 ao escrever para esses arquivos para garantir o processamento adequado dos comandos. Vários comandos podem ser escritos no mesmo arquivo, separados por novas linhas.

{% powershell %}

{% note %}

**Observação:** As verões 5.1 e inferiores do PowerShell (`shell: powershell`) não usam UTF-8 por padrão. Portanto, você deve especificar a codificação UTF-8. Por exemplo:

```yaml{:copy}
jobs:
  legacy-powershell-example:
    runs-on: windows-latest
    steps:
      - shell: powershell
        run: |
          "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

A versão 6 ou superior do PowerShell Core (`shell: pwsh`) usa UTF-8 por padrão. Por exemplo:

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

## Definir uma variável de ambiente

{% bash %}

```bash{:copy}
echo "{environment_variable_name}={value}" >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

- Usando a versão 6 ou superior do PowerShell:

  ```pwsh{:copy}
  "{environment_variable_name}={value}" >> $env:GITHUB_ENV
  ```

- Usando a versão 5.1 ou inferior do PowerShell:

  ```powershell{:copy}
  "{environment_variable_name}={value}" | Out-File -FilePath $env:GITHUB_ENV -Encoding utf8 -Append
  ```

{% endpowershell %}

Você pode tornar uma variável de ambiente disponível para quaisquer etapas subsequentes em um trabalho de fluxo de trabalho definindo ou atualizando a variável de ambiente e gravando isso no arquivo de ambiente `GITHUB_ENV`. A etapa que cria ou atualiza a variável de ambiente não tem acesso ao novo valor, mas todos os passos subsequentes em um trabalho terão acesso. Os nomes das variáveis de ambiente são diferenciam maiúsculas e minúsculas e você pode incluir a pontuação. Para obter mais informações, consulte "[Variáveis de ambiente](/actions/learn-github-actions/environment-variables)".

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

#### Exemplo

Este exemplo usa `EOF` como um delimitador e define a variável de ambiente `JSON_RESPONSE` para o valor da resposta `curl`.

{% bash %}

```yaml{:copy}
steps:
  - name: Set the value in bash
    id: step_one
    run: |
      echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
      curl https://example.lab >> $GITHUB_ENV
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
      (Invoke-WebRequest -Uri "https://example.lab").Content >> $env:GITHUB_ENV
      "EOF" >> $env:GITHUB_ENV
    shell: pwsh
```

{% endpowershell %}

{% ifversion actions-job-summaries %}

## Adicionando um resumo do trabalho

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

Você pode definir algum Markdown personalizado para cada trabalho para que seja exibido na página de resumo da execução de um fluxo de trabalho. Você pode usar resumos de trabalho para exibir e agrupar conteúdo único, como resumos de resultados de teste, para que alguém que visualizar o resultado da uma execução de um fluxo de trabalho não precise entrar nos registros para ver informações importantes relacionadas à execução como, por exemplo, falhas.

Os resumos de trabalho são compatíveis com o [markdown em estilo {% data variables.product.prodname_dotcom %} em Markdown](https://github.github.com/gfm/), e você pode adicionar seu conteúdo de Markdown a uma etapa no arquivo de ambiente `GITHUB_STEP_SUMMARY`. `GITHUB_STEP_SUMMARY` é único para cada etapa de um trabalho. Para obter mais informações sobre o arquivo por etapa, ao qual o `GITHUB_STEP_SUMMARY` faz referência, consulte "[Arquivos do ambiente](#environment-files)".

Quando um trabalho é concluído, os resumos de todas as etapas de um trabalho é agrupado em um único resumo do trabalho e exibido na página de resumo do fluxo de trabalho. Se vários trabalhos gerarem resumos, os resumos dos trabalhos serão ordenados por tempo de conclusão do trabalho.

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

### Conteúdo de markdown de múltiplas linhas

Para conteúdo Markdown de múltiplas linhas, você pode usar `>>` para anexar continuamente conteúdo à etapa atual. A cada operação adicionada, um caractere de nova linha é adicionado automaticamente.

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

### Sobrescrevendo resumos de trabalho

Para limpar todo o conteúdo da etapa atual, você pode usar `>` para sobrescrever qualquer conteúdo adicionado anteriormente.

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

Para remover completamente um resumo para a etapa atual, o arquivo ao qual `GITHUB_STEP_SUMMARY` faz referência pode ser excluído.

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

Depois que uma etapa for concluída, faz-se o upload dos resumos dos trabalhos e as etapas subsequentes não podem modificar o conteúdo Markdown previamente carregado. Resumos mascaram automaticamente todos os segredos que possam ter sido adicionados acidentalmente. Se o resumo de um trabalho contiver informações sensíveis que devem ser excluídas, você poderá excluir todo o fluxo de trabalho executado para remover todos os resumos do trabalho. Para obter mais informações, consulte "[Excluir a execução de um fluxo de trabalho](/actions/managing-workflow-runs/deleting-a-workflow-run)".

### Etapa de isolamento e limites

Os resumos de trabalho são isolados entre as etapas e cada etapa é restrita ao tamanho máximo de 1 MiB. Isolamento é imposto entre os passos para que um Markdown potencialmente mal formado a partir de uma única etapa não possa quebrar a renderização Markdown para etapas subsequentes. Se mais de 1 MiB de conteúdo for adicionado para uma etapa, ocorrerá uma falha no upload para a etapa e será criado um erro de anotação. As falhas no upload de resumos de trabalhos não afetam o status geral de uma etapa ou trabalho. Um máximo de 20 resumos de trabalho das etapas são exibidos por trabalho.

{% endif %}

## Adicionar um caminho do sistema

Prepara um diretório para a variável `PATH` do sistema e disponibiliza automaticamente para todas as ações subsequentes no trabalho atual; a ação atualmente em execução não pode acessar a variável de caminho atualizada. Para ver os caminhos atualmente definidos para o seu trabalho, você pode usar o `echo "$PATH"` em uma etapa ou ação.

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

Este exemplo demonstra como adicionar o diretório `$HOME/.local/bin` ao `PATH`:

```bash{:copy}
echo "$HOME/.local/bin" >> $GITHUB_PATH
```

{% endbash %}

{% powershell %}

Este exemplo demonstra como adicionar o diretório do usuário `$env:HOMEPATH/.local/bin` a `PATH`:

```pwsh{:copy}
"$env:HOMEPATH/.local/bin" >> $env:GITHUB_PATH
```

{% endpowershell %}
