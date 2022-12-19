---
title: Modification d’une affectation
intro: Vous pouvez modifier les affectations existantes dans votre cours.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can edit assignments for that classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Edit an assignment
ms.openlocfilehash: 65814debd3fb5bf64ea83b04bef6349b7755b77f
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179845'
---
## À propos de la modification des affectations

Après avoir créé une affectation, vous pouvez en modifier de nombreux aspects pour mieux répondre à vos besoins et à ceux de vos étudiants. N’oubliez pas que vous ne pouvez pas modifier le type d’affectation (individuel ou groupe) ni l’environnement de développement intégré (IDE) en ligne après avoir créé l’affectation. Pour plus d’informations, consultez « [Créer un devoir individuel](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment) » et « [Créer un devoir de groupe](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment) ».

## Modification d’une affectation existante

1. Connectez-vous à {% data variables.product.prodname_classroom_with_url %}.
1. Accédez à une classe.

    ![Capture d’écran d’une vignette de classe dans GitHub Education avec le nom de la classe mis en évidence](/assets/images/help/classroom/classroom-card.png)

1. Dans l’onglet {% octicon "repo" aria-label="The repo icon" %} **Affectations**, à côté de l’affectation que vous souhaitez modifier, cliquez sur {% octicon "pencil" aria-label="The pencil icon" %}.

    {% note %}
    
    **Remarque :** vous pouvez également modifier une affectation à partir de la page de l’affectation. Pour accéder à la page de l’affectation, dans l’onglet **Affectations**, cliquez sur le nom de l’affectation.
    
    {% endnote %}

    ![Capture d’écran d’une affectation avec l’icône Modifier mis en évidence](/assets/images/help/classroom/edit-assignment.png)

1. Sous « Titre de l’affectation », cliquez dans le champ de texte, puis supprimez le texte existant et tapez le titre de la nouvelle affectation.

    ![Capture d’écran de l’éditeur d’affectation avec le champ de texte « Titre de l’affectation » mis en évidence](/assets/images/help/classroom/edit-assignment-title.png)

1. Si vous le souhaitez, pour modifier le préfixe par défaut du référentiel d’affectation de chaque étudiant, cliquez sur {% octicon "pencil" aria-label="The pencil icon" %}.

    {% note %}

    **Remarque :** le fait de modifier le titre ou le préfixe du référentiel par défaut d’une affectation ne modifie pas le nom des référentiels des affectations existants.

    {% endnote %}

    ![Capture d’écran de l’éditeur d’affectation avec l’icône Modifier pour les préfixes de référentiel d’étudiants mise en évidence](/assets/images/help/classroom/edit-assignment-repository-prefix-icon.png)

    Ensuite, tapez le nouveau préfixe sous « Préfixe de référentiel personnalisé ».

    ![Capture d’écran de l’éditeur d’affectation avec le champ de texte « Préfixe de référentiel personnalisé » mis en évidence](/assets/images/help/classroom/edit-assignment-repository-prefix.png)

1. Sous « Échéance (facultatif) », cliquez dans le champ de texte, puis utilisez le sélecteur de dates pour réattribuer une échéance. La nouvelle échéance ne peut pas être dans le passé. La réaffectation d’une échéance met à jour l’échéance pour tous les étudiants.

    ![Capture d’écran de l’éditeur d’affectation avec le champ « Échéance (facultatif) » mis en évidence](/assets/images/help/classroom/edit-assignment-deadline.png)

1. Pour modifier l’état d’une affectation, sélectionnez le menu déroulant **État de l’affectation**, puis cliquez sur **Actif** ou **Inactif**.

    {% note %}
  
    **Remarque :** les affectations inactives ne peuvent pas être acceptées par les étudiants. Vous devez modifier l’état d’une affectation et définir la valeur « Inactif » une fois qu’aucun étudiant ne doit plus accepter une affectation ou quand l’échéance du devoir est dépassée.
  
    {% endnote %}

    ![Capture d’écran de l’éditeur d’affectation avec le menu déroulant « État de l’affectation » mis en évidence](/assets/images/help/classroom/edit-assignment-status-dropdown.png)

1.  Sous « Visibilité du dépôt », sélectionnez une visibilité. Si vous utilisez des référentiels privés, seul l’étudiant ou l’équipe peut voir les commentaires que vous fournissez.

    {% note %}
    
    **Remarque :** le fait de modifier la visibilité des référentiels d’affectation ne modifie pas rétroactivement la visibilité des référentiels des affectations existants.
    
    {% endnote %}

    ![Capture d’écran de l’éditeur d’affectation avec les cases d’option « Visibilité du référentiel » mises en évidence](/assets/images/help/classroom/edit-assignment-repository-visibility.png)

1.  Si vous le souhaitez, sélectionnez ou désélectionnez **Accorder aux étudiants l’accès admin à leur référentiel**. Pour plus d’informations sur les autorisations d’administration pour les référentiels, consultez « [À propos des référentiels](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) » et « [Rôles de référentiel pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ».

    {% note %}

    **Remarque :** le fait d’accorder ou de révoquer l’accès administrateur aux étudiants après la création d’une affectation ne modifie pas rétroactivement les autorisations pour les référentiels des affectations existants.

    {% endnote %}

    ![Capture d’écran de l’éditeur d’affectation avec la case à cocher « Accorder aux étudiants l’accès admin à leur référentiel » mise en évidence](/assets/images/help/classroom/edit-assignment-admin-access.png)

1. Pour configurer ou modifier le référentiel de modèles pour votre affectation, dans la section « Ajouter un modèle de référentiel pour donner aux étudiants un code de démarrage », sélectionnez le menu déroulant **Sélectionner un référentiel** .
       - Pour choisir un référentiel de modèles, commencez à taper le nom du référentiel dans le champ de texte, puis cliquez sur le référentiel correspondant dans les résultats de recherche.
       - Pour supprimer un modèle de référentiel, supprimez tout texte dans le champ de texte.

    {% note %}

    **Remarque :** par défaut, une affectation crée un référentiel vide pour chaque étudiant qui figure sur la liste de la classe.

    {% endnote %}

    ![Capture d’écran de l’éditeur d’affectation avec la liste déroulante « Sélectionner un référentiel » mise en évidence](/assets/images/help/classroom/edit-assignment-template-repository.png)

1. Pour ajouter un test d’évaluation automatique, dans la section « Ajouter des tests d’évaluation automatique », sélectionnez le menu déroulant **Ajouter un test**, puis cliquez sur une méthode d’évaluation dans les options qui s’affichent. Pour plus d'informations, consultez « [Utiliser l’évaluation automatique](/education/manage-coursework-with-github-classroom/use-autograding) ».
    
    ![Capture d’écran de l’éditeur d’affectation avec la liste déroulante « Ajouter un test » mise en évidence](/assets/images/help/classroom/edit-assignment-add-test.png)

    En outre, vous pouvez modifier ou supprimer des tests d’évaluation automatique existants avec {% octicon "pencil" aria-label="The pencil icon" %} ou {% octicon "trash" aria-label="The trash icon" %}.

    ![Capture d’écran de l’éditeur d’affectation avec les icônes Modifier un test et Supprimer un test mises en évidence](/assets/images/help/classroom/edit-assignment-edit-test.png)

1.  Pour activer ou désactiver les demandes de tirage de commentaires, sélectionnez ou désélectionnez **Activer les demandes de tirage de commentaires**.

    {% note %}
    
    **Remarque :** le fait d’activer ou de désactiver des demandes de tirage de commentaires pour une affectation n’entraîne ni la création ni la suppression des demandes de tirage de commentaires pour les référentiels des affectations existants.
    
    {% endnote %}

    ![Capture d’écran de l’éditeur d’affectation avec la case à cocher « Activer les demandes de tirage de commentaires » mise en évidence](/assets/images/help/classroom/edit-assignment-feedback.png)

{% data reusables.classroom.update-assignment %}

## Pour aller plus loin

- « [Créer un devoir individuel](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment) »
- « [Créer un devoir de groupe](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment) »
