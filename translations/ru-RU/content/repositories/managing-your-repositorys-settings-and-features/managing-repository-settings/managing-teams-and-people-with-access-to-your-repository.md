---
title: Управление командами и пользователями с доступом к репозиторию
intro: 'Вы можете просмотреть всех пользователей, у которых есть доступ к репозиторию, и настроить разрешения.'
permissions: People with admin access to a repository can manage teams and people with access to a repository.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
  - /github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '>= 3.4'
topics:
  - Repositories
shortTitle: Teams & people
ms.openlocfilehash: e378332dda56fad39b18fd10da4ee9bf799a9fe3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136694'
---
## Сведения об управлении доступом для репозиториев

Для каждого репозитория, администрируемого в {% data variables.product.prodname_dotcom %}, вы можете просмотреть общие сведения о каждой команде или человеке с доступом к репозиторию. В обзоре вы также можете пригласить новые команды или людей, изменить роль каждой команды или пользователя для репозитория или удалить доступ к репозиторию.

В обзоре можно выполнять аудит доступа к репозиторию, подключать или отключать подрядчиков или сотрудников, а также эффективно реагировать на инциденты безопасности.

{% data reusables.organizations.mixed-roles-warning %}

Дополнительные сведения о ролях репозитория см. в разделах [Уровни разрешений для репозитория учетных записей пользователей](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository) и [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

![Обзор управления доступом](/assets/images/help/repository/manage-access-overview.png)

## Фильтрация списка команд и пользователей

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
1. В разделе "Управление доступом" в поле поиска начните вводить имя команды или пользователя, которого вы хотите найти. При необходимости используйте раскрывающиеся меню для фильтрации поиска. 
  ![Поле поиска для фильтрации списка команд или пользователей с доступом](/assets/images/help/repository/manage-access-filter.png)

## Изменение разрешений для команды или пользователя

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
4. В разделе "Управление доступом" найдите команду или пользователя, роль которого вы хотите изменить, а затем выберите раскрывающийся список "Роль" и щелкните новую роль.
  ![Использование раскрывающегося списка "Роль" для выбора новых разрешений для команды или пользователя](/assets/images/help/repository/manage-access-role-drop-down.png)

## Приглашение команды или пользователя

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %} {% data reusables.organizations.invite-teams-or-people %}
5. В поле поиска начните вводить имя команды или пользователя, которого нужно пригласить, а затем щелкните имя в списке совпадений.
  ![Поле поиска для ввода имени команды или пользователя, которого нужно пригласить в репозиторий](/assets/images/help/repository/manage-access-invite-search-field.png)
6. В разделе "Выбор роли" выберите роль репозитория, чтобы назначить команде или пользователю, а затем нажмите кнопку **Добавить ИМЯ в РЕПОЗИТОРИЙ**.
  ![Выбор разрешений для команды или пользователя](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Удаление доступа команды или пользователя

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
4. В разделе "Управление доступом" найдите команду или пользователя, доступ которого вы хотите удалить, а затем щелкните {% octicon "trash" aria-label="The trash icon" %}.
  ![Значок корзины для удаления доступа](/assets/images/help/repository/manage-access-remove.png)

## Дополнительные материалы

- [Настройка видимости репозитория](/github/administering-a-repository/setting-repository-visibility)
- [Настройка базовых разрешений для организации](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)
