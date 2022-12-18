---
title: Настройка двухфакторной проверки подлинности
intro: Вы можете выбрать один из нескольких вариантов для добавления второго источника проверки подлинности в учетную запись.
redirect_from:
  - /articles/configuring-two-factor-authentication-via-a-totp-mobile-app
  - /articles/configuring-two-factor-authentication-via-text-message
  - /articles/configuring-two-factor-authentication-via-fido-u2f
  - /articles/configuring-two-factor-authentication
  - /github/authenticating-to-github/configuring-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configure 2FA
ms.openlocfilehash: 2a038134260ba9a6a7a0307bc3261157968ec1ea
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179960'
---
Для двухфакторной проверки подлинности можно использовать мобильное приложение{% ifversion fpt or ghec %} или SMS{% endif %}. Также можно добавить ключ безопасности.

Настоятельно рекомендуется для двухфакторной проверки подлинности использовать приложение, создающее одноразовые пароли с ограниченным сроком действия (TOTP).{% ifversion fpt or ghec %} Приложения TOTP обеспечивают большую защиту по сравнению с SMS-сообщениями, особенно за пределами США.{% endif %} Приложения TOTP поддерживают безопасное резервное копирование кодов проверки подлинности в облако, которые можно восстановить, если вы потеряете доступ к устройству.

{% warning %}

**Внимание!**
- Если вы являетесь участником{% ifversion fpt or ghec %}, менеджером по выставлению счетов,{% endif %} или сторонним участником совместной работы в частном репозитории организации, которому требуется двухфакторная проверка подлинности, необходимо покинуть организацию, прежде чем отключить 2FA в {% data variables.location.product_location %}.
- Если отключить двухфакторную проверку подлинности, вы автоматически потеряете доступ к организации и всем частным вилкам репозиториев организации, которые у вас есть. Чтобы восстановить доступ к организации и вилкам, снова включите двухфакторную проверку подлинности и обратитесь к ответственному по организации.

{% endwarning %}

{% ifversion fpt or ghec %}

Если вы являетесь участником {% data variables.enterprise.prodname_emu_enterprise %}, вы не можете настроить 2FA для учетной записи {% data variables.enterprise.prodname_managed_user %}, если вы не вошли в систему как пользователь установки. Для пользователей, отличающихся от пользователя, выполняющего установку, администратор должен настроить 2FA в поставщике удостоверений (IdP).

{% endif %}

## Настройка двухфакторной проверки подлинности с помощью мобильного приложения TOTP

Такое приложение автоматически генерирует код проверки подлинности, который изменяется по истечении определенного периода времени. Рекомендуется использовать облачные приложения TOTP, такие как:
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)
- [Microsoft Authenticator](https://www.microsoft.com/en-us/account/authenticator/)

{% tip %}

**Совет.** Чтобы настроить проверку подлинности через TOTP на нескольких устройствах, во время настройки отсканируйте QR-код с помощью каждого устройства одновременно. Если двухфакторная проверка подлинности уже включена и вы хотите добавить другое устройство, потребуется повторно настроить проверку в параметрах безопасности.

{% endtip %}

1. Загрузите приложение TOTP.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.enable-two-factor-authentication %} {%- ifversion fpt or ghec or ghes > 3.7 %}
5. В разделе "Настройка приложения проверки подлинности" выполните одно из следующих действий.
    - Отсканируйте QR-код с помощью мобильного приложения. После сканирования в приложении будет показан шестизначный код, который можно ввести в {% data variables.product.product_name %}.
    - Если вы не можете отсканировать QR-код, щелкните **ввести этот код**, чтобы отобразить код, который можно ввести в приложении TOTP вручную.
    ![Ссылка "ввести этот код"](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
6. Мобильное приложение TOTP сохраняет учетную запись в {% data variables.location.product_location %} и создает новый код проверки подлинности каждые несколько секунд. В {% data variables.product.product_name %} введите код в поле в разделе "Введите шестизначный код из приложения". 
![TOTP введите поле](/assets/images/help/2fa/2fa_wizard_app_enter_code.png) кода {%- else %}
5. В разделе "Двухфакторная проверка подлинности" выберите **Настроить с помощью приложения** и нажмите кнопку **Продолжить**.
6. В разделе "Подтверждение подлинности" выполните одно из следующих действий.
    - Отсканируйте QR-код с помощью мобильного приложения. После сканирования в приложении будет показан шестизначный код, который можно ввести в {% data variables.product.product_name %}.
    - Если вы не можете отсканировать QR-код, щелкните **ввести этот код**, чтобы отобразить код, который можно ввести в приложении TOTP вручную.
    ![Ссылка "ввести этот код"](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
7. Мобильное приложение TOTP сохраняет учетную запись в {% data variables.location.product_location %} и создает новый код проверки подлинности каждые несколько секунд. В {% data variables.product.product_name %} введите код в поле в разделе "Введите шестизначный код из приложения".
![TOTP введите поле](/assets/images/help/2fa/2fa_wizard_app_enter_code.png) кода {%- endif %} {% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %} {% data reusables.two_fa.backup_options_during_2fa_enrollment %} {% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}

## Настройка двухфакторной проверки подлинности с помощью SMS-сообщений

Если вы не можете пройти проверку подлинности с помощью мобильного приложения TOTP, используйте SMS-сообщения. Вы также можете указать второй номер для резервного устройства. Если вы потеряете доступ к основному устройству и кодам восстановления, резервный номер для текстовых сообщений поможет восстановить доступ к учетной записи.

Прежде чем использовать этот метод, убедитесь, что вы можете получать SMS-сообщения. Могут применяться тарифы оператора мобильной связи.

{% warning %}

**Предупреждение.** Мы **настоятельно рекомендуем** использовать для двухфакторной проверки подлинности приложение TOTP, а не SMS. {% data variables.product.product_name %} не поддерживает отправку SMS-сообщений на телефоны в некоторых странах. Перед настройкой проверки подлинности с помощью SMS-сообщений просмотрите список стран, где {% data variables.product.product_name %} поддерживает проверку подлинности с помощью SMS-сообщений. Дополнительные сведения см. в разделе "[Страны, где поддерживается проверка подлинности с помощью SMS-сообщений](/articles/countries-where-sms-authentication-is-supported)".

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.enable-two-factor-authentication %}
4. Под разделом "Настройка приложения проверки **подлинности" выберите Проверка подлинности SMS**.

  ![Альтернативный вариант 2FA SMS](/assets/images/help/2fa/2fa_sms_alt_option.png)

5. В разделе "Настройка проверки подлинности SMS" выберите код страны и введите номер мобильного телефона, включая код города. Убедитесь, что сведения верны, и нажмите кнопку **Отправить код для проверки подлинности**.

  ![Экран SMS-сообщения для двухфакторной проверки подлинности](/assets/images/help/2fa/2fa_wizard_sms_send.png)

6. Вы получите SMS-сообщение с кодом безопасности. В {% data variables.product.product_name %} введите код в поле в разделе "Введите шестизначный код, отправленный на телефон" и нажмите кнопку **Продолжить**.

  ![Поле](/assets/images/help/2fa/2fa_wizard_sms_enter_code.png) продолжения 2FA SMS {% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %} {% data reusables.two_fa.backup_options_during_2fa_enrollment %} {% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

## Настройка двухфакторной проверки подлинности с помощью ключа безопасности

{% data reusables.two_fa.after-2fa-add-security-key %}

На большинстве устройств и в большинстве браузеров можно использовать физический ключ безопасности USB или NFC. Некоторые браузеры в качестве ключа безопасности поддерживают датчики чтения отпечатков пальцев, распознавание лиц или пароль/ПИН-код на устройстве.

Проверка подлинности с помощью ключа безопасности применяется как *дополнительный* вариант для проверки подлинности с помощью приложения TOTP{% ifversion fpt or ghec %} или SMS-сообщений{% endif %}. Если вы потеряете ключ безопасности, то все равно сможете использовать для входа код, отправленный на телефон.

1. У вас уже должна быть настроена двухфакторная проверка подлинности с помощью мобильного приложения TOTP{% ifversion fpt or ghec %} или SMS-сообщений{% endif %}.
2. Убедитесь, что у вас есть совместимый с WebAuthn ключ безопасности, вставленный в порт компьютера.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
5. Рядом с пунктом "Ключи безопасности" нажмите кнопку **Добавить**.
  ![Вариант добавления ключа безопасности](/assets/images/help/2fa/add-security-keys-option.png)
6. В разделе "Ключи безопасности" нажмите кнопку **Зарегистрировать новый ключ безопасности**.
  ![Регистрация нового ключа безопасности](/assets/images/help/2fa/security-key-register.png)
7. Введите псевдоним для ключа безопасности и нажмите кнопку **Добавить**.
  ![Предоставление псевдонима для ключа безопасности](/assets/images/help/2fa/security-key-nickname.png)
8. Активируйте ключ безопасности в соответствии с инструкциями в документации по ключу безопасности.
  ![Запрос ключа безопасности](/assets/images/help/2fa/security-key-prompt.png)
9.  Подтвердите, что вы загрузили коды восстановления и имеете к ним доступ. Если вы еще не сделали этого или хотите создать другой набор кодов, загрузите коды и сохраните их в безопасном месте. Дополнительные сведения см. в разделе [Скачивание кодов восстановления 2FA](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes).
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}
## Настройка двухфакторной проверки подлинности с помощью {% data variables.product.prodname_mobile %}

Вы можете использовать {% data variables.product.prodname_mobile %} для двухфакторной проверки подлинности при входе в учетную запись {% data variables.product.prodname_dotcom %} в веб-браузере. В двухфакторной проверке подлинности с помощью {% data variables.product.prodname_mobile %} нет TOTP, а вместо этого для защиты учетной записи используется шифрование с открытым ключом.

После настройки защиты с помощью приложения TOTP или SMS-сообщений для проверки подлинности также можно использовать {% data variables.product.prodname_mobile %}. Если в будущем вы потеряете доступ к {% data variables.product.prodname_mobile %}, то по-прежнему сможете использовать ключи безопасности или приложения TOTP для входа.

1. У вас уже должна быть настроена двухфакторная проверка подлинности с помощью мобильного приложения TOTP или SMS-сообщений.
2. Установите [{% data variables.product.prodname_mobile %}](https://github.com/mobile).
3. Войдите в учетную запись {% data variables.product.product_name %} из {% data variables.product.prodname_mobile %}.

После входа это устройство можно использовать для прохождения двухфакторной проверки подлинности.
{% endif %}

## Дополнительные материалы

- [Двухфакторная проверка подлинности](/articles/about-two-factor-authentication)
- [Настройка методов восстановления для двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication-recovery-methods)
- [Доступ к {% data variables.product.prodname_dotcom %} с помощью двухфакторной проверки подлинности](/articles/accessing-github-using-two-factor-authentication)
- "[Восстановление учетной записи при утере учетных данных для двухфакторной проверки подлинности](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
- ["Создание {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)"
