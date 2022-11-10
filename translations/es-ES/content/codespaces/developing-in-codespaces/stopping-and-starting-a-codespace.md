---
title: Detención e inicio de un codespace
intro: Puedes detener e iniciar el codespace para guardar recursos y pausar el trabajo.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Stop a codespace
ms.openlocfilehash: 82e547b62593a74bb201dddd4992f41417d686f9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110059'
---
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

 ## Información adicional
- "[Ciclo de vida de Codespaces](/codespaces/developing-in-codespaces/codespaces-lifecycle)"
