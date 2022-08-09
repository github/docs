---
title: Restringir la visibilidad de los puertos reenviados
shortTitle: Restringir la visibilidad del puerto
intro: Puedes configurar restricciones sobre las opciones de visibilidad que pueden elegir los usuarios cuando reenvían puertos desde los codespaces en tu organización.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage access to port visibility constraints for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## Resumen

Habitualmente, dentro de un codespace, puedes reenviar puertos de forma privada (únicamente a ti mismo) a los miembros de tu organización o al público en general (a cualquiera con la URL). Para obtener más información, consulta la sección "[Reenviar puertos en tu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

Como propietario de la organización, tal vez necesites configurar restricciones sobre las opciones de visibilidad que los usuarios pueden configurar al reenviar puertos. Por ejemplo, por razones de seguridad, podrías necesitar inhabilitar el reenvío de puertos al público. Esto se hace definiendo una o más políticas en los ajustes de {% data variables.product.prodname_codespaces %} de tu organización.

### Comportamiento cuando configuras una restricción de visibilidad de puertos

Si existen codespaces que ya no se conformen con alguna política que hayas definido, estos seguirán operando hasta que se les detenga o hasta que se agote el tiempo. Cuando el usuario reanuda el codespace, este estará sujeto a las restricciones de política.

{% note %}

**Nota**: No puedes inhabilitar el reenvío de puertos privados, ya que el reenvío de puertos es un requisito para que {% data variables.product.prodname_codespaces %} siga trabajando de acuerdo a su diseño, por ejemplo: para reenviar SSH por el puerto 22.

{% endnote %}

### Configurar políticas específicas para los repositorios y a lo largo de la organización

Cuando creas una política, eliges si esta aplica a todos los repositorios de tu organización o solo a algunos específicos. Si configuras una política a lo largo de la organización, entonces cualquier política que configures para los repositorios individuales debe de caer dentro de las restricciones que se configuraron a nivel organizacional. El agregar políticas restringe las opciones de visibilidad aún más y no menos.

Por ejemplo, podrías crear una política en toda la organización que restrinja las opciones de visibilidad para solo una organización. Entonces, puedes configurar una política para el repositorio A que deje de permitir la visibilidad tanto pública como privada, lo cual podría dar como resultado que solo el reenvío de puertos privados esté disponible para este repositorio. El configurar una política para el repositorio A que permitiera tanto el público como la organización podría dar como resultado que solo la organización tuviera visibilidad, ya que la política de toda la organización no permite la visibilidad pública.

Si agregas una política de toda la organización, deberías configurarla para que tenga la opción de visibilidad más indulgente disponible para cualquier repositorio en tu organización. Entonces podrás agregar las políticas específicas para los repositorios y así restringir aún más la elección.

## Agregar una política para limitar las opciones de visibilidad de puerto

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.codespaces.codespaces-org-policies %}
1. Haz clic en **Agregar restricción** y elige **Visibilidad de puerto**.

   ![Agrega una restricción para la visibilidad de puerto](/assets/images/help/codespaces/add-constraint-dropdown-ports.png)

1. Haz clic en {% octicon "pencil" aria-label="The edit icon" %} para editar la restricción.

   ![Edita la restricción de visibilidad de puerto](/assets/images/help/codespaces/edit-port-visibility-constraint.png)

1. Limpia la selección de las opciones de visibilidad de puerto (**Org** o **Público**) que no quieras que estén disponibles.

   ![Elegir las opciones de visibilidad de puerto](/assets/images/help/codespaces/choose-port-visibility-options.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Si quieres agregar otra restricción a la política, haz clic en **Agregar restricción** y elige otra de ellas. Para obtener más información sobre otras restricciones, consulta las secciones "[Restringir el acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)", "[Restringir el periodo de tiempo de inactividad](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)" y "[Restringir el periodo de detección para los codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)".
1. Después de que termines de agregar restricciones a tu política, haz clic en **Guardar**.
## Editar una política

Puedes editar una política existente. Por ejemplo, puede que quieras agregar o eliminar restricciones hacia o desde una política.

1. Muestra la página de "Políticas del Codespace". Para obtener más información, consulta la sección "[Agregar una política para limitar las opciones de visibilidad de puerto](#adding-a-policy-to-limit-the-port-visibility-options)".
1. Haz clic en el nombre de la política que quieres editar.
1. Haz los cambios requeridos y luego haz clic en **Guardar**.

## Borrar una política

1. Muestra la página de "Políticas del Codespace". Para obtener más información, consulta la sección "[Agregar una política para limitar las opciones de visibilidad de puerto](#adding-a-policy-to-limit-the-port-visibility-options)".
1. Haz clic en el botón de borrar a la derecha de la política que quieras borrar.

   ![El botón de borrar para una política](/assets/images/help/codespaces/policy-delete.png)
