---
title: devcontainer.json ファイルへの機能の追加
shortTitle: Adding features
intro: 機能を使用すると、dev container 構成にツール、ランタイム、またはライブラリをすばやく追加できます。
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: 7e72739e93e83995d86baf19d62f7bf2e1c5b6bc
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180828'
---
{% data reusables.codespaces.about-features %} この記事のタブを使用して、これらの機能を追加する各方法の手順を表示します。

## `devcontainer.json` ファイルへの機能の追加

{% webui %}

1. {% data variables.product.prodname_dotcom_the_website %} のリポジトリに移動し、`devcontainer.json` ファイルを見つけて、{% octicon "pencil" aria-label="The edit icon" %} をクリックしてファイルを編集します。
   
   `devcontainer.json` ファイルがない場合は、ここで作成します。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)に関するページをご覧ください。
1. ファイル エディターの右側にある **[Marketplace]** タブで、追加する機能を参照または検索し、その機能の名前をクリックします。

   ![[Marketplace] タブの Terraform 機能のスクリーンショット。検索バーに "Terra" が表示されています](/assets/images/help/codespaces/feature-marketplace.png)
3. [インストール] で、コード スニペットをクリックしてクリップボードにコピーし、`devcontainer.json` ファイル内の `features` オブジェクトにスニペットを貼り付けます。

   ![[Marketplace] タブの [インストール] セクションのコード ブロックのスクリーンショット](/assets/images/help/codespaces/feature-installation-code.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {},
        ...
    }
    ```
1. 既定では、最新バージョンの機能が使用されます。 別のバージョンを選んだり、機能の他のオプションを構成したりするには、[オプション] の下に表示されているプロパティを展開して使用可能な値を表示し、`devcontainer.json` ファイル内のオブジェクトを手動で編集してオプションを追加します。

   ![[Marketplace] タブの [オプション] セクションのスクリーンショット。[バージョン] と [tflint] が展開されています](/assets/images/help/codespaces/feature-options.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {
            "version": "1.1",
            "tflint": "latest"
        },
        ...
    }
    ```
1. `devcontainer.json` ファイルへの変更をコミットします。

構成の変更は、リポジトリから作成された新しい codespace で有効になります。 既存の codespace で変更を有効にするには、`devcontainer.json` ファイルの更新を codespace にプルしてから、codespace のコンテナーをリビルドする必要があります。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)に関するページをご覧ください。

{% endwebui %}

{% vscode %}

{% note %}

ローカルで作業していて、codespace に接続されていないときに {% data variables.product.prodname_vscode_shortname %} に機能を追加するには、"Dev Containers" 拡張機能がインストールされ、有効になっている必要があります。 この拡張機能の詳細については、「[{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)」を参照してください。

{% endnote %}

{% data reusables.codespaces.command-pallette %}
2. 「構成」と入力し、 **[Codespaces: Dev Container 機能の構成]** を選びます。

   ![コマンド パレットの [Devcontainer 機能の構成] コマンド](/assets/images/help/codespaces/codespaces-configure-features.png)

3. 機能の選択を更新し、 **[OK]** をクリックします。

   ![コンテナーの構成時の追加機能メニューの選択](/assets/images/help/codespaces/select-additional-features.png)

4. codespace で作業している場合は、右下隅にプロンプトが表示されます。 コンテナーをリビルドし、作業中の codespace に変更を適用するには、 **[今すぐリビルド]** をクリックします。

   ![コマンド パレットの [Codespaces: コンテナーのリビルド]](/assets/images/help/codespaces/rebuild-prompt.png)

{% endvscode %}
