---
ms.openlocfilehash: 5a6618e9b13483c7d3c647a8cb5d635225e59280
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145094403"
---
Quando um trabalho de fluxo de trabalho que referencia um ambiente é executado, ele cria um objeto de implantação com a propriedade `environment` definida como o nome do ambiente. À medida que o fluxo de trabalho progride, ele também cria objetos de status de implantação com a propriedade `environment` definida como o nome do ambiente, a propriedade `environment_url` definida como a URL para o ambiente (se especificado no fluxo de trabalho) e a propriedade `state` definida como o status do trabalho.
