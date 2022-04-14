---
title: Solucionar problemas de clientes de codespace
intro: 'Você pode usar {% data variables.product.prodname_codespaces %} no seu navegador ou por meio de {% data variables.product.prodname_vscode %}. Este artigo fornece etapas de solução de problemas para problemas comuns do cliente.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Clientes de codespaces
---

## Solução de problemas de {% data variables.product.prodname_vscode %}

Ao conectar uma versão de desktop de {% data variables.product.prodname_vscode %} a um codespace, você notará poucas diferenças em comparação com o trabalho num espaço de trabalho normal, mas a experiência será bastante semelhante.

Ao abrir um codespace no navegador usando {% data variables.product.prodname_vscode %} na web, você notará mais diferenças. Por exemplo, algumas teclas vinculadas serão diferentes ou estarão ausentes e algumas extensões poderão comportar-se de maneira diferente. Para obter um resumo, consulte: "[Limitações e adaptações conhecidas](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)" na documentação de {% data variables.product.prodname_vscode %}.

É possível verificar se há problemas conhecidos e registrar novos problemas com a experiência de {% data variables.product.prodname_vscode %} no repositório [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders é a versão mais frequente de {% data variables.product.prodname_vscode %}. Ela tem todas as funcionalidades mais recentes e correções de erros, mas também pode ocasionalmente conter novos issues que resultem em uma criação anormal.

Se você estiver usando Insiders para criar e notificar comportamentos anormais, recomendamos mudar para a versão estável de{% data variables.product.prodname_vscode %} e tentar novamente.

Na versão desktop do {% data variables.product.prodname_vscode %}, você pode alternar para a versão estável fechando o aplicativo de {% data variables.product.prodname_vscode %} Insiders, abrir a versão estável de {% data variables.product.prodname_vscode %} e reabrir seu codespace.

Na versão web do {% data variables.product.prodname_vscode %}, você pode clicar em {% octicon "gear" aria-label="The manage icon" %} no canto inferior esquerdo do editor e selecionar **Mudar para a versão estável.**. Se a versão web não carregar ou o ícone de {% octicon "gear" aria-label="The manage icon" %} não estiver disponível, você poderá aplicar a mudança para a versão estável de {% data variables.product.prodname_vscode %} anexando `?vscodeChannel=stable` ao URL e carregando o seu codespace nesse URL.

Se o problema não for corrigido na versão estável de {% data variables.product.prodname_vscode %}, siga as instruções de solução de problemas acima.

## Solução de problemas do navegador

Se você encontrar problemas ao usar codespaces em um navegador que não é baseado no Chromium, tente alternar para um navegador baseado no Chromium ou verifique se há problemas conhecidos com seu navegador no repositório `microsoft/vscode` procurando por problemas etiquetados com o nome do seu navegador, como, por exemplo, [`fogo-fogo`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) ou [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

Se você encontrar problemas ao usar um codespace em um navegador baseado em Chromium, você poderá verificar se você está tendo outro problema conhecido com {% data variables.product.prodname_vscode %} no repositório [`microsoft/vscode`](https://github.com/microsoft/vscode/issues).
