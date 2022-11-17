---
title: Приглашение пользователей для управления предприятием
intro: 'Вы можете {% ifversion ghec %}пригласить людей стать владельцами предприятия или менеджерами по выставлению счетов для {% elsif ghes %}добавить владельцев предприятия в {% endif %} вашей корпоративной учетной записи. Вы также можете удалить владельцев предприятия {% ifversion ghec %}или менеджеров по выставлению счетов {% endif %}, которым больше не нужен доступ к корпоративной учетной записи.'
permissions: 'Enterprise owners can {% ifversion ghec %}invite other people to become{% elsif ghes %}add{% endif %} additional enterprise administrators.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Invite people to manage
ms.openlocfilehash: 7cdbee6f1b37a8300f3523712c6e0dda4293af74
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180450'
---
## Сведения о пользователях, которые могут управлять корпоративной учетной записью

{% data reusables.enterprise-accounts.enterprise-administrators %} Дополнительные сведения см. в разделе [Роли на предприятии](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise).

{% ifversion ghes %}

Если вы хотите управлять владельцами и менеджерами по выставлению счетов для корпоративной учетной записи на {% data variables.product.prodname_dotcom_the_website %}, см. раздел [Приглашение пользователей для управления предприятием](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise) в документации {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

{% ifversion ghec %}

Если предприятие использует {% data variables.product.prodname_emus %}, то владельцы предприятия могут добавляться или удаляться только через поставщика удостоверений. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).

{% endif %}

{% tip %}

**Совет.** Дополнительные сведения об управлении пользователями в организации, принадлежащей корпоративной учетной записи, см. в разделах [Управление членством в организации](/articles/managing-membership-in-your-organization) и [Управление доступом пользователей к организации с помощью ролей](/articles/managing-peoples-access-to-your-organization-with-roles).

{% endtip %}

## {% ifversion ghec %}Приглашение{% elsif ghes %}Добавление{% endif %} администратора предприятия в корпоративную учетную запись

{% ifversion ghec %}После приглашения пользователя присоединиться к корпоративной учетной записи он должен принять полученное по электронной почте приглашение, прежде чем сможет получить доступ к корпоративной учетной записи. Срок действия ожидающих приглашений истекает через 7 дней.{% endif %}

{% ifversion enterprise-membership-view-improvements %} Вы сможете увидеть все ожидающие приглашения стать администратором корпоративной учетной записи. Дополнительные сведения см. в разделе [Просмотр пользователей на предприятии](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-pending-invitations).
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. Над списком администраторов щелкните {% ifversion ghec %}**Пригласить администратора**{% elsif ghes %}**Добавить владельца**{% endif %}.
  {% ifversion ghec %} ![Кнопка "Пригласить администратора" над списком владельцев предприятия](/assets/images/help/business-accounts/invite-admin-button.png) {% elsif ghes %} ![Кнопка "Добавить владельца" над списком владельцев предприятия](/assets/images/help/business-accounts/add-owner-button.png) {% endif %}
1. Введите имя пользователя, полное имя или адрес электронной почты пользователя, которого вы хотите пригласить в качестве администратора предприятия, а затем выберите нужного пользователя из результатов.
  ![Модальное поле с полем для ввода имени пользователя, полного имени или адреса электронной почты, а также кнопкой "Пригласить"](/assets/images/help/business-accounts/invite-admins-modal-button.png){% ifversion ghec %}
1. Выберите **владельца** или **менеджера по выставлению счетов**.
  ![Модальное поле с выбором ролей](/assets/images/help/business-accounts/invite-admins-roles.png)
1. Щелкните **Send Invitation** (Отправить приглашение).
  ![Кнопка "Отправить приглашение"](/assets/images/help/business-accounts/invite-admins-send-invitation.png){% endif %}{% ifversion ghes %}
1. Нажмите кнопку **Добавить**.
  ![Кнопка "Добавить"](/assets/images/help/business-accounts/add-administrator-add-button.png){% endif %}

## Удаление администратора предприятия из корпоративной учетной записи

Только владельцы предприятия могут удалять других администраторов предприятия из корпоративной учетной записи.

{% ifversion ghec %} Если администратор, которого вы хотите удалить, является членом любой организации, принадлежащей предприятию, можно выбрать **Преобразовать в члена**, чтобы удалить административную роль, но сохранить членство в организации или **Удалить из предприятия**, что приведет к удалению как его административной роли, так и членства в организации.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. Рядом с именем пользователя, которого вы хотите удалить, щелкните {% octicon "gear" aria-label="The Settings gear" %}, затем {% ifversion ghes %}**Удалить владельца**{% elsif ghec %}**Преобразовать в члена** или **Удалить из предприятия**.{% endif %}.
  {% ifversion ghec %} ![Механизм параметров с опцией меню для удаления администратора предприятия](/assets/images/help/business-accounts/remove-admin.png) {% elsif ghes %} ![Механизм параметров с опцией меню для удаления администратора предприятия](/assets/images/help/business-accounts/ghes-remove-owner.png) {% endif %}
1. Прочтите подтверждение, затем щелкните {% ifversion ghes %}**Удалить владельца**{% elsif ghec %}**Да, преобразовать USERNAME в члена**{% endif %}.
