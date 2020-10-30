---
title: 複数の作者を持つコミットを作成する
intro: 'コミットのメッセージに、1 つ以上の "Co-authored-by" トレーラーを追加することで、1 つのコミットに複数の作者を追加できます。 共作されたコミットは {% data variables.product.product_name %}{% if currentVersion != "free-pro-team@latest" %} で表示され、プロフィールコントリビューショングラフとリポジトリの統計に含めることができます。{% endif %}'
redirect_from:
  - /articles/creating-a-commit-with-multiple-authors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 必要な共作者情報

コミットに共作者を追加する前に、各共作者に使う適切なメールアドレスを知っておく必要があります。 共作者のコミットがコントリビューションとしてカウントされるためには、{% data variables.product.product_name %} アカウントに関連付けられているメールアドレスを使う必要があります。

{% if currentVersion == "free-pro-team@latest" %}

メールアドレスをプライベートにしておきたい人がいる場合、その人のプライバシーを保護するために、{% data variables.product.product_name %} が提供する `no-reply` メールを使わなければなりません。 そうしない場合、コミットメッセージで共作者のメールアドレスが公開されます。 自分のメールアドレスをプライベートにしておきたい場合、Git の操作のために {% data variables.product.product_name %} が提供する `no-reply` メールアドレスを使い、他の共作者に、`no-reply` メールアドレスをコミットのトレーラーに載せるよう依頼できます。

詳細は「[コミットメールアドレスを設定する](/articles/setting-your-commit-email-address)」を参照してください。

  {% tip %}

  **ヒント:** 以下の情報を伝えることで、共作者が好みのメールアドレスを見つける手助けができます:
  - {% data variables.product.product_name %} が提供する `no-reply` メールアドレスを表示するには、[Keep my email address private] のメールアドレス設定に移動します。
  - Git を設定するためのメールアドレスを手元のコンピュータで表示するには、コマンドラインで `git config user.email` を実行します。

  {% endtip %}

{% endif %}

### {% data variables.product.prodname_desktop %} で co-authored コミットを作成する

{% data variables.product.prodname_desktop %} で、共作者を持つコミットを作成できます。 詳細は「[コミットメッセージの入力と変更のプッシュ](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#3-write-a-commit-message-and-push-your-changes)」および [{% data variables.product.prodname_desktop %}](https://desktop.github.com) を参照してください。

![コミットメッセージに共作者を追加](/assets/images/help/desktop/co-authors-demo-hq.gif)

### コマンドライン上で co-authored コミットを作成する

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}

{% data reusables.pull_requests.commit-message-with-trailer-beginning %}

3. コミットメッセージの次の行に、各共作者の情報を `Co-authored-by: name <name@example.com>` という形式で入力します。 共同作者の情報の後に、閉じる引用符を追加します。

  複数の共作者を追加する場合は、共作者それぞれに 1 行をとり、`Co-authored-by:` コミットトレーラーを付けてください。
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  Co-authored-by: <em>name</em> &lt;<em>name@example.com</em>&gt;
  Co-authored-by: <em>another-name</em> &lt;<em>another-name@example.com</em>&gt;"
  ```

次回のプッシュ時に、{% data variables.product.product_location %}に新たなコミットとメッセージが表示されます。 詳細は「[リモートリポジトリに変更をプッシュする](/articles/pushing-commits-to-a-remote-repository/)」を参照してください。

### {% data variables.product.product_name %} で co-authored コミットを作成する

{% data variables.product.product_name %} のウェブエディタでファイルを変更してから、コミットのメッセージに `Co-authored-by:` トレーラーを追加することで、co-authored コミットを作成できます。

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}
2. 共同で変更を行った後は、ページの下部に、変更について説明する、短くて意味のあるコミットメッセージを入力します。 ![変更のコミットメッセージ](/assets/images/help/repository/write-commit-message-quick-pull.png)
3. コミットメッセージの下にあるテキストボックスに、各共同作者の情報を `Co-authored-by: name <name@example.com>` という形式で入力します。 複数の共作者を追加する場合は、共作者それぞれに 1 行をとり、`Co-authored-by:` コミットトレーラーを付けてください。

  ![2 つ目のコミットメッセージテキストボックスにある、コミットメッセージの共同作者トレーラー例](/assets/images/help/repository/write-commit-message-co-author-trailer.png)
4. [**Commit changes**] または [**Propose changes**] をクリックします。

{% data variables.product.product_location %} に新たなコミットとメッセージが表示されます。

### 参考リンク
{% if currentVersion != "free-pro-team@latest" %}
- [プロフィール上でのコントリビューションの表示](/articles/viewing-contributions-on-your-profile)
- [プロフィール上でコントリビューションが表示されない理由](/articles/why-are-my-contributions-not-showing-up-on-my-profile){% endif %}
- [リポジトリアクティビティの概要を表示する](/articles/viewing-a-summary-of-repository-activity)
- [プロジェクトのコントリビューターを表示する](/articles/viewing-a-projects-contributors)
- [コミットメッセージの変更](/articles/changing-a-commit-message)
- {% data variables.product.prodname_desktop %} ドキュメンテーションの「[プロジェクトへの変更をコミットまたはレビューする](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#3-write-a-commit-message-and-push-your-changes)」
