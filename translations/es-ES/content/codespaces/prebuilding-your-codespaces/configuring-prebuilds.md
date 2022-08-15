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

Puedes configurar una configuración de precompilación para la combinación de una rama específica de tu repositorio con un archivo de configuración de un contenedor dev específico.

Cualquier rama que se cree desde una rama padre con precompilación habilitada habitualmente también obtendrá precompilaciones para la misma configuración de contenedor dev. This is because the prebuild for child branches that use the same dev container configuration as the parent branch are, for the most part, identical, so developers can benefit from faster codespace creation times on those branches also. Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

Habitualmente, cuando configuras precompilaciones para una rama, estas estarán disponibles para múltiples tipos de máquina. Sin embargo, si tu repositorio es mayor a 32 GB, las precompilaciones no estarán disponibles para los tipos de máquina de 2 y 4 núcleos, ya que el almacenamiento que estos proporcionan se limita a 32 GB.

## Prerrequisitos

Antes de que configures las precompilaciones para tu proyecto, se debe cumplir con lo siguiente:
* Se deben habilitar los {% data variables.product.prodname_github_codespaces %} para tu organización. Para obtener más información, consulta la sección "[Habilitar los {% data variables.product.prodname_github_codespaces %} para tu organización](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)".
* {% data variables.product.prodname_actions %} debe estar habilitado para tu repositorio. Cada configuración de precompilación necesita poder activar un flujo de trabajo de acciones asociado. Para obtener más información, consulta la sección "[Administrar la configuración de {% data variables.product.prodname_actions %} en un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)".

## Configurar una precompilación

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. En la sección de "Automatización & código" de la barra lateral, haz clic en **{% octicon "codespaces" aria-label="The Codespaces icon" %} {% data variables.product.prodname_codespaces %}**.
1. En la sección de "Configuración de precompilación" de la página, haz clic en **Configurar una precompilación**.

   ![El botón de 'Configurar precompilaciones'](/assets/images/help/codespaces/prebuilds-set-up.png)

1. Elige la rama para la cual quieres configurar una precompilación.

   ![El menú desplegable de la rama](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %}

   **Note**: Any branches created from a prebuild-enabled base branch will typically also get prebuilds for the same dev container configuration. For example, if you enable prebuilds for a dev container configuration file on the default branch of the repository, branches based on the default branch will, in most cases, also get prebuilds for the same dev container configuration.

   {% endnote %}

1. Optionally, in the **Configuration file** drop-down menu that's displayed, choose the `devcontainer.json` configuration file that you want to use for this prebuild. Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)."

   ![The configuration file drop-down menu](/assets/images/help/codespaces/prebuilds-choose-configfile.png)

1. Choose how you want to automatically trigger updates of the prebuild.

   * **Cada subida** (el ajuste predeterminado) - Con este ajuste, las configuraciones de precompilación se actualizarán en cada subida que se haga a la rama predeterminada. This will ensure that codespaces generated from a prebuild always contain the latest codespace configuration, including any recently added or updated dependencies.
   * **En el cambio de configuración** - Con este ajuste, as configuraciones de precompilación se actualizarán cada que lo hagan los archivos de configuración asociados para cada repositorio y rama en cuestión. This ensures that changes to the dev container configuration files for the repository are used when a codespace is generated from a prebuild. The Actions workflow that updates the prebuild will run less often, so this option will use fewer Actions minutes. Sin embargo, esta opción no garantiza que los cdespaces siempre incluyan dependencias recientemente actualizadas o agregadas, así que estas podrían tener que agregarse o actualizarse manualmente después de que un codespace se haya creado.
   * **Programado** - Con este ajuste, puedes hacer que tus configuraciones de precompilación se actualicen en un itinerario personalizado que tú defines. Esto puede reducir el consumo de minutos de acciones, sin embargo, con esta opción, pueden crearse codespaces que no utilicen los últimos cambios de configuración de contenedores dev.

   ![Las opciones de activación de precompilación](/assets/images/help/codespaces/prebuilds-triggers.png)

1. Optionally, select **Reduce prebuild available to only specific regions** to limit access to your prebuild, then select which regions you want it to be available in. Los desarrolladores solo pueden crear condespaces desde una precompilación si estos se ubican en una región que selecciones. By default, your prebuild is available to all regions where codespaces is available and storage costs apply for each region.

   ![Las opciones de selección de región](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **Notas**:
   * The prebuild for each region will incur individual charges. Por lo tanto, solo deberías habilitar las precompilaciones para las regiones en las que sabes que se utilizarán. Para obtener más información, consulta la sección "[Acerca de las precompilaciones de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)".
   * Los desarrolladores pueden configurar su región predeterminada para {% data variables.product.prodname_codespaces %}, lo que te puede permitir habilitar las precompilaciones para menos regiones. Para obtener más información, consulta la sección "[Configurar tu región predeterminada para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)".

   {% endnote %}

1. Optionally, set the number of prebuild versions to be retained. Puedes ingresar cualquier número entre 1 y 5. La cantidad predeterminada de versiones guardadas es de 2, lo que significa que solo la versión de plantilla más reciente y la versión previa se guardan.

   Depending on your prebuild trigger settings, your prebuild could change with each push or on each dev container configuration change. Retaining older versions of prebuilds enables you to create a prebuild from an older commit with a different dev container configuration than the current prebuild. Since there is a storage cost associated with retaining prebuild versions, you can choose the number of versions to be retained based on the needs of your team. Para obtener más información sobre la facturación, consulta la sección "[Acerca de la facturación para los {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

   If you set the number of prebuild versions to save to 1, {% data variables.product.prodname_codespaces %} will only save the latest version of the prebuild and will delete the older version each time the template is updated. Esto significa que no obtendrás un codespace precompilado si regresas a una configuración de contenedor dev antigua.

   ![The prebuild history setting](/assets/images/help/codespaces/prebuilds-template-history-setting.png)

1. Optionally, add users or teams to notify when the prebuild workflow run fails for this configuration. Puedes comenzar a escribir un nombre de usuario, de equipo o nombre completo y luego hacer clic en el nombre una vez que aparezca para agregarlos a la lista. Los usuarios o equipos que agregues recibirán un correo electrónico cuando ocurran fallas en la precompilación, los cuales contienen un enlace a las bitácoras de ejecución de flujo de trabajo para ayudar con las investigaciones subsecuentes.

   ![El ajuste de notificación de falla de precompilación](/assets/images/help/codespaces/prebuilds-failure-notification-setting.png)

1. Da clic en **Crear**.

   {% data reusables.codespaces.prebuilds-permission-authorization %}

After you create a prebuild configuration it is listed on the {% data variables.product.prodname_codespaces %} page of your repository settings. A {% data variables.product.prodname_actions %} workflow is queued and then run to create prebuilds in the regions you specified, based on the branch and dev container configuration file you selected.

![Screenshot of the list of prebuild configurations](/assets/images/help/codespaces/prebuild-configs-list.png)

For information about editing and deleting prebuild configurations, see "[Managing prebuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds)."

## Configurar variables de ambiente

Para permitir que el proceso de precompilación acceda a las variables de ambiente que se requieren para crear tu ambiente de desarrollo, puedes configurarlas ya sea como secretos de repositorio de {% data variables.product.prodname_codespaces %} o como secretos de organización de {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta las secciones "[Agregar secretos para un repositorio](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)" y "[Agregar secretos para una organización](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-an-organization)".

Secrets that you create in this way will be accessible by anyone who creates a codespace from this repository. Si no quieres esto, como alternativa, puedes configurar el secreto `CODESPACES_PREBUILD_TOKEN`. El secreto `CODESPACES_PREBUILD_TOKEN` solo se utiliza para precompilar y no se puede acceder a su valor en los codespaces de los usuarios.

Prebuilds cannot use any user-level secrets while building your environment, because these are not available until after the codespace has been created.

## Configurar tareas que llevan mucho tiempo para que se incluyan en la precompilación

You can use the `onCreateCommand` and `updateContentCommand` commands in your `devcontainer.json` to include time-consuming processes as part of the prebuild creation. Para obtener más información, consulta la documentación de {% data variables.product.prodname_vscode %} "[referencia de devcontainer.json](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)".

`onCreateCommand` is run only once, when the prebuild is created, whereas `updateContentCommand` is run at template creation and at subsequent template updates. Incremental builds should be included in `updateContentCommand` since they represent the source of your project and need to be included for every prebuild update.

## Leer más

- "[Allowing a prebuild to access other repositories](/codespaces/prebuilding-your-codespaces/allowing-a-prebuild-to-access-other-repositories)"
- "[Solucionar problemas de las compilaciones previas](/codespaces/troubleshooting/troubleshooting-prebuilds)"
