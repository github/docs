---
ms.openlocfilehash: 3e175aefd9a243a098b5c35ca6d4068a651d2f61
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147875505"
---
As APIs REST do webhook permitem que você gerencie webhooks do repositório, da organização e do aplicativo.{% ifversion fpt or ghes > 3.2 or ghae or ghec %} Você pode usar essa API para listar as entregas de webhook para um webhook ou obter e entregar novamente uma entrega individual para um webhook, que pode ser integrado a um aplicativo ou um serviço externo.{% endif %} Use também a API REST para alterar a configuração do webhook. Por exemplo, você pode modificar a URL da carga, tipo de conteúdo, verificação de SSL e segredo. Para obter mais informações, consulte:

- [API REST de Webhooks do Repositório](/rest/reference/webhooks#repository-webhooks)
- [API REST de Webhooks da Organização](/rest/reference/orgs#webhooks)
- [API REST de Webhooks do {% data variables.product.prodname_github_app %}](/rest/reference/apps#webhooks)
