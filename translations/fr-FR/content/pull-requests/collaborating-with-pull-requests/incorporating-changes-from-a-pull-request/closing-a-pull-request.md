---
title: Fermeture d’une demande de tirage
intro: 'Vous pouvez choisir de *fermer* une demande de tirage (pull request) sans [la fusionner dans la branche en amont](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request). Cela peut être pratique si les modifications proposées dans la branche ne sont plus nécessaires ou si une autre solution a été proposée dans une autre branche.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request
  - /articles/closing-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/closing-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 51048cfd4ae917149d81a011a8ec5418ca4beb51
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145133943'
---
{% tip %}

**Conseil** : si vous avez ouvert une demande de tirage avec une branche de base incorrecte, plutôt que de la fermer et d’en ouvrir une autre, vous pouvez modifier cette branche de base. Pour plus d’informations, consultez « [Modification de la branche de base d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request) ».

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. Dans la liste « Demandes de tirage », cliquez sur la demande de tirage que vous souhaitez fermer.
3. En bas de la demande de tirage, sous la zone de commentaire, cliquez sur **Fermer la demande de tirage**.
  ![Bouton Fermer la demande de tirage](/assets/images/help/pull_requests/pullrequest-closebutton.png)
4. Si vous le souhaitez, [supprimez la branche](/articles/deleting-unused-branches). Cela permet de garder la liste des branches de votre référentiel bien ordonnée.
