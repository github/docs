---
title: Удаление участника из предприятия
intro: 'Участника можно удалить из всех организаций, входящих в состав предприятия.'
permissions: Enterprise owners can remove an enterprise member from the enterprise.
versions:
  feature: remove-enterprise-members
type: how_to
topics:
  - Enterprise
shortTitle: Remove member
ms.openlocfilehash: c3090cd49c2c2e8089093dc01ddeb7b69ae39416
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717992'
---
## Сведения об удалении участников предприятия

При удалении участника из предприятия он удаляется из всех организаций, принадлежащих вашей организации.

Если удаляемый вами участник предприятия является последним владельцем организации, принадлежащей вашей организации, вы станете владельцем этой организации.

Если ваше предприятие или любая из организаций, принадлежащих вашему предприятию, использует поставщик удостоверений (IdP) для управления членством в организации, участник может быть снова добавлен в организацию поставщиком удостоверений. Обязательно внесите необходимые изменения в поставщик удостоверений.

## Удаление участника из предприятия

{% note %}

**Примечание.** Если участник предприятия использует только {% data variables.product.prodname_ghe_server %}, а не {% data variables.product.prodname_ghe_cloud %}, вы не сможете удалить участника предприятия таким способом.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. Справа от пользователя, которого требуется удалить, выберите раскрывающееся меню {% octicon "gear" aria-label="The gear icon" %} и нажмите **Удалить из предприятия**.

   ![Снимок экрана: параметр "Удалить из предприятия" для участника предприятия](/assets/images/help/business-accounts/remove-member.png)
