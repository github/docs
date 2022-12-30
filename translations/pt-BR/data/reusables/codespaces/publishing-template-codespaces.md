---
ms.openlocfilehash: a78c61511f0daa225bc27576a2ab57e8e1bea939
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159375"
---
Se você estiver trabalhando em um codespace, poderá publicá-lo no cliente Web ou no aplicativo da área de trabalho do {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.source-control-display-dark %}
1. Para preparar as alterações, clique em **+** ao lado do arquivo que você alterou ou ao lado de **Alterações** se tiver alterado vários arquivos e quiser preparar todos eles.

   ![Barra lateral do controle do código-fonte com o botão de preparo realçado](/assets/images/help/codespaces/codespaces-commit-stage.png)

   {% note %}

   **Observação:** se você começar com o modelo em branco do {% data variables.product.company_short %}, não verá uma lista de alterações, a menos que já tenha inicializado o diretório como um repositório Git. Para publicar codespaces criados por meio do modelo em branco, clique em **Publicar no {% data variables.product.company_short %}** na exibição Controle do Código-Fonte e pule para a etapa 5.

   {% endnote %}
2. Para fazer commit das alterações preparadas, digite uma mensagem de commit descrevendo a alteração que você fez e clique em **Fazer commit**.

   ![Barra lateral do controle do código-fonte com uma mensagem de commit](/assets/images/help/codespaces/vscode-commit-button.png) 
3. Clique em **Publicar Branch**.
   
   ![Captura de tela do botão "Publicar Branch" no VS Code](/assets/images/help/codespaces/vscode-publish-branch-button.png)
4. Na lista suspensa "Nome do Repositório", digite um nome para o novo repositório e selecione **Publicar no repositório privado do {% data variables.product.company_short %}** ou **Publicar no repositório público do {% data variables.product.company_short %}** .
   
   ![Captura de tela da lista suspensa "Nome do Repositório" no VS Code](/assets/images/help/codespaces/choose-new-repository.png)

   O proprietário do novo repositório será a conta do {% data variables.product.prodname_dotcom %} com a qual você criou o codespace.
5. Opcionalmente, no pop-up exibido no canto inferior direito do editor, clique em **Abrir no {% data variables.product.company_short %}** para exibir o novo repositório no {% data variables.product.prodname_dotcom_the_website %}.
   
   ![Captura de tela do pop-up "Abrir no GitHub" no VS Code](/assets/images/help/codespaces/open-on-github.png)