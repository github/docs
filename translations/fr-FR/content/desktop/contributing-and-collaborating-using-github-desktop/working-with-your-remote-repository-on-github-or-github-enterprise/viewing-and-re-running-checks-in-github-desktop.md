---
title: Affichage et réexécution des vérifications dans GitHub Desktop
shortTitle: Viewing and re-running checks
intro: 'Vous pouvez afficher l’état des vérifications et les réexécuter dans {% data variables.product.prodname_desktop %}.'
versions:
  fpt: '*'
ms.openlocfilehash: d763dc4e4b30844b905b4e601df6c9cb500c8094
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147068019'
---
## À propos des vérifications dans {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} affiche l’état des vérifications qui ont été exécutées dans vos branches de demande de tirage. Le badge de vérification en regard du nom de la branche affiche l’état *En attente, validé* ou *échec* des vérifications. Vous pouvez également réexécuter toutes les vérifications, les vérifications ayant échoué ou des vérifications individuelles lors de l’affichage de l’état des vérifications dans {% data variables.product.prodname_desktop %}. Pour plus d’informations sur la configuration des vérifications dans votre référentiel, consultez « [À propos des vérifications d’état](/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) ».

{% data variables.product.prodname_desktop %} affiche également une notification système lorsque les vérifications échouent. Pour plus d’informations sur l’activation des notifications, consultez « [Configuration des notifications dans GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/configuring-notifications-in-github-desktop) ».

## Affichage et réexécution des vérifications

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.click-pull-requests %} ![Onglet Demandes de tirage dans le menu déroulant Branche actuelle](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png) {% data reusables.desktop.choose-pr-from-list %} ![Liste des demandes de tirage ouvertes dans le dépôt](/assets/images/help/desktop/click-pull-request.png)
4. Cliquez sur le numéro de demande de tirage à droite du nom de la branche de demande de tirage.
  ![Les vérifications s’affichent en regard du nom de la branche](/assets/images/help/desktop/checks-dialog.png)
5. Pour relancer les vérifications qui ont échoué, cliquez sur **{% octicon "sync" aria-label="The sync icon" %} Réexécuter** et sélectionnez **Réexécuter les vérifications ayant échoué**.
  ![Réexécuter les vérifications ayant échoué](/assets/images/help/desktop/re-run-failed-checks.png)
6. Pour relancer des vérifications individuelles, passez la souris sur la vérification individuelle que vous souhaitez réexécuter et sélectionnez l’icône {% octicon "sync" aria-label="The sync icon" %} pour relancer la vérification.
  ![Réexécuter des vérifications individuelles](/assets/images/help/desktop/re-run-individual-checks.png)
7. Vous verrez une boîte de dialogue de confirmation avec le résumé des vérifications qui seront réexécutées. Cliquez sur **Réexécuter les vérifications** pour confirmer que vous souhaitez effectuer la réexécution.
  ![Boîte de dialogue de confirmation de réexécution](/assets/images/help/desktop/re-run-confirmation-dialog.png)
