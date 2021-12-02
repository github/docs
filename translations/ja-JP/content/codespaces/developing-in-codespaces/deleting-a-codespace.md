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
---

 

{% data reusables.codespaces.concurrent-codespace-limit %}

{% note %}

**注釈:** codespace を作成したユーザだけが削除できます。 現在、Organization のオーナーが Organization 内で作成された Codespaces を削除する方法はありません。

{% endnote %}

{% include tool-switcher %}

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

If you have unsaved changes, you'll be prompted to confirm deletion. You can use the `-f` flag to force deletion, avoiding this prompt.

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_delete).

{% endcli %}

## 参考リンク
- [Codespaces lifecycle](/codespaces/developing-in-codespaces/codespaces-lifecycle)
