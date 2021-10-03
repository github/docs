---
title: Duplicar un repositorio
intro: 'To maintain a mirror of a repository without forking it, you can run a special clone command, then mirror-push to the new repository.'
redirect_from:
  - /articles/duplicating-a-repo/
  - /articles/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---

{% ifversion fpt %}

{% note %}

**Note:** If you have a project hosted on another version control system, you can automatically import your project to {% data variables.product.prodname_dotcom %} using the {% data variables.product.prodname_dotcom %} Importer tool. For more information, see "[About {% data variables.product.prodname_dotcom %} Importer](/github/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)."

{% endnote %}

{% endif %}

Before you can push the original repository to your new copy, or _mirror_, of the repository, you must [create the new repository](/articles/creating-a-new-repository) on {% data variables.product.product_location %}. En estos ejemplos, `exampleuser/new-repository` o `exampleuser/mirrored` son los espejos.

## Generar un espejo de un repositorio

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crea un clon desnudo de un repositorio.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>old-repository</em>.git
  ```
3. Sube en espejo al nuevo repositorio.
  ```shell
  $ cd <em>old-repository</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>new-repository</em>.git
  ```
4. Eliminar el repositorio local temporal que creaste previamente.
  ```shell
  $ cd ..
  $ rm -rf <em>old-repository</em>
  ```

## Replicar un repositorio que contiene objetos de {% data variables.large_files.product_name_long %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crea un clon desnudo de un repositorio. Reemplaza el nombre de usuario del ejemplo por el nombre de la persona u organización propietaria del repositorio y reemplaza el nombre del repositorio del ejemplo por el nombre del repositorio que deseas duplicar.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>old-repository</em>.git
  ```
3. Dirígete al repositorio que acabas de clonar.
  ```shell
  $ cd <em>old-repository</em>
  ```
4. Extra los objetos {% data variables.large_files.product_name_long %} del repositorio.
  ```shell
  $ git lfs fetch --all
  ```
5. Sube en espejo al nuevo repositorio.
  ```shell
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>new-repository</em>.git
  ```
6. Sube los objetos {% data variables.large_files.product_name_long %} del repositorio a tu espejo.
  ```shell
  $ git lfs push --all https://github.com/<em>exampleuser/new-repository.git</em>
  ```
7. Eliminar el repositorio local temporal que creaste previamente.
  ```shell
  $ cd ..
  $ rm -rf <em>old-repository</em>
  ```

## Replicar un repositorio en otra ubicación

Si quieres replicar un repositorio en otra ubicación, incluido obtener actualizaciones del original, puedes clonar una réplica y subir periódicamente los cambios.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crea un clon desnudo en espejo del repositorio.
  ```shell
  $ git clone --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>repository-to-mirror</em>.git
  ```
3. Establece la ubicación para subir en tu espejo.
  ```shell
  $ cd <em>repository-to-mirror</em>
  $ git remote set-url --push origin https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>mirrored</em>
  ```

Al igual que sucede con un clon básico, un clon replicado incluye todas las ramas y etiquetas remotas, pero todas las referencias locales se sobrescribirán cada vez que extraigas elementos, por eso siempre será igual al repositorio original. El proceso para subir elementos a tu espejo se simplifica si estableces la URL para los elementos que subes. Para actualizar tu espejo, extrae las actualizaciones y súbelas.

```shell
$ git fetch -p origin
$ git push --mirror
```
{% ifversion fpt %}
## Leer más

* "[Pushing changes to GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github#pushing-changes-to-github)"
* "[About Git Large File Storage and GitHub Desktop](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)"
* "[Acerca del Importador GitHub](/github/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)"

{% endif %}
