---
title: codespace の名前を変更する
intro: 'codespace の表示名は {% data variables.product.prodname_dotcom_the_website %} または {% data variables.product.prodname_cli %} から変更できます。'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Rename a codespace
ms.openlocfilehash: dcb4558cce7ca0768524917a46cde2a49bacd1ce
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158718'
---
## codespace の名前変更について

各 codespace には、自動生成された表示名が割り当てられます。 複数の codespace がある場合、表示名は codespace を区別するのに役立ちます。 (例: `literate space parakeet`)。 codespace の表示名を変更できます。

codespace の表示名を見つけるには:

- {% data variables.product.product_name %} の https://github.com/codespaces で、codespace の一覧を表示します。

  ![GitHub の codespace の一覧のスクリーンショット](/assets/images/help/codespaces/codespaces-list-display-name.png)

- {% data variables.product.prodname_vscode %} デスクトップ アプリケーションまたは {% data variables.product.prodname_vscode_shortname %} Web クライアントで、[リモート エクスプローラー] をクリックします。 表示名はリストの 2 番目の項目です。 たとえば、次のスクリーンショットの `symmetrical space telegram`。

  ![VS Code のリモート エクスプローラーのスクリーンショット](/assets/images/help/codespaces/codespaces-remote-explorer.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=2 %}
- ローカル コンピューターのターミナル ウィンドウで、次の {% data variables.product.prodname_cli %} コマンドを使用します: `gh codespace list`。 

### 永続的な codespace 名

表示名に加えて、codespace を作成するときに、永続的な名前も codespace に割り当てられます。 名前は {% data variables.product.company_short %} ハンドルと自動生成された表示名の組み合わせです。 (例: `octocat-literate-space-parakeet-mld5`)。 永続的な名前は変更できません。

codespace の永続的な名前を見つけるには:

* {% data variables.product.product_name %} で、 https://github.com/codespaces の codespace の表示名にカーソルを合わせると、永続的な名前がポップアップに表示されます。 

   ![カーソルを合わせると表示される codespace 名のスクリーンショット](/assets/images/help/codespaces/find-codespace-name-github.png)
   
* codespace では、ターミナルで次のコマンドを使用します: `echo $CODESPACE_NAME`。
* ローカル コンピューターのターミナル ウィンドウで、次の {% data variables.product.prodname_cli %} コマンドを使用します: `gh codespace list`。

## codespace の名前を変更する

codespace の表示名を変更すると、長期間使用する複数の codespace がある場合に便利です。 適切な名前は、特定の目的に使用する codespace を識別するのに役立ちます。 

{% cli %}

{% data variables.product.prodname_cli %} を使用して、codespace の表示名を変更できます。

codespace の名前を変更するには、`gh codespace edit` サブコマンドを使用します。

```shell
gh codespace edit -c PERMANENT-CODESPACE-NAME -d NEW-DISPLAY-NAME
```

この例では、`PERMANENT-CODESPACE-NAME` を、表示名を変更する codespace の永続的な名前に置き換えます。 `NEW-DISPLAY-NAME` を、この codespace に使用する表示名に置き換えます。

詳細については、「[{% data variables.product.prodname_github_codespaces %} と {% data variables.product.prodname_cli %} の使用](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli#rename-a-codespace)」を参照してください。

{% endcli %}

{% webui %}

codespace の表示名は {% data variables.product.prodname_dotcom_the_website %} で変更できます。

{% data reusables.codespaces.your-codespaces-procedure-step %}

    The current display name for each of your codespaces is displayed.

{% data reusables.codespaces.ellipsis-settings %}
1. **[名前変更]** をクリックします。

1. プロンプトの "Change display name to..." に希望の表示名を入力し、 **[OK]** をクリックします。

{% endwebui %}
