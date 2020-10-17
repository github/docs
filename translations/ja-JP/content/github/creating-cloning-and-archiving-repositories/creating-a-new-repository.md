---
title: 新しいリポジトリの作成
intro: 個人アカウントや必要な権限を持つどのような Organization にも新しいリポジトリを作成できます。
redirect_from:
  - /creating-a-repo/
  - /articles/creating-a-repository-in-an-organization/
  - /articles/creating-a-new-organization-repository/
  - /articles/creating-a-new-repository
  - /articles/creating-an-internal-repository
  - /github/setting-up-and-managing-your-enterprise-account/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-internal-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**ヒント:** オーナーは Organization でのリポジトリの作成権限を制限できます。 詳しい情報については「[Organization でのリポジトリ作成の制限](/articles/restricting-repository-creation-in-your-organization)」を参照してください。

{% endtip %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also create a repository using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the {% data variables.product.product_location %} documentation.

{% endtip %}
{% endif %}

{% data reusables.repositories.create_new %}
2. また、既存のリポジトリのディレクトリ構造とファイルを持つリポジトリを作成するには、[**Choose a template**] ドロップダウンでテンプレートリポジトリを選択します。 あなたが所有するテンプレートリポジトリ、あなたがメンバーとして属する Organization が所有するテンプレートリポジトリ、使ったことがあるテンプレートリポジトリが表示されます。 詳細は「[テンプレートからリポジトリを作成する](/articles/creating-a-repository-from-a-template)」を参照してください。 ![Template drop-down menu](/assets/images/help/repository/template-drop-down.png){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
3. 必要に応じて、テンプレートを使用する場合、デフォルトのブランチだけでなく、テンプレートのすべてのブランチからのディレクトリ構造とファイルを含めるには、[**Include all branches**] を選択します。 ![Include all branches checkbox](/assets/images/help/repository/include-all-branches.png){% endif %}
3. [Owner] ドロップダウンで、リポジトリを作成するアカウントを選択します。 ![[Owner] ドロップダウンメニュー](/assets/images/help/repository/create-repository-owner.png)
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
6. If you're not using a template, there are a number of optional items you can pre-populate your repository with. 既存のリポジトリを {% data variables.product.product_name %}にインポートする場合は、このようなオプションはどれも選択しないでください。マージコンフリクトが起きる可能性があります。 ユーザインターフェースを使用して新しいファイルを追加または作成する、またはコマンドラインを使用して後で新しいファイルを追加することができます。 詳細は「[コマンドラインを使って Git リポジトリをインポートする](/articles/importing-a-git-repository-using-the-command-line/)」、「[コマンドラインを使ってリポジトリにファイルを追加する](/articles/adding-a-file-to-a-repository-using-the-command-line)」、「[マージコンフリクトに対処する](/articles/addressing-merge-conflicts/)」を参照してください。
    - 自分のプロジェクトについて説明するドキュメントである README を作成できます。 詳しい情報については「[README について](/articles/about-readmes/)」を参照してください。
    - 無視するルールを記載した *.gitignore* ファイルを作成できます。 For more information, see "[Ignoring files](/articles/ignoring-files)."{% if currentVersion == "free-pro-team@latest" %}
    - 自分のプロジェクトにソフトウェアライセンスを追加することができます。 詳細は「[リポジトリのライセンス](/articles/licensing-a-repository)」を参照してください。{% endif %}
{% data reusables.repositories.select-marketplace-apps %}
{% data reusables.repositories.create-repo %}
{% if currentVersion == "free-pro-team@latest" %}
9. 表示された Quick Setup ページの下部、[Import code from an old repository] の下で、プロジェクトを自分の新しいリポジトリにインポートできます。 これを行うには、[**Import code**] をクリックします。
{% endif %}

### 参考リンク

- "[Organization のリポジトリへのアクセスを管理する](/articles/managing-access-to-your-organization-s-repositories)"
- [Open Source Guides](https://opensource.guide/){% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
