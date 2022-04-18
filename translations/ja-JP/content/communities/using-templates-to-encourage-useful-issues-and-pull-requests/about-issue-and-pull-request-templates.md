---
title: Issueとプルリクエストのテンプレートについて
intro: Issue及びプルリクエストのテンプレートを使えば、コントリビューターがリポジトリでIssuleやプルリクエストをオープンする際に含めてほしい情報をカスタマイズし、標準化できます。
redirect_from:
  - /articles/about-issue-and-pull-request-templates
  - /github/building-a-strong-community/about-issue-and-pull-request-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: テンプレートについて
---

リポジトリでIssueやプルリクエストのテンプレートを作成すると、コントリビューターはそのテンプレートを使い、リポジトリのコントリビューションのガイドラインに沿ってIssuelをオープンしたり、プルリクエスト中の変更を提案したりできるようになります。 リポジトリへのコントリビューションのガイドラインの追加に関する詳しい情報については[リポジトリコントリビューターのためのガイドラインを定める](/articles/setting-guidelines-for-repository-contributors)を参照してください。

{% ifversion fpt or ghes or ghec %}

You can create default issue and pull request templates for your organization or personal account. 詳しい情報については「[デフォルトのコミュニティ健全性ファイルを作成する](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」を参照してください。

{% endif %}

## Issueのテンプレート

Issue テンプレートビルダー{% ifversion fpt or ghec %} または Issue フォーム{% endif %} を使用してリポジトリの Issue テンプレートを作成する場合、コントリビューターはリポジトリで新しい Issue をオープンするときに適切なテンプレートを選択できます。

![Issue テンプレートの選択肢が表示された新規 Issue ページ](/assets/images/help/issues/new-issue-page-with-multiple-templates.png)

Issue テンプレートは、コントリビューターが Issue の内容を指定できるようにするとともに、Issue をオープンするためのガイダンスを提供する場合に役立ちます。 {% ifversion fpt or ghec %} コントリビューターが Issue をオープンするときに特定の構造化された情報を提供する場合は、Issue フォームを使用すると、必要な情報を確実に受け取ることができます。{% endif %}

テンプレートビルダーを使うと、各テンプレートに対してタイトルと説明を指定し、テンプレートの内容を追加し、リポジトリ中でそのテンプレートをデフォルトブランチにコミットするか、プルリクエストをオープンできます。 テンプレートビルダーは、新しい Issue ページにテンプレートを表示するのに必要となる YAML front matter マークアップを自動的に追加してくれます。 詳しい情報については、「[リポジトリ用に Issue テンプレートを設定する](/articles/configuring-issue-templates-for-your-repository)」を参照してください。

{% ifversion fpt or ghec %}
Issue フォームでは、{% data variables.product.prodname_dotcom %} フォームスキーマを使用して、Web フォームフィールドを持つテンプレートを作成できます。 コントリビューターが Issue フォームを使用して Issue をオープンすると、フォーム入力は標準のマークダウン Issue コメントに変換されます。 さまざまな入力タイプを指定し、必要に応じて入力を設定して、コントリビューターがリポジトリで実行可能な Issue をオープンすることができるようにすることができます。 詳しい情報については、「[リポジトリの Issue テンプレートを設定する](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)」および「[Issue フォームの構文](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)」を参照してください。
{% endif %}

{% ifversion fpt or ghae or ghes or ghec %}
{% data reusables.repositories.issue-template-config %}詳しい情報については、「[リポジトリ用に Issue テンプレートを設定する](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser)」を参照してください。
{% endif %}

Issue テンプレートは、リポジトリのデフォルトブランチ中の隠しディレクトリ `.github/ISSUE_TEMPLATE` に保存されます。 テンプレートを他のブランチで作成した場合、それをコラボレーターが使うことはできません。 Issue テンプレートのファイル名では大文字と小文字は区別されず、*.md* 拡張子が必要です。{% ifversion fpt or ghec %} Issue フォームで作成された Issue テンプレートには、*.yml* 拡張子が必要です。{% endif %} {% data reusables.repositories.valid-community-issues %}

レガシーの Issue テンプレートワークフローを使い、手作業で単一の Issue テンプレートを Markdown で作成することもできます。その場合、プロジェクトのコントリビューターは自動的に Issue の本文にテンプレートの内容を見ることになります。 また、アップグレードされた複数 Issue のテンプレートビルダー{% ifversion fpt or ghec %} または Issue フォーム{% endif %} を使用して Issue テンプレートを作成することをお勧めします。 レガシーのワークフローに関する詳しい情報については、「[リポジトリ用の単一 Issue テンプレートを手動で作成する](/articles/manually-creating-a-single-issue-template-for-your-repository)」を参照してください。

{% data reusables.repositories.security-guidelines %}

## プルリクエストのテンプレート

リポジトリにプルリクエストのテンプレートを追加すると、プロジェクトのコントリビューターはプルリクエストの本体にテンプレートの内容を自動的に見ることになります。

![サンプルのプルリクエストテンプレート](/assets/images/help/pull_requests/pr-template-sample.png)

テンプレートは、リポジトリのデフォルトブランチに作成しなければなりません。 他のブランチに作成されたテンプレートは、コラボレーターが使用できません。 プルリクエストのテンプレートは、リポジトリの見えるルートディレクトリ、`docs` フォルダ、または隠しディレクトリ `.github` に保存できます。 プルリクエストテンプレートのファイル名は大文字と小文字が区別されません。拡張子としては *.md* または *.txt* を使用できます。

詳細は「[リポジトリのプルリクエストテンプレートを作成する](/articles/creating-a-pull-request-template-for-your-repository)」を参照してください。
