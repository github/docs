---
title: Отключение двухфакторной проверки подлинности для личной учетной записи
intro: 'Если отключить двухфакторную проверку подлинности для личной учетной записи, вы можете потерять доступ к организациям, к которым вы принадлежите.'
redirect_from:
  - /articles/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/disabling-two-factor-authentication-for-your-personal-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Disable 2FA
ms.openlocfilehash: 17135ec9a9458eeb2fc460e69dfc6af39d83ee1d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088274'
---
Настоятельно рекомендуется использовать двухфакторную проверку подлинности для защиты учетной записи. Чтобы отключить двухфакторную проверку подлинности, рекомендуется повторно включить ее как можно скорее.

{% warning %}

**Предупреждение.** Если вы являетесь участником {% ifversion fpt or ghec %}, менеджером выставления счетов{% endif %} или сторонним участником совместной работы в общедоступном репозитории организации, для которой требуется двухфакторная проверка подлинности, и вы отключаете двухфакторную проверку подлинности, вы будете автоматически удалены из организации и потеряете доступ к своим репозиториям. Чтобы восстановить доступ к организации, повторно включите двухфакторную проверку подлинности и обратитесь к владельцу организации.

{% endwarning %}

Если для вашей организации требуется двухфакторная проверка подлинности и вы являетесь участником, владельцем или сторонним участником совместной работы в частном репозитории организации, необходимо сначала выйти из организации, и только после этого можно будет отключить двухфакторную проверку подлинности.

Чтобы удалить себя из организации, выполните следующие действия:
 - Если вы участник или владелец организации, см. раздел [Выход из организации](/articles/removing-yourself-from-an-organization/).
 - Если вы сторонний участник совместной работы попросите владельца или администратора репозитория организации удалить вас из репозиториев организации. Дополнительные сведения см. в разделе [Просмотр ролей людей в организации](/articles/viewing-people-s-roles-in-an-organization) и [Удаление стороннего участника совместной работы из репозитория организации](/articles/removing-an-outside-collaborator-from-an-organization-repository/).

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. Щелкните **Отключить**.
  ![Кнопка «Отключить двухфакторную проверку подлинности»](/assets/images/help/2fa/disable-two-factor-authentication.png)

## Дополнительные материалы

- [Двухфакторная проверка подлинности](/articles/about-two-factor-authentication)
- [Настройка двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication)
- [Настройка методов восстановления для двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication-recovery-methods)
