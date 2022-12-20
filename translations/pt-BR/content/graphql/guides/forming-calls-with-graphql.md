---
title: Realizar chamadas com o GraphQL
intro: 'Aprenda a efetuar a autenticação da a API do GraphQL e, em seguida, aprenda a criar e executar consultas e mutações.'
redirect_from:
  - /v4/guides/forming-calls
  - /graphql/guides/forming-calls
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Form calls with GraphQL
ms.openlocfilehash: b3778872cad120f64f2fdbc238f2319bdd758513
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147527891'
---
## Autenticar com o GraphQL

Para comunicar-se com o servidor GraphQL, você precisará de um token do OAuth com os escopos corretos.

Siga as etapas descritas em "[Como criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)" para criar um token. Os escopos de que você precisa dependem do tipo de dados que você está tentando solicitar. Por exemplo, selecione os escopos do **Usuário** para solicitar dados do usuário. Caso precise ter acesso às informações do repositório, selecione os escopos do **Repositório** apropriados.

{% ifversion fpt or ghec %}

Para fazer a correspondência do comportamento do [GraphQL Explorer](/graphql/guides/using-the-explorer), solicite os seguintes escopos:

{% else %}

Recomendam-se os escopos a seguir:

{% endif %}


```
repo
read:packages
read:org
read:public_key
read:repo_hook
user
read:discussion
read:enterprise
read:gpg_key
```

A API envia uma notificação se um recurso precisar de um escopo específico.

## O ponto final do GraphQL

A API REST tem inúmeros pontos finais; a API do GraphQL tem um único ponto final:

<pre>{% data variables.product.graphql_url_pre %}</pre>

O ponto de final permanece constante, independentemente da operação que você realizar.

## Comunicação com o GraphQL

Como as operações do GraphQL consistem em várias linhas de JSON, o GitHub recomenda o uso do [Explorer](/graphql/guides/using-the-explorer) para fazer chamadas ao GraphQL. Você também pode usar a cURL ou qualquer outra biblioteca com linguagem HTTP.

Na REST, os [verbos HTTP](/rest#http-verbs) determinam a operação executada. No GraphQL, você fornecerá um texto codificado por JSON se estiver realizando uma consulta ou uma mutação. Portanto, o verbo HTTP é `POST`. A exceção a isso é uma [consulta de introspecção](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api), que é um `GET` simples para o ponto de extremidade. Para obter mais informações sobre uma comparação entre o GraphQL e a REST, confira "[Migração da REST para o GraphQL](/graphql/guides/migrating-from-rest-to-graphql)".

Para consultar o GraphQL usando o cURL, faça uma solicitação `POST` com um conteúdo JSON. O conteúdo precisa conter uma cadeia de caracteres chamada `query`:

```shell
curl -H "Authorization: bearer <em>token</em>" -X POST -d " \
 { \
   \"query\": \"query { viewer { login }}\" \
 } \
" {% data variables.product.graphql_url_code %}
```

{% tip %}

**Observação**: o valor da cadeia de caracteres `"query"` precisa fazer o escape de caracteres de nova linha ou o esquema não o analisará corretamente. Para o corpo de `POST`, use aspas duplas externas e aspas duplas internas com escape.

{% endtip %}

### Sobre consultas e operações de mutação

Os dois tipos de operações permitidas na API do GraphQL do GitHub são _consultas_ e _mutações_. Comparando o GraphQL com a REST, as consultas operam como solicitações `GET`, enquanto as mutações operam como `POST`/`PATCH`/`DELETE`. O [nome da mutação](/graphql/reference/mutations) determina a modificação que é executada.

Para obter informações sobre a limitação de taxa, confira "[Limitações de recursos do GraphQL](/graphql/overview/resource-limitations)".

As consultas e mutações compartilham formas semelhantes, com algumas diferenças importantes.

### Sobre consultas

As consultas do GraphQL retornam apenas os dados especificados. Para formar uma consulta, você precisa especificar [campos dentro de campos](/graphql/guides/introduction-to-graphql#field) (também conhecido como _subcampos aninhados_) até retornar apenas [escalares](/graphql/reference/scalars).

As consultas são estruturadas da seguinte forma:

<pre>query {
  <em>JSON objects to return</em>
}</pre>

Para ver um exemplo do mundo real, confira "[Exemplo de consulta](#example-query)".

### Sobre as mutações

Para formar uma mutação, você deve especificar três coisas:

1. _Nome da mutação_. O tipo de modificação que você deseja realizar.
2. _Objeto de entrada_. Os dados que você deseja enviar para o servidor, compostos de _campos de entrada_. Passe-o como um argumento para o nome de mutação.
3. _Objeto de conteúdo_. Os dados que você deseja retornar do servidor, compostos de _campos de retorno_. Passe-o como o texto do nome da mutação.

As mutações são estruturadas da seguinte forma:

<pre>mutation {
  <em>mutationName</em>(input: {<em>MutationNameInput!</em>}) {
    <em>MutationNamePayload</em>
  }
}</pre>

O objeto de entrada deste exemplo é `MutationNameInput`, e o objeto de conteúdo é `MutationNamePayload`.

Na referência de [mutações](/graphql/reference/mutations), os _campos de entrada_ listados são o que você transmite como o objeto de entrada. Os _campos de retorno_ listados são o que você transmite como o objeto de conteúdo.

Para ver um exemplo do mundo real, confira "[Exemplo de mutação](#example-mutation)".

## Trabalhar com variáveis

As [variáveis](https://graphql.github.io/learn/queries/#variables) podem tornar as consultas mais dinâmicas e eficientes, além de reduzir a complexidade ao transmitir objetos de entrada de mutação.

{% note %}

**Observação**: se você estiver usando o Explorer, insira variáveis no [painel Variáveis de Consulta](/graphql/guides/using-the-explorer#using-the-variable-pane) separadas e não inclua a palavra `variables` antes do objeto JSON.

{% endnote %}

Aqui está um exemplo de consulta com uma única variável:

```graphql
query($number_of_repos:Int!) {
  viewer {
    name
     repositories(last: $number_of_repos) {
       nodes {
         name
       }
     }
   }
}
variables {
   "number_of_repos": 3
}
```

Existem três etapas para usar variáveis:

1. Defina a variável fora da operação em um objeto `variables`:

  ```graphql
  variables {
     "number_of_repos": 3
  }
  ```

  O objeto deve ser um JSON válido. Esse exemplo mostra um tipo de variável `Int` simples, mas é possível definir tipos de variáveis mais complexos, como objetos de entrada. Você também pode definir diversas variáveis aqui.

2. Passe a variável para a operação como argumento:

  ```graphql
  query($number_of_repos:Int!){
  ```

  O argumento é um par chave-valor, em que a chave é o _nome_ que começa com `$` (por exemplo, `$number_of_repos`), e o valor é o _tipo_ (por exemplo, `Int`). Adicione um `!` para indicar se o tipo é obrigatório. Se você definiu diversas variáveis, inclua-as aqui como múltiplos argumentos.

3. Use a variável dentro da operação:

  ```graphql
  repositories(last: $number_of_repos) {
  ```

  Neste exemplo, substituímos a variável pelo número de repositórios a ser recuperados. Especificamos um tipo na etapa 2, porque o GraphQL impõe uma digitação forte.

Este processo torna o argumento da consulta dinâmico. Agora, podemos simplesmente alterar o valor no objeto `variables` e manter o restante da consulta inalterado.

O uso de variáveis como argumentos permite que você atualize os valores dinamicamente no objeto `variables` sem alterar a consulta.

## Consulta de exemplo

Vamos analisar uma questão mais complexa e colocar essas informações no contexto.

A seguinte consulta faz uma pesquisa no repositório `octocat/Hello-World`, encontra os 20 problemas fechados mais recentes e retorna o título, a URL e os cinco primeiros rótulos de cada problema:

```graphql
query {
  repository(owner:"octocat", name:"Hello-World") {
    issues(last:20, states:CLOSED) {
      edges {
        node {
          title
          url
          labels(first:5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}
```

Observando a composição linha por linha:

* `query {`

  Como queremos ler os dados do servidor e não modificá-los, `query` é a operação raiz. (Se você não especificar uma operação, `query` também será o padrão).

* `repository(owner:"octocat", name:"Hello-World") {`

  Para iniciar a consulta, queremos encontrar um objeto [`repository`](/graphql/reference/objects#repository). A validação de esquema indica que esse objeto exige um `owner` e um argumento `name`.

* `issues(last:20, states:CLOSED) {`

  Para responder por todos os problemas no repositório, chamamos o objeto `issues`. (_Podemos_ consultar um só `issue` em um `repository`, mas, para isso, precisaremos saber o número do problema que queremos retornar e fornecê-lo como um argumento).

  Alguns detalhes sobre o objeto `issues`:

  - A [documentação](/graphql/reference/objects#repository) nos informa que esse objeto tem o tipo `IssueConnection`.
  - A validação de esquema indica que esse objeto exige um número de resultados `last` ou `first` como argumento, ou seja, fornecemos `20`.
  - A [documentação](/graphql/reference/objects#repository) também nos informa que esse objeto aceita um argumento `states`, que é uma enumeração [`IssueState`](/graphql/reference/enums#issuestate) que aceita valores `OPEN` ou `CLOSED`. Para localizar apenas os problemas fechados, damos à chave `states` um valor igual a `CLOSED`.

* `edges {`

  Sabemos que `issues` é uma conexão porque ela tem o tipo `IssueConnection`. Para recuperar dados sobre problemas individuais, precisamos acessar o nó por meio de `edges`.

* `node {`

  Aqui, recuperamos o nó no fim da borda. A [documentação de `IssueConnection`](/graphql/reference/objects#issueconnection) indica que o nó no final do tipo `IssueConnection` é um objeto `Issue`.

* Agora que sabemos que estamos recuperando um objeto `Issue`, podemos dar uma olhada na [documentação](/graphql/reference/objects#issue) e especificar os campos que queremos retornar:

  ```graphql
  title
  url
  labels(first:5) {
    edges {
      node {
        name
      }
    }
  }
  ```

  Aqui, especificamos os campos `title`, `url` e `labels` do objeto `Issue`.

  O campo `labels` tem o tipo [`LabelConnection`](/graphql/reference/objects#labelconnection). Assim como acontece com o objeto `issues`, como `labels` é uma conexão, precisamos percorrer as bordas até um nó conectado: o objeto `label`. No nó, podemos especificar os campos de objeto `label` que queremos retornar, nesse caso, `name`.

Observe que a execução dessa consulta no repositório {% ifversion not ghae %}público{% endif %} `Hello-World` do Octocat não retornará muitos rótulos. Tente executá-la em um dos seus próprios repositórios que usam etiquetas, e provavelmente você verá uma diferença.

## Exemplo de mutação

De modo geral, as mutações exigem informações que você só pode encontrar ao realizar primeiro uma consulta. Este exemplo mostra duas operações:

1. Uma consulta para obter um ID do problema.
2. Uma mutação para adicionar uma reação de emojis ao problema.

```graphql
query FindIssueID {
  repository(owner:"octocat", name:"Hello-World") {
    issue(number:349) {
      id
    }
  }
}

mutation AddReactionToIssue {
  addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}
```

{% tip %}

Embora você possa incluir uma consulta e uma mutação na mesma janela do Explorer, se você der nomes a elas (`FindIssueID` e `AddReactionToIssue`, neste exemplo), as operações serão executadas como chamadas separadas para o ponto de extremidade do GraphQL. Não é possível realizar uma consulta junto com uma mutação ou vice-versa.

{% endtip %}

Vamos analisar o exemplo. A tarefa parece simples: adicione uma reação emoji a um problema.

Então, como é que sabemos começar com uma consulta? Ainda não sabemos.

Uma vez que desejamos modificar os dados no servidor (anexar um emoji a um problema), começamos procurando uma mutação útil no esquema. A documentação de referência mostra a mutação [`addReaction`](/graphql/reference/mutations#addreaction), com esta descrição: `Adds a reaction to a subject.` Perfeito!

A documentação para a lista de mutação lista três campos de entrada:

* `clientMutationId` (`String`)
* `subjectId` (`ID!`)
* `content` (`ReactionContent!`)

Os `!`s indicam que `subjectId` e `content` são campos obrigatórios. Um `content` obrigatório faz sentido: desejamos adicionar uma reação e, portanto, precisamos especificar o emoji que deve ser usado.

Mas por que `subjectId` é obrigatório? Isso ocorre porque a `subjectId` é a única maneira de identificar a _qual_ problema de _qual_ repositório é preciso reagir.

É por isso que começamos este exemplo com uma consulta: para obter a `ID`.

Vamos examinar a consulta linha por linha:

* `query FindIssueID {`

  Aqui, estamos executando uma consulta e a nomeamos `FindIssueID`. Observe que nomear uma consulta é opcional; nós damos um nome aqui para que possamos incluí-la na mesma janela do explorador que a mutação.

* `repository(owner:"octocat", name:"Hello-World") {`

  Especificamos o repositório consultando o objeto `repository` e transmitindo os argumentos `owner` e `name`.

* `issue(number:349) {`

  Especificamos o problema ao qual é preciso reagir consultando o objeto `issue` e transmitindo um argumento `number`.

* `id`

  É nesse ponto que recuperamos a `id` de `https://github.com/octocat/Hello-World/issues/349` para transmiti-la como a `subjectId`.

Quando executamos a consulta, obtemos a `id`: `MDU6SXNzdWUyMzEzOTE1NTE=`

{% tip %}

**Observação**: a `id` retornada na consulta é o valor que transmitiremos como a `subjectID` na mutação. Nem a documentação nem a introspecção do esquema indicará essa relação; você precisará entender os conceitos por trás dos nomes para descobrir isso.

{% endtip %}

Com a identificação conhecida, podemos prosseguir com a mutação:

* `mutation AddReactionToIssue {`

  Aqui, estamos executando uma mutação e a nomeamos `AddReactionToIssue`. Tal como nas consultas, nomear uma mutação é opcional; aqui, damos um nome para que possamos incluí-la na mesma janela do explorador que a consulta.

* `addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {`

  Vamos examinar essa linha:

  - `addReaction` é o nome da mutação.
  - `input` é a chave de argumento obrigatória. Isso sempre será `input` para uma mutação.
  - `{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}` é o valor de argumento obrigatório. Isso sempre será um [objeto de entrada](/graphql/reference/input-objects) (daí as chaves) composto por campos de entrada (`subjectId` e `content`, neste caso) para uma mutação.

  Como sabemos qual o valor usar para o conteúdo? A [documentação de `addReaction`](/graphql/reference/mutations#addreaction) nos informa que o campo `content` tem o tipo [`ReactionContent`](/graphql/reference/enums#reactioncontent), que é uma [enumeração](/graphql/reference/enums), porque só há suporte para algumas reações com emojis nos problemas do GitHub. Estes são os valores permitidos para reações (observe que alguns valores diferem de seus nomes de emojis correspondentes):

  {% data reusables.repositories.reaction_list %}

* O resto da chamada é composto pelo objeto da carga. Aqui é onde especificamos os dados que desejamos que o servidor retorne depois de termos efetuado a mutação. Essas linhas são provenientes da [documentação de `addReaction`](/graphql/reference/mutations#addreaction), que são três campos de retorno possíveis:

    - `clientMutationId` (`String`)
    - `reaction` (`Reaction!`)
    - `subject` (`Reactable!`)

  Neste exemplo, retornamos os dois campos obrigatórios (`reaction` e `subject`), ambos com subcampos obrigatórios (`content` e `id`, respectivamente).

Ao executarmos a mutação, esta é a resposta:

```json
{
  "data": {
    "addReaction": {
      "reaction": {
        "content": "HOORAY"
      },
      "subject": {
        "id": "MDU6SXNzdWUyMTc5NTQ0OTc="
      }
    }
  }
}
```

É isso! Confira sua [reação ao problema](https://github.com/octocat/Hello-World/issues/349) posicionando o cursor sobre o :tada: para encontrar seu nome de usuário.

Observação final: quando você passa vários campos em um objeto de entrada, a sintaxe pode ficar pesada. Pode ser útil mover os campos para uma [variável](#working-with-variables). Veja como você poderia reescrever a mutação original usando uma variável:

```graphql
mutation($myVar:AddReactionInput!) {
  addReaction(input:$myVar) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}
variables {
  "myVar": {
    "subjectId":"MDU6SXNzdWUyMTc5NTQ0OTc=",
    "content":"HOORAY"
  }
}
```

{% note %}

Você poderá observar que o valor do campo `content` no exemplo anterior (em que ele é usado diretamente na mutação) não tem aspas em torno de `HOORAY`, mas tem aspas quando usado na variável. Há um motivo para isso:
* Quando você usa `content` diretamente na mutação, o esquema espera que o valor seja do tipo [`ReactionContent`](/graphql/reference/enums#reactioncontent), que é uma _enumeração_, não uma cadeia de caracteres. A validação de esquema causará um erro se você adicionar aspas no valor do enum, já que as aspas são reservadas para strings.
* Ao usar `content` em uma variável, a seção de variáveis precisa ser um JSON válido. Portanto, as aspas são obrigatórias. A validação de esquema interpreta corretamente o tipo `ReactionContent` quando a variável é transmitida para a mutação durante a execução.

Para obter mais informações sobre a diferença entre enumerações e cadeias de caracteres, confira a [especificação oficial do GraphQL](https://graphql.github.io/graphql-spec/June2018/#sec-Enums).

{% endnote %}

## Leitura adicional

Há _muito_ mais que você pode fazer ao formar chamadas do GraphQL. Aqui estão alguns lugares para procurar a seguir:

* [Paginação](https://graphql.org/learn/pagination/)
* [Fragmentos](https://graphql.org/learn/queries/#fragments)
* [Fragmentos embutidos](https://graphql.org/learn/queries/#inline-fragments)
* [Diretivas](https://graphql.org/learn/queries/#directives)
