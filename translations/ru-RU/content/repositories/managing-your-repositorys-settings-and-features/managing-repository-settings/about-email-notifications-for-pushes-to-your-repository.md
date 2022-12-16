---
title: Сведения об уведомлениях по электронной почте для отправок в репозиторий
intro: 'Вы можете задать параметры так, чтобы автоматически отправлять уведомления на определенный адрес электронной почты, когда кто-либо выполняет запрос в репозиторий.'
permissions: People with admin permissions in a repository can enable email notifications for pushes to your repository.
redirect_from:
  - /articles/managing-notifications-for-pushes-to-a-repository
  - /articles/receiving-email-notifications-for-pushes-to-a-repository
  - /articles/about-email-notifications-for-pushes-to-your-repository
  - /github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/about-email-notifications-for-pushes-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Email notifications for pushes
ms.openlocfilehash: ee12b8f8270921abd1fe70c748449e46fd472e2c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136748'
---
{% data reusables.notifications.outbound_email_tip %}

Каждое уведомление по электронной почте для отправки в репозиторий включает новые фиксации и ссылки на файл различий, содержащий только эти фиксации. Уведомление содержит следующие сведения:

- Имя репозитория, в котором была сделана фиксация.
- Ветвь, в которой была сделана фиксация.
- SHA1 фиксации, включая ссылку на файл различий в {% data variables.product.product_name %}.
- Автор фиксации.
- Дата фиксации.
- Файлы, измененные в рамках фиксации.
- Сообщение фиксации.

Вы можете фильтровать получаемые уведомления об отправках в репозиторий. Дополнительные сведения см. в разделе [Настройка уведомлений](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications).

## Включение уведомлений по электронной почте для отправок в репозиторий

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-notifications %}
5. Введите до двух адресов электронной почты, разделенных пробелами, для получения уведомлений. Если вы хотите отправлять уведомления более чем на две учетные записи, задайте один из адресов электронной почты как группу.
![Текстовое поле адреса электронной почты](/assets/images/help/settings/email_services_addresses.png)
1. Если вы работаете на собственном сервере, вы можете проверить целостность сообщений электронной почты с помощью **утвержденного заголовка**. **Утвержденный заголовок** — это маркер или секрет, введенный в этом поле, который отправляется в сообщении электронной почты. Если заголовок `Approved` сообщения соответствует маркеру, вы можете быть уверены, что сообщение поступило от {% data variables.product.product_name %}.
![Текстовое поле с утвержденным заголовком электронной почты](/assets/images/help/settings/email_services_approved_header.png)
7. Щелкните **Настроить уведомления**.
![Кнопка "Настроить уведомления"](/assets/images/help/settings/setup_notifications_settings.png)

## Дополнительные материалы
- [Общие сведения об уведомлениях](/github/managing-subscriptions-and-notifications-on-github/about-notifications)

