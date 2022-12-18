---
title: Codespaces の既定のエディターを設定する
shortTitle: Set the default editor
intro: 個人用設定ページで、{% data variables.product.prodname_codespaces %} の既定のエディターを設定できます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "146681302"
---
設定ページでは、エディターの基本設定を行って、新しく作成される codespace が Web 用の {% data variables.product.prodname_vscode %} または {% data variables.product.prodname_vscode %} デスクトップ アプリケーションで自動的に開かれるようにすることができます。

{% data variables.product.prodname_codespaces %} の既定のエディターとして {% data variables.product.prodname_vscode %} を使う場合は、{% data variables.product.prodname_vscode %} と {% data variables.product.prodname_vscode %} 用の {% data variables.product.prodname_github_codespaces %} 拡張機能をインストールする必要があります。 詳しくは、[{% data variables.product.prodname_vscode %} のダウンロード ページ](https://code.visualstudio.com/download/)と、[{% data variables.product.prodname_vscode %} マーケットプレースの {% data variables.product.prodname_github_codespaces %} 拡張機能](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)をご覧ください。

## <a name="setting-your-default-editor"></a>既定のエディターを設定する

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. [Editor preference]\(エディターの基本設定\) で、必要なオプションを選びます。
   ![エディターを設定する](/assets/images/help/codespaces/select-default-editor.png) **{% data variables.product.prodname_vscode %}** を選ぶと、次に codespace を作成するときに、{% data variables.product.prodname_codespaces %} がデスクトップ アプリケーションで自動的に開きます。 正常に開かれるには、ブラウザーと {% data variables.product.prodname_vscode %} の両方へのアクセスを許可することが必要な場合があります。
   ![エディターの設定](/assets/images/help/codespaces/launch-default-editor.png)
