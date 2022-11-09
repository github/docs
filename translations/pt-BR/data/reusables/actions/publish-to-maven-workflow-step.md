---
ms.openlocfilehash: e61b98fb2e2ad39bf3e17b058b401a6fdb967836
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145083857"
---
Executa o comando `mvn --batch-mode deploy` a ser publicado no repositório `ossrh`. A variável de ambiente `MAVEN_USERNAME` será definida com o conteúdo do segredo `OSSRH_USERNAME`, e a variável de ambiente `MAVEN_PASSWORD` será definida com o conteúdo do segredo `OSSRH_TOKEN`.
