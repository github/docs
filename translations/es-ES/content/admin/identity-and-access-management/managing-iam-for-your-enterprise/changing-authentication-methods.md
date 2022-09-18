---
title: Cambio de métodos de autenticación
intro: 'Puedes modificar la manera en que {% data variables.product.prodname_ghe_server %} se autentica con tus cuentas existentes en cualquier momento.'
redirect_from:
  - /enterprise/admin/user-management/changing-authentication-methods
  - /enterprise/admin/authentication/changing-authentication-methods
  - /admin/authentication/changing-authentication-methods
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
versions:
  ghes: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Change authentication methods
ms.openlocfilehash: 074c4fe8784d3ea7b8ada6b532e680384571facf
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882695'
---
Las cuentas de usuario de {% data variables.product.product_location %} se mantienen al cambiar el método de autenticación y los usuarios seguirán iniciando sesión en la misma cuenta siempre que su nombre de usuario no cambie.

Si el nuevo método de autenticación modifica los nombres de usuario, se crearán nuevas cuentas. Como administrador, puede cambiar el nombre de los usuarios mediante la configuración de administrador del sitio o mediante la [API de administración de usuarios](/rest/reference/enterprise-admin#update-the-username-for-a-user).

Otras cuestiones que deberías tener en cuenta son las siguientes:

* **Contraseñas:** si empieza a usar la autenticación integrada para la instancia, los usuarios deben [establecer una contraseña](/enterprise/user/articles/how-can-i-reset-my-password/) una vez completado el cambio.

* **Administradores del sitio:** los privilegios administrativos se [controlan mediante el proveedor de identidades cuando se usa SAML](/enterprise/admin/guides/user-management/using-saml/#saml-attributes) y se pueden [controlar mediante la pertenencia a grupos cuando se usa LDAP](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance).

* **Pertenencia a equipos:** solo LDAP permite [controlar la pertenencia a equipos](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance) desde el servidor de directorios.

* **Suspensión de usuarios:** cuando se usa LDAP para autenticarse, el acceso a {% data variables.product.prodname_ghe_server %} se puede controlar mediante _grupos restringidos_. Después de cambiar a LDAP, si se configuran grupos restringidos, los usuarios existentes que no estén en uno de esos grupos serán suspendidos. La suspensión ocurrirá cuando inicien sesión o durante la siguiente sincronización LDAP.

* **Pertenencia a grupos:** cuando se usa LDAP para autenticarse, los usuarios [se suspenden o se anula su suspensión](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users) automáticamente en función de la pertenencia a grupos restringidos y el estado de la cuenta con Active Directory.

* **Autenticación de Git:** SAML y CAS solo admiten la autenticación de Git mediante HTTP o HTTPS con un [token de acceso personal](/articles/creating-an-access-token-for-command-line-use). No se admite la autenticación de contraseña a través de HTTP o HTTPS. LDAP admite la autenticación de Git basada en contraseña de forma predeterminada, pero se recomienda [deshabilitar ese método](/enterprise/admin/authentication/using-ldap#disabling-password-authentication-for-git-operations) y forzar la autenticación con un token de acceso personal o una clave SSH.

* **Autenticación de API:** SAML y CAS solo admiten la autenticación de API mediante un [token de acceso personal](/articles/creating-an-access-token-for-command-line-use). No se admite la autenticación básica.

* **Autenticación en dos fases:** {% data reusables.enterprise_user_management.external_auth_disables_2fa %}

* **Autenticación de reserva para usuarios sin cuenta en tu proveedor de autenticación externo**: puedes invitar a los usuarios a autenticarse en {% data variables.product.product_location %} sin agregarlos a tu proveedor de identidades. Para obtener más información, consulta "[Permiso para la autenticación integrada para usuarios fuera del proveedor](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)".
