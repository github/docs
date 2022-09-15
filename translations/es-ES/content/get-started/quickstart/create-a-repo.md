---
title: Creación de un repositorio
redirect_from:
  - /create-a-repo
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
intro: 'Para hospedar el proyecto en {% data variables.product.prodname_dotcom %}, deberás crear un repositorio donde resida.'
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
ms.openlocfilehash: 66db99def4463929236197fdc4903f82bfc1cbe2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146682297'
---
## Creación de un repositorio

{% ifversion fpt or ghec %}

Puede almacenar distintos proyectos en repositorios de {% data variables.product.prodname_dotcom %}, incluidos proyectos de código abierto. Con los proyectos de código abierto, puedes compartir el código para mejorar el software y hacerlo más fiable. Puedes utilizar los repositorios para colaborar con otros y rastrear tu trabajo. Para más información, vea "[Acerca de los repositorios](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)". Para obtener más información acerca de los proyectos de código abierto, visita [OpenSource.org](https://opensource.org/about).

{% elsif ghes or ghae %}

Puedes almacenar varios proyectos en los repositorios de {% data variables.product.product_name %}, incluyendo los proyectos de innersource. Con innersource, puedes compartir el código para hacer software mejor y más confiable. Para obtener más información sobre innersource, vea el artículo "[Introducción a innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)" de {% data variables.product.company_short %}.

{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Notas:** 
- Puedes crear repositorios públicos para un proyecto de código abierto. A la hora de crear el repositorio público, asegúrese de incluir un [archivo de licencia](https://choosealicense.com/) que determine cómo quiere que se comparta el proyecto con otros usuarios. {% data reusables.open-source.open-source-guide-repositories %} 
- {% data reusables.open-source.open-source-learning %} 
- También puedes agregar archivos de estado de la comunidad a los repositorios para establecer instrucciones sobre cómo contribuir, velar por la seguridad de los repositorios y mucho más. Para más información, vea "[Creación de un archivo de estado de la comunidad predeterminado](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)". 

{% endnote %}

{% endif %}

{% webui %}

{% data reusables.repositories.create_new %}
2. Escriba un nombre corto y fácil de recordar para el repositorio. Por ejemplo: "hola-mundo".
  ![Campo para proporcionar un nombre para el repositorio](/assets/images/help/repository/create-repository-name.png)
3. Opcionalmente, puede agregar una descripción del repositorio. Por ejemplo, "Mi primer repositorio en {% data variables.product.product_name %}".
  ![Campo para escribir una descripción del repositorio](/assets/images/help/repository/create-repository-desc.png) {% data reusables.repositories.choose-repo-visibility %} {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}

Felicidades. Ha creado correctamente su primer repositorio y lo has inicializado con un archivo *Léame*.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. En la línea de comandos, navega al directorio en donde te gustaría crear un clon local de tu proyecto nuevo.
2. Para crear un repositorio para el proyecto, use el subcomando `gh repo create`. Cuando se le solicite, seleccione **Create a new repository on GitHub from scratch** (Crear un nuevo repositorio en GitHub desde cero) y escriba el nombre del nuevo proyecto. Si quieres que tu proyecto pertenezca a una organización en lugar de a tu cuenta personal, especifica el nombre de la organización y del proyecto con `organization-name/project-name`. 
3. Sigue los mensajes interactivos. Para clonar el repositorio localmente, confirma que sí cuando se te pregunte si quisieras clonar el directorio remoto del proyecto.  
4. Como alternativa, para omitir los mensajes interactivos, proporcione el nombre del repositorio y una marca de visibilidad (`--public`, `--private` o `--internal`). Por ejemplo: `gh repo create project-name --public`. Para clonar el repositorio localmente, pase la marca `--clone`.  Para obtener más información acerca de los posibles argumentos, vea el [manual de la CLI de GitHub](https://cli.github.com/manual/gh_repo_create).

{% endcli %}

## Confirma tu primer cambio

{% webui %}

Una *[confirmación](/articles/github-glossary#commit)* es como una instantánea de todos los archivos del proyecto en un momento dado.

Una vez creado el repositorio, se inicializa con un archivo *Léame*. Los archivos *Léame* son un buen lugar para describir el proyecto con más detalle o bien agregar documentación, como instrucciones de instalación o uso del proyecto. El contenido del archivo *Léame* se muestra automáticamente en la página principal del repositorio.

Vamos a confirmar un cambio en el archivo *Léame*.

1. En la lista de archivos del repositorio, haga clic en ***README.md***.
  ![Archivo Léame en la lista de archivos](/assets/images/help/repository/create-commit-open-readme.png)
2. Encima del contenido del archivo, haga clic en {% octicon "pencil" aria-label="The edit icon" %}.
3. En la pestaña **Edit file** (Editar archivo), escriba información sobre usted mismo.
  ![Nuevo contenido en el archivo](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %}
5. Revisa los cambios que realizaste en el archivo. Verás el contenido nuevo en verde.
  ![Vista previa del archivo](/assets/images/help/repository/create-commit-review.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

Ahora que creaste un proyecto, puedes comenzar a confirmar cambios.

Los archivos *Léame* son un buen lugar para describir el proyecto con más detalle o bien agregar documentación, como instrucciones de instalación o uso del proyecto. El contenido del archivo *Léame* se muestra automáticamente en la página principal del repositorio. Siga estos pasos para agregar un archivo *Léame*.

1. En la línea de comandos, navega al directorio raíz de tu proyecto nuevo. (Este directorio se ha creado cuando ha ejecutado el comando `gh repo create`).
1. Cree un archivo *Léame* con cierta información sobre el proyecto.

    ```shell
    echo "info about this project" >> README.md
    ```

1. Escriba `git status`. Verá que tiene un archivo `README.md` sin seguimiento.

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

Ha creado un repositorio, incluido un archivo *Léame*, y su primera confirmación en {% data variables.product.product_location %}.

{% webui %}

* Ahora puede clonar un repositorio de {% data variables.product.prodname_dotcom %} para crear una copia local en su equipo. Desde tu repositorio local, puedes confirmar y crear una solicitud de cambios para actualizar los cambios en el repositorio de nivel superior. Para más información, vea "[Clonación de un repositorio](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)" y "[Configuración de Git](/articles/set-up-git)".

{% endwebui %}

* Puede encontrar proyectos y repositorios interesantes en {% data variables.product.prodname_dotcom %} y realizar cambios en ellos mediante la creación de una bifurcación del repositorio. {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
