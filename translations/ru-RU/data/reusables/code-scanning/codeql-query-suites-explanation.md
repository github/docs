---
ms.openlocfilehash: 6581cf0b9a8c740d04e96d3049ff51e89f570666
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180874"
---
Следующие наборы запросов встроены в {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} и доступны для использования.

{% data reusables.code-scanning.codeql-query-suites %}

При указании набора запросов обработчик анализа {% data variables.product.prodname_codeql %} будет выполнять набор запросов по умолчанию и все дополнительные запросы, определенные в дополнительном наборе запросов. {% ifversion codeql-ml-queries %}Наборы запросов `security-extended` и `security-and-quality` для JavaScript содержат экспериментальные запросы. Дополнительную информацию см. в разделе [Сведения об оповещениях {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts).{% endif %}
