---
title: Diferencias entre las vistas de las confirmaciones
intro: Puedes observar las diferencias en el historial de confirmaciones dependiendo del método de visualización que se haya elegido.
redirect_from:
  - /articles/differences-between-commit-views
  - /github/committing-changes-to-your-project/differences-between-commit-views
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/differences-between-commit-views
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Commit views
ms.openlocfilehash: 2b5d59d385f815bd09c853e398d372bb4c861650
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145137094'
---
En {% data variables.product.product_name %}, puedes ver el historial de confirmaciones de un repositorio al:

- Navega directamente a [la página de confirmaciones](https://github.com/mozilla/rust/commits/master) de un repositorio
- Hace clic en un archivo y después en **Historial** para obtener [el historial de confirmaciones de un archivo concreto](https://github.com/mozilla/rust/commits/master/README.md).

En algunos casos estas dos vistas de confirmación pueden mostrar información _diferente_. El historial de un archivo único puede omitir confirmaciones que se encuentran en el historial de confirmaciones del repositorio.

Git tiene diferentes maneras de mostrar el historial de un repositorio. Cuando Git muestra el historial de un solo archivo, lo simplifica y omite las confirmaciones que no han modificado el archivo. En lugar de examinar todas las confirmaciones para decidir si han afectado o no al archivo, Git omitirá una rama completa si, al combinarla, no ha afectado al contenido final del archivo. No se muestra ninguna confirmación en la rama que haya afectado el archivo.

Para el historial de confirmaciones de un archivo, {% data variables.product.product_name %} sigue explícitamente esta estrategia simple. Simplifica el historial al eliminar las confirmaciones que en realidad no contribuyen al resultado final. Por ejemplo, si una rama lateral ha realizado un cambio y luego lo ha revertido, esa confirmación no se mostrará en el historial de la rama. Esto permite que la revisión de las ramas sea más eficiente, dado que solo ves las confirmaciones que afectan al archivo.

Es posible que esta vista truncada no contenga la información que busca. Si quiere ver el historial completo, {% data variables.product.product_name %} proporciona una vista con más información sobre la página de confirmaciones de un repositorio.

Para más información sobre cómo Git considera el historial de confirmaciones, vea [la sección "Simplificación del historial"](https://git-scm.com/docs/git-log#_history_simplification) del artículo de ayuda `git log`.

## Información adicional

- "[Firma de confirmaciones](/articles/signing-commits)"
- "[Búsqueda de confirmaciones](/search-github/searching-on-github/searching-commits)"
