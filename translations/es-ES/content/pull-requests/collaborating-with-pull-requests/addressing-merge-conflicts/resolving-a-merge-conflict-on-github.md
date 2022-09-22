---
title: Resolver un conflicto de fusión en GitHub
intro: 'Puedes resolver conflictos de fusión simples que impliquen realizar cambios de líneas en GitHub, usando el editor de conflictos.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
  - /articles/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github
  - /github/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts
ms.openlocfilehash: 48613d8c8974d14a1de70e0dee5a7f4819d37fd9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145137837'
---
Solo puedes resolver los conflictos de fusión en {% data variables.product.product_name %} que hayan sido provocados por realizar cambios de líneas, como cuando las personas hacen cambios diferentes en la misma línea del mismo archivo en ramas diferentes de tu repositorio de Git. Para todos los demás tipos de conflictos de fusión, debes resolver el conflicto de manera local desde la línea de comando. Para más información, vea "[Resolución de un conflicto de combinación mediante la línea de comandos](/articles/resolving-a-merge-conflict-using-the-command-line/)".

{% ifversion ghes or ghae %} Si un administrador del sitio deshabilita el editor de conflictos de combinación para las solicitudes de incorporación de cambios entre repositorios, no podrá usarlo en {% data variables.product.product_name %} y tendrá que resolver los conflictos de combinación desde la línea de comandos. Por ejemplo, si el editor de conflictos de fusión está inhabilitado, no podrás utilizarlo en una solicitud de extracción entre una bifurcación y el repositorio ascendente.
{% endif %}

{% warning %}

**Advertencia:** Al resolver un conflicto de combinación en {% data variables.product.product_name %}, toda la [rama base](/github/getting-started-with-github/github-glossary#base-branch) de la solicitud de incorporación de cambios se combina en la [rama principal](/github/getting-started-with-github/github-glossary#head-branch). Asegúrate que realmente quieras hacer una confirmación para esta rama. Si la rama de encabezado es la predeterminada para tu repositorio, se te dará la opción de crear una rama nueva para que funcione como rama de encabezado para tu solicitud de extracción. Si la rama principal está protegida, no podrás fusionar tu resolución de conflictos con ella, así que se te pedirá crear una nueva rama principal. Para más información, vea "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)".

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
1. En la lista de "Pull Requests" (Solicitudes de extracción), haz clic en la solicitud de extracción con un conflicto de fusión que quieres resolver.
1. Junto a la parte inferior de la solicitud de incorporación de cambios, haga clic en **Resolver conflictos**.
![Botón para resolver conflictos de fusión mediante combinación](/assets/images/help/pull_requests/resolve-merge-conflicts-button.png)

 {% tip %}

 **Sugerencia:** Si el botón **Resolver conflictos** está desactivado, el conflicto de fusión mediante combinación de la solicitud de incorporación de cambios es demasiado complejo para resolverlo en {% data variables.product.product_name %}{% ifversion ghes or ghae %} o el administrador del sitio ha deshabilitado el editor de conflictos para las solicitudes de incorporación de cambios entre repositorios{% endif %}. Debes resolver el conflicto de fusión utilizando un cliente de Git alterno, o utilizando Git en la línea de comandos. Para más información, vea "[Resolución de un conflicto de combinación mediante la línea de comandos](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)".

 {% endtip %} {% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %} ![Visualización del ejemplo de conflicto de combinación con marcadores de conflicto](/assets/images/help/pull_requests/view-merge-conflict-with-markers.png)
1. Si tienes más de un conflicto de fusión en tu archivo, desplázate hacia abajo hasta el siguiente conjunto de marcadores de conflicto y repite los pasos cuatro y cinco para resolver el conflicto de fusión.
1. Una vez que haya resuelto todos los conflictos en el archivo, haga clic en **Marcar como resueltos**.
 ![Clic en el botón de marcar como resuelto](/assets/images/help/pull_requests/mark-as-resolved-button.png)
1. Si tienes más de un archivo con conflictos, selecciona el siguiente archivo que quieres editar del lado izquierdo de la página en "conflicting files" (archivos conflictivos) y repite los pasos cuatro a siete hasta que hayas resuelto todos los conflictos de fusión de tu solicitud de extracción.
 ![Selección del siguiente archivo en conflicto, si corresponde](/assets/images/help/pull_requests/resolve-merge-conflict-select-conflicting-file.png)
1. Una vez que haya resuelto todos los conflictos de fusión mediante combinación, haga clic en **Confirmar combinación**. Esto fusiona toda la rama de base con tu rama de encabezado.
 ![Botón para resolver conflictos de fusión mediante combinación](/assets/images/help/pull_requests/merge-conflict-commit-changes.png)
1. Si se te solicita, revisa la rama para la que vas a confirmar.

   Si la rama principal es la rama predeterminada del repositorio, puedes escoger ya sea actualizar esta rama con los cambios que hiciste para resolver el conflicto, o crear una rama nueva y utilizarla como la rama principal de la solicitud de extracción.
 ![Mensaje para revisar la rama que se actualizará](/assets/images/help/pull_requests/conflict-resolution-merge-dialog-box.png)

   Si eliges crear una rama nueva, ingresa un nombre para ésta.

   Si la rama principal de tu solicitud de extracción está protegida, debes crear una rama nueva. No tendrás la opción para actualizar la rama protegida.

   Haga clic en **Crear rama y actualizar mi solicitud de incorporación de cambios** o **Entiendo, continuar la actualización de _RAMA_**. El texto del botón corresponde a la acción que estás realizando.
1. Para fusionar mediante combinación la solicitud de incorporación de cambios, haga clic en **Combinar solicitud de incorporación de cambios**. Para más información sobre otras opciones de combinación de solicitudes de incorporación de cambios, vea "[Fusión mediante combinación de una solicitud de incorporación de cambios](/articles/merging-a-pull-request/)".

## Información adicional

- "[Acerca de las combinaciones de solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
