使用 `jobs.<job_id>.strategy.matrix.include` 扩展现有矩阵配置或添加新配置。 `include` 的值是对象的列表。

对于 `include` 列表中的每个对象，如果没有键:值对覆盖任何原始矩阵值，则该对象中的键:值对将添加到每个矩阵组合中。 如果无法将对象添加到任何矩阵组合中，则将改为创建新的矩阵组合。 请注意，原始矩阵值不会被覆盖，但添加的矩阵值可能会被覆盖。

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

将产生六个具有以下矩阵组合的作业：

- `{fruit: apple, animal: cat, color: pink, shape: circle}`
- `{fruit: apple, animal: dog, color: green, shape: circle}`
- `{fruit: pear, animal: cat, color: pink}`
- `{fruit: pear, animal: dog, color: green}`
- `{fruit: banana}`
- `{fruit: banana, animal: cat}`

遵循以下逻辑：

- `{color: green}` 将添加到所有原始矩阵组合中，因为它可以在不覆盖原始组合的任何部分的情况下添加。
- `{color: pink, animal: cat}` 仅将 `color:pink` 添加到包含 `animal: cat` 的原始矩阵组合中。 这将覆盖由上一个 `include` 条目添加的 `color: green`。
- `{fruit: apple, shape: circle}` 仅将 `shape: circle` 仅添加到包含 `fruit: apple` 的原始矩阵组合。
- `{fruit: banana}` 不能在不覆盖值的情况下添加到任何原始矩阵组合中，因此将其添加为附加矩阵组合。
- `{fruit: banana, animal: cat}` 不能在不覆盖值的情况下添加到任何原始矩阵组合中，因此将其添加为附加矩阵组合。 它不会添加到 `{fruit: banana}` 矩阵组合中，因为该组合不是原始矩阵组合之一。
