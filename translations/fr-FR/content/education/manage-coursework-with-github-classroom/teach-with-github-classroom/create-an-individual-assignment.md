---
title: Créer un devoir individuel
intro: Vous pouvez créer un devoir pour les étudiants de votre cours à faire individuellement.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage individual assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/creating-an-individual-assignment
  - /education/manage-coursework-with-github-classroom/create-an-individual-assignment
shortTitle: Individual assignment
ms.openlocfilehash: 4f5fab2f63ff686762a4fb6ccd5964b7f4d9cb3c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573867'
---
## À propos des devoirs individuels

{% data reusables.classroom.assignments-individual-definition %}

{% data reusables.classroom.classroom-creates-individual-repositories %}

{% data reusables.classroom.about-assignments %}

Pour une démonstration vidéo de la création d’un devoir individuel, consultez « [Concepts de base de la configuration de {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom) ».

{% data reusables.classroom.reuse-assignment-link %}

## Prérequis

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Création d’un devoir

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## Configuration des éléments de base d’un devoir

Nommez votre devoir, choisissez une échéance éventuelle et la visibilité des dépôts de devoir.

- [Nommage d’un devoir](#naming-an-assignment)
- [Attribution d’une échéance pour un devoir](#assigning-a-deadline-for-an-assignment)
- [Choix d’un type de devoir](#choosing-an-assignment-type)
- [Choix d’une visibilité pour les dépôts de devoir](#choosing-a-visibility-for-assignment-repositories)

### Nommage d’un devoir

Pour un devoir individuel, {% data variables.product.prodname_classroom %} nomme les dépôts avec le préfixe du dépôt et le nom d’utilisateur {% data variables.product.product_name %} de l’étudiant. Par défaut, le préfixe du dépôt est le titre du devoir. Par exemple, si vous nommez un devoir « assignment-1 » et que le nom d’utilisateur de l’étudiant sur {% data variables.product.product_name %} est @octocat, le nom du dépôt de devoir pour @octocat est `assignment-1-octocat`.

{% data reusables.classroom.assignments-type-a-title %}

### Attribution d’une échéance pour un devoir

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Choix d’un type de devoir

Sous « Devoir individuel ou de groupe », sélectionnez le menu déroulant et cliquez sur **Devoir individuel**. Vous ne pouvez pas changer le type de devoir après l’avoir créé. Si vous préférez créer un devoir de groupe, consultez « [Créer un devoir de groupe](/education/manage-coursework-with-github-classroom/create-a-group-assignment) ».

### Choix d’une visibilité pour les dépôts de devoir

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## Ajout de code de démarrage et configuration d’un environnement de développement

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [Choix d’un modèle de dépôt](#choosing-a-template-repository)
- [Choix d’un environnement de développement intégré (IDE)](#choosing-an-integrated-development-environment-ide)

### Choix d’un modèle de dépôt

Par défaut, un nouveau devoir crée un dépôt vide pour chaque étudiant de la liste de classe. {% data reusables.classroom.you-can-choose-a-template-repository %}

{% data reusables.classroom.assignments-guide-choose-template-repository %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

### Choix d’un environnement de développement intégré (IDE)

{% data reusables.classroom.about-online-ides %} Pour plus d’informations, consultez « [Intégrer {% data variables.product.prodname_classroom %} à un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide) ».

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

## Envoi de commentaires pour un devoir

Vous pouvez aussi évaluer automatiquement les devoirs et créer un espace pour discuter de chaque envoi avec l’étudiant.

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

Vous pouvez voir si un étudiant a rejoint la classe, et a accepté ou envoyé un devoir sous l’onglet **Liste de classe** du devoir. Vous pouvez également lier les alias {% data variables.product.prodname_dotcom %} des étudiants à leur identificateur de liste de classe et vice versa sous cet onglet. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Individual assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

## Monitoring de la progression des étudiants
La page de présentation des devoirs fournit une vue d’ensemble des acceptations de vos devoirs et de la progression des étudiants. Vous pouvez avoir des informations récapitulatives différentes en fonction des configurations de vos devoirs.

- **Étudiants inscrits** : nombre d’étudiants sur la liste de classe.
- **Étudiants ajoutés** : nombre de comptes {% data variables.product.prodname_dotcom %} qui ont accepté le devoir et ne sont pas associés à un identificateur de liste de classe.
-  **Étudiants acceptés** : nombre de comptes qui ont accepté ce devoir.
-  **Envois de devoir** : nombre d’étudiants qui ont envoyé le devoir. L’envoi est déclenché à l’échéance du devoir.
-  **Étudiants ayant réussi** : nombre d’étudiants qui réussissent actuellement les tests d’évaluation automatique pour ce devoir.

## Étapes suivantes

- Dès que vous avez créé le devoir, les étudiants peuvent commencer à travailler sur le devoir en utilisant les fonctionnalités Git et {% data variables.product.product_name %}. Les étudiants peuvent cloner le dépôt, pousser des commits, gérer des branches, créer et réviser des demandes de tirage, résoudre les conflits de fusion et discuter sur les changements en utilisant les problèmes. L’étudiant et vous-même pouvez passer en revue l’historique des commits du dépôt. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github) », « [Dépôts](/repositories) » et « [Collaboration avec les problèmes et les demandes de tirage](/github/collaborating-with-issues-and-pull-requests) ».

- Dès qu’un étudiant a terminé un devoir, vous pouvez passer en revue les fichiers du dépôt, ou l’historique et les visualisations du dépôt pour mieux comprendre le travail de l’étudiant. Pour plus d’informations, consultez « [Visualisation des données de dépôt avec des graphes](/github/visualizing-repository-data-with-graphs) ».

- Vous pouvez fournir des commentaires sur un devoir en commentant des lignes ou des commits individuels dans une demande de tirage. Pour plus d’informations, consultez « [Commentaires dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) » et « [Ouverture d’un problème à partir du code](/github/managing-your-work-on-github/opening-an-issue-from-code) ». Pour plus d’informations sur la création de réponses enregistrées afin de fournir des commentaires sur les erreurs courantes, consultez « [À propos des réponses enregistrées](/github/writing-on-github/about-saved-replies) ».

## Pour aller plus loin

- « [{% data variables.product.prodname_global_campus %} pour les enseignants](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers) »
- « [Connecter un système de gestion des formations à {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom) »
