---
title: Crear un repositorio
redirect_from:
  - /create-a-repo/
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
intro: 'Para subir tu proyecto a {% data variables.product.product_location %}, deberás crear un repositorio donde alojarlo.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

### Crear un repositorio

{% if currentVersion == "free-pro-team@latest" %}

Puedes almacenar distintos proyectos en los repositorios de {% data variables.product.product_name %}, incluso proyectos de código abierto. Con [proyectos de código abierto](http://opensource.org/about), puedes compartir el código para hacer que el software funcione mejor y sea más confiable. You can use repositories to collaborate with others and track your work. For more information, see "[About repositories](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)."

{% elsif enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

Puedes almacenar varios proyectos en los repositorios de {% data variables.product.product_name %}, incluyendo los proyectos de innersource. Con innersource, puedes compartir el código para hacer software mejor y más confiable. Para obtener más información sobre innersource, consulta la documentación técnica de {% data variables.product.company_short %}"[Una introducción a innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)".

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Nota:** Puedes crear repositorios públicos para un proyecto de código abierto. Cuando crees un repositorio público, asegúrate de incluir un [archivo de licencia](https://choosealicense.com/) que determine cómo deseas que se comparta tu proyecto con otros usuarios. {% data reusables.open-source.open-source-guide-repositories %}{% data reusables.open-source.open-source-learning-lab %}

{% endnote %}

{% endif %}

{% data reusables.repositories.create_new %}
2. Escribe un nombre corto y fácil de recordar para tu repositorio. Por ejemplo: "hola-mundo". ![Campo para ingresar un nombre para el repositorio](/assets/images/help/repository/create-repository-name.png)
3. También puedes agregar una descripción de tu repositorio. Por ejemplo, "Mi primer repositorio en {% data variables.product.product_name %}". ![Campo para ingresar una descripción para el repositorio](/assets/images/help/repository/create-repository-desc.png)
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

¡Felicitaciones! Has creado correctamente tu primer repositorio y lo has inicializado con un archivo *README*.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% tip %}

**Tip**: También puedes crear repositorios utilizando el {% data variables.product.prodname_cli %}. Para obtener más información, consulta "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" en la documentación de {% data variables.product.prodname_cli %}.

{% endtip %}
{% endif %}

### Confirma tu primer cambio

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

### Celebrar

¡Felicitaciones! Has creado un repositorio, además de un archivo *README*, y has creado tu primera confirmación en {% data variables.product.product_location %}. ¿Qué deseas hacer ahora?

- "[Configurar Git](/articles/set-up-git)"
- **Crear un repositorio**
- "[Clone a repository](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)"
- "[Bifurcar un repositorio](/articles/fork-a-repo)"
- "[Socializar](/articles/be-social)"
- {% data reusables.support.connect-in-the-forum-bootcamp %}
