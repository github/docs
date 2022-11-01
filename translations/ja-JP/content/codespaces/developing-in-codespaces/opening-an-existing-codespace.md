---
title: 既存の codespace を開く
intro: 終了または停止した codespace をもう一度開いて、作業に戻ることができます。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Open an existing codespace
ms.openlocfilehash: 37eff72e5384ec5eda55708f7672cfe6832864c1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109579'
---
{% data variables.product.prodname_dotcom_the_website %} や {% data variables.product.prodname_vscode %} で、または {% data variables.product.prodname_cli %} を使って、アクティブな codespace または停止している codespace をもう一度開くことができます。 削除された codespace を開き直すことはできません。 詳しくは、「[{% data variables.product.prodname_codespaces %} のライフサイクル](/codespaces/developing-in-codespaces/codespaces-lifecycle)」をご覧ください。

## 既存の codespace を開く

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. 既定のエディターで codespace を開くには、codespace の名前をクリックします。 {% data reusables.codespaces.about-changing-default-editor %}詳しくは、「[{% data variables.product.prodname_github_codespaces %} の既定のエディターを設定する](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)」をご覧ください。
   
   既定以外のエディターで codespace を開くには、codespace の右側にある省略記号 **[...]** を選んで、 **[<アプリケーション> で開く]** をクリックします。

   ![[Visual Studio Code で開く] が強調されている "自分の codespace" ページのスクリーンショット](/assets/images/help/codespaces/open-codespace-in-another-editor.png)

{% endwebui %}

{% vscode %}

{% note %}

**注:** {% data reusables.codespaces.using-codespaces-in-vscode %}詳しくは、「[{% data variables.product.prodname_vscode %} で {% data variables.product.prodname_github_codespaces %} を使用する](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)」をご覧ください。

{% endnote %}

1. {% data variables.product.prodname_vscode_shortname %} デスクトップ アプリケーションで、<kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> (Mac) または <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> (Windows/Linux) を使ってコマンド パレットを開きます。
1. 「Codespaces」と入力して、次のいずれかのコマンドを選びます。
   - {% data variables.product.prodname_vscode_shortname %} の新しいウィンドウで codespace を開くには、 **[Codespaces: 新しいウィンドウで codespace を開く]** を選びます
   - Web エディターで codespace を開くには、 **[Codespaces: ブラウザーで開く]** を選びます
1. 開く codespace をクリックします。
   
   ![Visual Studio Code での codespace の一覧のスクリーンショット](/assets/images/help/codespaces/open-codespace-from-vscode.png)

{% data variables.product.prodname_vscode_shortname %} のリモート エクスプローラー ビューに移動し、開く codespace を右クリックすることで、上記のコマンドにアクセスすることもできます。

![[ブラウザーで開く] が強調されている、リモート エクスプローラーで選ばれた codespace のスクリーンショット](/assets/images/help/codespaces/open-codespace-remote-explorer.png)

{% data reusables.codespaces.remote-explorer %} {% endvscode %}

{% cli %}

1. ターミナルで、次のいずれかの {% data variables.product.prodname_cli %} コマンドを入力します。
   - {% data variables.product.prodname_vscode_shortname %} で codespace を開くには、次のように入力します。

     ```shell{:copy}
     gh codespace code
     ```

   - ブラウザーで codespace を開くには、次のように入力します。
  
     ```shell{:copy}
     gh codespace code --web
     ```

1. 方向キーを使って、開きたい codespace に移動します。
1. codespace を開くには、<kbd>Enter</kbd> キーを押します。

詳しくは、{% data variables.product.prodname_cli %} のマニュアルで [`gh codespace code`](https://cli.github.com/manual/gh_codespace_code) をご覧ください。

{% endcli %}
