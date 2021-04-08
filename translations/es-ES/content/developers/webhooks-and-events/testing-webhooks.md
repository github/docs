---
title: Probar los webhooks
intro: 'Revisa tus entregas de webhook en {% data variables.product.prodname_dotcom %}, incluyendo la solicitud HTTP y la carga útil, así como la respuesta.'
redirect_from:
  - /webhooks/testing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - webhooks
---


Ahor que [configuraste tu servidor local](/webhooks/configuring/), podrías estar interesado en llevar tu código a sus límites. Para ello, la vista de webhooks de GitHub te proporciona herramientas para probar tus cargas útiles desplegadas.

### Listar las entregas recientes

Cada webhook tiene su propia sección de "Entregas Recientes", la cual lista rápidamente si una entrega fue exitosa (paloma verde) o fallida (x roja). También puedes identificar cuando se intentó cada entrega.

{% data variables.product.product_name %} mantiene un log de cada entrega de webhook durante {% if currentVersion == "free-pro-team@latest" %} 30 {% else %} 8 {% endif %} días.

![Vista de entregas recientes](/assets/images/webhooks_recent_deliveries.png)

### Profundizar en los resultados

Si expandes una entrega individual podrás presenciar *exactamente* qué información de GitHub se está intentando enviar a tu servidor. Esto incluye tanto la solicitud de HTTP como la respuesta.

#### Solicitud

La vista de entregas del webhook te proporciona información sobre qué encabezados se enviaron a través de GitHub. También incluye detalles acerca de la carga útil de JSON.

![Visualizar la solicitud de una carga útil](/assets/images/payload_request_tab.png)

#### Respuesta

La pestaña de respuesta lista la forma en que tu servidor respondió una vez que recibió la carga útil de GitHub. Esto incluye al código de estado, a los encabezados y a cualquier dato adicional dentro del cuerpo de la respuesta.

![Visualizar la respuesta de una carga útil](/assets/images/payload_response_tab.png)
