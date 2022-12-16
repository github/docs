---
title: 既存の codespace を開く
intro: 終了または停止した codespace をもう一度開いて、作業に戻ることができます。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Open an existing codespace
ms.openlocfilehash: b139b7f4e8a696416c97b3c400d09a9f26371b9c
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188297'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% data variables.product.prodname_dotcom_the_website %} 上、JetBrains IDE 内、{% data variables.product.prodname_vscode %} 内、または {% data variables.product.prodname_cli %} を使って、アクティブなまたは停止している codespace をもう一度開くことができます。 削除された codespace を開き直すことはできません。 詳しくは、「[codespace のライフサイクル](/codespaces/getting-started/the-codespace-lifecycle)」を参照してください。

自分のすべての codespace は、[github.com/codespaces](https://github.com/codespaces) の [あなたの codespace] ページで確認できます。 このページからは、次のことを行うことができます。

- codespace を開く、停止する、または削除する。
- codespaces の所有者 (および課金先である可能性があるユーザー) を確認する (個人アカウント、または所属する組織)。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)」をご覧ください。
- 新しい codespace を、{% data variables.product.company_short %} のテンプレートのいずれかを選択するか、 **[新しい codespace]** をクリックして作成する。 詳しくは、[テンプレートからの codespace の作成](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)と[リポジトリからの codespace の作成](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)に関する説明を参照してください。

## 既存の codespace を開く

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. 既定のエディターで codespace を開くには、codespace の名前をクリックします。 {% data reusables.codespaces.about-changing-default-editor %}詳しくは、「[{% data variables.product.prodname_github_codespaces %} の既定のエディターを設定する](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)」をご覧ください。
   
   既定以外のエディターで codespace を開くには、次のようにします。
   
   1. 開く codespace の右側にある省略記号 ( **...** ) をクリックします。
   1. **[開く]** をクリックします。
   1. **[開くアプリケーション]** をクリックします。

   ![[Visual Studio Code で開く] が強調されている [開く] ダイアログ ボックスのスクリーンショット](/assets/images/help/codespaces/open-codespace-in-another-editor.png)

   codespace は次の中で開くことができます。
   * 自分のブラウザー
   * {% data variables.product.prodname_vscode %}
   * JetBrains Gateway
   * JupyterLab

   {% data reusables.codespaces.application-installed-locally %}

   **JupyterLab** を選んだ場合は、JupyterLab アプリケーションを codespace にインストールする必要があります。 {% data reusables.codespaces.jupyterlab-in-default-image %}

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
     
     {% note %}

     **注**: ローカル コンピューターに {% data variables.product.prodname_vscode_shortname %} がインストールされている必要があります。 詳しくは、{% data variables.product.prodname_vscode_shortname %} ドキュメントの [Visual Studio Code の設定](https://code.visualstudio.com/docs/setup/setup-overview)に関する説明を参照してください。

     {% endnote %}
     
   - ブラウザーで codespace を開くには、次のように入力します。
  
     ```shell{:copy}
     gh codespace code --web
     ```

   - JupyterLab で codespace を開くには、次のように入力します。
  
     ```shell{:copy}
     gh codespace code --jupyter
     ```
     
     {% note %}

     **注**: {% data reusables.codespaces.jupyterlab-installed-in-codespace %}

     {% endnote %}
     
1. 方向キーを使って、開きたい codespace に移動します。
1. codespace を開くには、<kbd>Enter</kbd> キーを押します。

詳しくは、{% data variables.product.prodname_cli %} のマニュアルで [`gh codespace code`](https://cli.github.com/manual/gh_codespace_code) をご覧ください。

{% endcli %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}
