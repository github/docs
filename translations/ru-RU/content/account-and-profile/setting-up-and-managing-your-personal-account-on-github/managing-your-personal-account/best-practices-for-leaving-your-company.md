---
title: Рекомендации по уходу из компании
intro: 'Если учетная запись в {% data variables.product.product_name %} используется как в личных, так и в рабочих целях, при выходе из компании или организации следует помнить о нескольких вещах.'
redirect_from:
  - /articles/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Leaving your company
ms.openlocfilehash: f8fa9650680b0f37dc7a4a1bdea949e7c02f74b6
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094125'
---
Прежде чем вы покинете компанию, убедитесь, что вы обновили следующие сведения в личной учетной записи:

- Отмените подтверждение адреса электронной почты компании, [удалив его в параметрах электронной почты](/articles/changing-your-primary-email-address). Затем можно повторно добавить его, не подтверждая, чтобы сохранить связанные фиксации, связанные с учетной записью.
- [Измените основной адрес электронной почты](/articles/changing-your-primary-email-address) с корпоративного на личный.
- [Подтвердите новый основной адрес электронной почты](/articles/verifying-your-email-address).
- [При необходимости измените имя пользователя GitHub](/articles/changing-your-github-username), чтобы удалить все отсылки на компанию или организацию.
- Если вы включили двухфакторную проверку подлинности (2FA) для личной учетной записи, убедитесь, что вы (не ваша компания) контролируете настроенный вами метод проверки подлинности 2FA. Подробнее: [Настройка двухфакторной проверки подлинности](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

## Уход из организаций

Если вы работали с репозиториями, принадлежащими организации, вам потребуется [удалить себя в качестве члена организации](/articles/removing-yourself-from-an-organization). Обратите внимание, что если вы являетесь владельцем организации, необходимо сначала [передать владение организацией](/articles/transferring-organization-ownership) другому лицу.

Если вы не используете {% данных variables.enterprise.prodname_managed_user %}, вы по-прежнему сможете получить доступ к вашей личной учетной записи даже после выхода из организации. Дополнительные сведения о {% data variables.product.prodname_emus %} см. в статье [Сведения о {% data variables.product.prodname_emus %}]({% ifversion not ghec%}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users){% ifversion not ghec %} в документации по {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

## Удаление профессиональных связей с личными репозиториями

Если вы профессионально сотрудничали с другим человеком в репозиториях, принадлежащих его личной учетной записи, вам потребуется [удалить себя в качестве участника совместной работы](/articles/removing-yourself-from-a-collaborator-s-repository) из этих репозиториев.

- [Прекратите следить за репозиториями](https://github.com/watching), связанными с вашей работой. Вы больше не захотите видеть эти уведомления!
- [Передайте репозитории, которыми вы владеете](/articles/how-to-transfer-a-repository) и которые могут потребоваться другим для продолжения работы после вашего ухода.
- [Удалите вилки, принадлежащие вам](/articles/deleting-a-repository) и связанные с выполняемой работой. Не волнуйтесь, удаление вилки не удаляет вышестоящий репозиторий.
- Удалите локальные копии вилок, которые могут существовать на компьютере:

```shell
$ rm -rf WORK_DIRECTORY
```
