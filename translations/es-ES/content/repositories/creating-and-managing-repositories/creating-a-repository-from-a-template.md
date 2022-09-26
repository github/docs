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
ms.openlocfilehash: 8f2ba1bcda417f3202e0c43c693afe50434130ec
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136920'
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
2. Encima de la lista de archivos, haga clic en **Use this template** (Usar esta plantilla).
  ![Botón Usar esta plantilla](/assets/images/help/repository/use-this-template-button.png) {% data reusables.repositories.owner-drop-down %} {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
6. De manera opcional, para incluir la estructura de directorios y los archivos de todas las ramas en la plantilla, y no únicamente aquellos de la rama predeterminada, seleccione **Include all branches** (Incluir todas las ramas).
  ![Casilla para incluir todas las ramas](/assets/images/help/repository/include-all-branches.png) {% data reusables.repositories.select-marketplace-apps %}
8. Haga clic en **Create repository from template** (Crear repositorio a partir de plantilla).
