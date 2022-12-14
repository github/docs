---
title: Bitácoras de los codespaces
intro: Resumen de las ubicaciones de inicio de sesión que utiliza {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Logging
shortTitle: Codespaces logs
ms.openlocfilehash: 3e02023cd1ba05960e9f9b345265c281e714e6a5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145092471"
---
La información de {% data variables.product.prodname_codespaces %} se emite en tres bitácoras diferentes:

- Bitácoras de Codespace
- Bitácoras de creación
- Bitácoras de extensión (en {% data variables.product.prodname_vscode %} para escritorio) o bitácoras de consola de buscador (en {% data variables.product.prodname_vscode %} web)

## <a name="codespace-logs"></a>Bitácoras de Codespace

Estas bitácoras contienen información detallada sobre los codespaces, el contenedor, la sesión y el ambiente de {% data variables.product.prodname_vscode %}. Son útiles para diagnosticar los problemas de conexión y otros comportamientos inesperados. Por ejemplo, el codespace se congela pero la opción de "Recargar Windows" lo descongela por algunos minutos, o se te desconecta aleatoriamente del codespace, pero te puedes volver a conectar de inmediato.

{% webui %}

1. Si estás utilizando {% data variables.product.prodname_codespaces %} en el buscador, asegúrate de que estés conectado al codespace que quieres depurar.
1. Abra la paleta de comandos de {% data variables.product.prodname_vscode %} [`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)] y escriba **Exportar registros**. Seleccione **Codespaces: Exportar registros** en la lista para descargar los registros.
1. Defina dónde guardar el archivo ZIP de registros y, después, haga clic en **Guardar** (escritorio) o en **Aceptar** (web).
1. Si usa {% data variables.product.prodname_codespaces %} en el explorador, haga clic con el botón derecho en el archivo ZIP de registros en la vista Explorador y seleccione **Descargar...** para descargarlos en la máquina local.

{% endwebui %}

{% vscode %}

1. Abra la paleta de comandos de {% data variables.product.prodname_vscode %} [`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)] y escriba **Exportar registros**. Seleccione **Codespaces: Exportar registros** en la lista para descargar los registros.
1. Defina dónde guardar el archivo ZIP de registros y, después, haga clic en **Guardar** (escritorio) o en **Aceptar** (web).

{% endvscode %}

{% cli %}

Actualmente, no puedes utilizar el {% data variables.product.prodname_cli %} para acceder a estas bitácoras. Para acceder a ellas, abre tu codespace en {% data variables.product.prodname_vscode %} o en un buscador.

{% endcli %}

## <a name="creation-logs"></a>Bitácoras de creación

Estas bitácoras contienen información sobre el contenedor, el contenedor dev y sus configuraciones. Son útiles para depurar la configuración y solucionar problemas.


{% webui %}

1. Conéctate al codespace que quieras depurar.
2. Abra {% data variables.product.prodname_vscode_command_palette %} [`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)] y escriba **Registros de creación**. Seleccione **Codespaces: Ver registro de creación** en la lista para abrir el archivo `creation.log`.

Si quieres compartir la bitácora con soporte, puedes copiar el texto de la bitácora de creación en un editor de texto y guardar el archivo localmente.

{% endwebui %}

{% vscode %}

Abra la paleta de comandos (`Shift + Command + P` [Mac) / `Ctrl + Shift + P` (Windows)] y escriba **Registros de creación**. Seleccione **Codespaces: Ver registro de creación** en la lista para abrir el archivo `creation.log`.

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

## <a name="extension-logs"></a>Bitácoras de extensión

Estas bitácoras se encuentran disponibles únicamente para los usuarios de escritorio de {% data variables.product.prodname_vscode %}}. Son útiles en caso de que parezca que la extensión de {% data variables.product.prodname_codespaces %} o el editor de {% data variables.product.prodname_vscode %} estén teniendo problemas que prevengan la creación o conexión.

1. En {% data variables.product.prodname_vscode %}, abre la paleta de comandos.
1. Escriba **Registros** y seleccione **Desarrollador: Abrir la carpeta Registros de extensiones** en la lista para abrir la carpeta de registros de extensiones en el explorador de archivos del sistema.

Desde esta vista, puedes acceder a las bitácoras que generan las diversas extensiones que utilizas en {% data variables.product.prodname_vscode %}. Verás las bitácoras de GitHub Codespaces, GitHub Authentication y Git, adicionalmente a cualquier otra extensión que hayas habilitado.

## <a name="browser-console-logs"></a>Bitácoras de consola de buscador

Estas bitácoras son útiles únicamente si quieres depurar problemas con el uso de {% data variables.product.prodname_codespaces %} en el buscador. Son útiles para depurar problemas creando y conectándose a los {% data variables.product.prodname_codespaces %}.

1. En la ventana del buscador del codespace que quieres depurar, abre la ventana de herramientas de desarrollador.
1. Muestre la pestaña "Consola" y haga clic en **errores** en la barra lateral izquierda para mostrar solo los errores.
1. En el área de registro de la derecha, haga clic con el botón derecho y seleccione **Guardar como** para guardar una copia de los errores en la máquina local.
  ![Guardar errores](/assets/images/help/codespaces/browser-console-log-save.png)
