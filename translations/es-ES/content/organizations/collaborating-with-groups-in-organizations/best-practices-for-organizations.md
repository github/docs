---
title: Procedimientos recomendados para organizaciones
shortTitle: Best practices
intro: 'Aprende los procedimientos recomendados por {% data variables.product.prodname_dotcom %} para tu organización.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 015c74d7a69a1feb5c8ff9467a4219753f2cb5eb
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163462'
---
## Asignación de varios propietarios

{% data reusables.organizations.org-ownership-recommendation %} Para obtener más información, vea "[Mantener la continuidad de la propiedad para su organización](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)".

## Uso de equipos

Se recomienda usar equipos para facilitar la colaboración en la organización. Para más información, vea "[Acerca de los equipos](/organizations/organizing-members-into-teams/about-teams)".

{% ifversion ghec %} Se recomienda encarecidamente administrar la pertenencia al equipo a través del proveedor de identidades (IdP). Para más información, vea "[Administración de la sincronización de equipos para la organización](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)".

{% data reusables.enterprise-accounts.emu-scim-note %} {% endif %}

Se recomienda mantener visibles los equipos siempre que sea posible y reservar equipos secretos para situaciones confidenciales. Para más información, vea "[Cambio de la visibilidad del equipo](/organizations/organizing-members-into-teams/changing-team-visibility)".

{% ifversion ghec or ghes or ghae %}
## Uso de la información general sobre seguridad

{% data reusables.security-overview.about-the-security-overview %} Para más información, consulta "[Acerca de la información general de seguridad](/code-security/security-overview/about-the-security-overview)".
{% endif %}
