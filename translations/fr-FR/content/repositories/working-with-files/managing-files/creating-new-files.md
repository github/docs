---
title: Création de fichiers
intro: 'Vous pouvez créer des fichiers directement sur {% data variables.product.product_name %} dans n’importe quel dépôt auquel vous avez accès en écriture.'
redirect_from:
  - /articles/creating-new-files
  - /github/managing-files-in-a-repository/creating-new-files
  - /github/managing-files-in-a-repository/managing-files-on-github/creating-new-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 1acc03b74e037db35a612cd9173e995bbf9e5271
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131993'
---
Lors de la création d’un fichier sur {% data variables.product.product_name %}, tenez compte des points suivants :

- Si vous essayez de créer un fichier dans un dépôt auquel vous n’avez pas accès, nous dupliquons le projet dans votre compte personnel et vous aidons à envoyer une [demande de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) (pull request) au dépôt d’origine une fois votre modification commitée.
- Les noms de fichiers créés par le biais de l’interface web ne peuvent contenir que des caractères alphanumériques et des traits d’union (`-`). Pour utiliser d’autres caractères, [créez et commitez les fichiers localement, puis poussez-les vers le dépôt sur {% data variables.product.product_name %}](/articles/adding-a-file-to-a-repository-using-the-command-line).

{% data reusables.repositories.sensitive-info-warning %}

{% data reusables.repositories.navigate-to-repo %}
2. Dans votre dépôt, accédez au dossier dans lequel vous souhaitez créer un fichier.
{% data reusables.files.add-file %}
4. Dans le champ du nom de fichier, tapez le nom et l’extension du fichier. Pour créer des sous-répertoires, tapez le séparateur de répertoire `/`.
![Nouveau nom de fichier](/assets/images/help/repository/new-file-name.png)
5. Sous l’onglet **Modifier un nouveau fichier**, ajoutez du contenu au fichier.
![Contenu dans un nouveau fichier](/assets/images/help/repository/new-file-content.png)
6. Pour passer en revue le nouveau contenu, cliquez sur **Aperçu**.
![Bouton d’aperçu du nouveau fichier](/assets/images/help/repository/new-file-preview.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
