---
title: Como definir seu editor padrão para o GitHub Codespaces
shortTitle: Set the default editor
intro: 'Você pode definir seu editor padrão para {% data variables.product.prodname_codespaces %} na sua página de configurações pessoais.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces
  - /codespaces/customizing-your-codespace/setting-your-default-editor-for-codespaces
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 7cfc188cb265482ea9dd40f3fc653af870aa6982
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111389'
---
Na página de configurações você pode definir sua preferência de editor para que todos os codespaces sejam abertos automaticamente em {% data variables.product.prodname_vscode %} para a web ou em {% data variables.product.prodname_vscode %} para aplicativos de desktop.

Se você quiser usar {% data variables.product.prodname_vscode %} como seu editor padrão para {% data variables.product.prodname_codespaces %}, você deverá instalar {% data variables.product.prodname_vscode %} e a extensão de {% data variables.product.prodname_github_codespaces %} para {% data variables.product.prodname_vscode %}. Para obter mais informações, confira a [página de download do {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download/) e a [extensão do {% data variables.product.prodname_github_codespaces %} no marketplace do {% data variables.product.prodname_vscode %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

## Configurando o seu editor padrão

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Em "Editor de preferência", selecione a opção que você desejar.
   ![Como configurar seu editor](/assets/images/help/codespaces/select-default-editor.png) Se você escolher o **{% data variables.product.prodname_vscode %}** , o {% data variables.product.prodname_codespaces %} será aberto automaticamente no aplicativo da área de trabalho quando você criar um codespace em seguida. Talvez seja necessário permitir o acesso ao seu navegador e ao {% data variables.product.prodname_vscode %} para que seja aberto com sucesso.
   ![Como configurar seu editor](/assets/images/help/codespaces/launch-default-editor.png)
