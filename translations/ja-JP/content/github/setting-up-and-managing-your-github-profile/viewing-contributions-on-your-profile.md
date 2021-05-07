---
title: プロフィールでコントリビューションを表示する
intro: 'Your {% data variables.product.product_name %} profile shows off {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}your pinned repositories as well as{% endif %} a graph of your repository contributions over the past year.'
redirect_from:
  - /articles/viewing-contributions/
  - /articles/viewing-contributions-on-your-profile-page/
  - /articles/viewing-contributions-on-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Profiles
---

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}Your contribution graph shows activity from public repositories. {% endif %}You can choose to show activity from {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}both public and {% endif %}private repositories, with specific details of your activity in private repositories anonymized. 詳細は「[プライベートコントリビューションをプロフィールで公開または非公開にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)」を参照してください。

{% note %}

**Note:** Commits will only appear on your contributions graph if the email address you used to author the commits is connected to your account on {% data variables.product.product_name %}. 詳細は「[コントリビューションがプロフィールに表示されないのはなぜですか？](/articles/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)」を参照してください。

{% endnote %}

### コントリビューションとして何がカウントされるか

プロフィールページでは、特定のアクションがコントリビューションとしてカウントされます:

- リポジトリのデフォルトブランチまたは `gh-pages` ブランチにコミットすること
- Issue を開くこと
- プルリクエストを提案すること
- Submitting a pull request review{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
- リポジトリのデフォルトのブランチまたは `gh-pages` ブランチでコミットを共作{% endif %}

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### 人気のあるリポジトリ

このセクションには、ウォッチャーが最も多いリポジトリが表示されます。 {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}Once you [pin repositories to your profile](/articles/pinning-repositories-to-your-profile), this section will change to "Pinned repositories."{% endif %}

![人気のあるリポジトリ](/assets/images/help/profile/profile_popular_repositories.png)

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

### Pinned repositories

このセクションには最大 6 つのパブリックリポジトリが表示されます。このリポジトリには、自分のリポジトリだけでなく、自分がコントリビュートしたリポジトリも含めることができます。 選択したリポジトリに関する重要な詳細を簡単に見るために、このセクションの各リポジトリには、行われている作業の要約、そのリポジトリに付いた [Star](/articles/saving-repositories-with-stars/) の数、およびそのリポジトリで使用されている主なプログラミング言語が含まれます。 詳細は「[プロフィールにリポジトリをピン止めする](/articles/pinning-repositories-to-your-profile)」を参照してください。

![Pinned repositories](/assets/images/help/profile/profile_pinned_repositories.png)

{% endif %}

### コントリビューションカレンダー

コントリビューションカレンダーは、コントリビューションアクティビティを表示します。

#### 特定の時期からのコントリビューションを表示する

- ある日の正方形をクリックすると、その 24 時間の間になされたコントリビューションが表示されます。
- *Shift* を押しながら、別の日の正方形をクリックすると、その期間中になされたコントリビューションが表示されます。

{% note %}

**メモ:** コントリビューションカレンダーでは 1 か月の範囲まで選ぶことができます。 もっと長い期間を選択した場合、1 か月分のコントリビューションのみが表示されます。

{% endnote %}

![コントリビューショングラフ](/assets/images/help/profile/contributions_graph.png)

#### コントリビューションイベント時間の計算方法

タイムスタンプは、コミットとプルリクエストでは異なる方法で計算されます:
- **コミット**は、コミットタイムスタンプのタイムゾーン情報を使用します。 詳細は「[タイムライン上のコミットのトラブルシューティング](/articles/troubleshooting-commits-on-your-timeline)」を参照してください。
- {% data variables.product.product_name %} で開かれた**プルリクエスト**と **Issue** は、ブラウザのタイムゾーンを使用します。 API を介して開かれたものは、[API 呼び出しで指定された](https://developer.github.com/changes/2014-03-04-timezone-handling-changes)タイムスタンプまたはタイムゾーンを使用します。

### アクティビティの概要

{% data reusables.profile.activity-overview-summary %} 詳細は「[プロフィール上にアクティビティの概要を表示する](/articles/showing-an-overview-of-your-activity-on-your-profile)」を参照してください。

![プロフィール上のアクティビティオーバービューセクション](/assets/images/help/profile/activity-overview-section.png)

アクティビティの概要に記載されている Organization は、Organization 内でのアクティビティの程度に応じて優先順位が付けられています。 プロフィール略歴で Organization に @メンションしており、あなたが Organization のメンバーである場合、その Organization がアクティビティの概要で最優先されます。 詳細は「[人や Team のメンション](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)」または「[プロフィールに略歴を追加する](/articles/adding-a-bio-to-your-profile/)」を参照してください。

### コントリビューションアクティビティ

コントリビューションアクティビティセクションには、あなたが行った、または共作したコミット、あなたが提案したプルリクエスト、あなたが開いた Issue を含む、あなたの仕事の詳細なタイムラインが含まれています。 コントリビューションアクティビティの下にある **Show more activity** をクリックするか、ページの右側に表示したい興味のある年をクリックすることで、コントリビューションを時間の経過とともに見ることができます。 Organization に参加した日付、最初のプルリクエストを提案した日付、または注目度の高い Issue を開いた日付など、重要な瞬間が、コントリビューションアクティビティで強調されます。 タイムラインに特定のイベントが表示されない場合は、イベントが発生した Organization またはリポジトリにまだアクセスできることを確認してください。

![コントリビューションアクティビティ時間フィルター](/assets/images/help/profile/contributions_activity_time_filter.png)

{% if currentVersion != "github-ae@latest" %}
### {% data variables.product.prodname_dotcom_the_website %} 上の {% data variables.product.product_location_enterprise %} からコントリビューションを表示する
If your site administrator has enabled

{% data variables.product.prodname_unified_contributions %}, you can send {% data variables.product.prodname_enterprise %} contribution counts to your {% data variables.product.prodname_dotcom_the_website %} profile. 詳細は「[{% data variables.product.prodname_ghe_server %} コントリビューションを {% data variables.product.prodname_dotcom_the_website %} に送信する](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile)」を参照してください。
{% endif %}

### 参考リンク

- [プロフィールページ上にコントリビューションを表示する](/articles/viewing-contributions-on-your-profile-page)
- [プロフィール上でコントリビューションが表示されない理由](/articles/why-are-my-contributions-not-showing-up-on-my-profile)
- [プロフィールでプライベートコントリビューションを公開または非表示にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)
- [プロフィール上にアクティビティの概要を表示する](/articles/showing-an-overview-of-your-activity-on-your-profile)
