---
title: Crear un ticket de soporte
intro: 'Puedes utilizar el {% ifversion ghae %}{% data variables.contact.ae_azure_portal %}{% else %}{% data variables.contact.support_portal %}{% endif %} para crear un ticket de soporte y hablar con {% data variables.contact.github_support %}.'
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
ms.openlocfilehash: 4be0e3be4154354bbc8ea592c9c13af4c0e217b4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145140138'
---
{% ifversion fpt or ghec or ghes %}

## Acerca de los tickets de soporte

{% data reusables.support.zendesk-old-tickets %}

{% ifversion fpt %} {% data reusables.support.free-and-paid-support %} {% endif %}

{% ifversion ghes or ghec %} {% data reusables.enterprise-accounts.support-entitlements %} {% endif %}

{% ifversion ghes %} Puede crear la incidencia mediante {% data variables.contact.support_portal %} o, si quiere incluir diagnóstico en la incidencia de soporte técnico, puede usar la consola de administración de GitHub Enterprise Server.
{% endif %}

Después de crear tu ticket, puedes verlo, así como las respuestas de {% data variables.contact.github_support %} en el {% data variables.contact.contact_landing_page_portal %}. Para más información, vea "[Visualización y actualización de incidencias de soporte técnico](/support/contacting-github-support/viewing-and-updating-support-tickets)". 

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

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
1. Si quiere incluir diagnósticos con la incidencia de soporte técnico, en "Diagnostics" (Diagnóstico), haga clic en **Download diagnostic info** (Descargar información de diagnóstico) y guarde el archivo localmente. Adjuntarás este archivo a tu ticket de soporte posteriormente.
  ![Captura de pantalla del botón etiquetado como "Download diagnostics info" (Descargar información de diagnóstico) en la página Soporte de la Consola de administración.](/assets/images/enterprise/support/download-diagnostics-info-button.png)
1. Para completar la incidencia y mostrar {% data variables.contact.enterprise_portal %}, debajo de "Open Support Request" (Abrir solicitud de soporte técnico), haga clic en **New support request** (Nueva solicitud de soporte técnico).
  ![Captura de pantalla del botón "New support request" (Nueva solicitud de soporte técnico) en la página Soporte de la Consola de administración.](/assets/images/enterprise/management-console/open-support-request.png)
{% data reusables.support.submit-a-ticket %}

{% endif %}

{% elsif ghae %}

Puedes emitir un ticket de soporte con {% data variables.product.prodname_ghe_managed %} desde el {% data variables.contact.ae_azure_portal %}.

## Prerrequisitos

Para emitir un ticket para {% data variables.product.prodname_ghe_managed %} en el {% data variables.contact.ae_azure_portal %}, debes proporcionar la ID para tu suscripción de {% data variables.product.prodname_ghe_managed %} en Azure a tu Administrador de Cuentas y Satisfacción del Cliente (CSAM, por sus siglas en inglés) en Microsoft.

## Envío de una incidencia mediante el {% data variables.contact.ae_azure_portal %}

Los clientes comerciales pueden emitir una solicitud de soporte en el {% data variables.contact.contact_ae_portal %}. Los clientes gubernamentales deben usar [Azure Portal para clientes gubernamentales](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade). Para más información, vea [Creación de una solicitud de soporte técnico de Azure](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request) en Microsoft Docs.

## Solución de problemas en el {% data variables.contact.ae_azure_portal %}

{% data variables.product.company_short %} no puede solucionar los problemas de acceso y de suscripción en el portal de Azure. Para obtener ayuda con el protal de Azure, contacta a tu CSAM en Microsoft para revisar la siguiente información.

- Si no puede iniciar sesión en Azure Portal, vea [Solución de problemas de inicio de sesión de suscripción de Azure](https://docs.microsoft.com/en-US/azure/cost-management-billing/manage/troubleshoot-sign-in-issue) en Microsoft Docs, o bien [envíe una solicitud directamente](https://support.microsoft.com/en-us/supportrequestform/84faec50-2cbc-9b8a-6dc1-9dc40bf69178).

- Si puedes iniciar sesión en el portal de Azure, pero no puedes emitir un ticket para {% data variables.product.prodname_ghe_managed %}, revisa los prerequisitos para emitir un ticket. Para más información, vea "[Requisitos previos](#prerequisites)".

{% endif %}

## Información adicional

- "[Acerca del soporte técnico de GitHub](/support/learning-about-github-support/about-github-support)"
