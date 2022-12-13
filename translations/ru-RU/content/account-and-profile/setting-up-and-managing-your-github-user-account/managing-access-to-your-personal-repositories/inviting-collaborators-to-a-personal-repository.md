---
title: Приглашение участников совместной работы в личный репозиторий
intro: You can {% ifversion fpt or ghec %}invite users to become{% else %}add users as{% endif %} collaborators to your personal repository.
redirect_from:
- /articles/how-do-i-add-a-collaborator
- /articles/adding-collaborators-to-a-personal-repository
- /articles/inviting-collaborators-to-a-personal-repository
- /github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
shortTitle: Invite collaborators
ms.openlocfilehash: 6db661abfc48b87ae7eae2c515be2e14e3717ec4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092282"
---
Репозитории, принадлежащие организации, могут предоставлять более детализированный доступ. Дополнительные сведения см. в разделе [Разрешения на доступ к {% data variables.product.prodname_dotcom %}](/articles/access-permissions-on-github).

{% data reusables.organizations.org-invite-expiration %}

{% ifversion fpt or ghec %}

Если вы являетесь членом {% data variables.product.prodname_emu_enterprise %}, то можете приглашать только других участников предприятия для совместной работы. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% note %}

**Примечание.** {% data variables.product.company_short %} ограничивает количество пользователей, которые могут быть приглашены в репозиторий в течение 24-часового периода. Если это ограничение превышено, подождите 24 часа или создайте организацию для совместной работы с большим числом пользователей.

{% endnote %}

{% endif %}

1. Уточните имя пользователя, которого вы приглашаете в качестве участника совместной работы.{% ifversion fpt or ghec %} Если у этого участника еще нет имени пользователя, он может зарегистрироваться на {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Регистрация новой учетной записи {% data variables.product.prodname_dotcom %}](/articles/signing-up-for-a-new-github-account).{% endif %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658%} {% data reusables.repositories.click-collaborators-teams %}
1. Нажмите кнопку **Пригласить участника совместной работы**.
  ![Кнопка "Пригласить участника совместной работы"](/assets/images/help/repository/invite-a-collaborator-button.png)
2. В поле поиска начните вводить имя пользователя, которого нужно пригласить, а затем щелкните имя в списке совпадений.
  ![Поле поиска для ввода имени пользователя, которого нужно пригласить в репозиторий](/assets/images/help/repository/manage-access-invite-search-field-user.png)
3. Нажмите кнопку **Добавить ИМЯ в РЕПОЗИТОРИЙ**.
    ![Кнопка для добавления участника совместной работы](/assets/images/help/repository/add-collaborator-user-repo.png) {% else %}
5. На левой боковой панели щелкните **Участники совместной работы**.
![Боковая панель параметров репозитория с выделенным текстом "Участники совместной работы"](/assets/images/help/repository/user-account-repo-settings-collaborators.png)
6. В разделе "Участники совместной работы" начните вводить имя пользователя участника совместной работы.
7. Выберите имя пользователя участника совместной работы в раскрывающемся меню.
   ![Раскрывающееся меню списка участников совместной работы](/assets/images/help/repository/repo-settings-collab-autofill.png)
8. Нажмите кнопку **Добавить участника совместной работы**.
   ![Кнопка "Добавить участника совместной работы"](/assets/images/help/repository/repo-settings-collab-add.png) {% endif %} {% ifversion fpt or ghec %}
9. Пользователь получит электронное письмо с приглашением в репозиторий. После принятия приглашения у него будет доступ участника совместной работы к репозиторию.
{% endif %}

## <a name="further-reading"></a>Дополнительные материалы

- [Уровни разрешений для репозитория личной учетной записи](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account)
- [Удаление участника совместной работы из личного репозитория](/articles/removing-a-collaborator-from-a-personal-repository)
- [Удаление себя из репозитория участника совместной работы](/articles/removing-yourself-from-a-collaborator-s-repository)
- [Организация членов в команды](/organizations/organizing-members-into-teams)
