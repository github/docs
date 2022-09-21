---
title: 管理私有仓库的数据使用设置
intro: '为帮助 {% data variables.product.product_name %} 连接到相关的工具、人员、项目和信息，您可以配置私有仓库的数据使用。'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Manage data use for private repo
ms.openlocfilehash: 36ddc4449726b67863e7d4e045dd1582b12f2c27
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526668'
---
## 关于私有仓库的数据使用


可以使用安全和分析功能控制专用存储库的数据使用。 

- 启用依赖项关系图以允许对存储库进行只读数据分析。 
- 禁用依赖项关系图以阻止对存储库进行只读数据分析。 

启用私有仓库的数据使用后，您可以访问依赖项图，从中可以跟踪仓库的依赖项，在 {% data variables.product.product_name %} 检测到漏洞依赖项时接收 {% data variables.product.prodname_dependabot_alerts %}。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)”。


{% note %}

**注意：** 如果禁用依赖项关系图，{% data variables.product.prodname_dependabot_alerts %} 和 {% data variables.product.prodname_dependabot_security_updates %} 也会被禁用。 有关详细信息，请参阅“[关于依赖项关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”。 

{% endnote %}

## 通过安全和分析功能启用或禁用数据使用

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. 在“代码安全和分析”下，单击该功能右侧的“禁用”或“启用”。{% ifversion fpt %}![用于“配置安全和分析”功能的“启用”或“禁用”按钮](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %}![用于“配置安全和分析”功能的“启用”或“禁用”按钮](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% endif %} 

## 延伸阅读

- [关于 {% data variables.product.prodname_dotcom %} 对数据的使用](/articles/about-github-s-use-of-your-data)
- [查看和更新 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)
- [管理存储库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)
