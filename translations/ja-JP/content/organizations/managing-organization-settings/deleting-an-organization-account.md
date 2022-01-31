---
title: Organization アカウントの削除
intro: 'Organization を削除すると、リポジトリ、プライベートリポジトリのフォーク、ウィキ、Issue、プルリクエスト、プロジェクトページや Organization ページもすべて削除されます。 {% ifversion fpt or ghec %}Your billing will end, and after 90 days the organization name becomes available for use on a new user or organization account.{% endif %}'
redirect_from:
  - /articles/deleting-an-organization-account
  - /github/setting-up-and-managing-organizations-and-teams/deleting-an-organization-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Organizationアカウントの削除
---

{% ifversion fpt or ghec %}
{% tip %}

**参考**: 有料プランを解約したい場合、Organization とそのコンテンツを削除する代わりに、[Organization を {% data variables.product.prodname_free_team %} にダウングレードする](/articles/downgrading-your-github-subscription)ことができます。

{% endtip %}

{% endif %}

## 1. Organization コンテンツのバックアップ

Organization を削除すると、GitHub では**コンテンツを復元できません**。 したがって、Organization を削除する前に、アカウントからすべてのリポジトリ、ウィキ、Issue、プロジェクトボードのコピーがあることを確認してください。

## 2. Organization の削除

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. Organization の設定ページの下の方にある [**Delete this Organization**] をクリックします。 ![[Delete this organization] ボタン](/assets/images/help/settings/settings-organization-delete.png)
