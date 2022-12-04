---
title: Управление членством в группах поставщиков удостоверений
shortTitle: Manage teams with your IdP
intro: 'Вы можете управлять членством в группах и организациях в {% data variables.product.product_name %} с помощью поставщика удостоверений (IdP) путем подключения групп поставщика удостоверений к командам в {% data variables.enterprise.prodname_emu_enterprise %}.'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/managing-team-memberships-with-identity-provider-groups
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - SSO
  - Teams
ms.openlocfilehash: 179835d6642cd5718a565869337b5420b29407a5
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160827'
---
## Сведения об управлении командами с помощью {% data variables.product.prodname_emus %}.

С помощью {% data variables.product.prodname_emus %} вы можете управлять членством в команде и организации в организации через поставщика удостоверений, подключая команды {% data variables.product.prodname_dotcom %} к группам поставщика удостоверений. При подключении команды в одной из организаций предприятия к группе поставщика удостоверений изменения членства в этой группе отражаются в организации автоматически, благодаря чему не нужно обновлять их вручную или с помощью пользовательских скриптов. 

Если изменение группы поставщика удостоверений или нового подключения к команде приведет к присоединению {% data variables.enterprise.prodname_managed_user %} к команде в организации, в ней он еще не был членом, {% data variables.enterprise.prodname_managed_user %} будет автоматически добавлен в организацию. При отключении группы от команды пользователи, которые стали членами организации с помощью членства в команде, удаляются из организации, если им не назначено членство в организации другими средствами.

{% note %}

**Примечание:** Владельцы организации также могут добавить {% data variables.enterprise.prodname_managed_users %} в организации вручную, если учетные записи уже подготовлены с помощью SCIM.

{% endnote %}

При изменении членства в группе поставщика удостоверений ваш поставщик удостоверений отправляет в {% data variables.product.prodname_dotcom_the_website %} запрос SCIM с изменениями в соответствии с расписанием, определенным вашим поставщиком удостоверений, поэтому изменение может вступить в силу не сразу. Все запросы, которые изменяют членство в команде или организации, регистрируются в журнале аудита в качестве изменений, внесенных учетной записью, используемой для настройки подготовки пользователей.

Команды, подключенные к группам поставщика удостоверений, не могут выступать в качестве родительских или дочерних элементов для других команд. Если команда, которую вы хотите подключить к группе поставщика удостоверений, является родительской или дочерней командой, рекомендуется создать новую команду или удалить вложенные связи, которые делают вашу команду родительской.

Для управления доступом к репозиторию для любой команды в предприятии, включая команды, подключенные к группе поставщика удостоверений, необходимо внести изменения на {% data variables.product.prodname_dotcom_the_website %}. Дополнительные сведения см. в статье [Управление доступом команды к репозиторию организации](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository).

## Требования для подключения групп поставщика удостоверений к командам

Прежде чем вы сможете подключить группу поставщика удостоверений к команде в {% data variables.product.prodname_dotcom %}, необходимо назначить группу приложению {% data variables.product.prodname_emu_idp_application %} в поставщике удостоверений. Дополнительные сведения см. в разделе [Сведения о подготовке SCIM для {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users).

Вы можете подключить команду в предприятии к одной группе поставщика удостоверений. Одну группу поставщика удостоверений можно назначить нескольким командам в предприятии.

При подключении существующей команды к группе поставщика удостоверений необходимо сначала удалить всех участников, добавленных вручную. После подключения команды в предприятии к группе поставщика удостоверений администратор поставщика удостоверений должен внести изменения в членство в команде с помощью поставщика удостоверений. Вы не можете управлять членством в команде на {% data variables.product.prodname_dotcom_the_website %}.

## Создание новой команды, подключенной к группе поставщика удостоверений

Любой член организации может создать новую команду и подключить ее к группе поставщика удостоверений. 

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %}
1. Чтобы подключить команду, выберите раскрывающееся меню "Группы поставщика удостоверений" и выберите команду, которую вы хотите подключить.
    ![Раскрывающееся меню для выбора групп поставщика удостоверений](/assets/images/help/teams/choose-an-idp-group.png) {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create_team %}

## Управление подключением между существующей командой и группой поставщика удостоверений

Владельцы организации и координаторы команды могут управлять существующим подключением между группой поставщика удостоверений и командой.

{% note %}

**Примечание.** Прежде чем подключить существующую команду на {% data variables.product.prodname_dotcom_the_website %} к группе поставщика удостоверений в первый раз, необходимо сначала удалить всех участников команды на {% data variables.product.prodname_dotcom_the_website %}. Дополнительные сведения см. в статье [Удаление членов организации из команды](/github/setting-up-and-managing-organizations-and-teams/removing-organization-members-from-a-team).

{% endnote %}

{% data reusables.profile.access_profile %}

{% data reusables.profile.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
1. При необходимости в разделе "Группа поставщика удостоверений" справа от группы поставщика удостоверений, которую нужно отключить, нажмите {% octicon "x" aria-label="X symbol" %}. 
    ![Отмена подключения выбранной группы поставщика удостоверений от команды GitHub](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png)
1. Чтобы подключить группу поставщика удостоверений, в разделе "Группа поставщика удостоверений" в раскрывающемся меню выберите группу поставщика удостоверений.
    ![Раскрывающееся меню для выбора группы поставщика удостоверений](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
1. Нажмите кнопку **Сохранить изменения**.

## Просмотр групп поставщика удостоверений, членства в группах и подключенных команд

Вы можете просмотреть список групп поставщика удостоверений, команды, подключенные к группе поставщика удостоверений, а также членство в каждой группе в {% data variables.product.product_name %}. Необходимо изменить членство в группе у поставщика удостоверений.

{% data reusables.enterprise-accounts.access-enterprise %}
1. Чтобы просмотреть список групп поставщика удостоверений, на левой боковой панели выберите {% octicon "key" aria-label="The key icon" %} **Поставщик удостоверений**.
    ![Снимок экрана: вкладка "Поставщик удостоверений" на боковой панели предприятия](/assets/images/help/enterprises/enterprise-account-identity-provider-tab.png)
2. Чтобы просмотреть участников и команды, подключенные к группе поставщика удостоверений, щелкните имя группы.
    ![Снимок экрана: список групп поставщика удостоверений, выделено имя группы](/assets/images/help/enterprises/select-idp-group.png)
4. Чтобы просмотреть команды, подключенные к группе поставщика удостоверений, щелкните **Команды**. 
    ![Снимок экрана: кнопка "Команды"](/assets/images/help/enterprises/idp-groups-team-switcher.png)
