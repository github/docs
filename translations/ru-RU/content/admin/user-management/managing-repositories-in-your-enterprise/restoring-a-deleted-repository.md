---
title: Восстановление удаленного репозитория
intro: 'Вы можете восстановить удаленные репозитории, чтобы восстановить их содержимое.'
permissions: Enterprise owners can restore a deleted repository.
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
  - Privacy
  - Repositories
shortTitle: Restore a deleted repository
ms.openlocfilehash: 538521e865b6a59c1d143a9774d7a462f5e4ee42
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/12/2022
ms.locfileid: '146199790'
---
## Сведения о восстановлении репозитория

Как правило, если репозиторий удаляется, он будет доступен на диске в течение 90 дней и может быть восстановлен с помощью панели мониторинга администратора сайта. Дополнительные сведения см. в разделе [Панель мониторинга администрирования сайта](/admin/configuration/configuring-your-enterprise/site-admin-dashboard).

Если юридическое удержание не распространяется на пользователя или организацию, через 90 дней репозиторий будет удален навсегда.

Если репозиторий на момент удаления был частью сети вилки, восстановленный репозиторий будет отключен от исходной вилки сети.

После удаления репозитория может пройти до часа, прежде чем репозиторий станет доступен для восстановления.

Восстановление репозитория не приведет к восстановлению вложений выпуска или разрешений команды. Восстановленные проблемы не помечаются.

## Восстановление удаленного репозитория

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %}
1. В разделе {% octicon "repo" aria-label="Значок репозитория" %} **Репозитории** % щелкните ссылку {% octicon "trash" aria-label="Значок корзины" %} Ссылка **Удаленные репозитории**.
1. Найдите в списке удаленных репозиториев тот репозиторий, который нужно восстановить, а затем справа от имени репозитория нажмите кнопку **Восстановить**.
1. Чтобы подтвердить восстановление именованного репозитория, нажмите кнопку **Восстановить**.

## Дополнительные материалы

- [Применение юридического удержания для пользователя или организации](/admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)
