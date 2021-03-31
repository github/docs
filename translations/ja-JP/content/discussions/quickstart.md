---
title: GitHub Discussions のクイックスタート
intro: '既存のリポジトリで {% data variables.product.prodname_discussions %} を有効にして、コミュニティとの会話を開始します。'
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
---

{% data reusables.discussions.beta %}

### はじめに

{% data variables.product.prodname_discussions %} は、オープンソースプロジェクトに関するコミュニティ向けの共同コミュニケーションフォーラムです。 Discussions は、Issue とは異なり、プロジェクトボードで追跡する必要がなく、コードに関連しない会話のためのものですが、透明性があり利用しやすいものである必要があります。 Discussions により、公開フォーラムで流動的でオープンな会話ができるようになります。

Discussions では、より協力的な会話ができるように、情報に接続して検索するためのより一元的なエリアを提供しています。

### リポジトリの {% data variables.product.prodname_discussions %} を有効化する

Repository owners and people with write access can enable {% data variables.product.prodname_discussions %} for a community on their public and private repositories.

{% data variables.product.prodname_discussions %} を最初に有効化すると、ウェルカム投稿を設定するように求められます。

{% data reusables.repositories.navigate-to-repo %}
1. リポジトリ名の下で{% octicon "gear" aria-label="The gear icon" %} **Settings（設定）**をクリックしてください。 ![公開設定ボタン](/assets/images/help/discussions/public-repo-settings.png)
1. [Features] で、[**Set up discussions**] をクリックします。 ![リポジトリのディスカッションを有効または無効にするために、[機能] の下にディスカッションボタンを設定](/assets/images/help/discussions/setup-discussions-button.png)
1. [Start a new discussion] で、テンプレートを編集してコミュニティに設定するリソースと方向性を合わせます。
1. **Start discussion（ディスカッションの開始）**をクリックしてください。 !["ディスカッションの開始" ボタン](/assets/images/help/discussions/new-discussion-start-discussion-button.png)

### ディスカッションへのコントリビューションを歓迎する

ウェルカム投稿を作成して、その投稿を {% data variables.product.prodname_discussions %} ページにピン留めすることで、コミュニティを歓迎し、リポジトリ内の新しいコミュニケーションの導入について紹介します。 ディスカッションをピン留めしてロックすると、投稿がお知らせであることを周知するのに役立ちます。 お知らせを使用すると、ユーザをより多くのリソースにリンクし、コミュニティでディスカッションをオープンするためのガイダンスを提供できます。 ディスカッションのピン留めに関する詳しい情報については、「[リポジトリ内のディスカッションを管理する](/discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository#pinning-a-discussion)」を参照してください。


### コントリビューター向けのコミュニティガイドラインを設定する

コントリビューションガイドラインを設定して、コラボレータがリポジトリについて有意義で有用な会話を行うよう促すことができます。 リポジトリの README を更新して、コラボレータが Issue やディスカッションをオープンするタイミングを伝えることもできます。

プロジェクトのガイドラインの提供方法の詳細については、「[プロジェクトに行動規範を追加する](/github/building-a-strong-community/adding-a-code-of-conduct-to-your-project)」および 「[健全なコントリビューションのためのプロジェクトの設定](/github/building-a-strong-community/setting-up-your-project-for-healthy-contributions)」を参照してください。

### 新しいディスカッションを作成する

リポジトリへのアクセス権限を持つユーザは、ディスカッションを作成できます。

{% data reusables.discussions.starting-a-discussion %}

### ディスカッションを関連するカテゴリに整理する

リポジトリの所有者と書き込みアクセス権を持つユーザは、新しいカテゴリを作成してディスカッションを整理できます。 参加しているコラボレータが新しいディスカッションを作成する場合、ディスカッションを最も関連性の高い既存のカテゴリにグループ化できます。 ディスカッションは、作成後に再分類することもできます。 詳しい情報については、「[リポジトリ内のディスカッションのカテゴリを管理する](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)」を参照してください。

### 健全な会話を促進する

リポジトリへの書き込み権限を持つユーザは、ディスカッションをピン留めし、役に立たなくなった、またはコミュニティに害を与えているディスカッションを削除し、Organization が所有するより関連性の高いリポジトリにディスカッションを移譲することで、重要な会話を明示できます。 詳しい情報については、「[リポジトリ内のディスカッションを管理する](/discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository)」を参照してください。

People with triage permissions for a repository can help moderate a project's discussions by marking comments as answers, locking discussions that are no longer useful or are damaging to the community, and converting issues to discussions when an idea is still in the early stages of development. 詳しい情報については、「[ ディスカッションをモデレートする](/discussions/managing-discussions-for-your-community/moderating-discussions)」を参照してください。

### 次のステップ

作業を確認してアイデアをコンセプトから現実に移すための明確な道筋ができたら、Issue を作成して進捗状況の追跡を開始できます。 ディスカッションから Issue を作成する際の詳しい情報については、「[ ディスカッションをモデレートする](/discussions/managing-discussions-for-your-community/moderating-discussions)」を参照してください。
