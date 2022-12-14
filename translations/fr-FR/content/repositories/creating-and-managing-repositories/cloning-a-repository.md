---
title: Clonage d’un dépôt
intro: 'Quand vous créez un dépôt sur {% data variables.product.product_location %}, il existe en tant que dépôt distant. Vous pouvez cloner votre dépôt pour créer une copie locale sur votre ordinateur et effectuer une synchronisation entre les deux emplacements.'
redirect_from:
  - /articles/cloning-a-repository
  - /articles/cloning-a-repository-from-github
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: fbe00d1568a2f746362d434e769aef2f3466bcf1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132347'
---
## À propos du clonage d’un référentiel

Vous pouvez cloner un référentiel à partir de {% data variables.product.product_location %} sur votre ordinateur local pour faciliter la résolution des conflits de fusion, ajouter ou supprimer des fichiers et envoyer (push) des validations plus volumineuses. Lorsque vous clonez un référentiel, vous copiez le référentiel à partir de {% data variables.product.product_location %} sur votre ordinateur local.

Le clonage d’un référentiel extrait une copie complète de toutes les données du référentiel dont dispose {% data variables.product.product_location %} à ce stade, y compris toutes les versions de chaque fichier et dossier du projet. Vous pouvez envoyer (push) vos modifications au référentiel distant sur {% data variables.product.product_location %}, ou extraire les modifications d’autres personnes à partir de {% data variables.product.product_location %}. Pour plus d’informations, consultez « [Utilisation de Git](/github/getting-started-with-github/using-git) ».

Vous pouvez cloner votre référentiel existant ou cloner le référentiel existant d’une autre personne pour contribuer à un projet.

## Clonage d’un dépôt

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %} {% data reusables.command_line.git-clone-url %} {% data reusables.command_line.local-clone-created %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour cloner un référentiel localement, utilisez la sous-commande `repo clone`. Remplacez le paramètre `repository` par le nom du référentiel. Par exemple, `octo-org/octo-repo`, `monalisa/octo-repo` ou `octo-repo`. Si la partie `OWNER/` de l’argument du référentiel `OWNER/REPO` est omise, il prend par défaut le nom de l’utilisateur à l’origine de l’authentification.

```shell
gh repo clone <em>repository</em>
```

Vous pouvez également utiliser l’URL GitHub pour cloner un référentiel.

```shell
gh repo clone <em>https://github.com/cli/cli</em>
```

{% endcli %}

{% desktop %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
4. Suivez les invites dans {% data variables.product.prodname_desktop %} pour terminer le clone.

Pour plus d’informations, consultez « [Clonage d’un référentiel de {% data variables.product.prodname_dotcom %} vers {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/) ».

{% enddesktop %}

## Clonage d’un référentiel vide

Un référentiel vide ne contient aucun fichier. C’est souvent le cas si vous n’initialisez pas le référentiel avec un fichier README lors de sa création.

{% data reusables.repositories.navigate-to-repo %}
2. Pour cloner votre référentiel en utilisant la ligne de commande à l’aide du protocole HTTPS, sous « Configuration rapide », cliquez sur {% octicon "clippy" aria-label="The clipboard icon" %}. Pour cloner le référentiel à l’aide d’une clé SSH, en incluant un certificat émis par l’autorité de certification SSH de votre organisation, cliquez sur **SSH**, puis sur {% octicon "clippy" aria-label="The clipboard icon" %}.
   ![Bouton URL de clonage de référentiel vide](/assets/images/help/repository/empty-https-url-clone-button.png)

   Vous pouvez également cloner votre référentiel dans le Bureau en cliquant sur {% octicon "desktop-download" aria-label="The desktop download button" %} **Configurer dans le Bureau**, puis en suivant les invites pour terminer le clonage.
   ![Bouton du Bureau pour le clonage d’un référentiel vide](/assets/images/help/repository/empty-desktop-clone-button.png)

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %} {% data reusables.command_line.git-clone-url %} {% data reusables.command_line.local-clone-created %}

## Résolution des erreurs de clonage

Lors du clonage d’un référentiel, il est possible que vous rencontriez des erreurs.

Si vous ne parvenez pas à cloner un référentiel, vérifiez ce qui suit :

- Vous pouvez vous connecter à l’aide de HTTP. Pour plus d’informations, consultez « [Erreurs de clonage HTTPS](/github/creating-cloning-and-archiving-repositories/https-cloning-errors) ».
- Vous êtes autorisé à accéder au référentiel que vous souhaitez cloner. Pour plus d’informations, consultez « [Erreur : Référentiel introuvable](/github/creating-cloning-and-archiving-repositories/error-repository-not-found) ».
- La branche par défaut que vous souhaitez cloner existe toujours. Pour plus d’informations, consultez « [Erreur : Le référentiel distant principal fait référence à une référence inexistante, impossible d’effectuer l’extraction](/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors#error-remote-head-refers-to-nonexistent-ref-unable-to-checkout) ».

{% ifversion fpt or ghec %}

## Pour aller plus loin

- « [Résolution des problèmes liés à la connectivité](/articles/troubleshooting-connectivity-problems) »{% endif %}
