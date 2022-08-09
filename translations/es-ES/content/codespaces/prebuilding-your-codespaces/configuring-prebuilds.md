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

You can set up a prebuild configuration for the combination of a specific branch of your repository with a specific dev container configuration file.

Any branches created from a prebuild-enabled parent branch will typically also get prebuilds for the same dev container configuration. This is because the prebuild template for child branches that use the same dev container configuration as the parent branch are, for the most part, identical, so developers can benefit from faster codespace creation times on those branches also. Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

Typically, when you configure prebuilds for a branch, prebuilds will be available for multiple machine types. Sin embargo, si tu repositorio es mayor a 32 GB, las precompilaciones no estarán disponibles para los tipos de máquina de 2 y 4 núcleos, ya que el almacenamiento que estos proporcionan se limita a 32 GB.

## Prerrequisitos

Antes de que configures las precompilaciones para tu proyecto, se debe cumplir con lo siguiente:
* Se deben habilitar los {% data variables.product.prodname_github_codespaces %} para tu organización. Para obtener más información, consulta la sección "[Habilitar los {% data variables.product.prodname_github_codespaces %} para tu organización](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)".
* {% data variables.product.prodname_actions %} debe estar habilitado para tu repositorio. Cada configuración de precompilación necesita poder activar un flujo de trabajo de acciones asociado. Para obtener más información, consulta la sección "[Administrar la configuración de {% data variables.product.prodname_actions %} en un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)".

## Configurar una precompilación

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. En la sección de "Automatización & código" de la barra lateral, haz clic en **{% octicon "codespaces" aria-label="The Codespaces icon" %} {% data variables.product.prodname_codespaces %}**.
1. In the "Prebuild configuration" section of the page, click **Set up prebuild**.

   ![El botón de 'Configurar precompilaciones'](/assets/images/help/codespaces/prebuilds-set-up.png)

1. Elige la rama para la cual quieres configurar una precompilación.

   ![The branch drop-down menu](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %}

   **Note**: Any branches created from a prebuild-enabled base branch will typically also get prebuilds for the same dev container configuration. For example, if you enable prebuilds for a dev container configuration file on the default branch of the repository, branches based on the default branch will, in most cases, also get prebuilds for the same dev container configuration.

   {% endnote %}

1. Optionally, in the **Configuration file** drop-down menu that's displayed, choose the `devcontainer.json` configuration file that you want to use for this prebuild template. Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)."

   ![The configuration file drop-down menu](/assets/images/help/codespaces/prebuilds-choose-configfile.png)

1. Elige cómo quieres activar automáticamente las actualizaciones de la plantilla de precompilación.

   * **Cada subida** (el ajuste predeterminado) - Con este ajuste, las configuraciones de precompilación se actualizarán en cada subida que se haga a la rama predeterminada. Esto garantizará que los codespaces que se generen de una plantilla de precompilación siempre contengan la configuración de codespace más reciente, incluyendo cualquier dependencia que se haya actualizado o agregado recientemente.
   * **En el cambio de configuración** - Con este ajuste, as configuraciones de precompilación se actualizarán cada que lo hagan los archivos de configuración asociados para cada repositorio y rama en cuestión. Esto garantiza que los cambios a los archivos de configuración del contenedor dev para el repositorio se utilicen cuando se genera un codespace desde una plantilla de precompilación. El flujo de trabajo de acciones que actualiza la plantilla de precompilación se ejecutará con menor frecuencia, así que esta opción utilizará menos minutos de las acciones. Sin embargo, esta opción no garantiza que los cdespaces siempre incluyan dependencias recientemente actualizadas o agregadas, así que estas podrían tener que agregarse o actualizarse manualmente después de que un codespace se haya creado.
   * **Programado** - Con este ajuste, puedes hacer que tus configuraciones de precompilación se actualicen en un itinerario personalizado que tú defines. Esto puede reducir el consumo de minutos de acciones, sin embargo, con esta opción, pueden crearse codespaces que no utilicen los últimos cambios de configuración de contenedores dev.

   ![Las opciones de activación de precompilación](/assets/images/help/codespaces/prebuilds-triggers.png)

1. Optionally, select **Reduce prebuild available to only specific regions** to limit access to your prebuild template, then select which regions you want it to be available in. Los desarrolladores solo pueden crear condespaces desde una precompilación si estos se ubican en una región que selecciones. By default, your prebuild template is available to all regions where codespaces is available and storage costs apply for each region.

   ![Las opciones de selección de región](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **Notas**:
   * La plantilla de precompilación para cada región incurrirá en cargos individuales. Por lo tanto, solo deberías habilitar las precompilaciones para las regiones en las que sabes que se utilizarán. Para obtener más información, consulta la sección "[Acerca de las precompilaciones de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)".
   * Los desarrolladores pueden configurar su región predeterminada para {% data variables.product.prodname_codespaces %}, lo que te puede permitir habilitar las precompilaciones para menos regiones. Para obtener más información, consulta la sección "[Configurar tu región predeterminada para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)".

   {% endnote %}

1. Optionally, set the number of prebuild template versions to be retained. Puedes ingresar cualquier número entre 1 y 5. La cantidad predeterminada de versiones guardadas es de 2, lo que significa que solo la versión de plantilla más reciente y la versión previa se guardan.

   Dependiendo de los ajustes de activación de la precompilación, tu plantilla de precompilación podría cambiar con cada subida o en cada cambio de configuración de contenedor dev. El retener versiones anteriores de plantillas de precompilación te permite crear una precompilación desde una confirmación antigua con una configuración de contenedor dev diferente que la plantilla de precompilación actual. Ya que existe un costo de almacenamiento asociado con la retención de versiones de plantilla de precompilación, puedes elegir la cantidad de versiones a retener con base en las necesidades de tu equipo. Para obtener más información sobre la facturación, consulta la sección "[Acerca de la facturación para los {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

   Si configuras la cantidad de versiones de plantillas de precompilación a guardar en 1, {% data variables.product.prodname_codespaces %} solo guardará la última versión de la plantilla de precompilación y borrará la versión antigua cada que se actualice la plantilla. Esto significa que no obtendrás un codespace precompilado si regresas a una configuración de contenedor dev antigua.

   ![El ajuste de historial de plantilla de precompilación](/assets/images/help/codespaces/prebuilds-template-history-setting.png)

1. Optionally, add users or teams to notify when the prebuild workflow run fails for this configuration. Puedes comenzar a escribir un nombre de usuario, de equipo o nombre completo y luego hacer clic en el nombre una vez que aparezca para agregarlos a la lista. Los usuarios o equipos que agregues recibirán un correo electrónico cuando ocurran fallas en la precompilación, los cuales contienen un enlace a las bitácoras de ejecución de flujo de trabajo para ayudar con las investigaciones subsecuentes.

   ![El ajuste de notificación de falla de precompilación](/assets/images/help/codespaces/prebuilds-failure-notification-setting.png)

1. Da clic en **Crear**.

   {% data reusables.codespaces.prebuilds-permission-authorization %}

After you create a prebuild configuration it is listed on the {% data variables.product.prodname_codespaces %} page of your repository settings. A {% data variables.product.prodname_actions %} workflow is queued and then run to create prebuild templates in the regions you specified, based on the branch and dev container configuration file you selected.

![Screenshot of the list of prebuild configurations](/assets/images/help/codespaces/prebuild-configs-list.png)

For information about editing and deleting prebuild configurations, see "[Managing prebuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds)."

## Configurar variables de ambiente

Para permitir que el proceso de precompilación acceda a las variables de ambiente que se requieren para crear tu ambiente de desarrollo, puedes configurarlas ya sea como secretos de repositorio de {% data variables.product.prodname_codespaces %} o como secretos de organización de {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta las secciones "[Agregar secretos para un repositorio](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)" y "[Agregar secretos para una organización](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-an-organization)".

Secrets that you create in this way will be accessible by anyone who creates a codespace from this repository. Si no quieres esto, como alternativa, puedes configurar el secreto `CODESPACES_PREBUILD_TOKEN`. El secreto `CODESPACES_PREBUILD_TOKEN` solo se utiliza para precompilar y no se puede acceder a su valor en los codespaces de los usuarios.

Prebuilds cannot use any user-level secrets while building your environment, because these are not available until after the codespace has been created.

## Configurar tareas que llevan mucho tiempo para que se incluyan en la precompilación

Puedes utilizar los comandos `onCreateCommand` y `updateContentCommand` en tu `devcontainer.json` para incluir los procesos que llevan mucho tiempo como parte de la creación de la plantilla de precompilación. Para obtener más información, consulta la documentación de {% data variables.product.prodname_vscode %} "[referencia de devcontainer.json](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)".

`onCreateCommand` solo se ejecuta una vez, cuando se crea la plantilla de precompilación, mientras que `updateContentCommand` se ejecuta cuando se crea la plantilla y en las actualizaciones de plantilla posteriores. Las compilaciones incrementales deben incluirse en `updateContentCommand`, ya que estas representan el origen de tu proyecto y necesitan incluirse para cada actualización de plantilla de precompilación.

## Leer más

- "[Allowing a prebuild to access other repositories](/codespaces/prebuilding-your-codespaces/allowing-a-prebuild-to-access-other-repositories)"
- "[Solucionar problemas de las compilaciones previas](/codespaces/troubleshooting/troubleshooting-prebuilds)"
