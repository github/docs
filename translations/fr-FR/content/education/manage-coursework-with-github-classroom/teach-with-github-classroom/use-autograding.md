---
title: Utiliser l’évaluation automatique
intro: Vous pouvez automatiquement fournir des commentaires sur les soumissions de code de vos étudiants en configurant des tests à exécuter dans le dépôt de devoirs.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can set up and use autograding on assignments in a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/adding-tests-for-auto-grading
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-teachers
  - /education/manage-coursework-with-github-classroom/use-autograding
ms.openlocfilehash: b3e9b44da93d799972b93a9f6e822b767099fdba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145102669'
---
## À propos de l’évaluation automatique

{% data reusables.classroom.about-autograding %}

Dès qu’un étudiant accepte un devoir, chaque fois qu’il le pousse dans le dépôt de devoir, {% data variables.product.prodname_actions %} exécute les commandes de votre test d’évaluation automatique dans un environnement Linux contenant le code le plus récent de l’étudiant. {% data variables.product.prodname_classroom %} crée les workflows nécessaires pour {% data variables.product.prodname_actions %}. Vous n’avez pas besoin de bien connaître {% data variables.product.prodname_actions %} pour utiliser l’évaluation automatique.

Vous pouvez utiliser un framework de test, exécuter une commande personnalisée, écrire des tests d’entrée/sortie ou combiner différentes méthodes de test. L’environnement Linux pour l’évaluation automatique contient de nombreux outils logiciels populaires. Pour plus d’informations, consultez les détails de la dernière version d’Ubuntu dans « [Spécifications des exécuteurs hébergés par {% data variables.product.company_short %}](/actions/reference/specifications-for-github-hosted-runners#supported-software) ».

Vous pouvez obtenir une vue d’ensemble des étudiants qui réussissent les tests d’évaluation automatique en accédant au devoir dans {% data variables.product.prodname_classroom %}. Une coche verte signifie que l’étudiant réussit tous les tests et un X rouge signifie qu’il échoue à une partie ou la totalité des tests. Si vous attribuez des points à un ou plusieurs tests, une bulle montre la note des tests sur la note maximale possible du devoir.

![Vue d’ensemble d’un devoir avec des résultats d’évaluation automatique](/assets/images/help/classroom/assignment-individual-hero.png)

## Méthodes d’évaluation

Il existe deux méthodes d’évaluation : les tests d’entrée/sortie et les tests de commande d’exécution.

### Test d’entrée/sortie

Un test d’entrée/sortie exécute éventuellement une commande d’installation, puis fournit une entrée standard à une commande de test. {% data variables.product.prodname_classroom %} évalue la sortie de la commande de test par rapport à un résultat attendu.

| Paramètre | Description |
| :- | :- |
| **Nom du test** | Nom du test, pour identifier le test dans les journaux |
| **Commande d’installation** | _Facultatif_. Commande à exécuter avant les tests, comme la compilation ou l’installation |
| **Commande d’exécution** | Commande permettant d’exécuter le test et de générer une sortie standard pour l’évaluation |
| **Entrées** | Entrée standard pour la commande d’exécution |
| **Sortie attendue** | Sortie que vous voulez voir comme sortie standard de la commande d’exécution |
| **Comparaison** | Type de comparaison entre la sortie de la commande d’exécution et la sortie attendue<br/><br/><ul><li>**Inclus** : réussit quand la sortie attendue s’affiche<br/>n’importe où dans la sortie standard de la commande d’exécution</li><li>**Exact** : réussit quand la sortie attendue est complètement identique<br/>à la sortie standard de la commande d’exécution</li><li>**Regex** : réussit si l’expression régulière dans la sortie attendue<br/>correspond à la sortie standard de la commande d’exécution</li></ul> |
| **Délai d'expiration** | En minutes, durée d’exécution d’un test avant d’entraîner un échec |
| **Points** | _Facultatif_. Nombre de points du test sur une note totale |

### Test de commande d’exécution

Un test de commande d’exécution exécute une commande d’installation, puis une commande de test. {% data variables.product.prodname_classroom %} vérifie l’état de sortie de la commande de test. Le code de sortie `0` indique la réussite et tous les autres code de sortie indique l’échec.

{% data variables.product.prodname_classroom %} fournit des présélections pour les tests de commande d’exécution en fonction des différents langages de programmation. Par exemple, le test **Exécuter le nœud** préremplit la commande d’installation avec `npm install` et la commande de test avec `npm test`.

| Paramètre | Description |
| :- | :- |
| **Nom du test** | Nom du test, pour identifier le test dans les journaux |
| **Commande d’installation** | _Facultatif_. Commande à exécuter avant les tests, comme la compilation ou l’installation |
| **Commande d’exécution** | Commande permettant d’exécuter le test et de générer un code de sortie pour l’évaluation |
| **Délai d'expiration** | En minutes, durée d’exécution d’un test avant d’entraîner un échec |
| **Points** | _Facultatif_. Nombre de points du test sur une note totale |

## Configuration des tests d’évaluation automatique pour un devoir

Vous pouvez ajouter des tests d’évaluation automatique pendant la création d’un devoir. {% data reusables.classroom.for-more-information-about-assignment-creation %}

Vous pouvez ajouter, modifier ou supprimer des tests d’évaluation automatique pour un devoir existant. Comme tous les changements effectués dans l’interface utilisateur de Classroom sont envoyés aux dépôts existants de l’étudiant, faites attention quand vous modifiez vos tests.

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.assignments-click-pencil %}
1. Dans la barre latérale gauche, cliquez sur **Évaluation et commentaires**.
  ![« Évaluation et commentaires » à gauche des éléments de base du devoir](/assets/images/help/classroom/assignments-click-grading-and-feedback.png)
1. Ajoutez, modifiez ou supprimez un test d’évaluation automatique.
    - Pour ajouter un test, sous « Ajouter des tests d’évaluation automatique », sélectionnez le menu déroulant **Ajouter un test**, puis cliquez sur la méthode d’évaluation que vous voulez utiliser.
       ![Utilisation du menu déroulant « Ajouter un test » pour cliquer sur une méthode](/assets/images/help/classroom/autograding-click-grading-method.png) Configurez le test, puis cliquez sur **Enregistrer le cas de test**.
       ![Bouton « Enregistrer le cas de test » pour un test d’évaluation automatique](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - Pour modifier un test, à droite du nom du test, cliquez sur {% octicon "pencil" aria-label="The pencil icon" %}.
        ![Icône de crayon pour modifier un test d’évaluation automatique](/assets/images/help/classroom/autograding-click-pencil.png) Configurez le test, puis cliquez sur **Enregistrer le cas de test**.
       ![Bouton « Enregistrer le cas de test » pour un test d’évaluation automatique](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - Pour supprimer un test, à droite du nom du test, cliquez sur {% octicon "trash" aria-label="The trash icon" %}.
        ![Icône de corbeille pour supprimer un test d’évaluation automatique](/assets/images/help/classroom/autograding-click-trash.png)
1. En bas de la page, cliquez sur **Mettre à jour le devoir**.
  ![« Mettre à jour le devoir » en bas de la page](/assets/images/help/classroom/assignments-click-update-assignment.png)

## Consultation et téléchargement des résultats des tests d’évaluation automatique

### Télécharger les résultats d’évaluation automatique

Vous pouvez également télécharger un CSV des notes d’évaluation automatique de vos étudiants en cliquant sur le bouton « Télécharger ». Cela génère et télécharge un CSV contenant un lien vers le dépôt de l’étudiant, son descripteur {% data variables.product.prodname_dotcom %}, l’identificateur dans la liste de classe, l’horodatage d’envoi et la note d’évaluation automatique.

![Bouton « Télécharger » sélectionné montrant « Télécharger les notes » sélectionné et une option supplémentaire pour « Télécharger les dépôts »](/assets/images/help/classroom/download-grades.png)

### Voir les journaux individuels
{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-assignment-in-list %}
1. À droite d’un envoi, cliquez sur **Voir le test**.
  ![Bouton « Voir le test » pour un envoi de devoir](/assets/images/help/classroom/assignments-click-view-test.png)
1. Passez en revue la sortie du test. Pour plus d’informations, consultez « [Utilisation des journaux d’exécution de workflow](/actions/managing-workflow-runs/using-workflow-run-logs) ».

## Pour aller plus loin

- [Documentation {% data variables.product.prodname_actions %}](/actions)
