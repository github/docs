---
ms.openlocfilehash: 6f389970efe1285e45a27f7e55a9b34672ed53e4
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193593"
---
{% ifversion ghes = 3.5 or ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

{%- ifversion ghes = 3.5 or ghes = 3.6 %}

**Nota**: El subdominio `http(s)://render.HOSTNAME` está en desuso en {% data variables.product.product_name %} 3.7 y versiones posteriores. Después de actualizar a la versión 3.7 o posterior, asegúrate de que el certificado TLS cubre los subdominios de los servicios de reemplazo `http(s)://notebook.HOSTNAME` y `http(s)://viewscreen.HOSTNAME`.

{%- elsif ghes = 3.7 or ghes = 3.8 %}

**Nota**: Los subdominios `http(s)://notebook.HOSTNAME` o `http(s)://viewscreen.HOSTNAME` son nuevos en {% data variables.product.product_name %} 3.7 y versiones posteriores, y reemplazan a `http(s)://render.HOSTNAME`. Después de actualizar a la versión 3.7 o posterior, el certificado TLS debe cubrir el subdominio de los servicios de reemplazo, `http(s)://notebook.HOSTNAME` y `http(s)://viewscreen.HOSTNAME`.

{%- endif %}

{% endnote %}

{% endif %}
