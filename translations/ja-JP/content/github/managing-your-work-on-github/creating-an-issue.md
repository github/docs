---
title: Issue の作成
intro: 'Issue は、バグ、拡張、その他リクエストの追跡に使用できます。'
redirect_from:
  - /articles/creating-an-issue
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.repositories.create-issue-in-public-repository %}

既存のプルリクエストのコードに基づく新しい Issue を開くことができます。 詳しい情報については「[コードから Issue を開く](/github/managing-your-work-on-github/opening-an-issue-from-code)」を参照してください。

Issue または Pull Requestレビューのコメントから新しい Issue を直接開くことができます。 詳しい情報については「[コメントからIssueを開く](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% tip %}

**ヒント**: {% data variables.product.prodname_cli %} を使用して Issue を作成することもできます。 詳しい情報については、ドキュメントの「[`gh issue create`](https://cli.github.com/manual/gh_issue_create)」{% data variables.product.prodname_cli %} を参照してください。

{% endtip %}
{% endif %}

プロジェクトボードを使用して作業の追跡や優先順位付けをしている場合、プロジェクトボードの注釈を Issue に変換できます。 詳しい情報については、 「[プロジェクトボードについて](/github/managing-your-work-on-github/about-project-boards)」と「[プロジェクト ボードへのメモの追加](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)」を参照してください。

{% tip %}

**参考**: プロジェクト メンテナーは次を選択できます:
  - リポジトリ用に Issue テンプレートを作成する。 テンプレートには Issue 本文に情報を入力するよう求めるプロンプトが含まれています。 詳しい情報については「[Issue およびプルリクエストのテンプレートについて](/github/building-a-strong-community/about-issue-and-pull-request-templates)」を参照してください。
  - リポジトリの Issue を無効化します。 詳細は「[Issue を無効化する](/github/managing-your-work-on-github/disabling-issues)」を参照してください。 プルリクエストは無効化できず、常に使用可能です。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. [**New Issue**] をクリックします。 ![[New Issue] ボタン](/assets/images/help/issues/new_issues_button.png)
4. 複数の Issue タイプがある場合は、開く対象の Issue タイプの隣にある [**Get started**] をクリックします。 ![作成したい Issue のタイプを選択](/assets/images/help/issues/issue_template_get_started_button.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion >= "enterprise-server@2.21" %}
5. オプションで、開きたい Issue のタイプが使用可能なオプションに含まれていない場合は、[**Open a blank issue**] をクリックします。 ![空白の Issue を開くリンク](/assets/images/help/issues/blank_issue_link.png)
{% else %}
5. オプションで、開きたい Issue のタイプが使用可能なオプションに含まれていない場合は、[**Open a regular issue**] をクリックします。 ![[Open a regular issue] のリンク](/assets/images/help/issues/regular_issue_link.png)
{% endif %}
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}
### 参考リンク

- [コードスニペットへのパーマリンクを作成する](/github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet)
