---
ms.openlocfilehash: b4da828ed2825e0f6aa8ced7a0f6b90067e9bfdb
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: "147717648"
---
При использовании {% data variables.product.prodname_codeql %} для проверки кода подсистема анализа {% data variables.product.prodname_codeql %} создает базу данных из кода и выполняет запросы к нему. Анализ {% data variables.product.prodname_codeql %} использует набор запросов по умолчанию, но в дополнение к ним можно указать дополнительные запросы для выполнения.

{% ifversion code-scanning-exclude-queries-from-analysis %} {% tip %}

Вы также можете указать запросы, которые необходимо исключить из анализа или включить в анализ. Для этого требуется использовать пользовательский файл конфигурации. Дополнительные сведения см. в разделах [Использование пользовательского файла конфигурации](#using-a-custom-configuration-file) и [Исключение конкретных запросов из анализа](#excluding-specific-queries-from-analysis).

{% endtip %} {% endif %}

{% ifversion codeql-packs %} Можно выполнять дополнительные запросы, если они являются частью пакета {% data variables.product.prodname_codeql %} (бета-версия), опубликованного в {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, или пакета {% data variables.product.prodname_ql %}, хранящегося в репозитории. Дополнительную информацию см. в разделе [Сведения о {% data variables.product.prodname_code_scanning %} с {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries).

Параметры, которые можно использовать для указания дополнительных запросов:

- `packs` для установки одного или нескольких пакетов запросов {% data variables.product.prodname_codeql %} (бета-версия) и выполнения набора запросов по умолчанию или запросов для этих пакетов.
- `queries` для указания одного файла _.ql_, каталога, содержащего несколько файлов _.ql_, файла определения набора запросов _.qls_ или любого их сочетания. Дополнительные сведения об определениях набора тестов запросов см. в разделе [Создание наборов запросов {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/).

В одном рабочем процессе можно использовать как `packs`, так и `queries`.
{% else %} Любые дополнительные запросы, которые требуется выполнить, должны принадлежать к пакету {% data variables.product.prodname_ql %} в репозитории. Дополнительную информацию см. в разделе [Сведения о {% data variables.product.prodname_code_scanning %} с {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries).

Можно указать один файл _.ql_, каталог, содержащий несколько файлов _.ql_, файл определения набора запросов _.qls_ или любое их сочетания. Дополнительные сведения об определениях набора тестов запросов см. в разделе [Создание наборов запросов {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/).
{% endif %}

{% ifversion fpt or ghec %}Не рекомендуется ссылаться на наборы запросов непосредственно из репозитория `github/codeql`, например `github/codeql/cpp/ql/src@main`. Такие запросы должны быть перекомпилированы и могут быть несовместимы с текущей активной версией {% data variables.product.prodname_codeql %} в {% data variables.product.prodname_actions %}, что может привести к ошибкам во время анализа.{% endif %}
