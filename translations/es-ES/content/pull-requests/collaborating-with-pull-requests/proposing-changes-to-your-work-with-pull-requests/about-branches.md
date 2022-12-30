---
title: Acerca de las ramas
intro: Usa una rama para identificar tareas de desarrollo sin afectar otras ramas en el repositorio. Cada repositorio tiene una rama por defecto y puede tener muchas otras ramas. Puedes fusionar una rama en otra rama usando una solicitud de extracción.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
  - /articles/working-with-protected-branches
  - /articles/about-branches
  - /github/collaborating-with-issues-and-pull-requests/about-branches
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 0262a7a8fb0bb8556c3f6062e3fc8512eb9fa1c6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139658'
---
## Acerca de las ramas

Las ramas te permiten desarrollar características, corregir errores, o experimentar con seguridad las ideas nuevas en un área contenida de tu repositorio.

Siempre puedes crear una rama a partir de otra rama existente. Habitualmente, puedes crear una rama nueva desde la rama predeterminada de tu repositorio. Podrás entonces trabajar en esta rama nueva aislado de los cambios que otras personas hacen al repositorio. A la rama que creas para construir una característica se le conoce como rama de característica o rama de tema. Para más información, vea "[Creación y eliminación de ramas dentro del repositorio](/articles/creating-and-deleting-branches-within-your-repository/)".

También puedes usar una rama para publicar un sitio {% data variables.product.prodname_pages %}. Para más información, vea "[Acerca de {% data variables.product.prodname_pages %}](/articles/what-is-github-pages)".

Debes tener acceso de escritura para un repositorio para crear una rama, abrir una solicitud de extracción o eliminar y restablecer ramas en una solicitud de extracción. Para más información, vea "[Permisos de acceso en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/access-permissions-on-github)".

## Acerca de la rama predeterminada

{% data reusables.branches.new-repo-default-branch %} La rama predeterminada es la rama que {% data variables.product.prodname_dotcom %} muestra cuando alguien visita tu repositorio. La rama predeterminada también es la rama inicial que Git verifica localmente cuando alguien clona el repositorio. {% data reusables.branches.default-branch-automatically-base-branch %}

De manera predeterminada, {% data variables.product.product_name %} asigna el nombre `main` a la rama predeterminada en cualquier repositorio nuevo.

{% data reusables.branches.change-default-branch %}

{% data reusables.branches.set-default-branch %}

## Trabajando con las ramas

Cuando esté satisfecho, puede abrir una solicitud de incorporación de cambios para combinar los cambios de la rama actual (la rama *head*) en otra (la rama *base*). Para más información, vea "[Acerca de las solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".

Después de que se ha fusionado o cerrado la solicitud de extracción, puedes borrar la rama de encabezado, dado que ésta ya no se requerirá. Debes tener acceso de escritura en el repositorio para borrar las ramas. No puedes borrar ramas que estén directamente asociadas con solicitudes de extracción abiertas. Para más información, vea "[Eliminación y restauración de ramas en una solicitud de incorporación de cambios](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)".

{% data reusables.pull_requests.retargeted-on-branch-deletion %} Esto se ilustra en los diagramas siguientes.

 Aquí alguien ha creado una rama llamada `feature1` a partir de la rama `main` y, después, ha creado una rama llamada `feature2` a partir de `feature1`. Hay solicitudes de extracción abiertas para ambas ramas. Las flechas indican la rama base actual para cada solicitud de extracción. En este momento, `feature1` es la rama base de `feature2`. Si ahora se combina la solicitud de incorporación de cambios de `feature2`, la rama `feature2` se combinará en `feature1`.

 ![merge-pull-request-button](/assets/images/help/branches/pr-retargeting-diagram1.png)

En el diagrama siguiente, alguien ha combinado la solicitud de incorporación de cambios para `feature1` en la rama `main` y ha eliminado la rama `feature1`. Como resultado, {% data variables.product.prodname_dotcom %} ha redestinado automáticamente la solicitud de incorporación de cambios para `feature2` de forma que ahora su rama base sea `main`.

 ![merge-pull-request-button](/assets/images/help/branches/pr-retargeting-diagram2.png)

Ahora, al combinar la solicitud de incorporación de cambios `feature2`, se combinará en la rama `main`.

## Trabajar con ramas protegidas

Los administradores de un repositorio pueden activar las protecciones en una rama. Si estás trabajando en una rama que está protegida, no podrás eliminar ni hacer un empuje forzado a la rama. Los administradores de un repositorio además pueden activar varios parámetros de rama protegida para implementar varios flujos de trabajo antes de que se pueda fusionar una rama.

{% note %}

**Nota:** Si es administrador de un repositorio, puede combinar las solicitudes de incorporación de cambios en ramas con protecciones de rama habilitadas incluso si la solicitud de incorporación de cambios no cumple con los requisitos, a menos que las protecciones de rama se hayan establecido en "Incluir administradores".

{% endnote %}

Para ver si se puede combinar la solicitud de incorporación de cambios, busque en el cuadro de combinación situado en la parte inferior de la pestaña **Conversación** de la solicitud de incorporación de cambios. Para más información, vea "[Acerca de las ramas protegidas](/articles/about-protected-branches)".

Cuando una rama está protegida:

- No podrás eliminar ni hacer un empuje forzado a la rama.
- Si las verificaciones de estado requeridas están activadas en la rama, no podrás fusionar cambios en la rama hasta que todas las pruebas de integración continua (CI) requeridas estén aprobadas. Para más información, vea "[Acerca de las comprobaciones de estado](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)".
- Si las revisiones de solicitud de extracción requeridas están activadas en la rama, no podrás fusionar cambios en la rama hasta que se hayan cumplido todos los requisitos en la política de revisión de solicitud de extracción. Para más información, vea "[Combinación de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)".
- Si la revisión requerida de un propietario del código está activada en una rama y una solicitud de extracción modifica un código que tiene un propietario, un propietario del código debe aprobar la solicitud de extracción antes de que se pueda fusionar. Para más información, vea "[Acerca de los propietarios del código](/articles/about-code-owners)".
- Si la firma de confirmación requerida está activada en una rama, no podrás subir ninguna confirmación de cambios a la rama que no esté firmada ni verificada. Para más información, vea "[Acerca de la comprobación de firmas de confirmación](/articles/about-commit-signature-verification)" y "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-signed-commits)".
- Si utilizas el editor de conflictos de {% data variables.product.prodname_dotcom %} para arreglar los conflictos de una solicitud de cambios que creaste desde una rama protegida, {% data variables.product.prodname_dotcom %} te ayuda a crear una rama alternativa para la solicitud de cambios para que tu resolución de conflictos se pueda fusionar. Para más información, vea "[Resolución de un conflicto de combinación en {% data variables.product.prodname_dotcom %}](/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github)".

## Información adicional

- "[Acerca de las solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[Rama](/articles/github-glossary/#branch)" en el glosario de {% data variables.product.prodname_dotcom %}
- "[Resumen de las ramas](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)" en la documentación de Git
