---
title: Solución de problemas con ganchos de servicio
intro: 'Si las cargar no se están entregando, comprueba estos problemas comunes.'
redirect_from:
  - /enterprise/admin/articles/troubleshooting-service-hooks/
  - /enterprise/admin/developer-workflow/troubleshooting-service-hooks
versions:
  enterprise-server: '*'
---

### Obtener información sobre las entregas

Puedes buscar información para la última respuesta de todas las entregas de ganchos de servicio en cualquier repositorio.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Explorar en el repositorio que estás investigando.
3. Haz clic en el enlace **Hooks** (Ganchos) en la barra lateral de navegación. ![Barra lateral de ganchos](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Haz clic en el enlace **Latest Delivery** (Última entrega) bajo el gancho de servicio que tiene problemas. ![Detalles de ganchos](/assets/images/enterprise/settings/Enterprise-Hooks-Details.png)
5. En **Remote Calls** (Llamadas remotas), verás los encabezados que se usaron al publicar en el servidor remoto junto con la respuesta que el servidor remoto volvió a enviar a tu instalación.

### Ver la carga

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Explorar en el repositorio que estás investigando.
3. Haz clic en el enlace **Hooks** (Ganchos) en la barra lateral de navegación. ![Barra lateral de ganchos](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Haz clic en el enlace **Latest Delivery** (Última entrega) bajo el gancho de servicio que tiene problemas.
5. Haz clic en **Delivery** (Entrega). ![Ver la carga](/assets/images/enterprise/settings/Enterprise-Hooks-Payload.png)

### Ver entregas anteriores

Las entregas se almacenan durante 15 días.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Explorar en el repositorio que estás investigando.
3. Haz clic en el enlace **Hooks** (Ganchos) en la barra lateral de navegación. ![Barra lateral de ganchos](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Haz clic en el enlace **Latest Delivery** (Última entrega) bajo el gancho de servicio que tiene problemas.
5. Para ver otras entregas para ese gancho específico, haz clic en **More for this Hook ID** (Más para este ID de gancho): ![Ver más entregas](/assets/images/enterprise/settings/Enterprise-Hooks-More-Deliveries.png)
