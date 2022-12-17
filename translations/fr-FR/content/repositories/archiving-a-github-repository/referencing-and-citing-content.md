---
title: Référencement et citation de contenu
intro: Vous pouvez utiliser des outils tiers pour citer et référencer du contenu sur GitHub.
redirect_from:
  - /articles/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/referencing-and-citing-content
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Reference & cite content
ms.openlocfilehash: e0bb3dabe5e9ebc8a4dff80797087c8adadfb710
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132467'
---
## Envoi d’un identificateur persistant pour votre dépôt avec Zenodo

Pour que vos dépôts soient faciles à référencer dans la littérature académique, vous pouvez créer des identificateurs persistants, également appelés Identificateurs d’objets numériques (DOI). Vous pouvez utiliser l’outil d’archivage de données [Zenodo](https://zenodo.org/about) pour archiver un dépôt sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} et envoyer un DOI pour l’archive.

{% tip %}

**Conseils :**
- Zenodo pouvant accéder uniquement aux dépôts publics, vérifiez que le dépôt que vous voulez archiver est [public](/articles/making-a-private-repository-public).
- Pour archiver un dépôt appartenant à une organisation, le propriétaire d’organisation peut avoir besoin d’[approuver l’accès](/articles/approving-oauth-apps-for-your-organization) de l’application Zenodo.
- Veillez à ajouter une [licence](/articles/open-source-licensing) dans votre dépôt afin que les lecteurs sachent comment réutiliser votre travail.

{% endtip %}

1. Accédez à [Zenodo](http://zenodo.org/).
2. En haut à gauche de l’écran, cliquez sur **Log in**. ![Bouton Log in dans Zenodo](/assets/images/help/repository/zenodo_login.png)
3. Cliquez sur **Log in with GitHub**. ![Se connecter à Zenodo avec GitHub](/assets/images/help/repository/zenodo_login_with_github.png)
4. Passez en revue les informations sur les autorisations d’accès, puis cliquez sur **Authorize application**. ![Autoriser Zenodo](/assets/images/help/repository/zenodo_authorize.png)
5. Accédez à la [page GitHub de Zenodo](https://zenodo.org/account/settings/github/). ![Page GitHub de Zenodo](/assets/images/help/repository/zenodo_github_page.png)
6. À droite du nom du dépôt à archiver, basculez le bouton **Off** sur **On** pour activer l’archivage. ![Activer l’archivage Zenodo sur le dépôt](/assets/images/help/repository/zenodo_toggle_on.png)

Zenodo archive votre dépôt et envoie un nouveau DOI chaque fois que vous créez une [mise en production](/articles/about-releases/) {% data variables.product.product_name %}. Suivez les étapes décrites dans « [Création de mises en production](/articles/creating-releases/) » pour en créer une.

## Diffusion publique et citation de documents de recherche avec Figshare

Les universitaires peuvent utiliser le service de gestion de données [Figshare](http://figshare.com) pour diffuser publiquement et citer des documents de recherche. Pour plus d’informations, consultez le [site de support de Figshare](https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account).
