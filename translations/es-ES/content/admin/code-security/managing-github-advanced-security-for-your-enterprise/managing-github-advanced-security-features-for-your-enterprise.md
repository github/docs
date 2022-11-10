---
title: Administración de las características de GitHub Advanced Security para la empresa
intro: 'Puedes controlar las características de {% data variables.product.prodname_GH_advanced_security %} que protegen y analizan el código en todas las organizaciones que pertenecen a tu empresa.'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_advanced_security %} features for organizations in an enterprise.'
versions:
  feature: secret-scanning-enterprise-level
type: how_to
topics:
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Manage GitHub Advanced Security
ms.openlocfilehash: 0d48863d55805c5386435b7fef52a61a4ba7d43c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107209'
---
## Acerca de la administración de las características de {% data variables.product.prodname_advanced_security %}

Puedes usar las características de {% data variables.product.prodname_advanced_security %} para proteger la seguridad de las organizaciones de tu empresa. A fin de simplificar la administración de {% data variables.product.prodname_advanced_security %}, puedes habilitar o deshabilitar cada característica para todos los repositorios existentes o nuevos en las organizaciones que pertenecen a tu empresa.

{% ifversion ghes or ghec %}Para obtener información sobre la compra de una licencia de {% data variables.product.prodname_GH_advanced_security %}, consulta "[Acerca de la facturación de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% elsif ghae %}{% data variables.product.prodname_GH_advanced_security %} es gratuito en {% data variables.product.prodname_ghe_managed %} durante la versión beta.{% endif %}.

Si no has permitido {% data variables.product.prodname_GH_advanced_security %} para una organización, esa organización no se verá afectada al habilitar una característica para todos los repositorios existentes o nuevos. A fin de obtener más información sobre cómo no permitir {% data variables.product.prodname_GH_advanced_security %} para una organización, consulta "[Aplicación de directivas para la seguridad avanzada en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise)".

Cuando habilitas una o varias características de seguridad y análisis para los repositorios existentes, verás cualquier resultado que se muestra en {% data variables.product.prodname_dotcom %} al cabo de unos pocos minutos.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

## Administración de las características de {% data variables.product.prodname_advanced_security %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. En la barra lateral de la izquierda, haz clic en **Seguridad y análisis del código**. 
1. Opcionalmente, habilita o deshabilita una característica para todos los repositorios existentes.

   - A la derecha de la característica, haz clic en **Deshabilitar todo** o **Habilitar todo**. {% ifversion ghes or ghec %}Si el control de "{% data variables.product.prodname_GH_advanced_security %}" está deshabilitado, no tienes puestos disponibles en la licencia de {% data variables.product.prodname_GH_advanced_security %}.{% endif %}
   
   ![Captura de pantalla de los botones "Habilitar todo" o "Deshabilitar todo" para las características de "Configurar seguridad y análisis"](/assets/images/enterprise/security/enterprise-security-and-analysis-disable-or-enable-all.png)

   - Haz clic en **Habilitar/Deshabilitar todo** o **Habilitar/Deshabilitar para repositorios aptos** a fin de confirmar el cambio.
   
     ![Captura de pantalla del botón a fin de habilitar la característica para todos los repositorios aptos de la organización](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-secret-scanning.png)

1. Opcionalmente, para habilitar o deshabilitar automáticamente una característica cuando se agregan repositorios nuevos, selecciona la casilla que se encuentra debajo de la característica.
   
   ![Captura de pantalla de una casilla a fin de habilitar una característica para los repositorios nuevos](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-or-disable-feature-checkbox.png){% ifversion secret-scanning-custom-link-on-block %}

1. Opcionalmente, para incluir un vínculo de recursos en el mensaje que verán los miembros cuando intenten insertar un secreto, selecciona **Agregar un vínculo de recurso en la CLI y la interfaz de usuario web cuando se bloquee una confirmación**; luego, escribe una dirección URL y haz clic en **Guardar vínculo**.
  
  {% note %}

  **Nota**: Cuando se configura un vínculo personalizado para una organización, el valor de nivel de organización invalida el vínculo personalizado establecido para la empresa. Para obtener más información, consulta "[Protección de inserciones con el análisis de secretos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".

  {% endnote %}

   ![Captura de pantalla en la que se muestra la casilla y el campo de texto para habilitar un vínculo personalizado](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}

