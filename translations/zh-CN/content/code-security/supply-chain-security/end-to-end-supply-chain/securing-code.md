---
title: 保护供应链中的代码的最佳做法
shortTitle: Securing code
allowTitleToDifferFromFilename: true
intro: 有关如何保护供应链中心的指导 - 你编写的代码和所依赖的代码。
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
ms.openlocfilehash: 2ea5e4e2bf8fedfe23d35d32feaf261427708a4e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147406420'
---
## 关于本指南

本指南介绍为提高代码的安全性而做出的影响最大的更改。 每个部分都概述了可以对流程进行的更改，以提高安全性。 影响最大的更改列在前面。

## 风险是什么？

开发过程中的主要风险包括：

- 使用存在安全漏洞的依赖项，攻击者可能利用该安全漏洞。
- 身份验证凭据或令牌泄露，攻击者可利用它们来访问你的资源。
- 在自己的代码中引入攻击者可能会利用的漏洞。

这些风险会使你的资源和项目受到攻击，并且这些风险直接传递给使用你创建的包的任何人。 以下部分介绍如何保护自己和用户免受这些风险的影响。

## 为依赖项创建漏洞管理程序

可以通过为依赖项创建漏洞管理程序来保护所依赖的代码。 概括而言，这应该包括确保执行以下操作的流程：

1. 创建依赖项清单。

2. 了解依赖项中何时存在安全漏洞。

3. 评估该漏洞对代码的影响，并决定要执行的操作。

### 自动生成清单

首先需要创建依赖项的完整清单。 存储库的依赖项关系图显示受支持生态系统的依赖项。 如果签入依赖项或使用其他生态系统，则需要使用第三方工具的数据来补充，或手动列出依赖项。 有关详细信息，请参阅“[关于依赖项关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”。

### 自动检测依赖项中的漏洞

{% data variables.product.prodname_dependabot %} 可以帮助你监视依赖项，并在它们包含已知漏洞时通知你。 {% ifversion fpt or ghec or ghes > 3.2 %}甚至可以启用 {% data variables.product.prodname_dependabot %} 来自动引发将依赖项更新到安全版本的拉取请求。{% endif %} 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)”{% ifversion fpt or ghec or ghes > 3.2 %}和“[关于 Dependabot 安全更新](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)”{% endif %}。

### 评估易受攻击的依赖项的风险

当发现使用的是易受攻击的依赖项（例如库或框架）时，必须评估项目的暴露级别并确定要执行的操作。 漏洞报告通常带有严重性分数，以显示其影响的严重程度。 严重性分数是一个有用的指南，但无法告诉你漏洞对代码的全部影响。

若要评估漏洞对代码的影响，还需要考虑如何使用库并确定该库实际对系统构成的风险。 也许漏洞是你不使用的功能的一部分，你可以更新受影响的库并继续使用正常的发布周期。 或者，你的代码可能暴露在风险中，你需要更新受影响的库并立即交付更新的生成。 此决定取决于你在系统中使用库的方式，并且只有你知晓如何做出这个决定。

## 保护通信令牌

代码通常需要通过网络与其他系统通信，并需要机密（如密码或 API 密钥）进行身份验证。 系统需要访问这些机密才能运行，但最佳做法是不要将它们包含在源代码中。 这对许多用户有权访问的存储库尤其重要，{% ifversion not ghae %}对公共存储库至关重要{% endif %}。

### 自动检测提交到存储库的机密

{% note %}

注意：{% data reusables.gated-features.secret-scanning-partner %}

{% endnote %}

{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %} 与许多提供商合作，自动检测何时将机密提交到公共存储库或存储在公共存储库中，并将通知提供商，以便他们可以采取适当措施来确保帐户保持安全。 有关详细信息，请参阅“[关于合作伙伴模式的 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)”。
{% endif %}

{% ifversion fpt %} {% data reusables.secret-scanning.fpt-GHAS-scans %} {% elsif ghec %} 如果你的组织使用 {% data variables.product.prodname_GH_advanced_security %}，则可以对组织拥有的任何存储库启用 {% data variables.product.prodname_secret_scanning_GHAS %}。 还可以定义自定义模式来检测存储库、组织或企业级的其他机密。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advacned-security)”。
{% else %} 可以将 {% data variables.product.prodname_secret_scanning %} 配置为检查许多服务提供商颁发的机密，并在检测到任何机密时通知你。 还可以定义自定义模式来检测存储库、组织或企业级的其他机密。 有关详细信息，请参阅“[关于机密扫描](/code-security/secret-scanning/about-secret-scanning)”和“[机密扫描模式](/code-security/secret-scanning/secret-scanning-patterns)”。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 or ghae %}
### 保护 {% data variables.product.product_name %} 中使用的机密存储
{% endif %}

{% ifversion fpt or ghec %} 除了代码，你可能还需要在其他地方使用机密。 例如，允许 {% data variables.product.prodname_actions %} 工作流、{% data variables.product.prodname_dependabot %} 或 {% data variables.product.prodname_codespaces %} 开发环境与其他系统通信。 有关如何安全地存储和使用机密的详细信息，请参阅“[操作中的加密机密](/actions/security-guides/encrypted-secrets)”、“[管理 Dependabot 的加密机密](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”和“[管理 Codespaces 的加密机密](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”。
{% endif %}

{% ifversion ghes > 3.2 or ghae %} 除了代码，你可能还需要在其他地方使用机密。 例如，允许 {% data variables.product.prodname_actions %} 工作流{% ifversion ghes %}或 {% data variables.product.prodname_dependabot %}{% endif %} 与其他系统通信。 有关如何安全地存储和使用机密的详细信息，请参阅“[操作中的加密机密](/actions/security-guides/encrypted-secrets){% ifversion ghes %}”和“[管理 Dependabot 的加密机密](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”{% else %}。{% endif %} {% endif %}

## 将易受攻击的编码模式排除在存储库之外

{% note %}

注意：{% data reusables.gated-features.code-scanning %}

{% endnote %}

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### 创建拉取请求评审过程

可以通过确保在合并拉取请求之前对其进行评审和测试，提高代码的质量和安全性。 {% data variables.product.prodname_dotcom %} 有许多可用于控制评审和合并过程的功能。 若要开始，请参阅“[关于受保护的分支](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)”。

### 扫描代码中易受攻击的模式

审阅者通常很难在没有辅助的情况下发现不安全的代码模式。 除了扫描代码中的机密之外，还可以检查它是否有与安全漏洞关联的模式。 例如，一个非内存安全的函数，或者无法转义用户输入，可能会导致注入漏洞。 {% data variables.product.prodname_dotcom %} 提供了几种不同的方法来处理扫描代码的方式和时间。 若要开始，请参阅“[关于代码扫描](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)”。

## 后续步骤

- [保护端到端供应链](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)

- [确保帐户安全的最佳做法](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)

- [保护生成系统的最佳做法](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)
