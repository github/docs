---
ms.openlocfilehash: 71aea4a0d9c72885e56e7aef5a20b36bf817fec5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159349"
---
### Como personalizar os codespaces de um repositório

Você pode personalizar os codespaces criados para um repositório criando ou atualizando a configuração do contêiner de desenvolvimento do repositório. Você pode fazer isso de dentro de um codespace. Depois de alterar a configuração do contêiner de desenvolvimento, você pode aplicar as alterações ao codespace atual recriando o contêiner do Docker para o codespace. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

### Personalizando seu codespace

Use um repositório [dotfiles](https://dotfiles.github.io/tutorials/) e a [Sincronização de Configurações](https://code.visualstudio.com/docs/editor/settings-sync) para personalizar os aspectos do ambiente de qualquer codespace criado. A personalização pode incluir preferências de shell e ferramentas adicionais. Para obter mais informações, confira "[Como personalizar o {% data variables.product.prodname_codespaces %} para sua conta](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)".

### Executando seu aplicativo a partir de um codespace
{% data reusables.codespaces.about-port-forwarding %} Para obter mais informações, consulte "[Encaminhamento de portas em seu codespace](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace)".

### Fazendo commit das suas alterações

{% data reusables.codespaces.committing-link-to-procedure %} 

### Usando o {% data variables.product.prodname_vscode_command_palette %}

A {% data variables.product.prodname_vscode_command_palette %} permite que você acesse e gerencie vários recursos dos {% data variables.product.prodname_codespaces %} e do {% data variables.product.prodname_vscode %}. Para obter mais informações, confira "[Uso da {% data variables.product.prodname_vscode_command_palette %} nos {% data variables.product.prodname_codespaces %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)".