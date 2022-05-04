---
title: Crear un repositorio
redirect_from:
  - /create-a-repo
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
intro: 'To put your project up on {% data variables.product.prodname_dotcom %}, you will need to create a repository for it to live in.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

## Crear un repositorio

{% ifversion fpt or ghec %}

Puedes almacenar distintos proyectos en los repositorios de {% data variables.product.prodname_dotcom %}, incluso proyectos de código abierto. With open source projects, you can share code to make better, more reliable software. Puedes utilizar los repositorios para colaborar con otros y rastrear tu trabajo. Para obtener más información, consulta la sección "[Acerca de los repositorios](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)". To learn more about open source projects, visit [OpenSource.org](http://opensource.org/about).

{% elsif ghes or ghae %}

Puedes almacenar varios proyectos en los repositorios de {% data variables.product.product_name %}, incluyendo los proyectos de innersource. Con innersource, puedes compartir el código para hacer software mejor y más confiable. Para obtener más información sobre innersource, consulta la documentación técnica de {% data variables.product.company_short %}"[Una introducción a innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)".

{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Nota:** Puedes crear repositorios públicos para un proyecto de código abierto. Cuando crees un repositorio público, asegúrate de incluir un [archivo de licencia](https://choosealicense.com/) que determine cómo deseas que se comparta tu proyecto con otros usuarios. {% data reusables.open-source.open-source-guide-repositories %}{% data reusables.open-source.open-source-learning-lab %}

{% endnote %}

{% endif %}

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

1. En la línea de comandos, navega al directorio en donde te gustaría crear un clon local de tu proyecto nuevo.
2. Para crear un repositorio de tu proyecto, utiliza el subcomando `gh repo create`. Cuando se te indique, selecciona **Crear un repositorio nuevo en GitHub desde cero** e ingresa el nombre de tu nuevo proyecto. Si quieres que tu proyecto pertenezca a una organización en vez de a tu cuenta personal, especifica el nombre de la organización y del proyecto con `organization-name/project-name`.
3. Sigue los mensajes interactivos. Para clonar el repositorio localmente, confirma que sí cuando se te pregunte si quisieras clonar el directorio remoto del proyecto.
4. Como alternativa, para saltar las indicaciones, proporciona el nombre del repositorio y un marcador de visibilidad (`--public`, `--private` o `--internal`). Por ejemplo, `gh repo create project-name --public`. Para clonar el repositorio localmente, pasa el marcador `--clone`.  Para obtener más información sobre los argumentos posibles, consulta el [manual del CLI de GitHub](https://cli.github.com/manual/gh_repo_create).

{% endcli %}

## Confirma tu primer cambio

{% webui %}

Una *[confirmación](/articles/github-glossary#commit)* es como una instantánea de todos los archivos de tu proyecto en un momento en particular.

Cuando creaste tu nuevo repositorio, lo inicializaste con un archivo *README*. Los archivos *README* son un lugar ideal para describir tu proyecto en más detalle o agregar documentación, como la forma en que se debe instalar o usar tu proyecto. El contenido de tu archivo *README* se mostrará automáticamente en la página inicial de tu repositorio.

Confirmemos un cambio en el archivo *README*.

1. Es la lista de archivos de tu repositorio, haz clic en ***README.md***. ![Archivo README en la lista de archivos](/assets/images/help/repository/create-commit-open-readme.png)
2. En el contenido del archivo, haz clic en {% octicon "pencil" aria-label="The edit icon" %}.
3. En la pestaña **Editar archivo**, escribe alguna información sobre ti. ![Nuevo contenido en el archivo](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
5. Revisa los cambios que realizaste en el archivo. You will see the new content in green. ![Vista previa del archivo](/assets/images/help/repository/create-commit-review.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

Ahora que creaste un proyecto, puedes comenzar a confirmar cambios.

Los archivos *README* son un lugar ideal para describir tu proyecto en más detalle o agregar documentación, como la forma en que se debe instalar o usar tu proyecto. El contenido de tu archivo *README* se mostrará automáticamente en la página inicial de tu repositorio. Sigue estos pasos para agregar un archivo *README*.

1. En la línea de comandos, navega al directorio raíz de tu proyecto nuevo. (Este directorio se creó cuando ejecutas el comando `gh repo create`).
1. Crea un archivo *README* con algo de información sobre el proyecto.

    ```shell
    echo "info about this project" >> README.md
    ```

1. Ingresa `git status`. Verás que tienes un archivo `README.md` sin rastrear.

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. Prueba y confirma el archivo.

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. Sube los cambios a tu rama.

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## Pasos siguientes

Has creado un repositorio, además de un archivo *README*, y has creado tu primera confirmación en {% data variables.product.product_location %}.

{% webui %}

* Ahora puedes clonar un repositorio de {% data variables.product.prodname_dotcom %} para crear una copia local en tu computadora. Desde tu repositorio local, puedes confirmar y crear una solicitud de cambios para actualizar los cambios en el repositorio de nivel superior. Para obtener más información, consulta las secciones "[Clonar un repositorio](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)" y "[Configurar Git](/articles/set-up-git)".

{% endwebui %}

* Puedes encontrar proyectos y repositorios interesantes en {% data variables.product.prodname_dotcom %} y hacerles cambios creando una bifurcación del repositorio. {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
