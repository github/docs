---
ms.openlocfilehash: 6f389970efe1285e45a27f7e55a9b34672ed53e4
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193372"
---
{% ifversion ghes = 3.5 or ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

{%- ifversion ghes = 3.5 or ghes = 3.6 %}

**Hinweis:** Die Unterdomäne `http(s)://render.HOSTNAME` ist in {% data variables.product.product_name %} 3.7 und höher veraltet. Vergewissere dich nach dem Upgrade auf Version 3.7 oder höher, dass dein TLS-Zertifikat die Unterdomänen für die Ersatzdienste (`http(s)://notebook.HOSTNAME` und `http(s)://viewscreen.HOSTNAME`) abdeckt.

{%- elsif ghes = 3.7 or ghes = 3.8 %}

**Hinweis:** Die Unterdomänen `http(s)://notebook.HOSTNAME` oder `http(s)://viewscreen.HOSTNAME` sind neu in {% data variables.product.product_name %} 3.7 und höher und ersetzen `http(s)://render.HOSTNAME`. Nach dem Upgrade auf Version 3.7 oder höher muss dein TLS-Zertifikat die Unterdomäne für die Ersatzdienste (`http(s)://notebook.HOSTNAME` und `http(s)://viewscreen.HOSTNAME`) abdecken.

{%- endif %}

{% endnote %}

{% endif %}
