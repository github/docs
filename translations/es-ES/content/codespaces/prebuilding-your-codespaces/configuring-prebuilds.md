---
title: Configuración de precompilaciones
shortTitle: Configure prebuilds
intro: Puedes configurar tu proyecto para precompilar un codespace automáticamente cada vez que insertas un cambio en el repositorio.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: dbb355e150695f27d1d6a7fa51eccc33a0ebde4f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159121'
---
Puedes configurar una configuración de precompilación para la combinación de una rama específica del repositorio con un archivo de configuración de contenedor de desarrollo específico.

Las ramas creadas a partir de una rama primaria habilitada previamente para la compilación normalmente también obtendrán precompilaciones para la misma configuración de contenedor de desarrollo. El motivo es que las precompilaciones para ramas secundarias que usan la misma configuración de contenedor de desarrollo que la rama primaria es, en su mayor parte, idéntica, por lo que los desarrolladores también se pueden beneficiar de tiempos de creación de codespaces más rápidos en esas ramas. Para más información, vea "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

Normalmente, al configurar precompilaciones para una rama, estarán disponibles para varios tipos de equipo. Pero si el repositorio es mayor de 32 GB, las precompilaciones no estarán disponibles para los tipos de máquina de 2 y 4 núcleos, ya que el almacenamiento que proporcionan está limitado a 32 GB.

## Requisitos previos 

Los precompilaciones se crean con {% data variables.product.prodname_actions %}. Como resultado, {% data variables.product.prodname_actions %} debe estar habilitado para el repositorio para el que vas a configurar las precompilaciones. Para más información, vea "[Administración de la configuración de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)".

## Configuración de precompilaciones

{% data reusables.codespaces.accessing-prebuild-configuration %}
1. En la sección "Configuración de la precompilación" de la página, haz clic en **Configurar precompilación**.

   ![Botón "Configurar precompilaciones"](/assets/images/help/codespaces/prebuilds-set-up.png)

1. Elige la rama para la que quieras configurar las precompilaciones.

   ![El menú desplegable de ramas](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %} 

   **Nota**: Las ramas creadas a partir de una rama base habilitada previamente para la compilación normalmente también obtendrán precompilaciones para la misma configuración de contenedor de desarrollo. Por ejemplo, si habilita las precompilaciones para un archivo de configuración de contenedor de desarrollo en la rama predeterminada del repositorio, las ramas basadas en la predeterminada también obtendrán precompilaciones en la mayoría de los casos para la misma configuración de contenedor de desarrollo.

   {% endnote %}

1. Opcionalmente, en el menú desplegable **Archivo de configuración** que se muestra, elige el archivo de configuración de `devcontainer.json` que quieres usar para esta plantilla de precompilaciones. Para obtener más información, consulte "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)".

   ![Menú desplegable del archivo de configuración](/assets/images/help/codespaces/prebuilds-choose-configfile.png)

1. Elige cómo quieres desencadenar automáticamente las actualizaciones de la precompilación.

   * **Todas las inserciones** (configuración predeterminada): con esta configuración, las precompilaciones se actualizarán en cada inserción realizada en la rama especificada. Esto garantizará que los codespaces generados a partir de una precompilación siempre contengan la configuración de codespace más reciente, incluidas las dependencias agregadas o actualizadas recientemente.
   * **Al cambiar la configuración**: con esta opción, las precompilaciones se actualizarán cada vez que se actualicen los archivos de configuración asociados para un repositorio y una rama determinados. Esto garantiza que los cambios en los archivos de configuración del contenedor de desarrollo para el repositorio se usan cuando se genera un codespace a partir de una precompilación. El flujo de trabajo de {% data variables.product.prodname_actions %} que actualiza los precompilaciones se ejecutará con menos frecuencia, por lo que esta opción usará menos minutos de {% data variables.product.prodname_actions %}. Pero esta opción no garantizará que los codespaces siempre incluyan dependencias agregadas o actualizadas recientemente, por lo que es posible que tengan que agregarse o actualizarse manualmente después de crear un codespace.
   * **Programado:** con esta configuración, podrás actualizar la precompilación en una programación personalizada que definas. Esto puede reducir el consumo de minutos de {% data variables.product.prodname_actions %}; sin embargo, con esta opción, se pueden crear codespaces que no usen los cambios más recientes en la configuración del contenedor de desarrollo.

   ![Opciones del desencadenador de precompilación](/assets/images/help/codespaces/prebuilds-triggers.png)

1. Opcionalmente, selecciona **Reducir precompilación disponible para solo regiones específicas** para crear precompilaciones solo en regiones especificadas. Selecciona las regiones en las que quieres que estén disponibles las precompilaciones.

   De forma predeterminada, las precompilaciones se crean en todas las regiones disponibles, lo que conlleva cargos de almacenamiento por precompilación.

   ![Opciones de selección de región](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **Notas**: 
   * La compilación previa en cada región incurre en cargos de almacenamiento individuales. Por tanto, solo debe habilitar las precompilaciones para las regiones en las que sabe que se van a usar. Para más información, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds)".
   * Los desarrolladores pueden establecer su región predeterminada para {% data variables.product.prodname_github_codespaces %}, lo que te permite habilitar precompilaciones para menos regiones. Para más información, consulta "[Configuración de la región predeterminada para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)".

   {% endnote %}

1. Opcionalmente, en **plantilla de precompilación**, se establece el número de versiones que se conservarán. Puedes especificar cualquier número entre 1 y 5. El número predeterminado de versiones guardadas es 2, lo que significa que solo se guardan la más reciente y la versión anterior.

   ![Configuración del historial de precompilaciones](/assets/images/help/codespaces/prebuilds-template-history-setting.png)

   En función de la configuración del desencadenador de precompilaciones, la precompilación podría cambiar con cada inserción o en cada cambio de configuración del contenedor de desarrollo. Conservar las versiones anteriores de las precompilaciones permite crear una precompilación a partir de una confirmación anterior con una configuración de contenedor de desarrollo diferente a la de la precompilación actual. Esta configuración permite establecer el número de versiones retenidas en un nivel adecuado para tus necesidades. 

   Si estableces el número de versiones de precompilaciones para guardar en 1, {% data variables.product.prodname_github_codespaces %} solo guardará la más reciente y se eliminará la versión anterior cada vez que se actualice la plantilla. Esto significa que no obtendrás un codespace precompilado si vuelves a una configuración de contenedor de desarrollo anterior.
   
   Hay un costo de almacenamiento asociado a cada versión de precompilación que se conserva. Por ejemplo, si vas a generar precompilaciones en 4 regiones y conservas 2 versiones, se te cobrará por el almacenamiento de hasta 8 precompilaciones. Para más información sobre la facturación, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

1. Opcionalmente, agrega usuarios o equipos a quienes notificar cuando se produzca un error en la ejecución del flujo de trabajo de precompilación de esta configuración. Para empezar, puedes escribir un nombre de usuario, un nombre de equipo o un nombre completo y, luego, hacer clic en ellos cuando aparezcan para agregarlos a la lista. Los usuarios o equipos que agregues recibirán un correo electrónico cuando se produzcan errores de precompilación, con un vínculo a los registros de ejecución del flujo de trabajo para que puedan investigarlo más a fondo.

   ![Configuración de notificaciones de error de precompilación](/assets/images/help/codespaces/prebuilds-failure-notification-setting.png)

1. Opcionalmente, en la parte inferior de la página, haz clic en **Mostrar opciones avanzadas**.

   ![Captura de pantalla de la página de configuración de precompilación, con la opción "Mostrar opciones avanzadas" resaltada](/assets/images/help/codespaces/show-advanced-options.png)

   En la sección "Opciones avanzadas", si seleccionas **Deshabilitar optimización de precompilación**, los codespaces se crearán sin un precompilado si se ha producido un error en el flujo de trabajo de precompilación más reciente o si se está ejecutando actualmente. Para obtener más información, consulta "[Solución de problemas anterior a la compilación](/codespaces/troubleshooting/troubleshooting-prebuilds#preventing-out-of-date-prebuilds-being-used)".

1. Haga clic en **Crear**.

   {% data reusables.codespaces.prebuilds-permission-authorization %}

Después de crear una configuración de precompilación, esta aparece en la página {% data variables.product.prodname_github_codespaces %} de la configuración del repositorio. Se pone en cola un flujo de trabajo de {% data variables.product.prodname_actions %} y, después, se ejecuta para crear precompilaciones en las regiones especificadas, en función de la rama y el archivo de configuración de contenedor de desarrollo seleccionados. 

![Captura de pantalla de la lista de configuraciones de precompilación](/assets/images/help/codespaces/prebuild-configs-list.png)

Para obtener información sobre cómo editar y eliminar configuraciones de precompilación, consulta "[Administración de precompilaciones](/codespaces/prebuilding-your-codespaces/managing-prebuilds)".

## Configurar variables de ambiente

Para permitir que el proceso de precompilación acceda a las variables de entorno necesarias para crear el entorno de desarrollo, puede establecerlas como secretos de repositorio de {% data variables.product.prodname_codespaces %}, o bien como secretos de organización de {% data variables.product.prodname_codespaces %}. Para más información, vea "[Adición de secretos para un repositorio](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)" y "[Adición de secretos para una organización](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-an-organization)". 

Los secretos que crees de esta manera serán accesibles para cualquiera que cree un codespace desde este repositorio. Si no quiere este comportamiento, también puede establecer el secreto `CODESPACES_PREBUILD_TOKEN`. El secreto `CODESPACES_PREBUILD_TOKEN` solo se usa para la precompilación y su valor no es accesible en los codespaces de los usuarios. 

Las precompilaciones no pueden usar ningún secreto de nivel de usuario al compilar el entorno, ya que no están disponibles hasta después de crear el codespace.

## Configuración de tareas que requieren mucho tiempo para incluirse en la precompilación

Puede usar los comandos `onCreateCommand` y `updateContentCommand` en `devcontainer.json` para incluir procesos lentos como parte de la creación de la precompilación. Para más información, consulta la documentación de {% data variables.product.prodname_vscode %} "[referencia de devcontainer.json](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)".

`onCreateCommand` solo se ejecuta una vez, cuando se crea la precompilación, mientras que `updateContentCommand` se ejecuta en la creación de la precompilación y en las actualizaciones de plantilla posteriores a esta. Las compilaciones incrementales se deben incluir en `updateContentCommand`, ya que representan el origen del proyecto y deben incluirse para cada actualización de precompilación.

## Información adicional

- "[Permiso para que una precompilación acceda a otros repositorios](/codespaces/prebuilding-your-codespaces/allowing-a-prebuild-to-access-other-repositories)"
- "[Solución de problemas de precompilaciones](/codespaces/troubleshooting/troubleshooting-prebuilds)"
