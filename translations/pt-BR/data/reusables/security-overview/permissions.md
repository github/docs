---
ms.openlocfilehash: f7065b89a94ee3b76a4956a0cf06ea53c03187e2
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: "148113943"
---
{% ifversion not fpt %}Os proprietários da organização e os gerentes de segurança podem acessar a visão geral de segurança no nível da organização{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %} e exibir os alertas por várias organizações por meio da visão geral de segurança no nível da empresa. Os proprietários de empresas só podem exibir repositórios e alertas para organizações em que são adicionados como proprietário da organização ou gerente de segurança{% endif %}. {% ifversion ghec or ghes > 3.6 or ghae > 3.6 %}Os membros da organização podem acessar a visão geral de segurança no nível da organização para exibir os resultados de repositórios em que eles têm privilégios de administrador ou para os quais receberam acesso a alertas de segurança.{% else %}Os membros de uma equipe podem ver a visão geral de segurança para repositórios para os quais a equipe tem privilégios de administrador.{% endif %}{% endif %}
