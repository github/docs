---
title: Ver y actualizar los tickets de soporte
intro: 'Puedes ver los tickets de soporte{% ifversion ghes or ghec %}, colaborar con colegas en ellos,{% endif %} y responder a {% data variables.contact.github_support %} utilizando el {% data variables.contact.support_portal %}.'
shortTitle: Managing your tickets
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Support
ms.openlocfilehash: b735331d90c590ff6911fed44e181563b44bfc27
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193618'
---
## Acerca de la administración de tickets

{% data reusables.support.zendesk-old-tickets %}

Puede usar el [Portal de soporte técnico de GitHub ](https://support.github.com/) para ver las incidencias de soporte técnico actuales y anteriores, y responder a {% data variables.contact.github_support %}. Después de 120 días, los vales resueltos se archivan{% ifversion ghec or ghes or ghae %}, y solo se pueden ver los vales archivados de las cuentas empresariales{% endif %}.

{% ifversion ghes or ghec %} {% data reusables.enterprise-accounts.support-entitlements %} {% endif %}

## Visualización de las incidencias de soporte técnico recientes

{% data reusables.support.view-open-tickets %}
1. En el cuadro de texto, puede leer el historial de comentarios. La respuesta más reciente está en la parte superior.

   ![Captura de pantalla del historial de comentarios de incidencias de soporte técnico, con la respuesta más reciente en la parte superior](/assets/images/help/support/support-recent-response.png)

1. Opcionalmente, para traducir el comentario de la incidencia, haz clic en {% octicon "globe" aria-label="The globe icon" %} y elige el idioma de tu preferencia en el menú desplegable. Las incidencias de soporte técnico se pueden traducir a chino (simplificado), francés, alemán, japonés, portugués (Brasil) o español.

   ![Captura de pantalla de una incidencia de soporte técnico con el menú desplegable en el que se muestran las opciones de traducción resaltadas](/assets/images/help/support/support-ticket-translation-options.png)

{% ifversion ghec or ghes or ghae %}

## Visualización de las incidencias de soporte técnico archivadas

Solo puede ver los vales archivados de una cuenta empresarial.

{% data reusables.support.navigate-to-my-tickets %}
1. Selecciona el menú desplegable **Mis vales** y haz clic en el nombre de la cuenta de empresa. 

{% indented_data_reference reusables.support.entitlements-note spaces=3 %}

   ![Captura de pantalla del menú desplegable "Mis incidencias de soporte técnico".](/assets/images/help/support/ticket-context.png)
1. En la tabla "Mis vales", haz clic en **Ver vales archivados**.

{% endif %}

## Actualización de incidencias de soporte técnico

{% data reusables.support.view-open-tickets %}
1. Opcionalmente, si se resuelve la incidencia, haga clic en **Cerrar incidencia** en el cuadro de texto.
![Captura de pantalla en la que se muestra la ubicación del botón "Cerrar incidencia".](/assets/images/help/support/close-ticket.png)
1. Para responder a al Soporte técnico de GitHub y agregar un nuevo comentario a la incidencia, escriba la respuesta en el cuadro de texto.
![Captura de pantalla del campo de texto "Agregar un comentario".](/assets/images/help/support/new-comment-field.png)
1. Para agregar el comentario a la incidencia, haga clic en **Comentario**.
![Captura de pantalla del botón "Comentario".](/assets/images/help/support/add-comment.png)

{% ifversion ghec or ghes %}
## Colaboración en incidencias de soporte técnico

Puede colaborar con los compañeros en incidencias de soporte técnico mediante el portal de soporte técnico. Los propietarios, los administradores de facturación y otros miembros de la empresa con derechos de soporte técnico pueden ver las incidencias asociadas a una cuenta de empresa o a una organización administrada por una cuenta de empresa. Para más información, vea "[Administración de derechos de soporte técnico para su empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".

Adicionalmente a poder ver los tickets, también puedes agregar comentarios para apoyarlos si tu dirección de correo electrónico se copia en el ticket o si la persona que lo abrió utilizó una dirección de correo electrónico con un dominio que esté verificado en la cuenta u organización empresarial que administra una cuenta empresarial. Para más información sobre la comprobación de un dominio, vea "[Comprobación o aprobación de un dominio para la empresa](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)" y "[Comprobación o aprobación de un dominio para la organización](/enterprise-cloud@latest/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)".

{% endif %}

## Información adicional

- "[Acerca del soporte técnico de GitHub](/support/learning-about-github-support/about-github-support)"
