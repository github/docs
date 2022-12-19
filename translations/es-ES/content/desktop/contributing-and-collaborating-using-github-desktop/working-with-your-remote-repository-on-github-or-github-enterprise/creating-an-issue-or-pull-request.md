---
title: Crear un nuevo informe de problemas o solicitud de extracción
intro: Puedes crear una propuesta o solicitud de extracción para proponer y colaborar en los cambios en un repositorio.
permissions: 'Anyone can create an issue in a public repository that has issues enabled. Anyone with read permissions to a repository can create a pull request, but you must have write permissions to create a branch.'
redirect_from:
  - /desktop/contributing-to-projects/creating-an-issue-or-pull-request
  - /desktop/contributing-to-projects/creating-a-pull-request
  - /desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request
versions:
  fpt: '*'
shortTitle: Create an issue or PR
ms.openlocfilehash: 5430c8f11d08efc3f21cf1c62f470f38dcc2f257
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117481'
---
## Acerca de los informes de problemas y solicitudes de extracción

Puedes utilizar los informes de problemas para rastrear ideas, errores, tareas, y otros tipos de información que sean importantes para tu proyecto. Puedes crear un informe de problemas en el repositorio de tu proyecto con {% data variables.product.prodname_desktop %}. Para más información sobre las incidencias, vea "[Acerca de las incidencias](/github/managing-your-work-on-github/about-issues)".

Después de que crees una rama y hagas cambios a los archivos en un proyecto, puedes crear una solicitud de extracción. Con una solicitud de extracción, puedes proponer, debatir e iterar entre los cambios antes de fusionarlos en el proyecto. Puedes crear una solicitud de extracción en el repositorio de tu proyecto con {% data variables.product.prodname_desktop %}. Para obtener más información sobre las solicitudes de incorporación de cambios, consulta "[Acerca de las solicitudes de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)".

## Prerrequisitos

Amtes de crear una solicitud de extracción, necesitarás subir los cambios a una rama en {% data variables.product.prodname_dotcom %}.
- Guardar y confirmar cualquier cambio en tu rama local. Para obtener más información, consulta "[Confirmación y revisión de los cambios en el proyecto](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)".
- Cambiar tus confirmaciones locales en el repositorio remoto. Para obtener más información, consulta "[Inserción de cambios en GitHub](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)".
- Publicar tu rama actual en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Administración de ramas](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)".

## Crear una propuesta

{% mac %}

1. En la barra de menús, usa el menú desplegable **Repositorio** y haz clic en **Crear propuesta sobre {% data variables.product.prodname_dotcom %}** .
    ![Valor del repositorio en el menú de la rama](/assets/images/help/desktop/create-issue-mac.png)
2. En {% data variables.product.prodname_dotcom %}, haz clic en **Empezar** para abrir una plantilla de propuesta o haz clic en **Abrir una propuesta en blanco**.
    ![Opciones para crear una nueva propuesta](/assets/images/help/desktop/create-new-issue.png)

{% endmac %}

{% windows %}

1. En la barra de menús, usa el menú desplegable **Repositorio** y, a continuación, haz clic en **Crear una propuesta sobre {% data variables.product.prodname_dotcom %}** .
    ![El valor del repositorio en el menú de la rama](/assets/images/help/desktop/create-issue-windows.png)
2. En {% data variables.product.prodname_dotcom %}, haz clic en **Empezar** para abrir una plantilla de propuesta o haz clic en **Abrir una propuesta en blanco**.
    ![Opciones para crear una nueva propuesta](/assets/images/help/desktop/create-new-issue.png)

{% endwindows %}

{% note %}

**Nota**: Si no están habilitadas las plantillas de propuesta en tu repositorio actual, {% data variables.product.prodname_desktop %}te direccionará a una propuesta en blanco en {% data variables.product.prodname_dotcom %}.

{% endnote %}

## Crear una solicitud de incorporación de cambios

{% mac %}

1. Cambia a la rama para la cual quieras crear una solicitud de extracción. Para más información, vea "[Cambio de ramas](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)".
2. Haga clic en **Crear solicitud de incorporación de cambios**. {% data variables.product.prodname_desktop %} abrirá tu buscador predeterminado para llevarte a {% data variables.product.prodname_dotcom %}.
  ![El botón Crear solicitud de incorporación de cambios](/assets/images/help/desktop/mac-create-pull-request.png)
4. En {% data variables.product.prodname_dotcom %}, confirme que la rama en el menú desplegable **base:** es en la que quiere combinar los cambios. Confirme que la rama del menú desplegable **compare:** es la rama de temas en la que ha realizado los cambios.
  ![Menús desplegables para elegir la ramas base y de comparación](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Cambia a la rama para la cual quieras crear una solicitud de extracción. Para más información, vea "[Cambio de ramas](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)".
2. Haga clic en **Crear solicitud de incorporación de cambios**. {% data variables.product.prodname_desktop %} abrirá tu buscador predeterminado para llevarte a {% data variables.product.prodname_dotcom %}.
  ![El botón Crear solicitud de incorporación de cambios](/assets/images/help/desktop/windows-create-pull-request.png)
3. En {% data variables.product.prodname_dotcom %}, confirme que la rama en el menú desplegable **base:** es en la que quiere combinar los cambios. Confirme que la rama del menú desplegable **compare:** es la rama de temas en la que ha realizado los cambios.
  ![Menús desplegables para elegir la ramas base y de comparación](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endwindows %}

## Lecturas adicionales
- "[Propuesta](/github/getting-started-with-github/github-glossary#issue)" en el glosario de {% data variables.product.prodname_dotcom %}
- "[Solicitud de incorporación de cambios](/github/getting-started-with-github/github-glossary#pull-request)" en el glosario de {% data variables.product.prodname_dotcom %}
- "[Rama base](/github/getting-started-with-github/github-glossary#base-branch)" en el glosario de {% data variables.product.prodname_dotcom %}
- "[Rama puntual](/github/getting-started-with-github/github-glossary#topic-branch)" en el glosario de {% data variables.product.prodname_dotcom %}
