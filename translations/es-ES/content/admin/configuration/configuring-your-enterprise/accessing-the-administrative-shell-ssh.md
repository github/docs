---
title: Acceder al shell administrativo (SSH)
redirect_from:
  - /enterprise/admin/articles/ssh-access
  - /enterprise/admin/articles/adding-an-ssh-key-for-shell-access
  - /enterprise/admin/guides/installation/administrative-shell-ssh-access
  - /enterprise/admin/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.13/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.14/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.15/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/installation/accessing-the-administrative-shell-ssh
  - /enterprise/admin/configuration/accessing-the-administrative-shell-ssh
  - /admin/configuration/accessing-the-administrative-shell-ssh
intro: '{% data reusables.enterprise_site_admin_settings.about-ssh-access %}'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - SSH
shortTitle: Access the admin shell (SSH)
ms.openlocfilehash: 8d8b9cd71a436c0874355b1bdd53ba2e400660a0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120738'
---
## Acerca del acceso al shell administrativo

Si tienes acceso SSH al shell administrativo, puedes ejecutar las utilidades de la línea de comando del {% data variables.product.prodname_ghe_server %}. El acceso SSH también es útil para la solución de problemas, para ejecutar copias de seguridad y para configurar la replicación. El acceso SSH administrativo se administra por separado desde el acceso SSH de Git y es accesible solo desde el puerto 122.

## Habilitar el acceso al shell administrativo por medio de SSH

Para habilitar el acceso SSH administrativo, debes agregar tu llave pública SSH a tu lista de llaves autorizadas de la instancia.

{% tip %}

**Sugerencia:** Los cambios en las claves SSH autorizadas tienen efecto inmediato.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
3. En "SSH access", pegue la clave en el cuadro de texto y haga clic en **Add key**.
  ![Cuadro de texto y botón para agregar una clave SSH](/assets/images/enterprise/settings/add-authorized-ssh-key-admin-shell.png) {% data reusables.enterprise_management_console.save-settings %}

## Conectarse con el shell administrativo por SSH

Después de agregar la clave SSH a la lista, conéctese a la instancia mediante SSH como usuario de `admin` en el puerto 122.

```shell
$ ssh -p 122 admin@github.example.com
Last login: Sun Nov 9 07:53:29 2014 from 169.254.1.1
admin@github-example-com:~$ █
```

### Solucionar problemas de conexión al SSH

Si se encuentra el error `Permission denied (publickey)` al intentar conectarse a {% data variables.product.product_location %} mediante SSH, confirme que se está conectando a través del puerto 122. Puede que debas especificar de manera explícita qué clave SSH privada utilizar.

Para especificar una clave SSH privada mediante la línea de comandos, ejecute `ssh` con el argumento `-i`.

```shell
ssh -i /path/to/ghe_private_key -p 122 admin@<em>hostname</em>
```

También puede especificar una clave SSH privada mediante el archivo de configuración SSH (`~/.ssh/config`).

```shell
Host <em>hostname</em>
  IdentityFile /path/to/ghe_private_key
  User admin
  Port 122
```

## Acceder al shell administrativo utilizando la consola local

En una situación de emergencia, por ejemplo, si el SSH no está disponible, puedes acceder al shell administrativo de manera local. Inicie sesión como usuario de `admin` y utilice la contraseña establecida durante la configuración inicial de {% data variables.product.prodname_ghe_server %}.

## Limitaciones de acceso al shell administrativo

El acceso al shell administrativo se permite solo para la solución de problemas y para realizar procedimientos de operaciones documentadas. Si modificas archivos del sistema y de la aplicación, ejecutas programas o instalas paquetes de software incompatibles se puede invalidar tu contrato de asistencia. Contáctate con {% data variables.contact.contact_ent_support %} si tienes alguna pregunta acerca de las actividades que permite tu contrato de asistencia.
