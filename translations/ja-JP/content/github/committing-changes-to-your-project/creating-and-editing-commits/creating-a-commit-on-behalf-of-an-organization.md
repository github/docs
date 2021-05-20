---
title: Organization の代理でコミットを作成する
intro: 'コミットのメッセージにトレーラーを追加することで、Organization の代理でコミットを作成できます。 Organization に属するコミットには、{% data variables.product.product_name %} で `on-behalf-of` というバッジが付きます。'
redirect_from:
  - /articles/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-a-commit-on-behalf-of-an-organization
versions:
  free-pro-team: '*'
---
{% note %}

**メモ:** Organization の代理でコミットを作成する機能は、現在パブリックベータであり、変更されることがあります。

{% endnote %}

Organization の代理でコミットを作成するには、以下の条件を満たす必要があります:

- トレーラーで示される Organization のメンバーであること
- あなたがコミットに署名すること
- コミットメールおよび Organization メールが、Organization で検証済みのドメインであること
- コミットメッセージが、`on-behalf-of: @org <name@organization.com>` というコミットトレーラーで終わること
  - `org` は Organization のログイン名
  - `name@organization.com` は Organization のドメイン内

Organization は、オープンソースの取り組みにおいて、`name@organization.com` のメールアドレスを公開連絡先として使うことができます。

### コマンドラインで `on-behalf-of` バッジを付けてコミットを作成する

1. コミットメッセージと、変更の短く分かりやすい説明を入力してください。 コミットの説明の後に、閉じる引用符の代わりに 2 つの空の行を追加してください。
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **参考:** コミットメッセージの入力にコマンドライン上のテキストエディタを使っている場合、コミットの説明とコミットトレーラーの`on-behalf-of:`との間に新しい改行が 2 つあることを確認してください。

  {% endtip %}

2. コミットメッセージの次の行に、`on-behalf-of: @org <name@organization.com>` と入力して、引用符で閉じます。

  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  on-behalf-of: <em>@org</em> &lt;<em>name@organization.com</em>&gt;"
  ```

次回のプッシュ時に、{% data variables.product.product_location %} に新たなコミット、メッセージ、およびバッジが表示されます。 詳細は「[リモートリポジトリに変更をプッシュする](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)」を参照してください。

### {% data variables.product.product_name %} で `on-behalf-of` バッジを付けてコミットを作成する

{% data variables.product.product_name %} のウェブエディタでファイルを変更してから、コミットのメッセージに `on-behalf-of:` トレーラーを追加することで、Organization の代理でコミットを作成できます。

1. 変更を行った後は、ページの下部に、変更について説明する、短くて意味のあるコミットメッセージを入力します。 ![変更のコミットメッセージ](/assets/images/help/repository/write-commit-message-quick-pull.png)

2. コミットメッセージの下にあるテキストボックスに、`on-behalf-of: @org <name@organization.com>` を追加します。

  ![2 つ目のコミットメッセージテキストボックスにある、代理コミットメッセージのトレーラー例](/assets/images/help/repository/write-commit-message-on-behalf-of-trailer.png)
4. [**Commit changes**] または [**Propose changes**] をクリックします。

{% data variables.product.product_location %} に新たなコミット、メッセージ、およびバッジが表示されます。

### 参考リンク

- [プロフィール上でのコントリビューションの表示](/articles/viewing-contributions-on-your-profile)
- [プロフィール上でコントリビューションが表示されない理由](/articles/why-are-my-contributions-not-showing-up-on-my-profile)
- [リポジトリアクティビティの概要を表示する](/articles/viewing-a-summary-of-repository-activity)
- [プロジェクトのコントリビューターを表示する](/articles/viewing-a-projects-contributors)
- [コミットメッセージの変更](/articles/changing-a-commit-message)
