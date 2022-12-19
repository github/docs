---
title: Разрешения на доступ в GitHub
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do
  - /articles/what-are-the-different-types-of-team-permissions
  - /articles/what-are-the-different-access-permissions
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: 'С помощью ролей вы можете контролировать доступ к учетным записям и ресурсам в {% data variables.product.product_name %}, а также уровень доступа для каждого пользователя.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Permissions
  - Accounts
shortTitle: Access permissions
ms.openlocfilehash: 0e13bf53980ab6e239890dd155f952882d122db1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098047'
---
## Сведения о разрешениях на доступ в {% data variables.product.prodname_dotcom %}

{% data reusables.organizations.about-roles %} 

Роли работают по-разному для разных типов учетных записей. Дополнительные сведения об учетных записях см. в разделе [Типы учетных записей {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts).

## Личные учетные записи

Репозиторий, принадлежащий личной учетной записи, имеет два уровня разрешений: *владелец репозитория* и *участники совместной работы*. Дополнительные сведения см. в разделе [Уровни разрешений для репозитория личных учетных записей](/articles/permission-levels-for-a-user-account-repository).

## Учетные записи организации

Участник организации может иметь следующие роли: *владелец*{% ifversion fpt or ghec %}, *менеджер выставления счетов*{% endif %} и *участник*. Владельцы имеют полный административный доступ к вашей организации{% ifversion fpt or ghec %}, а менеджеры выставления счетов могут управлять параметрами выставления счетов{% endif %}. Для всех остальных пользователей по умолчанию используется роль "участник". Вы можете управлять разрешениями на доступ для нескольких участников одновременно с помощью команд. Дополнительные сведения см. в разделе:
- [Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)
- [Разрешения для доступа к доске проекта в организации](/articles/project-board-permissions-for-an-organization)
- [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
- [Сведения о командах](/articles/about-teams)

## Учетные записи предприятия

{% ifversion fpt %} {% data reusables.gated-features.enterprise-accounts %} 

Дополнительные сведения о разрешениях для корпоративных учетных записей см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/get-started/learning-about-github/access-permissions-on-github).
{% else %} *Владельцы предприятия* имеют максимальный доступ к корпоративной учетной записи и могут выполнять любые действия в ней.{% ifversion ghec or ghes %} *Менеджеры выставления счетов* могут управлять параметрами выставления счетов корпоративной учетной записи.{% endif %} Участники и внешние сотрудники организации, принадлежащие корпоративной учетной записи, автоматически становятся участниками корпоративной учетной записи, несмотря на то, что у них нет доступа к самой корпоративной учетной записи или ее параметрам. Дополнительные сведения см. в разделе [Роли в организации](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise).

{% ifversion ghec %} Если предприятие использует {% data variables.product.prodname_emus %}, то участники подготавливаются в качестве новых личных учетных записей в {% data variables.product.prodname_dotcom %} и полностью управляются поставщиком удостоверений. Данные {% variables.enterprise.prodname_managed_users %} имеют доступ только для чтения к репозиториям, которые не являются частью своего предприятия и не могут взаимодействовать с пользователями, не входящими в состав предприятия. В организациях, принадлежащих организации, данные {% variables.enterprise.prodname_managed_users %} могут быть предоставлены одинаковые уровни детализации доступа, доступные для обычных организаций. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).
{% endif %} {% endif %}

## Дополнительные материалы

- [Типы учетных записей {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts)
