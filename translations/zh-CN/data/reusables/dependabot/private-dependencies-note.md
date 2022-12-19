---
ms.openlocfilehash: 74a6541cfbd0ad87d45a316cb46da45c227c9925
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145129878"
---
在运行安全性或版本更新时，有些生态系统必须能够解决来自其来源的所有依赖项，以验证版本更新是否成功。 如果清单或锁定文件包含任何私有依赖项，{% data variables.product.prodname_dependabot %} 必须能够访问这些依赖项所在的位置。 组织所有者可以授予 {% data variables.product.prodname_dependabot %} 访问包含同一个组织内项目依赖项的私有仓库. 有关详细信息，请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)”。 你可以在存储库的 dependabot.yml 配置文件中配置对专用注册表的访问。 有关详细信息，请参阅“[dependabot.yml 文件的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)”。
