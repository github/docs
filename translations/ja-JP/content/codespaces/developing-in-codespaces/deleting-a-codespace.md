---
title: codespace を削除する
intro: 不要になった codespace を削除することができます。
product: '{% data reusables.gated-features.codespaces %}'
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
ms.openlocfilehash: b55d350e439953defac182eae23423b839ff7cf7
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: '145125267'
---
{% data reusables.codespaces.concurrent-codespace-limit %}

{% note %}

**注:** codespace を作成したユーザーのみが削除できます。 現在、Organization のオーナーが Organization 内で作成された Codespaces を削除する方法はありません。

{% endnote %}

## <a name="deleting-a-codespace"></a>codespace を削除する

{% webui %}

1. [github.com/codespaces](https://github.com/codespaces) の [Codespaces] ページに移動します。

2. 削除する codespace の右側で [{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}] をクリックし、 **[{% octicon "trash" aria-label="The trash icon" %} 削除]** をクリックします。

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

## <a name="bulk-deleting-codespaces"></a>codespace の一括削除

{% webui %}

{% data variables.product.prodname_cli %} を使用すると、1 つのコマンドで複数またはすべての codespace を削除できます。 詳細については、このページの上部にある **{% data variables.product.prodname_cli %}** タブをクリックしてください。

{% endwebui %}

{% vscode %}

{% data variables.product.prodname_cli %} を使用すると、1 つのコマンドで複数またはすべての codespace を削除できます。 詳細については、このページの上部にある **{% data variables.product.prodname_cli %}** タブをクリックしてください。

{% endvscode %}


{% cli %}

`gh codespace delete` の後に次のフラグのいずれかを使用すると、1 つのコマンドを使用して、複数またはすべての codespace を削除できます。

`--all` - すべての codespace を削除します。

`--repo REPOSITORY` - このリポジトリのすべての codespace を削除します。 または、`--days` フラグと共に使用して、codespace の経過時間でフィルターします。

`--days NUMBER` - 指定した日数より古い codespace をすべて削除します。 `--repo` フラグと共に使用できます。

既定では、保存されていない変更を含む codespace の削除を確認するメッセージが表示されます。 `--force` フラグを使用して、この確認をスキップできます。 

### <a name="example"></a>例

7 日以上前に作成した `octo-org/octo-repo` リポジトリのすべての codespace を削除します。

```
gh cs delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## <a name="further-reading"></a>参考資料
- [Codespaces のライフサイクル](/codespaces/developing-in-codespaces/codespaces-lifecycle)
