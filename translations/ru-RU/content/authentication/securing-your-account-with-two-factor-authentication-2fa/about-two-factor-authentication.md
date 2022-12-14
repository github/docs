---
title: Двухфакторная проверка подлинности
intro: '{% data reusables.two_fa.about-2fa %} При использовании 2FA необходимо войти в систему с помощью имени пользователя и пароля и предоставить еще одну форму проверки подлинности, доступ к которой есть только у вас.'
redirect_from:
  - /articles/about-two-factor-authentication
  - /github/authenticating-to-github/about-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: About 2FA
ms.openlocfilehash: 21ccfaa2490592d8350c8abd831f3d3fe7e33041
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098924'
---
Для {% data variables.product.product_name %} второй формой проверки подлинности является код, создаваемый приложением на мобильном устройстве{% ifversion fpt or ghec %} или отправляемый в текстовом сообщении (SMS){% endif %}. После включения 2FA {% данных variables.product.product_name %} создает код проверки подлинности в любой момент, когда кто-то пытается войти в учетную запись на {% данных variables.location.product_location %}. Единственный способ войти в вашу учетную запись — указать пароль и иметь доступ к коду проверки подлинности на телефоне.

{% data reusables.two_fa.after-2fa-add-security-key %}

{% ifversion fpt or ghec %} Помимо ключей безопасности, вы также можете использовать {% data variables.product.prodname_mobile %} для двухфакторной проверки подлинности после настройки мобильного приложения TOTP или текстовых сообщений. {% data variables.product.prodname_mobile %} использует шифрование с открытым ключом для защиты учетной записи, что позволяет применять в качестве дополнительного фактора любое мобильное устройство, с которого вы входили в {% data variables.product.prodname_mobile %}.
{% endif %}

Кроме того, можно настроить дополнительные методы восстановления на случай, если вы утратите доступ к учетным данным двухфакторной проверки подлинности. Дополнительные сведения о настройке двухфакторной проверки подлинности см. в разделах [Настройка двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication) и [Настройка методов восстановления для двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication-recovery-methods).

Мы **настоятельно** призываем вас включить двухфакторную проверку подлинности для обеспечения безопасности вашей учетной записи не только на {% data variables.product.product_name %}, но и на других веб-сайтах и в других приложениях, поддерживающих двухфакторную проверку подлинности. Вы можете включить двухфакторную проверку подлинности для доступа к {% data variables.product.product_name %} и {% data variables.product.prodname_desktop %}.

Дополнительные сведения см. в разделе [Доступ к {% data variables.product.prodname_dotcom %} с помощью двухфакторной проверки подлинности](/articles/accessing-github-using-two-factor-authentication).

## Коды восстановления двухфакторной проверки подлинности

{% data reusables.two_fa.about-recovery-codes %} Дополнительные сведения см. в разделе [Восстановление учетной записи при потере учетных данных двухфакторной проверки подлинности](/articles/recovering-your-account-if-you-lose-your-2fa-credentials).

{% ifversion fpt or ghec %}

{% warning %}

**Предупреждение**. {% data reusables.two_fa.support-may-not-help %} Дополнительные сведения см. в разделе [Восстановление учетной записи при потере учетных данных двухфакторной проверки подлинности](/articles/recovering-your-account-if-you-lose-your-2fa-credentials).

{% endwarning %}

{% endif %}

## Обязательная двухфакторная проверка подлинности в вашей организации

Владельцы организации могут требовать, чтобы члены организации{% ifversion fpt or ghec %}, менеджеры по выставлению счетов{% endif %} и внешние участники совместной работы использовали двухфакторную проверку подлинности для защиты личных учетных записей. Дополнительные сведения см. в разделе [Настройка требования двухфакторной проверки подлинности в организации](/articles/requiring-two-factor-authentication-in-your-organization).

{% data reusables.two_fa.auth_methods_2fa %}
