---
title: Emitir un ticket
intro: 'Enviar un ticket de soporte mediante el {% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} o el portal de soporte. Puedes marcar un ticket como urgente cuando tu sistema de producción {% data variables.product.prodname_ghe_server %} esté caído o en un estado inutilizable.'
redirect_from:
  - /enterprise/admin/enterprise-support/submitting-a-ticket
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---

### Acerca del envío de tickets

Antes de enviar un ticket, deberías recopilar información útil para {% data variables.contact.github_support %} y elegir una persona de contacto. Para obtener más información, consulta "[Prepararse para enviar un ticket](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)".

Después de enviar una solicitud de soporte e información de diagnóstico opcional, {% data variables.contact.github_support %} puede solicitarte que descargues y compartas un paquete de soporte con nosotros. Para obtener más información, consulta "[Proporcionar datos a {% data variables.contact.github_support %}](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support)".

### Emitir un ticket utilizando el {% data variables.contact.enterprise_portal %}

1. Navega por el {% data variables.contact.contact_enterprise_portal %}.
5. Da clic en **Emite un Ticket** ![Emite un ticket al equipo de Soporte Empresarial](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

### Emitir un ticket utilizando tu cuenta empresarial

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.enterprise-licensing-tab %}
4. Debajo de "Ayuda de {% data variables.product.prodname_enterprise %}", da clic en **Portal de {% data variables.contact.enterprise_support %}**. ![Enlace para navegar al sitio de soporte empresarial](/assets/images/enterprise/support/enterprise-support-link.png)
5. Da clic en **Emite un Ticket** ![Emite un ticket al equipo de Soporte Empresarial](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

### Enviar un ticket mediante el {% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %}

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

### Leer más

- "[Acerca de {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)"
- "[Acerca de {% data variables.contact.premium_support %} para {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)".
