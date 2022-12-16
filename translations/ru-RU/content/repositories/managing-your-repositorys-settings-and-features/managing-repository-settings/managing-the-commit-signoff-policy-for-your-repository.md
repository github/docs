---
title: Управление политикой утверждения фиксаций для репозитория
intro: 'Вы можете потребовать, чтобы пользователи автоматически утверждали фиксации, которые они выполняют в репозитории, с помощью веб-интерфейса {% data variables.product.product_name %}.'
versions:
  feature: commit-signoffs
permissions: Organization owners and repository administrators can require all commits to a repository to be signed off by the commit author.
topics:
  - Repositories
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 078e80ed9f2b916c2c82b522eaad709fae5dc46c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107696'
---
## Сведения об утверждении фиксаций

Утверждение фиксаций позволяет пользователям утверждать, что фиксация соответствует правилам и требованиям лицензии, которые действуют в отношении репозитория. Вы можете включить принудительные подписи фиксации для отдельных репозиториев для пользователей, выполняющих фиксацию с помощью веб-интерфейса {% данных variables.location.product_location %}, что делает выход из фиксации безлимитной частью процесса фиксации. После включения принудительной фиксации для репозитория каждая фиксация, выполненная в этом репозитории, через веб-интерфейс {% данных variables.location.product_location %}, автоматически будет выполнена автором фиксации.

Владельцы организации также могут включать принудительное утверждение фиксаций на уровне организации. Дополнительные сведения см. в разделе [Управление политикой утверждения фиксаций для организации](/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization).

{% data reusables.repositories.commit-signoffs %}

## Включение или отключение обязательного утверждения фиксаций для репозитория

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Выберите **Требовать от участников утверждения веб-фиксаций**.
  ![Снимок экрана, где показана команда "Требовать от участников утверждения веб-фиксаций"](/assets/images/help/repository/require-signoffs.png).
