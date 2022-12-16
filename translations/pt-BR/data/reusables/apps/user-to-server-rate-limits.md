---
ms.openlocfilehash: 3bc47303cbc18b4d40a76fd12e6f692990f66c54
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145094245"
---
{% ifversion ghes %}Por padrão, as solicitações de usuário para servidor{% else %}Usuário para servidor{% endif %} são limitadas a {% ifversion ghae %}15 mil{% elsif fpt or ghec or ghes %}cinco mil{% endif %} solicitações por hora e por usuário autenticado. Todas as solicitações de aplicativos OAuth autorizadas por um usuário ou um token de acesso pessoal pertencentes ao usuário e as solicitações autenticadas com uma das credenciais de autenticação do usuário compartilham a cota de {% ifversion ghae %}15 mil{% elsif fpt or ghec or ghes %}cinco mil{% endif %} solicitações por hora para esse usuário.
