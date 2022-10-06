---
ms.openlocfilehash: 2bd293f62b5fcf467c379c315347056245029ff6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145083287"
---
Chave | Tipo | Descrição
----|------|------------
`action` | `string` | A ação que foi executada. Pode ser uma das ações a seguir:<ul><li>`created` – Alguém instala um {% data variables.product.prodname_github_app %}.</li><li>`deleted` – Alguém desinstala um {% data variables.product.prodname_github_app %}</li><li>`suspend` – Alguém suspende a instalação de um {% data variables.product.prodname_github_app %}.</li><li>`unsuspend` – Alguém cancela a suspensão da instalação de um {% data variables.product.prodname_github_app %}.</li><li>`new_permissions_accepted` – Alguém aceita novas permissões para a instalação de um {% data variables.product.prodname_github_app %}. Quando um proprietário de {% data variables.product.prodname_github_app %} solicita novas permissões, a pessoa que instalou o {% data variables.product.prodname_github_app %} deve aceitar a nova solicitação de permissões. </li></ul>
`repositories` | `array` | Uma matriz de objetos do repositório que a instalação pode acessar.
