---
title: 管理组织的安全和分析设置
intro: '您可以控制功能以保护组织在 {% data variables.product.prodname_dotcom %} 上项目的安全并分析其中的代码。'
permissions: Organization owners can manage security and analysis settings for repositories in the organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage security & analysis
ms.openlocfilehash: 35e34f15b46987eea7bc732313b69ecd4e6396fa
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107699'
---
## 关于安全性和分析设置的管理

{% data variables.product.prodname_dotcom %} 可帮助保护组织中的仓库。 您可以管理成员在组织中创建的所有现有或新仓库的安全性和分析功能。 {% ifversion ghec %}如果你拥有 {% data variables.product.prodname_GH_advanced_security %} 许可证，则还可以管理对这些功能的访问。 {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% ifversion fpt %}使用 {% data variables.product.prodname_ghe_cloud %} 并拥有 {% data variables.product.prodname_GH_advanced_security %} 许可证的组织也可以管理对这些功能的访问。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)。{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %} {% data reusables.security.security-and-analysis-features-enable-read-only %}

## 显示安全和分析设置

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}

显示的页面允许您为组织中的仓库启用或禁用所有安全和分析功能。

{% ifversion ghec %}如果你的组织属于具有 {% data variables.product.prodname_GH_advanced_security %} 许可证的企业，则该页面还会包含启用和禁用 {% data variables.product.prodname_advanced_security %} 功能的选项。 使用 {% data variables.product.prodname_GH_advanced_security %} 的任何仓库都列在页面底部。{% endif %}

{% ifversion ghes %}如果你的组织拥有 {% data variables.product.prodname_GH_advanced_security %} 许可证，则该页面还会包含启用和禁用 {% data variables.product.prodname_advanced_security %} 功能的选项。 使用 {% data variables.product.prodname_GH_advanced_security %} 的任何仓库都列在页面底部。{% endif %}

{% ifversion ghae %}该页面还会包含启用和禁用 {% data variables.product.prodname_advanced_security %} 功能的选项。 使用 {% data variables.product.prodname_GH_advanced_security %} 的任何仓库都列在页面底部。{% endif %}

## 为所有现有存储库启用或禁用某项功能

您可以启用或禁用所有仓库的功能。 {% ifversion fpt or ghec %}您的更改对组织中仓库的影响取决于其可见性：

- **依赖项关系图** - 所做的更改仅影响专用存储库，因为该功能对公共存储库始终启用。
- **{% data variables.product.prodname_dependabot_alerts %}** - 所做的更改会影响所有存储库。
- **{% data variables.product.prodname_dependabot_security_updates %}** - 所做的更改会影响所有存储库。
{%- ifversion ghec %}
- **{% data variables.product.prodname_GH_advanced_security %}** - 所做的更改仅影响专用存储库，因为 {% data variables.product.prodname_GH_advanced_security %} 和相关功能对公共存储库始终启用。
- **{% data variables.product.prodname_secret_scanning_caps %}** - 所做的更改会影响同时启用了 {% data variables.product.prodname_GH_advanced_security %} 的存储库。 此选项控制是否启用 {% data variables.product.prodname_secret_scanning_GHAS %}。 {% data variables.product.prodname_secret_scanning_partner_caps %} 始终在所有公共存储库上运行。
{% endif %}

{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% ifversion ghes or ghec or ghae %} {% note %}

注意：如果遇到“由于组织的策略设置，无法启用 GitHub Advanced Security”的错误，请与企业管理员联系，请他们更改企业 GitHub Advanced Security 策略。 有关详细信息，请参阅“[在企业中强制实施高级安全策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)”。
{% endnote %} {% endif %}

1. 转到组织的安全和分析设置。 有关详细信息，请参阅“[显示安全和分析设置](#displaying-the-security-and-analysis-settings)”。
2. 在“代码安全和分析”下，单击功能右侧的“全部禁用”或“全部启用” 。 {% ifversion ghes or ghec %}如果 {% data variables.product.prodname_GH_advanced_security %} 许可证中没有可用席位，则会禁用“{% data variables.product.prodname_GH_advanced_security %}”的控件。{% endif %} {% ifversion fpt %} ![“配置安全和分析”功能的“全部启用”或“全部禁用”按钮](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-fpt.png) {% endif %} {% ifversion ghec %} ![“配置安全和分析”功能的“全部启用”和“全部禁用”按钮](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-ghec.png) {% endif %} {% ifversion ghes %} ![“配置安全和分析”功能的“全部启用”或“全部禁用”按钮](/assets/images/enterprise/3.3/organizations/security-and-analysis-disable-or-enable-all-ghas.png) {% endif %}
   
   
   {% ifversion ghae %} ![“配置安全和分析”功能的“全部启用”或“全部禁用”按钮](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png) {% endif %} {% ifversion fpt or ghec %}
3. （可选）为组织中的新仓库默认启用该功能。
   {% ifversion fpt or ghec %} ![针对新存储库的“默认启用”选项](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png) {% endif %}
   
   {% endif %} {% ifversion fpt or ghec %}
4. 单击“禁用功能”或“启用功能”，为组织中所有存储库禁用或启用该功能 。
   {% ifversion fpt or ghec %} ![用于禁用或启用功能的按钮](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png) {% endif %}
   
   {% endif %} {% ifversion ghae or ghes %}
5. 单击“全部启用/禁用”或“为符合条件的存储库启用/禁用”以确认更改 。
   ![用于为组织中所有符合条件的存储库启用功能的按钮](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-secret-scanning-existing-repos-ghae.png) {% endif %}

   {% data reusables.security.displayed-information %}

## 添加新仓库时自动启用或禁用功能

1. 转到组织的安全和分析设置。 有关详细信息，请参阅“[显示安全和分析设置](#displaying-the-security-and-analysis-settings)”。
2. 在功能右边的“代码安全和分析”下，默认为组织中的新存储库{% ifversion fpt or ghec %}或所有新的专用存储库{% endif %}启用或禁用该功能。
   {% ifversion fpt or ghec %} ![用于启用新存储库功能的复选框的屏幕截图](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png) {% endif %} {% ifversion ghes %} ![用于启用新存储库功能的复选框的屏幕截图](/assets/images/enterprise/3.3/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png) {% endif %}
   
   {% ifversion ghae %} ![用于对新存储库启用功能的复选框的屏幕截图](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghae.png) {% endif %}

{% ifversion fpt or ghec or ghes %}

## 允许 {% data variables.product.prodname_dependabot %} 访问私有依赖项

{% data variables.product.prodname_dependabot %} 可以检查项目中过时的依赖项引用，并自动生成拉取请求来更新它们。 为此，{% data variables.product.prodname_dependabot %} 必须有权访问所有目标依赖项文件。 通常，如果一个或多个依赖项无法访问，版本更新将失败。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot %} 版本更新](/github/administering-a-repository/about-dependabot-version-updates)”。

默认情况下，{% data variables.product.prodname_dependabot %} 无法更新位于私有仓库或私有仓库注册表中的依赖项。 但是，如果依赖项位于与使用该依赖项之项目相同的组织内的私有 {% data variables.product.prodname_dotcom %} 仓库中，则可以通过授予对主机仓库的访问权限来允许 {% data variables.product.prodname_dependabot %} 成功更新版本。

如果您的代码依赖于私有注册表中的软件包，您可以在仓库级别进行配置，允许 {% data variables.product.prodname_dependabot %} 更新这些依赖项的版本。 可通过将身份验证详细信息添加到存储库的 dependabot.yml 文件来完成此操作。 有关详细信息，请参阅[dependabot.yml 文件的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)。

要允许 {% data variables.product.prodname_dependabot %} 访问私有 {% data variables.product.prodname_dotcom %} 仓库：

1. 转到组织的安全和分析设置。 有关详细信息，请参阅“[显示安全和分析设置](#displaying-the-security-and-analysis-settings)”。
1. 在“{% data variables.product.prodname_dependabot %} 专用存储库访问权限”下，单击“添加专用存储库”或“添加内部和专用存储库” 。
   ![添加存储库按钮](/assets/images/help/organizations/dependabot-private-repository-access.png)
1. 开始键入要允许的存储库的名称。
   ![带有筛选条件下拉列表的存储库搜索字段](/assets/images/help/organizations/dependabot-private-repo-choose.png)
1. 单击要允许的存储库。

1. （可选）要从列表中删除仓库，在仓库右侧单击 {% octicon "x" aria-label="The X icon" %}。
   ![用于删除存储库的“X”按钮](/assets/images/help/organizations/dependabot-private-repository-list.png) {% endif %}

{% ifversion ghes or ghec %}

## 从组织中的个别仓库中移除对 {% data variables.product.prodname_GH_advanced_security %} 的访问权限

可以通过存储库的“设置”选项卡管理对存储库的 {% data variables.product.prodname_GH_advanced_security %} 功能的访问。有关详细信息，请参阅“[管理存储库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。 但您也可以从“Settings（设置）”选项卡对仓库禁用 {% data variables.product.prodname_GH_advanced_security %} 功能。

1. 转到组织的安全和分析设置。 有关详细信息，请参阅“[显示安全和分析设置](#displaying-the-security-and-analysis-settings)”。
1. 要查看您组织中启用 {% data variables.product.prodname_GH_advanced_security %} 的所有仓库的列表，请滚动到“{% data variables.product.prodname_GH_advanced_security %} 仓库”部分。
  ![{% data variables.product.prodname_GH_advanced_security %} 存储库部分](/assets/images/help/organizations/settings-security-analysis-ghas-repos-list.png) 此表列出了每个存储库的唯一提交者数量。 这是您可以通过移除 {% data variables.product.prodname_GH_advanced_security %} 访问权限释放的席位数。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %} 计费](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)。”
1. 要从仓库删除对 {% data variables.product.prodname_GH_advanced_security %} 的访问，并释放任何提交者使用的对仓库唯一的席位，请单击相邻的 {% octicon "x" aria-label="X symbol" %}。
1. 在确认对话框中，单击“删除存储库”以删除对 {% data variables.product.prodname_GH_advanced_security %} 功能的访问权限。

{% note %}

注意：如果删除对存储库中 {% data variables.product.prodname_GH_advanced_security %} 的访问权限，则应与受影响的开发团队沟通，以便他们了解此更改是有意的。 这确保他们不会浪费时间调试运行失败的代码扫描。

{% endnote %}

{% endif %}

## 延伸阅读

- [保护存储库](/code-security/getting-started/securing-your-repository){% ifversion not fpt %}
- [关于机密扫描](/github/administering-a-repository/about-secret-scanning){% endif %}{% ifversion not ghae %}
- [关于依赖项关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph){% endif %}
- [关于供应链安全性](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)
