---
title: Журналы Codespaces
intro: Обзор расположений ведения журнала, используемых {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Logging
shortTitle: Codespaces logs
ms.openlocfilehash: 3e02023cd1ba05960e9f9b345265c281e714e6a5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145092470"
---
Сведения о {% data variables.product.prodname_codespaces %} выводятся в три разных журнала:

- журналы codespace;
- журналы создания;
- журналы расширений (классическая версия {% data variables.product.prodname_vscode %}) или журналы консоли браузера ({% data variables.product.prodname_vscode %} в Интернете).

## <a name="codespace-logs"></a>Журналы codespace

Эти журналы содержат подробные сведения о codespace, контейнере, сеансе и среде {% data variables.product.prodname_vscode %}. Они полезны для диагностики проблем с подключением и другого непредвиденного поведения. Например, codespace зависает, но при выборе команды "Перезагрузить Windows" возобновляет работу на несколько минут, или вы без видимой причины отключаетесь от codespace, но можете сразу же подключиться снова.

{% webui %}

1. Если вы используете {% data variables.product.prodname_codespaces %} в браузере, убедитесь в том, что вы подключены к codespace, которое требуется отладить.
1. Откройте палитру команд {% data variables.product.prodname_vscode %} (`Shift + Command + P` [Mac] или `Ctrl + Shift + P` [Windows]) и введите **Журналы экспорта**. Выберите в списке элемент **Codespaces: экспорт журналов**, чтобы скачать журналы.
1. Решите, куда следует сохранить ZIP-архив с журналами, а затем нажмите кнопку **Сохранить** (в классической версии) или кнопку **ОК** (в веб-версии).
1. Если вы используете {% data variables.product.prodname_codespaces %} в браузере, щелкните правой кнопкой мыши ZIP-архив с журналами в представлении проводника и выберите пункт **Скачать...** , чтобы скачать журналы на локальный компьютер.

{% endwebui %}

{% vscode %}

1. Откройте палитру команд {% data variables.product.prodname_vscode %} (`Shift + Command + P` [Mac] или `Ctrl + Shift + P` [Windows]) и введите **Журналы экспорта**. Выберите в списке элемент **Codespaces: экспорт журналов**, чтобы скачать журналы.
1. Решите, куда следует сохранить ZIP-архив с журналами, а затем нажмите кнопку **Сохранить** (в классической версии) или кнопку **ОК** (в веб-версии).

{% endvscode %}

{% cli %}

В настоящее время для доступа к этим журналам нельзя использовать {% data variables.product.prodname_cli %}. Чтобы получить доступ к ним, откройте codespace в {% data variables.product.prodname_vscode %} или в браузере.

{% endcli %}

## <a name="creation-logs"></a>Журналы создания

Эти журналы содержат сведения о контейнере, контейнере разработки и их конфигурации. Они полезны для отладки проблем с конфигурацией и настройкой.


{% webui %}

1. Подключитесь к пространству codespace, которое требуется отладить.
2. Откройте {% data variables.product.prodname_vscode_command_palette %} (`Shift + Command + P` [Mac] или `Ctrl + Shift + P` [Windows]) и введите **Журналы создания**. Выберите в списке элемент **Codespaces: просмотр журнала создания**, чтобы открыть файл `creation.log`.

Если вы хотите предоставить доступ к журналу службе поддержке, можно скопировать текст из журнала создания в текстовый редактор и сохранить файл локально.

{% endwebui %}

{% vscode %}

Откройте палитру команд (`Shift + Command + P` [Mac] или `Ctrl + Shift + P` [Windows]) и введите **Журналы создания**. Выберите в списке элемент **Codespaces: просмотр журнала создания**, чтобы открыть файл `creation.log`.

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

## <a name="extension-logs"></a>Журналы расширений

Эти журналы доступны только пользователям классической версии {% data variables.product.prodname_vscode %}. Они полезны в том случае, если кажется, что в расширении {% data variables.product.prodname_codespaces %} или редакторе данных {% data variables.product.prodname_vscode %} возникают проблемы, которые препятствуют созданию или подключению.

1. В {% data variables.product.prodname_vscode %} откройте палитру команд.
1. Введите **Журналы** и выберите в списке элемент **Разработчик: открытие папки журналов расширений**, чтобы открыть папку журналов расширений в проводнике системы.

В этом представлении можно получить доступ к журналам, созданным различными расширениями в {% data variables.product.prodname_vscode %}. Вы увидите журналы GitHub Codespaces, GitHub Authentication и GIT, а также других включенных расширений.

## <a name="browser-console-logs"></a>Журналы консоли браузера

Эти журналы полезны только в том случае, если вы хотите отладить проблемы, связанные с использованием {% data variables.product.prodname_codespaces %} в браузере. Они полезны для отладки проблем, возникающих при создании и подключении к {% data variables.product.prodname_codespaces %}.

1. В окне браузера с пространством codespace, которое требуется отладить, откройте окно средств разработчика.
1. Перейдите на вкладку Console (Консоль), и на панели слева щелкните **errors** (ошибки), чтобы отобразить только ошибки.
1. В области журнала справа щелкните правой кнопкой мыши и выберите пункт **Сохранить как**, чтобы сохранить копию ошибок на локальном компьютере.
  ![Сохранение ошибок](/assets/images/help/codespaces/browser-console-log-save.png)
