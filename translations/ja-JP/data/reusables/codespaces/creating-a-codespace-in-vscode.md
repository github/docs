---
ms.openlocfilehash: d8f0e4e19ba362881f261a214aa56666f5902979
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158582"
---
{% data variables.product.prodname_dotcom_the_website %} のアカウントを {% data variables.product.prodname_github_codespaces %} 拡張機能に接続したら、新しい codespace を作成することができます。 {% data variables.product.prodname_github_codespaces %} 拡張機能の詳しい情報については、[{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) に関するページを参照してください。

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. [追加] アイコン {% octicon "plus" aria-label="The plus icon" %} をクリックします。

   ![{% data variables.product.prodname_github_codespaces %} の [Create New Codespace] オプション](/assets/images/help/codespaces/create-codespace-vscode.png)

3. 開発するリポジトリの名前を入力し、それを選択します。

   ![新しい codespace を作成するためのリポジトリを検索する](/assets/images/help/codespaces/choose-repository-vscode.png)

   選択したリポジトリが組織所有であり、このリポジトリの料金がその組織かその親会社に請求されるよう、codespace が設定されている場合、後続のプロンプトにメッセージが表示され、codespace の料金の支払者が伝えられます。

4. 開発するブランチをクリックします。

   ![新しい codespace を作成するためのブランチを検索する](/assets/images/help/codespaces/choose-branch-vscode.png)

5. 開発コンテナー構成ファイルの選択を求められたら、一覧からファイルを選びます。

   ![{% data variables.product.prodname_github_codespaces %} の開発コンテナー構成ファイルの選択](/assets/images/help/codespaces/choose-dev-container-vscode.png)

6. 使用するマシンの種類をクリックします。

   ![新しい codespace のインスタンス型](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **注**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}
