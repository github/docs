---
title: 关于与代码扫描的集成
shortTitle: About integration
intro: '您可以在外部执行 {% data variables.product.prodname_code_scanning %}，然后在 {% data variables.product.prodname_dotcom %} 中显示结果，或者设置侦听仓库中 {% data variables.product.prodname_code_scanning %} 活动的 web 挂钩。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning
  - /code-security/secure-coding/about-integration-with-code-scanning
  - /code-security/secure-coding/integrating-with-code-scanning/about-integration-with-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - Webhooks
  - Integration
ms.openlocfilehash: b12f5146a90cae0ed1bd38d452e43eb611232e72
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099099'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

作为在 {% data variables.product.prodname_dotcom %} 中运行 {% data variables.product.prodname_code_scanning %} 的替代方法，您可以在其他地方执行分析，然后上传结果。 在外部运行的 {% data variables.product.prodname_code_scanning %} 的警报显示方式与在 {% data variables.product.prodname_dotcom %} 内运行的 {% data variables.product.prodname_code_scanning %} 的警报显示方式相同。 有关详细信息，请参阅“[管理存储库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”。

如果使用可生成结果为静态分析结果交换格式 (SARIF) 2.1.0 数据的第三方静态分析工具，您可以将其上传到 {% data variables.product.prodname_dotcom %}。 有关详细信息，请参阅“[将 SARIF 文件上传到 GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)”。

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

## 与 web 挂钩集成

可以使用 {% data variables.product.prodname_code_scanning %} Webhook 构建或设置集成，例如 [{% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) 或 [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/)，以订阅存储库中的 {% data variables.product.prodname_code_scanning %} 事件。 例如，可以构建在 {% data variables.product.product_name %} 上创建问题，或者在存储库中新增 {% data variables.product.prodname_code_scanning %} 警报时向你发送 Slack 通知的集成。 有关详细信息，请参阅“[创建 Webhook](/developers/webhooks-and-events/creating-webhooks)”和“[Webhook 事件和有效负载](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)”。

## 延伸阅读

* [关于 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)
* [将 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 与现有 CI 系统配合使用](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system)
* [{% data variables.product.prodname_code_scanning %} 的 SARIF 支持](/code-security/secure-coding/sarif-support-for-code-scanning)
