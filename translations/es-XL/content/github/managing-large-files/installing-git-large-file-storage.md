---
title: Instalar Git Large File Storage
intro: 'Para utilizar {% data variables.large_files.product_name_short %}, tendrás que descargar e instalar un programa nuevo, además de Git.'
redirect_from:
  - /articles/installing-large-file-storage/
  - /articles/installing-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% mac %}

1. Navega hasta [git-lfs.github.com](https://git-lfs.github.com) y haz clic en **Download** (Descargar). También puedes instalar {% data variables.large_files.product_name_short %} utilizando un administrador de paquete:
    - Para utilizar [Homebrew](http://brew.sh/), ejecuta `brew install git-lfs`.
    - Para utilizar [MacPorts](https://www.macports.org/), ejecuta `port install git-lfs`.

 Si instalas {% data variables.large_files.product_name_short %} con Homebrew o MacPorts, dirígete al paso seis.

2. En tu computadora, ubica y descomprime el archivo descargado.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Cambia el directorio de trabajo actual por la carpeta en la que descargaste y descomprimiste el archivo.
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **Nota:** La ruta de archivo que utilices después de `cd` depende de tu sistema operativo, de la versión de Git LFS que descargaste y de dónde guardaste la descarga {% data variables.large_files.product_name_short %}.

 {% endnote %}
4. Para instalar el archivo, ejecuta este comando:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **Nota:** Puede que tengas que usar `sudo ./install.sh` para instalar el archivo.

 {% endnote %}
5. Verifica que la instalación haya sido exitosa:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Si no ves un mensaje que indique que `git {% data variables.large_files.command_name %} install` fue exitoso, contáctate con {% data variables.contact.contact_support %}. Asegúrate de incluir el nombre de tu sistema operativo.

{% endmac %}

{% windows %}

1. Navega hasta [git-lfs.github.com](https://git-lfs.github.com) y haz clic en **Download** (Descargar).

  {% tip %}

  **Sugerencia:** Para obtener más información acerca de otras formas de instalar {% data variables.large_files.product_name_short %} para Windows, consulta esta [Guía de introducción](https://github.com/github/git-lfs#getting-started).

  {% endtip %}
2. En tu computadora, ubica el archivo descargado.
3. Haz doble clic en el archivo llamado *git-lfs-windows-1.X.X.exe*, donde 1.X.X se reemplazará con la versión LFS de Git que descargaste. Cuando abras este archivo, Windows ejecutará un asistente de configuración para instalar {% data variables.large_files.product_name_short %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
5. Verifica que la instalación haya sido exitosa:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Si no ves un mensaje que indique que `git {% data variables.large_files.command_name %} install` fue exitoso, contáctate con {% data variables.contact.contact_support %}. Asegúrate de incluir el nombre de tu sistema operativo.

{% endwindows %}

{% linux %}

1. Navega hasta [git-lfs.github.com](https://git-lfs.github.com) y haz clic en **Download** (Descargar).

  {% tip %}

  **Sugerencia:** Para obtener más información acerca de otras formas de instalar {% data variables.large_files.product_name_short %} para Linux, consulta esta [Guía de introducción](https://github.com/github/git-lfs#getting-started).

  {% endtip %}
2. En tu computadora, ubica y descomprime el archivo descargado.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Cambia el directorio de trabajo actual por la carpeta en la que descargaste y descomprimiste el archivo.
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **Nota:** La ruta de archivo que utilices después de `cd` depende de tu sistema operativo, de la versión de Git LFS que descargaste y de dónde guardaste la descarga {% data variables.large_files.product_name_short %}.

 {% endnote %}
4. Para instalar el archivo, ejecuta este comando:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **Nota:** Puede que tengas que usar `sudo ./install.sh` para instalar el archivo.

 {% endnote %}
5. Verifica que la instalación haya sido exitosa:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Si no ves un mensaje que indique que `git {% data variables.large_files.command_name %} install` fue exitoso, contáctate con {% data variables.contact.contact_support %}. Asegúrate de incluir el nombre de tu sistema operativo.

{% endlinux %}

### Leer más

- "[Configurar {% data variables.large_files.product_name_long %}](/articles/configuring-git-large-file-storage)"
