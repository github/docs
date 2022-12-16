---
title: Gérer les classes
intro: 'Vous pouvez créer et gérer une classe pour chaque cours que vous enseignez avec {% data variables.product.prodname_classroom %}.'
permissions: 'Organization owners who are admins for a classroom can manage the classroom for an organization. {% data reusables.classroom.classroom-admins-link %}'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/archive-a-classroom
  - /education/manage-coursework-with-github-classroom/manage-classrooms
ms.openlocfilehash: 0c492f26092e7e9ad47c6237a55de1cf1c90e65f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145102673'
---
## À propos des classes

{% data reusables.classroom.about-classrooms %}

![Classe](/assets/images/help/classroom/classroom-hero.png)

## À propos de la gestion des classes

{% data variables.product.prodname_classroom %} utilise des comptes professionnels sur {% data variables.product.product_name %} pour gérer les autorisations, l’administration et la sécurité de chaque classe que vous créez. Chaque organisation peut avoir plusieurs classes.

Dès que vous créez une classe, {% data variables.product.prodname_classroom %} vous propose d’inviter des assistants d’enseignement et des administrateurs à la classe. Chaque classe peut avoir un ou plusieurs administrateurs. Les administrateurs peuvent être des enseignants, des assistants d’enseignement ou tout autre administrateur de cours à qui vous voulez confier le contrôle de vos classes sur {% data variables.product.prodname_classroom %}.

Invitez des assistants d’enseignement et des administrateurs à votre classe, en invitant les comptes personnels sur {% data variables.product.product_name %} à votre organisation en tant que propriétaires d’organisation, et en partageant l’URL de votre classe. Les propriétaires de l’organisation peuvent administrer n’importe quelle classe pour l’organisation. Pour plus d’informations, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) » et « [Invitation d’utilisateurs à rejoindre votre organisation](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization) ».

Quand vous avez terminé d’utiliser une classe, vous pouvez l’archiver pour pouvoir référencer par la suite la classe, la liste de classe et les devoirs, ou vous pouvez la supprimer si vous n’en avez plus besoin. 

{% data reusables.classroom.reuse-assignment-link %}

## À propos des listes de classe

Chaque classe a une liste de classe. Une liste de classe est une liste d’identificateurs pour les étudiants qui participent à votre cours.

Quand vous partagez pour la première fois l’URL d’un devoir avec un étudiant, l’étudiant doit se connecter à {% data variables.product.product_name %} avec un compte personnel afin de lier celui-ci à un identificateur pour la classe. Une fois que l’étudiant a lié un compte personnel, vous pouvez voir le compte personnel associé dans la liste. Vous pouvez également voir quand l’étudiant accepte ou envoie un devoir.

![Liste de classe](/assets/images/help/classroom/roster-hero.png)

## Prérequis

Vous devez avoir un compte professionnel sur {% data variables.product.product_name %} pour gérer les classes sur {% data variables.product.prodname_classroom %}. Pour plus d’informations, consultez « [Types de comptes {% data variables.product.company_short %}](/github/getting-started-with-github/types-of-github-accounts#organization-accounts) » et « [Création d’une organisation à partir de zéro](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) ».

Vous devez autoriser l’application OAuth pour {% data variables.product.prodname_classroom %} afin que votre organisation gère les classes pour votre compte professionnel. Pour plus d’informations, consultez « [Autorisation des applications OAuth](/github/authenticating-to-github/authorizing-oauth-apps) ».

## Création d’une classe

{% data reusables.classroom.sign-into-github-classroom %}
1. Cliquez sur **Nouvelle classe**.
  ![Bouton « Nouvelle classe »](/assets/images/help/classroom/click-new-classroom-button.png) {% data reusables.classroom.guide-create-new-classroom %}

Dès que vous avez créé une classe, vous pouvez commencer à créer des devoirs pour les étudiants. Pour plus d’informations, consultez « [Utiliser le devoir de démarrage Git et {% data variables.product.company_short %}](/education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment) », « [Créer un devoir individuel](/education/manage-coursework-with-github-classroom/create-an-individual-assignment) », « [Créer un devoir de groupe](/education/manage-coursework-with-github-classroom/create-a-group-assignment) » ou « [Réutiliser un devoir](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment) ».

## Création d’une liste de classe pour votre classe

Vous pouvez créer une liste des étudiants qui participent à votre cours.

Si votre cours a déjà une liste de classe, vous pouvez mettre à jour les étudiants sur la liste ou supprimer la liste. Pour plus d’informations, consultez « [Ajout d’un étudiant à votre liste de classe](#adding-students-to-the-roster-for-your-classroom) » ou « [Suppression d’une liste de classe](#deleting-a-roster-for-a-classroom) ».

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. Pour connecter {% data variables.product.prodname_classroom %} à votre système de gestion des formations et importer une liste de classe, cliquez sur {% octicon "mortar-board" aria-label="The mortar board icon" %} **Importer à partir d’un système de gestion des formations** et suivez les instructions. Pour plus d’informations, consultez « [Connecter un système de gestion des formations à {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom) ».
    ![Bouton « Importer à partir d’un système de gestion des formations »](/assets/images/help/classroom/click-import-from-a-learning-management-system-button.png)
1. Fournissez les identificateurs des étudiants pour votre liste de classe.
     - Pour importer une liste de classe en chargeant un fichier avec des identificateurs d’étudiant, cliquez sur **Charger un fichier CSV ou texte**.
     - Pour créer une liste de classe manuellement, tapez vos identificateurs d’étudiant.
       ![Champ de texte pour taper les identificateurs d’étudiant et bouton « Charger un fichier CSV ou texte »](/assets/images/help/classroom/type-or-upload-student-identifiers.png)
1. Cliquez sur **Créer une liste de classe**.
  ![Bouton « Créer une liste de classe »](/assets/images/help/classroom/click-create-roster-button.png)

## Ajout d’étudiants à votre liste de classe

Votre classe doit avoir une liste de classe pour pouvoir y ajouter des étudiants. Pour plus d’informations sur la création d’une liste de classe, consultez « [Création d’une liste de classe](#creating-a-roster-for-your-classroom) ».

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. À droite de « Liste de classe », cliquez sur **Mettre à jour les étudiants**.
  ![Bouton « Mettre à jour les étudiants » à droite de l’en-tête « Liste de classe » au-dessus de la liste des étudiants](/assets/images/help/classroom/click-update-students-button.png)
1. Suivez les instructions pour ajouter des étudiants à la liste de classe.
    - Pour importer des étudiants à partir d’un système de gestion des formations, cliquez sur **Synchroniser à partir d’un système de gestion des formations**. Pour plus d’informations sur l’importation d’une liste de classe à partir d’un système de gestion des formations, consultez « [Connecter un système de gestion des formations à {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom) ».
    - Pour ajouter manuellement des étudiants, sous « Ajouter manuellement des étudiants », cliquez sur **Charger un fichier CSV ou texte**, ou tapez les identificateurs des étudiants, puis cliquez sur **Ajouter des entrées de liste de classe**.
      ![Boîte de dialogue modale pour choisir la méthode d’ajout d’étudiants à la classe](/assets/images/help/classroom/classroom-add-students-to-your-roster.png)

## Renommage d’une classe

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. Sous « Nom de la classe », tapez un nouveau nom pour la classe.
  ![Champ de texte sous « Nom de la classe » pour taper le nom de la classe](/assets/images/help/classroom/settings-type-classroom-name.png)
1. Cliquez sur **Renommer la classe**.
  ![Bouton « Renommer la classe »](/assets/images/help/classroom/settings-click-rename-classroom-button.png)

## Archivage ou désarchivage d’une classe

Vous pouvez archiver une classe que vous n’utilisez plus sur {% data variables.product.prodname_classroom %}. Quand vous archivez une classe, vous ne pouvez pas créer de devoirs ni modifier les devoirs existants pour la classe. Les étudiants ne peuvent pas accepter d’invitations à des devoirs dans les classes archivées.

{% data reusables.classroom.sign-into-github-classroom %}
1. À droite du nom d’une classe, sélectionnez le menu déroulant de {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis cliquez sur **Archiver**.
  ![Menu déroulant de l’icône des points de suspension et élément de menu « Archiver »](/assets/images/help/classroom/use-drop-down-then-click-archive.png)
1. Pour désarchiver une classe, à droite du nom de la classe, sélectionnez le menu déroulant de {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis cliquez sur **Désarchiver**.
  ![Menu déroulant de l’icône des points de suspension et élément de menu « Désarchiver »](/assets/images/help/classroom/use-drop-down-then-click-unarchive.png)

## Suppression d’une liste de salle

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. Sous « Supprimer cette liste de classe », cliquez sur **Supprimer la liste de classe**.
  ![Bouton « Supprimer la liste de classe » sous « Supprimer cette liste de classe » sous l’onglet « Étudiants » d’une classe](/assets/images/help/classroom/students-click-delete-roster-button.png)
1. Lisez les avertissements, puis cliquez sur **Supprimer la liste de classe**.
  ![Bouton « Supprimer la liste de classe » sous « Supprimer cette liste de classe » sous l’onglet « Étudiants » d’une classe](/assets/images/help/classroom/students-click-delete-roster-button-in-modal.png)

## Suppression d’une classe

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. À droite de « Supprimer cette classe », cliquez sur **Supprimer la classe**.
  ![Bouton « Supprimer un dépôt »](/assets/images/help/classroom/click-delete-classroom-button.png)
1. **Lisez les avertissements**.
1. Pour vérifier que vous supprimez la classe appropriée, tapez le nom de la classe à supprimer.
  ![Boîte de dialogue modale pour supprimer une classe avec des avertissements et un champ de texte pour le nom de la classe](/assets/images/help/classroom/delete-classroom-modal-with-warning.png)
1. Cliquez sur **Supprimer la classe**.
  ![Bouton « Supprimer la classe »](/assets/images/help/classroom/delete-classroom-click-delete-classroom-button.png)
