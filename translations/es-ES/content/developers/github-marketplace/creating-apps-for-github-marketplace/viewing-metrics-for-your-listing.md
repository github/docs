---
title: Visualizar las métricas para tu listado
intro: 'La página de perspectivas de {% data variables.product.prodname_marketplace %} muestra métricas para tu {% data variables.product.prodname_github_app %}. Puedes utilizar las métricas para rastrear el desempeño de tu {% data variables.product.prodname_github_app %} y tomar decisiones informadas acerca de los precios, planes, periodos de prueba gratuitos, y de cómo visualizar los efectos de las campañas de marketing.'
redirect_from:
  - /apps/marketplace/managing-github-marketplace-listings/viewing-performance-metrics-for-a-github-marketplace-listing/
  - /apps/marketplace/viewing-performance-metrics-for-a-github-marketplace-listing/
  - /apps/marketplace/github-marketplace-insights/
  - /marketplace/github-marketplace-insights
  - /developers/github-marketplace/viewing-metrics-for-your-listing
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---

Puedes ver las métricas del día anterior (24 horas), de la semana, el mes, o de la duración total de tiempo que ha estado listada tu {% data variables.product.prodname_github_app %}.

{% note %}

**Nota:** Ya que el agregar datos es tardado, notarás un atraso ligero en las fechas que se muestran. Cuando seleccionas un periodo de tiempo, puedes ver las fechas exactas para las métricas en la parte superior de la página.

{% endnote %}

### Métricas de rendimiento

La página de perspectivas muestra estas métricas de rendimiento para el periodo de tiempo que selecciones:

* **Valor de la suscripción:** La ganancia total posible (en dólares estadounidenses) de las suscripciones. Este valor representa la ganancia posible si no se cancela ningún plan o periodo de prueba gratuito para que todas las transacciones de tarjetas bancarias tengan éxito. El valor de la suscripción incluye el valor total de los planes que comeinzan con un periodo de prueba gratuito en el periodo de tiempo seleccionado, aún cuando no hay transacciones financieras en dicho periodo de tiempo. El valor de la suscripción también incluye un valor completo de los planes actualizados en el periodo de tiempo seleccionado pero no incluye la cantidad prorrateada. Para ver y descargar las transacciones individuales, consulta la sección "[transacciones de GitHub Marketplace](/marketplace/github-marketplace-transactions/)".
* **Visitantes:** Cantidad de personas que han visto una página en tu listado de GitHub Apps. Esta cantidad incluye tanto a los visitantes que han iniciado sesión como a los que salen de sesión.
* **Visualizaciones de página:** Cantidad de visualizaciones que han recibido las páginas en tu listado de GitHub Apps. Un solo visitante puede generar más de una visualización de página.

{% note %}

**Nota:** El valor estimado de tu suscripción podría ser mucho mayor que el de las transacciones procesadas durante este periodo de tiempo.

{% endnote %}

#### Rendimiento de conversión

* **Visitantes únicos en la página de llegada:** Cantidad de personas que vieron la página de llegada de tu GitHub App.
* **Visitantes únicos de la página pago:** Cantidad de personas que vieron una de tus páginas de pago para tu GitHub App.
* **Página de pago para suscripciones nuevas:** La cantidad total de suscripciones pagadas, periodos de prueb gratuitos, y suscripciones gratuitas. Consulta la sección "Desglose del total de las suscripciones" para encontrar la cantidad específcia de cada tipo de suscripción.

![Perspectivas de Marketplace](/assets/images/marketplace/marketplace_insights.png)

Para acceder a las perspectivas de {% data variables.product.prodname_marketplace %}:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.marketplace_apps %}
4. Selecciona la {% data variables.product.prodname_github_app %} para la cual quisieras ver las perspectivas.
{% data reusables.user-settings.edit_marketplace_listing %}
6. Da clic en la pestaña **Perspectivas**.
7. Opcionalmente, selecciona cualquier periodo de tiempo diferente dando clic en el menú desplegable de dicho periodo en la esquina superior derecha de la página de perspectivas. ![Periodo de tiempo de Marketplace](/assets/images/marketplace/marketplace_insights_time_period.png)
