---
title: Gestion des commentaires perturbateurs
intro: 'Vous pouvez {% ifversion fpt or ghec %}masquer, modifier{% else %}modifier{% endif %} ou supprimer des commentaires à propos des problèmes, des demandes de tirage et des commits.'
redirect_from:
  - /articles/editing-a-comment
  - /articles/deleting-a-comment
  - /articles/managing-disruptive-comments
  - /github/building-a-strong-community/managing-disruptive-comments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Manage comments
ms.openlocfilehash: f27a310b0ee299839967f6db402c6fdebbc129f0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145105422'
---
## Masquage d’un commentaire

{% ifversion fpt or ghec %}Les modérateurs de l’organisation et toute personne{% else %}Toute personne{% endif %} disposant d’un accès en écriture à un dépôt peut masquer les commentaires relatifs aux problèmes, aux demandes de tirage (pull requests) et aux commits.

Si un commentaire est hors sujet, obsolète ou résolu, vous pouvez le masquer afin que la discussion reste focalisée, ou pour faciliter la navigation et la revue d’une demande de tirage. Les commentaires masqués sont réduits, mais les personnes disposant d’un accès en lecture au dépôt peuvent les développer.

![Commentaire réduit](/assets/images/help/repository/hidden-comment.png)

1. Accédez au commentaire à masquer.
2. Dans le coin supérieur droit du commentaire, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis sur **Masquer**.
  ![Icône de menu kebab horizontal et menu de modération des commentaires montrant les options de modification, de masquage et de suppression](/assets/images/help/repository/comment-menu.png)
3. À l’aide du menu déroulant « Choisir un motif », cliquez sur un motif pour masquer le commentaire. Cliquez ensuite sur **Masquer le commentaire**.
  {% ifversion fpt or ghec %} ![Menu déroulant permettant de choisir un motif de masquage du commentaire](/assets/images/help/repository/choose-reason-for-hiding-comment.png) {% else %} ![Menu déroulant permettant de choisir un motif de masquage du commentaire](/assets/images/help/repository/choose-reason-for-hiding-comment-ghe.png) {% endif %}

## Afficher un commentaire

{% ifversion fpt or ghec %}Les modérateurs de l’organisation et toute personne{% else %}Toute personne{% endif %} disposant d’un accès en écriture à un dépôt peut afficher les commentaires relatifs aux problèmes, aux demandes de tirage (pull requests) et aux commits.

1. Accédez au commentaire à afficher.
2. Dans le coin supérieur droit du commentaire, cliquez sur **{% octicon "fold" aria-label="The fold icon" %} Afficher le commentaire**.
   ![Afficher le texte du commentaire](/assets/images/help/repository/hidden-comment-show.png)
3. À droite du commentaire développé, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis sur **Afficher**.
   ![Icône de menu kebab horizontal et menu de modération des commentaires montrant les options de modification, d’affichage et de suppression](/assets/images/help/repository/comment-menu-hidden.png)

## Modification d’un commentaire

Toute personne disposant d’un accès en écriture à un dépôt peut modifier les commentaires relatifs aux problèmes, aux demandes de tirage et aux commits.

Vous pouvez modifier un commentaire ou supprimer le contenu qui ne contribue pas à la conversation, et qui enfreint le code de conduite de votre communauté{% ifversion fpt or ghec %} ou les [recommandations relatives à la communauté](/free-pro-team@latest/github/site-policy/github-community-guidelines) de GitHub{% endif %}.

Parfois, il peut être judicieux d’indiquer clairement les modifications et leur justification.

Cela dit, toute personne disposant d’un accès en lecture à un référentiel peut voir l’historique des modifications d’un commentaire. La liste déroulante **modifié** en haut du commentaire contient un historique des modifications montrant l’utilisateur et l’horodatage correspondant à chaque modification.

![Commentaire avec ajout d’une remarque indiquant que le contenu a été édité](/assets/images/help/repository/content-redacted-comment.png)

## Rédaction d’informations sensibles

Les auteurs de commentaires et toute personne disposant d’un accès en écriture à un dépôt peuvent également supprimer les informations sensibles de l’historique des modifications d’un commentaire. Pour plus d’informations, consultez « [Suivi des changements apportés à un commentaire](/communities/moderating-comments-and-conversations/tracking-changes-in-a-comment) ».

1. Accédez au commentaire à modifier.
2. Dans le coin supérieur droit du commentaire, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis sur **Modifier**.
  ![Icône de menu kebab horizontal et menu de modération des commentaires montrant les options de modification, de masquage, de suppression et de signalement](/assets/images/help/repository/comment-menu.png)
3. Dans la fenêtre de commentaire, supprimez le contenu inapproprié, puis tapez `[REDACTED]` pour le remplacer.
  ![Fenêtre de commentaire avec du contenu édité](/assets/images/help/issues/redacted-content-comment.png)
4. Au bas du commentaire, tapez une note indiquant que vous avez modifié le commentaire et, éventuellement, la raison pour laquelle vous l’avez modifié.
  ![Fenêtre de commentaire avec ajout d’une note indiquant que le contenu a été édité](/assets/images/help/issues/note-content-redacted-comment.png)
5. Cliquez sur **Mettre à jour le commentaire**.

## Suppression d’un commentaire

Toute personne disposant d’un accès en écriture à un dépôt peut supprimer les commentaires relatifs aux problèmes, aux demandes de tirage et aux commits. Les propriétaires d’organisations, les responsables d’équipes et l’auteur du commentaire peuvent également supprimer un commentaire dans une page d’équipe.

Si un commentaire contient du contenu constructif qui contribue à la conversation relative au problème ou à la demande de tirage, vous pouvez modifier le commentaire à la place.

La suppression d’un commentaire est votre dernier recours en tant que modérateur. Vous pouvez supprimer un commentaire si l’intégralité de celui-ci n’ajoute aucun contenu constructif à une conversation, et s’il enfreint le code de conduite de votre communauté{% ifversion fpt or ghec %} ou les [recommandations relatives à la communauté](/free-pro-team@latest/github/site-policy/github-community-guidelines) de GitHub{% endif %}.

La suppression d’un commentaire crée un événement de chronologie visible par toute personne disposant d’un accès en lecture au dépôt. Toutefois, le nom d’utilisateur de la personne qui a supprimé le commentaire est visible uniquement par les personnes disposant d’un accès en écriture au dépôt. Pour les personnes qui ne disposent pas d’un accès en écriture, l’événement de chronologie est anonymisé.

![Événement de chronologie anonymisé pour un commentaire supprimé](/assets/images/help/issues/anonymized-timeline-entry-for-deleted-comment.png)

{% note %}

**Remarque :** Vous ne pouvez pas supprimer le commentaire initial (ou corps) relatif à un problème ou à une demande de tirage. À la place, vous pouvez modifier les corps relatifs au problème ou à la demande de tirage pour supprimer le contenu indésirable.

{% endnote %}

### Étapes à suivre pour supprimer un commentaire

1. Accédez au commentaire à supprimer.
2. Dans le coin supérieur droit du commentaire, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis sur **Supprimer**.
  ![Icône de menu kebab horizontal et menu de modération des commentaires montrant les options de modification, de masquage, de suppression et de signalement](/assets/images/help/repository/comment-menu.png)
3. Vous pouvez éventuellement écrire quelques mots indiquant que vous avez supprimé un commentaire et pourquoi.

{% ifversion fpt or ghec %}
## Pour aller plus loin
- « [Gestion des modérateurs dans votre organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization) » {% endif %} 
