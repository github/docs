---
title: Restricción del período de tiempo de espera de inactividad
shortTitle: Restrict timeout periods
intro: Puedes establecer un período de tiempo de espera máximo para cualquier codespace propiedad de tu organización.
permissions: 'To manage timeout constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: b07d1834078b065eee89acdb84e0e80a2db1e8a6
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158993'
---
## Información general

De forma predeterminada, el tiempo de espera de los codespaces se agota al cabo de 30 minutos de inactividad. Cuando se agota el tiempo de espera de un codespace, ya no incurrirá en cargos por el uso de procesos. 

La configuración personal de un usuario de {% data variables.product.prodname_dotcom %} le permite definir su propio período de tiempo de espera para los codespaces que cree. Podría ser superior al período predeterminado de 30 minutos. Para más información, consulta "[Configuración del período de tiempo de espera para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)."

Como propietario de la organización, es posible que te interese configurar restricciones sobre el período máximo de tiempo de espera de inactividad de los codespaces creados para los repositorios propiedad de la organización. Esto puede ayudarte a limitar los costos asociados a los codespaces que se dejan que agoten el tiempo de espera tras largos períodos de inactividad. Puedes establecer un tiempo de espera máximo para los codespaces de todos los repositorios propiedad de la organización o para los codespaces de repositorios específicos. 

{% note %}

**Nota**: Las restricciones del tiempo de espera máximo de inactividad solo se aplican a los codespaces que pertenecen a la organización.

{% endnote %}

Para más información sobre los precios de uso de proceso de {% data variables.product.prodname_github_codespaces %}, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

### Comportamiento al establecer una restricción del tiempo de espera máximo de inactividad

Si una persona establece el tiempo de espera de inactividad predeterminado en 90 minutos en su configuración personal y, luego, inicia un codespace para un repositorio con una restricción del tiempo de espera máximo de inactividad de 60 minutos, el tiempo de espera del codespace se agotará al cabo de 60 minutos de inactividad. Cuando se complete la creación del codespace, se mostrará un mensaje con la información siguiente:

> El tiempo de espera de inactividad de este codespace está establecido en 60 minutos de conformidad con la directiva de la organización.

### Configurar políticas específicas para los repositorios y a lo largo de la organización

Cuando crees una política, decide si se aplica a todos los repositorios de la organización o solo a algunos específicos. Si creas una directiva para toda la organización con una restricción del tiempo de espera, las restricciones de tiempo de espera de las directivas destinadas a repositorios específicos deben encontrarse dentro de la restricción configurada para toda la organización. Se aplicará el período de tiempo de espera más corto (en una directiva de toda la organización, en una directiva destinada a repositorios específicos o en la configuración personal de un usuario).

Si agregas una directiva para toda la organización con una restricción del tiempo de espera, debes establecer el tiempo de espera en el período más largo que sea aceptable. Después, puedes agregar directivas independientes que establezcan el tiempo de espera máximo en un período más corto para repositorios específicos de la organización.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Adición de una directiva para establecer el período de tiempo de espera máximo de inactividad

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Haz clic en **Agregar restricción** y selecciona **Tiempo de espera máximo de inactividad**.

   ![Captura de pantalla del menú desplegable "Agregar restricción"](/assets/images/help/codespaces/add-constraint-dropdown-timeout.png)

1. Haz clic en {% octicon "pencil" aria-label="The edit icon" %} para editar la restricción.

   ![Captura de pantalla del icono de lápiz para editar la restricción](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. Escribe el número máximo de minutos que los codespaces pueden permanecer inactivos antes de que se agote el tiempo de espera y, luego, haz clic en **Guardar**.

   ![Captura de pantalla de la configuración del tiempo de espera máximo en minutos](/assets/images/help/codespaces/maximum-minutes-timeout.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Si quieres agregar otra restricción a la directiva, haz clic en **Agregar restricción** y elige otra restricción. Para obtener información sobre otras restricciones, consulta:
   * "[Restricción del acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
   * "[Restricción de la imagen base para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)"
   * "[Restricción de la visibilidad de los puertos reenviados](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)"
   * "[Restricción del período de retención para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)"
1. Cuando hayas terminado de agregar restricciones a la directiva, haz clic en **Guardar**.

La directiva se aplicará a todos los codespaces nuevos que se facturen a tu organización. La restricción de tiempo de espera también se aplicará a los codespaces existentes la próxima vez que se inicien.

## Editar una política

Puedes editar una directiva existente. Por ejemplo, puede que te interese agregar restricciones a una directiva o quitarlas.

1. Muestra la página de "Políticas del Codespace". Para obtener más información, consulta "[Agregar una directiva para establecer un período de tiempo de espera máximo de inactividad](#adding-a-policy-to-set-a-maximum-idle-timeout-period)".
1. Haz clic en el nombre de la política que quieres editar.
1. Haz clic en el icono de lápiz ({% octicon "pencil" aria-label="The edit icon" %}) situado junto a la restricción "Tiempo de espera de inactividad máximo".
1. Realice los cambios necesarios y haga clic en **Save**.

## Borrar una política 

1. Muestra la página de "Políticas del Codespace". Para obtener más información, consulta "[Agregar una directiva para establecer un período de tiempo de espera máximo de inactividad](#adding-a-policy-to-set-a-maximum-idle-timeout-period)".
1. Haz clic en el botón de borrar a la derecha de la política que quieras borrar.

   ![Captura de pantalla del botón de eliminación de una directiva](/assets/images/help/codespaces/policy-delete.png)
