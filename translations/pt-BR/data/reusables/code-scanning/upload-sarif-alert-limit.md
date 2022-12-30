---
ms.openlocfilehash: 0b7740ddd22bccfe9899f98ac44af4d4b94b4ed4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145094672"
---
{% note %}

**Observações:** 
- O upload do SARIF dá suporte a um máximo de 5.000 resultados por upload. Todos os resultados acima desse limite são ignorados. Se uma ferramenta gerar muitos resultados, você deverá atualizar a configuração para se concentrar nos resultados referentes às regras ou às consultas mais importantes.

 - Para cada upload, o upload do SARIF dá suporte a, no máximo, 10 MB para o arquivo SARIF compactado em `gzip`. Todos os uploads acima desse limite são rejeitados. Se o arquivo SARIF for muito grande porque contém muitos resultados, você deverá atualizar a configuração para se concentrar nos resultados das regras ou consultas mais importantes.

{% endnote %}
