---
title: Подтверждение адреса электронной почты
intro: 'Проверка основного адреса электронной почты обеспечивает усиленную безопасность, позволяя сотрудникам {% data variables.product.prodname_dotcom %} оказать вам помощь, если вы забыли пароль, и предоставить вам доступ к дополнительным функциям {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/troubleshooting-email-verification
  - /articles/setting-up-email-verification
  - /articles/verifying-your-email-address
  - /github/getting-started-with-github/verifying-your-email-address
  - /github/getting-started-with-github/signing-up-for-github/verifying-your-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Verify your email address
ms.openlocfilehash: 32456b34fbb307fd45e474b3924935fb5519935a
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098439'
---
## Сведения о подтверждении адреса электронной почты

Адрес электронной почты можно подтвердить после регистрации новой учетной записи или добавления нового адреса. Если адрес электронной почты недоступен, его подтверждение невозможно.

Без подтверждения адреса электронной почты вы не сможете выполнять следующие действия:
  - Создавать репозитории и их вилки
  - Создавать проблемы и запросы на вытягивание
  - Оставлять комментарии по проблемам, запросам на вытягивание или фиксациям
  - Выполнять авторизацию приложений {% data variables.product.prodname_oauth_app %}
  - Создание {% данных variables.product.pat_generic %}s
  - Получать уведомления по электронной почте
  - Добавлять репозитории в избранное
  - Создавать и обновлять доски проектов, включая карточки
  - Создавать и обновлять gist
  - Создавать и использовать {% data variables.product.prodname_actions %}
  - Поддерживать разработчиков финансово с помощью {% data variables.product.prodname_sponsors %}

{% warning %}

**Предупреждения**

- {% data reusables.user-settings.no-verification-disposable-emails %}
- {% data reusables.user-settings.verify-org-approved-email-domain %}

{% endwarning %}

## Подтверждение адреса электронной почты

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %}
1. Нажмите **Повторно отправить письмо для подтверждения** под адресом электронной почты.
  ![Ссылка повторной отправки письма для подтверждения](/assets/images/help/settings/email-verify-button.png)
4. {% data variables.product.prodname_dotcom %} отправит вам письмо, содержащее ссылку. Щелкнув эту ссылку, вы попадете на панель мониторинга {% data variables.product.prodname_dotcom %} и увидите баннер с подтверждением.
  ![Баннер с подтверждением проверки адреса электронной почты](/assets/images/help/settings/email-verification-confirmation-banner.png)

## Устранение неполадок с подтверждением адреса электронной почты

### Не удалось отправить письмо для подтверждения

{% data reusables.user-settings.no-verification-disposable-emails %}

### Открывается страница ошибки после перехода по ссылке для подтверждения

Ссылка для подтверждения действительна 24 часа. Если вы не подтвердите адрес электронной почты в течение 24 часов, запросите другую ссылку для подтверждения адреса. Дополнительные сведения см. в статье "[Проверка адреса электронной почты](/articles/verifying-your-email-address)".

Если щелкнуть ссылку в сообщении с подтверждением в течение 24 часов и отправиться на страницу ошибки, убедитесь, что вы вошли в правильную учетную запись на {% данных variables.location.product_location %}.

1. {% данных variables.product.signout_link %} вашей личной учетной записи на {% данных variables.location.product_location %}.
2. Выполните выход и перезапустите браузер.
3. {% данных variables.product.signin_link %} к вашей личной учетной записи на {% данных variables.location.product_location %}.
4. Щелкните ссылку для подтверждения, полученную в письме.

## Дополнительные материалы

- ["Изменение основного адреса электронной почты"](/articles/changing-your-primary-email-address)
