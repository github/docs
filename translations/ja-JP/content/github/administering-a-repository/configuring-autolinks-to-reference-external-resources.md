---
title: 外部リソースを参照する自動リンクの構成
intro: JIRAのIssueやZendeskのチケットなど外部リソースへの自動リンクを追加して、ワークフローをスムーズにすることができます。
product: '{% data reusables.gated-features.autolinks %}'
redirect_from:
  - /articles/configuring-autolinks-to-reference-external-resources
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.19'
---

Anyone with admin permissions to a repository can configure autolink references to link issues, pull requests,{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %} commit messages, and release descriptions{% else %} and commit messages{% endif %} to external third-party services.

たとえば、ユーザから報告されたチケットをZendeskで追跡している場合は、Issueを修正するために開いたプルリクエストでチケット番号を参照できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 左のサイドバーで、[**Autolink references**] をクリックします。 ![左サイドバーの [Autolink references] タブ](/assets/images/help/repository/autolink-references-tab.png)
4. [**Add autolink reference**] をクリックします。 ![自動リンクの参照情報を入力するボタン](/assets/images/help/repository/add-autolink-reference-details.png)
5. [Reference prefix] に、コラボレータ が外部リソースへの自動リンクを生成する際に使用する短くわかりやすいプレフィックスを入力します。 ![外部システムの略語を入力するフィールド](/assets/images/help/repository/add-reference-prefix-field.png)
6. [Target URL] に、リンク先の外部システムへのリンクを入力します。 参照番号の変数は`<num>`のままにしてください。 ![外部システムへのURLを入力するフィールド](/assets/images/help/repository/add-target-url-field.png)
7. [**Add autolink reference**] をクリックします。 ![自動リンクの参照を追加するボタン](/assets/images/help/repository/add-autolink-reference.png)
