---
title: Using the Visual Studio Code Command Palette in Codespaces
intro: 'Puedes utilizar la característica de paleta de comandos de {% data variables.product.prodname_vscode %} para acceder a muchos comandos en Codespaces.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: VS Code Command Palette
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/using-the-command-palette-in-codespaces
---

## About the {% data variables.product.prodname_vscode %} Command Palette

La paleta de comandos es una de las características focales de {% data variables.product.prodname_vscode %} y está disponible para que la utilices en Codespaces. The {% data variables.product.prodname_vscode_command_palette %} allows you to access many commands for {% data variables.product.prodname_codespaces %} and {% data variables.product.prodname_vscode %}. Para obtener más información sobre cómo utilizar la {% data variables.product.prodname_vscode_command_palette %}, consulta la sección "[Interfaz de usuario](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)" en la documentación de Visual Studio Code.

## Accessing the {% data variables.product.prodname_vscode_command_palette %}

You can access the {% data variables.product.prodname_vscode_command_palette %} in a number of ways.

- <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).

  Nota que este comando es un atajo de teclado reservado en Firefox.
- <kbd>F1</kbd>
- Desde el menú de la aplicación, haz clic en **Visualizar > la paleta de comandos...**.

  ![El menú de la aplicación](/assets/images/help/codespaces/codespaces-view-menu.png)

## Comandos para los {% data variables.product.prodname_github_codespaces %}

Para ver todos los comandos relacionados con {% data variables.product.prodname_github_codespaces %}, [accede a la {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette) y luego comienza a teclear "Codespaces".

![Una lista de todos los comandos que se relacionan con los codespaces](/assets/images/help/codespaces/codespaces-command-palette.png)

### Suspender o detener un codespace

Si agregas un secreto nuevo o cambias el tipo de máquina, tendrás que detener y reiniciar el codespace para que aplique tus cambios.

To suspend or stop your codespace's container, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "stop". Selecciona **Codespaces: Detener el codespace actual**.

![Comando para detner un codespace](/assets/images/help/codespaces/codespaces-stop.png)

### Agregar un contenedor de dev desde una plantilla

To add a dev container from a template, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "dev container". Selecciona **Codespaces: Agregar archivos de configuración del contenedor de desarrollo...**

![Comando para agregar un contenedor de dev](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### Reconstruir un codespace

Si agregas un contenedor de dev o si editas cualquiera de los archivos de configuración (`devcontainer.json` y `Dockerfile`), tendrás que reconstruir tu codespace para que este aplique tus cambios.

To rebuild your container, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "rebuild". Selecciona **Codespaces: Reconstruir contenedor**.

![Comando para reconstruir un codespace](/assets/images/help/codespaces/codespaces-rebuild.png)

### Bitácoras de los codespaces

You can use the {% data variables.product.prodname_vscode_command_palette %} to access the codespace creation logs, or you can use it export all logs.

To retrieve the logs for Codespaces, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "log". Selecciona **Codespaces: Exportar bitácoras** para exportar todas las bitácoras relacionadas con los codespaces o selecciona **Codespaces: Ver las bitácoras de creación** para ver las bitácoras relacionadas con la configuración.

![Comando para acceder a las bitácoras](/assets/images/help/codespaces/codespaces-logs.png)
