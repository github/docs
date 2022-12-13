---
title: Доступ к GitHub с помощью двухфакторной проверки подлинности
intro: 'После включения двухфакторной проверки подлинности при входе в {% data variables.product.product_name %} вам будет предложено указать код двухфакторной проверки подлинности, а также пароль.'
redirect_from:
  - /articles/providing-your-2fa-security-code
  - /articles/providing-your-2fa-authentication-code
  - /articles/authenticating-to-github-using-fido-u2f-via-nfc
  - /articles/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Access GitHub with 2FA
ms.openlocfilehash: 727e2ce5a1e0292b7f571aa29349e967cb8cd3f3
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098463'
---
Если включена двухфакторная проверка подлинности, вам потребуется предоставить код проверки подлинности при доступе к {% data variables.product.product_name %} через браузер. При доступе к {% data variables.product.product_name %} с помощью других методов, таких как API или командная строка, необходимо использовать другую форму проверки подлинности. Дополнительные сведения см. в разделе [Сведения о проверке подлинности в {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github).

## Предоставление кода двухфакторной проверки подлинности при входе на веб-сайт

После входа в {% data variables.product.product_name %} с помощью пароля вам будет предложено предоставить код проверки подлинности из {% ifversion fpt or ghec %}текстового сообщения или{% endif %} вашего приложения TOTP.

{% data variables.product.product_name %} попросит вас снова предоставить код двухфакторной проверки подлинности, только если вы вышли из системы, используете новое устройство или истек срок действия сеанса.

### Создание кода с помощью приложения TOTP

Если вы решили настроить двухфакторную проверку подлинности с помощью приложения TOTP на смартфоне, то можете создать код проверки подлинности для {% data variables.product.product_name %} в любое время. В большинстве случаев для создания нового кода достаточно просто запустить это приложение. Конкретные инструкции см. в документации приложения.

Если вы удалите мобильное приложение после настройки двухфакторной проверки подлинности, то для получения доступа к учетной записи вам будет нужно предоставить код восстановления. Дополнительные сведения см. в разделе [Восстановление учетной записи при потере учетных данных двухфакторной проверки подлинности](/articles/recovering-your-account-if-you-lose-your-2fa-credentials).

{% ifversion fpt or ghec %}

### Получение текстового сообщения

Если вы настроили двухфакторную проверку подлинности с помощью текстовых сообщений, {% data variables.product.product_name %} будет отправлять вам текстовое сообщение с кодом проверки подлинности.

### Проверка с помощью {% data variables.product.prodname_mobile %}

Если вы установили {% data variables.product.prodname_mobile %} и вошли в него, вы можете выбрать проверку подлинности с помощью {% data variables.product.prodname_mobile %} для двухфакторной проверки подлинности.

1. Войдите в {% data variables.product.product_name %} в браузере, используя свое имя пользователя и пароль.
2. Если вы добавили в свою учетную запись ключ безопасности, сначала будет предложено вставить и использовать ключ безопасности. Чтобы пропустить использование ключа безопасности, нажмите **Проверка подлинности с помощью {% data variables.product.prodname_mobile %}** .
  ![Запрос двухфакторной проверки подлинности в {% data variables.product.product_name %} с выделенным параметром "Проверка подлинности с помощью {% data variables.product.prodname_mobile %}"](/assets/images/help/2fa/2fa-select-mobile.png)
3. {% data variables.product.product_name %} отправит push-уведомление для проверки вашей попытки входа. При открытии push-уведомления или открытии приложения {% data variables.product.prodname_mobile %} появится подсказка, предлагающая утвердить или отклонить попытку входа.
  {% note %}

  **Примечание.** Эта подсказка может потребовать ввести двузначное число, отображаемое в браузере, в котором выполняется вход.

  {% endnote %}

  ![Запрос двухфакторной проверки подлинности в {% data variables.product.prodname_mobile %}, требующий ввести двузначное число](/assets/images/help/2fa/2fa-mobile-number-challenge.png)

    - После утверждения попытки входа с помощью {% data variables.product.prodname_mobile %} браузер автоматически выполнит попытку входа.
    - Отклонение попытки входа не позволит завершить проверку подлинности. Дополнительные сведения см. в разделе [Обеспечение безопасности учетной записи и данных](/authentication/keeping-your-account-and-data-secure).

{% endif %}

## Использование двухфакторной проверки подлинности с командной строкой

После включения 2FA вы больше не будете использовать пароль для доступа к {% data variables.product.product_name %} в командной строке. Вместо этого используйте диспетчер учетных данных Git, {% данных variables.product.pat_generic %}или ключ SSH.

### Проверка подлинности в командной строке с помощью диспетчера учетных данных Git

[Диспетчер учетных данных Git](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) является вспомогательным компонентом учетных данных Git, который работает в Windows, macOS и Linux. Дополнительные сведения о вспомогательных функциях диспетчеров учетных данных Git см. в разделе [Избегание повторения](https://git-scm.com/docs/gitcredentials#_avoiding_repetition) в книге Pro Git.

Инструкции по настройке зависят от операционной системы компьютера. Дополнительные сведения см. в разделе [Скачивание и установка](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md#download-and-install) в репозитории GitCredentialManager/git-credential-manager.

### Проверка подлинности в командной строке с помощью HTTPS

После включения 2FA необходимо создать {% данных variables.product.pat_generic %} для использования в качестве пароля при проверке подлинности в {% данных variables.product.product_name %} в командной строке с помощью URL-адресов HTTPS.

При появлении запроса на ввод имени пользователя и пароля в командной строке используйте имя пользователя {% данных variables.product.product_name %} и {% данных variables.product.pat_generic %}. Командная строка не будет указывать, что при запросе пароля введите {% данных variables.product.pat_generic %}.

Дополнительные сведения см. в разделе "[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".

### Проверка подлинности в командной строке с помощью SSH

Включение двухфакторной проверки подлинности не изменяет способ проверки подлинности в {% data variables.product.product_name %} в командной строке с помощью URL-адресов SSH. Дополнительные сведения о настройке и использовании ключа SSH см. в разделе [Подключение к {% data variables.product.prodname_dotcom %} с помощью SSH](/articles/connecting-to-github-with-ssh/).

## Использование двухфакторной проверки подлинности для доступа к репозиторию с помощью Subversion

При доступе к репозиторию через Subversion необходимо предоставить {% данных variables.product.pat_generic %} вместо ввода пароля. Дополнительные сведения см. в разделе "[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".

## Устранение неполадок

Если вы потеряете доступ к своим учетным данным двухфакторной проверки подлинности, то для восстановления доступа к учетной записи сможете использовать коды восстановления или другой метод восстановления (если он настроен). Дополнительные сведения см. в разделе [Восстановление учетной записи при потере учетных данных двухфакторной проверки подлинности](/articles/recovering-your-account-if-you-lose-your-2fa-credentials).

Если проверка подлинности завершается неудачно несколько раз, может потребоваться синхронизировать часы телефона с вашим мобильным оператором. Обычно для этого нужно проверить параметр "Установить автоматически" на часах телефона, а иногда — предоставить собственный часовой пояс.

## Дополнительные материалы

- [Двухфакторная проверка подлинности](/articles/about-two-factor-authentication)
- [Настройка двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication)
- [Настройка методов восстановления для двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication-recovery-methods)
- [Восстановление учетной записи при потере учетных данных двухфакторной проверки подлинности](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)
