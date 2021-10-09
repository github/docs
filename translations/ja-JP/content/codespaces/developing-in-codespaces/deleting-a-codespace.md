---
title: codespace を削除する
intro: 不要になった codespace を削除することができます。
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/deleting-a-codespace
  - /github/developing-online-with-codespaces/deleting-a-codespace
versions:
  fpt: '*'
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

1. Navigate to the "Your Codespaces" page at [github.com/codespaces](https://github.com/codespaces).

2. 削除する codespace の右側で {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、**{% octicon "trash" aria-label="The trash icon" %} [Delete]** をクリックします。 ![削除ボタン](/assets/images/help/codespaces/delete-codespace.png)

## {% data variables.product.prodname_vscode %} で Codespaces を削除する

{% data variables.product.prodname_vscode %} の codespace を削除する方法については、「[Visual Studio Code で Codespaces を使用する](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code#deleting-a-codespace-in-visual-studio-code)」を参照してください。
