---
title: Сокрытие изменений
intro: 'Вы можете временно сохранить изменения, не фиксируя их в ветви; для этого можно спрятать изменения.'
versions:
  fpt: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/stashing-changes
ms.openlocfilehash: ef061bec3c60041fc40ab3e8be45d1557ca90219
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117512'
---
## Сведения о скрытых изменениях

Чтобы применить изменения к репозиторию, необходимо сохранить файлы, а затем зафиксировать изменения в ветви. Если вы сохранили изменения, которые еще не готовы к фиксации, вы можете сохранить их позднее. При скрытии изменений они временно удаляются из файлов, и вы можете восстановить или отменить их позже. Вы можете скрыть только один набор изменений за раз с помощью {% data variables.product.prodname_desktop %}. При использовании {% data variables.product.prodname_desktop %} для скрытия изменений все несохраненные изменения будут скрыты. После скрытия изменений в ветви можно безопасно изменить ветви или внести другие изменения в текущую ветвь.

При использовании {% data variables.product.prodname_desktop %} для переключения ветвей при том, что вы сохранили, но не зафиксировали изменения, {% data variables.product.prodname_desktop %} предложит скрыть изменения или перенести их в другую ветвь. Дополнительные сведения см. в статье [Управление ветвями](/desktop/contributing-to-projects/managing-branches#switching-between-branches).

## Сокрытие изменений

{% data reusables.desktop.click-changed-files-header %} {% data reusables.desktop.click-stash-all-changes %}

## Восстановление скрытых изменений

{% data reusables.desktop.navigate-to-stashed-changes %} {% data reusables.desktop.click-stashed-changes %} {% data reusables.desktop.click-restore %}

## Отмена скрытых изменений

{% data reusables.desktop.navigate-to-stashed-changes %} {% data reusables.desktop.click-stashed-changes %} {% data reusables.desktop.click-discard %}
