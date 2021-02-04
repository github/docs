---
title: Agregar un proyecto existente a GitHub utilizando la línea de comando
intro: 'Poner tu trabajo existente en {% data variables.product.product_name %} puede permitirte compartir y colaborar de muchas maneras increíbles.'
redirect_from:
  - /articles/add-an-existing-project-to-github/
  - /articles/adding-an-existing-project-to-github-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.repositories.migrating-from-codeplex %}

{% tip %}

**Sugerencia:** Si estás más a gusto con una interfaz de usuario de tipo "apuntar y hacer clic", trata de agregar tu proyecto con {% data variables.product.prodname_desktop %}. Para más información, consulta "[Agregar un repositorio de tu computadora local a GitHub Desktop](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop)" en *{% data variables.product.prodname_desktop %} Ayuda*.

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

{% mac %}

1. [Crear un repositorio nuevo](/articles/creating-a-new-repository) en

{% data variables.product.product_location %}. Para evitar errores, no inicialices el nuevo repositorio con archivos *README* licencia o `gitingnore`. Puedes agregar estos archivos después de que tu proyecto se haya subido a {% data variables.product.product_name %}.
    ![Desplegable Create New Repository (Crear nuevo repositorio)](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Cambiar el directorio de trabajo actual en tu proyecto local.
4. Inicializar el directorio local como un repositorio de Git.
  ```shell
  $ git init -b main
  ```
5. Agregar los archivos a tu nuevo repositorio local. Esto representa la primera confirmación.
  ```shell
  $ git add .
  # Agrega el archivo en el repositorio local y lo presenta para la confirmación. {% data reusables.git.unstage-codeblock %}
  ```
6. Confirmar los archivos que has preparado en tu repositorio local.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. En la parte superior de la página de Configuración rápida del repositorio de {% data variables.product.product_name %}, haz clic en {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar la URL del repositorio remoto.![Copiar el campo de URL de repositorio remoto](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. En Terminal, [agrega la URL para el repositorio remoto](/articles/adding-a-remote) donde se subirá tu repositorio local.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Sube los cambios](/articles/pushing-commits-to-a-remote-repository/) en tu repositorio local a {% data variables.product.product_location %}.
  ```shell
  $ git push -u origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endmac %}

{% windows %}

1. [Crear un repositorio nuevo](/articles/creating-a-new-repository) en

{% data variables.product.product_location %}. Para evitar errores, no inicialices el nuevo repositorio con archivos *README* licencia o `gitingnore`. Puedes agregar estos archivos después de que tu proyecto se haya subido a {% data variables.product.product_name %}.
    ![Desplegable Create New Repository (Crear nuevo repositorio)](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Cambiar el directorio de trabajo actual en tu proyecto local.
4. Inicializar el directorio local como un repositorio de Git.
  ```shell
  $ git init -b main
  ```
5. Agregar los archivos a tu nuevo repositorio local. Esto representa la primera confirmación.
  ```shell
  $ git add .
  # Agrega el archivo en el repositorio local y lo presenta para la confirmación. {% data reusables.git.unstage-codeblock %}
  ```
6. Confirmar los archivos que has preparado en tu repositorio local.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. En la parte superior de la página de Configuración rápida del repositorio de {% data variables.product.product_name %}, haz clic en {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar la URL del repositorio remoto.![Copiar el campo de URL de repositorio remoto](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. En la indicación Command (Comando), [agrega la URL para el repositorio remoto](/articles/adding-a-remote) donde se subirá tu repositorio local.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Sube los cambios](/articles/pushing-commits-to-a-remote-repository/) en tu repositorio local a {% data variables.product.product_location %}.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endwindows %}

{% linux %}

1. [Crear un repositorio nuevo](/articles/creating-a-new-repository) en

{% data variables.product.product_location %}. Para evitar errores, no inicialices el nuevo repositorio con archivos *README* licencia o `gitingnore`. Puedes agregar estos archivos después de que tu proyecto se haya subido a {% data variables.product.product_name %}.
    ![Desplegable Create New Repository (Crear nuevo repositorio)](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Cambiar el directorio de trabajo actual en tu proyecto local.
4. Inicializar el directorio local como un repositorio de Git.
  ```shell
  $ git init -b main
  ```
5. Agregar los archivos a tu nuevo repositorio local. Esto representa la primera confirmación.
  ```shell
  $ git add .
  # Agrega el archivo en el repositorio local y lo presenta para la confirmación. {% data reusables.git.unstage-codeblock %}
  ```
6. Confirmar los archivos que has preparado en tu repositorio local.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. En la parte superior de la página de Configuración rápida del repositorio de {% data variables.product.product_name %}, haz clic en {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar la URL del repositorio remoto.![Copiar el campo de URL de repositorio remoto](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. En Terminal, [agrega la URL para el repositorio remoto](/articles/adding-a-remote) donde se subirá tu repositorio local.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Sube los cambios](/articles/pushing-commits-to-a-remote-repository/) en tu repositorio local a {% data variables.product.product_location %}.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endlinux %}

### Leer más

- [Agregar un archivo a un repositorio mediante la línea de comando](/articles/adding-a-file-to-a-repository-using-the-command-line)"
