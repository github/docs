---
title: Crear un sitio de Páginas de GitHub con Jekyll
intro: 'Puedes usar Jekyll para crear un sitio de {% data variables.product.prodname_pages %} en un repositorio nuevo o existente.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/creating-a-github-pages-site-with-jekyll
  - /github/working-with-github-pages/creating-a-github-pages-site-with-jekyll
permissions: 'People with admin permissions for a repository can create a {% data variables.product.prodname_pages %} site with Jekyll.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create site with Jekyll
ms.openlocfilehash: 409b2d1e21f89471e7ad92f790bc7ac67e903a62
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145137901'
---
{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## Prerrequisitos

Antes de que puedas usar Jekyll para crear un sitio de {% data variables.product.prodname_pages %}, debes instalar Jekyll y Git. Para obtener más información, consulte [Instalación](https://jekyllrb.com/docs/installation/) en la documentación de Jekyll y "[Configuración de Git](/articles/set-up-git)".

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## Crear un repositorio para tu sitio

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %} {% data reusables.repositories.owner-drop-down %} {% indented_data_reference reusables.pages.emu-org-only spaces=3 %} {% data reusables.pages.create-repo-name %} {% data reusables.repositories.choose-repo-visibility %}

## Crear tu sitio

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Si aún no tiene una copia local del repositorio, vaya a la ubicación en la que quiera almacenar los archivos de origen del sitio y reemplace _PARENT-FOLDER_ por la carpeta que quiera que contenga la carpeta del repositorio.
  ```shell
  $ cd <em>PARENT-FOLDER</em>
  ```
1. Si aún no lo ha hecho, inicie un repositorio de Git local reemplazando _REPOSITORY-NAME_ por el nombre de su repositorio.
  ```shell
  $ git init <em>REPOSITORY-NAME</em>
  > Initialized empty Git repository in /Users/octocat/my-site/.git/
  # Creates a new folder on your computer, initialized as a Git repository
  ```
  4. Cambio los directorios para el repositorio.
  ```shell
  $ cd <em>REPOSITORY-NAME</em>
  # Changes the working directory
  ```
{% data reusables.pages.decide-publishing-source %} {% data reusables.pages.navigate-publishing-source %} Por ejemplo, si eligió publicar el sitio desde la carpeta `docs` de la rama predeterminada, cree y cambie los directorios a la carpeta `docs`.
 ```shell
 $ mkdir docs
 # Creates a new folder called docs
 $ cd docs
 ```
 Si eligió publicar el sitio desde la rama `gh-pages`, cree y desproteja la rama `gh-pages`.
 ```shell
 $ git checkout --orphan gh-pages
 # Creates a new branch, with no history or contents, called gh-pages, and switches to the gh-pages branch
 $ git rm -rf 
 # Removes the contents from your default branch from the working directory
 ```
1. Para crear un nuevo sitio de Jekyll, use el comando `jekyll new`:
   ```shell
   $ jekyll new --skip-bundle .
   # Creates a Jekyll site in the current directory
   ```
1. Abre el Gemfile que creó Jekyll.
1. Agregue "#" al principio de la línea que comienza por `gem "jekyll"` para comentarla.
1. Agregue la gema `github-pages` editando la línea que compienza por `# gem "github-pages"`. Cambia la línea a:

   ```shell
   gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
   ```

   Reemplace _GITHUB-PAGES-VERSION_ por la versión compatible más reciente de la gema `github-pages`. Puede encontrar esta versión aquí: "[Dependency versions](https://pages.github.com/versions/)".

   La versión correcta de Jekyll se instalará como una dependencia de la gema `github-pages`.
1. Guarda y cierra el Gemfile.
1. Ejecute `bundle install` desde la línea de comandos.
1. También puede realizar las modificaciones necesarias en el archivo `_config.yml`. Esto se requiere para las rutas relativas cuando el repositorio se hospeda en un subdirectorio.  Para obtener más información, consulte "[Dividir una subcarpeta en un nuevo repositorio](/github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository)".
   ```yml
   domain: my-site.github.io       # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
   url: https://my-site.github.io  # the base hostname and protocol for your site, e.g. http://example.com
   baseurl: /REPOSITORY-NAME/      # place folder name if the site is served in a subfolder
  ```
1. De forma opcional, prueba tu sitio localmente. Para obtener más información, vea "[Probar tu sitio de {% data variables.product.prodname_pages %} localmente con Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll)".
1. Agrega y confirma tu trabajo.
```shell
git add .
git commit -m 'Initial GitHub pages site with Jekyll'
```
1. Agregue el repositorio en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} como repositorio remoto reemplazando {% ifversion ghes or ghae %}_HOSTNAME_ por el nombre de host de su empresa,{% endif %} _USER_ por la cuenta a la que pertenece el repositorio{% ifversion ghes or ghae %}{% endif %} y _REPOSITORY_ por el nombre del repositorio.
```shell
{% ifversion fpt or ghec %}
$ git remote add origin https://github.com/<em>USER</em>/<em>REPOSITORY</em>.git
{% else %}
$ git remote add origin https://<em>HOSTNAME</em>/<em>USER</em>/<em>REPOSITORY</em>.git
{% endif %}
```
1. Envíe el repositorio a {% data variables.product.product_name %} reemplazando _BRANCH_ por el nombre de la rama en la que esté trabajando.
   ```shell
   $ git push -u origin <em>BRANCH</em>
   ```
{% data reusables.pages.configure-publishing-source %} {% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% data reusables.pages.choose-visibility %} {% data reusables.pages.visit-site %} {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## Pasos siguientes

Para agregar una nueva página o publicación en el sitio, consulte "[Agregar contenido al sitio de {% data variables.product.prodname_pages %} mediante Jekyll](/articles/adding-content-to-your-github-pages-site-using-jekyll)".

{% data reusables.pages.add-jekyll-theme %} Para obtener más información, consulte "[Agregar un tema al sitio de {% data variables.product.prodname_pages %} mediante Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)."
