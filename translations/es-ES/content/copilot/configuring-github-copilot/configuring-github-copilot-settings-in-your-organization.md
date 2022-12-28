---
title: Configuración de GitHub Copilot en tu organización
intro: 'Puedes configurar {% data variables.product.prodname_copilot %} en tu organización, incluido conceder y revocar el acceso a usuarios y equipos y decidir si bloquear las sugerencias que coinciden con código público.'
product: '{% data reusables.gated-features.copilot %}'
miniTocMaxHeadingLevel: 3
permissions: 'Organization owners and members with admin permissions can configure {% data variables.product.prodname_copilot %} in their organization.'
versions:
  ghec: '*'
topics:
  - Copilot
shortTitle: Organization settings
ms.openlocfilehash: 345d0a48aa3f48e453fd8455027f683ee78a7640
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193569'
---
## Acerca de la configuración de {% data variables.product.prodname_copilot %} en tu organización

{% data reusables.copilot.about-copilot %}

Para configurar el uso de {% data variables.product.prodname_copilot %} en tu organización, la organización debe pertenecer a una cuenta de {% data variables.product.prodname_ghe_cloud %} y antes un administrador de la empresa debe habilitar {% data variables.product.prodname_copilot_business_short %} en la organización. Los administradores de la organización podrán administrar la asignación de puestos dentro de la organización. 

Según cuál sea la configuración de directiva definida en el nivel de empresa, un administrador de la organización también puede decidir si permitir o bloquear las sugerencias de {% data variables.product.prodname_copilot %} que coincidan con código público. Para obtener más información, consulta [Aplicación de directivas de {% data variables.product.prodname_copilot %} en tu empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise).

## Configuración del acceso a {% data variables.product.prodname_copilot %} en tu organización

Cuando un administrador de {% data variables.product.prodname_ghe_cloud %} habilite una suscripción de {% data variables.product.prodname_copilot_business_short %} en tu organización, puedes asignar puestos de {% data variables.product.prodname_copilot %} a los usuarios y equipos de dicha organización.

### Habilitar el acceso a {% data variables.product.prodname_copilot %} para todos los usuarios actuales y futuros de la organización

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la sección "Código, planificación y automatización" de la barra lateral, haz clic en **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** y luego haz clic en **Acceder**.
1. En "Permisos de usuario", para habilitar {% data variables.product.prodname_copilot %} para todos los usuarios actuales y futuros de la organización, selecciona **Permitir para todos los miembros**.

   ![Captura de pantalla de los permisos de usuario de {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/allow-all-members.png)

1. En el cuadro de diálogo "Confirmar asignación de puestos", para confirmar que quieres habilitar {% data variables.product.prodname_copilot %} para todos los usuarios actuales y futuros de tu organización, haz clic en **Confirmar**.

   ![Captura de pantalla del cuadro de diálogo "Confirmar asignación de puestos"](/assets/images/help/copilot/confirm-seat-assignment.png)

1. Para guardar los cambios, haga clic en **Guardar**.

   ![Captura de pantalla del botón para guardar permisos de usuario de {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/user-permissions-save.png)

### Habilitar el acceso a {% data variables.product.prodname_copilot %} para usuarios específicos de la organización

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la sección "Código, planificación y automatización" de la barra lateral, haz clic en **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** y luego haz clic en **Acceder**.
1. En "Permisos de usuario", para habilitar {% data variables.product.prodname_copilot %} para usuarios o equipos específicos de la organización, selecciona **Equipos/usuarios seleccionados** y haz clic en **Guardar**.

   ![Captura de pantalla de permisos de equipos/usuarios seleccionados de {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/selected-users-teams.png)

1. Si vas a actualizar el acceso de usuario desde la opción **Permitir para todos los miembros**, en el cuadro de diálogo "Confirmar asignación de puestos", selecciona cómo quieres empezar a asignar el acceso.
    - Para anular la asignación de todos los miembros y, luego, seleccionar solo aquellos que deben tener acceso, selecciona **Empezar desde cero**.
    - Para mantener a todos los miembros que tienen acceso actualmente y, luego, seleccionar aquellos que no deben tener acceso, selecciona **Mantener todos los usuarios**.

      ![Captura de pantalla del cuadro de diálogo "Confirmar asignación de puestos"](/assets/images/help/copilot/confirm-seat-assignment-selected.png)

1. Si has seleccionado **Empezar desde cero**, haz clic en **Agregar personas** o **Agregar equipos** para agregar usuarios individuales o equipos completos.

   ![Captura de pantalla de los botones "Agregar personas" o "Agregar equipos"](/assets/images/help/copilot/add-people-add-teams.png)

1. Si has seleccionado **Agregar personas**, en el cuadro de diálogo "Permitir el acceso a GitHub Copilot a los miembros seleccionados de <ORGANIZACIÓN>", puedes localizar miembros individuales, o bien agregar miembros de forma masiva cargando un archivo CSV.
 
   ![Captura de pantalla del cuadro de diálogo para permitir el acceso a miembros seleccionados](/assets/images/help/copilot/enable-access-for-selected-members.png)

    - Para localizar miembros individuales, escribe el nombre de usuario, el nombre completo o la dirección de correo electrónico del miembro en la barra de búsqueda.
    - Para agregar miembros de forma masiva, haz clic en **Cargar CSV** y, a continuación, carga un archivo CSV que incluya el nombre de usuario o la dirección de correo electrónico de cada miembro que quieras agregar, separados por una coma.

        {% warning %}

      **Advertencia:** Cuando se carga un archivo CSV, {% data variables.product.prodname_copilot %} buscará en todos los usuarios en {% data variables.product.prodname_dotcom_the_website %} para hallar coincidencias. Si el archivo CSV incluye usuarios que no son miembros de tu organización, se les invitará a unirse a tu organización cuando hagas clic en **Agregar XX miembros**.

      {% endwarning %}

    - Revisa la lista de usuarios generada a partir del archivo CSV. Para confirmar que quieres conceder acceso a los usuarios de la lista, haz clic en **Agregar XX miembros a la lista de acceso**. Si quieres rechazar la lista, haz clic en **Cancelar**.

     ![Captura de pantalla de los resultados de la lista CSV](/assets/images/help/copilot/csv-results.png)

1. Si has seleccionado **Agregar equipos**, en el cuadro de diálogo "Permitir el acceso a GitHub Copilot a los equipos seleccionados de <ORGANIZACIÓN>", empieza a escribir el nombre del equipo en la barra de búsqueda, selecciona el equipo que quieras agregar y haz clic en **Seleccionar un equipo arriba**.

   ![Captura de pantalla del cuadro de diálogo para permitir el acceso a equipos seleccionados](/assets/images/help/copilot/add-teams.png)

1. Si has seleccionado **Mantener todos los usuarios**, revisa la lista completa de miembros de la organización y selecciona aquellos cuyo acceso a {% data variables.product.prodname_copilot %} quieras revocar.

   ![Captura de pantalla de la lista Mantener todos los usuarios](/assets/images/help/copilot/access-removal-list.png)

1. Haz clic en la lista desplegable **XX miembros seleccionados** y, después, haz clic en **Quitar**.

   ![Captura de pantalla del botón para quitar acceso](/assets/images/help/copilot/remove-access.png)

### Deshabilitar el acceso a {% data variables.product.prodname_copilot %} en toda la organización

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la sección "Código, planificación y automatización" de la barra lateral, haz clic en **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** y luego haz clic en **Acceder**.
1. En "Permisos de usuario", para deshabilitar {% data variables.product.prodname_copilot %} para todos los usuarios de la organización, selecciona **Deshabilitado**.

   ![Captura de pantalla de permisos de usuario deshabilitados de {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/disable-access.png)

1. Para guardar los cambios, haga clic en **Guardar**.
   
   ![Captura de pantalla del botón para guardar permisos de usuario de {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/save-disabled.png)

### Deshabilitar el acceso a {% data variables.product.prodname_copilot %} para usuarios específicos de la organización

Quitar un usuario de la organización u organizaciones que les han asignado un puesto de {% data variables.product.prodname_copilot %} hace que se anule automáticamente la asignación del puesto. Opcionalmente, puedes anular la asignación de un puesto de {% data variables.product.prodname_copilot %} a un miembro, pero sin que este pierda su pertenencia. Estos cambios surtirán efecto desde el arranque del siguiente ciclo de facturación.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la sección "Código, planificación y automatización" de la barra lateral, haz clic en **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** y luego haz clic en **Acceder**.
1. En "Permisos de usuario", selecciona **Equipos o usuarios seleccionados** y luego haz clic en **Guardar**. 

   ![Captura de pantalla de permisos de equipos/usuarios seleccionados de {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/selected-users-teams.png)

    - En el cuadro de diálogo emergente "Confirmar asignación de puestos", selecciona **Mantener todos los usuarios**.

      ![Captura de pantalla del cuadro de diálogo "Confirmar asignación de puestos"](/assets/images/help/copilot/confirm-seat-assignment-selected.png)
  
1. En "Administrar acceso", escribe el nombre de usuario, el nombre completo o la dirección de correo electrónico del miembro en la barra de búsqueda.

   ![Captura de pantalla de la barra de búsqueda](/assets/images/help/copilot/manage-access-search.png)

1. Para quitar el miembro de la lista de usuarios que tienen acceso a {% data variables.product.prodname_copilot %}, haz clic en **Quitar**.

   ![Captura de pantalla del botón para quitar acceso](/assets/images/help/copilot/remove-access-button.png)

## Configuración de directivas de detección de sugerencias de {% data variables.product.prodname_copilot %} en tu organización

En {% data variables.product.prodname_copilot %} se incluye un filtro que detecta sugerencias de código que coinciden con el código público en {% data variables.product.prodname_dotcom %}. Cuando el filtro está habilitado, {% data variables.product.prodname_copilot %} comprueba las sugerencias de código con su código circundante de aproximadamente 150 caracteres en el código público de los datos {% data variables.product.prodname_dotcom %}. Si hay una coincidencia o una coincidencia aproximada, la sugerencia no se mostrará.

Si el administrador de la empresa ha seleccionado **Sin directiva (dejar que cada organización decida)** para la detección de sugerencias en el nivel de empresa, puedes establecer una directiva de detección de sugerencias para tu organización. Si varias organizaciones asignan un puesto a un miembro de la organización con diferentes directivas de detección de sugerencias en la misma empresa, {% data variables.product.prodname_copilot %} usará la directiva más restrictiva.


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la sección "Código, planificación y automatización" de la barra lateral, haz clic en **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** y luego haz clic en **Directivas**.
1. En la lista desplegable "Sugerencias que coinciden con código público", selecciona **Permitir** o **Bloquear** para permitir o bloquear la detección de sugerencias que coincidan con código público.

   ![Captura de pantalla de la lista desplegable de sugerencias que coinciden con código público](/assets/images/help/copilot/duplication-detection-org-policy.png)

## Información adicional

- [Declaración de privacidad de {% data variables.product.prodname_copilot_for_business %}](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)
