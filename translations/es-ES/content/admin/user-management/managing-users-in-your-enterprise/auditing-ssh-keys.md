---
title: Auditar claves SSH
intro: Los administradores del sitio pueden iniciar una auditoría en todas las instancias de las claves SSH.
redirect_from:
  - /enterprise/admin/articles/auditing-ssh-keys/
  - /enterprise/admin/user-management/auditing-ssh-keys
  - /admin/user-management/auditing-ssh-keys
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Security
  - SSH
---

Una vez iniciada, la auditoría desactiva todas las claves SSH existentes y obliga a los usuarios a aprobarlas o rechazarlas antes de que sea posible clonarlas, extraerlas o subirlas a cualquier repositorio. Una auditoría es útil cuando un empleado o contratista se va de la empresa y necesitas asegurarte de que todas las claves estén verificadas.

### Iniciar una auditoría

Puedes iniciar una auditoría de claves SSH desde la pestaña "Todos los usuarios" del tablero de administrador del sitio:

![Iniciar una auditoría de clave pública](/assets/images/enterprise/security/Enterprise-Start-Key-Audit.png)

Una vez que haces clic en el botón "Iniciar auditoría de clave pública", serás redirigido a la pantalla de confirmación que explica lo que sucederá a continuación:

![Confirmación de la auditoría](/assets/images/enterprise/security/Enterprise-Begin-Audit.png)

Una vez que haces clic en el botón "Comenzar auditoría", todas las claves SSH son invalidadas y se necesitará aprobación. Verás una notificación que indica que la auditoría ha comenzado.

### Lo que los usuarios ven

Si un usuario intenta realizar cualquier operación Git a través de SSH, fallará y se indicará el siguiente mensaje:

```shell
ERROR: Hola <em>nombre de usuario</em>. Estamos realizando una auditoría de clave SSH.
Visita http(s)://<em>hostname</em>/settings/ssh/audit/2
para aprobar esta clave y saber que es segura.
Huella digital: ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
fatal: El final remoto ha colgado inesperadamente.
```

Cuando el usuario sigue el enlace, se le solicita aprobar las claves en su cuenta:

![Auditoría de claves](/assets/images/enterprise/security/Enterprise-Audit-SSH-Keys.jpg)

Una vez que se aprueban o se rechazan sus claves, podrá interactuar con los repositorios como siempre.

### Agregar una clave SSH

Cuando los usuarios nuevos agreguen una clave SSH, se les solicitará su contraseña:

![Confirmación de contraseña](/assets/images/help/settings/sudo_mode_popup.png)

Cuando un usuario agrega una clave, recibirá un correo electrónico de notificación que se verá como esto:

    Se agregó la siguiente clave SSH a tu cuenta:
    
    [title]
    ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
    
    Si crees que esta clave se agregó por error, puedes eliminar la clave y desactivar el acceso a la siguiente ubicación:
    
    http(s)://HOSTNAME/settings/ssh
