---
title: パーソナルダッシュボードについて
redirect_from:
  - /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github/
  - /articles/opting-into-the-public-beta-for-a-new-dashboard/
  - /articles/about-your-personal-dashboard
intro: 'パーソナルダッシュボードにアクセスして、作業したりフォローしたりしている Issue やプルリクエストを追跡したり、トップリポジトリや Team のページにアクセスしたり、Organization やサブスクライブしているリポジトリの最近のアクティビティを知ったり、推奨されたリポジトリを調べたりできます。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### パーソナルダッシュボードにアクセスする

パーソナルダッシュボードは、{% data variables.product.product_name %}にサインインしたときに最初に表示されるページです。

サインインした後にパーソナルダッシュボードにアクセスするには、{% data variables.product.product_url %} の任意のページの左上の隅にある {% octicon "mark-github" aria-label="The github octocat logo" %} をクリックします。

### 最近のアクティビティを見つける

ニュースフィードの [Recent activity] セクションでは、あなたが作業している最近更新された Issue やプルリクエストを素早く見つけてフォローアップできます。 [Recent activity] の下では、過去 2 週間に行われた更新のプレビューを最大 12 件見ることができます。

{% data reusables.dashboard.recent-activity-qualifying-events %}

### トップリポジトリと Team を見つける

ダッシュボードの左サイドバーから、使っている上位のリポジトリおよび Team にアクセスできます。

![さまざまな Organization のリポジトリや Team のリスト](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

The list of top repositories is automatically generated, and can include any repository you have interacted with, whether it's owned directly by your account or not. Interactions include making commits and opening or commenting on issues and pull requests. The list of top repositories cannot be edited, but repositories will drop off the list 4 months after you last interacted with them.

{% data variables.product.product_name %} 上の任意のページの上部にある検索バーをクリックすれば、最近アクセスしたリポジトリ、Team、プロジェクトボードのリストを見つけることもできます。

### コミュニティからのアクティビティの更新を受ける

ニュースフィードの [All activity] セクションでは、サブスクライブしているリポジトリやフォローしている人からの更新情報を見ることができます。 [All activity] セクションは、あなたが Watch したり Star を付けたりしたリポジトリや、あなたがフォローしているユーザからの更新情報が示されます。

ニュースフィードでは、あなたがフォローしているユーザが以下のことをした場合に更新情報が示されます:
- リポジトリに Star を付ける。
- 他のユーザをフォローする。
- パブリックリポジトリを作成
- あなたが Watch しているリポジトリ上で "help wanted" あるいは "good first issue" のラベルを付けた Issue あるいはプルリクエストをオープンする。
- あなたが Watch しているリポジトリにコミットをプッシュする。
- パブリックリポジトリをフォークする。

リポジトリへの Star 付けや人のフォローに関する詳細は「[Star を付けてリポジトリを保存する](/articles/saving-repositories-with-stars/)」および「[人をフォローする](/articles/following-people)」を参照してください。

### 推奨されているリポジトリを調べる

ダッシュボードの右側にある [Explore repositories] セクションでは、コミュニティで推奨されているリポジトリを調べることができます。 Recommendations are based on repositories you've starred or visited, the people you follow, and activity within repositories that you have access to.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Finding ways to contribute to open source on {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."{% endif %}

### 参考リンク

- 「[Organization ダッシュボードについて](/articles/about-your-organization-dashboard)」
