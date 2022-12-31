---
title: Изменение видимости аналитический сведений о зависимостях организации
intro: Вы можете разрешить всем участникам организации просматривать аналитические сведения о зависимостях для вашей организации или ограничить просмотр владельцами организации.
redirect_from:
  - /articles/changing-the-visibility-of-your-organizations-dependency-insights
  - /github/setting-up-and-managing-organizations-and-teams/changing-the-visibility-of-your-organizations-dependency-insights
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Change insight visibility
ms.openlocfilehash: f6647993672ee56de8c1b8698b1fcdb0dc84147f
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109760'
---
Владельцы организации могут настраивать ограничения для просмотра аналитических сведений о зависимостях организации. Все члены организации могут просматривать аналитические сведения о зависимостях организации по умолчанию.

{% ifversion ghec %} Владельцы предприятия могут настроить ограничения для просмотра аналитических сведений о зависимостях организации для всех организации в корпоративной учетной записи. Дополнительные сведения см. в разделе [Применение политик для аналитических сведений о зависимостях на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise).
{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. В разделе "Разрешения участника организации" выберите или снимите флажок **Разрешить участникам просматривать аналитические сведения о зависимостях**.
![Флажок, дающий участникам разрешение для просмотра аналитических сведений](/assets/images/help/organizations/allow-members-to-view-insights.png)
6. Выберите команду **Сохранить**.
