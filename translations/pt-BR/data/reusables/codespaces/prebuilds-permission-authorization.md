---
ms.openlocfilehash: bb81ad72418e81366595d963296493a7a3b55202
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158674"
---
   Se a configuração do contêiner de desenvolvimento para o repositório especificar permissões para acessar outros repositórios, será mostrada uma página de autorização. Para obter mais informações sobre como isso é especificado no arquivo `devcontainer.json`, confira "[Gerenciar o acesso a outros repositórios no seu codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)".   

   Clique em {% octicon "chevron-down" aria-label="The expand down icon" %} para exibir os detalhes das permissões solicitadas.

   ![Captura de tela da página de autorização para pré-compilações](/assets/images/help/codespaces/prebuild-authorization-page.png)

   Clique em **Autorizar e continuar** para conceder essas permissões para a criação de pré-compilações. Como alternativa, você pode clicar em **Continuar sem autorizar**, mas, se fizer isso, os codespaces criados com base na pré-compilação resultante poderão não funcionar corretamente.

   {% note %}

   **Observação**: os usuários que criam codespaces usando esse prebuild também deverão conceder essas permissões.

   {% endnote %}
