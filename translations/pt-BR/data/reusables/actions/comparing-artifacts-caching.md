---
ms.openlocfilehash: 48326e29174e0cba6f56d99436271a68f65189bc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145095055"
---
## Comparando artefatos e memorização de dependência

Os artefatos são similares, pois fornecem a habilidade de armazenar arquivos em {% data variables.product.prodname_dotcom %}, mas cada recurso oferece usos diferentes e não podem ser usados de forma intercambiável.

- Use o cache quando quiser reutilizar arquivos que não são alterados com frequência entre trabalhos ou execuções de fluxo de trabalho, como dependências de build de um sistema de gerenciamento de pacotes.
- Use artefatos quando quiser salvar arquivos produzidos por um trabalho a serem exibidos após o fim de uma execução de fluxo de trabalho, como binários internos ou logs de build. 
