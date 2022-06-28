---
title: Consola de administración
intro: 'La API de la Consola de Administración te ayuda a administrar tu instalación de {% data variables.product.product_name %}.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% tip %}

Debes configurar el número de puerto explícitamente cuando haces llamadas de la API hacia la Consola de Administración. Si habilitaste TLS en tu empresa, el número de puerto es `8443`; de lo contrario, el número de puerto es `8080`.

Si no quieres proporcionar un número de puerto, necesitarás configurar tu herramienta para seguir automáticamente las redirecciones.

Podría que también necesites agregar el [marcador `-k`](http://curl.haxx.se/docs/manpage.html#-k) cuando utilices `curl`, ya que {% data variables.product.product_name %} utiliza un certificado auto-firmado antes de que [agregues tu propio certificado TLS](/enterprise/admin/guides/installation/configuring-tls/).

{% endtip %}

### Autenticación

Necesitas pasar tu [Contraseña de la Consola de Administración](/enterprise/admin/articles/accessing-the-management-console/) como un token de autenticación para cada terminal de la API de ésta, con excepción de [`/setup/api/start`](#create-a-github-enterprise-server-license).

Utiliza el parámetro de `api_key` para enviar este token con cada solicitud. Por ejemplo:

```shell
$ curl -L 'https://<em>hostname</em>:<em>admin_port</em>/setup/api?api_key=<em>your-amazing-password</em>'
```

También puedes utilizar la autenticación HTTP estándar para enviar este token. Por ejemplo:

```shell
$ curl -L -u "api_key:<em>your-amazing-password</em>" 'https://<em>hostname</em>:<em>admin_port</em>/setup/api'
```
