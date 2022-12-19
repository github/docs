---
title: Экспорт сведений об участниках организации
intro: Вы можете экспортировать сведения об участниках организации непосредственно из пользовательского интерфейса.
permissions: Organization owners can export member information for their organization.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Export member information
ms.openlocfilehash: 2777e125f5eb43bfcf8ec1172db29fe7338bdbad
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109819'
---
Вы можете экспортировать сведения об участниках вашей организации. Это полезно, если вы хотите выполнить аудит пользователей в организации.

Экспортированные сведения включают:
- Сведения об имени и отображаемом имени пользователя
- Включена ли двухфакторная проверка подлинности
- Является ли членство общедоступным или частным
- Является ли пользователь владельцем или участником организации
- Дата и время последнего действия пользователя (полный список соответствующих действий см. в разделе [Управление неактивными пользователями](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users))
- NameID пользователя в SAML, если доступно

Сведения об участниках можно получить непосредственно из пользовательского интерфейса {% data variables.product.product_name %} или с помощью API. В этой статье объясняется, как получить сведения об участниках из {% data variables.product.product_name %}.

Дополнительные сведения об API-интерфейсах см. в документации по [API GraphQL](/graphql/reference/objects#user) и [REST API](/rest/reference/users) о пользователях.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people-export %}
