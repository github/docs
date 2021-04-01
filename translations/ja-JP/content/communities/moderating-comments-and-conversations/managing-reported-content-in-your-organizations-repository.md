---
title: Organization のリポジトリ内でレポートされたコンテンツを管理する
intro: 'コントリビューターがリポジトリ内の混乱をもらたすコンテンツをレポートすると、リポジトリメンテナはレポートを表示および管理できます。'
versions:
  free-pro-team: '*'
redirect_from:
  - /github/building-a-strong-community/managing-reported-content-in-your-organizations-repository
topics:
  - コミュニティ
---

リポジトリに対する管理者権限を持つユーザは、リポジトリについてレポートされたコンテンツを表示および管理できます。

### レポートされたコンテンツの管理について

レポートされたコンテンツを表示または管理する前に、リポジトリに対してレポートされたコンテンツを有効にする必要があります。 詳しい情報については、「[コントリビューターが Organization のリポジトリで不正利用を報告する方法を管理する](/communities/moderating-comments-and-conversations/managing-how-contributors-report-abuse-in-your-organizations-repository)」を参照してください。

混乱をもたらすコンテンツのレポートへの追跡、トリアージ、および対応ができます。 [Abuse reports] リストでは、すべてのレポートを表示し、{% data variables.product.prodname_dotcom %}でレポートされた各コメントに直接移動できます。

{% data reusables.community.tools-for-moderating %}

混乱をもたらすコンテンツのモデレートが完了したら、レポートを解決済としてマークできます。 モデレートが完了していないと判断した場合は、レポートを未解決としてマークすることもできます。

### コントリビューターが報告したコンテンツを表示する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.sidebar-moderation-reported-content %}
4. 表示するレポートされたコンテンツの右側で、{% octicon "kebab-horizontal" aria-label="The edit icon" %} をクリックした後、[**View content**] をクリックします。 ![レポートされたコンテンツの [Edit] ドロップダウンにある "View content"](/assets/images/help/repository/reported-content-report-view-content.png)

### レポートを解決する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.sidebar-moderation-reported-content %}
4. 解決するレポートの右側で、{% octicon "kebab-horizontal" aria-label="The edit icon" %} をクリックした後、[**Mark as resolved**] をクリックします。 ![レポートされたコンテンツの [Edit] ドロップダウンにある "Mark as resolved"](/assets/images/help/repository/reported-content-mark-report-as-resolved.png)

### レポートを未解決にする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.sidebar-moderation-reported-content %}
{% data reusables.repositories.reported-content-resolved-tab %}
5. 未解決にするレポートの右側で、{% octicon "kebab-horizontal" aria-label="The edit icon" %} をクリックした後、[**Mark as unresolved**] をクリックします。 ![レポートされたコンテンツの [Edit] ドロップダウンにある "Mark as unresolved"](/assets/images/help/repository/reported-content-mark-report-as-unresolved.png)

### 参考リンク

- 「[コミュニティの管理とモデレーションについて](/communities/setting-up-your-project-for-healthy-contributions/about-community-management-and-moderation)」
