---
title: Organization アカウントの削除
intro: 'Organization を削除すると、リポジトリ、プライベートリポジトリのフォーク、ウィキ、Issue、プルリクエスト、プロジェクトページや Organization ページもすべて削除されます。 {% ifversion fpt or ghec %}支払いは終了し、90日後にOrganizationの名前は新しいユーザもしくはOrganizationアカウントで利用できるようになります。{% endif %}'
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
shortTitle: Delete organization
---

{% ifversion fpt or ghec %}
{% tip %}

**参考**: 有料プランを解約したい場合、Organization とそのコンテンツを削除する代わりに、[Organization を {% data variables.product.prodname_free_team %} にダウングレードする](/articles/downgrading-your-github-subscription)ことができます。

{% endtip %}

{% endif %}

## 1. Organization コンテンツのバックアップ

{% ifversion not ghes %} After you delete an organization, {% data variables.product.company_short %} **cannot restore your content**. Therefore, before{% else %}Before{% endif %} you delete your organization, make sure you have a copy of all repositories, wikis, issues, and project boards from the account.

{% ifversion ghes %}
{% note %}

**Note:** If necessary, a site administrator for {% data variables.product.product_location %} may be able to partially restore a deleted organization. For more information, see "[Restoring a deleted organization](/admin/user-management/managing-organizations-in-your-enterprise/restoring-a-deleted-organization)."

{% endnote %}
{% endif %}

## 2. Organization の削除

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. Organization の設定ページの下の方にある [**Delete this Organization**] をクリックします。 ![[Delete this organization] ボタン](/assets/images/help/settings/settings-organization-delete.png)
