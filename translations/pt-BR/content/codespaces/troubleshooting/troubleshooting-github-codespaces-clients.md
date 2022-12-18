---
title: Solução de problemas dos clientes dos GitHub Codespaces
shortTitle: Codespaces clients
intro: 'Este artigo fornece informações de solução de problemas que você pode encontrar com o cliente usado para os {% data variables.product.prodname_github_codespaces %}.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-codespaces-clients
ms.openlocfilehash: 35bd9dd859612307c1f9e49ea8ed9771e4f5efcd
ms.sourcegitcommit: bf4e3590ab71b0a1bfa8d74b00183f63193acbbf
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186168'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## Solução de problemas do cliente Web do {% data variables.product.prodname_vscode %}

Se você encontrar problemas ao usar os {% data variables.product.prodname_github_codespaces %} em um navegador que não seja baseado no Chromium, mude para um navegador baseado em Chromium, como Google Chrome ou Microsoft Edge. Como alternativa, confira os problemas conhecidos no navegador no repositório [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen) procurando problemas rotulados com o nome do navegador, como [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) ou [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

Se você encontrar problemas ao usar {% data variables.product.prodname_github_codespaces %} em um navegador baseado em Chromium, verifique se há outro problema conhecido com o {% data variables.product.prodname_vscode_shortname %} no repositório [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen).

### Diferenças em relação a trabalhar no {% data variables.product.prodname_vscode_shortname %} localmente

Ao abrir um codespace no navegador usando o cliente Web do {% data variables.product.prodname_vscode_shortname %}, você observará algumas diferenças em relação ao trabalho em um workspace local no aplicativo da área de trabalho do {% data variables.product.prodname_vscode_shortname %}. Por exemplo, algumas teclas vinculadas serão diferentes ou estarão ausentes e algumas extensões poderão comportar-se de maneira diferente. Para ver um resumo, confira: "[Limitações conhecidas e adaptações](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)" na documentação do {% data variables.product.prodname_vscode_shortname %}.

Verifique se há problemas conhecidos e registre novos problemas em log com a experiência do {% data variables.product.prodname_vscode_shortname %} no repositório [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

### {% data variables.product.prodname_vscode %} Insiders

O {% data variables.product.prodname_vscode %} Insiders é a versão mais frequente do {% data variables.product.prodname_vscode_shortname %}. Ela tem todas as funcionalidades mais recentes e correções de erros, mas também pode ocasionalmente conter novos issues que resultem em uma criação anormal.

Se você estiver usando Insiders para criar e notificar comportamentos anormais, recomendamos mudar para a versão estável de{% data variables.product.prodname_vscode %} e tentar novamente.

Clique em {% octicon "gear" aria-label="The manage icon" %} no canto inferior esquerdo do editor e selecione **Mudar para Versão Estável…** . Se a versão da Web do {% data variables.product.prodname_vscode_shortname %} não for carregada ou o se ícone {% octicon "gear" aria-label="The manage icon" %} não estiver disponível, force a mudança para o {% data variables.product.prodname_vscode %} Estável acrescentando `?vscodeChannel=stable` à URL do codespace e carregando o codespace nessa URL.

Se o problema não for corrigido no {% data variables.product.prodname_vscode %} Estável, verifique se há problemas conhecidos e, se necessário, registre um novo problema com a experiência do {% data variables.product.prodname_vscode_shortname %}, no repositório [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

{% endwebui %}

{% vscode %}

## Solução de problemas do {% data variables.product.prodname_vscode_shortname %}

Ao abrir um codespace no aplicativo da área de trabalho {% data variables.product.prodname_vscode_shortname %}, você pode observar algumas diferenças em comparação com o trabalho em um workspace local, mas a experiência deve ser semelhante.

Se houver problemas, verifique se há problemas conhecidos e registre novos problemas em log com a experiência do {% data variables.product.prodname_vscode_shortname %} no repositório [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

### {% data variables.product.prodname_vscode %} Insiders

O {% data variables.product.prodname_vscode %} Insiders é a versão mais frequente do {% data variables.product.prodname_vscode_shortname %}. Ela tem todas as funcionalidades mais recentes e correções de erros, mas também pode ocasionalmente conter novos issues que resultem em uma criação anormal.

Se você estiver usando Insiders para criar e notificar comportamentos anormais, recomendamos mudar para a versão estável de{% data variables.product.prodname_vscode %} e tentar novamente.

Para mudar para o {% data variables.product.prodname_vscode %} Estável, feche o aplicativo do {% data variables.product.prodname_vscode %} Insiders, abra o aplicativo {% data variables.product.prodname_vscode %} Estável e reabra o codespace.

Se o problema não for corrigido no {% data variables.product.prodname_vscode %} Estável, verifique se há problemas conhecidos e, se necessário, registre um novo problema com a experiência do {% data variables.product.prodname_vscode_shortname %}, no repositório [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

{% endvscode %}

{% jetbrains %}

## Solução de problemas de IDEs do JetBrains

### Problemas de desempenho

Um tipo de computador dos {% data variables.product.prodname_github_codespaces %} com pelo menos quatro núcleos é recomendado para executar qualquer um dos IDEs do JetBrains. Para obter mais informações, confira "[Como alterar o tipo de computador para seu codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)".

Se você estiver usando um computador com quatro ou mais núcleos e o desempenho no JetBrains parecer um pouco lento, talvez seja necessário aumentar o tamanho máximo do heap java. 

É recomendável definir o tamanho máximo do heap para algo entre 2862 MiB (3 GB) e 60% da RAM do host remoto.

Veja a seguir algumas diretrizes como um ponto de partida inicial, que você pode ajustar com base no tamanho da base de código e na memória necessária para executar o aplicativo. Por exemplo, se você tiver uma base de código grande ou complicada, talvez seja necessário aumentar ainda mais o tamanho do heap. Se você tiver um aplicativo maior, poderá definir um tamanho de heap mais baixo para fornecer mais memória ao aplicativo.

| Tipo de computador   | Tamanho máximo do heap |
| -------------- | ----------------- |
| Quatro núcleos         | 3 GB              |
| Oito núcleos         | 4 GB              |
| 16 ou 32 núcleos | 8 GB              |

1. À esquerda da barra de navegação, na parte superior da janela do aplicativo, clique no nome do codespace.

   ![Captura de tela do botão de recursos no JetBrains](/assets/images/help/codespaces/jetbrains-resources-button.png)

1. Na guia Desempenho, observe os detalhes de Carga e Memória da CPU. Isso indicará se o computador está sobrecarregado.
 
   ![Captura de tela do botão Localhost no JetBrains](/assets/images/help/codespaces/jetbrains-performance.png)

1. Clique na guia Configurações e edite o tamanho do heap, aumentando-o para no máximo 60% da memória disponível para o codespace.

   ![Captura de tela da configuração de tamanho máximo do heap](/assets/images/help/codespaces/jetbrains-heap-setting.png)

1. Clique em **Salvar e reiniciar**.

### O cliente não pode ser aberto no MacOS Ventura 

No MacOS Ventura, na primeira tentativa de conexão com um codespace do JetBrains Gateway, uma mensagem pode ser exibida informando que o aplicativo cliente JetBrains "está danificado e não pode ser aberto".

<img src="/assets/images/help/codespaces/jetbrains-ventura-error1.png" alt="Screenshot of the 'cannot be opened' error message" style="width:230px;"/>

Se isso acontecer:

1. Clique em **Cancelar** para ignorar essa mensagem.
1. Clique no ícone da Apple, no canto superior esquerdo da tela, e em **Configurações do sistema**. 
1. Clique em **Privacidade e segurança** e role para baixo até a seção "Segurança".

   ![Captura de tela da caixa de diálogo “Privacidade e segurança”](/assets/images/help/codespaces/jetbrains-privacy-and-security.png)

   Você verá uma mensagem informando que o cliente JetBrains foi bloqueado para uso. 

1. Clique em **Abrir mesmo assim** para adicionar o cliente JetBrains aos aplicativos reconhecidos. 
   A mensagem será exibida novamente, mas agora com um botão **Abrir**.

   <img src="/assets/images/help/codespaces/jetbrains-ventura-error2.png" alt="Screenshot of the error message with an 'Open' button" style="width:230px;"/>

1. Clique em **Cancelar** novamente.
1. Volte ao aplicativo JetBrains Gateway e conecte-se ao codespace necessário novamente.
   Agora o cliente JetBrains será aberto com sucesso. Depois de autorizar a execução do aplicativo cliente no Mac, você não verá mais a mensagem ao se conectar posteriormente aos codespaces.

### Problemas de conexão SSH

Para se conectar por meio do servidor SSH em execução no codespace, você precisa ter uma chave SSH no diretório `~/.ssh` (MacOS e Linux) ou no diretório `%HOMEPATH%\.ssh` (Windows) que já tenha sido adicionada à conta do {% data variables.product.prodname_dotcom %}. Se você não tiver chaves neste diretório, a {% data variables.product.prodname_cli %} vai gerá-las. Para obter mais informações, confira "[Como adicionar uma nova chave SSH à sua conta do {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?platform=windows&tool=webui)".

Se você encontrar problemas com a validação de chave, tente atualizar a versão da {% data variables.product.prodname_cli %}. Para obter informações, confira as [instruções de atualização](https://github.com/cli/cli#installation) no README da {% data variables.product.prodname_cli %}.

### Problemas de IDE do JetBrains

Para obter ajuda com problemas específicos do IDE do JetBrains que você está usando ou o aplicativo JetBrains Gateway, confira "[Suporte ao produto](https://www.jetbrains.com/support/)" no site do JetBrains.

{% endjetbrains %}
