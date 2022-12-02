---
ms.openlocfilehash: dd7c5f37ab5b2d699b47460195e02ae21fca1733
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/29/2022
ms.locfileid: "148184380"
---
A API REST do {% data variables.product.product_name %} tem controle de versão. O nome da versão da API é baseado na data em que a versão da API foi lançada. Por exemplo, a versão `{{ initialRestVersioningReleaseDate }}` da API foi lançada em {{ initialRestVersioningReleaseDateLong }}.

Quaisquer alterações interruptivas serão lançadas em uma nova versão da API. Alterações interruptivas são alterações que podem potencialmente interromper uma integração. As alterações interruptivas incluem:

- removendo uma operação inteira
- removendo ou renomeando um parâmetro
- removendo ou renomeando um campo de resposta
- adicionando um novo parâmetro obrigatório
- fazendo um parâmetro opcional anteriormente necessário
- alterando o tipo de um parâmetro ou campo de resposta
- removendo valores de enumeração
- adicionando uma nova regra de validação a um parâmetro existente
- alterando os requisitos de autenticação ou autorização

Quaisquer alterações aditivas (não interruptivas) estarão disponíveis em todas as versões da API com suporte. Alterações aditivas são alterações que não devem interromper uma integração. As alterações aditivas incluem:

- adicionando uma operação
- adicionando um parâmetro opcional
- adicionando um cabeçalho de solicitação opcional
- adicionando um campo de resposta
- adicionando um cabeçalho de resposta
- adicionando valores de enumeração

Quando uma nova versão da API REST for lançada, a versão anterior da API terá suporte por pelo menos mais 24 meses após o lançamento da nova versão da API.
