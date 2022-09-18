---
title: Gestionar las compras nuevas y las pruebas gratuitas
intro: 'Cuando un cliente adquiere un plan de pago, una evaluación gratuita o la versión gratuita de la aplicación {% data variables.product.prodname_marketplace %}, recibirás el webhook del [evento `marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) con la acción `purchased`, que inicia el flujo de compra.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-github-apps
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-oauth-apps
  - /apps/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /developers/github-marketplace/handling-new-purchases-and-free-trials
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: New purchases & free trials
ms.openlocfilehash: b0c1cf055d912cd83e2167bfcbd0136a2644b1aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145092120'
---
{% warning %}

Si ofreces una {% data variables.product.prodname_github_app %} en {% data variables.product.prodname_marketplace %}, esta debe identificar a los usuarios siguiendo el flujo de autorizaciones de OAuth. No necesitas configurar una {% data variables.product.prodname_oauth_app %} por separado para admitir este flujo. Vea "[Identificación y autorización de usuarios para {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" para obtener más información.

{% endwarning %}

## Paso 1. Compra inicial y evento de webhook

Antes de que un cliente compre la aplicación de {% data variables.product.prodname_marketplace %}, selecciona un [plan de listado](/marketplace/selling-your-app/github-marketplace-pricing-plans/). También eligen si quieren comprar la app desde su cuenta personal o su cuenta de organización.

El cliente completa la compra haciendo clic en **Complete order and begin installation** (Completar pedido y empezar la instalación).

{% data variables.product.product_name %} luego envía el webhook [`marketplace_purchase`](/webhooks/event-payloads/#marketplace_purchase) con la acción `purchased` a la aplicación.

Lea el objeto `effective_date` y `marketplace_purchase` del webhook `marketplace_purchase` para determinar qué plan compró el cliente, cuándo se inicia el ciclo de facturación y cuándo comienza el siguiente ciclo de facturación.

Si la aplicación ofrece una evaluación gratuita, lea el atributo `marketplace_purchase[on_free_trial]` del webhook. Si el valor es `true`, la aplicación tendrá que realizar un seguimiento de la fecha de inicio de la evaluación gratuita (`effective_date`) y de la fecha en que esta finaliza (`free_trial_ends_on`). Use la fecha `free_trial_ends_on` para mostrar los días que quedan para que finalice una evaluación gratuita en la interfaz de usuario de la aplicación. Esto puede hacerlo en un banner o en la [interfaz de usuario de facturación](/marketplace/selling-your-app/billing-customers-in-github-marketplace/#providing-billing-services-in-your-apps-ui). Para obtener información sobre cómo controlar las cancelaciones antes de que finalice una evaluación gratuita, vea "[Gestión de las cancelaciones del plan](/developers/github-marketplace/handling-plan-cancellations)". Vea "[Gestión de los cambios del plan](/developers/github-marketplace/handling-plan-changes)" para averiguar cómo realizar la transición de una evaluación gratuita, cuando esta expire, a un plan de pago.

Vea "[Eventos de webhook de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)" para obtener un ejemplo de la carga del evento `marketplace_purchase`.

## Paso 2. Instalación

Si tu app es una {% data variables.product.prodname_github_app %}, {% data variables.product.product_name %} pedirá al cliente que seleccione a qué repositorios puede acceder dicha app cuando la compren. Entonces, {% data variables.product.product_name %} instala la app en la cuenta del cliente seleccionado y le otorga acceso a los repositorios seleccionados.

En este momento, si ha especificado una **URL de configuración** en la configuración de la {% data variables.product.prodname_github_app %}, {% data variables.product.product_name %} redirigirá al cliente a esta URL. Si no especificaste una URL de configuración, no podrás manejar las compras de tu {% data variables.product.prodname_github_app %}.

{% note %}

**Nota**: La **dirección URL de la instalación** se describe como opcional en la configuración de {% data variables.product.prodname_github_app %}, pero es un campo obligatorio si quiere ofrecer la aplicación en {% data variables.product.prodname_marketplace %}.

{% endnote %}

Si tu app es una {% data variables.product.prodname_oauth_app %}. {% data variables.product.product_name %} no la instala en ningún lugar. En su lugar, {% data variables.product.product_name %} redirige al cliente a la **dirección URL de la instalación** que ha especificado en el [listado de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#listing-urls).

Cuando un cliente compra una {% data variables.product.prodname_oauth_app %}, {% data variables.product.product_name %} redirige al cliente a la URL que elige (ya sea de configuración o de instalación) y esta incluye el plan de precios que eligió el cliente como un parámetro de consulta: `marketplace_listing_plan_id`.

## Paso 3. Authorization

Cuando un cliente compra tu app, debes enviar a dicho cliente a través del flujo de autorización de OAuth:

* Si la aplicación es una {% data variables.product.prodname_github_app %}, inicie el flujo de autorizaciones tan pronto como {% data variables.product.product_name %} redirija al cliente a la **URL de configuración**. Siga los pasos que se indican en "[Identificación y autorización de usuarios para {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

* Si la aplicación es una {% data variables.product.prodname_oauth_app %}, inicie el flujo de autorizaciones tan pronto como {% data variables.product.product_name %} redirija al cliente a la **URL de instalación**. Siga los pasos que se indican en "[Autorización de {% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/authorizing-oauth-apps/)".

Para cualquier tipo de aplicación, el primer paso consiste en redirigir al cliente a [https://github.com/login/oauth/authorize](https://github.com/login/oauth/authorize).

Después de que el ciente complete la autorización, tu app recibirá un token de acceso de OAuth para el cliente. Necesitas este token para el siguiente paso.

{% note %}

**Nota**: Cuando autorice a un cliente para una evaluación gratuita, concédale el mismo acceso que tendría en el plan de pago.  Los migrarás al plan pagado después de que termine el periodo de pruebas.

{% endnote %}

## Paso 4. Aprovisionar las cuentas de los clientes

Tu app debe aprovisionar una cuenta de cliente para cada compra nueva. Con el token de acceso que ha recibido para el cliente en el [Paso 3. Autorización](#step-3-authorization), llame al punto de conexión "[Enumeración de suscripciones para el usuario autenticado](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)". La respuesta incluirá la información `account` del cliente y mostrará si están en una evaluación gratuita (`on_free_trial`). Utiliza esta información para completar el aprovisionamiento y la configuración.

{% data reusables.marketplace.marketplace-double-purchases %}

Si la compra es para una organización y es por usuario, puedes solicitar al cliente que escoja qué miembros de la organización tendrán acceso a la app que se compró.

Puedes personalizar la forma en la que los miembros de la organización reciben acceso a tu app. Estas son algunas sugerencias:

**Precios de tarifa plana**: si la compra se realiza para una organización mediante precios de tarifa plana, la aplicación puede [obtener todos los miembros de la organización](/rest/reference/orgs#list-organization-members) mediante la API y solicitar al administrador de la organización que elija qué miembros tendrán usuarios de pago en el lado del integrador.

**Precios por unidad**: un método para aprovisionar puestos por unidad es permitir a los usuarios que ocupen un puesto a medida que inicien sesión en la aplicación. Una vez que el cliente llegue al umbral de conteo de plazas, tu app puede notificarle que necesita mejorar el plan a través de {% data variables.product.prodname_marketplace %}.
