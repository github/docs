---
title: Crear un ticket de soporte
intro: 'Puedes utilizar el {% ifversion ghae %}{% data variables.contact.ae_azure_portal %}{% else %}{% data variables.contact.support_portal %}{% endif %} para crear un ticket de soporte y hablar con {% data variables.contact.github_support %}.'
shortTitle: Crear un ticket
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

## Acerca de los tickets de soporte

{% data reusables.support.zendesk-old-tickets %}

{% ifversion fpt %}
{% data reusables.support.free-and-paid-support %}
{% endif %}

{% ifversion ghes or ghec %}
{% data reusables.enterprise-accounts.support-entitlements %}
{% endif %}

{% ifversion ghes %}
Puedes crear tu ticket utilizando el {% data variables.contact.support_portal %} o, en caso de que quieras incluir el diagnóstico con tu ticket de soporte, puedes utilizar la Consola de Administración de GitHub Enterprise Server.
{% endif %}

Después de crear tu ticket, puedes verlo, así como las respuestas de {% data variables.contact.github_support %} en el {% data variables.contact.contact_landing_page_portal %}. Para obtener más información, consulta la sección "[Ver y actualizar los tickets de soporte](/support/contacting-github-support/viewing-and-updating-support-tickets)".

## Qué incluir en tu ticket de soporte

El proporcionar a {% data variables.contact.github_support %} todo lo que necesita para entender, ubicar y reproducir un problema permitirá que exista una resolución más rápida y menos juego entre tú y el equipo de soporte. Para garantizar que {% data variables.contact.github_support %} puede darte asistencia, considera los siguientes puntos cuando escribes tu ticket:

- Obtener información que pueda ayudar a que {% data variables.contact.github_support %} rastree, priorice, reproduzca o investigue el problema.
- Incluye las URL, nombres de repositorio y de usuario completos cada que sea posible.
- Reproducir el problema, en caso de que sea posible, y prepararte para compartir los pasos.
- Estar preparado para brindar una descripción completa de la propuesta y los resultados esperados.
- Copiar de manera exacta, palabra por palabra, todos los mensajes del error relacionados con tu problema.
- Determinar si existe un número de ticket en cualquier comunicación con {% data variables.contact.github_support %} que se encuentre en curso.
- Incluye las bitácoras relevantes y adjunta cualquier captura de pantalla que demuestre el problema.

{% ifversion ghes %}
## Elegir una persona de contacto

Especialmente para los tickets con prioridad {% data variables.product.support_ticket_priority_urgent %}, la persona que contacte a {% data variables.contact.github_support %} deberá:

 - Tener conocimiento de tus sistemas internos, herramientas, políticas y prácticas.
 - Ser un usuario experto de {% data variables.product.product_name %}.
 - Tener acceso y permisos completos a cualquier servicio que se requiera para solucionar los problemas en cuestión.
 - Estar autorizado para realizar los cambios recomendados a tu red y a todos los productos aplicables.

{% endif %}

## Crea un ticket de soporte{% ifversion ghes %} utilizando el portal de soporte{% endif %}

1. Navega por el {% data variables.contact.contact_support_portal %}.
{% data reusables.support.submit-a-ticket %}

{% ifversion ghes %}

## Crear un ticket utilizando la Consola de Administración de GitHub Enterprise Server

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
1. Si deseas incluir los diagnósticos con tu ticket de soporte, en "Diagnostics" (Diagnóstico), haz clic en **Download diagnostic info** (Descargar información de diagnóstico) y guarda el archivo localmente. Adjuntarás este archivo a tu ticket de soporte posteriormente. ![Captura de pantalla del botón etiquetado como "Descargar información de diagnóstico" en la página de Soporte de la Consola de Administración.](/assets/images/enterprise/support/download-diagnostics-info-button.png)
1. Para completar tu ticket y mostrar el {% data variables.contact.enterprise_portal %}, debajo de "Abrir Solicitud de Soporte", haz clic en **Solicitud de soporte nueva**. ![Captura de pantalla del botón etiquetado como "Solilcitud de soporte nueva" en la página de Soporte de la Consola de Admnistración.](/assets/images/enterprise/management-console/open-support-request.png)
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

- "[Acerca del Soporte de GitHub](/support/learning-about-github-support/about-github-support)"
