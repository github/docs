---
title: Creating a support ticket
intro: 'You can use the {% ifversion ghae %}{% data variables.contact.ae_azure_portal %}{% else %}{% data variables.contact.support_portal %}{% endif %} to create a support ticket and speak to {% data variables.contact.github_support %}.'
shortTitle: Creating a ticket
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/preparing-to-submit-a-ticket
  - /admin/enterprise-support/preparing-to-submit-a-ticket
  - /admin/enterprise-support/receiving-help-from-github-support/preparing-to-submit-a-ticket
  - /enterprise/admin/guides/enterprise-support/reaching-github-enterprise-support
  - /enterprise/admin/enterprise-support/reaching-github-support
  - /admin/enterprise-support/reaching-github-support
  - /admin/enterprise-support/receiving-help-from-github-support/reaching-github-support
  - /enterprise/admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/receiving-help-from-github-support/submitting-a-ticket
  - /articles/submitting-a-ticket
  - /github/working-with-github-support/submitting-a-ticket
topics:
  - Support
---

{% ifversion fpt or ghec or ghes %}

## About support tickets

{% data reusables.support.zendesk-old-tickets %}

{% ifversion fpt %}
{% data reusables.support.free-and-paid-support %}
{% endif %}

{% ifversion ghes or ghec %}
{% data reusables.enterprise-accounts.support-entitlements %}
{% endif %}

{% ifversion ghes %}
You can create your ticket using the {% data variables.contact.support_portal %} or, if you would like to include diagnostics with your support ticket, you can use the GitHub Enterprise Server Management Console.
{% endif %}

After you create your ticket, you can view your ticket and the responses from {% data variables.contact.github_support %} on the {% data variables.contact.contact_landing_page_portal %}. For more information, see "[Viewing and updating support tickets](/support/contacting-github-support/viewing-and-updating-support-tickets)."

## What to include in your support ticket

Providing {% data variables.contact.github_support %} with everything they need to understand, locate, and reproduce an issue will allow for a faster resolution and less back-and-forth between yourself and the support team. To ensure {% data variables.contact.github_support %} can assist you, consider the following points when you write your ticket:

- Obtener información que pueda ayudar a que {% data variables.contact.github_support %} rastree, priorice, reproduzca o investigue el problema.
- Include full URLs, repository names, and usernames wherever possible.
- Reproducir el problema, en caso de que sea posible, y prepararte para compartir los pasos.
- Estar preparado para brindar una descripción completa de la propuesta y los resultados esperados.
- Copiar de manera exacta, palabra por palabra, todos los mensajes del error relacionados con tu problema.
- Determinar si existe un número de ticket en cualquier comunicación con {% data variables.contact.github_support %} que se encuentre en curso.
- Include relevant logs and attach any screenshots that demonstrate the issue.

{% ifversion ghes %}
## Elegir una persona de contacto

Especialmente para los tickets con prioridad {% data variables.product.support_ticket_priority_urgent %}, la persona que contacte a {% data variables.contact.github_support %} deberá:

 - Tener conocimiento de tus sistemas internos, herramientas, políticas y prácticas.
 - Ser un usuario experto de {% data variables.product.product_name %}.
 - Tener acceso y permisos completos a cualquier servicio que se requiera para solucionar los problemas en cuestión.
 - Estar autorizado para realizar los cambios recomendados a tu red y a todos los productos aplicables.

{% endif %}

## Creating a support ticket{% ifversion ghes %} using the support portal{% endif %}

1. Navega por el {% data variables.contact.contact_support_portal %}.
{% data reusables.support.submit-a-ticket %}

{% ifversion ghes %}

## Creating a ticket using the GitHub Enterprise Server Management Console

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
1. Si deseas incluir los diagnósticos con tu ticket de soporte, en "Diagnostics" (Diagnóstico), haz clic en **Download diagnostic info** (Descargar información de diagnóstico) y guarda el archivo localmente. Adjuntarás este archivo a tu ticket de soporte posteriormente. ![Screenshot of button labelled "Download diagnostics info" on Management Console Support page.](/assets/images/enterprise/support/download-diagnostics-info-button.png)
1. Para completar tu ticket y mostrar el {% data variables.contact.enterprise_portal %}, debajo de "Abrir Solicitud de Soporte", haz clic en **Solicitud de soporte nueva**. ![Screenshot of button labelled "New support request" on Management Console Support page.](/assets/images/enterprise/management-console/open-support-request.png)
{% data reusables.support.submit-a-ticket %}

{% endif %}

{% elsif ghae %}

Puedes emitir un ticket de soporte con {% data variables.product.prodname_ghe_managed %} desde el {% data variables.contact.ae_azure_portal %}.

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

- "[About GitHub Support](/support/learning-about-github-support/about-github-support)"
