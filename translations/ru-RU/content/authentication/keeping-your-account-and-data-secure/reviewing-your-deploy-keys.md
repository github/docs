---
title: Проверка ключей развертывания
intro: 'Необходимо проверить ключи развертывания, чтобы убедиться в отсутствии несанкционированных (или, возможно, скомпрометированных) ключей. Вы также можете утвердить существующие ключи развертывания, которые являются действующими.'
redirect_from:
  - /articles/reviewing-your-deploy-keys
  - /github/authenticating-to-github/reviewing-your-deploy-keys
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-deploy-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Deploy keys
ms.openlocfilehash: 964ec4cbc91745c041dd973e4e950b605c5c0233
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088407'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
3. В разделе "Безопасность" на боковой панели щелкните **{% octicon "key" aria-label="The key icon" %} Ключи развертывания**.
{% else %}
3. На боковой панели слева нажмите кнопку **Ключи развертывания**.
![Параметр "Ключи развертывания"](/assets/images/help/settings/settings-sidebar-deploy-keys.png) {% endif %}
4. На странице "Ключи развертывания" запишите ключи развертывания, связанные с вашей учетной записью. Для тех ключей, которые вы не распознали, или для устаревших ключей нажмите кнопку **Удалить**. Если вы хотите сохранить действующие ключи развертывания, нажмите кнопку **Утвердить**.
    ![Список ключей развертывания](/assets/images/help/settings/settings-deploy-key-review.png)

Дополнительные сведения см. в разделе [Управление ключами развертывания](/guides/managing-deploy-keys).

## Дополнительные материалы
- [Настройка уведомлений](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)
