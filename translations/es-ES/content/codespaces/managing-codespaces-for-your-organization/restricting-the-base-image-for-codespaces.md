---
title: Restricción de la imagen base para codespaces
shortTitle: Restrict base image
intro: Puedes especificar qué imágenes base se pueden usar para los nuevos codespaces creados en tu organización.
permissions: 'To manage image constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: f17bb20aa919ca94cd13e14a6f770cea23042b2b
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188284'
---
## Información general

Al crear un codespace, se crea automáticamente un contenedor Docker en una máquina virtual remota. El contenedor Docker se crea a partir de una imagen de Docker. La imagen es básicamente una plantilla para los contenedores Docker y determina muchos aspectos del entorno resultante proporcionado por el codespace.

Puedes elegir qué imagen quieres usar para tus codespaces especificándola en la configuración del contenedor de desarrollo de un repositorio. Puedes hacerlo, por ejemplo, mediante la propiedad `image` del archivo `devcontainer.json`.

```json{:copy}
"image": "mcr.microsoft.com/vscode/devcontainers/javascript-node:18",
```

Para obtener más información, consulta la [especificación de contenedores de desarrollo](https://containers.dev/implementors/json_reference/) en containers.dev.

Si no especificas una imagen en la configuración del contenedor de desarrollo de un repositorio, se usa la imagen predeterminada. La imagen predeterminada contiene una serie de versiones en tiempo de ejecución de lenguajes populares y herramientas de uso frecuente. Para obtener más información, consulte "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)".

Como propietario de la organización, puedes agregar una directiva para restringir qué imágenes se pueden usar para los codespaces creados en tu organización.

Si la imagen especificada en la configuración del contenedor de desarrollo no coincide con una de las imágenes permitidas, se muestra el siguiente mensaje cuando alguien intenta crear un codespace para el repositorio:

> No se puede crear el codespace: la imagen base "DETALLES DE LA CONFIGURACIÓN DEL CONTENEDOR DE DESARROLLO" no está permitida de acuerdo con una directiva de la organización establecida por el administrador de tu organización.

{% note %}

**Notas**: 
* La directiva de imagen base solo se aplica cuando se crea un codespace. Actualmente no se aplica cuando se recompila un contenedor. Esto se modificará en una versión futura. Para obtener más información, consulta "[Ciclo de vida de un codespace](/codespaces/getting-started/the-codespace-lifecycle#rebuilding-a-codespace)".
* La directiva de imagen base no se aplica a la imagen predeterminada ni a la imagen que se usa para recuperar un codespace si se introduce un error en la configuración de un contenedor de desarrollo que impide que se recompile el contenedor. 

{% endnote %}

### Configurar políticas específicas para los repositorios y a lo largo de la organización

Cuando creas una política, eliges si esta aplica a todos los repositorios de tu organización o solo a algunos específicos. Si configuras una política a lo largo de la organización, entonces cualquier política que configures para los repositorios individuales debe de caer dentro de las restricciones que se configuraron a nivel organizacional. La adición de directivas hace que la elección de imágenes sea más restrictiva, no menos.

Por ejemplo, podrías crear una directiva para toda la organización que restrinja la imagen base a una de las 10 imágenes especificadas. Después, puedes establecer una directiva para el repositorio A que restrinja la imagen a un subconjunto compuesto por tan solo dos de las imágenes especificadas a nivel de la organización. Especificar imágenes adicionales para el repositorio A no tendrá ningún efecto, porque estas imágenes no están especificadas en la directiva para toda la organización. Si agregas una directiva a nivel organizacional, deberás establecerla en la mayor selección de imágenes que estará disponible para cualquier repositorio de tu organización. Entonces podrás agregar las políticas específicas para los repositorios y así restringir aún más la elección.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Adición de una directiva para definir las imágenes permitidas

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Haz clic en **Agregar restricción** y elige **Imágenes base**.

   ![Captura de pantalla del menú desplegable "Agregar restricción"](/assets/images/help/codespaces/add-constraint-dropdown-image.png)

1. Haz clic en {% octicon "pencil" aria-label="The edit icon" %} para editar la restricción.

   ![Captura de pantalla del icono de lápiz para editar la restricción](/assets/images/help/codespaces/edit-image-constraint.png)

1. En el campo "Valores permitidos", escribe la dirección URL completa de una imagen que quieras permitir.

   ![Captura de pantalla de una entrada en el campo "Valores permitidos"](/assets/images/help/codespaces/image-allowed-values.png)
 
   {% note %}

   **Nota:** Debes especificar una URL de imagen que coincida exactamente con el valor especificado en una configuración de contenedor de desarrollo.

   {% endnote %}

1. Haz clic el botón más ({% octicon "plus" aria-label="The plus icon" %}) para agregar el valor.
1. Si es necesario, repite los dos pasos anteriores para agregar más direcciones URL de imágenes.
{% data reusables.codespaces.codespaces-policy-targets %}
1. Si quieres agregar otra restricción a la directiva, haz clic en **Agregar restricción** y elige otra restricción. Para obtener información sobre otras restricciones, consulta:
   * "[Restricción del acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
   * "[Restricción de la visibilidad de los puertos reenviados](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)"
   * "[Restricción del período de tiempo de espera de inactividad](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"
   * "[Restricción del período de retención para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)"
1. Cuando hayas terminado de agregar restricciones a la directiva, haz clic en **Guardar**.

La directiva se aplica cuando alguien intenta crear un nuevo codespace que se puede facturar a tu organización. La restricción de la imagen base no afecta a los codespaces existentes, ya estén activos o detenidos.

## Editar una política

Puedes editar una directiva existente. Por ejemplo, puede que te interese agregar restricciones a una directiva o quitarlas.

1. Muestra la página de "Políticas del Codespace". Para obtener más información, consulta "[Adición de una directiva para definir las imágenes permitidas](#adding-a-policy-to-define-the-allowed-images)".
1. Haz clic en el nombre de la política que quieres editar.
1. Haz clic en el icono de lápiz ({% octicon "pencil" aria-label="The edit icon" %}) situado junto a la restricción "Imágenes base".
1. Agrega o quita direcciones URL de imágenes.
1. Haga clic en **Save**(Guardar).

## Borrar una política 

1. Muestra la página de "Políticas del Codespace". Para obtener más información, consulta "[Adición de una directiva para definir las imágenes permitidas](#adding-a-policy-to-define-the-allowed-images)".
1. Haz clic en el botón de borrar a la derecha de la política que quieras borrar.

   ![Captura de pantalla del botón de eliminación de una directiva](/assets/images/help/codespaces/policy-delete.png)
