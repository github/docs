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

{% data variables.product.prodname_vscode %} Insiders is the most frequent release of {% data variables.product.prodname_vscode %}. It has all the latest features and bug fixes, but may also occasionally contain new issues that result in a broken build.

If you are using an Insiders build and notice broken behavior, we recommend switching to {% data variables.product.prodname_vscode %} Stable and trying again.

On the desktop version of {% data variables.product.prodname_vscode %}, you can switch to Stable by closing the {% data variables.product.prodname_vscode %} Insiders application, opening the {% data variables.product.prodname_vscode %} Stable application, and re-opening your codespace.

On the web version of {% data variables.product.prodname_vscode %}, you can click {% octicon "gear" aria-label="The manage icon" %} in the bottom left of the editor and select **Switch to Stable Version...**. If the web version doesn't load or the {% octicon "gear" aria-label="The manage icon" %} icon isn't available, you can force switching to {% data variables.product.prodname_vscode %} Stable by appending `?vscodeChannel=stable` to your codespace URL and loading the codespace at that URL.

If the problem isn't fixed in {% data variables.product.prodname_vscode %} Stable, please follow the above troubleshooting instructions.

## Solução de problemas do navegador

Se você encontrar problemas ao usar codespaces em um navegador que não é baseado no Chromium, tente alternar para um navegador baseado no Chromium ou verifique se há problemas conhecidos com seu navegador no repositório `microsoft/vscode` procurando por problemas etiquetados com o nome do seu navegador, como, por exemplo, [`fogo-fogo`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) ou [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

Se você encontrar problemas ao usar um codespace em um navegador baseado em Chromium, você poderá verificar se você está tendo outro problema conhecido com {% data variables.product.prodname_vscode %} no repositório [`microsoft/vscode`](https://github.com/microsoft/vscode/issues).
