---
title: リポジトリへのライセンスの追加
intro: 他の人がコントリビュートしやすくなるように、リポジトリにオープンソースライセンスを含めておくことができます。
redirect_from:
  - /articles/adding-a-license-to-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

リポジトリに見つけやすいライセンスを含めておくと、リポジトリにアクセスした人はリポジトリページの先頭ですぐに見つけることができます。 ライセンスファイル全体を読むには、ライセンスの名前をクリックします。

![MIT ライセンスを持つリポジトリヘッダ](/assets/images/help/repository/repo-license-indicator.png)

オープンソースライセンスによって、他者が自由にリポジトリ中のプロジェクトを利用、変更、配布できるようになります。 リポジトリのライセンスに関する詳しい情報については[リポジトリのライセンス](/articles/licensing-a-repository)を参照してください。

### リポジトリにオープンソースライセンスを含める

<!--Dotcom version uses the license tool-->
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. ファイル名フィールドで、*LICENSE* あるいは *LICENSE.md* (すべて大文字) と入力します。
4. ファイル名フィールドの右で、[**Choose a license template**] をクリックします。 ![ライセンステンプレートの選択ボタン](/assets/images/help/repository/license-tool.png)
5. ページの左側、[Add a license to your project] の下で、利用可能なライセンスをレビューして、リストからライセンスを選択してください。 ![利用可能なライセンスのリスト](/assets/images/help/repository/license-tool-picker.png)
6. [**Review and submit**] をクリックします。 ![[Review and submit] ボタン](/assets/images/help/repository/license-review-tool.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.choose-commit-email %}
10. [**Commit new file**] をクリックします。 ![ブランチへのライセンスのコミット](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

<!--GHE version just adds a file named LICENSE or LICENSE.md-->
{% if enterpriseServerVersions contains currentVersion %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. ファイル名フィールドで、*LICENSE* あるいは *LICENSE.md* (すべて大文字) と入力します。
4. [**Edit new file**] タブで、使用したいライセンスの全文を貼り付けます。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
7. コミットメッセージフィールドの下で、コミットを追加を現在のブランチか新しいブランチから選択してください。 If your current branch is `main`, you should choose to create a new branch for your commit and then create a pull request. For more information, see "[Creating a pull request](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)". ![コミットブランチのオプション](/assets/images/help/repository/choose-commit-branch.png)
8. [**Commit new file**] をクリックします。 ![ブランチへのライセンスのコミット](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

### 参考リンク

- [リポジトリコントリビューターのためのガイドラインを定める](/articles/setting-guidelines-for-repository-contributors)
