---
title: プロジェクトへの行動規範の追加
intro: 'コミュニティの標準を定義し、参加を歓迎する開放的なプロジェクトであることを発信し、侵害への対処手順の概要を示すために、行動規範を採用してください。'
redirect_from:
  - /articles/adding-a-code-of-conduct-to-your-project
versions:
  free-pro-team: '*'
---

*行動規範*は、コミュニティへの参加方法の標準を定義するものです。 それは、すべてのコントリビューションを尊重する開放的な環境であることを発信します。 また、プロジェクトのコミュニティのメンバー間の問題に対処するための手順の概要も示します。 行動規範がコミュニティへの参加方法についての標準と期待を定義する理由に関して、詳しい情報については[オープンソースガイド](https://opensource.guide/code-of-conduct/)を参照してください。

プロジェクトで行動規範を採択する前に:

* オープンソースプロジェクト用に策定されたさまざまな行動規範をリサーチする。 自分のコミュニティの標準を反映しているものを選択してください。
* それを適用したいか、そして適用できるのかを注意深く検討してください。

テンプレートを使用するか、手動でカスタムの行動規範を作成して、プロジェクトに行動規範を追加できます。 行動規範はどちらの方法でも利用できますが、「行動規範」はテンプレートを使用する場合にのみ、リポジトリのコミュニティプロフィールで完了としてマークされます。 他者または Organization が作成した行動規範を使用する場合は、必ずソースからの帰属ガイドラインに従ってください。 コミュニティプロフィールの詳細については、「[パブリックリポジトリのコミュニティプロフィールについて](/github/building-a-strong-community/about-community-profiles-for-public-repositories)」を参照してください。

Organization またはユーザアカウント用にデフォルトの行動規範を作成できます。 詳しい情報については「[デフォルトのコミュニティ健全性ファイルを作成する](/github/building-a-strong-community/creating-a-default-community-health-file)」を参照してください。

### テンプレートを使用して行動規範を追加する

プロジェクトに素早く行動規範を追加できるよう、{% data variables.product.product_name %}では一般的な行動規範のテンプレートが用意されています。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. ファイル名のフィールドに *CODE_OF_CONDUCT.md* と入力します。
4. [**Choose a code of conduct template**] をクリックします。 ![行動規範テンプレートを選択するボタン](/assets/images/help/repository/code-of-conduct-tool.png)
5. ページの左側でプレビューしたい行動規範を選択し、プロジェクトに追加してください。 ![行動規範テンプレートの選択](/assets/images/help/repository/code-of-conduct-tool-picker.png)
6. ページの右側でフィールドに記入し、適切な情報と共に選択した行動規範を作成してください。
7. [**Review and submit**] をクリックします。 ![行動規範のレビューとプロジェクトへのサブミット](/assets/images/help/repository/code-of-conduct-tool-review.png)
8. テキスト領域内にある行動規範の内容をレビューしてください。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### 行動規範を手動で追加する

提供されているテンプレートで必要な行動規範が利用できない場合は、行動規範を手動で追加できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. ファイル名フィールドに、ファイルの名前と拡張子を入力します。 ![新しい行動規範ファイル名](/assets/images/help/repository/new-code-of-conduct-file-name.png)
    - 行動規範をリポジトリのルートディレクトリに表示するには、ファイル名フィールドに *CODE_OF_CONDUCT* と入力します。
    - 行動規範をリポジトリの `docs` ディレクトリに表示するには、*docs/CODE_OF_CONDUCT* と入力します。
    - 行動規範をリポジトリの `.github` ディレクトリに表示するには、 *.github/CODE_OF_CONDUCT* と入力します。
4. 新しいファイルに、カスタムの行動規範を追加します。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
