---
title: Разблокировка пользователя из вашей организации
intro: 'Владельцы и модераторы организации могут разблокировать пользователя, который ранее был заблокирован, путем восстановления доступа к репозиториям организации.'
redirect_from:
  - /articles/unblocking-a-user-from-your-organization
  - /github/building-a-strong-community/unblocking-a-user-from-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Unblock from your org
ms.openlocfilehash: 0c7099c21e3342717605f59a94e0025a7949b1cc
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117664'
---
После разблокировки пользователь из вашей организации сможет участвовать в работе репозиториев вашей организации.

Если вы заблокировали пользователя на определенный период времени, пользователь будет разблокирован автоматически по истечении этого периода. Дополнительные сведения см. в статье [Блокировка пользователя из организации](/articles/blocking-a-user-from-your-organization).

{% tip %}

**Совет.** Все параметры, удаленные при блокировке пользователя из вашей организации, такие как статус участника совместной работы, звезды и контрольные значения, при разблокировке пользователя не восстанавливаются.

{% endtip %}

## Разблокировка пользователя в комментарии

1. Перейдите к комментарию, автора которого вы хотите разблокировать.
2. В правом верхнем углу комментария щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, а затем **Разблокировать пользователя**.
![Значок горизонтального многоточия и меню модерации комментариев, показывающее опцию разблокировки пользователя](/assets/images/help/repository/comment-menu-unblock-user.png)
3. Чтобы подтвердить разблокировку пользователя, нажмите **ОК**.

## Разблокировка пользователя в параметрах организации


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.block_users %}
1. В разделе "Заблокированные пользователи" нажмите **Разблокировать** рядом с пользователем, которого вы хотите разблокировать.
![Кнопка "Разблокировать пользователя"](/assets/images/help/organizations/org-unblock-user-button.png)

## Дополнительные материалы

- [Блокировка пользователя из вашей организации](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)
- [Блокировка пользователя из вашей личной учетной записи](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)
- [Разблокировка пользователя из вашей личной учетной записи](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)
- [Сообщение о нарушении или спаме](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
