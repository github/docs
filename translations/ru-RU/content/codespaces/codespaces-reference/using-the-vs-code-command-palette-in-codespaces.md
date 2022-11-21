---
title: Использование палитры команд Visual Studio Code в GitHub Codespaces
intro: 'Функцию палитры команд {% data variables.product.prodname_vscode %} можно использовать для выполнения многих команд {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
shortTitle: VS Code Command Palette
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/using-the-command-palette-in-codespaces
ms.openlocfilehash: ac3be901f6b37636b4e287c93d7a4f312c02a37e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160264'
---
## Сведения о {% data variables.product.prodname_vscode_command_palette %}

{% data variables.product.prodname_vscode_command_palette_shortname %} является одной из основных функций {% data variables.product.prodname_vscode %} и доступна для использования в {% data variables.product.prodname_github_codespaces %}. Палитра команд позволяет получить доступ ко многим командам для {% data variables.product.prodname_github_codespaces %} и {% data variables.product.prodname_vscode_shortname %}. Дополнительные сведения об использовании {% data variables.product.prodname_vscode_command_palette_shortname %} см. в разделе [Пользовательский интерфейс](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) в документации по {% data variables.product.prodname_vscode_shortname %}.

## Доступ к {% data variables.product.prodname_vscode_command_palette_shortname %}

Доступ к {% data variables.product.prodname_vscode_command_palette_shortname %} можно получить разными способами.

- <kbd>SHIFT</kbd>+<kbd>COMMAND</kbd>+<kbd>P</kbd> (Mac) / <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> (Windows/Linux).

  Обратите внимание, что эта команда является зарезервированным сочетанием клавиш в Firefox.
- <kbd>F1</kbd>
- В меню приложения выберите пункт **Вид > Палитра команд...** .

  ![Меню приложения](/assets/images/help/codespaces/codespaces-view-menu.png)

## Команды для {% data variables.product.prodname_codespaces %}

Чтобы просмотреть все команды, связанные с {% data variables.product.prodname_github_codespaces %}, [откройте{% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette), а затем начните вводить "Codespaces".

![Список всех команд, связанных с {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-command-palette.png)

### Приостановка или остановка codespace

Если вы добавите новый секрет или измените тип компьютера, вам придется остановить и перезапустить пространство кода, чтобы применить изменения. 

Чтобы приостановить или остановить контейнер codespace, [откройте {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) и начните вводить "остановить". Выберите **Codespaces: остановить текущее codespace**.

![Команда для остановки codespace](/assets/images/help/codespaces/codespaces-stop.png)

### Добавление предопределенной конфигурации контейнера разработки

Чтобы добавить предопределенную конфигурацию контейнера разработки, [получите доступ к {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette), а затем начните вводить "контейнер разработки". Выберите **Codespaces: добавление файлов конфигурации для контейнера разработки...** .

![Команда для добавления контейнера разработки](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### Перестроение codespace

Если вы добавите контейнер разработки или измените любой из файлов конфигурации (`devcontainer.json` и `Dockerfile`), вам придется перестроить codespace, чтобы применить изменения. 

Чтобы перестроить контейнер, [откройте {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) и начните вводить "перестроить". Выберите **Codespaces: перестроить контейнер**.

![Команда для перестроения codespace](/assets/images/help/codespaces/codespaces-rebuild.png)

### Журналы Codespaces

Вы можете использовать {% data variables.product.prodname_vscode_command_palette_shortname %} для доступа к журналам создания codespace или экспорта всех журналов. 

Чтобы получить журналы для {% data variables.product.prodname_github_codespaces %}, [перейдите к {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette), а затем начните вводить "log". Выберите **Codespaces: Export Logs (Кодовые пространства: экспорт журналов** ), чтобы экспортировать все журналы, связанные с {% data variables.product.prodname_github_codespaces %} или **Codespaces: View Creation Logs (Кодовые пространства: просмотр журналов создания** ), чтобы просмотреть журналы, связанные с установкой.

![Команда для доступа к журналам](/assets/images/help/codespaces/codespaces-logs.png)

## Дополнительные материалы

- [Использование {% data variables.product.prodname_github_codespaces %} в {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)"
