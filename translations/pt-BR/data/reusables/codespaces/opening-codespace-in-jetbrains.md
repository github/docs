---
ms.openlocfilehash: 52206649d45bd9d76bcc593adeffa47318a70880
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159382"
---
Se você definiu o JetBrains Gateway como o editor padrão, ele será iniciado automaticamente quando você abrir um codespace no {% data variables.product.prodname_dotcom_the_website %}. 

Se o JetBrains Gateway não for o editor padrão, ainda será possível abrir um codespace nele acessando a página "Seus codespaces" em [github.com/codespaces](https://github.com/codespaces) e clicando nas reticências (...) à direita do codespace que você deseja abrir. Para saber mais, confira "[Como abrir um codespace existente](/codespaces/developing-in-codespaces/opening-an-existing-codespace?tool=webui)".

Como alternativa, também é possível abrir o JetBrains Gateway e selecionar um codespace existente, conforme descrito no procedimento a seguir.

1. Abra o aplicativo JetBrains Gateway.
1. Clique em **Conectar-se a {% data variables.product.prodname_codespaces %}** .

   ![Captura de tela da exibição inicial do JetBrains Gateway](/assets/images/help/codespaces/jetbrains-gateway-connect.png)

1. Na lista "Seus codespaces", clique no codespace em que você deseja trabalhar.

   ![Captura de tela da lista de codespaces do JetBrains Gateway](/assets/images/help/codespaces/jetbrains-gateway-codespaces.png)

1. Na lista "IDEs disponíveis", clique no IDE do JetBrains que você deseja usar. O Gateway lembrará de sua escolha na próxima vez que você se conectar a um codespace.

   ![Captura de tela da lista de codespaces do JetBrains Gateway](/assets/images/help/codespaces/jetbrains-gateway-ides.png)

1. Clique em **Conectar**.

   {% note %}

   **Nota**: _se você estiver executando um firewall_, na primeira vez que se conectar a um recurso remoto, poderá ser solicitado que você permita que o JetBrains Gateway se comunique pela rede.

   {% endnote %}
