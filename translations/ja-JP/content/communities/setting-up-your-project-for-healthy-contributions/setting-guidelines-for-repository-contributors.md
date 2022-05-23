---
title: リポジトリコントリビューターのためのガイドラインを定める
intro: プロジェクトに人々がどのようにコントリビュートするべきかを伝えるガイドラインを作成できます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /articles/how-do-i-set-up-guidelines-for-contributors
  - /articles/setting-guidelines-for-repository-contributors
  - /github/building-a-strong-community/setting-guidelines-for-repository-contributors
topics:
  - Community
shortTitle: コントリビューターのガイドライン
---

## コントリビューションガイドラインについて
プロジェクトコントリビューターにうまく作業してもらうために、プロジェクトリポジトリのルート、`docs` または `.github` フォルダに、コントリビューションガイドラインについてのファイルを追加できます。 プルリクエストをオープンした場合や Issue を作成した場合、そのファイルへのリンクが表示されます。 コントリビューションガイドラインへのリンクは、リポジトリの `contribute` ページにも表示されます。 `contribute`ページの例については[github/docs/contribute](https://github.com/github/docs/contribute)を参照してください。

![contributing-guidelines](/assets/images/help/pull_requests/contributing-guidelines.png)

リポジトリのオーナーにとって、コントリビューションガイドラインとは、人々がどのようにコントリビュートするべきかを伝える方法です。

コントリビューターにとって、このガイドラインは、上手に構築されたプルリクエストの提出をしたり、有益な Issue をオープンすることの確認に役立ちます。

オーナーおよびコントリビューターの双方にとって、コントリビューションガイドラインは、プルリクエストや Issue のリジェクトや再提出の手間を未然に軽減するための有効な手段です。

{% ifversion fpt or ghes or ghec %}

You can create default contribution guidelines for your organization{% ifversion fpt or ghes or ghec %} or personal account{% endif %}. 詳しい情報については「[デフォルトのコミュニティ健全性ファイルを作成する](//communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」を参照してください。

{% endif %}

{% tip %}

**ヒント:** リポジトリメンテナは、リポジトリの Issue やプルリクエストのテンプレートを作成することで、Issue についての特定のガイドラインを定めることができます。 詳しい情報については[Issue およびPull Requestのテンプレートについて](/articles/about-issue-and-pull-request-templates)を参照してください。

{% endtip %}

## *CONTRIBUTING* ファイルの追加

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. コントリビューションガイドラインを、リポジトリの root、`docs`、または `.github` ディレクトリに保管するかどうかを決めます。 そして、ファイル名のフィールドに、ファイルの名前および拡張子を入力します。 コントリビューションガイドラインのファイル名では大文字と小文字は区別されません。 サポートされているファイル拡張子の場合、ファイルはリッチテキスト形式でレンダリングされます。 For more information, see "[Working with non-code files](/repositories/working-with-files/using-files/working-with-non-code-files#rendering-differences-in-prose-documents)." ![新しいファイルの名前](/assets/images/help/repository/new-file-name.png)
    - リポジトリのルートディレクトリでコントリビューションガイドラインを表示するには、*CONTRIBUTING* と入力します。
    - リポジトリの `docs` ディレクトリにコントリビューションガイドラインを表示するには、*docs/* と入力して新しいディレクトリを作成し、次に *CONTRIBUTING* と入力します。
    - リポジトリに複数の *CONTRIBUTING* ファイルが含まれている場合、リンクに表示されるファイルは、`.github` ディレクトリ、リポジトリのルートディレクトリ、最後に `docs` ディレクトリの順に選択されます。
4. 新しいファイルに、コントリビューションガイドラインを追加します。 このガイドラインには、次のことを含めましょう:
    - 有意義な Issue やプルリクエストの作成手順
    - - 外部ドキュメント、メーリングリストや行動規範へのリンク
    - - コミュニティや行動への期待
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

## コントリビューションガイドラインの例

最初は悩むかもしれませんが、以下のコントリビューションガイドラインの例を役立ててください:

- Atom エディタ [コントリビューションガイドライン](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)。
- Ruby on Rails [コントリビューションガイドライン](https://github.com/rails/rails/blob/master/CONTRIBUTING.md).
- オープンガバメント [コントリビューションガイドライン](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md).

## 参考リンク
- オープンソースガイドのセクション「[オープンソースプロジェクトを始める](https://opensource.guide/starting-a-project/)」{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}{% ifversion fpt or ghes or ghec %}
- 「[リポジトリへのライセンスの追加](/articles/adding-a-license-to-a-repository)」{% endif %}
