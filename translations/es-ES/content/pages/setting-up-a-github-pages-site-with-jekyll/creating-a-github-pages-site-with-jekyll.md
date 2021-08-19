---
title: Crear un sitio de Páginas de GitHub con Jekyll
intro: 'Puedes usar Jekyll para crear un sitio de {% data variables.product.prodname_pages %} en un repositorio nuevo o existente.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/creating-a-github-pages-site-with-jekyll
  - /github/working-with-github-pages/creating-a-github-pages-site-with-jekyll
permissions: 'People with admin permissions for a repository can create a {% data variables.product.prodname_pages %} site with Jekyll.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pages
---

{% data reusables.pages.org-owners-can-restrict-pages-creation %}

### Prerrequisitos

Antes de que puedas usar Jekyll para crear un sitio de {% data variables.product.prodname_pages %}, debes instalar Jekyll y Git. Para obtener más información, consulta [Instalación](https://jekyllrb.com/docs/installation/) en la documentación de Jekyll y "[Configurar Git](/articles/set-up-git)".

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

### Crear un repositorio para tu sitio

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
{% data reusables.pages.create-repo-name %}
{% data reusables.repositories.choose-repo-visibility %}

### Crear tu sitio

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

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
7. Para crear un sitio nuevo de Jekyll, utiliza el comando `jekyll new`:
   ```shell
   $ jekyll new .
   # Creates a Jekyll site in the current directory
   ```
8. Abre el Gemfile que creó Jekyll.
1. Agrega "#" en el inicio de la línea que comienza con `gem "jekyll"` para comentar esta línea.
1. Agrega la gema `github-pages` editando la línea que comienza con `# gem "github-pages"`. Cambia la línea a:

   ```shell
   gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
   ```

   Reemplaza _GITHUB-PAGES-VERSION_ con la última versión compatible de la gema `github-pages`. Puedes encontrar esta versión aquí: "[Versiones de la dependencia](https://pages.github.com/versions/)".

   La versión correcta de Jekyll se instalará como una dependencia de la gema `github-pages`.
1. Guarda y cierra el Gemfile.
11. Desde la línea de comandos, ejecuta `bundle update`.
11. Optionally, make any necessary edits to the `_config.yml` file. This is required for relative paths when the repository is hosted in a subdirectory.  For more information, see "[Splitting a subfolder out into a new repository](/github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository)."
   ```yml
   domain: my-site.github.io       # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
   url: https://my-site.github.io  # the base hostname and protocol for your site, e.g. http://example.com
   baseurl: /REPOSITORY-NAME/      # place folder name if the site is served in a subfolder   
  ```
11. De forma opcional, prueba tu sitio localmente. Para obtener más información, consulta "[Verificar tu sitio de {% data variables.product.prodname_pages %} localmente con Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll)".
12. Agrega y confirma tu trabajo.
```shell
git add .
git commit -m 'Initial GitHub pages site with Jekyll'
```
14. Agrega tu repositorio de {% data variables.product.product_name %} como remoto, reemplazando {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}_HOSTNAME_ con el nombre de host de tu aplicativo,{% endif %} _USER_ con la cuenta a la que pertenece el repositorio{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %},{% endif %} y _REPOSITORY_ con el nombre del repositorio.
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
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.pages.choose-visibility %}{% endif %}
{% data reusables.pages.visit-site %}

{% data reusables.pages.admin-must-push %}

### Pasos siguientes

Para agregar una página o publicación nueva a tu sitio, consulta "[Agregar contenido a tu sitio de {% data variables.product.prodname_pages %} con Jekyll](/articles/adding-content-to-your-github-pages-site-using-jekyll)".

{% data reusables.pages.add-jekyll-theme %} Para obtener más información, consulta "[Agregar un tema a tu sitio de {% data variables.product.prodname_pages %} con Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)".
