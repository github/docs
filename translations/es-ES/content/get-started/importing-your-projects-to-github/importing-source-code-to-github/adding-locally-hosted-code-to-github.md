---
title: Agregar código hospedado localmente a GitHub
intro: 'Obtén información sobre cómo agregar código fuente o repositorios existentes a {% data variables.product.product_name %} desde la línea de comandos mediante {% data variables.product.prodname_cli %} o comandos de Git. A continuación, comparte el código e invita a otros usuarios a trabajar contigo.'
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
shortTitle: Add locally hosted code
ms.openlocfilehash: 646ea2b0267ffebe546cf014ba7af74ab3c36284
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147855044'
---
## Acerca de cómo agregar código fuente existente a {% data variables.product.product_name %}

Si ya tiene código fuente o repositorios almacenados localmente en el equipo o en la red privada, puede agregarlos a {% data variables.product.product_name %} escribiendo comandos en un terminal. Para ello, escriba comandos de Git directamente o bien use la {% data variables.product.prodname_cli %}.

{% data variables.product.prodname_cli %} es una herramienta de código abierto para usar {% data variables.product.prodname_dotcom %} desde la línea de comandos del equipo. El {% data variables.product.prodname_cli %} puede simplificar el proceso de agregar un proyecto existente a {% data variables.product.product_name %} utilizando la línea de comandos. Para obtener más información sobre la {% data variables.product.prodname_cli %}, vea "[Acerca de la {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

{% tip %}

**Sugerencia**: Si se siente más a gusto con una interfaz de usuario de tipo "apuntar y hacer clic", intente agregar su proyecto con {% data variables.product.prodname_desktop %}. Para obtener más información, vea "[Agregar un repositorio desde el equipo local a GitHub Desktop](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop)" en la *Ayuda de {% data variables.product.prodname_desktop %}* .

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

## Agregar un repositorio local a {% data variables.product.product_name %} con la {% data variables.product.prodname_cli %}

1. En la línea de comandos, navega al directorio raíz de tu proyecto.
1. Inicializar el directorio local como un repositorio de Git.

    ```shell
    git init -b main
    ```

1. Probar y confirmar todos los archivos en tu proyecto

   ```shell
   git add . && git commit -m "initial commit"
   ```

1. A fin de crear un repositorio para el proyecto en GitHub, use el subcomando `gh repo create`. Cuando se le solicite, seleccione **Push an existing local repository to GitHub** (Insertar un repositorio local existente a GitHub) e introduzca el nombre que quiera ponerle a su repositorio. Si quiere que su proyecto pertenezca a una organización en lugar de a su cuenta de usuario, especifique el nombre de la organización y del proyecto con `organization-name/project-name`.

1. Sigue los mensajes interactivos. Para agregar el remoto y subir el repositorio, confirma con "Sí" cuando se te pida agregar el remoto y subir las confirmaciones a la rama actual.

1. Como alternativa, para omitir todas las solicitudes, proporcione la ruta de acceso al repositorio con la marca `--source` y pase una marca de visibilidad (`--public`, `--private` o `--internal`). Por ejemplo, `gh repo create --source=. --public`. Especifique un remoto con la marca `--remote`. Para insertar las confirmaciones, pase la marca `--push`. Para obtener más información acerca de los posibles argumentos, vea el [Manual de la CLI de GitHub](https://cli.github.com/manual/gh_repo_create).

## Agregar un repositorio local a {% data variables.product.product_name %} mediante Git

{% mac %}

1. [Cree un repositorio](/repositories/creating-and-managing-repositories/creating-a-new-repository) en {% data variables.product.product_location %}. Para evitar errores, no inicialice el nuevo repositorio con el archivo *LÉAME*, la licencia o archivos `gitignore`. Puedes agregar estos archivos después de que tu proyecto se haya subido a {% data variables.product.product_name %}.
    ![Creación del menú desplegable Nuevo repositorio](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. Cambiar el directorio de trabajo actual en tu proyecto local.
4. Utiliza el comando `init` para inicializar el directorio local como repositorio de Git. De forma predeterminada, la rama inicial se denomina `master`.
   
   Si usas Git 2.28.0 o una versión posterior, puedes establecer el nombre de la rama predeterminada mediante `-b`.

   ``` shell
   $ git init -b main
   ```

   Si usas Git 2.27.1 o una versión anterior, puedes establecer el nombre de la rama predeterminada mediante `&& git symbolic-ref HEAD refs/heads/main`.

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. Agregar los archivos a tu nuevo repositorio local. Esto representa la primera confirmación.
  
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Confirmar los archivos que has preparado en tu repositorio local.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. En la parte superior de tu repositorio en la página de configuración rápida de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, haz clic en {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar la URL del repositorio remoto.
    ![Copie el campo de URL de repositorio remoto](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png).
8. En Terminal, [agregue la dirección URL del repositorio remoto](/github/getting-started-with-github/managing-remote-repositories) en el que se insertará el repositorio local.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Inserte los cambios](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) en el repositorio local en {% data variables.product.product_location %}.
  ```shell
  $ git push -u origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endmac %}

{% windows %}

1. [Cree un repositorio](/articles/creating-a-new-repository) en {% data variables.product.product_location %}. Para evitar errores, no inicialice el nuevo repositorio con el archivo *LÉAME*, la licencia o archivos `gitignore`. Puedes agregar estos archivos después de que tu proyecto se haya subido a {% data variables.product.product_name %}.
    ![Creación del menú desplegable Nuevo repositorio](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. Cambiar el directorio de trabajo actual en tu proyecto local.
4. Utiliza el comando `init` para inicializar el directorio local como repositorio de Git. De forma predeterminada, la rama inicial se denomina `master`.
   
   Si usas Git 2.28.0 o una versión posterior, puedes establecer el nombre de la rama predeterminada mediante `-b`.

   ``` shell
   $ git init -b main
   ```

   Si usas Git 2.27.1 o una versión anterior, puedes establecer el nombre de la rama predeterminada mediante `&& git symbolic-ref HEAD refs/heads/main`.

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. Agregar los archivos a tu nuevo repositorio local. Esto representa la primera confirmación.
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Confirmar los archivos que has preparado en tu repositorio local.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. En la parte superior de tu repositorio en la página de configuración rápida de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, haz clic en {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar la URL del repositorio remoto.
    ![Copie el campo de URL de repositorio remoto](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png).
8. En el símbolo del sistema, [agregue la dirección URL del repositorio remoto](/github/getting-started-with-github/managing-remote-repositories) en el que se insertará el repositorio local.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Inserte los cambios](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) en el repositorio local en {% data variables.product.product_location %}.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endwindows %}

{% linux %}

1. [Cree un repositorio](/articles/creating-a-new-repository) en {% data variables.product.product_location %}. Para evitar errores, no inicialice el nuevo repositorio con el archivo *LÉAME*, la licencia o archivos `gitignore`. Puedes agregar estos archivos después de que tu proyecto se haya subido a {% data variables.product.product_name %}.
    ![Creación del menú desplegable Nuevo repositorio](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. Cambiar el directorio de trabajo actual en tu proyecto local.
4. Utiliza el comando `init` para inicializar el directorio local como repositorio de Git. De forma predeterminada, la rama inicial se denomina `master`.
   
   Si usas Git 2.28.0 o una versión posterior, puedes establecer el nombre de la rama predeterminada mediante `-b`.

   ``` shell
   $ git init -b main
   ```

   Si usas Git 2.27.1 o una versión anterior, puedes establecer el nombre de la rama predeterminada mediante `&& git symbolic-ref HEAD refs/heads/main`.

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. Agregar los archivos a tu nuevo repositorio local. Esto representa la primera confirmación.
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Confirmar los archivos que has preparado en tu repositorio local.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. En la parte superior de tu repositorio en la página de configuración rápida de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, haz clic en {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar la URL del repositorio remoto.
    ![Copie el campo de URL de repositorio remoto](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png).
8. En Terminal, [agregue la dirección URL del repositorio remoto](/github/getting-started-with-github/managing-remote-repositories) en el que se insertará el repositorio local.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Inserte los cambios](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) en el repositorio local en {% data variables.product.product_location %}.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endlinux %}

## Información adicional

- "[Agregar un archivo a un repositorio](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)"
