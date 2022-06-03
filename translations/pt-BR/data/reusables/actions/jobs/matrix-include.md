Use `jobs.<job_id>.strategy.matrix.include` para expandir as configurações da matriz existentes ou para adicionar novas configurações. O valor de `incluir` é uma lista de objetos.

Para cada objeto na lista `incluir`, os pares chave-valor no objeto serão adicionados a cada uma das combinações da matriz se nenhum dos pares chave-valor sobrescrever qualquer dos valores originais da matriz. Se o objeto não pode ser adicionado a qualquer das combinações matriz, será criada uma nova combinação matriz. Observe que os valores originais da matriz não serão substituídos, mas valores adicionados da matriz podem ser substituídos.

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

- `{color: green}` é adicionado a todas as combinações de matrizes originais, porque pode ser adicionado sem substituir nenhuma parte das combinações originais.
- `{color: pink, animal: cat}` adiciona `color>pink` apenas para as combinações originais da matriz que incluem `animal: cat`. Isto sobrescreve `color: green` que foi adicionada pela entrada `incluir` anterior.
- `{fruit: apple, shape: circle}` adiciona `shape: circle` apenas às combinações da matriz original que incluem `fruit: apple`.
- `{fruit: banana}` não pode ser adicionado a qualquer combinação da matriz original sem substituir um valor. Portanto, ele é adicionado como uma combinação da matriz adicional.
- `{fruit: banana, animal: cat}` não pode ser adicionado a qualquer combinação da matriz original sem substituir um valor. Portanto, ele é adicionado como uma combinação da matriz adicional. Não se adiciona à combinação da matriz `{fruit: banana}` porque essa combinação não era uma das combinações originais da matriz.
