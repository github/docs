---
title: codespace の名前を変更する
intro: '{% data variables.product.prodname_cli %} を使用して、codespace の表示名を任意の名前に変更できます。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Fundamentals
- Developer
shortTitle: Rename a codespace
ms.openlocfilehash: 83a5ce0064a8f8deed752eaef0cd49be538ff9be
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147682504"
---
## codespace の名前変更について

各 codespace には、自動生成された表示名が割り当てられます。 複数の codespace がある場合、表示名は codespace を区別するのに役立ちます。 (例: `literate space parakeet`)。 codespace の表示名を変更できます。

codespace の表示名を見つけるには:

- {% data variables.product.product_name %} の https://github.com/codespaces で、codespace の一覧を表示します。

  ![GitHub の codespace の一覧のスクリーンショット](/assets/images/help/codespaces/codespaces-list-display-name.png)

- {% data variables.product.prodname_vscode %} デスクトップ アプリケーションまたは {% data variables.product.prodname_vscode_shortname %} Web クライアントで、[リモート エクスプローラー] をクリックします。 表示名は、リポジトリ名の下に表示されます。 たとえば、次のスクリーンショットの `symmetrical space telegram`。

  ![VS Code のリモート エクスプローラーのスクリーンショット](/assets/images/help/codespaces/codespaces-remote-explorer.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=2 %}
- ローカル コンピューターのターミナル ウィンドウで、次の {% data variables.product.prodname_cli %} コマンドを使用します: `gh codespace list`。 

### 永続的な codespace 名

表示名に加えて、codespace を作成するときに、永続的な名前も codespace に割り当てられます。 名前は、{% data variables.product.company_short %} ハンドル、リポジトリ名、およびいくつかのランダムな文字の組み合わせです。 (例: `octocat-myrepo-gmc7`)。 この名前は変更できません。

codespace の永続的な名前を見つけるには:

* {% data variables.product.product_name %} では、 https://github.com/codespaces で **[ブラウザーで開く]** オプションにカーソルを合わせると、永続的な名前がポップアップに表示されます。 

   ![カーソルを合わせると表示される codespace 名のスクリーンショット](/assets/images/help/codespaces/find-codespace-name-github.png)
   
* codespace では、ターミナルで次のコマンドを使用します: `echo $CODESPACE_NAME`。
* ローカル コンピューターのターミナル ウィンドウで、次の {% data variables.product.prodname_cli %} コマンドを使用します: `gh codespace list`。

## codespace の名前を変更する

codespace の表示名を変更すると、長期間使用する複数の codespace がある場合に便利です。 適切な名前は、特定の目的に使用する codespace を識別するのに役立ちます。 {% data variables.product.prodname_cli %} を使用して、codespace の表示名を変更できます。

codespace の名前を変更するには、`gh codespace edit` サブコマンドを使用します。

```shell
gh codespace edit -c <em>permanent name of the codespace</em> -d <em>new display name</em>
```

この例では、`permanent name of the codespace` を codespace の永続的な名前に置き換えます。 `new display name` を必要な表示名に置き換えます。