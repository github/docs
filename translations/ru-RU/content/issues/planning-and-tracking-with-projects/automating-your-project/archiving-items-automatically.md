---
title: Архивация элементов автоматически
shortTitle: Archiving automatically
intro: 'Встроенные рабочие процессы проекта можно настроить для автоматического архивирования элементов, соответствующих определенным критериям.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-auto-archive
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 75346021f51cb8cc373b4a50aef43e0b5c7646dc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107224'
---
{% note %}

**Примечание.** Встроенные рабочие процессы доступны в рамках ограниченной бета-версии.

{% endnote %}

## Сведения об автоматической архивации элементов

Встроенные рабочие процессы проекта можно настроить для автоматического архивации элементов. Элементы архивации помогут вам оставаться ниже предела элементов {% данных variables.projects.item_limit %} в каждом проекте.

Вы можете использовать `is``reason`и `last-updated` фильтры, чтобы указать, когда элемент должен быть архивирован.

При включении автоматической архивации для проблем или запросов на вытягивание элементы в проекте, которые уже соответствуют вашим критериям, также будут архивироваться. При архивации большого количества элементов, которые уже соответствуют критериям, может возникнуть некоторая задержка.

Проекты также имеют ограничение на количество архивных элементов, которые они могут содержать. Проект может содержать до {% данных variables.projects.archived_item_limit %} архивных элементов. Дополнительные сведения об окончательном удалении элементов см. в разделе "[Удаление элементов ](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project#deleting-items)".

## Настройка автоматической архивации в проекте

{% данных reusables.projects.access-workflows %}
1. В списке "Рабочие процессы по умолчанию" щелкните элементы **автоархивирования**.
   
   ![Снимок экрана: рабочие процессы автоархивирования](/assets/images/help/projects-v2/archive-workflows.png)
   
1. Рядом с параметром **"Когда**" проверьте типы элементов, которые требуется автоматически архивировать.
   
   ![Снимок экрана: конфигурация "Когда" для рабочего процесса](/assets/images/help/projects-v2/workflow-when-archive.png)

1. Рядом с {% octicon "filter" aria-label="Значок фильтра" %}введите критерии фильтра, которые вы хотите использовать для автоматического архивирования элементов. Вы можете использовать `is`только фильтры и `last-updated` параметры. `reason` Дополнительные сведения о синтаксисе фильтров см. в разделе "[Фильтрация проектов](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".
   
   ![Снимок экрана: область текста фильтра](/assets/images/help/projects-v2/auto-archive-filter.png)
   
1. Если рабочий процесс отключен, щелкните переключатель рядом с " **Выкл."** , чтобы включить рабочий процесс.
   
   ![Снимок экрана: элемент управления "Вкл./Выкл." для рабочего процесса](/assets/images/help/projects-v2/workflow-enable.png)
   

## Дополнительные материалы

* "[Архивация элементов из проекта](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project)"
* Использование [встроенных автоматизации](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)
