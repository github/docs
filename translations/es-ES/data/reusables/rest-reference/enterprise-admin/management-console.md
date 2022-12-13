---
ms.openlocfilehash: 48d95b3d8467b8174746eac498580e2a94f75f5c
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 04/07/2022
ms.locfileid: "141522023"
---
## <a name="management-console"></a>Consola de administración

La API de la Consola de Administración te ayuda a administrar tu instalación de {% data variables.product.product_name %}.

{% tip %}

Debes configurar el número de puerto explícitamente cuando haces llamadas de la API hacia la Consola de Administración. Si TLS está habilitado en la empresa, el número de puerto es `8443`; de lo contrario, es `8080`.

Si no quieres proporcionar un número de puerto, necesitarás configurar tu herramienta para seguir automáticamente las redirecciones.

Es posible que también tenga que agregar la [marca `-k`](http://curl.haxx.se/docs/manpage.html#-k) al usar `curl`, ya que {% data variables.product.product_name %} usa un certificado autofirmado antes de que [agregue un certificado TLS propio ](/enterprise/admin/guides/installation/configuring-tls/).

{% endtip %}

### <a name="authentication"></a>Authentication

Debe pasar la [contraseña de la Consola de administración](/enterprise/admin/articles/accessing-the-management-console/) como un token de autenticación a todos los puntos de conexión de la API de la consola de administración, excepto [`/setup/api/start`](#create-a-github-enterprise-server-license).

Usa el parámetro `api_key` para enviar este token con cada solicitud. Por ejemplo:

```shell
$ curl -L 'https://<em>hostname</em>:<em>admin_port</em>/setup/api?api_key=<em>your-amazing-password</em>'
```

También puedes utilizar la autenticación HTTP estándar para enviar este token. Por ejemplo:

```shell
$ curl -L -u "api_key:<em>your-amazing-password</em>" 'https://<em>hostname</em>:<em>admin_port</em>/setup/api'
```