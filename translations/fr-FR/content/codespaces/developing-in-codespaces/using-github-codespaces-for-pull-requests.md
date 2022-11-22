---
title: Utilisation de GitHub Codespaces pour les demandes de tirage
shortTitle: Pull requests
intro: 'Vous pouvez utiliser {% data variables.product.prodname_github_codespaces %} dans votre navigateur web ou dans {% data variables.product.prodname_vscode %} pour créer des demandes de tirage, passer en revue les demandes de tirage et traiter les commentaires de révision.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-for-pull-requests
ms.openlocfilehash: 6932f8eb9095987bfe808080983970c8807b6d93
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159644'
---
## À propos des demandes de tirage dans {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} vous offre un grand nombre des fonctionnalités dont vous pourriez avoir besoin pour utiliser les demandes de tirage :

- [Créer une demande de tirage](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request) – À l’aide des commandes Terminal et Git ou de la vue Contrôle de code source, vous pouvez créer des demandes de tirage comme vous le feriez sur {% data variables.product.prodname_dotcom_the_website %}. Si le dépôt utilise un modèle de demande de tirage, vous pouvez l’utiliser dans la vue Contrôle de code source.
- [Ouvrir une demande de tirage](#opening-a-pull-request-in-codespaces) – Vous pouvez ouvrir une demande de tirage existante dans un espace de code, à condition d’avoir accès à la branche qui est fusionnée.
- [Passer en revue une demande de tirage](#reviewing-a-pull-request-in-codespaces) – Une fois que vous avez ouvert une demande de tirage dans un espace de code, vous pouvez utiliser la vue « Demande de tirage GitHub » pour ajouter des commentaires de révision et approuver les demandes de tirage. Vous pouvez également utiliser {% data variables.product.prodname_github_codespaces %} pour [afficher les commentaires de révision](#view-comments-from-a-review-in-codespaces).

## Ouverture d’une demande de tirage dans {% data variables.product.prodname_codespaces %}

{% data reusables.repositories.sidebar-pr %}

1. Dans la liste des demandes de tirage, cliquez sur celle que vous souhaitez ouvrir dans {% data variables.product.prodname_codespaces %}.
1. Sur le côté droit de votre écran, cliquez sur **{% octicon "code" aria-label="The code icon" %} Code**. 
1. Sous l’onglet {% data variables.product.prodname_codespaces %}, cliquez sur le signe plus ({% octicon "plus" aria-label="The plus icon" %}).

   ![Option d’ouverture d’une demande de tirage dans un espace de code](/assets/images/help/codespaces/open-with-codespaces-pr.png)

   Un codespace est créé pour la branche de demande de tirage et est ouvert dans votre éditeur par défaut pour {% data variables.product.prodname_github_codespaces %}.

## Examen d’une demande de tirage dans {% data variables.product.prodname_codespaces %}

1. Avec votre éditeur par défaut défini sur {% data variables.product.prodname_vscode %} ou {% data variables.product.prodname_vscode %} pour le web, ouvrez la demande de tirage dans un codespace, comme décrit dans « [Ouverture d’une demande de tirage](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces) » ci-dessus.
2. Dans la barre d’activités, cliquez sur la vue **Demande de tirage GitHub**. Cette vue s’affiche uniquement quand vous ouvrez une demande de tirage dans un codespace.
  ![Option d’ouverture d’une demande de tirage dans un codespace](/assets/images/help/codespaces/github-pr-view.png)
3. Pour passer en revue un fichier spécifique, cliquez sur l’icône **Ouvrir un fichier** dans la barre latérale.
  ![Option d’ouverture d’une demande de tirage dans un codespace](/assets/images/help/codespaces/changes-in-files.png)
4. Pour ajouter des commentaires de revue, cliquez sur l’icône **+** en regard du numéro de ligne. Tapez votre commentaire de revue, puis cliquez sur **Démarrer la revue**.
  ![Option d’ouverture d’une demande de tirage dans un codespace](/assets/images/help/codespaces/start-review.png)
5. Une fois que vous avez fini d’ajouter des commentaires de revue, dans la barre latérale, vous pouvez choisir d’envoyer les commentaires, d’approuver les changements ou de demander des changements.
  ![Option d’ouverture d’une demande de tirage dans un espace de code](/assets/images/help/codespaces/submit-review.png)

Pour plus d’informations sur l’examen d’une demande de tirage, consultez « [Révision des changements proposés dans une demande de tirage](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) ».

## Afficher les commentaires d’une révision dans {% data variables.product.prodname_codespaces %}

Une fois que vous avez reçu des commentaires sur une demande de tirage, vous pouvez [l’ouvrir dans un codespace](#opening-a-pull-request-in-codespaces) dans votre navigateur web ou dans {% data variables.product.prodname_vscode_shortname %}, pour voir les [commentaires de révision](#reviewing-a-pull-request-in-codespaces). À partir de là, vous pouvez répondre aux commentaires, ajouter des réactions ou ignorer la révision. 

  ![Option d’ouverture d’une demande de tirage dans un espace de code](/assets/images/help/codespaces/incorporating-codespaces.png)



