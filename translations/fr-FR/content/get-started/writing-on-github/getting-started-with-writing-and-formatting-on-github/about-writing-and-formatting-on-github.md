---
title: À propos de l’écriture et de la mise en forme sur GitHub
intro: GitHub combine une syntaxe pour la mise en forme du texte appelée GitHub Flavored Markdown avec quelques fonctionnalités d’écriture uniques.
redirect_from:
  - /articles/about-writing-and-formatting-on-github
  - /github/writing-on-github/about-writing-and-formatting-on-github
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Write & format on GitHub
ms.openlocfilehash: 7819ebc6bbf3ffa8696c87f82745a19c103c8134
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147860833'
---
[Markdown](http://daringfireball.net/projects/markdown/) est une syntaxe facile à lire et à écrire pour mettre en forme du texte brut.

Nous avons ajouté des fonctionnalités personnalisées pour créer un Markdown adapté à {% data variables.product.prodname_dotcom %}, utilisé pour mettre en forme la prose et le code sur notre site.

Vous pouvez également interagir avec d’autres utilisateurs dans des demandes de tirage et des problèmes en utilisant des fonctionnalités telles que [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), [des références de problème et de demande de tirage](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests) et des [emojis](/articles/basic-writing-and-formatting-syntax/#using-emoji).

## Barre d’outils de mise en forme de texte

Chaque champ de commentaire sur {% data variables.product.product_name %} contient une barre d’outils de mise en forme de texte, qui vous permet de mettre en forme votre texte sans apprendre la syntaxe Markdown. Outre la mise en forme Markdown comme les styles gras et italique et la création d’en-têtes, de liens et de listes, la barre d’outils inclut des fonctionnalités spécifiques de {% data variables.product.product_name %}, telles que @mentions, des listes de tâches et des liens vers des problèmes et des demandes de tirage.

{% ifversion fixed-width-font-gfm-fields %}

## Activation des polices de largeur fixe dans l’éditeur

Vous pouvez activer une police de largeur fixe dans chaque champ de commentaire sur {% data variables.product.product_name %}. Chaque caractère dans une police de largeur fixe, ou à espacement fixe (monospace), occupe le même espace horizontal, ce qui peut faciliter la modification de structures Markdown avancées telles que des tables et des extraits de code.

![Capture d’écran montrant le champ de commentaire {% data variables.product.product_name %} avec les polices de largeur fixe activées](/assets/images/help/writing/fixed-width-example.png)

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}
1. Sous « Préférence de police de l’éditeur Markdown », sélectionnez **Utiliser une police de largeur fixe (monospace) lors de l’édition de Markdown**.
  ![Capture d’écran montrant le champ de commentaire {% data variables.product.product_name %} avec les polices de largeur fixe activées](/assets/images/help/writing/enable-fixed-width.png)

{% endif %}

## Pour aller plus loin

- [Spécification Markdown saveur {% data variables.product.prodname_dotcom %}](https://github.github.com/gfm/)
- « [Syntaxe de base pour l’écriture et la mise en forme ](/articles/basic-writing-and-formatting-syntax) »
- « [Utilisation de la mise en forme avancée](/articles/working-with-advanced-formatting) »
