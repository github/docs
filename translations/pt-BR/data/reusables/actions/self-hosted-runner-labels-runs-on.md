---
ms.openlocfilehash: e264eacc4226a90eb80980c2b19f48dc7c1889c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879533"
---
Para especificar um executor auto-hospedado para seu trabalho, configure `runs-on` no arquivo de fluxo de trabalho com rótulos do executor auto-hospedado.

Todos os executores auto-hospedados têm o rótulo `self-hosted`. Se você só usar esse rótulo, isso selecionará qualquer executor auto-hospedado. Para selecionar os executores que atendem a determinados critérios, como sistema operacional ou arquitetura, recomendamos fornecer uma matriz de rótulos que começa com `self-hosted` (isso precisa ser listado primeiro) e, em seguida, inclui rótulos adicionais, conforme necessário. Quando você especificar uma matriz de rótulos, os trabalhos serão colocados na fila nos executores que têm todos os rótulos especificados.

Embora o rótulo `self-hosted` não seja necessário, recomendamos fortemente especificá-lo ao usar executores auto-hospedados para garantir que o seu trabalho não especifique acidentalmente nenhum executor atual ou futuro hospedado no {% data variables.product.prodname_dotcom %}.
