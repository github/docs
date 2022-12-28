---
title: Кэширование учетных данных GitHub в Git
redirect_from:
  - /firewalls-and-proxies
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/getting-started-with-git/caching-your-github-credentials-in-git
intro: 'Если вы [клонируете репозитории {% data variables.product.product_name %} с помощью HTTPS](/github/getting-started-with-github/about-remote-repositories), рекомендуется использовать {% data variables.product.prodname_cli %} или диспетчер учетных данных Git (GCM), чтобы запомнить учетные данные.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Caching credentials
ms.openlocfilehash: 95c4d00fa00dcb76d23338bf4a443f31a39f09e9
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099252'
---
{% tip %}

**Совет:** Если клонировать репозитории {% data variables.product.product_name %} с помощью SSH, можно выполнить проверку подлинности с помощью ключа SSH вместо использования других учетных данных. Сведения о настройке подключения SSH см. в разделе [Создание ключа SSH](/articles/generating-an-ssh-key).

{% endtip %}

## {% data variables.product.prodname_cli %}

Если вы выбрали `HTTPS` в качестве предпочтительного протокола для операций Git и ответили "Да" на вопрос о том, хотите ли вы пройти проверку подлинности в Git с учетными данными {% data variables.product.product_name %}, {% data variables.product.prodname_cli %} будет автоматически сохранять ваши учетные данные Git.

1. [Установите](https://github.com/cli/cli#installation) {% data variables.product.prodname_cli %} в macOS, Windows или Linux.
2. В командной строке введите `gh auth login` и следуйте инструкциям.
   - При появлении запроса на выбор предпочтительного протокола для операций Git выберите `HTTPS`.
   - При появлении запроса на проверку подлинности в Git с учетными данными {% data variables.product.product_name %} введите `Y`.

Дополнительные сведения о проверке подлинности с помощью{% data variables.product.prodname_cli %} см. в разделе [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

## Диспетчер учетных данных Git

[Диспетчер учетных данных Git](https://github.com/GitCredentialManager/git-credential-manager) (GCM) — это еще один способ безопасного хранения учетных данных и подключения к GitHub по протоколу HTTPS. При использовании GCM вам не нужно [вручную создавать и хранить данные {% variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token), так как GCM управляет проверкой подлинности от вашего имени, включая 2FA (двухфакторная проверка подлинности).

{% mac %}

1. Установите Git с помощью [Homebrew](https://brew.sh/):
  ```shell
  $ brew install git
  ```

2. Установите GCM с помощью Homebrew:
  ```shell
  $ brew tap microsoft/git
  $ brew install --cask git-credential-manager-core
  ```
  Для MacOS выполнять команду `git config` не требуется, так как GCM автоматически настраивает Git.

{% data reusables.gcm-core.next-time-you-clone %}

После успешной проверки подлинности учетные данные хранятся в цепочке ключей macOS и будут использоваться при каждом клонировании URL-адреса HTTPS. Git не потребует повторно вводить учетные данные в командной строке, если только вы не измените учетные данные.

{% endmac %}

{% windows %}

1. Установите Git для Windows, включая GCM. Дополнительные сведения см. в разделе [Выпуски Git для Windows](https://github.com/git-for-windows/git/releases/latest) на [странице выпусков](https://github.com/git-for-windows/git/releases/latest).

Рекомендуется всегда устанавливать последнюю версию. Установите версию 2.29, которая является первой версией, предлагающей поддержку OAuth для GitHub, или более позднюю версию.

{% data reusables.gcm-core.next-time-you-clone %}

После успешной проверки подлинности учетные данные хранятся в диспетчере учетных данных Windows и будут использоваться при каждом клонировании URL-адреса HTTPS. Git не потребует повторно вводить учетные данные в командной строке, если только вы не измените учетные данные.

<br>

{% warning %}

**Предупреждение**. В состав более старых версий Git входит диспетчер учетных данных Git для Windows. Этот старый продукт больше не поддерживается и не может подключаться к GitHub с использованием OAuth. Мы рекомендуем выполнить обновление до [последней версии Git для Windows](https://github.com/git-for-windows/git/releases/latest).

{% endwarning %}

{% warning %}

**Предупреждение:** Если вы кэшировали неправильные или устаревшие учетные данные в диспетчере учетных данных для Windows, Git не сможет получить доступ к {% data variables.product.product_name %}. Чтобы сбросить кэшированные учетные данные и запросить ввод учетных данных в Git, откройте диспетчер учетных данных на панели управления Windows в разделе "Учетные записи пользователей" > "Диспетчер учетных данных". Найдите запись {% data variables.product.product_name %} и удалите ее. 

{% endwarning %}

{% endwindows %}

{% linux %}

Для Linux установите Git и GCM, а затем настройте Git для использования GCM.

1. Установите Git из системы управления пакетами дистрибутива. Конкретные инструкции зависят от используемой версии Linux.

2. Установите GCM. Обратитесь к [инструкциям в репозитории GCM](https://github.com/GitCredentialManager/git-credential-manager#linux-install-instructions), так как они будут отличаться в зависимости от используемой версии Linux.

3. Настройте Git для использования GCM. Вы можете выбрать несколько резервных хранилищ, поэтому ознакомьтесь с документацией по GCM, чтобы завершить настройку. Дополнительные сведения см. в разделе [GCM для Linux](https://aka.ms/gcmcore-linuxcredstores).

{% data reusables.gcm-core.next-time-you-clone %}

После успешной проверки подлинности учетные данные хранятся в вашей системе и будут использоваться при каждом клонировании URL-адреса HTTPS. Git не потребует повторно вводить учетные данные в командной строке, если только вы не измените учетные данные.

Дополнительные варианты хранения учетных данных в Linux см. в разделе [Хранилище учетных данных](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage) в Pro Git.

{% endlinux %}

<br>

Чтобы ознакомиться с дополнительными сведениями или сообщить о проблемах с GCM, обратитесь к официальной документации по GCM в разделе [Диспетчер учетных данных Git](https://github.com/GitCredentialManager/git-credential-manager).
