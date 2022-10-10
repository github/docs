---
ms.openlocfilehash: 5466f29d4bb496b6451846f80a90f7b0471f8cda
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145065152"
---
Qualquer pessoa pode revogar a autorização de um aplicativo GitHub na [página de configurações da conta GitHub](https://github.com/settings/apps/authorizations). Revogar a autorização de um aplicativo GitHub não desinstala o aplicativo GitHub. Você deve programar seu aplicativo do GitHub para que, ao receber esse webhook, ele para de chamar a API em nome da pessoa que revogou o token. Se o aplicativo GitHub continuar a usar um token de acesso revogado, ele receberá o erro `401 Bad Credentials`.
