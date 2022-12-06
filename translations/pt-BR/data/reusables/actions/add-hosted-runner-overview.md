---
ms.openlocfilehash: 955bbcc4f03b8a3a810f282c74230f220908f6b8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107862"
---
Você pode escolher um sistema operacional e uma configuração de hardware na lista de opções disponíveis. Quando novas instâncias desse executor forem implantadas por meio do dimensionamento automático, elas usarão o mesmo sistema operacional e a mesma configuração de hardware que você definiu aqui.

Você também pode definir os rótulos que identificam o executor, que é o modo como seus fluxos de trabalho poderão enviar trabalhos aos executores para processamento (usando `runs-on`). Novos executores são atribuídos automaticamente ao grupo padrão, ou você pode escolher em qual grupo os executores devem ingressar durante o processo de criação dos executores. Além disso, você pode modificar a associação ao grupo do executor depois de registrá-lo. Para obter mais informações, confira "[Como controlar o acesso aos {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)".
