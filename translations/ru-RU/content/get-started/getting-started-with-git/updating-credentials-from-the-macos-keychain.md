---
title: Обновление учетных данных из цепочки ключей macOS
intro: 'Если вы измените имя пользователя, имя пользователя, пароль или {% endif %} {% данных variables.product.pat_generic %} на {% данных variables.product.product_name %}, вам потребуется обновить сохраненные учетные данные в вспомогательной `git-credential-osxkeychain` службе.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/getting-started-with-git/updating-credentials-from-the-macos-keychain
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: macOS Keychain credentials
ms.openlocfilehash: 5007c729221b9daf8e9393dfa7776fdfc3398c34
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094580'
---
{% tip %}

**Примечание:** Обновление учетных данных из цепочки ключей macOS применяется только к пользователям, которые вручную настроили {% данных variables.product.pat_generic %} с помощью вспомогательной  `osxkeychain` функции, встроенной в macOS. 

Мы рекомендуем вместо этого [настроить SSH](/articles/generating-an-ssh-key) или выполнить обновление до [диспетчера учетных данных Git](/get-started/getting-started-with-git/caching-your-github-credentials-in-git) (GCM). GCM может управлять проверкой подлинности от вашего имени (не более вручную {% данных variables.product.pat_generic %}s), включая 2FA (двухфакторная проверка подлинности).

{% endtip %}

{% data reusables.user-settings.password-authentication-deprecation %}

## Обновление учетных данных с помощью доступа к цепочке ключей

1. Щелкните значок "Интересное" (лупа) в правой части строки меню. Введите `Keychain access` и нажмите клавишу ВВОД, чтобы запустить приложение.
   ![Панель поиска "Интересное"](/assets/images/help/setup/keychain-access.png)
2. В разделе "Доступ к цепочке ключей" выполните поиск по запросу **{% data variables.command_line.backticks %}** .
3. Найдите запись "internet password" для `{% data variables.command_line.backticks %}`.
4. Измените или удалите запись соответственно.

## Удаление учетных данных с помощью командной строки

В командной строке можно использовать вспомогательное приложение учетных данных для непосредственного удаления записи цепочки ключей.

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> [Press Return]
```

Если это успешно, ничего не выведет. Чтобы проверить его работу, попробуйте клонировать частный репозиторий из {% данных variables.location.product_location %}. Если вам будет предложено ввести пароль, это означает, что запись цепочки ключей была удалена.

## Дополнительные материалы

- [Кэширование учетных данных {% data variables.product.prodname_dotcom %} в Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/)
