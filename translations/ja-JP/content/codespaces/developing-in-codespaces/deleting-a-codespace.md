---
title: codespace を削除する
intro: 不要になった codespace を削除することができます。
redirect_from:
  - /github/developing-online-with-github-codespaces/deleting-a-codespace
  - /github/developing-online-with-codespaces/deleting-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Delete a codespace
ms.openlocfilehash: 24b53cc0cead2b6b15894ada4c799abc8e1c6e7a
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188257'
---
codespace はさまざまな方法で削除できます。たとえば、ターミナルで {% data variables.product.prodname_cli %} を使用して、{% data variables.product.prodname_vscode %} で、または、お使いの Web ブラウザーで削除できます。 この記事のタブを使用し、codespace を削除する各種方法の手順を表示してください。

{% note %}

**注**: codespace は JetBrains Gateway、JetBrains クライアント アプリケーション、JupyterLab 内から削除できません。

{% endnote %}

codespace の格納にはコストがかかります。 そのため、不要になった codespace は削除する必要があります。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)」をご覧ください。

{% data reusables.codespaces.max-number-codespaces %}

## codespace を削除する

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. 削除する codespace の右側で [{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}] をクリックし、 **[{% octicon "trash" aria-label="The trash icon" %} 削除]** をクリックします。

   ![[削除] ボタン](/assets/images/help/codespaces/delete-codespace.png)

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

codespace を削除するには、`gh codespace delete` サブコマンドを使用し、表示されるリストから codespace を選択します。

```shell
gh codespace delete
```

保存していない変更がある場合は、削除の確認を求めるメッセージが表示されます。 `--force` フラグを使用すると、このプロンプトを回避して強制的に削除できます。

このコマンドの詳細については、[{% data variables.product.prodname_cli %} に関するマニュアル](https://cli.github.com/manual/gh_codespace_delete)を参照してください。

{% endcli %}

## codespace の一括削除

{% webui %}

{% data variables.product.prodname_cli %} を使用すると、1 つのコマンドで複数またはすべての codespace を削除できます。 詳細については、このページの上部にある [{% data variables.product.prodname_cli %}] タブをクリックしてください。

{% endwebui %}

{% vscode %}

{% data variables.product.prodname_cli %} を使用すると、1 つのコマンドで複数またはすべての codespace を削除できます。 詳細については、このページの上部にある [{% data variables.product.prodname_cli %}] タブをクリックしてください。

{% endvscode %}


{% cli %}

`gh codespace delete` の後に次のフラグのいずれかを使用すると、1 つのコマンドを使用して、複数またはすべての codespace を削除できます。

`--all` - すべての codespace を削除します。

`--repo REPOSITORY` - このリポジトリのすべての codespace を削除します。 または、`--days` フラグと共に使用して、codespace の経過時間でフィルターします。

`--days NUMBER` - 指定した日数より古い codespace をすべて削除します。 `--repo` フラグと共に使用できます。

既定では、保存されていない変更を含む codespace の削除を確認するメッセージが表示されます。 `--force` フラグを使用して、この確認をスキップできます。 

### 例

7 日以上前に作成した `octo-org/octo-repo` リポジトリのすべての codespace を削除します。

```
gh codespace delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## 組織内の codespace を削除する

組織の所有者は、{% data variables.product.prodname_cli %} を使用して、組織内の任意の codespace を削除できます。

{% webui %}

詳細については、このページの上部にある [{% data variables.product.prodname_cli %}] タブをクリックしてください。

{% endwebui %}

{% vscode %}

詳細については、このページの上部にある [{% data variables.product.prodname_cli %}] タブをクリックしてください。

{% endvscode %}

{% cli %}

1. 次のいずれかのコマンドを入力して、codespace の一覧を表示します。
   * `gh codespace delete --org ORGANIZATION` - 指定した組織内の現在の codespace を一覧表示します。 
   * `gh codespace delete --org ORGANIZATION --user USER` - 指定したユーザーが作成した codespace のみを一覧表示します。
   自分が指定した組織の所有者である必要があります。
1. codespace の一覧で、削除したい codespace に移動します。
1. 選択した codespace を削除するには、<kbd>Enter</kbd> キーを押します。

   codespace に未保存の変更が含まれている場合は、削除の確認を求めるメッセージが表示されます。

{% endcli %}

REST API を使用して組織の codespace を削除することもできます。 詳細については、[codespace 組織](/rest/codespaces/organizations#delete-a-codespace-from-the-organization)に関する記事を参照してください。

## 参考資料
- 「[codespace のライフサイクル](/codespaces/getting-started/the-codespace-lifecycle)」
- [codespace の自動削除の構成](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)
