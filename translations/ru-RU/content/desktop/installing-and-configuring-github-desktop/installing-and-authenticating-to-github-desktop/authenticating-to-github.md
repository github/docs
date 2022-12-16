---
title: Проверка подлинности в GitHub
shortTitle: Authentication
intro: 'Вы можете безопасно осуществлять доступ к ресурсам учетной записи в {% data variables.product.prodname_desktop %} путем проверки подлинности в {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/authenticating-to-github-using-the-browser
  - /desktop/getting-started-with-github-desktop/authenticating-to-github
  - /desktop/installing-and-configuring-github-desktop/authenticating-to-github
versions:
  fpt: '*'
ms.openlocfilehash: 96a0277b6a921e103a73dd35e14495b51e9aaede
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094460'
---
## Об аутентификации

Чтобы обеспечить безопасность учетной записи, необходимо пройти проверку подлинности, прежде чем использовать {% data variables.product.prodname_desktop %} для доступа к ресурсам в {% data variables.product.prodname_dotcom %}.

Перед проверкой подлинности выполните {% data reusables.desktop.get-an-account %}

{% mac %}

## Проверка подлинности учетной записи на {% data variables.product.prodname_dotcom %}

{% data reusables.desktop.mac-select-desktop-menu %} {% data reusables.desktop.mac-select-accounts %}
3. Нажмите кнопку **Войти** справа от элемента "Сервер {% data variables.product.prodname_dotcom_the_website %}".
  ![Кнопка входа для GitHub](/assets/images/help/desktop/mac-sign-in-github.png) {% data reusables.desktop.sign-in-browser %}


{% data reusables.desktop.authenticate-in-browser %} {% data reusables.desktop.2fa-in-browser %}
7. Когда {% data variables.product.prodname_dotcom %} выполнит проверку подлинности для учетной записи, следуйте подсказкам для возвращения к {% data variables.product.prodname_desktop %}.

## Проверка подлинности учетной записи на {% data variables.product.prodname_ghe_server %}


{% data reusables.desktop.mac-select-desktop-menu %} {% data reusables.desktop.mac-select-accounts %} {% data reusables.desktop.choose-product-authenticate %}
4. Чтобы добавить учетную запись для {% данных variables.location.product_location_enterprise %}, введите URL-адрес экземпляра в поле "Корпоративный адрес", а затем нажмите кнопку **"Продолжить**".
  ![Кнопка входа для GitHub Enterprise](/assets/images/help/desktop/mac-sign-in-button-enterprise.png) {% data reusables.desktop.sign-in-browser %}
1. Чтобы пройти проверку подлинности в учетной записи {% данных variables.location.product_location_enterprise %}, введите учетные данные учетной записи и нажмите кнопку **"Войти".**
  ![Кнопка входа в {% data variables.product.prodname_ghe_server %} в браузере](/assets/images/help/desktop/enterprise-sign-in-button-browser.png)

  Кроме того, если вы уже вошли в учетную запись {% данных variables.location.product_location_enterprise %}, следуйте инструкциям, чтобы вернуться к {% данных variables.product.prodname_desktop %} для завершения проверки подлинности. 

{% endmac %}

{% windows %}

## Проверка подлинности учетной записи на {% data variables.product.prodname_dotcom %}

{% data reusables.desktop.windows-choose-options %} {% data reusables.desktop.windows-select-accounts %}
3. Щелкните **Войти** справа от элемента "GitHub.com".
  ![Кнопка входа для GitHub](/assets/images/help/desktop/windows-sign-in-github.png) {% data reusables.desktop.sign-in-browser %}

  {% data reusables.user-settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.authenticate-in-browser %} {% data reusables.desktop.2fa-in-browser %}
7. Когда {% data variables.product.prodname_dotcom %} выполнит проверку подлинности для учетной записи, следуйте подсказкам для возвращения к {% data variables.product.prodname_desktop %}.

## Проверка подлинности учетной записи на {% data variables.product.prodname_enterprise %}


{% data reusables.desktop.windows-choose-options %} {% data reusables.desktop.windows-select-accounts %} {% data reusables.desktop.choose-product-authenticate %}
4. Чтобы добавить учетную запись {% data variables.product.prodname_enterprise %}, введите ее учетные данные в поле "Адрес Enterprise", а затем щелкните **Продолжить**.
  ![Кнопка входа для GitHub Enterprise](/assets/images/help/desktop/windows-sign-in-button-enterprise.png) {% data reusables.desktop.retrieve-2fa %}

{% endwindows %}

## Диагностика проблем с проверкой подлинности

Если {% data variables.product.prodname_desktop %} столкнется с ошибкой проверки подлинности, для устранения неполадок можно использовать сообщения об ошибках.

При возникновении ошибки проверки подлинности сначала попробуйте выйти из учетной записи и снова войти в нее в {% data variables.product.prodname_desktop %}.

Для некоторых ошибок {% data variables.product.prodname_desktop %} отображает сообщение об ошибке. Если такого сообщения нет или вам нужны дополнительные сведения об ошибке, проверьте файлы журнала {% data variables.product.prodname_desktop %}, выполнив следующие действия.

{% mac %}

1. Откройте раскрывающееся меню **Справка** и щелкните **Показать журналы в средстве поиска**.
  ![Кнопка "Показать журналы в средстве поиска"](/assets/images/help/desktop/mac-show-logs.png)
2. Выберите файл журнала за тот день, когда возникала ошибка проверки подлинности.

{% endmac %}

{% windows %}

1. В раскрывающемся меню **Справка** щелкните **Показать журналы в обозревателе**.
  ![Кнопка "Показать журналы в обозревателе"](/assets/images/help/desktop/windows-show-logs.png)
2. Выберите файл журнала за тот день, когда возникала ошибка проверки подлинности.

{% endwindows %}

Просмотрите описанные ниже сведения об устранении неполадок в том сообщении об ошибке, которое вы найдете.

### Недопустимые учетные данные

```shell
Error: Bad credentials
```

Эта ошибка означает, что возникла проблема с сохраненными учетными данными для учетной записи.

Чтобы устранить неполадки, выйдите из учетной записи в {% data variables.product.prodname_desktop %}, а затем снова войдите в нее.

### Пустой маркер

```shell
info: [ui] [AppStore.withAuthenticatingUser] account found for repository: node - USERNAME (empty token)
```

Эта ошибка означает, что {% data variables.product.prodname_desktop %} не может найти маркер доступа, созданный в системной цепочке ключей.

Чтобы устранить неполадки, выйдите из учетной записи в {% data variables.product.prodname_desktop %}, а затем снова войдите в нее.

### Репозиторий не найден

```shell
fatal: repository 'https://github.com/<user>/<repo>.git' not found

(The error was parsed as 8: The repository does not seem to exist anymore. You may not have access, or it may have been deleted or renamed.)
```

Эта ошибка означает, что у вас нет разрешений на доступ к репозиторию, который вы пытаетесь клонировать.

Чтобы устранить неполадки, обратитесь к сотруднику организации, который управляет разрешениями.

### Не удалось выполнить чтение из удаленного репозитория

```shell
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights and the repository exists.
```

Эта ошибка означает, что у вас не настроен допустимый ключ SSH.

Сведения об устранении неполадок см. в статье [Создание нового ключа SSH и его добавление в агент SSH](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

### Не удалось клонировать

```shell
fatal: clone of 'git@github.com:<user>/<repo>' into submodule path '<path>' failed
Failed to clone 'src/github.com/<user>/<repo>'. Retry scheduled
Cloning into '<path>'...
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
Please make sure you have the correct access rights
and the repository exists.
```

Эта ошибка означает, что репозиторий, который вы пытаетесь клонировать, имеет вложенные модули, к которым у вас нет доступа, или у вас не настроен допустимый ключ SSH.

Если у вас нет доступа к вложенным модулям, для устранения неполадок свяжитесь с ответственным за управления разрешениями для репозитория.

Если у вас не настроен допустимый ключ SSH, воспользуйтесь статьей [Создание нового ключа SSH и его добавление в агент SSH](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

{% windows %}

### Не удается прочитать ответ AskPass

```shell
error: unable to read askpass response from '/Users/<path>/GitHub Desktop.app/Contents/Resources/app/static/ask-pass-trampoline.sh'
fatal: could not read Username for 'https://github.com': terminal prompts disabled
```

Эта ошибка может быть вызвана несколькими событиями.

Если записи реестра `Command Processor` были изменены, {% data variables.product.prodname_desktop %} возвратит ошибку `Authentication failed`. Чтобы проверить, были ли изменены эти записи реестра, выполните следующие действия.

1. Откройте редактор реестра (`regedit.exe`) и поочередно перейдите к следующим разделам:
  `HKEY_CURRENT_USER\Software\Microsoft\Command Processor\`
  `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor\`
2. Проверьте наличие значения `Autorun` в любом из этих расположений.
3. Если значение `Autorun` присутствует, удалите его.

Если имя пользователя Windows содержит расширенные символы Юникода, это может привести к ошибке ответа AskPass. Чтобы устранить неполадки, создайте новую учетную запись пользователя Windows и перенесите в нее файлы. Дополнительные сведения см. в статье документации Майкрософт [Создание учетной записи пользователя в Windows](https://support.microsoft.com/en-us/help/13951/windows-create-user-account).

{% endwindows %}

## Дополнительные материалы
- [Сведения о проверке подлинности в GitHub](/github/authenticating-to-github/about-authentication-to-github)
