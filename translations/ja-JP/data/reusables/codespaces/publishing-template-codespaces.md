---
ms.openlocfilehash: a78c61511f0daa225bc27576a2ab57e8e1bea939
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160150"
---
codespace で作業している場合は、{% data variables.product.prodname_vscode_shortname %} Web クライアントまたはデスクトップ アプリケーションから発行できます。

{% data reusables.codespaces.source-control-display-dark %}
1. 変更をステージングするには、追加または変更したファイルの横の **[+]** をクリックします。複数のファイルを変更してすべてをステージングする場合は、 **[変更]** の横のものをクリックします。

   ![ステージング ボタンが強調表示されたソース コントロール サイドバー](/assets/images/help/codespaces/codespaces-commit-stage.png)

   {% note %}

   **注:** {% data variables.product.company_short %} の空のテンプレートから開始した場合、ディレクトリを Git リポジトリとして既に初期化していない限り、変更の一覧は表示されません。 空のテンプレートから作成された codespace を発行するには、[ソース管理] ビューで **[{% data variables.product.company_short %} に発行]** をクリックし、手順 5 に進みます。

   {% endnote %}
2. ステージングされた変更をコミットするには、行った変更を説明するコミット メッセージを入力し、 **[コミット]** をクリックします。

   ![コミット メッセージがあるソース管理サイドバー](/assets/images/help/codespaces/vscode-commit-button.png) 
3. **[ブランチを公開する]** をクリックします。
   
   ![VS Code の [ブランチの発行] ボタンのスクリーンショット](/assets/images/help/codespaces/vscode-publish-branch-button.png)
4. [リポジトリ名] ドロップダウンで、新しいリポジトリの名前を入力し、 **[{% data variables.product.company_short %} プライベート リポジトリに発行]** または **[{% data variables.product.company_short %} パブリック リポジトリに発行]** を選びます。
   
   ![VS Code の [リポジトリ名] ドロップダウンのスクリーンショット](/assets/images/help/codespaces/choose-new-repository.png)

   新しいリポジトリの所有者は、codespace を作成した {% data variables.product.prodname_dotcom %} アカウントになります。
5. 必要に応じて、エディターの右下隅に表示されるポップアップで、 **[{% data variables.product.company_short %} で開く]** をクリックして、{% data variables.product.prodname_dotcom_the_website %} の新しいリポジトリを表示します。
   
   ![VS Code の [GitHub で開く] ポップアップのスクリーンショット](/assets/images/help/codespaces/open-on-github.png)