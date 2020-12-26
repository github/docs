---
title: リポジトリ用の単一 Issue テンプレートを手動で作成する
intro: '手動で作成した Issue テンプレートをリポジトリに追加すると、プロジェクトのコントリビューターは自動的に Issue の本体でテンプレートの内容が見えるようになります。'
redirect_from:
  - /articles/creating-an-issue-template-for-your-repository/
  - /articles/manually-creating-a-single-issue-template-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.repositories.legacy-issue-template-tip %}

サポートしているどのフォルダーにでも *ISSUE_TEMPLATE/* サブディレクトリを作成し、Issue テンプレートを複数含めることができます。また、`template` クエリパラメータで Issue の本文に使用するテンプレートを指定できます。 詳細は「[クエリパラメータによる Issue およびプルリクエストの自動化について](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)」を参照してください。

YAML frontmatter を各 Issue テンプレートに追加して、Issue のタイトルを事前に入力したり、ラベルおよびアサインされた人を自動追加したり、リポジトリに新しい Issue を作成するときに表示されるテンプレート選択画面に表示されるテンプレートの名前と説明を指定したりすることができます。

YAML front matter の例は次のとおりです。

```
---
name: Tracking issue
about: Use this template for tracking new features.
title: "[DATE]: [FEATURE NAME]"
labels: tracking issue, needs triage
assignees: octocat
---
```
{% note %}

**注釈:** フロントマター値に `:` などの YAML 予約文字が含まれている場合は、値全体を引用符で囲む必要があります。 たとえば、`":bug: Bug"` または `":new: triage needed, :bug: bug"` などです。

{% endnote %}

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.repositories.valid-community-issues %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

### Issue テンプレートを追加する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. ファイル名フィールドで:
    -  Issue テンプレートをリポジトリのルートディレクトリで表示するには、*issue_template* の名前を入力します。 たとえば、`issue_template.md` です。 ![ルートディレクトリの新しい Issue テンプレート名](/assets/images/help/repository/issue-template-file-name.png)
    - リポジトリの `docs` ディレクトリに Issue テンプレートを表示するには、*docs/* に続けて *issue_template* の名前を入力します。 たとえば、`docs/issue_template.md` です。 ![docs ディレクトリの新しい Issue テンプレート](/assets/images/help/repository/issue-template-file-name-docs.png)
    - ファイルを隠しディレクトリに格納するには、*.github/* と入力し、続いて *issue_template* という名前を入力します。 たとえば、`.github/issue_template.md` です。 ![隠しディレクトリの新しい Issue テンプレート](/assets/images/help/repository/issue-template-hidden-directory.png)
    - 複数 Issue テンプレートを作成し、`template` クエリパラメータを使用して Issue の本文に使用するテンプレートを指定するには、*.github/ISSUE_TEMPLATE/* と入力し、続けて Issue テンプレートの名前を入力します。 たとえば、`.github/ISSUE_TEMPLATE/issue_template.md` です。 複数 Issue テンプレートをルートディレクトリや `docs/` ディレクトリにある `ISSUE_TEMPLATE` サブディレクトリに格納することもできます。 詳細は「[クエリパラメータによる Issue およびプルリクエストの自動化について](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)」を参照してください。 ![隠しディレクトリの新しい複数 Issue テンプレート](/assets/images/help/repository/issue-template-multiple-hidden-directory.png)
4. 新しいファイルの本文に Issue テンプレートを追加します。 そこに盛り込むべき項目として、以下のようなものがあります:
    - YAML frontmatter
    - 予測される動作と実際の動作
    - 問題の再現手順
    - プロジェクトのベンダー、オペレーティング システム、ハードウェアなどの仕様
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %} テンプレートがリポジトリのデフォルトブランチにマージされると、コラボレーターがテンプレートを使用できるようになります。
{% data reusables.files.propose_new_file %}

### 参考リンク

- [Issueとプルリクエストのテンプレートについて](/articles/about-issue-and-pull-request-templates)
- [リポジトリ用に Issue テンプレートを設定する](/articles/configuring-issue-templates-for-your-repository)
- 「[クエリパラメータによる Issue およびプルリクエストの自動化について](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)」
- [Issue の作成](/articles/creating-an-issue)
