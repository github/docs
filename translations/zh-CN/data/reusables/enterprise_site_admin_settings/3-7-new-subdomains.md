---
ms.openlocfilehash: 6f389970efe1285e45a27f7e55a9b34672ed53e4
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193256"
---
{% ifversion ghes = 3.5 or ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

{%- ifversion ghes = 3.5 or ghes = 3.6 %}

注意：{% data variables.product.product_name %} 3.7 及更高版本中已弃用 `http(s)://render.HOSTNAME` 子域。 升级到 3.7 或更高版本后，请确保 TLS 证书涵盖替换服务的子域，`http(s)://notebook.HOSTNAME` 和 `http(s)://viewscreen.HOSTNAME`。

{%- elsif ghes = 3.7 or ghes = 3.8 %}

注意：`http(s)://notebook.HOSTNAME` 或 `http(s)://viewscreen.HOSTNAME` 子域是 {% data variables.product.product_name %} 3.7 及更高版本中的新增内容，可替换 `http(s)://render.HOSTNAME`。 升级到 3.7 或更高版本后，TLS 证书必须涵盖替换服务的子域，`http(s)://notebook.HOSTNAME` 和 `http(s)://viewscreen.HOSTNAME`。

{%- endif %}

{% endnote %}

{% endif %}
