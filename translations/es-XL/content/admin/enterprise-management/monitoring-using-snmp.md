---
title: Supervisar por medio de SNMP
intro: '{% data variables.product.prodname_enterprise %} proporciona datos sobre el uso del disco, la utilización del CPU, el uso de la memoria y más sobre SNMP.'
redirect_from:
  - /enterprise/admin/installation/monitoring-using-snmp
  - /enterprise/admin/articles/monitoring-using-snmp/
  - /enterprise/admin/enterprise-management/monitoring-using-snmp
versions:
  enterprise-server: '*'
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
---

SNMP es una norma común para controlar dispositivos en una red. Recomendamos firmemente habilitar SNMP para que puedas controlar la salud de {% data variables.product.product_location_enterprise %} y saber cuándo agregar más memoria, almacenamiento, o rendimiento del procesador a la máquina del servidor.

{% data variables.product.prodname_enterprise %} tiene una instalación SNMP estándar, para poder aprovechar los [diversos plugins](http://www.monitoring-plugins.org/doc/man/check_snmp.html) disponibles para Nagios o para cualquier otro sistema de control.

### Configurar SNMP v2c

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.access-monitoring %}
{% data reusables.enterprise_management_console.enable-snmp %}
4. En el campo **Community string (Cadena de la comunidad)**, ingresa una nueva cadena de comunidad. Si se deja en blanco, queda predeterminado como `públicp`. ![Campo para añadir la cadena de comunidad](/assets/images/enterprise/management-console/community-string.png)
{% data reusables.enterprise_management_console.save-settings %}
5. Prueba tu configuración SNMP al ejecutar el siguiente comando en una estación de trabajo por separado con soporte de SNMP en tu red:
  ```shell
  # community-string is your community string
  # hostname is the IP or domain of your Enterprise instance
  $ snmpget -v 2c -c <em>community-string</em> -O e <em>hostname</em> hrSystemDate.0
  ```

Debería devolver la hora del sistema en el host {% data variables.product.product_location_enterprise %}.

### Seguridad basada en el usuario

Si habilitas el SNMP v3, puedes aprovechar la seguridad en base al usuario aumentada a través de User Security Model (USM). Para cada usuario único, puedes especificar un nivel de seguridad:
- `noAuthNoPriv`: este nivel de seguridad no brinda autenticación ni privacidad.
- `authNoPriv`: este nivel de seguridad brinda autenticación pero no privacidad. Para consultar al aparato deberás usar un nombre de usuario y una contraseña (que debe tener como mínimo ocho caracteres). La información se envía sin encriptación, similar a SNMPv2. El protocolo de autenticación puede ser MD5 o SHA o SHA como predeterminado.
- `authPriv`: este nivel de seguridad brinda autenticación con privacidad. Se requiere autenticación, incluida una contraseña de autenticación de ocho caracteres como mínimo, y las respuestas están encriptadas. No se requiere una contraseña de privacidad, pero si se proporciona debe tener como mínimo ocho caracteres. Si no se proporciona una contraseña de privacidad, se usa la contraseña de autenticación. El protocolo de privacidad puede ser DES o AES y queda AES como predeterminado.

### Configurando usuarios para SNMP v3

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.access-monitoring %}
{% data reusables.enterprise_management_console.enable-snmp %}
4. Selecciona **SNMP v3**. ![Botón para habilitar SNMP v3](/assets/images/enterprise/management-console/enable-snmpv3.png)
5. En "Username (Nombre de usuario)", escribe el nombre de usuario único de tu usuario SNMP v3.![Campo para escribir el nombre de usuario SNMP v3](/assets/images/enterprise/management-console/snmpv3-username.png)
6. En el menú desplegable **Security Level (Nivel de seguridad)**, haz clic en el nivel de seguridad para tu usuario SNMP v3. ![Menú desplegable para el nivel de seguridad del usuario SNMP v3](/assets/images/enterprise/management-console/snmpv3-securitylevel.png)
7. Para usuarios SNMP v3 con el nivel de seguridad `authnopriv`: ![Configuración para el nivel de seguridad authnopriv](/assets/images/enterprise/management-console/snmpv3-authnopriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
8. Para usuarios SNMP v3 con el nivel de seguridad `authpriv`: ![Configuración para el nivel de seguridad authpriv](/assets/images/enterprise/management-console/snmpv3-authpriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
    - De forma opcional, en "Privacy password" (Contraseña de privacidad), escribe la contraseña de privacidad.
    - Hacia la derecha de "Privacy password" (Contraseña de privacidad), en el menú desplegable **Protocol (Protocolo)**, haz clic en el método de protocolo de privacidad que deseas usar.
9. Haz clic en **Add secret (Agregar secreto)**. ![Botón para añadir usuario SNMP v3](/assets/images/enterprise/management-console/snmpv3-adduser.png)
{% data reusables.enterprise_management_console.save-settings %}

##### Consultar datos de SNMP

Tanto la información del nivel de software como de hardware sobre tu aparato está disponible con SNMP v3. Debido a la falta de encriptación y privacidad para los niveles de seguridad `noAuthNoPriv` y `authNoPriv`, excluimos la tabla `hrSWRun` (1.1.3.6.1.2.1.25.41) de los informes SNMP resultantes. Incluimos esta tabla si estás usando el nivel de seguridad `authPriv`.

Con SNMP v2c, solo está disponible la información del nivel de hardware de tu aparato. Estas aplicaciones y servicios dentro de {% data variables.product.prodname_enterprise %} no tienen configurado OID para informar métricas. Hay varios MIB disponibles, que puedes ver ejecutando `snmpwalk` en una estación de trabajo separada con soporte SNMP en tu red:

```shell
# community-string es tu cadena de comunidad
# hostname es la IP o dominio de tu instancia de empresa
$ snmpwalk -v 2c -c <em>community-string</em> -O e <em>hostname</em>
```

De los MIB disponibles para SNMP, el más útil es `HOST-RESOURCES-MIB` (.1.3.6.1.2.1.25). Consulta la tabla de abajo para ver algunos objetos importantes en este MIB:

| Nombre                     | OID                       | Descripción                                                                                     |
| -------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------- |
| hrSystemDate.2             | .1.3.6.1.2.1.25.1.2       | La noción de servidores de los datos locales y de la hora del día.                              |
| hrSystemUptime.0           | .1.3.6.1.2.1.25.1.1.0     | Cuánto tiempo ha pasado desde que el servidor se inició por última vez.                         |
| hrMemorySize.0             | .1.3.6.1.2.1.25.2.2.0     | La cantidad de RAM en el servidor.                                                              |
| hrSystemProcesses.0        | .1.3.6.1.2.1.25.1.6.0     | La cantidad de contextos de proceso actualmente cargados o ejecutándose en el servidor.         |
| hrStorageUsed.1            | .1.3.6.1.2.1.25.2.3.1.6.1 | La cantidad de espacio de almacenamiento consumido en el servidor, en hrStorageAllocationUnits. |
| hrStorageAllocationUnits.1 | .1.3.6.1.2.1.25.2.3.1.4.1 | El tamaño, en bytes, de una hrStorageAllocationUnit                                             |

Por ejemplo, para consultar `hrMemorySize` con SNMP v3, ejecuta el siguiente comando en una estación de trabajo separada con apoyo de SNMP en tu red:
```shell
# username es el nombre de usuario único de tu usuario SNMP v3
# auth password es la contraseña de autenticación
# privacy password es la contraseña de privacidad
# hostname es la IP o el dominio de tu instancia de empresa
$ snmpget -v 3 -u <em>username</em> -l authPriv \
  -A "<em>auth password</em>" -a SHA \
  -X "<em>privacy password</em>" -x AES \
  -O e <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

Con SNMP v2c, para consultar `hrMemorySize`, ejecuta el siguiente comando en una estación de trabajo separada con apoyo de SNMP en tu red:
```shell
# community-string es tu cadena de comunidad
# hostname es la IP o el dominio de tu instancia de empresa
snmpget -v 2c -c <em>community-string</em> <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

{% tip %}

**Nota:** para evitar que se filtre información sobre los servicios que se están ejecutando en tu aparato, excluimos la tabla `hrSWRun` (1.1.3.6.1.2.1.25.41) de los informes SNMP resultantes excepto que estés usando el nivel de seguridad `authPriv` con SNMP v3. Si estás utilizando el nivel de seguridad `authPriv`, incluimos la tabla `hrSWRun`.

{% endtip %}

Para obtener más información sobre los mapeos OID para los atributos de sistema comunes en SNMP, consulta "[OID SNMP de Linux para CPU, memoria y estadísticas de disco](http://www.linux-admins.net/2012/02/linux-snmp-oids-for-cpumemory-and-disk.html)".
