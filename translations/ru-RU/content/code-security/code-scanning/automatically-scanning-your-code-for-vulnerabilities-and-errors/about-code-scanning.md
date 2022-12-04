---
title: Сведения о проверке кода
intro: 'Вы можете использовать {% data variables.product.prodname_code_scanning %}, чтобы найти уязвимости системы безопасности и ошибки в коде проекта в {% data variables.product.prodname_dotcom %}.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145087735'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Сведения о {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

Вы можете использовать {% data variables.product.prodname_code_scanning %} для поиска, рассмотрения и ранжирования проблем, существующих в вашем коде. {% data variables.product.prodname_code_scanning_capc %} также запрещает разработчикам вводить новые проблемы. Вы можете запланировать сканирование на определенные дни и время или запускать его при возникновении определенного события в репозитории, например принудительной отправки.

Если {% data variables.product.prodname_code_scanning %} обнаруживает в вашем коде потенциальную уязвимость или ошибку, {% data variables.product.prodname_dotcom %} отображает оповещение в репозитории. Как только вы внесете исправления в соответствующий код, {% data variables.product.prodname_dotcom %} закроет оповещение. Дополнительные сведения см. в статье [Управление оповещениями {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository).

Чтобы отслеживать результаты из {% data variables.product.prodname_code_scanning %} в репозиториях или организации, можно использовать веб-перехватчики и API {% data variables.product.prodname_code_scanning %}. Сведения о веб-перехватчиках для {% data variables.product.prodname_code_scanning %} см. в статье [События и полезные данные веб-перехватчиков](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert). Дополнительные сведения о конечных точках API см. в статье [{% data variables.product.prodname_code_scanning_capc %}](/rest/reference/code-scanning). 

Инструкции по началу работы с {% data variables.product.prodname_code_scanning %} см. в статье [Настройка {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/setting-up-code-scanning-for-a-repository).

{% ifversion fpt or ghec %}

## Сведения о выставлении счетов за {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_code_scanning_capc %} использует {% data variables.product.prodname_actions %}, а каждый запуск рабочего процесса {% data variables.product.prodname_code_scanning %} использует минуты для {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье [Сведения о выставлении счетов за {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions).

{% endif %}

## Сведения о средствах для {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_code_scanning %} можно настроить на использование продукта {% data variables.product.prodname_codeql %}, который поддерживается {% data variables.product.company_short%} или сторонним средством {% data variables.product.prodname_code_scanning %}. 

### Сведения об анализе {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.about-codeql-analysis %} Дополнительные сведения о {% data variables.product.prodname_codeql %} см. в статье [О проверке кода с помощью CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql).

### О сторонних средствах для {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.interoperable-with-tools-that-output-sarif %}

Сторонние средства анализа можно запускать в {% data variables.product.product_name %}, используя действия, и во внешней системе CI. Дополнительные сведения см. в статье [Настройка проверки кода для репозитория](/code-security/secure-coding/setting-up-code-scanning-for-a-repository) или [Отправка SARIF-файла в GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github).
