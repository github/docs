---
title: Organisation des informations avec des sections réduites
intro: Vous pouvez simplifier votre Markdown en créant une section réduite avec la balise `<details>`.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections
shortTitle: Collapsed sections
ms.openlocfilehash: 1a1f0669ce401946f4a7a08dd1fd41893078e3d0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '146273097'
---
## Création d’une section réduite

Vous pouvez masquer temporairement des sections de votre Markdown en créant une section réduite que le lecteur peut choisir de développer. Par exemple, quand vous voulez inclure des détails techniques dans un commentaire de problème qui sont susceptibles de ne pas être pertinents ou de ne pas intéresser tous les lecteurs, vous pouvez les placer dans une section réduite.

Tout Markdown au sein du bloc `<details>` est réduit jusqu’à ce que le lecteur clique sur {% octicon "triangle-right" aria-label="The right triange icon" %} pour développer les détails. Au sein du bloc `<details>`, utilisez l’étiquette `<summary>` pour créer une étiquette à droite de {% octicon "triangle-right" aria-label="The right triange icon" %}.

````markdown
<details><summary>CLICK ME</summary>
<p>

#### We can hide anything, even code!

```ruby
   puts "Hello World"
```

</p>
</details>
````

Le Markdown est réduit par défaut.

![Rendu réduit](/assets/images/help/writing/collapsed-section-view.png)

Une fois qu’un lecteur clique sur {% octicon "triangle-right" aria-label="The right triange icon" %}, les détails sont développés.

![Rendu ouvert](/assets/images/help/writing/open-collapsed-section.png)

## Pour aller plus loin

- [Spécification Markdown saveur {% data variables.product.prodname_dotcom %}](https://github.github.com/gfm/)
- « [Syntaxe de base pour l’écriture et la mise en forme ](/articles/basic-writing-and-formatting-syntax) »
