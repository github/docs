---
title: Bitácoras de los codespaces
intro: 'Resumen de las ubicaciones de inicio de sesión que utiliza {% data variables.product.prodname_codespaces %}.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Logging
shortTitle: Bitácoras de los codespaces
---


La información de {% data variables.product.prodname_codespaces %} se emite en tres bitácoras diferentes:

- Bitácoras de Codespace
- Bitácoras de creación
- Bitácoras de extensión (en {% data variables.product.prodname_vscode %} para escritorio) o bitácoras de consola de buscador (en {% data variables.product.prodname_vscode %} web)

## Bitácoras de Codespace

Estas bitácoras contienen información detallada sobre los codespaces, el contenedor, la sesión y el ambiente de {% data variables.product.prodname_vscode %}. Son útiles para diagnosticar los problemas de conexión y otros comportamientos inesperados. Por ejemplo, el codespace se congela pero la opción de "Recargar Windows" lo descongela por algunos minutos, o se te desconecta aleatoriamente del codespace, pero te puedes volver a conectar de inmediato.

{% include tool-switcher %}

{% webui %}

1. Si estás utilizando {% data variables.product.prodname_codespaces %} en el buscador, asegúrate de que estés conectado al codespace que quieres depurar.
1. Open the {% data variables.product.prodname_vscode %} Command Palette (`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)) and type **Export logs**. Selecciona **Codespaces: Exportar Bitácoras** de la lista para descargar las bitácoras.
1. Define dónde guardar el archivo zip de las bitácoras y luego haz clic en **Guardar** (escritorio) o en **OK** (web).
1. Si estás utilizando {% data variables.product.prodname_codespaces %} en el buscador, haz clic derecho en el archivo zip de las bitácoras desde la vista de explorador y selecciona **Download…** para descargarlas en tu máquina local.

{% endwebui %}

{% vscode %}

1. Open the {% data variables.product.prodname_vscode %} Command Palette (`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)) and type **Export logs**. Selecciona **Codespaces: Exportar Bitácoras** de la lista para descargar las bitácoras.
1. Define dónde guardar el archivo zip de las bitácoras y luego haz clic en **Guardar** (escritorio) o en **OK** (web).

{% endvscode %}

{% cli %}

Currently you can't use {% data variables.product.prodname_cli %} to access these logs. To access them, open your codespace in {% data variables.product.prodname_vscode %} or in a browser.

{% endcli %}

## Bitácoras de creación

Estas bitácoras contienen información sobre el contenedor, el contenedor dev y sus configuraciones. Son útiles para depurar la configuración y solucionar problemas.

{% include tool-switcher %}

{% webui %}

1. Conéctate al codespace que quieras depurar.
2. Open the {% data variables.product.prodname_vscode_command_palette %} (`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)) and type **Creation logs**. Selecciona **Codespaces: View Creation Log** de la lista para abrir el archivo `creation.log`.

Si quieres compartir la bitácora con soporte, puedes copiar el texto de la bitácora de creación en un editor de texto y guardar el archivo localmente.

{% endwebui %}

{% vscode %}

Abre la paleta de comandos (`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)) y teclea **Creation logs**. Selecciona **Codespaces: View Creation Log** de la lista para abrir el archivo `creation.log`.

Si quieres compartir la bitácora con soporte, puedes copiar el texto de la bitácora de creación en un editor de texto y guardar el archivo localmente.

{% endvscode %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To see the creation log use the `gh codespace logs` subcommand. After entering the command choose from the list of codespaces that's displayed.

```shell
gh codespace logs 
```

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_logs).

If you want to share the log with support, you can save the output to a file:

```shell
gh codespace logs -c <CODESPACE-NAME> > /path/to/logs.txt
```

{% endcli %}

## Bitácoras de extensión

Estas bitácoras se encuentran disponibles únicamente para los usuarios de escritorio de {% data variables.product.prodname_vscode %}}. Son útiles en caso de que parezca que la extensión de {% data variables.product.prodname_codespaces %} o el editor de {% data variables.product.prodname_vscode %} estén teniendo problemas que prevengan la creación o conexión.

1. En {% data variables.product.prodname_vscode %}, abre la paleta de comandos.
1. Teclea **Logs** y selecciona **Desarrollador: Abrir la Carpeta de Bitácoras de Extensión** desde la lista para abrir dicha carpeta en el explorador de archivos de tu sistema.

Desde esta vista, puedes acceder a las bitácoras que generan las diversas extensiones que utilizas en {% data variables.product.prodname_vscode %}. Verás las bitácoras de GitHub Codespaces, GitHub Authentication y Git, adicionalmente a cualquier otra extensión que hayas habilitado.

## Bitácoras de consola de buscador

Estas bitácoras son útiles únicamente si quieres depurar problemas con el uso de {% data variables.product.prodname_codespaces %} en el buscador. Son útiles para depurar problemas creando y conectándose a los {% data variables.product.prodname_codespaces %}.

1. En la ventana del buscador del codespace que quieres depurar, abre la ventana de herramientas de desarrollador.
1. Muestra la pestaña de "Consola" y haz clic en **errores** en la barra lateral izquierda para mostrar únicamente los errores.
1. En el área de bitácora a la derecha, da clic derecho y selecciona **Guardar como** para guardar una copia de los errores en tu máquina local. ![Guardar los errores](/assets/images/help/codespaces/browser-console-log-save.png)
