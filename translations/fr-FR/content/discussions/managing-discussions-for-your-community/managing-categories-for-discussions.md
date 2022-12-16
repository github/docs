---
title: Gestion de catégories pour les discussions
intro: 'Vous pouvez catégoriser les discussions afin d’organiser les conversations des membres de votre communauté, et vous pouvez choisir un format pour chaque catégorie.'
permissions: Repository administrators and people with write or greater access to a repository can manage categories for discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage categories for discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage categories
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository
ms.openlocfilehash: e16d25ad2bb72f4aea9b441529cb8e9a7a0fee48
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410466'
---
## Gestion des catégories pour les discussions

{% data reusables.discussions.about-discussions %} {% data reusables.discussions.about-categories-and-formats %}

{% data reusables.discussions.about-announcement-format %}

Chaque catégorie doit avoir un appairage de nom et d’emoji unique, et peut être accompagnée d’une description détaillée indiquant son objectif. Les catégories aident les responsables de la maintenance à organiser le stockage des conversations, et sont personnalisables pour aider à distinguer entre celles qui sont des questions-réponses et celles qui sont des conversations plus ouvertes. {% data reusables.discussions.repository-category-limit %} Pour plus d’informations, consultez « [À propos des discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions) ».

## Catégories par défaut

| Category | Objectif | Format |
| :- | :- | :- |
| Annonces 📣 | Mises à jour et actualités des responsables de la maintenance | Annonce |
| #️⃣ General | Tout ce qui est pertinent pour le projet | Discussion ouverte |
|💡 Idées | Idées pour changer ou améliorer le projet | Discussion ouverte |
| 🗳 Sondages | Sondages avec plusieurs options de vote et de discussion pour la communauté | Sondages |
| 🙏 Questions et réponses | Questions auxquelles la communauté doit répondre, sous forme de questions/réponses | Question et réponse |
| 🙌 Montrer et expliquer | Créations, expériences ou tests pertinents pour le projet | Discussion ouverte |

## Création d’une catégorie

1. Sur {% data variables.product.product_location %}, accédez à la page principale du dépôt ou de l’organisation où vous souhaitez créer une catégorie.
{% data reusables.discussions.discussions-tab %} {% data reusables.discussions.edit-categories %}
1. Cliquez sur **Nouvelle catégorie**.
  ![Bouton « Nouvelle catégorie » au-dessus de la liste des catégories de discussion pour un dépôt](/assets/images/help/discussions/click-new-category-button.png)
1. Modifiez l’emoji, le titre, la description et le format de discussion pour la catégorie. Pour plus d’informations sur les formats de discussions, consultez « [À propos des discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions) ».
  ![Emoji, titre, description et format de discussion pour une nouvelle catégorie](/assets/images/help/discussions/edit-category-details.png)
1. Cliquez sur **Créer**.
  ![Bouton « Créer » pour une nouvelle catégorie](/assets/images/help/discussions/new-category-click-create-button.png)

## Modification d’une catégorie

Vous pouvez modifier une catégorie afin d’en changer l’emoji, le titre, la description et le format de discussion.

1. Dans {% data variables.product.product_location %}, accédez à la page principale du dépôt ou de l’organisation où vous voulez modifier une catégorie.
{% data reusables.discussions.discussions-tab %}
1. À la droite d’une catégorie dans la liste, cliquez sur {% octicon "pencil" aria-label="The pencil icon" %}.
  ![Bouton Modifier à droite d’une catégorie dans la liste des catégories d’un dépôt](/assets/images/help/discussions/click-edit-for-category.png)
1. {% data reusables.discussions.edit-category-details %} ![Modification de l’emoji, du titre, de la description et du format de discussion pour une catégorie existante](/assets/images/help/discussions/edit-existing-category-details.png)
1. Cliquez sur **Save changes**.
  ![Bouton « Enregistrer les modifications » pour une catégorie existante](/assets/images/help/discussions/existing-category-click-save-changes-button.png)

## Suppression d’une catégorie

Lorsque vous supprimez une catégorie, {% data variables.product.product_name %} déplace toutes les discussions de la catégorie supprimée vers une catégorie existante de votre choix.

1. Dans {% data variables.product.product_location %}, accédez à la page principale du dépôt ou de l’organisation où vous voulez supprimer une catégorie.
{% data reusables.discussions.discussions-tab %}
1. À la droite d’une catégorie dans la liste, cliquez sur {% octicon "trash" aria-label="The trash icon" %}.
  ![Bouton Corbeille à la droite d’une catégorie dans la liste des catégories d’un dépôt](/assets/images/help/discussions/click-delete-for-category.png)
1. Utilisez le menu déroulant pour choisir une nouvelle catégorie pour chaque discussion dans la catégorie que vous supprimez.
  ![Menu déroulant pour choisir une nouvelle catégorie lors de la suppression d’une catégorie existante](/assets/images/help/discussions/choose-new-category.png)
1. Cliquez sur **Supprimer et déplacer**.
  ![Menu déroulant pour choisir une nouvelle catégorie lors de la suppression d’une catégorie existante](/assets/images/help/discussions/click-delete-and-move-button.png)
