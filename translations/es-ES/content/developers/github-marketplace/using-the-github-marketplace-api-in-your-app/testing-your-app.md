---
title: Prueba de la aplicación
intro: 'GitHub te recomienda probar tu app con las API y los webhooks antes de emitir tu listado a {% data variables.product.prodname_marketplace %} para que puedas proporcionar una experiencia ideal para los clientes. Antes de que un experto de incorporación apruebe tu app, ésta deberá administrar los flujos de facturación adecuadamente.'
redirect_from:
  - /apps/marketplace/testing-apps-apis-and-webhooks
  - /apps/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
  - /marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
  - /developers/github-marketplace/testing-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: c542f5bd46e4555a4459c669e2f9d75e29b63ffe
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145112490'
---
## Probar las apps

Puedes utilizar un borrador de listado de {% data variables.product.prodname_marketplace %} para simular cada uno de los flujos de facturación. Un listado en estado de borrador significa que no se ha emitido para aprobación. Cualquier compra que realice mediante un borrador de anuncio de {% data variables.product.prodname_marketplace %} _no_ creará transacciones reales, y GitHub no realizará cargos en la tarjeta de crédito. Nota que solo puedes simular compras para los planes que están publicados en el borrador de la lista y no para el borrador de los planes. Para más información, vea "[Borrador de un anuncio para la aplicación](/developers/github-marketplace/drafting-a-listing-for-your-app)" y "[Uso de la API {% data variables.product.prodname_marketplace %} en la aplicación](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

### Utilizar una app de desarrollo con un borrador de listado para probar los cambios

Un listado de {% data variables.product.prodname_marketplace %} únicamente puede asociarse con un solo registro de app, y cada app puede acceder únicamente a su propio listado de {% data variables.product.prodname_marketplace %}. Es por esto que te recomendamos configurar una app de desarrollo por separado con la misma configuración que la aplicación de producción, y crear un _borrador_ de anuncio de {% data variables.product.prodname_marketplace %} que pueda utilizar para las pruebas. El borrador del listado de {% data variables.product.prodname_marketplace %} te permite probar los cambios sin afectar a los usuarios activos de tu app productiva. Nunca tendrás que emitir tu listado de desarrollo de {% data variables.product.prodname_marketplace %}, ya que solo lo utilizarás para las pruebas.

Ya que solo puedes crear un borrador de listado de {% data variables.product.prodname_marketplace %} para las apps públicas, debes poner tu app de desarrollo como pública. Las apps públicas no pueden descubrirse fuera de los listados publicados de {% data variables.product.prodname_marketplace %} mientras no compartas la URL de éstas. Solo el dueño de la aplicación podrá ver el lsitado de Marketplace en su estado de borrador.

Una vez que cuentes con una app de desarrollo con un listado en estado de borrador, puedes utilizarla para probar los cambios que hagas a dicha app mientras que lo integras con la API y los webhooks de {% data variables.product.prodname_marketplace %}.

{% warning %}

No hagas compras de prueba con las apps que están activas en {% data variables.product.prodname_marketplace %}.

{% endwarning %}

### Simular eventos de compra en Marketplace

Tus escenarios de prueba podrían requerir que configures los planes de los listados que ofrecen periodos de prueba gratuitos y que cambies entre las suscripciones de pago y gratuitas. Como los cambios a una versión anterior y las cancelaciones no surten efecto hasta el siguiente ciclo de facturación, GitHub proporciona una característica exclusiva para desarrolladores para "Aplicar el cambio Pendiente", y forzar las acciones de los planes `changed` y `cancelled` para que surtan efecto inmediatamente. Puede acceder a **Aplicar cambio pendiente** para las aplicaciones con _borradores_ de anuncios de Marketplace en https://github.com/settings/billing#pending-cycle:

![Aplicar el cambio pendiente](/assets/images/github-apps/github-apps-apply-pending-changes.png)

## Probar las API

También proporcionamos terminales de prueba para muchas de las terminales de las API de {% data variables.product.prodname_marketplace %}, las cuales devuelven datos falsos de código predefinido que puedes utilizar para hacer pruebas. Para recibir datos auxiliares, debe especificar direcciones URL con código auxiliar, que incluyen `/stubbed` en la ruta (por ejemplo, `/user/marketplace_purchases/stubbed`). Para obtener una lista de los puntos de conexión que admiten este enfoque de datos auxiliares, vea [Puntos de conexión de {% data variables.product.prodname_marketplace %}](/rest/reference/apps#github-marketplace).

## Probar los webhooks

GitHub proporciona herramientas para probar tus cárgas útiles desplegadas. Para más información, vea "[Prueba de webhooks](/webhooks/testing/)".
