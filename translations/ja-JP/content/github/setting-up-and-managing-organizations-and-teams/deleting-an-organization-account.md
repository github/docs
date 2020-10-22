---
title: Organization アカウントの削除
intro: 'Organization を削除すると、リポジトリ、プライベートリポジトリのフォーク、ウィキ、Issue、プルリクエスト、プロジェクトページや Organization ページもすべて削除されます。 {% if currentVersion == "free-pro-team@latest" %}The organization name becomes available for use on a new user or organization account, and your billing will end.{% endif %}'
redirect_from:
  - /articles/deleting-an-organization-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
{% tip %}

**参考**: 有料プランを解約したい場合、Organization とそのコンテンツを削除する代わりに、[Organization を {% data variables.product.prodname_free_team %} にダウングレードする](/articles/downgrading-your-github-subscription)ことができます。

{% endtip %}

{% endif %}

### 1. Organization コンテンツのバックアップ

Organization を削除すると、GitHub では**コンテンツを復元できません**。 そのため、Organization を削除する前に、必ずアカウントのリポジトリ、ウィキ、Issue をすべてコピーしておいてください。

### 2. Organization の削除

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Organization の設定ページの下の方にある [**Delete this Organization**] をクリックします。 ![[Delete this organization] ボタン](/assets/images/help/settings/settings-organization-delete.png)
