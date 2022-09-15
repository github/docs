---
ms.openlocfilehash: c9e2c1bf2b01805ed973effedd219c3552ac2bf4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "146455667"
---
当您为现有仓库启用一个或多个安全和分析功能时，您将在几分钟内看到 {% data variables.product.prodname_dotcom %} 上显示的任何结果：

- 所有现有仓库将具有选定的配置。
- 如果启用了新存储库的复选框，则新存储库将遵循所选配置。{% ifversion fpt or ghec %}
- 我们使用权限扫描清单文件以应用相关服务。
- 如果启用，您将在依赖关系图中看到依赖项信息。
- 如有启用，{% data variables.product.prodname_dotcom %} 将对易受攻击的依赖项或恶意软件生成 {% data variables.product.prodname_dependabot_alerts %}。{% endif %}{% ifversion fpt or ghec or ghes > 3.2 %}
- 如果启用，{% data variables.product.prodname_dependabot %} 安全更新将在触发 {% data variables.product.prodname_dependabot_alerts %} 时创建拉取请求以升级易受攻击的依赖项。{% endif %}
