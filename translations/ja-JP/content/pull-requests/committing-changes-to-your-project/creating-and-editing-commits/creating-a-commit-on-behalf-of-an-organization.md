---
title: Organization の代理でコミットを作成する
intro: 'コミットのメッセージにトレーラーを追加することで、Organization の代理でコミットを作成できます。 Organization に属するコミットには、{% data variables.product.product_name %} で `on-behalf-of` バッジが付きます。'
redirect_from:
  - /articles/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization
versions:
  fpt: '*'
  ghec: '*'
shortTitle: On behalf of an organization
ms.openlocfilehash: 31b8a6b8d1824fa960fb32fa5fd7b4c28625037c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132547'
---
{% note %}

**注:** Organization の代理でコミットを作成する機能は、現在パブリックベータであり、変更されることがあります。

{% endnote %}

Organization の代理でコミットを作成するには、以下の条件を満たす必要があります:

- トレーラーで示される Organization のメンバーであること
- あなたがコミットに署名すること
- コミットメールおよび Organization メールが、Organization で検証済みのドメインであること
- コミットメッセージはコミットトレーラー `on-behalf-of: @org <name@organization.com>` で終わる必要があります。
  - `org` は Organization のログインです
  - `name@organization.com` は Organization のドメインにあります

Organization は、オープンソースの取り組みにおいて、`name@organization.com` のメールアドレスを公開連絡先として使うことができます。

## コマンドラインで `on-behalf-of` バッジを使用してコミットを作成する

1. コミットメッセージと、変更の短く分かりやすい説明を入力してください。 コミットの説明の後に、閉じる引用符の代わりに 2 つの空の行を追加してください。
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **ヒント:** コミット メッセージの入力にコマンドライン上のテキスト エディターをお使いの場合、コミットの説明の末尾と `on-behalf-of:` コミット トレーラーのとの間に改行が 2 つあることをご確認ください。

  {% endtip %}

2. コミットメッセージの次の行で「`on-behalf-of: @org <name@organization.com>`」と入力し、次に終了引用符を入力します。

  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  on-behalf-of: <em>@org</em> &lt;<em>name@organization.com</em>&gt;"
  ```

次回のプッシュ時に、{% data variables.product.product_location %} に新たなコミット、メッセージ、およびバッジが表示されます。 詳しくは、[変更をリモート リポジトリにプッシュする](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)方法に関するページを参照してください。

## {% data variables.product.product_name %} で `on-behalf-of` バッジを使用してコミットを作成する

{% data variables.product.product_name %} の Web エディターでファイルを変更してから、コミットのメッセージに `on-behalf-of:` トレーラーを追加することで、Organization の代理でコミットを作成できます。

1. 変更を行った後は、ページの下部に、変更について説明する、短くて意味のあるコミットメッセージを入力します。
  ![変更のコミット メッセージ](/assets/images/help/repository/write-commit-message-quick-pull.png)

2. コミットメッセージの下のテキストボックスに `on-behalf-of: @org <name@organization.com>` を追加します。

  ![2 つ目のコミットメッセージテキストボックスにある、代理コミットメッセージのトレーラー例](/assets/images/help/repository/write-commit-message-on-behalf-of-trailer.png)
4. **[変更のコミット]** または **[変更の提案]** をクリックします。

{% data variables.product.product_location %} に新たなコミット、メッセージ、およびバッジが表示されます。

## 参考資料

- [プロフィールでコントリビューションを表示する](/articles/viewing-contributions-on-your-profile)
- "[コントリビューションがプロフィールに表示されないのはなぜですか?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
- 「[プロジェクトのコントリビューターを表示する](/articles/viewing-a-projects-contributors)」
- 「[コミットメッセージの変更](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)」
