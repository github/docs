---
title: "Configuración de GitHub\_Copilot en Visual\_Studio\_Code"
intro: 'Puedes habilitar, configurar y deshabilitar {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio Code
topics:
  - Copilot
ms.openlocfilehash: 0c91f9c11f98669ba6bcbf84113a629ae6d53044
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080600'
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

1. En el menú **Archivo**, ve a **Preferencias** y haz clic en **Configuración**.
![Captura de pantalla de la configuración de {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/vsc-settings.png)
1. En el panel izquierdo de la pestaña configuración, haz clic en **Extensiones** y, después, selecciona **Copilot**.
1. En "Inline Suggest:Enable", active o anule la selección de la casilla para habilitar o deshabilitar sugerencias insertadas.

## Habilitación o deshabilitación de {% data variables.product.prodname_copilot %} para lenguajes específicos

Puedes especificar los lenguajes para los que quieres habilitar o deshabilitar {% data variables.product.prodname_copilot %}.

1. En {% data variables.product.prodname_vscode %}, haz clic en la pestaña **Extensiones** y,después, ve a la sección **Copilot**. Para más información, ve "[Habilitación y deshabilitación de sugerencias insertadas](#enabling-and-disabling-inline-suggestions)".
1. En "Habilitar o deshabilitar Copilot para lenguajes especificados", haz clic en **Editar en settings.json**.
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

{% data reusables.copilot.dotcom-settings %}
