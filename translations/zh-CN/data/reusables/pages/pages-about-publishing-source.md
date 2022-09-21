---
ms.openlocfilehash: f77827f645123477cf9ddc2f845c7da3a4929a72
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: "147871935"
---
{% ifversion pages-custom-workflow %}

可以在将更改推送到特定分支时发布站点，也可以编写 {% data variables.product.prodname_actions %} 工作流来发布站点。

如果不需要对站点的生成过程进行任何控制，则建议在将更改推送到特定分支时发布站点。 {% data reusables.pages.pages-about-branch-source %}

如果想使用 Jekyll 以外的生成过程，或者不想使用专用分支来保存已编译的静态文件，则建议编写 {% data variables.product.prodname_actions %} 工作流来发布站点。 {% data variables.product.product_name %} 为常见的发布方案提供入门工作流，以帮助编写工作流。

{% else %}

将更改推送到特定分支时，会发布 {% data variables.product.prodname_pages %} 站点。 {% data reusables.pages.pages-about-branch-source %}

{% endif %}
