---
title: 'Краткое руководство по {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Quickstart for {% data variables.product.prodname_codespaces %}'
intro: "Испытайте {% data variables.product.prodname_github_codespaces %} за 5\_минут."
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
ms.openlocfilehash: f35fa87711ff3a7c33ed252d0d1e87865af619bc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158656'
---
## Введение

В этом руководстве вы создадите codespace из репозитория шаблонов и изучите некоторые важные возможности, доступные в codespace. Вы будете работать в версии браузера {% data variables.product.prodname_vscode %}, которая изначально является редактором по умолчанию для {% data variables.product.prodname_github_codespaces %}. После работы с этим кратким руководством вы можете использовать {% data variables.product.prodname_codespaces %} в других редакторах и изменить редактор по умолчанию. Ссылки приведены в конце этого руководства.

Из этого краткого руководства вы узнаете, как создать codespace, подключиться к переадресованным порту, чтобы просмотреть запущенное приложение, опубликовать codespace в новом репозитории и персонализировать настройку с помощью расширений.

Дополнительные сведения о принципах работы {% data variables.product.prodname_github_codespaces %} см. в сопутствующем руководстве [Подробный обзор {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive).

## Создание кодового пространства

1. Перейдите к репозиторию [шаблонов github/haikus-for-codespaces](https://github.com/github/haikus-for-codespaces) .
{% data reusables.codespaces.open-template-in-codespace-step %}

## Запуск приложения

После создания codespace репозиторий шаблонов будет автоматически клонирован в него. Теперь вы сможете выполнить приложение и запустить его в браузере.

1. Когда терминал будет доступен, введите команду `npm run dev`. В этом примере используется проект Node.js, и эта команда выполняет скрипт с меткой dev в `package.json` файле, который запускает веб-приложение, определенное в примере репозитория.
   
   ![npm запускают разработку в терминале](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   Если вы используете другой тип приложения, введите соответствующую команду запуска для этого проекта.

2. Во время запуска приложения codespace распознает порт, на котором выполняется приложение, и отображает запрос, чтобы сообщить, что он был переадресован. 

   ![Всплывающее уведомление о перенаправлении портов](/assets/images/help/codespaces/quickstart-port-toast.png)

3. Нажмите **Открыть в браузере**, чтобы просмотреть запущенное приложение на новой вкладке.

## Изменение приложения и просмотр изменений

1. Вернитесь в codespace и откройте `haikus.json` файл, щелкнув его в проводнике.

2. Измените поле `text` первого haiku, чтобы персонализировать приложение с помощью собственного haiku.

3. Для просмотра изменений вернитесь на вкладку запущенного приложения в браузере и обновите ее.
   
   {% octicon "light-bulb" aria-label="The lightbulb icon" %} Если вы закрыли вкладку, откройте панель Порты и щелкните значок **Открыть в браузере** для работающего порта.

   ![Панель переадресации порта](/assets/images/help/codespaces/quickstart-forward-port.png)

## Фиксация и отправка изменений

Теперь, когда вы внесли несколько изменений, вы можете использовать встроенный терминал или исходное представление для публикации работы в новом репозитории.

{% data reusables.codespaces.source-control-display-dark %}
1. Чтобы выполнить изменения, щелкните  **+** рядом с файлом `haikus.json` или рядом с **элементом Изменения** , если вы изменили несколько файлов и хотите создать их все.

   ![Боковая панель управления исходным кодом с выделенной кнопкой подготовки](/assets/images/help/codespaces/codespaces-commit-stage.png)

2. Чтобы зафиксировать промежуточные изменения, введите сообщение фиксации с описанием внесенных изменений, а затем нажмите кнопку **Зафиксировать**.

   ![Боковая панель управления исходным кодом с сообщением о фиксации](/assets/images/help/codespaces/vscode-commit-button.png)

3. Щелкните **Опубликовать ветвь**.
   
   ![Снимок экрана: кнопка "Опубликовать ветвь" в VS Code](/assets/images/help/codespaces/vscode-publish-branch-button.png)

4. В раскрывающемся списке "Имя репозитория" введите имя нового репозитория, а затем выберите **Опубликовать в {% data variables.product.company_short %} частный репозиторий** или **Опубликовать в общедоступном репозитории {% data variables.product.company_short %}**.
   
   ![Снимок экрана: раскрывающийся список "Имя репозитория" в VS Code](/assets/images/help/codespaces/choose-new-repository.png)

   Владельцем нового репозитория будет учетная запись {% data variables.product.prodname_dotcom %}, с помощью которой вы создали codespace.
5. Во всплывающем окне, которое появится в правом нижнем углу редактора, щелкните **Открыть в {% data variables.product.company_short %}** , чтобы просмотреть новый репозиторий в {% data variables.product.prodname_dotcom_the_website %}. В новом репозитории просмотрите `haikus.json` файл и убедитесь, что изменения, внесенные в codespace, успешно отправлены в репозиторий.
   
   ![Снимок экрана: всплывающее окно "Открыть в GitHub" в VS Code](/assets/images/help/codespaces/open-on-github.png)

## Персонализация с помощью расширения

При подключении к codespace с помощью браузера или классического приложения {% data variables.product.prodname_vscode %} доступ к Visual Studio Code Marketplace можно получить непосредственно из редактора. В этом примере вы установите расширение {% data variables.product.prodname_vscode_shortname %}, которое изменяет тему, но вы можете установить любое расширение, полезное для вашего рабочего процесса.

1. На боковой панели слева нажмите значок "Расширения".
1. В строке поиска введите `fairyfloss` и нажмите кнопку **Установить**.

   ![Добавление расширения](/assets/images/help/codespaces/add-extension.png)

1. Выберите тему `fairyfloss`, выбрав ее из списка.

   ![Выбор темы fairyfloss](/assets/images/help/codespaces/fairyfloss.png)

Если вы используете codespace в браузере или в классическом приложении {% data variables.product.prodname_vscode %} и у вас включена [синхронизация параметров](https://code.visualstudio.com/docs/editor/settings-sync) , все изменения, внесенные в настройку редактора в текущем codespace, такие как изменение темы или привязок клавиатуры, автоматически синхронизируются со любыми экземплярами {% data variables.product.prodname_vscode %}, которые входят в вашу учетную запись {% data variables.product.prodname_dotcom %} и другие создаваемые вами codespace.

## Дальнейшие действия

Вы успешно создали, персонализировали и запустили свое первое приложение в codespace, но еще многое нужно изучить! Ниже приведены некоторые полезные ресурсы для выполнения дальнейших действий с {% data variables.product.prodname_github_codespaces %}.

* Подробное [руководство](/codespaces/getting-started/deep-dive). В этом кратком руководстве представлены некоторые функции {% data variables.product.prodname_github_codespaces %}. В глубоком обзоре эти области рассматриваются с технической точки зрения.
* "[Добавление конфигурации контейнера разработки в репозиторий](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)". В этих руководствах содержатся сведения о настройке репозитория для использования {% data variables.product.prodname_github_codespaces %} с определенными языками.
* "[Введение в контейнеры разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".В этом руководстве содержатся сведения о создании пользовательской конфигурации для {% data variables.product.prodname_codespaces %} для проекта.

## Дополнительные материалы

* ["Включение {% data variables.product.prodname_github_codespaces %} для вашей организации](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)"
* [Использование {% data variables.product.prodname_github_codespaces %} в {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)"
* [Использование {% data variables.product.prodname_github_codespaces %} в интегрированной среде разработки JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)
* [Использование {% data variables.product.prodname_github_codespaces %} с {% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)"
* "[Настройка редактора по умолчанию для {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)".
* [Управление затратами на {% data variables.product.prodname_github_codespaces %} в организации](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)
