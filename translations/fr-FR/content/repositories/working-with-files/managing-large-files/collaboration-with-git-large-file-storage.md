---
title: Collaboration avec Git Large File Storage
intro: 'Avec {% data variables.large_files.product_name_short %} activé, vous êtes en mesure de récupérer (fetch), de modifier et de pousser (push) des fichiers volumineux comme vous le feriez normalement avec n’importe quel fichier géré par Git. Toutefois, un utilisateur qui n’a pas {% data variables.large_files.product_name_short %} connaît un workflow différent.'
redirect_from:
  - /articles/collaboration-with-large-file-storage
  - /articles/collaboration-with-git-large-file-storage
  - /github/managing-large-files/collaboration-with-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/collaboration-with-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Collaboration
ms.openlocfilehash: 4589487059e2949da64ebf40e8a602703fed2c01
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131933'
---
Si les collaborateurs sur votre dépôt n’ont pas installé {% data variables.large_files.product_name_short %}, ils n’auront pas accès au fichier volumineux d’origine. S’ils tentent de cloner votre dépôt, ils récupéreront (fetch) uniquement les fichiers pointeurs et n’auront accès à aucune des données réelles.

{% tip %}

**Conseil :** Pour aider les utilisateurs n’ayant pas activé {% data variables.large_files.product_name_short %}, nous vous recommandons de définir des instructions décrivant comment utiliser des fichiers volumineux à l’attention des contributeurs de dépôt. Par exemple, vous pouvez demander aux contributeurs de ne pas modifier les fichiers volumineux ou de charger les modifications dans un service de partage de fichiers comme [Dropbox](http://www.dropbox.com/) ou <a href="https://drive.google.com/" data-proofer-ignore>Google Drive</a>. Pour plus d’informations, consultez « [Définition de recommandations pour les contributeurs de dépôt](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors) ».

{% endtip %}

## Affichage de fichiers volumineux dans les demandes de tirage

{% data variables.product.product_name %} n’affiche pas les objets {% data variables.large_files.product_name_short %} dans les demandes de tirage. Seul le fichier pointeur est affiché :

![Exemple de demande de tirage pour fichiers volumineux](/assets/images/help/large_files/large_files_pr.png)

Pour plus d’informations sur les fichiers pointeurs, consultez « [À propos de {% data variables.large_files.product_name_long %}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format) ».

Pour voir les modifications apportées aux fichiers volumineux, extrayez la demande de tirage localement pour passer en revue les différences. Pour plus d’informations, consultez « [Extraction des demandes de tirage localement](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally) ».

{% ifversion fpt or ghec %}

## Poussée de fichiers volumineux vers des duplications (fork)

La poussée de fichiers volumineux vers les duplications d’un dépôt est prise en compte dans les quotas de bande passante et de stockage du dépôt parent, mais pas dans les quotas du propriétaire de la duplication.

Vous pouvez pousser des objets {% data variables.large_files.product_name_short %} vers des duplications publiques si le réseau du dépôt a déjà des objets {% data variables.large_files.product_name_short %} ou si vous avez accès en écriture à la racine du réseau du dépôt.

{% endif %}

## Pour aller plus loin

- « [Duplication d’un dépôt avec des objets Git Large File Storage](/articles/duplicating-a-repository/#mirroring-a-repository-that-contains-git-large-file-storage-objects) »
