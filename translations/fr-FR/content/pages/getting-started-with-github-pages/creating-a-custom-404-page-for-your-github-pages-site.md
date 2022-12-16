---
title: Création d’une page 404 personnalisée pour votre site GitHub Pages
intro: "Vous pouvez afficher une page d’erreur\_404 personnalisée quand les utilisateurs essaient d’accéder à des pages inexistantes sur votre site."
redirect_from:
  - /articles/custom-404-pages
  - /articles/creating-a-custom-404-page-for-your-github-pages-site
  - /github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create custom 404 page
ms.openlocfilehash: 1b10946277d90773b847b929d85a3b6cf8212a4e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880564'
---
{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %} {% data reusables.files.add-file %}
3. Dans le champ Nom de fichier, tapez `404.html` ou `404.md`.
  ![Champ Nom de fichier](/assets/images/help/pages/404-file-name.png)
4. Si vous avez nommé votre fichier `404.md`, ajoutez la section YAML Front Matter suivante au début du fichier :
  ```yaml
  ---
  permalink: /404.html
  ---
  ```
5. Sous la section YAML Front Matter, si elle est présente, ajoutez le contenu que vous voulez afficher sur votre page 404.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Pour aller plus loin

- [Front Matter](http://jekyllrb.com/docs/frontmatter) dans la documentation Jekyll
