---
title: Восстановление удаленного репозитория
intro: 'У {% ifversion ghes or ghae %}владельца предприятия{% elsif fpt or ghec %}вас{% endif %} есть возможность восстановить некоторые удаленные репозитории для восстановления содержимого.'
permissions: '{% ifversion ghes or ghae %}{% elsif fpt or ghec %}Anyone can restore deleted repositories that were owned by their own personal account. Organization owners can restore deleted repositories that were owned by the organization.{% endif %}'
redirect_from:
  - /articles/restoring-a-deleted-repository
  - /github/administering-a-repository/restoring-a-deleted-repository
  - /github/administering-a-repository/managing-repository-settings/restoring-a-deleted-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Restore deleted repository
ms.openlocfilehash: 759abe1762ec05d7baaec6f82f634002931e3ad4
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099127'
---
{% ifversion ghes or ghae %}

Как правило, удаленные репозитории могут быть восстановлены в течение 90 дней владельцем предприятия{% ifversion ghes %} на {% данных variables.location.product_location %}{% endif %}. Дополнительные сведения см. в статье "[Восстановление удаленного репозитория](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)". 

{% else %}

## Сведения о восстановлении репозитория

Удаленный репозиторий можно восстановить в течение 90 дней, если только он не был частью сети вилок, которая в настоящее время не пуста. Сеть вилок состоит из родительского репозитория, вилок репозитория и вилок для вилок репозитория. Если репозиторий был частью сети вилок, его нельзя восстановить, если только все остальные репозитории в сети не будут удалены или отсоединены от сети. Дополнительную информацию о вилках см. в разделе [Сведения о вилках](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks).

Если вы хотите восстановить репозиторий, что был частью сети вилок, которая в настоящее время не пуста, можно связаться с {% data variables.contact.contact_support %}.

После удаления репозитория может пройти до часа, прежде чем репозиторий станет доступен для восстановления.

Восстановление репозитория не приведет к восстановлению вложений выпуска или разрешений команды. Восстановленные проблемы не помечаются.

## Восстановление удаленного репозитория, принадлежавшего личной учетной записи

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.repo-tab %} {% data reusables.user-settings.deleted-repos %} {% data reusables.user-settings.restore-repo %} {% data reusables.user-settings.restore-confirmation %}

## Восстановление удаленного репозитория, принадлежавшего организации


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.deleted-repos %} {% data reusables.user-settings.restore-repo %} {% data reusables.user-settings.restore-confirmation %}

## Дополнительные материалы

- [Удаление репозитория](/articles/deleting-a-repository)

{% endif %}
