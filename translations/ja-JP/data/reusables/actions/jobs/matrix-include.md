---
ms.openlocfilehash: 58fe7bc6f3568b066453ea1e2fa5b6defc7c5048
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145068230"
---
`jobs.<job_id>.strategy.matrix.include` を使用して、既存のマトリックス構成を展開したり、新しい構成を追加したりします。 `include` の値は、オブジェクトのリストです。

`include` リスト内の各オブジェクトに対して、キーと値のペアのいずれも元のマトリックス値を上書きしない場合、オブジェクト内のキーと値のペアが各マトリックスの組み合わせに追加されます。 オブジェクトをどのマトリックスの組み合わせにも追加できない場合は、代わりに新しいマトリックスの組み合わせが作成されます。 元のマトリックス値は上書きされませんが、追加されたマトリックス値は上書きできます。

たとえば、次のマトリックスを見てください。

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

これは、次のマトリックスの組み合わせを持つ 6 つのジョブとなります。

- `{fruit: apple, animal: cat, color: pink, shape: circle}`
- `{fruit: apple, animal: dog, color: green, shape: circle}`
- `{fruit: pear, animal: cat, color: pink}`
- `{fruit: pear, animal: dog, color: green}`
- `{fruit: banana}`
- `{fruit: banana, animal: cat}`

このロジックに従うと、次のようになります。

- `{color: green}` は、元の組み合わせの一部を上書きせずに追加できるため、元のマトリックスの組み合わせすべてに追加されます。
- `{color: pink, animal: cat}` は、`animal: cat` を含む元のマトリックスの組み合わせにのみ `color:pink` を追加します。 これにより、前の `include` エントリによって追加された `color: green` が上書きされます。
- `{fruit: apple, shape: circle}` は、`fruit: apple` を含む元のマトリックスの組み合わせにのみ `shape: circle` を追加します。
- `{fruit: banana}` は、値を上書きせずに元のマトリックスの組み合わせに追加できないため、追加のマトリックスの組み合わせとして追加されます。
- `{fruit: banana, animal: cat}` は、値を上書きせずに元のマトリックスの組み合わせに追加できないため、追加のマトリックスの組み合わせとして追加されます。 この組み合わせは、元のマトリックスの組み合わせの 1 つではないため、`{fruit: banana}` マトリックスの組み合わせには追加されません。
