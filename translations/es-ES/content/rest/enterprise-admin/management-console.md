---
title: Consola de administración
intro: 'La API de la Consola de Administración te ayuda a administrar tu instalación de {% data variables.product.product_name %}.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: da38513a04525b858e041188eec6f691db9be1d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065542'
---
{% tip %}

Debes configurar el número de puerto explícitamente cuando haces llamadas de la API hacia la Consola de Administración. Si TLS está habilitado en la empresa, el número de puerto es `8443`; de lo contrario, es `8080`.

Si no quieres proporcionar un número de puerto, necesitarás configurar tu herramienta para seguir automáticamente las redirecciones.

Es posible que también tenga que agregar la [marca `-k`](http://curl.haxx.se/docs/manpage.html#-k) al usar `curl`, ya que {% data variables.product.product_name %} usa un certificado autofirmado antes de que [agregue un certificado TLS propio ](/enterprise/admin/guides/installation/configuring-tls/).

{% endtip %}

### Authentication

Debe pasar la [contraseña de la Consola de administración](/enterprise/admin/articles/accessing-the-management-console/) como un token de autenticación a todos los puntos de conexión de la API de la consola de administración, excepto [`/setup/api/start`](#create-a-github-enterprise-server-license).

Usa el parámetro `api_key` para enviar este token con cada solicitud. Por ejemplo:

```shell
$ curl -L 'https://<em>hostname</em>:<em>admin_port</em>/setup/api?api_key=<em>your-amazing-password</em>'
```

También puedes utilizar la autenticación HTTP estándar para enviar este token. Por ejemplo:

```shell
$ curl -L -u "api_key:<em>your-amazing-password</em>" 'https://<em>hostname</em>:<em>admin_port</em>/setup/api'
```
