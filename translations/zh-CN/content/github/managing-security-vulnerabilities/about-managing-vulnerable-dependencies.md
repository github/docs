---
title: 关于管理有漏洞依赖项
intro: '{% data variables.product.prodname_dotcom %} 有助于避免使用包含已知漏洞的第三方软件。'
versions:
  free-pro-team: '*'
---

{% data variables.product.prodname_dotcom %} 提供以下工具来删除和避免有漏洞依赖项。

#### 依赖关系图
依赖项图是存储在仓库中的清单和锁定文件的摘要。 It shows you the ecosystems and packages your codebase depends on (its dependencies) and the repositories and packages that depend on your project (its dependents). The information in the dependency graph is used by dependency review and {% data variables.product.prodname_dependabot %}. 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。

#### Dependency review
By checking the dependency reviews on pull requests you can avoid introducing vulnerabilities from dependencies into your codebase. If the pull requests adds a vulnerable dependency, or changes a dependency to a vulnerable version, this is highlighted in the dependency review. You can change the dependency to a patched version before merging the pull request. 更多信息请参阅“[审查拉取请求中的依赖项更改](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)”。

#### {% data variables.product.prodname_dependabot_alerts %}
{% data variables.product.prodname_dotcom %} can create {% data variables.product.prodname_dependabot_alerts %} when it detects vulnerable dependencies in your repository. The alert is displayed on the Security tab for the repository. 该警报包括指向项目中受影响的文件的链接，以及有关修复的版本的信息。 {% data variables.product.prodname_dotcom %} also notifies the maintainers of the repository, according to their notification preferences. 更多信息请参阅“[关于易受攻击的依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。

#### {% data variables.product.prodname_dependabot_security_updates %}
When {% data variables.product.prodname_dotcom %} generates a {% data variables.product.prodname_dependabot %} alert for a vulnerable dependency in your repository, {% data variables.product.prodname_dependabot %} can automatically try to fix it for you. {% data variables.product.prodname_dependabot_security_updates %} are automatically generated pull requests that update a vulnerable dependency to a fixed version. 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”。


#### {% data variables.product.prodname_dependabot_version_updates %}
Enabling {% data variables.product.prodname_dependabot_version_updates %} takes the effort out of maintaining your dependencies. With {% data variables.product.prodname_dependabot_version_updates %}, whenever {% data variables.product.prodname_dotcom  %} identifies an outdated dependency, it raises a pull request to update the manifest to the latest version of the dependency. By contrast, {% data variables.product.prodname_dependabot_security_updates %} only raises pull requests to fix vulnerable dependencies. For more information, see "[About Dependabot version updates](/github/administering-a-repository/about-dependabot-version-updates)."
