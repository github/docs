---
title: Poussée de changements vers GitHub
shortTitle: Pushing changes
intro: 'Lorsque vous commitez des changements dans votre projet en local, vous pouvez pousser ces changements vers {% data variables.product.prodname_dotcom %} afin que les autres puissent y accéder depuis le dépôt distant.'
permissions: People with write permissions can push changes to a repository.
redirect_from:
  - /desktop/contributing-to-projects/pushing-changes-to-github
  - /desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github
versions:
  fpt: '*'
ms.openlocfilehash: b881fa5d9e66c4a63b8c648d87072037a8cba543
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086491'
---
## À propos de la poussée de changements vers {% data variables.product.prodname_dotcom %}

Quand vous poussez des changements, vous envoyez les changements commités de votre dépôt local au dépôt distant sur {% data variables.product.prodname_dotcom %}. Si vous changez votre projet localement et si vous souhaitez que d’autres personnes aient accès aux changements apportés, vous devez les pousser vers {% data variables.product.prodname_dotcom %}.

Avant de pousser les changements, vous devez mettre à jour votre branche locale pour inclure les commits qui ont été ajoutés au dépôt distant. Si quelqu’un a effectué des commits sur le dépôt distant, mais qui ne se trouvent pas sur votre branche locale, {% data variables.product.prodname_desktop %} vous invite à récupérer (fetch) les nouveaux commits avant de pousser vos changements pour éviter les conflits de fusion. Pour plus d’informations, consultez « [Synchronisation de votre branche](/desktop/contributing-to-projects/syncing-your-branch) ».

{% data reusables.desktop.protected-branches %}

## Poussée de changements vers {% data variables.product.prodname_dotcom %}

{% note %}

**Remarque :** {% data variables.product.prodname_desktop %} rejette une poussée si celle-ci dépasse certaines limites.

- Une poussée contient un fichier volumineux dont la taille dépasse {% data variables.large_files.max_github_size %}.
- La taille totale d’une poussée dépasse {% data variables.large_files.max_file_size %}.

Si vous configurez {% data variables.large_files.product_name_long %} pour effectuer le suivi de vos fichiers volumineux, vous pouvez pousser de gros fichiers, car ils ne seront pas rejetés. Pour plus d’informations, consultez « [À propos de {% data variables.large_files.product_name_long %} et de {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop) ».

{% endnote %}

{% data reusables.desktop.push-origin %}
2. Si {% data variables.product.prodname_desktop %} vous invite à récupérer de nouveaux commits à partir du dépôt distant, cliquez sur **Récupérer**.
  ![Bouton Récupérer](/assets/images/help/desktop/fetch-newer-commits.png)
3. Cliquez éventuellement sur **Créer une demande de tirage** pour ouvrir une demande de tirage (pull request), et proposer votre collaboration sur les changements apportés. Pour plus d’informations, consultez « [Création d’un problème ou d’une demande de tirage](/desktop/contributing-to-projects/creating-an-issue-or-pull-request) » ![Bouton Créer une demande de tirage](/assets/images/help/desktop/create-pull-request.png)

## Pour aller plus loin
- « [Pousser](/github/getting-started-with-github/github-glossary/#push) » dans le glossaire de {% data variables.product.prodname_dotcom %}
- « [Commit et revue des changements apportés à votre projet](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project) »
