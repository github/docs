---
title: Остановка и запуск codespace
intro: 'Вы можете остановить и запустить codespace, чтобы сохранить ресурсы и приостановить работу.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Stop a codespace
ms.openlocfilehash: 5c34fd5b7d72f52e203cd8f8fdc1871ff6a2f014
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188251'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Сведения о остановке и запуске codespace

{% data reusables.codespaces.stopping-a-codespace %}

Независимо от того, где вы создали codespace или где вы обращаетесь к ним, вы можете просматривать их и управлять ими в браузере по адресу https://github.com/codespaces. 

## Остановка пространства кода

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
 1. Справа от codespace, которое вы хотите остановить, щелкните elipsis (**...**).
 1. Щелкните **Остановить codespace**.
   ![Снимок экрана: параметр остановки codespace](/assets/images/help/codespaces/stop-codespace-webui.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

 Чтобы остановить codespace, `gh codespace stop` используйте подкоманду, а затем выберите кодовое пространство, которое вы хотите остановить, из отображаемого списка.

 ```shell{:copy}
 gh codespace stop
 ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. Введите `stop` и выберите **Codespaces: Stop Codespace** в списке параметров.
1. В списке codespaces выберите пространство codespace, которое требуется остановить.

{% endvscode %}

{% jetbrains %}

Вы можете остановить codespace на странице "Ваши codespaces" (см. [инструкции веб-браузера](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace?tool=webui#stopping-a-codespace)) или с помощью {% data variables.product.prodname_cli %} (см. [инструкции по CLI](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace?tool=cli#stopping-a-codespace)).

{% endjetbrains %}

## Перезапуск codespace

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
1. Щелкните имя codespace, которое требуется перезапустить.
![Снимок экрана: остановленные codespaces](/assets/images/help/codespaces/restart-codespace-webui.png)

{% endwebui %}

{% cli %}

При перезапуске codespace его можно открыть в {% data variables.product.prodname_vscode %} или в браузере. 

 - Чтобы перезапустить codespace и открыть его в {% data variables.product.prodname_vscode %}, используйте `gh codespace code` подкоманду и выберите нужное пространство кода из отображаемого списка.

 ```shell{:copy} 
 gh codespace code
 ```

 - Чтобы перезапустить codespace и открыть его в браузере, используйте `gh codespace open --web` подкоманду, а затем выберите пространство codespace, которое требуется перезапустить, из отображаемого списка.

 ```shell{:copy}
 gh codespace open --web
 ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. Введите `connect` и выберите **Codespaces: Подключиться к Codespace** в списке параметров.
1. В списке codespaces выберите пространство codespace, которое требуется перезапустить.

{% endvscode %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}

## Дополнительные материалы

- [Жизненный цикл codespace](/codespaces/getting-started/the-codespace-lifecycle)
