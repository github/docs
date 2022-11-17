---
ms.openlocfilehash: b57bbd1a709b4cae3b93607d1cd03c1a4a31be15
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/07/2022
ms.locfileid: "148135685"
---
当您为现有仓库启用一个或多个安全和分析功能时，您将在几分钟内看到 {% data variables.product.prodname_dotcom %} 上显示的任何结果：

- 所有现有仓库将具有选定的配置。
- 如果启用了新存储库的复选框，则新存储库将遵循所选配置。{% ifversion GH-advisory-db-supports-malware %}
- 我们使用权限扫描清单文件以应用相关服务。
- 如果启用，您将在依赖关系图中看到依赖项信息。
- 如果启用，{% data variables.product.prodname_dotcom %} 将对易受攻击的依赖项或恶意软件生成 {% data variables.product.prodname_dependabot_alerts %}。{% endif %}{% ifversion fpt or ghec or ghes %}
- 如果启用，{% data variables.product.prodname_dependabot %} 安全更新将在触发 {% data variables.product.prodname_dependabot_alerts %} 时创建拉取请求以升级易受攻击的依赖项。{% endif %}
