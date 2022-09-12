---
title: 複数の作者を持つコミットを作成する
intro: 'コミットのメッセージに 1 つ以上の `Co-authored-by` トレーラーを追加することで、1 つのコミットが複数の作成者に属するようにすることができます。 共同作成されたコミットは、{% data variables.product.product_name %}{% ifversion ghes or ghae %} に表示することができ、プロファイル コントリビューション グラフとリポジトリの統計に含めることができます。{% endif %}.'
redirect_from:
  - /articles/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: With multiple authors
ms.openlocfilehash: 4aa5b707e75480ead830e680151064db5f278557
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132540'
---
## 必要な共作者情報

コミットに共作者を追加する前に、各共作者に使う適切なメールアドレスを知っておく必要があります。 共同作成者のコミットが投稿としてカウントされるようにするには、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} のアカウントに関連付けられているメールを使う必要があります。

{% ifversion fpt or ghec %}

メールアドレスを非公開にしておきたい人がいる場合、その人のプライバシーを保護するために、{% data variables.product.product_name %} が提供する `no-reply` メールを使う必要があります。 そうしない場合、コミットメッセージで共作者のメールアドレスが公開されます。 ご自分のメールアドレスを非公開にしておきたい場合、Git の操作のために {% data variables.product.product_name %} が提供する`no-reply` メールアドレスを使い、他の共作者に、`no-reply` メールアドレスをコミットのトレーラーに載せるよう依頼できます。

詳細については、「[コミット メール アドレスの設定](/articles/setting-your-commit-email-address)」を参照してください。

  {% tip %}

  **ヒント:** 以下の情報を共有することで、共作者が好みのメールアドレスを見つける手助けができます:
  - {% data variables.product.product_name %} が提供する `no-reply` メールアドレスを見つけるには、[メールアドレスを非公開にする] のメールアドレス設定ページに移動します。
  - コンピューターで Git の構成に使ったメールアドレスを見つけるには、コマンド ラインで `git config user.email` を実行します。

  {% endtip %}

{% endif %}

## {% data variables.product.prodname_desktop %} で co-authored コミットを作成する

{% data variables.product.prodname_desktop %} で、共作者を持つコミットを作成できます。 詳しくは、「[コミットメッセージの入力と変更のプッシュ](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes)」と、[{% data variables.product.prodname_desktop %}](https://desktop.github.com) を参照してください。

![コミットメッセージに共作者を追加](/assets/images/help/desktop/co-authors-demo-hq.gif)

## コマンドライン上で co-authored コミットを作成する

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}

1. コミットメッセージと、変更の短く分かりやすい説明を入力してください。 コミットの説明の後に、閉じる引用符の代わりに 2 つの空の行を追加してください。
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **ヒント:** コミット メッセージの入力にコマンドライン上のテキスト エディターをお使いの場合、コミットの説明の末尾と `Co-authored-by:` コミット トレーラーのとの間に改行が 2 つあることをご確認ください。

  {% endtip %}

3. コミット メッセージの次の行で、共同作成者ごとに `Co-authored-by: name <name@example.com>` と個別の情報を入力します。 共同作者の情報の後に、閉じる引用符を追加します。

  複数の共作者を追加する場合は、共同作成者ごとに 1 行と、`Co-authored-by:` コミット トレーラーを割り当てます。
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  Co-authored-by: <em>name</em> &lt;<em>name@example.com</em>&gt;
  Co-authored-by: <em>another-name</em> &lt;<em>another-name@example.com</em>&gt;"
  ```

次回のプッシュ時に、{% data variables.product.product_location %}に新たなコミットとメッセージが表示されます。 詳しくは、[変更をリモート リポジトリにプッシュする](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)方法に関するページを参照してください。

## {% data variables.product.product_name %} で co-authored コミットを作成する

{% data variables.product.product_name %} の Web エディターを使ってファイルを変更してから、コミットのメッセージに `Co-authored-by:` トレーラーを追加すると、co-authored コミットを作成できます。

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}
2. 共同で変更を行った後は、ページの下部に、変更について説明する、短くて意味のあるコミットメッセージを入力します。
  ![変更のコミット メッセージ](/assets/images/help/repository/write-commit-message-quick-pull.png)
3. コミット メッセージの下のテキスト ボックスに、共同作成者ごとに個別の情報と `Co-authored-by: name <name@example.com>` を追加します。 複数の共作者を追加する場合は、共同作成者ごとに 1 行と、`Co-authored-by:` コミット トレーラーを割り当てます。

  ![2 つ目のコミットメッセージテキストボックスにある、コミットメッセージの共同作者トレーラー例](/assets/images/help/repository/write-commit-message-co-author-trailer.png)
4. **[変更のコミット]** または **[変更の提案]** をクリックします。

{% data variables.product.product_location %} に新たなコミットとメッセージが表示されます。

## 参考資料
{% ifversion ghes or ghae %}
- [プロフィールでコントリビューションを表示する](/articles/viewing-contributions-on-your-profile)
- "[コントリビューションがプロフィールに表示されないのはなぜですか?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"{% endif %}
- "[プロジェクトのコントリビューターを表示する](/articles/viewing-a-projects-contributors)"
- "[コミットメッセージの変更](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)"
- {% data variables.product.prodname_desktop %} ドキュメントの "[プロジェクトへの変更のコミットやレビュー](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes)"
