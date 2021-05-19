---
title: Eventos de webhook para la API de GitHub Marketplace
intro: 'Una app de {% data variables.product.prodname_marketplace %} recibe información acerca de los cambios en el plan de un usuario desde el webhook del evento de compra en Marketplace. Un evento de compra de marketplace se activa cuando un usuario compra, cancela o cambia su plan de pago. Para encontrar más detalles sobre cómo responder a cada uno de estos tipos de eventos, consulta la sección "[Flujos de facturación](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows)."'
redirect_from:
  - /apps/marketplace/setting-up-github-marketplace-webhooks/about-webhook-payloads-for-a-github-marketplace-listing/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /developers/github-marketplace/webhook-events-for-the-github-marketplace-api
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---
### Carga útil del webhook de compras en {% data variables.product.prodname_marketplace %}

Las solicitudes de `POST` de los webhooks tienen encabezados especiales. Consulta la sección "[Encabezados de entrega de Webhooks](/webhooks/event-payloads/#delivery-headers)" para encontrar más detalles. GitHub no reenvía los intentos fallidos de entrega. Asegúrate de que tu app pueda recibir toda la carga útil del webhook que envíe GitHub.

Las cancelaciones y disminuciones de categoría toman efecto el primer día del siguiente ciclo de facturación. Los eventos para las cancelaciones y disminuciones de categoría se envían cuando el nuevo plan entre en vigor al inicio del siguiente ciclo de facturación. Los eventos para las nuevas compras y mejoras de categoría comienzan inmediatamente. Utiliza `effective_date` en la carga útil del webhook para determinar cuándo comenzará un cambio.

{% data reusables.marketplace.marketplace-malicious-behavior %}

Cada carga útil de webhook de una `marketplace_purchase` tendrá la siguiente información:


| Clave                  | Tipo        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Acción`               | `secuencia` | La acción realizada para generar el webhook. Puede ser `purchased`, `cancelled`, `pending_change`, `pending_change_cancelled`, o `changed`. Para obtener más información, consulta los ejemplos de cargas útiles de webhook a continuación. **Nota:** las cargas útiles de `pending_change` y `pending_change_cancelled` contienen las mismas claves que se muestra en el [ejemplo de carga útil de `changed`](#example-webhook-payload-for-a-changed-event). |
| `effective_date`       | `secuencia` | La fecha en la que la `action` se hace efectiva.                                                                                                                                                                                                                                                                                                                                                                                                              |
| `sender`               | `objeto`    | La persona que tomó la `action` que activó el webhook.                                                                                                                                                                                                                                                                                                                                                                                                        |
| `marketplace_purchase` | `objeto`    | La información de compra de {% data variables.product.prodname_marketplace %}.                                                                                                                                                                                                                                                                                                                                                                           |

El objeto `marketplace_purchase` tiene las siguientes claves:

| Clave                | Tipo        | Descripción                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cuenta`             | `objeto`    | La cuenta de `organización` o `usuario` asociada con la suscripción. Las cuentas de organización incluirán `organization_billing_email`, que es la dirección de correo electrónico administrativa de la misma. Para encontrar direcciones de correo electrónico para cuentas personales, puedes utilizar la terminal [Obtener el usuario autenticado](/v3/users/#get-the-authenticated-user). |
| `billing_cycle`      | `secuencia` | Puede ser `yearly` o `monthly`. Cuando el dueño de la `account` tiene un plan gratuito de GitHub y compra un plan gratuito de {% data variables.product.prodname_marketplace %}, el `billing_cycle` será `nil`.                                                                                                                                                                          |
| `unit_count`         | `número`    | Cantidad de unidades compradas.                                                                                                                                                                                                                                                                                                                                                               |
| `on_free_trial`      | `boolean`   | Es `true` cuando la `account` está en un periodo de prueba gratuito.                                                                                                                                                                                                                                                                                                                          |
| `free_trial_ends_on` | `secuencia` | La fecha en la que caduca el periodo de prueba gratuito.                                                                                                                                                                                                                                                                                                                                      |
| `next_billing_date`  | `secuencia` | La fecha en la que comenzará el siguiente ciclo de facturación. Cuando el dueño de la `account` tiene un plan gratuito de GitHub.com y compra un plan gratuito de {% data variables.product.prodname_marketplace %}, el `next_billing_date` será `nil`.                                                                                                                                  |
| `plan`               | `objeto`    | El plan que compra el `user` u `organization`.                                                                                                                                                                                                                                                                                                                                                |

El objeto `plan` tiene las siguientes claves:

| Clave                    | Tipo                     | Descripción                                                                                                                                              |
| ------------------------ | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                     | `número`                 | El identificador único para este plan.                                                                                                                   |
| `name (nombre)`          | `secuencia`              | El nombre del plan.                                                                                                                                      |
| `descripción`            | `secuencia`              | La descripción de este plan.                                                                                                                             |
| `monthly_price_in_cents` | `número`                 | El precio mensual de este plan en centavos (Divisa de los EEUU). Por ejemplo, un listado que cuesta 10 dólares de EEUU por mes sería de 1000 centavos.   |
| `yearly_price_in_cents`  | `número`                 | El precio anual para este plan en centavos (Divisa de los EEUU). Por ejemplo, un listado que cuesta 100 dólares de EEUU por mes sería de 10000 centavos. |
| `price_model`            | `secuencia`              | El modelo de precios para este listado. Puede ser alguno de entre `flat-rate`, `per-unit`, o `free`.                                                     |
| `has_free_trial`         | `boolean`                | es `true` cuando este listado ofrece un periodo de prueba gratuito.                                                                                      |
| `unit_name`              | `secuencia`              | El nombre de la unidad. Si el modelo de precios no es `per-unit`, éste será `nil`.                                                                       |
| `bullet`                 | `conjunto de secuencias` | Los nombres de los puntos configurados en el plan de precios.                                                                                            |

<br/>

#### Ejemplo de la carga útil de un webhook para un evento de `purchased`
Este ejemplo proporciona la carga útil del evento `purchased`.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

#### Ejemplo de la carga útil de un webhook para un evento de `changed`

Los cambios en un plan incluyen mejoras y degradaciones. Este ejemplo representa las cargas útiles de los eventos `changed`,`pending_change`, y `pending_change_cancelled`. La acción identifica cuál de estos tres eventos ha ocurrido.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.changed }}

#### Ejemplo de carga útil del webhook para un evento de `cancelled`

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.cancelled }}
