---
ms.openlocfilehash: d4d496d4b5c45f557d80aace29013b3b32e478c6
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182271"
---
Se `autobuild` falhar ou você quiser analisar um conjunto de arquivos de origem diferentes daqueles criados pelo processo `autobuild`, remova a etapa `autobuild` do fluxo de trabalho e adicione manualmente as etapas de compilação. Para projetos C/C++, C#, Go,{% ifversion codeql-kotlin-beta %} Kotlin{% endif %} e Java, o {% data variables.product.prodname_codeql %} analisará qualquer código-fonte criado por suas etapas de compilação especificadas.

