---
title: Ajout d’une licence à un dépôt
intro: "Vous pouvez inclure une licence open\_source dans votre dépôt pour faciliter la contribution d’autres personnes."
redirect_from:
  - /articles/adding-a-license-to-a-repository
  - /github/building-a-strong-community/adding-a-license-to-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add a license to a repo
ms.openlocfilehash: 7961f690678d2bfe53726a33d02a54e95b9cfe78
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145105414'
---
Si vous incluez une licence détectable dans votre dépôt, les visiteurs la voient en haut de la page du dépôt. Pour lire l’intégralité du fichier de licence, cliquez sur le nom de la licence.

![En-tête de dépôt avec une licence MIT](/assets/images/help/repository/repo-license-indicator.png)

Les licences open source permettent à d’autres personnes d’utiliser, de changer et de distribuer librement le projet dans votre dépôt. Pour plus d’informations sur les licences de dépôt, consultez « [Gestion des licences d’un dépôt](/articles/licensing-a-repository) ».

## Ajout d’une licence open source à votre dépôt

<!--Dotcom version uses the license tool-->
{% ifversion fpt or ghec %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Dans le champ du nom de fichier, tapez *LICENSE* ou *LICENSE.md* (tout en majuscules).
4. À droite du champ du nom de fichier, cliquez sur **Choisir un modèle de licence**.
  ![Bouton Choisir un modèle de licence](/assets/images/help/repository/license-tool.png)
5. Dans la partie gauche de la page, sous « Ajouter une licence à votre projet », passez en revue les licences disponibles, puis sélectionnez une licence dans la liste.
  ![Liste des licences disponibles](/assets/images/help/repository/license-tool-picker.png)
6. Cliquez sur **Passer en revue et envoyer**.
  ![Bouton Passer en revue et envoyer](/assets/images/help/repository/license-review-tool.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.choose-commit-email %}
10. Cliquez sur **Commiter le nouveau fichier**.
  ![Commiter la licence dans la branche](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

<!--GHE version just adds a file named LICENSE or LICENSE.md-->
{% ifversion ghes %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Dans le champ du nom de fichier, tapez *LICENSE* ou *LICENSE.md* (tout en majuscules).
4. Sous l’onglet **Modifier le nouveau fichier**, collez le texte complet de la licence à utiliser.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %}
7. Sous les champs de message de commit, choisissez si vous souhaitez ajouter votre commit à la branche actuelle ou à une nouvelle branche. Si votre branche actuelle est `main`, vous devez choisir de créer une branche pour votre commit, puis de créer une demande de tirage (pull request). Pour plus d’informations, consultez « [Création d’une demande de tirage](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) ».
![Options de commit dans une branche](/assets/images/help/repository/choose-commit-branch.png)
8. Cliquez sur **Commiter le nouveau fichier**.
  ![Commiter la licence dans la branche](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

## Pour aller plus loin

- « [Définition de recommandations pour les contributeurs de dépôt](/articles/setting-guidelines-for-repository-contributors) »
