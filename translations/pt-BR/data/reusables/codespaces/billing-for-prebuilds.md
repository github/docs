---
ms.openlocfilehash: c9d2391a85dd42db8eb3914b9c3495e0441e0fd0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147061271"
---
Por padrão, um fluxo de trabalho do {% data variables.product.prodname_actions %} é disparado sempre que você cria ou atualiza um modelo de pré-build ou efetua push dele para um branch habilitado para pré-build. Assim como acontece com outros fluxos de trabalho, enquanto os fluxos de trabalho de pré-build estiverem em execução, eles consumirão alguns dos minutos do Actions incluídos na sua conta, se houver, ou vão gerar custos de minutos no Actions. Para obter mais informações sobre os preços de minutos do Actions, confira "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)". 

Juntamente com os minutos do {% data variables.product.prodname_actions %}, você também será cobrado pelo armazenamento de modelos de predefinição associados a cada configuração de predefinição de um determinado repositório e uma região. O armazenamento de modelos de predefinição é cobrado na mesma taxa que o armazenamento de codespaces. Para obter mais informações, confira "[Calcular o uso do armazenamento](#calculating-storage-usage)".

Para reduzir o consumo de minutos do Actions, você pode definir um modelo de pré-build para ser atualizado somente quando fizer uma alteração nos arquivos de configuração do contêiner de desenvolvimento ou apenas com um agendamento personalizado. Você também pode gerenciar o uso do armazenamento ajustando o número de versões de modelo a serem retidas nas configurações de predefinição. Para obter mais informações, confira "[Como configurar pré-compilações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)".

Se você é proprietário da organização, pode acompanhar o uso de fluxos de trabalho e armazenamento de predefinição baixando um relatório de uso do {% data variables.product.prodname_actions %} da organização. Você pode identificar as execuções de fluxo de trabalho para pré-builds filtrando a saída CSV para incluir apenas o fluxo de trabalho chamado "Criar Prebuilds de Codespaces". Para obter mais informações, confira "[Como ver o uso do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-organization)".
