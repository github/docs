---
ms.openlocfilehash: 9523f75cde4298a6e1cd4335127a1dfb5bb342b5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159357"
---
Quando um aplicativo em execução em um codespace imprime a saída para o terminal que contém uma URL do localhost, como `http://localhost:PORT` ou `http://127.0.0.1:PORT`, a porta é encaminhada automaticamente. Se você estiver usando os {% data variables.product.prodname_github_codespaces %} no navegador ou no {% data variables.product.prodname_vscode %}, a cadeia de caracteres da URL no terminal será convertida em um link que acessa a página da Web no computador local. Por padrão, {% data variables.product.prodname_github_codespaces %} encaminha portas usando HTTP.

![Encaminhamento de porta automático](/assets/images/help/codespaces/automatic-port-forwarding.png)

Você também pode encaminhar uma porta manualmente, etiquetar portas encaminhadas, compartilhar portas encaminhadas com integrantes da sua organização, compartilhar as portas encaminhadas publicamente e adicione as portas encaminhadas à configuração do codespace.

{% note %}

**Observação**: {% data reusables.codespaces.restrict-port-visibility %}

{% endnote %}

## Encaminhar uma porta

Você pode encaminhar manualmente uma porta que não foi encaminhada automaticamente.