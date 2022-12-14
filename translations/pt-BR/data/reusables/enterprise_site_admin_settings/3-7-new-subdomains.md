---
ms.openlocfilehash: 6f389970efe1285e45a27f7e55a9b34672ed53e4
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193192"
---
{% ifversion ghes = 3.5 or ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

{%- ifversion ghes = 3.5 or ghes = 3.6 %}

**Nota**: o subdomínio `http(s)://render.HOSTNAME` foi preterido no {% data variables.product.product_name %} 3.7 e posterior. Depois de atualizar para 3.7 ou posterior, verifique se o certificado TLS abrange os subdomínios dos serviços de substituição `http(s)://notebook.HOSTNAME` e `http(s)://viewscreen.HOSTNAME`.

{%- elsif ghes = 3.7 or ghes = 3.8 %}

**Nota**: os subdomínios `http(s)://notebook.HOSTNAME` ou `http(s)://viewscreen.HOSTNAME` são novos no {% data variables.product.product_name %} 3.7 e posterior e substituem o `http(s)://render.HOSTNAME`. Depois de atualizar para 3.7 ou posterior, o certificado TLS deve abranger o subdomínio dos serviços de substituição `http(s)://notebook.HOSTNAME` e `http(s)://viewscreen.HOSTNAME`.

{%- endif %}

{% endnote %}

{% endif %}
