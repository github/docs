---
title: Ограничение уведомлений по электронной почте для организации
intro: 'Чтобы предотвратить утечку информации об организации в личные учетные записи электронной почты, можно ограничить домены, в которых члены могут получать уведомления по электронной почте о действиях организации.'
permissions: Organization owners can restrict email notifications for an organization.
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain
  - /articles/restricting-email-notifications-to-an-approved-domain
  - /github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain
  - /organizations/keeping-your-organization-secure/restricting-email-notifications-to-an-approved-domain
  - /organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: Restrict email notifications
ms.openlocfilehash: 480f587862e0618c0624eec581520343c54afa35
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/12/2022
ms.locfileid: '147060101'
---
## Сведения об ограничениях электронной почты

При включенных ограничениях уведомлений по электронной почте в организации члены организации могут использовать только адрес электронной почты, связанный с проверенным или утвержденным доменом, для получения уведомлений по электронной почте о действиях организации. Дополнительные сведения см. в разделе [Проверка или утверждение домена для вашей организации](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).

{% ifversion ghec %} {% note %}

**Примечание.** Чтобы ограничить уведомления по электронной почте, организация должна использовать {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.notifications.email-restrictions-verification %}

Внешние участники совместной работы не подвергаются ограничениям уведомлений по электронной почте для проверенных или утвержденных доменов. Дополнительные сведения о внешних участниках совместной работы см. в разделе [Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).

Если организация принадлежит корпоративной учетной записи, члены организации смогут получать уведомления от любых проверенных или утвержденных доменов для корпоративной учетной записи в дополнение к любым проверенным или утвержденным доменам для организации. Дополнительные сведения см. в разделе [Проверка или утверждение домена для предприятия](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).

## Ограничение уведомлений по электронной почте

Перед ограничением уведомлений по электронной почте для организации необходимо проверить или утвердить хотя бы один домен для организации либо владелец предприятия должен проверить или утвердить по крайней мере один домен для корпоративной учетной записи.

Дополнительные сведения о проверке и утверждении доменов для организации см. в разделе [Проверка или утверждение домена для организации](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %} {% data reusables.organizations.restrict-email-notifications %}
6. Выберите команду **Сохранить**.
