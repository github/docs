---
title: Crear un repositorio nuevo
intro: Puedes crear un repositorio nuevo en tu cuenta personal o la cuenta de cualquier organización en la que tengas los permisos suficientes.
redirect_from:
  - /creating-a-repo
  - /articles/creating-a-repository-in-an-organization
  - /articles/creating-a-new-organization-repository
  - /articles/creating-a-new-repository
  - /articles/creating-an-internal-repository
  - /github/setting-up-and-managing-your-enterprise-account/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-new-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: c399ac1a0881fe593087dada707296b226a5d9d8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136921'
---
{% tip %}

**Sugerencia:** Los propietarios pueden restringir los permisos de creación del repositorio de una organización. Para obtener más información, consulte "[Restricción de la creación de repositorios en la organización](/articles/restricting-repository-creation-in-your-organization)".

{% endtip %}

{% tip %}

**Sugerencia**: También puede crear un repositorio con una plantilla de la {% data variables.product.prodname_cli %}. Para obtener más información, consulte "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" en la documentación de {% data variables.product.prodname_cli %}.

{% endtip %}

{% data reusables.repositories.create_new %}
2. Otra opción para crear un repositorio con la estructura de directorios y los archivos de un repositorio existente es usar el menú desplegable **Choose a template** y seleccionar un repositorio de plantilla. Verás repositorios de plantillas que te pertenecen a ti y a las organizaciones de las que eres miembro o bien repositorios de plantillas que has usado anteriormente. Para obtener más información, consulte "[Creación de un repositorio a partir de una plantilla](/articles/creating-a-repository-from-a-template)".
  ![Menú desplegable Plantilla](/assets/images/help/repository/template-drop-down.png)
3. Si decidió elegir una plantilla, también puede incluir la estructura de directorios y los archivos de todas las ramas en la plantilla, y no únicamente aquellos de la rama predeterminada, seleccione **Include all branches**.
    ![Casilla Incluir todas las ramas](/assets/images/help/repository/include-all-branches.png)
3. En el menú desplegable de Propietario, selecciona la cuenta en la cual quieres crear el repositorio.
   ![Menú desplegable de propietario](/assets/images/help/repository/create-repository-owner.png) {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
6. Si no estás utilizando una plantilla, hay varios elementos opcionales que puedes pre-cargar en tu repositorio. Si estás importando un repositorio existente a {% data variables.product.product_name %}, no elijas ninguna de estas opciones, ya que producirás un conflicto de fusión. Puedes agregar o crear nuevos archivos usando la interfaz de usuario o elegir agregar nuevos archivos usando luego la línea de comando. Para obtener más información, consulte "[Importación de un repositorio de Git mediante la línea de comandos](/articles/importing-a-git-repository-using-the-command-line/)", "[Adición de un archivo a un repositorio](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)" y "[Abordar conflictos de fusión](/articles/addressing-merge-conflicts/)".
    - Puedes crear un README, que es un documento que describe tu proyecto. Para más información, vea "[Acerca de los archivos Léame](/articles/about-readmes/)".
    - Puede crear un archivo *.gitignore*, que es un conjunto de reglas de omisión. Para obtener más información, consulte "[Ignorar archivos](/github/getting-started-with-github/ignoring-files)".{% ifversion fpt or ghec %}
    - Puedes elegir agregar una licencia de software a tu proyecto. Para obtener más información, consulte "[Generar licencia para un repositorio](/articles/licensing-a-repository)".{% endif %} {% data reusables.repositories.select-marketplace-apps %} {% data reusables.repositories.create-repo %} {% ifversion fpt or ghec %}
9. En la parte inferior de la página de Configuración rápida resultante, en "Importar el código del repositorio anterior", puedes elegir importar un proyecto en tu nuevo repositorio. Para ello, haga clic en **Import code**.
{% endif %}

## Información adicional

- "[Administración del acceso a los repositorios de la organización](/articles/managing-access-to-your-organization-s-repositories)"
- [Guías de código abierto](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
