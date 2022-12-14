---
title: Utiliser le devoir de démarrage Git et GitHub
intro: 'Vous pouvez utiliser le devoir de démarrage Git et {% data variables.product.company_short %} pour donner aux étudiants une vue d’ensemble des bases de Git et de {% data variables.product.company_short %}.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can use Git & {% data variables.product.company_short %} starter assignments. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment
shortTitle: Starter assignment
ms.openlocfilehash: ec19f9ce78b3a14803ee7383a05e7d0188830c7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147574011'
---
Le devoir de démarrage Git et {% data variables.product.company_short %} est un cours prédéfini qui résume les principes de base de Git et {% data variables.product.company_short %}, et propose aux étudiants des liens vers des ressources pour en savoir plus sur des sujets spécifiques.

## Prérequis

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Création du devoir de démarrage

### S’il n’y a pas encore de devoirs dans la classe

1. Connectez-vous à {% data variables.product.prodname_classroom_with_url %}.
2. Accédez à une classe.
3. Sous l’onglet {% octicon "repo" aria-label="The repo icon" %} **Devoirs**, cliquez sur **Utiliser le devoir de démarrage**.

<div class="procedural-image-wrapper">
  <img alt="Creating your first assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-create-first-assignment.png">
</div>

### S’il y a déjà des devoirs dans la classe

1. Connectez-vous à {% data variables.product.prodname_classroom_with_url %}.
2. Accédez à une classe.
3. Sous l’onglet {% octicon "repo" aria-label="The repo icon" %} **Devoirs**, cliquez sur le lien de la bannière bleue.

<div class="procedural-image-wrapper">
  <img alt="The 'New assignment' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-new-starter-assignment-button.png">
</div>

## Configuration des éléments de base d’un devoir

Importez le cours de démarrage dans votre organisation, donnez un nom à votre devoir, choisissez éventuellement une échéance ainsi que la visibilité des dépôts de devoir.

- [Composants requis](#prerequisites)
- [Création du devoir de démarrage](#creating-the-starter-assignment)
  - [S’il n’y a pas encore de devoirs dans la classe](#if-there-are-no-existing-assignments-in-the-classroom)
  - [S’il y a déjà des devoirs dans la classe](#if-there-already-are-existing-assignments-in-the-classroom)
- [Configuration des éléments de base d’un devoir](#setting-up-the-basics-for-an-assignment)
  - [Importation du devoir](#importing-the-assignment)
  - [Nommage du devoir](#naming-the-assignment)
  - [Attribution d’une échéance pour un devoir](#assigning-a-deadline-for-an-assignment)
  - [Choix d’une visibilité pour les dépôts de devoir](#choosing-a-visibility-for-assignment-repositories)
- [Invitation d’étudiants à un devoir](#inviting-students-to-an-assignment)
- [Étapes suivantes](#next-steps)
- [Pour aller plus loin](#further-reading)

### Importation du devoir

Vous devez d’abord importer le devoir de démarrage Git et {% data variables.product.product_name %} dans votre organisation.

<div class="procedural-image-wrapper">
  <img alt="The `Import the assignment` button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-import-starter-assignment.png">
</div>

### Nommage du devoir

Pour un devoir individuel, {% data variables.product.prodname_classroom %} nomme les dépôts avec le préfixe du dépôt et le nom d’utilisateur {% data variables.product.product_name %} de l’étudiant. Par défaut, le préfixe du dépôt est le titre du devoir. Par exemple, si vous nommez un devoir « assignment-1 » et que le nom d’utilisateur de l’étudiant sur {% data variables.product.product_name %} est @octocat, le nom du dépôt de devoir pour @octocat est `assignment-1-octocat`.

{% data reusables.classroom.assignments-type-a-title %}

### Attribution d’une échéance pour un devoir

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Choix d’une visibilité pour les dépôts de devoir

Les dépôts d’un devoir peuvent être publics ou privés. Si vous utilisez des dépôts privés, seul l’étudiant peut voir les commentaires que vous fournissez. Sous « Visibilité du dépôt », sélectionnez une visibilité.

Quand vous avez terminé, cliquez sur **Continuer**. {% data variables.product.prodname_classroom %} crée le devoir et vous dirige vers la page du devoir.

<div class="procedural-image-wrapper">
  <img alt="'Continue' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-continue-button.png">
</div>

## Invitation d’étudiants à un devoir

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

Vous pouvez voir si un étudiant a rejoint la classe et a accepté ou envoyé un devoir sous l’onglet **Tous les étudiants** du devoir. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Individual assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

Le devoir de démarrage Git et {% data variables.product.company_short %} est disponible seulement pour les étudiants individuels, pas pour les groupes. Une fois que vous avez créé le devoir, les étudiants peuvent commencer à travailler dessus.

## Étapes suivantes

- Personnaliser des devoirs supplémentaires pour votre cours. Pour plus d’informations, consultez « [Créer un devoir individuel](/education/manage-coursework-with-github-classroom/create-an-individual-assignment) », « [Créer un devoir de groupe](/education/manage-coursework-with-github-classroom/create-a-group-assignment) » et « [Réutiliser un devoir](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment) ».

## Pour aller plus loin

- « [{% data variables.product.prodname_global_campus %} pour les enseignants](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers) »
- « [Connecter un système de gestion des formations à {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom) »
