---
title: Устранение неполадок клиентов GitHub Codespaces
shortTitle: Codespaces clients
intro: 'В этой статье содержатся сведения об устранении неполадок, которые могут возникнуть с клиентом, используемым для {% data variables.product.prodname_github_codespaces %}.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-codespaces-clients
ms.openlocfilehash: 35bd9dd859612307c1f9e49ea8ed9771e4f5efcd
ms.sourcegitcommit: bf4e3590ab71b0a1bfa8d74b00183f63193acbbf
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186174'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## Устранение неполадок веб-клиента {% data variables.product.prodname_vscode %}

При возникновении проблем с использованием {% data variables.product.prodname_github_codespaces %} в браузере, который не Chromium, попробуйте переключиться на браузер на основе Chromium, например Google Chrome или Майкрософт Edge. Кроме того, можно проверить наличие известных проблем с браузером в [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen) репозитории, выполнив поиск проблем с именем браузера, например [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) или [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

При возникновении проблем с использованием {% data variables.product.prodname_github_codespaces %} в браузере на основе Chromium вы можете проверить, возникла ли другая известная проблема с {% data variables.product.prodname_vscode_shortname %} в репозитории[`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen).

### Отличия от локальной работы в {% data variables.product.prodname_vscode_shortname %}

При открытии codespace в браузере с помощью веб-клиента {% data variables.product.prodname_vscode_shortname %} вы заметите некоторые отличия от работы в локальной рабочей области в классическом приложении {% data variables.product.prodname_vscode_shortname %}. Например, некоторое настраиваемое сочетание клавиш будет отличаться или отсутствовать, а некоторые расширения могут вести себя по-разному. Сводку см. в разделе "[Известные ограничения и адаптации](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)" в документации по {% data variables.product.prodname_vscode_shortname %}.

Вы можете проверить наличие известных проблем и записать новые проблемы с помощью интерфейса {% data variables.product.prodname_vscode_shortname %} в репозитории [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) .

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Участники программы предварительной оценки — это наиболее частый выпуск {% data variables.product.prodname_vscode_shortname %}. Он содержит все последние функции и исправления ошибок, но иногда может содержать новые проблемы, которые приводят к неисправной сборке.

Если вы используете сборку программы предварительной оценки и заметили реакцию на проблемы в работе, рекомендуется переключиться на {% data variables.product.prodname_vscode %} (стабильная версия) и повторить попытку.

Щелкните {% octicon "gear" aria-label="The manage icon" %} в левом нижнем углу редактора и выберите **Переключиться на стабильную версию...**. Если веб-клиент {% data variables.product.prodname_vscode_shortname %} не загружается или значок {% octicon "gear" aria-label="The manage icon" %} недоступен, можно принудительно переключиться на {% data variables.product.prodname_vscode %} Stable, добавив `?vscodeChannel=stable` к URL-адресу codespace и загрузив codespace по нему.

Если проблема не устранена в {% data variables.product.prodname_vscode %} Stable, проверьте наличие известных проблем и при необходимости зайдите в журнал новой проблемы в интерфейсе {% data variables.product.prodname_vscode_shortname %} в репозитории [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) .

{% endwebui %}

{% vscode %}

## Устранение неполадок с {% data variables.product.prodname_vscode_shortname %}

При открытии codespace в классическом приложении {% data variables.product.prodname_vscode_shortname %} вы можете заметить несколько различий по сравнению с работой в локальной рабочей области, но взаимодействие должно быть аналогичным.

При возникновении проблем можно проверить наличие известных проблем и записать новые проблемы в интерфейсе {% data variables.product.prodname_vscode_shortname %} в репозитории [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) .

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Участники программы предварительной оценки — это наиболее частый выпуск {% data variables.product.prodname_vscode_shortname %}. Он содержит все последние функции и исправления ошибок, но иногда может содержать новые проблемы, которые приводят к неисправной сборке.

Если вы используете сборку программы предварительной оценки и заметили реакцию на проблемы в работе, рекомендуется переключиться на {% data variables.product.prodname_vscode %} (стабильная версия) и повторить попытку.

Чтобы переключиться на {% data variables.product.prodname_vscode %} Stable, закройте приложение {% data variables.product.prodname_vscode %}, откройте приложение {% data variables.product.prodname_vscode %} Stable и снова откройте codespace.

Если проблема не устранена в {% data variables.product.prodname_vscode %} Stable, проверьте наличие известных проблем и при необходимости зайдите в журнал новой проблемы в интерфейсе {% data variables.product.prodname_vscode_shortname %} в репозитории [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) .

{% endvscode %}

{% jetbrains %}

## Устранение неполадок с ИНДЕ JetBrains

### Проблемы с производительностью

Тип компьютера {% data variables.product.prodname_github_codespaces %} с по крайней мере 4 ядрами рекомендуется использовать для выполнения любого из ИНДЕ JetBrains. Дополнительные сведения см. в разделе [Изменение типа компьютера для кодового пространства](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace).

Если вы используете компьютер с 4 или более ядрами и производительность JetBrains кажется немного вялой, может потребоваться увеличить максимальный размер кучи Java. 

Рекомендуется установить максимальный размер кучи в диапазоне от 2862 МиБ (3 ГБ) до 60 % ОЗУ удаленного узла.

Ниже приведены некоторые рекомендации в качестве начальной отправной точки, которые можно настроить в зависимости от размера базы кода и памяти, необходимой для запуска приложения. Например, при наличии большой или сложной базы кода может потребоваться дополнительно увеличить размер кучи. Если у вас более крупное приложение, можно задать меньший размер кучи, чтобы предоставить приложению больший объем памяти.

| Тип компьютера   | Максимальный размер кучи |
| -------------- | ----------------- |
| 4 ядра         | 3 ГБ              |
| 8 ядер         | 4 ГБ              |
| 16 или 32 ядра | 8 ГБ              |

1. В левой части панели навигации в верхней части окна приложения щелкните имя codespace.

   ![Снимок экрана: кнопка "Ресурсы" в JetBrains](/assets/images/help/codespaces/jetbrains-resources-button.png)

1. На вкладке Производительность обратите внимание на сведения о загрузке ЦП и памяти. Они указывают, перегружен ли компьютер.
 
   ![Снимок экрана: кнопка Localhost в JetBrains](/assets/images/help/codespaces/jetbrains-performance.png)

1. Перейдите на вкладку Параметры и измените размер кучи, увеличив его до не более 60 % доступной памяти для codespace.

   ![Снимок экрана: параметр максимального размера кучи](/assets/images/help/codespaces/jetbrains-heap-setting.png)

1. Нажмите кнопку **Сохранить и перезапустить**.

### Невозможно открыть клиент в MacOS Ventura 

В MacOS Ventura при первой попытке подключиться к codespace из шлюза JetBrains может появиться сообщение о том, что клиентское приложение JetBrains "повреждено и не может быть открыто".

<img src="/assets/images/help/codespaces/jetbrains-ventura-error1.png" alt="Screenshot of the 'cannot be opened' error message" style="width:230px;"/>

Если это происходит, выполните указанные ниже действия.

1. Нажмите **кнопку Отмена** , чтобы закрыть это сообщение.
1. Щелкните значок Apple в левом верхнем углу экрана и щелкните **Параметры системы**. 
1. Щелкните **Конфиденциальность & Безопасность** и прокрутите вниз до раздела "Безопасность".

   ![Снимок экрана: диалоговое окно "Безопасность & конфиденциальности"](/assets/images/help/codespaces/jetbrains-privacy-and-security.png)

   Вы увидите сообщение о том, что клиент JetBrains заблокирован. 

1. Нажмите кнопку **Открыть в любом случае** , чтобы добавить клиент JetBrains в распознанные приложения. 
   Сообщение отображается снова, но на этот раз с кнопкой **Открыть** .

   <img src="/assets/images/help/codespaces/jetbrains-ventura-error2.png" alt="Screenshot of the error message with an 'Open' button" style="width:230px;"/>

1. Нажмите кнопку **Отмена** еще раз.
1. Назад к приложению шлюза JetBrains и снова подключитесь к требуемому пространству кода.
   Клиент JetBrains откроется успешно. Авторизовать клиентское приложение для запуска на компьютере Mac вы не увидите сообщение при подключении к codespace в будущем.

### Проблемы с SSH-подключением

Для подключения через сервер SSH, работающий в codespace, необходимо иметь ключ SSH в каталоге `~/.ssh` (MacOS и Linux) или `%HOMEPATH%\.ssh` каталоге (Windows), который уже добавлен в учетную запись {% data variables.product.prodname_dotcom %}. Если в этом каталоге нет ключей, {% data variables.product.prodname_cli %} создаст ключи. Дополнительные сведения см. в разделе [Добавление адреса нового ключа SSH в учетную запись {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?platform=windows&tool=webui).

При возникновении проблем с проверкой ключа попробуйте обновить версию {% data variables.product.prodname_cli %}. Дополнительные сведения см. в [инструкциях по обновлению](https://github.com/cli/cli#installation) в файле сведений для {% data variables.product.prodname_cli %}.

### Проблемы с интегрированной среды разработки JetBrains

Справку по проблемам, связанным с используемой интегрированной среды разработки JetBrains или приложением шлюза JetBrains, см. в разделе Поддержка [продуктов](https://www.jetbrains.com/support/) на веб-сайте JetBrains.

{% endjetbrains %}
