---
title: Solucionar problemas de clientes de codespace
intro: Você pode usar {% data variables.product.prodname_codespaces %} no seu navegador ou por meio de {% data variables.product.prodname_vscode %}. Este artigo fornece etapas de solução de problemas para problemas comuns do cliente.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Codespaces clients
ms.openlocfilehash: 9b8a04083665a1f2d555d568f855e3ebdf57fb56
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145094558"
---
## Solução de problemas de {% data variables.product.prodname_vscode %}

Ao conectar uma versão de desktop de {% data variables.product.prodname_vscode %} a um codespace, você notará poucas diferenças em comparação com o trabalho num espaço de trabalho normal, mas a experiência será bastante semelhante. 

Ao abrir um codespace no navegador usando {% data variables.product.prodname_vscode %} na web, você notará mais diferenças. Por exemplo, algumas teclas vinculadas serão diferentes ou estarão ausentes e algumas extensões poderão comportar-se de maneira diferente. Para ver um resumo, confira: "[Limitações conhecidas e adaptações](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)" na documentação do {% data variables.product.prodname_vscode %}.

Verifique se há problemas conhecidos e registre novos problemas em log com a experiência do {% data variables.product.prodname_vscode %} no repositório [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders é a versão mais frequente de {% data variables.product.prodname_vscode %}. Ela tem todas as funcionalidades mais recentes e correções de erros, mas também pode ocasionalmente conter novos issues que resultem em uma criação anormal.

Se você estiver usando Insiders para criar e notificar comportamentos anormais, recomendamos mudar para a versão estável de{% data variables.product.prodname_vscode %} e tentar novamente.

Na versão desktop do {% data variables.product.prodname_vscode %}, você pode alternar para a versão estável fechando o aplicativo de {% data variables.product.prodname_vscode %} Insiders, abrir a versão estável de {% data variables.product.prodname_vscode %} e reabrir seu codespace.

Na versão da Web do {% data variables.product.prodname_vscode %}, você pode clicar em {% octicon "gear" aria-label="The manage icon" %} no canto inferior esquerdo do editor e selecionar **Alternar para Versão Estável…** . Se a versão da Web não for carregada ou o ícone {% octicon "gear" aria-label="The manage icon" %} não estiver disponível, force a alternância para o {% data variables.product.prodname_vscode %} Estável acrescentando `?vscodeChannel=stable` à URL do codespace e carregando o codespace nessa URL.

Se o problema não for corrigido na versão estável de {% data variables.product.prodname_vscode %}, siga as instruções de solução de problemas acima.

## Solução de problemas do navegador

Se você encontrar problemas ao usar codespaces em um navegador que não seja baseado em Chromium, tente alternar para um navegador baseado em Chromium ou verifique se há problemas conhecidos com o navegador no repositório `microsoft/vscode`, pesquisando problemas rotulados com o nome do navegador, como [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) ou [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

Se você encontrar problemas ao usar codespaces em um navegador baseado em Chromium, verifique se está enfrentando outro problema conhecido com o {% data variables.product.prodname_vscode %} no repositório [`microsoft/vscode`](https://github.com/microsoft/vscode/issues).
