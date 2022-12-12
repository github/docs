---
title: Sintaxe de metadados para o GitHub Actions
shortTitle: Metadata syntax
intro: É possível criar ações para realizar tarefas no repositório. As ações exigem um arquivo de metadados que use a sintaxe YAML.
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
ms.openlocfilehash: 9bde653dd7f8b4d04831afa38d29db7300255f57
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107410'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre sintaxe YAML para o {% data variables.product.prodname_actions %}

Todas as ações exigem um arquivo de metadados. O nome de arquivo de metadados precisa ser `action.yml` ou `action.yaml`. Os dados no arquivo de metadados definem as entradas, saídas e executam a configuração para sua ação.

Arquivos de metadados de ação usam a sintaxe YAML. Se você não estiver familiarizado com o YAML, leia "[Aprenda a usar o YAML em cinco minutos](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)".

## `name`

**Obrigatório** O nome da ação. O {% data variables.product.prodname_dotcom %} exibe o `name` na guia **Actions** para facilitar a identificação visual das ações em cada trabalho.

## `author`

**Opcional** O nome do autor da ação.

## `description`

**Obrigatório** Uma breve descrição da ação.

## `inputs`

**Opcional** Os parâmetros de entrada permitem que você especifique os dados que a ação espera usar durante o runtime. O {% data variables.product.prodname_dotcom %} armazena parâmetros como variáveis de ambiente. Identificações de entrada com letras maiúsculas são alteradas para letras minúsculas no momento da execução. Recomenda-se usar identificações de entrada com letras minúsculas.

### Exemplo: Especificando entradas

Este exemplo configura duas entradas: numOctocats e octocatEyeColor. A entrada numOctocats não é necessária e assumirá o valor '1'. A entrada octocatEyeColor é necessária e não tem valor padrão. Os arquivos de fluxo de trabalho que usam essa ação precisam usar a palavra-chave `with` para definir um valor de entrada para octocatEyeColor. Para obter mais informações sobre a sintaxe `with`, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith)".

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

Quando você especifica uma entrada em um arquivo de fluxo de trabalho ou usa um valor de entrada padrão, o {% data variables.product.prodname_dotcom %} cria uma variável de ambiente para a entrada com o nome `INPUT_<VARIABLE_NAME>`. A variável de ambiente criada converte os nomes de entrada em letras maiúsculas e substitui os espaços por caracteres `_`.

Se a ação for gravada por meio de uma [composição](/actions/creating-actions/creating-a-composite-action), ela não obterá `INPUT_<VARIABLE_NAME>` automaticamente. Se não ocorrer a conversão, você poderá alterar estas entradas manualmente.

Para acessar a variável de ambiente em uma ação de contêiner do Docker, você precisará transmitir a entrada usando a palavra-chave `args` no arquivo de metadados da ação. Para obter mais informações sobre o arquivo de metadados de ação para ações de contêiner do Docker, confira "[Como criar uma ação de contêiner do Docker](/articles/creating-a-docker-container-action#creating-an-action-metadata-file)".

Por exemplo, se um fluxo de trabalho definir as entradas `numOctocats` e `octocatEyeColor`, o código da ação poderá ler os valores das entradas usando as variáveis de ambiente `INPUT_NUMOCTOCATS` e `INPUT_OCTOCATEYECOLOR`.

### `inputs.<input_id>`

**Obrigatório** Um identificador `string` a ser associado à entrada. O valor de `<input_id>` é um mapa dos metadados da entrada. A `<input_id>` precisa ser um identificador exclusivo dentro do objeto `inputs`. A `<input_id>` precisa começar com uma letra ou `_` e conter apenas caracteres alfanuméricos, `-` ou `_`.

### `inputs.<input_id>.description`

**Obrigatório** Uma descrição `string` dos parâmetros de entrada.

### `inputs.<input_id>.required`

**Opcional** Um `boolean` para indicar se a ação exige o parâmetro de entrada. Defina-o como `true` quando o parâmetro for obrigatório.

### `inputs.<input_id>.default`

**Opcional** uma `string` que representa o valor padrão. O valor padrão é usado quando um parâmetro de entrada não é especificado em um arquivo de fluxo de trabalho.

### `inputs.<input_id>.deprecationMessage`

**Opcional** se o parâmetro de entrada for usado, essa `string` será registrada em log como uma mensagem de aviso. Você pode usar este aviso para notificar os usuários de que o valor de entrada está obsoleto e mencionar outras alternativas.

## `outputs` para ações de contêiner do Docker e de JavaScript

**Opcional** Os parâmetros de saída permitem que você declare os dados definidos por uma ação. As ações executadas posteriormente em um fluxo de trabalho podem usar os dados de saída definidos em ações executadas anteriormente.  Por exemplo, se uma ação executou a adição de duas entradas (x + y = z), a ação poderia usar o resultado da soma (z) como entrada em outras ações.

{% data reusables.actions.output-limitations %}

Se você não declarar uma saída no seu arquivo de metadados de ação, você ainda poderá definir as saídas e usá-las no seu fluxo de trabalho. Para obter mais informações sobre como definir as saídas em uma ação, confira "[Comandos do fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter)".

### Exemplo: Declarando saídas para o contêiner do Docker e ações do JavaScript

```yaml
outputs:
  sum: # id of the output
    description: 'The sum of the inputs'
```

### `outputs.<output_id>`

**Obrigatório** Um identificador `string` a ser associado à saída. O valor de `<output_id>` é um mapa dos metadados da saída. A `<output_id>` precisa ser um identificador exclusivo dentro do objeto `outputs`. A `<output_id>` precisa começar com uma letra ou `_` e conter apenas caracteres alfanuméricos, `-` ou `_`.

### `outputs.<output_id>.description`

**Obrigatório** Uma descrição `string` do parâmetro de saída.

## `outputs` para ações compostas

**Opcional** `outputs` usa os mesmos parâmetros que `outputs.<output_id>` e `outputs.<output_id>.description` (confira "[`outputs` para ações de contêiner do Docker e de JavaScript](#outputs-for-docker-container-and-javascript-actions)"), mas também inclui o token `value`.

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
    - id: random-number-generator{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
      run: echo "random-id=$(echo $RANDOM)" >> $GITHUB_OUTPUT
{%- else %}
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
{%- endif %}{% raw %}
      shell: bash
```
{% endraw %}

### `outputs.<output_id>.value`

**Obrigatório** O valor para o qual o parâmetro de saída será mapeado. Defina isso como uma `string` ou uma expressão com um contexto. Por exemplo, você pode usar o contexto `steps` para definir o `value` de uma saída como o valor de saída de uma etapa.

Para obter mais informações sobre como usar a sintaxe de contexto, confira "[Contextos](/actions/learn-github-actions/contexts)".

## `runs`

**Obrigatório** Especifica se esta é uma ação de JavaScript, uma ação composta ou uma ação de contêiner do Docker e como a ação é executada.

## `runs` para ações de JavaScript

**Obrigatório** Configura o caminho para o código da ação e o runtime usado para executar o código.

### Exemplo: usando o Node.js {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}v16{% else %}v12{% endif %}

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'main.js'
```

### `runs.using`

**Obrigatório** O runtime usado para executar o código especificado em [`main`](#runsmain).

- Usar o `node12` para Node.js v12.{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
- Usar a `node16` para o Node.js v16.{% endif %}

### `runs.main`

**Obrigatório** O arquivo que contém o código de ação. O runtime especificado em [`using`](#runsusing) executa este arquivo.

### `runs.pre`

**Opcional** Permite que você execute um script no início de um trabalho, antes do início da ação `main:`. Por exemplo, você pode usar `pre:` para executar um script de configuração de pré-requisito. O runtime especificado com a sintaxe [`using`](#runsusing) executará esse arquivo. A ação `pre:` sempre é executada por padrão, mas você pode substituir isso usando [`runs.pre-if`](#runspre-if).

Neste exemplo, a ação `pre:` executa um script chamado `setup.js`:

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

### `runs.pre-if`

**Opcional** Permite definir condições para a execução da ação `pre:`. A ação `pre:` só será executada se as condições em `pre-if` forem atendidas. Se isso não estiver definido, `pre-if` usará `always()` como padrão. Em `pre-if`, as funções de verificação de status são avaliadas em relação ao status do trabalho, não ao status próprio da ação.

Observe que o contexto `step` não está disponível, pois nenhuma etapa foi executada ainda.

Neste exemplo, `cleanup.js` só é executado em executores baseados em Linux:

```yaml
  pre: 'cleanup.js'
  pre-if: runner.os == 'linux'
```

### `runs.post`

**Opcional** Permite que você execute um script no final de um trabalho, depois que a ação `main:` for concluída. Por exemplo, você pode usar `post:` para encerrar alguns processos ou remover arquivos desnecessários. O runtime especificado com a sintaxe [`using`](#runsusing) executará esse arquivo.

Neste exemplo, a ação `post:` executa um script chamado `cleanup.js`:

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
  post: 'cleanup.js'
```

A ação `post:` sempre é executada por padrão, mas você pode substituir isso usando `post-if`.

### `runs.post-if`

**Opcional** Permite definir condições para a execução da ação `post:`. A ação `post:` só será executada se as condições em `post-if` forem atendidas. Se isso não estiver definido, `post-if` usará `always()` como padrão. Em `post-if`, as funções de verificação de status são avaliadas em relação ao status do trabalho, não ao status próprio da ação.

Por exemplo, este `cleanup.js` só será executado em executores baseados em Linux:

```yaml
  post: 'cleanup.js'
  post-if: runner.os == 'linux'
```

## `runs` para ações compostas

**Obrigatório** Configura o caminho para a ação composta.

### `runs.using`

**Obrigatório** Você precisa definir esse valor como `'composite'`.

### `runs.steps`

**Obrigatório** As etapas que você pretende executar nesta ação. Elas podem ser etapas `run` ou etapas `uses`.

#### `runs.steps[*].run`

**Opcional** O comando que você deseja executar. Essa opção pode ser embutida ou um script no repositório de ação:

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

Para obter mais informações, confira "[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

#### `runs.steps[*].shell`

**Opcional** O shell no qual você deseja executar o comando. Use um dos shells listados [aqui](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell). Obrigatório se `run` for definido.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
#### `runs.steps[*].if`

**Opcional** Use o condicional `if` para impedir que uma etapa seja executada, a não ser que uma condição seja atendida. Você pode usar qualquer contexto e expressão compatível para criar uma condicional.

{% data reusables.actions.expression-syntax-if %} Para obter mais informações, confira "[Expressões](/actions/learn-github-actions/expressions)".

**Exemplo: Usando contextos**

 Essa etapa só é executada quando o tipo de evento é uma `pull_request` e a ação do evento é `unassigned`.

 ```yaml
steps:
  - run: echo This event is a pull request that had an assignee removed.
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
```

**Exemplo: Usando funções de verificação de status**

O `my backup step` só é executada quando a etapa anterior de uma ação composta falha. Para obter mais informações, confira "[Expressões](/actions/learn-github-actions/expressions#status-check-functions)".

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

**Opcional** Um identificador exclusivo da etapa. Use a `id` para referenciar a etapa em contextos. Para obter mais informações, confira "[Contextos](/actions/learn-github-actions/contexts)".

#### `runs.steps[*].env`

**Opcional** Define um `map` das variáveis de ambiente apenas para essa etapa. Caso deseje modificar a variável de ambiente armazenada no fluxo de trabalho, use `echo "{name}={value}" >> $GITHUB_ENV` em uma etapa composta.

#### `runs.steps[*].working-directory`

**Opcional** Especifica o diretório de trabalho em que o comando é executado.

#### `runs.steps[*].uses`

**Opcional** Seleciona uma ação para executá-la como parte de uma etapa no trabalho. A ação é uma unidade reutilizável de código. Você pode usar uma ação definida no mesmo repositório do fluxo de trabalho, um repositório público ou em uma [imagem publicada de um contêiner do Docker](https://hub.docker.com/).

É altamente recomendável incluir a versão da ação que você está usando ao especificar um número de tag Docker, SHA ou ref do Git. Se você não especificar uma versão, ela poderá interromper seus fluxos de trabalho ou causar um comportamento inesperado quando o proprietário da ação publicar uma atualização.
- Usar o commit SHA de uma versão de ação lançada é a maneira mais garantida de obter estabilidade e segurança.
- Usar a versão principal da ação permite receber correções importantes e patches de segurança sem perder a compatibilidade. Fazer isso também garante o funcionamento contínuo do fluxo de trabalho.
- Usar o branch-padrão de uma ação pode ser conveniente, mas se alguém lançar uma nova versão principal com uma mudança significativa, seu fluxo de trabalho poderá ter problemas.

Algumas ações exigem entradas que precisam ser definidas com a palavra-chave [`with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith). Revise o arquivo README da ação para determinar as entradas obrigatórias.

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

**Opcional** Um `map` dos parâmetros de entrada definidos pela ação. Cada parâmetro de entrada é um par chave/valor. Para obter mais informações, confira [Exemplo: como especificar entradas](#example-specifying-inputs).

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

{% ifversion ghes > 3.5 or ghae > 3.5 %}

#### `runs.steps[*].continue-on-error`

**Opcional** Impede que a ação falhe quando uma etapa falha. Defina essa opção como `true` para permitir que a ação seja aprovada quando essa etapa falhar.

{% endif %}

## `runs` para ações de contêiner do Docker

**Obrigatório** Configura a imagem usada para a ação de contêiner do Docker.

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

**Obrigatório** Você precisa definir esse valor como `'docker'`.

### `runs.pre-entrypoint`

**Opcional** Permite que você execute um script antes do início da ação `entrypoint`. Por exemplo, você pode usar `pre-entrypoint:` para executar um script de configuração de pré-requisito. O {% data variables.product.prodname_actions %} usa `docker run` para iniciar esta ação e executa o script dentro de um novo contêiner que usa a mesma imagem base. Isso significa que o estado de runtime é diferente do contêiner `entrypoint` principal, e todos os status que você exigir precisarão ser acessados no workspace, `HOME`, ou como uma variável `STATE_`. A ação `pre-entrypoint:` sempre é executada por padrão, mas você pode substituir isso usando [`runs.pre-if`](#runspre-if).

O runtime especificado com a sintaxe [`using`](#runsusing) executará esse arquivo.

Neste exemplo, a ação `pre-entrypoint:` executa um script chamado `setup.sh`:

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

**Obrigatório** A imagem do Docker a ser usada como o contêiner para executar a ação. O valor pode ser o nome da imagem base do Docker, um `Dockerfile` local no seu repositório ou uma imagem pública do Docker Hub ou de outro registro. Para referenciar um `Dockerfile` local no seu repositório, o arquivo precisa ser nomeado `Dockerfile` e você precisa usar um caminho relativo ao arquivo de metadados da ação. O aplicativo `docker` executará esse arquivo.

### `runs.env`

**Opcional** Especifica um mapa de chave/valor das variáveis do ambiente a serem definidas no ambiente do contêiner.

### `runs.entrypoint`

**Opcional** Substitui o `ENTRYPOINT` do Docker no `Dockerfile` ou define-o se ele ainda não foi especificado. Use `entrypoint` quando `Dockerfile` não especificar um `ENTRYPOINT` ou você desejar substituir a instrução `ENTRYPOINT`. Se você omitir `entrypoint`, os comandos especificados na instrução `ENTRYPOINT` do Docker serão executados. A instrução `ENTRYPOINT` do Docker tem um formulário de _shell_ e um formulário de _execução_. A documentação de `ENTRYPOINT` do Docker recomenda o uso do formulário de _execução_ da instrução `ENTRYPOINT`.

Para obter mais informações sobre como o `entrypoint` é executado, confira "[Suporte do Dockerfile para o {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint)".

### `runs.post-entrypoint`

**Opcional** Permite executar um script de limpeza depois que a ação `runs.entrypoint` for concluída. O {% data variables.product.prodname_actions %} usa `docker run` para iniciar esta ação. Como o {% data variables.product.prodname_actions %} executa o script dentro de um novo contêiner usando a mesma imagem base, o estado do runtime é diferente do contêiner `entrypoint` principal. Você pode acessar qualquer estado necessário no workspace, em `HOME` ou como uma variável `STATE_`. A ação `post-entrypoint:` sempre é executada por padrão, mas você pode substituir isso usando [`runs.post-if`](#runspost-if).

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

**Opcional** Uma matriz de cadeias de caracteres que define as entradas de um contêiner do Docker. As entradas podem incluir strings com codificação rígida. O {% data variables.product.prodname_dotcom %} transmite os `args` para o `ENTRYPOINT` do contêiner quando o contêiner é iniciado.

Os `args` são usados no lugar da instrução `CMD` em um `Dockerfile`. Se você usar `CMD` no `Dockerfile`, use as diretrizes ordenadas por preferência:

{% data reusables.actions.dockerfile-guidelines %}

Se você precisar passar variáveis de ambiente para uma ação, certifique-se de que sua ação executa um shell de comando para realizar a substituição de variáveis. Por exemplo, se o atributo `entrypoint` estiver definido como `"sh -c"`, `args` será executado em um shell de comando. Como alternativa, se o `Dockerfile` usar um `ENTRYPOINT` para executar o mesmo comando (`"sh -c"`), `args` será executado em um shell de comando.

Para obter mais informações sobre como usar a instrução `CMD` com o {% data variables.product.prodname_actions %}, confira "[Suporte do Dockerfile para o {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd)".

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

**Opcional** Você pode usar uma cor e um ícone de [Pena](https://feathericons.com/) para criar uma notificação para personalizar e distinguir sua ação. As notificações são mostradas ao lado do nome da ação no [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions).

### Exemplo: Configurar a marca para uma ação

```yaml
branding:
  icon: 'award'
  color: 'green'
```

### `branding.color`

Cor de fundo do selo. Pode ser `white`, `yellow`, `blue`, `green`, `orange`, `red`, `purple` ou `gray-dark`.

### `branding.icon`

O nome do ícone de [Pena](https://feathericons.com/) v4.28.0 a ser usado. Os ícones da marca são omitidos, assim como os itens seguintes:

<table>
<tr>
<td>café</td>
<td>colunas</td>
<td>divide-circle</td>
<td>divide-square</td>
</tr>
<tr>
<td>divide</td>
<td>frown</td>
<td>hexagon</td>
<td>chave</td>
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
<td>activity</td>
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
<td>arquivos</td>
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
<td>arrow-up</td>
</tr>
<tr>
<td>arroba</td>
<td>prêmio</td>
<td>barra-quadro-2</td>
<td>barra-quadro</td>
</tr>
<tr>
<td>bateria-carregando</td>
<td>pilha</td>
<td>sino-desativado</td>
<td>sino</td>
</tr>
<tr>
<td>bluetooth</td>
<td>negrito</td>
<td>livro-aberto</td>
<td>agendar</td>
</tr>
<tr>
<td>indicador</td>
<td>box</td>
<td>pasta</td>
<td>calendário</td>
</tr>
<tr>
<td>câmera-desligada</td>
<td>câmera</td>
<td>Conversão</td>
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
<td>circle</td>
<td>área de transferência</td>
</tr>
<tr>
<td>clock</td>
<td>nuvem-chuvisco</td>
<td>nuvem-relâmpago</td>
<td>nuvem-desativada</td>
</tr>
<tr>
<td>nuvem-chuva</td>
<td>nuvem-neve</td>
<td>nuvem</td>
<td>code</td>
</tr>
<tr>
<td>.</td>
<td>compass</td>
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
<td>Banco de Dados</td>
</tr>
<tr>
<td>excluir</td>
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
<td>editar</td>
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
<td>file</td>
<td>filme</td>
<td>filtro</td>
</tr>
<tr>
<td>flag</td>
<td>pasta-menos</td>
<td>pasta-mais</td>
<td>folder</td>
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
<td>inicial</td>
<td>image</td>
<td>caixa de entrada</td>
<td>informações</td>
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
<td>list</td>
<td>carregador</td>
</tr>
<tr>
<td>lock</td>
<td>log-in</td>
<td>log-out</td>
<td>mail</td>
</tr>
<tr>
<td>fixar-mapa</td>
<td>mapa</td>
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
<td>mic</td>
<td>minimizar-2</td>
<td>minimizar</td>
<td>menos-círculo</td>
</tr>
<tr>
<td>menos-quadrado</td>
<td>minus</td>
<td>monitor</td>
<td>lua</td>
</tr>
<tr>
<td>mais-horizontal</td>
<td>mais-vertical</td>
<td>move</td>
<td>music</td>
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
<td>pause</td>
<td>percent</td>
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
<td>phone</td>
<td>gráfico-pizza</td>
</tr>
<tr>
<td>reproduzir-círculo</td>
<td>jogar</td>
<td>mais-círculo</td>
<td>mais-quadrado</td>
</tr>
<tr>
<td>plus</td>
<td>bolso</td>
<td>potência</td>
<td>impressora</td>
</tr>
<tr>
<td>radio</td>
<td>atualizar-ccw</td>
<td>atualizar-cw</td>
<td>repeat</td>
</tr>
<tr>
<td>rewind</td>
<td>girar-ccw</td>
<td>girar-cw</td>
<td>rss</td>
</tr>
<tr>
<td>Salvar</td>
<td>tesoura</td>
<td>pequisa</td>
<td>Enviar</td>
</tr>
<tr>
<td>Servidor</td>
<td>configurações</td>
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
<td>ordem aleatória</td>
<td>sidebar</td>
<td>pular-atrás</td>
<td>pular-frente</td>
</tr>
<tr>
<td>slash</td>
<td>controles deslizantes</td>
<td>smartphone</td>
<td>alto-falante</td>
</tr>
<tr>
<td>square</td>
<td>estrela</td>
<td>parar-círculo</td>
<td>sol</td>
</tr>
<tr>
<td>nascer-do-sol</td>
<td>pôr do sol</td>
<td>tablet</td>
<td>marcação</td>
</tr>
<tr>
<td>destino</td>
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
<td>triangle</td>
</tr>
<tr>
<td>caminhão</td>
<td>tv</td>
<td>type</td>
<td>guarda-chuva</td>
</tr>
<tr>
<td>underline</td>
<td>desbloquear</td>
<td>carregar-nuvem</td>
<td>upload</td>
</tr>
<tr>
<td>usuário-marcar</td>
<td>usuário-menos</td>
<td>usuário-mais</td>
<td>usuário-x</td>
</tr>
<tr>
<td>usuário</td>
<td>users</td>
<td>vídeo-desligado</td>
<td>video</td>
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
<td>zap</td>
<td>aproximar</td>
<td>afastar</td>
</tr>
</table>
