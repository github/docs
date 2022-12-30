---
title: GitHub Copilot のクイック スタート
intro: '{% data variables.product.prodname_copilot %} は、コーディング中にインライン候補を提示することで作業を支援します。'
product: '{% data reusables.gated-features.copilot %}'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
shortTitle: Quickstart
topics:
  - Copilot
ms.openlocfilehash: d2131a506990a959f803b13353b794a9dd347174
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193476'
---
## はじめに

{% data variables.product.prodname_copilot %} は AI ペア プログラマーです。 {% data variables.product.prodname_copilot %} を使うと、エディター内で行全体または関数全体の候補を得ることができます。

このガイドでは、個人アカウントで {% data variables.product.prodname_copilot %} にサインアップし、{% data variables.product.prodname_vscode %} に {% data variables.product.prodname_copilot %} 拡張機能をインストールして、最初の候補を得る方法について説明します。 {% data variables.product.prodname_copilot %} の詳しい情報については、「[{% data variables.product.prodname_copilot %}について](/copilot/overview-of-github-copilot/about-github-copilot)」をご覧ください。 さまざまな環境で {% data variables.product.prodname_copilot %} を使う方法の詳しい情報については、「[使用を開始する](/copilot/getting-started-with-github-copilot)」をご覧ください。

## 前提条件

{% data reusables.copilot.copilot-prerequisites %}
- {% data variables.product.prodname_vscode %} で {% data variables.product.prodname_copilot %} を使うには、{% data variables.product.prodname_vscode %} がインストールされている必要があります。 詳しい情報については、[{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) のドキュメントをご覧ください。

## {% data variables.product.prodname_copilot %} にサインアップする

{% data variables.product.prodname_copilot %} を使い始める前に、個人アカウント用の無料試用版またはサブスクリプションを設定する必要があります。 

{% note %}

**注:** {% data variables.product.prodname_ghe_cloud %} アカウントが所有する Organization のメンバーで、{% data variables.product.prodname_copilot %} サブスクリプションを持っていて、Organization から {% data variables.product.prodname_copilot %} シートが割り当てられている場合、「[{% data variables.product.prodname_vscode %} 用の {% data variables.product.prodname_copilot %} の拡張機能をインストールする](/copilot/quickstart#installing-the-github-copilot-extension-for-visual-studio-code)」に進むことができます。

{% endnote %}

{% data reusables.copilot.signup-procedure %}

## {% data variables.product.prodname_vscode %} 用の {% data variables.product.prodname_copilot %} 拡張機能をインストールする

{% data variables.product.prodname_copilot %} を使うには、最初に {% data variables.product.prodname_vscode %} 拡張機能をインストールする必要があります。

1. {% data variables.product.prodname_vscode %} Marketplace で、[{% data variables.product.prodname_copilot %} 拡張機能](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)ページに移動し、 **[Install]\(インストール\)** をクリックします。
   ![{% data variables.product.prodname_copilot %} 拡張機能 {% data variables.product.prodname_vscode %} をインストールする](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. ポップアップが表示され、{% data variables.product.prodname_vscode %} を開くように求められます。 **[Open {% data variables.product.prodname_vscode %}]** をクリックします。
1. {% data variables.product.prodname_vscode %} の [Extension: {% data variables.product.prodname_copilot %}] タブの **[Install]\(インストール\)** をクリックします。
   ![{% data variables.product.prodname_vscode %} の [Install]\(インストール\) ボタン](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. {% data variables.product.prodname_dotcom %} アカウントで {% data variables.product.prodname_vscode %} を以前に認可していない場合、{% data variables.product.prodname_vscode %} で {% data variables.product.prodname_dotcom %} にサインインするように求められます。
   - {% data variables.product.prodname_dotcom %} アカウントで {% data variables.product.prodname_vscode %} を以前に認可している場合は、{% data variables.product.prodname_copilot %} は自動的に認可されます。
   ![{% data variables.product.prodname_vscode %} 認可画面のスクリーン ショット](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. ブラウザーで、{% data variables.product.prodname_dotcom %} から、{% data variables.product.prodname_copilot %} に必要なアクセス許可が要求されます。 これらのアクセス許可を承認するには、 **[{% data variables.product.prodname_vscode %} の認可]** をクリックします。 
1. {% data variables.product.prodname_vscode %} の [{% data variables.product.prodname_vscode %}] ダイアログ ボックスで、認証を確認するには、 **[開く]** をクリックします。 

## 最初の候補を得る

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} 次のサンプルは JavaScript で記述されていますが、他の言語も同様に動作します。

1. {% data variables.product.prodname_vscode %} を開きます。
次に示すように、{% data reusables.copilot.create-js-file %} {% data reusables.copilot.type-function-header %} {% data variables.product.prodname_copilot %} による関数本体全体の候補が自動的に灰色のテキストで表示されます。 実際に表示される候補はこのとおりではない場合があります。
![最初の候補 {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png) {% data reusables.copilot.accept-suggestion %}

## 次の手順

{% data variables.product.prodname_copilot %} を正常にインストールし、最初の候補を受け取りましたが、これはほんの始まりにすぎません。 {% data variables.product.prodname_copilot %} を使う次のステップに進む際は、次のリソースが役立ちます。

- [使用を開始する](/copilot/getting-started-with-github-copilot): {% data variables.product.prodname_vscode %} で最初の候補を得る方法について説明しています。 これらのガイドには、サポートされているすべての環境において、{% data variables.product.prodname_copilot %} のさまざまな機能を設定および操作する方法が説明されています。
- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/): {% data variables.product.prodname_copilot %} がどのように作業に役立つかについて実際の例をご覧ください。
- [{% data variables.product.prodname_copilot %} の構成](/copilot/configuring-github-copilot): これらのガイドには、{% data variables.product.prodname_copilot %} を個人の好みに合わせて構成する方法が詳しく説明されています。


## 参考資料

- [{% data variables.product.prodname_copilot %} について](/copilot/overview-of-github-copilot/about-github-copilot)
