---
title: Restringir el acceso a los tipos de máquina
shortTitle: Restrict machine types
intro: Puedes configurar restricciones sobre los tipos de máquina que los usuarios pueden elegir cuando crean codespaces en la organización.
permissions: 'To manage access to machine types for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: 202a2cf9f28a55514450415230686c0c0e94600f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159161'
---
## Información general

Habitualmente, cuando creas un codespace, se te ofrece una selección de especificaciones para la máquina que lo ejecutará. Puedes elegir el tipo de máquina que se acople mejor a tus necesidades. Para obtener más información, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)". 

Si pagas por utilizar {% data variables.product.prodname_github_codespaces %}, entonces tu elección de tipo de máquina afectará cuánto se te factura. El coste del proceso de un codespace es proporcional al número de núcleos de procesador del tipo de máquina que elijas. Por ejemplo, el coste del proceso de usar un codespace durante una hora en una máquina de 16 núcleos es ocho veces mayor que en una máquina de dos núcleos. Para más información sobre los precios, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

Como propietario de organización, podrías querer configurar restricciones en los tipos de máquina que están disponibles. Por ejemplo, si el trabajo en tu organización no requiere de una potencia de cómputo o espacio de almacenamiento significativos, puedes eliminar las máquinas con muchos recursos de la lista de opciones que las personas pueden elegir. Para ello, define una o más políticas en la configuración de {% data variables.product.prodname_github_codespaces %} de la organización.

### Comportamiento cuando configuras una restricción de tipo de máquina

Si hay espacios de codespaces que ya no se ajustan a una directiva definida, estos codespaces seguirán funcionando hasta que se detengan o agoten el tiempo de espera. Cuando el usuario intenta reanudar el codespace, se muestra un mensaje que le indica que el tipo de máquina seleccionado actualmente ya no está permitido para esta organización y le pide que elija un tipo de máquina alternativo.

Si eliminas tipos de máquina con especificaciones más altas que la configuración de {% data variables.product.prodname_github_codespaces %} requiere para un repositorio individual de tu organización, no se podrá crear un codespace en dicho repositorio. Cuando alguien intente crear un codespace, verá un mensaje que indica que no hay tipos de máquina válidos disponibles que cumplan los requisitos de la configuración de {% data variables.product.prodname_github_codespaces %} del repositorio.

{% note %}

**Nota**: Cualquiera que pueda editar el archivo de configuración `devcontainer.json` en un repositorio puede establecer una especificación mínima para las máquinas que se pueden usar para los codespaces. Para obtener más información, consulte "[Configurar una especificación mínima para las máquinas de los codespaces](/codespaces/setting-up-your-project-for-codespaces/setting-a-minimum-specification-for-codespace-machines)".

{% endnote %}

Si el hecho de configurar una política para los tipos de máquina impide el uso de {% data variables.product.prodname_github_codespaces %} para un repositorio en particular, hay dos opciones:

* Puedes ajustar tus políticas para que eliminen específicamente las restricciones del repositorio afectado.
* Cualquiera que tenga un codespace al cuál ya no puedan acceder debido a la política nueva puede exportar su codespace a una rama. Esta rama contendrá todos los cambios de su codespace. Pueden abrir un codespace nuevo en esta rama con un tipo de máquina compatible o trabajar en ella localmente. Para obtener más información, consulte "[Exportación de cambios a una rama](/codespaces/troubleshooting/exporting-changes-to-a-branch)".

### Configurar políticas específicas para los repositorios y a lo largo de la organización

Cuando creas una política, eliges si esta aplica a todos los repositorios de tu organización o solo a algunos específicos. Si configuras una política a lo largo de la organización, entonces cualquier política que configures para los repositorios individuales debe de caer dentro de las restricciones que se configuraron a nivel organizacional. El agregar políticas hace que la elección de máquinas sea más restrictiva, no menos.

Por ejemplo, podrías crear una política en toda la organización, la cual restrinja los tipos de máquina a aquellos de 2 o 4 núcleos. Entonces podrás configurar una política para el repositorio "A" que lo restrinja a máquinas de 2 núcleos. El configurar una política para un repositorio "A", la cual lo restrinja a máquinas de 2, 4 u 8 núcleos, daría como resultado una elección de solo máquinas de 2 y 4 núcleos, ya que la política organizacional previene el acceso a máquinas de 8 núcleos.

Si agregas una política a nivel organizacional, deberías configurarla en la elección de tipos de máquina más grande que deberá estar disponible para cualquier repositorio de tu organización. Entonces podrás agregar las políticas específicas para los repositorios y así restringir aún más la elección.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Agregar una política para limitar los tipos de máquina disponibles

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Haga clic en **Add constraint** y elija **Machine types**.

   ![Captura de pantalla del menú desplegable "Agregar restricción"](/assets/images/help/codespaces/add-constraint-dropdown.png)

1. Haz clic en {% octicon "pencil" aria-label="The edit icon" %} para editar la restricción y luego borra la selección de cualquier tipo de máquina que no quieras que estén disponibles.

   ![Captura de pantalla del icono de lápiz para editar la restricción](/assets/images/help/codespaces/edit-machine-constraint.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Si quieres agregar otra restricción a la directiva, haz clic en **Agregar restricción** y elige otra restricción. Para obtener información sobre otras restricciones, consulta:
   * "[Restricción de la imagen base para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)"
   * "[Restricción de la visibilidad de los puertos reenviados](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)"
   * "[Restricción del período de tiempo de espera de inactividad](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"
   * "[Restricción del período de retención para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)"
1. Cuando hayas terminado de agregar restricciones a la directiva, haz clic en **Guardar**.

La directiva se aplicará a todos los codespaces nuevos que se facturen a tu organización. La restricción de tipo de máquina también se aplica a los codespaces existentes cuando alguien intenta reiniciar un codespace detenido o volver a conectarse a un codespace activo.

## Editar una política

Puedes editar una directiva existente. Por ejemplo, puede que te interese agregar restricciones a una directiva o quitarlas.

1. Muestra la página de "Políticas del Codespace". Para obtener más información, consulte "[Agregar una política para limitar los tipos de máquina disponibles](#adding-a-policy-to-limit-the-available-machine-types)".
1. Haz clic en el nombre de la política que quieres editar.
1. Haz clic en el icono de lápiz ({% octicon "pencil" aria-label="The edit icon" %}) situado junto a la restricción "Tipos de máquina".
1. Realice los cambios necesarios y haga clic en **Save**.

## Borrar una política 

1. Muestra la página de "Políticas del Codespace". Para obtener más información, consulte "[Agregar una política para limitar los tipos de máquina disponibles](#adding-a-policy-to-limit-the-available-machine-types)".
1. Haz clic en el botón de borrar a la derecha de la política que quieras borrar.

   ![Captura de pantalla del botón de eliminación de una directiva](/assets/images/help/codespaces/policy-delete.png)

## Información adicional

- "[Administración de límites de gasto para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)"
