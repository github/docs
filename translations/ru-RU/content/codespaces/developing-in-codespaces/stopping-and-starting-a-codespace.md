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
ms.openlocfilehash: 290a39d9d60420230bd9b11d5e2d10119ccc1c72
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158808'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Сведения об остановке и запуске codespace

{% data reusables.codespaces.stopping-a-codespace %}

Независимо от того, где вы создали codespace или где вы обращаетесь к ним, вы можете просматривать их и управлять ими в браузере по адресу https://github.com/codespaces. 

## Остановка пространства кода

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
 1. Справа от пространства codespace, которое нужно остановить, щелкните значок с многоточием (**...**).
 1. Щелкните **Остановить codespace**.
   ![Снимок экрана: параметр остановки codespace](/assets/images/help/codespaces/stop-codespace-webui.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

 Чтобы остановить codespace, `gh codespace stop` используйте подкоманду, а затем выберите пространство кода, которое нужно остановить, из отображаемого списка.

 ```shell{:copy}
 gh codespace stop
 ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. Введите `stop` и выберите **Codespaces: Остановить Codespace** в списке параметров.
1. В списке codespaces выберите пространство кода, которое нужно остановить.

{% endvscode %}

{% jetbrains %}

{% data reusables.codespaces.jetbrains-open-codespace-plugin %}
1. В окне инструментов {% data variables.product.prodname_github_codespaces %} щелкните значок остановки.

   ![Снимок экрана: кнопка "Журнал"](/assets/images/help/codespaces/jetbrains-plugin-icon-stop.png)

{% endjetbrains %}

## Перезапуск codespace

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
1. Щелкните имя codespace, которое требуется перезапустить.
![Снимок экрана остановленных codespaces](/assets/images/help/codespaces/restart-codespace-webui.png)

{% endwebui %}

{% cli %}

При перезапуске codespace его можно открыть в {% data variables.product.prodname_vscode %} или в браузере. 

 - Чтобы перезапустить codespace и открыть его в {% data variables.product.prodname_vscode %}, используйте `gh codespace code` подкоманду, а затем выберите пространство кода, которое требуется перезапустить, из отображаемого списка.

 ```shell{:copy} 
 gh codespace code
 ```

 - Чтобы перезапустить codespace и открыть его в браузере, используйте `gh codespace open --web` подкоманд и выберите нужное пространство кода из отображаемого списка.

 ```shell{:copy}
 gh codespace open --web
 ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. Введите `connect` и выберите **Codespaces: Подключиться к Codespace** в списке параметров.
1. В списке codespace выберите пространство кода, которое требуется перезапустить.

{% endvscode %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}

## Дополнительные материалы

- [Жизненный цикл codespace](/codespaces/developing-in-codespaces/the-codespace-lifecycle)
