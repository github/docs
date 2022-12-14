---
title: Définition de recommandations pour les contributeurs de dépôt
intro: Vous pouvez créer des instructions pour expliquer comment les personnes doivent contribuer à votre projet.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /articles/how-do-i-set-up-guidelines-for-contributors
  - /articles/setting-guidelines-for-repository-contributors
  - /github/building-a-strong-community/setting-guidelines-for-repository-contributors
topics:
  - Community
shortTitle: Contributor guidelines
ms.openlocfilehash: b418c5a3d10f8b8f7572f33b17a9ebfbb3de27d3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578787'
---
## À propos des recommandations relatives aux contributions
Pour aider les contributeurs de votre projet à faire du bon travail, vous pouvez ajouter un fichier contenant des recommandations relatives aux contributions à la racine, au dossier `docs` ou au dossier `.github` du dépôt de votre projet. Quand une personne ouvre une demande de tirage ou crée un problème, elle voit un lien vers ce fichier. Le lien vers les recommandations relatives aux contributions apparaît également dans la page `contribute` de votre dépôt. Pour obtenir un exemple de page `contribute`, consultez [github/docs/contribute](https://github.com/github/docs/contribute). 

![contributing-guidelines](/assets/images/help/pull_requests/contributing-guidelines.png)

Pour le propriétaire du dépôt, les recommandations relatives aux contributions sont un moyen de décrire la façon dont les utilisateurs doivent apporter leur contribution.

Pour les contributeurs, les recommandations sont un moyen de vérifier qu’ils envoient des demandes de tirage (pull request) bien formées, et qu’ils ouvrent des problèmes pertinents.

Pour les propriétaires comme pour les contributeurs, les recommandations relatives aux contributions permettent de gagner du temps et de réduire les tracas liés aux demandes de tirage mal créées, ou aux problèmes qui doivent être rejetés et soumis à nouveau.

{% ifversion fpt or ghes or ghec %}

Vous pouvez créer des recommandations par défaut relatives aux contributions pour votre organisation{% ifversion fpt or ghes or ghec %} ou votre compte personnel{% endif %}. Pour plus d’informations, consultez « [Création d’un fichier d’intégrité de la communauté par défaut](//communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) ».

{% endif %}

{% tip %}

**Conseil :** Les responsables de la gestion d’un dépôt peuvent définir des recommandations spécifiques aux problèmes en créant un modèle de problème ou de demande de tirage pour le dépôt. Pour plus d’informations, consultez « [À propos des modèles de problème et de demande de tirage](/articles/about-issue-and-pull-request-templates) ».

{% endtip %}

## Ajout d’un fichier *CONTRIBUTING*

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Déterminez si vous souhaitez stocker vos recommandations relatives aux contributions à la racine, dans le répertoire `docs` ou dans le répertoire `.github` de votre dépôt. Tapez ensuite dans le champ du nom de fichier, le nom et l’extension du fichier. Les noms de fichiers des recommandations relatives aux contributions ne respectent pas la casse. Les fichiers sont affichés au format RTF si l’extension de fichier est dans un format pris en charge. Pour plus d’informations, consultez « [Travailler avec des fichiers non basés sur du code](/repositories/working-with-files/using-files/working-with-non-code-files#rendering-differences-in-prose-documents) ».
  ![Nouveau nom de fichier](/assets/images/help/repository/new-file-name.png)
    - Pour rendre vos recommandations relatives aux contributions visibles dans le répertoire racine du dépôt, tapez *CONTRIBUTING*.
    - Pour rendre vos recommandations relatives aux contributions visibles dans le répertoire `docs` du dépôt, tapez *docs/* pour créer le répertoire, puis *CONTRIBUTING*.
    - Si un dépôt contient plusieurs fichiers *CONTRIBUTING*, le fichier affiché dans les liens est choisi parmi les emplacements suivants dans cet ordre : répertoire `.github`, puis répertoire racine du dépôt et enfin répertoire `docs`.
4. Dans le nouveau fichier, ajoutez des recommandations relatives aux contributions. Vous pouvez inclure ce qui suit :
    - Étapes permettant de créer des problèmes ou des demandes de tirage utiles.
    - Liens vers de la documentation externe, des listes de diffusion ou un code de conduite.
    - Attentes liées à la communauté et au comportement.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Exemples de recommandations relatives aux contributions

Si vous êtes perplexe, voici quelques bons exemples de recommandations relatives aux contributions :

- [Recommandations relatives aux contributions](https://github.com/atom/atom/blob/master/CONTRIBUTING.md) pour l’éditeur Atom.
- [Recommandations relatives aux contributions](https://github.com/rails/rails/blob/main/CONTRIBUTING.md) pour Ruby on Rails.
- [Recommandations relatives aux contributions](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md) pour OpenGovernment.

## Pour aller plus loin
- Section « [Démarrage d’un projet open source](https://opensource.guide/starting-a-project/) » dans Open Source Guides{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}{% ifversion fpt or ghes or ghec %}
- « [Ajout d’une licence à un dépôt](/articles/adding-a-license-to-a-repository) »{% endif %}
