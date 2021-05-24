---
title: パーソナルダッシュボードについて
redirect_from:
  - /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github/
  - /articles/opting-into-the-public-beta-for-a-new-dashboard/
  - /articles/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/about-your-personal-dashboard
intro: パーソナルダッシュボードにアクセスして、作業したりフォローしたりしている Issue やプルリクエストを追跡したり、トップリポジトリや Team のページにアクセスしたり、Organization やサブスクライブしているリポジトリの最近のアクティビティを知ったり、推奨されたリポジトリを調べたりできます。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Accounts
---
### パーソナルダッシュボードにアクセスする

パーソナルダッシュボードは、{% data variables.product.product_name %}にサインインしたときに最初に表示されるページです。

サインインした後にパーソナルダッシュボードにアクセスするには、{% data variables.product.product_name %} の任意のページの左上の隅にある {% octicon "mark-github" aria-label="The github octocat logo" %} をクリックします。

### 最近のアクティビティを見つける

ニュースフィードの [Recent activity] セクションでは、あなたが作業している最近更新された Issue やプルリクエストを素早く見つけてフォローアップできます。 [Recent activity] の下では、過去 2 週間に行われた更新のプレビューを最大 12 件見ることができます。

{% data reusables.dashboard.recent-activity-qualifying-events %}

### トップリポジトリと Team を見つける

ダッシュボードの左サイドバーから、使っている上位のリポジトリおよび Team にアクセスできます。

![さまざまな Organization のリポジトリや Team のリスト](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

上位のリポジトリのリストは自動的に生成され、アカウントが直接所有しているかどうかに関係なく、操作したリポジトリを含めることができます。 インタラクションには、コミットの作成、Issue およびプルリクエストのオープンまたはコメントが含まれます。 上位のリポジトリのリストは編集できませんが、リポジトリを最後に操作してから 4 か月後にリポジトリはリストから削除されます。

{% data variables.product.product_name %} 上の任意のページの上部にある検索バーをクリックすれば、最近アクセスしたリポジトリ、Team、プロジェクトボードのリストを見つけることもできます。

### コミュニティからのアクティビティの更新を受ける

ニュースフィードの [All activity] セクションでは、サブスクライブしているリポジトリやフォローしている人からの更新情報を見ることができます。 [All activity] セクションは、あなたが Watch したり Star を付けたりしたリポジトリや、あなたがフォローしているユーザからの更新情報が示されます。

ニュースフィードでは、あなたがフォローしているユーザが以下のことをした場合に更新情報が示されます:
- リポジトリに Star を付ける。
- 別のユーザをフォローする。{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- パブリックリポジトリを作成する{% endif %}
- あなたが Watch しているリポジトリ上で "help wanted" あるいは "good first issue" のラベルを付けた Issue あるいはプルリクエストをオープンする。
- Watch しているリポジトリにコミットをプッシュする。{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- パブリックリポジトリをフォークする。{% endif %}

リポジトリへの Star 付けや人のフォローに関する詳細は「[Star を付けてリポジトリを保存する](/articles/saving-repositories-with-stars/)」および「[人をフォローする](/articles/following-people)」を参照してください。

### 推奨されているリポジトリを調べる

ダッシュボードの右側にある [Explore repositories] セクションでは、コミュニティで推奨されているリポジトリを調べることができます。 推奨は、Star を付けたりアクセスしたりしたリポジトリ、フォローしているユーザ、アクセスしたリポジトリ内のアクティビティに基づいています。{% if currentVersion == "free-pro-team@latest" %}詳しい情報については、「[{% data variables.product.prodname_dotcom %} でオープンソースにコントリビュートする方法を見つける](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)」を参照してください。{% endif %}

### 参考リンク

- 「[Organization ダッシュボードについて](/articles/about-your-organization-dashboard)」
