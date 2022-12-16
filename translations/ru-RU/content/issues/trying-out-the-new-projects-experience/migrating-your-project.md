---
title: Перенос проекта в Проекты (бета-версия)
intro: Вы можете перенести проекты из старого интерфейса проектов в Проекты (бета-версия).
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 9361f3f28d3d365ecbb6053e908644cc8f34f1d0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "147080626"
---
{% note %}

**Примечания.**

- Проекты (бета-версия) в настоящее время доступны в общедоступной бета-версии и могут быть изменены.
- Если переносимый проект содержит более 1200 элементов, открытые проблемы будут приоритизированы по открытым запросам на вытягивание, а затем заметкам. Оставшееся пространство будет использоваться для закрытых проблем, объединенных запросов на вытягивание и закрытых запросов на вытягивание. Элементы, которые не могут быть перенесены из-за этого ограничения, будут перемещены в архив. Если достигнут предел архива в 10 000 элементов, дополнительные элементы не будут переноситься.
- Карточки заметок преобразуются в черновики проблем, и содержимое сохраняется в тексте черновика. Если информация отсутствует, сделайте все скрытые поля видимыми. Дополнительные сведения см. в разделе [Отображение и скрытие полей](/issues/trying-out-the-new-projects-experience/customizing-your-project-views#showing-and-hiding-fields).
- Автоматизация не будет перенесена.
- Рассмотрение, архивация и действие не будут перенесены.
- После миграции новый перенесенный проект и старый проект не будут синхронизированы.

{% endnote %}

## <a name="about-project-migration"></a>Сведения о миграции проекта

Вы можете перенести доски проектов во все новые проекты (бета-версии) и испытать таблицы, использование нескольких представлений, новые параметры автоматизации и эффективные типы полей. Дополнительные сведения см. в разделе [Сведения о проектах (бета-версия)](/issues/trying-out-the-new-projects-experience/about-projects).

## <a name="migrating-an-organization-project-board"></a>Миграция доски проекта организации

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}
1. В левой части экрана щелкните **Проекты (классическая версия)** .
  ![Снимок экрана: пункт меню Проекты (классическая версия)}](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}

## <a name="migrating-a-user-project-board"></a>Перенос доски проекта пользователя

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_profile %}
1. В верхней части страницы своего профиля в главной области навигации щелкните {% octicon "project" aria-label="The project board icon" %} **Проекты**.
![Вкладка "Проект"](/assets/images/help/projects/user-projects-tab.png)
1. Над списком проектов щелкните **Проекты (классическая версия)** .
  ![Снимок экрана: пункт меню Проекты (классическая версия)}](/assets/images/help/issues/projects-classic-user.png) {% data reusables.projects.migrate-project-steps %}

## <a name="migrating-a-repository-project-board"></a>Перенос доски проекта в репозитории

{% note %}

**Примечание.** Проекты (бета-версия) не поддерживают проекты уровня репозитория. При миграции доска проекта репозитория будет перенесена в учетную запись организации или личную учетную запись, владеющую проектом репозитория, и перенесенный проект будет закреплен в исходном репозитории.

{% endnote %}

{% data reusables.projects.enable-migration %} {% data reusables.repositories.navigate-to-repo %}
1. Щелкните {% octicon "project" aria-label="The project board icon" %} **Проекты** под названием своего репозитория.
![Вкладка "Проект"](/assets/images/help/projects/repo-tabs-projects.png)
1. Щелкните **Проекты (классическая версия)** .
  ![Снимок экрана: пункт меню Проекты (классическая версия)}](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}
