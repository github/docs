---
title: Migrando IDs de nós globais do GraphQL
intro: Saiba mais sobre os dois formatos de ID do nó global e como fazer a migração do formato de legado para o novo formato.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
shortTitle: Fazendo a migração de IDs de nó global
---

## Segundo plano

A API do GraphQL {% data variables.product.product_name %} é compatível atualmente com dois tipos de formatos de ID de nó global. O formato legado será obsoleto e substituído por um novo formato.  Este guia mostra como fazer a migração para o novo formato, se necessário.

Ao fazer a migraçãopara o novo formato, você garante que os tempos de resposta dos seus pedidos permaneçam consistentes e pequenos. Você também garante que seu aplicativo irá continuar funcionando assim que os IDs de legado estiverem totalmente desativados.

Para saber mais sobre o porquê o formato de ID de nó global antigo será desativado, consulte "[novo formato de ID global chegando ao GraphQL](https://github.blog/2021-02-10-new-global-id-format-coming-to-graphql)."

## Determinando se você precisa tomar medidas

Você só precisa seguir as etapas de migração se armazenar referências para os IDs de nó global do GraphQL.  Essas IDs correspondem ao campo `id` para qualquer objeto no esquema.  Se você não armazenar nenhuma ID de nó global, você poderá continuar interagindo com a API sem alterações.

Além disso, se você atualmente decodificar os IDs de legado para extrair informações de tipo (por exemplo, se você usar os dois primeiros caracteres de `PR_kwDOAHz1OX4uYAah` para determinar se o objeto é um pull request), seu serviço será interrompido, já que o formato dos IDs mudou.  Você deve fazer a migração do seu serviço para tratar esses IDs como strings opacas.  Esses IDs serão únicos. Portanto, você pode confiar neles diretamente como referências.


## Fazendo a migração para os novos IDs globais

Para facilitar a migração para o novo formato de ID, você pode usar o cabeçalho `X-Github-Next-Global-ID` nas suas solicitações da API do GraphQL. O valor do cabeçalho `X-Github-Next-Global-ID` pode ser `1` ou `0`.  A definição do valor como `1` irá forçar a carga de resposta a sempre usar o novo formato de ID para qualquer objeto para o qual você solicitou o campo `id`.  Definir o valor como `0` irá reverter para o comportamento padrão, que deve mostrar o ID do legado ou novo ID, dependendo da data de criação do objeto.

Aqui está um exemplo de solicitação que usa cURL:

```
$ curl \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "X-Github-Next-Global-ID: 1" \
  https://api.github.com/graphql \
  -d '{ "query": "{ node(id: \"MDQ6VXNlcjM0MDczMDM=\") { id } }" }'
```

Embora o ID do legado `MDQ6VXNlcjM0MDMDM=` tenha sido usado na consulta, a resposta conterá o novo formato do ID:
```
{"data":{"node":{"id":"U_kgDOADP9xw"}}}
```
Com o cabeçalho `X-Github-Next-Global-ID`, você pode encontrar o novo formato de ID para os IDs de legado aos quais você faz referência no seu aplicativo. Você pode atualizar as referências com o ID recebido na resposta. Você deve atualizar todas as referências para os IDs de legado e usar o novo formato de ID para todas as solicitações subsequentes para a API. Para executar operações em massa, você pode usar aliases para enviar várias consultas de nó em uma chamada de API. Para obter mais informações, consulte "[a documentação do GraphQL](https://graphql.org/learn/queries/#aliases)".

Você também pode obter o novo ID para uma coleção de itens. Por exemplo, se você quiser obter o novo ID para os últimos 10 repositórios na sua organização, você poderia usar uma consulta como esta:
```
{
  organization(login: "github") {
    repositories(last: 10) {
      edges {
        cursor
        node {
          name
          id
        }
      }
    }
  }
}
```

Observe que a configuração `X-Github-Next-Global-ID` para `1` afetará o valor de retorno de cada campo de `id` na sua consulta.  Isto significa que, mesmo quando você envia uma consulta que não é de -`nó`, você receberá de volta o novo formato do ID se você solicitou o campo `id`.

## Compartilhando feedback

Se você tiver algum problema sobre a implantação desta alteração de impacto no seu aplicativo, [entre em contato com {% data variables.product.product_name %}](https://support.github.com/contact) e inclua informações como o nome do seu aplicativo para que possamos ajudá-lo melhor.
