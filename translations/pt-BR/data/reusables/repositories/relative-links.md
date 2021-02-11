É possível definir links relativos e caminhos de imagens em seus arquivos representados para ajudar os leitores a acessar outros arquivos no repositório.

Um link relativo é um link que é relativo ao arquivo atual. Por exemplo, se você tiver um arquivo README na raiz do seu repositório e tiver outro arquivo em _docs/CONTRIBUTING.md_, o link relativo para _CONTRIBUTING.md_ no seu README pode se parecer com isso:

```
[Diretrizes de contribuição para este projeto](docs/CONTRIBUTING.md)
```

{% data variables.product.product_name %} transformará automaticamente o seu link relativo ou caminho da imagem baseado em qualquer branch em que você estiver no momento para que o link ou caminho sempre funcione. Você pode usar todas as operações de links relativos, como `./` e `../`.

Os links relativos são mais fáceis para usuários que clonam o seu repositório. Os links absolutos podem não funcionar em clones do seu repositório - recomendamos usar links relativos para referir-se a outros arquivos no seu repositório.
