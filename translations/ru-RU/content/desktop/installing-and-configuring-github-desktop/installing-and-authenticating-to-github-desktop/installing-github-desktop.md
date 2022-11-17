---
title: Установка GitHub Desktop
shortTitle: Installation
intro: Можно установить GitHub Desktop в поддерживаемых операционных системах Windows и macOS.
redirect_from:
  - /desktop/getting-started-with-github-desktop/installing-github-desktop
  - /desktop/installing-and-configuring-github-desktop/installing-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: 4947bff541682887817198c714e7e78bff2cfc9f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882782'
---
## Сведения об установке {% data variables.product.prodname_desktop %}

Вы можете установить {% data variables.product.prodname_desktop %} в поддерживаемых операционных системах, к которым в настоящее время относятся {% data variables.desktop.mac-osx-versions %} и {% data variables.desktop.windows-versions %}. Если у вас есть учетная запись на сайте {% data variables.product.prodname_dotcom %} или в {% data variables.product.prodname_enterprise %}, вы можете подключить ее к {% data variables.product.prodname_desktop %}. Дополнительные сведения о создании учетной записи см. в разделе [Регистрация для новой учетной записи {% data variables.product.prodname_dotcom %}](/articles/signing-up-for-a-new-github-account/) или обратитесь к своему администратору сайта {% data variables.product.prodname_enterprise %}.

{% windows %}

Если вы являетесь администратором сети, вы можете развернуть {% data variables.product.prodname_desktop %} на компьютерах, работающих под управлением ОС Windows в сети, управляемой Active Directory, с помощью файла пакета установщика Windows (`.msi`) с групповой политикой или другой системой удаленной установки.

Пакет установщика Windows извлекает автономный установщик (`.exe`) и настраивает Windows для установки {% data variables.product.prodname_desktop %} при следующем входе пользователя на рабочую станцию. У пользователей должны быть разрешения на установку {% data variables.product.prodname_desktop %} в свой каталог пользователя.

Если пользователь запускает пакет установщика Windows для {% data variables.product.prodname_desktop %} напрямую, то для завершения установки пользователь должен выйти из рабочей станции, а затем снова войти.

{% endwindows %}

## Скачивание и установка {% data variables.product.prodname_desktop %}

{% mac %}

{% data variables.product.prodname_desktop %} можно установить в {% data variables.desktop.mac-osx-versions %}.

{% data reusables.desktop.download-desktop-page %}
2. Нажмите **Скачать версию для macOS**.
  ![Кнопка "Скачать версию для macOS"](/assets/images/help/desktop/download-for-mac.png)
3. На компьютере в папке `Downloads` дважды щелкните ZIP-файл **{% data variables.product.prodname_desktop %}** .
  ![Файл GitHubDesktop.zip](/assets/images/help/desktop/mac-zipfile.png)
4. После извлечения файла архива дважды щелкните **{% data variables.product.prodname_desktop %}** .
5. {% data variables.product.prodname_desktop %} запустится после завершения установки.

{% endmac %}

{% windows %}

{% data variables.product.prodname_desktop %} можно установить в {% data variables.desktop.windows-versions %}.

{% warning %}

**Предупреждение.** Для запуска {% data variables.product.prodname_desktop %} должна быть установлена 64-разрядная операционная система.

{% endwarning %}

{% data reusables.desktop.download-desktop-page %}
2. Нажмите **Скачать версию для Windows**.
  ![Кнопка "Скачать версию для Windows"](/assets/images/help/desktop/download-for-windows.png)
3. На компьютере в папке `Downloads` дважды щелкните файл установки **{% data variables.product.prodname_desktop %}** .
  ![Файл GitHubDesktopSetup](/assets/images/help/desktop/windows-githubdesktopsetup.png)
4. {% data variables.product.prodname_desktop %} запустится после завершения установки.

{% endwindows %}
