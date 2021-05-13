---
title: Planes de precios para las apps de GitHub Marketplace
intro: 'Los planes de precios te permiten darle a tu app diferentes recursos o niveles de servicio. Puedes ofrecer hasta 10 planes de precios en tu listado de {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/marketplace/selling-your-app/github-marketplace-pricing-plans/
  - /marketplace/selling-your-app/github-marketplace-pricing-plans
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---



Los planes de precios en {% data variables.product.prodname_marketplace %} pueden ser gratuitos o por unidad, y GitHub lista los precios en dólares estadounidenses. Los clientes compran tu app utilizando un método de pago adjunto a sus cuentas de {% data variables.product.product_name %}, sin tener que salir de GitHub.com. No tienes que escribir ningún tipo de código para realizar transacciones de facturación, pero tendrás que gestionar los [flujos de facturación](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows) para los eventos de compra.

Si la app que estás listando en {% data variables.product.prodname_marketplace %} tiene opciones de plan múltiples, puedes configurar los planes de precios correspondientes. Por ejemplo, si tu app tiene dos opciones de plan, u plan de código abierto y un plan profesional, puedes configurar un plan de precios gratuito para tu plan de código abierto y un plan de tasa fija para tu plan profesional. Cada listado de {% data variables.product.prodname_marketplace %} debe tener un precio mensual y anual para cada plan que se liste.

Para obtener más información sobre cómo crear un plan de precios, consulta la sección "[Configurar un plan de precios del listado de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)".

{% note %}

**Nota:** Si estás listando una app en {% data variables.product.prodname_marketplace %}, no puedes listarla con un plan de precios gratuito si ofreces un servicio de pago fuera de {% data variables.product.prodname_marketplace %}.

{% endnote %}

### Tipos de planes de precios

Los **planes de precios gratuitos** son completamente gratuitos para los usuarios. Si configuras un plan de precios gratuito, no puedes cobrar a los usuarios que elijan dicho plan por utilizar tu app. Puedes crear planes tanto de pago como gratuitos para tu listado. Las apps gratuitas sin verificar no necesitan implementar ningún flujo de facturación. Las apps gratuitas que se verifican en GitHub necesitan implementar flujos de facturación para las compras nuevas y las cancelaciones, pero no necesitan implementarlos para los periodos de prueba gratuitos, las mejoras y las degradaciones. Si agregas un plan de pago a un app que ya listaste en {% data variables.product.prodname_marketplace %} como un servicio gratuito, necesitarás volver a emitir la app para su revisión.

Los **planes de precios de tasa fija** cobran una cuota fija mensual o anualmente.

Los **planes de precios por unidad** cobran una cuota fija por un periodo mensual o anual para una unidad que especifiques. Una "unidad" puede ser lo que tu escojas (por ejemplo, un usuario, una plaza, una persona).

Los **periodos de prueba gratuitos de Marketplace** proporcionan periodos de prueba gratuitos de 14 días para los clientes en aplicaciones de OAuth o GitHub Apps. Cuando [configuras un plan de precios de Marketplace](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/), puedes seleccionar la opción para porporcionar un periodo de prueba gratuito para los planes de tasa fija o de unidad.

### Periodos de prueba gratuitos

Los clientes pueden iniciar un periodo de prueba gratuito para cualquier plan de pago en un listado de Marketplace, pero no podremos crear más de un periodo de prueba gratuito por producto de Marketplace.

Los periodos de prueba gratuitos tienen una longitud fija de 14 días. Se les notifica a los clientes 4 días antes del fin de su periodo de pruebas gratuito (en el día 11 del este periodo) sobre la mejora que se hará a su plan. Al final del periodo de pruebas gratuito, los clientes se matricularán automáticamente en el plan desde el cual estaban generando el periodo gratuito en caso de que no lo cancelen.

Consulta la sección "[Compras nuevas y periodos de prueba gratuitos](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/)" para obtener los de talles de cómo manejar los periodos de prueba gratuitos en tu app.

{% note %}

**Nota:** GitHub espera que borres cualquier dato privado del cliente dentro de los primeros 30 días después de que se cancela una prueba, iniciando con la recepción del evento de cancelación.

{% endnote %}
