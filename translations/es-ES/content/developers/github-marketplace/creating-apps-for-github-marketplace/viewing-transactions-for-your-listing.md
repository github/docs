---
title: Visualizar las transacciones para tu listado
intro: 'La página de transacciones de {% data variables.product.prodname_marketplace %} te permite descargar y visualizar todas las transacciones de tu listado de {% data variables.product.prodname_marketplace %}. Puedes ver las transacciones del día anterior (24 horas), de la semana, el mes, o de la duración total de tiempo que ha estado listada tu {% data variables.product.prodname_github_app %}.'
redirect_from:
  - /marketplace/github-marketplace-transactions
  - /developers/github-marketplace/viewing-transactions-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: View listing transactions
ms.openlocfilehash: f0e02ca4038131752d4a5fab54de1f1f539289c2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092149'
---
{% note %}

**Nota:** Como se tarda tiempo en agregar datos, percibirá un ligero retraso en las fechas que se muestran. Cuando seleccionas un periodo de tiempo, puedes ver las fechas exactas para las métricas en la parte superior de la página.

{% endnote %}


Puedes visualizar o descargar los datos de las transacciones para dar seguimiento a la actividad de tus suscripciones. Haga clic en el botón **Export CSV** para descargar un archivo `.csv`. También puedes seleccionar un periodo de tiempo que quieras ver en la página de transacciones para hacer búsquedas dentro de éste.

## Campos de datos de las transacciones

* **date:** fecha de la transacción en formato `yyyy-mm-dd`.
* **app_name:** nombre de la aplicación.
* **user_login:** datos de inicio de sesión del usuario con la suscripción.
* **user_id:** id. del usuario con la suscripción.
* **user_type:** tipo de cuenta de GitHub: `User` o `Organization`.
* **country:** código de país de tres letras.
* **amount_in_cents:** importe de la transacción en céntimos. Cuando un valor es menor a la cantidad del plan, el usuario que hizo la mejora y el plan nuevo se prorratean. Un valor de cero indica que el usuario canceló el plan.
* **renewal_frequency:** frecuencia de renovación de la suscripción: `Monthly` o `Yearly`.
* **marketplace_listing_plan_id:** `id` del plan de suscripción.
* **region:** nombre de la región presente en la dirección de facturación.
* **postal_code:** valor de código postal presente en la dirección de facturación.

![Información de Marketplace](/assets/images/marketplace/marketplace_transactions.png)

## Acceder a las transacciones de {% data variables.product.prodname_marketplace %}

Para acceder a las transacciones de {% data variables.product.prodname_marketplace %}:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.marketplace_apps %}
4. Selecciona la {% data variables.product.prodname_github_app %} para la cual quieras visualizar las transacciones.
{% data reusables.user-settings.edit_marketplace_listing %}
6. Haga clic en la pestaña **Transactions**.
7. Opcionalmente, selecciona un periodo de tiempo diferente dando clic en el menú desplegable de "Periodo" en la esquina superior derecha de la página de Transacciones.
![Periodo de tiempo de Marketplace](/assets/images/marketplace/marketplace_insights_time_period.png)
