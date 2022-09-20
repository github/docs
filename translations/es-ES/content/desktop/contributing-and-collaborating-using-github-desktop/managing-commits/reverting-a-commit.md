---
title: Revertir una confirmación
intro: Puedes revertir una confirmación específica para eliminar los cambios de tu rama.
redirect_from:
  - /desktop/contributing-to-projects/reverting-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/reverting-a-commit
versions:
  fpt: '*'
ms.openlocfilehash: f6cf6f120beff99bdb1c8bfd7868bb157e68d5dd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092300'
---
Cuando reviertes la confirmación anterior, la reversión también es una confirmación. La confirmación original también permanece en el historial del repositorio.

{% tip %}

**Sugerencia**: Cuando revierte varias confirmaciones, es mejor revertirlas en orden, de la más nueva a la más antigua. Si reviertes confirmaciones en un orden diferente, es posible que se produzcan conflictos de fusión.

{% endtip %}

{% mac %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.revert-commit %} ![La opción Revert (Revertir) sobre la vista diferente](/assets/images/help/desktop/commit-revert-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.revert-commit %} ![La opción Revert (Revertir) sobre la vista diferente](/assets/images/help/desktop/commit-revert-win.png)

{% endwindows %}
