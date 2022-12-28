---
title: Режим sudo
intro: 'Чтобы подтвердить доступ к учетной записи перед выполнением потенциально конфиденциального действия, {% данных variables.location.product_location %} запрашивает проверку подлинности.'
redirect_from:
  - /articles/sudo-mode
  - /github/authenticating-to-github/sudo-mode
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/sudo-mode
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Identity
  - Access management
ms.openlocfilehash: 4d83334dacc831876292c6a488bb7021de4a57a5
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097939'
---
## Сведения о режиме sudo

Чтобы обеспечить безопасность учетной записи при выполнении потенциально конфиденциального действия для {% данных variables.location.product_location %}, необходимо пройти проверку подлинности, даже если вы уже выполнили вход. Например, {% data variables.product.company_short %} относит к таким действиям следующие, так как каждое из таких действий может разрешить новому пользователю или системе доступ к вашей учетной записи.

- Изменение связанного адреса электронной почты
- Авторизация стороннего приложения
- Добавление нового ключа SSH

После проверки подлинности для выполнения действия, связанного с конфиденциальными данными, сеанс временно находится в режиме sudo. В режиме sudo можно выполнять действия, связанные с конфиденциальными данными, без проверки подлинности. {% data variables.product.product_name %} выдаст новый запрос аутентификации через несколько часов. В течение этого времени все действия, связанные с конфиденциальными данными, которые вы выполняете, будут сбрасывать этот таймер.

{% ifversion ghes %}

{% note %}

**Примечание.** Если {% данных variables.location.product_location %} использует внешний метод проверки подлинности, например CAS или SAML SSO, вы не получите запросы на ввод в режим sudo. Для получения дополнительных сведений обратитесь к администратору сайта.

{% endnote %}

{% endif %}

"sudo" — это ссылка на программу в системах Unix, в которых это сокращение от "**su** peruser **do**." Дополнительные сведения см. в статье о [sudo](https://wikipedia.org/wiki/Sudo) в Википедии.

## Подтверждение доступа для режима sudo

Чтобы подтвердить доступ для режима sudo, вы {% ifversion totp-and-mobile-sudo-challenge %}можеете{% else %}должны{% endif %} пройти проверку подлинности с паролем.{% ifversion totp-and-mobile-sudo-challenge %} При желании можно использовать другой метод проверки подлинности, например, {% ifversion fpt or ghec %}ключ безопасности, {% data variables.product.prodname_mobile %} или код двухфакторной проверки подлинности{% elsif ghes %}ключ безопасности или код двухфакторной проверки подлинности{% endif %}.{% endif %}

{%- ifversion totp-and-mobile-sudo-challenge %}
- [Подтверждение доступа с помощью ключа безопасности](#confirming-access-using-a-security-key) {%- ifversion fpt or ghec %}
- [Подтверждение доступа с помощью GitHub Mobile](#confirming-access-using-github-mobile) {%- endif %}
- [Подтверждение доступа с помощью кода двухфакторной проверки подлинности](#confirming-access-using-a-2fa-code)
- [Подтверждение доступа с помощью пароля](#confirming-access-using-your-password) {%- endif %}

{% ifversion totp-and-mobile-sudo-challenge %}

### Подтверждение доступа с помощью ключа безопасности

Вам необходимо настроить двухфакторную проверку подлинности (2FA) для своей учетной записи, используя ключ безопасности, чтобы подтвердить доступ к учетной записи для режима sudo с помощью ключа безопасности. Подробнее: [Настройка двухфакторной проверки подлинности](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key).

При появлении запроса на проверку подлинности для режима sudo нажмите **Использовать ключ безопасности** и следуйте инструкциям.

![Снимок экрана: параметр ключа безопасности для режима sudo](/assets/images/help/settings/sudo_mode_prompt_security_key.png)

{% ifversion fpt or ghec %}

### Подтверждение доступа с помощью {% data variables.product.prodname_mobile %}

Вам необходимо установить приложение {% data variables.product.prodname_mobile %} и выполнить вход в систему, чтобы подтвердить доступ к учетной записи для режима sudo с помощью приложения. Дополнительные сведения см. в разделе "[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)".

1. При появлении запроса на проверку подлинности для режима sudo нажмите **Использовать GitHub Mobile**.

   ![Снимок экрана: параметр {% data variables.product.prodname_mobile %} для режима sudo](/assets/images/help/settings/sudo_mode_prompt_github_mobile_prompt.png)
1. Откройте {% data variables.product.prodname_mobile %}. {% данных variables.product.prodname_mobile %} отображает номера, которые необходимо ввести на {% данных variables.location.product_location %} для утверждения запроса.

   ![Снимок экрана: числа из {% data variables.product.prodname_mobile %}, которые необходимо ввести в {% data variables.product.product_name %} для утверждения доступа в режиме sudo](/assets/images/help/settings/sudo_mode_prompt_github_mobile.png)
1. В {% data variables.product.product_name %} введите числа, отображаемые в {% data variables.product.prodname_mobile %}.

{% endif %}

### Подтверждение доступа с помощью кода двухфакторной проверки подлинности

Вам необходимо настроить двухфакторную проверку подлинности с помощью мобильного приложения TOTP{% ifversion fpt or ghec %} или текстовых сообщений{% endif %} для подтверждения доступа к учетной записи в режиме sudo с помощью кода двухфакторной проверки подлинности. Подробнее: [Настройка двухфакторной проверки подлинности](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

При появлении запроса на проверку подлинности в режиме sudo введите код проверки подлинности из мобильного приложения TOTP{% ifversion fpt or ghec %} или текстовое сообщение{% endif %}, а затем нажмите кнопку **Проверить**.

![Снимок экрана: запрос кода двухфакторной проверки подлинности для режима sudo](/assets/images/help/settings/sudo_mode_prompt_2fa_code.png)

### Подтверждение доступа с помощью пароля

{% endif %}

При появлении запроса на проверку подлинности в режиме sudo введите пароль и нажмите кнопку **Подтвердить**.

![Снимок экрана: запрос пароля для режима sudo](/assets/images/help/settings/sudo_mode_prompt_password.png)
