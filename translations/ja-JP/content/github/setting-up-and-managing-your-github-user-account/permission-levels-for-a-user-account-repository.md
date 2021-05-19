---
title: ユーザーアカウントのリポジトリ権限レベル
intro: ユーザアカウントが所有するリポジトリには、リポジトリオーナーとコラボレータという 2 つの権限レベルがあります。
redirect_from:
  - /articles/permission-levels-for-a-user-account-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Accounts
---

### ユーザーアカウントのリポジトリ権限レベルについて

ユーザアカウントが所有するリポジトリのオーナーは 1 人です。 所有権の権限を別のユーザアカウントと共有することはできません。

{% data variables.product.product_name %} のユーザをコラボレータとしてリポジトリに{% if currentVersion == "free-pro-team@latest" %}招待{% else %}追加{% endif %}することもできます。 詳しい情報については、「[コラボレータを個人リポジトリに招待する](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)」を参照してください。

{% tip %}

**参考:** ユーザアカウントが所有しているリポジトリに対して、より精細なアクセス権が必要な場合には、リポジトリを Organization に移譲することを検討してください。 詳細は「[リポジトリを移譲する](/github/administering-a-repository/transferring-a-repository#transferring-a-repository-owned-by-your-user-account)」を参照してください。

{% endtip %}

### ユーザアカウントが所有しているリポジトリのオーナーアクセス権

リポジトリオーナーは、リポジトリを完全に制御することができます。 コラボレータが実行できるアクションに加えて、リポジトリオーナーは次のアクションを実行できます。

| アクション                                                                                                                                                                                                     | 詳細情報                                                                                                                                                                                                                                                                                              |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% if currentVersion == "free-pro-team@latest" %}コラボレータを招待{% else %}コラボレータを追加{% endif %}                                                                                                                  |                                                                                                                                                                                                                                                                                                   |
| [個人リポジトリへのコラボレータの招待](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)                                                                            |                                                                                                                                                                                                                                                                                                   |
| リポジトリの表示変更                                                                                                                                                                                                | 「[リポジトリの可視性を設定する](/github/administering-a-repository/setting-repository-visibility)」 |{% if currentVersion == "free-pro-team@latest" %}
| リポジトリとのインタラクションの制限                                                                                                                                                                                        | 「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」 |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
| デフォルトブランチを含むブランチ名の変更                                                                                                                                                                                      | 「[ブランチ名を変更する](/github/administering-a-repository/renaming-a-branch)」 
{% endif %}
| 保護されたブランチで、レビューの承認がなくてもプルリクエストをマージする                                                                                                                                                                      | [保護されたブランチについて](/github/administering-a-repository/about-protected-branches)                                                                                                                                                                                                                      |
| リポジトリを削除する                                                                                                                                                                                                | 「[リポジトリを削除する](/github/administering-a-repository/deleting-a-repository)」                                                                                                                                                                                                                          |
| リポジトリのトピックの管理                                                                                                                                                                                             | 「[トピックでリポジトリを分類する](/github/administering-a-repository/classifying-your-repository-with-topics)」 |{% if currentVersion == "free-pro-team@latest" %}
| リポジトリのセキュリティおよび分析設定の管理                                                                                                                                                                                    | 「[リポジトリのセキュリティおよび分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」 |{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| プライベートリポジトリの依存関係グラフの有効化                                                                                                                                                                                   | 「[リポジトリの依存関係を見る](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)」 |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
| パッケージの削除および復元                                                                                                                                                                                             | 「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」 |{% endif %}{% if currentVersion == "enterprise-server@2.22" or currentVersion == "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
| パッケージの削除                                                                                                                                                                                                  | 「[パッケージを削除する](/packages/learn-github-packages/deleting-a-package)」
{% endif %}
| リポジトリのソーシャルメディア向けプレビューのカスタマイズ                                                                                                                                                                             | 「[リポジトリのソーシャルメディア向けプレビューをカスタマイズする](/github/administering-a-repository/customizing-your-repositorys-social-media-preview)」                                                                                                                                                                         |
| リポジトリからのテンプレートの作成                                                                                                                                                                                         | 「[テンプレートリポジトリを作成する](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository)」 |{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
| ー                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                   |
| 脆弱性のある依存関係の{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}セキュリティアラート{% endif %}の受信 | 「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」 |{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| リポジトリで {% data variables.product.prodname_dependabot_alerts %} を閉じる                                                                                                                                     | [リポジトリ内の脆弱な依存関係を表示・更新する](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)                                                                                                                                                               |
| プライベートリポジトリのデータ利用の管理                                                                                                                                                                                      | 「[プライベートリポジトリのデータ使用設定を管理する](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)」
{% endif %}
| リポジトリのコードオーナーを定義する                                                                                                                                                                                        | 「[コードオーナー'について](/github/creating-cloning-and-archiving-repositories/about-code-owners)」                                                                                                                                                                                                           |
| リポジトリのアーカイブ                                                                                                                                                                                               | 「[リポジトリのアーカイブについて](/github/creating-cloning-and-archiving-repositories/about-archiving-repositories)」 |{% if currentVersion == "free-pro-team@latest" %}
| セキュリティアドバイザリの作成                                                                                                                                                                                           | 「[{% data variables.product.prodname_security_advisories %} について](/github/managing-security-vulnerabilities/about-github-security-advisories)」                                                                                                                                                  |
| スポンサーボタンの表示                                                                                                                                                                                               | 「[リポジトリにスポンサーボタンを表示する](/github/administering-a-repository/displaying-a-sponsor-button-in-your-repository)」 |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
| プルリクエストの自動マージを許可または禁止                                                                                                                                                                                     | 「[リポジトリ内のプルリクエストの自動マージを管理する](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)」| {% endif %}

### ユーザアカウントが所有しているリポジトリに対するコラボレータアクセス権

個人リポジトリのコラボレータは、リポジトリのコンテンツをプル（読み取り）したり、リポジトリに変更をプッシュ（書き込み）したりすることができます。

{% note %}

**メモ:** プライベートリポジトリでは、リポジトリオーナーはコラボレーターに書き込みアクセスしか付与できません。 コラボレーターが、ユーザアカウントによって所有されているリポジトリに対して「読み取りのみ」アクセス権を持つことはできません。

{% endnote %}

コラボレータは、次のアクションを実行することもできます。

| アクション                                       | 詳細情報                                                                                                                                                                                                                                                                          |
|:------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| リポジトリのフォーク                                  | 「[フォークについて](/github/collaborating-with-issues-and-pull-requests/about-forks)」 |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
| デフォルトブランチ以外のブランチ名の変更                        | 「[ブランチ名を変更する](/github/administering-a-repository/renaming-a-branch)」 
{% endif %}
| リポジトリ内のコミット、プルリクエスト、Issue に関するコメントの作成、編集、削除 | <ul><li>「[About issues](/github/managing-your-work-on-github/about-issues)」</li><li>「[Commenting on a pull request](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)」</li><li>"[Managing disruptive comments](/communities/moderating-comments-and-conversations/managing-disruptive-comments)"</li></ul>                                                                                                                                                                                                                                                     |
| リポジトリ内の Issue の作成、割り当て、クローズ、再オープン           | 「[Issue で作業を管理する](/github/managing-your-work-on-github/managing-your-work-with-issues)」                                                                                                                                                                                       |
| リポジトリ内の Issue とプルリクエストのラベル管理                | 「[Issue とプルリクエストのラベル付け](/github/managing-your-work-on-github/labeling-issues-and-pull-requests)」                                                                                                                                                                              |
| リポジトリ内の Issue とプルリクエストのマイルストーン管理            | [Issueやプルリクエストのためのマイルストーンの作成と編集](/github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests)                                                                                                                                           |
| リポジトリ内の Issue またはプルリクエストを重複としてマーク           | 「[重複した Issue やプルリクエストについて](/github/managing-your-work-on-github/about-duplicate-issues-and-pull-requests)」                                                                                                                                                                    |
| リポジトリ内のプルリクエストの作成、マージ、クローズ                  | 「[プルリクエストで、作業に対する変更を提案する](/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests)」 |{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
| プルリクエストの自動マージの有効化または無効化                     | 「[プルリクエストを自動的にマージする](/github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request)」{% endif %}
| リポジトリ内のプルリクエストに提案された変更を適用                   | 「[プルリクエストでのフィードバックを取り込む](/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request)」                                                                                                                                                    |
| リポジトリのフォークからプルリクエストを作成                      | [フォークからプルリクエストを作成する](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)                                                                                                                                                                 |
| プルリクエストのマージ可能性に影響するプルリクエストについてレビューを送信       | 「[プルリクエストで提案された変更をレビューする](/github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request)」                                                                                                                                                  |
| リポジトリ用のウィキの作成と編集                            | 「[ウィキについて](/communities/documenting-your-project-with-wikis/about-wikis)」                                                                                                                                                                                                     |
| リポジトリ用のリリースの作成と編集                           | 「[リポジトリのリリースを管理する](/github/administering-a-repository/managing-releases-in-a-repository)」                                                                                                                                                                                     |
| リポジトリのコードオーナーの定義                            | 「[コードオーナーについて](/articles/about-code-owners)」 |{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}
| パッケージの公開、表示、インストール                          | 「[パッケージの公開と管理](/github/managing-packages-with-github-packages/publishing-and-managing-packages)」
{% endif %}
| リポジトリでコラボレーターである自身を削除する                     | [コラボレーターのリポジトリから自分を削除する](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository)                                                                                                                                          |

### 参考リンク

- [Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)
