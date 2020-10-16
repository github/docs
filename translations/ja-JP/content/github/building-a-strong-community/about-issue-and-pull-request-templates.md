---
title: Issueとプルリクエストのテンプレートについて
intro: 'Issue及びプルリクエストのテンプレートを使えば、コントリビューターがリポジトリでIssuleやプルリクエストをオープンする際に含めてほしい情報をカスタマイズし、標準化できます。'
redirect_from:
  - /articles/about-issue-and-pull-request-templates
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

リポジトリでIssueやプルリクエストのテンプレートを作成すると、コントリビューターはそのテンプレートを使い、リポジトリのコントリビューションのガイドラインに沿ってIssuelをオープンしたり、プルリクエスト中の変更を提案したりできるようになります。 リポジトリへのコントリビューションのガイドラインの追加に関する詳しい情報については[リポジトリコントリビューターのためのガイドラインを定める](/articles/setting-guidelines-for-repository-contributors)を参照してください。

You can create default issue and pull request templates for your organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %}. 詳しい情報については「[デフォルトのコミュニティ健全性ファイルを作成する](/github/building-a-strong-community/creating-a-default-community-health-file)」を参照してください。

### Issueのテンプレート

Issueテンプレートビルダーを使ってリポジトリにIssueのテンプレートを作成すると、それらはコントリビューターがリポジトリで新しいIssueをオープンする際に使えるようになります。

![Issue テンプレートの選択肢が表示された新規 Issue ページ](/assets/images/help/issues/new-issue-page-with-multiple-templates.png)

テンプレートビルダーを使うと、各テンプレートに対してタイトルと説明を指定し、テンプレートの内容を追加し、リポジトリ中でそのテンプレートをデフォルトブランチにコミットするか、プルリクエストをオープンできます。 テンプレートビルダーは、新しい Issue ページにテンプレートを表示するのに必要となる YAML front matter マークアップを自動的に追加してくれます。 詳しい情報については、「[リポジトリ用に Issue テンプレートを設定する](/articles/configuring-issue-templates-for-your-repository)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% data reusables.repositories.issue-template-config %} For more information, see "[Configuring issue templates for your repository](/github/building-a-strong-community/configuring-issue-templates-for-your-repository#configuring-the-template-chooser)."
{% endif %}

Issue テンプレートは、リポジトリのデフォルトブランチ中の隠しディレクトリ `.github/ISSUE_TEMPLATE` に保存されます。 テンプレートを他のブランチで作成した場合、それをコラボレーターが使うことはできません。 Issue テンプレートのファイル名では大文字と小文字は区別されません。拡張子は *.md* でなければなりません。 {% data reusables.repositories.valid-community-issues %}

レガシーの Issue テンプレートワークフローを使い、手作業で単一の Issue テンプレートを Markdown で作成することもできます。その場合、プロジェクトのコントリビューターは自動的に Issue の本文にテンプレートの内容を見ることになります。 とはいえ、Issue テンプレートの作成にはアップグレードされた複数 Issue テンプレートビルダーを使うことをおすすめします。 レガシーのワークフローに関する詳しい情報については、「[リポジトリ用の単一 Issue テンプレートを手動で作成する](/articles/manually-creating-a-single-issue-template-for-your-repository)」を参照してください。

{% data reusables.repositories.security-guidelines %}

### プルリクエストのテンプレート

リポジトリにプルリクエストのテンプレートを追加すると、プロジェクトのコントリビューターはプルリクエストの本体にテンプレートの内容を自動的に見ることになります。

![サンプルのプルリクエストテンプレート](/assets/images/help/pull_requests/pr-template-sample.png)

テンプレートは、リポジトリのデフォルトブランチに作成しなければなりません。 他のブランチに作成されたテンプレートは、コラボレーターが使用できません。 プルリクエストのテンプレートは、リポジトリの見えるルートディレクトリ、`docs` フォルダ、または隠しディレクトリ `.github` に保存できます。 プルリクエストテンプレートのファイル名は大文字と小文字が区別されません。拡張子としては *.md* または *.txt* を使用できます。

詳細は「[リポジトリのプルリクエストテンプレートを作成する](/articles/creating-a-pull-request-template-for-your-repository)」を参照してください。
