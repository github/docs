---
title: Обновление учетных данных для доступа к GitHub
intro: 'Учетные данные {% data variables.product.product_name %} включают{% ifversion not ghae %} не только пароль, но и{% endif %} маркеры доступа, ключи SSH и маркеры API приложений, используемые для взаимодействия с {% data variables.product.product_name %}. При необходимости можно сбросить все эти учетные данные для доступа самостоятельно.'
redirect_from:
  - /articles/rolling-your-credentials
  - /articles/how-can-i-reset-my-password
  - /articles/updating-your-github-access-credentials
  - /github/authenticating-to-github/updating-your-github-access-credentials
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/updating-your-github-access-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Update access credentials
ms.openlocfilehash: 34817cbaabea47815bfa2a8f26001cd9c46aadc9
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098278'
---
{% ifversion not ghae %}
## Запрос нового пароля

1. Для запроса нового пароля перейдите на {% ifversion fpt or ghec %} https://{% data variables.product.product_url %}/password_reset{% else %}`https://{% data variables.product.product_url %}/password_reset`{% endif %}.
2. Введите адрес электронной почты, связанный с вашей учетной записью, на {% ifversion ghae %}{% данных variables.product.product_name %}{% остальных %}{% данных variables.location.product_location %}{% endif %}, а затем нажмите кнопку **"Отправить адрес электронной почты для сброса пароля".** Если у вас настроен резервный адрес электронной почты, письмо будет отправлено на него.
  ![Диалоговое окно запроса письма для сброса пароля](/assets/images/help/settings/password-recovery-email-request.png)
3. Мы отправим ссылку, которая позволит сбросить пароль. Щелкните эту ссылку в течение 3 часов после получения письма. Если вы не получили от нас письмо, проверьте папку со спамом.
4. Если включена двухфакторная проверка подлинности, вам будет предложено ввести свои учетные данные 2FA: {% ifversion fpt or ghec %}
   * Если у вас есть {% data variables.product.prodname_mobile %}, вам будет отправлено push-уведомление для подтверждения личности. Откройте push-уведомление или приложение {% data variables.product.prodname_mobile %} и введите двухзначный код, показанный на странице сброса пароля в браузере.
   ![Запрос двухфакторной проверки подлинности {% data variables.product.prodname_mobile %}](/assets/images/help/2fa/2fa-mobile-challenge-password-reset.png)
      * Чтобы пропустить проверку с помощью GitHub Mobile, нажмите **Ввести код двухфакторной проверки подлинности или восстановления**.
      ![Запрос двухфакторной проверки подлинности GitHub Mobile на {% data variables.product.product_name %} с выделенным параметром "Ввести код двухфакторной проверки подлинности или восстановления"](/assets/images/help/2fa/2fa-github-mobile-password-reset.png) {% endif %}
   * Введите код проверки подлинности или один из кодов восстановления и щелкните **Подтвердить**.
      ![Запрос двухфакторной проверки подлинности](/assets/images/help/2fa/2fa-password-reset.png)
     * Если вы добавили в учетную запись ключ безопасности, нажмите **Использовать ключ безопасности** вместо ввода кода проверки подлинности.
     {% ifversion fpt or ghec %}
     * Если вы настроили [{% data variables.product.prodname_mobile %}](https://github.com/mobile), нажмите **Пройти проверку подлинности с помощью GitHub Mobile**.
     {% endif %}
5. Введите новый пароль, подтвердите его и щелкните **Изменить пароль**. Сведения о создании надежного пароля см. в разделе [Создание надежного пароля](/articles/creating-a-strong-password).
  {% ifversion fpt or ghec %}![Окно восстановления пароля](/assets/images/help/settings/password-recovery-page.png){% else %} ![Окно восстановления пароля](/assets/images/enterprise/settings/password-recovery-page.png){% endif %}

{% tip %}

Чтобы избежать потери пароля в будущем, рекомендуется использовать надежный диспетчер паролей, например [LastPass](https://lastpass.com/) или [1Password](https://1password.com/).

{% endtip %}

## Изменение существующего пароля

{% data reusables.repositories.blocked-passwords %}

1. {% data variables.product.signin_link %} на {% data variables.product.product_name %}.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
4. В разделе "Изменение пароля" введите старый пароль, надежный новый пароль и подтвердите новый пароль. Сведения о создании надежного пароля см. в разделе [Создание надежного пароля](/articles/creating-a-strong-password)
5. Щелкните **Обновить пароль**.

{% tip %}

Для повышения безопасности включите двухфакторную проверку подлинности в дополнение к изменению пароля. Дополнительную информацию см. в разделе [Сведения о двухфакторной проверке подлинности](/articles/about-two-factor-authentication).

{% endtip %} {% endif %}
## Обновление маркеров доступа

Указания по проверке и удалению маркеров доступа см. в разделе [Проверка авторизованных интеграций](/articles/reviewing-your-authorized-integrations). Сведения о создании новых маркеров доступа см. в разделе "[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".

{% ifversion not ghae %}

Если вы сбросили пароль учетной записи, а также хотите активировать выход из приложения {% data variables.product.prodname_mobile %}, можно отозвать авторизацию в приложении OAuth GitHub iOS или GitHub Android. Это приведет к прекращению всех сеансов приложения {% data variables.product.prodname_mobile %}, связанных с вашей учетной записью. Дополнительные сведения см. в разделе [Проверка авторизованных интеграций](/authentication/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations).

{% endif %}

## Обновление ключей SSH

Указания по проверке и удалению ключей SSH см. в разделе [Проверка ключей SSH](/articles/reviewing-your-ssh-keys). Сведения о создании и добавлении новых ключей SSH см. в разделе [Создание ключа SSH](/articles/generating-an-ssh-key).

## Сброс токенов API

Если у вас есть приложения, зарегистрированные в {% data variables.product.product_name %}, необходимо сбросить токены OAuth этих приложений. Для дополнительных сведений см. конечную точку [Сброс авторизации](/rest/reference/apps#reset-an-authorization).

{% ifversion not ghae %}
## Предотвращение несанкционированного доступа

Дополнительные советы по защите вашей учетной записи и предотвращению несанкционированного доступа см. в разделе [Предотвращение несанкционированного доступа](/articles/preventing-unauthorized-access).
{% endif %}
