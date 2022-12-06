---
title: Использование условий для управления выполнением задания
shortTitle: Use conditions to control job execution
intro: 'Запретите выполнение задания, если не выполнены ваши условия.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: e15f726c91109d2aa9cb7cd4b2acd264c6b51b98
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009967'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Обзор

{% note %}

**Примечание.** Пропущенное задание имеет состояние "Успешно". Это не помешает слиянию запроса на вытягивание, даже если это обязательная проверка.

{% endnote %}

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

В пропущенном задании отобразится следующее состояние:

![Skipped-required-run-details](/assets/images/help/repository/skipped-required-run-details.png)
