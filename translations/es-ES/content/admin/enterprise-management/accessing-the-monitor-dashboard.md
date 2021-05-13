---
title: Acceder al tablero del monitor
intro: '{% data variables.product.prodname_ghe_server %} incluye un tablero de monitoreo en la web que muestra los datos históricos sobre tu aparato {% data variables.product.prodname_ghe_server %}, como la CPU y el uso del almacenamiento, los tiempos de respuesta de la aplicación y de la autenticación y la salud general del sistema.'
redirect_from:
  - /enterprise/admin/installation/accessing-the-monitor-dashboard
  - /enterprise/admin/enterprise-management/accessing-the-monitor-dashboard
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Acceder al tablero del monitor

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. En la parte superior de la página, haga clic en **Monitor**. ![Enlace al Tablero del monitor](/assets/images/enterprise/management-console/monitor-dash-link.png)

### Solucionar problemas de la asignación de los recursos comunes en su aparato

{% note %}

**Nota**: Porque el sondeo regular de {% data variables.product.product_location %} con integración continua (CI) o la construcción de servidores puede causar efectivamente un rechazo del ataque al servicio que genera problemas, te recomendamos que utilice webhooks para subir las actualizaciones. Para obtener más información, consulte "[Acerca de webhooks](/enterprise/{{ currentVersion }}/user/articles/about-webhooks/)".

{% endnote %}

Utiliza el tablero del monitor para mantenerse informado sobre la salud del recurso de su aparato y tomar decisiones sobre cómo corregir los problemas de alto uso.

| Problema                                    | Posible(s) causa(s)                                                                 | Recomendaciones                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Alto uso de la CPU                          | Conexión a la VM desde otros servicios o programas que se ejecutan en el mismo host | De ser posible, vuelve a configurar los otros servicios o programas para utilizar menos recursos de la CPU. Para aumentar los recursos totales de la CPU para la VM, consulte "[Aumentar los recursos de CPU o de memoria](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-cpu-or-memory-resources/)."                                              |
| Alto uso de la memoria                      | Conexión a la VM desde otros servicios o programas que se ejecutan en el mismo host | De ser posible, vuelve a configurar otros servicios o programas para utilizar menos memoria. Para aumentar la memoria total disponible en la VM, consulta "[Aumentar los recursos de CPU o de memoria](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-cpu-or-memory-resources/)."                                                                  |
| Baja disponibilidad de espacio en el disco  | Binarios grandes o archivos de registro que consumen espacio del disco              | De ser posible, aloje los binarios grandes en un servidor separado y comprima o archive los archivos de registro. De ser necesario, aumenta el espacio del disco en la VM siguiendo los pasos de tu plataforma en "[Aumentar la capacidad de almacenamiento](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-storage-capacity/)."                   |
| Tiempos de respuesta más altos que lo común | Los suelen causar alguna de las propuestas anteriores                               | Identifica y corrige las propuestas subyacentes. Si los tiempos de respuesta siguen altos, contáctate con {% data variables.contact.contact_ent_support %}.                                                                                                                                                                                                             |
| Índices de error elevados                   | Propuestas de software                                                              | Contáctate con {% data variables.contact.contact_ent_support %} e incluye tu paquete de soporte. Para obtener más información, consulta "[Proporcionar datos para {% data variables.product.prodname_enterprise %} Asistencia](/enterprise/{{ currentVersion}}/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-support-bundles)." |
