---
title: Restricción del período de retención para codespaces
shortTitle: Restrict the retention period
intro: Puedes establecer un período de retención máximo para los codespaces que pertenezcan a tu organización.
permissions: 'To manage retention constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: 3c114fe41b06176899f9dd11a6dcd51c038c88e5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158985'
---
## Información general

Los {% data variables.product.prodname_github_codespaces %} se eliminan automáticamente una vez que se hayan detenido y hayan permanecido inactivos durante un número definido de días. El período de retención de cada codespace se establece cuando se crea el codespace y no cambia. 

Todos los usuarios que tengan acceso a {% data variables.product.prodname_github_codespaces %} pueden configurar un período de retención para los codespaces que creen. La configuración inicial de este período de retención predeterminado es de 30 días. Cada usuario puede establecer este período dentro del intervalo de 0 a 30 días. Para más información, consulta "[Configuración de la eliminación automática de los codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)". 

Como propietario de la organización, es posible que te interese configurar restricciones sobre el período máximo de retención de los codespaces creados para los repositorios propiedad de la organización. Esto puede ayudarte a limitar los costos de almacenamiento asociados a los codespaces que se detienen y se dejan sin usar hasta que se eliminan automáticamente. Para más información sobre los cargos de almacenamiento, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)". Puedes establecer un período de retención máximo para todos o algunos repositorios específicos propiedad de tu organización. 

### Configurar políticas específicas para los repositorios y a lo largo de la organización

Cuando crees una política, decide si se aplica a todos los repositorios de la organización o solo a algunos específicos. Si creas una directiva para toda la organización con una restricción de retención de codespace, las restricciones de retención de las directivas dirigidas a repositorios específicos deben ser más cortas que la restricción configurada para toda la organización o no tendrán ningún efecto. Se aplica el periodo de retención más corto, en una directiva para toda la organización, una directiva dirigida a repositorios específicos o el periodo de retención predeterminado en la configuración personal de alguien.

Si agregas una directiva para toda la organización con una restricción de retención, debes establecer el período de retención en el más largo que sea aceptable. Después, puedes agregar otras directivas que establezcan la retención máxima en un período más corto para repositorios concretos de la organización.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Adición de una directiva para establecer el período de retención máximo de codespace

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Haz clic en **Agregar restricción** y elige **Período de retención**.

   ![Captura de pantalla del menú desplegable "Agregar restricción"](/assets/images/help/codespaces/add-constraint-dropdown-retention.png)

1. Haz clic en {% octicon "pencil" aria-label="The edit icon" %} para editar la restricción.

   ![Captura de pantalla del icono del lápiz para editar la restricción](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. Escribe el número máximo de días que los codespaces pueden permanecer detenidos antes de que se eliminen automáticamente y, luego, haz clic en **Guardar**.

   ![Captura de pantalla de la configuración del período de retención en días](/assets/images/help/codespaces/maximum-days-retention.png)

   {% note %}

   **Notas**: 
   * Un día, en este contexto, es un período de 24 horas, comenzando en la hora del día en que se detuvo el codespace.
   * El intervalo válido es de 0 a 30 días.
   * Establecer el período en `0` dará lugar a que los codespaces se eliminen inmediatamente cuando se detengan o cuando se haya agotado el tiempo de espera debido a la inactividad.

   {% endnote %}

{% data reusables.codespaces.codespaces-policy-targets %}
1. Si quieres agregar otra restricción a la directiva, haz clic en **Agregar restricción** y elige otra restricción. Para obtener información sobre otras restricciones, consulta:
   * "[Restricción del acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
   * "[Restricción de la imagen base para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)"
   * "[Restricción de la visibilidad de los puertos reenviados](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)"
   * "[Restricción del período de tiempo de espera de inactividad](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"
1. Cuando hayas terminado de agregar restricciones a la directiva, haz clic en **Guardar**.

La directiva se aplicará a todos los nuevos codespaces que se puedan facturar a tu organización. La restricción del período de retención solo se aplica a la creación del codespace.

## Editar una política

Puedes editar una directiva existente. Por ejemplo, puede que te interese agregar restricciones a una directiva o quitarlas.

La restricción de período de retención solo se aplica a los codespaces cuando se crean. La edición de una directiva no tiene ningún efecto sobre los codespaces existentes.

1. Muestra la página de "Políticas del Codespace". Para más información, consulta "[Adición de una directiva para establecer un período máximo de retención de codespace](#adding-a-policy-to-set-a-maximum-codespace-retention-period)".
1. Haz clic en el nombre de la política que quieres editar.
1. Haz clic en el icono del lápiz ({% octicon "pencil" aria-label="The edit icon" %}) situado junto a la restricción "Período de retención".
1. Realice los cambios necesarios y haga clic en **Save**.

## Borrar una política 

Puedes eliminar una directiva en cualquier momento. La eliminación de una directiva no tiene ningún efecto sobre los codespaces existentes.

1. Muestra la página de "Políticas del Codespace". Para más información, consulta "[Adición de una directiva para establecer un período máximo de retención de codespace](#adding-a-policy-to-set-a-maximum-codespace-retention-period)".
1. Haz clic en el botón de borrar a la derecha de la política que quieras borrar.

   ![Captura de pantalla del botón de eliminación de una directiva](/assets/images/help/codespaces/policy-delete.png)
