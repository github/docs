---
ms.openlocfilehash: 68c33e94d3ccd97315cfff7461566d418872e218
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147521479"
---
Depois de conectar sua conta no {% data variables.product.product_location %} à extensão do {% data variables.product.prodname_github_codespaces %}, você poderá criar um codespace. Para obter mais informações sobre a extensão {% data variables.product.prodname_github_codespaces %}, veja o [marketplace {% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

{% note %}

**Observação**: atualmente, o {% data variables.product.prodname_vscode_shortname %} não permite que você escolha uma configuração de contêiner de desenvolvimento ao criar um codespace. Se você quiser escolher uma configuração de contêiner de desenvolvimento específica, use a interface da Web do {% data variables.product.prodname_dotcom %} para criar o codespace. Para obter mais informações, clique na guia **Navegador da Web** na parte superior desta página.

{% endnote %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Clique no ícone de Adição: {% octicon "plus" aria-label="The plus icon" %}.

   ![A opção "Criar novo codespace" em {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)

3. Digite o nome do repositório no qual você deseja desenvolver e selecione-o.

   ![Pesquisar um repositório para criar um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-repository-vscode.png)

4. Clique no branch que você deseja desenvolver.

   ![Pesquisar um branch para criar um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-branch-vscode.png)

5. Se solicitado a escolher um arquivo de configuração de contêiner de desenvolvimento, escolha um arquivo na lista.

   ![Como escolher um arquivo de configuração do contêiner de desenvolvimento para {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-dev-container-vscode.png)

6. Clique no tipo de computador que você quer usar.

   ![Tipos de instância para um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **Observação**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}
