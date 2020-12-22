---
title: Organization アカウントの削除
intro: 'Organization を削除すると、リポジトリ、プライベートリポジトリのフォーク、ウィキ、Issue、プルリクエスト、プロジェクトページや Organization ページもすべて削除されます。 {% if currentVersion == "free-pro-team@latest" %}Organization 名は新しいユーザや Organization のアカウントで使用できるようになり、支払いは終了します。{% endif %}'
redirect_from:
  - /articles/deleting-an-organization-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
{% tip %}

**参考**: 有料プランを解約したい場合、Organization とそのコンテンツを削除する代わりに、[Organization を {% data variables.product.prodname_free_team %} にダウングレードする](/articles/downgrading-your-github-subscription)ことができます。

{% endtip %}

{% endif %}

### 1. Organization コンテンツのバックアップ

Organization を削除すると、GitHub では**コンテンツを復元できません**。 Therefore, before you delete your organization, make sure you have a copy of all repositories, wikis, issues, and project boards from the account.

### 2. Organization の削除

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Organization の設定ページの下の方にある [**Delete this Organization**] をクリックします。 ![[Delete this organization] ボタン](/assets/images/help/settings/settings-organization-delete.png)
