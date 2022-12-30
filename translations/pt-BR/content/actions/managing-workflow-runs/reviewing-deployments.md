---
title: Revisar implantações
intro: Você pode aprovar ou rejeitar trabalhos que estão aguardando revisão.
product: '{% data reusables.gated-features.environments %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 6a01d89c0ad5355bd5e6774b1bdf5f19dd471df2
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718098'
---
## Sobre revisões necessárias nos fluxos de trabalho

Os trabalhos que fazem referência a um ambiente configurado com os revisores necessários irão aguardar a aprovação antes de serem iniciados. Enquanto um trabalho está aguardando aprovação, ele tem um status de "Aguardando". Se um trabalho não for aprovado em 30 dias, a execução do fluxo de trabalho será automaticamente cancelada.

Para obter mais informações sobre ambientes e aprovações necessárias, confira "[Como usar ambientes para implantação](/actions/deployment/using-environments-for-deployment)". Para obter informações de como examinar implantações com a API REST, confira "[Execuções de fluxo de trabalho](/rest/reference/actions#workflow-runs)".

## Aprovar ou rejeitar um trabalho

1. Acesse a execução do fluxo de trabalho que requer revisão. Para obter mais informações sobre como procurar uma execução de fluxo de trabalho, confira "[Como ver o histórico de execuções de fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".
2. Clique em **Revisar implantações**. 
   ![Revisar implantações](/assets/images/actions-review-deployments.png)
3. Selecione o(s) ambiente(s) de trabalho a serem aprovados ou rejeitados. Opcionalmente, deixe um comentário.
   ![Aprovar implantações](/assets/images/actions-approve-deployments.png)
4. Aprovar ou rejeitar:
   - Para aprovar o trabalho, clique em **Aprovar e implantar**. Assim que um trabalho for aprovado (e quaisquer outras regras de proteção do ambiente serem aprovadas), o trabalho prosseguirá. Nesta altura, o trabalho pode acessar quaisquer segredos armazenados no ambiente.
   - Para rejeitar o trabalho, clique em **Rejeitar**. Se um trabalho for rejeitado, o fluxo de trabalho falhará.
