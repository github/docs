---
title: Suivi des changements apportés à un commentaire
intro: Vous pouvez afficher l’historique des modifications d’un commentaire ou supprimer les informations sensibles qu’il contient.
redirect_from:
  - /articles/tracking-changes-in-a-comment
  - /github/building-a-strong-community/tracking-changes-in-a-comment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Track comment changes
ms.openlocfilehash: 7da6b53f9b98ade8ee73411a80aaf2ff3f412700
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086538'
---
## Visualisation des détails de l’historique des modifications d’un commentaire

Toute personne disposant d’un accès en lecture à un dépôt peut voir l’historique des modifications d’un commentaire.

1. Accédez au commentaire dont vous souhaitez voir l’historique des modifications.
{% data reusables.repositories.edited-comment-list %}

## Suppression d’informations sensibles dans l’historique d’un commentaire

Les auteurs de commentaires et toute personne disposant d’un accès en écriture à un dépôt peuvent supprimer les informations sensibles de l’historique des modifications d’un commentaire.

Quand vous supprimez des informations sensibles de l’historique des modifications du commentaire, l’auteur de la modification ainsi que le moment où celle-ci a été effectuée sont toujours visibles dans l’historique des commentaires, mais le contenu de la modification n’est plus disponible.

1. Accédez au commentaire pour lequel vous souhaitez supprimer les informations sensibles de l’historique des modifications.
{% data reusables.repositories.edited-comment-list %}
3. En haut à droite de la fenêtre d’historique des modifications, cliquez sur **Options**. Cliquez ensuite sur **Supprimer la révision de l’historique** pour supprimer la différence qui montre le contenu ajouté.
  ![Supprimer les détails relatifs à la modification du commentaire](/assets/images/help/repository/delete-comment-edit-details.png)
4. Pour confirmer la suppression, cliquez sur **OK**.

## Pour aller plus loin

{% ifversion fpt or ghec %}- « [Signalement d’abus ou de courrier indésirable](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) »{% endif %}
- « [Modification d’un commentaire](/articles/editing-a-comment) »
