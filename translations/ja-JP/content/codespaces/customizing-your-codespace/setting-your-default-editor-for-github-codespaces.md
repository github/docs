---
title: GitHub Codespaces の既定のエディターを設定する
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
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159935'
---
[設定] ページでは、codespace を作成したり既存の codespace を開いたりするときに、次のいずれかの方法で開くように、エディターの基本設定を設定できます。
* {% data variables.product.prodname_vscode %} (desktop application)
* {% data variables.product.prodname_vscode %} (web client application)
* JetBrains Gateway - JetBrains IDE で codespace を開く場合
* JupyterLab - Project Jupyter の Web インターフェイス 

{% data reusables.codespaces.template-codespaces-default-editor %}

{% data variables.product.prodname_github_codespaces %} の既定のエディターとして {% data variables.product.prodname_vscode %} を使う場合は、{% data variables.product.prodname_vscode %} と、{% data variables.product.prodname_vscode %} 用の {% data variables.product.prodname_github_codespaces %} 拡張機能をインストールする必要があります。 詳しくは、[{% data variables.product.prodname_vscode %} のダウンロード ページ](https://code.visualstudio.com/download/)と、[{% data variables.product.prodname_vscode %} マーケットプレースの {% data variables.product.prodname_github_codespaces %} 拡張機能](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)をご覧ください。

JetBrains IDE の codespace で作業する場合は、JetBrains Gateway をインストールする必要があります。 詳しくは、「[JetBrains IDE で {% data variables.product.prodname_github_codespaces %} を使う](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)」をご覧ください。

## 既定のエディターを設定する

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. [Editor preference]\(エディターの基本設定\) で、必要なオプションを選びます。

   ![エディターの設定](/assets/images/help/codespaces/select-default-editor.png)

   * {% data reusables.codespaces.application-installed-locally %}<br><br>

   * **{% data variables.product.prodname_vscode %}** を選ぶ場合、codespace を次回作成するか開いたときに、デスクトップ アプリケーションで {% data variables.product.prodname_github_codespaces %} が自動的に開きます。 

     正常に開かれるには、ブラウザーと {% data variables.product.prodname_vscode %} の両方へのアクセスを許可することが必要な場合があります。<br><br>
     
   * **JetBrains Gateway** を選ぶ場合、codespace を次回作成するか開いたときに、Gateway アプリケーションが自動的に開きます。 

     この方法で初めて codespace を開いたときは、アプリケーションを開く権限を付与する必要があります。 

     Gateway が自動的に開いてから、codespace が自動的に選択されます。 その後、JetBrains IDE をこれまでに選んでいなければ、これを選び、 **[接続]** をクリックして、JetBrains クライアント内にある codespace を開きます。 詳しくは、「[JetBrains IDE で {% data variables.product.prodname_github_codespaces %} を使う](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)」をご覧ください。
     
     Gateway アプリケーションから codespace に接続するには、codespace で実行されている SSH サーバーが必要です。 {% indented_data_reference reusables.codespaces.ssh-server-installed spaces=5 %}

   * **JupyterLab** を選ぶ場合は、開いている codespace に JupyterLab をインストールする必要があります。 {% data reusables.codespaces.jupyterlab-in-default-image %}
