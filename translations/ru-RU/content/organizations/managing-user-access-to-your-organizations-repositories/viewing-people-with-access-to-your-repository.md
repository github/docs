---
title: Просмотр пользователей с доступом к репозиторию
intro: 'Вы можете просмотреть{% ifversion ghec or ghes or ghae %} и экспортировать{% endif %} список людей с доступом к репозиторию в организации.'
redirect_from:
  - /articles/viewing-people-with-access-to-your-repository
  - /github/setting-up-and-managing-organizations-and-teams/viewing-people-with-access-to-your-repository
  - /organizations/managing-access-to-your-organizations-repositories/viewing-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View people with access
permissions: Organization owners can view people with access to a repository.
ms.openlocfilehash: bc64a14c08df68d2fa5a94f5da35be04828aa023
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099335'
---
## Сведения о списке пользователей, имеющих доступ к репозиторию

Эти сведения можно использовать для того, чтобы помочь пользователям за пределами организации собирать данные, необходимые для соответствия нормативным требованиям, и выполнять другие общие проверки безопасности. 

{% ifversion fpt %} Организации, которые используют {% data variables.product.prodname_ghe_cloud %}, также могут экспортировать список пользователей, имеющих доступ к репозиторию, в формате CSV. Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-access-to-your-organizations-repositories/viewing-people-with-access-to-your-repository).
{% endif %}

{% ifversion fpt или ghec или ghes > 3.3 или ghae > 3,3 %} ![ Обзор](/assets/images/help/repository/manage-access-overview.png) управления доступом {% else %} ![Список разрешений](/assets/images/help/repository/repository-permissions-list.png) пользователей репозитория {% endif %}
## Просмотр пользователей с доступом к репозиторию

{% ifversion fpt или ghec или ghes > 3.3 или ghae > 3,3 %} Общие сведения о командах и людях с доступом к репозиторию можно просмотреть в параметрах репозитория. Дополнительные сведения см. в разделе [Управление командами и людьми, имеющими доступ к репозиторию](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories). {% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.accessing-repository-people %} {% endif %}

{% ifversion ghec or ghes or ghae %}
## Экспорт списка пользователей, имеющих доступ к репозиторию

{% ifversion ghec %} {% note %}

**Примечание.** Только организации, использующие {% data variables.product.prodname_ghe_cloud %}, могут экспортировать список людей, имеющих доступ к репозиторию. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.accessing-repository-people %}
4. Щелкните **Экспорт в формате CSV**.
  ![Вкладка "Люди" на боковой панели репозитория](/assets/images/help/repository/export-repository-permissions.png) {% endif %}
