---
title: Добавление локальных средств выполнения
intro: 'Вы можете добавить локальное средство выполнения в репозиторий, организацию или предприятие.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/adding-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Add self-hosted runners
ms.openlocfilehash: c58fbc6ac67fe1466458888eb0c55f58483dac6c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109296'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Вы можете добавить локальное средство выполнения в репозиторий, организацию или предприятие.

Если вы являетесь администратором организации или предприятия, вам может потребоваться добавить свои локальные средства выполнения на уровне организации или предприятия. Такой подход делает средство выполнения доступным для нескольких репозиториев в организации или предприятии, а также позволяет управлять средствами выполнения в одном месте.

Сведения о поддерживаемых операционных системах для локальных средств выполнения или использовании локальных средств выполнения с прокси-сервером см. в разделе [Сведения о локальных средствах выполнения](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners).

{% ifversion not ghae %} {% warning %}

**Предупреждение.** {% data reusables.actions.self-hosted-runner-security %}

Дополнительные сведения см. в статье "[Сведения о локально размещенных средствах выполнения](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

{% endwarning %} {% endif %}

{% ifversion fpt or ghec or ghes %}

Вы можете настроить автоматизацию для масштабирования количества локальных средств выполнения. Дополнительные сведения см. в разделе [Автомасштабирование с использованием локальных средств выполнения тестов](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners).

{% endif %}

## Предварительные требования

{% data reusables.actions.self-hosted-runners-prerequisites %}

## Добавление локального средства выполнения в репозиторий

Вы можете добавить локальные средства выполнения в один репозиторий. Чтобы добавить локальное средство выполнения в пользовательский репозиторий, необходимо быть владельцем репозитория. Для репозитория организации необходимо быть владельцем организации или иметь доступ администратора к репозиторию. Сведения о том, как добавить локальное средство выполнения с помощью REST API, см. в разделе [Локальные средства выполнения](/rest/reference/actions#self-hosted-runners).

{% ifversion fpt или ghec или ghes > 3.3 или ghae > 3,3 %} {% данных reusables.repositories.navigate-to-repo %} {% данных reusables.repositories.sidebar-settings %} {% данных reusables.repositories.settings-sidebar-actions-runners %}
1. Щелкните **Создать локальное средство выполнения**.
{% data reusables.actions.self-hosted-runner-configure %} {% elsif ghae or ghes < 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %}
1. В разделе {% ifversion ghes or ghae or ghec %}"Средства выполнения"{% else %}"Локальные средства выполнения"{% endif %} нажмите **Добавить средство выполнения**.
{% data reusables.actions.self-hosted-runner-configure %} {% endif %} {% data reusables.actions.self-hosted-runner-check-installation-success %}

Дополнительные сведения см. в разделе [Мониторинг и устранение неполадок в работе средств выполнения тестов локального размещения](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners).

## Добавление локального средства выполнения в организацию

Вы можете добавлять локальные средства выполнения на уровне организации, где их можно использовать для обработки заданий для нескольких репозиториев в организации. Чтобы добавить локальное средство выполнения в организацию, необходимо быть владельцем организации. Сведения о том, как добавить локальное средство выполнения с помощью REST API, см. в разделе [Локальные средства выполнения](/rest/reference/actions#self-hosted-runners).

{% ifversion fpt или ghec или ghes > 3.3 или ghae > 3,3 %} {% данных reusables.organizations.navigate-to-org %} {% данных reusables.organizations.org_settings %} {% данных reusables.organizations.settings-sidebar-actions-runners %} {% ifversion actions-hosted-runners %} 1. Нажмите кнопку **Создать средство выполнения**, а затем выберите **Создать локальное средство выполнения**. {% else %}1. **Щелкните "Создать средство выполнения**.{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {% elsif ghae or ghes < 3.4 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %}
1. В разделе {% ifversion ghes or ghae %}"Средства выполнения" нажмите **Добавить**, затем нажмите **Новое средство выполнения**.{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {% endif %} {% data reusables.actions.self-hosted-runner-check-installation-success %}

Дополнительные сведения см. в разделе [Мониторинг и устранение неполадок в работе средств выполнения тестов локального размещения](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners).

{% data reusables.actions.self-hosted-runner-public-repo-access %}

## Добавление локального средства выполнения в предприятие

{% ifversion fpt %}Если вы используете {% data variables.product.prodname_ghe_cloud %}, то{% elsif ghec or ghes or ghae %}Вы{% endif %} можете добавлять локальные средства выполнения в предприятие, где их можно назначать нескольким организациям. Затем администраторы организации могут управлять тем, какие репозитории могут использовать средство выполнения. {% ifversion fpt %}Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise).{% endif %}

{% ifversion ghec or ghes or ghae %} Новые средства выполнения назначаются группе по умолчанию. После регистрации средства выполнения вы можете изменить его группу. Дополнительные сведения см. в разделе [Управление доступом к локальным средствам выполнения](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).

{% ifversion ghec или ghes > 3.3 или ghae > 3,3 %}

Чтобы добавить локальное средство выполнения в предприятие, необходимо быть владельцем предприятия. Сведения о том, как добавить локальное средство выполнения с помощью REST API, см. в описании корпоративных конечных точек в разделе [REST API {% data variables.product.prodname_actions %}](/rest/reference/actions#self-hosted-runners).

{% endif %}

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

Дополнительные сведения см. в разделе [Мониторинг и устранение неполадок в работе средств выполнения тестов локального размещения](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners).

{% data reusables.actions.self-hosted-runner-public-repo-access %}

### Обеспечение доступности корпоративных средств выполнения для репозиториев

По умолчанию средства выполнения в группе локальных средств выполнения предприятия по умолчанию доступны для всех организаций предприятия, но не доступны для всех репозиториев в каждой организации.

Чтобы сделать группу локальных средств выполнения корпоративного уровня доступной для репозитория организации, может потребоваться изменить унаследованные параметры организации для группы средств выполнения.

Дополнительные сведения об изменении параметров доступа к группе средств выполнения см. в разделе [Управление доступом к локальным средствам выполнения с помощью групп](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group).
{% endif %}

{% ifversion ghec or ghes or ghae %}

## Дополнительные материалы

- [Начало работы с локальными средствами выполнения тестов для вашего предприятия](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)

{% endif %}
