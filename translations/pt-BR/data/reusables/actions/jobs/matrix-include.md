---
ms.openlocfilehash: 58fe7bc6f3568b066453ea1e2fa5b6defc7c5048
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145065428"
---
Use `jobs.<job_id>.strategy.matrix.include` para expandir as configurações de matriz existentes ou para adicionar novas configurações. O valor de `include` é uma lista de objetos.

Para cada objeto na lista `include`, os pares key:value no objeto serão adicionados a cada uma das combinações de matriz se nenhum dos pares key:value substituir qualquer um dos valores de matriz originais. Se o objeto não puder ser adicionado a nenhuma das combinações de matriz, uma nova combinação de matriz será criada. Observe que os valores de matriz originais não serão substituídos, mas os valores de matriz adicionados podem ser substituídos.

Por exemplo, esta matriz:

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

resultará em seis trabalhos com as seguintes combinações de matriz:

- `{fruit: apple, animal: cat, color: pink, shape: circle}`
- `{fruit: apple, animal: dog, color: green, shape: circle}`
- `{fruit: pear, animal: cat, color: pink}`
- `{fruit: pear, animal: dog, color: green}`
- `{fruit: banana}`
- `{fruit: banana, animal: cat}`

seguindo esta lógica:

- `{color: green}` será adicionado a todas as combinações de matriz originais porque ele pode ser adicionado sem substituir nenhuma parte das combinações originais.
- `{color: pink, animal: cat}` adiciona `color:pink` apenas às combinações de matriz originais que incluem `animal: cat`. Isso substitui o `color: green` que foi adicionado pela entrada anterior `include`.
- O `{fruit: apple, shape: circle}` adiciona `shape: circle` apenas às combinações de matriz originais que incluem `fruit: apple`.
- O `{fruit: banana}` não pode ser adicionado a nenhuma combinação de matriz original sem substituir um valor, portanto, ele é adicionado como uma combinação de matriz adicional.
- O `{fruit: banana, animal: cat}` não pode ser adicionado a nenhuma combinação de matriz original sem substituir um valor, portanto, ele é adicionado como uma combinação de matriz adicional. Ele não adiciona à combinação de matriz `{fruit: banana}` porque essa combinação não era uma das combinações de matriz originais.
