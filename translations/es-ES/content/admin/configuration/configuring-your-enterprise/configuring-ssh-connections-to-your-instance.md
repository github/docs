---
title: Configuración de conexiones SSH a la instancia
shortTitle: Configure SSH connections
intro: 'Puedes aumentar la seguridad de {% data variables.location.product_location %} si configuras los algoritmos SSH que los clientes pueden usar para establecer una conexión.'
permissions: 'Site administrators can configure SSH connections to a {% data variables.product.product_name %} instance.'
versions:
  ghes: '>= 3.6'
type: how_to
topics:
  - Authentication
  - Enterprise
  - Infrastructure
  - Networking
  - Security
  - SSH
ms.openlocfilehash: 9b2cc81a447018eef350e1c53857dd5a74a3099a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107545'
---
## Acerca de las conexiones SSH a la instancia

{% data reusables.enterprise.about-ssh-ports %}

Para dar cabida a los clientes SSH de tu entorno, puedes configurar los tipos de conexiones que {% data variables.location.product_location %} aceptará.

## Configuración de conexiones SSH con claves RSA

Cuando los usuarios realizan operaciones de Git en {% data variables.location.product_location %} mediante SSH a través del puerto 22, el cliente puede autenticarse con una clave RSA. El cliente puede firmar el intento mediante la función hash SHA-1. En este contexto, la función hash SHA-1 ya no es segura. Para obtener más información, consulta [SHA-1](https://en.wikipedia.org/wiki/SHA-1) en Wikipedia.

De forma predeterminada{% ifversion ghes < 3.7 %} en {% data variables.product.product_name %} 3.6 y versiones posteriores{% endif %}, se producirá un error en las conexiones SSH que cumplan **las dos** condiciones siguientes.

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

Puede ajustar la fecha límite. Si el usuario cargó la clave RSA antes de la fecha límite, el cliente puede seguir conectándose correctamente mediante SHA-1 siempre y cuando la clave siga siendo válida. Como alternativa, puedes rechazar todas las conexiones SSH autenticadas con una clave RSA si el cliente firma la conexión mediante la función hash SHA-1.

Independientemente de la configuración que elijas para la instancia, los clientes pueden seguir conectándose mediante cualquier clave RSA firmada con una función hash SHA-2.

Si usas una entidad de certificación SSH, se producirá un error en las conexiones si la fecha `valid_after` del certificado es posterior a la fecha límite. Para más información, vea "[Acerca de las entidades de certificación de SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)".

Para obtener más información, consulta [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server).

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Audita los registros de la instancia para las conexiones que usan algoritmos no seguros o funciones hash mediante la utilidad `ghe-find-insecure-git-operations`. Para más información, vea "[Utilidades de línea de comandos](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-find-insecure-git-operations)".
1. Para configurar una fecha límite después de la cual {% data variables.location.product_location %} denegará las conexiones de los clientes que usan una clave RSA cargada después de la fecha si la conexión está firmada con la función hash SHA-1, escribe el comando siguiente. Reemplaza _**RFC-3399-UTC-TIMESTAMP**_ por una marca de tiempo RFC 3399 UTC válida. Por ejemplo, el valor predeterminado, el 1 de agosto de 2022, se representará como `2022-08-01T00:00:00Z`. Para obtener más información, consulta [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) en el sitio web de IETF.

   <pre>
   $ ghe-config app.gitauth.rsa-sha1 RFC-3339-UTC-TIMESTAMP
   </pre>
1. Como alternativa, para deshabilitar completamente las conexiones SSH mediante claves RSA firmadas con la función hash SHA-1, escribe el siguiente comando.

   ```shell
   ghe-config app.gitauth.rsa-sha1 false
   ```
{% data reusables.enterprise.apply-configuration %}
