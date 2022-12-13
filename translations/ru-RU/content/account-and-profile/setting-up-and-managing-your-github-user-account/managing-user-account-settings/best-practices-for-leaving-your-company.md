---
title: Рекомендации по уходу из компании
intro: If you use your account on {% data variables.product.product_name %} for both personal and work purposes, there are a few things to keep in mind when you leave your company or organization.
redirect_from:
- /articles/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Leaving your company
ms.openlocfilehash: 4384955c0b81e887cb2671a537291b438664e621
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145093150"
---
Прежде чем вы покинете компанию, убедитесь, что вы обновили следующие сведения в личной учетной записи:

- Отмените подтверждение адреса электронной почты компании, [удалив его в параметрах электронной почты](/articles/changing-your-primary-email-address). Затем можно повторно добавить его, не подтверждая, чтобы сохранить связанные фиксации, связанные с учетной записью.
- [Измените основной адрес электронной почты](/articles/changing-your-primary-email-address) с корпоративного на личный.
{% ifversion fpt or ghec %}
- [Подтвердите новый основной адрес электронной почты](/articles/verifying-your-email-address).
{% endif %}
- [При необходимости измените имя пользователя GitHub](/articles/changing-your-github-username), чтобы удалить все отсылки на компанию или организацию.

## <a name="leaving-organizations"></a>Уход из организаций

Если вы работали с репозиториями, принадлежащими организации, вам потребуется [удалить себя в качестве члена организации](/articles/removing-yourself-from-an-organization). Обратите внимание, что если вы являетесь владельцем организации, необходимо сначала [передать владение организацией](/articles/transferring-organization-ownership) другому лицу.

## <a name="removing-professional-associations-with-personal-repositories"></a>Удаление профессиональных связей с личными репозиториями

Если вы профессионально сотрудничали с другим человеком в репозиториях, принадлежащих его личной учетной записи, вам потребуется [удалить себя в качестве участника совместной работы](/articles/removing-yourself-from-a-collaborator-s-repository) из этих репозиториев.

- [Прекратите следить за репозиториями](https://github.com/watching), связанными с вашей работой. Вы больше не захотите видеть эти уведомления!
- [Передайте репозитории, которыми вы владеете](/articles/how-to-transfer-a-repository) и которые могут потребоваться другим для продолжения работы после вашего ухода.
- [Удалите вилки, принадлежащие вам](/articles/deleting-a-repository) и связанные с выполняемой работой. Не волнуйтесь, удаление вилки не удаляет вышестоящий репозиторий.
- Удалите локальные копии вилок, которые могут существовать на компьютере:

```shell
$ rm -rf <em>work_directory</em>
```
