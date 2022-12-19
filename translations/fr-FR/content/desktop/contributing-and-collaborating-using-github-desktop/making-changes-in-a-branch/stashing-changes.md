---
title: Remiser des changements
intro: Vous pouvez enregistrer temporairement vos modifications sans les valider dans une branche en remisant les modifications.
versions:
  fpt: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/stashing-changes
ms.openlocfilehash: ef061bec3c60041fc40ab3e8be45d1557ca90219
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105350'
---
## À propos des changements ayant fait l’objet d’un stash

Pour appliquer vos changements au dépôt, vous devez enregistrer les fichiers, puis commiter les changements dans une branche. Si vous avez enregistré des changements que vous n’êtes pas encore prêt à commiter, vous pouvez faire un stash de ces derniers pour les remettre à plus tard. Quand vous faites un stash de changements, ils sont temporairement supprimés des fichiers, ce qui vous permet de les restaurer ou de les abandonner plus tard. Vous ne pouvez faire un stash que d’un seul ensemble de changements à la fois avec {% data variables.product.prodname_desktop %}. Si vous utilisez {% data variables.product.prodname_desktop %} pour faire un stash de changements, tous les changements non enregistrés sont affectés par le stash. Une fois que vous avez fait un stash de changements dans une branche, vous pouvez changer de branche ou apporter d’autres changements à votre branche actuelle de manière sécurisée.

Si vous utilisez {% data variables.product.prodname_desktop %} pour changer de branche alors que vous avez enregistré, mais non commité, des changements, {% data variables.product.prodname_desktop %} vous invite à faire un stash des changements ou à les prendre dans l’autre branche. Pour plus d’informations, consultez « [Gestion des branches](/desktop/contributing-to-projects/managing-branches#switching-between-branches) ».

## Remiser des changements

{% data reusables.desktop.click-changed-files-header %} {% data reusables.desktop.click-stash-all-changes %}

## Restauration des changements ayant fait l’objet d’un stash

{% data reusables.desktop.navigate-to-stashed-changes %} {% data reusables.desktop.click-stashed-changes %} {% data reusables.desktop.click-restore %}

## Abandon des changements ayant fait l’objet d’un stash

{% data reusables.desktop.navigate-to-stashed-changes %} {% data reusables.desktop.click-stashed-changes %} {% data reusables.desktop.click-discard %}
