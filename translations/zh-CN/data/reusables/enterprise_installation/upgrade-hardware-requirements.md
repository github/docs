---
ms.openlocfilehash: faf2e19d40e921c1a3d1b6cff91aaf3e4dd2b97b
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145097752"
---
{% ifversion ghes < 3.2 %}

### <a name="about-minimum-requirements-for--data-variablesproductprodname_ghe_server--30-and-later"></a>关于 {% data variables.product.prodname_ghe_server %} 3.0 及更高版本的最低要求

升级到 {% data variables.product.prodname_ghe_server %} 3.0 或更高版本之前，请检查您为实例预配的硬件资源。 {% data variables.product.prodname_ghe_server %} 3.0 引入了 {% data variables.product.prodname_actions %} 和 {% data variables.product.prodname_registry %} 等新功能，比 2.22 和更早版本需要更多的资源。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_server %} 3.0 发行说明](/enterprise-server@3.0/admin/release-notes)。

{% data variables.product.prodname_ghe_server %} 3.0 及更高版本的增加要求在下表中以 **粗体** 表示。

| 用户许可证 | vCPU | 内存 | 附加存储 | 根存储 |
| :- | -: | -: | -: | -: |
| 试用版、演示版或 10 个轻度用户 | **4**<br/>_从 2 起_ | **32 GB**<br/>_从 16 GB 起_ | **150 GB**<br/>_从 100 GB 起_ | 200 GB |
| 10-3000  | **8**<br/>_从 4 起_ | **48 GB**<br/>_从 32 GB 起_ | **300 GB**<br/>_从 250 GB 起_ | 200 GB |
| 3000-5000 | **12**<br/>_从 8 起_ | 64 GB | 500 GB | 200 GB |
| 5000-8000 | **16**<br/>_从 12 起_ | 96 GB | 750 GB | 200 GB |
| 8000-10000+ | **20**<br/>_从 16 起_ | **160 GB**<br/>_从 128 GB 起_ | 1000 GB | 200 GB |

{% ifversion ghes %}

有关 {% data variables.product.prodname_actions %} 的硬件要求的详细信息，请参阅“[{% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 入门](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)”。

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% endif %}
