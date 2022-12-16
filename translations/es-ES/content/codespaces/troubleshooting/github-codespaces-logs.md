---
title: Registros de GitHub Codespaces
intro: 'Información general de los registros que utiliza {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Logging
shortTitle: Codespaces logs
redirect_from:
  - /codespaces/troubleshooting/codespaces-logs
ms.openlocfilehash: f5cd482888f58f85a051bb9b6e2c5d7c026ed9a9
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160304'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

La información sobre {% data variables.product.prodname_github_codespaces %} se genera en varios registros:

{% webui %}

- Bitácoras de Codespace
- Bitácoras de creación
- Registros de la consola del explorador (para el cliente web de {% data variables.product.prodname_vscode_shortname %})

Los registros de extensión están disponibles si usas {% data variables.product.prodname_github_codespaces %} en {% data variables.product.prodname_vscode_shortname %}. Haz clic en la pestaña "{% data variables.product.prodname_vscode %}" anterior para obtener más información.

{% endwebui %}

{% vscode %}

- Bitácoras de Codespace
- Bitácoras de creación
- Registros de extensión (para la aplicación de escritorio de {% data variables.product.prodname_vscode_shortname %}) 

Los registros del explorador están disponibles si usas {% data variables.product.prodname_github_codespaces %} en el explorador. Haz clic en la pestaña "Explorador web" anterior para obtener más información.

{% endvscode %}

{% cli %}

- Bitácoras de Codespace
- Bitácoras de creación

Hay otros registros disponibles si usas {% data variables.product.prodname_github_codespaces %} en {% data variables.product.prodname_vscode_shortname %} o en el explorador web. Haz clic en las pestañas anteriores para obtener más información.

{% endcli %}

{% jetbrains %}

- Bitácoras de creación

Hay otros registros disponibles si usas {% data variables.product.prodname_github_codespaces %} en {% data variables.product.prodname_vscode_shortname %} o en el explorador web. Haz clic en las pestañas anteriores para obtener más información.

{% endjetbrains %}

{% webui %}

{% data reusables.codespaces.codespace-logs %}

1. Si estás utilizando {% data variables.product.prodname_github_codespaces %} en el explorador, asegúrate de que estés conectado al codespace que quieres depurar.
1. Abre el {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Comando</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) y escribe **Exportar registros**. Seleccione **Codespaces: Exportar registros** en la lista para descargar los registros.
1. Defina dónde guardar el archivo ZIP de registros y, después, haga clic en **Guardar** (escritorio) o en **Aceptar** (web).
1. Si usas {% data variables.product.prodname_github_codespaces %} en el explorador, haz clic con el botón derecho en el archivo ZIP de registros en la vista Explorador y selecciona **Descargar...** para descargarlos en la máquina local.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.codespace-logs %}

1. Abre el {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Comando</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) y escribe **Exportar registros**. Seleccione **Codespaces: Exportar registros** en la lista para descargar los registros.
1. Defina dónde guardar el archivo ZIP de registros y, después, haga clic en **Guardar** (escritorio) o en **Aceptar** (web).

{% endvscode %}

{% cli %}

{% data reusables.codespaces.codespace-logs %}

Actualmente, no puedes utilizar el {% data variables.product.prodname_cli %} para acceder a estas bitácoras. Para acceder a ellas, abre tu codespace en {% data variables.product.prodname_vscode_shortname %} o en un explorador.

{% endcli %}

## Bitácoras de creación

Estas bitácoras contienen información sobre el contenedor, el contenedor dev y sus configuraciones. Son útiles para depurar la configuración y solucionar problemas.

{% webui %}

1. Conéctate al codespace que quieras depurar.
2. Abre el {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Comando</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) y escribe **Registros de creación**. Seleccione **Codespaces: Ver registro de creación** en la lista para abrir el archivo `creation.log`.

Si quieres compartir la bitácora con soporte, puedes copiar el texto de la bitácora de creación en un editor de texto y guardar el archivo localmente.

{% endwebui %}

{% vscode %}

Abre el {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Comando</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) y escribe **Registros de creación**. Seleccione **Codespaces: Ver registro de creación** en la lista para abrir el archivo `creation.log`.

Si quieres compartir la bitácora con soporte, puedes copiar el texto de la bitácora de creación en un editor de texto y guardar el archivo localmente.

{% endvscode %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para ver el registro de creación, use el subcomando `gh codespace logs`. Después de ingresar el comando, elige de la lista de codespaces que se muestra.

```shell
gh codespace logs
```

Para más información sobre este comando, vea [el manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_logs).

Si quieres compartir la bitácora con el personal de soporte, puedes guardar el resultado en un archivo:

```shell
gh codespace logs -c <CODESPACE-NAME> > /path/to/logs.txt
```

{% endcli %}

{% vscode %}

## Bitácoras de extensión

Estos registros se encuentran disponibles únicamente para los usuarios de escritorio de {% data variables.product.prodname_vscode_shortname %}. Son útiles en caso de que parezca que la extensión de {% data variables.product.prodname_github_codespaces %} o el editor de {% data variables.product.prodname_vscode_shortname %} estén teniendo problemas que impidan la creación o conexión.

1. En {% data variables.product.prodname_vscode_shortname %}, abre la paleta de comandos.
1. Escriba **Registros** y seleccione **Desarrollador: Abrir la carpeta Registros de extensiones** en la lista para abrir la carpeta de registros de extensiones en el explorador de archivos del sistema.

Desde esta vista, puedes acceder a los registros que generan las diversas extensiones que utilizas en {% data variables.product.prodname_vscode_shortname %}. Verás registros de {% data variables.product.prodname_github_codespaces %}, Autenticación de {% data variables.product.prodname_dotcom %}, Git y de cualquier otra extensión que hayas habilitado.

{% endvscode %}

{% webui %}

## Bitácoras de consola de buscador

Estos registros son útiles únicamente si quieres depurar problemas con el uso de {% data variables.product.prodname_github_codespaces %} en el explorador. Son útiles para depurar problemas creando y conectándose a {% data variables.product.prodname_github_codespaces %}.

1. En la ventana del buscador del codespace que quieres depurar, abre la ventana de herramientas de desarrollador.
1. Muestra la pestaña "Consola" y haz clic en **errores** en la barra lateral izquierda para mostrar solo los errores.
1. En el área de registro de la derecha, haga clic con el botón derecho y seleccione **Guardar como** para guardar una copia de los errores en la máquina local.
  ![Guardar errores](/assets/images/help/codespaces/browser-console-log-save.png)

{% endwebui %}

{% jetbrains %}

{% data reusables.codespaces.jetbrains-open-codespace-plugin %}
1. En la ventana de herramientas de {% data variables.product.prodname_github_codespaces %}, haz clic en el icono del registro.

   ![Captura de pantalla del botón del registro](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

## Registros de JetBrains

Puedes descargar registros para el IDE remoto de JetBrains y la aplicación cliente local. Para ello, ve al menú **Ayuda** de la aplicación cliente de JetBrains y haz clic en **Recopilar registros de cliente y host**.

{% endjetbrains %}

## Información adicional

- "[Revisión de los registros de auditoría de la organización para {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/reviewing-your-organizations-audit-logs-for-github-codespaces)"
- "[Revisión de los registros de seguridad de {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/reviewing-your-security-logs-for-github-codespaces)"
