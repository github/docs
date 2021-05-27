---
title: Gestionar las compras nuevas y las pruebas gratuitas
intro: 'Cuando un cliente compra un plan de pago, una prueba gratuita, o la versión gratuita de tu app de {% data variables.product.prodname_marketplace %}, recibirás el webhook de [evento de `marketplace_purchase`] (/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) con la acción `comprado`, lo cual inicia el flujo de compra.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-github-apps/
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-oauth-apps/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/
  - /marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /developers/github-marketplace/handling-new-purchases-and-free-trials
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---
{% warning %}

Si ofreces una GitHub App en {% data variables.product.prodname_marketplace %}, ésta debe identificar a los usuarios utilizando el flujo de autorización de OAuth. No necesitas configurar un a App de OAuth por separado para apoyar a este flujo. Consulta la sección "[Identificar y autorizar usuarios para las GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" para obtener más información.

{% endwarning %}

### Paso 1. Compra inicial y evento de webhook

Antes de qeu un cliente compre tu app de {% data variables.product.prodname_marketplace %}, ellos elligen un [plan del listado](/marketplace/selling-your-app/github-marketplace-pricing-plans/). También eligen si quieren comprar la app desde su cuenta personal o su cuenta de organización.

El cliente completa la compra dando clic en **Completar orden y comenzar con la instalación**.

Entonces GitHub envía a tu app el webhook de la [`marketplace_purchase`](/webhooks/event-payloads/#marketplace_purchase) con la acción `purchased`.

Lee el objeto `effective_date` y `marketplace_purchase` del webhook de `marketplace_purchase` para determinar qué plan compró el cliente, cuándo inicia el ciclo de facturación, y cuándo comienza el siguiente ciclo de facturación.

Si tu app ofrece una prueba gratuita, lee el atributo `marketplace_purchase[on_free_trial]` del webhook. Si el valor es `true`, tu app necesitará rastrear la fecha de inicio de la prueba gratuita (`effective_date`) y la fecha en la cual termina éste (`free_trial_ends_on`). Utiliza la fecha `free_trial_ends_on` para mostrar los días restantes en una prueba gratuita en la IU de tu app. Puedes hacerlo ya sea en un letrero o en tu [IU de facturación](/marketplace/selling-your-app/billing-customers-in-github-marketplace/#providing-billing-services-in-your-apps-ui). Para aprender cómo manejar las cancelaciones antes de que finalice una prueba gratuita, consulta la sección "[Cancelar planes](/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans/)". Consulta la sección "[Actualizar y degradar planes](/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans/)" para encontrar cómo hacer la transición de una prueba gratuita a un plan de pago cuando ésta caduque.

Consulta la sección "[eventos de webhook de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)" para encontrar un ejemplo de la carga últil del evento `marketplace_purchase`.

### Paso 2. Instalación

Si tu app es una GitHub App, GitHub pide al cliente que seleccione a qué repositorios puede acceder la app cuando la compran. Entonces, GitHub instala la app en la cuenta que escogió el cliente y le otorga acceso a los repositorios seleccionados.

En este punto, si especificaste una **URL de configuración** en los ajustes de tu GitHub App, GitHub redirigirá al cliente hacia esa URL. Si no especificas una URL de configuración, no podrás gestionar las compras de tu GitHub App.

{% note %}

**Nota** La **URL de configuración** se describe como opcional en los ajustes de la GitHub App, pero es un campo requerido si quieres ofrecer tu app en {% data variables.product.prodname_marketplace %}.

{% endnote %}

Si tu app es una App de OAuth, GitHub no la instala en ningún lugar. En vez de esto, GitHub redirige al usuario a la **URL de instalación** que especificaste en tu [listado de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#listing-urls).

Cuando un cliente compra una App de OAuth, GitHub lo redirige a la URL que escoges (ya sea de configuración o de instalación) y ésta nicluye el plan de precios que eligió el cliente como un parámetro de consulta: `marketplace_listing_plan_id`.

### Paso 3. Autorización

Cuando un cliente compra tu app, debes enviar a dicho cliente a través del flujo de autorización de OAuth:

* Si tu app es una GitHub App, inicia el flujo tan pronto GitHub redireccione al cliente a la **URL de configuración**. Sigue los pasos en la sección "[Identificar y autorizar a los usuarios para las GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

* Si tu app es una App de OAuth, inicia el flujo de autorización tan pronto como GitHub redirija al usuario a la **URL de instalación**. Sigue los pasos de la sección "[Autorizar las Apps de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/)".

Para cualquier tipo de app, el primer paso es redirigir al cliente a https://github.com/login/oauth/authorize.

Después de que el ciente complete la autorización, tu app recibirá un token de acceso de OAuth para el cliente. Necesitas este token para el siguiente paso.

{% note %}

**Nota:** Cuando autorices a un cliente para una prueba gratuita, otórgales el mismo acceso que tendrían en el plan de pago.  Los migrarás al plan pagado después de que termine el periodo de pruebas.

{% endnote %}

### Paso 4. Aprovisionar las cuentas de los clientes

Tu app debe aprovisionar una cuenta de cliente para cada compra nueva. Mediante el uso del token de acceso que recibiste para el cliente en el [Paso 3. Autorización](#step-3-authorization), llama a la terminal "[Listar suscripciones para el usuario autenticado](/v3/apps/marketplace/#list-subscriptions-for-the-authenticated-user)". La respuesta incluirá la información de `account` del cliente y mostrará si están en una prueba gratuita (`on_free_trial`). Utiliza esta información para completar el aprovisionamiento y la configuración.

{% data reusables.marketplace.marketplace-double-purchases %}

Si la compra es para una organización y es por usuario, puedes solicitar al cliente que escoja qué miembros de la organización tendrán acceso a la app que se compró.

Puedes personalizar la forma en la que los miembros de la organización reciben acceso a tu app. Aquí hay algunas sugerencias:

**Precios con tasa fija:** Si la compra se hace para una organización que utiliza precios de tasa fija, tu app puede [obtener todos los miembros de la organización](/v3/orgs/members/#list-organization-members) a través de la API y solicitar al administrador de la organización que elija qué miembros tendrán usuarios en plan de pago de lado del integrador.

**Precios por unidad:** Un método para aprovisionar plazas por unidad es permitir a los usuarios que ocupen una plaza conforme inicien sesión en la app. Una vez que el cliente llegue al umbral de conteo de plazas, tu app puede notificarle que necesita mejorar el plan a través de {% data variables.product.prodname_marketplace %}.
