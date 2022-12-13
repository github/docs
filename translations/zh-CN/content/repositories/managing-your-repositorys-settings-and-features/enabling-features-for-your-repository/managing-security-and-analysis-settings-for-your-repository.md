---
title: 管理存储库的安全和分析设置
intro: '您可以控制功能以保护 {% data variables.product.prodname_dotcom %} 上项目的安全并分析其中的代码。'
permissions: People with admin permissions to a repository can manage security and analysis settings for the repository.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-security-and-analysis-settings-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Security & analysis
ms.openlocfilehash: 4373c92b6b4e12f56bb26869090955824662b841
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108686'
---
{% ifversion fpt or ghec %}
## 为公共仓库启用或禁用安全和分析功能

您可以管理公共仓库的一部分安全和分析功能。 其他功能是永久启用的，包括依赖项图和密码扫描。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. 在“代码安全和分析”下，单击该功能右侧的“禁用”或“启用” 。
  ![公共存储库中“配置安全和分析”功能的“启用”或“禁用”按钮](/assets/images/help/repository/security-and-analysis-disable-or-enable-public.png) {% endif %}

## 为专用存储库启用或禁用安全和分析功能{% ifversion fpt or ghec %}{% endif %}

您可以管理{% ifversion fpt or ghec %}私有或内部 {% endif %}仓库的安全性和分析功能。{% ifversion ghes or ghec %} 如果您的组织属于拥有 {% data variables.product.prodname_GH_advanced_security %} 许可证的企业，则额外选项可用。 {% data reusables.advanced-security.more-info-ghas %} {% elsif fpt %} 结合使用 {% data variables.product.prodname_ghe_cloud %} 与 {% data variables.product.prodname_advanced_security %} 的组织有额外选项可用。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest//repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories)。
{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% ifversion fpt or ghes or ghec %}
4. 在“代码安全和分析”下，单击该功能右侧的“禁用”或“启用” 。 {% ifversion not fpt %}如果你的企业没有 {% data variables.product.prodname_advanced_security %} 的可用许可证，“{% data variables.product.prodname_GH_advanced_security %}”的控件将处于禁用状态。{% endif %}{% ifversion fpt %}![“配置安全和分析”功能的“启用”或“禁用”按钮的屏幕截图](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %}![Screenshot of "Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% elsif ghes > 3.6 or ghae > 3.6 %}<!--Insert screenshot for GHES 3.7 when available-->
  ![“配置安全和分析”功能的“启用”或“禁用”按钮的屏幕截图](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}
  
  {% ifversion not fpt %} {% note %}

  注意：如果你禁用 {% data variables.product.prodname_GH_advanced_security %}，{% ifversion ghec %}依赖项审核、{% endif %}{% data variables.product.prodname_secret_scanning %} 和 {% data variables.product.prodname_code_scanning %} 都将处于禁用状态。 任何工作流程、SARIF上传或 {% data variables.product.prodname_code_scanning %} 的 API 调用都将失败。
  {% endnote %}{% endif %}

  {% endif %}

  {% ifversion ghae %}
4. 在“代码安全和分析”下，单击该功能右侧的“禁用”或“启用” 。 在启用“{% data variables.product.prodname_secret_scanning %}”之前，您可能需要先启用 {% data variables.product.prodname_GH_advanced_security %}。
   ![为你的存储库启用或禁用 {% data variables.product.prodname_GH_advanced_security %} 或 {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/github-ae/repository/enable-ghas-secret-scanning-ghae.png) {% endif %}

## 授予对安全警报的访问权限

对存储库具有管理员访问权限的人员可以看到存储库的安全警报，如果存储库归组织所有，则组织所有者也可见。 您可以授予其他团队和人员访问警报。

{% note %}

组织所有者和仓库管理员只能向具有仓库写入权限的人员授予安全警报的查看权限，如 {% data variables.product.prodname_secret_scanning %} 警报。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. 在“Access to alerts（访问警报）”下，在搜索字段中开始键入您要查找的个人或团队的名称，然后单击匹配列表中的名称。
   {% ifversion fpt or ghec or ghes %}![用于授权人员或团队访问安全警报的搜索字段](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png){% endif %}
   
   {% ifversion ghae %}![用于授权人员或团队访问安全警报的搜索字段](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-person-or-team-search-ghae.png){% endif %}
   
5. 单击“保存更改”。 
   {% ifversion fpt or ghes or ghec %}![用于更改安全警报设置的“保存更改”按钮](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png){% endif %}
   
   {% ifversion ghae %}![用于更改安全警报设置的“保存更改”按钮](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-save-changes-ghae.png){% endif %}

## 删除对安全警报的访问权限

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. 在“Access to alerts（访问警报）”下，在要删除其访问权限的个人或团队的右侧，单击 {% octicon "x" aria-label="X symbol" %}。
   {% ifversion fpt or ghec or ghes %}  
   ![用于删除某人对存储库安全警报的访问权限的“x”按钮](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png){% endif %}
   
   {% ifversion ghae %}![用于删除某人对存储库安全警报的访问权限的“x”按钮](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-username-x-ghae.png){% endif %}
  5. 单击“保存更改”。 

## 延伸阅读

- [保护存储库](/code-security/getting-started/securing-your-repository)
- [管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)
