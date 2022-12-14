---
title: Просмотр журналов проверки кода
intro: 'Выходные данные, созданные при анализе {% данных variables.product.prodname_code_scanning %}, можно просмотреть в {% данных variables.location.product_location %}.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can view the {% data variables.product.prodname_code_scanning %} logs for that repository.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
shortTitle: View code scanning logs
ms.openlocfilehash: f89d57c2ddd8c405eb95645476f470df70a0f5a8
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098804'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Сведения о настройке {% data variables.product.prodname_code_scanning %} 

Можно использовать различные средства для настройки {% data variables.product.prodname_code_scanning %} в репозитории. Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#options-for-setting-up-code-scanning).

Доступные вам журнал и сведения диагностики зависят от способа, который вы использовали для {% data variables.product.prodname_code_scanning %} в своем репозитории. Можно проверить тип {% data variables.product.prodname_code_scanning %}, который используется, на вкладке **Безопасность** репозитория, с помощью раскрывающегося меню **Инструменты** в списке оповещений. Дополнительные сведения см. в статье [Управление оповещениями {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository).

## Сведения об анализе и диагностике

Вы можете просмотреть аналитическую и диагностическую информацию для выполнения {% data variables.product.prodname_code_scanning %} с помощью анализа {% data variables.product.prodname_codeql %} на {% data variables.product.prodname_dotcom %}. 

Сведения об **анализе** отображаются для последнего анализа в заголовке в верхней части списка оповещений. Дополнительные сведения см. в разделе [Управление оповещениями о сканировании кода для репозитория](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository).

Сведения о **диагностике** отображаются в журналах рабочих процессов действий и состоят из сводных метрик и диагностики средства извлечения. Сведения о доступе к журналам {% data variables.product.prodname_code_scanning %} на {% data variables.product.prodname_dotcom %} см. в разделе [Просмотр выходных данных журнала из {% data variables.product.prodname_code_scanning %}](#viewing-the-logging-output-from-code-scanning) ниже.

Если вы используете {% data variables.product.prodname_codeql_cli %} за пределами {% data variables.product.prodname_dotcom %}, то увидите сведения диагностики в выходных данных, созданных во время анализа базы данных. Эти сведения также включаются в файл результатов SARIF, который вы отправляете в {% data variables.product.prodname_dotcom %} с результатами {% data variables.product.prodname_code_scanning %}.

Дополнительные сведения о {% data variables.product.prodname_codeql_cli %} см. в разделе [Настройка {% data variables.product.prodname_codeql_cli %} в системе CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#viewing-log-and-diagnostic-information).

### Сведения о сводных метриках

{% data reusables.code-scanning.summary-metrics %}

### Сведения о диагностике извлечения исходного кода {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.extractor-diagnostics %}

{% ifversion codeql-action-debug-logging %}

Более подробные сведения об ошибках и предупреждениях средства извлечения {% data variables.product.prodname_codeql %}, возникших во время создания базы данных, можно просмотреть, включив ведение журнала отладки. Дополнительные сведения см. в статье [Устранение неполадок с рабочим процессом CodeQL](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow#creating-codeql-debugging-artifacts-by-re-running-jobs-with-debug-logging-enabled).

{% endif %}

## Просмотр выходных данных журнала из {% data variables.product.prodname_code_scanning %}

Этот раздел относится к выполнению {% data variables.product.prodname_code_scanning %} с помощью {% data variables.product.prodname_actions %} ({% data variables.product.prodname_codeql %} или стороннего производителя).

Настроив {% data variables.product.prodname_code_scanning %}, вы сможете просматривать результаты действий в процессе их выполнения.

{% data reusables.repositories.actions-tab %}

  Вы увидите список, содержащий запись, соответствующую рабочему процессу {% data variables.product.prodname_code_scanning %}. Текст записи — это название, которое вы присвоили своему сообщению о фиксации.

  ![Список действий с рабочим процессом {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-actions-list.png)

1. Нажмите запись, соответствующую рабочему процессу {% data variables.product.prodname_code_scanning %}

2. Нажмите на название задания слева. Например, **Анализ (ЯЗЫК)**

  ![Выходные данные журнала из рабочего процесса {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Просматривайте журнал результатов действий в рабочем процессе по мере их выполнения.

1. После завершения всех заданий можно просмотреть сведения о всех обнаруженных оповещениях {% data variables.product.prodname_code_scanning %}. Дополнительные сведения см. в разделе [Управление оповещениями {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository).

{% note %}

**Примечание.** Если вы создали запрос на вытягивание, чтобы добавить рабочий процесс {% data variables.product.prodname_code_scanning %} в репозиторий, оповещения из этого запроса на вытягивание не будут отображаться непосредственно на странице {% data variables.product.prodname_code_scanning_capc %}, пока запрос не будет объединен. При появлении оповещений их можно просмотреть до объединения запроса на вытягивание, нажав на ссылку **Обнаружено оповещений: _n_** на странице {% data variables.product.prodname_code_scanning_capc %}.

![Щелкните ссылку "Найдено оповещений: n"](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}
