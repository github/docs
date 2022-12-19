---
title: À propos de l’utilisation de Visual Studio Code avec GitHub Classroom
shortTitle: About using Visual Studio Code
intro: 'Vous pouvez configurer {% data variables.product.prodname_vscode %} comme l’éditeur préféré pour les affectations dans {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/about-using-vs-code-with-github-classroom
ms.openlocfilehash: fe0e8e0c3194f9c97cc30c80dcec00256824e6ab
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145148743'
---
## À propos de {% data variables.product.prodname_vscode %}

{% data variables.product.prodname_vscode %} est un éditeur de code source léger mais puissant. Il s’exécute sur un poste de travail et est disponible sur les plateformes Windows, macOS et Linux. Avec l’[extension GitHub Classroom pour {% data variables.product.prodname_vscode_shortname %}](https://aka.ms/classroom-vscode-ext), les étudiants peuvent facilement parcourir, modifier, soumettre, partager et vérifier leurs devoirs Classroom. Pour plus d’informations sur les IDE et {% data variables.product.prodname_classroom %}, consultez « [Intégrer {% data variables.product.prodname_classroom %} à un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide) ».

### Éditeur de prédilection de votre étudiant 
L’intégration de GitHub Classroom à {% data variables.product.prodname_vscode_shortname %} fournit aux étudiants un pack d’extension qui contient :

1. L’[extension GitHub Classroom](https://aka.ms/classroom-vscode-ext) avec des abstractions personnalisées qui permettent aux étudiants de naviguer facilement dès le début.
2. L’[extension Visual Studio Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) intégrée à une vue de l’étudiant pour contacter facilement les assistants d’enseignement et les camarades de classe afin d’obtenir de l’aide et de collaborer.
3. L’[extension GitHub Pull Request](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) qui permet aux étudiants de voir les commentaires de leurs instructeurs dans l’éditeur. 

### Comment lancer le devoir dans {% data variables.product.prodname_vscode_shortname %}
Quand vous créez un devoir, vous pouvez ajouter {% data variables.product.prodname_vscode_shortname %} comme éditeur par défaut pour le devoir. Pour plus d’informations, consultez « [Intégrer {% data variables.product.prodname_classroom %} à un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide) ».

Un badge « Ouvrir dans {% data variables.product.prodname_vscode_shortname %} » est alors inclus dans tous les dépôts étudiant. Ce badge gère l’installation de {% data variables.product.prodname_vscode_shortname %}, le pack d’extension Classroom et l’ouverture du devoir actif en un clic.

{% note %}

**Remarque :** L’étudiant doit avoir Git installé sur son ordinateur pour pousser le code à partir de {% data variables.product.prodname_vscode_shortname %} vers son dépôt. Git n’est pas installé automatiquement quand vous cliquez sur le bouton **Ouvrir dans {% data variables.product.prodname_vscode_shortname %}** . L’étudiant peut télécharger Git en accédant [ici](https://git-scm.com/downloads).

{% endnote %}

### Comment utiliser le pack d’extension GitHub Classroom 
L’extension GitHub Classroom a deux composants majeurs : la vue « Classes » et la vue « Devoir actif ». 

Quand l’étudiant lance l’extension pour la première fois, il est automatiquement dirigé vers l’onglet Explorateur dans {% data variables.product.prodname_vscode_shortname %}, où il peut voir la vue « Devoir actif » en même temps que l’arborescence des fichiers du dépôt. 

![Vue Devoir actif dans GitHub Classroom](/assets/images/help/classroom/vs-code-active-assignment.png)

L’étudiant peut pousser ses commits sur la dernière version du dépôt distant, en cliquant sur le bouton **synchroniser les changements**, qui s’affiche en pointant sur la ligne « Devoir actif ». Cela fait abstraction du contrôle de code source avec Git, et permet aux instructeurs d’enseigner Git à leur propre rythme.
La synchronisation des changements déclenche également l’exécution de « Tests », si un enseignant a configuré l’évaluation automatique pour son devoir.

Le nœud « Groupe » sous « Devoir actif » affiche les membres d’un groupe, si le devoir est un projet de groupe. Il affiche également les membres d’administration du dépôt qui peuvent aider quand un étudiant est bloqué. Pour collaborer sur le projet, un étudiant peut démarrer une session Live Share avec n’importe qui dans le nœud du groupe, et partage immédiatement tout le contexte du dépôt avec lui. Vous pouvez en savoir plus sur Live Share et comment l’utiliser pour la collaboration [ici](https://docs.microsoft.com/en-us/visualstudio/liveshare/).

Dès qu’un étudiant a terminé le devoir, il peut également accéder à d’autres devoirs et classes. Ces autres devoirs et classes sont disponibles sous l’onglet GitHub.
