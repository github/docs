---
title: Usar LDAP
redirect_from:
  - /enterprise/admin/articles/configuring-ldap-authentication/
  - /enterprise/admin/articles/about-ldap-authentication/
  - /enterprise/admin/articles/viewing-ldap-users/
  - /enterprise/admin/hidden/enabling-ldap-sync/
  - /enterprise/admin/hidden/ldap-sync/
  - /enterprise/admin/user-management/using-ldap
  - /enterprise/admin/authentication/using-ldap
intro: 'LDAP te permite autenticar el {% data variables.product.prodname_ghe_server %} en tus cuentas existentes y administrar de manera centralizada el acceso a los repositorios. LDAP es un protocolo de aplicación popular para acceder a servicios de información de directorios y mantenerlos, y uno de los protocolos más comunes que se usan para integrar software de terceros con directorios de usuarios de empresas grandes.'
versions:
  enterprise-server: '*'
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
---

{% data reusables.enterprise_user_management.built-in-authentication %}

### Servicios LDAP admitidos

El {% data variables.product.prodname_ghe_server %} se integra con los siguientes servicios LDAP:

* Active Directory
* FreeIPA
* Oracle Directory Server Enterprise Edition
* OpenLDAP
* Open Directory
* 389-ds

### Consideraciones sobre el nombre de usuario con LDAP

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

### Configurar LDAP con {% data variables.product.product_location_enterprise %}

Una vez configurado LDAP, los usuarios podrán iniciar sesión en tu instancia con sus credenciales LDAP. Cuando los usuarios inician sesión por primera vez, sus nombres de perfil, direcciones de correo electrónico y claves SSH se establecen con los atributos de LDAP desde tu directorio.

Cuando configuras el acceso de LDAP para los usuarios a través de {% data variables.enterprise.management_console %}, tus licencias de usuario no se utilizarán sino hasta que los usuarios ingresen en tu instancia por primera vez. Sin embargo, si creas una cuenta manualmente utilizando la configuración de administrador para el sitio, esta licencia de usuario se tomará en cuenta.

{% warning %}

**Advertencia:** Antes de configurar LDAP en {% data variables.product.product_location_enterprise %}, asegúrate de que tu servicio LDAP admita resultados paginados.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. En "Authentication" (Autenticación), selecciona **LDAP**. ![Seleccionar LDAP](/assets/images/enterprise/management-console/ldap-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Seleccionar la casilla de verificación autenticación integrada LDAP](/assets/images/enterprise/management-console/ldap-built-in-authentication.png)
5. Agrega tus parámetros de configuración.

### Atributos de LDAP
Usa estos atributos para terminar de configurar LDAP para {% data variables.product.product_location_enterprise %}.

| Nombre del atributo                                                                                             | Tipo      | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Host`                                                                                                          | Requerido | El host LDAP, p. ej. `ldap.example.com` o `10.0.0.30`. Si el nombre del host solo está disponible desde tu red interna, es posible que primero debas configurar el DNS de {% data variables.product.product_location_enterprise %} para que pueda resolver el nombre del host usando tus servidores de nombres internos.                                                                                                                                                                                                                                               |
| `Port (Puerto)`                                                                                                 | Requerido | El puerto que están escuchando los servicios LDAP. Los ejemplos incluyen: 389 y 636 (para LDAPS).                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `Encryption (Cifrado)`                                                                                          | Requerido | El método de cifrado usado para garantizar las comunicaciones con el servidor LDAP. Los ejemplos incluyen el normal (sin cifrado), el SSL/LDAPS (cifrado desde el principio) y el StartTLS (se actualiza a comunicación cifrada una vez que se conecta).                                                                                                                                                                                                                                                                                                                      |
| `Domain search user (Usuario de búsqueda de dominio)`                                                           | Opcional  | El usuario LDAP que realiza las búsquedas de usuario para autenticar otros usuarios cuando inician sesión. Esto suele ser una cuenta de servicio creada específicamente para integraciones de terceros. Usa un nombre certificado completo, como `cn=Administrator,cn=Users,dc=Example,dc=com`. Con Active Directory, también puedes usar la sintaxis `[DOMAIN]\[USERNAME]` (p. ej.,`WINDOWS\Administrator`) para el usuario de búsqueda de dominio.                                                                                                                        |
| `Domain search password (Contraseña de búsqueda de dominio)`                                                    | Opcional  | La contraseña para el usuario de búsqueda de dominio.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `Administrators group (Grupo de administradores)`                                                               | Opcional  | Los usuarios de este grupo son promovidos a administradores del sitio cuando inician sesión en tu aparato. Si no configuras un Grupo de administradores LDAP, la primera cuenta de usuario LDAP que inicie sesión en tu aparato será promovida automáticamente a administrador del sitio.                                                                                                                                                                                                                                                                                     |
| `Domain base (Base de dominio)`                                                                                 | Requerido | El `Nombre Distintivo` (DN) completamente calificado de un subárbol LDAP que quieras buscar para usuarios y grupos. Puedes agregar tantos como quieras; sin embargo, cada grupo debe estar definido en la misma base de dominio que los usuarios que le pertenecen. Si especificas grupos de usuarios con restricciones, solo los usuarios que pertenecen a esos grupo estarán al alcance. Te recomendamos que especifiques el primer nivel de tu árbol de directorios LDAP como tu base de dominio y que uses grupos de usuarios con restricciones para controlar el acceso. |
| `Restricted user groups (Grupos de usuarios con restricciones)`                                                 | Opcional  | Si se especifica, solo los usuarios de estos grupos tendrán permiso para iniciar sesión. Solo necesitas especificar los nombres comunes (CN) de los grupos y puedes agregar tantos grupos como quieras. Si no se especifica ningún grupo, *todos* los usuarios dentro del alcance de la base de dominio especificada podrán iniciar sesión en tu instancia del {% data variables.product.prodname_ghe_server %}.                                                                                                                                                       |
| `User ID (Identificación de usuario)`                                                                           | Requerido | El atributo de LDAP que identifica al usuario LDAP que intenta una autenticación. Una vez que se establece una asignación, los usuarios pueden modificar sus nombres de usuario del {% data variables.product.prodname_ghe_server %}. El campo debería ser `sAMAccountName` para la mayoría de las instalaciones de Active Directory, pero puede ser `uid` para otras soluciones LDAP, como OpenLDAP. El valor predeterminado es `uid`.                                                                                                                                |
| `Nombre de perfil`                                                                                              | Opcional  | El nombre que aparecerá en la página de perfil del {% data variables.product.prodname_ghe_server %} del usuario. A menos que la sincronización LDAP esté activada, los usuarios pueden modificar sus nombres de perfil.                                                                                                                                                                                                                                                                                                                                                |
| `Emails (Correos electrónicos)`                                                                                 | Opcional  | Las direcciones de correo electrónico para la cuenta del {% data variables.product.prodname_ghe_server %} de un usuario.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `SSH keys (Claves SSH)`                                                                                         | Opcional  | Las claves SSH públicas vinculadas a la cuenta del {% data variables.product.prodname_ghe_server %} de un usuario. Las claves deben ser en formato OpenSSH.                                                                                                                                                                                                                                                                                                                                                                                                            |
| `Claves GPG`                                                                                                    | Opcional  | Las claves GPG vinculadas a la cuenta del {% data variables.product.prodname_ghe_server %} de un usuario.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `Disable LDAP authentication for Git operations (Desactivar la autenticación LDAP para las operaciones de Git)` | Opcional  | Si está seleccionado, [desactiva](#disabling-password-authentication-for-git-operations) la posibilidad del usuario de usar contraseñas LDAP para autenticar las operaciones de Git.                                                                                                                                                                                                                                                                                                                                                                                          |
| `Enable LDAP certificate verification (Activar la verificación de certificado LDAP)`                            | Opcional  | Si está seleccionado, [activa](#enabling-ldap-certificate-verification) la verificación de certificado LDAP.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `Synchronization (Sincronización)`                                                                              | Opcional  | Si está seleccionado, [activa](#enabling-ldap-sync) la sincronización LDAP.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Desactivar la autenticación de contraseña para las operaciones de Git

Selecciona **Disable username and password authentication for Git operations** (Desactivar la autenticación de nombre de usuario y contraseña para las operaciones de Git) en los parámetros de tu LDAP para implementar el uso de los tokens de acceso personal o las claves SSH para el acceso a Git, que pueden ayudarte a prevenir que tu servidor se sobrecargue de solicitudes de autenticación LDAP. Recomendamos esta configuración, ya que un servidor LDAP de respuesta lenta, en especial combinado con una gran cantidad de solicitudes debido al sondeo, suele ser una causa de problemas e interrupciones.

![Desactivar la casilla de verificación autenticación de contraseña LDAP](/assets/images/enterprise/management-console/ldap-disable-password-auth-for-git.png)

Cuando se selecciona esta opción, si un usuario intenta usar una contraseña para las operaciones de Git a través de la línea de comando, recibirá un mensaje de error que dice: `La autenticación de contraseña no está permitida para las operaciones de Git. Debes usar un token de acceso personal.`

#### Activar la verificación de certificado LDAP

Selecciona **Enable LDAP certificate verification** (Activar verificación de certificado LDAP) en tus parámetros LDAP para validar el certificado del servidor LDAP que usas con TLS.

![Casilla de verificación de certificado LDAP](/assets/images/enterprise/management-console/ldap-enable-certificate-verification.png)

Cuando se selecciona esta opción, el certificado se valida para garantizar que:
- Si el certificado contiene al menos un nombre alternativo del firmante (SAN), uno de los SAN coincida con el nombre del host de LDAP. De lo contrario, que el nombre común (CN) coincida con el nombre del host de LDAP.
- El certificado no haya vencido.
- El certificado esté firmado por una entidad de certificación (CA) de confianza.

#### Activar la sincronización LDAP

La sincronización LDAP te permite sincronizar usuarios y miembros del equipo del {% data variables.product.prodname_ghe_server %} con tus grupos LDAP establecidos. Esto te permite establecer un control de acceso basado en roles para los usuarios desde tu servidor LDAP, en lugar de hacerlo de forma manual dentro del {% data variables.product.prodname_ghe_server %}. Para obtener más información, consulta "[Crear equipos](/enterprise/{{ currentVersion }}/admin/guides/user-management/creating-teams#creating-teams-with-ldap-sync-enabled)".

Para activar la sincronización LDAP, en tus parámetros LDAP, selecciona **Synchronize Emails** (Sincronizar correos electrónicos), **Synchronize SSH Keys** (Sincronizar claves SSH) o **Synchronize GPG Keys** (Sincronizar claves GPG).

![Casilla de verificación de Sincronización](/assets/images/enterprise/management-console/ldap-synchronize.png)

Una vez que actives la sincronización LDAP, se ejecutará un trabajo de sincronización en el intervalo de tiempo especificado para realizar las siguientes operaciones en cada cuenta de usuario:

- Si has permitido la autenticación integrada para usuarios externos a tu proveedor de identidad, y el usuario está usando la autenticación integrada, pasa al siguiente usuario.
- Si no existe una asignación LDAP para el usuario, intenta asignar el usuario a una entrada LDAP en el directorio. Si el usuario no se puede asignar a una entrada LDAP, suspéndelo y pasa al siguiente usuario.
- Si hay una asignación LDAP y falta la entrada LDAP correspondiente en el directorio, suspende el usuario y pasa al siguiente usuario.
- Si la entrada LDAP correspondiente se marcó como desactivada, y el usuario aún no se suspendió, suspéndelo y pasa al siguiente usuario.
- Si la entrada LDAP correspondiente no se marcó como desactivada, el usuario está suspendido y _Reactivate suspended users_ (Reactivar usuarios suspendidos) está activado en el centro de administración, anula la suspensión del usuario.
- Si la entrada LDAP correspondiente incluye un atributo `name`, actualiza el nombre de perfil del usuario.
- Si la entrada LDAP correspondiente está en el grupo de administradores, promueve al usuario a administrador del sitio.
- Si la entrada LDAP correspondiente no está en el grupo de administradores, degrada al usuario a una cuenta normal.
- Si un campo de usuario LDAP está definido para correos electrónicos, sincroniza los parámetros del correo electrónico del usuario con la entrada LDAP. Establece la primera entrada `mail` LDAP como el correo electrónico principal.
- Si un campo de usuario LDAP está definido para claves públicas SSH, sincroniza las claves SSH públicas del usuario con la entrada LDAP.
- Si un campo de usuario LDAP está definido para claves GPG, sincroniza las claves GPG del usuario con la entrada LDAP.

{% note %}

**Nota**: Las entradas LDAP solo pueden estar marcadas como desactivadas si usas Active Directory y el atributo `userAccountControl` está presente y marcado con `ACCOUNTDISABLE`.

{% endnote %}

También se ejecutará un trabajo de sincronización en el intervalo de tiempo especificado para realizar las siguientes operaciones en cada equipo que haya sido asignado a un grupo LDAP:

- Si se eliminó el grupo LDAP correspondiente de un equipo, elimina todos los miembros del equipo.
- Si las entradas de miembros LDAP se eliminaron del grupo LDAP, elimina los usuarios correspondientes del equipo. Si como resultado el usuario pierde acceso a algún repositorio, elimina toda bifurcación privada que el usuario tenga de esos repositorios.
- Si las entradas de miembros LDAP se agregaron al grupo LDAP, agrega los usuarios correspondientes al equipo. Si como resultado el usuario recupera el acceso a algún repositorio, restablece toda bifurcación privada de los repositorios que haya sido eliminada debido a que el usuario perdió acceso en los últimos 90 días.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Advertencia de seguridad:**

Cuando la sincronización LDAP está activada, los administradores del sitio y los propietarios de la organización pueden buscar en el directorio LDAP los grupos a los cuales asignar el equipo.

Esto posibilita divulgar información organizativa confidencial a contratistas u otros usuarios sin privilegios, incluidos los siguientes:

- La existencia de grupos LDAP específicos visibles para el *Usuario de búsqueda de dominio*.
- Los miembros del grupo LDAP que tienen cuentas de usuario del {% data variables.product.prodname_ghe_server %}, que se divulga cuando se crea un equipo sincronizado con ese grupo LDAP.

Si no se desea divulgar dicha información, su empresa u organización debe restringir los permisos del *Usuario de búsqueda de dominio* en la consola de administración. Si no es posible aplicar dicha restricción, comuníquese con el {% data variables.contact.contact_ent_support %}.

{% endwarning %}

#### Clases de objetos del grupo LDAP admitidas

El {% data variables.product.prodname_ghe_server %} admite estas clases de objetos del grupo LDAP. Los grupos se pueden anidar.

- `grupo`
- `groupOfNames`
- `groupOfUniqueNames`
- `posixGroup`

### Ver y crear usuarios LDAP

Puedes ver la lista completa de usuarios LDAP que tienen acceso a tu instancia y aprovisionar nuevos usuarios.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. En la barra lateral izquierda, haz clic en **LDAP users** (Usuarios LDAP). ![Pestaña LDAP users (Usuarios LDAP)](/assets/images/enterprise/site-admin-settings/ldap-users-tab.png)
4. Para buscar un usuario, escribe un nombre de usuario completo o parcial y haz clic en **Search** (Buscar). Se mostrarán los usuarios existentes en los resultados de búsqueda. Si un usuario no existe, haz clic en **Create** (Crear) para aprovisionar la nueva cuenta de usuario. ![Búsqueda LDAP](/assets/images/enterprise/site-admin-settings/ldap-users-search.png)

### Actualizar cuentas LDAP

A menos que [la sincronización LDAP esté activada](#enabling-ldap-sync), las modificaciones de las cuentas LDAP no se sincronizan automáticamente con el {% data variables.product.prodname_ghe_server %}.

* Para usar un nuevo grupo de administración LDAP, los usuarios deben ser promovidos y degradados de forma manual en el {% data variables.product.prodname_ghe_server %} para reflejar las modificaciones en LDAP.
* Para agregar o eliminar cuentas LDAP de los grupos de administración LDAP, [promueve o degrada las cuentas en el {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/user-management/promoting-or-demoting-a-site-administrator).
* Para eliminar las cuentas LDAP, [suspende las cuentas del {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users).

#### Sincronizar cuentas LDAP de forma manual

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. En "LDAP", haz clic en **Sync now** (Sincronizar ahora) para actualizar de forma manual la cuenta con los datos de tu servidor LDAP. ![Botón LDAP sync now (Sincronizar LDAP ahora)](/assets/images/enterprise/site-admin-settings/ldap-sync-now-button.png)

También puedes [utilizar la API para activar una sincronización manual](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#ldap).

### Revocar acceso a {% data variables.product.product_location_enterprise %}

Si [la sincronización LDAP está activada](#enabling-ldap-sync), al eliminar las credenciales LDAP de un usuario, se suspenderá su cuenta hasta la siguiente ejecución de sincronización.

Si la sincronización LDAP **no** está activada, debes suspender de forma manual la cuenta del {% data variables.product.prodname_ghe_server %} después de eliminar las credenciales LDAP. Para obtener más información, consulta "[Suspender y anular suspensión de usuarios](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)".
