---
ms.openlocfilehash: 115103621cb0b156ebb7a3c2c72f0f303c497cfb
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "146178604"
---
{%- ifversion restrict-groups-to-workflows %}
1. Atribua uma política para acesso ao fluxo de trabalho.

   Você pode configurar um grupo de executores para ser acessível a uma lista específica de fluxos de trabalho ou a todos os fluxos de trabalho. Essa configuração não poderá ser substituída se você estiver configurando o grupo de executores de uma organização que foi compartilhado por uma empresa. Se você especificar o fluxo de trabalho que pode acessar o grupo de executores, precisará usar o caminho completo para o fluxo de trabalho, incluindo o nome e o proprietário do repositório, e fixar o fluxo de trabalho em um branch, uma tag ou um SHA completo. Por exemplo: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`. 
   
   Somente os trabalhos definidos diretamente nos fluxos de trabalho selecionados terão acesso ao grupo de executores.{%- endif %}
