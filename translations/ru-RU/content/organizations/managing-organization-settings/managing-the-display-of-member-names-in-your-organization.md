---
title: Управление отображением имен участников в организации
intro: Вы можете разрешить участникам организации просматривать имя профиля автора комментария в частных репозиториях в организации.
product: '{% data reusables.gated-features.display-names %}'
redirect_from:
  - /articles/managing-the-display-of-member-names-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-display-of-member-names-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage display of member names
ms.openlocfilehash: 0a394b40689d95ea37906fef2ddc9b203e2041c3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409430'
---
Владельцы организации могут управлять отображением имен участников в организации.

![Имя профиля комментатора, отображаемое в примечании](/assets/images/help/issues/commenter-full-name.png)

Каждый участник организации выбирает собственное имя профиля в своих параметрах. Дополнительные сведения см. в разделе [Персонализация профиля](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#changing-your-profile-name).

{% ifversion profile-name-enterprise-setting %} Если владелец предприятия настроил политику на уровне предприятия, вы не сможете настроить этот параметр для своей организации. Дополнительные сведения см. в разделе [Применение политик управления репозиториями в организации](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories).{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. В разделе "Разрешения репозитория администраторов" установите или снимите флажок **Разрешить участникам просматривать имя профиля автора примечания в закрытых репозиториях**.
![Флажок, позволяющий участникам просматривать полное имя автора примечаний в частных репозиториях](/assets/images/help/organizations/allow-members-to-view-full-names.png)
6. Выберите команду **Сохранить**.
