---
ms.openlocfilehash: d7d401ed18395e4dd30f45df07e850338fa43da9
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: "145123186"
---
- Los clientes que cancelan un plan de pago que se haya comprado en {% data variables.product.prodname_marketplace %} deben degradar su versión automáticamente al plan gratuito de la app en caso de que éste exista. Se recomienda ampliamente la {% data reusables.marketplace.cancellation-clarification %} para permitir a los usuarios el rehabilitar su plan previo.
- Los clientes deben poder realizar la actualización de desde la interfaz de usuario de la aplicación si proporciona una [dirección URL de actualización](/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans/#about-upgrade-urls) en este formato: `https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>`
- Los clientes deben poder modificar qué usuarios tienen acceso a tu app desde el sitio web de la misma si compraron plazas (plan de precios por unidad) o si el plan ofrece colaboradores ilimitados.
- Los clientes deben poder ver los siguientes cambios a su cuenta inmediatamente en la sección de facturación, perfil, o configuración de cuenta del sitio web de la app:
  - Plan y precios actuales.
  - Nuevos planes comprados.
  - Mejoras, degradaciones, cancelaciones y la cantidad de días restantes del periodo de prueba gratuito.
  - Cambios en los ciclos de facturación (mensual o anual).
  - Uso y recursos restantes para los planes por unidad y de tasa fija. Por ejemplo, si el plan de precios es por unidad, el sitio de tu app debería mostrar las unidades que se utilizan y las que quedan disponibles.
