---
title: リポジトリの管理
intro: '{% data variables.product.prodname_insights %}に接続されているリポジトリと、各リポジトリのメトリクスに含まれるデータを管理できます。'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-repositories
  - /insights/installing-and-configuring-github-insights/managing-repositories
permissions: 'People with admin permissions in {% data variables.product.prodname_insights %} can manage repositories. '
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '*'
---
### リポジトリ管理について

{% data variables.product.prodname_insights %}が{% data variables.product.prodname_enterprise %}のリポジトリからのデータを含めるためには、そのリポジトリを所有しているOrganizationを{% data variables.product.prodname_insights %}に追加しなければなりません。 詳しい情報については「[Organizationの管理](/github/installing-and-configuring-github-insights/managing-organizations)」を参照してください。

{% data variables.product.prodname_insights %}にOrganizationを追加すると、そのOrganizationが所有している各リポジトリは、以下の条件を満たしていれば自動的にインポートされます。
- 最低1つのコミットがある
- プライベートではない
- アーカイブされていない
- 過去6ヶ月間にプッシュされた

リポジトリのデータは、webhookと定期的な同期によって更新されます。 リポジトリのデータはいつでも手動でリフレッシュでき、進行中のデータインポートをキャンセルすることもできます。

{% data reusables.github-insights.repository-groups %}

特定のリポジトリもしくはすべてのリポジトリにおいて、{% data variables.product.prodname_insights %}から特定のファイルを除外できます。

### インポートの時間について

{% data variables.product.prodname_insights %}は、各リポジトリの過去3年のデータをインポートします。 リポジトリのサイズと複雑さに応じて初期のインポートには時間がかかり、その間{% data variables.product.prodname_insights %}のデータは不完全です。 通例、複数のTeamの初期のインポートには1～2日かかります。 初期のインポートが大規模で複雑になると、最大で2週間かかることもあります。

| リポジトリのサイズ           | 初期のインポートの時間 |
| ------------------- | ----------- |
| < 10,000コミット        | < 1時間       |
| 10,000から300,000コミット | 1～10日       |
| 300,000コミット以上       | 10日以上       |

初期のインポートが完了すれば、以降のインクリメンタルな変更からのインポートは2分以下で終わるでしょう。

インポート時間を短くするために、インポートの前に{% data variables.product.prodname_insights %}から非標準的なフォルダ内のサードパーティライブラリを除外しておくことができます。 詳しい情報については「[除外フィルタの管理](#managing-exclusion-filters)」を参照してください。

大きなリポジトリを数多く持っているなら、アプリケーションサーバーにコアをたくさん持たせることによって、初期のインポート時間を改善できます。 多くのコアを持つアプリケーションサーバーは、より多くの並列インポートジョブを実行できます。

| アプリケーションサーバーのコア | 並列初期インポートジョブ |
| --------------- | ------------ |
| 16コア            | 1ジョブ         |
| 32コア            | 4ジョブ         |

大量のプルリクエストをインポートすると、{% data variables.product.prodname_enterprise %}からのレート制限が引き起こされることがあります。 この場合、インポートは再開までに1時間、一時停止します。 インポートの時間を改善するために、一時的に{% data variables.product.prodname_enterprise %}のレート制限を大きくできます。 詳しい情報については「[レート制限の設定](/enterprise/{{ currentVersion }}/admin/installation/configuring-rate-limits)」を参照してください。

### リポジトリの表示と管理

インポートされたリポジトリと、インポート可能なリポジトリを見ることができます。 インポートが進行中なら、インポートのステータスと、インポートの完了までの推定時間を見ることができます。

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repositories-tab %}
3. あるいは、インポートされていないリポジトリを追加するには、リポジトリの名前の右で**Add（追加）**をクリックしてください。 ![[Add] ボタン](/assets/images/help/insights/add-button.png)
4. あるいは、手動でリポジトリデータをリフレッシュするには、リポジトリ名の右で**{% octicon "sync" aria-label="The refresh icon" %}**のリフレッシュアイコンをクリックしてください。 ![リフレッシュボタン](/assets/images/help/insights/refresh-button.png)
5. あるいは、進行中のインポートをキャンセルするには、リポジトリ名の右で**Cancel（キャンセル）**をクリックしてください。 ![キャンセルボタン](/assets/images/help/insights/cancel-button.png)
6. あるいは、インポートされたリポジトリを削除するには、リポジトリ名の右で**Remove（削除）**をクリックしてください。 ![削除ボタン](/assets/images/help/insights/remove-button.png)

### レポートのためのリポジトリグループの管理

リポジトリグループを作成し、リポジトリをグループに追加あるいは削除し、リポジトリグループを削除できます。

#### リポジトリグループの作成

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repo-groups-tab %}
2. 右上から**Create Group（グループの作成）**をクリックしてください。 ![グループの作成ボタン](/assets/images/help/insights/create-group.png)
3. "Group Name（グループ名）"の下で、グループの名前を入力してください。 ![グループ名フィールド](/assets/images/help/insights/group-name.png)
4. ** Create（作成）**をクリックしてください。

#### リポジトリグループへのリポジトリの追加

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repo-groups-tab %}
{% data reusables.github-insights.edit-group %}
4. "Repositories（リポジトリ）"の下で、ドロップダウンメニューを使ってグループに追加するリポジトリを選択してください。 ![リポジトリドロップダウンメニュー](/assets/images/help/insights/repositories-drop-down.png)
5. [**Done**] をクリックします。

#### リポジトリグループの削除

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repo-groups-tab %}
{% data reusables.github-insights.edit-group %}
4. **Delete Group（グループの削除）**をクリックしてください。 ![グループの削除ボタン](/assets/images/help/insights/delete-group.png)
5. **Confirm（確認）**を削除してください。

### 除外フィルタの管理

ファイル除外ルールのリストを作成し、特定のファイルをすべての{% data variables.product.prodname_insights %}データから除外できます。 ファイル除外ルールは、*.gitignore*ファイルで使われているものと同じルールに従います。 詳しい情報については、Gitのドキュメンテーションの「[ gitignore](https://git-scm.com/docs/gitignore)」を参照してください。

#### すべてのリポジトリへのファイル除外ルールの追加

グローバルなファイル除外への変更は、新たにインポートされるデータにのみ適用され、既存のデータにさかのぼっては適用されません。 新しい除外ルールを既存のデータに適用するには、リポジトリを{% data variables.product.prodname_insights %}から削除し、追加しなおしてください。

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.exclude-files-tab %}
3. あるいは"Exclude files（ファイルを除外）"の下で、**Include all binaries（すべてのバイナリを含める）**を選択してください。 ![すべてのバイナリを含めるチェックボックス](/assets/images/help/insights/include-all-binaries-global.png)
4. コードエディタで、新しい除外ルールをリストに追加してください。 ![グローバルな除外ルールを追加するためのコードエディタ](/assets/images/help/insights/global-exclusion-list.png)
5. **Save Changes（変更を保存）**をクリックしてください。

#### リポジトリへのファイル除外ルールの追加

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.exclude-files-tab %}
3. "Repositories with File Filters（ファイルフィルタを持つリポジトリ）"の右で、**Add Filter（フィルタの追加）**をクリックしてください。 ![フィルタの追加ボタン](/assets/images/help/insights/add-filter.png)
4. "Repository（リポジトリ）"ドロップダウンメニューを使い、リポジトリを選択してください。 ![リポジトリのドロップダウンメニュー](/assets/images/help/insights/repository-drop-down-exclude.png)
5. あるいは、既存のデータに除外ルールを適用するには、**Re-import（再インポート）**を選択してください。 ![再インポートのチェックボックス](/assets/images/help/insights/re-import-checkbox.png)
6. あるいは、**Include all binaries（すべてのバイナリを含める）**を選択してください。 ![すべてのバイナリを含めるチェックボックス](/assets/images/help/insights/include-all-binaries-repo.png)
7. コードエディタで、リポジトリに適用したい除外ルールを追加してください。 ![リポジトリの除外ルールを追加するためのコードエディタ](/assets/images/help/insights/repo-exclusion-list.png)
8. **Create Filter（フィルタの作成）**をクリックしてください。
