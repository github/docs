---
ms.openlocfilehash: fa28240a725967485b76be7be90384f3010b084a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145094234"
---
### Pesquisar com base no repositório

Use o qualificador `repo` para limitar as ações a um repositório específico. Por exemplo:

  * `repo:my-org/our-repo` localiza todos os eventos que ocorreram no repositório `our-repo` na organização `my-org`.
  * `repo:my-org/our-repo repo:my-org/another-repo` localiza todos os eventos que ocorreram nos repositórios `our-repo` e `another-repo` na organização `my-org`.
  * `-repo:my-org/not-this-repo` exclui todos os eventos que ocorreram no repositório `not-this-repo` na organização `my-org`.

Observe que você precisa incluir o nome da conta dentro do qualificador `repo`. A pesquisa de apenas `repo:our-repo` não funcionará.
