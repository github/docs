---
ms.openlocfilehash: 5aef043edaeaf981964defece5a3a008a89ee5b8
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159376"
---
## Adicionar uma porta à configuração do código

É possível adicionar uma porta encaminhada à configuração dos {% data variables.product.prodname_github_codespaces %} do repositório para que a porta seja encaminhada automaticamente a todos os codespaces criados do repositório. Depois de atualizar a configuração, todos os codespaces criados anteriormente deverão ser reconstruídos para que a alteração seja aplicada. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)".

Você pode configurar manualmente portas encaminhadas em um arquivo `.devcontainer.json` usando a propriedade `forwardPorts`, usar o painel "Portas" em um codespace aberto no navegador ou o aplicativo da área de trabalho {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Clique com o botão direito do mouse na porta que deseja adicionar à configuração do codespace e clique em **Definir Rótulo e Atualizar devcontainer.json**.
  ![Opção para definir rótulo e adicionar porta ao devcontainer.json no menu de atalho](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png) {% data reusables.codespaces.type-port-label %}