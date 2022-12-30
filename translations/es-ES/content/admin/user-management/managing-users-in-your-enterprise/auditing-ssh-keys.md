---
title: Auditar claves SSH
intro: Los administradores del sitio pueden iniciar una auditoría en todas las instancias de las claves SSH.
redirect_from:
  - /enterprise/admin/articles/auditing-ssh-keys
  - /enterprise/admin/user-management/auditing-ssh-keys
  - /admin/user-management/auditing-ssh-keys
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Security
  - SSH
ms.openlocfilehash: 6ffcbdc698b6eb3a4736fdb2b4713e2871dcaac2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147508436'
---
Una vez iniciada, la auditoría desactiva todas las claves SSH existentes y obliga a los usuarios a aprobarlas o rechazarlas antes de que sea posible clonarlas, extraerlas o subirlas a cualquier repositorio. Una auditoría es útil cuando un empleado o contratista se va de la empresa y necesitas asegurarte de que todas las claves estén verificadas.

## Iniciar una auditoría

Puedes iniciar una auditoría de claves SSH desde la pestaña "Todos los usuarios" del tablero de administrador del sitio:

![Iniciar una auditoría de clave pública](/assets/images/enterprise/security/Enterprise-Start-Key-Audit.png)

Una vez que haces clic en el botón "Iniciar auditoría de clave pública", serás redirigido a la pantalla de confirmación que explica lo que sucederá a continuación:

![Confirmación de la auditoría](/assets/images/enterprise/security/Enterprise-Begin-Audit.png)

Una vez que haces clic en el botón "Comenzar auditoría", todas las claves SSH son invalidadas y se necesitará aprobación. Verás una notificación que indica que la auditoría ha comenzado.

## Qué ven los usuarios

Si un usuario intenta realizar cualquier operación Git a través de SSH, fallará y se indicará el siguiente mensaje:

```shell
ERROR: Hi <em>username</em>. We're doing an SSH key audit.
Please visit http(s)://<em>hostname</em>/settings/ssh/audit/2
to approve this key so we know it's safe.
Fingerprint: ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
fatal: The remote end hung up unexpectedly
```

Cuando el usuario sigue el enlace, se le solicita aprobar las claves en su cuenta:

![Auditoría de claves](/assets/images/enterprise/security/Enterprise-Audit-SSH-Keys.jpg)

Una vez que se aprueban o se rechazan sus claves, podrá interactuar con los repositorios como siempre.

## Agregar una clave SSH

{% ifversion ghes %}

Cuando un nuevo usuario agrega una clave SSH a una cuenta, para confirmar el acceso del usuario, {% data variables.product.product_name %} solicitará la autenticación. Para obtener más información, consulta «[modo sudo](/authentication/keeping-your-account-and-data-secure/sudo-mode)».

{% endif %}

Cuando un usuario agrega una clave, recibirá un correo electrónico de notificación que se verá como esto:

    The following SSH key was added to your account:

    [title]
    ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91

    If you believe this key was added in error, you can remove the key and disable access at the following location:

    http(s)://HOSTNAME/settings/ssh
