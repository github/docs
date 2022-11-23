---
title: Detención e inicio de un codespace
intro: Puedes detener e iniciar el codespace para guardar recursos y pausar el trabajo.
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
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158809'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Acerca de la detención y el inicio de un codespace

{% data reusables.codespaces.stopping-a-codespace %}

Independientemente de dónde hayas creado los codespaces o accedido a estos, puedes verlos y administrarlos en el explorador en https://github.com/codespaces. 

## Detener un codespace

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
 1. Haz clic en los puntos suspensivos ( **…** ) situados a la derecha del codespace que quieras detener.
 1. Haz clic en **Detener codespace**.
   ![Captura de pantalla de la opción para detener un codespace](/assets/images/help/codespaces/stop-codespace-webui.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

 Para detener un codespace, usa el subcomando `gh codespace stop` y, después, elige el codespace que quieras detener de la lista que se muestra.

 ```shell{:copy}
 gh codespace stop
 ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. Escribe `stop` y selecciona **Codespaces: Detención de un codespace** en la lista de opciones.
1. En la lista de codespaces, selecciona el que quieras detener.

{% endvscode %}

{% jetbrains %}

{% data reusables.codespaces.jetbrains-open-codespace-plugin %}
1. En la ventana de herramientas de {% data variables.product.prodname_github_codespaces %}, haz clic en el icono Detener.

   ![Captura de pantalla del botón Registro](/assets/images/help/codespaces/jetbrains-plugin-icon-stop.png)

{% endjetbrains %}

## Reinicio de un codespace

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
1. Haz clic en el nombre del codespace que quieras reiniciar.
![Captura de pantalla de los codespaces detenidos](/assets/images/help/codespaces/restart-codespace-webui.png)

{% endwebui %}

{% cli %}

Al reiniciar un codespace, puedes elegir abrirlo en {% data variables.product.prodname_vscode %} o en el explorador. 

 - Para reiniciar un codespace y abrirlo en {% data variables.product.prodname_vscode %}, usa el subcomando `gh codespace code` y, después, elige el codespace que quieras reiniciar en la lista que se muestra.

 ```shell{:copy} 
 gh codespace code
 ```

 - Para reiniciar un codespace y abrirlo en el explorador, usa el subcomando `gh codespace open --web` y, después, elige el codespace que quieras reiniciar en la lista que se muestra.

 ```shell{:copy}
 gh codespace open --web
 ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. Escribe `connect` y selecciona **Codespaces: Conexión a un codespace** en la lista de opciones.
1. En la lista de codespaces, selecciona el que quieras reiniciar.

{% endvscode %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}

## Información adicional

- "[Ciclo de vida de un codespace](/codespaces/developing-in-codespaces/the-codespace-lifecycle)"
