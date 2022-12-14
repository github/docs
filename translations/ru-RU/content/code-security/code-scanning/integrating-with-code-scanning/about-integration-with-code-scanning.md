---
title: Сведения об интеграции со сканированием кода
shortTitle: About integration
intro: 'Вы можете выполнить {% data variables.product.prodname_code_scanning %}, а затем отобразить результаты в {% data variables.product.prodname_dotcom %} или настроить веб-перехватчики, которые прослушивают действие {% data variables.product.prodname_code_scanning %} в вашем репозитории.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145116827'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

Вместо выполнения {% data variables.product.prodname_code_scanning %} в {% data variables.product.prodname_dotcom %} можно проводить анализ в другом месте, а затем выгружать результаты. Оповещения о {% data variables.product.prodname_code_scanning %}, выполняемом во внешней среде, отображаются точно так же, как и при {% data variables.product.prodname_code_scanning %}, выполняемом в {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Управление оповещениями {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository).

Если вы используете стороннее средство статического анализа, которое может создавать результаты в виде данных SARIF (Static Analysis Results Interchange Format) 2.1.0, это данные можно загружать в {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Отправка SARIF-файла в GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github).

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

## Интеграция с веб-перехватчиками

Веб-перехватчики {% data variables.product.prodname_code_scanning %} можно использовать для создания или настройки интеграций, таких как [{% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) или [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/), которые подписываются на события {% data variables.product.prodname_code_scanning %} в вашем репозитории. Например, можно создать интеграцию, которая создает проблему в {% data variables.product.product_name %} или отправляет уведомление в Slack при добавлении нового оповещения {% data variables.product.prodname_code_scanning %} в вашем репозитории. Дополнительные сведения см. в статьях [Создание веб-перехватчиков](/developers/webhooks-and-events/creating-webhooks) и [События и полезные данные веб-перехватчиков](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert).

## Дополнительные материалы

* [Сведения о {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)
* [Использование {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} с существующей системой CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system)
* [Поддержка SARIF для {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning)"
