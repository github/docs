---
title: Permisos de acceso en GitHub
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do
  - /articles/what-are-the-different-types-of-team-permissions
  - /articles/what-are-the-different-access-permissions
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: 'Con los roles, puedes controlar quién tiene acceso a tus cuentas y recursos de {% data variables.product.product_name %}, así como el nivel de acceso que tiene cada persona.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Permissions
  - Accounts
shortTitle: Access permissions
ms.openlocfilehash: 32db1949cbc110559023f719682caed0319aae9e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145135715'
---
## Acerca de los permisos de acceso en {% data variables.product.prodname_dotcom %}

{% data reusables.organizations.about-roles %} 

Los roles funcionan de forma diferente para los diferentes tipos de cuenta. Para más información sobre las cuentas, vea "[Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

## Cuentas personales

Un repositorio que pertenece a una cuenta personal tiene dos niveles de permiso: *propietario del repositorio* y *colaboradores*. Para obtener más información, consulta "[Niveles de permiso para un repositorio de cuenta personal](/articles/permission-levels-for-a-user-account-repository)".

## Cuentas de organización

Los miembros de una organización pueden tener roles de *propietario*{% ifversion fpt or ghec %}, *administrador de facturación*,{% endif %} o *miembro*. Los propietarios tienen acceso administrativo completo a la organización{% ifversion fpt or ghec %}, mientras que los administradores de facturación pueden administrar la configuración de facturación{% endif %}. El miembro tiene un rol predeterminado para todos los demás. Puedes administrar los permisos de acceso para múltiples miembros a la vez con equipos. Para más información, consulte:
- "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
- "[Permisos de panel de proyecto para una organización](/articles/project-board-permissions-for-an-organization)"
- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Acerca de los equipos](/articles/about-teams)"

## Cuenta de empresa

{% ifversion fpt %} {% data reusables.gated-features.enterprise-accounts %} 

Para obtener más información sobre los permisos de las cuentas empresariales, consulte [la documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/get-started/learning-about-github/access-permissions-on-github).
{% else %} Los *propietarios de empresas* tienen poder absoluto sobre la cuenta de empresa y pueden realizar todo tipo de acciones en ella.{% ifversion ghec or ghes %} Los *administradores de facturación* pueden administrar la configuración de facturación de la cuenta empresarial.{% endif %} Los miembros y colaboradores externos de las organizaciones que pertenecen a su cuenta de empresa son automáticamente miembros de la cuenta de empresa, aunque no tienen acceso a ella ni a su configuración. Para más información, vea "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

{% ifversion ghec %} Si una empresa usa {% data variables.product.prodname_emus %}, los miembros se aprovisionan como nuevas cuentas personales en {% data variables.product.prodname_dotcom %}, las cuales administra completamente el proveedor de identidades. Los {% data variables.product.prodname_managed_users %} tienen acceso de solo lectura a los repositorios que no son parte de su empresa y no pueden interactuar con los usuarios que tampoco sean miembros de la empresa. Dentro de las organizaciones que pertenecen a la empresa, se puede otorgar los mismos niveles de acceso granular de los {% data variables.product.prodname_managed_users %} que estén disponibles para las organizaciones normales. Para más información, vea "[Acerca de {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".
{% endif %} {% endif %}

## Información adicional

- "[Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts)"
