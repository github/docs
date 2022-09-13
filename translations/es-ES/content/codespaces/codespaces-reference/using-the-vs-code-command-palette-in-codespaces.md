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
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: VS Code Command Palette
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/using-the-command-palette-in-codespaces
ms.openlocfilehash: cefa91dd9549aaf89ee127585ac34a91e25c80d1
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147760835'
---
## Acerca de la {% data variables.product.prodname_vscode_command_palette %}

La paleta de comandos es una de las características focales de {% data variables.product.prodname_vscode %} y está disponible para que la utilices en {% data variables.product.prodname_github_codespaces %}. La paleta de comandos te permite acceder a muchos comandos para {% data variables.product.prodname_codespaces %} y {% data variables.product.prodname_vscode_shortname %}. Para obtener más información sobre el uso de la {% data variables.product.prodname_vscode_command_palette_shortname %}, consulta "[Interfaz de usuario](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)" en la documentación de {% data variables.product.prodname_vscode_shortname %}.

## Acceso a la {% data variables.product.prodname_vscode_command_palette_shortname %}

Puedes acceder a la {% data variables.product.prodname_vscode_command_palette_shortname %} de varias maneras.

- <kbd>Mayús</kbd>+<kbd>Comando</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>P</kbd> (Windows/Linux).

  Nota que este comando es un atajo de teclado reservado en Firefox.
- <kbd>F1</kbd>
- En el menú Aplicación, haz clic en **Ver > Paleta de comandos...** .

  ![El menú de la aplicación](/assets/images/help/codespaces/codespaces-view-menu.png)

## Comandos para {% data variables.product.prodname_codespaces %}

Para ver todos los comandos relacionados con {% data variables.product.prodname_codespaces %}[, accede a {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) y, después, empieza a escribir "Codespaces".

![Una lista de todos los comandos que se relacionan con los codespaces](/assets/images/help/codespaces/codespaces-command-palette.png)

### Suspender o detener un codespace

Si agregas un secreto nuevo o cambias el tipo de máquina, tendrás que detener y reiniciar el codespace para que aplique tus cambios. 

Para suspender o detener tu contenedor del codespace, [accede a la {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) y, después, empieza a escribir "detener". Selecciona **Codespaces: Stop Current Codespace**.

![Comando para detner un codespace](/assets/images/help/codespaces/codespaces-stop.png)

### Agregar un contenedor de dev desde una plantilla

Para agregar un contenedor de desarrollo desde una plantilla, [accede a la {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) y, después, empieza a escribir "contenedor de desarrollo". Selecciona **Codespaces: Add Development Container Configuration Files...**

![Comando para agregar un contenedor de dev](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### Reconstruir un codespace

Si agregas un contenedor de dev o editas cualquiera de los archivos de configuración (`devcontainer.json` y `Dockerfile`), tendrás que recompilar el codespace para que aplique los cambios. 

Para recompilar el contenedor, [accede a la {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) y, después, empieza a escribir "recompilar". Seleccione **Codespaces: Rebuild Container**.

![Comando para reconstruir un codespace](/assets/images/help/codespaces/codespaces-rebuild.png)

### Bitácoras de los codespaces

Puedes usar la {% data variables.product.prodname_vscode_command_palette_shortname %} para acceder a los registros de creación del codespace, o bien puedes usarla para exportar todos los registros. 

Para recuperar los registros de {% data variables.product.prodname_codespaces %}[, accede a {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) y, después, empieza a escribir "registro". Selecciona **Codespaces: Exportar registros** para exportar todos los registros relacionados con {% data variables.product.prodname_codespaces %} o selecciona **Codespaces: Ver creación de registros** para ver los registros relacionados con la configuración.

![Comando para acceder a las bitácoras](/assets/images/help/codespaces/codespaces-logs.png)
