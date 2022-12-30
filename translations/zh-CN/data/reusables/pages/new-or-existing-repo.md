---
ms.openlocfilehash: 33f427d38193ad14c5df35ebab14bd08208c08e0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108614"
---
可以为站点创建存储库或选择现有存储库。

如果存储库中并非所有文件都与站点相关，且要为存储库创建 {% data variables.product.prodname_pages %} 站点，则能够为站点配置发布源。 例如，可以使用专用分支和文件夹保存站点源{% ifversion pages-custom-workflow %}文件，也可以使用自定义 {% data variables.product.prodname_actions %} 工作流来生成和部署站点源文件。 {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %}{% else %}files.{% endif %}

{% ifversion fpt or ghec %}如果拥有存储库的帐户使用组织的 {% data variables.product.prodname_free_user %} 或 {% data variables.product.prodname_free_team %}，存储库必须是公共的。{% endif %}

 如果要在现有存储库中创建站点，请跳至“[创建站点](#creating-your-site)”一节。