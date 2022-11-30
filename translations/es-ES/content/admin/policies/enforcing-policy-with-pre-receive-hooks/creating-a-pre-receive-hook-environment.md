---
title: Crear un entorno de gancho de pre-recepción
intro: 'Para ejecutar los ganchos de pre-recepción, usa el entorno de pre-recepción predeterminado o crea un entorno personalizado.'
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-environment
  - /enterprise/admin/policies/creating-a-pre-receive-hook-environment
  - /admin/policies/creating-a-pre-receive-hook-environment
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Pre-receive hook environments
ms.openlocfilehash: 2c2a31a4092b475170449ba138d6f0798424206b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145116369'
---
Un entorno previo a la recepción para {% data variables.product.prodname_ghe_server %} es un entorno [`chroot`](https://en.wikipedia.org/wiki/Chroot) de Linux. Dado que los ganchos de pre-recepción se ejecutan en todos los eventos de extracción, deberían ser rápidos y livianos. Normalmente, el entorno necesario para tales verificaciones será mínimo.

{% data variables.product.prodname_ghe_server %} proporciona un entorno predeterminado que incluye estos paquetes: `awk`, `bash`, `coreutils`, `curl`, `find`, `gnupg`, `grep`, `jq` y `sed`.

Si su entorno no cumple con uno de los requisitos específicos, como compatibilidad con un idioma determinado, puede crear y cargar su propio entorno `chroot` en Linux de 64 bits.

## Crear un entorno de gancho de pre-recepción mediante Docker

Puedes usar una herramienta de administración de contenedores de Linux para crear un entorno de gancho de pre-recepción. En este ejemplo se usa [Alpine Linux](http://www.alpinelinux.org/) y [Docker](https://www.docker.com/).

{% data reusables.linux.ensure-docker %}
2. Cree el archivo `Dockerfile.alpine-3.3` que contiene esta información:

   ```
   FROM gliderlabs/alpine:3.3
   RUN apk add --no-cache git bash
   ```
3. Desde el directorio de trabajo que contiene `Dockerfile.alpine-3.3`, compile una imagen:

   ```shell
   $ docker build -f Dockerfile.alpine-3.3 -t pre-receive.alpine-3.3 .
   > Sending build context to Docker daemon 12.29 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git bash
   >  ---> Using cache
   >  ---> 0250ab3be9c5
   > Successfully built 0250ab3be9c5
   ```
4. Crea un contenedor:

   ```shell
   $ docker create --name pre-receive.alpine-3.3 pre-receive.alpine-3.3 /bin/true
   ```
5. Exporte el contenedor Docker a un archivo `tar` comprimido en `gzip`:

   ```shell
   $ docker export pre-receive.alpine-3.3 | gzip > alpine-3.3.tar.gz
   ```

   Este archivo `alpine-3.3.tar.gz` está listo para cargarse al dispositivo {% data variables.product.prodname_ghe_server %}.

## Crear un entorno de gancho de pre-recepción mediante chroot

1. Cree un entorno `chroot` de Linux.
2. Cree un archivo `tar` comprimido en `gzip` del directorio `chroot`.
   ```shell
   $ cd /path/to/chroot
   $ tar -czf /path/to/pre-receive-environment.tar.gz .
   ```

   {% note %}

   **Notas:**
   - No incluya las rutas de acceso iniciales del directorio de los archivos en el archivo tar, tales como `/path/to/chroot`.
   - `/bin/sh` debe existir y ser ejecutable como punto de entrada al entorno chroot.
   - A diferencia de los chroots tradicionales, el entorno de chroot para enlaces previos a la recepción no requiere el directorio `dev`.

   {% endnote %}

Para obtener más información sobre cómo crear un entorno chroot, vea "[Chroot](https://wiki.debian.org/chroot)" en la *Wiki de Debian*, "[BasicChroot](https://help.ubuntu.com/community/BasicChroot)" de *Community Help Wiki de Ubuntu* o "[Instalar Alpine Linux en un entorno chroot](http://wiki.alpinelinux.org/wiki/Installing_Alpine_Linux_in_a_chroot)" en la *Wiki de Alpine Linux*.

## Cargar un entorno de pre-recepción en {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Haga clic en **Manage environments** (Administrar entornos).
![Administrar entornos](/assets/images/enterprise/site-admin-settings/manage-pre-receive-environments.png)
6. Haga clic en **Add environment** (Agregar entorno).
![Agregar entorno](/assets/images/enterprise/site-admin-settings/add-pre-receive-environment.png)
7. Escriba el nombre deseado en el campo **Environment name** (Nombre del entorno).
![Nombre del entorno](/assets/images/enterprise/site-admin-settings/pre-receive-environment-name.png)
8. Escriba la dirección URL del archivo `*.tar.gz` que contiene el entorno.
![Cargar entorno desde una dirección URL](/assets/images/enterprise/site-admin-settings/upload-environment-from-url.png)
9. Haga clic en **Add environment** (Agregar entorno).
![Botón para agregar entorno](/assets/images/enterprise/site-admin-settings/add-environment-button.png)

## Cargar un entorno de pre-recepción mediante el shell administrativo
1. Cargue un archivo `*.tar.gz` legible que contenga su entorno a un host web y copie la URL o transfiera el archivo al dispositivo {% data variables.product.prodname_ghe_server %} mediante `scp`. Al usar `scp`, es posible que tenga que ajustar los permisos del archivo `*.tar.gz` para que sea legible en todo el mundo.
1.  Conecta con el shell administrativo.
2.  Usa el comando `ghe-hook-env-create` y escriba el nombre que quiera para el entorno como primer argumento, y la ruta de acceso local completa o la dirección URL de un archivo `*.tar.gz` que contenga su entorno como segundo argumento.

   ```shell
   admin@ghe-host:~$ ghe-hook-env-create AlpineTestEnv /home/admin/alpine-3.3.tar.gz
   > Pre-receive hook environment 'AlpineTestEnv' (2) has been created.
   ```
