---
title: Realizar chamadas com o GraphQL
intro: 'Aprenda a efetuar a autenticação da a API do GraphQL e, em seguida, aprenda a criar e executar consultas e mutações.'
redirect_from:
  - /v4/guides/forming-calls
  - /graphql/guides/forming-calls
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Autenticar com o GraphQL

Para comunicar-se com o servidor GraphQL, você precisará de um token do OAuth com os escopos corretos.

Siga as etapas em "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)" para criar um token. Os escopos de que você precisa dependem do tipo de dados que você está tentando solicitar. Por exemplo, selecione os escopos **Usuário** para solicitar os dados do usuário. Se você precisar de acesso às informações do repositório, selecione os escopos apropriados do **repositório**.

{% if currentVersion == "free-pro-team@latest" %}

Para corresponder ao comportamento do [Explorador do GraphQL](/v4/guides/using-the-explorer), solicite escopos a seguir:

{% else %}

Recomendam-se os escopos a seguir:

{% endif %}

```
usuário
public_repo
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key
```

A API envia uma notificação se um recurso precisar de um escopo específico.

### O ponto final do GraphQL

A API REST tem inúmeros pontos finais; a API do GraphQL tem um único ponto final:

<pre>{% data variables.product.graphql_url_pre %}</pre>

O ponto de final permanece constante, independentemente da operação que você realizar.

### Comunicação com o GraphQL

Como as operações do GraphQL consistem em várias linhas do JSON, o GitHub recomenda o uso do [Explorer](/v4/guides/using-the-explorer) para fazer chamadas do GraphQL. Você também pode usar a cURL ou qualquer outra biblioteca com linguagem HTTP.

Na REST, [verbos HTTP](/v3/#http-verbs) determinam a operação realizada. No GraphQL, você fornecerá um texto codificado pelo JSON, se você estiver realizando uma consulta ou uma mutação. Portanto, o verbo HTTP será `POST`. A exceção é uma [consulta de introspecção](/v4/guides/intro-to-graphql#discovering-the-graphql-api), que são um `GET` simples para o ponto final. Para obter mais informações sobre GraphQL em comparação com a REST, consulte "[Migrando da REST para o GraphQL](/v4/guides/migrating-from-rest)".

Para consultar o GraphQL usando a cURL, faça uma solicitação de `POST` com uma carga do JSON. A carga deve conter uma string denominada `consulta`:

```shell
curl -H "Authorization: bearer <em>token</em>" -X POST -d " \
 { \
   \"query\": \"query { viewer { login }}\" \
 } \
" {% data variables.product.graphql_url_code %}
```

{% tip %}

**Observação**: O valor da string de `"consulta"` deve pular caracteres de uma linha nova. Caso contrário, o esquema não fará a análise correta. Para o texto do `POST`, use aspas duplas exteriores e aspas duplas para aspas internas.

{% endtip %}

#### Sobre consultas e operações de mutação

Os dois tipos de operações permitidas na API do GraphQL do GitHub são _consultas_ e _mutações_. Comparando o GraphQL com a REST, as consultas funcionam como solicitações do `GET`, enquanto as mutações funcionam como `POST`/`PATCH`/`EXCLUIR`. O [nome da mutação](/v4/mutation/) determina qual modificação é executada.

Para obter informações sobre limite de taxas, consulte "[limitações de recursos do GraphQL](/v4/guides/resource-limitations/)".

As consultas e mutações compartilham formas semelhantes, com algumas diferenças importantes.

#### Sobre as consultas

As consultas do GraphQL retornam apenas os dados especificados. Para gerar uma consulta, você deve especificar os [campos dentro dos campos](/v4/guides/intro-to-graphql#field) (também conhecidos como _subcampos aninhados_) até que retorne apenas [escalares](/v4/scalar/).

As consultas estão estruturadas da seguinte forma:

<pre>query {
  <em>JSON objects to return</em>
}</pre>

Para obter um exemplo real, consulte "[Consulta de exemplo](#example-query)."

#### Sobre as mutações

Para formar uma mutação, você deve especificar três coisas:

1. _Nome da mutação_. O tipo de modificação que você deseja realizar.
2. _Objeto de entrada_. Os dados que você deseja enviar para o servidor, compostos de _campos de entrada_. Passe-o como um argumento para o nome de mutação.
3. _Objeto da carga_. Os dados que você deseja retornar do servidor, compostos de _campos de retorno_. Passe-o como o texto do nome da mutação.

As mutações são estruturadas da seguinte forma:

<pre>mutation {
  <em>mutationName</em>(input: {<em>MutationNameInput!</em>}) {
    <em>MutationNamePayload</em>
}</pre>

Neste exemplo, o objeto de entrada é `MutationNameInput` e o objeto de carga é `MutationNamePayload`.

Na referência [mutações](/v4/mutation/), os _campos de entrada_ listados são o que você passa como o objeto de entrada. Os _campos de retorno_ listados são o que você passa como objeto de carga.

Para obter um exemplo real, consulte "[Exemplo de mutação](#example-mutation)."

### Trabalhar com variáveis

As [Variáveis](https://graphql.github.io/learn/queries/#variables) podem tornar as consultas mais dinâmicas e poderosas, além de reduzir a complexidade ao passar objetos de entrada de mutação.

{% note %}

**Observação**: se você estiver usando o Explorador, certifique-se de inserir as variáveis no painel separado das [Variáveis de consulta](/v4/guides/using-the-explorer/#using-the-variable-pane), e não inclua a palavra `variáveis` antes do objeto do JSON.

{% endnote %}

Aqui está um exemplo de consulta com uma única variável:

```graphql
query($number_of_repos:Int!) query($number_of_repos:Int!) {
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

1. Defina a variável fora da operação em um objeto `variáveis`:

  ```graphql
  variables {
     "number_of_repos": 3
  }
  ```

  O objeto deve ser um JSON válido. Esse exemplo mostra um simples tipo de variável `Int`, mas é possível definir tipos de variáveis mais complexos, como objetos de entrada. Você também pode definir diversas variáveis aqui.

2. Passe a variável para a operação como argumento:

  ```graphql
  query($number_of_repos:Int!){
  ```

  O argumento é um par de chave-valor, em que a chave é o _nome_ que começa com `$` (p. ex., `$number_of_repos`) e o valor é _tipo_ (p. ex., `Int`). Adicione `!` para indicar se o tipo é necessário. Se você definiu diversas variáveis, inclua-as aqui como múltiplos argumentos.

3. Use a variável dentro da operação:

  ```graphql
  repositories(last: $number_of_repos) {
  ```

  Neste exemplo, substituímos a variável pelo número de repositórios a ser recuperados. Especificamos um tipo na etapa 2, porque o GraphQL impõe uma digitação forte.

Este processo torna o argumento da consulta dinâmico. Agora, podemos simplesmente alterar o valor no objeto das `variáveis` e manter o restante da consulta inalterada.

Usar variáveis como argumentos permite que você atualize valores dinamicamente no objeto das `variáveis` sem alterar a consulta.

### Exemplo de consulta

Vamos analisar uma questão mais complexa e colocar essas informações no contexto.

A consulta a seguir procura o repositório `octocat/Hello-World`, encontra os 20 problemas fechados mais recentes e retorna o título, a URL e as primeiras 5 etiquetas de cada problema:

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

  Uma vez que queremos ler os dados do servidor, e não modificá-lo, a `consulta` é a operação-raiz. (Se você não especificar uma operação, a `consulta` também é o padrão.)

* `repository(owner:"octocat", name:"Hello-World") {`

  Para começar a consulta, queremos encontrar um objeto do [`repositório`](/v4/object/repository/). A validação do esquema indica que este objeto requer um `proprietário` e um argumento do `nome`.

* `issues(last:20, states:CLOSED) {`

  Para responder por todos os problemas no repositório, chamamos o objeto `problemas`. (Nós _poderíamos_ realizar a consulta de um único `problema` em um `repositório`, mas isso exigiria que conhecêssemos o número do problema que desejamos retornar e que as apresentássemos como um argumento.)

  Alguns detalhes sobre o objeto `problemas`:

  - A [documentação](/v4/object/repository/) nos informa que esse objeto tem o tipo `IssueConnection`.
  - A validação de esquema indica que este objeto exige o `último` ou `primeiro` número dos resultados como argumento. Portanto, fornecemos `20`.
  - A [documentação](/v4/object/repository/) também nos informa que esse objeto aceita um argumento `estados`, que é um  enum [`IssueState`](/v4/enum/issuestate/), que aceita os valores `ABERTO` ou `FECHADO`. Para encontrar apenas problemas fechados, conferimos à chave `estados` um valor de `FECHADO`.

* `edges {`

  Sabemos que os `problemas` são uma conexão, porque têm o tipo `IssueConnection`. Para recuperar dados sobre problemas individuais, temos de acessar o nó através das `bordas`.

* `node {`

  Aqui, recuperamos o nó no fim da borda. A [documentação da`IssueConnection`](/v4/object/issueconnection) indica se o nó no final do tipo `IssueConnection` é um objeto `problema`.

* Agora que sabemos que estamos recuperando um objeto `problema`, podemos ver a [documentação](/v4/object/issue) e especificar os campos que desejamos retornar:

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

  Aqui, especificamos os campos `título`, `url` e `etiquetas` do objeto `problema`.

  O campo `etiquetas` tem o tipo [`LabelConnection`](/v4/object/labelconnection/). Assim como no objeto `problemas`, porque `etiquetas` é uma conexão, devemos percorrer suas bordas para um nó conectado: o objeto `etiqueta`. No nó, podemos especificar os campos de objeto `etiqueta` que desejamos retornar, neste caso, o `nome`.

Você pode notar que executar essa consulta no repositório público do Octocat `Hello-World` não retornará muitas etiquetas. Tente executá-la em um dos seus próprios repositórios que usam etiquetas, e provavelmente você verá uma diferença.

### Exemplo de mutação

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

Embora você possa incluir uma consulta e uma mutação na mesma janela do Explorador, se der nome a elas (`FindIssueID` e `AddReactionToIssue` neste exemplo), as operações serão executadas como chamadas separadas para o ponto final do GraphQL. Não é possível realizar uma consulta junto com uma mutação ou vice-versa.

{% endtip %}

Vamos analisar o exemplo. A tarefa parece simples: adicione uma reação emoji a um problema.

Então, como é que sabemos começar com uma consulta? Ainda não sabemos.

Uma vez que desejamos modificar os dados no servidor (anexar um emoji a um problema), começamos procurando uma mutação útil no esquema. A documentação de referência mostra a mutação [`addReaction`](/v4/mutation/addreaction) com esta descrição: `Adiciona uma reação a um assunto.` Perfeito!

A documentação para a lista de mutação lista três campos de entrada:

* `clientMutationId` (`String`)
* `subjectId` (`ID!`)
* `conteúdo` (`ReactionContent!`)

Os sinais de`!` indicam que `subjectId` e `conteúdo` são campos obrigatórios. O `conteúdo` obrigatório tem sentido: desejamos adicionar uma reação. Portanto, precisamos especificar quais emojis devem ser usados.

Mas por que o `subjectId` é obrigatório? Isso acontece porque o `subjectId` é a única forma de identificar _a qual_ o problema em _qual_ repositório deve reagir.

É por isso que começamos este exemplo com uma consulta: para obter o `ID`.

Vamos examinar a consulta linha por linha:

* `consulta FindIssueID {`

  Aqui estamos realizando uma consulta, que denominamos `FindIssueID`. Observe que nomear uma consulta é opcional; nós damos um nome aqui para que possamos incluí-la na mesma janela do explorador que a mutação.

* `repository(owner:"octocat", name:"Hello-World") {`

  Especificamos o repositório realizando uma consulta no objeto do `repositório` e passando os argumentos do </code>proprietário` e do <code>nome`.

* `issue(number:349) {`

  Nós especificamos o problema a reagir, realizando uma consulta do objeto `problema` e passando um argumento do `número`.

* `id`

  Nesse ponto, recuperamos o `id` de `https://github.com/octocat/Hello-World/issues/349` para passar como `subjectId`.

Ao realizarmos a consulta, obtemos o `id`: `MDU6SXNzdWUyMzEzOTE1NTE=`

{% tip %}

**Observação**: O `id` retornado na consulta é o valor que passaremos como o `subjectID` na mutação. Nem a documentação nem a introspecção do esquema indicará essa relação; você precisará entender os conceitos por trás dos nomes para descobrir isso.

{% endtip %}

Com a identificação conhecida, podemos prosseguir com a mutação:

* `mutation AddReactionToIssue {`

  Aqui, estamos realizando uma mutação que denominamos `AddReactionToIssue`. Tal como nas consultas, nomear uma mutação é opcional; aqui, damos um nome para que possamos incluí-la na mesma janela do explorador que a consulta.

* `addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {`

  Vamos examinar essa linha:

  - `addReaction` é o nome da mutação.
  - `entrada` é a chave de argumento obrigatória. Isso sempre será `entrada` para uma mutação.
  - `{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}` é o valor do argumento obrigatório. Este sempre será um [objeto de entrada](/v4/input_object/) (daí as chaves) compostas de campos de entrada (`subjectId` e `conteúdo`, neste caso) para uma mutação.

  Como sabemos qual o valor usar para o conteúdo? Os documentos [`addReaction`](/v4/mutation/addreaction/) nos dizem que o campo do `conteúdo` tem o tipo [`ReactionContent`](/v4/enum/reactioncontent/), que é um [enum](/v4/enum), porque apenas algumas reações de emojis são compatíveis com em problemas no GitHub. Estes são os valores permitidos para reações (observe que alguns valores diferem de seus nomes de emojis correspondentes):

  {% data reusables.repositories.reaction_list %}

* O resto da chamada é composto pelo objeto da carga. Aqui é onde especificamos os dados que desejamos que o servidor retorne depois de termos efetuado a mutação. Estas linhas vêm dos documentos [`addReaction`](/v4/mutation/addreaction), que são três possíveis campos de retorno:

    - `clientMutationId` (`String`)
    - `reação` (`Reação!`)
    - `assunto` (`Reactable!`)

  Neste exemplo, retornamos os dois campos obrigatórios (`reação` e `assunto`), os quais exigiram subcampos (respectivamente, `conteúdo` e `id`).

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

Pronto! Confira sua [reação para o problema](https://github.com/octocat/Hello-World/issues/349) passando o mouse sobre :tada: para encontrar seu nome de usuário.

Observação final: quando você passa vários campos em um objeto de entrada, a sintaxe pode ficar pesada. Mover os campos para uma [variável](#working-with-variables) pode ajudar. Veja como você poderia reescrever a mutação original usando uma variável:

```graphql
mutation($myVar:AddReactionInput!) {
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

{% note %}

Você pode notar que o valor do campo `conteúdo` no exemplo anterior (onde é usado diretamente na mutação) não tem aspas em torno de `HORAY`, mas tem aspas quando usado na variável. Há um motivo para isso:
* Ao usar `conteúdo` diretamente na mutação, o esquema espera que o valor seja do tipo [`ReactionContent`](/v4/enum/reactioncontent/), que é um _enum_, não uma string. A validação de esquema causará um erro se você adicionar aspas no valor do enum, já que as aspas são reservadas para strings.
* Ao usar `conteúdo` em uma variável, a seção de variáveis deve ser um JSON válido. Portanto, as aspas são necessárias. A validação de esquema interpreta corretamente o tipo `ReactionContent` quando a variável é passada para a mutação durante a execução.

Para obter mais informações sobre a diferença entre enums e strings, consulte as [Especificações oficiais do GraphQL](https://graphql.github.io/graphql-spec/June2018/#sec-Enums).

{% endnote %}

### Leia mais

Há _muito_ mais que você pode fazer ao formar chamadas do GraphQL. Aqui estão alguns lugares para procurar a seguir:

* [Paginação](https://graphql.github.io/learn/pagination/)
* [Fragmentos](https://graphql.github.io/learn/queries/#fragments)
* [Fragmentos embutidos](https://graphql.github.io/learn/queries/#inline-fragments)
* [Diretivas](https://graphql.github.io/learn/queries/#directives)
