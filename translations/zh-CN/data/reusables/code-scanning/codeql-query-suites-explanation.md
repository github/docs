---
ms.openlocfilehash: 6581cf0b9a8c740d04e96d3049ff51e89f570666
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180869"
---
以下查询套件内置于 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}，可供使用。

{% data reusables.code-scanning.codeql-query-suites %}

指定查询套件时，{% data variables.product.prodname_codeql %} 分析引擎将运行默认查询集和其他查询套件中定义的任何其他查询。 {% ifversion codeql-ml-queries %}JavaScript 的 `security-extended` 和 `security-and-quality` 查询套件包含实验性查询。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_code_scanning %} 警报](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)”。{% endif %}
