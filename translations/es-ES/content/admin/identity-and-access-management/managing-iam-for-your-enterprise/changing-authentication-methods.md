---
title: Modificar los métodos de autenticación
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
shortTitle: Cambiar los métodos de autenticación
---

Cuando modificas el método de autenticación, las cuentas de usuario en {% data variables.product.product_location %} se conservan y los usuarios seguirán iniciando sesión en la misma cuenta siempre que su nombre de usuario no cambie.

Si el nuevo método de autenticación modifica los nombres de usuario, se crearán nuevas cuentas. Como administrador, puedes renombrar a los usuarios a través de la configuración de administrador de sitio, o utilizando [La API de Administración de Usuarios](/rest/reference/enterprise-admin#update-the-username-for-a-user).

Otras cuestiones que deberías tener en cuenta son las siguientes:

* **Contraseñas:** Si comienzas a usar la autenticación integrada para tu instancia, los usuarios deben [configurar una contraseña](/enterprise/user/articles/how-can-i-reset-my-password/) una vez completado el cambio.

* **Administradores del sitio:** Los privilegios administrativos son [controlados por tu proveedor de identidad cuando usas SAML](/enterprise/admin/guides/user-management/using-saml/#saml-attributes) y pueden ser [controlados por los miembros del grupo cuando usas LDAP](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance).

* **Miembros del equipo:** Solo LDAP te permite [controlar los miembros del equipo](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance) desde tu servidor de directorios.

* **Suspensión de usuario:** cuando usas LDAP para autenticar, se puede controlar el acceso al {% data variables.product.prodname_ghe_server %} mediante _grupos restringidos_. Después de cambiar a LDAP, si se configuran grupos restringidos, los usuarios existentes que no estén en uno de esos grupos serán suspendidos. La suspensión ocurrirá cuando inicien sesión o durante la siguiente sincronización LDAP.

* **Miembros del grupo:** Cuando usas LDAP para autenticar, [se suspende y se anula la suspensión](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users) de los usuarios automáticamente, en función de los miembros del grupo con restricciones y los estados de cuenta con Active Directory.

* **Autenticación Git:** SAML y CAS solo admiten la autenticación Git a través de HTTP o HTTPS usando un [token de acceso personal](/articles/creating-an-access-token-for-command-line-use). No se admite la autenticación de contraseña a través de HTTP o HTTPS. LDAP admite la autenticación Git basada en contraseña por defecto, pero te recomendamos [desactivar ese método](/enterprise/admin/authentication/using-ldap#disabling-password-authentication-for-git-operations) y forzar la autenticación mediante un token de acceso personal o clave SSH.

* **Autenticación de API:** SAML y CAS solo admiten la autenticación de API usando un [token de acceso personal](/articles/creating-an-access-token-for-command-line-use). No se admite la autenticación básica.

* **Autenticación de dos factores:** {% data reusables.enterprise_user_management.external_auth_disables_2fa %}

* **Fallback authentication for users with no account on your external authentication provider:** You can invite users to authenticate to {% data variables.product.product_location %} without adding them to your identity provider. For more information, see "[Allowing built-in authentication for users outside your provider](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)."
