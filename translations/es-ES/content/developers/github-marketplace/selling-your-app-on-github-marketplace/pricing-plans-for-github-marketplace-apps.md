---
title: Planes de precios para las apps de GitHub Marketplace
intro: 'Los planes de precios te permiten darle a tu app diferentes recursos o niveles de servicio. Puedes ofrecer hasta 10 planes de precios en tu listado de {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/marketplace/selling-your-app/github-marketplace-pricing-plans/
  - /marketplace/selling-your-app/github-marketplace-pricing-plans
  - /developers/github-marketplace/pricing-plans-for-github-marketplace-apps
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---

Los planes de precios de {% data variables.product.prodname_marketplace %} pueden ser gratuitos, de tasa fija, o por unidad. Los precios se configuran, muestran y procesan en dólares estadounidenses. Los planes de pago se restringen para las apps que publican los publicadores verificados. Para obtener más información acerca de cómo convertirse en un publicador verificado, consulta la sección "[Solicitar una verificación de publicador para tu organización](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)".

Los clientes compran tu app utilizando un método de pago adjunto a su cuenta de {% data variables.product.product_name %}, sin tener que salir del {% data variables.product.prodname_dotcom_the_website %}. No tienes que escribir código para realizar las transacciones de facturación, pero tendrás que administrar los eventos desde la API de {% data variables.product.prodname_marketplace %}. Para obtener más información, consulta la sección "[Utilizar la API de {% data variables.product.prodname_marketplace %} en tu app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

Si la app que estás listando en {% data variables.product.prodname_marketplace %} tiene opciones de plan múltiples, puedes configurar los planes de precios correspondientes. Por ejemplo, si tu app tiene dos opciones de plan, u plan de código abierto y un plan profesional, puedes configurar un plan de precios gratuito para tu plan de código abierto y un plan de tasa fija para tu plan profesional. Cada listado de {% data variables.product.prodname_marketplace %} debe tener un precio mensual y anual para cada plan que se liste.

Para obtener más información sobre cómo crear un plan de precios, consulta la sección "[Configurar un plan de precios del listado de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)".

{% data reusables.marketplace.free-plan-note %}

### Tipos de planes de precios

#### Planes gratuitos

{% data reusables.marketplace.free-apps-encouraged %}

Los planes gratuitos no tienen costo alguno para los usuarios. Si configuras un plan de precios gratuito, no puedes cobrar a los usuarios que elijan dicho plan por utilizar tu app. Puedes crear planes tanto de pago como gratuitos para tu listado.

Todas las apps necesitan administrar los eventos de las compras nuevas y de las cancelaciones. Aquellas apps que solo tengan planes gratuitos no necesitan administrar los eventos de las pruebas gratuitas, mejoras y retrocesos. Para obtener más información, consulta la sección "[Utilizar la API de {% data variables.product.prodname_marketplace %} en tu app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

Si agregas un plan de pago a una app que ya esté listada en {% data variables.product.prodname_marketplace %} como un servicio gratuito, necesitarás solicitar una verificación para dicha app y pasar por un proceso de integración financiera.

#### Planes de pago

Hay dos tipos de planes de pago:

- Los planes de pago de tasa fija cobran una cantidad fija mensual o anualmente.

- Los planes de pago por unidad cobran una cantidad fija ya sea mensual o anual por el tipo de unidad que especifiques. Una "unidad" puede ser lo que tu escojas (por ejemplo, un usuario, una plaza, una persona).

Puede que también quieras ofrecer pruebas gratuitas. Estas proporcionan periodos de prueba gratuitos de 14 días en aplicaciones de GitHub y de OAuth. Cuandoconfiguras un plan de precios en Marketplace, puedes seleccionar la opción de proporcionar un plan gratuito para los planes de tasa fija o o de costo por unidad.

### Periodos de prueba gratuitos

Los clientes pueden iniciar un periodo de prueba gratuto para cualquier plan de pago en una lista de Marketplace que incluya pruebas gratuitas. Sin embargo, los clientes no pueden crear más de una prueba gratuita por producto de marketplace.

Los periodos de prueba gratuitos tienen una longitud fija de 14 días. Se les notifica a los clientes 4 días antes del fin de su periodo de pruebas gratuito (en el día 11 del este periodo) sobre la mejora que se hará a su plan. Al final del periodo de pruebas gratuito, los clientes se matricularán automáticamente en el plan desde el cual estaban generando el periodo gratuito en caso de que no lo cancelen.

Para obtener más información, consulta la sección "[Administrar las compras nuevas y las pruebas gratuitas](/developers/github-marketplace/handling-new-purchases-and-free-trials/)".

{% note %}

**Nota:** GitHub espera que borres cualquier dato privado del cliente dentro de los primeros 30 días después de que se cancela una prueba, iniciando con la recepción del evento de cancelación.

{% endnote %}
