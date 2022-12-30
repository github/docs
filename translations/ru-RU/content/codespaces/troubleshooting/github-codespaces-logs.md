---
title: Журналы GitHub Codespaces
intro: 'Общие сведения о журналах, используемых {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Logging
shortTitle: Codespaces logs
redirect_from:
  - /codespaces/troubleshooting/codespaces-logs
ms.openlocfilehash: f5cd482888f58f85a051bb9b6e2c5d7c026ed9a9
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160100'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

Сведения о {% data variables.product.prodname_github_codespaces %} выводиться в различные журналы:

{% webui %}

- журналы codespace;
- журналы создания;
- Журналы консоли браузера (для веб-клиента {% data variables.product.prodname_vscode_shortname %})

Журналы расширений доступны, если вы используете {% data variables.product.prodname_github_codespaces %} в {% data variables.product.prodname_vscode_shortname %}. Перейдите на вкладку "{% data variables.product.prodname_vscode %}" выше, чтобы получить дополнительные сведения.

{% endwebui %}

{% vscode %}

- журналы codespace;
- журналы создания;
- Журналы расширений (для классического приложения {% data variables.product.prodname_vscode_shortname %}) 

Журналы браузера доступны, если в браузере используется {% data variables.product.prodname_github_codespaces %}. Щелкните вкладку "Веб-браузер" выше для получения дополнительных сведений.

{% endvscode %}

{% cli %}

- журналы codespace;
- журналы создания;

Другие журналы доступны, если вы используете {% data variables.product.prodname_github_codespaces %} в {% data variables.product.prodname_vscode_shortname %} или в веб-браузере. Перейдите на вкладки выше для получения дополнительных сведений.

{% endcli %}

{% jetbrains %}

- журналы создания;

Другие журналы доступны, если вы используете {% data variables.product.prodname_github_codespaces %} в {% data variables.product.prodname_vscode_shortname %} или в веб-браузере. Перейдите на вкладки выше для получения дополнительных сведений.

{% endjetbrains %}

{% webui %}

{% data reusables.codespaces.codespace-logs %}

1. Если вы используете {% data variables.product.prodname_github_codespaces %} в браузере, убедитесь, что вы подключены к пространству кода, которое требуется отладить.
1. Откройте {% data variables.product.prodname_vscode_command_palette_shortname %}, нажав сочетание клавиш <kbd>SHIFT</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) или <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> (Windows/Linux), а затем введите **Экспортировать журналы**. Выберите в списке элемент **Codespaces: экспорт журналов**, чтобы скачать журналы.
1. Решите, куда следует сохранить ZIP-архив с журналами, а затем нажмите кнопку **Сохранить** (в классической версии) или кнопку **ОК** (в веб-версии).
1. Если вы используете {% data variables.product.prodname_github_codespaces %} в браузере, щелкните правой кнопкой мыши ZIP-архив журналов в представлении проводника и выберите **Скачать...** чтобы скачать журналы на локальный компьютер.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.codespace-logs %}

1. Откройте {% data variables.product.prodname_vscode_command_palette_shortname %}, нажав сочетание клавиш <kbd>SHIFT</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) или <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> (Windows/Linux), а затем введите **Экспортировать журналы**. Выберите в списке элемент **Codespaces: экспорт журналов**, чтобы скачать журналы.
1. Решите, куда следует сохранить ZIP-архив с журналами, а затем нажмите кнопку **Сохранить** (в классической версии) или кнопку **ОК** (в веб-версии).

{% endvscode %}

{% cli %}

{% data reusables.codespaces.codespace-logs %}

В настоящее время для доступа к этим журналам нельзя использовать {% data variables.product.prodname_cli %}. Чтобы получить к ним доступ, откройте codespace в {% data variables.product.prodname_vscode_shortname %} или в браузере.

{% endcli %}

## Журналы создания

Эти журналы содержат сведения о контейнере, контейнере разработки и их конфигурации. Они полезны для отладки проблем с конфигурацией и настройкой.

{% webui %}

1. Подключитесь к пространству codespace, которое требуется отладить.
2. Откройте {% data variables.product.prodname_vscode_command_palette_shortname %}, нажав сочетание клавиш <kbd>SHIFT</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) или <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> (Windows/Linux), а затем введите **Создать журналы**. Выберите в списке элемент **Codespaces: просмотр журнала создания**, чтобы открыть файл `creation.log`.

Если вы хотите предоставить доступ к журналу службе поддержке, можно скопировать текст из журнала создания в текстовый редактор и сохранить файл локально.

{% endwebui %}

{% vscode %}

Откройте {% data variables.product.prodname_vscode_command_palette_shortname %}, нажав сочетание клавиш <kbd>SHIFT</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) или <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> (Windows/Linux), а затем введите **Создать журналы**. Выберите в списке элемент **Codespaces: просмотр журнала создания**, чтобы открыть файл `creation.log`.

Если вы хотите предоставить доступ к журналу службе поддержке, можно скопировать текст из журнала создания в текстовый редактор и сохранить файл локально.

{% endvscode %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Чтобы просмотреть журнал создания, используйте подкоманду `gh codespace logs`. Выполнив команду, выберите требуемый вариант из представленного списка кодовых пространств.

```shell
gh codespace logs
```

Дополнительные сведения об этой команде см. в [ руководстве по {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_logs).

Если вы хотите предоставить доступ к журналу службе поддержки, можно сохранить выходные данные в файл:

```shell
gh codespace logs -c <CODESPACE-NAME> > /path/to/logs.txt
```

{% endcli %}

{% vscode %}

## Журналы расширений

Эти журналы доступны только для пользователей {% data variables.product.prodname_vscode_shortname %}. Они полезны, если кажется, что расширение {% data variables.product.prodname_github_codespaces %} или редактор {% data variables.product.prodname_vscode_shortname %} имеют проблемы, препятствующие созданию или подключению.

1. В {% data variables.product.prodname_vscode_shortname %} откройте палитру команд.
1. Введите **Журналы** и выберите в списке элемент **Разработчик: открытие папки журналов расширений**, чтобы открыть папку журналов расширений в проводнике системы.

В этом представлении можно получить доступ к журналам, созданным различными расширениями, используемыми в {% data variables.product.prodname_vscode_shortname %}. Вы увидите журналы проверки подлинности {% data variables.product.prodname_github_codespaces %}, {% data variables.product.prodname_dotcom %} и Git, а также любые другие включенные расширения.

{% endvscode %}

{% webui %}

## Журналы консоли браузера

Эти журналы полезны только в том случае, если вы хотите отладить проблемы с использованием {% data variables.product.prodname_github_codespaces %} в браузере. Они полезны для отладки проблем при создании и подключении к {% data variables.product.prodname_github_codespaces %}.

1. В окне браузера с пространством codespace, которое требуется отладить, откройте окно средств разработчика.
1. Откройте вкладку "Консоль" и щелкните **ошибки** на левой боковой панели, чтобы отобразить только ошибки.
1. В области журнала справа щелкните правой кнопкой мыши и выберите пункт **Сохранить как**, чтобы сохранить копию ошибок на локальном компьютере.
  ![Сохранение ошибок](/assets/images/help/codespaces/browser-console-log-save.png)

{% endwebui %}

{% jetbrains %}

{% data reusables.codespaces.jetbrains-open-codespace-plugin %}
1. В окне инструментов {% data variables.product.prodname_github_codespaces %} щелкните значок журнала.

   ![Снимок экрана: кнопка "Журнал"](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

## Журналы JetBrains

Вы можете скачать журналы для удаленной интегрированной среды разработки JetBrains и локального клиентского приложения, перейдя в меню **Справка** в клиентском приложении JetBrains и выбрав **Сбор журналов узлов и клиентов**.

{% endjetbrains %}

## Дополнительные материалы

- [Просмотр журналов аудита организации для {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/reviewing-your-organizations-audit-logs-for-github-codespaces)
- [Просмотр журналов безопасности для {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/reviewing-your-security-logs-for-github-codespaces)
