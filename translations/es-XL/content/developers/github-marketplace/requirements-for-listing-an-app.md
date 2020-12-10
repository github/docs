---
title: Requisitos para listar una app
intro: 'Las apps en {% data variables.product.prodname_marketplace %} deben cumplir con los requisitos detallados en esta página antes de que nuestros especialistas de incorporación a {% data variables.product.prodname_marketplace %} aprueben el listado.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started-with-github-marketplace-listings/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/
  - /marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
versions:
  free-pro-team: '*'
---



Antes de que emias tu app para revisión, debes leer y aceptar las condiciones del "[Acuerdo de desarrollador de {% data variables.product.prodname_marketplace %}](/articles/github-marketplace-developer-agreement/)". Aceptarás las condiciones dentro de tu [borrador de listado](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/) en {% data variables.product.product_name %}. Una vez que hayas emitido tu app, uno de los especialistas de incorporación de {% data variables.product.prodname_marketplace %} te contactará y te dará más información sobre el proceso de incorporación, y revisará tu app asegurarse de que cumple con estos requisitos:

### Experiencia del usuario

- Las {% data variables.product.prodname_github_app %} deben contar con un mínimo de 100 instalaciones.
- Las {% data variables.product.prodname_oauth_app %} deben tener un mínimo de 200 usuarios.
- Las apps deben proporcionar valor a los clientes e integrarse con la plataforma de alguna forma más allá de la autenticación.
- Las apps deben estar disponibles al público en {% data variables.product.prodname_marketplace %} y no pueden estar en fase beta o únicamente disponibles con invitación.
- Las apps no pueden persuadir activamente a los usuarios para salir de {% data variables.product.product_name %}.
- Los materiales de marketing para la app deben representar con precisión el comportamiento de ésta.
- Las apps deben incluir enlaces para la documentación de cara al cliente que describa cómo configurarlas y configurarlas.
- Cuando un cliente compra una app y GitHub los redirige a la URL de instalación de la misma, la app debe comenzar inmediatamente con el flujo de OAuth. Para encontrar más detalles, consulta la sección "[Gestionar las compras nuevas y los periodos de prueba gratuitos](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/#step-3-authorization)".

- Los clientes deben poder instalar tu app y seleccionar repositorios tanto en una cuenta personal como en una organizacional. Debe poder ver y administrar esas cuentas por separado.

### Marca y listado

- Las apps que utilizan los logos de GitHub deben seguir los lineamientos de "[Logos y uso de {% data variables.product.product_name %}](https://github.com/logos)".
- Las apps deben tener un logo, tarjeta de características, e imágenes de impresión de pantalla que cumplan con las recomendaciones que se proporcionan en "[Escribir las descripciones de los listados de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)".
- Los listados deben incluir descripciones que estén bien escritas y no tengan errores gramaticales. Para obtener orientación sobre cómo escribir tu listado, consulta la sección "[Escribir las descripciones de los listados de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)".

### Seguridad

Las apps pasarán por una revisión de seguridad antes de que se listen en {% data variables.product.prodname_marketplace %}. Para tener una revisión exitosa, se debe cumplir con los requisitos y seguir las mejores prácticas de seguridad listadas en "[Proceso de revisión de seguridad](/marketplace/getting-started/security-review-process/)". Para obtener información sobre el proceso de revisión, contacta a [marketplace@github.com](mailto:marketplace@github.com).

### Flujos de facturación

Tu app debe integrar [flujos de facturación](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows) utilizando el [evento de webhook de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/).

#### Apps gratuitas

{% data reusables.marketplace.free-apps-encouraged %} Si estás listando una app gratuita, necesitarás cumplir con estos requisitos:

- Los clientes deben poder ver que tienen un plan gratuito en la sección de configuración de facturación, perfil o cuenta de la app.
- Cuando un cliente cancela tu app, debes seguir el flujo de [cancelación de planes](/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans/).

#### Apps de pago

Para ofrecer tu app como un servicio de pago, necestiarás cumplir con estos requisitos para listar la app en {% data variables.product.prodname_marketplace %}:

- Para vender tu app en {% data variables.product.prodname_marketplace %}, esta debe utilizar el sistema de facturación de GigtHub. Tu app no necesita gestionar pagos, pero sí necesita utilizar los "[eventos de compra de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)" para administrar las compras, actualizaciones, decrementos, cancelaciones y periodos de prueba gratuitos nuevos. Consulta la sección "[Flujos de facturación](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows)" para aprender más sobre cómo integrar estos eventos en tu app. Utilizar el sistema de facturación de GitHub permite a los clientes comprar una app sin salir de GitHub y pagar por el servicio con el método de pago que ya está adjunto a su cuenta de {% data variables.product.product_name %}.
- Las apps deben permitir facturación mensual y anual para las compras de sus sucripciones de pago.
- Los listados pueden ofrecer cualquier combienación de planes gratuitos y de pago. Los planes gratuitos son opcionales, pero se les fomenta. Para obtener más información, consulta la sección "[Configurar un plan de precios para los listados de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)".
{% data reusables.marketplace.marketplace-billing-ui-requirements %}
