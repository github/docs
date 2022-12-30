---
ms.openlocfilehash: d8f0e4e19ba362881f261a214aa56666f5902979
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158578"
---
Depois de conectar a conta no {% data variables.product.prodname_dotcom_the_website %} à extensão {% data variables.product.prodname_github_codespaces %}, você poderá criar um codespace. Para obter mais informações sobre a extensão {% data variables.product.prodname_github_codespaces %}, veja o [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Clique no ícone de Adição: {% octicon "plus" aria-label="The plus icon" %}.

   ![A opção Criar codespace nos {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)

3. Digite o nome do repositório no qual você deseja desenvolver e selecione-o.

   ![Como procurar um repositório para criar um codespace](/assets/images/help/codespaces/choose-repository-vscode.png)

   Se o repositório escolhido pertencer a uma organização e a organização tiver configurado os codespaces desse repositório como faturáveis para a organização ou empresa matriz, uma mensagem será exibida nos próximos prompts informando quem pagará pelo codespace.

4. Clique no branch que você deseja desenvolver.

   ![Como procurar um branch para criar um codespace](/assets/images/help/codespaces/choose-branch-vscode.png)

5. Se solicitado a escolher um arquivo de configuração de contêiner de desenvolvimento, escolha um arquivo na lista.

   ![Como escolher um arquivo de configuração de contêiner de desenvolvimento para {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/choose-dev-container-vscode.png)

6. Clique no tipo de computador que você quer usar.

   ![Tipos de instância para um novo codespace](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **Observação**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}
