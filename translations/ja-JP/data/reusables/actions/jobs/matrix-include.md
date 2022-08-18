`jobs.<job_id>.strategy.matrix.include`を使って、既存のマトリックス設定を拡張したり、新しい設定を追加したりしてください。 `include`の値は、オブジェクトのリストです。

`include`リスト中の各オブジェクトについて、オブジェクト中のkey:valueペアがいずれもオリジナルのマトリックスの値を上書きしない場合、それらのkey:valueペアはそれぞれのマトリックスの組み合わせに追加されます。 オブジェクトがマトリックスの組み合わせのいずれにも追加できない場合、代わりに新しいマトリックスの組み合わせが作成されます。 オリジナルのマトリックスの値は上書きされませんが、追加されたマトリックスの値は上書きできることに注意してください。

たとえば、以下のマトリックス

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

は、以下のマトリックスの組み合わせを持つ6つのジョブを生成します。

- `{fruit: apple, animal: cat, color: pink, shape: circle}`
- `{fruit: apple, animal: dog, color: green, shape: circle}`
- `{fruit: pear, animal: cat, color: pink}`
- `{fruit: pear, animal: dog, color: green}`
- `{fruit: banana}`
- `{fruit: banana, animal: cat}`

以下のようなロジックに従っています。

- `{color: green}`は、オリジナルの組み合わせのどの部分も上書きすることなく追加できるので、すべてのオリジナルのマトリックスの組み合わせに追加されます。
- `{color: pink, animal: cat}`は、`animal: cat`を含むオリジナルのマトリックスの組み合わせに対して`color:pink`だけを追加します。 これは、先の`include`エントリで追加された`color: green`を上書きします。
- `{fruit: apple, shape: circle}`は`fruit: apple`を含むオリジナルのマトリックスの組み合わせに`shape: circle`だけを追加します。
- `{fruit: banana}`は、値を上書きせずにオリジナルのマトリックスの組み合わせに追加することができないので、追加のマトリックスの組み合わせとして追加されます。
- `{fruit: banana, animal: cat}`は、値を上書きせずにオリジナルのマトリックスの組み合わせに追加することができないので、追加のマトリックスの組み合わせとして追加されます。 これは`{fruit: banana}`のマトリックスの組み合わせには追加されませんが、それはこの組み合わせがオリジナルのマトリックスの組み合わせの1つではないからです。
