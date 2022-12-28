---
title: Повышение или понижение уровня для администратора сайта
redirect_from:
  - /enterprise/admin/articles/promoting-a-site-administrator
  - /enterprise/admin/articles/demoting-a-site-administrator
  - /enterprise/admin/user-management/promoting-or-demoting-a-site-administrator
  - /admin/user-management/promoting-or-demoting-a-site-administrator
intro: 'Администраторы сайта могут повысить уровень любой обычной учетной записи пользователя до администратора сайта, а также понизить роль других администраторов сайта до обычных пользователей.'
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - User account
  - Enterprise
shortTitle: Manage administrators
ms.openlocfilehash: 8a96b85a2d9d097a7aae46414246ef19287cfc27
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008799'
---
{% tip %}

**Примечание.** Если [синхронизация LDAP включена](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync) и атрибут `Administrators group` задается при [настройке доступа LDAP для пользователей](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance), эти пользователи автоматически получат доступ администратора сайта к экземпляру. В этом случае вы не можете вручную повысить уровень пользователей, выполнив указанные ниже действия. Их необходимо добавить в группу администраторов LDAP.

{% endtip %}

Сведения о повышении уровня пользователя до владельца организации см. в разделе `ghe-org-admin-promote` в [Служебные программы командной строки](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-admin-promote).

## Повышение уровня пользователя из параметров предприятия

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
5. В правом верхнем углу страницы щелкните **Добавить владельца**.
  ![Кнопка для добавления администратора](/assets/images/help/business-accounts/business-account-add-admin-button.png)
6. В поле поиска введите имя пользователя и щелкните **Добавить**.
  ![Поле поиска для добавления администратора](/assets/images/help/business-accounts/business-account-search-to-add-admin.png)

## Понижение уровня администратора сайта из параметров предприятия

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. В левом верхнем углу страницы в поле поиска "Найти администратора" введите имя пользователя, которому вы хотите понизить уровень.
  ![Поле поиска для поиска администратора](/assets/images/help/business-accounts/business-account-search-for-admin.png)

1. В результатах поиска найдите имя пользователя, которому вы хотите понизить уровень, а затем примените раскрывающееся меню {% octicon "gear" %} и выберите **Удалить владельца**.
  ![Параметр "Удаление из предприятия"](/assets/images/help/business-accounts/demote-admin-button.png)

## Повышение уровня пользователя из командной строки

1. [SSH-подключение](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/) к устройству.
2. Запустите [ghe-user-promote](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-promote) с именем пользователя, чтобы повысить уровень.
  ```shell
  $ ghe-user-promote USERNAME
  ```

## Понижение уровня администратора сайта из командной строки

1. [SSH-подключение](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/) к устройству.
2. Запустите [ghe-user-demote](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-demote) с именем пользователя, чтобы понизить уровень.
  ```shell
  $ ghe-user-demote USERNAME
  ```
