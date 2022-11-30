---
title: Restauration d’une demande de tirage (pull request)
intro: Vous pouvez restaurer une demande de tirage une fois qu’elle a été fusionnée vers la branche en amont.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /articles/reverting-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 9e94b6e9358089da8f62ff5152800e14556db3e7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145133936'
---
## À propos de la restauration d’une demande de tirage (pull request)

La restauration d’une demande de tirage (pull request) sur {% data variables.product.product_name %} crée une nouvelle demande de tirage qui contient une restauration de la validation de fusion à partir de la demande de tirage fusionnée d’origine. Pour restaurer les demandes de tirage, vous devez disposer [d’autorisations d’écriture](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) dans le référentiel. 

## Restauration d’une demande de tirage (pull request)

{% note %}

**Remarque :** vous devrez peut-être restaurer les validations (commits) individuelles dans votre demande de tirage (pull request) dans l’un des cas suivants.

- La restauration de la demande de tirage entraîne des conflits de fusion
- La demande de tirage (pull request) d’origine n’a pas été fusionnée à l’origine sur {% data variables.product.product_name %}. Par exemple, un utilisateur a peut-être fusionné la demande de tirage (pull request) à l’aide d’une fusion rapide sur la ligne de commande.

Pour plus d’informations sur l’utilisation de Git pour restaurer manuellement des validations (commits) individuelles, consultez [Restauration Git](https://git-scm.com/docs/git-revert.html) dans la documentation Git.

{% endnote %}

{% data reusables.repositories.sidebar-pr %}
2. Dans la liste des « Demandes de tirage », cliquez sur la demande de tirage que vous souhaitez restaurer.
3. En bas de la demande de tirage, cliquez sur **Restaurer**. Si l’option **Restaurer** n’est pas affichée, vous devez demander à l’administrateur du référentiel qu’il vous accorde des autorisations d’écriture.
  ![Restaurer le lien de demande de tirage (pull request)](/assets/images/help/pull_requests/revert-pull-request-link.png)
4. Fusionnez la demande de tirage (pull request) obtenue. Pour plus d’informations, consultez « [Fusion d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) ».
