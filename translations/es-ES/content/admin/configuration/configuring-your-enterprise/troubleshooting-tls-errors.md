---
title: Solución de errores de TLS
intro: 'Si surgen problemas de TLS en su dispositivo, puedes tomar medidas para resolverlos.'
redirect_from:
  - /enterprise/admin/articles/troubleshooting-ssl-errors
  - /enterprise/admin/categories/dns-ssl-and-subdomain-configuration
  - /enterprise/admin/installation/troubleshooting-ssl-errors
  - /enterprise/admin/configuration/troubleshooting-ssl-errors
  - /admin/configuration/troubleshooting-ssl-errors
  - /admin/configuration/configuring-your-enterprise/troubleshooting-ssl-errors
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Errors
  - Infrastructure
  - Networking
  - Security
  - Troubleshooting
shortTitle: Troubleshoot TLS errors
ms.openlocfilehash: 855737f89f0380333b1f37c26d512c889f2ee786
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881255'
---
## Eliminar la contraseña de un archivo clave

Si tienes una máquina linux con OpenSSL instalado, puedes eliminar tu contraseña.

1. Renombrar tu archivo clave original.
  ```shell
  $ mv yourdomain.key yourdomain.key.orig
  ```
2. Generar una nueva clave sin una contraseña.
  ```shell
  $ openssl rsa -in yourdomain.key.orig -out yourdomain.key
  ```

Se te pedirá la contraseña de la clave cuando ejecutes este comando.

Para más información sobre OpenSSL, vea la [documentación de OpenSSL](https://www.openssl.org/docs/).

## Conversión del certificado TSL o de la clave a un formato PEM

Si tiene instalado OpenSSL, puede convertir la clave a formato PEM mediante el comando `openssl`. Por ejemplo, puedes convertir una clave de formato DER a formato PEM.

```shell
$ openssl rsa -in yourdomain.der -inform DER -out yourdomain.key -outform PEM
```

De lo contrario, puedes utilizar la herramienta SSL Converter para convertir tu certificado a formato PEM. Para más información, vea la [documentación de la herramienta SSL Converter](https://www.sslshopper.com/ssl-converter.html).

## Instalación sin respuesta después de cargar una clave

Si {% data variables.product.product_location %} no responde después de cargar una clave TLS, [ponte en contacto con el equipo de soporte de {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/support) con detalles específicos, incluida una copia de tu certificado TLS. Asegúrate de que la clave privada **no está** incluida. 

## Errores de validez de certificado

Los clientes como navegadores web y líneas de comando Git mostrarán un mensaje de error si no pueden verificar la validez de un certificado TLS. Esto sucede con frecuencia con los certificados autofirmados y los certificados de "raíz encadenada" emitidos por un certificado raíz intermedio que no es reconocido por el cliente.

Si estás usando un certificado firmado por una autoridad de certificación (CA), el archivo del certificado que cargaste a {% data variables.product.prodname_ghe_server %} debe incluir una cadena de certificado con ese certificado raíz de CA. Para crear dicho archivo, concatena tu cadena de certificado entera (o "paquete de certificado") al final de tu certificado, garantizando que el certificado principal con tu nombre del host aparezca primero. En la mayoría de los sistemas puedes hacer esto con un comando similar a:

```shell
$ cat yourdomain.com.crt bundle-certificates.crt > yourdomain.combined.crt
```

Deberías poder descargar un paquete de certificado (por ejemplo, `bundle-certificates.crt`) desde el proveedor de TLS o la autoridad de certificación.

## Instalar certificados raíz de autoridad de certificación (CA) autofirmados o que no son de confianza

Si tu aparato {% data variables.product.prodname_ghe_server %} interactúa con otras máquinas en tu red que utilizan un certificado autofirmado o que no es de confianza, deberás importar el certificado raíz de la CA firmante en el almacenamiento de certificado de todo el sistema para poder acceder a estos sistemas por HTTPS.

1. Obtén el certificado raíz de la CA de tu autoridad de certificación local y asegúrate que esté en formato PEM.
2. Copia el archivo a tu aparato {% data variables.product.prodname_ghe_server %} por SSH como el usuario "administrador" en el puerto 122.
  ```shell
  $ scp -P 122 rootCA.crt admin@HOSTNAME:/home/admin
  ```
3. Conecta a la shell administrativa {% data variables.product.prodname_ghe_server %} por SSH como el usuario "administrador" en el puerto 122.
  ```shell
  $ ssh -p 122 admin@HOSTNAME
  ```
4. Importa el certificado al almacenamiento de certificado de todo el sistema.
  ```shell
  $ ghe-ssl-ca-certificate-install -c rootCA.crt
  ```

## Actualización de un certificado TLS

Puedes generar un certificado autofirmado nuevo o actualizar un certificado TLS existente para {% data variables.product.product_location %} con la utilidad de línea de comandos `ghe-ssl-certificate-setup`. Para más información, vea "[Utilidades de línea de comandos](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-setup)".
