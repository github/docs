---
title: 关于代码扫描
intro: '您可以使用 {% data variables.product.prodname_code_scanning %} 在 {% data variables.product.prodname_dotcom %} 上查找项目中的安全漏洞和代码错误。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/about-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning
  - /code-security/secure-coding/about-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
ms.openlocfilehash: 0bf49aa695e9e5a60cef7eb78c6e44f5ecd4ece5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145084417'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## 关于 {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

您可以使用 {% data variables.product.prodname_code_scanning %} 来查找代码中现有的问题，并且对其进行分类和确定修复的优先级。 {% data variables.product.prodname_code_scanning_capc %} 还可防止开发者引入新问题。 你可安排在特定日期和时间进行扫描，或在存储库中发生特定事件（例如推送）时触发扫描。

如果 {% data variables.product.prodname_code_scanning %} 发现您的代码中可能存在漏洞或错误，{% data variables.product.prodname_dotcom %} 会在仓库中显示警报。 在修复触发警报的代码之后，{% data variables.product.prodname_dotcom %} 将关闭警报。 有关详细信息，请参阅“[管理存储库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”。

要监控您的仓库或组织的 {% data variables.product.prodname_code_scanning %} 结果，您可以使用 web 挂钩和 {% data variables.product.prodname_code_scanning %} API。 有关用于 {% data variables.product.prodname_code_scanning %} 的 Webhook 的信息，请参阅“[Webhook 事件和有效负载](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)”。 有关 API 终结点的信息，请参阅“[{% data variables.product.prodname_code_scanning_capc %}](/rest/reference/code-scanning)”。 

若要开始使用 {% data variables.product.prodname_code_scanning %}，请参阅“[为存储库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”。

{% ifversion fpt or ghec %}

## 关于 {% data variables.product.prodname_code_scanning %} 的计费

{% data variables.product.prodname_code_scanning_capc %} 使用 {% data variables.product.prodname_actions %}，{% data variables.product.prodname_code_scanning %} 工作流程的每次运行将耗用 {% data variables.product.prodname_actions %} 的分钟数。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”。

{% endif %}

## 关于 {% data variables.product.prodname_code_scanning %} 的工具

您可以将 {% data variables.product.prodname_code_scanning %} 设置为使用由 {% data variables.product.company_short%} 或第三方 {% data variables.product.prodname_code_scanning %} 工具维护的 {% data variables.product.prodname_codeql %} 产品。 

### 关于 {% data variables.product.prodname_codeql %} 分析

{% data reusables.code-scanning.about-codeql-analysis %} 有关 {% data variables.product.prodname_codeql %} 的详细信息，请参阅“[关于使用 CodeQL 进行代码扫描](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)”。

### 关于第三方 {% data variables.product.prodname_code_scanning %} 工具

{% data reusables.code-scanning.interoperable-with-tools-that-output-sarif %}

您可以使用操作在 {% data variables.product.product_name %} 内或者在外部 CI 系统内运行第三方分析工具。 有关详细信息，请参阅“[为存储库设置代码扫描](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”或“[将 SARIF 文件上传到 GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)”。
