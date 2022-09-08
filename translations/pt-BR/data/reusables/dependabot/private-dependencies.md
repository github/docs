---
ms.openlocfilehash: 0f47648322834fd8ec81dc4a975cdb8f92610a70
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145127827"
---
Atualmente, {% data variables.product.prodname_dependabot_version_updates %} não é compatível com manifesto ou arquivos de bloqueio que contêm dependências do git privadas ou registros do git privados. Isso ocorre porque, quando as atualizações de versão estiverem sendo executadas, o {% data variables.product.prodname_dependabot %} precisará conseguir resolver todas as dependências da respectiva fonte para verificar se as atualizações da versão foram bem-sucedidas.
