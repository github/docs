---
title: 'Создание компонента "{% data variables.product.prodname_project_v1 %}"'
intro: '{% data variables.projects.projects_v1_boards_caps %} можно использовать для создания настраиваемых рабочих процессов, соответствующих вашим потребностям, например для отслеживания и приоритезации работы конкретных функций, для комплексных стратегий или даже контрольных списков выпуска.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/creating-a-project-board
  - /articles/creating-a-project
  - /articles/creating-a-project-board
  - /github/managing-your-work-on-github/creating-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
  - Issues
  - Projects
  - Project management
type: how_to
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e4f47a007c18b07142040a0a18ad7f45b73d5273
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110143'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data reusables.project-management.link-repos-to-project-board %} Дополнительные сведения: [Связывание репозитория с компонентом "{% data variables.product.prodname_project_v1 %}"](/articles/linking-a-repository-to-a-project-board).

Когда {% data variables.projects.projects_v1_board %} будет создана, вы сможете добавлять к ней проблемы, запросы на вытягивание и заметки. Дополнительные сведения см. в статьях [Добавление проблем и запросов на вытягивание к компоненту "{% data variables.product.prodname_project_v1 %}"](/articles/adding-issues-and-pull-requests-to-a-project-board) и [Добавление заметок к компоненту "{% data variables.product.prodname_project_v1 %}"](/articles/adding-notes-to-a-project-board).

Вы также можете настроить автоматизацию рабочих процессов, чтобы {% data variables.projects.projects_v1_board %} синхронизировалась с состоянием проблем и запросов на вытягивание. Подробнее см. [Сведения об автоматизации компонента "{% data variables.product.prodname_projects_v1 %}"](/articles/about-automation-for-project-boards).

{% data reusables.project-management.project-board-import-with-api %}

## Создание пользовательского компонента "{% data variables.projects.projects_v1_board %}"

{% data reusables.projects.classic-project-creation %}

{% data reusables.profile.access_profile %}
2. В верхней части страницы своего профиля в главной области навигации щелкните {% octicon "project" aria-label="The project board icon" %} **Проекты**.
![Вкладка проектов](/assets/images/help/projects/user-projects-tab.png){% ifversion projects-v2 %}
1. Щелкните **Проекты (классическая версия)** .{% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.choose-visibility %} {% data reusables.project-management.linked-repositories %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Создание компонента "{% data variables.projects.projects_v1_board %}" уровня организации

{% data reusables.projects.classic-project-creation %}

{% ifversion classic-project-visibility-permissions %} {% note %}

**Примечание:** {% data reusables.projects.owners-can-limit-visibility-permissions %}

{% endnote %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Щелкните **Проекты (классическая версия)** .{% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.choose-visibility %} {% data reusables.project-management.linked-repositories %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Создание компонента "{% data variables.projects.projects_v1_board %}" в репозитории

{% data reusables.projects.classic-project-creation %}

{% data reusables.repositories.navigate-to-repo %}
2. Щелкните {% octicon "project" aria-label="The project board icon" %} **Проекты** под названием своего репозитория.
![Вкладка проектов](/assets/images/help/projects/repo-tabs-projects.png){% ifversion projects-v2 %}
1. Щелкните **Проекты (классическая версия)** .{% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Дополнительные материалы

- [Сведения о досках проектов](/articles/about-project-boards)
- [Изменение доски проекта](/articles/editing-a-project-board){% ifversion fpt or ghec %}
- [Копирование доски проекта](/articles/copying-a-project-board){% endif %}
- [Закрытие панели проекта](/articles/closing-a-project-board)
- [Сведения об автоматизации досок проектов](/articles/about-automation-for-project-boards)
