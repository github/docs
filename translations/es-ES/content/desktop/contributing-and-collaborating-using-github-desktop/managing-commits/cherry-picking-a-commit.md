---
title: Escoger una confirmación minuciosamente
intro: Puedes escoger una confirmación específica en una rama y copiarla a otra rama.
versions:
  fpt: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/cherry-picking-a-commit
ms.openlocfilehash: 6dad1615b9a8c224c3648be60759b5bb6ccf0d62
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092304'
---
## Acerca de la selección minuciosa de Git

Puedes elegir minuciosamente una confirmación en una rama para crear una copia de la confirmación con los mismos cambios en otra rama. Si tu confirmación cambia a la rama incorrecta o quiere hacer los mismos cambios en otra rama, puedes elegir minuciosamente la confirmación para aplicar los cambios en otra rama. También puedes utilizar la selección minuciosa para aplicar cambios específicos antes de que estés listo para crear o fusionar la solicitud de cambios,. Por ejemplo, si confirmas una corrección de error en una rama de característica, puedes seleccionar minuciosamente la confirmación con el arreglo del error en otras ramas de tu proyecto.

También puedes usar la selección minuciosa para colaborar con un equipo. Algunos proyectos incorporan colaboraciones por confirmaciones de selección minuciosa. Para más información, vea [Git distribuido: mantenimiento de un proyecto](https://git-scm.com/book/en/v2/Distributed-Git-Maintaining-a-Project#_rebase_cherry_pick) en la documentación de Git.

## Escoger una confirmación minuciosamente

{% data reusables.desktop.current-branch-menu %}
2. En la lista de ramas, haz clic en aquella que tiene la confirmación que quieres seleccionar minuciosamente.
{% data reusables.desktop.history-tab %}
4. Arrastre la confirmación que quiera seleccionar de forma exclusiva al menú {% octicon "git-branch" aria-label="The branch icon" %} **Rama actual** y colóquela sobre la rama en la que quiere copiarla.
  ![Arrastre de una confirmación a otra rama en el menú Rama actual](/assets/images/help/desktop/cherry-picking.png)

## Información adicional
- [git-cherry-pick](https://git-scm.com/docs/git-cherry-pick) en la documentación de Git
