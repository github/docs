---
title: Управление доступом к самостоятельно размещенным средствам выполнения с помощью групп
shortTitle: Manage access with runner groups
intro: 'Политики можно использовать для ограничения доступа к локальным средствам выполнения, добавленным в организацию или предприятие.'
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
ms.openlocfilehash: c6f53c3698800de519fe34231a8faf37924eacaa
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/01/2022
ms.locfileid: '148120892'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% ifversion target-runner-groups %} Сведения о маршрутизации заданий в средства выполнения в определенной группе см. [в разделе Выбор средств выполнения в группе](/actions/using-jobs/choosing-the-runner-for-a-job#choosing-runners-in-a-group).
{% endif %}

## Сведения о группах средств выполнения

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).{% endif %}

{% ifversion ghec or ghes or ghae %}

## Создание группы локальных средств выполнения для организации

{%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Создание группы локальных средств выполнения для предприятия

 {%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

## Изменение политики доступа группы локальных средств выполнения

{%- ifversion fpt or ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## Изменение имени группы средств выполнения

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## Автоматическое добавление локального средства выполнения в группу

{% data reusables.actions.automatically-adding-a-runner-to-a-group %}

## Перемещение локального средства выполнения в группу

{% data reusables.actions.moving-a-runner-to-a-group %}

## Удаление группы локальных средств выполнения

{% data reusables.actions.removing-a-runner-group %}

{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}
