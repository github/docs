---
ms.openlocfilehash: 6f389970efe1285e45a27f7e55a9b34672ed53e4
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193592"
---
{% ifversion ghes = 3,5 or ghes = 3,6 or ghes = 3,7 or ghes = 3,8 %}

{% note %}

{%- ifversion ghes = 3,5 or ghes = 3,6 %}

**Примечание**. Поддомен `http(s)://render.HOSTNAME` не рекомендуется использовать в {% data variables.product.product_name %} 3.7 и более поздних версиях. После обновления до версии 3.7 или более поздней убедитесь, что сертификат TLS охватывает поддомены для служб замены и `http(s)://notebook.HOSTNAME` `http(s)://viewscreen.HOSTNAME`.

{%- elsif ghes = 3,7 или ghes = 3,8 %}

**Примечание.** Поддомены `http(s)://notebook.HOSTNAME` или `http(s)://viewscreen.HOSTNAME` являются новыми в {% data variables.product.product_name %} 3.7 и более поздних версий и заменяют `http(s)://render.HOSTNAME`. После обновления до версии 3.7 или более поздней сертификат TLS должен охватывать поддомен для служб замены и `http(s)://notebook.HOSTNAME` `http(s)://viewscreen.HOSTNAME`.

{%- endif %}

{% endnote %}

{% endif %}
