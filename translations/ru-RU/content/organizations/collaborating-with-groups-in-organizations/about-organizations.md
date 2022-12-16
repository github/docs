---
title: Сведения об организациях
intro: 'Организации являются общими учетными записями, в которых компании и проекты с открытым кодом могут совместно работать одновременно над несколькими проектами благодаря продвинутым функциям безопасности и администрирования.'
redirect_from:
  - /articles/about-organizations
  - /github/setting-up-and-managing-organizations-and-teams/about-organizations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 0269554568c8781706a8d79600f5b6191d0b9598
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164334'
---
## Сведения об организациях

{% data для повторного использования.organizations.about-organizations %} Дополнительные сведения о типах учетных записей см. в разделе [Типы учетных записей {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts).

Вы можете пригласить неограниченное количество пользователей для присоединения к организации, а затем назначить этим членам организации различные роли, предоставляющие различные уровни доступа к организации и ее данным. Дополнительные сведения см. в статье "[Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

Помимо управления доступом к самой организации, вы можете отдельно управлять доступом к репозиториям, доскам проектов и приложениям вашей организации. Дополнительные сведения см. в разделе "[Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)", "[Разрешения доски проектов для организации"](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization) и "[Управление доступом к приложениям организации](/organizations/managing-access-to-your-organizations-apps)".

Чтобы упростить управление доступом и улучшить совместную работу, можно создать вложенные команды, которые отражают структуру группы, с каскадными правами доступа и упоминаниями. Дополнительные сведения см. в статье "[Сведения о командах](/organizations/organizing-members-into-teams/about-teams)".

Вы можете настроить организацию в соответствии с уникальными потребностями группы, управляя параметрами, такими как ограничение типов репозиториев, которые могут создавать участники. Дополнительные сведения см. в статье "[Управление параметрами организации](/organizations/managing-organization-settings)".

Чтобы повысить безопасность организации, вы можете применить требования безопасности и просмотреть журнал аудита организации. Дополнительные сведения см. в разделе [Обеспечение безопасности организации](/organizations/keeping-your-organization-secure).

Сведения о том, как использовать организации наиболее эффективно, см. в разделе [Рекомендации для организаций](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations).

{% ifversion fpt or ghec %}
## Сведения о доступности функций

{% data reusables.organizations.organization-plans %} {% endif %}

## Организации и корпоративные учетные записи

Корпоративные учетные записи {% ifversion fpt %} — это функция {% data variables.product.prodname_ghe_cloud %}, которая позволяет владельцам централизованно управлять политиками и выставлением счетов для нескольких организаций. Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations).
{% else %} {% ifversion ghec %} Для организаций, принадлежащих к корпоративной учетной записи, выставление счетов осуществляется на уровне корпоративной учетной записи, а параметры выставления счетов недоступны на уровне организации. Владельцы корпоративных учетных записей {% endif %} могут задать политику для всех организаций в корпоративной учетной записи или разрешить владельцам организации устанавливать политику на уровне организации. Владельцы организации не могут изменять параметры, применяемые для вашей организации на уровне корпоративной учетной записи. Если у вас есть вопросы о политике или настройке для вашей организации, обратитесь к владельцу своей корпоративной учетной записи.

{% ifversion ghec %} {% data reusables.enterprise.create-an-enterprise-account %} Дополнительные сведения см. в статье [Создание корпоративной учетной записи](/admin/overview/creating-an-enterprise-account).

{% data reusables.enterprise-accounts.invite-organization %}

{% endif %} {% endif %}

{% ifversion fpt or ghec %}
## Условия обслуживания и защита данных для организаций

Сущность (например, компания, некоммерческая организация или группа компаний) может принять стандартные или корпоративные условия предоставления услуг для своей организации. Дополнительные сведения см. в разделе [Повышение уровня до корпоративных условий предоставления услуг](/articles/upgrading-to-the-corporate-terms-of-service).

{% endif %}
