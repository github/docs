---
title: Instalar Git Large File Storage
intro: 'Para utilizar {% data variables.large_files.product_name_short %}, tendrás que descargar e instalar un programa nuevo, además de Git.'
redirect_from:
  - /articles/installing-large-file-storage
  - /articles/installing-git-large-file-storage
  - /github/managing-large-files/installing-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/installing-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Install Git LFS
ms.openlocfilehash: b7078a3147ed610ff67bdc4b0bdce93158279a94
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136501'
---
{% mac %}

1. Vaya a [git-lfs.github.com](https://git-lfs.github.com) y haga clic en **Download** (Descargar). También puedes instalar {% data variables.large_files.product_name_short %} utilizando un administrador de paquete:
    - Para usar [Homebrew](http://brew.sh/), ejecute `brew install git-lfs`.
    - Para usar [MacPorts](https://www.macports.org/), ejecute `port install git-lfs`.

 Si instalas {% data variables.large_files.product_name_short %} con Homebrew o MacPorts, dirígete al paso seis.

2. En tu computadora, ubica y descomprime el archivo descargado.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Cambia el directorio de trabajo actual por la carpeta en la que descargaste y descomprimiste el archivo.
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **Nota:** La ruta de archivo que use después de `cd` depende de su sistema operativo, de la versión de Git LFS que descargó y de dónde guardó la descarga {% data variables.large_files.product_name_short %}.

 {% endnote %}
4. Para instalar el archivo, ejecuta este comando:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **Nota:** Puede que tenga que usar `sudo ./install.sh` para instalar el archivo.

 {% endnote %}
5. Comprueba que la instalación haya sido exitosa:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Si no ve un mensaje que indica que `git {% data variables.large_files.command_name %} install` se ha ejecutado correctamente, póngase en contacto con {% data variables.contact.contact_support %}. Asegúrate de incluir el nombre de tu sistema operativo.

{% endmac %}

{% windows %}

1. Vaya a [git-lfs.github.com](https://git-lfs.github.com) y haga clic en **Download** (Descargar).

  {% tip %}

  **Consejo:** Para obtener más información sobre las formas alternativas de instalar {% data variables.large_files.product_name_short %} para Windows, consulte esta [guía de introducción](https://github.com/github/git-lfs#getting-started).

  {% endtip %}
2. En tu computadora, ubica el archivo descargado.
3. Haga doble clic en el archivo llamado *git-lfs-windows-1.X.X.exe*, donde 1.X.X se reemplazará con la versión LFS de Git que descargó. Cuando abras este archivo, Windows ejecutará un asistente de configuración para instalar {% data variables.large_files.product_name_short %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
5. Comprueba que la instalación haya sido exitosa:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Si no ve un mensaje que indica que `git {% data variables.large_files.command_name %} install` se ha ejecutado correctamente, póngase en contacto con {% data variables.contact.contact_support %}. Asegúrate de incluir el nombre de tu sistema operativo.

{% endwindows %}

{% linux %}

1. Vaya a [git-lfs.github.com](https://git-lfs.github.com) y haga clic en **Download** (Descargar).

  {% tip %}

  **Consejo:** Para obtener más información sobre las formas alternativas de instalar {% data variables.large_files.product_name_short %} para Linux, consulte esta [guía de introducción](https://github.com/github/git-lfs#getting-started).

  {% endtip %}
2. En tu computadora, ubica y descomprime el archivo descargado.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Cambia el directorio de trabajo actual por la carpeta en la que descargaste y descomprimiste el archivo.
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **Nota:** La ruta de archivo que use después de `cd` depende de su sistema operativo, de la versión de Git LFS que descargó y de dónde guardó la descarga {% data variables.large_files.product_name_short %}.

 {% endnote %}
4. Para instalar el archivo, ejecuta este comando:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **Nota:** Puede que tenga que usar `sudo ./install.sh` para instalar el archivo.

 {% endnote %}
5. Comprueba que la instalación haya sido exitosa:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Si no ve un mensaje que indica que `git {% data variables.large_files.command_name %} install` se ha ejecutado correctamente, póngase en contacto con {% data variables.contact.contact_support %}. Asegúrate de incluir el nombre de tu sistema operativo.

{% endlinux %}

## Información adicional

- "[Configurar {% data variables.large_files.product_name_long %}](/articles/configuring-git-large-file-storage)"
