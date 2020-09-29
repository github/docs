---
title: コントリビューターとTeamの管理
intro: メトリクスとレポートに含まれる人とTeamを管理できます。
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-contributors-and-teams
permissions: '{% data variables.product.prodname_insights %}の管理権限を持つ人は、コントリビューターとTeamを管理できます。'
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '*'
---

### {% data variables.product.prodname_insights %}におけるコントリビューターとTeam

{% data variables.product.prodname_insights %}におけるコントリビューターは、{% data variables.product.prodname_enterprise %}のデータに関連づけられたエンティティです。 コントリビューターは、編集したり非表示にしたりできます。

同じ人物が、複数のコントリビューターとして現れることがあります。 たとえば、一人の人物が複数のコミットメールアドレスをGitで使っている場合、{% data variables.product.prodname_insights %}では各メールアドレスごとにユニークなコントリビューターがいることになります。 一人の人物からの複数のコントリビューターをマージして、すべてのデータを結合できます。

コントリビューターをグループ化してTeamにできます。 Teamはレポートでフィルタとして利用できます。 詳しい情報については「[主要なメトリクスとレポートの表示](/insights/exploring-your-usage-of-github-enterprise/viewing-key-metrics-and-reports)」を参照してください。

### コントリビューターの編集

{% data variables.product.prodname_insights %}ではコントリビューターの表示名を編集できます。

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
{% data reusables.github-insights.edit-contributor %}
4. "First Name（名）"の下で、コントリビューターの名前を入力してください。 ![名のフィールド](/assets/images/help/insights/first-name.png)
5. "Last Name（姓）"の下で、コントリビューターの姓を入力してください。 ![姓のフィールド](/assets/images/help/insights/last-name.png)
6. [**Rename**] をクリックします。

### コントリビューターの可視性の管理

コントリビューターを非表示にすると、そのコントリビューターに関連するすべてのデータが、すべてのメトリクスから除外されます。

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
{% data reusables.github-insights.edit-contributor %}
3. **Show contributor（コントリビューターの表示）**を選択、もしくは選択を外します。 ![コントリビュータの表示もしくは非表示のチェックボックス](/assets/images/help/insights/show-contributor.png)
4. [**Done**] をクリックします。

### コントリビューターのデータのマージ

2人以上のコントリビューターをマージする際には、それらのコントリビューターの{% data variables.product.prodname_insights %}データは、一人の主要なコントリビューターに関連づけられます。 すべてのマージされたコントリビューターのデータは、メトリクス上は主要なコントリビューターに属することになります。

コントリビューターのマージは、{% data variables.product.prodname_insights %}が一致する名前を検出したコントリビューターたちに基づき、手動もしくは自動で行えます。

#### コントリビューターの自動マージ

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
3. "All Contributors（すべてのコントリビューター）"の下で、**Auto-Merge（自動マージ）**をクリックしてください。 ![自動マージボタン](/assets/images/help/insights/auto-merge.png)
4. あるいは、コントリビューターをマージから除外するには、そのコントリビューターの右で**Skip（スキップ）**をクリックしてください。 ![スキップボタン](/assets/images/help/insights/skip-contributor.png)
5. それぞれのグループで、主要なコントリビューターを選択してください。 ![主要なコントリビューターの選択のラジオボタン](/assets/images/help/insights/select-primary.png)
6. **Merge All（すべてをマージ）**をクリックしてください。

#### コントリビューターの手動マージ

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
3. マージしたいコントリビューターを選択してください。 ![コントリビューターの選択](/assets/images/help/insights/select-contributors.png)
4. "All Contributors（すべてのコントリビューター）"の下で、**Merge（マージ）**をクリックしてください。 ![マージボタン](/assets/images/help/insights/merge-button.png)
5. 主要なコントリビューターを選択してください。 ![主要なコントリビューターの選択のラジオボタン](/assets/images/help/insights/select-primary.png)
6. **Merge accounts（アカウントをマージ）**をクリックしてください。

#### コントリビューターのマージ解除

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
4. コントリビューターの右で、** Unmerge（マージ解除）**をクリックしてください。 ![マージ取り消しボタン](/assets/images/help/insights/unmerge-contributor.png)

### {% data variables.product.prodname_insights %}内のTeamの管理

{% data variables.product.prodname_insights %}には、{% data variables.product.product_name %}からインポートされたTeamとカスタムTeamの2種類のTeamがあります。

Organizationが{% data variables.product.prodname_insights %}に追加される場合、OrganizationのすべてのTeamは{% data variables.product.product_name %}からインポートされます。 {% data variables.product.prodname_insights %}では、これらのTeamを検索し、フィルタできます。 Teamは{% data variables.product.product_name %}で管理できます。

{% data variables.product.prodname_insights %}では、カスタムTeamを作成して管理できます。 カスタムTeamは、{% data variables.product.product_name %}内の複数のチームからのメンバーを含めることができます。

#### カスタムTeamの作成

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
2. "Teams"の右で、**Create Team（Teamの作成）**をクリックしてください。 ![Teamの作成ボタン](/assets/images/help/insights/create-team.png)
3. "Team Name（Team名）"の下で、Teamのユニークな名前を入力してください。 ![Team名フィールド](/assets/images/help/insights/team-name.png)
4. ** Create（作成）**をクリックしてください。

#### カスタムTeamへのコントリビューターの追加

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. "Contributors（コントリビューター）"の下で、ドロップダウンメニューを使い、コントリビューターを選択してください。 ![コントリビューターのドロップダウン](/assets/images/help/insights/contributors-drop-down.png)
4. [**Done**] をクリックします。

#### カスタムTeamからのコントリビューターの削除

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. 削除したいコントリビューターの右で、{% octicon "trashcan" aria-label="The trashcan icon" %}をクリックしてください。 ![ゴミ箱ボタン](/assets/images/help/insights/contributor-trashcan.png)

#### カスタムTeamの名前の変更

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. "Team Name（Team名）"の下で、Teamのユニークな名前を入力してください。 ![Team名フィールド](/assets/images/help/insights/rename-team.png)
4. [**Rename**] をクリックします。 ![名前の変更ボタン](/assets/images/help/insights/rename-button-team.png)
5. [**Done**] をクリックします。

#### カスタムTeamの削除

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. **Delete Team（Teamの削除）**をクリックしてください。 ![Teamの削除ボタン](/assets/images/help/insights/delete-team.png)
4. **Confirm（確認）**を削除してください。
