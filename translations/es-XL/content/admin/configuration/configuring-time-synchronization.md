---
title: Configurar la sincronización de hora
intro: '{% data variables.product.prodname_ghe_server %} sincroniza automáticamente el reloj conectándose con los servidores NTP. Puedes establecer los servidores NTP que se utilicen para sincronizar el reloj o puedes usar los servidores NTP predeterminados.'
redirect_from:
  - /enterprise/admin/articles/adjusting-the-clock/
  - /enterprise/admin/articles/configuring-time-zone-and-ntp-settings/
  - /enterprise/admin/articles/setting-ntp-servers/
  - /enterprise/admin/categories/time/
  - /enterprise/admin/installation/configuring-time-synchronization
  - /enterprise/admin/configuration/configuring-time-synchronization
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Cambiar los servidores NTP predeterminados

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. En la barra lateral izquierda, haz clic en **Time** (Hora). ![El botón de la hora en la barra lateral {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/sidebar-time.png)
3. En "Servidor NTP principal", escribe el nombre del host del servidor NTP principal. En "Servidor NTP secundario", escribe el nombre del host del servidor NTP secundario. ![Los campos para los servidores NTP principal y secundario en la {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/ntp-servers.png)
4. Al final de la página, haz clic en **Save settings** (Guardar configuraciones). ![El botón de guardar en la {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/save-settings.png)
5. Espera a que la configuración se ejecute por completo.

### Corregir un desface de tiempo prolongado

El protocolo NTP corrige permanentemente las pequeñas discrepancias de sincronización de hora. Puedes usar el shell administrativo para sincronizar la hora de inmediato.

{% note %}

**Notas:**
 - No puedes modificar la zona horaria universal coordinada (UTC).
 - Debes evitar que tu hipervisor trate de configurar el reloj de la máquina virtual. Para obtener más información, consulta la documentación proporcionada por el proveedor de virtualización.

{% endnote %}

- Utiliza el comando `chronyc` para sincronizar el servidor con el servidor NTP configurado. Por ejemplo:

```shell
$ sudo chronyc -a makestep
```
