---
title: Laisser des commentaires en utilisant des demandes de tirage
intro: Vous pouvez laisser des commentaires à vos étudiants dans une demande de tirage spéciale au sein du dépôt pour chaque devoir.
permissions: People with read permissions to a repository can leave feedback in a pull request for the repository.
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/leaving-feedback-in-github
  - /education/manage-coursework-with-github-classroom/leave-feedback-with-pull-requests
shortTitle: Pull requests
ms.openlocfilehash: 6315904aaaa02acc66249039e99a402b455a8871
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106361'
---
## À propos des demandes de tirage de commentaires pour les devoirs

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

Quand vous activez la demande de tirage pour laisser des commentaires sur un devoir, {% data variables.product.prodname_classroom %} crée une demande de tirage spéciale intitulée **Commentaires** dans le dépôt de devoir de chaque étudiant ou équipe. La demande de tirage affiche automatiquement chaque commit poussé par un étudiant dans la branche par défaut du dépôt du devoir.

## Prérequis

Pour créer la demande de tirage de commentaires et y accéder, vous devez activer la demande de tirage de commentaires quand vous créez le devoir. {% data reusables.classroom.for-more-information-about-assignment-creation %}

## Laisser des commentaires dans une demande de tirage pour un devoir

{% data reusables.classroom.sign-into-github-classroom %}
1. Dans la liste des classes, cliquez sur la classe qui a le devoir que vous voulez réviser.
  ![Classe dans la liste des classes d’une organisation](/assets/images/help/classroom/click-classroom-in-list.png) {% data reusables.classroom.click-assignment-in-list %}
1. À droite de l’envoi, cliquez sur **Réviser**.
  ![Bouton Réviser du devoir dans la liste des envois d’un devoir](/assets/images/help/classroom/assignments-click-review-button.png)
1. Réviser une demande de tirage. Pour plus d’informations, consultez « [Commentaires dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) ».

## Pour aller plus loin

- « [Intégrer {% data variables.product.prodname_classroom %} à un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide) »
