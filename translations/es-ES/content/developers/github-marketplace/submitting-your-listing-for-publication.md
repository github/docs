---
title: Emitir tu listado para que se publique
intro: 'Puedes emitir tu listado para que lo utilice la comunidad de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /marketplace/listing-on-github-marketplace/submitting-your-listing-for-review
  - /developers/github-marketplace/submitting-your-listing-for-review
versions:
  free-pro-team: '*'
---



Una vez que hayas completado el listado para tu app, verás dos botones que te permiten solicitar la publicación del mismo con o sin verificación. El botón **Solicitar** para "Publicar sin verificación" estará inhabilitado si publicaste cualquier plan de precios en el listado.

![Botón para solicitudes verificadas y sin verificar](/assets/images/marketplace/marketplace-request-button.png)

{% data reusables.marketplace.launch-with-free %}

Un experto en incorporación te contactará con información adicional después de que emitas tu listado para su revisión.

Para encontrar un resumen del proceso para crear y emitir un listado, consulta la sección "[Acerca de {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/about-github-marketplace#publishing-an-app-to-github-marketplace)".

### Prerequisitos para publicar con verificación

Antes de que solicites una verificación para tu listado, necesitarás integrar los flujos de facturación y webhook de {% data variables.product.prodname_marketplace %} en tu app. Para obtener más información, consulta la sección "[Utilizar la API de {% data variables.product.prodname_marketplace %} en tu app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

Si cumpliste con los requisitos de los listados y te integraste con la API de {% data variables.product.prodname_marketplace %}, puedes seguir con la emisión de tu listado. Para obtener más información, consulta la sección "[Requisitos para listar una app](/developers/github-marketplace/requirements-for-listing-an-app)".

{% data reusables.marketplace.app-transfer-to-org-for-verification %} Para obtener más información sobre cómo hacer esto, consulta la sección "[Transferir una app a una organización antes de emitirla](#transferring-an-app-to-an-organization-before-you-submit)" que se encuentra más adelante.

### Transferir una app a una organización antes de emitirla

No puedes vender una app que pertenezca a una cuenta de usuario. Necesitas transferir la app a una organización que ya constituya un creador verificado, o que pueda solicitar la verificación de un listado para la app. Para obtener más detalles, consulta:

1. "[Crear una organización desde cero](/github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch)"

1. "[Transferir la propiedad de una GitHub App](/developers/apps/transferring-ownership-of-a-github-app)" o "[Transferir la propiedad de una OAuth App](/developers/apps/transferring-ownership-of-an-oauth-app)"
