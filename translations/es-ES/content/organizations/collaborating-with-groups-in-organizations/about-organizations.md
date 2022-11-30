---
title: Acerca de las organizaciones
intro: 'Las organizaciones son cuentas compartidas en las que las empresas y los proyectos de código abierto pueden colaborar en muchos proyectos a la vez, con características sofisticadas de seguridad y administrativas.'
redirect_from:
  - /articles/about-organizations
  - /github/setting-up-and-managing-organizations-and-teams/about-organizations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 0269554568c8781706a8d79600f5b6191d0b9598
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164335'
---
## Acerca de las organizaciones

{% data reusables.organizations.about-organizations %} Para obtener más información sobre los tipos de cuenta, vea "[Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

Puedes invitar a un número ilimitado de personas a unirse a tu organización y, después, proporcionar a estos miembros una variedad de roles que conceden distintos niveles de acceso a la organización y sus datos. Para más información, vea "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

Además de administrar el acceso a la propia organización, puedes administrar por separado el acceso a los repositorios, paneles de proyecto y aplicaciones de la organización. Para obtener más información, consulta "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)", "[Permisos de panel de proyecto para una organización](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)" y "[Administración del acceso a las aplicaciones de la organización](/organizations/managing-access-to-your-organizations-apps)".

Para simplificar la administración de acceso y mejorar la colaboración, puedes crear equipos anidados que reflejen la estructura del grupo, con permisos de acceso en cascada y menciones. Para más información, vea "[Acerca de los equipos](/organizations/organizing-members-into-teams/about-teams)".

Puedes configurar la organización para satisfacer las necesidades únicas del grupo administrando la configuración, como restringir los tipos de repositorios que los miembros pueden crear. Para obtener más información, consulta "[Administración de la configuración de una organización](/organizations/managing-organization-settings)".

Para proteger la seguridad de la organización, puedes aplicar los requisitos de seguridad y revisar el registro de auditoría de esta. Para obtener más información, consulte "[Protección de la organización](/organizations/keeping-your-organization-secure)".

Para obtener información sobre cómo usar organizaciones de forma más eficaz, consulta "[Procedimientos recomendados para organizaciones](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations)".

{% ifversion fpt or ghec %}
## Acerca de la disponibilidad de características

{% data reusables.organizations.organization-plans %} {% endif %}

## Organizaciones y cuentas de empresa

{% ifversion fpt %} Las cuentas de empresa son una característica de {% data variables.product.prodname_ghe_cloud %} que permiten a los propietarios administrar de forma centralizada la directiva y la facturación de varias organizaciones. Para obtener más información, vea la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations).
{% else %} {% ifversion ghec %}En el caso de las organizaciones que pertenecen a una cuenta de empresa, la facturación se administra en el nivel de cuenta de empresa y la configuración de facturación no está disponible en el nivel de organización.{% endif %} Los propietarios de empresas pueden establecer la directiva para todas las organizaciones de la cuenta de empresa o permitir que los propietarios de la organización establezcan la directiva en el nivel de organización. Los propietarios de la organización no pueden cambiar los parámetros implementados para tu organización en el nivel de cuenta de empresa. Si tienes consultas sobre una política o la configuración para tu organización, comunícate con el propietario de tu cuenta de empresa.

{% ifversion ghec %} {% data reusables.enterprise.create-an-enterprise-account %} Para obtener más información, vea "[Crear una cuenta de empresa](/admin/overview/creating-an-enterprise-account)".

{% data reusables.enterprise-accounts.invite-organization %}

{% endif %} {% endif %}

{% ifversion fpt or ghec %}
## Términos de servicio y protección de datos para organizaciones

Una entidad, como una empresa, una organización sin fines de lucro o un grupo, puede aceptar los Términos de servicio estándar o los Términos de servicio corporativos para su organización. Para obtener más información, vea "[Actualizar a los términos del servicio corporativos](/articles/upgrading-to-the-corporate-terms-of-service)".

{% endif %}
