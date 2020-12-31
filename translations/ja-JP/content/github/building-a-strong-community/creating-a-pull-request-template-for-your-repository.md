---
title: リポジトリ用のプルリクエストテンプレートの作成
intro: 'リポジトリにプルリクエストのテンプレートを追加すると、プロジェクトのコントリビューターはプルリクエストの本体にテンプレートの内容を自動的に見ることになります。'
redirect_from:
  - /articles/creating-a-pull-request-template-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

詳しい情報については[Issue およびプルリクエストのテンプレートについて](/articles/about-issue-and-pull-request-templates)を参照してください。

サポートしているどのフォルダにでも *PULL_REQUEST_TEMPLATE/* サブディレクトリを作成し、プルリクエストテンプレートを複数含めることができます。また、`template` クエリパラメータでプルリクエストの本文に使用するテンプレートを指定できます。 詳細は「[クエリパラメータによる Issue およびプルリクエストの自動化について](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

Organization {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}またはユーザアカウントのデフォルトのプルリクエストテンプレートを作成できます{% endif %}。 詳しい情報については「[デフォルトのコミュニティ健全性ファイルを作成する](/github/building-a-strong-community/creating-a-default-community-health-file)」を参照してください。

{% endif %}

### プルリクエストテンプレートの追加

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. ファイル名フィールドで:
    -  プルリクエストテンプレートをリポジトリのルートディレクトリで表示するには、プルリクエストテンプレートに `.github/pull_request_template.md` という名前を付けます。 ![ルートディレクトリの新しいプルリクエストテンプレート名](/assets/images/help/repository/pr-template-file-name.png)
    - プルリクエストテンプレートをリポジトリの `docs` ディレクトリで表示するには、プルリクエストテンプレートに `docs/pull_request_template.md`という名前を付けます。 ![docs ディレクトリの新しいプルリクエストテンプレート](/assets/images/help/repository/pr-template-file-name-docs.png)
    - ファイルを隠しディレクトリに保存するには、プルリクエストテンプレートに `.github/pull_request_template.md` という名前を付けます。 ![隠しディレクトリの新しいプルリクエストテンプレート](/assets/images/help/repository/pr-template-hidden-directory.png)
    - プルリクエストテンプレートを複数作成し、`template` クエリパラメータでプルリクエストの本文に使用するテンプレートを指定するには、*.github/PULL_REQUEST_TEMPLATE/* と入力し、続けてプルリクエストテンプレートの名前を入力します。 たとえば、`.github/PULL_REQUEST_TEMPLATE/pull_request_template.md` です。 複数のプルリクエストテンプレートをルートディレクトリや `docs/` ディレクトリにある `PULL_REQUEST_TEMPLATE` サブディレクトリに格納することもできます。 詳細は「[クエリパラメータによる Issue およびプルリクエストの自動化について](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)」を参照してください。 ![隠しディレクトリの複数の新しいプルリクエストテンプレート](/assets/images/help/repository/pr-template-multiple-hidden-directory.png)
4. 新しいファイルの本文にプルリクエストテンプレートを追加します。 そこに盛り込むべき項目として、以下のようなものがあります:
    - リポジトリ内の[関連する Issue への参照](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests)。
    - プルリクエストで提案された変更の説明。
    - 提案された変更のレビューを担当する個人やチームの[@メンション](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %} テンプレートがリポジトリのデフォルトブランチにマージされると、コラボレーターがテンプレートを使用できるようになります。
{% data reusables.files.propose_new_file %}

### 参考リンク

- [Issueとプルリクエストのテンプレートについて](/articles/about-issue-and-pull-request-templates)
- 「[クエリパラメータによる Issue およびプルリクエストの自動化について](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)」
- [プルリクエストの作成](/articles/creating-a-pull-request)
