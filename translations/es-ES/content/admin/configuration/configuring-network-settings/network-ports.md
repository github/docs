---
title: Puertos de red
redirect_from:
  - /enterprise/admin/articles/configuring-firewalls/
  - /enterprise/admin/articles/firewall/
  - /enterprise/admin/guides/installation/network-configuration/
  - /enterprise/admin/guides/installation/network-ports-to-open/
  - /enterprise/admin/installation/network-ports
  - /enterprise/admin/configuration/network-ports
  - /admin/configuration/network-ports
intro: 'Abre los puertos de red de forma selectiva en base a los servicios de red que necesitas exponer a los administradores, usuarios finales y apoyo de correo electrónico.'
versions:
  enterprise-server: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Networking
  - Security
---

### Puertos administrativos

Se requieren algunos puertos administrativos para configurar {% data variables.product.product_location %} y ejecutar determinadas funciones. No se requieren puertos administrativos para el uso de la aplicación básica por parte de los usuarios finales.

| Port (Puerto) | Servicio | Descripción                                                                                                                                                                                                                                                                          |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 8443          | HTTPS    | {% data variables.enterprise.management_console %} segura basada en la web. Requerida para la instalación y la configuración básicas.                                                                                                                                                |
| 8080          | HTTP     | {% data variables.enterprise.management_console %} basada en la web de texto simple. No se requiere excepto que el SSL esté inhabilitado de forma manual.                                                                                                                            |
| 122           | SSH      | Acceso shell para {% data variables.product.product_location %}. Se requiere para abrir las conexiones entrantes de todos los otros nodos en la configuración de alta disponibilidad. El puerto SSH predeterminado (22) está destinado al tráfico de red de la aplicación SSH y Git. |
| 1194/UDP      | VPN      | Túnel de red de replicación segura en la configuración de alta disponibilidad. Se requiere que esté abierto para todos los otros nodos en la configuración.                                                                                                                          |
| 123/UDP       | NTP      | Se requiere para operar el protocolo de tiempo.                                                                                                                                                                                                                                      |
| 161/UDP       | SNMP     | Se requiere para operar el protocolo de revisión de red.                                                                                                                                                                                                                             |

### Puertos de la aplicación para usuarios finales

Los puertos de la aplicación permiten que los usuarios finales accedan a Git y a las aplicaciones web.

| Port (Puerto) | Servicio | Descripción                                                                                                                                                                                            |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 443           | HTTPS    | Acceso a la aplicación web y a Git por HTTPS.                                                                                                                                                          |
| 80            | HTTP     | Acceso a la aplicación web. Todas las solicitudes se redireccionan al puerto HTTPS cuando se habilita SSL.                                                                                             |
| 22            | SSH      | Acceso a Git por SSH. Admite las operaciones clonar, extraer y subir a los repositorios privados y públicos.                                                                                           |
| 9418          | Git      | El puerto de protocolo Git admite las operaciones clonar y extraer a los repositorios públicos con comunicación de red desencriptada. {% data reusables.enterprise_installation.when-9418-necessary %}

{% data reusables.enterprise_installation.terminating-tls %}

### Puertos de correo electrónico

Los puertos de correo electrónico deben ser accesibles directamente o por medio de la retransmisión del correo electrónico entrante para los usuarios finales.

| Port (Puerto) | Servicio | Descripción                                    |
| ------------- | -------- | ---------------------------------------------- |
| 25            | SMTP     | Soporte para SMTP con encriptación (STARTTLS). |
