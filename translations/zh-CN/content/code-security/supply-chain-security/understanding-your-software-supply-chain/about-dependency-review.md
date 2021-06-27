---
title: 关于依赖项审查
intro: 依赖项审查可让您在将有漏洞的依赖项引入您的环境之前找到它们，并提供关于许可证、依赖项和依赖项存在时间的信息。
versions:
  free-pro-team: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
redirect_from:
  - /code-security/supply-chain-security/about-dependency-review
---

{% note %}

**注意：**依赖项审查目前处于测试阶段，可能会更改。

{% endnote %}

### 关于依赖项审查

{% data reusables.dependency-review.feature-overview %}

如果拉取请求针对仓库的默认分支并且包含对包清单或锁定文件的更改，您可以显示依赖项审查以查看更改的内容。 依赖项审查包括对锁定文件中间接依赖项的更改详情，并告诉您任何已添加或更新的依赖项是否包含已知漏洞。

依赖项审查适用于：

* 所有公共仓库。
* 由具有 {% data variables.product.prodname_advanced_security %} 许可的组织所拥有并且启用了依赖关系图的私有仓库。 更多信息请参阅“[探索仓库的依赖项](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”。

有时，您可能只想更新清单中一个依赖项的版本并生成拉取请求。 但是，如果此直接依赖项的更新版本也更新了依赖项，则拉取请求的更改可能超过您的预期。 每个清单和锁定文件的依赖项审查提供了一种简单的方法来查看更改的内容，以及任何新的依赖项版本是否包含已知的漏洞。

通过检查拉取请求中的依赖项审查并更改被标记为有漏洞的任何依赖项，可以避免将漏洞添加到项目中。 有关依赖项审查工作的更多信息，请参阅“[审查拉取请求中的依赖项更改](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)”。

{% data variables.product.prodname_dependabot_alerts %} 将会查找依赖项中存在的漏洞，但避免引入潜在问题比在以后修复它们要好得多。 有关 {% data variables.product.prodname_dependabot_alerts %} 的更多信息，请参阅“[关于有漏洞依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)”。

依赖项审查支持与依赖关系图相同的语言和包管理生态系统。 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)”。
