---
title: Acerca de la facturación para Codespaces
shortTitle: About billing
intro: Ver los precios y cómo administrar la facturación de {% data variables.product.prodname_codespaces %} para tu organización.
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: overview
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
- Billing
ms.openlocfilehash: bb2b22ce9f34122656134076d4d1e5b49b86e3ce
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "146381079"
---
## <a name="-data-variablesproductprodname_codespaces--pricing"></a>Precios de {% data variables.product.prodname_codespaces %}

El uso de {% data variables.product.prodname_codespaces %} se factura para todas las cuentas de organización y empresa en {% data variables.product.prodname_team %} y {% data variables.product.prodname_enterprise %}, que no incluyen minutos ni almacenamiento gratuitos. Actualmente, no se factura el uso de {% data variables.product.prodname_codespaces %} para las cuentas individuales. 

El uso de {% data variables.product.prodname_codespaces %} se cobra de acuerdo con las unidades de medida en la siguiente tabla:

| Producto             | SKU      | Unidad de medida | Precio |
| ------------------- | -------- | --------------- | ----- |
| Cálculos de codespaces  |  2 núcleos  | 1 hora          | $0.18 |
|                     |  4 núcleos  | 1 hora          | $0.36 |
|                     |  8 núcleos  | 1 hora          | $0.72 |
|                     |  16 núcleos | 1 hora          | $1.44 |
|                     |  32 núcleos | 1 hora          | $2.88 |
| Almacenamiento de codespaces  |  Storage | 1 GB-mes      | 0,07 USD |

## <a name="about-billing-for--data-variablesproductprodname_codespaces-"></a>Acerca de la facturación para {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.codespaces-billing %}

El uso de {% data variables.product.prodname_codespaces %} comparte la fecha de el facturación, método de pago y el recibo existente de la cuenta. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% ifversion ghec %} Si ha comprado {% data variables.product.prodname_enterprise %} mediante un Contrato Enterprise de Microsoft, puede conectar el id. de la suscripción de Azure a la cuenta empresarial para habilitar y pagar por el uso de {% data variables.product.prodname_codespaces %}. Para más información, vea "[Conexión de una suscripción de Azure a la empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_codespaces %}

### <a name="billing-for--data-variablesproductprodname_codespaces--prebuilds"></a>Facturación para las precompilaciones de los {% data variables.product.prodname_codespaces %}


{% data reusables.codespaces.billing-for-prebuilds %} 

## <a name="setting-a-spending-limit"></a>Configurar un límite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

Para obtener información sobre cómo administrar y cambiar el límite de gasto de la cuenta, vea "[Administración del límite de gasto para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".

{% data reusables.codespaces.exporting-changes %}

## <a name="limiting-the-choice-of-machine-types"></a>Limitar la elección de tipos de máquina

De forma predeterminada, se usa el tipo de máquina con menos recursos válidos cuando se crea un codespace. Sin embargo, es posible que los usuarios puedan elegir un tipo de máquina con más recursos. Pueden hacerlo al crear un codespace o pueden cambiar el tipo de máquina de un codespace existente. Para obtener más información, consulta "[Crear un codespace"](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)" y "[Cambiar el tipo de máquina de tu codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)".

Elegir un tipo de máquina que tenga más recursos afectará al cargo por minuto de ese codespace, tal y como se muestra anteriormente. 

Los propietarios de las organizaciones pueden crear una política para restringir los tipos de máquina que están disponibles para los usuarios. Para más información, vea "[Restricción del acceso a tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

## <a name="how-billing-is-handled-for-forked-repositories"></a>Cómo se maneja la facturación para los repositorios bifurcados

Los {% data variables.product.prodname_codespaces %} solo pueden utilizarse en las organizaciones donde se haya definido un propietario al que se le pueda facturar. Para incurrir en cargos a la organización, el usuario debe ser un miembro o colaborador, de lo contrario, no podrán crear un codespace. 

Por ejemplo, un usuario en una organización privada puede bifurcar un repositorio dentro de dicha organización y puede utilizar subsecuentemente un codespace que se facture a la organización; esto es porque la organización es la propietaria del repositorio padre, la cual puede eliminar el acceso del usuario, el repositorio bifurcado y el codespace.
  
## <a name="how-billing-is-handled-when-a-repository-is-transferred"></a>Cómo se maneja la facturación cuando se transfiere un repositorio

El uso se cobra y reporta por hora. Como tal, pagas por cualquier uso cuando un repositorio se encuentra dentro de tu organización. Cuando un repositorio se transfiere fuera de tu organización, cualquier codespace en este repositorio se elimina como parte del proceso de transferencia.

## <a name="what-happens-when-users-are-removed"></a>Lo que sucede cuando se eliminan usuarios

Si un usuario se elimina de una organización o repositorio, su codespace se borra automáticamente. 
