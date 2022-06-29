---
title: Sintaxe de metadados para o GitHub Actions
shortTitle: Sintaxe dos metadados
intro: Você pode criar ações para executar tarefas no repositório. As ações requerem um arquivo de metadados que usa sintaxe YAML.
redirect_from:
  - /articles/metadata-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/building-actions/metadata-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
miniTocMaxHeadingLevel: 4
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre sintaxe YAML para o {% data variables.product.prodname_actions %}

Todas as ações exigem um arquivo de metadados. O nome do arquivo dos metadados deve ser `action.yml` ou `action.yaml`. Os dados no arquivo de metadados definem as entradas, saídas e executam a configuração para sua ação.

Arquivos de metadados de ação usam a sintaxe YAML. Se você não souber o que é YAML, consulte "[Aprender a usar YAML em cinco minutos](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)".

## `name`

**Necessário**: O nome de sua ação. O {% data variables.product.prodname_dotcom %} exibe o `nome` na aba **Ações** para facilitar a identificação visual das ações em cada trabalho.

## `autor`

**Opcional**: O nome do autor da ação.

## `descrição`

**Necessário**: uma descrição curta da ação.

## `inputs`

**Opcional**: parâmetros de entrada permitem que você especifique os dados que a ação espera usar no momento da execução. O {% data variables.product.prodname_dotcom %} armazena parâmetros como variáveis de ambiente. Identificações de entrada com letras maiúsculas são alteradas para letras minúsculas no momento da execução. Recomenda-se usar identificações de entrada com letras minúsculas.

### Exemplo: Especificando entradas

Este exemplo configura duas entradas: numOctocats e octocatEyeColor. A entrada numOctocats não é necessária e assumirá o valor '1'. A entrada octocatEyeColor é necessária e não tem valor padrão. Arquivos de fluxo de trabalho que usam essa ação devem usar a palavra-chave `with` (com) para definir um valor de entrada para octocatEyeColor. Para obter mais informações sobre a sintaxe `with` (com), consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith)".

```yaml
inputs:
  numOctocats:
    description: 'Number of Octocats'
    required: false
    default: '1'
  octocatEyeColor:
    description: 'Eye color of the Octocats'
    required: true
```

Quando você especifica uma entrada em um arquivo de fluxo de trabalho ou usar um valor de entrada padrão, o {% data variables.product.prodname_dotcom %} criará uma variável de ambiente para a entrada com o nome `INPUT_<VARIABLE_NAME>`. A variável de ambiente criada altera os nomes de entrada para letras maiúsculas e substitui espaços por caracteres `_`.

Se a ação for escrita usando um [composto](/actions/creating-actions/creating-a-composite-action), ela não receberá `INPUT_<VARIABLE_NAME>` automaticamente. Se não ocorrer a conversão, você poderá alterar estas entradas manualmente.

Para acessar a variável de ambiente em uma ação do contêiner do Docker, você deverá passar a entrada usando a palavra-chave `args` no arquivo de metadados da ação. Para obter mais informações sobre o arquivo de metadados de ação para ações de contêiner do Docker, consulte "[Criar uma ação de contêiner do Docker](/articles/creating-a-docker-container-action#creating-an-action-metadata-file)".

Por exemplo, se um fluxo de trabalho definiu as entradas `numOctocats` e `octocatEyeColor`, o código de ação poderia ler os valores das entradas usando as variáveis de ambiente do `INPUT_NUMTOCATS` e `INPUT_OCTOCATEYECOLOR`.

### `inputs.<input_id>`

**Necessário**: um identificador `string` para associar à entrada. O valor de `<input_id>` é um mapa dos metadados da entrada. `<input_id>` deve ser um identificador único dentro do objeto `inputs` (entradas). `<input_id>` deve iniciar com uma letra ou `_` e conter somente caracteres alfanuméricos, `-` ou `_`.

### `inputs.<input_id>.description`

**Necessário**: descrição de `string` do parâmetro de entrada.

### `inputs.<input_id>.required`

**Necessário**: um `booleano` para indicar se a ação exige o parâmetro de entrada. Defina para `true` quando o parâmetro for necessário.

### `inputs.<input_id>.default`

**Opcional**: uma `string` que representa o valor padrão. O valor padrão é usado quando um parâmetro de entrada não é especificado em um arquivo de fluxo de trabalho.

### `inputs.<input_id>.deprecationMessage`

**Opcional** Se o parâmetro de entrada for usado, esta `string` será registrada como uma mensagem de aviso. Você pode usar este aviso para notificar os usuários de que o valor de entrada está obsoleto e mencionar outras alternativas.

## `sapidas` para o contêiner do Docker e ações do JavaScript

**Opcional** Os parâmetros de saída permitem que você declare os dados definidos por uma ação. As ações executadas posteriormente em um fluxo de trabalho podem usar os dados de saída definidos em ações executadas anteriormente.  Por exemplo, se uma ação executou a adição de duas entradas (x + y = z), a ação poderia usar o resultado da soma (z) como entrada em outras ações.

{% data reusables.actions.output-limitations %}

Se você não declarar uma saída no seu arquivo de metadados de ação, você ainda poderá definir as saídas e usá-las no seu fluxo de trabalho. Para obter mais informações sobre a definição de saídas em uma ação, consulte "[Comandos do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter)."

### Exemplo: Declarando saídas para o contêiner do Docker e ações do JavaScript

```yaml
saídas:
  soma: número do ID da saída
    descrição: 'Soma das entradas'
```

### `outputs.<output_id>`

**Necessário**: um identificador `string` para associar à saída. O valor de `<output_id>` é um mapa dos metadados de saída. `<output_id>` deve ser um identificador único dentro do objeto `outputs` (saídas). `<output_id>` deve iniciar com uma letra ou `_` e conter somente caracteres alfanuméricos, `-` ou `_`.

### `outputs.<output_id>.description`

**Necessário**: descrição de `string` do parâmetro de saída.

## `outputs` para ações compostas

As **saídas** `opcionais` usam os mesmos parâmetros que `outputs.<output_id>` e `outputs.<output_id>escription` (consulte "[`saída` para o contêiner do Docker e ações do JavaScript](#outputs-for-docker-container-and-javascript-actions)"), mas também inclui o token do `valor`.

{% data reusables.actions.output-limitations %}

### Exemplo: Declarando saídas para ações compostas

{% raw %}
```yaml
outputs:
  random-number:
    description: "Random number"
    value: ${{ steps.random-number-generator.outputs.random-id }}
runs:
  using: "composite"
  steps:
    - id: random-number-generator
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
      shell: bash
```
{% endraw %}

### `outputs.<output_id>.value`

**Obrigatório** O valor com o qual o parâmetro de saída será mapeado. Você pode defini-lo como uma `string` ou uma expressão com contexto. Por exemplo, você pode usar o contexto das `etapas` para definir o `valor` de uma saída como o valor de saída de uma etapa.

Para obter mais informações sobre como usar a sintaxe de contexto, consulte "[Contextos](/actions/learn-github-actions/contexts)".

## `runs`

**Obrigatório** Especifica se esta é uma ação do JavaScript, uma ação composta, ou uma ação de contêiner do Docker e como a ação é executada.

## `runs` para ações de JavaScript

**Obrigatório** Configura o caminho para o código da ação e o tempo de execução usado para executar o código.

### Exemplo: Usando o Node.js {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}v16{% else %}v12{% endif %}

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'main.js'
```

### `runs.using`

**Obrigatório** O tempo de execução usado para executar o código especificado em [`principal`](#runsmain).

- Use `node12` para o Node.js v12.{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
- Use o `node16` para o Node.js v16.{% endif %}

### `runs.main`

**Obrigatório** O arquivo que contém o código da ação. O tempo de execução especificado [`em uso`](#runsusing) executa este arquivo.

### `runs.pre`

**Opcional** Permite que você execute um script no início de um trabalho antes de a ação `main:` começar. Por exemplo, você pode usar `pre:` para executar um pré-requisito da configuração do script. O tempo de execução especificado com a sintaxe [`em uso`](#runsusing) irá executar este arquivo. A ação `pre:` sempre é executada por padrão, mas você pode substitui-la usando [`runs.pre-if`](#runspre-if).

Neste exemplo, a ação `pre:` executa um script denominado `setup.js.`:

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}'node16'{% else %}'node12'{% endif %}
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

### `runs.pre-if`

**Opcional** Permite que você defina condições para a execução da ação `pre:`. A ação `pre:` será executada apenas se as condições em `pre-if` forem atendidas. Se não forem definidas, o padrão de `pre-if` será `sempre()`. Em `pre-if`, verifique as funções para avaliar com base no status do trabalho, não o status próprio da ação.

Observe que o contexto da `etapa` está indisponível, uma vez que nenhuma etapa foi executada ainda.

Neste exemplo, o `cleanup.js` é executado apenas nos executores baseados no Linux:

```yaml
  pre: 'cleanup.js'
  pre-if: runner.os == 'linux'
```

### `runs.post`

**Opcional** Permite que você execute um script no final do trabalho, uma vez que a ação `main:` foi finalizada. Por exemplo, você pode usar `post:` para encerrar uns processos ou remover arquivos desnecessários. O tempo de execução especificado com a sintaxe [`em uso`](#runsusing) irá executar este arquivo.

Neste exemplo, a ação `post:` executa um script chamado `cleanup.js`:

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
  post: 'cleanup.js'
```

A ação `post:` é executada sempre por padrão, mas você pode substituí-la usando `post-if`.

### `runs.post-if`

**Opcional** Permite que você defina condições para a execução da ação `post:`. A ação `post:` só será executada se as condições em `post-if` forem atendidas. Se não forem definidas, o padrão de `post-if` será `sempre()`. Em `post-if`, verifique as funções para avaliar com base no status do trabalho, não o status próprio da ação.

Por exemplo, este `cleanup.js` só será executado em executores baseados no Linux:

```yaml
  post: 'cleanup.js'
  post-if: runner.os == 'linux'
```

## `runs` para ações compostas

**Obrigatório** Configura o caminho da ação composta.

### `runs.using`

**Obrigatório** Você deve definir este valor como`'composto'`.

### `runs.steps`

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
**Obrigatório** As etapas de que você planeja executar nesta ação. Elas podem ser etapas de `run` ou etapas de `uses`.
{% else %}
**Obrigatório** As etapas de que você planeja executar nesta ação.
{% endif %}

#### `runs.steps[*].run`

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
**Optional** O comando que você deseja executar. Isso pode ser inline ou um script no seu repositório de ação:
{% else %}
**Obrigatório** O comando que você deseja executar. Isso pode ser inline ou um script no seu repositório de ação:
{% endif %}

{% raw %}
```yaml
runs:
  using: "composite"
  steps:
    - run: ${{ github.action_path }}/test/script.sh
      shell: bash
```
{% endraw %}

Como alternativa, você pode usar `$GITHUB_ACTION_PATH`:

```yaml
runs:
  using: "composite"
  steps:
    - run: $GITHUB_ACTION_PATH/script.sh
      shell: bash
```

Para obter mais informações, consulte "[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

#### `runs.steps[*].shell`

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
**Opcional** O shell onde você deseja executar o comando. Você pode usar qualquer um dos shells listados [aqui](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell). Obrigatório se `run` estiver configurado.
{% else %}
**Obrigatório** O shell onde você quer executar o comando. Você pode usar qualquer um dos shells listados [aqui](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell). Obrigatório se `run` estiver configurado.
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
#### `runs.steps[*].if`

**Opcional** Você pode usar o `if` condicional para evitar que uma etapa seja executada, a menos que uma condição seja atendida. Você pode usar qualquer contexto e expressão compatível para criar uma condicional.

{% data reusables.actions.expression-syntax-if %} Para obter mais informações, consulte "[Expressões](/actions/learn-github-actions/expressions)".

**Exemplo: Usando contextos**

 Essa etapa somente é executada quando o tipo de evento é uma `pull_request` e a ação do evento é `unassigned` (não atribuída).

 ```yaml
steps:
  - run: echo This event is a pull request that had an assignee removed.
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
```

**Exemplo: Usando funções de verificação de status**

A função `my backup step` somente é executada quando houver falha uma ação composta da etapa anterior do trabalho. Para obter mais informações, consulte "[Expressões](/actions/learn-github-actions/expressions#status-check-functions)".

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```
{% endif %}

#### `runs.steps[*].name`

**Opcional** O nome da etapa composta.

#### `runs.steps[*].id`

**Opcional** Um identificador único para a etapa. Você pode usar `id` para fazer referência à etapa em contextos. Para obter mais informações, consulte "[Contextos](/actions/learn-github-actions/contexts)".

#### `runs.steps[*].env`

**Opcional**  Define um `mapa` de variáveis de ambiente apenas para essa etapa. Se você deseja modificar a variável de ambiente armazenada no fluxo de trabalho, use `eco "{name}={value}" >> $GITHUB_ENV` em uma etapa composta.

#### `runs.steps[*].working-directory`

**Opcional**  Especifica o diretório de trabalho onde o comando é executado.

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
#### `runs.steps[*].uses`

**Opcional**  Seleciona uma ação a ser executada como parte de uma etapa do seu trabalho. A ação é uma unidade reutilizável de código. Você pode usar uma ação definida no mesmo repositório que o fluxo de trabalho, um repositório público ou em uma [imagem publicada de contêiner Docker](https://hub.docker.com/).

É altamente recomendável incluir a versão da ação que você está usando ao especificar um número de tag Docker, SHA ou ref do Git. Se você não especificar uma versão, ela poderá interromper seus fluxos de trabalho ou causar um comportamento inesperado quando o proprietário da ação publicar uma atualização.
- Usar o commit SHA de uma versão de ação lançada é a maneira mais garantida de obter estabilidade e segurança.
- Usar a versão principal da ação permite receber correções importantes e patches de segurança sem perder a compatibilidade. Fazer isso também garante o funcionamento contínuo do fluxo de trabalho.
- Usar o branch-padrão de uma ação pode ser conveniente, mas se alguém lançar uma nova versão principal com uma mudança significativa, seu fluxo de trabalho poderá ter problemas.

Algumas ações requerem entradas que devem ser definidas com a palavra-chave [`com`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith). Revise o arquivo README da ação para determinar as entradas obrigatórias.

```yaml
runs:
  using: "composite"
  steps:
    # Reference a specific commit
    - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
    # Reference the major version of a release
    - uses: {% data reusables.actions.action-checkout %}
    # Reference a specific version
    - uses: {% data reusables.actions.action-checkout %}.2.0
    # Reference a branch
    - uses: actions/checkout@main
    # References a subdirectory in a public GitHub repository at a specific branch, ref, or SHA
    - uses: actions/aws/ec2@main
    # References a local action
    - uses: ./.github/actions/my-action
    # References a docker public registry action
    - uses: docker://gcr.io/cloud-builders/gradle
    # Reference a docker image published on docker hub
    - uses: docker://alpine:3.8
```

#### `runs.steps[*].with`

**Opcional**  Um `mapa` dos parâmetros de entrada definidos pela ação. Cada parâmetro de entrada é um par chave/valor.  Parâmetros de entrada são definidos como variáveis de ambiente. A variável é precedida por INPUT_ e convertida em letras maiúsculas.

```yaml
runs:
  using: "composite"
  steps:
    - name: My first step
      uses: actions/hello_world@main
      with:
        first_name: Mona
        middle_name: The
        last_name: Octocat  
```
{% endif %}

#### `runs.steps[*].continue-on-error`

**Opcional** impede que a ação falhe quando uma etapa falha. Definido como `verdadeiro` para permitir que a ação passe quando esta etapa falhar.

## `runs` par ações do contêiner do Docker

**Obrigatório** Configura a imagem usada para a ação do contêiner do Docker.

### Exemplo: Usando um arquivo do Dockerfile no seu repositório

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
```

### Exemplo: Usando o contêiner de registro público do Docker

```yaml
runs:
  using: 'docker'
  image: 'docker://debian:stretch-slim'
```

### `runs.using`

**Obrigatório** Você deve definir este valor como `'docker'`.

### `runs.pre-entrypoint`

**Opcional** Permite que você execute um script antes de a ação do `entrypoint` começar. Por exemplo, você pode usar o `pre-entrypoint:` para executar um pré-requisito do script da configuração. {% data variables.product.prodname_actions %} usa a `execução do docker` para lançar esta ação e executa o script dentro de um novo contêiner que usa a mesma imagem-base. Isso significa que o momento de execução é diferente do contêiner principal do `entrypoint` e qualquer status de que você precisar devem ser acessado na área de trabalho, em `HOME`, ou como uma variável `STATE_`. A ação `pre-entrypoint:` sempre é executada por padrão, mas você pode substitui-la usando [`runs.pre-if`](#runspre-if).

O tempo de execução especificado com a sintaxe [`em uso`](#runsusing) irá executar este arquivo.

Neste exemplo, a ação `pre-entrypoint:` executa um script denominado `setup.sh`:

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  pre-entrypoint: 'setup.sh'
  entrypoint: 'main.sh'
```

### `runs.image`

**Obrigatório ** A imagem do Docker a ser usada como contêiner para executar a ação. O valor pode ser o nome da imagem de base do Docker, um `arquivo Docker` local no seu repositório u uma imagem pública no Docker Hub ou outro registro. Para fazer referência a um `arquivo Docker` local no seu repositório, o arquivo precisa ser denominado `arquivo Docker` e você precisa usar um caminho relativo ao seu arquivo de metadados de ação. O aplicativo do `docker` executará este arquivo.

### `runs.env`

**Opcional** Especifica um mapa da chave/valor das variáveis do ambiente a serem definidas no ambiente do contêiner.

### `runs.entrypoint`

**Opcional** Substitui o `ENTRYPOINT` do Docker no `arquivo Docker` ou o define, caso nenhum já tenha sido especificado. Use o `entrypoint` quando o `arquivo Docker` não especificar um `ENTRYPOINT` ou você desejar substituir a instrução do`ENTRYPOINT`. Se você omitir o `entrypoint`, serão executados os comandos que você especificar na instrução do `ENTRYPOINT` do Docker. A instrução do `ENTRYPOINT` do Docker tem forma de _shell_ e forma de _exec_. A documentação do `ENTRYPOINT` do docker recomenda o uso da forma _exec_ da instrução do `ENTRYPOINT`.

Para obter mais informações sobre como o `entrypoint` é executado, consulte "[Suporte do arquivo Docker para {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint)".

### `post-entrypoint`

**Opcional**Permite que você execute um script de cleanup, uma vez finalizada a ação`runs.entrypoint`. {% data variables.product.prodname_actions %} usa a `execução do docker` para lançar esta ação. Porque {% data variables.product.prodname_actions %} executa o script dentro de um novo contêiner usando a mesma imagem-base, o estado do momento da execução é diferente do contêiner principal do `entrypoint`. Você pode acessar qualquer estado que precisar na área de trabalho, em `HOME` ou como variável `STATE_`. A ação `post-entrypoint:` sempre é executada por padrão, mas você pode substitui-la usando [`runs.post-if`](#runspost-if).

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  entrypoint: 'main.sh'
  post-entrypoint: 'cleanup.sh'
```

### `runs.args`

**Opcional** Um array de strings que define as entradas para um contêiner Docker. As entradas podem incluir strings com codificação rígida. O {% data variables.product.prodname_dotcom %} entrega os `args` ao `ENTRYPOINT` do contêiner quando o contêiner inicia.

`args` são usados em substituição à instrução `CMD` em um `Dockerfile`. Se você usar `CMD` no `Dockerfile`, use as diretrizes ordenadas por preferência:

{% data reusables.actions.dockerfile-guidelines %}

Se você precisar passar variáveis de ambiente para uma ação, certifique-se de que sua ação executa um shell de comando para realizar a substituição de variáveis. Por exemplo, se seu atributo `entrypoint` é definido como `"sh -c"`, os `args` serão executados em um terminal de comando. Como alternativa, se o seu `arquivo Docker` usar um `Entrypoint` para executar o mesmo comando (`"sh-c"`), os `Args` serão executado em um shell de comando.

Para obter mais informações sobre o uso da instrução `CMD` com {% data variables.product.prodname_actions %}, consulte "[Suporte do arquivo Docker para {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd)".

#### Exemplo: Definir argumentos para o contêiner do Docker

{% raw %}
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.greeting }}
    - 'foo'
    - 'bar'
```
{% endraw %}

## `branding`

Você pode usar uma cor e o ícone da [Pena](https://feathericons.com/) para criar um selo para personalizar e distinguir a sua ação. Os selos são exibidos ao lado do nome da sua ação em [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions).

### Exemplo: Configurar a marca para uma ação

```yaml
branding:
  icon: 'award'  
  color: 'green'
```

### `branding.color`

Cor de fundo do selo. Pode ser: `branco`, `amarelo`, `azul`, `verde`, `laranja`, `vermelho`, `roxo` ou `cinza-escuro`.

### `branding.icon`

O nome do ícone de [Pena](https://feathericons.com/) da v4.28.0 a ser utilizado. Os ícones da marca são omitidos, assim como os itens seguintes:

<table>
<tr>
<td>coffee</td>
<td>colunas</td>
<td>divide-circle</td>
<td>divide-square</td>
</tr>
<tr>
<td>divide</td>
<td>frown</td>
<td>hexagon</td>
<td>Chave</td>
</tr>
<tr>
<td>meh</td>
<td>mouse-pointer</td>
<td>smile</td>
<td>ferramenta</td>
</tr>
<tr>
<td>x-octagon</td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

Aqui está uma lista taxativa de todos os ícones atualmente compatíveis:


<!-- 
  This table should match the icon list in `app/models/repository_actions/icons.rb` in the internal github repo.
  To support a new icon, update `app/models/repository_actions/icons.rb` and add the svg to `/static/images/icons/feather` in the internal github repo. 
-->

<table>
<tr>
<td>atividade</td>
<td>frequência de execução</td>
<td>alerta-círculo</td>
<td>alerta-octágono</td>
</tr>
<tr>
<td>alerta-triângulo</td>
<td>alinhar-centro</td>
<td>alinhar-justificar</td>
<td>alinhar-esquerda</td>
</tr>
<tr>
<td>alinhar-direita</td>
<td>âncora</td>
<td>abertura</td>
<td>arquivar</td>
</tr>
<tr>
<td>flecha-abaixo-círculo</td>
<td>flecha-abaixo-esquerda</td>
<td>flecha-abaixo-direita</td>
<td>flecha-abaixo</td>
</tr>
<tr>
<td>flecha-esquerda-círculo</td>
<td>flecha-esquerda</td>
<td>flecha-direita-círculo</td>
<td>flecha-direita</td>
</tr>
<tr>
<td>flecha-acima-círculo</td>
<td>flecha-acima-esquerda</td>
<td>flecha-acima-direita</td>
<td>flecha-acima</td>
</tr>
<tr>
<td>arroba</td>
<td>prêmio</td>
<td>barra-quadro-2</td>
<td>barra-quadro</td>
</tr>
<tr>
<td>bateria-carregando</td>
<td>bateria</td>
<td>sino-desativado</td>
<td>sino</td>
</tr>
<tr>
<td>bluetooth</td>
<td>negrito</td>
<td>livro-aberto</td>
<td>livro</td>
</tr>
<tr>
<td>favorito</td>
<td>caixa</td>
<td>pasta</td>
<td>calendário</td>
</tr>
<tr>
<td>câmera-desligada</td>
<td>câmera</td>
<td>molde</td>
<td>marcar-círculo</td>
</tr>
<tr>
<td>marcar-quadrado</td>
<td>marcar</td>
<td>chevron-abaixo</td>
<td>chevron-esquerda</td>
</tr>
<tr>
<td>chevron-direita</td>
<td>chevron-acima</td>
<td>chevrons-abaixo</td>
<td>chevrons-esquerda</td>
</tr>
<tr>
<td>chevrons-direita</td>
<td>chevrons-acima</td>
<td>círculo</td>
<td>clipboard</td>
</tr>
<tr>
<td>relógio</td>
<td>nuvem-chuvisco</td>
<td>nuvem-relâmpago</td>
<td>nuvem-desativada</td>
</tr>
<tr>
<td>nuvem-chuva</td>
<td>nuvem-neve</td>
<td>nuvem</td>
<td>código</td>
</tr>
<tr>
<td>comando</td>
<td>bússula</td>
<td>copy</td>
<td>canto-abaixo-esquerda</td>
</tr>
<tr>
<td>canto-abaixo-direita</td>
<td>canto-esquerda-abaixo</td>
<td>canto-esquerda-acima</td>
<td>canto-direita-abaixo</td>
</tr>
<tr>
<td>canto-direita-acima</td>
<td>canto-acima-esquerda</td>
<td>canto-acima-direita</td>
<td>cpu</td>
</tr>
<tr>
<td>cartão-de-crédito</td>
<td>cortar</td>
<td>mira</td>
<td>banco de dados</td>
</tr>
<tr>
<td>delete</td>
<td>disco</td>
<td>dólar-sinal</td>
<td>download-nuvem</td>
</tr>
<tr>
<td>download</td>
<td>gota</td>
<td>editar-2</td>
<td>editar-3</td>
</tr>
<tr>
<td>edit</td>
<td>link-externo</td>
<td>olho-fechado</td>
<td>olho</td>
</tr>
<tr>
<td>fast-forward</td>
<td>pena</td>
<td>arquivo-menos</td>
<td>arquivo-mais</td>
</tr>
<tr>
<td>arquivo-texto</td>
<td>arquivo</td>
<td>filme</td>
<td>filtro</td>
</tr>
<tr>
<td>sinalizador</td>
<td>pasta-menos</td>
<td>pasta-mais</td>
<td>pasta</td>
</tr>
<tr>
<td>presente</td>
<td>git-branch</td>
<td>git-commit</td>
<td>git-merge</td>
</tr>
<tr>
<td>git-pull-request</td>
<td>globo</td>
<td>grade</td>
<td>disco-rígido</td>
</tr>
<tr>
<td>hash</td>
<td>fones-de-ouvido</td>
<td>coração</td>
<td>ajuda-círculo</td>
</tr>
<tr>
<td>casa</td>
<td>image</td>
<td>caixa de entrada</td>
<td>info</td>
</tr>
<tr>
<td>itálico</td>
<td>camadas</td>
<td>layout</td>
<td>boia salva-vidas</td>
</tr>
<tr>
<td>link-2</td>
<td>link</td>
<td>lista</td>
<td>carregador</td>
</tr>
<tr>
<td>bloquear</td>
<td>log-in</td>
<td>log-out</td>
<td>correio</td>
</tr>
<tr>
<td>fixar-mapa</td>
<td>map</td>
<td>maximizar-2</td>
<td>maximizar</td>
</tr>
<tr>
<td>menu</td>
<td>mensagem-círculo</td>
<td>mensagem-quadrado</td>
<td>microfone-desligado</td>
</tr>
<tr>
<td>microfone</td>
<td>minimizar-2</td>
<td>minimizar</td>
<td>menos-círculo</td>
</tr>
<tr>
<td>menos-quadrado</td>
<td>menos</td>
<td>monitor</td>
<td>lua</td>
</tr>
<tr>
<td>mais-horizontal</td>
<td>mais-vertical</td>
<td>mover</td>
<td>música</td>
</tr>
<tr>
<td>navegação-2</td>
<td>navegação</td>
<td>octágono</td>
<td>pacote</td>
</tr>
<tr>
<td>clips de papel</td>
<td>pausa-círculo</td>
<td>pausa</td>
<td>porcentagem</td>
</tr>
<tr>
<td>chamada-telefônica</td>
<td>telefone-transferência</td>
<td>telefone-entrada</td>
<td>telefone-perdido</td>
</tr>
<tr>
<td>telefone-desligado</td>
<td>telefone-fora</td>
<td>telefone</td>
<td>gráfico-pizza</td>
</tr>
<tr>
<td>reproduzir-círculo</td>
<td>reproduzir</td>
<td>mais-círculo</td>
<td>mais-quadrado</td>
</tr>
<tr>
<td>mais</td>
<td>bolso</td>
<td>energia</td>
<td>impressora</td>
</tr>
<tr>
<td>rádio</td>
<td>atualizar-ccw</td>
<td>atualizar-cw</td>
<td>repetir</td>
</tr>
<tr>
<td>retroceder</td>
<td>girar-ccw</td>
<td>girar-cw</td>
<td>rss</td>
</tr>
<tr>
<td>salvar</td>
<td>tesoura</td>
<td>pesquisar</td>
<td>enviar</td>
</tr>
<tr>
<td>servidor</td>
<td>settings</td>
<td>compartilhar-2</td>
<td>compartilhar</td>
</tr>
<tr>
<td>escudo-desabilitado</td>
<td>escudo</td>
<td>sacola-de-compras</td>
<td>carrinho-de-compras</td>
</tr>
<tr>
<td>aleatório</td>
<td>barra lateral</td>
<td>pular-atrás</td>
<td>pular-frente</td>
</tr>
<tr>
<td>barra</td>
<td>cursor</td>
<td>smartphone</td>
<td>alto-falante</td>
</tr>
<tr>
<td>quadrado</td>
<td>estrela</td>
<td>parar-círculo</td>
<td>sol</td>
</tr>
<tr>
<td>nascer-do-sol</td>
<td>pôr-do-sol</td>
<td>tablet</td>
<td>tag</td>
</tr>
<tr>
<td>target</td>
<td>terminal</td>
<td>termômetro</td>
<td>polegar-para-baixo</td>
</tr>
<tr>
<td>polegar-para-cima</td>
<td>alternar-esquerda</td>
<td>alternar-direita</td>
<td>lixeira-2</td>
</tr>
<tr>
<td>lixeira</td>
<td>tendência-baixa</td>
<td>tendência-alta</td>
<td>triângulo</td>
</tr>
<tr>
<td>caminhão</td>
<td>tv</td>
<td>tipo</td>
<td>guarda-chuva</td>
</tr>
<tr>
<td>sublinhar</td>
<td>desbloquear</td>
<td>carregar-nuvem</td>
<td>fazer upload</td>
</tr>
<tr>
<td>usuário-marcar</td>
<td>usuário-menos</td>
<td>usuário-mais</td>
<td>usuário-x</td>
</tr>
<tr>
<td>usuário</td>
<td>usuários</td>
<td>vídeo-desligado</td>
<td>vídeo</td>
</tr>
<tr>
<td>correio de voz</td>
<td>volume-1</td>
<td>volume-2</td>
<td>volume-x</td>
</tr>
<tr>
<td>volume</td>
<td>inspecionar</td>
<td>wifi-desligado</td>
<td>wifi</td>
</tr>
<tr>
<td>vento</td>
<td>x-círculo</td>
<td>x-quadrado</td>
<td>x</td>
</tr>
<tr>
<td>zapear-desligado</td>
<td>zapear</td>
<td>aproximar</td>
<td>afastar</td>
</tr>
</table>
