---
ms.openlocfilehash: dfbf31bbfeea726bcd0c1852d881aefc8f149c0e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159782"
---
可以通过将筛选器作为 `key:value` 对输入到搜索栏中，对 {% data variables.product.prodname_dependabot_alerts %} 进行排序和筛选。 

| 选项 | 说明 | 示例 | 
|:---|:---|:---|
| `ecosystem` | 显示有关所选生态系统的警报 | 使用 `ecosystem:npm` 显示 npm 的 {% data variables.product.prodname_dependabot_alerts %} |{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
| `has` | 显示符合所选筛选条件的警报 | 使用 `has:patch` 显示与具有补丁的公告相关的警报{% ifversion dependabot-alerts-vulnerable-calls %}</br>使用 `has:vulnerable-calls` 显示与调用易受攻击函数相关的警报{% endif %} |{% endif %}
| `is` | 基于警报状态显示警报 | 使用 `is:open` 显示打开的警报 |
| `manifest` | 显示有关所选清单的警报 | 使用 `manifest:webwolf/pom.xml` 显示有关 webwolf 应用程序的 pom.xml 文件的警报 |
| `package` | 显示有关所选包的警报 | 使用 `package:django` 显示有关 django 的警报 |
| `resolution` | 显示所选解决状态的警报 | 使用 `resolution:no-bandwidth` 显示以前因缺乏用于修复的资源或时间而停止的警报 |
| `repo` |  基于相关存储库显示警报</br>请注意，此筛选器仅适用于安全概述。 有关详细信息，请参阅“[关于安全概述](/code-security/security-overview/about-the-security-overview)” | 使用 `repo:octocat-repo` 显示名为 `octocat-repo` 的存储库中的警报 |{%- ifversion dependabot-alerts-development-label %}
| `scope` | 基于相关依赖项范围显示警报 | 使用 `scope:development` 显示仅在开发过程中使用的依赖项的警报 |{% endif %}
| `severity` | 基于严重性级别显示警报 | 使用 `severity:high` 显示严重性为“高”的警报 |{%- ifversion dependabot-most-important-sort-option %}
| `sort` | 根据所选排序顺序显示警报 | 警报的默认排序选项是 `sort:most-important`，这会按重要性对警报进行排名</br>使用 `sort:newest` 显示 {% data variables.product.prodname_dependabot %} 报告的最新警报 |{% endif %}
