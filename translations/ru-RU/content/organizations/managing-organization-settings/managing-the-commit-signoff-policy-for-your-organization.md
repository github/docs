---
title: Управление политикой утверждения фиксаций для организации
intro: 'Вы можете требовать, чтобы пользователи автоматически отключали все фиксации, которые они выполняют в веб-интерфейсе {% data variables.product.product_name %}, в репозитории, принадлежащие вашей организации.'
versions:
  feature: commit-signoffs
permissions: Organization owners can require all commits to repositories owned by the organization be signed off by the commit author.
topics:
  - Organizations
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 3d567d9f592758a2a9998df07556c4f2a04a852c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109439'
---
## Сведения об утверждении фиксаций

Чтобы подтвердить, что фиксация соответствует правилам и требованиям лицензии, которые действуют для репозитория, многие организации требуют, чтобы разработчики утверждали все фиксации. Если для вашей организации требуется утверждение фиксаций, это процедуру можно включить в процесс фиксации, включив принудительное утверждение фиксаций для пользователей, выполняющих фиксацию через веб-интерфейс {% data variables.product.product_name %}. После включения обязательного утверждения фиксаций для организации каждая фиксация, выполненная в репозиториях в этой организации посредством веб-интерфейса {% data variables.product.product_name %} будет утверждаться автором фиксации автоматически.

Пользователи с правами администратора на доступ к репозиторию также могут включать принудительное утверждение фиксаций на уровне репозитория. Дополнительные сведения см. в разделе [Управление политикой утверждения фиксаций для репозитория](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository).

{% data reusables.repositories.commit-signoffs %}

## Управление принудительным утверждением фиксаций для вашей организации

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
1. Выберите или отмените выбор параметра **Требовать от участников утверждения веб-фиксаций**.
  ![Снимок экрана, где показана команда "Требовать от участников утверждения веб-фиксаций"](/assets/images/help/organizations/require-signoffs.png)
