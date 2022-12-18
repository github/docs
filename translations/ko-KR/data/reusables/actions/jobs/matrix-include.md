---
ms.openlocfilehash: 58fe7bc6f3568b066453ea1e2fa5b6defc7c5048
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145068228"
---
`jobs.<job_id>.strategy.matrix.include`를 사용하여 기존 행렬 구성을 확장하거나 새 구성을 추가합니다. `include` 값은 개체 목록입니다.

`include` 목록의 각 개체에서 키:값 쌍이 원래 행렬 값을 덮어쓰지 않으면 개체의 키:값 쌍이 각 행렬 조합에 추가됩니다. 개체를 행렬 조합에 추가할 수 없는 경우 대신 새 행렬 조합이 만들어집니다. 원래 행렬 값은 덮어쓰는 것이 아니라 추가된 행렬 값을 덮어쓸 수 있습니다.

예를 들어, 이 행렬은

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

다음 행렬 조합을 사용하여 6개 작업을 생성합니다.

- `{fruit: apple, animal: cat, color: pink, shape: circle}`
- `{fruit: apple, animal: dog, color: green, shape: circle}`
- `{fruit: pear, animal: cat, color: pink}`
- `{fruit: pear, animal: dog, color: green}`
- `{fruit: banana}`
- `{fruit: banana, animal: cat}`

이때 다음 논리를 따릅니다.

- `{color: green}`는 원래 조합의 일부를 덮어쓰지 않고 추가될 수 있으므로 모든 원래 행렬 조합에 추가됩니다.
- `{color: pink, animal: cat}`는 `animal: cat`을 포함하는 원래 행렬 조합에만 `color:pink`를 추가합니다. 이렇게 하면 이전 `include` 항목이 추가한 `color: green`을 덮어씁니다.
- `{fruit: apple, shape: circle}`는 `fruit: apple`을 포함하는 원래 행렬 조합에만 `shape: circle`을 추가합니다.
- `{fruit: banana}`는 값을 덮어쓰지 않고는 원래 행렬 조합에 추가될 수 없으므로 추가 행렬 조합으로 추가됩니다.
- `{fruit: banana, animal: cat}`는 값을 덮어쓰지 않고는 원래 행렬 조합에 추가될 수 없으므로 추가 행렬 조합으로 추가됩니다. `{fruit: banana}` 행렬 조합은 원래 행렬 조합 중 하나가 아니었기 때문에 해당 조합에 추가하지 않습니다.
