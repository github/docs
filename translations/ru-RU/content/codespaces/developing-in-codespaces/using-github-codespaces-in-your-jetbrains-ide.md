---
title: Использование GitHub Codespaces в интегрированной среде разработки JetBrains
shortTitle: JetBrains IDEs
intro: Шлюз JetBrains можно использовать для подключения к codespace и работы в вашей любимой интегрированной среде разработки JetBrains.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: f522bf481e932f9735560ee4a1fec21944ced2e7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160159'
---
{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## Сведения о {% data variables.product.prodname_codespaces %} в URI JetBrains

Если вы используете интегрированную среду разработки JetBrains для работы с кодом, вы можете воспользоваться преимуществами работы в codespace. Это можно сделать с помощью приложения Шлюза JetBrains.

После установки шлюза JetBrains вы можете задать JetBrains в качестве редактора по умолчанию, а затем при каждом открытии codespace из {% data variables.product.prodname_dotcom_the_website %} будет запускаться шлюз JetBrains, позволяющий выбрать интегрированную среду разработки JetBrains и подключиться к codespace.

{% note %}

**Примечание.** В шлюзе JetBrains доступны только существующие codespace. Codespaces можно создать в {% data variables.product.prodname_dotcom_the_website %} или с помощью {% data variables.product.prodname_cli %}. Дополнительные сведения см. в разделе [Создание codespace для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).

{% endnote %}

### Процесс подключения к удаленной разработке JetBrains

Базовый процесс использования codespace в интегрированной среде разработки JetBrains выглядит следующим образом.

* В приложении шлюза JetBrains выберите одно из активных или остановленных пространств кода. 
* Затем вы выбираете, какую интегрированную среду разработки JetBrains вы хотите использовать. 
* Затем выбранная интегрированная среда разработки JetBrains загружается на удаленную виртуальную машину, на которую размещается пространство кода и исходный код.
* Затем тонкое клиентское приложение JetBrains загружается на локальный компьютер и запускается.
* Клиентское приложение подключается к полной внутренней интегрированной среде разработки.
* Вы можете работать с кодом в клиентском приложении так же, как в локальной среде.

## Предварительные условия

Для работы в codespace в интегрированной среде разработки JetBrains вам потребуется:

* Действительная лицензия JetBrains
* Приложение шлюза JetBrains
* {% data variables.product.prodname_cli %} версии 2.18.0 или более поздней 
* Существующее пространство кода, на котором выполняется сервер SSH

### Лицензия JetBrains

Для подключения к codespace из шлюза JetBrains требуется лицензия по крайней мере на одно из поддерживаемых URI JetBrains.

### Шлюз JetBrains

Вы можете установить и обновить шлюз JetBrains из приложения JetBrains Toolbox.

1. Скачайте и установите [панель элементов JetBrains](https://www.jetbrains.com/toolbox-app).
1. Откройте панель элементов JetBrains.
1. Найдите **Шлюз** в списке доступных средств и нажмите кнопку **Установить**.

   ![Снимок экрана: панель элементов JetBrains](/assets/images/help/codespaces/jetbrains-toolbox.png)

### {% data variables.product.prodname_cli %}

Подключаемый модуль {% data variables.product.prodname_github_codespaces %} для шлюза JetBrains требует установки и настройки {% data variables.product.prodname_cli %} версии 2.18.0 или более поздней перед открытием codespace из шлюза JetBrains.

Используйте эту команду, чтобы проверить версию {% data variables.product.prodname_cli %}:

```shell{:copy}
gh --version
```

Дополнительные сведения см. в разделе [Сведения о GitHub CLI](/github-cli/github-cli/about-github-cli).

### Codespace, на котором выполняется сервер SSH

У вас должно быть существующее пространство кода для подключения. {% data reusables.codespaces.ways-to-create-a-codespace %} Дополнительные сведения см. в разделе [Создание codespace для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).

{% data reusables.codespaces.ssh-server-installed %}

Дополнительные сведения о файле и образе контейнера по умолчанию см. в разделе [Общие сведения о](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)`devcontainer.json` контейнерах разработки.

{% note %}

**Примечание.** Справку по подключению к codespace по протоколу SSH см. в разделе [Устранение неполадок {% data variables.product.prodname_github_codespaces %} клиентов](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains#ssh-connection-issues).

{% endnote %}

## Настройка шлюза JetBrains

При первом использовании шлюза JetBrains для {% data variables.product.prodname_github_codespaces %} необходимо установить подключаемый модуль {% data variables.product.prodname_codespaces %}. Кроме того, необходимо разрешить шлюзу JetBrains доступ к {% data variables.product.prodname_dotcom_the_website %} с помощью учетной записи {% data variables.product.prodname_dotcom %}. 

1. Откройте приложение шлюза JetBrains.
1. В разделе **Установить другие поставщики** щелкните ссылку **Установить** для {% data variables.product.prodname_github_codespaces %}.

   ![Снимок экрана: начальное представление шлюза JetBrains](/assets/images/help/codespaces/jetbrains-gateway-initial-view.png)

1. Щелкните **Подключиться к Codespace**.

   ![Снимок экрана: шлюз с кнопкой "Подключиться к Codespace"](/assets/images/help/codespaces/jetbrains-gateway-connect.png)

1. В диалоговом окне "Добро пожаловать в шлюз JetBrains" щелкните **Войти с помощью {% data variables.product.prodname_dotcom %}**.

   ![Снимок экрана: кнопка входа](/assets/images/help/codespaces/jetbrains-gateway-sign-in.png)

1. Щелкните значок рядом с одноразовым кодом, чтобы скопировать его, а затем щелкните ссылку для входа.

   ![Снимок экрана: код одноразового входа](/assets/images/help/codespaces/jetbrains-gateway-login-code.png)

1. Если вы еще не вошли в {% data variables.product.prodname_dotcom %}, отобразится страница входа. 
   * Введите свои данные и нажмите кнопку **Войти**.
   * Проверьте проверку подлинности, например введя код двухфакторной проверки подлинности.
1. На странице "Активация устройства" вставьте скопированный код и нажмите кнопку **Продолжить**.
1. Если вы принадлежите к организациям, отобразится страница "Единый вход в организации". Щелкните **Авторизовать** рядом с организациями, к которым вы хотите предоставить доступ шлюзу JetBrains, а затем нажмите кнопку **Продолжить**.
1. На странице "Авторизация {% data variables.product.prodname_github_codespaces %} для JetBrains щелкните **Авторизовать {% data variables.product.prodname_dotcom %}**.
1. Вернитесь в приложение шлюза JetBrains и откройте codespace из списка активных или остановленных кодовых пространств. См. шаг 3 следующей процедуры.

## Открытие codespace в интегрированной среде разработки JetBrains

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

   При первом подключении к codespace серверная интегрированная среда разработки будет загружена на удаленный компьютер. Это может занять несколько минут. При следующем подключении к тому же codespace этот шаг не потребуется, что ускорит процесс подключения. 

   Затем запускается серверная интегрированная среда разработки. Опять же, этот шаг не потребуется в будущем, если вы повторно подключитесь к внутренней интегрированной среде разработки, которую вы оставили запущенной. 
   
   Затем запускается клиентское приложение.

## Дополнительные материалы

- ["Разработка в codespace](/codespaces/developing-in-codespaces/developing-in-a-codespace)"
- [Использование подключаемого модуля {% data variables.product.prodname_github_codespaces %} для JetBrains](/codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains)
- [Использование {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-github-copilot-in-github-codespaces)"
- [Устранение неполадок клиентов {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains)
