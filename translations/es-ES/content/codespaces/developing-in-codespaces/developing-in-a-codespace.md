---
title: Desarrollar en un codespace
intro: 'Puedes trabajar en un codespace mediante el explorador, {% data variables.product.prodname_vscode %}, un IDE de JetBrains o en un shell de comandos.'
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Develop in a codespace
ms.openlocfilehash: e941373ade8c2f8365e7b654733b7ee029a6a7dd
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159073'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Acerca del desarrollo con {% data variables.product.prodname_github_codespaces %}

Puedes desarrollar código en un codespace con la herramienta que prefieras: 

* Un shell de comandos, a través de una conexión SSH iniciada mediante {% data variables.product.prodname_cli %}.
* Uno de los IDE de JetBrains, a través de la puerta de enlace de JetBrains.
* Aplicación de escritorio {% data variables.product.prodname_vscode %}.
* Una versión basada en explorador de {% data variables.product.prodname_vscode %}.

{% webui %}

Las pestañas de este artículo te permiten cambiar de información para cada una de estas formas de trabajo. Actualmente estás en la pestaña de la versión del explorador web de {% data variables.product.prodname_vscode %}.

## Trabajo en un codespace en el explorador

El uso de {% data variables.product.prodname_codespaces %} en el explorador proporciona una experiencia de desarrollo completa. Puedes editar código, depurar, usar comandos de Git y ejecutar la aplicación.

![Captura de pantalla anotada de un codespace en el explorador](/assets/images/help/codespaces/codespace-overview-annotated.png)

{% data reusables.codespaces.vscode-interface-annotation %} {% data reusables.codespaces.use-chrome %} Para obtener más información, consulta "[Solución de problemas de clientes de {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)".
{% data reusables.codespaces.developing-in-vscode %} {% data reusables.codespaces.navigating-to-a-codespace %}

{% endwebui %}

{% vscode %}

Las pestañas de este artículo te permiten cambiar de información para cada una de estas formas de trabajo. Actualmente estás en la pestaña de {% data variables.product.prodname_vscode %}.

## Trabajo en un codespace en {% data variables.product.prodname_vscode_shortname %}

{% data variables.product.prodname_github_codespaces %} te proporciona la experiencia completa de desarrollo de {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.use-visual-studio-features %}

![Captura de pantalla anotada de un codespace en VS Code](/assets/images/help/codespaces/codespace-annotated-vscode.png)

{% data reusables.codespaces.vscode-interface-annotation %}

Para obtener más información sobre el uso de {% data variables.product.prodname_vscode_shortname %}, consulta la [guía de la interfaz de usuario](https://code.visualstudio.com/docs/getstarted/userinterface) en la documentación de {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.connect-to-codespace-from-vscode %} 

Para obtener información de solución de problemas, consulta "[Solución de problemas de clientes de codespaces](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)".
{% data reusables.codespaces.developing-in-vscode %} {% data reusables.codespaces.navigating-to-a-codespace %}

{% endvscode %}

{% jetbrains %}

Las pestañas de este artículo te permiten cambiar de información para cada una de estas formas de trabajo. Actualmente estás en la pestaña de los IDE de JetBrains.

## Trabajo en un codespace en un IDE de JetBrains

Para usar {% data variables.product.prodname_github_codespaces %} con un IDE de JetBrains, debes tener ya instalada la puerta de enlace de JetBrains. Para obtener información sobre cómo instalar JetBrains Gateway, consulta [el sitio web de JetBrains](https://www.jetbrains.com/remote-development/gateway/).

Puedes trabajar en un codespace mediante el IDE de JetBrains que prefieras. Después de crear un codespace, puedes usar la aplicación puerta de enlace de JetBrains para abrir el codespace en el IDE que prefieras.

Puedes editar código, depurar y usar comandos de Git mientras desarrollas en un codespace con la IDE de JetBrains. Para obtener más información sobre los distintos IDE de JetBrains, consulta la [documentación de JetBrains](https://www.jetbrains.com/help/).

### Interfaz de usuario de IntelliJ IDEA

En la documentación de {% data variables.product.prodname_github_codespaces %}, usamos IntelliJ IDEA como un IDE de JetBrains representativo. Los diferentes IDE de JetBrains pueden tener diseños diferentes.

![Captura de pantalla anotada de un codespace en JetBrains IntelliJ IDEA](/assets/images/help/codespaces/jetbrains-gui-with-callouts.png)

1. **Barra de navegación**: muestra la ruta de acceso al archivo o directorio seleccionado actualmente. Usa los botones situados a la derecha de la barra de navegación para realizar diversas acciones, como compilar, ejecutar o depurar el proyecto, o ejecutar comandos de Git para confirmar e insertar los cambios.
2. **Ventana de herramientas del proyecto**: muestra la estructura del proyecto y permite abrir archivos en el editor.
3. **Ventana de herramientas de {% data variables.product.prodname_github_codespaces %}** : se muestra al hacer clic en el complemento de {% data variables.product.prodname_github_codespaces %} de la barra a la izquierda de la ventana de herramientas. Muestra información sobre el codespace, incluido su nombre para mostrar y el tipo de equipo. Los botones de la parte superior de esta ventana de herramientas permiten:
   * Detener el codespace y desconectarse
   * Mostrar la página web "Tus codespaces"
   * Ver los registros de creación de codespaces
   * Recompilar el contenedor de desarrollo
4. **Editor**: aquí es donde editas tus archivos. Puedes hacer clic con el botón derecho en la pestaña de un archivo para acceder a opciones como mover la pestaña a una nueva ventana.
5. **Terminal**: se muestra al hacer clic en **Terminal** en la barra de la ventana de herramientas de la parte inferior de la ventana principal (encima de la barra de estado). El terminal integrado permite realizar tareas de línea de comandos sin tener que cambiar a una aplicación de terminal dedicada.
6. **Barra de estado**: mantén el puntero sobre el icono situado a la izquierda de la barra de estado para ver una lista de herramientas. Haz clic en el icono para ocultar o mostrar las barras de la ventana de herramientas. En el lado derecho de la barra de estado se muestra información sobre el proyecto, incluida la rama de Git actual.

Para obtener más información sobre la interfaz de usuario de IntelliJ IDEA, consulta la [documentación de JetBrains para IntelliJ IDEA](https://www.jetbrains.com/help/idea/guided-tour-around-the-user-interface.html).

### Personalización de los codespaces para un repositorio

Puedes personalizar los codespaces creados para un repositorio mediante la creación o actualización de la configuración del contenedor de desarrollo para el repositorio. Puedes hacerlo desde un codespace. Después de cambiar una configuración de contenedor de desarrollo, puedes aplicar los cambios en el codespace actual si recompilas el contenedor de Docker para el codespace. Para obtener más información, consulte "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

### Personalizar tu codespace

Puedes usar un repositorio [dotfiles](https://dotfiles.github.io/tutorials/) para personalizar aspectos del entorno de codespace para cualquier codespace que crees. Para más información, consulta "[Personalización de {% data variables.product.prodname_github_codespaces %} para la cuenta](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)".

### Configramr tus cambios

Después de hacer cambios en el codespace, ya sea introducir código nuevo o cambiar la configuración, tendrás que confirmar y enviar los cambios. Enviar los cambios al repositorio garantiza que cualquiera que cree un codespace desde este repositorio tendrá la misma configuración. Esto también significa que cualquier personalización que hagas para modificar la configuración de los codespaces creados para un repositorio estará disponible para todos los usuarios que usen el repositorio.

Para más información, vea "[Uso del control de código fuente en el codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#committing-your-changes)".

## Información adicional

* "[Uso de {% data variables.product.prodname_github_codespaces %} en el IDE de JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)"
* "[Uso del complemento de {% data variables.product.prodname_github_codespaces %} para JetBrains](/codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains)"
* "[Solución de problemas de clientes de {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)"

{% endjetbrains %}

{% cli %}

Las pestañas de este artículo te permiten cambiar de información para cada una de estas formas de trabajo. Actualmente estás en la pestaña de {% data variables.product.prodname_cli %}.

## Trabajo en un codespace en un shell de comandos

{% data reusables.cli.cli-learn-more %}

Puedes usar {% data variables.product.prodname_cli %} para crear un codespace o iniciar uno existente y, luego, conectarte mediante SSH a él. Una vez que te hayas conectado, puedes trabajar en la línea de comandos con tus herramientas de línea de comandos preferidas.

Después de instalar la {% data variables.product.prodname_cli %} y autenticarte con tu cuenta de {% data variables.product.prodname_dotcom %}, puedes usar el comando `gh codespace [<SUBCOMMAND>...] --help` para examinar la información de ayuda. Como alternativa, puedes ver la misma información de referencia en [https://cli.github.com/manual/gh_codespace](https://cli.github.com/manual/gh_codespace).

Para obtener más información, consulta "[Uso de {% data variables.product.prodname_github_codespaces %} con la CLI de GitHub](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)".

{% endcli %}
