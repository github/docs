---
ms.openlocfilehash: bae5803eba7e297fdf2c915f1e08f1e124ed7011
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147428305"
---
可以为站点创建存储库或选择现有存储库。

如果存储库中并非所有文件都与站点相关，且要为存储库创建 {% data variables.product.prodname_pages %} 站点，则能够为站点配置发布源。 例如，可以使用专用分支和文件夹保存站点源文件{% ifversion pages-custom-workflow %}，也可以使用自定义 {% data variables.product.prodname_actions %} 工作流来生成和部署站点源文件{% endif %}。

{% ifversion fpt or ghec %}如果拥有存储库的帐户使用组织的 {% data variables.product.prodname_free_user %} 或 {% data variables.product.prodname_free_team %}，存储库必须是公共的。{% endif %}

如果要在现有存储库中创建站点，请跳至“[创建站点](#creating-your-site)”一节。
