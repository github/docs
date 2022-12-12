---
title: Просмотр пользователей в организации
intro: Для аудита доступа к корпоративным ресурсам или использования пользовательских лицензий владельцы предприятия могут просмотреть сведения о каждом администраторе или участнике предприятия.
permissions: Enterprise owners can view the people in an enterprise.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-people-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: View people in your enterprise
ms.openlocfilehash: 1c9b8402a0924c799f4747cf5a6cdae051aa4a49
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120596'
---
## Сведения о списке пользователей в предприятии

Для аудита доступа к ресурсам предприятия и управления потреблением лицензий просмотрите список всех пользователей, имеющих доступ к вашему предприятию. 

Вы можете увидеть всех текущих участников и администраторов предприятия{% ifversion ghec %}, а также приглашений в режиме ожидания, чтобы стать участниками предприятия или его администраторами{% endif %}. Чтобы упростить использование этих сведений, внутри списков можно выполнять поиск и фильтрацию.

{% ifversion ghec %}

Если для вашего предприятия настроено решение {% data variables.product.prodname_github_connect %}, при фильтрации списка пользователей на предприятии применяются следующие ограничения.

- Фильтр по состоянию двухфакторной проверки подлинности не показывает пользователей, у которых есть только учетная запись в экземпляре {% data variables.product.prodname_ghe_server %}.
- При объединении фильтра по учетным записям в экземплярах {% data variables.product.prodname_ghe_server %} с фильтром по организациям или состоянию двухфакторной проверки подлинности вы не увидите никаких результатов.

Дополнительные сведения о {% data variables.product.prodname_github_connect %} см. в следующих статьях.

- [Сведения о {% data variables.product.prodname_github_connect %}](/enterprise-server/admin/configuration/configuring-github-connect/about-github-connect) в документации по {% data variables.product.prodname_ghe_server %}
- [Сведения о {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect) в документации {% data variables.product.prodname_ghe_managed %}

{% endif %}

{% ifversion enterprise-member-csv %} Вы также можете экспортировать сведения о членстве для предприятия. Дополнительные сведения см. в разделе [Экспорт сведений о членстве для вашего предприятия](/admin/user-management/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise).
{% endif %}

## Просмотр администраторов предприятия

Вы можете просмотреть всех текущих владельцев предприятия{% ifversion ghec %} и менеджеров по выставлению счетов{% endif %} для вашего предприятия. {% ifversion enterprise-membership-view-improvements %} Вы можете просматривать полезные сведения о каждом администраторе{% ifversion ghec %} и фильтровать список по роли{% endif %}.{% endif %} Вы можете найти определенного человека, выполнив поиск его имени пользователя или отображаемого имени.

{% ifversion ghes > 3.5 %} Владельцы предприятия, учетные записи которых приостановлены, включаются в список администраторов предприятия и определяются как "Приостановленные". Попробуйте понизить уровень привилегий для владельцев приостановленных учетных записей, которых вы видите. Дополнительные сведения см. в разделе [Повышение или понижение уровня прав для роли администратора сайта](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator#demoting-a-site-administrator-from-the-enterprise-settings).
{% endif %}

{% ifversion not ghae %} Вы также можете удалять администраторов. Дополнительные сведения см. в записи блога См. статью [Приглашение пользователей для управления предприятием](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account).
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}

## Просмотр участников предприятия {% ifversion enterprise-membership-view-improvements %}{% else %}и внешних участников совместной работы{% endif %}

Вы можете просмотреть всех текущих участников {% ifversion enterprise-membership-view-improvements %}{% else %}или внешних участников совместной работы{% endif %} для вашего предприятия. Вы можете просматривать полезные сведения о каждой учетной записи и фильтровать список удобным для вас способом, например по роли. Вы можете найти конкретного человека, выполнив поиск по имени пользователя или отображаемому имени.

Вы можете просматривать дополнительные сведения о доступе пользователя к вашему предприятию, например об организации, к которой принадлежит пользователь, щелкнув его имя.

{% ifversion remove-enterprise-members %} Вы также можете удалить любого участника предприятия изо всех организаций, принадлежащих этому предприятию. Дополнительные сведения см. в статье [Удаление члена предприятия](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise).
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}{% ifversion enterprise-membership-view-improvements %}{% else %}
1. При необходимости, чтобы просмотреть список сторонних участников совместной работы вместо списка участников организации, щелкните **Сторонние участники совместной работы**.

   ![Вкладка "Внешние участники совместной работы" на странице участников предприятия](/assets/images/help/business-accounts/outside-collaborators-tab.png){% endif %}

{% ifversion enterprise-membership-view-improvements %}
## Просмотр внешних участников совместной работы

Вы можете просматривать всех текущих внешних участников совместной работы для вашего предприятия. Вы можете просматривать полезные сведения о каждом участнике совместной работы и фильтровать список удобным для вас способом, например по организации. Вы можете найти конкретного участника совместной работы, выполнив поиск по имени пользователя или отображаемому имени.

Вы можете просматривать дополнительные сведения о доступе пользователя к вашему предприятию, например список всех репозиториев, к которым имеет доступ участник совместной работы, щелкнув его имя.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. В разделе "Люди" щелкните **Внешние участники совместной работы**.

  ! [Вкладка "Участники совместной работы" на боковой панели параметров предприятия] {% ifversion ghec%}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% else %}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% endif %}
  
{% endif %}

{% ifversion ghec %}
## Просмотр приглашений в режиме ожидания

Вы можете просмотреть все приглашения в режиме ожидания, чтобы стать участниками, администраторами или внешними участниками совместной работы в предприятии. Список можно отфильтровать удобным для вас способом, например по организации. Вы можете найти конкретного человека, выполнив поиск по имени пользователя или отображаемому имени.

В списке ожидающих участников для любой отдельной учетной записи можно отменить все приглашения на присоединение к организациям, принадлежащим вашему предприятию. Это не отменит приглашений стать администратором предприятия или внешним участником совместной работы для этого человека. 

{% note %}

**Примечание.** Если приглашение было подготовлено с помощью SCIM, необходимо отменить его через поставщика удостоверений (IdP) вместо {% data variables.product.prodname_dotcom %}.

{% endnote %}

Если вы используете {% data variables.visual_studio.prodname_vss_ghe %}, список ожидающих приглашений включает всех подписчиков {% data variables.product.prodname_vs %}, которые не присоединились ни к одной из ваших организаций в {% data variables.product.prodname_dotcom %}, даже если у подписчика нет ожидающего приглашения присоединиться к организации. Дополнительные сведения о том, как получить доступ подписчиков {% data variables.product.prodname_vs %} к {% data variables.product.prodname_enterprise %}, см. в разделе [Настройка {% data variables.visual_studio.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. В разделе "Люди" щелкните **Приглашения в режиме ожидания**.

   ![Снимок экрана, на котором изображена вкладка "Приглашения в режиме ожидания" на боковой панели](/assets/images/help/enterprises/pending-invitations-tab.png)
1. При необходимости для того, чтобы отменить все приглашения для учетной записи на присоединение к организациям, принадлежащим вашему предприятию, справа от учетной записи щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, а затем нажмите кнопку **Отменить приглашение**.

   ![Снимок экрана, на котором изображена кнопка "Отменить приглашение"](/assets/images/help/enterprises/cancel-enterprise-member-invitation.png)
1. При необходимости для того, чтобы просмотреть приглашения в режиме ожидания для администраторов предприятия или внешних участников совместной работы, в разделе "Ожидающие участники" щелкните **Администраторы** или **Внешние участники совместной работы**.

   ![Снимок экрана, на котором изображены вкладки "Участники", "Администраторы" и "Внешние участники совместной работы"](/assets/images/help/enterprises/pending-invitations-type-tabs.png)

## Просмотр приостановленных элементов в {% data variables.enterprise.prodname_emu_enterprise %}

Если ваше предприятие использует {% data variables.product.prodname_emus %}, вы можете просматривать приостановленных пользователей. Приостановленные пользователи — это участники, подготовка которых была отозвана после отмены назначения из приложения {% data variables.product.prodname_emu_idp_application %} или они были удалены из поставщика удостоверений. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. Чтобы просмотреть список приостановленных участников, над списком активных элементов нажмите кнопку **Приостановленные**.
  ![Снимок экрана: параметр "Приостановленные"](/assets/images/help/enterprises/view-suspended-members.png)

{% endif %}

## Просмотр неактивных пользователей

Вы можете просмотреть список всех неактивных пользователей {% ifversion ghes or ghae %}, права которых не были приостановлены и {% endif %} и которые не являются администраторами сайта. {% data reusables.enterprise-accounts.dormant-user-activity-threshold %} Дополнительные сведения см. в разделе [Управление неактивными пользователями](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users).

{% ifversion filter-by-enterprise-member-type %}
## Фильтрация по типу элемента{% ifversion ghec %} в {% data variables.enterprise.prodname_emu_enterprise %}{% endif %}

{% ifversion ghec %} Если ваше предприятие использует {% data variables.product.prodname_emus %}, вы{% elsif ghes or ghae %}Вы{% endif %} можете отфильтровать список участников организации по типу, чтобы определить, управляется ли членство через поставщика удостоверений или управляется напрямую. Членство, управляемое через поставщика удостоверений, добавлялось через группу поставщика удостоверений, а группа удостоверений была подключена к команде в организации. Членства, управляемые напрямую, были добавлены в организацию вручную. Способ управления членством в организации определяет способ его удаления. С помощью этого фильтра можно определить, как участники были добавлены в организацию, чтобы узнать, как их удалить. {% ifversion ghec %} Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users#about-organization-membership-management). {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. В разделе "Организации" в строке поиска начните вводить название организации, пока организация не появится в результатах поиска, а затем щелкните название организации.
   ![Снимок экрана: поле поиска для организаций](/assets/images/help/enterprises/organization-search.png)
1. Под названием организации щелкните {% octicon "person" aria-label="The Person icon" %} **Люди**.
   ![Снимок экрана: вкладка Люди](/assets/images/help/enterprises/emu-organization-people-tab.png)
1. Над списком участников нажмите кнопку **Тип**, а затем выберите тип элементов, которые нужно просмотреть.
   ![Снимок экрана: кнопка "Тип"](/assets/images/help/enterprises/filter-by-member-type.png)

{% endif %}

{% ifversion ghec or ghes %}
## Просмотр участников без адреса электронной почты из проверенного домена

Список участников предприятия, у которых нет адреса электронной почты из проверенного домена, связанного с учетной записью пользователя, можно просмотреть на сайте {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %}
1. В разделе "Параметры уведомлений" щелкните ссылку {% octicon "eye" aria-label="The github eye icon" %} **Просмотр участников предприятия без электронной почты в утвержденном или проверенном домене**.
{% endif %}

## Дополнительные материалы

- [Роли на предприятии](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)
