---
title: Solución de problemas de precompilaciones
shortTitle: Codespaces prebuilds
intro: Puedes usar precompilaciones para acelerar la creación de codespaces. En este artículo se proporcionan los pasos para la solución de problemas comunes con las precompilaciones.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b8c45f9eae6094b78026d055ebea27c3748a8681
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158889'
---
Para obtener más información sobre las precompilaciones de {% data variables.product.prodname_github_codespaces %}, consulta "[Precompilación de codespaces](/codespaces/prebuilding-your-codespaces)".

## ¿Quiere comprobar si un codespace se ha creado a partir de una precompilación?

Al crear un codespace, puedes elegir el tipo de la máquina virtual que quieres usar. Si hay disponible un precompilado para el tipo de máquina virtual, "{% octicon "zap" aria-label="The zap icon" %} Precompilación lista" se muestra junto a él.

![Una lista de los tipos de objeto disponibles.](/assets/images/help/codespaces/choose-custom-machine-type.png)

Si tienes la preferencia del editor de {% data variables.product.prodname_github_codespaces %} establecida en "{% data variables.product.prodname_vscode %} para la web", en la página "Configuración del codespace" se mostrará el mensaje "Se ha encontrado un codespace precompilado" si se usa una precompilación. 

![Mensaje "Codespace creado previamente encontrado"](/assets/images/help/codespaces/prebuilt-codespace-found.png)

Del mismo modo, si la preferencia del editor es "{% data variables.product.prodname_vscode_shortname %}", el terminal integrado contendrá el mensaje "Estás en un codespace precompilado definido por la configuración de precompilación para el repositorio" al crear un codespace. Para más información, consulta "[Configuración del editor predeterminado para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)".

Después de crear un codespace, puede comprobar si se ha creado a partir de una precompilación si ejecuta el comando {% data variables.product.prodname_cli %} siguiente en el terminal:

```shell{:copy}
gh api /user/codespaces/$CODESPACE_NAME --jq .prebuild
```

Esto devuelve `true` si el codespace se ha creado mediante una precompilación.

Como alternativa, si {% data variables.product.prodname_cli %} (`gh`) no está instalado, puede usar el comando siguiente, que devuelve `createFromPrebuild` si el codespace se ha creado a partir de una precompilación: 

```shell{:copy}
cat /workspaces/.codespaces/shared/environment-variables.json | jq '.ACTION_NAME'
```

## En ocasiones falta la etiqueta "Prebuild Ready" (Listo para precompilación)

Es posible que observe que, en ocasiones, al crear un codespace desde una rama habilitada para la precompilación, la etiqueta "{% octicon "zap" aria-label="The zap icon" %} Prebuild Ready" (Listo para precompilación) no se muestra en el cuadro de diálogo para elegir un tipo de máquina. Esto significa que las precompilaciones no están disponibles actualmente.

De forma predeterminada, cada vez que se inserta en una rama habilitada para precompilación, se actualiza la precompilación. Si la inserción implica un cambio en el contenedor de desarrollo, mientras la actualización está en curso, la etiqueta "{% octicon "zap" aria-label="The zap icon" %} Precompilación lista" se quita de la lista de tipos de máquina. Durante este tiempo, todavía puede crear codespace sin una precompilación. Si es necesario, puede reducir las ocasiones en las que las precompilaciones no están disponibles para un repositorio estableciendo que la precompilación se actualice solo cuando realice un cambio en los archivos de configuración del contenedor de desarrollo o solo en una programación personalizada. Para obtener más información, consulta "[Configuración de precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)".

Si la rama no está habilitada específicamente para las precompilaciones, todavía se puede beneficiar de ellas si se bifurca desde una rama habilitada para la precompilación. Pero si la configuración del contenedor de desarrollo se cambia en la rama, de modo que no sea la mismo que la de la rama base, las precompilaciones ya no estarán disponibles en la rama.

Estos son los aspectos para comprobar si la etiqueta "{% octicon "zap" aria-label="The zap icon" %} Prebuild Ready" (Listo para precompilación) no se muestra para una rama determinada:

* Confirme que existe una configuración de precompilación para esta rama. Si no es administrador del repositorio, tendrá que ponerse en contacto con uno para confirmarlo. 
* Confirme que la configuración de precompilación incluye la región.
* Compruebe si se ha insertado recientemente un cambio de la configuración del contenedor de desarrollo en la rama habilitada para la precompilación. En caso afirmativo, normalmente tendrás que esperar hasta que se complete el flujo de trabajo de precompilación para esta inserción antes de que los precompilaciones vuelvan a estar disponibles.
* Si no se han realizado cambios de configuración recientemente, vaya a la pestaña **Actions** (Acciones) del repositorio, haga clic en **{% octicon "codespaces" aria-label="The Codespaces icon" %} {% data variables.product.prodname_codespaces %} Prebuilds** (Precompilaciones) en la lista de flujos de trabajo y compruebe que las ejecuciones de flujo de trabajo de precomplilación para la rama sean correctas. Si se ha producido un error en las ejecuciones más recientes de un flujo de trabajo y una o varias de estas ejecuciones con errores contenían cambios en la configuración del contenedor de desarrollo, no habrá precompilaciones disponibles para la rama asociada. 

## No se puede acceder a algunos recursos en codespaces creados mediante una precompilación

Si el archivo de configuración de `devcontainer.json` de una configuración de precompilación especifica que se requieren permisos para el acceso a otros repositorios, se pedirá al administrador del repositorio que autorice estos permisos cuando cree o actualice la configuración de precompilación. Si el administrador no concede todos los permisos solicitados, existe la posibilidad de que se produzcan problemas en la precompilación y en los codespaces creados a partir de la misma. Esto es cierto incluso si el usuario que crea un codespace basado en esta precompilación _concede_ todos los permisos cuando se le pide que lo haga.

## Solución de problemas de ejecuciones de flujo de trabajo con errores para precompilaciones

### Aumento del límite de gasto de {% data variables.product.prodname_actions %} 

Las precompilaciones se crean y actualizan con {% data variables.product.prodname_actions %}. Se producirá un error en los flujos de trabajo de precompilación si has usado todos los minutos de {% data variables.product.prodname_actions %} y has alcanzado el límite de gasto. Si esto ocurre, puedes aumentar el límite de gasto de {% data variables.product.prodname_actions %} para permitir que se ejecuten los flujos de trabajo. Para obtener más información, consulta "[Administración del límite de gasto para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)".

### Autorización de permisos de acceso

Si se actualiza el archivo de configuración de `devcontainer.json` de una configuración de precompilación para especificar que se requieren permisos para el acceso a otros repositorios y no se ha solicitado a un administrador de repositorio que autorice estos permisos para la configuración de precompilación, es posible que se produzca un error en el flujo de trabajo de precompilación. Prueba a actualizar la configuración de precompilación sin realizar ningún cambio. Si, al hacer clic en **Actualizar**, se muestra la página de autorización, comprueba que los permisos solicitados son adecuados y, si es así, autoriza la solicitud. Para obtener más información, consulta "[Administración de precompilaciones](/codespaces/prebuilding-your-codespaces/managing-prebuilds#editing-a-prebuild-configuration)" y "[Administración del acceso a otros repositorios dentro del codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces#setting-additional-repository-permissions)".

Si se produce un error en la ejecución del flujo de trabajo para una configuración de precompilación, puedes deshabilitar temporalmente la configuración de precompilación mientras investigas. Consulta "[Administración del estado](/codespaces/prebuilding-your-codespaces/managing-prebuilds#disabling-a-prebuild-configuration)" para obtener más información.

### Prevención del uso de precompilaciones obsoletas

De forma predeterminada, si se ha producido un error en el flujo de trabajo de precompilación más reciente, se usará una precompilación anterior para la misma combinación de repositorio, rama y archivo de configuración `devcontainer.json` para crear espacios de código. Este comportamiento se denomina "optimización de precompilación".

Se recomienda mantener habilitada la optimización de precompilación, ya que ayuda a garantizar que los codespaces sigan pudiéndose crear rápidamente si no hay disponible una precompilación actualizada. Aun así, como administrador del repositorio, puedes deshabilitar la optimización de precompilación si tienes problemas porque los codespaces precompilados están detrás del estado actual de la rama. En caso de que deshabilites la optimización de precompilación, los codespaces para la combinación pertinente de repositorio, rama y archivo `devcontainer.json` se crearán sin una precompilación si el flujo de trabajo de precompilación más reciente ha generado un error o se está ejecutando actualmente.

{% data reusables.codespaces.accessing-prebuild-configuration %}
1. A la derecha de la configuración de precompilación afectada, selecciona los puntos suspensivos ( **…** ) y haz clic en **Editar**.

   ![Captura de pantalla de una lista de precompilaciones, con "Editar" resaltado](/assets/images/help/codespaces/edit-prebuild-configuration.png)
1. Desplázate hasta la parte inferior de la página "Editar configuración" y haz clic en **Mostrar opciones avanzadas**.

   ![Captura de pantalla de la página de configuración de precompilación, con la opción "Mostrar opciones avanzadas" resaltada](/assets/images/help/codespaces/show-advanced-options.png)
1. Si sabes con seguridad que quieres deshabilitar la configuración predeterminada, selecciona **Deshabilitar la optimización de precompilación**.

   ![Captura de pantalla de la sección "Opciones avanzadas" y la opción "Deshabilitar la optimización de precompilación"](/assets/images/help/codespaces/disable-prebuild-optimization.png)
1. Para guardar el cambio, haz clic en **Actualizar**.

## Información adicional

- "[Configuración de precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)"
- "[Administración de precompilaciones](/codespaces/prebuilding-your-codespaces/managing-prebuilds)"
