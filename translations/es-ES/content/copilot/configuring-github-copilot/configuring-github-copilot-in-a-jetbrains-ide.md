---
title: Configuración de GitHub Copilot en un IDE de JetBrains
intro: 'Puedes habilitar, configurar y deshabilitar {% data variables.product.prodname_copilot %} en un IDE de JetBrains.'
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
versions:
  feature: copilot
shortTitle: JetBrains
ms.openlocfilehash: 845f9306f519391f165dd00d3eefebed67bd409a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080671'
---
## Acerca del {% data variables.product.prodname_copilot %} en IDE de JetBrains

Si usas un IDE de JetBrains, {% data variables.product.prodname_copilot %} puede autocompletar el código a medida que escribes. Después de la instalación, puedes habilitar o deshabilitar {% data variables.product.prodname_copilot %}, y configurar opciones avanzadas en el IDE o en {% data variables.product.prodname_dotcom_the_website %}.

## Prerrequisitos

Para configurar {% data variables.product.prodname_copilot %} en un IDE de JetBrains, hay que instalar el complemento {% data variables.product.prodname_copilot %}. Para más información, consulta "[Introducción a {% data variables.product.prodname_copilot %} en un IDE de JetBrains](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide)".

## Métodos abreviados de teclado para {% data variables.product.prodname_copilot %}

Puedes usar los métodos abreviados de teclado predeterminados para sugerencias insertadas en el IDE de JetBrains al usar {% data variables.product.prodname_copilot %}. Como alternativa, puedes volver a enlazar los accesos directos a tus métodos abreviados de teclado preferidos para cada comando específico. Para obtener más información sobre cómo volver a enlazar métodos abreviados de teclado en el IDE de JetBrains, consulta la documentación de JetBrains. Por ejemplo, puedes ver la documentación de [IntelliJ IDEA](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html#choose-keymap).

{% mac %}

| Acción | Acceso directo |
|:---|:---|
|Aceptar una sugerencia insertada|<kbd>Pestaña</kbd>|
|Descartar una sugerencia insertada|<kbd>Esc</kbd>|
|Mostrar la sugerencia insertada siguiente|<kbd>Opción (⌥) o Alt</kbd>+<kbd>]</kbd>|
|Mostrar sugerencia insertada anterior|<kbd>Opción (⌥) o Alt</kbd>+<kbd>[</kbd>|
|Desencadenar sugerencia insertada|<kbd>Opción (⌥)</kbd>+<kbd>\</kbd>|
|Abrir {% data variables.product.prodname_copilot %} (sugerencias adicionales en el panel independiente)|<kbd>Opción (⌥) o Alt</kbd>+<kbd>Devolución</kbd> |

{% endmac %}

{% windows %}

| Acción | Acceso directo |
|:---|:---|
|Aceptar una sugerencia insertada|<kbd>Pestaña</kbd>|
|Descartar una sugerencia insertada|<kbd>Esc</kbd>|
|Mostrar la sugerencia insertada siguiente|<kbd>Alt</kbd>+<kbd>]</kbd>|
|Mostrar sugerencia insertada anterior|<kbd>Alt</kbd>+<kbd>[</kbd>|
|Desencadenar sugerencia insertada|<kbd>Alt</kbd>+<kbd>\</kbd>|
|Abrir {% data variables.product.prodname_copilot %} (sugerencias adicionales en el panel independiente)|<kbd>Alt</kbd>+<kbd>Entrar</kbd> |

{% endwindows %}

{% linux %}

| Acción | Acceso directo |
|:---|:---|
|Aceptar una sugerencia insertada|<kbd>Pestaña</kbd>|
|Descartar una sugerencia insertada|<kbd>Esc</kbd>|
|Mostrar la sugerencia insertada siguiente|<kbd>Alt</kbd>+<kbd>]</kbd>|
|Mostrar sugerencia insertada anterior|<kbd>Alt</kbd>+<kbd>[</kbd>|
|Desencadenar sugerencia insertada|<kbd>Alt</kbd>+<kbd>\</kbd>|
|Abrir {% data variables.product.prodname_copilot %} (sugerencias adicionales en el panel independiente)|<kbd>Alt</kbd>+<kbd>Entrar</kbd> |

{% endlinux %}

## Habilitación o deshabilitación de {% data variables.product.prodname_copilot %}

Puedes habilitar o deshabilitar {% data variables.product.prodname_copilot %} desde el IDE de JetBrains. El icono de estado de {% data variables.product.prodname_copilot %} en el panel inferior de la ventana de JetBrains indica si {% data variables.product.prodname_copilot %} está habilitado o deshabilitado. Cuando está habilitado, el icono está resaltado. Cuando está deshabilitado, el icono está atenuado.

1. Para habilitar o deshabilitar {% data variables.product.prodname_copilot %}, haz clic en el icono de estado en el panel inferior de la ventana JetBrains.
   ![Status icon in JetBrains](/assets/images/help/copilot/status-icon-jetbrains.png)
2. Si deshabilitas {% data variables.product.prodname_copilot %}, se te preguntará si quieres deshabilitarlo de forma global o para el lenguaje del archivo que estás editando actualmente. Para deshabilitar globalmente, haz clic en **Deshabilitar finalizaciones**. Como alternativa, haz clic en el botón específico del lenguaje para deshabilitar {% data variables.product.prodname_copilot %} para el lenguaje especificado.
   ![Deshabilitar {% data variables.product.prodname_copilot %} de forma global o para el lenguaje actual](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)

## Configuración de opciones avanzadas para {% data variables.product.prodname_copilot %}

Puedes administrar la configuración avanzada de {% data variables.product.prodname_copilot %} en el IDE de JetBrains, como la forma en que el IDE muestra finalizaciones de código y los lenguajes que deseas habilitar o deshabilitar para {% data variables.product.prodname_copilot %}.

1. En el IDE de JetBrains, haz clic en el menú **Archivo** y, a continuación, haz clic en **Configuración**.
1. En **Lenguajes y marcos**, haz clic en **{% data variables.product.prodname_copilot %}** .
1. Edita la configuración según tus preferencias personales.
   - Para ajustar el comportamiento y la apariencia de las sugerencias de código, y en caso de que se busquen actualizaciones, activa o desactiva las casillas correspondientes.
   - Si has seleccionado la opción para recibir actualizaciones automáticas, puedes elegir entre recibir actualizaciones estables, pero menos frecuentes, o actualizaciones nocturnas, que pueden ser menos estables. Haz clic en la lista desplegable **Canal de actualización** y selecciona **Estable** para recibir actualizaciones estables o **Por la noche** para recibir actualizaciones nocturnas.
   - En "Lenguajes deshabilitados", usa las casillas para activar o desactivar los lenguajes para los que deseas deshabilitar {% data variables.product.prodname_copilot %}.

{% data reusables.copilot.dotcom-settings %}
