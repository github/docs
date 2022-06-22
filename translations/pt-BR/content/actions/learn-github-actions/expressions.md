---
title: Expressões
shortTitle: Expressões
intro: Você pode avaliar expressões em fluxos de trabalho e ações.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre as expressões

Você pode usar expressões para definir variáveis de ambiente programaticamente em arquivos de fluxo de trabalho e contextos de acesso. Uma expressão pode ser qualquer combinação de valores literais, referências a um contexto ou funções. É possível combinar literais, referências de contexto e funções usando operadores. Para obter mais informações sobre os contextos, consulte "[Contextos](/actions/learn-github-actions/contexts)".

Expressões são comumente usadas com a condicional `if` palavra-chave em um arquivo de fluxo de trabalho para determinar se uma etapa deve ser executada. Quando uma condicional `if` for `true`, a etapa será executada.

É necessário usar uma sintaxe específica para avisar o {% data variables.product.prodname_dotcom %} para avaliar a expressão e não tratá-la como uma string.

{% raw %}
`${{ <expression> }}`
{% endraw %}

{% data reusables.actions.expression-syntax-if %} Para obter mais informações sobre as condições `se`, consulte "[Sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)".

{% data reusables.actions.context-injection-warning %}

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
  MY_ENV_VAR: ${{ <expression> }}
```
{% endraw %}

## Literais

Como parte da expressão, você pode usar os tipos de dados `boolean`, `null`, `number` ou `string`.

| Tipo de dados | Valor do literal                                                                                                                                                                                                                                                                                                                          |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `boolean`     | `true` ou `false`                                                                                                                                                                                                                                                                                                                         |
| `null`        | `null`                                                                                                                                                                                                                                                                                                                                    |
| `number`      | Qualquer formato de número aceito por JSON.                                                                                                                                                                                                                                                                                               |
| `string`      | Você não precisa anexar strings em `{% raw %}${{{% endraw %}` e `{% raw %}}}{% endraw %}`. No entanto, se o fizer, você deverá usar aspas simples (`'`) em torno da string. Para usar uma aspa simples literal, não use as aspas simples literais e use as aspas simples adicionais (`''`). Colocar aspas duplas (`"`) irá gerar um erro. |

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

| Operador                  | Descrição             |
| ------------------------- | --------------------- |
| `( )`                     | Agrupamento lógico    |
| `[ ]`                     | Índice                |
| `.`                       | Property de-reference |
| `!`                       | Não                   |
| `<`                    | Menor que             |
| `<=`                   | Menor ou igual        |
| `>`                    | Maior que             |
| `>=`                   | Maior ou igual        |
| `==`                      | Igual                 |
| `!=`                      | Não igual             |
| `&&`              | E                     |
| <code>\|\|</code> | Ou                    |

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

## Funções

O {% data variables.product.prodname_dotcom %} oferece um conjunto de funções integradas que podem ser usadas em expressões. Algumas funções convertem valores em uma string para realizar comparações. O {% data variables.product.prodname_dotcom %} converte tipos de dados em uma string usando estes esquemas:

| Tipo     | Resultado                                       |
| -------- | ----------------------------------------------- |
| Nulo     | `''`                                            |
| Booleano | `'true'` ou `'false'`                           |
| Número   | Formato decimal, exponencial para números altos |
| Array    | Arrays não são convertidos em uma string        |
| Object   | Objetos não são convertidos em uma string       |

### contains

`contains( search, item )`

Retorna `verdadeiro` se a `pesquisa` contiver `item`. Se a `pesquisa` for uma array, essa função retornará `verdadeiro` se o item `` for um elemento na array. Se a `pesquisa` for uma string, essa função retornará `verdadeiro` se o `item` for uma substring da `pesquisa`. Essa função não diferencia maiúsculas de minúsculas. Lança valores em uma string.

#### Exemplo de uso de array

`contains(github.event.issue.labels.*.name, 'bug')` retorna se a issue relacionada ao evento possui uma etiqueta de "erro".

#### Exemplo de uso de string

`contains('Hello world', 'llo')` retorna `true`.

### startsWith

`startsWith( searchString, searchValue )`

Retorna `true` quando `searchString` começar com `searchValue`. Essa função não diferencia maiúsculas de minúsculas. Lança valores em uma string.

#### Exemplo

`startsWith('Hello world', 'He')` retorna `true`.

### endsWith

`endsWith( searchString, searchValue )`

Retorna `true` se `searchString` terminar com `searchValue`. Essa função não diferencia maiúsculas de minúsculas. Lança valores em uma string.

#### Exemplo

`endsWith('Hello world', 'ld')` retorna `true`.

### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

Substitui valores na `string` pela variável `replaceValueN`. As variáveis na `string` são especificadas usando a sintaxe `{N}`, onde `N` é um inteiro. Você deve especificar pelo menos um `replaceValue` e `string`. Não há máximo para o número de variáveis (`replaceValueN`) que você pode usar. Escape de chaves usando chaves duplas.

#### Exemplo

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

Retorna 'Hello Mona the Octocat'.

#### Exemplo de escape de chaves

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

Returna '{Hello Mona the Octocat!}'.

### join

`join( array, optionalSeparator )`

O valor para `array` pode ser uma array ou uma string. Todos os valores na `array` são concatenados em uma string. Se você fornecer `optionalSeparator`, ele será inserido entre os valores concatenados. Caso contrário, será usado o separador-padrão `,`. Lança valores em uma string.

#### Exemplo

`join(github.event.issue.labels.*.name, ', ')` may return 'bug, help wanted'

### toJSON

`toJSON(value)`

Retorna uma bela representação JSON de `value`. Você pode usar essa função para depurar as informações fornecidas em contextos.

#### Exemplo

`toJSON(job)` pode retornar `{ "status": "Success" }`

### fromJSON

`fromJSON(value)`

Retorna um objeto do JSON ou tipo de dado do JSON para `valor`. Você pode usar esta função para fornecer um objeto do JSON como uma expressão avaliada ou para converter variáveis de ambiente de uma string.

#### Exemplo que retorna um objeto do JSON

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

#### Exemplo que retorna um tipo de dado do JSON

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

### hashFiles

`hashFiles(path)`

Retorna um único hash para o conjunto de arquivos que correspondem ao padrão do `caminho`. Você pode fornecer um único padrão de `caminho` ou vários padrões de `caminho` separados por vírgulas. O `caminho` é relativo ao diretório `GITHUB_WORKSPACE` e pode incluir apenas arquivos dentro do `GITHUB_WORKSPACE`. Essa função calcula uma hash SHA-256 individual para cada arquivo correspondente e, em seguida, usa esses hashes para calcular um hash SHA-256 final para o conjunto de arquivos. Se o padrão `caminho ` não corresponder a nenhum arquivo, ele irá retornar uma string vazia. Para obter mais informações sobre o SHA-256, consulte "[SHA-2](https://en.wikipedia.org/wiki/SHA-2)".

Você pode usar a correspondência de padrão de caracteres para corresponder os nomes dos arquivos. No Windows, a correspondência do padrão diferencia maiúsculas e minúsculas. Para obter mais informações sobre caracteres de correspondência de padrões suportados, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)".

#### Exemplo com um padrão único

Corresponde qualquer arquivo `package-lock.json` no repositório.

`hashFiles('**/package-lock.json')`

#### Exemplo com vários padrões

Cria um hash para arquivos de `pacote-lock.json` e `Gemfile.lock` no repositório.

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`


{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
## Funções de verificação de status

Você pode usar as funções de verificação de status a seguir como expressões nas condicionais `if`. Uma verificação de status padrão de `success()` é aplicada, a menos que você inclua uma dessas funções. Para obter mais informações sobre as condicionais `if`, consulte "[Sintaxe fluxo de trabalho para o GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)" e "[Sintaxe de metadados para o GitHub Composite Actions](/actions/creating-actions/metadata-syntax-for-github-actions/#runsstepsif)".
{% else %}
## Funções de verificação
Você pode usar as funções de verificação de status a seguir como expressões nas condicionais `if`. Uma verificação de status padrão de `success()` é aplicada, a menos que você inclua uma dessas funções. Para obter mais informações sobre as condicionais `se`, consulte "[Sintaxe do fluxo de trabalho para o GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif).
{% endif %}

### success

Retorna `verdadeiro` quando não ocorrer falha em nenhuma das etapas anteriores falhar ou quando não for cancelada.

#### Exemplo

```yaml
etapas:
  ...
  - nome: O trabalho foi bem-sucedido
    se: {% raw %}${{ success() }}{% endraw %}
```

### always

Faz com que a etapa seja sempre executada e retorna `verdadeiro`, mesmo quando cancelada. Um trabalho ou uma etapa não será executado(a) quando uma falha crítica impedir a tarefa de ser executada. Por exemplo, se houver falha ao obter as fontes.

#### Exemplo

```yaml
se: {% raw %}${{ always() }}{% endraw %}
```

### cancelled

Retornará `true` se o fluxo de trabalho foi cancelado.

#### Exemplo

```yaml
se: {% raw %}${{ cancelled() }}{% endraw %}
```

### failure

Retorna `verdadeiro` quando ocorre uma falha no trabalho em qualquer etapa anterior. Se você tem uma cadeia de trabalhos dependentes, `fracasso()` retorna `verdadeiro` se algum trabalho ancestral falhar.

#### Exemplo

```yaml
etapas:
  ...
  - nome: Ocorreu uma falha no trabalho
    if: {% raw %}${{ failure() }}{% endraw %}
```

#### falha com as condições

Você pode incluir condições extras para uma etapa a ser executada após uma falha, mas você ainda deve incluir `failure()` para substituir a verificação de status padrão de `sucess()` que é automaticamente aplicada a condições `se` que não contenham uma função de verificação de status.

##### Exemplo

```yaml
etapas:
  ...
  - name: Failing step
    id: demo
    run: exit 1
  - name: The demo step has failed
    if: {% raw %}${{ failure() && steps.demo.conclusion == 'failure' }}{% endraw %}
```

## Filtros de objeto

Você pode usar a sintaxe `*` para aplicar um filtro e selecionar itens correspondentes em uma coleção.

Por exemplo, pense em um array de objetos de nome `frutas`.

```json
[
  { "name": "maçã", "quantidade": 1 },
  { "name": "laranja", "quantidade": 2 },
  { "name": "pera", "quantidade": 1 }
]
```

O filtro `frutas.*.name` retorna o array `[ "maçã", "laranja", "pera" ]`.

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

O filtro `vegetables.*.ComblePortions` pode ser avaliado:

```json

[
  ["roots", "stalks"],
  ["hearts", "stems", "leaves"],
  ["roots", "stems", "leaves"],
]
```

Uma vez que os objetos não preservam a ordem, não se pode garantir a ordem de saída.
