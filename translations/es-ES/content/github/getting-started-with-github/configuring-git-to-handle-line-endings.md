---
title: Configurar Git para manejar finales de línea
intro: 'Para evitar problemas en tus diferencias, puedes configurar Git para manejar correctamente los finales de línea.'
redirect_from:
  - /dealing-with-lineendings/
  - /line-endings/
  - /articles/dealing-with-line-endings/
  - /articles/configuring-git-to-handle-line-endings
  - /github/using-git/configuring-git-to-handle-line-endings
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Cada vez que presionas <kbd>Enter</kbd> en tu teclado, insertas un caracter invisible denominado fin de línea. Esto se maneja de forma diferente en los diferentes sistemas operativos.

When you're collaborating on projects with Git and {% data variables.product.product_name %}, Git might produce unexpected results if, for example, you're working on a Windows machine, and your collaborator has made a change in macOS.

Puedes configurar Git para que maneje los fines de línea automáticamente y así puedas colaborar eficazmente con las personas que utilizan otros sistemas operativos.

### Parámetros globales para finales de línea

El comando `git config core.autocrlf` se usa para cambiar el modo en que Git maneja los finales de línea. Toma un solo argumento.

{% mac %}

On macOS, you simply pass `input` to the configuration. Por ejemplo:

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for macOS
```

{% endmac %}

{% windows %}

En Windows, simplemente escribes `true` en la configuración. Por ejemplo:

```shell
$ git config --global core.autocrlf true
# Configure Git to ensure line endings in files you checkout are correct for Windows.
# For compatibility, line endings are converted to Unix style when you commit files.
```

{% endwindows %}

{% linux %}

En Linux, simplemente escribes `input` en la configuración. Por ejemplo:

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for Linux
```

{% endlinux %}

### Parámetros por repositorio

Como ocpión, puedes configurar un archivo de tipo *.gitattributes* para administrar cómo Git lee los fines de línea en un repositorio específico. Cuando confirmas este archivo en un repositorio, éste invalida la configuración de `core.autocrlf` para todos los colaboradores del mismo. Esto garantiza un comportamiento consistente para todos los usuarios, sin importar su configuración y ambiente de Git.

El archivo *.gitattributes* debe crearse en la raíz del repositorio y confirmarse como cualquier otro archivo.

Un archivo *.gitattributes* se asemeja a una tabla con dos columnas:

* A la izquierda está el nombre del archivo que coincide con Git.
* A la derecha está la configuración de fin de línea que Git debería usar para esos archivos.

#### Ejemplo

Aquí hay un ejemplo de archivo *.gitattributes*. Puedes usarlo como plantilla para tus repositorios:

```
# Esteblece el comportamiento predeterminado, en caso de que las personas no tengan configurado core.autocrlf.
* text=auto

# Declara explícitamente los archivos de texto que siempre quieres que estén normalizados y convertidos
# a finales de línea nativos en el control.
*.c text
*.h text

# Declara los archivos que siempre tendrán los finales de línea CRLF en el control.
*.sln text eol=crlf

# Denota todos los archivos que son absolutamente binarios y no deberían modificarse.
*.png binary
*.jpg binary
```

Notarás que los archivos coinciden—`*.c`, `*.sln`, `*.png`—, separados con un espacio, y luego se les dará una configuración —`text`, `text eol=crlf`, `binary`. Revisaremos algunas configuraciones posibles a continuación.

- `text=auto` Git manejará los archivos en cualquier manera que crea sea mejor. Esta es una buena opción predeterminada.

- `text eol=crlf` Git siempre convertirá los fines de línea en `CRLF` a la salida. Deberías usar esto para los archivos que deben conservar los finales `CRLF`, incluso en OSX o Linux.

- `text eol=lf` Git siempre convertirá los finales de línea en `LF` a la salida. Deberías usar esto para los archivos que deben conservar los finales LF, incluso en Windows.

- `binary` Git entenderá que los archivos especificados no son de texto, y no deberá intentar cambiarlos. El parámetro `binario` también es un alias para `text -diff`.

### Actualizar un repositorio después de los finales de línea

Cuando configuras la opción `core.autocrlf` o confirmas un archivo de tipo *.gitattributes* podrías encontrar que Git reporta cambios a archivos que no has modificado. Git ha cambiado los fines de línea para que concuerden con tu nueva configuración.

Para garantizar que todos los fines de línea en tu repositorio concuerdan con tu nueva configuración, respalda tus archivos con Git, borra los archivos en tu repositorio (con excepción de el directorio `.git`), y luego restablece todos los archivos al mismo tiempo.

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

### Leer más

- [Personalizar Git - Atributos de Git](https://git-scm.com/book/en/Customizing-Git-Git-Attributes) en el libro de Pro Git
- [git-config](https://git-scm.com/docs/git-config) en las páginas man para Git
- [Comenzar -Configuración Inicial](https://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup) en el libro de Pro Git
- [Mind the End of Your Line](http://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/) por [Tim Clem](https://github.com/tclem)
