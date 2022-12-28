---
title: Изменение разрешений приложения GitHub
intro: '{% data reusables.shortdesc.editing_permissions_for_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/editing-a-github-app-s-permissions
  - /apps/managing-github-apps/editing-a-github-app-s-permissions
  - /developers/apps/editing-a-github-apps-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Edit permissions
ms.openlocfilehash: 1777a06a44c42a2b90351d2c7206e07cfc689882
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145089890'
---
{% note %}

**Примечание**. Обновленные разрешения не вступят в силу для установки, пока владелец учетной записи или организации не утвердит изменения. С помощью [веб-перехватчика InstallationEvent](/webhooks/event-payloads/#installation) можно узнавать, когда пользователи принимают новые разрешения для приложения. Исключением являются [разрешения на уровне пользователя](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions), для которых не требуется утверждение изменения разрешений владельцем учетной записи.

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
4. Выберите приложение GitHub, разрешения которого нужно изменить.
![Выбор приложения](/assets/images/github-apps/github_apps_select-app.png)
5. На левой боковой панели нажмите **Разрешения и веб-перехватчики**.
![Разрешения и веб-перехватчики](/assets/images/github-apps/github_apps_permissions_and_webhooks.png)
6. Измените нужные разрешения. Для каждого типа разрешений в раскрывающемся списке выберите "Только чтение", "Чтение и запись" или "Нет доступа".
![Выбор разрешений для приложения GitHub](/assets/images/github-apps/github_apps_permissions_post2dot13.png)
7. В разделе "Подписка на события" выберите события, на которые нужно подписать приложение.
![Выбор разрешений для подписки приложения GitHub на события](/assets/images/github-apps/github_apps_permissions_subscribe_to_events.png)
8. При необходимости в разделе "Добавление заметки для пользователей" добавьте заметку, сообщающую пользователям, почему вы изменяете разрешения, запрашиваемые приложением GitHub.
![Поле ввода заметки для пользователей, объясняющей, почему изменились разрешения приложения GitHub](/assets/images/github-apps/github_apps_permissions_note_to_users.png)
9. Нажмите кнопку **Сохранить изменения**.
![Кнопка для сохранения изменений разрешений](/assets/images/github-apps/github_apps_save_changes.png)
