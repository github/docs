---
title: 外部リソースを参照する自動リンクの構成
intro: JIRAのIssueやZendeskのチケットなど外部リソースへの自動リンクを追加して、ワークフローをスムーズにすることができます。
product: '{% data reusables.gated-features.autolinks %}'
redirect_from:
  - /articles/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/managing-repository-settings/configuring-autolinks-to-reference-external-resources
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure autolinks
---

## About autolinks

Anyone with admin permissions to a repository can configure autolink references to link issues, pull requests, commit messages, and release descriptions to external third-party services.

{% ifversion autolink-reference-alphanumeric %}
Autolink references can now accept alphanumeric characters. When originally introduced, custom autolinks were limited to external resources that used numeric identifiers. Custom autolinks now work with alphanumeric identifiers. Legacy autolink references that recognize only numeric identifiers are deprecated and displayed with a "legacy" label.

You define custom autolinks by specifying a reference prefix and a target URL.
- Reference prefixes cannot have overlapping names. For example, a repository cannot have two custom autolinks with prefixes such as `TICKET` and `TICK`, since both prefixes would match the string `TICKET123a`.
- Target URLs include a `<num>` variable which supports the following characters: `a-z` (case-insensitive), `0-9`, and `-`.
{% endif %}

## 外部リソースを参照する自動リンクの構成

This procedure demonstrates how to configure autolinks to reference external resources. For example, if you use Zendesk to track user-reported tickets, you can reference a ticket number in the pull request you opened to fix the issue.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. In the "Integrations" section of the sidebar, click **{% octicon "cross-reference" aria-label="The cross-reference icon" %} Autolink references**.
{% else %}
1. 左のサイドバーで、[**Autolink references**] をクリックします。 ![左サイドバーの [Autolink references] タブ](/assets/images/help/repository/autolink-references-tab.png)
{% endif %}
1. [**Add autolink reference**] をクリックします。 ![自動リンクの参照情報を入力するボタン](/assets/images/help/repository/add-autolink-reference-details.png)
5. [Reference prefix] に、コラボレータ が外部リソースへの自動リンクを生成する際に使用する短くわかりやすいプレフィックスを入力します。
{% ifversion autolink-reference-alphanumeric %}![Field to type abbreviation for external system](/assets/images/help/repository/add-reference-prefix-field-alphanumeric.png){% else %}![Field to type abbreviation for external system](/assets/images/help/repository/add-reference-prefix-field.png){% endif %}
6. [Target URL] に、リンク先の外部システムへのリンクを入力します。 参照番号の変数は`<num>`のままにしてください。
{% ifversion autolink-reference-alphanumeric %}![Field to type URL to external system](/assets/images/help/repository/add-target-url-field-alphanumeric.png){% else %}![Field to type URL to external system](/assets/images/help/repository/add-target-url-field.png){% endif %}
7. [**Add autolink reference**] をクリックします。
{% ifversion autolink-reference-alphanumeric %}{% else %}![Button to add autolink reference](/assets/images/help/repository/add-autolink-reference.png){% endif %}
