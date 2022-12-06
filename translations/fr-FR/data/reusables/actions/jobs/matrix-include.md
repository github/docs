---
ms.openlocfilehash: 58fe7bc6f3568b066453ea1e2fa5b6defc7c5048
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145066576"
---
Utilisez `jobs.<job_id>.strategy.matrix.include` pour développer des configurations de matrice existantes ou ajouter de nouvelles configurations. La valeur de `include` est une liste d’objets.

Pour chaque objet de la liste `include`, les paires clé:valeur dans l’objet sont ajoutées à chacune des combinaisons de matrices si aucune des paires clé:valeur ne remplace les valeurs de matrice d’origine. Si l’objet ne peut pas être ajouté à l’une des combinaisons de matrices, une nouvelle combinaison de matrices est créée à la place. Notez que les valeurs de matrice d’origine ne seront pas remplacées, mais que les valeurs de matrice ajoutées peuvent être remplacées.

Par exemple, cette matrice :

```yaml
strategy:
  matrix:
    fruit: [apple, pear]
    animal: [cat, dog]
    include:
      - color: green
      - color: pink
        animal: cat
      - fruit: apple
        shape: circle
      - fruit: banana
      - fruit: banana
        animal: cat
```

entraîne six travaux avec les combinaisons de matrices suivantes :

- `{fruit: apple, animal: cat, color: pink, shape: circle}`
- `{fruit: apple, animal: dog, color: green, shape: circle}`
- `{fruit: pear, animal: cat, color: pink}`
- `{fruit: pear, animal: dog, color: green}`
- `{fruit: banana}`
- `{fruit: banana, animal: cat}`

en suivant cette logique :

- `{color: green}` est ajouté à toutes les combinaisons de matrices d’origine, car il peut être ajouté sans remplacer aucune partie des combinaisons d’origine.
- `{color: pink, animal: cat}` ajoute `color:pink` uniquement aux combinaisons de matrices d’origine qui incluent `animal: cat`. Cela remplace le `color: green` qui a été ajouté par l’entrée `include` précédente.
- `{fruit: apple, shape: circle}` ajoute `shape: circle` uniquement aux combinaisons de matrices d’origine qui incluent `fruit: apple`.
- `{fruit: banana}` ne peut pas être ajouté à une combinaison de matrices d’origine sans remplacer une valeur. Il est donc ajouté en tant que combinaison de matrices supplémentaire.
- `{fruit: banana, animal: cat}` ne peut pas être ajouté à une combinaison de matrices d’origine sans remplacer une valeur. Il est donc ajouté en tant que combinaison de matrices supplémentaire. Cela ne l’ajoute pas à la combinaison de matrices `{fruit: banana}`, car cette combinaison n’était pas l’une des combinaisons de matrices d’origine.
