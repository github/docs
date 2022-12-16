---
title: Visualización del uso de GitHub Copilot
intro: 'Puedes ver cuántos usuarios tienen acceso a {% data variables.product.prodname_copilot %} en todas las organizaciones de la empresa.'
product: '{% data reusables.gated-features.copilot-billing %}'
miniTocMaxHeadingLevel: 3
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_copilot %} in their enterprise.'
versions:
  ghec: '*'
type: how_to
topics:
  - Copilot
shortTitle: View your usage
ms.openlocfilehash: 9b481cfd11a3c96ce98175d3b30e3b26889c4148
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193425'
---
## Acerca del uso de {% data variables.product.prodname_copilot %}

Puedes ver la información de utilización de {% data variables.product.prodname_copilot %} en la empresa, desglosada por organización, o en la organización, desglosada por estado de asignación de puestos. En el nivel empresarial, esta información incluye el número de puestos asignados en cada organización y el gasto total asociado a cada organización para el período de facturación actual. En el nivel de organización, esta información incluye el número total de puestos, los puestos que se han transferido del período de facturación anterior, los nuevos puestos agregados durante el período actual y los puestos que se quitarán al final del período actual. 

Si un administrador de la organización ha asignado uno o varios puestos a la mitad del período de facturación actual, la información de nivel empresarial mostrará un número decimal de puestos. Por ejemplo, si la organización inició el período de facturación con 3 puestos asignados y, posteriormente, asignó un puesto adicional a mitad del período, la información de utilización de puestos mostrará 3,5 puestos. El "3" que representa los puestos asignados al principio del período y el "0,5" representa el puesto adicional asignado a mitad del período. 

La información de gasto mostrará el gasto total de cada organización para el período de facturación actual. El gasto total de la organización para el período actual suele ser el número de puestos asignados, multiplicado por el costo por puesto (19 USD por puesto al mes). Sin embargo, si al mismo miembro de la organización se le asigna un puesto en varias organizaciones, su utilización de puestos se reflejará en cada organización, pero como la empresa solo pagará una vez, su gasto solo se reflejará en la organización en la que se le asignó por primera vez un puesto.

## Visualización de la utilización de {% data variables.product.prodname_copilot_for_business %}

### A nivel empresarial

{% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. En "Utilización mensual de {% data variables.product.prodname_copilot_short %}", visualiza el desglose de la utilización de {% data variables.product.prodname_copilot %}.
    - En "Utilización de puestos", puedes ver el número total de puestos asignados actualmente por organización, con un número decimal que representa los puestos asignados a la mitad del período de facturación actual.
    - En "Gasto", puedes ver el costo total de {% data variables.product.prodname_copilot_for_business %} para el período de facturación actual por organización.

   ![Captura de pantalla de la página de utilización de {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/monthly-usage-enterprise.png)

### A nivel organizacional

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la sección "Acceso" de la barra lateral, haz clic en **{% octicon "credit-card" aria-label="The credit card icon" %} Billing and plans** (Facturación y planes).
1. En "{% data variables.product.prodname_copilot_short %}", visualiza el desglose de la utilización de {% data variables.product.prodname_copilot %} y los próximos cambios en la organización.
 
   ![Captura de pantalla de la página de utilización de puestos de {% data variables.product.prodname_copilot %} del nivel de la organización](/assets/images/help/copilot/org-level-seat-view.png)
