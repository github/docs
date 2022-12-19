---
title: Descrição da OpenAPI
intro: 'A API REST de {% data variables.product.product_name %} está totalmente descrita em um documento compatível com a OpenAPI 3.0.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 84c81c856da1da67320463fba4b9b52bca88c844
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145097077'
---
## Sobre descrições da OpenAPI

A [OpenAPI](https://swagger.io/docs/specification/about/) é uma especificação padrão usada para descrever APIs REST. As descrições da OpenAPI permitem que tanto pessoas quanto máquinas descubram as capacidades de uma API sem precisar ler primeiro a documentação ou entender a implementação. {% data variables.product.company_short %} tornou sua API REST disponível publicamente como um documento compatível com OpenAPI 3.0.

## Obter a descrição da OpenAPI de {% data variables.product.company_short %}

Encontre a descrição no repositório de código aberto [Descrição da OpenAPI da API REST](https://github.com/github/rest-api-description).

Fornecemos a descrição em dois formatos. A versão empacotada funciona para a maioria dos casos, pois inclui componentes da OpenAPI para reutilização e legibilidade. Se sua ferramenta de ferramentas não for compatíveis com referências e componentes dentro das linhas, nós também fornecemos uma versão totalmente sem referência.

## Usara descrição da OpenAPI de {% data variables.product.company_short %}

Existem diversos usos para a descrição da OpenAPI. Por exemplo, você pode:

* Gerar o seu próprio cliente da API.
* Validar e testar uma integração da API REST de {% data variables.product.company_short %}.
* Explorar e interagir com a API REST de {% data variables.product.product_name %}, usando ferramentas de terceiros, como Insomnia ou Postman.

Por exemplo, o {% data variables.product.company_short %} usa a descrição da OpenAPI da REST para gerar a [documentação de referência da API REST](/rest) do {% data variables.product.product_name %}.
