---
title: Création d’un pied de page ou d’une barre latérale pour votre wiki
intro: Vous pouvez ajouter une barre latérale ou un pied de page personnalisés à votre wiki pour fournir aux lecteurs des informations expliquant davantage le contexte.
redirect_from:
  - /articles/creating-a-footer
  - /articles/creating-a-sidebar
  - /articles/creating-a-footer-or-sidebar-for-your-wiki
  - /github/building-a-strong-community/creating-a-footer-or-sidebar-for-your-wiki
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create footer or sidebar
ms.openlocfilehash: 0f65114a5258d312d5a81381a59149c589ee54a4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086613'
---
## Création d’un pied de page

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Au bas de la page, cliquez sur **Ajouter un pied de page personnalisé**.
  ![Section d’ajout de pied de page au wiki](/assets/images/help/wiki/wiki_add_footer.png)
4. Utilisez l’éditeur de texte pour taper le contenu à inclure dans votre pied de page.
  ![Interface WYSIWYG du wiki](/assets/images/help/wiki/wiki-footer.png)
5. Entrez un message de commit décrivant le pied de page que vous ajoutez.
  ![Message de commit relatif au wiki](/assets/images/help/wiki/wiki_commit_message.png)
6. Pour commiter les changements apportés au wiki, cliquez sur, **Enregistrer la page**.

## Création d’une barre latérale

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Cliquez sur **Ajouter une barre latérale personnalisée**.
  ![Section d’ajout de barre latérale au wiki](/assets/images/help/wiki/wiki_add_sidebar.png)
4. Utilisez l’éditeur de texte pour ajouter le contenu de votre page.
  ![Interface WYSIWYG du wiki](/assets/images/help/wiki/wiki-sidebar.png)
5. Entrez un message de commit décrivant la barre latérale que vous ajoutez.
  ![Message de commit relatif au wiki](/assets/images/help/wiki/wiki_commit_message.png)
6. Pour commiter les changements apportés au wiki, cliquez sur, **Enregistrer la page**.

## Création d’un pied de page ou d’une barre latérale localement

Si vous créez un fichier nommé `_Footer.<extension>` ou `_Sidebar.<extension>`, nous les utiliserons pour remplir le pied de page et la barre latérale de votre wiki, respectivement. Comme toutes les autres pages wiki, l’extension que vous choisissez pour ces fichiers détermine la façon dont nous les affichons.
