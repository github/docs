---
title: Guardado provisional de cambios
intro: Puedes guardar tus cambios temporalmente sin confirmarlos en una rama si los acumulas.
versions:
  fpt: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/stashing-changes
ms.openlocfilehash: ef061bec3c60041fc40ab3e8be45d1557ca90219
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117513'
---
## Acerca de los cambios acumulados

Para aplicar tus cambios a tu repositorio, debes guardar los archivos y luego confirmar los cambios en una rama. Si guardaste los cambios que aún no estás listo para confirmar, puedes acumularlos para después. Cuando acumulas cambios, estos se eliminan temporalmente de los archivos y puedes elegir restablecerlos o descartarlos posteriormente. Con {% data variables.product.prodname_desktop %}, solo puedes acumular un conjunto de cambios a la vez. Si utilizas {% data variables.product.prodname_desktop %} para acumular cambios, todos los cambios sin guardar se acumularán. Después de que acumulas cambios en una rama, puedes cambiar de rama con seguridad o hacer otros cambios a tu rama actual.

Si utilizas {% data variables.product.prodname_desktop %} para cambiar de rama mientras guardaste tus cambios, pero no los confirmaste, {% data variables.product.prodname_desktop %} te pedirá que acumules los cambios o que los lleves a otra rama. Para más información, vea "[Administración de ramas](/desktop/contributing-to-projects/managing-branches#switching-between-branches)".

## Guardado provisional de cambios

{% data reusables.desktop.click-changed-files-header %} {% data reusables.desktop.click-stash-all-changes %}

## Restablecer los cambios acumulados

{% data reusables.desktop.navigate-to-stashed-changes %} {% data reusables.desktop.click-stashed-changes %} {% data reusables.desktop.click-restore %}

## Descartar los cambios acumulados

{% data reusables.desktop.navigate-to-stashed-changes %} {% data reusables.desktop.click-stashed-changes %} {% data reusables.desktop.click-discard %}
