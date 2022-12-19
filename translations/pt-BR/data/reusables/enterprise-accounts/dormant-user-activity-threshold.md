---
ms.openlocfilehash: 0e815b78ccfa3c799c0558fca89fc84f0fccd2bf
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145096811"
---
{% ifversion not ghec%}Por padrão, uma{% else %}Uma{% endif %} conta de usuário é considerada inativa se não está ativa por 90 dias. {% ifversion not ghec %}Você pode configurar o período durante o qual um usuário precisa estar inativo para ser considerado inativo{% ifversion ghes%} e optar por suspender os usuários inativos para liberar as licenças de usuário{% endif %}.{% endif %}
