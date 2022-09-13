---
title: Configurar Git para manejar finales de línea
intro: 'Para evitar problemas en tus diferencias, puedes configurar Git para manejar correctamente los finales de línea.'
redirect_from:
  - /dealing-with-lineendings
  - /line-endings
  - /articles/dealing-with-line-endings
  - /articles/configuring-git-to-handle-line-endings
  - /github/using-git/configuring-git-to-handle-line-endings
  - /github/getting-started-with-github/configuring-git-to-handle-line-endings
  - /github/getting-started-with-github/getting-started-with-git/configuring-git-to-handle-line-endings
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Handle line endings
ms.openlocfilehash: 4aa89f244e45da6905d6d5348c84faf8d5e6418c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884209'
---
## Acerca de los finales de línea
Cada vez que presiona <kbd>Entrar</kbd> en el teclado, se inserta un carácter invisible denominado fin de línea. Esto se maneja de forma diferente en los diferentes sistemas operativos.

Cuando colaboras en proyectos con Git y {% data variables.product.product_name %}, Git podría producir resultados inesperados si, por ejemplo, estás trabajando en una máquina Windows y tu colaborador hizo cambios en macOS.

Puedes configurar Git para que maneje los fines de línea automáticamente y así puedas colaborar eficazmente con las personas que utilizan otros sistemas operativos.

## Parámetros globales para finales de línea

El comando `git config core.autocrlf` se usa para cambiar cómo controla Git los finales de línea. Toma un solo argumento.

{% mac %}

En macOS, simplemente pase `input` a la configuración. Por ejemplo:

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for macOS
```

{% endmac %}

{% windows %}

En Windows, simplemente pase `true` a la configuración. Por ejemplo:

```shell
$ git config --global core.autocrlf true
# Configure Git to ensure line endings in files you checkout are correct for Windows.
# For compatibility, line endings are converted to Unix style when you commit files.
```

{% endwindows %}

{% linux %}

En Linux, simplemente pase `input` a la configuración. Por ejemplo:

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for Linux
```

{% endlinux %}

## Parámetros por repositorio

Opcionalmente, puede configurar un archivo *.gitattributes* para administrar cómo lee Git los fines de línea en un repositorio concreto. Al confirmar este archivo en un repositorio, invalida el valor `core.autocrlf` de todos los colaboradores del repositorio. Esto garantiza un comportamiento consistente para todos los usuarios, sin importar su configuración y ambiente de Git.

El archivo *.gitattributes* se debe crear en la raíz del repositorio y confirmarse como cualquier otro archivo.

Un archivo *.gitattributes* es similar a una tabla con dos columnas:

* A la izquierda está el nombre del archivo que coincide con Git.
* A la derecha está la configuración de fin de línea que Git debería usar para esos archivos.

### Ejemplo

Este es un archivo *.gitattributes* de ejemplo. Puedes usarlo como plantilla para tus repositorios:

```
# Set the default behavior, in case people don't have core.autocrlf set.
* text=auto

# Explicitly declare text files you want to always be normalized and converted
# to native line endings on checkout.
*.c text
*.h text

# Declare files that will always have CRLF line endings on checkout.
*.sln text eol=crlf

# Denote all files that are truly binary and should not be modified.
*.png binary
*.jpg binary
```

Observará que los archivos se comparan (`*.c`, `*.sln`, `*.png`) separados por un espacio y, después, se les asigna un valor (`text`, `text eol=crlf`, `binary`). Revisaremos algunas configuraciones posibles a continuación.

- `text=auto` Git administrará los archivos de la manera que considere óptima. Esta es una buena opción predeterminada.

- `text eol=crlf` Git siempre convertirá los finales de línea a `CRLF` durante la restauración. Debe usar esto para los archivos que tienen que conservar los finales `CRLF`, incluso en OSX o Linux.

- `text eol=lf` Git siempre convertirá los finales de línea a `LF` durante la restauración. Deberías usar esto para los archivos que deben conservar los finales LF, incluso en Windows.

- `binary` Git comprenderá que los archivos especificados no son de texto y no debería intentar cambiarlos. El valor `binary` también es un alias para `-text -diff`.

## Actualizar un repositorio después de los finales de línea

Al establecer la opción `core.autocrlf` o confirmar un archivo *.gitattributes*, es posible que Git notifique cambios en archivos que no haya modificado. Git ha cambiado los fines de línea para que concuerden con tu nueva configuración.

Para garantizar que todos los fines de línea del repositorio coinciden con la nueva configuración, cree una copia de seguridad de los archivos con Git, borre todos los archivos del repositorio (menos los del directorio `.git`) y, después, restaure todos los archivos al mismo tiempo.

1. Guarda los archivos actuales en Git, de manera que nada de tu trabajo se pierda.
  ```shell
  $ git add . -u
  $ git commit -m "Saving files before refreshing line endings"
  ```
2. Agrega todos los archivos cambiados nuevamente y normaliza los finales de línea.
  ```shell
  $ git add --renormalize .
  ```
3. Muestra los archivos reescritos, normalizados.
  ```shell
  $ git status
  ```
4. Confirma los cambios en tu repositorio.
  ```shell
  $ git commit -m "Normalize all the line endings"
  ```

## Información adicional

- [Personalización de Git: Atributos de Git](https://git-scm.com/book/en/Customizing-Git-Git-Attributes) en el libro Pro Git
- [git-config](https://git-scm.com/docs/git-config) en las páginas man de Git
- [Introducción: Configuración inicial de Git](https://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup) en el libro Pro Git
- [Mind the End of Your Line](http://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/) (Cuidado con los finales de línea) de [Tim Clem](https://github.com/tclem)
