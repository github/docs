---
title: Acerca del Soporte de GitHub
intro: Puedes contactar al Soporte de GitHub para que te ayude a solucionar los problemas que te encuentras al utilizar GitHub.
shortTitle: About GitHub Support
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/overview/about-github-enterprise-support
  - /articles/about-github-support
  - /github/working-with-github-support/about-github-support
  - /articles/github-enterprise-cloud-support
  - /github/working-with-github-support/github-enterprise-cloud-support
  - /articles/business-plan-support
  - /articles/github-business-cloud-support
  - /admin/enterprise-support/about-support-for-advanced-security
  - /enterprise-server/admin/enterprise-support/about-support-for-advanced-security
topics:
  - Support
ms.openlocfilehash: aa2b407b96cc7ee2ecc20fee9782e3084b3627db
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192917'
---
## Acerca de {% data variables.contact.github_support %}

Las opciones de soporte disponibles para los usuarios de {% data variables.product.prodname_dotcom %} depende de los productos que utilizan sus cuentas personales, de cualquier organización o empresa de las cuales sean miembros y de cualquier instancia de {% data variables.product.prodname_ghe_server %} que administren. Cada producto incluye un nivel predeterminado de soporte y las cuentas que utilizan {% data variables.product.prodname_enterprise %} pueden comprar {% data variables.contact.premium_support %}.

{% ifversion fpt %} Si eres miembro de una organización que utilice {% data variables.product.prodname_enterprise %}, puedes utilizar el menú desplegable en la esquina superior derecha de {% data variables.product.prodname_docs %} para ver una versión de estos artículos que sea adecuada para tu producto. Para obtener más información, consulta "[Acerca de las versiones de GitHub Docs](/get-started/learning-about-github/about-versions-of-github-docs)".
{% endif %}

{% ifversion not ghae %}

|  | {% data variables.product.prodname_gcf %} | Soporte técnico Standard | Soporte premium |
|----|---------------|-------|---------------|
| {% data variables.product.prodname_free_user %} | {% octicon "check" aria-label="Check" %}  |  |  |  
| {% data variables.product.prodname_pro %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  |  |  
| {% data variables.product.prodname_team %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  |  |
| {% data variables.product.prodname_ghe_cloud %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  | Disponible para comprar |
| {% data variables.product.prodname_ghe_server %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  | Disponible para comprar |

{% endif %}

{% ifversion ghes %}

Puedes ponerte en contacto con {% data variables.contact.enterprise_support %} a través de {% data variables.contact.contact_enterprise_portal %} para obtener ayuda:
 - Instalación y uso de {% data variables.product.product_name %}
 - Inspeccionar y verificar las causas de errores sospechados
 - Instalación y uso de {% data variables.product.prodname_advanced_security %}

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.support.premium-support-features %}

Para obtener más información, consulta "[Acerca del soporte técnico premium de GitHub](/support/about-github-support/about-github-premium-support)".

{% endif %}

{% ifversion fpt or ghec or ghae %}

Antes de contactar con {% data variables.contact.github_support %}, comprueba si actualmente hay algún incidente que afecte a los servicios de {% data variables.product.product_name %} en los {%- ifversion fpt or ghec %} [estados de {% data variables.product.prodname_dotcom %}](https://githubstatus.com/) {%- elsif ghae %} [y {% data variables.product.product_name %}](https://ghestatus.com/) {%- endif %}. Para obtener más información, consulta "[Acerca del estado de GitHub](#about-github-status)".

{% endif %}

{% ifversion fpt %} {% data reusables.support.free-and-paid-support %}

Para reportar incidentes de cuenta, seguridad y abuso, o para recibir soporte asistido para una cuenta de pago, visita el {% data variables.contact.contact_support_portal %}. Para obtener más información, consulta "[Creación de una incidencia de soporte técnico](/support/contacting-github-support/creating-a-support-ticket)".
{% endif %}

{% ifversion fpt %} Si tienes productos de pago o eres miembro de una organización que los tenga, puedes contactar al {% data variables.contact.github_support %} en inglés.
{% else %} Gracias a {% data variables.product.product_name %}, tienes acceso a soporte técnico en inglés y japonés.
{% endif %}

{% ifversion fpt or ghec or ghes %} {% data reusables.support.support-ticket-translation-option %} {% endif %}

{% ifversion ghes or ghec %}

Para contactar al {% data variables.contact.github_support %}, visita el {% data variables.contact.contact_support_portal %}. Para obtener más información, consulta "[Creación de una incidencia de soporte técnico](/support/contacting-github-support/creating-a-support-ticket)".

{% elsif ghae %}

Puedes contactar al {% data variables.contact.enterprise_support %} a través del {% data variables.contact.ae_azure_portal %} para reportar los problemas por escrito. Para obtener más información, consulta "[Creación de una incidencia de soporte técnico](/support/contacting-github-support/creating-a-support-ticket)".

{% endif %}

{% ifversion not ghae %} Las comunicaciones por correo electrónico del soporte técnico de GitHub siempre se enviarán desde una dirección `github.com` o `githubsupport.com`.
{% endif %}

## Alcance del soporte técnico

{% data reusables.support.scope-of-support %}

{% ifversion ghec or fpt or ghae %}
## Acerca del estado de GitHub

Puedes comprobar cualquier incidente que afecte actualmente a los servicios de {% data variables.product.product_name %} y ver la información sobre los incidentes anteriores en la [Página de estado]({% ifversion fpt or ghec %}https://githubstatus.com{% elsif ghae %}https://ghestatus.com{% endif %}) de {% data variables.product.prodname_dotcom %}.

También puedes suscribirte y obtener alertas por correo electrónico, mensaje de texto y webhook cada vez que exista un incidente que afecte a {% data variables.product.product_name %}.

{% endif %}

{% ifversion ghec or ghes %}
## Acerca de los derechos de soporte

Los propietarios de las empresas y administradores de facturación automáticamente tendrán derecho a soporte, lo cual los faculta para crear, ver y comentar en los tickets de soporte asociados con sus cuentas empresariales.

Los propietarios de las empresas también pueden agregar derechos de soporte para los miembros de las organizaciones que pertenezcan a sus cuentas empresariales, permitiéndoles crear, ver y comentar en los tickets de soporte. Para más información, vea "[Administración de derechos de soporte técnico para su empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".

{% endif %}

{% ifversion fpt or ghec %}
## Otorgar a {% data variables.contact.github_support %} acceso temporario a un repositorio privado

Si {% data variables.contact.github_support %} necesita acceder a un repositorio privado para tratar tu solicitud de soporte, el dueño de éste recibirá un correo electrónico con un enlace para aceptar o rechazar el acceso temporal. El propietario tendrá 20 días para aceptar o rechazar la solicitud antes de que ésta caduque. Si el propietario acepta la solicitud, {% data variables.contact.github_support %} tendrá acceso al repositorio por cinco días. Durante esta ventana, el personal {% data variables.contact.github_support %} con los privilegios necesarios puede desbloquear el repositorio durante un máximo de dos horas y volverán a bloquear el repositorio si el trabajo se completa antes. Todo el personal {% data variables.contact.github_support %} genera eventos de registro de auditoría, y la visibilidad del repositorio no se ve afectada en ningún momento.

{% data variables.contact.github_support %} jamás accederá a tus repositorios privados sin tu consentimiento explícito. Para obtener más información, consulta los [términos del servicio](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access).
{% endif %}

{% ifversion ghec or ghes %}
## Contactar a las Ventas de GitHub y a la Capacitación de GitHub

Para las preguntas relacionadas con precios, adquisición de licencias, renovaciones, cotizaciones, pagos y otras cuestiones relacionadas, contacta con {% data variables.contact.contact_enterprise_sales %} o llama al [+1 (877) 448-4820](tel:+1-877-448-4820).

Para obtener más información sobre las opciones de capacitación, incluidos los aprendizajes personalizados, consulta el [sitio de formación de {% data variables.product.company_short %}](https://services.github.com/).

{% note %}

**Nota:** La capacitación está incluida en el {% data variables.product.premium_plus_support_plan %}. Para obtener más información, consulta "[Acerca del soporte técnico premium de GitHub](/support/about-github-support/about-github-premium-support)".

{% endnote %}

{% endif %}

{% ifversion ghes or ghec %}
## Horario

### Soporte en inglés

Para cuestiones estándar no urgentes, ofrecemos soporte en inglés las 24 horas del día, 5 días a la semana, excepto fines de semana y feriados nacionales en EE.○UU. El tiempo de respuesta estándar es 24 horas.

{% ifversion ghes %} Para incidencias urgentes, estamos disponibles las 24 horas del día, 7 días a la semana, incluso en días festivos en EE. UU.
{% endif %}

### Soporte en japonés

Para incidencias estándares no urgentes, el soporte técnico en japonés se encuentra disponible de lunes a viernes, de 9:00 a.m. a 5:00 p.m. (hora estándar en Japón), excepto los días festivos nacionales en Japón. 

{% ifversion ghes %} Para incidencias urgentes, ofrecemos soporte técnico en inglés 24 horas al día, 7 días por semana, incluso durante los días festivos en EE. UU.
{% endif %}

Para conocer una lista de los festivos nacionales de EE. UU. y Japón que sigue {% data variables.contact.enterprise_support %}, consulta la [Programación de festivos](#holiday-schedules)".

## Cronograma de feriados

Para cuestiones urgentes, podemos ayudarte los 24 horas del día, los 7 días de la semana, incluidos los feriados en EE. UU. y Japón.

### Feriados en los Estados Unidos

{% data variables.contact.enterprise_support %} respeta estos días feriados en los EE.UU, aunque nuestro equipo de soporte global se encuentra disponible para atender tickets urgentes.

{% data reusables.enterprise_enterprise_support.support-holiday-availability %}

### Feriados en Japón

{% data variables.contact.enterprise_support %} no ofrece soporte técnico en japonés del 28 de diciembre al 3 de enero, así como en los festivos que se indican en [国民の祝日について - 内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html).

{% data reusables.enterprise_enterprise_support.installing-releases %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

## Resolver y cerrar tickets de soporte

{% data reusables.support.enterprise-resolving-and-closing-tickets %}

{% endif %}

## Información adicional

{%- ifversion ghes %}
- Sección 10 sobre soporte técnico en el "[Contrato de licencia de {% data variables.product.prodname_ghe_server %}](https://enterprise.github.com/license)" {%- endif %}
- "[Creación de una incidencia de soporte técnico](/support/contacting-github-support/creating-a-support-ticket)" {%- ifversion not ghae %}
- "[Visualización y actualización de incidencias de soporte técnico](/support/contacting-github-support/viewing-and-updating-support-tickets)" {%- endif %}
