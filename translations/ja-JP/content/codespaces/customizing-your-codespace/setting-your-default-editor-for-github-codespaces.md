---
title: GitHub Codespaces の既定のエディターを設定する
shortTitle: Set the default editor
intro: '個人用設定ページで、{% data variables.product.prodname_codespaces %} の既定のエディターを設定できます。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111534'
---
設定ページでは、エディターの基本設定を行って、新しく作成される codespace が Web 用の {% data variables.product.prodname_vscode %} または {% data variables.product.prodname_vscode %} デスクトップ アプリケーションで自動的に開かれるようにすることができます。

{% data variables.product.prodname_codespaces %} の既定のエディターとして {% data variables.product.prodname_vscode %} を使う場合は、{% data variables.product.prodname_vscode %} と {% data variables.product.prodname_vscode %} 用の {% data variables.product.prodname_github_codespaces %} 拡張機能をインストールする必要があります。 詳しくは、[{% data variables.product.prodname_vscode %} のダウンロード ページ](https://code.visualstudio.com/download/)と、[{% data variables.product.prodname_vscode %} マーケットプレースの {% data variables.product.prodname_github_codespaces %} 拡張機能](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)をご覧ください。

## 既定のエディターを設定する

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. [Editor preference]\(エディターの基本設定\) で、必要なオプションを選びます。
   ![エディターを設定する](/assets/images/help/codespaces/select-default-editor.png) **{% data variables.product.prodname_vscode %}** を選ぶと、次に codespace を作成するときに、{% data variables.product.prodname_codespaces %} がデスクトップ アプリケーションで自動的に開きます。 正常に開かれるには、ブラウザーと {% data variables.product.prodname_vscode %} の両方へのアクセスを許可することが必要な場合があります。
   ![エディターの設定](/assets/images/help/codespaces/launch-default-editor.png)
