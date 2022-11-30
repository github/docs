---
ms.openlocfilehash: 5d75f2a8b4c2c9bfdf7b491d23f76f4f820b98e7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145085242"
---
Cada licença de {% data variables.product.prodname_GH_advanced_security %} especifica um número máximo de contas, ou estações, que podem usar essas funcionalidades. Cada committer ativo para, pelo menos, um repositório com o recurso habilitado utiliza uma estação. Um autor de commit será considerado ativo se um dos commits dele tiver sido enviado por push para o repositório nos últimos 90 dias, independentemente de quando ele foi originalmente criado.

{% note %}

**Observação:** os autores de commit ativos são calculados usando as informações do autor de commit e o carimbo de data/hora de quando o código foi enviado por push para o {% data variables.product.product_name %}.

- Quando um usuário efetua push do código para o {% data variables.product.prodname_dotcom %}, cada usuário que criou o código nesse push é incluído nas estações do {% data variables.product.prodname_GH_advanced_security %}, mesmo que o código não seja novo no {% data variables.product.prodname_dotcom %}.

- Os usuários sempre devem criar branches de uma base recente ou trocar a base deles antes do push. Isso garantirá que os usuários que não fizeram commit nos últimos 90 dias não usem estações do {% data variables.product.prodname_GH_advanced_security %}.

{% endnote %}

