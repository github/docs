---
title: Configurar la política de referente para tu empresa
shortTitle: Configure referrer policy
intro: 'Puedes incrementar la privacidad de {% data variables.product.product_location %} si configuras la política para las solicitudes de origen cruzado.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Networking
  - Privacy
  - Security
ms.openlocfilehash: 4824e938e044a89e9d0e534564214c6a46ba44da
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066501'
---
## Acerca de la política de referente para tu empresa

La política de referente controla la información que transmite {% data variables.product.product_name %} en los encabezados HTTP cuando alguien visita un enlace de {% data variables.product.product_location %} a un sitio externo.

De manera predeterminada, cuando un usuario de {% data variables.product.product_location %} visita un vínculo a otro sitio desde el archivo o comentario en su instancia, la solicitud incluye el nombre de host de la instancia en texto simple dentro del encabezado `Referer`. Si el enlace lleva a un sitio web externo, el propietario de este podría leer el nombre de host de tu instancia en los archivos de bitácora o en las solicitudes.

Puedes controlar la información que envía {% data variables.product.product_name %} cuando un usuario visita un enlace de tu instancia.

## Activación de la directiva de origen de referencia `same-origin`

Puede habilitar la política de origen de referencia de `same-origin` para indicar a los exploradores modernos que excluyan el nombre de host de {% data variables.product.product_location %} de las solicitudes a sitios web externos. El ajuste aplica a todos los enlaces de la interfaz web en tu instancia. De forma predeterminada, {% data variables.product.product_name %} usa las directivas de origen de referencia `origin-when-cross-origin` y `strict-origin-when-cross-origin`, lo que significa que el nombre de host de la instancia aparecerá en solicitudes HTTP y HTTPS a sitios web externos.

{% note %}

**Nota**: Cambiar la directiva de origen de referencia a `same-origin` puede afectar a los sitios externos que esperen un nombre de host en los encabezados HTTP de una solicitud.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. En "User Agent Referrer Policy", seleccione **Enable same origin referrer policy for all organizations**.
  ![Casilla de verificación para habilitar la misma directiva de origen de referencia](/assets/images/enterprise/settings/referrer-policy-checkbox.png)
1. Haga clic en **Save**(Guardar).
  ![Botón Save (Guardar) para habilitar la misma directiva de origen de referencia](/assets/images/enterprise/settings/referrer-policy-save-button.png)
