---
title: "Uso de la paleta de Comandos de Visual\_Studio Code en GitHub Codespaces"
intro: 'Puedes utilizar la característica de paleta de comandos de {% data variables.product.prodname_vscode %} para acceder a muchos comandos en {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
shortTitle: VS Code Command Palette
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/using-the-command-palette-in-codespaces
ms.openlocfilehash: acd462dd1c0b60dced529d7471b9c8638e2f6e91
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180815'
---
## Acerca de la {% data variables.product.prodname_vscode_command_palette %}

La {% data variables.product.prodname_vscode_command_palette_shortname %} es una de las características focales de {% data variables.product.prodname_vscode %} y está disponible para que la utilices en {% data variables.product.prodname_github_codespaces %}. La paleta de comandos te permite acceder a muchos comandos para {% data variables.product.prodname_github_codespaces %} y {% data variables.product.prodname_vscode_shortname %}. Para obtener más información sobre el uso de la {% data variables.product.prodname_vscode_command_palette_shortname %}, consulta "[Interfaz de usuario](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)" en la documentación de {% data variables.product.prodname_vscode_shortname %}.

## Acceso a la {% data variables.product.prodname_vscode_command_palette_shortname %}

Puedes acceder a la {% data variables.product.prodname_vscode_command_palette_shortname %} de varias maneras.

- <kbd>Mayús</kbd>+<kbd>Comando</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>P</kbd> (Windows/Linux).

  Nota que este comando es un atajo de teclado reservado en Firefox.
- <kbd>F1</kbd>
- En el menú Aplicación, haz clic en **Ver > Paleta de comandos...** .

  ![El menú de la aplicación](/assets/images/help/codespaces/codespaces-view-menu.png)

## Comandos para {% data variables.product.prodname_codespaces %}

Para ver todos los comandos relacionados con {% data variables.product.prodname_github_codespaces %}, [accede a la {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) y, después, empieza a escribir "Codespaces".

![Lista de todos los comandos relacionados con {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-command-palette.png)

### Suspender o detener un codespace

Si agregas un secreto nuevo o cambias el tipo de máquina, tendrás que detener y reiniciar el codespace para que aplique tus cambios. 

Para suspender o detener tu contenedor del codespace, [accede a la {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) y, después, empieza a escribir "detener". Selecciona **Codespaces: Stop Current Codespace**.

![Comando para detner un codespace](/assets/images/help/codespaces/codespaces-stop.png)

### Adición de una configuración predefinida de contenedor de desarrollo

Para agregar una configuración predefinida de contenedor de desarrollo, [accede a la {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) y, después, empieza a escribir "contenedor de desarrollo". Selecciona **Codespaces: Add Development Container Configuration Files...**

![Comando para agregar un contenedor de dev](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### Reconstruir un codespace

Si agregas un contenedor de dev o editas cualquiera de los archivos de configuración (`devcontainer.json` y `Dockerfile`), tendrás que recompilar el codespace para que aplique los cambios. 

Para recompilar el contenedor, [accede a la {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) y, después, empieza a escribir "recompilar". Seleccione **Codespaces: Rebuild Container**.

![Comando para reconstruir un codespace](/assets/images/help/codespaces/codespaces-rebuild.png)

{% data reusables.codespaces.full-rebuild-tip %}

### Bitácoras de los codespaces

Puedes usar la {% data variables.product.prodname_vscode_command_palette_shortname %} para acceder a los registros de creación del codespace, o bien puedes usarla para exportar todos los registros. 

Para recuperar los registros de {% data variables.product.prodname_github_codespaces %}, [accede a la {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) y, después, empieza a escribir "registro". Selecciona **Codespaces: Exportar registros** para exportar todos los registros relacionados con {% data variables.product.prodname_github_codespaces %} o selecciona **Codespaces: Ver creación de registros** para ver los registros relacionados con la configuración.

![Comando para acceder a las bitácoras](/assets/images/help/codespaces/codespaces-logs.png)

## Información adicional

- "[Uso de {% data variables.product.prodname_github_codespaces %} en {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)"
