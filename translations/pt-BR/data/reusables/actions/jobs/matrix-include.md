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
- `{color: pink, animal: cat}` adiciona `color>pink` apenas para as combinações originais da matriz que incluem `animal: cat`. This overwrites the `color: green` that was added by the previous `include` entry.
- `{fruit: apple, shape: circle}` adds `shape: circle` only to the original matrix combinations that include `fruit: apple`.
- `{fruit: banana}` cannot be added to any original matrix combination without overwriting a value, so it is added as an additional matrix combination.
- `{fruit: banana, animal: cat}` cannot be added to any original matrix combination without overwriting a value, so it is added as an additional matrix combination. It does not add to the `{fruit: banana}` matrix combination because that combination was not one of the original matrix combinations.
