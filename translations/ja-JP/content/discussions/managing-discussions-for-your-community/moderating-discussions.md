---
title: ディスカッションをモデレートする
intro: コメントを回答としてマークし、ディスカッションをロックまたはロック解除し、Issue をディスカッションに変換することで、健全なコラボレーションを促進できます。 コミュニティのディスカッションの行動規範に則さないコメント、ディスカッション、およびカテゴリを編集または削除します。
permissions: People with triage access to a repository can moderate discussions in the repository.
versions:
  free-pro-team: '*'
---

{% data reusables.discussions.beta %}

### ディスカッションのモデレートについて

{% data reusables.discussions.about-discussions %} リポジトリのトリアージ権限がある場合は、コメントを回答としてマークし、必要なくなった、またはコミュニティに損害を与えているディスカッションをロックし、アイデアがまだ開発の初期段階にあるときに Issue をディスカッションに変換することで、プロジェクトのディスカッションをモデレートするのに役立ちます。

### コメントを回答としてマークする

{% data reusables.discussions.marking-a-comment-as-an-answer %}

### ディスカッションをロックする

会話全体が建設的でない場合、またはコミュニティの行動規範または {% data variables.product.prodname_dotcom %} の[コミュニティガイドライン](/github/site-policy/github-community-guidelines)に違反している場合は、会話をロックするのが適切です。 会話をロックして、コミュニティへのお知らせとして使用するディスカッションへのコメントを防ぐこともできます。 会話をロックしても、リポジトリへの書き込みアクセス権を持つユーザは引き続きディスカッションにコメントできます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
1. ディスカッションのリストで、ロックするディスカッションをクリックします。 ![ディスカッションのロック](/assets/images/help/discussions/unanswered-discussion.png)
1. ディスカッションの右マージンで、[**Lock conversation**] をクリックします。
1. 会話のロックに関する情報を確認し、[**Lock conversation on this discussion**] をクリックします。
1. 会話のロックを解除する準備ができたら、[**Unlock conversation**] をクリックしてから、[**Unlock conversation on this discussion**] をクリックします。

### Issue をディスカッションに変換する

Issue をディスカッションに変換すると、その Issue のコンテンツを使用してディスカッションが自動的に作成されます。 リポジトリへの書き込みアクセス権を持つユーザは、ラベルに基づいて Issue を一括変換できます。 詳しい情報については、「[リポジトリ内のディスカッションを管理する](/discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
1. Issue のリストで、変換する Issue をクリックします。
1. Issue の右マージンで [**Convert to discussion**] をクリックします。
1. [**Choose a category**] ドロップダウンメニューを選択し、ディスカッションのカテゴリをクリックします。
1. [**I understand, convert this issue to a discussion**] をクリックします。
