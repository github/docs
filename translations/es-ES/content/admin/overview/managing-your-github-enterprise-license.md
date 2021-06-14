---
title: Administrar tu licencia de GitHub Enterprise
intro: 'Puedes ver, gestionar y actualizar tu licencia de {% data variables.product.prodname_enterprise %}.'
redirect_from:
  - /enterprise/admin/installation/managing-your-github-enterprise-license
  - /enterprise/admin/categories/licenses/
  - /enterprise/admin/articles/license-files/
  - /enterprise/admin/installation/about-license-files/
  - /enterprise/admin/articles/downloading-your-license/
  - /enterprise/admin/installation/downloading-your-license/
  - /enterprise/admin/articles/upgrading-your-license/
  - /enterprise/admin/installation/updating-your-license/
  - /enterprise/admin/installation/managing-your-github-enterprise-server-license
  - /enterprise/admin/overview/managing-your-github-enterprise-license
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Acerca de las licencias {% data variables.product.prodname_enterprise %}

Cuando compras o renuevas {% data variables.product.prodname_enterprise %}, recibes un archivo de licencia para validar tu aplicación. Un archivo de licencia tiene una fecha de caducidad y controla la cantidad de licencias de usuario que puedes agregar a {% data variables.product.prodname_enterprise %}. Después de que hayas descargado e instalado {% data variables.product.prodname_enterprise %}, subir el archivo de licencia desbloquea la aplicación para que la puedas usar. Para obtener más información sobre cómo descargar {% data variables.product.prodname_enterprise %}, consulta el sitio web de [Lanzamientos de {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/releases/). Para obtener más información sobre cómo configurar {% data variables.product.product_location %}, consulta la sección "[Configurar una instancia de {% data variables.product.prodname_enterprise %}](/admin/installation/setting-up-a-github-enterprise-server-instance)".


Puedes asignar las licencias de usuario incluidas en tu licencia de {% data variables.product.prodname_enterprise %} a los usuarios en {% data variables.product.product_location_enterprise %} y en una cuenta empresarial de {% data variables.product.prodname_ghe_cloud %}. Cuando agregas un usuario a algún entorno, se consumirá una licencia. Si un usuario tiene cuentas en ambos ambientes, para consumir únicamente una licencia, su dirección de correo primaria de {% data variables.product.prodname_enterprise %} debe ser la misma que su dirección de correo verificada de {% data variables.product.prodname_ghe_cloud %}. Puedes sincronizar la cantidad de licencias y el uso entre los ambientes.

Si tu licencia vence {% data variables.product.prodname_ghe_server %}, no podrás acceder a {% data variables.product.product_location_enterprise %} por medio de un navegador web o Git. Si es necesario, podrás usar herramientas de línea de comando para hacer un respaldo de seguridad de todos tus datos. Para obtener más información, consulta "[Configurar copias de seguridad en tu aparato](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)" Si tienes cualquier duda sobre el renovamiento de tu licencia, contacta a {% data variables.contact.contact_enterprise_sales %}.

Puedes descargar tu licencia de {% data variables.product.prodname_ghe_server %} desde tu [cuenta empresarial](https://enterprise.github.com/download). Para obtener más información, consulta "[Administrar tu licencia {% data variables.product.prodname_enterprise %}](/admin/overview/managing-your-github-enterprise-license#uploading-a-new-license-to-github-enterprise-server)".

### Subir una nueva licencia a {% data variables.product.prodname_ghe_server %}


Después de que compras una nueva licencia o actualizas una licencia existente de {% data variables.contact.contact_enterprise_sales %}, debes descargar tu nuevo archivo de licencia. Posteriormente, carga el archivo a {% data variables.product.prodname_ghe_server %} para desbloquear tu nueva licencia de usuario.

Si quisieras renovar o agregar licencias de usuario a {% data variables.product.prodname_enterprise %}, contacta a {% data variables.contact.contact_enterprise_sales %}. El archivo de tu licencia nueva estará disponible para la descarga de forma inmediata después de que hayas completado tu orden.

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. En la barra lateral izquierda, da clic en **Licenciamiento empresarial**. ![Pestaña de "Licencias empresariales" en la barra lateral de configuración para la cuenta empresarial](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. Debajo de "instancias de Enterprise Server", da clic en {% octicon "download" aria-label="The download icon" %} para descargar tu archivo de licencia. ![Descargar la licencia de GitHub Enterprise Server](/assets/images/help/business-accounts/download-ghes-license.png)
5. Ingresa en tu
instancia de {% data variables.product.prodname_ghe_server %} como administrador de sitio.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
12. Dentro de "Quick links (Vínculos rápidos)", haz clic en **Update license (Actualizar licencia)**. ![Actualizar enlace de la licencia](/assets/images/enterprise/business-accounts/update-license-link.png)
13. Para seleccionar tu licencia, da clic en **Archivo de licencia**, o arrastra tu archivo de licencia a **Archivo de licencia**. ![Sube el archivo de licencia](/assets/images/enterprise/management-console/upload-license.png)
14. Da clic en **Cargar**. ![Comenzar carga](/assets/images/enterprise/management-console/begin-upload.png)

{% if enterpriseVersion ver_lt "enterprise-server@3.0" %}Si la IU web de {% data variables.product.prodname_ghe_server %} no refleja tu licencia actualizada de inmediato, consulta la sección de "[Solución de problemas](#troubleshooting)".{% endif %}

### Ver el uso de la licencia

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. En la barra lateral izquierda, da clic en **Licenciamiento empresarial**. ![Pestaña de "Licencias empresariales" en la barra lateral de configuración para la cuenta empresarial](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. Revisa tus licencias actuales de {% data variables.product.prodname_enterprise %}, así como las licencias de usuario disponibles y consumidas. {% if currentVersion ver_gt "enterprise-server@3.0" %}Si tu licencia incluye a la {% data variables.product.prodname_GH_advanced_security %}, puedes revisar el uso total de tus plazas así como un resumen de confirmantes por organización. Para obtener más información, consulta la sección "[Administrar la {% data variables.product.prodname_GH_advanced_security %} para tu empresa](/admin/advanced-security)".{% endif %}

### Sincronizar de forma automática el uso de la licencia de usuario con {% data variables.product.prodname_ghe_cloud %}

Puedes utilizar {% data variables.product.prodname_github_connect %} para sincronizar de forma automática el conteo y el uso de la licencia de usuario entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulta la sección "[Habilitar la sincronización de licencias de usuario entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{currentVersion}}/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud)".

### Sincronizar el uso de licencias de usuario manualmente entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}

Puedes descargar un archivo JSON desde {% data variables.product.prodname_ghe_server %} y subir el archivo a {% data variables.product.prodname_ghe_cloud %} para sincronizar de forma manual el uso de la licencia de usuario entre dos implementaciones.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
5. Debajo de "Enlaces rápidos", para descargar un archivo que contiene tu uso de licencia actual en
{% data variables.product.prodname_ghe_server %}, da clic en **Exportar uso de licencia**.
  ![Exporta el vínculo de uso de la licencia](/assets/images/enterprise/business-accounts/export-license-usage-link.png)
{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
8. En la barra lateral izquierda, da clic en **Licenciamiento empresarial**. ![Pestaña de "Licencias empresariales" en la barra lateral de configuración para la cuenta empresarial](/assets/images/help/enterprises/enterprise-licensing-tab.png)
{% data reusables.enterprise-accounts.license-tab %}
10. Debajo de "Instancias de Enterprise Server", da clic en **Agregar uso del servidor**. ![Sube el vínculo de uso de los servidores de GitHub Enterprise](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. Sube el archivo JSON que descargaste de {% data variables.product.prodname_ghe_server %}. ![Arrastra y suelta o selecciona un archivo para cargar](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)

{% if currentVersion ver_lt "enterprise-server@3.0" %}

### Solución de problemas

En algunos casos, la IU web de {% data variables.product.prodname_ghe_server %} podría no reflejar tu licencia nueva de inmediato. Puedes forzar al sistema para que detecte la licencia si restableces dos servicios de sistema.

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Restablece los servicios para la autenticación de Git y el servidor HTTP.

    {% warning %}

    **Advertencia**: El ejecutar el siguiente comando dará como resultado algunos minutos de inactividad del servicio de cara al usuario en {% data variables.product.prodname_ghe_server %}. Ten cuidado al ejecutar el comando.

    {% endwarning %}
   
        sudo systemctl restart github-gitauth github-unicorn
1. Después de que {% data variables.product.prodname_ghe_server %} te regrese al prompt, intenta acceder a {% data variables.product.prodname_ghe_server %} nuevamente a través de la línea de comandos o IU.

{% endif %}
