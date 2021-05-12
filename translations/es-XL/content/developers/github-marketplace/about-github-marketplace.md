---
title: Acerca de Mercado GitHub
intro: 'Aprende lo básico para preparar tu app para que se le revise antes de unirte a {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/marketplace/getting-started/
  - /marketplace/getting-started
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) te conecta a los desarrolladores que quieren extender y mejorar sus flujos de trabajo de {% data variables.product.prodname_dotcom %}. Puedes listar herramientas gratuitas y de pago para que las utilicen los desarrolladores en {% data variables.product.prodname_marketplace %}. {% data variables.product.prodname_marketplace %} ofrece dos tipos de herramientas para los desarrolladores: {% data variables.product.prodname_actions %} y Apps, y cada herramienta requiere pasos diferentes para agregarla a {% data variables.product.prodname_marketplace %}.

### GitHub Actions

{% data reusables.actions.actions-not-verified %}

Para aprender sobre cómo publicar {% data variables.product.prodname_actions %} en {% data variables.product.prodname_marketplace %}, consulta la sección "[{% data variables.product.prodname_actions %} en {% data variables.product.prodname_marketplace %}](/marketplace/actions/)".

### Aplicaciones

Puedes listar las aplicaciones verificadas y sin verificar en {% data variables.product.prodname_marketplace %}. Las apps sin verificar no pasan por el ciclo de seguridad, prueba y verificación que {% data variables.product.prodname_dotcom %} necesita para las apps verificadas.

Las apps verificadas tienen una insignia verde en {% data variables.product.prodname_marketplace %}. Las apps sin verificar tienen una insignia gris junto a su listado y solo se encuentran disponibles como apps gratuitas.

![Insignias verde para verificado y gris para no verificado](/assets/images/marketplace/marketplace_verified_badges.png)

Si te interesa crear una app para {% data variables.product.prodname_marketplace %}, pero eres nuevo en las {% data variables.product.prodname_github_apps %} y en las {% data variables.product.prodname_oauth_app %}, consulta la sección "[Crear apps](/apps/)".

{% data reusables.marketplace.github_apps_preferred %}, aunque puedes listar tanto las Apps de OAuth como las {% data variables.product.prodname_github_app %} en {% data variables.product.prodname_marketplace %}. Consulta la sección "[Diferencias entre las apps de OAuth y las GitHub Apps](/apps/differences-between-apps/)" para obtener más detalles. Para aprender más acerca de cambiarse de una app de OAuth a {% data variables.product.prodname_github_apps %}, consulta la sección [Migrarse de las Apps de OAuth a las {% data variables.product.prodname_github_app %}](/apps/migrating-oauth-apps-to-github-apps/).

Si tienes preguntas acerca de {% data variables.product.prodname_marketplace %}, por favor contacta directamente a {% data variables.contact.contact_support %}.

#### Apps sin verificar

Las apps sin verificar no necesitan cumplir con los "[Requisitos para listar una app en {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)" o pasar por el "[Proceso de revisión de seguridad](/marketplace/getting-started/security-review-process/)".

Las {% data reusables.marketplace.unverified-apps %} que tengan un plan de pago publicado te impediran que puedas emitir una app sin verificar. Debes eliminar los planes de pago o mantenerlos en modo de borrador antes de publicar una app sin verificar.

Para listar tu app sin verificar en {% data variables.product.prodname_marketplace %}, solo necesitas crear un "[Listado en {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/)" y emitirlo como un listado sin verificar.

{% data reusables.marketplace.launch-with-free %}

#### Apps verificadas

Si ya creaste una app y estás interesado en emitir un listado verificado en {% data variables.product.prodname_marketplace %}, comienza aquí:

1. [Comenzar en {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/)<br/>Aprende acerca de los requisitos, lineamientos y del proceso de emisión de apps.

1. [Integrarse con la API de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/)<br/>Antes de que puedas listar tu app en {% data variables.product.prodname_marketplace %}, necesitarás integrar los flujos de facturación utilizando la API de {% data variables.product.prodname_marketplace %} y los eventos de webhook.

1. [Listar en {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/) <br/>Crear un listado de {% data variables.product.prodname_marketplace %} en borrador, configurar ajustes de webhooks, y configurar los planes de precios.

1. [Vender tu app](/marketplace/selling-your-app/)<br/>Aprende acerca de los planes de precios, ciclos de facturación, y sobre como recibir pagos de {% data variables.product.prodname_dotcom %} por tu app.

1. [Perspectivas de {% data variables.product.prodname_marketplace %}](/marketplace/github-marketplace-insights/)<br/>Ve como se desempeña tu app en {% data variables.product.prodname_marketplace %}. Puedes utilizar métricas que recolecta {% data variables.product.prodname_dotcom %} para guiar tu campaña de marketing y tener éxito en {% data variables.product.prodname_marketplace %}.

1. [Transacciones de {% data variables.product.prodname_marketplace %}](/marketplace/github-marketplace-transactions/)<br/>Descarga y visualiza los datos de transacción para tu listado de {% data variables.product.prodname_marketplace %}.

### Revisar tu app

Queremos asegurarnos que las apps que se ofrecen en {% data variables.product.prodname_marketplace %} sean seguras, confiables y que hayan tenido pruebas adecuadas. Los especialistas de integración de {% data variables.product.prodname_marketplace %} revisarán tu app para garantizar que cumple con todos los requisitos. Sigue lis lineamientos de estos artículos antes de emitir tu app:


* [Requisitos para listar una app en {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)
* [Proceso de revisión de seguridad](/marketplace/getting-started/security-review-process/)
