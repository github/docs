---
title: Usar o Explorador
intro: 'Você pode executar consultas em dados reais do {% data variables.product.prodname_dotcom %} ao usar o explorador do GraphQL, um ambiente integrado de desenvolvimento no seu navegador que inclui documentação, destaque de sintaxe e erros de validação.'
redirect_from:
  - /v4/guides/using-the-explorer
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

## Sobre o explorador do GraphQL

{% if currentVersion == "free-pro-team@latest" %}

O [Explorador do GraphQL](/v4/explorer) é uma instância do [GraphiQL](https://github.com/graphql/graphiql), que é um "IDE do GraphiQL gráfica e interativa no mesmo navegador".

{% note %}

**Nota**: {% data variables.product.prodname_dotcom %} desabilitou as [mutações](/v4/mutation/) no Explorador, mas você pode usá-las em sua própria instância do GraphiQL.

{% endnote %}

{% else %}

[GraphiQL](https://github.com/graphql/graphiql), também referido nesta documentação como o Explorador do GraphQL, é uma "IDE do GraphQL" interativa no mesmo navegador.

{% endif %}

### Usar GraphiQL

Para usar o aplicativo GraphiQL, faça o download e instale-o em https://github.com/skevy/graphiql-app.

#### Configurar GraphiQL

1. Obtenha um [token do OAuth](/v4/guides/forming-calls#authenticating-with-graphql).
1. Iniciar GraphiQL.
1. No canto superior direito do GraphiQL, clique em **Editar cabeçalhos de HTTP**.
1. No campo **chave**, insira `autorização`. No campo **Valor**, insira `Bearer <token>`, em que `<token>` é o seu token do OAuth gerado. ![cabeçalhos do grafiql](/assets/images/developer/graphiql-headers.png)
1. Clique na marca de seleção à direita do token para salvá-lo.
1. Para retornar ao editor, clique fora do modo **Editar cabeçalhos de HTTP**.
1. No campo **Ponto de extremidade do GraphQL**, insira `{% data variables.product.graphql_url_pre %}`.
1. No menu suspenso **Método** do método, selecione **POST**.

{% note %}

**Observação**: Para obter mais informações sobre o motivo de `POST` ser o método, consulte "[Comunicar-se com GraphQL](/v4/guides/forming-calls#communicating-with-graphql)".

{% endnote %}

Você pode testar seu acesso consultando você mesmo:

```graphql
query {
  viewer {
    login
  }
}
```

Se tudo funcionou corretamente, isto irá mostrar seu login. Você está pronto para começar a fazer consultas.

### Acessar a documentação da barra lateral

Todos os tipos em esquema do GraphQL incluem um campo `descrição` compilado na documentação. O painel retrátil **Docs** no lado direito da página do Explorador permite que você consulte a documentação sobre o sistema de tipos. A documentação é atualizada automaticamente e eliminará os campos obsoletos.

{% note %}

A barra lateral **Documentação** contém o mesmo conteúdo gerado automaticamente a partir do esquema sob "[Referência](/v4/), embora esteja formatada de forma diferente em alguns lugares.

{% endnote %}

### Usar o painel de variáveis

Algumas chamadas de exemplo incluem [variáveis](/v4/guides/forming-calls#working-with-variables) escritas como esta:

```graphql
query($number_of_repos:Int!){
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

Este é o formato correto para enviar a chamada por meio de `POST` em cURL (contanto que [escape das novas linhas](/v4/guides/forming-calls#communicating-with-graphql)).

Se você desejar executar a chamada no Explorador, insira o segmento `da consulta` no painel principal e as variáveis no painel **Variáveis de consulta** abaixo dele. Omita a palavra `variáveis` no Explorador:

```graphql
{
   "number_of_repos": 3
}
```

### Solicitar suporte

{% data reusables.support.help_resources %}

### Solução de erros

Já que o GraphQL é [introspectivo](/v4/guides/intro-to-graphql#discovering-the-graphql-api), o Explorador suporta:

* Preenchimento automático inteligente do esquema atual
* Pré-visualizações de erros durante a digitação

Se você informar uma consulta que não é bem formada ou não passa um [esquema de validação](/v4/guides/intro-to-graphql#schema), uma janela de pop-up alertará um erro. Se você executar a consulta, o erro será retornado no painel de resposta.

Uma resposta do GraphQL contém várias chaves: um hash de `dados` um array de `erros`.

```json
{
  "data": null,
  "errors": [
    {
      "message": "Objects must have selections (field 'nodes' returns Repository but has no selections)",
      "locations": [
        {
          "line": 5,
          "column": 8
        }
      ]
    }
  ]
}
```

É possível que você possa encontrar um erro inesperado que não esteja relacionado com o esquema. Se isso acontecer, a mensagem incluirá um código de referência que você poderá usar ao relatar o problema:

```json
{
  "data": null,
  "errors": [
    {
      "message": "Something went wrong while executing your query. Esta é provavelmente um erro no GitHub. Inclua \"7571:3FF6:552G94B:69F45B7:5913BBEQ\" ao relatar este problema."
    }
  ]
}
```

{% note %}

**Observação:** {% data variables.product.prodname_dotcom %} recomenda a verificação de erros antes de usar os dados em um ambiente de produção. No GraphQL, a falha não é total: algumas partes de consultas do GraphQL podem ser bem-sucedidas enquanto outras falham.

{% endnote %}
