---
title: Синхронизация команды с группой поставщика удостоверений
intro: 'Можно синхронизировать команду {% data variables.product.product_name %} с поддерживаемой группой поставщика удостоверений (IdP), чтобы автоматически добавлять и удалять членов команды.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group
permissions: 'Organization owners and team maintainers can synchronize a {% data variables.product.prodname_dotcom %} team with an IdP group.'
versions:
  ghae: '*'
  ghec: '*'
  feature: scim-for-ghes
topics:
  - Organizations
  - Teams
shortTitle: Synchronize with an IdP
ms.openlocfilehash: c4ea8dc13eee674b962108ba52c71e67e8462b87
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106984'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## Синхронизация команд

{% data reusables.identity-and-permissions.about-team-sync %}

{% ifversion ghec %}Вы можете подключить до пяти групп поставщика удостоверений к команде {% data variables.product.product_name %}. {% elsif ghae %}Вы можете подключить команду в {% data variables.product.product_name %} к одной группе поставщика удостоверений. Все пользователи в группе автоматически добавляются в команду, а также добавляются в родительскую организацию в качестве участников. При отключении группы от команды пользователи, которые стали членами организации посредством членства в команде, удаляются из организации.{% endif %} Группу поставщика удостоверений можно назначить нескольким командам {% data variables.product.product_name %}.

{% ifversion ghec %}При синхронизации команды группы поставщика удостоверений с более чем 5000 участниками не поддерживаются.{% endif %}

После подключения команды {% data variables.product.prodname_dotcom %} к группе поставщика удостоверений администратор поставщика удостоверений должен внести изменения в членство в команде посредством поставщика удостоверений. Вы не можете управлять членством в группах в {% data variables.product.product_name %}{% ifversion ghec %} или с помощью API{% endif %}.

{% ifversion ghec %}{% data reusables.enterprise-accounts.team-sync-override %}{% endif %}

{% ifversion ghec %} Все изменения членства в команде, внесенные с помощью поставщика удостоверений, будут отображаться в журнале аудита в {% data variables.product.product_name %} как изменения, внесенные ботом синхронизации команды. Ваш поставщик удостоверений отправляет данные о членстве в команде в {% data variables.product.prodname_dotcom %} один раз в час.
Подключение команды к группе поставщика удостоверений может привести к удалению некоторых участников команды. Дополнительные сведения см. в разделе [Требования для участников синхронизированных команд](#requirements-for-members-of-synchronized-teams).
{% endif %}

{% ifversion ghae %} При изменении членства в группе поставщика удостоверений ваш поставщик удостоверений отправляет в {% data variables.product.product_name %} запрос SCIM с изменениями в соответствии с расписанием, определенным вашим поставщиком удостоверений. Все запросы, которые изменяют членство в команде {% data variables.product.prodname_dotcom %} или членство в организации, регистрируются в журнале аудита в качестве изменений, внесенных учетной записью, используемой для настройки подготовки пользователей. Дополнительные сведения об этой учетной записи см. в разделе [Настройка подготовки пользователей в организации](/admin/authentication/configuring-user-provisioning-for-your-enterprise). Дополнительные сведения о расписаниях запросов SCIM см. в разделе [Проверка состояния подготовки пользователей](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/application-provisioning-when-will-provisioning-finish-specific-user) в Документации Майкрософт. {% endif %}

Родительские команды невозможно синхронизировать с группами поставщика удостоверений. Если команда, которую вы хотите подключить к группе поставщика удостоверений, является родительской командой, рекомендуется создать новую команду или удалить вложенные связи, которые делают вашу команду родительской. Дополнительные сведения см. в разделах [Сведения о командах](/articles/about-teams#nested-teams), [Создание команды](/organizations/organizing-members-into-teams/creating-a-team) и [Перемещение команды в иерархии организации](/articles/moving-a-team-in-your-organizations-hierarchy).

Для управления доступом к репозиторию для любой команды {% data variables.product.prodname_dotcom %}, включая команды, подключенные к группе поставщика удостоверений, необходимо внести изменения в {% data variables.product.product_name %}. Дополнительные сведения см. в разделах [Сведения о командах](/articles/about-teams) и [Управление доступом команды к репозиторию организации](/articles/managing-team-access-to-an-organization-repository). 

{% ifversion ghec %}Для управления синхронизацией команд можно также использовать API. Дополнительные сведения см. в разделе [Синхронизация команд](/rest/reference/teams#team-sync). {% endif %}

{% ifversion ghec %}
## Требования для участников синхронизированных команд

После подключения команды к группе поставщика удостоверений при синхронизации команд каждый участник группы поставщика удостоверений будет добавлен в соответствующую команду в {% data variables.product.product_name %} только в случае, если соблюдены следующие условия:
- Пользователь является членом организации в {% data variables.product.product_name %}.
- Пользователь уже выполнил вход со своей личной учетной записью {% data variables.product.product_name %} и прошел проверку подлинности в учетной записи организации или корпоративной посредством единого входа SAML по крайней мере один раз.
- Удостоверение единого входа пользователя является членом группы поставщика удостоверений.  

Существующие команды или участники группы, которые не соответствуют этим критериям, будут автоматически удалены из команды {% data variables.product.product_name %} и теряют доступ к репозиториям. Отзыв связанного удостоверения пользователя также приведет к удалению пользователя из всех команд, сопоставленных с группами поставщика удостоверений. Дополнительные сведения см. в разделах [Просмотр доступа SAML участника к вашей организации и управление им](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity) и [Просмотр доступа SAML пользователя к вашему предприятию и управление им](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity).

Удаленного участника команды можно добавить обратно в команду автоматически после проверки подлинности в учетной записи организации или предприятия с помощью единого входа и перемещения в подключенную группу поставщика удостоверений.

Чтобы избежать непреднамеренного удаления участников команды, рекомендуется принудительно применить единый вход SAML в учетной записи вашей организации или предприятия, создать новые команды для синхронизации данных о членстве и проверять членство в группах поставщика удостоверений перед синхронизацией существующих команд. Дополнительные сведения см. в разделах [Применение единого входа SAML для организации](/articles/enforcing-saml-single-sign-on-for-your-organization) и [Настройка единого входа SAML для вашего предприятия](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).

{% endif %}

## Предварительные требования

{% ifversion ghec %} Прежде чем подключить команду {% data variables.product.product_name %} к группе поставщика удостоверений, владелец организации или предприятия должен включить синхронизацию команд для учетной записи вашей организации или предприятия. Дополнительные сведения см. в разделах [Управление синхронизацией команд в организации](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) и [Управление синхронизацией команд для организаций в корпоративной учетной записи](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise).

Чтобы избежать непреднамеренного удаления участников команды, перейдите на портал администрирования поставщика удостоверений и убедитесь, что каждый текущий участник команды также входит в группы поставщика удостоверений, к которым вы хотите подключить эту команду. Если у вас нет такого доступа к поставщику удостоверений, можете обратиться к администратору поставщика удостоверений.

Необходимо пройти проверку подлинности с помощью единого входа SAML. Дополнительные сведения см. в разделе [Проверка подлинности с помощью единого входа SAML](/articles/authenticating-with-saml-single-sign-on).

{% elsif ghae %} Прежде чем подключить команду {% data variables.product.product_name %} к группе поставщика удостоверений, необходимо сначала настроить подготовку пользователей для {% data variables.location.product_location %} с помощью поддерживаемой системы управления междоменной идентификацией (SCIM). Дополнительные сведения см. в разделе [Настройка подготовки пользователей в организации](/admin/authentication/configuring-user-provisioning-for-your-enterprise).

После настройки подготовки пользователей в {% data variables.product.product_name %} с помощью SCIM можно назначить приложение {% data variables.product.product_name %} каждой группе поставщика удостоверений, которую вы хотите использовать в {% data variables.product.product_name %}. Дополнительные сведения см. в статье [Настройка автоматической подготовки пользователей в GitHub AE](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-ae-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-ae) в Документация Майкрософт.

{% elsif scim-for-ghes %} Необходимо настроить подготовку пользователей с помощью SCIM для {% data variables.location.product_location %}. Дополнительные сведения см. в разделе [Настройка подготовки пользователей с помощью SCIM для вашего предприятия](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise).

{% data reusables.scim.ghes-beta-note %} {% endif %}

## Подключение группы поставщика удостоверений к команде

При подключении группы поставщика удостоверений к команде {% data variables.product.product_name %} все пользователи в группе автоматически добавляются в команду. {% ifversion ghae %}Все пользователи, которые еще не были членами родительской организации, также добавляются в организацию.{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion ghec %}
6. В разделе "Группы поставщика удостоверений" используйте раскрывающееся меню и выберите до 5 групп.
    ![Раскрывающееся меню для выбора групп поставщика удостоверений](/assets/images/help/teams/choose-an-idp-group.png){% elsif ghae %}
6. В разделе "Группа поставщика удостоверений" используйте раскрывающееся меню и выберите группу из списка.
    ![Раскрывающееся меню для выбора группы поставщика удостоверений](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png){% endif %}
7. Нажмите кнопку **Сохранить изменения**.

## Отключение группы поставщика удостоверений от команды

При отключении группы поставщика удостоверений от команды {% data variables.product.prodname_dotcom %} участники команды, назначенные команде {% data variables.product.prodname_dotcom %} посредством группы поставщика удостоверений, будут удалены из команды. {% ifversion ghae %} Все пользователи, которые были членами родительской организации только из-за этого подключения команды, также удаляются из организации.{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion ghec %}
6. В разделе "Группы поставщика удостоверений" справа от группы поставщика удостоверений, которую нужно отключить, нажмите {% octicon "x" aria-label="X symbol" %}. 
    ![Отмена подключения выбранной группы поставщика удостоверений от команды GitHub](/assets/images/help/teams/unselect-idp-group.png){% elsif ghae %}
6. В разделе "Группа поставщика удостоверений" справа от группы поставщика удостоверений, которую нужно отключить, нажмите {% octicon "x" aria-label="X symbol" %}. 
    ![Отмена подключения выбранной группы поставщика удостоверений от команды GitHub](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png){% endif %}
7. Нажмите кнопку **Сохранить изменения**.
