---
title: О проверке кода с помощью CodeQL
shortTitle: Code scanning with CodeQL
intro: 'Для выявления уязвимостей и ошибок в коде вы можете использовать {% data variables.product.prodname_codeql %}. Результаты отображаются как оповещения {% data variables.product.prodname_code_scanning %} в {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
ms.openlocfilehash: 41531627f73e7878cfa5667560b61cd4e21d20b7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147052179'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Сведения о {% data variables.product.prodname_code_scanning %} с {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.about-codeql-analysis %}

Существуют два основных способа использования анализа {% data variables.product.prodname_codeql %} для {% data variables.product.prodname_code_scanning %}:

- Добавление рабочего процесса {% data variables.product.prodname_codeql %} в репозиторий. Используется [github/codeql-action](https://github.com/github/codeql-action/) для запуска {% data variables.product.prodname_codeql_cli %}. Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions).
- Запустите {% data variables.product.prodname_codeql %} CLI непосредственно во внешней системе CI и передайте результаты в {% data variables.product.prodname_dotcom %}. Дополнительную информацию см. в разделе [Сведения о проверке кода {% data variables.product.prodname_codeql %} в системе CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system).

{% ifversion ghes or ghae %}

{% note %} В {% data variables.product.product_name %} {% ifversion ghes %}{{ allVersions[currentVersion].currentRelease }} {% endif %} действие {% data variables.product.prodname_codeql %} по умолчанию использует {% data variables.product.prodname_codeql_cli %} версии {% data variables.product.codeql_cli_ghes_recommended_version %}. Мы рекомендуем использовать такую же версию {% data variables.product.prodname_codeql_cli %}, если вы выполняете анализ во внешней системе CI.
{% endnote %}

{% endif %}


## Сведения о {% data variables.product.prodname_codeql %}

{% data variables.product.prodname_codeql %} обрабатывает код как данные, что позволяет находить потенциальные уязвимости в коде с большей уверенностью, чем при использовании традиционных статических анализаторов.

1. Создается база данных {% data variables.product.prodname_codeql %} для представления базы кода.
2. Затем выполняются запросы {% data variables.product.prodname_codeql %} к этой базе данных для выявления проблем в базе кода.
3. Результаты запроса отображаются как оповещения {% data variables.product.prodname_code_scanning %} в {% data variables.product.product_name %} при использовании {% data variables.product.prodname_codeql %} с {% data variables.product.prodname_code_scanning %}.

{% data variables.product.prodname_codeql %} поддерживает как компилируемые, так и интерпретируемые языки и может находить уязвимости и ошибки в коде, написанном на поддерживаемых языках.

{% data reusables.code-scanning.codeql-languages-bullets %}

## Сведения о запросах {% data variables.product.prodname_codeql %}

Эксперты по {% data variables.product.company_short %}, исследователи в области безопасности и участники сообщества пишут и поддерживают запросы по умолчанию {% data variables.product.prodname_codeql %}, используемые для {% data variables.product.prodname_code_scanning %}. Запросы регулярно обновляются для улучшения анализа и уменьшения количества ложноположительных результатов. Запросы имеют открытый код, поэтому можно просматривать и добавлять что-то к ним в репозитории [`github/codeql`](https://github.com/github/codeql). Дополнительные сведения см. в разделе [{% data variables.product.prodname_codeql %}](https://codeql.github.com/) на веб-сайте {% data variables.product.prodname_codeql %}. Вы также можете написать собственные запросы. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_codeql %} queries](https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/) в документации {% data variables.product.prodname_codeql %}.

Можно выполнять дополнительные запросы в рамках анализа проверки кода. 

{%- ifversion codeql-packs %} Эти запросы должны принадлежать к опубликованному пакету запросов {% data variables.product.prodname_codeql %} (бета-версия) или пакету QL в репозитории. Пакеты {% data variables.product.prodname_codeql %} (бета-версия) предоставляют следующие преимущества по сравнению с традиционными пакетами QL:

- При публикации пакета запросов {% data variables.product.prodname_codeql %} (бета-версия) в {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} все транзитивные зависимости, необходимые для запросов, и кэш компиляции включаются в пакет. Это повышает производительность и гарантирует, что выполнение запросов в пакете дает одинаковые результаты при каждом обновлении до новой версии пакета или CLI. 
- Пакеты QL не включают транзитивные зависимости, поэтому запросы в пакете могут зависеть только от стандартных библиотек (то есть библиотек, на которые ссылается инструкция `import LANGUAGE` в запросе) или библиотек в том же пакете QL, что и запрос.

Дополнительную информацию см. в разделе [Сведения о пакетах {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/about-codeql-packs/) и [Сведения о пакетах {% data variables.product.prodname_ql %}](https://codeql.github.com/docs/codeql-cli/about-ql-packs/) в документации {% data variables.product.prodname_codeql %}.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

{%- else %} Запросы, которые требуется выполнить, должны принадлежать к пакету QL в репозитории. Запросы должны зависеть только от стандартных библиотек (то есть библиотек, на которые ссылается инструкция `import LANGUAGE` в запросе) или библиотек в том же пакете QL, что и запрос. Дополнительную информацию см. в разделе [Сведения о пакетах {% data variables.product.prodname_ql %}](https://codeql.github.com/docs/codeql-cli/about-ql-packs/).
{% endif %}
