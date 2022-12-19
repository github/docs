---
title: 配置 Dependabot 安全更新
intro: '您可以使用 {% data variables.product.prodname_dependabot_security_updates %} 或手动拉取请求轻松地更新有漏洞的依赖项。'
shortTitle: Configure security updates
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 49db730fb0830dc59a5cead63068eb1fb5add14d
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180767'
---
<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## 关于配置 {% data variables.product.prodname_dependabot_security_updates %}

可以在存储库级别或为个人帐户或组织拥有的所有存储库启用 {% data variables.product.prodname_dependabot_security_updates %}。 您可以为任何使用 {% data variables.product.prodname_dependabot_alerts %} 和依赖关系图的仓库启用 {% data variables.product.prodname_dependabot_security_updates %}。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”。

你可以对单个存储库或由你的个人帐户或组织拥有的所有存储库禁用 {% data variables.product.prodname_dependabot_security_updates %}。

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## 支持的存储库

如果个人帐户或组织已为 {% data variables.product.prodname_dependabot_security_updates %}启用“自动为新存储库启用”，则 {% data variables.product.prodname_dotcom %} 会自动为新创建的存储库启用 {% data variables.product.prodname_dependabot_security_updates %}。 有关详细信息，请参阅“[管理存储库的 {% data variables.product.prodname_dependabot_security_updates %}](#managing-dependabot-security-updates-for-your-repositories)”。 

如果创建启用了安全更新的存储库的分支，{% data variables.product.prodname_dotcom %} 将自动禁用该分支的 {% data variables.product.prodname_dependabot_security_updates %}。 然后，你可以决定是否在特定分支上启用 {% data variables.product.prodname_dependabot_security_updates %}。

如果未为存储库启用安全更新，并且您不知道原因么，请先尝试使用以下程序部分的说明启用它们。 如果安全更新还是不工作，您可以联系 {% data variables.contact.contact_support %}。

## 管理仓库的 {% data variables.product.prodname_dependabot_security_updates %}

可以为个人帐户或组织拥有的所有合格的存储库启用或禁用 {% data variables.product.prodname_dependabot_security_updates %}。 有关详细信息，请参阅“[管理个人帐户的安全和分析设置](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)”或“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。 

也可以为单个存储库启用或禁用 {% data variables.product.prodname_dependabot_security_updates %}。

### 对单个仓库启用或禁用 {% data variables.product.prodname_dependabot_security_updates %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. 在“代码安全和分析”下的“{% data variables.product.prodname_dependabot %} 安全更新”的右侧，单击“启用”以启用该功能，或单击“禁用”予以禁用 。 {% ifversion fpt or ghec %}对于公共存储库，如果始终启用该功能，则该按钮将被禁用。{% endif %} {% ifversion fpt or ghec %}![“代码安全和分析”部分的屏幕截图，其中包含用于启用 {% data variables.product.prodname_dependabot_security_updates %}的按钮](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghes > 3.6 or ghae > 3.6 %}<!--Insert screenshot for GHES 3.7 when available--> {% else %}![“代码安全和分析”部分的屏幕截图，包含启用 {% data variables.product.prodname_dependabot_security_updates %} 的按钮](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}

## 使用配置文件重写默认行为

可以通过将 dependabot.yml 文件添加到存储库来重写 {% data variables.product.prodname_dependabot_security_updates %} 的默认行为。 有关详细信息，请参阅“[dependabot.yml 文件的配置选项](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)”。 

如果只需要安全更新并且想要排除版本更新，可以将 `open-pull-requests-limit` 设置为 `0` 以防止给定 `package-ecosystem` 的版本更新。 有关详细信息，请参阅“[`open-pull-requests-limit`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#open-pull-requests-limit)”。

```
# Example configuration file that:
#  - Ignores lodash dependency
#  - Disables version-updates

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "lodash"
        # For Lodash, ignore all updates
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0
```

有关可用于安全更新的配置选项的详细信息，请参阅“[dependabot.yml 文件的配置选项](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#configuration-options-for-the-dependabotyml-file)”中的表格。

## 延伸阅读

- [关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)
- [配置 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts){% ifversion fpt or ghec %}
- [管理专用存储库的数据使用设置](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository){% endif %}
- [支持的包生态系统](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)
