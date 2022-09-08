---
ms.openlocfilehash: 5466f29d4bb496b6451846f80a90f7b0471f8cda
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145065152"
---
Qualquer pessoa pode revogar a autorização de um aplicativo GitHub na [página de configurações da conta GitHub](https://github.com/settings/apps/authorizations). Revogar a autorização de um aplicativo GitHub não desinstala o aplicativo GitHub. Você deve programar seu aplicativo do GitHub para que, ao receber esse webhook, ele para de chamar a API em nome da pessoa que revogou o token. Se o aplicativo GitHub continuar a usar um token de acesso revogado, ele receberá o erro `401 Bad Credentials`.
