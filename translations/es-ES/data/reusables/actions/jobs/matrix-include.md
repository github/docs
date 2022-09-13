---
ms.openlocfilehash: 58fe7bc6f3568b066453ea1e2fa5b6defc7c5048
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145069582"
---
Usa `jobs.<job_id>.strategy.matrix.include` para expandir las configuraciones de matriz existentes o para agregar nuevas configuraciones. El valor de `include` es una lista de objetos.

Para cada objeto de la lista `include`, los pares clave:valor del objeto se agregarán a cada una de las combinaciones de matriz si ninguno de los pares clave:valor sobrescribe ninguno de los valores de matriz originales. Si el objeto no se puede agregar a ninguna de las combinaciones de matriz, se creará una nueva combinación de matriz. Ten en cuenta que los valores originales de matriz no se sobrescribirán, mientras que los valores agregados de matriz sí se pueden sobrescribir.

Por ejemplo, esta matriz:

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

dará como resultado seis trabajos con las siguientes combinaciones de matriz:

- `{fruit: apple, animal: cat, color: pink, shape: circle}`
- `{fruit: apple, animal: dog, color: green, shape: circle}`
- `{fruit: pear, animal: cat, color: pink}`
- `{fruit: pear, animal: dog, color: green}`
- `{fruit: banana}`
- `{fruit: banana, animal: cat}`

siguiendo esta lógica:

- `{color: green}` se agrega a todas las combinaciones de matriz original, porque se puede agregar sin sobrescribir ninguna parte de las combinaciones originales.
- `{color: pink, animal: cat}` agrega `color:pink` solo a las combinaciones de matriz originales que incluyen `animal: cat`. Esto sobrescribe el `color: green` que ha sido agregado por la entrada anterior `include`.
- `{fruit: apple, shape: circle}` agrega `shape: circle` solo a las combinaciones de matriz originales que incluyen `fruit: apple`.
- `{fruit: banana}` no se puede agregar a ninguna combinación de matriz original sin sobrescribir un valor, por lo que se agrega como una combinación de matriz adicional.
- `{fruit: banana, animal: cat}` no se puede agregar a ninguna combinación de matriz original sin sobrescribir un valor, por lo que se agrega como una combinación de matriz adicional. No se agrega a la combinación de matriz `{fruit: banana}` porque esa combinación no era una de las combinaciones de matriz original.
