---
title: Удаление репозитория
intro: 'Вы можете удалить любой репозиторий или вилку, если вы являетесь владельцем организации или имеете права администратора для репозитория или вилки. При удалении репозитория, в котором создана вилка, вышестоящий репозиторий не удаляется.'
redirect_from:
  - /delete-a-repo
  - /deleting-a-repo
  - /articles/deleting-a-repository
  - /github/administering-a-repository/deleting-a-repository
  - /github/administering-a-repository/managing-repository-settings/deleting-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 53e6b69113a5483ea37c7ddd34dee7921959b62a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136883'
---
{% data reusables.organizations.owners-and-admins-can %} удалить репозиторий организации. Если флажок **Разрешить участникам удалять или передавать репозитории для этой организации** не установлен, удалять репозитории организации могут только ее владельцы. {% data reusables.organizations.new-repo-permissions-more-info %}

{% ifversion not ghae %}При удалении общедоступного репозитория не удаляются его вилки.{% endif %}

{% warning %}

**Предупреждения**

- Вложения выпуска и разрешения команды при удалении репозитория будут удалены **без возможности восстановления**. Это действие **невозможно** отменить.
- При удалении частного{% ifversion ghes or ghec or ghae %} или внутреннего{% endif %} репозитория будут удалены все его вилки.

{% endwarning %}

Некоторые удаленные репозитории можно восстановить в течение 90 дней после удаления. {% ifversion ghes or ghae %}Восстановить удаленный репозиторий может администратор вашего сайта. Дополнительные сведения см. в статье "[Восстановление удаленного репозитория](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)". {% else %}Дополнительные сведения см. в разделе [Восстановление удаленного репозитория](/articles/restoring-a-deleted-repository).{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
2. В разделе "Опасная зона" выберите **Удалить этот репозиторий**.
   ![Кнопка удаления репозитория](/assets/images/help/repository/repo-delete.png)
3. **Ознакомьтесь с предупреждениями**.
4. Чтобы удалить именно тот репозиторий, который нужно, введите его имя.
   ![Метки удаления](/assets/images/help/repository/repo-delete-confirmation.png)
5. Щелкните **Я понимаю последствия, удалить этот репозиторий**.
