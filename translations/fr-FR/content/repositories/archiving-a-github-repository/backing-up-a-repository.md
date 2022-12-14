---
title: Sauvegarde d’un référentiel
intro: 'Vous pouvez utiliser{% ifversion ghes or ghae %} Git et{% endif %} l’API {% ifversion fpt or ghec %}ou un outil tiers {% endif %}pour sauvegarder votre dépôt.'
redirect_from:
  - /articles/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/backing-up-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 3c9a6b5569563858987e338584b3b42bededf716
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883448'
---
{% ifversion fpt or ghec %}

Pour télécharger une archive de votre référentiel, vous pouvez utiliser l’API pour les migrations d’utilisateurs ou d’organisations. Pour plus d’informations, consultez « [Migrations](/rest/reference/migrations) ».
{% else %}

Vous pouvez télécharger et sauvegarder manuellement vos référentiels :

- Pour télécharger les données Git d’un référentiel sur votre ordinateur local, vous devez cloner ce référentiel. Pour plus d’informations, consultez « [Clonage d’un dépôt](/articles/cloning-a-repository) ».
- Vous pouvez également télécharger le wiki de votre référentiel. Pour plus d’informations, consultez « [Ajout ou modification des pages wiki](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages) ».

Lorsque vous clonez un référentiel ou un wiki, seules les données Git, telles que les fichiers projet et l’historique des validations, sont téléchargées. Vous pouvez utiliser notre API pour exporter d’autres éléments de votre référentiel sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} sur votre ordinateur local :

- [Problèmes](/rest/reference/issues#list-issues-for-a-repository)
- [Requêtes de tirage](/rest/reference/pulls#list-pull-requests)
- [Fourches](/rest/reference/repos#list-forks)
- [Commentaires](/rest/reference/issues#list-issue-comments-for-a-repository)
- [Étapes majeures](/rest/reference/issues#list-milestones)
- [Étiquettes](/rest/reference/issues#list-labels-for-a-repository)
- [Watchers](/rest/reference/activity#list-watchers)
- [Stargazers](/rest/reference/activity#list-stargazers)
- [Projets](/rest/reference/projects#list-repository-projects) {% endif %}

Lorsque vous disposez d’une {% ifversion ghes or ghae %}version locale de tout le contenu que vous souhaitez sauvegarder, vous pouvez créer une archive zip et {% else %}après avoir téléchargé votre archive, vous pouvez {% endif %}la copier sur un disque dur externe et/ou le charger dans un service de sauvegarde ou de stockage cloud tel que [Stockage Blob Azure](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview/), [Google Drive](https://www.google.com/drive/) ou [Dropbox](https://www.dropbox.com/).

{% ifversion fpt or ghec %}
## Outils de sauvegarde tiers

Différents outils en libre-service permettent d’automatiser les sauvegardes des référentiels. Contrairement aux projets d’archivage, qui archivent _tous_ les référentiels publics sur {% data variables.product.product_name %} qui n’ont pas refusé et rendent les données accessibles à tous, les outils de sauvegarde téléchargent les données à partir de référentiels _spécifiques_ et les organisent dans une nouvelle branche ou un nouveau répertoire. Pour plus d’informations sur les projets d’archivage, consultez « [À propos de l’archivage du contenu et des données sur {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program) ». Pour plus d’informations sur les outils de sauvegarde en libre-service, consultez la [catégorie Utilitaires de sauvegarde sur {% data variables.product.prodname_marketplace %}](https://github.com/marketplace?category=backup-utilities).
{% endif %}
