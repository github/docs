---
title: プルリクエストを自動的にマージする
intro: 'プルリクエストの自動マージを有効にすると、すべてのマージ要件が満たされたときにプルリクエストが自動的にマージされるようになり、開発速度を上げることができます。'
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
---

### 自動マージについて

プルリクエストの自動マージを有効にすると、必要なすべてのレビューを満たし、ステータスチェックに合格すると、プルリクエストが自動的にマージされます。 自動マージにより、要件が満たされるのを待つ必要がなくなるため、他のタスクに進むことができます。

プルリクエストで自動マージを使用する前に、リポジトリで自動マージを有効にする必要があります。 詳しい情報については、「[リポジトリ内のプルリクエストの自動マージを管理する](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)」を参照してください。

自動マージに関するフィードバックがある場合は、[お問い合わせ](https://support.github.com/contact/feedback?category=prs-and-code-review&subject=Pull%20request%20auto-merge%20feedback)にご連絡ください。

### 自動マージの有効化

リポジトリへの書き込み権限を持つユーザは、プルリクエストの自動マージを有効化できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. [Pull Requests] リストで、自動マージするプルリクエストをクリックします。
1. 必要に応じて、マージ方法を選択するには、[**Enable auto-merge**] ドロップダウンメニューを選択してから、マージ方法をクリックします。 詳しい情報については[プルリクエストのマージについて](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)を参照してください。 ![[Enable auto-merge] ドロップダウンメニュー](/assets/images/help/pull_requests/enable-auto-merge-drop-down.png)
1. [**Enable auto-merge**] をクリックします。 ![自動マージを有効化するボタン](/assets/images/help/pull_requests/enable-auto-merge-button.png)
1. マージまたは squash とマージの方法を選択した場合は、コミットメッセージと説明を入力し、マージコミットを作成するメールアドレスを選択します。 ![コミットメッセージと説明を入力し、作者のメールをコミットするフィールド](/assets/images/help/pull_requests/pull-request-information-fields.png)
1. [**Confirm auto-merge**] をクリックします。 ![自動マージを確認するボタン](/assets/images/help/pull_requests/confirm-auto-merge-button.png)

### 自動マージの無効化

リポジトリへの書き込み権限を持つユーザと、プルリクエストの作者であるユーザは、プルリクエストの自動マージを無効化できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. [Pull Requests] リストで、自動マージを無効化するプルリクエストをクリックします。
1. マージボックスで、[**Disable auto-merge**] をクリックします。 ![自動マージを無効化するボタン](/assets/images/help/pull_requests/disable-auto-merge-button.png)
