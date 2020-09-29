---
title: Crear un entorno de gancho de pre-recepción
intro: 'Para ejecutar los ganchos de pre-recepción, usa el entorno de pre-recepción predeterminado o crea un entorno personalizado.'
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-environment
versions:
  enterprise-server: '*'
---

Un entorno de pre-recepción para el {% data variables.product.prodname_ghe_server %} es un entorno Linux [`chroot`](https://en.wikipedia.org/wiki/Chroot). Dado que los ganchos de pre-recepción se ejecutan en todos los eventos de extracción, deberían ser rápidos y livianos. Normalmente, el entorno necesario para tales verificaciones será mínimo.

El {% data variables.product.prodname_ghe_server %} brinda un entorno predeterminado que incluye estos paquetes: `awk`,  `bash`, `coreutils`, `curl`, `find`, `gnupg`, `grep`, `jq`, `sed`.

Si tu entorno no cumple con uno de los requisitos específicos, como respaldo para un idioma en particular, puedes crear y cargar tu propio entorno `chroot` en Linux de 64 bits.

### Crear un entorno de gancho de pre-recepción mediante Docker

Puedes usar una herramienta de administración de contenedores de Linux para crear un entorno de gancho de pre-recepción. Este ejemplo usa [Alpine Linux](http://www.alpinelinux.org/) y [Docker](https://www.docker.com/).

{% data reusables.linux.ensure-docker %}
2. Crea el archivo `Dockerfile.alpine-3.3` que contiene esta información:

    ```
    FROM gliderlabs/alpine:3.3
    RUN apk add --no-cache git bash
    ```
3. Desde el directorio de trabajo que contiene `Dockerfile.dev`, crea una imagen:

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
5. Exporta el contenedor Docker a un archivo `tar` comprimido como `gzip`:

   ```shell
   $ docker export pre-receive.alpine-3.3 | gzip > alpine-3.3.tar.gz
  ```

  Este archivo `alpine-3.3.tar.gz` está listo para subirse al aparato del {% data variables.product.prodname_ghe_server %}.

### Crear un entorno de gancho de pre-recepción mediante chroot

1. Crea un entorno `chroot` en Linux.
2. Crea un archivo `tar` comprimido como `gzip` del directorio `chroot`.
  ```shell
  $ cd /path/to/chroot
  $ tar -czf /path/to/pre-receive-environment.tar.gz .
   ```

  {% note %}

    **Notas:**
    - No incluyas las rutas iniciales del directorio en los archivos dentro del tar, tales como `/path/to/chroot`.
    - La ruta `/bin/sh` debe existir y ser ejecutable como punto de entrada al ambiente chroot.
    - A diferencia de los chroots tradicionales, el ambiente de chroot para ganchos de pre-recepción no requiere el directorio `dev`.

  {% endnote %}

Para obtener más información acerca de la creación de un entorno chroot, consulta "[Chroot](https://wiki.debian.org/chroot)" desde *Debian Wiki*, "[BasicChroot](https://help.ubuntu.com/community/BasicChroot)" desde *Ubuntu Community Help Wiki* o "[Instalar Alpine Linux en un chroot](http://wiki.alpinelinux.org/wiki/Installing_Alpine_Linux_in_a_chroot)" desde *Alpine Linux Wiki*.

### Cargar un entorno de pre-recepción en el {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Haz clic en **Manage environments** (Administrar entornos). ![Administrar entornos](/assets/images/enterprise/site-admin-settings/manage-pre-receive-environments.png)
6. Haz clic en **Add environment** (Agregar entorno). ![Agregar entorno](/assets/images/enterprise/site-admin-settings/add-pre-receive-environment.png)
7. Escribe el nombre que desees en el campo **Environment name** (Nombre del entorno). ![Nombre del entorno](/assets/images/enterprise/site-admin-settings/pre-receive-environment-name.png)
8. Escribe la URL del archivo `*.tar.gz` que contiene tu entorno. ![Cargar un entorno desde una URL](/assets/images/enterprise/site-admin-settings/upload-environment-from-url.png)
9. Haz clic en **Add environment** (Agregar entorno). ![Agregar el botón de entorno](/assets/images/enterprise/site-admin-settings/add-environment-button.png)

### Cargar un entorno de pre-recepción mediante el shell administrativo
1. Carga un archivo `*.tar.gz` legible que contenga tu entorno a un host web y copia la URL o transfiere el archivo al aparato del {% data variables.product.prodname_ghe_server %} mediante `scp`. Al usar `scp`, es posible que necesites ajustar los permisos del archivo `*.tar.gz` para que todos puedan leerlo.
1.  Conecta con el shell administrativo.
2.  Usa el comando `ghe-hook-env-create` y escribe el nombre que desees para el entorno como primer argumento y la ruta local completa o la dirección URL de un archivo `*.tar.gz` que contenga tu entorno como segundo argumento.

   ```shell
   admin@ghe-host:~$ ghe-hook-env-create AlpineTestEnv /home/admin/alpine-3.3.tar.gz
   > Pre-receive hook environment 'AlpineTestEnv' (2) has been created.
  ```
