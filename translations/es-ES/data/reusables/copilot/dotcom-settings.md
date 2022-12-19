---
ms.openlocfilehash: 6946b53d41210f3e5ec43a06e0917d60fe959096
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192877"
---
## Configuración de los valores de {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_dotcom_the_website %}

Una vez que tenga una suscripción o prueba de {% data variables.product.prodname_copilot %} activa, puede ajustar la configuración de {% data variables.product.prodname_copilot %} para su cuenta personal en {% data variables.product.prodname_dotcom %} en la [configuración de {% data variables.product.prodname_copilot %}](https://github.com/settings/copilot). La configuración se aplica en cualquier lugar en el que se usen los datos {% data variables.product.prodname_copilot %}. Se pueden configurar las sugerencias que ofrece {% data variables.product.prodname_copilot %} y cómo {% data variables.product.company_short %} usa los datos de telemetría.

### Habilitación o deshabilitación de la detección de duplicación

{% data reusables.copilot.duplication-setting-org %}

En {% data variables.product.prodname_copilot %} se incluye un filtro que detecta sugerencias de código que coinciden con el código público en {% data variables.product.prodname_dotcom %}. Puedes optar por habilitar o deshabilitar el filtro. Cuando el filtro está habilitado, {% data variables.product.prodname_copilot %} comprueba las sugerencias de código con su código circundante de aproximadamente 150 caracteres en el código público de los datos {% data variables.product.prodname_dotcom %}. Si hay una coincidencia o una coincidencia aproximada, la sugerencia no se mostrará.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.copilot-settings %}
1. En **Sugerencias que coinciden con código público**, selecciona el menú desplegable y, después, haz clic en **Permitir** para permitir sugerencias que coincidan con código público o **Bloquear** para bloquear la coincidencia de sugerencias con código público.
  ![Captura de pantalla de la opción](/assets/images/help/copilot/duplication-detection.png) de detección de duplicación {% data reusables.copilot.save-settings %}

### Habilitación o deshabilitación de telemetría

{% data reusables.copilot.telemetry-setting-org %}

Puedes elegir si GitHub recopila y conserva los fragmentos de código y los procesa y comparte con Microsoft y OpenAI si ajustas la configuración de usuario. Para más información sobre los datos que {% data variables.product.prodname_copilot %} puede recopilar en función de la configuración de telemetría, consulta "[Condiciones de {% data variables.product.company_short %} para características y productos adicionales](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)" y las [Preguntas más frecuentes de privacidad de {% data variables.product.prodname_copilot %}](https://github.com/features/copilot/#faq-privacy).

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.copilot-settings %}
1. Para permitir o evitar que los datos {% data variables.product.prodname_dotcom %} usen los datos de telemetría, seleccione o anule la selección de **Permitir que {% data variables.product.prodname_dotcom %} use mis fragmentos de código para mejorar el producto**.
  ![Captura de pantalla de la opción](/assets/images/help/copilot/telemetry-option.png) de telemetría {% data reusables.copilot.save-settings %}

## Información adicional

- [Preguntas más frecuentes de {% data variables.product.prodname_copilot %}](https://github.com/features/copilot/#faq)
