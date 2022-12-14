---
title: Рекомендации по уходу из компании
intro: Если учетная запись в {% data variables.product.product_name %} используется как в личных, так и в рабочих целях, при выходе из компании или организации следует помнить о нескольких вещах.
redirect_from:
- /articles/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
- /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Leaving your company
ms.openlocfilehash: e7de0fa01082731ae54e988ed49310b5ce6afbea
ms.sourcegitcommit: 8544f120269257d01adfe4a27b62f08fc8691727
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 08/02/2022
ms.locfileid: "147444648"
---
Прежде чем вы покинете компанию, убедитесь, что вы обновили следующие сведения в личной учетной записи:

- Отмените подтверждение адреса электронной почты компании, [удалив его в параметрах электронной почты](/articles/changing-your-primary-email-address). Затем можно повторно добавить его, не подтверждая, чтобы сохранить связанные фиксации, связанные с учетной записью.
- [Измените основной адрес электронной почты](/articles/changing-your-primary-email-address) с корпоративного на личный.
- [Подтвердите новый основной адрес электронной почты](/articles/verifying-your-email-address).
- [При необходимости измените имя пользователя GitHub](/articles/changing-your-github-username), чтобы удалить все отсылки на компанию или организацию.
- Если вы включили двухфакторную проверку подлинности (2FA) для учетной записи пользователя, убедитесь, что именно вы (а не ваша компания) контролируете настроенный вами метод проверки подлинности 2FA. Подробнее: [Настройка двухфакторной проверки подлинности](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

## <a name="leaving-organizations"></a>Уход из организаций

Если вы работали с репозиториями, принадлежащими организации, вам потребуется [удалить себя в качестве члена организации](/articles/removing-yourself-from-an-organization). Обратите внимание, что если вы являетесь владельцем организации, необходимо сначала [передать владение организацией](/articles/transferring-organization-ownership) другому лицу.

Если вы не используете {% data variables.product.prodname_managed_user %}, вы по-прежнему сможете получать доступ к вашей личной учетной записи даже после ухода из организации. Дополнительные сведения о {% data variables.product.prodname_emus %} см. в статье [Сведения о {% data variables.product.prodname_emus %}]({% ifversion not ghec%}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users){% ifversion not ghec %} в документации по {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

## <a name="removing-professional-associations-with-personal-repositories"></a>Удаление профессиональных связей с личными репозиториями

Если вы профессионально сотрудничали с другим человеком в репозиториях, принадлежащих его личной учетной записи, вам потребуется [удалить себя в качестве участника совместной работы](/articles/removing-yourself-from-a-collaborator-s-repository) из этих репозиториев.

- [Прекратите следить за репозиториями](https://github.com/watching), связанными с вашей работой. Вы больше не захотите видеть эти уведомления!
- [Передайте репозитории, которыми вы владеете](/articles/how-to-transfer-a-repository) и которые могут потребоваться другим для продолжения работы после вашего ухода.
- [Удалите вилки, принадлежащие вам](/articles/deleting-a-repository) и связанные с выполняемой работой. Не волнуйтесь, удаление вилки не удаляет вышестоящий репозиторий.
- Удалите локальные копии вилок, которые могут существовать на компьютере:

```shell
$ rm -rf <em>work_directory</em>
```
