---
title: Utilizar el control de código fuente en tu codespace
intro: 'Después de hacer cambios en un archivo de tu codespace, puedes confirmar los cambios rápidamente y subir tu actualización al repositorio remoto.'
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

{% data reusables.codespaces.release-stage %}

### Acerca del control de código fuente en {% data variables.product.prodname_codespaces %}

Puedes llevar a cabo todas las acciones de Git que necesites directamente dentro de tu codespace. Por ejemplo, puedes recuperar cambios del repositorio remoto, cambiar de rama, crear una rama nueva, confirmar y subir cambios y crear solicitudes de cambios. Puedes utilizar la terminal integrada dentro de tu codespace para ingresar comandos de Git o puedes hacer clic en los iconos u opciones de menú para completar las tareas más comunes de Git. Esta guía te explica cómo utilizar la interface de usuario gráfica para el control de código fuente.

El control de fuentes en {% data variables.product.prodname_github_codespaces %} utiliza el mismo flujo de trabajo que {% data variables.product.prodname_vscode %}. Para obtener más información, consulta la sección de la documentación de {% data variables.product.prodname_vscode %} "[Utilizar el control de versiones en VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)".

Un flujo de trabajo típico para actualizar un archivo utilizando {% data variables.product.prodname_github_codespaces %} sería:

* Desde la rama predeterminada de tu repositorio en {% data variables.product.prodname_dotcom %}, crea un codespace. Consulta la sección "[Crear un codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".
* En tu codespace, crea una rama nueva para trabajar en ella.
* Haz tus cambios y guárdalos.
* Confirma el cambio.
* Levanta una solicitud de cambios.

### Crear o cambiar de rama

1. Si la rama actual no se muestra en la barra de estado, en la parte inferior de tu codespace, haz clic derecho en la barra de estado y selecciona **Control de código fuente**.
1. Haz clic en el nombre de rama en la barra de estado. ![La rama en la barra de estado](/assets/images/help/codespaces/branch-in-status-bar.png)
1. En el menú desplegable, haz clic en la rama a la que quieras cambiar o ingresa el nombre de una rama nueva y haz clic en **Crear rama nueva**. ![Elige del menú de la rama](/assets/images/help/codespaces/create-new-branch.png)

{% tip %}

**Tip**: Si alguien cambió un archivo en el repositorio remoto, en la rama a la cual te cambiaste, no verás estos cambios hasta que los extraigas hacia tu codespace.

{% endtip %}

### Extraer cambios del repositorio remoto

Puedes extraer cambios del repositorio remoto hacia tu codespace en cualquier momento.

{% data reusables.codespaces.source-control-display-dark %}
1. En la parte superior de la barra lateral, haz clic en los puntos suspensivos (**...**). ![Botón de puntos suspensivos para las acciones de "más" y "ver"](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. En el menú desplegable, haz clic en **Extraer**.

Si algún contenedor dev cambió desde que creaste el codespace, puedes aplicar los cambios si recompilas el contenedor para el codespace. Para obtener más información, consulta la sección "[Configurar Codespaces para tu proyecto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)".

### Configurar tu codespace para que recupere los cambios nuevos automáticamente

Puedes configurar tu codespace para que recupere automáticamente los detalles de cualquier confirmación nueva que se haya hecho al repositorio remoto. Esto te permite ver si tu copia local del repositorio está desactualizada, en cuyo caso, podrías elegir extraer los cambios nuevos.

Si la operación de búsqueda detecta cambios nuevos en el repositorio remoto, verás la cantidad de confirmaciones nuevas en la barra de estado. Luego podrás extraer los cambios en tu copia local.

1. Haz clic en el botón de **Administrar** en la parte inferior de la barra de actividad. ![Botón de administrar](/assets/images/help/codespaces/manage-button.png)
1. En el menú, haz clic en **Ajustes**.
1. En la página de ajustes, busca: `autofetch`. ![Buscar la recuperación automática](/assets/images/help/codespaces/autofetch-search.png)
1. Para recuperar los detalles de las actualizaciones para todos los remotos registrados para el repositorio actual, configura **Git: Autofetch** en `all`. ![Habilitar la recuperación automática en Git](/assets/images/help/codespaces/autofetch-all.png)
1. Si quieres cambiar la cantidad de segundos entre cada recuperación automática, edita el valor de **Git: Autofetch Period**.

### Configramr tus cambios

{% data reusables.codespaces.source-control-display-dark %}
1. Para probar tus cambios, haz clic en **+** junto al archivo que cambiaste o junto a **Cambios** si cambiaste archivos múltiples y quieres probarlos todos. ![Barra lateral de control de código fuente con el botón de preparación resaltado](/assets/images/help/codespaces/codespaces-commit-stage.png)
1. Teclea un mensaje de confirmación que describa el cambio que hiciste. ![Barra de control de código fuente con un mensaje de confirmación](/assets/images/help/codespaces/codespaces-commit-commit-message.png)
1. Para confirmar tus cambios planeados, haz clic en la marca de verificación en la parte superior de la barra lateral del control de código fuente. ![Haz clic en el icono de verificación](/assets/images/help/codespaces/codespaces-commit-checkmark-icon.png)

### Levantar una solicitud de cambios

1. Después de haber confirmado los cambios en tu copia local del repositorio, haz clic en el icono de **Crear solicitud de cambios**. ![Barra lateral de control de código fuente con el botón de preparación resaltado](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. Verifica que el repositorio y la rama local desde la que estás haciendo la fusión y la rama y repositorio remotos hacia los que estés haciendo la fusión sean correctos. Después, asigna un nombre y descripción a la solicitud de cambios. ![Barra lateral de control de código fuente con el botón de preparación resaltado](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. Da clic en **Crear**.

### Subir cambios a tu repositorio remoto

Puedes subir los cambios que has hecho. Esto aplica a aquellos de la rama ascendente en el repositorio remoto. Puede que necesites hacer eso si aún no estás listo para crear una solicitud de cambios o si prefieres crearla en {% data variables.product.prodname_dotcom %}.

1. En la parte superior de la barra lateral, haz clic en los puntos suspensivos (**...**). ![Botón de puntos suspensivos para las acciones de "más" y "ver"](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. En el menú desplegable, haz clic en **Subir**.
