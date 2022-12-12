---
title: Изменение методов доставки двухфакторной проверки подлинности для мобильного устройства
intro: Вы можете выбрать получение кодов проверки подлинности с помощью текстового сообщения или в мобильном приложении.
redirect_from:
  - /articles/changing-two-factor-authentication-delivery-methods
  - /articles/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
versions:
  fpt: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Change 2FA delivery method
ms.openlocfilehash: 90f06f6e3a8b3c5614b78d7aee4055d903df2e80
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088305'
---
{% note %}

**Примечание.** Вследствие изменения основного метода для двухфакторной проверки подлинности текущая настройка двухфакторной проверки подлинности становится недействительной, включая коды восстановления. Сохраните новый набор кодов восстановления в безопасном месте. Изменение основного метода для двухфакторной проверки подлинности не влияет на резервную конфигурацию SMS, если она настроена. Дополнительные сведения см. в разделе [Настройка методов восстановления двухфакторной проверки подлинности](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#setting-a-fallback-authentication-number).

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. Рядом с параметром "Основной двухфакторный метод" щелкните **Изменить**.
  ![Изменить основные параметры доставки](/assets/images/help/2fa/edit-primary-delivery-option.png)
4. В разделе "Параметры доставки" щелкните **Перенастроить двухфакторную проверку подлинности**.
    ![Переключение вариантов доставки 2FA](/assets/images/help/2fa/2fa-switching-methods.png)
5. Определите, следует ли настроить двухфакторную проверку подлинности с помощью мобильного приложения TOTP или текстового сообщения. Подробнее: [Настройка двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication).
    - Чтобы настроить двухфакторную проверку подлинности с помощью мобильного приложения TOTP, щелкните **Настроить использование приложения**.
    - Чтобы настроить двухфакторную проверку подлинности с помощью текстового сообщения (SMS), щелкните **Настроить использование SMS**.

## Дополнительные материалы

- [Двухфакторная проверка подлинности](/articles/about-two-factor-authentication)
- [Настройка методов восстановления для двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication-recovery-methods)
