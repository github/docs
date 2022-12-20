---
title: Modification du contenu d’un wiki
intro: 'Vous pouvez ajouter des images et des liens vers des contenus dans votre wiki, et utiliser certains formats MediaWiki pris en charge.'
redirect_from:
  - /articles/adding-links-to-wikis
  - /articles/how-do-i-add-links-to-my-wiki
  - /articles/how-do-i-add-or-upload-images-to-the-wiki
  - /articles/needs-writing-review-how-do-i-add-or-upload-images-to-the-wiki
  - /articles/how-do-i-add-images-to-my-wiki
  - /articles/adding-images-to-wikis
  - /articles/supported-mediawiki-formats
  - /articles/editing-wiki-content
  - /github/building-a-strong-community/editing-wiki-content
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 0afae4335dbf6ff78c0b0e1a2bef4cebed637a5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578939'
---
## Ajout de liens

Vous pouvez créer des liens dans les wikis en utilisant les balises standard prises en charge par votre page, ou la syntaxe MediaWiki. Par exemple :

- Si vos pages sont affichées au format Markdown, la syntaxe du lien est `[Link Text](full-URL-of-wiki-page)`.
- Avec la syntaxe MediaWiki, la syntaxe du lien est `[[nameofwikipage|Link Text]]`.

## Ajout d’images

Les wikis peuvent afficher des images PNG, JPEG et GIF.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. À l’aide de la barre latérale du wiki, accédez à la page à changer, puis cliquez sur **Modifier**.
4. Dans la barre d’outils du wiki, cliquez sur **Image**.
   ![Bouton d’ajout d’image au wiki](/assets/images/help/wiki/wiki_add_image.png)
5. Dans la boîte de dialogue « Insérer une image », tapez l’URL de l’image et le texte de remplacement (utilisé par les moteurs de recherche et les lecteurs d’écran).
6. Cliquez sur **OK**.

### Liaison d’images dans un dépôt

Vous pouvez créer un lien vers une image située dans un dépôt sur {% data variables.product.product_name %} en copiant l’URL dans votre navigateur et en l’utilisant en tant que chemin de l’image. Par exemple, l’incorporation d’une image dans votre wiki en Markdown peut ressembler à ceci :

    [[https://github.com/USERNAME/REPOSITORY/blob/main/img/octocat.png|alt=octocat]]

{% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7647 %}
## Ajout d’expressions mathématiques et de diagrammes{% endif %}

{% data reusables.getting-started.math-and-diagrams %}

## Formats MediaWiki pris en charge

Quel que soit le langage de balises dans lequel votre page wiki est écrite, certaines syntaxes MediaWiki vous seront toujours accessibles.
- Liens ([à l’exception d’AsciiDoc](https://github.com/gollum/gollum/commit/d1cf698b456cd6a35a54c6a8e7b41d3068acec3b))
- Règles horizontales via `---`
- Entités de symboles abrégés (par exemple `&delta;` ou `&euro;`)

Pour des raisons de sécurité et de performance, certaines syntaxes ne sont pas prises en charge.
- [Transclusion](https://www.mediawiki.org/wiki/Transclusion)
- Listes de définitions
- Indentation
- Table des matières
