---
title: Acceder al shell administrativo (SSH)
redirect_from:
  - /enterprise/admin/articles/ssh-access/
  - /enterprise/admin/articles/adding-an-ssh-key-for-shell-access/
  - /enterprise/admin/guides/installation/administrative-shell-ssh-access/
  - /enterprise/admin/articles/troubleshooting-ssh-permission-denied-publickey/
  - /enterprise/admin/2.13/articles/troubleshooting-ssh-permission-denied-publickey/
  - /enterprise/admin/2.14/articles/troubleshooting-ssh-permission-denied-publickey/
  - /enterprise/admin/2.15/articles/troubleshooting-ssh-permission-denied-publickey/
  - /enterprise/admin/installation/accessing-the-administrative-shell-ssh
  - /enterprise/admin/configuration/accessing-the-administrative-shell-ssh
  - /admin/configuration/accessing-the-administrative-shell-ssh
intro: 'El acceso al SSH te permite ejecutar las utilidades de la línea de comando del {% data variables.product.prodname_ghe_server %} y es útil para la solución de problemas, para ejecutar copias de seguridad y para configurar la replicación.'
versions:
  enterprise-server: '*'
topics:
  - Enterprise
  - Fundamentals
  - SSH
---
### Acerca del acceso al shell administrativo

Si tienes acceso SSH al shell administrativo, puedes ejecutar las utilidades de la línea de comando del {% data variables.product.prodname_ghe_server %}. El acceso SSH también es útil para la solución de problemas, para ejecutar copias de seguridad y para configurar la replicación. El acceso SSH administrativo se administra por separado desde el acceso SSH de Git y es accesible solo desde el puerto 122.

### Habilitar el acceso al shell administrativo por medio de SSH

Para habilitar el acceso SSH administrativo, debes agregar tu llave pública SSH a tu lista de llaves autorizadas de la instancia.

{% tip %}

**Consejo:** Los cambios en las claves SSH entran en vigor de inmediato.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
3. En "SSH access" (Acceso SSH), pega tu clave en el cuadro de texto, luego haz clic en **Add key** (Agregar clave). ![Cuadro te texto y botón para agregar una clave SSH](/assets/images/enterprise/settings/add-authorized-ssh-key-admin-shell.png)
{% data reusables.enterprise_management_console.save-settings %}

### Conectarse con el shell administrativo por SSH

Después de que hayas agregado tu clave SSH a la lista, conéctate a la instancia por SSH como el usuario `admin` en el puerto 122.

```shell
$ ssh -p 122 admin@github.example.com
Último inicio de sesión: dom 9 de nov 07:53:29 2014 desde 169.254.1.1
admin@github-example-com:~$ █
```

#### Solucionar problemas de conexión al SSH

Si te encuentras con el error `Permiso denegado (publickey)` cuando intentas conectarte a {% data variables.product.product_location_enterprise %} por medio de SSH, confirma que te estés conectando por el puerto 122. Puede que debas especificar de manera explícita qué clave SSH privada utilizar.

Para especificar una clave SSH utilizando la línea de comando, ejecuta `ssh` con el argumento `-i`.

```shell
ssh -i /path/to/ghe_private_key -p 122 admin@<em>hostname</em>
```

También puedes especificar una clave SSH privada utilizando el archivo de configuración de SSH (`~/.ssh/config`).

```shell
Host <em>hostname</em>
  IdentityFile /path/to/ghe_private_key
  Usuario Admin
  Puerto 122
```

### Acceder al shell administrativo utilizando la consola local

En una situación de emergencia, por ejemplo, si el SSH no está disponible, puedes acceder al shell administrativo de manera local. Inicia sesión como usuario `admin` y utiliza la contraseña establecida durante la configuración inicial de {% data variables.product.prodname_ghe_server %}.

### Limitaciones de acceso al shell administrativo

El acceso al shell administrativo se permite solo para la solución de problemas y para realizar procedimientos de operaciones documentadas. Si modificas archivos del sistema y de la aplicación, ejecutas programas o instalas paquetes de software incompatibles se puede invalidar tu contrato de asistencia. Contáctate con {% data variables.contact.contact_ent_support %} si tienes alguna pregunta acerca de las actividades que permite tu contrato de asistencia.
