---
title: "Configuración de GitHub\_Copilot en Visual\_Studio\_Code"
intro: 'Puedes habilitar, configurar y deshabilitar {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio Code
topics:
  - Copilot
ms.openlocfilehash: ab043d4eeca2003deaf77aa80be46fc79acf8649
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193570'
---
## Acerca de {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vscode %}

Si usas {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_copilot %} puedes autocompletar el código mientras escribes. Después de la instalación, se puede habilitar o deshabilitar {% data variables.product.prodname_copilot %}, y configurar opciones avanzadas en {% data variables.product.prodname_vscode %} o en {% data variables.product.prodname_dotcom_the_website %}.

## Prerrequisitos

Para configurar {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vscode %}, se debe instalar el complemento {% data variables.product.prodname_copilot %}. Para más información, ve "[Introducción a {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vscode %}](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code)".

## Métodos abreviados de teclado para {% data variables.product.prodname_copilot %}

Puedes usar los métodos abreviados de teclado predeterminados en {% data variables.product.prodname_vscode %} al usar {% data variables.product.prodname_copilot %}. Como alternativa, puedes volver a enlazar los accesos directos en el editor Métodos abreviados de teclado y usar tus preferidos para cada comando específico. Puedes buscar cada método abreviado de teclado por nombre de comando en el editor de Métodos abreviados de teclado.

{% mac %}

| Acción | Acceso directo | Nombre de comando |
|:---|:---|:---|
|Aceptar una sugerencia insertada|<kbd>Pestaña</kbd>|editor.action.inlineSuggest.commit|
|Descartar una sugerencia insertada|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Mostrar la sugerencia insertada siguiente| <kbd>Opción (⌥)</kbd>+<kbd>]</kbd><br> |editor.action.inlineSuggest.showNext|
|Mostrar sugerencia insertada anterior| <kbd>Opción (⌥)</kbd>+<kbd>[</kbd><br> |editor.action.inlineSuggest.showPrevious|
|Desencadenar sugerencia insertada| <kbd>Opción (⌥)</kbd>+<kbd>\</kbd><br> |editor.action.inlineSuggest.trigger|
|Abrir {% data variables.product.prodname_copilot %} (sugerencias adicionales en el panel independiente)|<kbd>Ctrl</kbd>+<kbd>Return</kbd>|github.copilot.generate|
|Habilitar y deshabilitar {% data variables.product.prodname_copilot %}|_No hay acceso directo predeterminado_|github.copilot.toggleCopilot|

{% endmac %}

{% windows %}

| Acción | Acceso directo | Nombre de comando |
|:---|:---|:---|
|Aceptar una sugerencia insertada|<kbd>Pestaña</kbd>|editor.action.inlineSuggest.commit|
|Descartar una sugerencia insertada|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Mostrar la sugerencia insertada siguiente|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Mostrar sugerencia insertada anterior|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Desencadenar sugerencia insertada|<kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|Abrir {% data variables.product.prodname_copilot %} (sugerencias adicionales en el panel independiente)|<kbd>Ctrl</kbd>+<kbd>Entrar</kbd>|github.copilot.generate|
|Habilitar y deshabilitar {% data variables.product.prodname_copilot %}|_No hay acceso directo predeterminado_|github.copilot.toggleCopilot|

{% endwindows %}


{% linux %}

| Acción | Acceso directo | Nombre de comando |
|:---|:---|:---|
|Aceptar una sugerencia insertada|<kbd>Pestaña</kbd>|editor.action.inlineSuggest.commit|
|Descartar una sugerencia insertada|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Mostrar la sugerencia insertada siguiente|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Mostrar sugerencia insertada anterior|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Desencadenar sugerencia insertada|<kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|Abrir {% data variables.product.prodname_copilot %} (sugerencias adicionales en el panel independiente)|<kbd>Ctrl</kbd>+<kbd>Entrar</kbd>|github.copilot.generate|
|Habilitar y deshabilitar {% data variables.product.prodname_copilot %}|_No hay acceso directo predeterminado_|github.copilot.toggleCopilot|

{% endlinux %}

## Reenlazamiento de métodos abreviados de teclado

Si no quieres usar los métodos abreviados de teclado predeterminados en {% data variables.product.prodname_vscode %} al usar {% data variables.product.prodname_copilot %}, puedes volver a enlazar los métodos abreviados de teclado en el editor Métodos abreviados de teclado mediante tus preferidos para cada comando específico.

1. Haz clic en el menú **Archivo**, **Preferencias** y, después, **Métodos abreviados de teclado**.
![Captura de pantalla de Métodos abreviados de teclado en Visual Studio Code](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)
1. En el editor "Métodos abreviados de teclado", busca el nombre del comando del método abreviado de teclado que quieres cambiar.
![Captura de pantalla de la barra de búsqueda de Métodos abreviado de teclado](/assets/images/help/copilot/vsc-shortcut-search-bar.png)
1. Junto al comando que quieres cambiar, haz clic en el icono de lápiz.
![Captura de pantalla de Métodos abreviado de teclado](/assets/images/help/copilot/vsc-edit-shortcuts.png)
1. Escribe las pulsaciones de tecla que quieres usar para el comando y presiona <kbd>Enter</kbd>/<kbd>Return</kbd>.
![Captura de pantalla del cuadro de texto Editar método abreviado de teclado](/assets/images/help/copilot/vsc-edit-shortcuts-textbox.png)

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## Habilitación o deshabilitación de sugerencias insertadas

Puedes optar por habilitar o deshabilitar sugerencias insertadas para {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vscode %}. 

{% data reusables.copilot.vscode-settings %}
1. En el panel izquierdo de la pestaña de configuración, haz clic en **Extensiones** y, después, selecciona **{% data variables.product.prodname_copilot_short %}** .
1. En "Sugerencia insertada:Habilitar", activa o desactiva la casilla para habilitar o deshabilitar sugerencias insertadas.

## Habilitación o deshabilitación de {% data variables.product.prodname_copilot %} para lenguajes específicos

Puedes especificar los lenguajes para los que quieres habilitar o deshabilitar {% data variables.product.prodname_copilot %}.

1. En {% data variables.product.prodname_vscode %}, haz clic en la pestaña **Extensiones** y,después, ve a la sección **Copilot**. Para más información, ve "[Habilitación y deshabilitación de sugerencias insertadas](#enabling-and-disabling-inline-suggestions)".
1. En "Habilitar o deshabilitar {% data variables.product.prodname_copilot_short %} en los idiomas especificados", haz clic en **Editar en settings.json**.
1. En el archivo _settings.json_, agrega o quita los lenguajes para los que quieres habilitar o deshabilitar {% data variables.product.prodname_copilot %}. Por ejemplo, para habilitar Python en {% data variables.product.prodname_copilot %}, agrega `"python": true` a la lista, asegurándote de que hay una coma final después de todo menos del último elemento de lista.

    ```json
    {
        "editor.inlineSuggest.enabled": true,
        "github.copilot.enable": {
            "*": true,
            "yaml": false,
            "plaintext": false,
            "markdown": true,
            "javascript": true,
            "python": true
        }
    }
    ```

## Establecimiento de la configuración de proxy de {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} se puede configurar para conectarse a través de un servidor proxy HTTP en {% data variables.product.prodname_vscode %}. {% data variables.product.prodname_copilot %} admite configuraciones básicas de proxy HTTP, con o sin autenticación básica. 

{% data reusables.copilot.vscode-settings %}
1. En el panel izquierdo de la pestaña de configuración, haz clic en **Aplicaciones** y, después, selecciona **Proxy**.
1. En el cuadro de texto de "Proxy", escribe la dirección del servidor proxy, por ejemplo, `http://localhost:3128`. Opcionalmente, {% data variables.product.prodname_copilot %} usará las variables `http_proxy` y `https_proxy` del entorno.

   ![Captura de pantalla del cuadro de texto "Proxy" de Visual Studio Code](/assets/images/help/copilot/proxy-textbox.png)

1. Opcionalmente, en "Http: Autorización de proxy", haz clic en **Editar en settings.json** y agrega el valor necesario que se va a enviar como encabezado de `Proxy-Authorization` en cada solicitud de red.

   ![Captura de pantalla del cuadro de texto "Autorización de proxy" de Visual Studio Code](/assets/images/help/copilot/proxy-authorization.png)

1. Opcionalmente, en "Http: SSL estricto de proxy", activa o desactiva la casilla para habilitar o deshabilitar el SSL estricto.

   ![Captura de pantalla de la casilla "SSL estricto de proxy" Visual Studio Code](/assets/images/help/copilot/proxy-strict-ssl.png)

{% data reusables.copilot.dotcom-settings %}
