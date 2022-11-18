---
title: Activation de l’accès en lecture Git anonyme pour un dépôt
intro: 'En tant qu’administrateur de dépôt, vous pouvez activer ou désactiver l’accès en lecture Git anonyme pour les dépôts publics qui répondent à certaines exigences.'
redirect_from:
  - /articles/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository
versions:
  ghes: '*'
shortTitle: Anonymous Git read access
ms.openlocfilehash: b289f2e70096775e567be0c925675e9986424821
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132158'
---
Les administrateurs de dépôt peuvent modifier le paramètre d’accès en lecture Git anonyme pour un dépôt spécifique si :
- Un administrateur de site a activé le mode privé et l’accès en lecture Git anonyme.
- Le dépôt est public sur l’entreprise et n’est pas une duplication (fork).
- Un administrateur de site n’a pas désactivé l’accès en lecture Git anonyme pour le dépôt.

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. En regard de « Activer l’accès en lecture Git anonyme », cliquez sur **Activer**.
![Bouton « Activé » sous « Accès en lecture Git anonyme »](/assets/images/help/repository/enable-git-read-access-for-a-repo.png)
4. Passez en revue les modifications. Pour confirmer, tapez le nom du dépôt et cliquez sur **Je comprends, activer l’accès en lecture Git anonyme.**
