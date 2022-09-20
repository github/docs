---
ms.openlocfilehash: d36caae48a389b9b84d9659277996834ec58f3ba
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147683707"
---
1. En "{% data variables.product.prodname_secret_scanning_caps %}", en "Push protection" (Protección de inserciones), haga clic en **Enable all** (Habilitar todo).
   ![Captura de pantalla en la que se muestra cómo habilitar la protección de inserciones para {% data variables.product.prodname_secret_scanning %} para una organización](/assets/images/help/organizations/secret-scanning-enable-push-protection.png)
1. Opcionalmente, haz clic en "Habilitar automáticamente para repositorios privados agregados a {% data variables.product.prodname_secret_scanning %}."{% ifversion push-protection-custom-link-orgs %}.
1. Opcionalmente, para incluir un vínculo personalizado en el mensaje que verán los miembros cuando intenten insertar un secreto, selecciona **Agregar un vínculo de recurso en la CLI y la interfaz de usuario web cuando se bloquee una confirmación**, luego, escribe una dirección URL y haz clic en **Guardar vínculo**.
   {% ifversion push-protection-custom-link-orgs-beta %}{% indented_data_reference reusables.advanced-security.custom-link-beta spaces=3 %}{% endif %}

   ![Captura de pantalla en la que se muestra la casilla y el campo de texto para habilitar un vínculo personalizado](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}