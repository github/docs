---
title: Presentación de direcciones IP en el registro de auditoría de la empresa
intro: Puedes mostrar la dirección IP de origen de los eventos en el registro de auditoría de la empresa.
shortTitle: IP addresses in audit log
permissions: Enterprise owners can display IP addresses in the audit log for an enterprise.
versions:
  feature: enterprise-audit-log-ip-addresses
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Networking
  - Security
ms.openlocfilehash: 7dad3642866b637432442591d8e5714e3db6f59f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147508079'
---
## Acerca de la presentación de direcciones IP en el registro de auditoría

De forma predeterminada, {% data variables.product.product_name %} no muestra la dirección IP de origen de los eventos en el registro de auditoría de la empresa. Opcionalmente, para garantizar el cumplimiento y responder a las amenazas, puedes mostrar la dirección IP completa asociada al actor responsable de cada evento. Los actores suelen ser usuarios, pero también pueden ser aplicaciones o integraciones.

Eres el responsable de cumplir las obligaciones legales que acompañan a la visualización o almacenamiento de las direcciones IP presentadas en el registro de auditoría de la empresa.

Si decides mostrar direcciones IP, las direcciones IP solo aparecen en el registro de auditoría de la empresa. Las direcciones IP no aparecerán para los eventos de los registros de auditoría de las organizaciones individuales que pertenecen a tu empresa. Para más información, sobre los registros de auditoria de la organización, consulta "[Revisión del registro de auditoría de la organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)".

Puedes mostrar direcciones IP en el registro de auditoría, independientemente del método de autenticación que usaste para tu empresa en {% data variables.product.product_location %}. Para obtener más información, consulta "[Acerca de la autenticación para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".

Cuando alguien crea una cuenta en {% data variables.product.product_location %}, la persona acepta la recopilación de {% data variables.product.company_short %} de información básica sobre las conexiones a los servicios de {% data variables.product.company_short %}, incluida la dirección IP de origen. Para obtener más información, consulta "[Declaración de privacidad de GitHub](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#usage-information)".

## Eventos que muestran direcciones IP en el registro de auditoría

{% data variables.product.product_name %} muestra una dirección IP en el registro de auditoría cuando un miembro de la empresa interactúa con un recurso que pertenece a la empresa o a una organización de la empresa. Por ejemplo, verás una dirección IP para eventos auditados que implican un repositorio interno o privado propiedad de una organización de tu empresa o recursos asociados a esos repositorios, como una incidencia, una solicitud de incorporación de cambios, una acción o un proyecto.

Si los miembros de la empresa acceden a {% data variables.product.product_location %} con cuentas personales que administran, como no usas {% data variables.product.prodname_emus %}, {% data variables.product.product_name %} no muestra un evento ni una dirección IP en el registro de auditoría para las siguientes acciones.
  
- Autenticación en {% data variables.product.product_location %}
- Interacciones con un recurso propiedad de la cuenta personal, incluido un repositorio, gist o proyecto
- Interacciones con un repositorio público propiedad de una organización de tu empresa

## Habilitación de la presentación de direcciones IP en el registro de auditoría

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. En "Registro de auditoría", haz clic en **Divulgación de IP de origen**.

   ![Captura de pantalla de la pestaña "Divulgación de IP de origen"](/assets/images/help/enterprises/audit-log-source-ip-disclosure-tab.png)
1. En "Divulgación de direcciones IP de actor en los registros de auditoría", selecciona **Habilitar divulgación de IP de origen**.

   ![Captura de pantalla de la casilla para habilitar la presentación de direcciones IP en los registros de auditoría](/assets/images/help/enterprises/audit-log-enable-source-ip-disclosure-checkbox.png)
1. Haga clic en **Save**(Guardar).

Después de habilitar la característica, puedes acceder al registro de auditoría para ver los eventos que incluyen direcciones IP. Para más información, vea "[Acceso al registro de auditoría para la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)".
