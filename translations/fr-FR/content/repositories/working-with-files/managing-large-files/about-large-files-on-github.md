---
title: À propos des fichiers volumineux sur GitHub
intro: '{% data variables.product.product_name %} limite la taille des fichiers que vous pouvez suivre dans les référentiels Git ordinaires. Découvrez comment suivre ou supprimer les fichiers qui dépassent la limite.'
redirect_from:
  - /articles/distributing-large-binaries
  - /github/managing-large-files/distributing-large-binaries
  - /github/managing-large-files/working-with-large-files/distributing-large-binaries
  - /articles/removing-files-from-a-repository-s-history
  - /articles/removing-files-from-a-repositorys-history
  - /github/managing-large-files/removing-files-from-a-repositorys-history
  - /github/managing-large-files/working-with-large-files/removing-files-from-a-repositorys-history
  - /articles/conditions-for-large-files
  - /github/managing-large-files/conditions-for-large-files
  - /github/managing-large-files/working-with-large-files/conditions-for-large-files
  - /articles/what-is-the-size-limit-for-a-repository
  - /articles/what-is-my-disk-quota
  - /github/managing-large-files/what-is-my-disk-quota
  - /github/managing-large-files/working-with-large-files/what-is-my-disk-quota
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Large files
ms.openlocfilehash: c9910f669b13c0c2bc4a8517ac6b33476b23b475
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331647'
---
## À propos des limites de taille sur {% data variables.product.product_name %}

Si {% ifversion fpt or ghec %} {% data variables.product.product_name %} tente de fournir un stockage abondant pour tous les dépôts Git, il existe des limites strictes concernant les tailles de fichiers et de dépôts. Pour garantir les performances et la fiabilité de nos utilisateurs, nous surveillons activement les signaux d’intégrité globale du dépôt. L’intégrité du dépôt dépend de différents facteurs d’interaction, dont la taille, la fréquence de validation, le contenu et la structure.

### Limites de taille de fichiers
{% endif %}

{% data variables.product.product_name %} limite la taille des fichiers autorisés dans les dépôts. Si vous tentez d’ajouter ou de mettre à jour un fichier d’une taille supérieure à {% data variables.large_files.warning_size %}, vous recevrez un avertissement de Git. Les modifications seront toujours envoyées (push) à votre dépôt, mais vous pouvez envisager de supprimer la validation pour réduire l’impact sur les performances. Pour plus d’informations, consultez « [Suppression de fichiers de l’historique d’un dépôt](#removing-files-from-a-repositorys-history) ».

{% note %}

**Remarque :** si vous ajoutez un fichier à un dépôt via un navigateur, la taille du fichier ne peut pas être supérieure à {% data variables.large_files.max_github_browser_size %}. Pour plus d’informations, consultez « [Ajout d’un fichier à un dépôt](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository) ».

{% endnote %}

{% ifversion ghes %}Par défaut, {% endif %}{% data variables.product.product_name %} bloque les envois (push) dont la taille est supérieure à {% data variables.large_files.max_github_size %}. {% ifversion ghes %}Toutefois, un administrateur de site peut configurer une limite différente pour {% data variables.product.product_location %}.  Pour plus d’informations, consultez « [Définition des limites d’envoi (push) de Git](/enterprise/admin/guides/installation/setting-git-push-limits) ».{% endif %}

Pour suivre les fichiers au-delà de cette limite, vous devez utiliser {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}). Pour plus d’informations, consultez « [À propos de {% data variables.large_files.product_name_long %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage) ».

Si vous devez distribuer des fichiers volumineux à l’intérieur de votre dépôt, vous pouvez créer des mises en production sur {% data variables.product.product_location %} au lieu de suivre les fichiers. Pour plus d’informations, consultez « [Distribution de fichiers binaires volumineux](#distributing-large-binaries) ».

Git n’est pas conçu pour gérer des fichiers SQL volumineux. Pour partager des bases de données volumineuses avec d’autres développeurs, nous vous recommandons d’utiliser [Dropbox](https://www.dropbox.com/).

{% ifversion fpt or ghec %}
### Limites de taille de dépôt

Nous conseillons de limiter la taille des dépôts petits, idéalement à moins de 1 Go, une taille inférieure à 5 Go étant vivement recommandée. Les dépôts de plus petite taille sont plus rapides à cloner et plus faciles à utiliser et à gérer. Si votre dépôt a une incidence excessive sur notre infrastructure, il se peut que vous receviez un e-mail de {% data variables.contact.github_support %} vous invitant à prendre des mesures correctives. Nous essayons d’être flexibles, en particulier avec les projets volumineux comptant de nombreux collaborateurs, et œuvrons avec vous à trouver une résolution chaque fois que c’est possible. Vous pouvez éviter que votre dépôt ait une incidence sur notre infrastructure, en gérant efficacement la taille et l’intégrité globale de votre dépôt. Vous trouverez des conseils et un outil pour l’analyse du dépôt dans le dépôt [`github/git-sizer`](https://github.com/github/git-sizer).

Des dépendances externes peuvent avoir pour effet que les dépôts Git deviennent très volumineux. Pour éviter de remplir un dépôt de dépendances externes, nous vous recommandons d’utiliser un gestionnaire de package. Les gestionnaires de packages populaires pour les langages courants sont [Bundler](http://bundler.io/), le [Gestionnaire de package de Node](http://npmjs.org/) et [Maven](http://maven.apache.org/). Ces gestionnaires de package prenant en charge l’utilisation directe de dépôts Git, vous n’avez pas besoin de sources prépackagées.

Git n’est pas conçu pour servir d’outil de sauvegarde. Toutefois, il existe de nombreuses solutions spécifiquement conçues pour effectuer des sauvegardes, telles que [Arq](https://www.arqbackup.com/), [Carbonite](http://www.carbonite.com/) et [CrashPlan](https://www.crashplan.com/en-us/).
{% endif %}

## Suppression de fichiers de l’historique d’un dépôt

{% warning %}

**Avertissement** : ces procédures suppriment définitivement les fichiers du dépôt sur votre ordinateur et de {% data variables.product.product_location %}. Si le fichier est important, effectuez une copie de sauvegarde locale dans un répertoire en dehors du dépôt.

{% endwarning %}

### Suppression d’un fichier ajouté dans la validation non envoyée (push) la plus récente

Si le fichier a été ajouté avec votre validation la plus récente, et que vous n’avez pas effectué d’envoi (push) à {% data variables.product.product_location %}, vous pouvez supprimer le fichier et modifier la validation :

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %}
3. Pour supprimer le fichier, entrez `git rm --cached` :
  ```shell
  $ git rm --cached <em>giant_file</em>
  # Stage our giant file for removal, but leave it on disk
  ```
4. Validez cette modification à l’aide de `--amend -CHEAD` :
  ```shell
  $ git commit --amend -CHEAD
  # Amend the previous commit with your change
  # Simply making a new commit won't work, as you need
  # to remove the file from the unpushed history as well
  ```
5. Envoyez (push) vos validations à {% data variables.product.product_location %} :
  ```shell
  $ git push
  # Push our rewritten, smaller commit
  ```

### Suppression d’un fichier ajouté dans une validation antérieure

Si vous avez ajouté un fichier dans une validation antérieure, vous devez le supprimer de l’historique du dépôt. Pour supprimer des fichiers de l’historique du dépôt, vous pouvez vous servir de l’outil BFG Repo-Cleaner ou utiliser la commande `git filter-branch`. Pour plus d’informations, consultez « [Suppression de données sensibles d’un dépôt](/github/authenticating-to-github/removing-sensitive-data-from-a-repository) ».

## Distribution de fichiers binaires volumineux

Si vous devez distribuer des fichiers volumineux à l’intérieur de votre dépôt, vous pouvez créer des mises en production sur {% data variables.product.product_location %}. Les mises en production vous permettent d’empaqueter des logiciels, des notes de publication et des liens vers des fichiers binaires à l’usage d’autres personnes. Pour plus d’informations, consultez « [À propos des mises en production](/github/administering-a-repository/about-releases) ».

{% ifversion fpt or ghec %}

Nous ne limitons pas la taille totale des fichiers binaires dans la mise en production ou la bande passante utilisée pour les livrer. Toutefois, chaque fichier doit être d’une taille inférieure à {% data variables.large_files.max_lfs_size %}.

{% endif %}

