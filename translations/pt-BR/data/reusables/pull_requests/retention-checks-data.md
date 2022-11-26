---
ms.openlocfilehash: f95dd69778640ad4be04e0bfdab340d351845c38
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147066007"
---
Verifica se os dados com mais de 400 dias estão arquivados. Como parte do processo de arquivamento, o {% data variables.product.prodname_dotcom %} cria um status de confirmação de rollup que representa o estado de todas as verificações para essa confirmação. Como consequência, a caixa de mesclagem em qualquer solicitação pull com verificações arquivadas necessárias estará em um estado bloqueado e você precisará executar novamente as verificações antes de poder mesclar a solicitação pull.
