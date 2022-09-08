---
ms.openlocfilehash: 68c33e94d3ccd97315cfff7461566d418872e218
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147521483"
---
{% data variables.product.product_location %} のアカウントを {% data variables.product.prodname_github_codespaces %} 拡張機能に接続したら、新しい codespace を作成することができます。 {% data variables.product.prodname_github_codespaces %} 拡張機能の詳しい情報については、[{% data variables.product.prodname_vs_marketplace_shortname %} マーケットプレース](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)に関するページを参照してください。

{% note %}

**注**: 現在、{% data variables.product.prodname_vscode_shortname %} では、codespace 作成時に、開発コンテナー構成を選択することができません。 特定の開発コンテナー構成を選択する場合は、{% data variables.product.prodname_dotcom %} Web インターフェイスを使って、codespace を作成します。 詳しい情報については、このページの上部にある **[Web ブラウザー]** タブをクリックしてください。

{% endnote %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. [追加] アイコン {% octicon "plus" aria-label="The plus icon" %} をクリックします。

   ![{% data variables.product.prodname_codespaces %} の [Create New Codespace] オプション](/assets/images/help/codespaces/create-codespace-vscode.png)

3. 開発するリポジトリの名前を入力し、それを選択します。

   ![新しい {% data variables.product.prodname_codespaces %} を作成するためのリポジトリを検索する](/assets/images/help/codespaces/choose-repository-vscode.png)

4. 開発するブランチをクリックします。

   ![新しい {% data variables.product.prodname_codespaces %} を作成するためのブランチを検索する](/assets/images/help/codespaces/choose-branch-vscode.png)

5. 開発コンテナー構成ファイルの選択を求められたら、一覧からファイルを選びます。

   ![{% data variables.product.prodname_codespaces %} の開発コンテナー構成ファイルの選択](/assets/images/help/codespaces/choose-dev-container-vscode.png)

6. 使用するマシンの種類をクリックします。

   ![新しい {% data variables.product.prodname_codespaces %} のインスタンスタイプ](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **注**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}
