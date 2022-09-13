---
title: 管理个人帐户的安全和分析设置
intro: '您可以控制功能以保护 {% data variables.product.prodname_dotcom %} 上项目的安全并分析其中的代码。'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
shortTitle: Manage security & analysis
ms.openlocfilehash: 61d1944219fd1b75f476c7aef8305018c85735c5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145164780'
---
## 关于安全性和分析设置的管理

{% data variables.product.prodname_dotcom %} 可保护您的仓库。 本主题介绍如何管理所有现有或新仓库的安全和分析功能。

您仍然可以管理单个仓库的安全和分析功能。 有关详细信息，请参阅“[管理存储库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。

你还可以查看个人帐户上所有活动的安全日志。 有关详细信息，请参阅“[查看安全日志](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)”。

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

有关存储库级安全性的概述，请参阅“[保护存储库](/code-security/getting-started/securing-your-repository)”。

## 启用或禁用现有仓库的功能

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. 在“代码安全和分析”下，单击功能右侧的“全部禁用”或“全部启用” 。
  {% ifversion ghes > 3.2 %}![用于“配置安全和分析”功能的“全部启用”或“全部禁用”按钮](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% else %}![用于“配置安全和分析”功能的“全部启用”或“全部禁用”按钮](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png){% endif %}
6. （可选）默认情况下为您拥有的新存储库启用该功能。
  {% ifversion ghes > 3.2 %}![用于新建存储库的“默认启用”选项](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}![用于新建存储库的“默认启用”选项](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}
7. 单击“禁用功能”或“启用功能”，以为所拥有的所有存储库禁用或启用该功能 。
  {% ifversion ghes > 3.2 %}![用于禁用或启用功能的按钮](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png){% else %}![用于禁用或启用功能的按钮](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png){% endif %}

{% data reusables.security.displayed-information %}

## 对新仓库启用或禁用功能

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. 在“Code security and analysis（代码安全和分析）”下，在功能右侧，默认为您拥有的新存储库启用或禁用该功能。
  {% ifversion ghes > 3.2 %}![用于启用或禁用新建存储库功能的复选框](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![用于启用或禁用新建存储库功能的复选框](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% endif %}

## 延伸阅读

- “[关于依赖项图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”
- “[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”
- “[自动更新依赖项](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically)”
