---
ms.openlocfilehash: 0036dd5cf979531479a7ddf523c7475391b29c0a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147548005"
---
Por padrão, um fluxo de trabalho do {% data variables.product.prodname_actions %} é acionado sempre que você cria ou atualiza uma pré-compilação ou envia por push para um branch habilitado para pré-compilação. Assim como acontece com outros fluxos de trabalho, enquanto os fluxos de trabalho de pré-build estiverem em execução, eles consumirão alguns dos minutos do Actions incluídos na sua conta, se houver, ou vão gerar custos de minutos no Actions. Para obter mais informações sobre os preços de minutos do Actions, confira "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)". 

Juntamente com os minutos do {% data variables.product.prodname_actions %}, também serão incorridas cobranças pelo armazenamento de pré-compilações associadas a cada configuração de pré-compilação para um determinado repositório e região. O armazenamento de pré-compilações é cobrado na mesma taxa que o armazenamento de codespaces.