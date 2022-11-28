---
title: Organisation des informations avec des tables
intro: 'Vous pouvez créer des tables pour organiser les informations dans les commentaires, les problèmes, les demandes de tirage et les wikis.'
redirect_from:
  - /articles/organizing-information-with-tables
  - /github/writing-on-github/organizing-information-with-tables
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Organized data with tables
ms.openlocfilehash: 6045e9f27432233cbfcdb654c303bc02ea5666cd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145066757'
---
## Création d’une table

Vous pouvez créer des tables avec des barres verticales `|` et des traits d’union `-`. Les tirets servent à créer l'en-tête de chaque colonne, tandis que les barres verticales séparent chaque colonne. Vous devez ajouter une ligne vide avant votre table pour qu’elle s’affiche correctement.

```markdown

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

![Table restituée](/assets/images/help/writing/table-basic-rendered.png)

Les barres verticales situées à chaque extrémité de la table sont facultatives.

La largeur des cellules peut varier et ces dernières n’ont pas besoin d’être parfaitement alignées dans les colonnes. Il doit y avoir au moins trois traits d’union dans chaque colonne de la ligne d’en-tête.

```markdown
| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |
```

![Table restituée avec une largeur de cellule variable](/assets/images/help/writing/table-varied-columns-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Mise en forme du contenu dans votre table

Vous pouvez utiliser une [mise en forme](/articles/basic-writing-and-formatting-syntax) comme des liens, des blocs de code inclus et des styles de texte dans votre table :

```markdown
| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |
```

![Table restituée avec du texte mis en forme](/assets/images/help/writing/table-inline-formatting-rendered.png)

Vous pouvez aligner le texte à gauche, à droite ou au centre d’une colonne en incluant des deux-points `:` à gauche, à droite ou des deux côtés des traits d’union dans la ligne d’en-tête.

```markdown
| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

![Table restituée avec alignement du texte à gauche, au centre et à droite](/assets/images/help/writing/table-aligned-text-rendered.png)

Pour inclure une barre verticale `|` en tant que contenu dans votre cellule, utilisez un caractère `\` avant la barre verticale :

```markdown
| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |
```

![Table restituée avec une barre verticale placée dans une séquence d’échappement](/assets/images/help/writing/table-escaped-character-rendered.png)

## Pour aller plus loin

- [Spécification Markdown saveur {% data variables.product.prodname_dotcom %}](https://github.github.com/gfm/)
- « [Syntaxe de base pour l’écriture et la mise en forme ](/articles/basic-writing-and-formatting-syntax) »
