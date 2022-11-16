---
title: Разработка в codespace
intro: 'Вы можете работать в codespace с помощью браузера, {% data variables.product.prodname_vscode %}, интегрированной среды разработки JetBrains или командной оболочки.'
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Develop in a codespace
ms.openlocfilehash: e941373ade8c2f8365e7b654733b7ee029a6a7dd
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159072'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Сведения о разработке с помощью {% data variables.product.prodname_github_codespaces %}

Вы можете разрабатывать код в codespace с помощью выбранного средства: 

* Командная оболочка через SSH-подключение, инициированное с помощью {% data variables.product.prodname_cli %}.
* Один из ИНДЕ JetBrains через шлюз JetBrains.
* Классическое приложение {% data variables.product.prodname_vscode %}.
* Браузерная версия {% data variables.product.prodname_vscode %}.

{% webui %}

Вкладки в этой статье позволяют переключаться между сведениями для каждого из этих способов работы. В настоящее время вы находитесь на вкладке версии веб-браузера {% data variables.product.prodname_vscode %}.

## Работа в codespace в браузере

Использование {% data variables.product.prodname_codespaces %} в браузере обеспечивает полнофункциональный интерфейс разработки. Вы можете редактировать код, выполнять отладку, использовать команды Git и запускать приложение.

![Снимок экрана с заметками: codespace в браузере](/assets/images/help/codespaces/codespace-overview-annotated.png)

{% data reusables.codespaces.vscode-interface-annotation %} {% data reusables.codespaces.use-chrome %} Дополнительные сведения см. в разделе [Устранение неполадок клиентов {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients).
{% data reusables.codespaces.developing-in-vscode %} {% data reusables.codespaces.navigating-to-a-codespace %}

{% endwebui %}

{% vscode %}

Вкладки в этой статье позволяют переключаться между сведениями для каждого из этих способов работы. В настоящее время вы находитесь на вкладке {% data variables.product.prodname_vscode %}.

## Работа в codespace в {% data variables.product.prodname_vscode_shortname %}

{% data variables.product.prodname_github_codespaces %} обеспечивает полную разработку {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.use-visual-studio-features %}

![Снимок экрана с заметками: пространство кода в VS Code](/assets/images/help/codespaces/codespace-annotated-vscode.png)

{% data reusables.codespaces.vscode-interface-annotation %}

Дополнительные сведения об использовании {% data variables.product.prodname_vscode_shortname %} см. в [руководстве по пользовательскому интерфейсу](https://code.visualstudio.com/docs/getstarted/userinterface) в документации по {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.connect-to-codespace-from-vscode %} 

Сведения об устранении неполадок см. в разделе [Устранение неполадок клиентов Codespaces](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients).
{% data reusables.codespaces.developing-in-vscode %} {% data reusables.codespaces.navigating-to-a-codespace %}

{% endvscode %}

{% jetbrains %}

Вкладки в этой статье позволяют переключаться между сведениями для каждого из этих способов работы. В настоящее время вы находитесь на вкладке для ИНДЕ JetBrains.

## Работа в codespace в интегрированной среде разработки JetBrains

Чтобы использовать {% data variables.product.prodname_github_codespaces %} с интегрированной среды разработки JetBrains, необходимо уже установить шлюз JetBrains. Сведения об установке шлюза JetBrains см. [на веб-сайте JetBrains](https://www.jetbrains.com/remote-development/gateway/).

Вы можете работать в codespace, используя интегрированную среду разработки JetBrains. После создания codespace можно использовать приложение шлюза JetBrains, чтобы открыть codespace в предпочтительной интегрированной среде разработки.

Вы можете изменять код, отлаживать и использовать команды Git при разработке в codespace с помощью интегрированной среды разработки JetBrains. Дополнительные сведения о различных ИНДЕ JetBrains см. в [документации по JetBrains](https://www.jetbrains.com/help/).

### Пользовательский интерфейс IntelliJ IDEA

В документации по {% data variables.product.prodname_github_codespaces %} мы используем IntelliJ IDEA в качестве репрезентативной интегрированной среды разработки JetBrains. Разные среды ИНДЕ JetBrains могут иметь разные макеты.

![Снимок экрана с заметками: codespace в JetBrains IntelliJ IDEA](/assets/images/help/codespaces/jetbrains-gui-with-callouts.png)

1. **Панель навигации** — отображает путь к выбранному в данный момент файлу или каталогу. Используйте кнопки справа от панели навигации для выполнения различных действий, включая сборку, запуск или отладку проекта, а также выполнение команд Git для фиксации и отправки изменений.
2. **Окно инструментов "Проект** " — отображает структуру проекта и позволяет открывать файлы в редакторе.
3. **Окно инструментов {% data variables.product.prodname_github_codespaces %}** отображается при щелчке подключаемого модуля {% data variables.product.prodname_github_codespaces %} на панели слева от окна инструментов. В нем отображаются сведения о пространстве кода, включая отображаемое имя и тип компьютера. Кнопки в верхней части этого окна инструментов позволяют:
   * Остановка codespace и отключение
   * Отображение веб-страницы "Ваши codespaces"
   * Просмотр журналов создания codespace
   * Перестроение контейнера разработки
4. **Редактор** — здесь можно редактировать файлы. Вы можете щелкнуть правой кнопкой мыши вкладку файла, чтобы получить доступ к таким параметрам, как перемещение вкладки в новое окно.
5. **Терминал** . Для этого щелкните **Терминал** на панели окна инструментов в нижней части главного окна (непосредственно над строкой состояния). Встроенный терминал позволяет выполнять задачи командной строки без необходимости переключения на выделенное приложение терминала.
6. **Строка состояния** — наведите указатель мыши на значок в левой части строки состояния, чтобы просмотреть список инструментов. Щелкните значок, чтобы скрыть или отобразить панели окна инструментов. В правой части строки состояния отображаются сведения о проекте, включая текущую ветвь Git.

Дополнительные сведения о пользовательском интерфейсе IntelliJ IDEA см. в [документации по JetBrains для IntelliJ IDEA](https://www.jetbrains.com/help/idea/guided-tour-around-the-user-interface.html).

### Настройка codespace для репозитория

Вы можете настроить codespace, созданные для репозитория, создав или обновив конфигурацию контейнера разработки для репозитория. Это можно сделать из codespace. После изменения конфигурации контейнера разработки можно применить изменения к текущему пространству кода, перестроив контейнер Docker для codespace. Дополнительные сведения см. в статье [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

### Персонализация codespace

Репозиторий [файлов точек](https://dotfiles.github.io/tutorials/) можно использовать для персонализации аспектов среды codespace для любого создаваемого codespace. Дополнительные сведения см. в разделе [Персонализация {% data variables.product.prodname_github_codespaces %} для вашей учетной записи](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles).

### Фиксация изменений

После внесения изменений в codespace( новый код или изменения конфигурации) вы захотите зафиксировать и отправить изменения. Отправка изменений в репозиторий гарантирует, что любой другой пользователь, создающий codespace из этого репозитория, имеет такую же конфигурацию. Это также означает, что любая настройка, которую вы делаете, чтобы изменить конфигурацию codespace, созданных для репозитория, будет доступна всем, кто использует репозиторий.

Дополнительные сведения см. в статье [Использование системы управления версиями в кодовом пространстве](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#committing-your-changes).

## Дополнительные материалы

* [Использование {% data variables.product.prodname_github_codespaces %} в интегрированной среде разработки JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)
* [Использование подключаемого модуля {% data variables.product.prodname_github_codespaces %} для JetBrains](/codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains)
* [Устранение неполадок клиентов {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)

{% endjetbrains %}

{% cli %}

Вкладки в этой статье позволяют переключаться между сведениями для каждого из этих способов работы. В настоящее время вы находитесь на вкладке {% data variables.product.prodname_cli %}.

## Работа в codespace в командной оболочке

{% data reusables.cli.cli-learn-more %}

Вы можете использовать {% data variables.product.prodname_cli %}, чтобы создать новое codespace или запустить существующее codespace, а затем выполнить подключение по протоколу SSH. После подключения можно работать с командной строкой с помощью предпочитаемых программ командной строки.

После установки {% data variables.product.prodname_cli %} и проверки подлинности с помощью учетной записи {% data variables.product.prodname_dotcom %} можно использовать команду `gh codespace [<SUBCOMMAND>...] --help` для просмотра справочных сведений. Кроме того, можно просмотреть те же справочные сведения по адресу [https://cli.github.com/manual/gh_codespace](https://cli.github.com/manual/gh_codespace).

Дополнительные сведения см. в разделе [Использование {% data variables.product.prodname_github_codespaces %} с GitHub CLI](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli).

{% endcli %}
