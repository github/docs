---
title: Solución de problemas de administración de acceso e identidad para la empresa
shortTitle: Troubleshoot IAM
intro: Revisa los problemas y soluciones comunes de la administración de acceso e identidad para su empresa.
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
ms.openlocfilehash: 7b8c42a1012e91268f4315d99934a4f38c52a529
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107537'
---
## Conflictos de nombre de usuario

{% ifversion ghec %} Si la empresa usa {% data variables.product.prodname_emus %}, {% endif %}{% data variables.product.product_name %} normaliza un identificador que proporciona el proveedor de identidades (IdP) para crear el nombre de usuario de cada persona en {% data variables.product.prodname_dotcom %}. Si varias cuentas se normalizan en el mismo nombre de usuario de {% data variables.product.prodname_dotcom %}, se produce un conflicto de nombre de usuario y solo se crea la primera cuenta de usuario. Para más información, consulta "[Consideraciones sobre el nombre de usuario para la autenticación externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

{% ifversion ghec %}
## Errores al cambiar las configuraciones de autenticación

Si tienes problemas al cambiar entre distintas configuraciones de autenticación, como cambiar la configuración de SSO de SAML de una organización a una cuenta empresarial o migrar de SAML a OIDC para {% data variables.product.prodname_emus %}, asegúrate de seguir nuestros procedimientos recomendados para el cambio.

- "[Cambio de la configuración de SAML de una cuenta de organización a una empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)"
- "[Migración de SAML a OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)"
- "[Migración de la empresa a un nuevo proveedor de identidades o inquilino](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-your-enterprise-to-a-new-identity-provider-or-tenant)"

## Acceso a la empresa cuando el inicio de sesión único no está disponible

Si un error de configuración de SAML o un problema con el proveedor de identidades (IdP) te impide usar el inicio de sesión único, puedes usar un código de recuperación para acceder a la empresa. Para más información, vea "[Acceso a la cuenta de empresa si el proveedor de identidades no está disponible](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)".
{% endif %}

## Errores de autenticación de SAML

Si los usuarios experimentan errores al intentar autenticarse con SAML, consulta "[Solución de problemas de autenticación de SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication)".

{% ifversion ghec %}
## Información adicional

- "[Solución de problemas de administración de acceso e identidad para la organización](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization)" {% endif %}
