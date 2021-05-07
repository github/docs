---
title: Contexto e sintaxe de expressão para o GitHub Actions
shortTitle: Contexto e sintaxe de expressão
intro: Você pode acessar informações de contexto e avaliar expressões em fluxos de trabalho e ações.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/contexts-and-expression-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/contexts-and-expression-syntax-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Sobre contextos e expressões

Você pode usar expressões para configurar variáveis por programação em arquivos de fluxo de trabalho e acessar contextos. Uma expressão pode ser qualquer combinação de valores literais, referências a um contexto ou funções. É possível combinar literais, referências de contexto e funções usando operadores.

Expressões são comumente usadas com a condicional `if` palavra-chave em um arquivo de fluxo de trabalho para determinar se uma etapa deve ser executada. Quando uma condicional `if` for `true`, a etapa será executada.

É necessário usar uma sintaxe específica para avisar o {% data variables.product.prodname_dotcom %} para avaliar a expressão e não tratá-la como uma string.

{% raw %}
`${{ <expression> }}`
{% endraw %}

{% data reusables.github-actions.expression-syntax-if %} Para obter mais informações sobre as condições `se`, consulte "[Sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)".

#### Exemplo de expressão em uma condicional `if`

```yaml
steps:
  - uses: actions/hello-world-javascript-action@v1.1
    if: {% raw %}${{ <expression> }}{% endraw %}
```

#### Exemplo de configuração de variável de ambiente

{% raw %}
```yaml
env:
  my_env_var: ${{ <expression> }}
```
{% endraw %}

### Contextos

Os contextos são uma forma de acessar informações sobre execuções de fluxo de trabalho, ambientes dos executores, trabalhos e etapas. Contextos usam a sintaxe de expressão.

{% raw %}
`${{ <context> }}`
{% endraw %}

| Nome do contexto | Tipo     | Descrição                                                                                                                                                                                                                                         |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`         | `objeto` | Informações sobre a execução do fluxo de trabalho. Para obter mais informações, consulte [contexto `github`](#github-context).                                                                                                                    |
| `env`            | `objeto` | Contém variáveis de ambiente definidas em um fluxo de trabalho, trabalho ou etapa. Para obter mais informações, consulte o contexto contexto [`env`](#env-context).                                                                               |
| `job`            | `objeto` | Tem informações sobre o trabalho em execução no momento. Para obter mais informações, consulte [contexto `trabalho`](#job-context).                                                                                                               |
| `steps`          | `objeto` | Informações sobre as etapas que foram executadas neste trabalho. Para obter mais informações, consulte [contexto `etapas`](#steps-context).                                                                                                       |
| `runner`         | `objeto` | Informações sobre o executor do trabalho atual. Para obter mais informações, consulte [`runner` context](#runner-context).                                                                                                                        |
| `secrets`        | `objeto` | Habilita o acesso a segredos. Para obter mais informações sobre segredos, consulte "[Criar e usar segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".                             |
| `strategy`       | `objeto` | Habilita acesso aos parâmetros de estratégia configurados e informações sobre o trabalho atual. Parâmetros de estratégia incluem `fail-fast`, `job-index`, `job-total` e `max-parallel`.                                                          |
| `matrix`         | `objeto` | Habilita acesso aos parâmetros de matriz configurados para o trabalho atual. Por exemplo, se você configurar uma criação de matriz com as versões `os` e `node`, o objeto de contexto `matrix` inclui as versões `os` e `node` do trabalho atual. |
| `needs`          | `objeto` | Permite o acesso às saídas de todos os trabalhos definidos como uma dependência do trabalho atual. Para obter mais informações, consulte o contexto [`needs`](#needs-context).                                                                    |

Como parte de uma expressão, você pode acessar as informações de contexto usando uma das duas sintaxes:
- Sintaxe de índice: `github['sha']`;
- Sintaxe de propriedade de desreferência: `github.sha`

Para usar a sintaxe de propriedade de desreferência, o nome da propriedade deve:
- começar com `a-Z` ou `_`;
- ser seguido por `a-Z` `0-9` `-` ou `_`.

#### Determinar quando usar contextos

{% data reusables.github-actions.using-context-or-environment-variables %}

#### Contexto `github`

O contexto `github` context contém informações sobre a execução do fluxo de trabalho e sobre o evento que a acionou. Você pode ler a maioria dos dados de contexto `github` em variáveis de ambiente. Para obter mais informações sobre as variáveis de ambiente, consulte "[Usando variáveis de ambiente](/actions/automating-your-workflow-with-github-actions/using-environment-variables)".

{% data reusables.github-actions.github-context-warning %}

| Nome da propriedade       | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`                  | `objeto` | Contexto de nível mais alto disponível em qualquer trabalho ou etapa de um fluxo de trabalho.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `github.action`           | `string` | O nome da ação atualmente em execução. O {% data variables.product.prodname_dotcom %} remove os caracteres especiais ou usa o nome `executar` quando a etapa atual executa um script.  Se você usar a mesma ação mais de uma vez no mesmo trabalho, o nome incluirá um sufixo com o número de sequência.  Por exemplo, o primeiro script que você executa será denominado `run1`, e o segundo script será denominado `run2`. Da mesma forma, a segunda invocação de `actions/checkout` será `actionscheckout2`. |
| `github.action_path`      | `string` | O caminho onde está localizada a sua ação. Você pode usar esse caminho para acessar facilmente os arquivos localizados no mesmo repositório que sua ação. Este atributo só é suportado em ações de etapas de execução compostas.                                                                                                                                                                                                                                                                                |
| `github.actor`            | `string` | Login do usuário que iniciou a execução do fluxo de trabalho.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `github.base_ref`         | `string` | `base_ref` ou branch alvo da pull request em uma execução de fluxo de trabalho. Essa propriedade só está disponível quando o evento que aciona a execução do fluxo de trabalho é uma `pull_request`.                                                                                                                                                                                                                                                                                                            |
| `github.event`            | `objeto` | Carga de evento de webhook completa. Para obter mais informações, consulte "[Eventos que acionam fluxos de trabalho](/articles/events-that-trigger-workflows/)". Você pode acessar as propriedades individuais do evento usando este contexto.                                                                                                                                                                                                                                                                  |
| `github.event_name`       | `string` | Nome do evento que acionou a execução do fluxo de trabalho.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `github.event_path`       | `string` | O caminho para a carga completa do evento do webhook no executor.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `github.head_ref`         | `string` | `head_ref` ou branch de origem da pull request em uma execução de fluxo de trabalho. Essa propriedade só está disponível quando o evento que aciona a execução do fluxo de trabalho é uma `pull_request`.                                                                                                                                                                                                                                                                                                       |
| `github.job`              | `string` | O [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) do trabalho atual.                                                                                                                                                                                                                                                                                                                                                                                                               |
| `github.ref`              | `string` | Branch ou ref tag que acionou a execução do fluxo de trabalho. Para branches, está no formato  `refs/heads/<branch_name>`, e, para tags, está em `refs/tags/<tag_name>`.                                                                                                                                                                                                                                                                                                                            |
| `github.repository`       | `string` | Nome do repositório e o proprietário. Por exemplo, `Codertocat/Hello-World`.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `github.repository_owner` | `string` | O nome do proprietário do repositório. Por exemplo, `Codertocat`.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `github.run_id`           | `string` | {% data reusables.github-actions.run_id_description %}
| `github.run_number`       | `string` | {% data reusables.github-actions.run_number_description %}
| `github.sha`              | `string` | Commit SHA que acionou a execução do fluxo de trabalho.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `github.token`            | `string` | Um token para fazer a autenticação em nome do aplicativo GitHub instalado no seu repositório. Isso é funcionalmente equivalente ao segredo `GITHUB_TOKEN`. Para obter mais informações, consulte "[Permissões para o GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".                                                                                                                                                                                |
| `github.workflow`         | `string` | Nome do fluxo de trabalho. Se o fluxo de trabalho não determina um `name` (nome), o valor desta propriedade é o caminho completo do arquivo do fluxo de trabalho no repositório.                                                                                                                                                                                                                                                                                                                                |
| `github.workspace`        | `string` | O diretório-padrão de trabalho para etapas e a localização-padrão do repositório ao usar a ação [`checkout-`](https://github.com/actions/checkout).                                                                                                                                                                                                                                                                                                                                                             |

#### Contexto `env`

O contexto `env` contém variáveis de ambiente que foram definidas em um fluxo de trabalho, trabalho ou etapa. Para obter mais informações sobre como configurar variáveis de ambiente em seu fluxo de trabalho, consulte "[Sintaxe do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)".

A sintaxe de contexto `env` permite que você use o valor de uma variável de ambiente no seu arquivo de fluxo de trabalho. Você pode usar o contexto `env` no valor de qualquer chave em uma **etapa**, exceto para as chaves `id` e `uses`. Para obter mais informações sobre a sintaxe da etapa, consulte "[Sintaxe do fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)".

Se você desejar usar o valor de uma variável de ambiente dentro de um executor, use o método normal do sistema operacional do executor para ler as variáveis de ambiente.

| Nome da propriedade    | Tipo     | Descrição                                                                                                         |
| ---------------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| `env`                  | `objeto` | Esse contexto altera cada etapa em um trabalho. Você pode acessar esse contexto em qualquer etapa de um trabalho. |
| `env.<env_name>` | `string` | O valor de uma variável de ambiente específica.                                                                   |

#### Contexto `trabalho`

O contexto `job` (trabalho) contém informações sobre o trabalho atualmente em execução.

| Nome da propriedade                       | Tipo     | Descrição                                                                                                                                                                                                                                                                    |
| ----------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `job`                                     | `objeto` | Esse contexto altera cada trabalho em uma execução de fluxo de trabalho. Você pode acessar esse contexto em qualquer etapa de um trabalho.                                                                                                                                   |
| `job.container`                           | `objeto` | Informações sobre o contêiner do trabalho. Para obter mais informações sobre contêineres, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)".                  |
| `job.container.id`                        | `string` | Identificação do contêiner.                                                                                                                                                                                                                                                  |
| `job.container.network`                   | `string` | Identificação da rede do contêiner. O executor cria a rede usada por todos os contêineres em um trabalho.                                                                                                                                                                    |
| `job.services`                            | `objeto` | Contêineres de serviços criados para um trabalho. Para obter mais informações sobre contêineres de serviço, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)". |
| `job.services.<service id>.id`      | `string` | Identificação do contêiner de serviço.                                                                                                                                                                                                                                       |
| `job.services.<service id>.network` | `string` | Identificação da rede do contêiner de serviço. O executor cria a rede usada por todos os contêineres em um trabalho.                                                                                                                                                         |
| `job.services.<service id>.ports`   | `objeto` | As portas expostas do contêiner de serviço.                                                                                                                                                                                                                                  |
| `job.status`                              | `string` | Status atual do trabalho. Possíveis valores são `success`, `failure` ou `cancelled`.                                                                                                                                                                                         |

#### Contexto `etapas`

O contexto `steps` (etapas) contém informações sobre as etapas já executadas do trabalho atual.

| Nome da propriedade                                 | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `steps`                                             | `objeto` | Esse contexto altera cada etapa em um trabalho. Você pode acessar esse contexto em qualquer etapa de um trabalho.                                                                                                                                                                                                                                                            |
| `steps.<step id>.outputs`                     | `objeto` | Conjunto de saídas definidas para a etapa. Para obter mais informações, consulte "[Sintaxe de metadados para o {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs)".                                                                                                                                                        |
| `steps.<step id>.conclusion`                  | `string` | O resultado de uma etapa concluída após [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) ser aplicado. Os valores possíveis são: `sucesso`, `falha`, `cancelado`ou `ignorado`. Quando ocorre uma falha na etapa de `continue-on-error`, o `resultado` será `falha`, mas a conclusão `final` será `sucesso`.     |
| `steps.<step id>.outcome`                     | `string` | O resultado de uma etapa concluída antes de [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) ser aplicado. Os valores possíveis são: `sucesso`, `falha`, `cancelado`ou `ignorado`. Quando ocorre uma falha na etapa de `continue-on-error`, o `resultado` será `falha`, mas a conclusão `final` será `sucesso`. |
| `steps.<step id>.outputs.<output name>` | `string` | Valor de uma saída específica.                                                                                                                                                                                                                                                                                                                                               |

#### Contexto do `executor`

O contexto do `executor` contém informações sobre o executor que está executando o trabalho atual.

| Nome da propriedade | Tipo     | Descrição                                                                                                                                                                                                                                                                                           |
| ------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runner.os`         | `string` | O sistema operacional do executor que está executando o trabalho. Os valores possíveis são: `Linux`, `Windows` ou `macOS`.                                                                                                                                                                          |
| `runner.temp`       | `string` | O caminho do diretório temporário para o executor. É certo que este diretório estará vazio no início de cada trabalho, mesmo em executores auto-hospedados.                                                                                                                                         |
| `runner.tool_cache` | `string` | {% if currentVersion == "github-ae@latest" %}Para instruções instruções sobre como ter certeza de que o seu {% data variables.actions.hosted_runner %} tem o software necessário instalado, consulte "[Criar imagens personalizadas](/actions/using-github-hosted-runners/creating-custom-images)". |
{% else %}O caminho do diretório que contém algumas das ferramentas pré-instaladas para executores hospedados de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Especificações para executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)". {% endif %}

#### Contexto `needs`

O contexto `needs` contém saídas de todos os trabalhos definidos como uma dependência do trabalho atual. Para obter mais informações sobre a definição de dependências de tarefas, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)".

| Nome da propriedade                                | Tipo     | Descrição                                                                                                                            |
| -------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `needs.<job id>`                             | `objeto` | Um único trabalho do qual o trabalho atual depende.                                                                                  |
| `needs.<job id>.outputs`                     | `objeto` | O conjunto de saídas de um trabalho do qual o trabalho atual depende.                                                                |
| `needs.<job id>.outputs.<output name>` | `string` | O valor de uma saída específica para um trabalho do qual o trabalho atual depende.                                                   |
| `needs.<job id>.result`                      | `string` | O resultado de um trabalho do qual depende o trabalho atual. Os valores possíveis são: `sucesso`, `falha`, `cancelado`ou `ignorado`. |

#### Exemplo de impressão de informações de contexto no arquivo de log

Para inspecionar as informações acessíveis em cada contexto, você pode usar este exemplo de arquivo de fluxo de trabalho.

{% data reusables.github-actions.github-context-warning %}

**.github/workflows/main.yml**
{% raw %}
```yaml
on: push

jobs:
  one:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        env:
          GITHUB_CONTEXT: ${{ toJSON(github) }}
        run: echo "$GITHUB_CONTEXT"
      - name: Dump job context
        env:
          JOB_CONTEXT: ${{ toJSON(job) }}
        run: echo "$JOB_CONTEXT"
      - name: Dump steps context
        env:
          STEPS_CONTEXT: ${{ toJSON(steps) }}
        run: echo "$STEPS_CONTEXT"
      - name: Dump runner context
        env:
          RUNNER_CONTEXT: ${{ toJSON(runner) }}
        run: echo "$RUNNER_CONTEXT"
      - name: Dump strategy context
        env:
          STRATEGY_CONTEXT: ${{ toJSON(strategy) }}
        run: echo "$STRATEGY_CONTEXT"
      - name: Dump matrix context
        env:
          MATRIX_CONTEXT: ${{ toJSON(matrix) }}
        run: echo "$MATRIX_CONTEXT"
```
{% endraw %}

### Literais

Como parte da expressão, você pode usar os tipos de dados `boolean`, `null`, `number` ou `string`. Os literais boolianos não diferenciam maiúsculas de minúsculas, de modo que você pode usar `true` ou `True`.

| Tipo de dados | Valor do literal                                                                            |
| ------------- | ------------------------------------------------------------------------------------------- |
| `boolean`     | `true` ou `false`                                                                           |
| `null`        | `null`                                                                                      |
| `number`      | Qualquer formato de número aceito por JSON.                                                 |
| `string`      | Você deve usar aspas simples. Aspas simples de literal devem ter aspas simples como escape. |

#### Exemplo

{% raw %}
```yaml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99-e2 }}
  myString: ${{ 'Mona the Octocat' }}
  myEscapedString: ${{ 'It''s open source!' }}
```
{% endraw %}

### Operadores

| Operador                  | Descrição                    |
| ------------------------- | ---------------------------- |
| `( )`                     | Agrupamento lógico           |
| `[ ]`                     | Índice                       |
| `.`                       | Desreferência de propriedade |
| `!`                       | Não                          |
| `<`                    | Menor que                    |
| `<=`                   | Menor ou igual               |
| `>`                    | Maior que                    |
| `>=`                   | Maior ou igual               |
| `==`                      | Igual                        |
| `!=`                      | Não igual                    |
| `&&`              | E                            |
| <code>\|\|</code> | Ou                           |

O {% data variables.product.prodname_dotcom %} faz comparações livres de igualdade.

* Se os tipos não correspondem, o {% data variables.product.prodname_dotcom %} força o tipo para um número. O {% data variables.product.prodname_dotcom %} converte tipos de dados em um número usando estes esquemas:

  | Tipo     | Resultado                                                                                                                      |
  | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
  | Nulo     | `0`                                                                                                                            |
  | Booleano | `true` retorna `1` <br /> `false` retorna `0`                                                                            |
  | string   | Analisado com base em qualquer formato de número JSON; do contrário, `NaN`. <br /> Observação: string vazia retorna `0`. |
  | Array    | `NaN`                                                                                                                          |
  | Object   | `NaN`                                                                                                                          |
* Uma comparação de um `NaN` com outro `NaN` não resulta em `true`. Para obter mais informações, consulte os "[docs NaN Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)."
* O {% data variables.product.prodname_dotcom %} ignora as maiúsculas e minúsculas ao comparar strings.
* Objetos e arrays só são considerados iguais quando forem a mesma instância.

### Funções

O {% data variables.product.prodname_dotcom %} oferece um conjunto de funções integradas que podem ser usadas em expressões. Algumas funções convertem valores em uma string para realizar comparações. O {% data variables.product.prodname_dotcom %} converte tipos de dados em uma string usando estes esquemas:

| Tipo     | Resultado                                       |
| -------- | ----------------------------------------------- |
| Nulo     | `''`                                            |
| Booleano | `'true'` ou `'false'`                           |
| Número   | Formato decimal, exponencial para números altos |
| Array    | Arrays não são convertidos em uma string        |
| Object   | Objetos não são convertidos em uma string       |

#### contains

`contains( search, item )`

Retorna `verdadeiro` se a `pesquisa` contiver `item`. Se a `pesquisa` for uma array, essa função retornará `verdadeiro` se o item `` for um elemento na array. Se a `pesquisa` for uma string, essa função retornará `verdadeiro` se o `item` for uma substring da `pesquisa`. Essa função não diferencia maiúsculas de minúsculas. Lança valores em uma string.

##### Exemplo de uso de array

`contains(github.event.issue.labels.*.name, 'bug')`

##### Exemplo de uso de string

`contains('Hello world', 'llo')` retorna `true`

#### startsWith

`startsWith( searchString, searchValue )`

Retorna `true` quando `searchString` começar com `searchValue`. Essa função não diferencia maiúsculas de minúsculas. Lança valores em uma string.

##### Exemplo

`startsWith('Hello world', 'He')` retorna `true`

#### endsWith

`endsWith( searchString, searchValue )`

Retorna `true` se `searchString` terminar com `searchValue`. Essa função não diferencia maiúsculas de minúsculas. Lança valores em uma string.

##### Exemplo

`endsWith('Hello world', 'ld')` retorna `true`

#### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

Substitui valores na `string` pela variável `replaceValueN`. As variáveis na `string` são especificadas usando a sintaxe `{N}`, onde `N` é um inteiro. Você deve especificar pelo menos um `replaceValue` e `string`. Não há máximo para o número de variáveis (`replaceValueN`) que você pode usar. Use chaves duplas como escape das chaves.

##### Exemplo

Retorna 'Hello Mona the Octocat'

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

##### Exemplo de escape de chaves

Returna '{Hello Mona the Octocat!}'

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

#### join

`join( array, optionalSeparator )`

O valor para `array` pode ser uma array ou uma string. Todos os valores na `array` são concatenados em uma string. Se você fornecer `optionalSeparator`, ele será inserido entre os valores concatenados. Caso contrário, será usado o separador-padrão `,`. Lança valores em uma string.

##### Exemplo

`join(github.event.issue.labels.*.name, ', ')` may return 'bug, help wanted'

#### toJSON

`toJSON(value)`

Retorna uma bela representação JSON de `value`. Você pode usar essa função para depurar as informações fornecidas em contextos.

##### Exemplo

`toJSON(job)` pode retornar `{ "status": "Success" }`

#### fromJSON

`fromJSON(value)`

Retorna um objeto do JSON ou tipo de dado do JSON para `valor`. Você pode usar esta função para fornecer um objeto do JSON como uma expressão avaliada ou para converter variáveis de ambiente de uma string.

##### Exemplo que retorna um objeto do JSON

Este fluxo de trabalho define uma matriz JSON em um trabalho, e o passa para o próximo trabalho usando uma saída do `fromJSON`.

{% raw %}
```yaml
name: build
on: push
jobs:
  job1:
    runs-on: ubuntu-latest
    outputs:
      matrix: ${{ steps.set-matrix.outputs.matrix }}
    steps:
    - id: set-matrix
      run: echo "::set-output name=matrix::{\"include\":[{\"project\":\"foo\",\"config\":\"Debug\"},{\"project\":\"bar\",\"config\":\"Release\"}]}"
  job2:
    needs: job1
    runs-on: ubuntu-latest
    strategy:
      matrix: ${{fromJSON(needs.job1.outputs.matrix)}}
    steps:
    - run: build
```
{% endraw %}

##### Exemplo que retorna um tipo de dado do JSON

Este fluxo de trabalho usa `fromJSON` para converter variáveis de ambiente de uma string para um número inteiro ou booleano.

{% raw %}
```yaml
name: print
on: push
env: 
  continue: true
  time: 3
jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
    - continue-on-error: ${{ fromJSON(env.continue) }}
      timeout-minutes: ${{ fromJSON(env.time) }}
      run: echo ...
```
{% endraw %}

#### hashFiles

`hashFiles(path)`

Retorna um único hash para o conjunto de arquivos que correspondem ao padrão do `caminho`. Você pode fornecer um único padrão de `caminho` ou vários padrões de `caminho` separados por vírgulas. O `caminho` é relativo ao diretório `GITHUB_WORKSPACE` e pode incluir apenas arquivos dentro do `GITHUB_WORKSPACE`. Essa função calcula uma hash SHA-256 individual para cada arquivo correspondente e, em seguida, usa esses hashes para calcular um hash SHA-256 final para o conjunto de arquivos. Para obter mais informações sobre o SHA-256, consulte "[SHA-2](https://en.wikipedia.org/wiki/SHA-2)".

Você pode usar a correspondência de padrão de caracteres para corresponder os nomes dos arquivos. No Windows, a correspondência do padrão diferencia maiúsculas e minúsculas. Para obter mais informações sobre caracteres de correspondência de padrões suportados, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)".

##### Exemplo com um padrão único

Corresponde qualquer arquivo `package-lock.json` no repositório.

`hashFiles('**/package-lock.json')`

##### Exemplo com vários padrões

Cria um hash para arquivos de `pacote-lock.json` e `Gemfile.lock` no repositório.

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`

### Funções de verificação de status de trabalho

Você pode usar as funções de verificação de status a seguir como expressões nas condicionais `if`. Se sua expressão `if` não contiver qualquer uma das funções de status, ela automaticamente resultará em `success()`. Para obter mais informações sobre condicionais `if`, consulte "[Sintaxe de fluxo de trabalho para o GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)".

#### success

Retorna `verdadeiro` quando não ocorrer falha em nenhuma das etapas anteriores falhar ou quando não for cancelada.

##### Exemplo

```yaml
etapas:
  ...
  - nome: O trabalho foi bem-sucedido
    se: {% raw %}${{ success() }}{% endraw %}
```

#### always

Sempre retorna `verdadeiro`, mesmo quando cancelado. Um trabalho ou uma etapa não será executado(a) quando uma falha crítica impedir a tarefa de ser executada. Por exemplo, se houver falha ao obter as fontes.

##### Exemplo

```yaml
se: {% raw %}${{ always() }}{% endraw %}
```

#### cancelled

Retornará `true` se o fluxo de trabalho foi cancelado.

##### Exemplo

```yaml
se: {% raw %}${{ cancelled() }}{% endraw %}
```

#### failure

Retorna `verdadeiro` quando ocorre uma falha no trabalho em qualquer etapa anterior.

##### Exemplo

```yaml
etapas:
  ...
  - nome: Ocorreu uma falha no trabalho
    if: {% raw %}${{ failure() }}{% endraw %}
```

### Filtros de objeto

Você pode usar a sintaxe `*` para aplicar um filtro e selecionar itens correspondentes em uma coleção.

Por exemplo, pense em um array de objetos de nome `frutas`.

```json
[
  { "name": "maçã", "quantidade": 1 },
  { "name": "laranja", "quantidade": 2 },
  { "name": "pera", "quantidade": 1 }
]
```

O filtro `frutas.*.name` retorna o array `[ "maçã", "laranja", "pera" ]`
