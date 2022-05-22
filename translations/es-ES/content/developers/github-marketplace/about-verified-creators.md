---
title: Acerca de los creadores verificados
intro: 'Cada organización que quiera vender apps en {% data variables.product.prodname_marketplace %} debe seguir un proceso de verificación. Se verifica su identidad y se revisa su proceso de facturación.'
versions:
  free-pro-team: '*'
---

### Acerca de los creadores verificados

Un creador verificado es una organización que ya ha verificado {% data variables.product.company_short %}. Cualquiera puede compartir sus apps con otros usuarios en {% data variables.product.prodname_marketplace %}, pero solo las organizaciones que haya verificado {% data variables.product.company_short %} pueden venderlas. Para obtener más información sobre las organizaciones, consulta la sección "[Acerca de las organizaciones](/github/setting-up-and-managing-organizations-and-teams/about-organizations)".

El proceso de verificación existe para proteger a los usuarios. Por ejemplo, verifica la identidad del vendedor, verifica que su organización de {% data variables.product.product_name %} se encuentre configurada de forma segura y que se le pueda contactar para recibir soporte.

Después de pasar las revisiones de verificación cualquier app que la organización liste en {% data variables.product.prodname_marketplace %} se mostrará con una insignia de creador verificado {% octicon "verified" aria-label="Verified creator badge" %}. Ahora, la organización podrá agregar planes de pago a cualquiera de sus apps. Cada app con un plan de pago también pasará por un proceso de incorporación financiera para verificar que se encuentre configurada para gestionar la facturación de forma adecuada.

![insignias de creador verificado](/assets/images/marketplace/marketplace_verified_creator_badges_apps.png)

Adicionalmente a la insignia de creador verificado, también podrás ver insignias para las apps que estén verificadas, y para las que no lo estén. Estas apps se publicaron utilizando el método anterior para verificar las apps individuales.

![Insignias verde para verificado y gris para no verificado](/assets/images/marketplace/marketplace_verified_badges.png)

Para obtener información sobre cómo encontrar apps que puedas utilizar, consulta la sección "[Buscar en {% data variables.product.prodname_marketplace %}](/github/searching-for-information-on-github/searching-github-marketplace)".

### Acerca del proceso de verificación

La primera vez que solicitas una verificación para una lista de alguna de tus apps, ingresarás al proceso de verificación.  Un experto en integración te guiará a lo largo del proceso. Esto incluye la verificación de:

- La información del perfil - Se llena la información básica del perfil de forma precisa y adecuada.
- La seguridad - La organización habilitó la autenticación bifactorial.
- El dominio verificado - La organización verificó el dominio de la URL del sitio.
- El evento de webhook de compra - La app gestiona correctamente el evento.

Cuando tu organización se encuentre verificada, todas tus apps se mostrarán con una insignia de creador verificado. Ahora podrás ofrecer planes de pago para cualquiera de tus apps.

Para obtener más información sobre los requisitos para listar una app en {% data variables.product.prodname_marketplace %}, consulta los "[Requisitos para listar una app en {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)".

{% data reusables.marketplace.app-transfer-to-org-for-verification %} Para obtener más información sobre cómo hacer esto, consulta la sección: "[Emitir tu lista para su publicación](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)".

{% note %}

**Nota:** Este proceso de verificación para las apps reemplaza el proceso anterior en donde se verificaba a las apps individuales. El proceso actual es similar al proceso de verificación de las acciones. Si tienes apps que se verificaron con el proceso anterior, estas no se verán afectadas por estos cambios. El equipo de {% data variables.product.prodname_marketplace %} te contactará con los detalles de cómo migrarte a una verificación basada en la organización.

{% endnote %}
