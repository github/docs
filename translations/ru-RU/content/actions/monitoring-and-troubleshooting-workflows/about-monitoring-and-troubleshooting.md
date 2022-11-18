---
title: Сведения о мониторинге и устранении неполадок
intro: 'Вы можете использовать средства в {% data variables.product.prodname_actions %} для мониторинга и отладки рабочих процессов.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About monitoring and troubleshooting
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d9158cd9bba6d003a583e78459240aa6790a1154
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062045'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Мониторинг рабочих процессов 

{% ifversion github-runner-dashboard %}
### Мониторинг текущих заданий в организации или предприятии

{% data reusables.actions.github-hosted-runners-check-concurrency %}

{% endif %}

### Использование графа визуализации

Во время каждого выполнения рабочего процесса создается граф в режиме реального времени, иллюстрирующий ход выполнения. Этот граф можно использовать для рабочих процессов мониторинга и отладки. Пример:

   ![Граф рабочего процесса](/assets/images/help/images/workflow-graph.png)

Дополнительные сведения см. в разделе [Использование графа визуализации](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph). 

### Добавление эмблемы состояния рабочего процесса

{% data reusables.repositories.actions-workflow-status-badge-intro %}

Дополнительные сведения см. в разделе [Добавление индикатора состояния рабочего процесса](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge).

{% ifversion fpt or ghec %}
### Просмотр времени выполнения задания

Чтобы определить, сколько времени заняло выполнение задания, можно просмотреть его время выполнения. Пример:

   ![Ссылка на сведения о времени запуска и времени для выставления счетов](/assets/images/help/repository/view-run-billable-time.png)

Дополнительные сведения см. в разделе [Просмотр времени выполнения задания](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time).
{% endif %}

### Просмотр журнала выполнения рабочего процесса

Вы можете просмотреть состояние каждого задания и шага в рабочем процессе. Пример:

   ![Имя запуска рабочего процесса](/assets/images/help/repository/run-name.png)

Дополнительные сведения см. в статье "[Просмотр журнала выполнения рабочего процесса](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)".

## Устранение неполадок рабочих процессов

### Использование журналов выполнения рабочих процессов

Каждый запуск рабочего процесса создает журналы действий, которые можно просматривать, скачивать, а также выполнять по ним поиск. Пример:

   ![Результаты рабочего процесса Super Linter](/assets/images/help/repository/super-linter-workflow-results-updated-2.png)

Дополнительные сведения см. в разделе «[Использование журналов выполнения рабочего процесса](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)».

### Включение ведения журналов отладки

Если журналы рабочих процессов не предоставляют достаточно сведений для диагностики причин несоответствующего выполнения рабочего процесса, задания или шага, можно дополнительно включить ведение журнала отладки. Дополнительные сведения см. в разделе [Включение ведения журнала отладки](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging).

## Мониторинг и устранение неполадок в самостоятельно размещенных средствах выполнения

При использовании локальных средств выполнения вы можете просматривать их действия и диагностировать распространенные проблемы. 

Дополнительные сведения см. в разделе [Мониторинг и устранение неполадок в работе средств выполнения тестов локального размещения](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners).
