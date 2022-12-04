---
title: Поддерживаемые операционные системы
intro: 'Можно использовать {% data variables.product.prodname_desktop %} в любой поддерживаемой операционной системе.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /desktop/getting-started-with-github-desktop/supported-operating-systems
  - /desktop/installing-and-configuring-github-desktop/supported-operating-systems
versions:
  fpt: '*'
shortTitle: Supported OS
ms.openlocfilehash: 13e148ccf8e254c4e40f9e20ad6c5af083e21d8c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117275'
---
## Сведения о поддерживаемых операционных системах

Для работы с {% data variables.product.prodname_desktop %} поддерживаются следующие операционные системы.
- {% data variables.desktop.mac-osx-versions %}
- {% data variables.desktop.windows-versions %}. Для запуска {% data variables.product.prodname_desktop %} должна быть установлена 64-разрядная операционная система.

## Устранение неполадок в macOS
Если у вас возникли проблемы с использованием {% data variables.product.prodname_desktop %} в macOS, ознакомьтесь с приведенными ниже решениями. Дополнительные сведения см. на веб-сайте [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

### Ошибка `The username or passphrase you entered is not correct` после входа в учетную запись

Эта ошибка может возникать, когда {% data variables.product.prodname_desktop %} не удается получить доступ к сохраненным учетным данным в цепочке ключей.

Для устранения этой ошибки выполните следующие действия.

1. Откройте приложение "Доступ к цепочке ключей".
2. Щелкните правой кнопкой мыши **login** и выберите команду **Заблокировать цепочку ключей "login"** .
  ![Параметр "Заблокировать цепочку ключей «login»"](/assets/images/help/desktop/mac-lock-keychain.png)
3. Щелкните правой кнопкой мыши **login** и выберите команду **Разблокировать цепочку ключей "login"** . Следуйте инструкциям на экране, чтобы завершить разблокировку цепочки ключей "login".
  ![Параметр "Разблокировать цепочку ключей «login»"](/assets/images/help/desktop/mac-unlock-keychain.png)
4. Повторно выполните проверку подлинности учетной записи в {% data variables.product.prodname_dotcom %} или {% data variables.product.prodname_enterprise %}.

### Ошибка `Could not create temporary directory: Permission denied` после проверки наличия обновлений

Эта ошибка может быть вызвана отсутствием разрешений на доступ к каталогу `~/Library/Caches/com.github.GitHubClient.ShipIt`. {% data variables.product.prodname_desktop %} использует этот каталог для создания и распаковки временных файлов в рамках обновления приложения.

Для устранения этой ошибки выполните следующие действия.

1. Закройте {% data variables.product.prodname_desktop %}.
2. Откройте "Finder" и перейдите в каталог `~/Library/Caches/`.
3. Щелкните правой кнопкой мыши `com.github.GitHubClient.ShipIt` и выберите команду **Получить сведения**.
4. Щелкните стрелку слева от элемента "Общий доступ и разрешения".
5. Если справа от учетной записи не указано разрешение "Чтение и запись", щелкните текст и нажмите кнопку **Чтение и запись**.
  ![Параметры "Общий доступ и разрешения"](/assets/images/help/desktop/mac-adjust-permissions.png)
6. Откройте {% data variables.product.prodname_desktop %} и проверьте наличие обновлений.

## Устранение неполадок в Windows
Если у вас возникли проблемы с использованием {% data variables.product.prodname_desktop %} в Windows, ознакомьтесь с приведенными ниже решениями. Дополнительные сведения см. на веб-сайте [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

### Ошибок: `The revocation function was unable to check revocation for the certificate.`

Эта ошибка может возникнуть, если вы используете {% data variables.product.prodname_desktop %} в корпоративной сети, которая блокирует попытки Windows проверить состояние отзыва сертификата.

Чтобы устранить неполадку, обратитесь к системному администратору.

### Ошибка `git clone failed` при клонировании репозитория, настроенного с помощью перенаправления папок

{% data variables.product.prodname_desktop %} не поддерживает репозитории, настроенные с помощью перенаправления папок.

### Ошибок: `cygheap base mismatch detected`

Эта ошибка может возникать, если включено обязательное использование ASLR. Включение обязательного использования ASLR влияет на основную библиотеку MSYS2, на основе которой {% data variables.product.prodname_desktop %} выполняет эмуляцию создания вилки процесса.

Чтобы устранить эту ошибку, отключите обязательное использование ASLR или явным образом разрешите все исполняемые файлы в `<Git>\usr\bin`, от которых зависит MSYS2.
