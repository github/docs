---
ms.openlocfilehash: 7193be487b701029df5604b7253f683b5675c086
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145094233"
---
### Pesquisar com base no usuário

O qualificador `actor` pode definir o escopo de eventos com base no autor da ação. Por exemplo:

  * `actor:octocat` localiza todos os eventos realizados por `octocat`.
  * `actor:octocat actor:hubot` localiza todos os eventos realizados por `octocat` e `hubot`.
  * `-actor:hubot` exclui todos os eventos realizados por `hubot`.

Observe que só é possível usar um nome de usuário do {% data variables.product.product_name %}, e não o nome verdadeiro da pessoa.
