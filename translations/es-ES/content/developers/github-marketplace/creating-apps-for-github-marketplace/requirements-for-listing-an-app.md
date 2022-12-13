---
title: Requisitos para listar una app
intro: 'Las apps que se encuentren en {% data variables.product.prodname_marketplace %} deben cumplir con los requisitos que se detallan en esta página antes de que se pueda publicar la lista.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /developers/github-marketplace/requirements-for-listing-an-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Listing requirements
ms.openlocfilehash: 58112d935a77119325dab4ad72c87561d0c00e47
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092157'
---
<!--UI-LINK: Displayed as a link on the https://github.com/marketplace/new page.-->

Los requisitos para listar una app en {% data variables.product.prodname_marketplace %} varían de acuerdo con si quieres ofrecer una app gratuita o de pago.

## Requisitos para todas las listas de {% data variables.product.prodname_marketplace %}

Todas las listas de {% data variables.product.prodname_marketplace %} deben ser para las herramientas que proporcionen valor a la comunidad de {% data variables.product.product_name %}. Al enviar el listado para su publicación, debe leer y aceptar los términos del "[Acuerdo para desarrolladores de {% data variables.product.prodname_marketplace %}](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement)".

### Requisitos de la experiencia del usuario para todas las apps

Todas las listas deben cumplir con los siguientes requisitos, sin importar si son para una app gratuita o de pago.

- Las listas no deben persuadir activamente a los usuarios de que salgan de {% data variables.product.product_name %}.
- Las listas deben incluir la información de contacto válida del publicador.
- Las listas deben tener una descripción relevante de la aplicación.
- Las listas deben especificar un plan de precios.
- Las apps deben proporcionar valor a los clientes e integrarse con la plataforma de alguna forma más allá de la autenticación.
- Las apps deben estar disponibles al público en {% data variables.product.prodname_marketplace %} y no pueden estar en fase beta o únicamente disponibles con invitación.
- Las apps deben contar con eventos de webhook configurados para notificar al publicador sobre cualquier cancelación o cambio en el plan utilizando la API de {% data variables.product.prodname_marketplace %}. Para obtener más información, vea "[Uso de la API de {% data variables.product.prodname_marketplace %} en la aplicación](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

A fin de obtener más información sobre cómo proporcionar una buena experiencia de cliente, vea "[Procedimientos recomendados para la experiencia de los clientes con aplicaciones](/developers/github-marketplace/customer-experience-best-practices-for-apps)".

### Requisitos de marca y de listado para todas las apps

- Las apps que utilizan los logos de GitHub deben seguir los lineamientos de {% data variables.product.company_short %}. Para más información, vea "[Logotipos y uso de {% data variables.product.company_short %}](https://github.com/logos)".
- Las aplicaciones deben tener un logotipo, una tarjeta de características e imágenes de capturas de pantalla que cumplan las recomendaciones proporcionadas en "[Escritura de descripciones de listado de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)".
- Los listados deben incluir descripciones que estén bien escritas y no tengan errores gramaticales. Para obtener instrucciones a fin de escribir el listado, vea "[Escritura de descripciones de listado de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)".

Para proteger a tus clientes, te recomendamos que también sigas las mejores prácticas de seguridad. Para obtener más información, vea "[Procedimientos recomendados de seguridad para aplicaciones](/developers/github-marketplace/security-best-practices-for-apps)".

## Consideraciones para las apps gratuitas

{% data reusables.marketplace.free-apps-encouraged %} 

## Requisitos para las apps de pago

Para publicar un plan de pago para tu app en {% data variables.product.prodname_marketplace %}, esta debe pertenecer a una organización que sea un publicador verificado. A fin de obtener más información acerca del proceso de comprobación o la transferencia de la propiedad de la aplicación, vea "[Aplicación de la comprobación del publicador para su organización](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)".

Si tu app ya se publicó y eres un publicador verificado, entonces puedes publicar un plan de pago nuevo desde el editor de plan de precios. Para más información, vea "[Establecimiento de planes de precios para el listado](/developers/github-marketplace/setting-pricing-plans-for-your-listing)".

Para publicar una app de pago (o una app que te ofrece un plan de pago), también debes cumplir con los siguientes requisitos:

- Las {% data variables.product.prodname_github_apps %} deben tener un mínimo de 100 instalaciones.
- Las {% data variables.product.prodname_oauth_apps %} deben tener un mínimo de 200 usuarios.
- Todas las apps de pago deben gestinar los eventos de compra de {% data variables.product.prodname_marketplace %} para las compras nuevas, mejoras, retrocesos, cancelaciones y pruebas gratuitas. Para obtener más información, vea debajo "[Requisitos de facturación para aplicaciones de pago](#billing-requirements-for-paid-apps)".

Cuando estés listo para publicar la app en {% data variables.product.prodname_marketplace %}, deberás solicitar la verificación de su listado.

{% note %}

**Nota:** {% data reusables.marketplace.app-transfer-to-org-for-verification %} Para obtener información sobre cómo transferir una aplicación a una organización, vea: "[Envío del listado para su publicación](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)".

{% endnote %}

## Requisitos de facturación para las apps de pago

Tu app no necesita administrar pagos, pero sí necesita utilizar los eventos de compra de {% data variables.product.prodname_marketplace %} para administrar las compras nuevas, mejoras, retrocesos, cancelaciones y pruebas gratuitas. Para obtener información sobre cómo integrar estos eventos en la aplicación, vea "[Uso de la API {% data variables.product.prodname_marketplace %} en la aplicación](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

El utilizar la API de facturación de GitHub permite a los clientes comprar una app sin salir de GitHub y pagar por el servicio con el método de pago que ya está adjunto a su cuenta de {% data variables.product.product_location %}.

- Las apps deben permitir facturación mensual y anual para las compras de sus sucripciones de pago.
- Los listados pueden ofrecer cualquier combienación de planes gratuitos y de pago. Los planes gratuitos son opcionales, pero se les fomenta. Para obtener más información, vea "[Establecimiento de un plan de precios del listado de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)".
