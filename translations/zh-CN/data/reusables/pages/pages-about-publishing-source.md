---
ms.openlocfilehash: f46fcf5de23b55285d402b93bd89b0155e1224e7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108141"
---
{% ifversion pages-custom-workflow %}

可以在将更改推送到特定分支时发布站点，也可以编写 {% data variables.product.prodname_actions %} 工作流来发布站点。 {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %}

如果不需要对站点的生成过程进行任何控制，则建议在将更改推送到特定分支时发布站点。 {% data reusables.pages.pages-about-branch-source %}

如果想使用 Jekyll 以外的生成过程，或者不想使用专用分支来保存已编译的静态文件，则建议编写 {% data variables.product.prodname_actions %} 工作流来发布站点。 {% data variables.product.product_name %} 为常见的发布方案提供入门工作流，以帮助编写工作流。

{% else %}

将更改推送到特定分支时，会发布 {% data variables.product.prodname_pages %} 站点。 {% data reusables.pages.pages-about-branch-source %}

{% endif %}