---
title: Voir les résultats de l’évaluation automatique
intro: Vous pouvez voir les résultats de l’évaluation automatique de votre devoir dans le dépôt.
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-students
  - /education/manage-coursework-with-github-classroom/view-autograding-results
ms.openlocfilehash: ea4de9b0122e39f5ecb4d960d4f0ee8c94ba2ee5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106370'
---
## À propos de l’évaluation automatique

Votre enseignant peut configurer des tests qui vérifient automatiquement votre travail quand vous le poussez dans un dépôt de devoir sur {% data variables.product.product_location %}.

Si vous êtes étudiant et que votre instructeur a configuré l’évaluation automatique pour votre devoir dans {% data variables.product.prodname_classroom %}, vous obtenez les résultats de test d’évaluation automatique dans votre dépôt de devoir. Si tous les tests d’un commit réussissent, une coche verte s’affiche. Si des tests de commit échouent, un X rouge s’affiche. Vous pouvez voir les journaux détaillés en cliquant sur la coche verte ou le X rouge.

## Consultation des résultats d’évaluation automatique pour un dépôt de devoir

{% data variables.product.prodname_classroom %} utilise {% data variables.product.prodname_actions %} pour exécuter des tests d’évaluation automatique. Pour plus d’informations sur la consultation des journaux d’un test d’évaluation automatique, consultez « [Utilisation des journaux d’exécution de workflow](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-to-diagnose-failures) ».

L’onglet **Actions** affiche l’historique complet des séries de tests.

![Onglet « Actions » avec « Tous les workflows » sélectionné](/assets/images/help/classroom/autograding-actions-tab.png)

Vous pouvez cliquer sur une série de tests spécifique pour passer en revue la sortie du journal, comme les erreurs de compilation et les échecs de test.

![Journaux de résultats de test « Workflow d’évaluation automatique {% data variables.product.prodname_classroom %} » dans {% data variables.product.prodname_actions %} ](/assets/images/help/classroom/autograding-actions-logs.png)

## Pour aller plus loin

- « [À propos des vérifications d’état](/github/collaborating-with-issues-and-pull-requests/about-status-checks) »
