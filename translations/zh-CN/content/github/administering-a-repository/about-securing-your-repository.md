---
title: 关于保护仓库
intro: '{% data variables.product.product_name %} 提供了许多可帮助您保护仓库安全的方法。'
versions:
  free-pro-team: '*'
---

### 安全地设置仓库

保护仓库的第一步是设置谁可以查看和修改您的代码。 更多信息请参阅“[管理仓库设置](/github/administering-a-repository/managing-repository-settings)”。

### 保护您的仓库

{% data variables.product.prodname_dotcom %} 有越来越多的安全功能，可帮助您保护代码安全。 您可以在仓库的 **Security（安全）**选项卡上找到这些功能。

- **安全策略**

  让人们能够轻松地秘密报告他们在仓库中发现的安全漏洞。 更多信息请参阅“[添加安全政策到仓库](/github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository)”。

- **安全通告**

  私下讨论并修复仓库代码中的安全漏洞。 然后，您可以发布安全通告，提醒您的社区注意漏洞并鼓励他们升级。 更多信息请参阅“[关于 {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)”。

- **{% data variables.product.prodname_dependabot_alerts %} 和安全更新**

  查看有关已知包含安全漏洞的依赖项的警报，并选择是否自动生成拉取请求以更新这些依赖项。 更多信息请参阅“[关于漏洞依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”和“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”。

- **{% data variables.product.prodname_dependabot %} 版本更新**

  使用 {% data variables.product.prodname_dependabot %} 自动提出拉取请求以保持依赖项的更新。 这有助于减少您暴露于旧版本依赖项。 如果发现安全漏洞，使用更新后的版本就更容易打补丁，{% data variables.product.prodname_dependabot_security_updates %} 也更容易成功地提出拉取请求以升级有漏洞的依赖项。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)”。

- **{% data variables.product.prodname_code_scanning_capc %} 警报**

  自动检测新代码或修改代码中的安全漏洞和编码错误。 潜在的问题被高亮显示，并附有详细信息，允许您在将代码合并到默认分支之前修复它。 更多信息请参阅“[关于代码扫描](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)”。

- **检测到的密钥**

  查看 {% data variables.product.prodname_dotcom %} 在您的代码中找到的任何密钥。 应将已检入仓库的令牌或凭据视为已泄露。 更多信息请参阅“[关于密钥扫描](/github/administering-a-repository/about-secret-scanning)”。

### 探索依赖项
{% data variables.product.prodname_dotcom %} 的依赖项图允许您探索：

* 您的仓库依赖的生态系统和包
* 依赖于您的仓库的仓库和包

必须先启用依赖项图，然后 {% data variables.product.prodname_dotcom %} 才能针对有安全漏洞的依赖项生成 {% data variables.product.prodname_dependabot_alerts %}。

您可以在仓库的 **Insights（洞察）**选项卡上找到依赖项图。 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。
