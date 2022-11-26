---
title: 'Миграция с {% data variables.product.prodname_projects_v1 %}'
intro: 'Вы можете перенести {% data variables.projects.projects_v1_board %} в новый интерфейс {% data variables.product.prodname_projects_v2 %}.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/migrating-your-project
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 2efe16be4b865e4315bce1fee633c313a3d7e512
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110074'
---
{% note %}

**Примечания.**

- Если переносимый проект содержит более 1200 элементов, открытые проблемы будут приоритизированы по открытым запросам на вытягивание, а затем заметкам. Оставшееся пространство будет использоваться для закрытых проблем, объединенных запросов на вытягивание и закрытых запросов на вытягивание. Элементы, которые не могут быть перенесены из-за этого ограничения, будут перемещены в архив. Если достигнут предел архива в 10 000 элементов, дополнительные элементы не будут переноситься.
- Карточки заметок преобразуются в черновики проблем, и содержимое сохраняется в тексте черновика. Если информация отсутствует, сделайте все скрытые поля видимыми. Дополнительные сведения см. в разделе [Отображение и скрытие полей](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#showing-and-hiding-fields).
- Автоматизация не будет перенесена.
- Рассмотрение, архивация и действие не будут перенесены.
- После миграции новый перенесенный проект и старый проект не будут синхронизированы.

{% endnote %}

## Сведения о миграции проекта

Вы можете перенести доски проектов в новый интерфейс {% data variables.product.prodname_projects_v2 %} и испытать таблицы, использование нескольких представлений, новые параметры автоматизации и эффективные типы полей. Дополнительные сведения см. в разделе [Сведения о проектах](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects).

## Миграция доски проекта организации

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}
1. В левой части экрана щелкните **Проекты (классическая версия)** .
  ![Снимок экрана: пункт меню Проекты (классическая версия)}](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}

## Перенос доски проекта пользователя

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_profile %}
1. В верхней части страницы своего профиля в главной области навигации щелкните {% octicon "project" aria-label="The project board icon" %} **Проекты**.
![Вкладка "Проект"](/assets/images/help/projects/user-projects-tab.png)
1. Над списком проектов щелкните **Проекты (классическая версия)** .
  ![Снимок экрана: пункт меню Проекты (классическая версия)}](/assets/images/help/issues/projects-classic-user.png) {% data reusables.projects.migrate-project-steps %}

## Перенос доски проекта в репозитории

{% note %}

**Примечание.** {% data variables.projects.projects_v2_caps %} не поддерживает проекты уровня репозитория. При миграции доска проекта репозитория будет перенесена в учетную запись организации или личную учетную запись, владеющую проектом репозитория, и перенесенный проект будет закреплен в исходном репозитории.

{% endnote %}

{% data reusables.projects.enable-migration %} {% data reusables.repositories.navigate-to-repo %}
1. Щелкните {% octicon "project" aria-label="The project board icon" %} **Проекты** под названием своего репозитория.
![Вкладка "Проект"](/assets/images/help/projects/repo-tabs-projects.png)
1. Щелкните **Проекты (классическая версия)** .
  ![Снимок экрана: пункт меню Проекты (классическая версия)}](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}
