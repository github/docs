---
ms.openlocfilehash: 3492de2cd163b4bbb59b912c17d152b7d2af5c68
ms.sourcegitcommit: 872c4751a3fc255671295a5dea6a2081c66b7b71
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 08/30/2022
ms.locfileid: "145094236"
---
### Pesquisar com base em operação

Use o qualificador `operation` para limitar as ações a tipos específicos de operações. Por exemplo:

  * `operation:access` localiza todos os eventos em que um recurso foi acessado.
  * `operation:authentication` localiza todos os eventos em que um evento de autenticação foi realizado.
  * `operation:create` localiza todos os eventos em que um recurso foi criado.
  * `operation:modify` localiza todos os eventos em que um recurso existente foi modificado.
  * `operation:remove` localiza todos os eventos em que um recurso existente foi removido.
  * `operation:restore` localiza todos os eventos em que um recurso existente foi restaurado.
  * `operation:transfer` localiza todos os eventos em que um recurso existente foi transferido.
