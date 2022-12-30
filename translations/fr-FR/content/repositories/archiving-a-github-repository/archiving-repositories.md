---
title: Archivage de référentiels
intro: Vous pouvez archiver un dépôt pour le rendre accessible en lecture seule pour tous les utilisateurs et indiquer qu’il n’est plus géré activement. Vous pouvez également annuler l’archivage des dépôts qui ont été archivés.
redirect_from:
  - /articles/archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-repositories
  - /articles/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/archiving-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: a9d5b33b94e6067bb4decfa8f47da8aa25860da4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132476'
---
## À propos de l’archivage de référentiels

{% ifversion fpt or ghec %} {% note %}

**Remarque :** Si vous disposez d’un plan de facturation par référentiel hérité, votre référentiel archivé entraîne toujours des frais. Si vous ne souhaitez pas avoir à payer pour un référentiel archivé, vous devez effectuer une mise à niveau vers un nouveau produit. Pour plus d’informations, consultez « [Produits de {% data variables.product.prodname_dotcom %}](/articles/github-s-products) ».

{% endnote %} {% endif %}

{% ifversion ghec or ghes > 3.4 or ghae-issue-6329 %} {% note %}

**Remarque :** Les clients qui utilisent {% data variables.product.prodname_GH_advanced_security %} peuvent activer {% data variables.product.prodname_secret_scanning %} sur les référentiels archivés. Pour plus d’informations, consultez « [À propos de l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-private-repositories) ».

{% endnote %} {% endif %}

{% data reusables.repositories.archiving-repositories-recommendation %}

Une fois qu’un référentiel est archivé, vous ne pouvez pas ajouter ni supprimer des collaborateurs ni des équipes. Les contributeurs disposant d’un accès au référentiel ne peuvent que dupliquer (fork) votre projet et le marquer d’une étoile.

Lorsqu’un référentiel est archivé, ses problèmes, demandes de tirage, code, étiquettes, jalons, projets, wiki, mises en production, validations, balises, branches, réactions, alertes d’analyse de code, commentaires et autorisations passent en lecture seule. Pour apporter des modifications à un référentiel archivé, vous devez d’abord annuler son archivage.

Il est possible de rechercher des référentiels archivés. Pour plus d’informations, consultez « [Recherche de dépôts](/search-github/searching-on-github/searching-for-repositories/#search-based-on-whether-a-repository-is-archived) ». Vous pouvez également rechercher des problèmes et des demandes de tirage dans des référentiels archivés. Pour plus d’informations, consultez « [Recherche de problèmes et de demandes de tirage](/search-github/searching-on-github/searching-issues-and-pull-requests/#search-based-on-whether-a-repository-is-archived) ».  

## Archivage d’un référentiel

{% data reusables.repositories.archiving-repositories-recommendation %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Sous « Zone de danger », cliquez sur **Archiver ce référentiel** ou **Annuler l’archivage de ce référentiel**.
   ![Bouton Archiver ce référentiel](/assets/images/help/repository/archive-repository.png)
4. Lisez les avertissements.
5. Tapez le nom du référentiel que vous souhaitez archiver ou dont vous souhaitez annuler l’archivage.
  ![Avertissements d’archivage d’un référentiel](/assets/images/help/repository/archive-repository-warnings.png)
6. Cliquez sur **Je comprends les conséquences. Archiver ce référentiel.**
