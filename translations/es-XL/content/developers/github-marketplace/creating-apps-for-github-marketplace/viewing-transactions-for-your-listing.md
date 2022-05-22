---
title: Visualizar las transacciones para tu listado
intro: 'La página de transacciones de {% data variables.product.prodname_marketplace %} te permite descargar y visualizar todas las transacciones de tu listado de {% data variables.product.prodname_marketplace %}. Puedes ver las transacciones del día anterior (24 horas), de la semana, el mes, o de la duración total de tiempo que ha estado listada tu {% data variables.product.prodname_github_app %}.'
redirect_from:
  - /marketplace/github-marketplace-transactions
  - /developers/github-marketplace/viewing-transactions-for-your-listing
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---
{% note %}

**Nota:** Ya que el agregar datos es tardado, notarás un atraso ligero en las fechas que se muestran. Cuando seleccionas un periodo de tiempo, puedes ver las fechas exactas para las métricas en la parte superior de la página.

{% endnote %}


Puedes visualizar o descargar los datos de las transacciones para dar seguimiento a la actividad de tus suscripciones. Da clic en el botón de **Exportar CSV** para descargar un archivo de tipo `.csv`. También puedes seleccionar un periodo de tiempo que quieras ver en la página de transacciones para hacer búsquedas dentro de éste.

### Campos de datos de las transacciones

* **date:** La fecha de la transacción en formato `aaa-mm-dd`.
* **app_name:** El nombre de la app.
* **user_login:** La información de inicio de sesión del usuario con la suscripción.
* **user_id:** La id del usuario con la suscripción.
* **user_type:** El tipo de cuenta de GitHub, ya sea `User` o `Organization`.
* **country:** El código de tres letras del país.
* **amount_in_cents:** La cantidad de la transacción en centavos. Cuando un valor es menor a la cantidad del plan, el usuario que hizo la mejora y el plan nuevo se prorratean. Un valor de cero indica que el usuario canceló el plan.
* **renewal_frequency:** La frecuencia de renovación de la suscripción, ya sea `Monthly` o `Yearly`.
* **marketplace_listing_plan_id:** La `id` del plan de suscripción.

![Perspectivas de Marketplace](/assets/images/marketplace/marketplace_transactions.png)

### Acceder a las transacciones de {% data variables.product.prodname_marketplace %}

Para acceder a las transacciones de {% data variables.product.prodname_marketplace %}:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.marketplace_apps %}
4. Selecciona la {% data variables.product.prodname_github_app %} para la cual quieras visualizar las transacciones.
{% data reusables.user-settings.edit_marketplace_listing %}
6. Da clic en la pestaña de **Transacciones**.
7. Opcionalmente, selecciona un periodo de tiempo diferente dando clic en el menú desplegable de "Periodo" en la esquina superior derecha de la página de Transacciones. ![Periodo de tiempo de Marketplace](/assets/images/marketplace/marketplace_insights_time_period.png)
