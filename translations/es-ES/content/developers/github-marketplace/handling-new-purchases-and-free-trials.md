---
title: Gestionar las compras nuevas y las pruebas gratuitas
intro: 'Cuando un cliente compra un plan de pago, una prueba gratuita, o la versión gratuita de tu app de {% data variables.product.prodname_marketplace %}, recibirás el webhook de [evento de `marketplace_purchase`] (/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) con la acción `comprado`, lo cual inicia el flujo de compra.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-github-apps/
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-oauth-apps/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/
  - /marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
versions:
  free-pro-team: '*'
---



{% warning %}

If you offer a {% data variables.product.prodname_github_app %} in {% data variables.product.prodname_marketplace %}, your app must identify users following the OAuth authorization flow. You don't need to set up a separate {% data variables.product.prodname_oauth_app %} to support this flow. See "[Identifying and authorizing users for {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for more information.

{% endwarning %}

### Paso 1. Compra inicial y evento de webhook

Antes de qeu un cliente compre tu app de {% data variables.product.prodname_marketplace %}, ellos elligen un [plan del listado](/marketplace/selling-your-app/github-marketplace-pricing-plans/). También eligen si quieren comprar la app desde su cuenta personal o su cuenta de organización.

El cliente completa la compra dando clic en **Completar orden y comenzar con la instalación**.

{% data variables.product.product_name %} then sends the [`marketplace_purchase`](/webhooks/event-payloads/#marketplace_purchase) webhook with the `purchased` action to your app.

Lee el objeto `effective_date` y `marketplace_purchase` del webhook de `marketplace_purchase` para determinar qué plan compró el cliente, cuándo inicia el ciclo de facturación, y cuándo comienza el siguiente ciclo de facturación.

Si tu app ofrece una prueba gratuita, lee el atributo `marketplace_purchase[on_free_trial]` del webhook. Si el valor es `true`, tu app necesitará rastrear la fecha de inicio de la prueba gratuita (`effective_date`) y la fecha en la cual termina éste (`free_trial_ends_on`). Utiliza la fecha `free_trial_ends_on` para mostrar los días restantes en una prueba gratuita en la IU de tu app. Puedes hacerlo ya sea en un letrero o en tu [IU de facturación](/marketplace/selling-your-app/billing-customers-in-github-marketplace/#providing-billing-services-in-your-apps-ui). Para saber cómo administrar las cancelaciones antes de que termine un periodo de prueba gratuita, consulta la sección "[Administrar las cancelaciones de planes](/developers/github-marketplace/handling-plan-cancellations)". Consulta la sección "[Administrar los cambios de planes](/developers/github-marketplace/handling-plan-changes)" para encontrar más información sobre cómo hacer la transición de un plan de prueba gratuito a un plan de pago cuando el primero venza.

Consulta la sección "[eventos de webhook de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)" para encontrar un ejemplo de la carga últil del evento `marketplace_purchase`.

### Paso 2. Instalación

If your app is a {% data variables.product.prodname_github_app %}, {% data variables.product.product_name %} prompts the customer to select which repositories the app can access when they purchase it. {% data variables.product.product_name %} then installs the app on the account the customer selected  and grants access to the selected repositories.

At this point, if you specified a **Setup URL** in your {% data variables.product.prodname_github_app %} settings, {% data variables.product.product_name %} will redirect the customer to that URL. If you do not specify a setup URL, you will not be able to handle purchases of your {% data variables.product.prodname_github_app %}.

{% note %}

**Note:** The **Setup URL** is described as optional in {% data variables.product.prodname_github_app %} settings, but it is a required field if you want to offer your app in {% data variables.product.prodname_marketplace %}.

{% endnote %}

If your app is an {% data variables.product.prodname_oauth_app %}, {% data variables.product.product_name %} does not install it anywhere. Instead, {% data variables.product.product_name %} redirects the customer to the **Installation URL** you specified in your [{% data variables.product.prodname_marketplace %} listing](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#listing-urls).

When a customer purchases an {% data variables.product.prodname_oauth_app %}, {% data variables.product.product_name %} redirects the customer to the URL you choose (either Setup URL or Installation URL) and the URL includes the customer's selected pricing plan as a query parameter: `marketplace_listing_plan_id`.

### Paso 3. Autorización

Cuando un cliente compra tu app, debes enviar a dicho cliente a través del flujo de autorización de OAuth:

* If your app is a {% data variables.product.prodname_github_app %}, begin the authorization flow as soon as {% data variables.product.product_name %} redirects the customer to the **Setup URL**. Follow the steps in "[Identifying and authorizing users for {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)."

* If your app is an {% data variables.product.prodname_oauth_app %}, begin the authorization flow as soon as {% data variables.product.product_name %} redirects the customer to the **Installation URL**. Follow the steps in "[Authorizing {% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/authorizing-oauth-apps/)."

Para cualquier tipo de app, el primer paso es redirigir al cliente a https://github.com/login/oauth/authorize.

Después de que el ciente complete la autorización, tu app recibirá un token de acceso de OAuth para el cliente. Necesitas este token para el siguiente paso.

{% note %}

**Nota:** Cuando autorices a un cliente para una prueba gratuita, otórgales el mismo acceso que tendrían en el plan de pago.  Los migrarás al plan pagado después de que termine el periodo de pruebas.

{% endnote %}

### Paso 4. Aprovisionar las cuentas de los clientes

Tu app debe aprovisionar una cuenta de cliente para cada compra nueva. Mediante el uso del token de acceso que recibiste para el cliente en el [Paso 3. Autorización](#step-3-authorization), llama a la terminal "[Listar suscripciones para el usuario autenticado](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)". La respuesta incluirá la información de `account` del cliente y mostrará si están en una prueba gratuita (`on_free_trial`). Utiliza esta información para completar el aprovisionamiento y la configuración.

{% data reusables.marketplace.marketplace-double-purchases %}

Si la compra es para una organización y es por usuario, puedes solicitar al cliente que escoja qué miembros de la organización tendrán acceso a la app que se compró.

Puedes personalizar la forma en la que los miembros de la organización reciben acceso a tu app. Aquí hay algunas sugerencias:

**Precios con tasa fija:** Si la compra se hace para una organización que utiliza precios de tasa fija, tu app puede [obtener todos los miembros de la organización](/rest/reference/orgs#list-organization-members) a través de la API y solicitar al administrador de la organización que elija qué miembros tendrán usuarios en plan de pago de lado del integrador.

**Precios por unidad:** Un método para aprovisionar plazas por unidad es permitir a los usuarios que ocupen una plaza conforme inicien sesión en la app. Una vez que el cliente llegue al umbral de conteo de plazas, tu app puede notificarle que necesita mejorar el plan a través de {% data variables.product.prodname_marketplace %}.
