---
ms.openlocfilehash: c8432b756590deab759f023a78453a482b8091fd
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145094200"
---
Com os preços por usuário, cada pessoa consome uma licença. O {% data variables.product.company_short %} identifica as pessoas pelo endereço de email principal.

O {% data variables.product.company_short %} gera cobrança para as pessoas a seguir.

{%- ifversion ghec %}
- Proprietários da empresa que são membros ou proprietários de, pelo menos, uma organização na empresa {%- endif %}
- Membros da organização, incluindo proprietários
- Colaboradores externos em repositórios privados{% ifversion ghec %} ou internos{% endif %} pertencentes à sua organização, excluindo forks
- Qualquer pessoa com um convite pendente para se tornar proprietário ou membro da organização
- Qualquer pessoa com um convite pendente para se tornar um colaborador externo em repositórios privados{% ifversion ghec %} ou internos{% endif %} pertencentes à sua organização, excluindo os forks {%- ifversion ghec %}
- Cada usuário em qualquer instância do {% data variables.product.prodname_ghe_server %} implantada por você {% endif %}

O {% data variables.product.company_short %} não gera cobrança para nenhuma das pessoas a seguir.

{%- ifversion ghec %}
- Proprietários da empresa que não são membros nem proprietários de, pelo menos, uma organização na empresa
- Gerentes de cobrança da empresa {%- endif %}
- Gerentes de cobrança da organização{% ifversion ghec %} para organizações individuais do {% data variables.product.prodname_ghe_cloud %}{% endif %}
- Qualquer pessoa com um convite pendente para se tornar um gerente de cobrança{% ifversion ghec %} da empresa ou{% endif %} da organização
- Qualquer pessoa com um convite pendente para se tornar um colaborador externo em um repositório público pertencente à sua organização

{% note %}

**Observação**: {% data reusables.organizations.org-invite-scim %}

{% endnote %}
