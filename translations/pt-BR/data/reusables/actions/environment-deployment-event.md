---
ms.openlocfilehash: 5a6618e9b13483c7d3c647a8cb5d635225e59280
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145094403"
---
Quando um trabalho de fluxo de trabalho que referencia um ambiente é executado, ele cria um objeto de implantação com a propriedade `environment` definida como o nome do ambiente. À medida que o fluxo de trabalho progride, ele também cria objetos de status de implantação com a propriedade `environment` definida como o nome do ambiente, a propriedade `environment_url` definida como a URL para o ambiente (se especificado no fluxo de trabalho) e a propriedade `state` definida como o status do trabalho.
