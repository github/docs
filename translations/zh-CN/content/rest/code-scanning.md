---
title: 代码扫描
intro: '{% data variables.product.prodname_code_scanning %} API 可让您从仓库检索和更新 {% data variables.product.prodname_code_scanning %} 警报。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
  - Code scanning
  - REST
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/code-scanning
ms.openlocfilehash: 29e04fddb96212e716f2f54b1b62e99fcff1e4da
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061392'
---
{% data reusables.code-scanning.beta %}

## 关于代码扫描 API

{% data variables.product.prodname_code_scanning %} API 可让您从仓库检索和更新 {% data variables.product.prodname_code_scanning %} 警报。 您可以使用端点为组织中的 {% data variables.product.prodname_code_scanning %} 警报创建自动报告，或上传使用离线 {% data variables.product.prodname_code_scanning %} 工具生成的分析结果。 有关详细信息，请参阅“[查找代码中的安全漏洞和错误](/github/finding-security-vulnerabilities-and-errors-in-your-code)”。

### {% data variables.product.prodname_code_scanning %} 的自定义媒体类型

{% data variables.product.prodname_code_scanning %} REST API 有一种支持的自定义媒体类型。 

    application/sarif+json

可以将此媒体类型用于发送到 `/analyses/{analysis_id}` 终结点的 `GET` 请求。 有关此操作的详细信息，请参阅“[获取存储库的 {% data variables.product.prodname_code_scanning %} 分析](#get-a-code-scanning-analysis-for-a-repository)”。 将此媒体类型用于此操作时，响应包括为指定分析上传的实际数据的子集，而不是使用默认媒体类型时返回的分析摘要。 响应还包括其他数据，如 `github/alertNumber` 和 `github/alertUrl` 属性。 数据的格式为 [SARIF 版本 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html)。

有关详细信息，请参阅“[媒体类型](/rest/overview/media-types)”。
