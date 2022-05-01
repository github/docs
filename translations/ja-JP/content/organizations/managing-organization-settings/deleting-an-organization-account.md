---
title: Organization アカウントの削除
intro: 'Organization を削除すると、リポジトリ、プライベートリポジトリのフォーク、ウィキ、Issue、Pull Request、プロジェクトページや Organization ページもすべて削除されます。 {% ifversion fpt or ghec %}支払いは終了し、90日後にOrganizationの名前は新しいユーザもしくはOrganizationアカウントで利用できるようになります。{% endif %}'
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
shortTitle: Organizationの削除
---

{% ifversion fpt or ghec %}
{% tip %}

**参考**: 有料プランを解約したい場合、Organization とそのコンテンツを削除する代わりに、[Organization を {% data variables.product.prodname_free_team %} にダウングレードする](/articles/downgrading-your-github-subscription)ことができます。

{% endtip %}

{% endif %}

## 1. Organization コンテンツのバックアップ

{% ifversion not ghes %} Organizationを削除すると、{% data variables.product.company_short %}は**コンテンツを復元できません**。 したがって、{% else %}{% endif %}Organization を削除する前に、アカウントからすべてのリポジトリ、ウィキ、Issue、プロジェクトボードのコピーがあることを確認してください。

{% ifversion ghes %}
{% note %}

**ノート:** 必要なら、{% data variables.product.product_location %}の管理者は削除されたOrganizationを部分的に復元できることがあります。 詳しい情報については「[削除されたOrganizationの復元](/admin/user-management/managing-organizations-in-your-enterprise/restoring-a-deleted-organization)」を参照してください。

{% endnote %}
{% endif %}

## 2. Organization の削除

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. Organization の設定ページの下の方にある [**Delete this Organization**] をクリックします。 ![[Delete this organization] ボタン](/assets/images/help/settings/settings-organization-delete.png)
