---
title: 保护供应链中代码的最佳实践
shortTitle: 保护代码
allowTitleToDifferFromFilename: true
intro: 有关如何保护供应链中心（即您编写的代码和所依赖的代码）的指南。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Advanced Security
  - Secret scanning
---

## 关于本指南

本指南介绍为提高代码安全性而可以进行的影响最大的更改。 每个部分都概述了为提高安全性而可以对流程进行的更改。 影响最大的更改列在最前面。

## 风险是什么？

开发过程中的主要风险包括：

- 将依赖项与攻击者可能利用的安全漏洞结合使用。
- 泄露身份验证凭据或攻击者可用于访问资源的令牌。
- 在您自己的代码中引入攻击者可能利用的漏洞。

这些风险会打开您的资源和项目进行攻击，这些风险会直接传递给使用您创建的包的任何人。 以下各节说明如何保护自己和用户免受这些风险的影响。

## 为依赖项创建漏洞管理计划

您可以通过为依赖项创建漏洞管理计划来保护所依赖的代码。 在较高级别，这应该包括确保：

1. 创建依赖项的清单。

2. 在依赖项中存在安全漏洞时及时获悉。

3. 评估该漏洞对代码的影响，并决定采取什么措施。

### 自动生成清单

作为第一步，您要创建依赖项的完全清单。 存储库的依赖关系图显示受支持生态系统的依赖关系。 如果您签入依赖项或使用其他生态系统，则需要使用来自第三方工具的数据或手动列出依赖项来补充这一点。 更多信息请参阅“[关于依赖关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”。

### 自动检测依赖项中的漏洞

{% data variables.product.prodname_dependabot %} 可以监控依赖项并在依赖项中包含已知漏洞时通知您。 {% ifversion fpt or ghec or ghes > 3.2 %}您甚至可以启用 {% data variables.product.prodname_dependabot %} 以自动引发将依赖项更新为安全版本的拉取请求。{% endif %} 更多信息请参阅[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts){% ifversion fpt or ghec or ghes > 3.2 %} 和[关于 Dependabot 安全更新](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates){% endif %}。

### 评估易有漏洞依赖项的风险暴露情况

当您发现您在使用有漏洞的依赖项（例如，库或框架）时，您必须评估项目的暴露级别并确定要采取的操作。 通常使用严重性评分来报告漏洞，以显示其影响的严重程度。 严重性分数是一个有用的指导，但无法告诉您漏洞对代码的全部影响。

要评估漏洞对代码的影响，还需要考虑如何使用库，并确定这实际上会给系统带来多大的风险。 也许该漏洞是您不使用的功能的一部分，您可以更新受影响的库并继续正常的发布周期。 或者，您的代码可能严重暴露于风险中，您需要更新受影响的库并立即发布更新的版本。 此决定取决于您在系统中如何使用库，并且只有您才有知识才能做出的决定。

## 保护您的通信令牌

代码通常需要通过网络与其他系统通信，并且需要机密（如密码或 API 密钥）进行身份验证。 系统需要访问这些机密才能运行，但最佳做法是不将它们包含在源代码中。 这对于许多人可能有权访问的存储库尤其重要{% ifversion not ghae %} 对于公共存储库{% endif %} 至关重要。

### 自动检测提交到存储库的机密

{% note %}

**注意：**{% data reusables.gated-features.secret-scanning-partner %}

{% endnote %}

{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
{% data variables.product.prodname_dotcom %} 与许多提供商合作，以自动检测机密何时提交或存储在您的公共存储库中，并将通知提供商，以便他们采取适当的措施来确保您的帐户保持安全。 更多信息请参阅“[关于合作伙伴模式的 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)”。
{% endif %}

{% ifversion fpt %}
{% data reusables.secret-scanning.fpt-GHAS-scans %}
{% elsif ghec %}
如果您的组织使用 {% data variables.product.prodname_GH_advanced_security %}，则可以在组织拥有的任何存储库上启用 {% data variables.product.prodname_secret_scanning_GHAS %}。 您还可以定义自定义模式，以在存储库、组织或企业级别检测其他机密。 更多信息请参阅“[关于 {% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advacned-security)”。
{% else %}
您可以配置 {% data variables.product.prodname_secret_scanning %} 以检查许多服务提供商颁发的机密，并在检测到任何提供程序时通知您。 您还可以定义自定义模式，以在存储库、组织或企业级别检测其他机密。 更多信息请参阅“[关于机密扫描](/code-security/secret-scanning/about-secret-scanning)”和“[机密扫描模式](/code-security/secret-scanning/secret-scanning-patterns)”。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 or ghae %}
### 安全存储您在 {% data variables.product.product_name %} 中使用的机密
{% endif %}

{% ifversion fpt or ghec %}
除了代码，您可能还需要在其他地方使用机密。 例如，允许 {% data variables.product.prodname_actions %} 工作流程、{% data variables.product.prodname_dependabot %} 或 {% data variables.product.prodname_codespaces %} 开发环境与其他系统进行通信。 有关如何安全地存储和使用机密的详细信息，请参阅“[Actions 中的加密机密](/actions/security-guides/encrypted-secrets)”、“[管理 Dependabot 的加密机密](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”和“[管理代码空间的加密机密](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”。
{% endif %}

{% ifversion ghes > 3.2 or ghae %}
除了代码，您可能还需要在其他地方使用机密。 例如，允许 {% data variables.product.prodname_actions %} 工作流程、{% ifversion ghes %} 或 {% data variables.product.prodname_dependabot %}{% endif %} 与其他系统进行通信。 有关如何安全地存储和使用机密的详细信息，请参阅“[Actions 中的加密机密](/actions/security-guides/encrypted-secrets){% ifversion ghes %}”和“[管理 Dependabot 的加密机密](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”。{% else %}”。{% endif %}
{% endif %}

## 将有漏洞的编码模式排除在存储库之外

{% note %}

**注意：**{% data reusables.gated-features.code-scanning %}

{% endnote %}

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### 创建拉取请求审核流程

通过确保在合并之前对所有拉取请求进行审查和测试，可以提高代码的质量和安全性。 {% data variables.product.prodname_dotcom %} 具有许多可用于控制审查和合并过程的功能。 要开始，请参阅“[关于受保护分支](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)”。

### 扫描代码以查找有漏洞的模式

不安全的代码模式通常很难让审查者独立发现。 除了扫描代码中的机密之外，还可以检查代码中是否存在与安全漏洞关联的模式。 例如，非内存安全函数，或者无法转义用户输入，可能导致注入漏洞。 {% data variables.product.prodname_dotcom %} 提供了几种不同的方法来处理如何以及何时扫描代码。 要开始，请参阅“[关于代码扫描](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)”。

## 后续步骤

- “[保护您的端到端供应链](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)”

- “[保护帐户的最佳实践](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)”

- “[保护构建系统的最佳实践](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)”
