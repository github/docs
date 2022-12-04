---
title: Paleta de Comandos de GitHub
intro: 'Utiliza la paleta de comandos en {% data variables.product.product_name %} para navegar, buscar y ejecutar comandos directamente desde tu teclado.'
versions:
  feature: command-palette
shortTitle: GitHub Command Palette
ms.openlocfilehash: 5c6b739f2422be780cef6fa0e44e5d75663cc036
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159057'
---
{% data reusables.command-palette.beta-note %}

## Acerca de la {% data variables.product.prodname_command_palette %}

Puedes navegar, buscar y ejecutar comandos en {% data variables.product.product_name %} con la {% data variables.product.prodname_command_palette %}. La paleta de comandos es una forma popular de mostrar sugerencias con base en el contexto y recursos actuales que hayas utilizado recientemente. Puedes abrir la paleta de comandos con un atajo de teclado desde cualquier parte en {% data variables.product.product_name %}, lo cual te ahorra tiempo y mantiene tus manos en el teclado.

### Navegación rápida

Al abrir la paleta de comandos, las sugerencias están optimizadas para facilitar el acceso desde cualquier lugar de un repositorio, cuenta personal u organización a páginas de nivel superior, como la página Incidencias. Si la ubicación que buscas no está listada, comienza a introducir el nombre o número de la ubicación para refinar las sugerencias.

![Sugerencias de repositorio para la paleta de comandos](/assets/images/help/command-palette/command-palette-navigation-repo-default.png)

### Acceso fácil a los comandos

La capacidad de ejecutar comandos directamente desde tu teclado, sin necesidad de navegar a través de varios menús, podría cambiar la forma en la que utilizas {% data variables.product.prodname_dotcom %}. Por ejemplo, puedes cambiar de tema presionando un par de teclas, lo cual facilita alternar entre estos temas conforme cambien tus necesidades.

![Cambio de tema para la paleta de comandos](/assets/images/help/command-palette/command-palette-command-change-theme.png)

## Apertura de la {% data variables.product.prodname_command_palette %}

Abre la paleta de comandos utilizando uno de los siguientes atajos de teclado predeterminados:
- Windows y Linux: <kbd>Ctrl</kbd>+<kbd>K</kbd> o <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>
- Mac: <kbd>Comando</kbd>+<kbd>K</kbd> o <kbd>Comando</kbd>+<kbd>Opción</kbd>+<kbd>K</kbd>

Puede personalizar los métodos abreviados de teclado que usa para abrir la paleta de comandos en la [sección Accesibilidad](https://github.com/settings/accessibility) de la configuración de usuario. Para más información, vea "[Personalización de los métodos abreviados de teclado de {% data variables.product.prodname_command_palette %}](#customizing-your-github-command-palette-keyboard-shortcuts)".

Al abrir la paleta de comandos, muestra la ubicación en la esquina superior izquierda y la usa como ámbito para las sugerencias (por ejemplo, la organización `mashed-avocado`).

![Lanzamiento de la paleta de comandos](/assets/images/help/command-palette/command-palette-launch.png)

{% note %}

**Notas:**
- Si vas a editar texto de Markdown, abre la paleta de comandos con <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd> (Windows t Linux) o <kbd>Comando</kbd>+<kbd>Opción</kbd>+<kbd>K</kbd> (Mac).{% ifversion projects-v2 %}
- Si trabajas en una instancia de {% data variables.projects.project_v2 %}, en su lugar se muestra una paleta de comandos específica del proyecto. Para más información, consulta "[Personalización de una vista](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)".{% endif %}

{% endnote %}

### Personalizar tus atajos de teclado para la {% data variables.product.prodname_command_palette %}


Los atajos de teclado predeterminados que se utilizan para abrir la paleta de comandos pueden entrar en conflicto con aquellos de tu buscador y SO. Tiene la opción de personalizar los métodos abreviados de teclado en la [sección Accesibilidad](https://github.com/settings/accessibility) de la configuración de la cuenta. En los ajustes de la paleta de comandos, puedes personalizar los ajustes de teclado para abrirla tanto en modo de búsqueda como en modo de comando. 

![Configuración de atajos de teclado para la paleta de comandos](/assets/images/help/command-palette/command-palette-keyboard-shortcut-settings.png)
## Navegar con la {% data variables.product.prodname_command_palette %}

Puedes utilizar la paleta de comandos para navegar a cualquier página a la que tengas acceso en {% data variables.product.product_name %}.

{% data reusables.command-palette.open-palette %}

2. Comienza a teclear la ruta a la cual quieras navegar. Las sugerencias en la paleta de comandos cambian para empatar con tu texto.

   ![Alcance actual de navegación de la paleta de comandos](/assets/images/help/command-palette/command-palette-navigation-current-scope.png)

{% data reusables.command-palette.change-scope %}

   También puedes teclear algunos caracteres para reducir tu búsqueda. Para más información, vea "[Funciones de pulsación de teclas](#keystroke-functions)".

4. Termina de ingresar la ruta o utiliza las flechas del teclado para resaltar la ruta que quieres desde la lista de sugerenicas.

5. Presione <kbd>Entrar</kbd> para saltar a la ubicación elegida. Como alternativa, presione <kbd>Ctrl</kbd>+<kbd>Entrar</kbd> (Windows y Linux) o <kbd>Comando</kbd>+<kbd>Entrar</kbd> (Mac) para abrir la ubicación en una nueva pestaña del explorador.

## Buscar con la {% data variables.product.prodname_command_palette %}

Puedes utilizar la paleta de comandos para buscar lo que sea en {% data variables.location.product_location %}.

{% data reusables.command-palette.open-palette %}

{% data reusables.command-palette.change-scope %}

3. Opcionalmente, utiliza las teclas para encontrar tipos específicos de recursos:

   - <kbd>#</kbd> Búsqueda de incidencias, solicitudes de incorporación de cambios, debates y proyectos
   - <kbd>!</kbd> Búsqueda de proyectos
   - <kbd>@</kbd> Búsqueda de usuarios, organizaciones y repositorios
   - <kbd>/</kbd> Búsqueda de archivos dentro del ámbito de un repositorio

   ![Archivos de búsqueda de la paleta de comandos](/assets/images/help/command-palette/command-palette-search-files.png)

4. Comienza a ingresar tus términos de búsqueda. La paleta de comandos te ofrecerá un rango de búsquedas sugeridas con base en el alcance de tu búsqueda.

   {% tip %}

   También puedes utilizar toda la sintaxis de la búsqueda integrada de {% data variables.product.prodname_dotcom %} dentro de la paleta de comandos. Par más información, vea "[Búsqueda de información sobre {% data variables.product.prodname_dotcom %}](/search-github)".

   {% endtip %}

5. Use las teclas de dirección para resaltar el resultado de la búsqueda que quiera y presione <kbd>Entrar</kbd> para saltar a la ubicación elegida. Como alternativa, presione <kbd>Ctrl</kbd>+<kbd>Entrar</kbd> (Windows y Linux) o <kbd>Comando</kbd>+<kbd>Entrar</kbd> (Mac) para abrir la ubicación en una nueva pestaña del explorador.

## Ejecutar comandos desde la {% data variables.product.prodname_command_palette %}

Puedes utilizar la {% data variables.product.prodname_command_palette %} para ejecutar comandos. Por ejemplo, puedes crear un repositorio o propuesta nuevos o cambiar tu tema. Cuando ejecutas un comando, la ubicación de su acción se determina ya sea por la página subyacente o por el alcance que se muestra en la paleta de comandos.

- Los comandos de solicitudes de cambios y propuestas siempre se ejecutan en la página subyacente.
- Los comandos de nivel superior, por ejemplo los de repositorio, se ejecutan en el alcance que se muestra en la paleta de comandos.

Para obtener una lista completa de los comandos admitidos, vea "[Referencia de {% data variables.product.prodname_command_palette %}](#github-command-palette-reference)".

1. Los métodos abreviados de teclado predeterminados para abrir la paleta de comandos en modo de comandos son <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>K</kbd> (Windows y Linux) o <kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>K</kbd> (Mac). Si ya ha abierto la paleta de comandos, presione <kbd>></kbd> para cambiar al modo de comandos. {% data variables.product.prodname_dotcom %} sugiere comandos con base en tu ubicación.

   ![Modo de comandos de la paleta de comandos](/assets/images/help/command-palette/command-palette-command-mode.png)

{% data reusables.command-palette.change-scope %}

3. Si no se muestra el comando que quieres, verifica tu alcance y luego comienza a ingresar el nombre del comando en la caja de texto.

4. Use las teclas de dirección para resaltar el comando que quiera y presione <kbd>Entrar</kbd> para ejecutarlo.


## Cerrar la paleta de comandos

Cuando la paleta de comandos está activa, puedes utilizar uno de los siguientes atajos de teclado para cerrarla:

- Modo de búsqueda y navegación: <kbd>Esc</kbd> o <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows y Linux)  <kbd>Comando</kbd>+<kbd>K</kbd> (Mac)
- Modo de comandos: <kbd>Esc</kbd> o <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>K</kbd> (Windows y Linux)  <kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>K</kbd> (Mac)

Si personalizaste los atajos de teclado para la paleta de comandos en los ajustes de accesibilidad, tus atajos personalizados se utilizarán tanto para abrirla como para cerrarla.  

## Referencia de la {% data variables.product.prodname_command_palette %}

### Funciones de las teclas

Estas teclas están disponibles cuando la paleta de comandos se encuentra en los modos de búsqueda y navegación, es decir, no están disponibles en el modo de comandos.

| Pulsación de tecla | Función |
| :- | :- |
|<kbd>></kbd>| Modo de ingreso de comandos. Para más información, vea "[Ejecución de comandos desde {% data variables.product.prodname_command_palette %}](#running-commands-from-the-github-command-palette)". |
|<kbd>#</kbd>| Busca propuestas, solicitudes de cambio, debates y proyectos. Para más información, vea "[Búsqueda con {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)".|
|<kbd>@</kbd>| Busca usuarios, organizaciones y repositorios. Para más información, vea "[Búsqueda con {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)".|
|<kbd>/</kbd>| Busca archivos dentro del alcance de un repositorio o repositorios dentro del alcance de una organización. Para más información, vea "[Búsqueda con {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)". |
|<kbd>!</kbd>| Busca solo proyectos. Para más información, vea "[Búsqueda con {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)".|
|<kbd>Ctrl</kbd>+<kbd>C</kbd> o <kbd>Comando</kbd>+<kbd>C</kbd>| Copia al portapapeles la URL de navegación o de búsqueda para el resultado resaltado.|
|<kbd>Entrar</kbd>| Salta al resultado resaltado o ejecuta el comando resaltado.|
|<kbd>Ctrl</kbd>+<kbd>Entrar</kbd> o <kbd>Comando</kbd>+<kbd>Entrar</kbd>| Abre la búsqueda resaltada o resultado de navegación en una pestaña nueva del buscador.|
|<kbd>?</kbd>| Muestra la ayuda dentro de la paleta de comandos.|

### Comandos globales

Estos comandos se encuentran disponibles en todos los alcances.

| Get-Help | Comportamiento|
| :- | :- | :- |
|`Import repository`|Crea un repositorio nuevo importando un proyecto desde otro sistema de control de versiones. Para más información, vea "[Importación de un repositorio con el importador de GitHub](/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer)".  |
|`New gist`|Abre un gist nuevo. Para más información, vea "[Creación de un gist](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)". |
|`New organization`|Crea una organización nueva. Para más información, vea "[Creación de una organización desde cero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)". |
|`New project`|Crea un tablero de proyecto nuevo. Para más información, vea "[Creación de un proyecto](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)".  |
|`New repository`|Crea un repositorio nuevo desde cero. Para más información, vea "[Creación de un repositorio](/repositories/creating-and-managing-repositories/creating-a-new-repository)". |
|`Switch theme to <theme name>`|Cambia directamente a un tema diferente para la IU. Para más información, vea "[Administración de la configuración de temas](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings)". |


### Comandos de organización

Estos comandos se encuentran disponibles únicamente dentro del alcance de una organización.

| Get-Help | Comportamiento|
| :- | :- |
| `New team`| Crea un equipo nuevo en la organización actual. Para más información, vea "[Creación de un equipo](/organizations/organizing-members-into-teams/creating-a-team)".

### Comandos de repositorio

La mayoría de estos comandos se encuentran disponibles únicamente en la página principal del repositorio. Si un comando también está disponible en otras páginas, esto se nota en la columna de comportamiento.

| Get-Help | Comportamiento|
| :- | :- |
|`Clone repository: <URL type>`|Copia al portapapeles la URL que necesitas para clonar el repositorio utilizando el {% data variables.product.prodname_cli %}, HTTPS o SSH. Para más información, vea "[Clonación de un repositorio](/repositories/creating-and-managing-repositories/cloning-a-repository)".|
|`New discussion`|Crea un debate nuevo en el repositorio. Para más información, vea "[Creación de un debate](/discussions/quickstart#creating-a-new-discussion)".|
|`New file`|Crea un archivo nuevo desde cualquier página en el repositorio. Para más información, vea "[Adición de un archivo a un repositorio](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)".
|`New issue`|Abre una propuesta nueva desde cualquier página en el repositorio. Para más información, vea "[Creación de una incidencia](/issues/tracking-your-work-with-issues/creating-an-issue)".|
|`Open in new codespace`|Crea y abre un codespace para este repositorio. Para obtener más información, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)".|
|`Open in github.dev editor`|Abre el repositorio actual en el editor github.dev. Para más información, vea "[Apertura del editor basado en web](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)".|

### Comandos de archivo

Estos comandos se encuentran disponibles únicamente cuando abres la paleta de comandos desde un archivo en un repositorio.

| Get-Help | Comportamiento|
| :- | :- |
|`Copy permalink`|Crea un enlace al archivo que incluye el SHA de la confirmación actual y copia el enlace al portapapeles. Para más información, vea "[Obtención de vínculos permanentes en archivos](/repositories/working-with-files/using-files/getting-permanent-links-to-files#press-y-to-permalink-to-a-file-in-a-specific-commit)".
|`Open in github.dev editor`|Abre el archivo que se muestra actualmente en el editor github.dev. Para más información, vea "[Apertura del editor basado en web](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)".|

### Comandos de debate

Estos comandos se encuentran disponibles únicamente cuando abres la paleta de comandos desde un debate. Estos actúan en tu página actual y no se ven afectados por el alcance que se configuró en la paleta de comandos.

| Get-Help | Comportamiento|
| :- | :- |
|`Delete discussion...`|Borra el debate permanentemente. Para obtener más información, consulta "[Administración de debates](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion)".
|`Edit discussion body`|Abre el cuerpo principal del debate listo para editar.
|`Subscribe`/`unsubscribe`|Decide ingresar o salir de las notificaciones para adiciones al debate. Para más información, vea "[Acerca de las notificaciones](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)".
|`Transfer discussion...`|Mueve el debate a un repositorio distinto. Para obtener más información, consulta "[Administración de debates](/discussions/managing-discussions-for-your-community/managing-discussions#transferring-a-discussion)".

### Comandos de propuesta

Estos comandos se encuentran disponibles únicamente cuando abres la paleta de comandos desde una propuesta. Estos actúan en tu página actual y no se ven afectados por el alcance que se configuró en la paleta de comandos.

| Get-Help | Comportamiento|
| :- | :- |
|`Close`/`reopen issue`|Cierra o vuelve a abrir la propuesta actual. Para más información, vea "[Acerca de las incidencias](/issues/tracking-your-work-with-issues/about-issues)".|
|`Convert issue to discussion...`|Convierte la propuesta actual en un debate. Para más información, vea "[Moderación de debates](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)".
|`Delete issue...`|Borra la propuesta actual. Para más información, vea "[Eliminación de una incidencia](/issues/tracking-your-work-with-issues/deleting-an-issue)".|
|`Edit issue body`|Abre el cuerpo principal de la propuesta listo para su edición.
|`Edit issue title`|Abre el título de la propuesta listo para su edición.
|`Lock issue`|Limita los comentarios nuevos a los usuarios con acceso de escritura en el repositorio. Para más información, vea "[Bloqueo de conversaciones](/communities/moderating-comments-and-conversations/locking-conversations)".
|`Pin`/`unpin issue`|Cambia entre si la propuesta se muestra en la sección de propuestas fijadas del repositorio o no. Para más información, vea "[Anclaje de una incidencia al repositorio](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)".|
|`Subscribe`/`unsubscribe`|Decide recibir o no recibir notificaciones para los cambios a esta propuesta. Para más información, vea "[Acerca de las notificaciones](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)".
|`Transfer issue...`|Transfiere la propuesta a otro repositorio. Para más información, vea "[Transferencia de una incidencia a otro repositorio](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)".|

### Comandos de las solicitudes de cambios

Estos comandos están disponibles únicamente cuando abres la paleta de comandos desde una solicitud de cambios. Estos actúan en tu página actual y no se ven afectados por el alcance que se configuró en la paleta de comandos.

| Get-Help | Comportamiento|
| :- | :- |
|`Close`/`reopen pull request`|Cierra o vuelve a abrir la solicitud de cambios actual. Para más información, vea "[Acerca de las solicitudes de incorporación de cambios](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".|
|`Convert to draft`/`Mark pull request as ready for review`|Cambia el estado de la solicitud de cambios para mostrarla como lista, o no lista, para su revisión. Para más información, vea "[Cambio del estado de una solicitud de incorporación de cambios](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)".|
|`Copy current branch name`| Agrega al portapapeles el nombre de la rama de encabezado para la solicitud de cambios.
|`Edit pull request body`|Abre el cuerpo principal de la solicitud de cambios, listo para su edición.
|`Edit pull request title`|Abre el título de la solicitud de cambios, listo para su edición.
|`Open in new codespace`|Crea y abre un codespace par ala rama de encabezado de la solicitud de cambios. Para obtener más información, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)".
|`Subscribe`/`unsubscribe`|Decide recibir o no recibir notificaciones para los cambios a esta solicitud de cambios. Para más información, vea "[Acerca de las notificaciones](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)".
|`Update current branch`|Actualiza la rama de encabezado de la solicitud de cambios con los cambios a la rama base. Esto está disponible únicamente para las solicitudes de cambios que apuntan a la rama predeterminada del repositorio. Para más información, vea "[Acerca de las ramas](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)".|
