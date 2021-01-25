---
title: Configurar aplicaciones
intro: 'Puedes establecer configuraciones de solicitud interna para {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/installation/configuring-applications
  - /enterprise/admin/configuration/configuring-applications
versions:
  enterprise-server: '*'
---

### Ajustar el almacenamiento en caché de las imágenes

Puedes elegir la cantidad de tiempo que {% data variables.product.product_location %} almacena en caché los avatares. Cuando aumentas el tiempo de almacenamiento en caché, aumentas la cantidad de tiempo que tardará en cargar el avatar de un usuario. Configurar el tiempo de almacenamiento en caché con un valor demasiado bajo puede sobrecargar {% data variables.product.product_location %} los procesos de trabajo.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
3. En la barra lateral izquierda, haz clic en **Applications** (Aplicaciones). ![Pestaña de solicitudes de la barra lateral de configuraciones](/assets/images/enterprise/management-console/sidebar-applications.png)
4. Debajo de "Tiempo de caché de imágen de avatar (segundos)", teclea la cantidad de segundos que quisieras que
{% data variables.product.product_location %} guarde en caché para las imágenes de avatar.
![Campo de formulario de almacenamiento en caché de imagen de avatar](/assets/images/enterprise/management-console/add-image-caching-value-field.png)
{% data reusables.enterprise_management_console.save-settings %}
