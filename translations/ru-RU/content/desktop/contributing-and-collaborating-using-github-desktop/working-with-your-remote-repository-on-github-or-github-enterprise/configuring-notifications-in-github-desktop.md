---
title: Настройка уведомлений в GitHub Desktop
shortTitle: Configuring notifications
intro: '{% data variables.product.prodname_desktop %} будет уведомлять вас о событиях, происходящих в ветви запроса на вытягивание.'
versions:
  fpt: '*'
ms.openlocfilehash: e7d99c4c81b64facae41b7697cde9d454e15e96a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060437'
---
## Сведения об уведомлениях в {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} отображает системные уведомления о событиях, происходящих в текущем выбранном репозитории. Уведомления отображаются в следующих случаях:

- Сбой проверки запроса на вытягивание.
- После проверки запрос на вытягивание остается с комментарием, утверждением или запрошенными изменениями.

Если щелкнуть уведомление, фокус приложения переключится на {% data variables.product.prodname_desktop %} и появятся более подробные сведения.

## Уведомления о сбоях проверки запроса на вытягивание

При внесении изменений в ветвь запроса на вытягивание появляется уведомление о сбое проверок.

![Уведомление о сбое проверки запроса на вытягивание](/assets/images/help/desktop/pull-request-checks-failed-notification.png)

Если щелкнуть уведомление, откроется диалоговое окно с подробными сведениями о проверках. После просмотра причин сбоя проверок можно повторно запустить проверки или быстро перейти в ветвь запроса на вытягивание, чтобы приступить к исправлению ошибок. Дополнительные сведения см. в разделе [Просмотр и повторная проверка в GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop).

![диалоговое окно со сбоем проверки](/assets/images/help/desktop/checks-failed-dialog.png)
## Уведомления для проверок запросов на вытягивание

{% data variables.product.prodname_desktop %} показывает системное уведомление, когда коллега по команде одобрил, прокомментировал или запросил изменения в запросе на вытягивание. Дополнительные сведения о проверках запросов на вытягивание см. в разделе [о проверках запросов на вытягивание](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews).

![Уведомление о проверке запроса на вытягивание](/assets/images/help/desktop/pull-request-review-notification.png)

Если щелкнуть уведомление, фокус приложения переключится на {% data variables.product.prodname_desktop %} и появятся более подробные сведения о комментарии к проверке запроса на вытягивание.

![Диалоговое окно проверки запроса на вытягивание](/assets/images/help/desktop/pull-request-review-dialog.png)
## Включение уведомлений

Если системные уведомления отключены для {% data variables.product.prodname_desktop %}, выполните следующие действия, чтобы включить их.

{% mac %}

1. Щелкните меню **Apple**, а затем выберите **Системные настройки**.
2. Выберите **Уведомления и фокус**.
3. В списке приложений выберите **{% data variables.product.prodname_desktop %}** .
4. Щелкните **Разрешить уведомления**.

!["Уведомления и фокус" в macOS](/assets/images/help/desktop/mac-enable-notifications.png)

Дополнительные сведения о системных уведомлениях в macOS см. в разделе [Использование уведомлений на компьютере Mac](https://support.apple.com/en-us/HT204079).

{% endmac %}

{% windows %}

1. Откройте меню **Пуск** и выберите **Параметры**.
2. Выберите **Система**, а затем щелкните **Уведомления**.
3. Найдите **{% data variables.product.prodname_desktop %}** в списке приложений и нажмите кнопку **Включить**.

![Включение уведомлений в Windows](/assets/images/help/desktop/windows-enable-notifications.png)

Дополнительные сведения о системных уведомлениях Windows см. в разделе [Изменение параметров уведомлений в Windows](https://support.microsoft.com/en-us/windows/change-notification-settings-in-windows-8942c744-6198-fe56-4639-34320cf9444e).

{% endwindows %}
