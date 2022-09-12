---
ms.openlocfilehash: 059e56c6821926e1d6a604c95dd1fa167de2db6a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145126938"
---
# REST

O diretório `/content/rest` é o local em que se encontra a documentação da API REST do GitHub.

* Os diretórios `/content/rest/guides` e `/content/rest/overview` contêm os artigos comuns. Eles podem ser editados por uma pessoa.
* O diretório `/content/rest/reference` contém um artigo para cada grupo de pontos de extremidade na API REST do GitHub. A maior parte do conteúdo desse diretório é renderizada por meio de tags `include`.

  O conteúdo renderizado pelas tags `include` é obtido do diretório `/lib/rest/static`, que é gerado automaticamente por meio do código-fonte da API internamente no GitHub e não deve ser editado por uma pessoa. Para obter mais informações, confira [`/lib/rest/README.md`](/lib/rest/README.md).

  **Não podemos aceitar as alterações no conteúdo renderizado pelas tags `include`. No entanto, você pode abrir um problema descrevendo as alterações que deseja ver.**
