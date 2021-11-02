---
title: Envío de ticket
intro: 'Puedes emitir un ticket de soporte utilizando la {% ifversion ghes %}{% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} o el portal de soporte {% elsif ghae %}{% data variables.contact.ae_azure_portal %}{% endif %}.'
redirect_from:
  - /enterprise/admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/submitting-a-ticket
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Support
---

## Acerca del envío de tickets

{% ifversion ghae %}

Puedes emitir un ticket de soporte con {% data variables.product.prodname_ghe_managed %} desde el {% data variables.contact.ae_azure_portal %}.

{% endif %}

Antes de enviar un ticket, deberías recopilar información útil para {% data variables.contact.github_support %} y elegir una persona de contacto. Para obtener más información, consulta "[Prepararse para enviar un ticket](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)".

{% ifversion ghes %}
Después de enviar una solicitud de soporte e información de diagnóstico opcional, {% data variables.contact.github_support %} puede solicitarte que descargues y compartas un paquete de soporte con nosotros. Para obtener más información, consulta "[Proporcionar datos a {% data variables.contact.github_support %}](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support)".

## Emitir un ticket utilizando el {% data variables.contact.enterprise_portal %}

{% data reusables.support.zendesk-deprecation %}

1. Navegar por el {% data variables.contact.contact_enterprise_portal %}.
5. Da clic en **Emite un Ticket** ![Emite un ticket al equipo de Soporte Empresarial](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

## Emitir un ticket utilizando tu cuenta empresarial

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. En la barra lateral izquierda, da clic en **Licenciamiento empresarial**. ![Pestaña de "Licencias empresariales" en la barra lateral de configuración para la cuenta empresarial](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. Debajo de "Ayuda de {% data variables.product.prodname_enterprise %}", da clic en **Portal de {% data variables.contact.enterprise_support %}**. ![Enlace para navegar al sitio de soporte empresarial](/assets/images/enterprise/support/enterprise-support-link.png)
5. Da clic en **Emite un Ticket** ![Emite un ticket al equipo de Soporte Empresarial](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

## Enviar un ticket mediante el {% data variables.product.product_name %} {% data variables.enterprise.management_console %}

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

{% ifversion ghae %}

## Prerrequisitos

Para emitir un ticket para {% data variables.product.prodname_ghe_managed %} en el {% data variables.contact.ae_azure_portal %}, debes proporcionar la ID para tu suscripción de {% data variables.product.prodname_ghe_managed %} en Azure a tu Administrador de Cuentas y Satisfacción del Cliente (CSAM, por sus siglas en inglés) en Microsoft.

## Enviar un ticket mediante el {% data variables.contact.ae_azure_portal %}

Los clientes comerciales pueden emitir una solicitud de soporte en el {% data variables.contact.contact_ae_portal %}. Los clientes de gobierno deben utilizar el [portal de Azure para clientes de gobierno](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade). Para obtener más información, consulta la sección [Crear una solicitud de soporte de Azure](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request) en los documentos de Microsoft.

## Solución de problemas en el {% data variables.contact.ae_azure_portal %}

{% data variables.product.company_short %} no puede solucionar los problemas de acceso y de suscripción en el portal de Azure. Para obtener ayuda con el protal de Azure, contacta a tu CSAM en Microsoft para revisar la siguiente información.

- Si no puedes iniciar sesión en el portal de Azure, consulta la sección [Solución de problemas para el inicio de sesión en las suscripciones de Azure](https://docs.microsoft.com/en-US/azure/cost-management-billing/manage/troubleshoot-sign-in-issue) en los Documentos de Microsoft o [envía una solicitud directamente](https://support.microsoft.com/en-us/supportrequestform/84faec50-2cbc-9b8a-6dc1-9dc40bf69178).

- Si puedes iniciar sesión en el portal de Azure, pero no puedes emitir un ticket para {% data variables.product.prodname_ghe_managed %}, revisa los prerequisitos para emitir un ticket. Para obtener más información, consulta la sección "[Prerrequisitos](#prerequisites)".

{% endif %}

## Leer más

- "[Acerca de {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)"{% ifversion ghes %}
- "[Acerca de {% data variables.contact.premium_support %} para {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)".{% endif %}
