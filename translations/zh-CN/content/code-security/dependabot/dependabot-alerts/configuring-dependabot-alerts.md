---
title: 配置 Dependabot 警报
intro: '启用相关选项，使得在存储库之一发现新的易受攻击依赖项{% ifversion GH-advisory-db-supports-malware %}或恶意软件{% endif %}时生成 {% data variables.product.prodname_dependabot_alerts %}。'
shortTitle: Configure Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 7844380c395b1ab0c43ba01fa151bf403c6a0349
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '146455515'
---
## 关于针对易受攻击依赖项{% ifversion GH-advisory-db-supports-malware %}和恶意软件{% endif %}的 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.a-vulnerability-is %} 

当新的公告添加到 {% data variables.product.prodname_advisory_database %} 或存储库的依赖项关系图发生更改时，{% data variables.product.prodname_dependabot %} 会扫描代码。 当检测到易受攻击的依赖项{% ifversion GH-advisory-db-supports-malware %}或恶意软件{% endif %}时，会生成 {% data variables.product.prodname_dependabot_alerts %}。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)”。

可以为以下项启用或禁用 {% data variables.product.prodname_dependabot_alerts %}：
* 你的个人帐户
* 你的存储库
* 你的组织

## 为个人帐户管理 {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghec %}

可以为你的个人帐户拥有的所有存储库启用或禁用 {% data variables.product.prodname_dependabot_alerts %}。

### 为现有存储库启用或禁用 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. 在“代码安全性和分析”下的 {% data variables.product.prodname_dependabot_alerts %} 右侧，单击“全部禁用”或“全部启用”。 
 ![突出显示了“全部启用”或“全部禁用”按钮的“配置安全和分析”功能的屏幕截图](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-all.png)
4. （可选）默认为创建的新存储库启用 {% data variables.product.prodname_dependabot_alerts %}。
  ![“启用 Dependabot 警报”的屏幕截图，其中突出显示了“默认为新的专用存储库启用”复选框](/assets/images/help/dependabot/dependabot-alerts-enable-by-default.png)
5. 单击“禁用 {% data variables.product.prodname_dependabot_alerts %}”或“启用 {% data variables.product.prodname_dependabot_alerts %}”为你拥有的所有存储库禁用或启用 {% data variables.product.prodname_dependabot_alerts %}。
  ![“启用 Dependabot 警报”的屏幕截图，其中突出显示了“启用 Dependabot 警报”按钮](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts.png)

为现有存储库启用 {% data variables.product.prodname_dependabot_alerts %} 时，将在几分钟内看到 GitHub 上显示的任何结果。

### 为新存储库启用或禁用 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. 在“代码安全性和分析”下的 {% data variables.product.prodname_dependabot_alerts %} 右侧，默认为创建的新存储库启用或禁用 {% data variables.product.prodname_dependabot_alerts %}。
  ![“配置安全性和分析”的屏幕截图，其中突出显示了“为所有新的专用存储库启用”复选框](/assets/images/help/dependabot/dependabot-alerts-enable-for-all-new-repositories.png)

{% else %} 存储库的 {% data variables.product.prodname_dependabot_alerts %} 可由企业所有者启用或禁用。 有关详细信息，请参阅[为企业启用 Dependabot](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)。

{% endif %}

## 为存储库管理 {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghec %}可以为公共、私有或内部存储库管理 {% data variables.product.prodname_dependabot_alerts %}。

默认情况下，我们会向受影响仓库中具有管理员权限的人员通知有关新的 {% data variables.product.prodname_dependabot_alerts %}。 {% data variables.product.product_name %} 从不公开披露任何存储库的不安全依赖项。 您也可以将 {% data variables.product.prodname_dependabot_alerts %} 设为对操作您拥有或具有管理员权限的仓库的其他人或团队可见。

{% data reusables.security.security-and-analysis-features-enable-read-only %}

### 为存储库启用或禁用 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. 在“代码安全和分析”下，在 {% data variables.product.prodname_dependabot_alerts %} 的右侧，单击“启用”以启用警报或“禁用”以禁用警报 。 
  ![“代码安全和分析”部分的屏幕截图，其中包含用于启用 {% data variables.product.prodname_dependabot_security_updates %} 的按钮](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png) {% endif %}{% ifversion ghes or ghae %}

存储库的 {% data variables.product.prodname_dependabot_alerts %} 可由企业所有者启用或禁用。 有关详细信息，请参阅[为企业启用 Dependabot](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)。
{% endif %}

## 为组织管理 {% data variables.product.prodname_dependabot_alerts %}
{% ifversion fpt or ghec %}可以为组织拥有的所有存储库启用或禁用 {% data variables.product.prodname_dependabot_alerts %}。 更改会影响所有存储库。

### 为所有现有存储库启用或禁用 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
2. 在“代码安全性和分析”下的 {% data variables.product.prodname_dependabot_alerts %} 右侧，单击“全部禁用”或“全部启用”。  
   {% ifversion fpt or ghec %} ![“配置安全性和分析”功能的屏幕截图，其中为 Dependabot 警报突出显示了“全部启用”或“全部禁用”](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt.png) {% endif %} {% ifversion ghae %} ![“配置安全性和分析”功能的“全部启用”或“全部禁用”按钮](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png) {% endif %} {% ifversion fpt or ghec %}
3. （可选）默认为你组织内的新存储库启用 {% data variables.product.prodname_dependabot_alerts %}。
   {% ifversion fpt or ghec %} ![存储库的“默认启用”选项的屏幕截图](/assets/images/help/dependabot/dependabot-alerts-enable-by-default-organizations.png) {% endif %}
   
   {% endif %} {% ifversion fpt or ghec %}
4. 单击“禁用 {% data variables.product.prodname_dependabot_alerts %}”或“启用 {% data variables.product.prodname_dependabot_alerts %}”为你组织内的所有存储库禁用或启用 {% data variables.product.prodname_dependabot_alerts %}。
   {% ifversion fpt or ghec %} ![“启用 Dependabot 警报“模式的屏幕截图，其中突出显示了用于禁用或启用功能的按钮](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts-organizations.png) {% endif %}{% endif %}{% endif %}{% ifversion ghes or ghae %} 组织的 {% data variables.product.prodname_dependabot_alerts %} 可由企业所有者启用或禁用。 有关详细信息，请参阅[关于 Dependabot for GitHub Enterprise Server](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)。
   {% endif %}
