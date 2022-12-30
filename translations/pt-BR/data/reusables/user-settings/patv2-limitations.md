---
ms.openlocfilehash: de2f4c96c3a86d64a11bfb8c5fbdc4f4082601e8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107570"
---
{% note %}

**Observação**: no momento, alguns recursos só funcionam com {% data variables.product.pat_v1_plural %}:

- Somente {% data variables.product.pat_v1_plural %} têm acesso de gravação para repositórios públicos que não pertencem a você ou a uma organização da qual você não é membro.{% ifversion ghec or ghes or ghae %}
- Somente {% data variables.product.pat_v1_plural %} têm acesso de gravação automaticamente para repositórios internos pertencentes à empresa. {% data variables.product.pat_v2_caps %}s precisam receber acesso a repositórios internos.{% endif %}
- Os colaboradores externos só podem usar {% data variables.product.pat_v1_plural %} para acessar repositórios da organização nos quais são colaboradores.{% ifversion ghec or ghes or ghae %}
- Somente {% data variables.product.pat_v1_plural %} podem acessar empresas. (O {% data variables.product.pat_v2_caps %} pode acessar organizações pertencentes a empresas.){% endif %}
- As APIs a seguir só dão suporte a {% data variables.product.pat_v1_plural %}. Para obter uma lista de operações da API REST com suporte para {% data variables.product.pat_v2 %}, confira "[Pontos de extremidade disponíveis para {% data variables.product.pat_v2 %}s](/rest/overview/endpoints-available-for-fine-grained-personal-access-tokens)".
  - API do GraphQL{% ifversion ghec or ghes or ghae %}
  - API REST para administradores corporativos{% endif %}{% ifversion ghec or fpt %}
  - API REST para gerenciar importações de origem{% endif %}
  - API REST para gerenciar {% data variables.product.prodname_projects_v1_caps %}
  - API REST para gerenciar {% data variables.product.prodname_registry %}
  - API REST para gerenciar notificações
  - API REST para transferir um repositório
  - API REST para criar um repositório com base em um modelo
  - API REST para criar um repositório para o usuário autenticado

{% endnote %}
