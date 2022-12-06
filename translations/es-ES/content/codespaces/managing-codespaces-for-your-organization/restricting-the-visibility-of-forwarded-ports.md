---
title: Restricción de la visibilidad de los puertos reenviados
shortTitle: Restrict port visibility
intro: Puedes establecer restricciones en las opciones de visibilidad que los usuarios pueden elegir al reenviar puertos desde los codespaces de la organización.
permissions: 'To manage access to port visibility constraints for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: ad670b43e0ac2a80e43048ffa61e0c83a8d12130
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158977'
---
## Información general

Normalmente, dentro de un codespace, puede reenviar puertos de forma privada (solo a sí mismo), a los miembros de la organización o públicamente (a cualquiera que tenga la dirección URL). Para más información, vea "[Reenvío de puertos en el codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

Como propietario de la organización, es posible que quiera configurar restricciones en las opciones de visibilidad que los usuarios pueden establecer al reenviar puertos. Por ejemplo, por motivos de seguridad, es posible que quiera denegar el reenvío de puertos públicos. Para ello, define una o más políticas en la configuración de {% data variables.product.prodname_github_codespaces %} de la organización.

### Comportamiento al establecer una restricción de visibilidad de puerto

Si hay codespaces existentes que ya no se ajustan a una directiva que ha definido, seguirán funcionando hasta que se detengan o agoten el tiempo de espera. Cuando el usuario reanude el codespace, estará sujeto a las restricciones de directiva.

{% note %}

**Nota**: No se puede deshabilitar el enrutamiento de puertos privados, ya que {% data variables.product.prodname_github_codespaces %} lo necesita para funcionar según su diseño, por ejemplo, para reenviar SSH en el puerto 22.

{% endnote %}

### Configurar políticas específicas para los repositorios y a lo largo de la organización

Cuando creas una política, eliges si esta aplica a todos los repositorios de tu organización o solo a algunos específicos. Si configuras una política a lo largo de la organización, entonces cualquier política que configures para los repositorios individuales debe de caer dentro de las restricciones que se configuraron a nivel organizacional. La adición de directivas hace que la elección de opciones de visibilidad sea más restrictiva, no menos.

Por ejemplo, podría crear una directiva para toda la organización que restrinja las opciones de visibilidad solo para la organización. Después, puede establecer una directiva para el repositorio A que no permite la visibilidad pública y de la organización, lo que provocaría que solo el reenvío de puertos privado esté disponible para este repositorio. Establecer una directiva para el repositorio A que permita tanto la visibilidad pública como la de la organización solo daría lugar a visibilidad de la organización, ya que la directiva para toda la organización no permite la visibilidad pública.

Si agrega una directiva para toda la organización, debe establecerla en la opción de visibilidad más permisiva disponible para cualquier repositorio de la organización. Entonces podrás agregar las políticas específicas para los repositorios y así restringir aún más la elección.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Adición de una directiva para limitar las opciones de visibilidad de puertos

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Haga clic en **Agregar restricción** y elija **Visibilidad de puertos**.

   ![Captura de pantalla del menú desplegable "Agregar restricción"](/assets/images/help/codespaces/add-constraint-dropdown-ports.png)

1. Haz clic en {% octicon "pencil" aria-label="The edit icon" %} para editar la restricción.

   ![Captura de pantalla del icono de lápiz para editar la restricción](/assets/images/help/codespaces/edit-port-visibility-constraint.png)

1. Borre la selección de las opciones de visibilidad de puertos (**Organización** o **Pública**) que no quiere que estén disponibles.

   ![Captura de pantalla de la desactivación de una opción de visibilidad de puertos](/assets/images/help/codespaces/choose-port-visibility-options.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Si quieres agregar otra restricción a la directiva, haz clic en **Agregar restricción** y elige otra restricción. Para obtener información sobre otras restricciones, consulta:
   * "[Restricción del acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
   * "[Restricción de la imagen base para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)"
   * "[Restricción del período de tiempo de espera de inactividad](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"
   * "[Restricción del período de retención para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)"
1. Cuando hayas terminado de agregar restricciones a la directiva, haz clic en **Guardar**.

La directiva se aplicará a todos los codespaces nuevos que se facturen a tu organización. La restricción de visibilidad de puertos también se aplicará a los codespaces existentes la próxima vez que se inicien.

## Editar una política

Puedes editar una directiva existente. Por ejemplo, puede que te interese agregar restricciones a una directiva o quitarlas.

1. Muestra la página de "Políticas del Codespace". Para más información, vea "[Adición de una directiva para limitar las opciones de visibilidad de puertos](#adding-a-policy-to-limit-the-port-visibility-options)".
1. Haz clic en el nombre de la política que quieres editar.
1. Haz clic en el icono de lápiz ({% octicon "pencil" aria-label="The edit icon" %}) situado junto a la restricción "Visibilidad de puertos".
1. Realice los cambios necesarios y haga clic en **Save**.

## Borrar una política 

1. Muestra la página de "Políticas del Codespace". Para más información, vea "[Adición de una directiva para limitar las opciones de visibilidad de puertos](#adding-a-policy-to-limit-the-port-visibility-options)".
1. Haz clic en el botón de borrar a la derecha de la política que quieras borrar.

   ![Captura de pantalla del botón de eliminación de una directiva](/assets/images/help/codespaces/policy-delete.png)
