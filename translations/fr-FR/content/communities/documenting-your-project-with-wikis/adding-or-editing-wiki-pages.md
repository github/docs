---
title: Ajout ou modification de pages wiki
intro: 'Vous pouvez ajouter et modifier des pages wiki directement sur {% data variables.product.product_name %}, ou localement à l’aide de la ligne de commande.'
redirect_from:
  - /articles/adding-wiki-pages-via-the-online-interface
  - /articles/editing-wiki-pages-via-the-online-interface
  - /articles/adding-and-editing-wik-pages-locally
  - /articles/adding-and-editing-wiki-pages-locally
  - /articles/adding-or-editing-wiki-pages
  - /github/building-a-strong-community/adding-or-editing-wiki-pages
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Manage wiki pages
ms.openlocfilehash: f163818a903d7c8261bd4c0b0268d748f578702f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147425263'
---
## Ajout de pages wiki

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Dans le coin supérieur droit de la page, cliquez sur **Nouvelle page**.
  ![Bouton de nouvelle page wiki](/assets/images/help/wiki/wiki_new_page_button.png)
4. Si vous le souhaitez, pour écrire dans un autre format que le format Markdown, utilisez le menu déroulant Mode d’édition, puis cliquez sur un autre format.
  ![Sélection du langage de balises des pages wiki](/assets/images/help/wiki/wiki_dropdown_markup.gif)
5. Utilisez l’éditeur de texte pour ajouter le contenu de votre page.
  ![Interface WYSIWYG du wiki](/assets/images/help/wiki/wiki_wysiwyg.png)
6. Tapez un message de commit décrivant le nouveau fichier que vous ajoutez.
  ![Message de commit relatif au wiki](/assets/images/help/wiki/wiki_commit_message.png)
7. Pour commiter les changements apportés au wiki, cliquez sur, **Enregistrer la page**.

## Modification des pages wiki

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
4. À l’aide de la barre latérale du wiki, accédez à la page à changer. Dans le coin supérieur droit de la page, cliquez sur **Modifier**.
   ![Bouton de modification de page wiki](/assets/images/help/wiki/wiki_edit_page_button.png)
5. Utilisez l’éditeur de texte pour modifier le contenu de la page.
   ![Interface WYSIWYG du wiki](/assets/images/help/wiki/wiki_wysiwyg.png)
6. Tapez un message de commit décrivant vos changements.
   ![Message de commit relatif au wiki](/assets/images/help/wiki/wiki_commit_message.png)
7. Pour commiter les changements apportés au wiki, cliquez sur, **Enregistrer la page**.

## Ajout ou modification de pages wiki localement

Les wikis font partie des dépôts Git. Vous pouvez donc leur apporter des changements localement, et les pousser vers votre dépôt à l’aide d’un workflow Git.

### Clonage de wikis sur votre ordinateur

Le contenu de chaque wiki est clonable facilement sur votre ordinateur.
Une fois que vous avez créé une page initiale sur {% data variables.product.product_name %}, vous pouvez cloner le référentiel sur votre ordinateur avec l’URL fournie :

```shell
$ git clone https://github.com/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.wiki.git
# Clones the wiki locally
```

Une fois que vous avez cloné le wiki, vous pouvez ajouter de nouveaux fichiers, modifier des fichiers existants et commiter vos changements. Vous et vos collaborateurs pouvez créer des branches quand vous travaillez sur des wikis. Toutefois, seuls les changements poussés vers la branche par défaut sont mis en production et accessibles à vos lecteurs.

## À propos des noms de fichiers wiki

Le nom de fichier détermine le titre de votre page wiki, alors que l’extension de fichier détermine le mode d’affichage du contenu de votre page wiki.

Les wikis utilisent [notre bibliothèque de balises open source](https://github.com/github/markup) pour convertir les balises. Ainsi, le convertisseur à utiliser est déterminé en fonction de l’extension d’un fichier. Par exemple, si vous nommez un fichier *foo.md* ou *foo.markdown*, le wiki utilise le convertisseur Markdown, alors qu’un fichier nommé *foo.textile* entraîne l’utilisation du convertisseur Textile.

N’utilisez pas les caractères suivants dans les titres de vos pages wiki : `\ / : * ? " < > |`. Les utilisateurs de certains systèmes d’exploitation ne peuvent pas utiliser les noms de fichiers contenant ces caractères. Veillez à écrire votre contenu à l’aide d’un langage de balises qui correspond à l’extension, sinon votre contenu ne s’affichera pas correctement.
