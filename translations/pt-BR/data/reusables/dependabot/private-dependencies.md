---
ms.openlocfilehash: 0f47648322834fd8ec81dc4a975cdb8f92610a70
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145127827"
---
Atualmente, {% data variables.product.prodname_dependabot_version_updates %} não é compatível com manifesto ou arquivos de bloqueio que contêm dependências do git privadas ou registros do git privados. Isso ocorre porque, quando as atualizações de versão estiverem sendo executadas, o {% data variables.product.prodname_dependabot %} precisará conseguir resolver todas as dependências da respectiva fonte para verificar se as atualizações da versão foram bem-sucedidas.
