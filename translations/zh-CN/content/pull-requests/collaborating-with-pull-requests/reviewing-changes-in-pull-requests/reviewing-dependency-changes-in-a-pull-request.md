---
title: 审查拉取请求中的依赖项更改
intro: 如果拉取请求包含对依赖项的更改，您可以查看已更改内容摘要以及任何依赖项中是否存在已知漏洞。
product: '{% data reusables.gated-features.dependency-review %}'
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Pull requests
  - Dependency review
  - Advanced Security
  - Vulnerabilities
  - Dependencies
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
shortTitle: Review dependency changes
ms.openlocfilehash: 3887db045b68f7adeca275db0449a12547453771
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065368'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Sign up for the dependency review beta" and "Reviewing dependency changes in a pull request".-->

{% data reusables.dependency-review.beta %}

## 关于依赖项评审

{% data reusables.dependency-review.feature-overview %}

{% ifversion ghec %}在私有存储库中使用依赖项审查之前，必须启用依赖项关系图。 有关详细信息，请参阅“[探索存储库的依赖项](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”。{% endif %}

{% ifversion ghes %} 在使用依赖项审查之前，必须启用依赖项关系图并将 {% data variables.product.product_location %} 连接到 {% data variables.product.prodname_dotcom_the_website %}。 有关详细信息，请参阅“[为 {% data variables.product.prodname_ghe_server %} 上的易受攻击依赖项启用警报](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)”。{% endif %}

依赖关系审核允许您“左移”。 您可以使用所提供的预测信息在易受攻击的依赖项进入生产之前捕获它们。 有关详细信息，请参阅“[关于依赖项审查](/code-security/supply-chain-security/about-dependency-review)”。

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6396 %}

可使用 {% data variables.product.prodname_dependency_review_action %} 来帮助对存储库中的拉取请求强制实施依赖项审查。 {% data reusables.dependency-review.dependency-review-action-overview %}

{% ifversion dependency-review-action-configuration %} 可通过指定要捕获的依赖项漏洞类型，配置 {% data variables.product.prodname_dependency_review_action %} 来更好地满足需求。 有关详细信息，请参阅“[配置依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action)”。 {% endif %}

{% endif %}
## 审查拉取请求中的依赖项

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}

1. 如果拉取请求包含许多文件，请使用“文件筛选器”下拉菜单折叠所有不记录依赖项的文件。 这将有助于您将审查的重点放在依赖项更改上。

   ![文件筛选器菜单](/assets/images/help/pull_requests/file-filter-menu-json.png) 依赖项审查提供关于大型锁定文件中已更改内容的更清晰视图，源差异在默认情况下不会呈现。

  {% note %}

   注意：依赖项审查多差异不适用于已提交的静态 JavaScript 文件，如 `jquery.js`。

   {% endnote %}

1. 在清单或锁定文件标头的右侧，单击 {% octicon "file" aria-label="The rich diff icon" %} 多差异按钮以显示依赖项审查。

   ![多差异按钮](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

2. 检查依赖项审查中列出的依赖项。

   ![依赖项审查中的漏洞警告](/assets/images/help/pull_requests/dependency-review-vulnerability.png)

   任何已添加或更改的有漏洞依赖项先按严重程度排序，然后按依赖项名称排序。 这意味着严重程度最高的依赖项始终处于依赖项审查的顶部。 其他依赖项按其名称的字母顺序排列。

   每个依赖项旁边的图标指示该依赖项在此拉取请求中是否已添加 (<span style="color:#22863a">{% octicon "diff-added" aria-label="Dependency added icon" %}</span>)、更新 (<span style="color:#b08800">{% octicon "diff-modified" aria-label="Dependency modified icon" %}</span>) 或删除 (<span style="color:#cb2431">{% octicon "diff-removed" aria-label="Dependency removed icon" %}</span>)。

   其他信息包括：

   * 新、更新或删除的依赖项的版本或版本范围。
   * 对于依赖项的特定版本：
      * 依赖项的发布时间。
      * 依赖此软件的项目数量。 此信息取自依赖关系图。 检查依赖项的数量可以帮助您避免意外添加错误的依赖项。
      * 此依赖项使用的许可（如果此信息可用）。 如果要避免在项目中使用具有某些许可的代码，此选项非常有用。

   如果依赖项具有已知漏洞，则警告消息包括：

   * 漏洞的简要说明。
   * 通用漏洞披露 (CVE) 或 {% data variables.product.prodname_security_advisories %} (GHSA) 标识号。 您可以单击此 ID 以查找有关漏洞的更多信息。
   * 漏洞的严重程度。
   * 修复漏洞的依赖项版本。 审查某人的拉取请求时，您可以要求参与者将依赖项更新到修补版本或更新版本。

{% data reusables.repositories.return-to-source-diff %}
