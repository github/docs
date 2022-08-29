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

Cualquier rama que se cree desde una rama padre con precompilación habilitada habitualmente también obtendrá precompilaciones para la misma configuración de contenedor dev. Esto se debe a que la precompilación de las ramas hijas que utilizan la misma configuración de contenedor dev que la rama padre sean, en su mayoría, idénticas, para que los desarrolladores también se puedan beneficiar de tiempos de creación más rápidos para codespaces en dichas ramas. Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

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

   **Nota**: Cualquier rama que se cree de una rama base habilitada para precompilaciones habitualmente también obtendrá precompilaciones para la misma configuración de contenedor dev. Por ejemplo, si habilitas precompilaciones para un archivo de configuración de contenedor dev en la rama predeterminada del repositorio, las ramas basadas en la predeterminada también obtendrán precompilaciones para la misma configuración del contenedor dev en la mayoría de los casos.

   {% endnote %}

1. Opcionalmente, en el menú desplegable de **Archivo de configuración** que se muestra, elige el archivo de configuración `devcontainer.json` que quieras utilizar para esta precompilación. Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)."

   ![El menú desplegable de archivo de configuración](/assets/images/help/codespaces/prebuilds-choose-configfile.png)

1. Elige cómo quieres activar actualizaciones automáticamente para la precompilación.

   * **Cada subida** (el ajuste predeterminado) - Con este ajuste, las configuraciones de precompilación se actualizarán en cada subida que se haga a la rama predeterminada. Esto garantizará que los codespaces que se generen de una precompilación siempre contengan la configuración de codespace más reciente, incluyendo cualquier dependencia que se haya actualizado o agregado recientemente.
   * **En el cambio de configuración** - Con este ajuste, as configuraciones de precompilación se actualizarán cada que lo hagan los archivos de configuración asociados para cada repositorio y rama en cuestión. Esto garantiza que los cambios a los archivos de configuración del contenedor dev para el repositorio se utilicen cuando se genera un codespace desde una precompilación. El flujo de trabajo de acciones que actualiza la precompilación se ejecutará con menor frecuencia, así que esta opción utilizará menos minutos de las acciones. Sin embargo, esta opción no garantiza que los cdespaces siempre incluyan dependencias recientemente actualizadas o agregadas, así que estas podrían tener que agregarse o actualizarse manualmente después de que un codespace se haya creado.
   * **Programado** - Con este ajuste, puedes hacer que tus configuraciones de precompilación se actualicen en un itinerario personalizado que tú defines. Esto puede reducir el consumo de minutos de acciones, sin embargo, con esta opción, pueden crearse codespaces que no utilicen los últimos cambios de configuración de contenedores dev.

   ![Las opciones de activación de precompilación](/assets/images/help/codespaces/prebuilds-triggers.png)

1. Opcionalmente, selecciona **reducir la precompilación disponible para solo las regiones específicas** para limitar el acceso a tu precompilación y luego selecciona en qué regiones quieres que esté disponible. Los desarrolladores solo pueden crear condespaces desde una precompilación si estos se ubican en una región que selecciones. Predeterminadamente, tu precompilación está disponible para todas las regiones en donde los codespaces estén disponibles y los costos de almacenamiento aplican para cada región.

   ![Las opciones de selección de región](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **Notas**:
   * La precompilación para cada región incurrirá en cargos individuales. Por lo tanto, solo deberías habilitar las precompilaciones para las regiones en las que sabes que se utilizarán. Para obtener más información, consulta la sección "[Acerca de las precompilaciones de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)".
   * Los desarrolladores pueden configurar su región predeterminada para {% data variables.product.prodname_codespaces %}, lo que te puede permitir habilitar las precompilaciones para menos regiones. Para obtener más información, consulta la sección "[Configurar tu región predeterminada para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)".

   {% endnote %}

1. Opcionalmente, establezca el número de versiones de precompilación que se deban retener. Puedes ingresar cualquier número entre 1 y 5. La cantidad predeterminada de versiones guardadas es de 2, lo que significa que solo la versión de plantilla más reciente y la versión previa se guardan.

   Dependiendo de los ajustes de activación de la precompilación, esta podría cambiar con cada subida o en cada cambio de configuración de contenedor dev. El retener versiones anteriores de precompilaciones te permite crear una precompilación desde una confirmación más antigua con una configuración de contenedor dev diferente que la de la precompilación actual. Ya que existe un costo de almacenamiento asociado con la retención de versiones de precompilación, puedes elegir la cantidad de versiones a retener con base en las necesidades de tu equipo. Para obtener más información sobre la facturación, consulta la sección "[Acerca de la facturación para los {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

   Si configuras la cantidad de versiones de precompilación a guardar en 1, {% data variables.product.prodname_codespaces %} solo guardará la última versión de la precompilación y borrará la versión antigua cada que se actualice la plantilla. Esto significa que no obtendrás un codespace precompilado si regresas a una configuración de contenedor dev antigua.

   ![El ajuste de historial de precompilación](/assets/images/help/codespaces/prebuilds-template-history-setting.png)

1. Opcionalmente, agrega usuarios o equipos para notificarles cuando una ejecución de flujo de trabajo de precompilación falle para esta configuración. Puedes comenzar a escribir un nombre de usuario, de equipo o nombre completo y luego hacer clic en el nombre una vez que aparezca para agregarlos a la lista. Los usuarios o equipos que agregues recibirán un correo electrónico cuando ocurran fallas en la precompilación, los cuales contienen un enlace a las bitácoras de ejecución de flujo de trabajo para ayudar con las investigaciones subsecuentes.

   ![El ajuste de notificación de falla de precompilación](/assets/images/help/codespaces/prebuilds-failure-notification-setting.png)

1. Da clic en **Crear**.

   {% data reusables.codespaces.prebuilds-permission-authorization %}

Después crear una configuración de precompilación, esta se lista en la página de {% data variables.product.prodname_codespaces %} de tus ajustes de repositorio. Un flujo de trabajo de {% data variables.product.prodname_actions %} se pone en cola y luego se ejecuta para crear precompilaciones en las regiones que especificaste, con base en la rama y archivo de configuración de contenedor dev que seleccionaste.

![Captura de pantalla de la lista de configuraciones de precompilación](/assets/images/help/codespaces/prebuild-configs-list.png)

Para obtener más información sobre cómo editar y borrar configuraciones de precompilación, consulta la sección "[Administrar las precompilaciones](/codespaces/prebuilding-your-codespaces/managing-prebuilds)".

## Configurar variables de ambiente

Para permitir que el proceso de precompilación acceda a las variables de ambiente que se requieren para crear tu ambiente de desarrollo, puedes configurarlas ya sea como secretos de repositorio de {% data variables.product.prodname_codespaces %} o como secretos de organización de {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta las secciones "[Agregar secretos para un repositorio](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)" y "[Agregar secretos para una organización](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-an-organization)".

Cualquiera que cree un codespace desde este repositorio podrá acceder a los secretos de que crees de esta forma. Si no quieres esto, como alternativa, puedes configurar el secreto `CODESPACES_PREBUILD_TOKEN`. El secreto `CODESPACES_PREBUILD_TOKEN` solo se utiliza para precompilar y no se puede acceder a su valor en los codespaces de los usuarios.

Las precompilaciones no pueden utilizar secretos a nivel de usuario al compilar tu ambiente nuevo, ya que estos no están disponibles sino hasta después de que se haya creado el codespace.

## Configurar tareas que llevan mucho tiempo para que se incluyan en la precompilación

Puedes utilizar los comandos `onCreateCommand` y `updateContentCommand` en tu `devcontainer.json` para incluir los procesos que llevan mucho tiempo como parte de la creación de la precompilación. Para obtener más información, consulta la documentación de {% data variables.product.prodname_vscode %} "[referencia de devcontainer.json](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)".

`onCreateCommand` solo se ejecuta una vez, cuando se crea la precompilación, mientras que `updateContentCommand` se ejecuta cuando se crea la plantilla y en las actualizaciones de plantilla posteriores. Las compilaciones incrementales deben incluirse en `updateContentCommand`, ya que estas representan el origen de tu proyecto y necesitan incluirse para cada actualización de precompilación.

## Leer más

- "[Permitir que una precompilación acceda a otros repositorios](/codespaces/prebuilding-your-codespaces/allowing-a-prebuild-to-access-other-repositories)"
- "[Solucionar problemas de las compilaciones previas](/codespaces/troubleshooting/troubleshooting-prebuilds)"
