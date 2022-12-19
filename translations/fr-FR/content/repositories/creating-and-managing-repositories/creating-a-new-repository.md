---
title: Création d’un dépôt
intro: Vous pouvez créer un dépôt sur votre compte personnel ou toute organisation où vous disposez d’autorisations suffisantes.
redirect_from:
  - /creating-a-repo
  - /articles/creating-a-repository-in-an-organization
  - /articles/creating-a-new-organization-repository
  - /articles/creating-a-new-repository
  - /articles/creating-an-internal-repository
  - /github/setting-up-and-managing-your-enterprise-account/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-new-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: c399ac1a0881fe593087dada707296b226a5d9d8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132344'
---
{% tip %}

**Conseil :** les propriétaires peuvent restreindre les autorisations de création de référentiel dans une organisation. Pour plus d’informations, consultez « [Restriction de la création de dépôt dans votre organisation](/articles/restricting-repository-creation-in-your-organization) ».

{% endtip %}

{% tip %}

**Conseil** : vous pouvez également créer un référentiel à l’aide de la {% data variables.product.prodname_cli %}. Pour plus d’informations, consultez « [`gh repo create`](https://cli.github.com/manual/gh_repo_create) » dans la documentation {% data variables.product.prodname_cli %}.

{% endtip %}

{% data reusables.repositories.create_new %}
2. Si vous le souhaitez, pour créer un référentiel avec la structure de répertoire et les fichiers d’un référentiel existant, utilisez la liste déroulante **Choisir un modèle**, puis sélectionnez un modèle de référentiel. Vous verrez les référentiels de modèles qui vous appartiennent et qui appartiennent à des organisations dont vous êtes membre ou que vous avez déjà utilisés. Pour plus d’informations, consultez « [Création d’un référentiel à partir d’un modèle](/articles/creating-a-repository-from-a-template) ».
  ![Menu déroulant Modèle](/assets/images/help/repository/template-drop-down.png)
3. Si vous le souhaitez, pour inclure la structure et les fichiers de répertoire de toutes les branches dans le modèle, et pas seulement de la branche par défaut, sélectionnez **Inclure toutes les branches**.
    ![Case à cocher Inclure toutes les branches](/assets/images/help/repository/include-all-branches.png)
3. Dans le menu déroulant Propriétaire, sélectionnez le compte sur lequel vous souhaitez créer le référentiel.
   ![Menu déroulant Propriétaire](/assets/images/help/repository/create-repository-owner.png) {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
6. Si vous n'utilisez pas de modèle, vous pouvez préremplir votre référentiel avec un certain nombre d'éléments facultatifs. Si vous importez un référentiel existant dans {% data variables.product.product_name %}, ne choisissez aucune de ces options pour ne pas provoquer de conflit de fusion. Vous pouvez ajouter ou créer de nouveaux fichiers à l’aide de l’interface utilisateur ou choisir d’ajouter de nouveaux fichiers à l’aide de la ligne de commande ultérieurement. Pour plus d’informations, consultez « [Importation d’un référentiel Git à l’aide de la ligne de commande](/articles/importing-a-git-repository-using-the-command-line/) », « [Ajout d’un fichier à un référentiel](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line) » et « [Traitement des conflits de fusion](/articles/addressing-merge-conflicts/) ».
    - Vous pouvez créer un fichier README, qui est un document décrivant votre projet. Pour plus d’informations, consultez « [À propos des fichiers README](/articles/about-readmes/) ».
    - Vous pouvez créer un fichier *.gitignore* , qui est un ensemble de règles d’omission. Pour plus d’informations, consultez « [Ignorer des fichiers](/github/getting-started-with-github/ignoring-files) ».{% ifversion fpt or ghec %}
    - Vous pouvez choisir d’ajouter une licence logicielle pour votre projet. Pour plus d’informations, consultez « [Gestion des licences d’un référentiel](/articles/licensing-a-repository) ».{% endif %} {% data reusables.repositories.select-marketplace-apps %} {% data reusables.repositories.create-repo %} {% ifversion fpt or ghec %}
9. En bas de la page Configuration rapide qui s’affiche, sous « Importer du code à partir d’un ancien référentiel », vous pouvez choisir d’importer un projet dans votre nouveau référentiel. Pour ce faire, cliquez sur **Importer du code**.
{% endif %}

## Pour aller plus loin

- « [Gestion de l’accès aux dépôts de votre organisation](/articles/managing-access-to-your-organization-s-repositories) »
- [Guides open source](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
