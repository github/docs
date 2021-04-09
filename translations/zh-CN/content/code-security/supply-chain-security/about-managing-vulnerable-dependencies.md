---
title: 关于管理有漏洞依赖项
intro: '{% data variables.product.prodname_dotcom %} 有助于避免使用包含已知漏洞的第三方软件。'
redirect_from:
  - /github/managing-security-vulnerabilities/about-managing-vulnerable-dependencies
versions:
  free-pro-team: '*'
topics:
  - 安全
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Managing vulnerabilities in your project’s dependencies ".-->

{% data variables.product.prodname_dotcom %} 提供以下工具来删除和避免有漏洞依赖项。

#### 依赖关系图
依赖项图是存储在仓库中的清单和锁定文件的摘要。 它显示您的代码库所依赖的生态系统和软件包（其依赖项）以及依赖于您的项目的仓库和包（其从属项）。 依赖关系图中的信息用于依赖项审查和 {% data variables.product.prodname_dependabot %}。 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。

#### 依赖项审查
通过检查拉取请求的依赖项审查，可以避免将依赖项的漏洞引入到代码库中。 如果拉取请求添加了有漏洞依赖项，或者将依赖项更改为有漏洞的版本，这将在依赖项审查中高亮显示。 您可以在合并拉取请求之前将依赖项更改为修补版本。 更多信息请参阅“[关于依赖项审查](/code-security/supply-chain-security/about-dependency-review)”。

#### {% data variables.product.prodname_dependabot_alerts %}
检测到仓库中存在有漏洞依赖项时，{% data variables.product.prodname_dotcom %} 可创建 {% data variables.product.prodname_dependabot_alerts %}。 警报显示在仓库的 Security（安全）选项卡上。 该警报包括指向项目中受影响的文件的链接，以及有关修复的版本的信息。 {% data variables.product.prodname_dotcom %} 还根据仓库维护员的通知首选项通知他们。 更多信息请参阅“[关于易受攻击的依赖项的警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。

#### {% data variables.product.prodname_dependabot_security_updates %}
当 {% data variables.product.prodname_dotcom %} 针对仓库中的有漏洞依赖项生成 {% data variables.product.prodname_dependabot %} 警报时，{% data variables.product.prodname_dependabot %} 可以自动尝试为您修复它。 {% data variables.product.prodname_dependabot_security_updates %} 是自动生成的拉取请求，用于将有漏洞依赖项更新到修复版本。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”。


#### {% data variables.product.prodname_dependabot_version_updates %}
启用 {% data variables.product.prodname_dependabot_version_updates %} 帮助您维护依赖项。 有了 {% data variables.product.prodname_dependabot_version_updates %}，每当 {% data variables.product.prodname_dotcom  %} 发现过时的依赖项，它就会提出拉取请求，以将清单更新到依赖项的最新版本。 而 {% data variables.product.prodname_dependabot_security_updates %} 只是提出拉取请求以修复有漏洞依赖项。 更多信息请参阅“[关于 Dependabot 版本更新](/github/administering-a-repository/about-dependabot-version-updates)”。
