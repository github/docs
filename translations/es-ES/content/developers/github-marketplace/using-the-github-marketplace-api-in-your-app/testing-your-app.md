---
title: Probar tu app
intro: 'GitHub te recomienda probar tu app con las API y los webhooks antes de emitir tu listado a {% data variables.product.prodname_marketplace %} para que puedas proporcionar una experiencia ideal para los clientes. Antes de que un experto de incorporación apruebe tu app, ésta deberá administrar los flujos de facturación adecuadamente.'
redirect_from:
  - /apps/marketplace/testing-apps-apis-and-webhooks/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/
  - /marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
  - /developers/github-marketplace/testing-your-app
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---

### Probar las apps

Puedes utilizar un borrador de listado de {% data variables.product.prodname_marketplace %} para simular cada uno de los flujos de facturación. Un listado en estado de borrador significa que no se ha emitido para aprobación. Cualquier compra que hagas utilizando un borrador de listado de {% data variables.product.prodname_marketplace %} _no_ creará transacciones reales, y GitHub no hará cargos a tu tarjeta de crédito. Nota que solo puedes simular compras para los planes que están publicados en el borrador de la lista y no para el borrador de los planes. Para obtener más información, consulta las secciones "[Hacer un borrador de listado para tu app](/developers/github-marketplace/drafting-a-listing-for-your-app)" y "[Utilizar la API de {% data variables.product.prodname_marketplace %} en tu app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

#### Utilizar una app de desarrollo con un borrador de listado para probar los cambios

Un listado de {% data variables.product.prodname_marketplace %} únicamente puede asociarse con un solo registro de app, y cada app puede acceder únicamente a su propio listado de {% data variables.product.prodname_marketplace %}. Es por esto que te recomendamos configurar una app de desarrollo por separado con la misma configuración que la productiva, y que crees un _borrador_ de listado de {% data variables.product.prodname_marketplace %} que puedas utilizar para las pruebas. El borrador del listado de {% data variables.product.prodname_marketplace %} te permite probar los cambios sin afectar a los usuarios activos de tu app productiva. Nunca tendrás que emitir tu listado de desarrollo de {% data variables.product.prodname_marketplace %}, ya que solo lo utilizarás para las pruebas.

Ya que solo puedes crear un borrador de listado de {% data variables.product.prodname_marketplace %} para las apps públicas, debes poner tu app de desarrollo como pública. Las apps públicas no pueden descubrirse fuera de los listados publicados de {% data variables.product.prodname_marketplace %} mientras no compartas la URL de éstas. Solo el dueño de la aplicación podrá ver el lsitado de Marketplace en su estado de borrador.

Una vez que cuentes con una app de desarrollo con un listado en estado de borrador, puedes utilizarla para probar los cambios que hagas a dicha app mientras que lo integras con la API y los webhooks de {% data variables.product.prodname_marketplace %}.

{% warning %}

No hagas compras de prueba con las apps que están activas en {% data variables.product.prodname_marketplace %}.

{% endwarning %}

#### Simular eventos de compra en Marketplace

Tus escenarios de prueba podrían requerir que configures los planes de los listados que ofrecen periodos de prueba gratuitos y que cambies entre las suscripciones de pago y gratuitas. Ya que los decrementos y las cancelaciones no toman efecto sino hasta el siguiente ciclo de facturación, GitHub proporciona una característica exclusiva para desarrolladores para "Aplicar el Cambio Pendiente", la cual fuerza las acciones de `changed` y `cancelled` para que tomen efecto inmediatamente. Puedes acceder a la opción de **Aplicar Cambios Pendientes** para las apps con listados de Marketplace en estado de _borrador_ en https://github.com/settings/billing#pending-cycle:

![Aplicar el cambio pendiente](/assets/images/github-apps/github-apps-apply-pending-changes.png)

### Probar las API

También proporcionamos terminales de prueba para muchas de las terminales de las API de {% data variables.product.prodname_marketplace %}, las cuales devuelven datos falsos de código predefinido que puedes utilizar para hacer pruebas. Para recibir datos de prueba, debes especificar las URL de prueba que incluyan `/stubbed` en la ruta (por ejemplo, `/user/marketplace_purchases/stubbed`). Para obtener una lista de terminales que son compatibles con este acercamiento de datos de prueba, consulta la sección de [terminales de {% data variables.product.prodname_marketplace %}](/rest/reference/apps#github-marketplace).

### Probar los webhooks

GitHub proporciona herramientas para probar tus cárgas útiles desplegadas. Para obtener más información, consulta la sección "[Probar los webhooks](/webhooks/testing/)".
