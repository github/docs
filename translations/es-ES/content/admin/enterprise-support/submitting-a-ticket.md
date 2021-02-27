---
title: Envío de ticket
intro: 'Puedes emitir un ticket de soporte utilizando la {% if enterpriseServerVersions contains currentVersion %}{% data variables.enterprise.management_console %} de {% data variables.product.prodname_ghe_server %} o {% endif %} el portal de soporte.'
redirect_from:
  - /enterprise/admin/enterprise-support/submitting-a-ticket
versions:
  enterprise-server: '*'
  github-ae: '*'
---

### Acerca del envío de tickets

Antes de enviar un ticket, deberías recopilar información útil para {% data variables.contact.github_support %} y elegir una persona de contacto. Para obtener más información, consulta "[Prepararse para enviar un ticket](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)".

{% if enterpriseServerVersions contains currentVersion %}
Después de emitir tu solicitud de soporte y la información de diagnóstico opcional,
{% data variables.contact.github_support %} podría pedirte que descargues y compartas un paquete de soporte con nosotros. Para obtener más información, consulta "[Proporcionar datos a {% data variables.contact.github_support %}](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support)".

### Emitir un ticket utilizando el {% data variables.contact.enterprise_portal %}

1. Navegar por el {% data variables.contact.contact_enterprise_portal %}.
5. Da clic en **Emite un Ticket** ![Emite un ticket al equipo de Soporte Empresarial](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

### Emitir un ticket utilizando tu cuenta empresarial

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. En la barra lateral izquierda, da clic en **Licenciamiento empresarial**. ![Pestaña de "Licencias empresariales" en la barra lateral de configuración para la cuenta empresarial](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. Debajo de "Ayuda de {% data variables.product.prodname_enterprise %}", da clic en **Portal de {% data variables.contact.enterprise_support %}**. ![Enlace para navegar al sitio de soporte empresarial](/assets/images/enterprise/support/enterprise-support-link.png)
5. Da clic en **Emite un Ticket** ![Emite un ticket al equipo de Soporte Empresarial](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

### Enviar un ticket mediante el {% data variables.product.product_name %} {% data variables.enterprise.management_console %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
5. Si deseas incluir los diagnósticos con tu ticket de soporte, en "Diagnostics" (Diagnóstico), haz clic en **Download diagnostic info** (Descargar información de diagnóstico) y guarda el archivo localmente. Adjuntarás este archivo a tu ticket de soporte posteriormente. ![Botón para descargar información de diagnóstico](/assets/images/enterprise/support/download-diagnostics-info-button.png)
6. En "Open Support Request" (Abrir solicitud de soporte", haz clic en **New support request** (Nueva solicitud de soporte). ![Botón para abrir una solicitud de soporte](/assets/images/enterprise/management-console/open-support-request.png)
5. Da clic en **Emite un Ticket** ![Emite un ticket al equipo de Soporte Empresarial](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
14. Para incluir los diagnósticos con tu ticket de soporte, haz clic en **Add file** (Agregar archivo), luego adjunta el archivo de diagnóstico que descargaste. ![Añadir botón de archivo](/assets/images/enterprise/support/support-ticket-add-file.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}
7. Haz clic en **Submit** (enviar).

{% endif %}
{% if currentVersion == "github-ae@latest" %}
### Enviar un ticket mediante el {% data variables.contact.ae_azure_portal %}

Los clientes comerciales pueden emitir una solicitud de soporte en el {% data variables.contact.contact_ae_portal %}. Los clientes de gobierno deben utilizar el [portal de Azure para clientes de gobierno](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade). Para obtener más información, consulta la sección [Crear una solicitud de soporte de Azure](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request) enla documentación de Microsoft.

Para problemas urgentes, para asegurar una respuesta rápida, después de emitir un ticket, por favor llama a la línea directa de soporte inmediatamente. Tu Administrador de Cuenta de Soporte Técnico (TSAM) te proporcionará el número que debes utilizar en tu sesión de incorporación.

{% endif %}

### Leer más

- "[Acerca de {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)"{% if enterpriseServerVersions contains currentVersion %}
- "[Acerca de {% data variables.contact.premium_support %} para {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)".{% endif %}
