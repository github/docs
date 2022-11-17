---
title: Использование GitHub Copilot в GitHub Codespaces
intro: 'Вы можете использовать {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_github_codespaces %}, добавив расширение .'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Copilot
  - Visual Studio Code
shortTitle: Copilot in Codespaces
redirect_from:
  - /codespaces/codespaces-reference/using-copilot-in-codespaces
  - /codespaces/codespaces-reference/using-github-copilot-in-codespaces
ms.openlocfilehash: 6615df6930fa8f27dd8f50c4588d8182b8602549
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158728'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## Использование {% data variables.product.prodname_copilot %} в веб-клиенте {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.copilot-in-vscode %}

{% endwebui %}

{% vscode %}

## Использование {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.copilot-in-vscode %}

{% endvscode %}

{% jetbrains %}

## Установка {% data variables.product.prodname_copilot %} в интегрированной среде разработки JetBrains

[{% data variables.product.prodname_copilot %}](https://copilot.github.com/), помощник при написании кода для ИИ, может использоваться в любом пространстве кода. Дополнительные сведения см. в разделе [Сведения о GitHub Copilot](/copilot/overview-of-github-copilot/about-github-copilot).

Чтобы использовать {% data variables.product.prodname_copilot %} в codespace в интегрированной среде разработки JetBrains, установите [подключаемый модуль {% data variables.product.prodname_copilot %}](https://plugins.jetbrains.com/plugin/17718-github-copilot) из codespace.

{% note %}

**Примечание.** Подключаемый модуль {% data variables.product.prodname_copilot %} необходимо устанавливать каждый раз при создании пространства кода.

{% endnote %}

1. В клиентском приложении JetBrains откройте диалоговое окно Параметры (Windows/Linux) или Параметры (Mac):

   - **Windows/Linux**: щелкните **Файл** , а затем **Параметры** (или нажмите <kbd>клавиши CTRL</kbd>+<kbd>ALT</kbd>+<kbd>S</kbd>).
   - **Mac**: щелкните **Клиент JetBrains** в строке меню MacOS, а затем выберите **Параметры** (или нажмите <kbd>команду</kbd>+<kbd>).</kbd>

1. В меню слева диалогового окна Параметры и настройки выберите **Подключаемые модули на узле**. Затем перейдите на вкладку **Marketplace** .

   ![Снимок экрана: вкладка Marketplace для "Подключаемые модули на узле"](/assets/images/help/codespaces/jetbrains-preferences-plugins.png)

1. В поле поиска введите copilot и нажмите кнопку **Установить** для подключаемого модуля {% data variables.product.prodname_copilot %}.

   ![Снимок экрана: подключаемый модуль {% data variables.product.prodname_copilot %}](/assets/images/help/codespaces/jetbrains-copilot-plugin.png)

1. Нажмите кнопку **Принять** в диалоговом окне "Примечание о конфиденциальности сторонних подключаемых модулей".
1. Щелкните **Restart IDE** (Перезагрузить IDE).

   ![Снимок экрана: подключаемый модуль {% data variables.product.prodname_copilot %}](/assets/images/help/codespaces/jetbrains-copilot-restart.png)
 
1. При появлении запроса нажмите кнопку **Перезапустить** , чтобы подтвердить, что вы хотите перезапустить интегрированную среду разработки серверной части, которая работает удаленно. При этом клиентское приложение JetBrains закроется.
1. Снова откройте codespace из приложения шлюза JetBrains. Дополнительные сведения см. в разделе [Использование {% data variables.product.prodname_github_codespaces %} в интегрированной среде разработки JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide#opening-a-codespace-in-your-jetbrains-ide).
1. После перезапуска интегрированной среды разработки JetBrains щелкните меню **Сервис**. Щелкните **{% data variables.product.prodname_copilot %}** , а затем нажмите **Вход в {% data variables.product.prodname_dotcom %}** . 

    ![Снимок экрана: меню "Инструменты JetBrains"](/assets/images/help/codespaces/jetbrains-tools-menu.png)

1. В диалоговом окне "Вход в {% data variables.product.prodname_dotcom %}" нажмите кнопку **Копировать и открыть**, чтобы скопировать код устройства и открыть окно активации устройства.

    ![Снимок экрана: копирование и открытие кода устройства](/assets/images/help/copilot/device-code-copy-and-open.png)

1. Окно активации устройства откроется в браузере. Вставьте код устройства и нажмите кнопку **Продолжить**.

   - Чтобы вставить код в Windows или Linux, нажмите <kbd>CTRL</kbd>+<kbd>V</kbd>.
   - Чтобы вставить код в macOS, нажмите <kbd>COMMAND</kbd>+<kbd>V</kbd>.
1. {% data variables.product.prodname_dotcom %} запросит необходимые разрешения для {% data variables.product.prodname_copilot %}. Чтобы одобрить эти разрешения, щелкните **Авторизовать подключаемый модуль {% data variables.product.prodname_copilot %}** .
1. После утверждения разрешений интегрированная среда разработки JetBrains отобразит подтверждение. Чтобы начать использование {% data variables.product.prodname_copilot %}, щелкните **OK**.

   ![Снимок экрана: подтверждение разрешений интегрированной среды разработки JetBrains](/assets/images/help/copilot/jetbrains-ide-confirmation.png)

## Дополнительные материалы

- Начало [работы с GitHub Copilot в интегрированной среде разработки JetBrains](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide)

{% endjetbrains %}
