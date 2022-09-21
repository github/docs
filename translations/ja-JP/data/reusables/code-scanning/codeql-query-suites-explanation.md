---
ms.openlocfilehash: 6581cf0b9a8c740d04e96d3049ff51e89f570666
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180872"
---
以下のクエリスイートは{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}に組み込まれており、利用可能です。

{% data reusables.code-scanning.codeql-query-suites %}

クエリ スイートを指定すると、{% data variables.product.prodname_codeql %} の分析エンジンでは、既定の一連のクエリと、追加のクエリ スイートで定義されている追加クエリが実行されます。 {% ifversion codeql-ml-queries %}JavaScript の `security-extended` クエリ スイートと `security-and-quality` クエリ スイートには、試験的なクエリが含まれています。 詳細については、「[{% data variables.product.prodname_code_scanning %} アラートについて](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)」を参照してください。{% endif %}
