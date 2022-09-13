---
ms.openlocfilehash: 20b17f568debf8a418827882dd6d1cc9815445a0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146171858"
---
É possível definir links relativos e caminhos de imagens em seus arquivos representados para ajudar os leitores a acessar outros arquivos no repositório.

Um link relativo é um link que é relativo ao arquivo atual. Por exemplo, se você tiver um arquivo LEIAME na raiz do repositório e tiver outro arquivo em _docs/CONTRIBUTING.md_, o link relativo para _CONTRIBUTING.md_ no LEIAME poderá ter esta aparência:

```
[Contribution guidelines for this project](docs/CONTRIBUTING.md)
```

{% data variables.product.product_name %} transformará automaticamente o seu link relativo ou caminho da imagem baseado em qualquer branch em que você estiver no momento para que o link ou caminho sempre funcione. O caminho do link será relativo ao arquivo atual. Links que começam com `/` serão relativos à raiz do repositório. Você pode usar todos os operandos de link relativos, como `./` e `../`.

Os links relativos são mais fáceis para usuários que clonam o seu repositório. Os links absolutos podem não funcionar em clones do seu repositório - recomendamos usar links relativos para referir-se a outros arquivos no seu repositório.
