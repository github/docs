---
title: アクティビティダッシュボード
intro: アクティビティダッシュボードで、Enterprise 内のすべてのアクティビティの概要を確認できます。
redirect_from:
  - /enterprise/admin/articles/activity-dashboard/
  - /enterprise/admin/installation/activity-dashboard
  - /enterprise/admin/user-management/activity-dashboard
  - /admin/user-management/activity-dashboard
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---
アクティビティダッシュボードには、次の数値の週次、月次、年次のグラフが表示されます。
- 新規プルリクエスト
- マージされたプルリクエスト
- 新規 Issue
- 解決された Issue
- 新規 Issue コメント
- 新規リポジトリ
- 新規ユーザアカウント
- 新規 Organization
- 新規 Team

![アクティビティダッシュボード](/assets/images/enterprise/activity/activity-dashboard-yearly.png)

{% if enterpriseServerVersions contains currentVersion %}
-
{% data variables.product.product_name %} のデータに基づく詳細な分析については、{% data variables.product.prodname_insights %} を購入できます。 詳しい情報については、「[{% data variables.product.prodname_insights %} について](/insights/installing-and-configuring-github-insights/about-github-insights)」を参照してください。
{% endif %}

### アクティビティダッシュボードへのアクセス

1. ページの上部で [**Explore**] をクリックします。 ![[Explore] タブ](/assets/images/enterprise/settings/ent-new-explore.png)
2. 右上にある **Activity** をクリックする。 ![Activity ボタン](/assets/images/enterprise/activity/activity-button.png)
