---
title: Agregar código hospedado localmente a GitHub
intro: 'Aprende cómo agregar repositorios o código fuente existentes a {% data variables.product.product_name %} desde la línea de comandos utilizando el {% data variables.product.prodname_cli %} o los comandos de Git. Luego, comparte tu código e invita a los demás a que trabajen contigo.'
redirect_from:
  - /articles/add-an-existing-project-to-github
  - /articles/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Agrega código hospedado localmente
---

## Acerca de cómo agregar código fuente existente a {% data variables.product.product_name %}

Si tienes repositorios o código fuente existentes que se almacenan localmente en tu computadora o red privada, puedes agregarlos a {% data variables.product.product_name %} escribiendo comandos en una terminal. Puedes hacer esto tecleando comandos de Git directamente o utilizando el {% data variables.product.prodname_cli %}.

{% data variables.product.prodname_cli %} es una herramienta de código abierto para utilizar {% data variables.product.prodname_dotcom %} desde la línea de comandos de tu computadora. El {% data variables.product.prodname_cli %} puede simplificar el proceso de agregar un proyecto existente a {% data variables.product.product_name %} utilizando la línea de comandos. Para aprender más sobre el {% data variables.product.prodname_cli %}, consulta la sección "[Acerca del {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

{% tip %}

**Sugerencia:** Si estás más a gusto con una interfaz de usuario de tipo "apuntar y hacer clic", trata de agregar tu proyecto con {% data variables.product.prodname_desktop %}. Para más información, consulta "[Agregar un repositorio de tu computadora local a GitHub Desktop](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop)" en *{% data variables.product.prodname_desktop %} Ayuda*.

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

## Agregar un repositorio local a {% data variables.product.product_name %} con {% data variables.product.prodname_cli %}

1. En la línea de comandos, navega al directorio raíz de tu proyecto.
1. Inicializar el directorio local como un repositorio de Git.

    ```shell
    git init -b main
    ```

1. Probar y confirmar todos los archivos en tu proyecto

   ```shell
   git add . && git commit -m "initial commit"
   ```

1. Para crear un repositorio para tu proyecto en GitHub, utiliza el subcomando `gh repo create`. Cuando se te solicite, selecciona **Subir un repositorio local existente a GitHub** e ingresa el nombre que quieras ponerle a tu repositorio. Si quieres que tu proyecto pertenezca a una organización en vez de a tu cuenta de usuario, especifica el nombre de la organización y del proyecto con `organization-name/project-name`.

1. Sigue los mensajes interactivos. Para agregar el remoto y subir el repositorio, confirma con "Sí" cuando se te pida agregar el remoto y subir las confirmaciones a la rama actual.

1. Como alternativa, para saltarte todos los mensajes, proporciona la ruta del repositorio con el marcador `--source` y pasa un marcador de visibilidad (`--public`, `--private` o `--internal`). Por ejemplo, `gh repo create --source=. --public`. Especifica un remoto con el marcador `--remote`. Para subir tus confirmaciones, pasa el marcador `--push`. Para obtener más información sobre los argumentos posibles, consulta el [manual del CLI de GitHub](https://cli.github.com/manual/gh_repo_create).

## Agregar un repositorio local a {% data variables.product.product_name %} utilizando Git

{% mac %}

1. [Crear un repositorio nuevo](/repositories/creating-and-managing-repositories/creating-a-new-repository) en {% data variables.product.product_location %}. Para evitar errores, no inicialices el nuevo repositorio con archivos *README* licencia o `gitingnore`. Puedes agregar estos archivos después de que tu proyecto se haya subido a {% data variables.product.product_name %}. ![Desplegable Create New Repository (Crear nuevo repositorio)](/assets/images/help/repository/repo-create.png)
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
7. En la parte superior de tu repositorio en la página de configuración rápida de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, haz clic en {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar la URL del repositorio remoto. ![Copiar el campo de URL de repositorio remoto](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. En Terminal, [agrega la URL para el repositorio remoto](/github/getting-started-with-github/managing-remote-repositories) donde se subirá tu repositorio local.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Sube los cambios](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) en tu repositorio local a {% data variables.product.product_location %}.
  ```shell
  $ git push -u origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endmac %}

{% windows %}

1. [Crear un repositorio nuevo](/articles/creating-a-new-repository) en {% data variables.product.product_location %}. Para evitar errores, no inicialices el nuevo repositorio con archivos *README* licencia o `gitingnore`. Puedes agregar estos archivos después de que tu proyecto se haya subido a {% data variables.product.product_name %}. ![Desplegable Create New Repository (Crear nuevo repositorio)](/assets/images/help/repository/repo-create.png)
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
7. En la parte superior de tu repositorio en la página de configuración rápida de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, haz clic en {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar la URL del repositorio remoto. ![Copiar el campo de URL de repositorio remoto](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. En la indicación Command (Comando), [agrega la URL para el repositorio remoto](/github/getting-started-with-github/managing-remote-repositories) donde se subirá tu repositorio local.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Sube los cambios](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) en tu repositorio local a {% data variables.product.product_location %}.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endwindows %}

{% linux %}

1. [Crear un repositorio nuevo](/articles/creating-a-new-repository) en {% data variables.product.product_location %}. Para evitar errores, no inicialices el nuevo repositorio con archivos *README* licencia o `gitingnore`. Puedes agregar estos archivos después de que tu proyecto se haya subido a {% data variables.product.product_name %}. ![Desplegable Create New Repository (Crear nuevo repositorio)](/assets/images/help/repository/repo-create.png)
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
7. En la parte superior de tu repositorio en la página de configuración rápida de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, haz clic en {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar la URL del repositorio remoto. ![Copiar el campo de URL de repositorio remoto](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. En Terminal, [agrega la URL para el repositorio remoto](/github/getting-started-with-github/managing-remote-repositories) donde se subirá tu repositorio local.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Sube los cambios](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) en tu repositorio local a {% data variables.product.product_location %}.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endlinux %}

## Leer más

- "[Agregar un archivo a un repositorio](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)"
