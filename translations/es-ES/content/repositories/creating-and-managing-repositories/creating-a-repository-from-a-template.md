---
title: Crear un repositorio desde una plantilla
intro: Puedes generar un nuevo repositorio con la misma estructura de directorio y los mismos archivos que un repositorio existente.
redirect_from:
  - /articles/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create from a template
ms.openlocfilehash: 16d124431426e19cf95c768e8a4cdaa5f4da2e17
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160347'
---
## Acerca de las plantillas de repositorio

Cualquier usuario con permisos de lectura para un repositorio de plantillas puede crear un repositorio a partir de esa plantilla. Para obtener más información, consulte "[Creación de un repositorio de plantillas](/articles/creating-a-template-repository)".

{% tip %}

**Sugerencia**: También puede crear un repositorio a partir de una plantilla con {% data variables.product.prodname_cli %}. Para obtener más información, consulte "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" en la documentación de {% data variables.product.prodname_cli %}.

{% endtip %}

Puedes elegir incluir la estructura de directorio y archivos únicamente desde la rama predeterminada del repositorio plantilla o incluir todas las ramas. Las ramas que se creen a partir de una plantilla tienen historiales sin relación, lo cual significa que no puedes crear solicitudes de cambio ni hacer fusiones entre las ramas.

Crear un repositorio a partir de una plantilla es similar a bifurcar un repositorio, pero existen algunas diferencias importantes:
- Una nueva bifurcación incluye todo el historial de confirmaciones del repositorio padre, mientras que un repositorio creado a partir de una plantilla comienza con una única confirmación.
- Las confirmaciones en una bifurcación no aparecen en tu gráfico de contribuciones, mientras que las confirmaciones en un repositorio creado a partir de una plantilla sí se muestran en tu gráfico de contribuciones.
- Una bifurcación puede ser una forma temporaria de contribuir código a un proyecto existente, mientras que crear un repositorio a partir de una plantilla permite iniciar rápidamente un proyecto nuevo.

Para obtener más información sobre las bifurcaciones, vea "[Acerca de las bifurcaciones](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)".

## Crear un repositorio desde una plantilla

{% data reusables.repositories.navigate-to-repo %}
1. Encima de la lista de archivos, haga clic en **Use this template** (Usar esta plantilla).
{% ifversion fpt or ghec %}
1. Selecciona **Crear un repositorio nuevo**.

   ![Botón Usar esta plantilla](/assets/images/help/repository/use-this-template-button.png)

   {% note %}

   **Nota:** Como alternativa, puedes abrir la plantilla en un codespace y publicar el trabajo en un nuevo repositorio más adelante. Para obtener más información, consulta "[Creación de un codespace a partir de una plantilla](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)".

   {% endnote %} {% endif %} {% data reusables.repositories.owner-drop-down %} {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
1. De manera opcional, para incluir la estructura de directorios y los archivos de todas las ramas en la plantilla, y no únicamente aquellos de la rama predeterminada, seleccione **Include all branches** (Incluir todas las ramas).
  ![Casilla para incluir todas las ramas](/assets/images/help/repository/include-all-branches.png) {% data reusables.repositories.select-marketplace-apps %}
8. Haga clic en **Create repository from template** (Crear repositorio a partir de plantilla).
