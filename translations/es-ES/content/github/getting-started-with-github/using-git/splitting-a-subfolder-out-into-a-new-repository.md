---
title: Dividir una subcarpeta en un nuevo repositorio
redirect_from:
  - /articles/splitting-a-subpath-out-into-a-new-repository/
  - /articles/splitting-a-subfolder-out-into-a-new-repository
  - /github/using-git/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/splitting-a-subfolder-out-into-a-new-repository
intro: Puedes convertir una carpeta dentro de un repositorio de Git en un nuevo repositorio.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Si creas un nuevo clon del repositorio, no perderás ninguno de tus historiales o cambios de Git cuando divides una carpeta en un repositorio separado.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambia el directorio de trabajo actual a la ubicación donde deseas crear tu nuevo repositorio.
3. Clona el repositorio que contiene la subcarpeta.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY-NAME</em>
  ```
4. Cambia el directorio de trabajo actual por tu repositorio clonado.
  ```shell
  $ cd <em>REPOSITORY-NAME</em>
  ```
5. Para filtrar la subcarpeta desde el resto de los archivos en el repositorio, ejecuta [`git filter-branch`](https://git-scm.com/docs/git-filter-branch), proporcionando esta información:
    - `FOLDER-NAME`: la carpeta dentro de tu proyecto desde la que desearías crear un repositorio separado.

    {% windows %}

      {% tip %}

      **Sugerencia:** los usuarios de Windows deberían utilizar `/` para delimitar carpetas.

      {% endtip %}

    {% endwindows %}
    - `BRANCH-NAME`: The default branch for your current project, for example, `main` or `gh-pages`.
    ```shell
    $ git filter-branch --prune-empty --subdirectory-filter <em>FOLDER-NAME BRANCH-NAME</em>
    # Filter the specified branch in your directory and remove empty commits
    > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
    > Ref 'refs/heads/<em>BRANCH-NAME</em>' was rewritten
    ```
  El repositorio debería ahora únicamente contener archivos que estuvieron en tu subcarpeta.

6. [Crea un nuevo repositorio](/articles/creating-a-new-repository/) en {% data variables.product.product_name %}.
7. En la parte superior de la página nueva Quick Setup del repositorio {% data variables.product.product_name %}, haz clic en {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar la URL del repositorio remoto. ![Copiar el campo de URL de repositorio remoto](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

  {% tip %}

  **Tip:** Para obtener más información sobre la diferencia entre las URL de HTTPS y SSH, consulta la sección "[Acerca de los repositorios remotos](/github/getting-started-with-github/about-remote-repositories)".

  {% endtip %}

8. Verifica el nombre remoto existente para tu repositorio. Por ejemplo, `origin` o `upstream` son dos de las opciones comunes.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY-NAME</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY-NAME</em>.git (push)
  ```

9. Configura una URL remota nueva para tu nuevo repositorio utilizando el nombre remoto existente y la URL del repositorio remoto que copiaste en el paso 7.
  ```shell
  git remote set-url origin https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git
  ```
10. Verifica que la URL remota haya cambiado con el nombre de tu nuevo repositorio.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git (push)
  ```
11. Sube tus cambios al nuevo repositorio en {% data variables.product.product_name %}.
  ```shell
  git push -u origin <em>BRANCH-NAME</em>
  ```
