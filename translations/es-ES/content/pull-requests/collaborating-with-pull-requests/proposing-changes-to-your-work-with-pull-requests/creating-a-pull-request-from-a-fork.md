---
title: Crear una solicitud de extracción desde una bifurcación
intro: Puedes crear una solicitud de extracción para proponer cambios que has hecho a una bifurcación de un repositorio ascendente.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
  - /articles/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
permissions: 'Anyone with write access to a repository can create a pull request from a user-owned fork. {% data reusables.enterprise-accounts.emu-permission-propose %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create a PR from a fork
ms.openlocfilehash: 5a4aceef12c214d157dbdac7bf838bbe80e81731
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883291'
---
Si tu solicitud de extracción compara tu rama de tema con una rama del repositorio ascendente como la rama base, entonces tu rama de tema también se llamará rama de comparación de la solicitud de extracción. Para obtener más información sobre las ramas de solicitudes de incorporación de cambios, con ejemplos incluidos, consulte "[Creación de una solicitud de incorporación de cambios](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository)".

{% data reusables.pull_requests.perms-to-open-pull-request %}

1. Navega al repositorio original de donde creaste tu bifurcación.
{% data reusables.repositories.new-pull-request %}
3. En la página Compare, haga clic en **compare across forks**.
  ![Vínculo compare across forks](/assets/images/help/pull_requests/compare-across-forks-link.png)
4. En el menú desplegable de la "rama base", selecciona la rama del repositorio ascendente en donde quieras fusionar los cambios.
  ![Menús desplegables para elegir la bifurcación y la rama base](/assets/images/help/pull_requests/choose-base-fork-and-branch.png)
5. En el menú desplegable de la "bifurcación principal", selecciona tu bifurcación. Posteriormente, utiliza el menú desplegable de "comparar rama" para seleccionar aquella en la que realizaste los cambios.
  ![Menús desplegables para elegir la bifurcación principal y comparar la rama](/assets/images/help/pull_requests/choose-head-fork-compare-branch.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits.png) {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

## Información adicional

- "[Trabajar con bifurcaciones](/articles/working-with-forks)"
- "[Permitir cambios para una rama de solicitud de incorporación de cambios creada desde una bifurcación](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
