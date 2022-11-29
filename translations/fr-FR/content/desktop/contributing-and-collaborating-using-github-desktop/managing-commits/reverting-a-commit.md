---
title: Rétablissement d’un commit
intro: Vous pouvez rétablir un commit spécifique pour supprimer ses modifications de votre branche.
redirect_from:
  - /desktop/contributing-to-projects/reverting-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/reverting-a-commit
versions:
  fpt: '*'
ms.openlocfilehash: f6cf6f120beff99bdb1c8bfd7868bb157e68d5dd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086486'
---
Quand vous rétablissez un commit précédent, le rétablissement est également un commit. Le commit d’origine reste également dans l’historique du dépôt.

{% tip %}

**Conseil** : Quand vous rétablissez plusieurs commits, il est préférable de le faire du plus récent au plus ancien. Si vous rétablissez les commits dans un autre ordre, vous risquez de voir des conflits de fusion.

{% endtip %}

{% mac %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.revert-commit %} ![Option de rétablissement au-dessus de la vue des différences](/assets/images/help/desktop/commit-revert-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.revert-commit %} ![Option de rétablissement au-dessus de la vue des différences](/assets/images/help/desktop/commit-revert-win.png)

{% endwindows %}
