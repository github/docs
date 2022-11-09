---
ms.openlocfilehash: c32a9f6f6a799c3653cb17fe89721090fc01d155
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107896"
---
   Se a configuração do contêiner de desenvolvimento para o repositório especificar permissões para acessar outros repositórios, será mostrada uma página de autorização. Para obter mais informações sobre como isso é especificado no arquivo `devcontainer.json`, confira "[Gerenciar o acesso a outros repositórios no seu codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)".   

   Clique em {% octicon "chevron-down" aria-label="The expand down icon" %} para exibir os detalhes das permissões solicitadas.

   ![Captura de tela da página de autorização para pré-compilações](/assets/images/help/codespaces/prebuild-authorization-page.png)

   Clique em **Autorizar e continuar** para conceder essas permissões para a criação do prebuild. Como alternativa, você pode clicar em **Continuar sem autorizar**, mas, se fizer isso, os codespaces criados com base no prebuild resultante poderão não funcionar corretamente.

   {% note %}

   **Observação**: os usuários que criam codespaces usando esse prebuild também deverão conceder essas permissões.

   {% endnote %}
