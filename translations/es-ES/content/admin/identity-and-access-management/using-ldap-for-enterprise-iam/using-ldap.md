---
title: Usar LDAP
redirect_from:
  - /enterprise/admin/articles/configuring-ldap-authentication
  - /enterprise/admin/articles/about-ldap-authentication
  - /enterprise/admin/articles/viewing-ldap-users
  - /enterprise/admin/hidden/enabling-ldap-sync
  - /enterprise/admin/hidden/ldap-sync
  - /enterprise/admin/user-management/using-ldap
  - /enterprise/admin/authentication/using-ldap
  - /admin/authentication/using-ldap
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-ldap
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-ldap
intro: 'Si usas el Protocolo ligero de acceso a directorios (LDAP) para centralizar el acceso entre aplicaciones, puedes integrar {% data variables.product.product_name %} mediante la configuración de la autenticación LDAP para la instancia.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
ms.openlocfilehash: 5d9b6aa9a5d641afa0b24dbe0e0f446ab723c735
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107529'
---
## Acerca de la autenticación LDAP para {% data variables.product.product_name %}

LDAP es un protocolo de aplicación popular para acceder a servicios de información de directorios y mantenerlos, y uno de los protocolos más comunes para integrar software de terceros con directorios de usuarios de empresas grandes. Para obtener más información, consulta "[Protocolo ligero de acceso a directorios](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol)" en Wikipedia.

Si usas un directorio LDAP para la autenticación centralizada, puedes configurar la autenticación LDAP para las personas que usan {% data variables.location.product_location %}.

{% data reusables.enterprise_user_management.built-in-authentication %}

## Servicios LDAP admitidos

El {% data variables.product.prodname_ghe_server %} se integra con los siguientes servicios LDAP:

* Active Directory
* FreeIPA
* Oracle Directory Server Enterprise Edition
* OpenLDAP
* Open Directory
* 389-ds

## Consideraciones sobre el nombre de usuario con LDAP

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Para obtener más información, consulta "[Consideraciones sobre el nombre de usuario para la autenticación externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

## Configuración de LDAP con {% data variables.location.product_location %}

Una vez configurado LDAP, los usuarios podrán iniciar sesión en tu instancia con sus credenciales LDAP. Cuando los usuarios inician sesión por primera vez, sus nombres de perfil, direcciones de correo electrónico y claves SSH se establecen con los atributos de LDAP desde tu directorio.

Cuando configuras el acceso de LDAP para los usuarios a través de {% data variables.enterprise.management_console %}, tus licencias de usuario no se utilizarán sino hasta que los usuarios ingresen en tu instancia por primera vez. Sin embargo, si creas una cuenta manualmente utilizando la configuración de administrador para el sitio, esta licencia de usuario se tomará en cuenta.

{% warning %}

**Advertencia**: Antes de configurar LDAP en {% data variables.location.product_location %}, asegúrate de que el servicio LDAP admita resultados paginados.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
3. En **Authentication**, seleccione LDAP.
![Seleccionar LDAP](/assets/images/enterprise/management-console/ldap-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Seleccionar la casilla de verificación autenticación integrada LDAP](/assets/images/enterprise/management-console/ldap-built-in-authentication.png)
5. Agrega tus parámetros de configuración.

## Atributos de LDAP
Usa estos atributos para terminar de configurar LDAP para {% data variables.location.product_location %}.

| Nombre del atributo           | Tipo     | Descripción |
|--------------------------|----------|-------------|
| `Host`                   | Obligatorio | El host de LDAP, por ejemplo `ldap.example.com` o `10.0.0.30`. Si el nombre del host solo está disponible desde la red interna, es posible que primero debas configurar el DNS de {% data variables.location.product_location %} para que pueda resolver el nombre del host mediante el uso de los servidores de nombres internos. |
| `Port`                   | Obligatorio | El puerto que están escuchando los servicios LDAP. Los ejemplos incluyen: 389 y 636 (para LDAPS). |
| `Encryption`             | Obligatorio | El método de cifrado usado para garantizar las comunicaciones con el servidor LDAP. Los ejemplos incluyen el normal (sin cifrado), el SSL/LDAPS (cifrado desde el principio) y el StartTLS (se actualiza a comunicación cifrada una vez que se conecta). |
| `Domain search user`     | Opcionales | El usuario LDAP que busca a otros usuarios que iniciaron sesión, para permitir la autenticación. Esto suele ser una cuenta de servicio creada específicamente para integraciones de terceros. Utilice un nombre completo como `cn=Administrator,cn=Users,dc=Example,dc=com`. Con Active Directory, también puede usar la sintaxis `[DOMAIN]\[USERNAME]` (por ejemplo, `WINDOWS\Administrator`) para el usuario de búsqueda de dominio con Active Directory. |
| `Domain search password` | Opcionales | La contraseña para el usuario de búsqueda de dominio. |
| `Administrators group`   | Opcionales | Los usuarios de este grupo son promovidos a administradores del sitio cuando inician sesión en tu aparato. Si no configuras un Grupo de administradores LDAP, la primera cuenta de usuario LDAP que inicie sesión en tu aparato será promovida automáticamente a administrador del sitio. |
| `Domain base`            | Obligatorio | El `Distinguished Name` (DN) completo de un subárbol de LDAP en el que desea buscar usuarios y grupos. Puedes agregar tantos como quieras; sin embargo, cada grupo debe estar definido en la misma base de dominio que los usuarios que le pertenecen. Si especificas grupos de usuarios con restricciones, solo los usuarios que pertenecen a esos grupo estarán al alcance. Te recomendamos que especifiques el primer nivel de tu árbol de directorios LDAP como tu base de dominio y que uses grupos de usuarios con restricciones para controlar el acceso. |
| `Restricted user groups` | Opcionales | Si se especifica, solo los usuarios de estos grupos tendrán permiso para iniciar sesión. Solo necesitas especificar los nombres comunes (CN) de los grupos y puedes agregar tantos grupos como quieras. Si no se especifica ningún grupo, *todos* los usuarios dentro del alcance de la base de dominio especificada podrán iniciar sesión en su instancia de {% data variables.product.prodname_ghe_server %}. |
| `User ID`                | Obligatorio | El atributo de LDAP que identifica al usuario LDAP que intenta una autenticación. Una vez que se establece una asignación, los usuarios pueden modificar sus nombres de usuario del {% data variables.product.prodname_ghe_server %}. Este campo debe ser `sAMAccountName` para la mayoría de las instalaciones de Active Directory, pero puede ser `uid` para otras soluciones de LDAP, como OpenLDAP. El valor predeterminado es `uid`. |
| `Profile name`           | Opcional | El nombre que aparecerá en la página de perfil del {% data variables.product.prodname_ghe_server %} del usuario. A menos que la sincronización LDAP esté activada, los usuarios pueden modificar sus nombres de perfil. |
| `Emails`                 | Opcionales | Las direcciones de correo electrónico para la cuenta del {% data variables.product.prodname_ghe_server %} de un usuario. |
| `SSH keys`               | Opcionales | Las claves SSH públicas vinculadas a la cuenta del {% data variables.product.prodname_ghe_server %} de un usuario. Las claves deben ser en formato OpenSSH. |
| `GPG keys`               | Opcionales | Las claves GPG vinculadas a la cuenta del {% data variables.product.prodname_ghe_server %} de un usuario. |
| `Disable LDAP authentication for Git operations` | Opcionales |Si está seleccionada, [desactiva](#disabling-password-authentication-for-git-operations) la capacidad de los usuarios de usar contraseñas LDAP para autenticar las operaciones de Git. |
| `Enable LDAP certificate verification` | Opcionales |Si está seleccionada, [activa](#enabling-ldap-certificate-verification) la comprobación del certificado LDAP. |
| `Synchronization` | Opcionales |Si está seleccionada, [activa](#enabling-ldap-sync) la sincronización de LDAP. |

### Desactivar la autenticación de contraseña para las operaciones de Git

Selecciona **Deshabilitar la autenticación de nombre de usuario y contraseña para las operaciones de Git** en los parámetros de LDAP para implementar el uso de {% data variables.product.pat_generic %} o claves de SSH para el acceso a Git, que pueden ayudarte a impedir que el servidor se sobrecargue de solicitudes de autenticación LDAP. Recomendamos esta configuración, ya que un servidor LDAP de respuesta lenta, en especial combinado con una gran cantidad de solicitudes debido al sondeo, suele ser una causa de problemas e interrupciones.

![Desactivar la casilla de verificación autenticación de contraseña LDAP](/assets/images/enterprise/management-console/ldap-disable-password-auth-for-git.png)

Cuando se selecciona esta opción, si un usuario intenta usar una contraseña para las operaciones de Git a través de la línea de comandos, recibirá un mensaje de error que indica: `Password authentication is not allowed for Git operations. You must use a {% data variables.product.pat_generic %}.`

### Activar la verificación de certificado LDAP

Seleccione **Enable LDAP certificate verification** en los parámetros de LDAP para validar el certificado del servidor LDAP que usa con TLS.

![Casilla de verificación de certificado LDAP](/assets/images/enterprise/management-console/ldap-enable-certificate-verification.png)

Cuando se selecciona esta opción, el certificado se valida para garantizar que:
- Si el certificado contiene al menos un nombre alternativo del firmante (SAN), uno de los SAN coincida con el nombre del host de LDAP. De lo contrario, que el nombre común (CN) coincida con el nombre del host de LDAP.
- El certificado no ha expirado.
- El certificado esté firmado por una entidad de certificación (CA) de confianza.

### Activar la sincronización LDAP

{% note %}

**Nota:** Los equipos que usan la sincronización de LDAP están limitados a un máximo de 1499 miembros.

{% endnote %}

La sincronización LDAP te permite sincronizar usuarios y miembros del equipo del {% data variables.product.prodname_ghe_server %} con tus grupos LDAP establecidos. Esto te permite establecer un control de acceso basado en roles para los usuarios desde tu servidor LDAP, en lugar de hacerlo de forma manual dentro del {% data variables.product.prodname_ghe_server %}. Para obtener más información, consulte "[Creación de equipos](/enterprise/admin/guides/user-management/creating-teams#creating-teams-with-ldap-sync-enabled)".

Para habilitar la sincronización de LDAP, en la configuración de LDAP, seleccione **Synchronize Emails**, **Synchronize SSH Keys** o **Synchronize GPG Keys** .

![Casilla de verificación de Sincronización](/assets/images/enterprise/management-console/ldap-synchronize.png)

Una vez que actives la sincronización LDAP, se ejecutará un trabajo de sincronización en el intervalo de tiempo especificado para realizar las siguientes operaciones en cada cuenta de usuario:

- Si has permitido la autenticación integrada para usuarios externos a tu proveedor de identidad, y el usuario está usando la autenticación integrada, pasa al siguiente usuario.
- Si no existe una asignación LDAP para el usuario, intenta asignar el usuario a una entrada LDAP en el directorio. Si el usuario no se puede asignar a una entrada LDAP, suspéndelo y pasa al siguiente usuario.
- Si hay una asignación LDAP y falta la entrada LDAP correspondiente en el directorio, suspende el usuario y pasa al siguiente usuario.
- Si la entrada LDAP correspondiente se marcó como desactivada, y el usuario aún no se suspendió, suspéndelo y pasa al siguiente usuario.
- Si la entrada LDAP correspondiente no se marcó como deshabilitada, el usuario queda suspendido y se activa _Reactivate suspended users_ en el Centro de administración para anular la suspensión del usuario.
- Si uno o más grupos de usuarios restringidos se configuran en la instancia y la entrada de LDAP correspondiente no está en uno de estos grupos, suspende al usuario.
- Si se configuran uno o más grupos de usuarios restringidos en la instancia, la entrada de LDAP correspondiente se encuentra en alguno de estos grupos y se habilita _Reactivate suspended users_ en el Centro de administración para anular la suspensión del usuario.
- Si la entrada de LDAP correspondiente incluye un atributo `name`, se actualiza el nombre de perfil del usuario.
- Si la entrada LDAP correspondiente está en el grupo de administradores, promueve al usuario a administrador del sitio.
- Si la entrada LDAP correspondiente no está en el grupo de administradores, degrada al usuario a una cuenta normal.
- Si un campo de usuario LDAP está definido para correos electrónicos, sincroniza los parámetros del correo electrónico del usuario con la entrada LDAP. Establezca la primera entrada de LDAP `mail` como correo electrónico principal.
- Si un campo de usuario LDAP está definido para claves públicas SSH, sincroniza las claves SSH públicas del usuario con la entrada LDAP.  
- Si un campo de usuario LDAP está definido para claves GPG, sincroniza las claves GPG del usuario con la entrada LDAP.  

{% note %}

**Nota**: Las entradas de LDAP solo se pueden marcar como deshabilitadas si usa Active Directory y el atributo `userAccountControl` está presente y marcado con `ACCOUNTDISABLE`. Algunas variaciones de Active Directory, como AD LDS y ADAM, no admiten el atributo `userAccountControl`.

{% endnote %}

También se ejecutará un trabajo de sincronización en el intervalo de tiempo especificado para realizar las siguientes operaciones en cada equipo que haya sido asignado a un grupo LDAP:

- Si se eliminó el grupo LDAP correspondiente de un equipo, elimina todos los miembros del equipo.
- Si las entradas de miembros LDAP se eliminaron del grupo LDAP, elimina los usuarios correspondientes del equipo. Si el usuario ya no es miembro de ningún equipo de la organización y tampoco es propietario de la organización, retíralo de esta. Si como resultado el usuario pierde acceso a algún repositorio, elimina toda bifurcación privada que el usuario tenga de esos repositorios.

  {% note %}

  **Nota**: La sincronización de LDAP no quitará a un usuario de una organización si este es propietario de esa organización. Otro propietario de la organización deberá quitarlo manualmente.

  {% endnote %}
- Si las entradas de miembros LDAP se agregaron al grupo LDAP, agrega los usuarios correspondientes al equipo. Si como resultado el usuario recupera el acceso a algún repositorio, restablece toda bifurcación privada de los repositorios que haya sido eliminada debido a que el usuario perdió acceso en los últimos 90 días.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Advertencia de seguridad:**

Cuando la sincronización LDAP está activada, los administradores del sitio y los propietarios de la organización pueden buscar en el directorio LDAP los grupos a los cuales asignar el equipo.

Esto posibilita divulgar información organizativa confidencial a contratistas u otros usuarios sin privilegios, incluidos los siguientes:

- La existencia de grupos de LDAP específicos visibles para el *usuario de búsqueda de dominio*.
- Los miembros del grupo LDAP que tienen cuentas de usuario del {% data variables.product.prodname_ghe_server %}, que se divulga cuando se crea un equipo sincronizado con ese grupo LDAP.

Si no se desea divulgar dicha información, su empresa u organización debe restringir los permisos del *usuario de búsqueda de dominio* configurado en la Consola de administración. Si no es posible aplicar dicha restricción, comuníquese con el {% data variables.contact.contact_ent_support %}.

{% endwarning %}

### Clases de objetos del grupo LDAP admitidas

El {% data variables.product.prodname_ghe_server %} admite estas clases de objetos del grupo LDAP. Los grupos se pueden anidar.

- `group`
- `groupOfNames`
- `groupOfUniqueNames`
- `posixGroup`

## Ver y crear usuarios LDAP

Puedes ver la lista completa de usuarios LDAP que tienen acceso a tu instancia y aprovisionar nuevos usuarios.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %}
3. En la barra lateral de la izquierda, haga clic en **LDAP users**.
![Pestaña LDAP users](/assets/images/enterprise/site-admin-settings/ldap-users-tab.png)
4. Para buscar un usuario, escriba parte de un nombre de usuario o el nombre completo y haga clic en **Search**. Se mostrarán los usuarios existentes en los resultados de búsqueda. Si un usuario no existe, haga clic en **Create** para aprovisionar la nueva cuenta de usuario.
![Búsqueda LDAP](/assets/images/enterprise/site-admin-settings/ldap-users-search.jpg)

## Actualizar cuentas LDAP

A menos que [se habilite la sincronización de LDAP](#enabling-ldap-sync), los cambios en las cuentas de LDAP no se sincronizan automáticamente con {% data variables.product.prodname_ghe_server %}.

* Para usar un nuevo grupo de administración LDAP, los usuarios deben ser promovidos y degradados de forma manual en el {% data variables.product.prodname_ghe_server %} para reflejar las modificaciones en LDAP.
* Para agregar o quitar cuentas de LDAP en grupos de administradores de LDAP, [aumente o disminuya el nivel de las cuentas en {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/user-management/promoting-or-demoting-a-site-administrator).
* Para quitar cuentas de LDAP, [suspenda las cuentas de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users).

### Sincronizar cuentas LDAP de forma manual

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. En "LDAP", haga clic en **Sync now** para actualizar manualmente la cuenta con datos del servidor de LDAP.
![Botón Sync now de LDAP](/assets/images/enterprise/site-admin-settings/ldap-sync-now-button.png)

También puede [usar la API para desencadenar una sincronización manual](/enterprise/user/rest/reference/enterprise-admin#ldap).

## Revocación del acceso a {% data variables.location.product_location %}

Si [la sincronización de LDAP está habilitada](#enabling-ldap-sync), si se eliminan las credenciales de LDAP de un usuario, se suspenderá su cuenta después de la siguiente ejecución de sincronización.

Si la sincronización de LDAP **no** está habilitada, debe suspender de forma manual la cuenta del {% data variables.product.prodname_ghe_server %} después de eliminar las credenciales de LDAP. Para obtener más información, consulte "[Suspensión y anulación de la suspensión de usuarios](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)".
