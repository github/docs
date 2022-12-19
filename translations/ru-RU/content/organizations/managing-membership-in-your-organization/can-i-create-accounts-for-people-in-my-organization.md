---
title: Можно ли создавать учетные записи для пользователей в моей организации?
intro: 'Хотя вы можете добавить пользователей в созданную организацию, создание личных учетных записей от имени другого пользователя недоступно.'
redirect_from:
  - /articles/can-i-create-accounts-for-those-in-my-organization
  - /articles/can-i-create-accounts-for-people-in-my-organization
  - /github/setting-up-and-managing-organizations-and-teams/can-i-create-accounts-for-people-in-my-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Create accounts for people
ms.openlocfilehash: 9ddbb857d86a3cada3f11a20a3ed1fab7bb263b8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109827'
---
## Сведения о личных учетных записях

Так как вы осуществляете доступ к организации путем входа в личную учетную запись, каждому члену команды необходимо создать собственную личную учетную запись. После создания имен пользователей для всех пользователей, которых вы хотите добавить в свою организацию, можно добавить этих пользователей в команды.

{% ifversion fpt or ghec %} {% ifversion fpt %}Организации, которые используют {% data variables.product.prodname_ghe_cloud %}{% else %}You{% endif %}, могут применять единый вход SAML для централизованного управления доступом, который предоставляется личным учетным записям к ресурсам организации посредством поставщика удостоверений. Дополнительные сведения см. в разделе [Сведения об управлении удостоверениями и доступом с помощью единого входа SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion fpt %} в документации по {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

Можно также рассмотреть {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %} {% endif %}

## Добавление пользователей в организацию

1. Предоставьте каждому пользователю инструкции по [созданию личной учетной записи](/articles/signing-up-for-a-new-github-account).
2. Запросите имя пользователя для каждого пользователя, которому вы хотите предоставить членство в организации.
3. [Пригласите новые личные учетные записи присоединиться](/articles/inviting-users-to-join-your-organization) к вашей организации. Используйте [роли организации](/articles/permission-levels-for-an-organization) и [разрешения репозитория](/articles/repository-permission-levels-for-an-organization), чтобы ограничить доступ к каждой учетной записи.
