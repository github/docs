---
title: Удаление личной учетной записи
intro: 'Личную учетную запись можно удалить в {% данных variables.location.product_location %} в любое время.'
redirect_from:
  - /articles/deleting-a-user-account
  - /articles/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Delete your account
ms.openlocfilehash: 07e738ef90e8fa51bde41e2242625bd8ae564bf7
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098239'
---
## Об удалении личной учетной записи

При удалении личной учетной записи удаляются все репозитории, вилки частных репозиториев, вики-сайтов, проблемы, запросы на вытягивание и страницы, принадлежащие вашей учетной записи. {% ifversion fpt or ghec %}Созданные вами проблемы и запросы на вытягивание и комментарии, которые вы оставили в репозиториях других пользователей, не будут удалены. Ваши ресурсы и комментарии будут связаны с [пользователем-призраком](https://github.com/ghost). {% else %}Созданные вами проблемы и запросы на вытягивание и комментарии, которые вы оставили в репозиториях других пользователей, не будут удалены.{% endif %}

{% ifversion ghec %}

{% note %}

**Примечание.** Если ваша организация управляет вашей учетной записью и входите в {% данных variables.location.product_location %} через поставщика удостоверений вашей компании (IdP), вы не сможете удалить свою учетную запись. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users).

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %} При удалении учетной записи мы прекращаем выставление счетов. Адрес электронной почты, связанный с учетной записью, становится доступным для использования с другой учетной записью на {% данных variables.location.product_location %}. Через 90 дней имя учетной записи также становится доступно любому другому пользователю для использования в новой учетной записи. {% endif %}

Если вы являетесь единственным владельцем организации, необходимо передать владение другому лицу или удалить организацию, прежде чем удалить личную учетную запись. Если в организации есть другие владельцы, необходимо удалить себя из организации, прежде чем удалить личную учетную запись.

Дополнительные сведения см. в следующих руководствах.

- [Передача владения организацией](/articles/transferring-organization-ownership)
- [Удаление учетной записи организации](/articles/deleting-an-organization-account)
- [Удаление себя из организации](/articles/removing-yourself-from-an-organization/)

## Резервное копирование данных учетной записи

Перед удалением личной учетной записи создайте копию всех репозиториев, частных вилок, вики-сайтов, проблем и запросов на вытягивание, принадлежащих вашей учетной записи. Дополнительные сведения см. в разделе [Резервное копирование репозитория](/repositories/archiving-a-github-repository/backing-up-a-repository).

{% warning %}

**Предупреждение.** После удаления личной учетной записи {% ifversion fpt or ghec %}{% data variables.product.company_short %}{% elsif ghes or ghae %}владелец предприятия{% endif %} не может восстановить содержимое.

{% endwarning %}

## Удаление личной учетной записи

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. В нижней части страницы "Параметры учетной записи" в разделе "Удаление учетной записи" нажмите кнопку **Удалить учетную запись**. Перед удалением личной учетной записи выполните следующие действия.
    - Если вы являетесь единственным владельцем в организации, необходимо передать владение другому лицу или удалить организацию.
    - Если в организации есть другие владельцы организации, необходимо удалить себя из организации.
   ![Кнопка удаления учетной записи](/assets/images/help/settings/settings-account-delete.png)
4. В диалоговом окне "Убедитесь, что вы понимаете последствия своих действий" подтвердите, что понимаете, что происходит при удалении учетной записи: ![Диалоговое окно подтверждения удаления учетной записи ](/assets/images/help/settings/settings-account-deleteconfirm.png){% ifversion fpt or ghec %}- Помните, что все репозитории, вилки частных репозиториев, вики-сайты, проблемы, запросы на вытягивание и сайты {% data variables.product.prodname_pages %}, принадлежащие вашей учетной записи, будут удалены, и выставление счетов будет немедленно прекращено. Также ваше имя пользователя через 90 дней станет доступно любому пользователю для использования в {% data variables.product.product_name %}.
  {% else %}- Помните, что будут удалены все репозитории, вилки частных репозиториев, вики-сайты, проблемы, запросы на вытягивание и страницы, принадлежащие вашей учетной записи, и ваше имя пользователя станет доступно для использования в {% data variables.product.product_name %}.
  {% endif %}- В первом поле введите имя пользователя или адрес электронной почты {% data variables.product.product_name %}.
    - Во втором поле введите фразу из запроса.
