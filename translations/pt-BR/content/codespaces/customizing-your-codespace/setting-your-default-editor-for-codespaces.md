---
title: Definindo seu editor padrão para os codespaces
shortTitle: Set the default editor
intro: Você pode definir seu editor padrão para {% data variables.product.prodname_codespaces %} na sua página de configurações pessoais.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces
topics:
- Codespaces
type: how_to
ms.openlocfilehash: 3c2fe809a749244efd8ffe76cde31646f984bea3
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "146681290"
---
Na página de configurações você pode definir sua preferência de editor para que todos os codespaces sejam abertos automaticamente em {% data variables.product.prodname_vscode %} para a web ou em {% data variables.product.prodname_vscode %} para aplicativos de desktop.

Se você quiser usar {% data variables.product.prodname_vscode %} como seu editor padrão para {% data variables.product.prodname_codespaces %}, você deverá instalar {% data variables.product.prodname_vscode %} e a extensão de {% data variables.product.prodname_github_codespaces %} para {% data variables.product.prodname_vscode %}. Para obter mais informações, confira a [página de download do {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download/) e a [extensão do {% data variables.product.prodname_github_codespaces %} no marketplace do {% data variables.product.prodname_vscode %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

## <a name="setting-your-default-editor"></a>Configurando o seu editor padrão

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Em "Editor de preferência", selecione a opção que você desejar.
   ![Como configurar seu editor](/assets/images/help/codespaces/select-default-editor.png) Se você escolher o **{% data variables.product.prodname_vscode %}** , o {% data variables.product.prodname_codespaces %} será aberto automaticamente no aplicativo da área de trabalho quando você criar um codespace em seguida. Talvez seja necessário permitir o acesso ao seu navegador e ao {% data variables.product.prodname_vscode %} para que seja aberto com sucesso.
   ![Como configurar seu editor](/assets/images/help/codespaces/launch-default-editor.png)
