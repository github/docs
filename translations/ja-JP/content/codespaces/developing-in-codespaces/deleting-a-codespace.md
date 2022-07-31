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
---



{% data reusables.codespaces.concurrent-codespace-limit %}

{% note %}

**注釈:** codespace を作成したユーザだけが削除できます。 現在、Organization のオーナーが Organization 内で作成された Codespaces を削除する方法はありません。

{% endnote %}

## codespace を削除する

{% webui %}

1. Navigate to the "Your Codespaces" page at [github.com/codespaces](https://github.com/codespaces).

2. 削除する codespace の右側で {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、**{% octicon "trash" aria-label="The trash icon" %} [Delete]** をクリックします。

   ![削除ボタン](/assets/images/help/codespaces/delete-codespace.png)

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

To delete a codespace use the `gh codespace delete` subcommand and then choose a codespace from the list that's displayed.

```shell
gh codespace delete
```

If you have unsaved changes, you'll be prompted to confirm deletion. You can use the `--force` flag to force deletion, avoiding this prompt.

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_delete).

{% endcli %}

## Bulk deleting codespaces

{% webui %}

You can use {% data variables.product.prodname_cli %} to delete several or all of your codespaces with a single command. For more information, click the **{% data variables.product.prodname_cli %}** tab near the top of this page.

{% endwebui %}

{% vscode %}

You can use {% data variables.product.prodname_cli %} to delete several or all of your codespaces with a single command. For more information, click the **{% data variables.product.prodname_cli %}** tab near the top of this page.

{% endvscode %}


{% cli %}

You can delete several or all of your codespaces with a single command, using `gh codespace delete` followed by one of these flags:

`--all` - Delete all of your codespaces.

`--repo REPOSITORY` - Delete all of your codespaces for this repository. Or use together with the `--days` flag to filter by age of the codespace.

`--days NUMBER` - Delete all of your codespaces that are older than the specified number of days. Can be used together with the `--repo` flag.

By default you are prompted to confirm deletion of any codespaces that contain unsaved changes. You can use the `--force` flag to skip this confirmation.

### サンプル

Delete all of the codespaces for the `octo-org/octo-repo` repository that you created more than 7 days ago.

```
gh cs delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## 参考リンク
- [Codespaces lifecycle](/codespaces/developing-in-codespaces/codespaces-lifecycle)
