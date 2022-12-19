---
title: Créer un devoir de groupe
intro: Vous pouvez créer une affectation collaborative pour des équipes d’étudiants qui participent à votre cours.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage group assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/create-group-assignments
  - /education/manage-coursework-with-github-classroom/create-a-group-assignment
ms.openlocfilehash: 71c5f5eaf97ba58e25921c1e2be6fc638550dfa8
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179759'
---
## À propos des devoirs de groupe

{% data reusables.classroom.assignments-group-definition %} Les étudiants peuvent travailler à plusieurs sur un devoir de groupe dans un dépôt partagé, comme une équipe de développeurs professionnels.

Quand un étudiant accepte un devoir de groupe, il peut créer une équipe ou rejoindre une équipe existante. {% data variables.product.prodname_classroom %} enregistre les équipes d’un devoir sous forme d’ensemble. Vous pouvez nommer l’ensemble des équipes pour un devoir spécifique quand vous créez le devoir, et vous pouvez réutiliser cet ensemble d’équipes pour un devoir ultérieur.

{% data reusables.classroom.classroom-creates-group-repositories %}

{% data reusables.classroom.about-assignments %}

Vous pouvez choisir le nombre d’équipes d’un devoir et le nombre de membres de chaque équipe. Chaque équipe créée par un étudiant pour un devoir est une équipe au sein de votre organisation sur {% data variables.product.product_name %}. La visibilité de l’équipe est secrète. Les équipes que vous créez sur {% data variables.product.product_name %} n’apparaissent pas dans {% data variables.product.prodname_classroom %}. Pour plus d’informations, consultez « [À propos des équipes](/organizations/organizing-members-into-teams/about-teams) ».

Pour une démonstration vidéo de la création d’un devoir de groupe, consultez « [Concepts de base de la configuration de {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom) ».

{% data reusables.classroom.reuse-assignment-link %}

## Prérequis

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Création d’un devoir

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## Configuration des éléments de base d’un devoir

Nommez votre devoir, choisissez une échéance éventuelle, définissez des équipes et choisissez la visibilité des dépôts de devoir.

- [Nommage d’un devoir](#naming-an-assignment)
- [Attribution d’une échéance pour un devoir](#assigning-a-deadline-for-an-assignment)
- [Choix d’un type de devoir](#choosing-an-assignment-type)
- [Définition d’équipes pour un devoir](#defining-teams-for-an-assignment)
- [Choix d’une visibilité pour les dépôts de devoir](#choosing-a-visibility-for-assignment-repositories)

### Nommage d’un devoir

Pour un devoir de groupe, {% data variables.product.prodname_classroom %} nomme les dépôts avec le préfixe du dépôt et le nom de l’équipe. Par défaut, le préfixe du dépôt est le titre du devoir. Par exemple, si vous nommez un devoir « assignment-1 » et que le nom de l’équipe sur {% data variables.product.product_name %} est « student-name », le nom du dépôt de devoir pour les membres de l’équipe est `assignment-1-student-team`.

{% data reusables.classroom.assignments-type-a-title %}

### Attribution d’une échéance pour un devoir

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Choix d’un type de devoir

Sous « Devoir individuel ou de groupe », sélectionnez le menu déroulant, puis cliquez sur **Devoir de groupe**. Vous ne pouvez pas changer le type de devoir après l’avoir créé. Si vous préférez créer un devoir individuel, consultez « [Créer un devoir individuel](/education/manage-coursework-with-github-classroom/create-an-individual-assignment) ».

### Définition d’équipes pour un devoir

Si vous avez déjà créé un devoir de groupe pour la classe, vous pouvez réutiliser un ensemble d’équipes pour le nouveau devoir. Pour créer un ensemble avec les équipes que vos étudiants ont créées pour le devoir, tapez le nom de l’ensemble. Vous pouvez aussi taper le nombre maximal de membres de l’équipe et le nombre total d’équipes.

{% tip %}

**Conseils** :

- Nous vous recommandons d’ajouter des détails sur l’ensemble d’équipes dans le nom de l’ensemble. Par exemple, si vous voulez utiliser l’ensemble d’équipes pour un devoir, donnez-lui le nom du devoir. Si vous voulez réutiliser l’ensemble tout au long d’un semestre ou d’un cours, donnez-lui le nom du semestre ou du cours.

- Si vous voulez attribuer des étudiants à une équipe spécifique, donnez-leur un nom pour l’équipe et fournissez une liste de membres.

{% endtip %}

![Paramètres des équipes participant à un devoir de groupe](/assets/images/help/classroom/assignments-define-teams.png)

### Choix d’une visibilité pour les dépôts de devoir

{% data reusables.classroom.assignments-repository-visibility-and-permissions %}

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## Ajout de code de démarrage et configuration d’un environnement de développement

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [Choix d’un modèle de dépôt](#choosing-a-template-repository)
- [Choix d’un environnement de développement intégré (IDE)](#choosing-an-integrated-development-environment-ide)

### Choix d’un modèle de dépôt

Par défaut, un nouveau devoir crée un dépôt vide pour chaque équipe créée par un étudiant. {% data reusables.classroom.you-can-choose-a-template-repository %} 

{% data reusables.classroom.assignments-guide-choose-template-repository %}

### Choix d’un environnement de développement intégré (IDE)

{% data reusables.classroom.about-online-ides %} Pour plus d’informations, consultez « [Intégrer {% data variables.product.prodname_classroom %} à un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide) ».

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

## Formulation de commentaires

Vous pouvez aussi évaluer automatiquement les devoirs et créer un espace pour discuter de chaque envoi avec l’équipe.

- [Test automatique des devoirs](#testing-assignments-automatically)
- [Création d’une demande de tirage pour les commentaires](#creating-a-pull-request-for-feedback)

### Test automatique des devoirs

{% data reusables.classroom.assignments-guide-using-autograding %}

### Création d’une demande de tirage pour les commentaires

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

{% data reusables.classroom.assignments-guide-create-review-pull-request %}

{% data reusables.classroom.assignments-guide-click-create-assignment-button %}

## Invitation d’étudiants à un devoir

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

Vous pouvez voir les équipes qui travaillent sur un devoir ou qui ont envoyé un devoir sous l’onglet **Équipes** du devoir. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Group assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-group-hero.png">
</div>

## Monitoring de la progression des étudiants
La page de présentation des devoirs montre des informations sur les devoirs que vous avez acceptés et la progression de l’équipe. Vous pouvez avoir des informations récapitulatives différentes en fonction des configurations de vos devoirs.

- **Nombre total d’équipes** : nombre d’équipes créées.
- **Étudiants inscrits** : nombre d’étudiants sur la liste de classe.
- **Étudiants sans équipe** : nombre d’étudiants de la liste de classe Classroom qui n’ont pas encore rejoint une équipe.
-  **Équipes ayant accepté** : nombre d’équipes qui ont accepté ce devoir.
-  **Envois de devoir** : nombre d’équipes qui ont envoyé le devoir. L’envoi est déclenché à l’échéance du devoir.
-  **Équipes ayant réussi** : nombre d’équipes qui réussissent actuellement les tests d’évaluation automatique pour ce devoir.

## Étapes suivantes

- Une fois que vous avez créé le devoir et que vos étudiants ont formé des équipes, les membres d’équipe peuvent commencer à travailler sur le devoir en utilisant les fonctionnalités Git et {% data variables.product.product_name %}. Les étudiants peuvent cloner le dépôt, pousser des commits, gérer des branches, créer et réviser des demandes de tirage, résoudre les conflits de fusion et discuter sur les changements en utilisant les problèmes. L’équipe et vous-même pouvez passer en revue l’historique des commits du dépôt. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github) », « [Dépôts](/repositories) », « [Utilisation de Git](/github/getting-started-with-github/using-git) » et « [Collaboration en utilisant les problèmes et les demandes de tirage](/github/collaborating-with-issues-and-pull-requests) », ainsi que le cours gratuit sur la [résolution des conflits de fusion](https://github.com/skills/resolve-merge-conflicts) sur {% data variables.product.prodname_learning %}.

- Dès qu’une équipe a terminé un devoir, vous pouvez passer en revue les fichiers du dépôt ou l’historique et les visualisations du dépôt pour mieux comprendre comment l’équipe a collaboré. Pour plus d’informations, consultez « [Visualisation des données de dépôt avec des graphes](/github/visualizing-repository-data-with-graphs) ».

- Vous pouvez fournir des commentaires sur un devoir en commentant des lignes ou des commits individuels dans une demande de tirage. Pour plus d’informations, consultez « [Commentaires dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) » et « [Ouverture d’un problème à partir du code](/github/managing-your-work-on-github/opening-an-issue-from-code) ». Pour plus d’informations sur la création de réponses enregistrées afin de fournir des commentaires sur les erreurs courantes, consultez « [À propos des réponses enregistrées](/github/writing-on-github/about-saved-replies) ».

## Pour aller plus loin

- [{% data variables.product.prodname_global_campus %} pour les enseignants](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)
- « [Connecter un système de gestion de l’apprentissage à une classe](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom) »
- [Utilisation des équipes existantes dans les devoirs de groupe ?](https://education.github.community/t/using-existing-teams-in-group-assignments/6999) dans la communauté {% data variables.product.prodname_education %}
