---
title: Сведения о профиле вашей организации
intro: На странице профиля вашей организации отображаются основные сведения о вашей организации.
redirect_from:
  - /articles/about-your-organization-s-profile
  - /articles/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Organization's profile
ms.openlocfilehash: a42d5393de00e57f0b642c89a349da86b4ad55f1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108956'
---
При необходимости можно добавить описание, расположение, веб-сайт и адрес электронной почты для своей организации, а также закрепить важные репозитории. {% ifversion fpt or ghec or ghes > 3.3 %} Вы можете настроить общедоступный профиль организации, добавив файл README.md. Дополнительные сведения см. в разделе [Настройка профиля организации](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile). {% endif %}

{% ifversion fpt %} Организации, использующие {% data variables.product.prodname_ghe_cloud %}, могут подтвердить удостоверение своей организации и отобразить значок "Проверено" на странице профиля организации, проверив домены организации с помощью {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Проверка и утверждение домена для организации](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) в документации по {% data variables.product.prodname_ghe_cloud %}.
{% elsif ghec or ghes %} Чтобы подтвердить удостоверение вашей организации и отобразить индикатор событий "Проверено" на странице профиля организации, необходимо проверить домены организации с помощью {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Проверка или утверждение домена для вашей организации](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).
{% endif %}

{% ifversion fpt or ghes or ghec %} ![ Пример страницы](/assets/images/help/organizations/org_profile_with_overview.png) профиля организации {% else %} ![Пример страницы](/assets/images/help/profile/org_profile.png) профиля организации {% endif %}

## Дополнительные материалы

- [Сведения об организациях](/organizations/collaborating-with-groups-in-organizations/about-organizations)
