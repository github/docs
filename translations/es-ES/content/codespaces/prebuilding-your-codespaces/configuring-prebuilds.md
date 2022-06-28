---
title: Configurar las precompilaciones
shortTitle: Configurar las precompilaciones
intro: Puedes configurar tu proyecto para que pre-configure un codespace automáticamente cada que subes un cambio a tu repositorio.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with admin access to a repository can configure prebuilds for the repository.
---

Puedes ajustar una configuración de precompilación para una rama específica de tu repositorio.

Habitualmente, a cualquier rama que se cree de una rama base con precompilación habilitada habitualmente también se le asignará una precompilación durante la creación del codespace. Esto es cierto si el contenedor dev en la rama es el mismo que en la rama base. Esto es porque la mayoría de las configuraciones de precompilación de las ramas con la misma configuración de contenedor dev son idénticas, así que los desarrolladores también pueden beneficiarse de tener tiempos más rápidos de creación de codespaces en dichas ramas. Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

Habitualmente, cuando configuras las precompilaciones de una rama, estas estarán disponibles para los tipos de máquina de {% data variables.product.prodname_codespaces %} para dicha rama. Sin embargo, si tu repositorio es mayor a 32 GB, las precompilaciones no estarán disponibles para los tipos de máquina de 2 y 4 núcleos, ya que el almacenamiento que estos proporcionan se limita a 32 GB.

{% data reusables.codespaces.prebuilds-not-available %}

## Prerrequisitos

Antes de que configures las precompilaciones para tu proyecto, se debe cumplir con lo siguiente:
* Se deben habilitar los {% data variables.product.prodname_github_codespaces %} para tu organización. Para obtener más información, consulta la sección "[Habilitar los {% data variables.product.prodname_codespaces %} para tu organización](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)".
* {% data variables.product.prodname_actions %} debe estar habilitado para tu repositorio. Cada configuración de precompilación necesita poder activar un flujo de trabajo de acciones asociado. Para obtener más información, consulta la sección "[Administrar la configuración de {% data variables.product.prodname_actions %} en un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)".

## Configurar una precompilación

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. En la sección de "Automatización & código" de la barra lateral, haz clic en **{% octicon "codespaces" aria-label="The Codespaces icon" %} {% data variables.product.prodname_codespaces %}**.
1. Debajo de "Configuración de precompilación", haz clic en **Configurar precompilación**.

   ![El botón de 'Configurar precompilaciones'](/assets/images/help/codespaces/prebuilds-set-up.png)

1. Elige la rama para la cual quieres configurar una precompilación.

   ![El menú desplegable la rama](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %}

   **Nota**: Cualquier rama que se cree de una rama base habilitada para precompilaciones también obtendrá precompilaciones habitualmente. Por ejemplo, si habilitas las precompilaciones para la rama predeterminada del repositorio, las ramas que se basen en la predeterminada, en la mayoría de los casos, también obtendrán precompilaciones.

   {% endnote %}

1. Elige cómo quieres activar automáticamente las actualizaciones de la plantilla de precompilación.

   * **Cada subida** (el ajuste predeterminado) - Con este ajuste, las configuraciones de precompilación se actualizarán en cada subida que se haga a la rama predeterminada. Esto garantizará que los codespaces que se generen de una plantilla de precompilación siempre contengan la configuración de codespace más reciente, incluyendo cualquier dependencia que se haya actualizado o agregado recientemente.
   * **En el cambio de configuración** - Con este ajuste, as configuraciones de precompilación se actualizarán cada que lo hagan los archivos de configuración asociados para cada repositorio y rama en cuestión. Esto garantiza que los cambios a los archivos de configuración del contenedor dev para el repositorio se utilicen cuando se genera un codespace desde una plantilla de precompilación. El flujo de trabajo de acciones que actualiza la plantilla de precompilación se ejecutará con menor frecuencia, así que esta opción utilizará menos minutos de las acciones. Sin embargo, esta opción no garantiza que los cdespaces siempre incluyan dependencias recientemente actualizadas o agregadas, así que estas podrían tener que agregarse o actualizarse manualmente después de que un codespace se haya creado.
   * **Programado** - Con este ajuste, puedes hacer que tus configuraciones de precompilación se actualicen en un itinerario personalizado que tú defines. This can reduce consumption of Actions minutes, however, with this option, codespaces may be created that do not use the latest dev container configuration changes.

   ![Las opciones de activación de precompilación](/assets/images/help/codespaces/prebuilds-triggers.png)

1. Select **Reduce prebuild available to only specific regions** to limit access to your prebuilt image, then select which regions you want it available in. Developers can only create codespaces from a prebuild if they are located in a region you select. By default, your prebuilt image is available to all regions where codespaces is available and storage costs apply for each region.

   ![Las opciones de selección de región](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **Notas**:
   * La plantilla de precompilación para cada región incurrirá en cargos individuales. Por lo tanto, solo deberías habilitar las precompilaciones para las regiones en las que sabes que se utilizarán. Para obtener más información, consulta la sección "[Acerca de las precompilaciones de {% data variables.product.prodname_codespaces %}](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)".
   * Los desarrolladores pueden configurar su región predeterminada para {% data variables.product.prodname_codespaces %}, lo que te puede permitir habilitar las precompilaciones para menos regiones. Para obtener más información, consulta la sección "[Configurar tu región predeterminada para {% data variables.product.prodname_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-codespaces)".

   {% endnote %}

1. Set the number of prebuild template versions to be retained. You can input any number between 1 and 5. The default number of saved versions is 2, which means that only the latest template version and the previous version are saved.

   Depending on your prebuild trigger settings, your prebuild template could change with each push or on each dev container configuration change. Retaining older versions of prebuild templates enables you to create a prebuild from an older commit with a different dev container configuration than the current prebuild template. Since there is a storage cost associated with retaining prebuild template versions, you can choose the number of versions to be retained based on the needs of your team. For more information on billing, see "[About billing for {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)."

   If you set the number of prebuild template versions to save to 1, {% data variables.product.prodname_codespaces %} will only save the latest version of the prebuild template and will delete the older version each time the template is updated. This means you will not get a prebuilt codespace if you go back to an older dev container configuration.

   ![The prebuild template history setting](/assets/images/help/codespaces/prebuilds-template-history-setting.png)

1. Add users or teams to notify when the prebuild workflow run fails for this configuration. You can begin typing a username, team name, or full name, then click the name once it appears to add them to the list. The users or teams you add will receive an email when prebuild failures occur, containing a link to the workflow run logs to help with further investigation.

   ![The prebuild failure notification setting](/assets/images/help/codespaces/prebuilds-failure-notification-setting.png)

1. Da clic en **Crear**.

   La configuración de precompilación se lista en la página de {% data variables.product.prodname_codespaces %} de tus ajustes de repositorio. Un flujo de trabajo de {% data variables.product.prodname_actions %} se pone en cola y luego se ejecuta para crear plantillas de precompilación en la rama que seleccionaste y en las regiones que especificaste.

   {% note %}

   **Nota**: Predeterminadamente, el flujo de trabajo de {% data variables.product.prodname_actions %} para una configuración de precompilación solo puede acceder a los recursos de su propio repositorio. Si tu proyecto utiliza recursos desde fuera del repositorio, necesitarás configurar el secreto `CODESPACES_PREBUILD_TOKEN` para obtener el acceso requerido. Para obtener más información, consulta la sección "[Permitir que una precompilación acceda a los recursos externos](/codespaces/prebuilding-your-codespaces/managing-prebuilds#allowing-a-prebuild-to-access-external-resources)".

   {% endnote %}

## Configurar el acceso a los recursos que no están en el repositorio

Predeterminadamente, el flujo de trabajo de {% data variables.product.prodname_actions %} para una configuración de compilación previa solo puede acceder al contenido de su propio repositorio. Si tu proyecto necesita acceder a recursos internos para compilar el ambiente de desarrollo, necesitarás configurar un token de acceso personal (PAT) con los alcances de acceso adecuados.

Para obtener más información, consulta la sección "[Permitir que una compilación previa acceda a recursos externos](/codespaces/prebuilding-your-codespaces/managing-prebuilds#allowing-a-prebuild-to-access-external-resources)".

## Configurar variables de ambiente

Para permitir que el proceso de precompilación acceda a las variables de ambiente que se requieren para crear tu ambiente de desarrollo, puedes configurarlas ya sea como secretos de repositorio de {% data variables.product.prodname_codespaces %} o como secretos de organización de {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta las secciones "[Agregar secretos para un repositorio](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces#adding-secrets-for-a-repository)" y "[Agregar secretos para una organización](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces#adding-secrets-for-an-organization)".

Las precompilaciones no utilizan ningún secreto a nivel de usuario mientras compilan tu ambiente, porque estos no se agregan sino hasta después de que se haya creado el codespace.

Cualquiera que cree un codespace desde este repositorio podrá acceder a los secretos de {% data variables.product.prodname_codespaces %} que crees de esta forma. Si no quieres esto, como alternativa, puedes configurar el secreto `CODESPACES_PREBUILD_TOKEN`. El secreto `CODESPACES_PREBUILD_TOKEN` solo se utiliza para precompilar y no se puede acceder a su valor en los codespaces de los usuarios. Para obtener más información, consulta la sección "[Permitir que una compilación previa acceda a recursos externos](/codespaces/prebuilding-your-codespaces/managing-prebuilds#allowing-a-prebuild-to-access-external-resources)".

## Configurar tareas que llevan mucho tiempo para que se incluyan en la precompilación

Puedes utilizar los comandos `onCreateCommand` y `updateContentCommand` en tu `devcontainer.json` para incluir los procesos que llevan mucho tiempo como parte de la creación de la plantilla de precompilación. Para obtener más información, consulta la documentación de {% data variables.product.prodname_vscode %} "[referencia de devcontainer.json](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)".

`onCreateCommand` solo se ejecuta una vez, cuando se crea la plantilla de precompilación, mientras que `updateContentCommand` se ejecuta cuando se crea la plantilla y en las actualizaciones de plantilla posteriores. Las compilaciones incrementales deben incluirse en `updateContentCommand`, ya que estas representan el origen de tu proyecto y necesitan incluirse para cada actualización de plantilla de precompilación.

## Leer más

- "[Solucionar problemas de las compilaciones previas](/codespaces/troubleshooting/troubleshooting-prebuilds)"
