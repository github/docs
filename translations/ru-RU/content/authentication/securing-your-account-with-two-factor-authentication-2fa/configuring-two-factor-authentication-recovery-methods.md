---
title: Настройка методов восстановления для двухфакторной проверки подлинности
intro: 'Вы можете настроить различные методы восстановления для доступа к учетной записи, если утеряны учетные данные двухфакторной проверки подлинности.'
redirect_from:
  - /articles/downloading-your-two-factor-authentication-recovery-codes
  - /articles/setting-a-fallback-authentication-number
  - /articles/about-recover-accounts-elsewhere
  - /articles/adding-a-fallback-authentication-method-with-recover-accounts-elsewhere
  - /articles/generating-and-storing-an-account-recovery-token
  - /articles/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configure 2FA recovery
ms.openlocfilehash: a16f8dda2f834beb4c4a1634fae812b18a8730a3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088287'
---
Помимо безопасного хранения кодов восстановления двухфакторной проверки подлинности настоятельно рекомендуется настроить один или несколько дополнительных методов восстановления.

## Скачивание кодов восстановления двухфакторной проверки подлинности

{% data reusables.two_fa.about-recovery-codes %} Вы можете скачать коды восстановления в любой момент после включения двухфакторной проверки подлинности.

Чтобы обеспечить безопасность учетной записи, не делитесь кодами восстановления и не распространяйте их. Рекомендуется сохранить их с помощью безопасного менеджера паролей, такого как:
- [1Password](https://1password.com/)
- [LastPass](https://lastpass.com/)

При создании новых кодов восстановления или отключении и повторном включении двухфакторной проверки подлинности коды восстановления в параметрах безопасности автоматически обновляются.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.show-recovery-codes %}
4. Сохраните коды восстановления в надежном месте. Ваши коды восстановления помогут вам вернуть доступ к учетной записи, если вы его потеряете.
    - Чтобы сохранить коды восстановления на устройстве, нажмите **Скачать**.
    - Чтобы сохранить печатную копию ваших кодов восстановления, нажмите **Печать**.
    - Чтобы скопировать коды восстановления для хранения в менеджере паролей, нажмите **Копировать**.
  ![Список кодов восстановления с возможностью скачивания, печати или копирования](/assets/images/help/2fa/download-print-or-copy-recovery-codes-before-continuing.png)

## Создание нового набора кодов восстановления

После использования кода восстановления для восстановления доступа к учетной записи его нельзя использовать повторно. Если вы использовали все 16 кодов восстановления, можно создать другой список кодов. Создание нового набора кодов восстановления сделает недействительными все созданные ранее коды.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.show-recovery-codes %}
3. Чтобы создать другой пакет кодов восстановления, щелкните **Создать новые коды восстановления**.
    ![Кнопка создания новых кодов восстановления](/assets/images/help/2fa/generate-new-recovery-codes.png)

## Настройка ключа безопасности в качестве дополнительного способа двухфакторной проверки подлинности

Вы можете настроить ключ безопасности в качестве дополнительного способа двухфакторной проверки подлинности и использовать этот ключ безопасности для восстановления доступа к учетной записи. Подробнее: [Настройка двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key).

{% ifversion fpt or ghec %}

## Настройка резервного номера проверки подлинности

Вы можете указать второй номер для резервного устройства. Если вы потеряете доступ к основному устройству и кодам восстановления, резервный номер для текстовых сообщений поможет восстановить доступ к учетной записи.

Вы можете использовать резервный номер независимо от того, настроена ли проверка подлинности с помощью текстового сообщения или мобильного приложения TOTP.

{% warning %}

**Предупреждение.** Использование резервного номера является крайней мерой. Если вы задаете резервный номер проверки подлинности, рекомендуется настроить дополнительные методы восстановления.
- Злоумышленники могут атаковать операторов сотовой связи, поэтому проверка подлинности с помощью SMS является рискованной.
- SMS-сообщения поддерживаются только для некоторых стран за пределами США; список см. в разделе [Страны, в которых поддерживается проверка подлинности с помощью SMS](/articles/countries-where-sms-authentication-is-supported).

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. Рядом с пунктом "Резервный номер для SMS" нажмите кнопку **Добавить**.
![Кнопка добавления резервного номера для SMS](/assets/images/help/2fa/add-fallback-sms-number-button.png)
4. В разделе "Резервный номер для SMS" нажмите кнопку **Добавить резервный номер для SMS**.
![Текст добавления резервного номера для SMS](/assets/images/help/2fa/add_fallback_sms_number_text.png)
5. Выберите код страны и введите свой номер мобильного телефона, включая код города. Если данные верны, нажмите кнопку **Установить как резервный**.
    ![Установка резервного номера для SMS](/assets/images/help/2fa/2fa-fallback-number.png)

После установки устройство резервного копирования получит подтверждающее SMS.

{% endif %}

## Дополнительные материалы

- [Двухфакторная проверка подлинности](/articles/about-two-factor-authentication)
- [Настройка двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication)
- [Доступ к {% data variables.product.prodname_dotcom %} с помощью двухфакторной проверки подлинности](/articles/accessing-github-using-two-factor-authentication)
- [Восстановление учетной записи при потере учетных данных двухфакторной проверки подлинности](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)
