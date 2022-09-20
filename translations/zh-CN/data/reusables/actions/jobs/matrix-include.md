---
ms.openlocfilehash: 58fe7bc6f3568b066453ea1e2fa5b6defc7c5048
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145065938"
---
使用 `jobs.<job_id>.strategy.matrix.include` 扩展现有矩阵配置或添加新配置。 `include` 值是一个对象列表。

对于 `include` 列表中的每个对象，如果对象中的键:值对均未覆盖任何原始矩阵值，则会将键:值对添加到每个矩阵组合中。 如果对象不能添加到任何矩阵组合中，将改为创建新的矩阵组合。 请注意，不会覆盖原始矩阵值，但可以覆盖添加的矩阵值。

例如，此矩阵：

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

将生成具有以下矩阵组合的六个作业：

- `{fruit: apple, animal: cat, color: pink, shape: circle}`
- `{fruit: apple, animal: dog, color: green, shape: circle}`
- `{fruit: pear, animal: cat, color: pink}`
- `{fruit: pear, animal: dog, color: green}`
- `{fruit: banana}`
- `{fruit: banana, animal: cat}`

遵循以下逻辑：

- `{color: green}` 添加到所有原始矩阵组合，因为它可以添加，而不会覆盖原始组合的任何部分。
- `{color: pink, animal: cat}` 仅将 `color:pink` 添加到包含 `animal: cat` 的原始矩阵组合中。 这会覆盖上一个 `include` 条目添加的 `color: green`。
- `{fruit: apple, shape: circle}` 仅将 `shape: circle` 添加到包含 `fruit: apple` 的原始矩阵组合中。
- `{fruit: banana}` 添加到任何原始矩阵组合时都会覆盖值，因此会将其作为其他矩阵组合进行添加。
- `{fruit: banana, animal: cat}` 添加到任何原始矩阵组合时都会覆盖值，因此会将其作为其他矩阵组合进行添加。 它不会添加到 `{fruit: banana}` 矩阵组合中，因为该组合不是原始矩阵组合之一。
