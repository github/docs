---
title: Migrando IDs de nós globais do GraphQL
intro: Saiba mais sobre os dois formatos de ID do nó global e como fazer a migração do formato de legado para o novo formato.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
shortTitle: Migrating global node IDs
ms.openlocfilehash: 7d62d81e52b848e4fb8b5f6b2bae9997e0ac1209
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717850'
---
## Tela de fundo

A API do GraphQL {% data variables.product.product_name %} é compatível atualmente com dois tipos de formatos de ID de nó global. O formato legado será obsoleto e substituído por um novo formato.  Este guia mostra como fazer a migração para o novo formato, se necessário. 

Ao fazer a migraçãopara o novo formato, você garante que os tempos de resposta dos seus pedidos permaneçam consistentes e pequenos. Você também garante que seu aplicativo irá continuar funcionando assim que os IDs de legado estiverem totalmente desativados.

Para saber mais sobre por que o formato de ID do nó global herdado será preterido, confira "[Em breve, novo formato de ID global no GraphQL](https://github.blog/2021-02-10-new-global-id-format-coming-to-graphql)".

## Determinando se você precisa tomar medidas

Você só precisa seguir as etapas de migração se armazenar referências para os IDs de nó global do GraphQL.  Essas IDs correspondem ao campo `id` de qualquer objeto no esquema.  Se você não armazenar nenhuma ID de nó global, você poderá continuar interagindo com a API sem alterações.

Além disso, se você decodificar as IDs herdadas para extrair informações de tipo (por exemplo, se você usar os dois primeiros caracteres de `PR_kwDOAHz1OX4uYAah` para determinar se o objeto é uma solicitação de pull), seu serviço será interrompido, pois o formato das IDs mudou.  Você deve fazer a migração do seu serviço para tratar esses IDs como strings opacas.  Esses IDs serão únicos. Portanto, você pode confiar neles diretamente como referências.


## Fazendo a migração para os novos IDs globais

Para facilitar a migração para o novo formato de ID, use o cabeçalho `X-Github-Next-Global-ID` nas solicitações de API do GraphQL. O valor do cabeçalho `X-Github-Next-Global-ID` pode ser `1` ou `0`.  A definição do valor como `1` forçará o conteúdo de resposta a sempre usar o novo formato de ID em qualquer objeto para o qual você solicitou o campo `id`.  A definição do valor como `0` reverterá isso para o comportamento padrão, que é mostrar a ID herdada ou a nova ID, dependendo da data de criação do objeto. 

Aqui está um exemplo de solicitação que usa cURL:

```
$ curl \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "X-Github-Next-Global-ID: 1" \
  https://api.github.com/graphql \
  -d '{ "query": "{ node(id: \"MDQ6VXNlcjM0MDczMDM=\") { id } }" }'
```

Embora a ID herdada `MDQ6VXNlcjM0MDczMDM=` tenha sido usada na consulta, a resposta conterá o novo formato de ID:
```
{"data":{"node":{"id":"U_kgDOADP9xw"}}}
```
Com o cabeçalho `X-Github-Next-Global-ID`, você pode encontrar o novo formato de ID para as IDs herdadas referenciadas no seu aplicativo. Você pode atualizar as referências com o ID recebido na resposta. Você deve atualizar todas as referências para os IDs de legado e usar o novo formato de ID para todas as solicitações subsequentes para a API. Para executar operações em massa, você pode usar aliases para enviar várias consultas de nó em uma chamada de API. Para obter mais informações, confira "[a documentação do GraphQL](https://graphql.org/learn/queries/#aliases)".

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

Observe que a configuração de `X-Github-Next-Global-ID` como `1` afetará o valor retornado de cada campo `id` na consulta.  Isso significa que, mesmo quando você enviar uma consulta não `node`, receberá de volta a nova ID de formato se tiver solicitado o campo `id`.

## Compartilhando feedback

Caso tenha dúvidas sobre a implantação desta alteração que afetará seu aplicativo, [entre em contato com o {% data variables.product.product_name %}](https://support.github.com/contact) e inclua informações como o nome do aplicativo para que possamos ajudar você melhor.
