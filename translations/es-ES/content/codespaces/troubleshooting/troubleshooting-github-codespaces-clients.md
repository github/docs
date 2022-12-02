---
title: Solución de problemas de clientes de GitHub Codespaces
shortTitle: Codespaces clients
intro: 'En este artículo se proporciona información para solucionar problemas que puedes encontrar con el cliente que usas para {% data variables.product.prodname_github_codespaces %}.'
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
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186175'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## Solución de problemas del cliente web de {% data variables.product.prodname_vscode %}

Si tienes problemas al usar {% data variables.product.prodname_github_codespaces %} en un explorador que no está basado en Chromium, intenta cambiar a un explorador basado en Chromium, como Google Chrome o Microsoft Edge. De forma alternativa, puedes buscar incidencias conocidas con el explorador en el repositorio [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen); para ello, busca incidencias etiquetadas con el nombre del explorador, como [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) o [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

Si tienes problemas al usar {% data variables.product.prodname_github_codespaces %} en un explorador basado en Chromium, puedes comprobar si experimenta otra incidencia conocida con {% data variables.product.prodname_vscode_shortname %} en el repositorio [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen).

### Diferencias al trabajar en {% data variables.product.prodname_vscode_shortname %} localmente

Al abrir un codespace en el explorador, con el cliente web de {% data variables.product.prodname_vscode_shortname %}, observarás algunas diferencias con respecto a trabajar en un área de trabajo local en la aplicación de escritorio de {% data variables.product.prodname_vscode_shortname %}. Por ejemplo, algunas uniones de teclas serán diferentes o no estarán y algunas extensiones podrían comportarse de forma diferente. Para obtener un resumen, consulta: "[Limitaciones conocidas y adaptaciones](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)" en la documentación de {% data variables.product.prodname_vscode_shortname %}.

Puedes comprobar si hay incidencias conocidas y registrar nuevas incidencias con la experiencia de {% data variables.product.prodname_vscode_shortname %} en el repositorio [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders es el lanzamiento más frecuente de {% data variables.product.prodname_vscode_shortname %}. Tiene todas las características y correcciones de errores más recientes, pero también podría contener, ocasionalmente, problemas nuevos que podrían dar como resultado una compilación rota.

Si estás utilizando una compilación de Insiders y notas un comportamiento anormal, te recomendamos cambiar a la versión estable de {% data variables.product.prodname_vscode %} e intentarlo de nuevo.

Haz clic en {% octicon "gear" aria-label="The manage icon" %} en la parte inferior izquierda del editor y selecciona **Cambiar a versión estable...** . Si el cliente web de {% data variables.product.prodname_vscode_shortname %} no se carga o el icono {% octicon "gear" aria-label="The manage icon" %} no está disponible, puedes forzar el cambio a {% data variables.product.prodname_vscode %} Estable si anexas `?vscodeChannel=stable` a la dirección URL del codespace y lo cargas en esa dirección URL.

Si la incidencia no se ha corregido en {% data variables.product.prodname_vscode %} Estable, comprueba si hay incidencias conocidas y, si es necesario, registra una nueva incidencia con la experiencia de {% data variables.product.prodname_vscode_shortname %}, en el repositorio [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

{% endwebui %}

{% vscode %}

## Solución de problemas de {% data variables.product.prodname_vscode_shortname %}

Al abrir un codespace en la aplicación de escritorio de {% data variables.product.prodname_vscode_shortname %}, es posible que observes algunas diferencias en comparación con trabajar en un área de trabajo local, pero la experiencia debe ser similar.

Si encuentras incidencias, puedes comprobar si hay incidencias conocidas y registrar nuevas incidencias con la experiencia de {% data variables.product.prodname_vscode_shortname %} en el repositorio [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders es el lanzamiento más frecuente de {% data variables.product.prodname_vscode_shortname %}. Tiene todas las características y correcciones de errores más recientes, pero también podría contener, ocasionalmente, problemas nuevos que podrían dar como resultado una compilación rota.

Si estás utilizando una compilación de Insiders y notas un comportamiento anormal, te recomendamos cambiar a la versión estable de {% data variables.product.prodname_vscode %} e intentarlo de nuevo.

Para cambiar a {% data variables.product.prodname_vscode %} Estable, cierra la aplicación de {% data variables.product.prodname_vscode %} Insiders, abre la aplicación de {% data variables.product.prodname_vscode %} Estable y vuelve a abrir el codespace.

Si la incidencia no se ha corregido en {% data variables.product.prodname_vscode %} Estable, comprueba si hay incidencias conocidas y, si es necesario, registra una nueva incidencia con la experiencia de {% data variables.product.prodname_vscode_shortname %}, en el repositorio [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

{% endvscode %}

{% jetbrains %}

## Solución de problemas de los IDE de JetBrains

### Problemas de rendimiento

Se recomienda un tipo de máquina de {% data variables.product.prodname_github_codespaces %} con al menos 4 núcleos para ejecutar cualquiera de los IDE de JetBrains. Para obtener más información, consulte "[Cambio del tipo de máquina para el codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)".

Si usas una máquina con 4 o más núcleos y el rendimiento que experimentas en JetBrains es un poco lento, es posible que tengas que aumentar el tamaño máximo del montón de Java. 

Se recomienda establecer el tamaño máximo del montón a una cifra entre 2862 MiB (3 GB) y el 60 % de la RAM del host remoto.

A continuación se proporcionan algunas instrucciones como punto de partida inicial, que puedes ajustar en función del tamaño del código base y la memoria necesaria para ejecutar la aplicación. Por ejemplo, si tienes un código base grande o complicado, es posible que tengas que aumentar aún más el tamaño del montón. Si tienes una aplicación más grande, puedes establecer un tamaño de montón inferior para permitir que la aplicación tenga más memoria.

| Tipo de máquina   | Tamaño máximo del montón |
| -------------- | ----------------- |
| 4 núcleos         | 3 GB              |
| 8 núcleos         | 4 GB              |
| 16 o 32 núcleos | 8 GB              |

1. A la izquierda de la barra de navegación, en la parte superior de la ventana de la aplicación, haz clic en el nombre del codespace.

   ![Captura de pantalla del botón de recursos en JetBrains](/assets/images/help/codespaces/jetbrains-resources-button.png)

1. En la pestaña Rendimiento, observa los detalles de carga de CPU y memoria. Estos indicarán si la máquina está sobrecargada.
 
   ![Captura de pantalla del botón Localhost en JetBrains](/assets/images/help/codespaces/jetbrains-performance.png)

1. Haz clic en la pestaña Configuración y edita el tamaño del montón, no lo aumentes a más del 60 % de la memoria disponible para el codespace.

   ![Captura de pantalla de la configuración de tamaño máximo del montón](/assets/images/help/codespaces/jetbrains-heap-setting.png)

1. Haz clic en **Guardar y reiniciar**.

### El cliente no se puede abrir en MacOS Ventura 

En MacOS Ventura, la primera vez que intentas conectarte a un espacio de código desde la puerta de enlace de JetBrains, se puede mostrar un mensaje indicando que la aplicación cliente de JetBrains "está dañada y no se puede abrir".

<img src="/assets/images/help/codespaces/jetbrains-ventura-error1.png" alt="Screenshot of the 'cannot be opened' error message" style="width:230px;"/>

Si esto ocurre:

1. Haz clic en **Cancelar** para descartar este mensaje.
1. Haz clic en el icono de Apple, en la parte superior izquierda de la pantalla y en **Configuración del sistema**. 
1. Haz clic en **Privacidad y seguridad** y desplázate hacia abajo hasta la sección "Seguridad".

   ![Captura de pantalla del cuadro de diálogo Privacidad y seguridad](/assets/images/help/codespaces/jetbrains-privacy-and-security.png)

   Verás un mensaje que indica que se ha bloqueado el uso del cliente jetBrains. 

1. Haz clic en **Abrir de todas formas** para agregar el cliente jetBrains a las aplicaciones reconocidas. 
   El mensaje se muestra de nuevo, pero esta vez con un botón **Abrir**.

   <img src="/assets/images/help/codespaces/jetbrains-ventura-error2.png" alt="Screenshot of the error message with an 'Open' button" style="width:230px;"/>

1. Vuelve a hacer clic en **Cancelar**.
1. Vuelve a la aplicación de puerta de enlace de JetBrains y conéctate al codespace necesario.
   El cliente jetBrains se abrirá correctamente. Después de autorizar la ejecución de la aplicación cliente en tu equipo Mac, no verás el mensaje al conectarte a codespaces en el futuro.

### Problemas de conexión SSH

Para conectarse a través del servidor SSH que se ejecuta en el codespace, debes tener una clave SSH en el directorio `~/.ssh` (MacOS y Linux) o en el directorio `%HOMEPATH%\.ssh` (Windows) que ya se haya agregado a la cuenta de {% data variables.product.prodname_dotcom %}. Si no tienes ninguna clave en este directorio, {% data variables.product.prodname_cli %} generará claves automáticamente. Para obtener más información, consulta "[Adición de una clave SSHa tu cuenta de {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?platform=windows&tool=webui)".

Si tienes problemas con la validación de claves, prueba a actualizar la versión de {% data variables.product.prodname_cli %}. Para obtener información, consulta las [instrucciones de actualización](https://github.com/cli/cli#installation) del archivo Léame de {% data variables.product.prodname_cli %}.

### Problemas del IDE de JetBrains

Para obtener ayuda con problemas específicos del IDE de JetBrains que usas o la aplicación de puerta de enlace de JetBrains, consulta "[Soporte técnico del producto](https://www.jetbrains.com/support/)" en el sitio web de JetBrains.

{% endjetbrains %}
