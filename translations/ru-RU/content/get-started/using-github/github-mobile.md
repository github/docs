---
title: GitHub Mobile
intro: 'Рассмотрение, совместная работа и управление работой в {% data variables.product.product_name %} с мобильного устройства.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Mobile
redirect_from:
  - /get-started/using-github/github-for-mobile
  - /github/getting-started-with-github/github-for-mobile
  - /github/getting-started-with-github/using-github/github-for-mobile
ms.openlocfilehash: 1d94b07ebb9939347ca2f71cc9cd3054fec75a7e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099020'
---
## Сведения о {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %}

{% data variables.product.prodname_mobile %} позволяет быстро и эффективно работать на сервере {% data variables.product.product_name %} откуда угодно. {% data variables.product.prodname_mobile %} — это безопасный способ доступа к данным {% data variables.product.product_name %} через доверенное клиентское приложение.

С помощью {% data variables.product.prodname_mobile %} можно делать следующее:

- управлять уведомлениями, рассматривать и сбрасывать их;
- просматривать и проверять проблемы и запросы на вытягивание, а также вести совместную работу над ними;
- Изменение файлов в запросах на вытягивание
- искать пользователей, репозитории и организации, просматривать их и взаимодействовать с ними;
- получать push-уведомление обо всех упоминаниях вашего имени пользователя {% ifversion fpt or ghec %};- защитить свою учетную запись GitHub.com двухфакторной проверкой подлинности;
- проверять попытки входа на нераспознанных устройствах{% endif %}.

Дополнительные сведения об уведомлениях для {% data variables.product.prodname_mobile %} см. в разделе [Настройка уведомлений](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile).

{% ifversion fpt or ghec %}- Дополнительные сведения о двухфакторной проверке подлинности с использованием {% data variables.product.prodname_mobile %} см. в разделах [Настройка {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile) и [Проверка подлинности с помощью {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication##verifying-with-github-mobile)". {% endif %}

## Установка {% data variables.product.prodname_mobile %}

Инструкции по установке {% data variables.product.prodname_mobile %} для Android или iOS см. в разделе [{% data variables.product.prodname_mobile %}](https://github.com/mobile).

## Управление учетными записями

Вы можете войти в мобильное приложение одновременно под личной учетной записью в {% data variables.product.prodname_dotcom_the_website %} и под личной учетной записью в {% data variables.product.prodname_ghe_server %}. Дополнительные сведения о различных наших продуктах см. в разделе [Продукты {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products).

{% data reusables.mobile.push-notifications-on-ghes %}

{% data variables.product.prodname_mobile %} может не работать в организации, доступ к которой осуществляется через VPN.

### Предварительные требования

Чтобы использовать {% data variables.product.prodname_mobile %} с {% data variables.product.prodname_ghe_server %}, на устройстве необходимо установить {% data variables.product.prodname_mobile %} версии 1.4 или более поздней.

Чтобы использовать {% данных variables.product.prodname_mobile %} с {% данных variables.product.prodname_ghe_server %}, {% данных variables.location.product_location %} должен иметь версию 3.0 или более поздней, а владелец предприятия должен включить поддержку мобильных устройств для вашего предприятия. Дополнительные сведения см. в разделах {% ifversion ghes %}[Заметки о выпуске](/enterprise-server/admin/release-notes) и {% endif %}[Управление {% data variables.product.prodname_mobile %} в организации]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-your-enterprise/managing-github-mobile-for-your-enterprise){% ifversion not ghes %} в документации по {% data variables.product.prodname_ghe_server %}.{% else %}.{% endif %}

Пока {% data variables.product.prodname_mobile %} находится на стадии бета-версии для {% data variables.product.prodname_ghe_server %}, необходимо входить на {% data variables.product.prodname_dotcom_the_website %} под личной учетной записью.

### Добавление и переключение учетных записей, а также выход из них

Вы можете входить в мобильное приложение под личной учетной записью в {% data variables.product.prodname_ghe_server %}. В нижней части приложения нажмите и удерживайте значок {% octicon "person" aria-label="The person icon" %} **Профиль**, а затем нажмите {% octicon "plus" aria-label="The plus icon" %} **Добавить корпоративную учетную запись**. Следуйте указаниям, чтобы выполнить вход.

После входа в мобильное приложение под личной учетной записью на {% data variables.product.prodname_ghe_server %} можно переключаться между этой учетной записью и учетной записью на {% data variables.product.prodname_dotcom_the_website %}. В нижней части приложения нажмите и удерживайте значок {% octicon "person" aria-label="The person icon" %} **Профиль**, а затем коснитесь учетной записи, на которую нужно переключиться.

Если доступ к данным в личной учетной записи в {% data variables.product.prodname_ghe_server %} из {% data variables.product.prodname_mobile %} больше не требуется, можно выйти из нее. В нижней части приложения нажмите и удерживайте значок {% octicon "person" aria-label="The person icon" %} **Профиль**, проведите пальцем влево по учетной записи и нажмите **Выйти**.

## Поддерживаемые языки для {% data variables.product.prodname_mobile %}

Приложение {% data variables.product.prodname_mobile %} доступно на перечисленных ниже языках.

- Английский
- Японский
- Португальский (Бразилия)
- Китайский, упрощенное письмо
- Испанский

Если на устройстве настроен поддерживаемый язык, он будет использоваться в {% data variables.product.prodname_mobile %} по умолчанию. Изменить язык для {% data variables.product.prodname_mobile %} можно в меню **Параметры** приложения {% data variables.product.prodname_mobile %}.

## Управление универсальными ссылками для {% data variables.product.prodname_mobile %} в iOS

В {% data variables.product.prodname_mobile %} универсальные ссылки для iOS включаются автоматически. При нажатии любой ссылки на {% data variables.product.product_name %} целевой URL-адрес открывается в {% data variables.product.prodname_mobile %}, а не в Safari. Дополнительные сведения см. в [статье об универсальных ссылках](https://developer.apple.com/ios/universal-links/) на сайте Apple Developer.

Чтобы отключить универсальные ссылки, нажмите любую ссылку на {% data variables.product.product_name %} и удерживайте ее, а затем нажмите **Открыть**. В дальнейшем при нажатии на ссылку {% data variables.product.product_name %} целевой URL-адрес будет открываться в Safari, а не в {% data variables.product.prodname_mobile %}.

Чтобы снова включить универсальные ссылки, нажмите любую ссылку на {% data variables.product.product_name %} и удерживайте ее, а затем нажмите **Открыть на {% data variables.product.prodname_dotcom %}** .

## Отправка отзывов

Отправлять запросы функций или другие отзывы о {% data variables.product.prodname_mobile %} можно здесь: [{% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/mobile).

## Отказ от бета-выпусков для iOS

Если вы тестируете бета-выпуск {% data variables.product.prodname_mobile %} для iOS с помощью TestFlight, то можете в любой момент прекратить использование бета-выпуска.

1. На устройстве iOS откройте приложение TestFlight.
2. В разделе "Приложения" нажмите **{% data variables.product.prodname_dotcom %}** .
3. В нижней части страницы нажмите **Остановить тестирование**.
