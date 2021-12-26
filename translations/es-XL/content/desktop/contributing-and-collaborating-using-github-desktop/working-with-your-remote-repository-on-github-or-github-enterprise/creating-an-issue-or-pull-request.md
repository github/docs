---
title: Crear un nuevo informe de problemas o solicitud de extracción
intro: Puedes crear una propuesta o solicitud de extracción para proponer y colaborar en los cambios en un repositorio.
permissions: 'Anyone can create an issue in a public repository that has issues enabled. Anyone with read permissions to a repository can create a pull request, but you must have write permissions to create a branch.'
redirect_from:
  - /desktop/contributing-to-projects/creating-an-issue-or-pull-request
  - /desktop/contributing-to-projects/creating-a-pull-request
  - /desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request
versions:
  free-pro-team: '*'
---
### Acerca de los informes de problemas y solicitudes de extracción

Puedes utilizar los informes de problemas para rastrear ideas, errores, tareas, y otros tipos de información que sean importantes para tu proyecto. Puedes crear un informe de problemas en el repositorio de tu proyecto con {% data variables.product.prodname_desktop %}. Para obtener más información acerca de los informes de problemas, consulta la sección "[Acerca de los informes de problemas](/github/managing-your-work-on-github/about-issues)".

Después de que crees una rama y hagas cambios a los archivos en un proyecto, puedes crear una solicitud de extracción. Con una solicitud de extracción, puedes proponer, debatir e iterar entre los cambios antes de fusionarlos en el proyecto. Puedes crear una solicitud de extracción en el repositorio de tu proyecto con {% data variables.product.prodname_desktop %}. Para obtener más información acerca de las solicitudes de extracción, consulta "[Acerca de las solicitudes de extracción](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)".

### Prerrequisitos

Amtes de crear una solicitud de extracción, necesitarás subir los cambios a una rama en {% data variables.product.prodname_dotcom %}.
- Guardar y confirmar cualquier cambio en tu rama local. Para obtener más información, consulta la sección "[Confirmar y revisar cambios hechos a tu proyecto](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)".
- Cambiar tus confirmaciones locales en el repositorio remoto. Para obtener más información, consulta la sección"[Subir cambios a GitHub](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)".
- Publicar tu rama actual en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Administrar ramas](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)".

### Crear una propuesta

{% mac %}

1. En la barra de menú, utiliza el menú desplegable de **Repositorio** y luego da clic en **Crear informe de problemas en {% data variables.product.prodname_dotcom %}**. ![Valor del repositorio en el menú de la rama](/assets/images/help/desktop/create-issue-mac.png)
2. En {% data variables.product.prodname_dotcom %}, da clic en **Empezar** para abrir una plantilla de informe de problemas o da clic en **Abrir un informe de problemas en blanco**. ![Opciones para crear nuevo informe de problemas](/assets/images/help/desktop/create-new-issue.png)

{% endmac %}

{% windows %}

1. En la barra de menú, utiliza el menú desplegable de **Repositorio** y luego da clic en **Crear usuario en {% data variables.product.prodname_dotcom %}**. ![El valor del repositorio en el menú de la rama](/assets/images/help/desktop/create-issue-windows.png)
2. En {% data variables.product.prodname_dotcom %}, da clic en **Empezar** para abrir una plantilla de informe de problemas o da clic en **Abrir un informe de problemas en blanco**. ![Opciones para crear nuevo informe de problemas](/assets/images/help/desktop/create-new-issue.png)

{% endwindows %}

{% note %}

**Nota**: Si no están habilitadas las plantillas de informe de problemas en tu repositorio actual, {% data variables.product.prodname_desktop %}te direccionará a un informe de problemas en blanco en {% data variables.product.prodname_dotcom %}.

{% endnote %}

### Agregar una solicitud de extracción

{% mac %}

1. Cambia a la rama para la cual quieras crear una solicitud de extracción. Para obtener más información, consulta la sección "[Cambiar entre ramas](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)".
2. Haz clic en **Create Pull Request** (Crear solicitud de extracción). {% data variables.product.prodname_desktop %} abrirá tu buscador predeterminado para llevarte a {% data variables.product.prodname_dotcom %}. ![El botón de crear solicitud de extracción](/assets/images/help/desktop/mac-create-pull-request.png)
4. En {% data variables.product.prodname_dotcom %}, confirma que la rama en el menú desplegable de **base:** se aquella en donde quieres fusionar tus cambios. Confirma que la rama en el menú desplegable de **comparar:** es la rama de tema en donde realizaste tus cambios. ![Menús desplegables para elegir la base y comparar ramas](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Cambia a la rama para la cual quieras crear una solicitud de extracción. Para obtener más información, consulta la sección "[Cambiar entre ramas](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)".
2. Haz clic en **Create Pull Request** (Crear solicitud de extracción). {% data variables.product.prodname_desktop %} abrirá tu buscador predeterminado para llevarte a {% data variables.product.prodname_dotcom %}. ![El botón de crear solicitud de extracción](/assets/images/help/desktop/windows-create-pull-request.png)
3. En {% data variables.product.prodname_dotcom %}, confirma que la rama en el menú desplegable de **base:** se aquella en donde quieres fusionar tus cambios. Confirma que la rama en el menú desplegable de **comparar:** es la rama de tema en donde realizaste tus cambios. ![Menús desplegables para elegir la base y comparar ramas](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endwindows %}

### Leer más
- "[Informe de problemas](/github/getting-started-with-github/github-glossary#issue)" en el glosario de {% data variables.product.prodname_dotcom %}
- "[Solicitud de extracción](/github/getting-started-with-github/github-glossary#pull-request)" en el glosario de {% data variables.product.prodname_dotcom %}
- "[Rama base](/github/getting-started-with-github/github-glossary#base-branch)" en el glosario de {% data variables.product.prodname_dotcom %}
- "[Rama de tema](/github/getting-started-with-github/github-glossary#topic-branch)" en el glosario de {% data variables.product.prodname_dotcom %}
