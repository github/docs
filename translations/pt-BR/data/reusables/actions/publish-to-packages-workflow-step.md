---
ms.openlocfilehash: cdfdf5507dd2c7efa14e7285cc2b18f163d5355d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062407"
---
Executa o comando `mvn --batch-mode deploy` para publicação no {% data variables.product.prodname_registry %}. A variável de ambiente `GITHUB_TOKEN` será definida com o conteúdo do segredo `GITHUB_TOKEN`. A chave `permissions` especifica o acesso concedido ao `GITHUB_TOKEN`.
