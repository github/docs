---
title: Удаление локальных средств выполнения
intro: 'Вы можете необратимо удалить локальное средство выполнения тестов из репозитория{% ifversion fpt %} или организации{% elsif ghec or ghes or gahe %}, организации или предприятия{% endif %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Remove self-hosted runners
ms.openlocfilehash: d47a2e348f2d1a79342934e70115314d9e62f6f0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092510'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Удаление средства выполнения из репозитория

{% note %}

**Примечание.** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

Чтобы удалить локальное средство выполнения из пользовательского репозитория, вам необходимо быть владельцем репозитория. Для репозитория организации необходимо быть владельцем организации или иметь доступ администратора к репозиторию. Рекомендуется также позаботиться о доступе к компьютеру локального средства выполнения. Сведения об удалении локального средства выполнения с помощью REST API см. в разделе [Локальные средства выполнения](/rest/reference/actions#self-hosted-runners).

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghae or ghes < 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %}

## Удаление средства выполнения из организации

{% note %}

**Примечание.** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

Чтобы удалить локальное средство выполнения из организации, вам необходимо быть владельцем организации. Рекомендуется также позаботиться о доступе к компьютеру локального средства выполнения. Сведения об удалении локального средства выполнения с помощью REST API см. в разделе [Локальные средства выполнения](/rest/reference/actions#self-hosted-runners).

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion fpt or ghes > 3.3 or ghec %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghes < 3.4 or ghae %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %}

## Удаление средства выполнения из предприятия

{% ifversion fpt %} Если вы используете {% data variables.product.prodname_ghe_cloud %}, вы также можете удалить средства выполнения из предприятия. Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-enterprise).
{% endif %} {% ifversion ghec or ghes or ghae %} {% note %}

**Примечание.** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

Чтобы удалить локальное средство выполнения из предприятия, вам необходимо быть владельцем предприятия. Рекомендуется также позаботиться о доступе к компьютеру локального средства выполнения. Сведения об удалении локального средства выполнения с помощью REST API см. в разделе о конечных точках предприятия в [REST API {% data variables.product.prodname_actions %}](/rest/reference/actions#self-hosted-runners).

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghae or ghes < 3.4 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %} {% endif %}
