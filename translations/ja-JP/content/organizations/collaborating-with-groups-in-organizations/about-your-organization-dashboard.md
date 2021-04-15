---
title: Organization ダッシュボードについて
intro: 'Organization のメンバーは、直近のアクティビティの更新情報を常時受け取り、作業中の Issue やプルリクエストを追跡したり、Organization をフォローしたりするために、Organization のダッシュボードにアクセスできます。'
redirect_from:
  - /articles/about-your-organization-dashboard
  - /github/setting-up-and-managing-organizations-and-teams/about-your-organization-dashboard
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

### Organization ダッシュボードへのアクセス

{% data reusables.dashboard.access-org-dashboard %}

### 最近のアクティビティを見つける

ニュースフィードの [Recent activity] セクションでは、Organization で最近更新された Issue やプルリクエストを素早く見つけてフォローアップできます。

{% data reusables.dashboard.recent-activity-qualifying-events %}

### Organization 内のリポジトリを見つける

ダッシュボードの左サイドバーでは、自分がアクティブになっている Organization 内のリポジトリにアクセスできます。

![Organization 内で自分が最もアクティブなリポジトリのリスト](/assets/images/help/dashboard/repositories-from-organization-dashboard.png)

### Organization からのアクティビティの更新を受ける

ニュースフィードの [All activity] セクションでは、Organization 内の他の Team やリポジトリからの更新情報を見ることができます。

[All activity] セクションは、Organization 内のすべての最近のアクティビティを表示します。これにはあなたがサブスクライブしていないリポジトリでのアクティビティや、フォローしていない人々のアクティビティも含まれます。 詳しい情報については、{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}」[リポジトリの Watch と Watch 解除](/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories){% endif %}」および「[人をフォローする](/articles/following-people)」を参照してください。

たとえば Organization のニュースフィードは Organization 内の誰かが以下のようなことをしたときに 更新情報を知らせます:
 - 新しいブランチを作成する
 - Issue またはプルリクエストへのコメント
 - プルリクエストのレビューコメントをサブミットする
 - リポジトリをフォーク
 - ウィキページを作成
 - コミットをプッシュする{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
 - パブリックリポジトリを作成する{% endif %}

### さらなる情報

- [パーソナルダッシュボードについて](/articles/about-your-personal-dashboard)
