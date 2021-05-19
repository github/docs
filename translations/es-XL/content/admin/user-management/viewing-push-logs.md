---
title: Ver registros de subidas
intro: 'Los administradores del sitio pueden ver una lista de operaciones de subida de Git para un repositorio en {% data variables.product.product_location_enterprise %}.'
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs/
  - /enterprise/admin/installation/viewing-push-logs
  - /enterprise/admin/user-management/viewing-push-logs
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Auditing
  - Enterprise
  - Git
  - Logging
---

Las entradas de registro de subida muestran:

- Quién inició la subida
- Si fue un empuje forzado o no
- La rama a la que alguien subió
- El protocolo utilizado para subir
- La dirección IP inicial
- El cliente Git utilizado para subir
- Los hashes SHA de antes y después de la operación

### Ver registros de subida de un repositorio

1. Navegar a un repositorio.
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.security-tab %}
4. En la barra lateral izquierda, haz clic en **Push Log (Registro de subida)**. ![Pestaña de registro de subida](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

### Ver registros de subida de un repositorio en la línea de comando

1. SSH en tu aparato. Para obtener más información, consulta "[Acceder al shell administrativo (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)."
2. En el repositorio Git adecuado, abre el archivo de registro de auditoría:
  ```shell
  ghe-repo <em>owner</em>/<em>repository</em> -c "less audit_log"
  ```
