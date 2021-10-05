---
title: Crear un repositorio
redirect_from:
  - /create-a-repo/
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
intro: 'Para subir tu proyecto a {% data variables.product.product_location %}, deberás crear un repositorio donde alojarlo.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

## Crear un repositorio

{% ifversion fpt %}

Puedes almacenar distintos proyectos en los repositorios de {% data variables.product.product_name %}, incluso proyectos de código abierto. Con [proyectos de código abierto](http://opensource.org/about), puedes compartir el código para hacer que el software funcione mejor y sea más confiable. Puedes utilizar los repositorios para colaborar con otros y rastrear tu trabajo. Para obtener más información, consulta la sección "[Acerca de los repositorios](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)".

{% elsif ghes or ghae %}

Puedes almacenar varios proyectos en los repositorios de {% data variables.product.product_name %}, incluyendo los proyectos de innersource. Con innersource, puedes compartir el código para hacer software mejor y más confiable. Para obtener más información sobre innersource, consulta la documentación técnica de {% data variables.product.company_short %}"[Una introducción a innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)".

{% endif %}

{% ifversion fpt %}

{% note %}

**Nota:** Puedes crear repositorios públicos para un proyecto de código abierto. Cuando crees un repositorio público, asegúrate de incluir un [archivo de licencia](https://choosealicense.com/) que determine cómo deseas que se comparta tu proyecto con otros usuarios. {% data reusables.open-source.open-source-guide-repositories %}{% data reusables.open-source.open-source-learning-lab %}

{% endnote %}

{% endif %}

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.create_new %}
2. Escribe un nombre corto y fácil de recordar para tu repositorio. Por ejemplo: "hola-mundo". ![Campo para ingresar un nombre para el repositorio](/assets/images/help/repository/create-repository-name.png)
3. También puedes agregar una descripción de tu repositorio. Por ejemplo, "Mi primer repositorio en {% data variables.product.product_name %}". ![Campo para ingresar una descripción para el repositorio](/assets/images/help/repository/create-repository-desc.png)
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

¡Felicitaciones! Has creado correctamente tu primer repositorio y lo has inicializado con un archivo *README*.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. In the command line, navigate to the directory where you would like to create a local clone of your new project.
2. To create a repository for your project, use the `gh repo create` subcommand. Replace `project-name` with the desired name for your repository. If you want your project to belong to an organization instead of to your user account, specify the organization name and project name with `organization-name/project-name`.

   ```shell
   gh repo create <em>project-name</em>
   ```

3. Follow the interactive prompts. To clone the repository locally, confirm yes when asked if you would like to clone the remote project directory. Alternatively, you can specify arguments to skip these prompts. For more information about possible arguments, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_repo_create).

{% endcli %}

## Confirma tu primer cambio

{% include tool-switcher %}

{% webui %}

Una *[confirmación](/articles/github-glossary#commit)* es como una instantánea de todos los archivos de tu proyecto en un momento en particular.

Cuando creaste tu nuevo repositorio, lo inicializaste con un archivo *README*. Los archivos *README* son un lugar ideal para describir tu proyecto en más detalle o agregar documentación, como la forma en que se debe instalar o usar tu proyecto. El contenido de tu archivo *README* se mostrará automáticamente en la página inicial de tu repositorio.

Confirmemos un cambio en el archivo *README*.

1. Es la lista de archivos de tu repositorio, haz clic en ***README.md***. ![Archivo README en la lista de archivos](/assets/images/help/repository/create-commit-open-readme.png)
2. En el contenido del archivo, haz clic en {% octicon "pencil" aria-label="The edit icon" %}.
3. En la pestaña **Editar archivo**, escribe alguna información sobre ti. ![Nuevo contenido en el archivo](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
5. Revisa los cambios que realizaste en el archivo. Verás el contenido nuevo en verde. ![Vista previa del archivo](/assets/images/help/repository/create-commit-review.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

Now that you have created a project, you can start committing changes.

Los archivos *README* son un lugar ideal para describir tu proyecto en más detalle o agregar documentación, como la forma en que se debe instalar o usar tu proyecto. El contenido de tu archivo *README* se mostrará automáticamente en la página inicial de tu repositorio. Follow these steps to add a *README* file.

1. In the command line, navigate to the root directory of your new project. (This directory was created when you ran the `gh repo create` command.)
1. Create a *README* file with some information about the project.

    ```shell
    echo "info about this project" >> README.md
    ```

1. Enter `git status`. You will see that you have an untracked `README.md` file.

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. Stage and commit the file.

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. Push the changes to your branch.

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## Celebrar

¡Felicitaciones! Has creado un repositorio, además de un archivo *README*, y has creado tu primera confirmación en {% data variables.product.product_location %}.

{% webui %}

Ahora puedes clonar un repositorio de {% data variables.product.product_name %} para crear una copia local en tu computadora. Desde tu repositorio local, puedes confirmar y crear una solicitud de cambios para actualizar los cambios en el repositorio de nivel superior. Para obtener más información, consulta las secciones "[Clonar un repositorio](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)" y "[Configurar Git](/articles/set-up-git)".

{% endwebui %}

Puedes encontrar proyectos y repositorios interesantes en {% data variables.product.product_name %} y hacerles cambios creando una bifurcación del repositorio. Para obtener más información, consulta la sección "[Bifurcar un repositorio](/articles/fork-a-repo)".

Cada repositorio en {% data variables.product.product_name %} pertenece a una persona u organización. Puedes interactuar con las personas, repositorios y organizaciones conectándote y siguiéndolos en {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Sé sociable ](/articles/be-social)".

{% data reusables.support.connect-in-the-forum-bootcamp %}
