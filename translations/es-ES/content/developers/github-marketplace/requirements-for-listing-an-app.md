---
title: Requisitos para listar una app
intro: 'Las apps que se encuentren en {% data variables.product.prodname_marketplace %} deben cumplir con los requisitos que se detallan en esta página antes de que se pueda publicar la lista.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started-with-github-marketplace-listings/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/
  - /marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
versions:
  free-pro-team: '*'
topics:
  - marketplace
---

<!--UI-LINK: Displayed as a link on the https://github.com/marketplace/new page.-->

Los requisitos para listar una app en {% data variables.product.prodname_marketplace %} varían de acuerdo con si quieres ofrecer una app gratuita o de pago.

### Requisitos para todas las listas de {% data variables.product.prodname_marketplace %}

Todas las listas de {% data variables.product.prodname_marketplace %} deben ser para las herramientas que proporcionen valor a la comunidad de {% data variables.product.product_name %}. Cuando emites tu lista para que se publique debes leer y aceptar las condiciones del [Acuerdo de Desarrollador de {% data variables.product.prodname_marketplace %}](/articles/github-marketplace-developer-agreement/)".

#### Requisitos de la experiencia del usuario para todas las apps

Todas las listas deben cumplir con los siguientes requisitos, sin importar si son para una app gratuita o de pago.

- Las listas no deben persuadir activamente a los usuarios de que salgan de {% data variables.product.product_name %}.
- Las listas deben incluir la información de contacto válida del publicador.
- Las listas deben tener una descripción relevante de la aplicación.
- Las listas deben especificar un plan de precios.
- Las apps deben proporcionar valor a los clientes e integrarse con la plataforma de alguna forma más allá de la autenticación.
- Las apps deben estar disponibles al público en {% data variables.product.prodname_marketplace %} y no pueden estar en fase beta o únicamente disponibles con invitación.
- Las apps deben contar con eventos de webhook configurados para notificar al publicador sobre cualquier cancelación o cambio en el plan utilizando la API de {% data variables.product.prodname_marketplace %}. Para obtener más información, consulta la sección "[Utilizar la API de {% data variables.product.prodname_marketplace %} en tu app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

Para obtener más información sobre cómo proporcionar una buena experiencia al cliente, consulta la sección "[Mejores prácticas para la experiencia del cliente en las apps](/developers/github-marketplace/customer-experience-best-practices-for-apps)".

#### Requisitos de marca y de listado para todas las apps

- Las apps que utilizan los logos de GitHub deben seguir los lineamientos de {% data variables.product.company_short %}. Para obtener más información, consulta la sección "[Logos de {% data variables.product.company_short %} y su uso](https://github.com/logos)".
- Las apps deben tener un logo, tarjeta de características, e imágenes de impresión de pantalla que cumplan con las recomendaciones que se proporcionan en "[Escribir las descripciones de los listados de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)".
- Los listados deben incluir descripciones que estén bien escritas y no tengan errores gramaticales. Para obtener orientación sobre cómo escribir tu listado, consulta la sección "[Escribir las descripciones de los listados de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)".

Para proteger a tus clientes, te recomendamos que también sigas las mejores prácticas de seguridad. Para obtener más información, consulta la sección "[Mejores prácticas de seguridad para las apps](/developers/github-marketplace/security-best-practices-for-apps)".

### Consideraciones para las apps gratuitas

{% data reusables.marketplace.free-apps-encouraged %}

### Requisitos para las apps de pago

Para publicar un plan de pago para tu app en {% data variables.product.prodname_marketplace %}, esta debe pertenecer a una organización que sea un publicador verificado. For more information about the verification process or transferring ownership of your app, see "[Applying for publisher verification for your organization](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)."

Si tu app ya se publicó y eres un publicador verificado, entonces puedes publicar un plan de pago nuevo desde el editor de plan de precios. Para obtener más información, consulta la sección "[Configurar planes de precios para tu listado](/developers/github-marketplace/setting-pricing-plans-for-your-listing)".

Para publicar una app de pago (o una app que te ofrece un plan de pago), también debes cumplir con los siguientes requisitos:

- Las {% data variables.product.prodname_github_app %} deben contar con un mínimo de 100 instalaciones.
- Las {% data variables.product.prodname_oauth_app %} deben tener un mínimo de 200 usuarios.
- Todas las apps de pago deben gestinar los eventos de compra de {% data variables.product.prodname_marketplace %} para las compras nuevas, mejoras, retrocesos, cancelaciones y pruebas gratuitas. Para obtener más información, consulta la sección "[Requisitos de facturación para las apps de pago](#billing-requirements-for-paid-apps)" que se encuentra más adelante.

Cuando estés listo para publicar la app en {% data variables.product.prodname_marketplace %}, deberás solicitar la verificación de su listado.

{% note %}

**Nota:** {% data reusables.marketplace.app-transfer-to-org-for-verification %} Para obtener más información sobre cómo transferir una app a una organización, consulta la sección: "[Enviar tu listado para que se publique](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)".

{% endnote %}

### Requisitos de facturación para las apps de pago

Tu app no necesita administrar pagos, pero sí necesita utilizar los eventos de compra de {% data variables.product.prodname_marketplace %} para administrar las compras nuevas, mejoras, retrocesos, cancelaciones y pruebas gratuitas. Para obtener más información sobre cómo integrar estos eventos en tu app, consulta la sección "[Utilizar la API de {% data variables.product.prodname_marketplace %} en tu app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

El utilizar la API de facturación de GitHub permite a los clientes comprar una app sin salir de GitHub y pagar por el servicio con el método de pago que ya está adjunto a su cuenta de {% data variables.product.product_name %}.

- Las apps deben permitir facturación mensual y anual para las compras de sus sucripciones de pago.
- Los listados pueden ofrecer cualquier combienación de planes gratuitos y de pago. Los planes gratuitos son opcionales, pero se les fomenta. Para obtener más información, consulta la sección "[Configurar un plan de precios para los listados de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)".
