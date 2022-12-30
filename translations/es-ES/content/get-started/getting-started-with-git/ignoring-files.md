---
title: Ignorar archivos
redirect_from:
  - /git-ignore
  - /ignore-files
  - /articles/ignoring-files
  - /github/using-git/ignoring-files
  - /github/getting-started-with-github/ignoring-files
  - /github/getting-started-with-github/getting-started-with-git/ignoring-files
intro: 'Puedes configurar Git para que ignore archivos que no quieres ingresar en {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4e98e0a4eb4f2f75056621bd0123c651a04a9b6d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135841'
---
## Configurar archivos ignorados para solo un repositorio

Puede crear un archivo *.gitignore* en el directorio raíz del repositorio para indicarle a Git qué archivos y directorios ignorar cuando se realiza una confirmación.
Para compartir las reglas de ignore con otros usuarios que clonan el repositorio, confirme el archivo *.gitignore* en el repositorio.

GitHub mantiene una lista oficial de archivos *.gitignore* recomendados para muchos sistemas operativos, entornos y lenguajes de programación populares en el repositorio público `github/gitignore`. También puede usar gitignore.io a fin de crear un archivo *.gitignore* para el sistema operativo, lenguaje de programación o IDE. Para más información, vea "[github/gitignore](https://github.com/github/gitignore)" y el sitio "[gitignore.io](https://www.gitignore.io/)".

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navega a la ubicación de tu repositorio de Git.
3. Cree un archivo *.gitignore* para el repositorio.
   ```shell
   $ touch .gitignore
  ```

   Si el comando es exitoso, no habrá salida.
   
Para obtener un archivo *.gitignore* de ejemplo, vea "[Algunas configuraciones comunes de .gitignore](https://gist.github.com/octocat/9257657)" en el repositorio de Octocat.

Si quieres ignorar un archivo que ya se haya ingresado, deberás dejar de rastrearlo antes de que agregues una regla para ignorarlo. Desde tu terminal, deja de rastrear el archivo.

```shell
$ git rm --cached <em>FILENAME</em>
```

## Configurar archivos ignorados para todos los repositorios en tu computador

También puede crear un archivo *.gitignore* global a fin de definir una lista de reglas para ignorar archivos en todos los repositorios de Git en el equipo. Por ejemplo, podría crear el archivo en *~/.gitignore_global* y agregarle algunas reglas.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Configure Git para que use el archivo de exclusión *~/.gitignore_global* en todos los repositorios de Git.
  ```shell
  $ git config --global core.excludesfile ~/.gitignore_global
  ```

## Exclusión de archivos locales sin crear un archivo *.gitignore*

Si no quiere crear un archivo *.gitignore* para compartir con otros usuarios, puede crear reglas que no se confirmen el repositorio. Puedes utilizar esta técnica para los archivos generados de forma local que no esperas que otros usuarios generen, tales como los archivos creados por tu editor.

Use su editor de texto favorito para abrir el archivo *.git/info/exclude* dentro de la raíz del repositorio de Git. Cualquier norma que agregues aquí no se registrará y solo ignorará archivos de tu repositorio local.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navega a la ubicación de tu repositorio de Git.
3. Con su editor de texto favorito, abra el archivo *.git/info/exclude*.

## Lecturas adicionales

* [Omisión de archivos](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring) en el libro Pro Git
* [.gitignore](https://git-scm.com/docs/gitignore) en las páginas man de Git
* [Colección de plantillas *.gitignore* útiles](https://github.com/github/gitignore) en el repositorio github/gitignore
* Sitio de [gitignore.io](https://www.gitignore.io/)
