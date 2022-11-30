---
title: Como definir seu editor padrão para o GitHub Codespaces
shortTitle: Set the default editor
intro: '{% data reusables.codespaces.about-changing-default-editor %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces
  - /codespaces/customizing-your-codespace/setting-your-default-editor-for-codespaces
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 5c286ffe8f96d275dc0b20949a87b7ced411c9af
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159317'
---
Na página de configurações, você pode definir sua preferência de editor para que, ao criar um codespace ou abrir um codespace existente, ele seja aberto na sua escolha de:
* {% data variables.product.prodname_vscode %} (aplicativo da área de trabalho)
* {% data variables.product.prodname_vscode %} (aplicativo Web cliente)
* JetBrains Gateway – Para abrir codespaces em um IDE do JetBrains
* JupyterLab – A interface Web do Project Jupyter 

{% data reusables.codespaces.template-codespaces-default-editor %}

Se você quiser usar o {% data variables.product.prodname_vscode %} como editor padrão dos {% data variables.product.prodname_github_codespaces %}, instale o {% data variables.product.prodname_vscode %} e a extensão {% data variables.product.prodname_github_codespaces %} para {% data variables.product.prodname_vscode %}. Para obter mais informações, confira a [página de download do {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download/) e a [extensão do {% data variables.product.prodname_github_codespaces %} no marketplace do {% data variables.product.prodname_vscode %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

Se você quiser trabalhar em um codespace em um IDE do JetBrains, instale o JetBrains Gateway. Para obter mais informações, confira "[Como usar {% data variables.product.prodname_github_codespaces %} no IDE do JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)".

## Configurando o seu editor padrão

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Em "Editor de preferência", selecione a opção que você desejar.

   ![Como configurar seu editor](/assets/images/help/codespaces/select-default-editor.png)

   * {% data reusables.codespaces.application-installed-locally %}<br><br>

   * Se você escolher o **{% data variables.product.prodname_vscode %}** , o {% data variables.product.prodname_github_codespaces %} será aberto automaticamente no aplicativo da área de trabalho quando o próximo codespace for criado ou aberto. 

     Talvez seja necessário permitir o acesso ao seu navegador e ao {% data variables.product.prodname_vscode %} para que seja aberto com sucesso.<br><br>
     
   * Se você escolher **JetBrains Gateway**, o aplicativo Gateway será aberto automaticamente quando o próximo codespace for aberto ou criado. 

     Na primeira vez que você abrir um codespace dessa forma, precisará conceder permissão para abrir o aplicativo. 

     O aplicativo Gateway será aberto e o codespace será selecionado automaticamente. Depois, você poderá escolher um IDE do JetBrains, se ainda não tiver feito isso, e clicar em **Conectar** para abrir o codespace no cliente JetBrains. Para obter mais informações, confira "[Como usar {% data variables.product.prodname_github_codespaces %} no IDE do JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)".
     
     Para se conectar a um codespace do aplicativo Gateway, você precisa ter um servidor SSH em execução no codespace. {% indented_data_reference reusables.codespaces.ssh-server-installed spaces=5 %}

   * Se você escolher **JupyterLab**, o aplicativo JupyterLab deverá ser instalado nos codespaces abertos. {% data reusables.codespaces.jupyterlab-in-default-image %}
