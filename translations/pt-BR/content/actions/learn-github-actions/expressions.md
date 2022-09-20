---
title: Expressões
shortTitle: Expressions
intro: Você pode avaliar expressões em fluxos de trabalho e ações.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 94bd9f7a43d4325e497a776357711adf64c0d7ba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614220'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre as expressões

Você pode usar expressões para definir variáveis de ambiente programaticamente em arquivos de fluxo de trabalho e contextos de acesso. Uma expressão pode ser qualquer combinação de valores literais, referências a um contexto ou funções. É possível combinar literais, referências de contexto e funções usando operadores. Para obter mais informações sobre contextos, confira "[Contextos](/actions/learn-github-actions/contexts)".

As expressões são normalmente usadas com a palavra-chave `if` condicional em um arquivo de fluxo de trabalho para determinar se uma etapa deve ser executada. Quando um condicional `if` for `true`, a etapa será executada.

É necessário usar uma sintaxe específica para avisar o {% data variables.product.prodname_dotcom %} para avaliar a expressão e não tratá-la como uma string.

{% raw %} `${{ <expression> }}`
{% endraw %}

{% data reusables.actions.expression-syntax-if %} Para obter mais informações sobre condicionais `if`, confira "[Sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)".

{% data reusables.actions.context-injection-warning %}

#### Expressão de exemplo em um condicional `if`

```yaml
steps:
  - uses: actions/hello-world-javascript-action@v1.1
    if: {% raw %}${{ <expression> }}{% endraw %}
```

#### Exemplo de configuração de variável de ambiente

{% raw %}
```yaml
env:
  MY_ENV_VAR: ${{ <expression> }}
```
{% endraw %}

## Literais

Como parte de uma expressão, você pode usar os tipos de dados `boolean`, `null`, `number` ou `string`.

| Tipo de dados | Valor literal |
|-----------|---------------|
| `boolean` | `true` ou `false` |
| `null`    | `null` |
| `number`  | Qualquer formato de número aceito por JSON. |
| `string`  | Você não precisa colocar cadeias de caracteres em `{% raw %}${{{% endraw %}` e `{% raw %}}}{% endraw %}`. No entanto, se você fizer isso, deverá usar aspas simples (`'`) ao redor da cadeia de caracteres. Para usar uma aspa simples literal, não use as aspas simples literais e use as aspas simples adicionais (`''`). Encapsular com aspas duplas (`"`) gerará um erro. |

#### Exemplo

{% raw %}

```yaml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99e-2 }}
  myString: Mona the Octocat
  myStringInBraces: ${{ 'It''s open source!' }}
```

{% endraw %}

## Operadores

| Operador    | Descrição |
| ---         | ---         |
| `( )`       | Agrupamento lógico |
| `[ ]`       | Índice
| `.`         | Property de-reference |
| `!`         | Not |
| `<`         | Menor que |
| `<=`        | Inferior ou igual |
| `>`         | Maior que |
| `>=`        | Maior ou igual |
| `==`        | Igual |
| `!=`        | Diferente |
| `&&`        | And |
|  <code>\|\|</code> | Ou |

O {% data variables.product.prodname_dotcom %} faz comparações livres de igualdade.

* Se os tipos não correspondem, o {% data variables.product.prodname_dotcom %} força o tipo para um número. O {% data variables.product.prodname_dotcom %} converte tipos de dados em um número usando estes esquemas:

  | Tipo    | Result |
  | ---     | ---    |
  | Nulo    | `0` |
  | Booliano | `true` retorna `1` <br /> `false` retorna `0` |
  | String  | Analisado de qualquer formato de número JSON legal, caso contrário, `NaN`. <br /> Observação: a cadeia de caracteres vazia retorna `0`. |
  | Array   | `NaN` |
  | Objeto  | `NaN` |
* Uma comparação entre um `NaN` e outro `NaN` não resulta em `true`. Para obter mais informações, confira os "[documentos do NaN Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)".
* O {% data variables.product.prodname_dotcom %} ignora as maiúsculas e minúsculas ao comparar strings.
* Objetos e arrays só são considerados iguais quando forem a mesma instância.

## Funções

O {% data variables.product.prodname_dotcom %} oferece um conjunto de funções integradas que podem ser usadas em expressões. Algumas funções convertem valores em uma string para realizar comparações. O {% data variables.product.prodname_dotcom %} converte tipos de dados em uma string usando estes esquemas:

| Tipo    | Result |
| ---     | ---    |
| Nulo    | `''` |
| Booliano | `'true'` ou `'false'` |
| Número  | Formato decimal, exponencial para números altos |
| Array   | Arrays não são convertidos em uma string |
| Objeto  | Objetos não são convertidos em uma string |

### contém

`contains( search, item )`

Retorna `true` se `search` contém `item`. Se `search` for uma matriz, essa função retornará `true` se o `item` for um elemento na matriz. Se `search` for uma cadeia de caracteres, essa função retornará `true` se `item` uma substring de `search`. Essa função não diferencia maiúsculas de minúsculas. Lança valores em uma string.

#### Exemplo de uso de string

`contains('Hello world', 'llo')` retorna `true`.

#### Exemplo de como usar um filtro de objeto

`contains(github.event.issue.labels.*.name, 'bug')` retornará `true` se o problema relacionado ao evento tiver um rótulo "bug".

Para obter mais informações, confira "[Filtros de objeto](#object-filters)".

#### Exemplo que corresponde a uma matriz de cadeias de caracteres

Em vez de escrever `github.event_name == "push" || github.event_name == "pull_request"`, você pode usar `contains()` com `fromJson()` para verificar se uma matriz de cadeias de caracteres contém um `item`.

Por exemplo, `contains(fromJson('["push", "pull_request"]'), github.event_name)` retornará `true` se `github.event_name` for "push" ou "pull_request".

### startsWith

`startsWith( searchString, searchValue )`

Retorna `true` quando`searchString` começa com `searchValue`. Essa função não diferencia maiúsculas de minúsculas. Lança valores em uma string.

#### Exemplo

`startsWith('Hello world', 'He')` retorna `true`.

### endsWith

`endsWith( searchString, searchValue )`

Retorna `true` se `searchString` termina com `searchValue`. Essa função não diferencia maiúsculas de minúsculas. Lança valores em uma string.

#### Exemplo

`endsWith('Hello world', 'ld')` retorna `true`.

### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

Substitui os valores na `string`, com a variável `replaceValueN`. As variáveis na `string` são especificadas usando a sintaxe `{N}`, em que `N` é um inteiro. É necessário especificar pelo menos um `replaceValue` e uma `string`. Não há um máximo para o número de variáveis (`replaceValueN`) que você pode usar. Escape de chaves usando chaves duplas.

#### Exemplo

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

Retorna "Hello Mona the Octocat".

#### Exemplo de escape de chaves

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

Retorna '{Hello Mona the Octocat!}'.

### join

`join( array, optionalSeparator )`

O valor para `array` pode ser uma matriz ou uma cadeia de caracteres. Todos os valores em `array` são concatenados em uma cadeia de caracteres. Se você fornecer `optionalSeparator`, ele será inserido entre os valores concatenados. Caso contrário, o separador padrão `,` será usado. Lança valores em uma string.

#### Exemplo

`join(github.event.issue.labels.*.name, ', ')` pode retornar "bug, preciso de ajuda"

### toJSON

`toJSON(value)`

Retorna uma representação JSON recém-impressa de `value`. Você pode usar essa função para depurar as informações fornecidas em contextos.

#### Exemplo

`toJSON(job)` pode retornar `{ "status": "Success" }`

### fromJSON

`fromJSON(value)`

Retorna um objeto JSON ou um tipo de dados JSON para `value`. Você pode usar esta função para fornecer um objeto do JSON como uma expressão avaliada ou para converter variáveis de ambiente de uma string.

#### Exemplo que retorna um objeto do JSON

Esse fluxo de trabalho define uma matriz JSON em um trabalho e a passa para o próximo trabalho usando uma saída e `fromJSON`.

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
      matrix: ${{ fromJSON(needs.job1.outputs.matrix) }}
    steps:
      - run: build
```
{% endraw %}

#### Exemplo que retorna um tipo de dado do JSON

Esse fluxo de trabalho usa `fromJSON` para converter variáveis de ambiente de uma cadeia de caracteres em um booliano ou inteiro.

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

### hashFiles

`hashFiles(path)`

Retorna um único hash para o conjunto de arquivos que corresponde ao padrão `path`. Você pode fornecer um único padrão `path` ou vários padrões `path` separados por vírgulas. O `path` é relativo ao diretório `GITHUB_WORKSPACE` e só pode incluir arquivos dentro do `GITHUB_WORKSPACE`. Essa função calcula uma hash SHA-256 individual para cada arquivo correspondente e, em seguida, usa esses hashes para calcular um hash SHA-256 final para o conjunto de arquivos. Se o padrão `path` não corresponder a nenhum arquivo, isso retornará uma cadeia de caracteres vazia. Para obter mais informações sobre SHA-256, confira "[SHA-2](https://en.wikipedia.org/wiki/SHA-2)".

Você pode usar a correspondência de padrão de caracteres para corresponder os nomes dos arquivos. No Windows, a correspondência do padrão diferencia maiúsculas e minúsculas. Para obter mais informações sobre caracteres de padrões correspondentes com suporte, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)".

#### Exemplo com um padrão único

Corresponde a qualquer arquivo `package-lock.json` no repositório.

`hashFiles('**/package-lock.json')`

#### Exemplo com vários padrões

Cria um hash para qualquer `package-lock.json` e arquivos `Gemfile.lock` no repositório.

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`


{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
## Funções de verificação de status

Você pode usar as funções de verificação de status a seguir como expressões em condicionais `if`. Uma verificação de status `success()` padrão é aplicada, a menos que você inclua uma dessas funções. Para obter mais informações sobre condicionais `if`, confira "[Sintaxe de fluxo de trabalho para GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)" e "[Sintaxe de metadados para ações compostas GitHub](/actions/creating-actions/metadata-syntax-for-github-actions/#runsstepsif)".
{% else %}
## Funções de verificação
Você pode usar as funções de verificação de status a seguir como expressões em condicionais `if`. Uma verificação de status `success()` padrão é aplicada, a menos que você inclua uma dessas funções. Para obter mais informações sobre condicionais `if`, confira "[Sintaxe de fluxo de trabalho para GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)".
{% endif %}

### sucesso

Retorna `true` quando nenhuma das etapas anteriores falhou ou foi cancelada.

#### Exemplo

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

### always

Faz com que a etapa sempre seja executada e retorna `true`, mesmo quando cancelada. Um trabalho ou uma etapa não será executado(a) quando uma falha crítica impedir a tarefa de ser executada. Por exemplo, se houver falha ao obter as fontes.

#### Exemplo

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

### cancelled

Retorna `true` se o fluxo de trabalho foi cancelado.

#### Exemplo

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

### falha

Retorna `true` quando qualquer etapa anterior de um trabalho falha. Se você tiver uma cadeia de trabalhos dependentes, `failure()` retornará `true` se algum trabalho ancestral falhar.

#### Exemplo

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

#### falha com condições

Você pode incluir condições extras para uma etapa a ser executada após uma falha, mas ainda precisa incluir `failure()` para substituir a verificação de status padrão de `success()` que é aplicada automaticamente a condições `if` que não contêm uma função de verificação de status.

##### Exemplo

```yaml
steps:
  ...
  - name: Failing step
    id: demo
    run: exit 1
  - name: The demo step has failed
    if: {% raw %}${{ failure() && steps.demo.conclusion == 'failure' }}{% endraw %}
```

## Filtros de objeto

Você pode usar a sintaxe `*` para aplicar um filtro e selecionar itens de uma coleção correspondente.

Por exemplo, considere uma matriz de objetos chamados `fruits`.

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

O filtro `fruits.*.name` retorna a matriz `[ "apple", "orange", "pear" ]`.

Você também pode usar a sintaxe `*` em um objeto. Por exemplo, suponha que você tenha um objeto chamado `vegetables`.

```json

{
  "scallions":
  {
    "colors": ["green", "white", "red"],
    "ediblePortions": ["roots", "stalks"],
  },
  "beets":
  {
    "colors": ["purple", "red", "gold", "white", "pink"],
    "ediblePortions": ["roots", "stems", "leaves"],
  },
  "artichokes":
  {
    "colors": ["green", "purple", "red", "black"],
    "ediblePortions": ["hearts", "stems", "leaves"],
  },
}
```

O filtro `vegetables.*.ediblePortions` pode ser avaliado como:

```json

[
  ["roots", "stalks"],
  ["hearts", "stems", "leaves"],
  ["roots", "stems", "leaves"],
]
```

Como os objetos não preservam a ordem, a ordem da saída não pode ser garantida.
