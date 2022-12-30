---
title: Ограничение уведомлений по электронной почте для организации
intro: 'Можно предотвратить утечку сведений о предприятии в личные учетные записи электронной почты благодаря ограничению доменов, в которых участники получают уведомления по электронной почте о действиях в организациях, входящих в состав вашего предприятия.'
product: '{% data reusables.gated-features.restrict-email-domain %}'
versions:
  ghec: '*'
  ghes: '*'
permissions: Enterprise owners can restrict email notifications for an enterprise.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policies
redirect_from:
  - /admin/policies/restricting-email-notifications-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account-to-approved-domains
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/restricting-email-notifications-for-your-enterprise-account
shortTitle: Restrict email notifications
ms.openlocfilehash: f5ef3b4ffd3db266e96d4f7fc90f43cbd226034f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066500'
---
## Сведения об ограничениях электронной почты для организации

При ограничении уведомлений по электронной почте для получения уведомлений об активности в организациях, принадлежащих вашему предприятию, члены организации могут использовать только адрес электронной почты, который зарегистрирован в проверенном или утвержденном домене.

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

Домены можно наследовать от предприятия или настроить для конкретной организации. Дополнительные сведения см. в разделах [Проверка или утверждение домена для вашего предприятия](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) и [Ограничение уведомлений по электронной почте для организации](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization).

{% data reusables.notifications.email-restrictions-verification %}

Если для предприятия включены ограничения электронной почты, владельцы организации не могут отключить ограничения электронной почты для любой организации, принадлежащей предприятию. В случае изменений, в результате которых организация не имеет проверенных или утвержденных доменов, унаследованных от предприятия, которому принадлежит организация, или для конкретной организации, ограничения электронной почты для такой организации будут отключены.

## Ограничение уведомлений по электронной почте для организации

Прежде чем ограничить уведомления по электронной почте для вашего предприятия, необходимо проверить или утвердить по крайней мере один домен для предприятия. {% ifversion ghec %} Дополнительные сведения см. в разделе [Проверка или утверждение домена для вашего предприятия](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %} {% data reusables.organizations.restrict-email-notifications %}
1. Выберите команду **Сохранить**.
