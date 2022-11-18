---
title: Применение политик для проектов на предприятии
intro: 'Вы можете применить политики для {% data variables.projects.projects_v2_and_v1 %} в организациях предприятия или разрешить настройку политик в каждой организации.'
permissions: Enterprise owners can enforce policies for projects in an enterprise.
redirect_from:
  - /articles/enforcing-project-board-settings-for-organizations-in-your-business-account
  - /articles/enforcing-project-board-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Projects
shortTitle: Project board policies
ms.openlocfilehash: 2bb72b21094fadea8f584eb4749ed0cea69619ee
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108799'
---
## Сведения о политиках для проектов на предприятии

Вы можете использовать политики, чтобы управлять тем, как корпоративные участники управляют {% data variables.projects.projects_v2_and_v1 %}, или разрешить владельцам организаций управлять политиками для {% data variables.projects.projects_v2_and_v1 %} на уровне организации. {% ifversion project-visibility-policy %}

Некоторые политики применяются к {% data variables.product.prodname_projects_v2 %}, новому интерфейсу проектов, и {% data variables.product.prodname_projects_v1 %}, предыдущему интерфейсу, а некоторые применяются только к {% data variables.product.prodname_projects_v1 %}. Дополнительные сведения о каждом интерфейсе см. в разделах [Сведения о {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) и [Сведения о {% data variables.product.prodname_projects_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards).
{% else %}Дополнительные сведения см. в статье [Сведения о досках проектов](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards).{% endif %}

## Применение политики для проектов на уровне организации

Во всех организациях, принадлежащих вашему предприятию, вы можете включать или отключать доски проектов в рамках организации или разрешать владельцам управлять настройкой на уровне организации.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. В разделе "Проекты организации" просмотрите сведения об изменении параметра. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. В разделе "Проекты организации" выберите политику в раскрывающемся меню.
  ![Раскрывающееся меню с параметрами политики для досок проектов организации](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

{% ifversion project-visibility-policy %}
## Применение политики в отношении изменения видимости проектов

Во всех организациях, принадлежащих вашему предприятию, вы можете включить или отключить возможность доступа пользователей с правами администратора к проекту, чтобы изменить видимость проекта, или разрешить владельцам администрировать параметр на уровне организации.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
1. В разделе "Разрешение на изменение видимости проекта" просмотрите сведения об изменении параметра. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Нажмите на раскрывающееся меню и выберите политику.

   ![Снимок экрана: раскрывающееся меню для настройки политики "Разрешение на изменение видимости проекта"](/assets/images/help/business-accounts/project-visibility-change-drop-down.png) {% endif %}

{% ifversion projects-v1 %}
## Применение политик для {% data variables.product.prodname_projects_v1 %}

Некоторые политики применяются только к {% data variables.product.prodname_projects_v1 %}.

### Применение политики для проектов репозитория

Во всех организациях, принадлежащих вашему предприятию, вы можете включать или отключать проекты в рамках репозитория или разрешать владельцам управлять настройкой на уровне организации.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. В разделе "Проекты репозитория" просмотрите сведения об изменении параметра. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. В разделе "Проекты репозитория" выберите политику в раскрывающемся меню.

   ![Раскрывающееся меню с параметрами политики для досок проектов репозитория](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png) {% endif %}
