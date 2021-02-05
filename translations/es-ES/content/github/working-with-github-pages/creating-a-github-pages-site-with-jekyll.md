---
title: Crear un sitio de Páginas de GitHub con Jekyll
intro: 'Puedes usar Jekyll para crear un sitio de {% data variables.product.prodname_pages %} en un repositorio nuevo o existente.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/creating-a-github-pages-site-with-jekyll
permissions: 'Las personas con permisos de administración para un repositorio pueden crear un sitio de {% data variables.product.prodname_pages %} con Jekyll.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.pages.org-owners-can-restrict-pages-creation %}

### Prerrequisitos

Antes de que puedas usar Jekyll para crear un sitio de {% data variables.product.prodname_pages %}, debes instalar Jekyll y Git. Para obtener más información, consulta [Instalación](https://jekyllrb.com/docs/installation/) en la documentación de Jekyll y "[Configurar Git](/articles/set-up-git)".

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

### Crear un repositorio para tu sitio

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
{% data reusables.pages.create-repo-name %}
{% data reusables.repositories.choose-repo-visibility %}

### Crear tu sitio

{% data reusables.pages.must-have-repo-first %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Si aún no tienes una copia local de tu repositorio, desplázate hasta la ubicación en la que quieras almacenar los archivos fuente de tu sitio y reemplaza _PARENT-FOLDER_ por la carpeta que quieras que contenga la carpeta para su repositorio.
  ```shell
  $ cd <em>PARENT-FOLDER</em>
  ```
3. Si aún no lo has hecho, inicia un repositorio de Git local reemplazando _REPOSITORY-NAME_ por el nombre de tu repositorio.
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
{% data reusables.pages.decide-publishing-source %}
{% data reusables.pages.navigate-publishing-source %}
  Por ejemplo, si decides publicar tu sitio desde la carpeta `docs` de la rama predeterminada, crea y cambia los directorios para la carpeta `docs`.
 ```shell
 $ mkdir docs
 # Creates a new folder called docs
 $ cd docs
 ```
 Si decides publicar tu sitio desde la rama `gh-pages`, crea y controla la rama `gh-pages`.
 ```shell
 $ git checkout --orphan gh-pages
 # Creates a new branch, with no history or contents, called gh-pages and switches to the gh-pages branch
 ```
 7. Para crear un sitio Jekyll nuevo, usa el comando `jekyll new` y reemplaza _VERSION_ por la versión de dependencias actual para Jekyll. Para obtener más información, consulta "[Versiones de dependencias](https://pages.github.com/versions/)" en el sitio de {% data variables.product.prodname_pages %}.
    - Si instalaste Bundler:
      ```shell
      $ bundle exec jekyll <em>VERSION</em> new .
      # Creates a Jekyll site in the current directory
      ```
    - Si no tienes instalado Bundler:
     ```shell
     $ jekyll <em>VERSION</em> new .
     # Creates a Jekyll site in the current directory
     ```
8. Abre el Gemfile que se creó y sigue las instrucciones de los comentarios del Gemfile para usar las {% data variables.product.prodname_pages %}. ![Instrucciones para actualizar Gemfile](/assets/images/help/pages/gemfile-instructions.png)
9. Actualiza la línea `gem "github-pages"` para que luzca así, reemplazando _VERSION_ por la versión de dependencias actual para `github-pages`. Para obtener más información, consulta "[Versiones de dependencias](https://pages.github.com/versions/)" en el sitio de {% data variables.product.prodname_pages %}.
```shell
gem "github-pages", "~> <em>VERSION</em>", group: :jekyll_plugins
```
10. Guarda y cierra el Gemfile.
11. De forma opcional, prueba tu sitio localmente. Para obtener más información, consulta "[Verificar tu sitio de {% data variables.product.prodname_pages %} localmente con Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll)".
12. Agrega tu repositorio de {% data variables.product.product_name %} como remoto, reemplazando {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}_HOSTNAME_ con el nombre de host de tu aplicativo,{% endif %} _USER_ con la cuenta a la que pertenece el repositorio{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %},{% endif %} y _REPOSITORY_ con el nombre del repositorio.
```shell
{% if currentVersion == "free-pro-team@latest" %}
$ git remote add origin https://github.com/<em>USER</em>/<em>REPOSITORY</em>.git
{% else %}
$ git remote add origin https://<em>HOSTNAME</em>/<em>USER</em>/<em>REPOSITORY</em>.git
{% endif %}
```
13. Sube el repositorio a {% data variables.product.product_name %}, reemplazando _BRANCH_ por el nombre de la rama en la que estás trabajando.
   ```shell
   $ git push -u origin <em>BRANCH</em>
   ```
{% data reusables.pages.configure-publishing-source %}
{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.pages.choose-visibility %}{% endif %}
{% data reusables.pages.visit-site %}

{% data reusables.pages.admin-must-push %}

### Pasos siguientes

Para agregar una página o publicación nueva a tu sitio, consulta "[Agregar contenido a tu sitio de {% data variables.product.prodname_pages %} con Jekyll](/articles/adding-content-to-your-github-pages-site-using-jekyll)".

{% data reusables.pages.add-jekyll-theme %} Para obtener más información, consulta "[Agregar un tema a tu sitio de {% data variables.product.prodname_pages %} con Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)".
