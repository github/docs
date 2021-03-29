---
title: 外部リソースを参照する自動リンクの構成
intro: JIRAのIssueやZendeskのチケットなど外部リソースへの自動リンクを追加して、ワークフローをスムーズにすることができます。
product: '{% data reusables.gated-features.autolinks %}'
redirect_from:
  - /articles/configuring-autolinks-to-reference-external-resources
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

リポジトリへの管理者権限を持っているユーザは誰でも、自動リンク参照を設定して、Issue、プルリクエスト{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}、コミットメッセージ、リリースの説明、{% else %}および外部のサードパーティサービスへのコミットメッセージ{% endif %}をリンクすることができます。

たとえば、ユーザから報告されたチケットをZendeskで追跡している場合は、Issueを修正するために開いたプルリクエストでチケット番号を参照できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 左のサイドバーで、[**Autolink references**] をクリックします。 ![左サイドバーの [Autolink references] タブ](/assets/images/help/repository/autolink-references-tab.png)
4. [**Add autolink reference**] をクリックします。 ![自動リンクの参照情報を入力するボタン](/assets/images/help/repository/add-autolink-reference-details.png)
5. [Reference prefix] に、コラボレータ が外部リソースへの自動リンクを生成する際に使用する短くわかりやすいプレフィックスを入力します。 ![外部システムの略語を入力するフィールド](/assets/images/help/repository/add-reference-prefix-field.png)
6. [Target URL] に、リンク先の外部システムへのリンクを入力します。 参照番号の変数は`<num>`のままにしてください。 ![外部システムへのURLを入力するフィールド](/assets/images/help/repository/add-target-url-field.png)
7. [**Add autolink reference**] をクリックします。 ![自動リンクの参照を追加するボタン](/assets/images/help/repository/add-autolink-reference.png)
