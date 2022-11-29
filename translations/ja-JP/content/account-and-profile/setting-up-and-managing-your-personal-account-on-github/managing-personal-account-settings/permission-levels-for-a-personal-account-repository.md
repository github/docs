---
title: 個人アカウントのリポジトリの権限レベル
intro: 個人アカウントが所有するリポジトリには、リポジトリ所有者とコラボレーターという 2 つのアクセス許可レベルがあります。
redirect_from:
  - /articles/permission-levels-for-a-user-account-repository
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Repository permissions
ms.openlocfilehash: dd2124c23054fa7bd44bb6501dae4363e59bab75
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113874'
---
## 個人アカウント リポジトリのアクセス許可レベルについて

個人アカウントが所有するリポジトリの所有者は 1 人です。 所有権のアクセス許可を別の個人アカウントと共有することはできません。

{% data variables.product.product_name %} のユーザーをコラボレーターとしてリポジトリに{% ifversion fpt or ghec %}招待{% else %}追加{% endif %}することもできます。 詳細については、「[コラボレーターを個人リポジトリに招待する](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)」を参照してください。

{% tip %}

**ヒント:** 個人アカウントが所有しているリポジトリに対して、より詳細なアクセス権が必要な場合には、リポジトリを Organization に移譲することを検討してください。 詳細については、「[リポジトリを移譲する](/github/administering-a-repository/transferring-a-repository#transferring-a-repository-owned-by-your-personal-account)」を参照してください。

{% endtip %}

## 個人アカウントが所有しているリポジトリに対する所有者アクセス権

リポジトリオーナーは、リポジトリを完全に制御することができます。 コラボレータが実行できるアクションに加えて、リポジトリオーナーは次のアクションを実行できます。

| アクション | 説明を見る |
| :- | :- |
| {% ifversion fpt or ghec %}コラボレーターの招待{% else %}コラボレーターの追加{% endif %} | 「[コラボレーターを個人リポジトリに招待する](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)」 |
| リポジトリの表示変更 | 「[リポジトリの可視性を設定する](/github/administering-a-repository/setting-repository-visibility)」 |{% ifversion fpt or ghec %}
| リポジトリとのインタラクションの制限 | 「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」 |{% endif %}
| デフォルトブランチを含むブランチ名の変更 | 「[ブランチの名前を変更する](/github/administering-a-repository/renaming-a-branch)」 |
| 保護されたブランチで、レビューの承認がなくてもプルリクエストをマージする | 「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches)」 |
| リポジトリを削除する | 「[リポジトリの削除](/repositories/creating-and-managing-repositories/deleting-a-repository)」 |
| リポジトリのトピックの管理 | 「[トピックでリポジトリを分類する](/github/administering-a-repository/classifying-your-repository-with-topics)」 |{% ifversion fpt or ghec %}
| リポジトリのセキュリティおよび分析設定の管理 | 「[リポジトリのセキュリティと分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」 |{% endif %}{% ifversion fpt or ghec %}
| プライベートリポジトリの依存関係グラフの有効化 | 「[リポジトリの依存関係を調べる](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)」 |{% endif %}
| パッケージの削除および復元 | 「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」 |
| リポジトリのソーシャルメディア向けプレビューのカスタマイズ | 「[リポジトリのソーシャルメディア向けプレビューをカスタマイズする](/github/administering-a-repository/customizing-your-repositorys-social-media-preview)」 |
| リポジトリからのテンプレートの作成 | 「[テンプレートリポジトリを作成する](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository)」 |
| Control access to {% data variables.product.prodname_dependabot_alerts %} へのアクセスを制御する| 「[リポジトリのセキュリティと分析設定を管理する](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)」 |{% ifversion fpt or ghec %}
| リポジトリで {% data variables.product.prodname_dependabot_alerts %} を閉じる | "[{% data variables.product.prodname_dependabot_alerts %} の表示と更新](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)" |
| プライベートリポジトリのデータ利用の管理 | 「[プライベート リポジトリ用のデータ利用設定の管理](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)」|{% endif %}
| リポジトリのコードオーナーを定義する | 「[コード オーナーについて](/github/creating-cloning-and-archiving-repositories/about-code-owners)」 |
| リポジトリのアーカイブ | 「[リポジトリのアーカイブ](/repositories/archiving-a-github-repository/archiving-repositories)」 |{% ifversion fpt or ghec %}
| セキュリティアドバイザリの作成 | 「[リポジトリ セキュリティ アドバイザリについて](/github/managing-security-vulnerabilities/about-github-security-advisories)」 |
| スポンサーボタンの表示 | 「[リポジトリにスポンサーボタンを表示する](/github/administering-a-repository/displaying-a-sponsor-button-in-your-repository)」 |{% endif %}
| プルリクエストの自動マージを許可または禁止 | 「[リポジトリ内のプル リクエストの自動マージを管理する](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)」 | 
| Webhookおよびデプロイキーの管理   | 「[デプロイ キーの管理](/developers/overview/managing-deploy-keys#deploy-keys)」 |

## 個人アカウントが所有しているリポジトリに対するコラボレーター アクセス権

個人リポジトリのコラボレータは、リポジトリのコンテンツをプル（読み取り）したり、リポジトリに変更をプッシュ（書き込み）したりすることができます。

{% note %}

**注:** プライベート リポジトリでは、リポジトリ オーナーはコラボレーターに書き込みアクセスしか付与できません。 個人アカウントが所有するリポジトリに対して、コラボレーターが読み取り専用アクセス権を持つことはできません。

{% endnote %}

コラボレータは、次のアクションを実行することもできます。

| アクション | 説明を見る |
| :- | :- |
| リポジトリのフォーク | 「[フォークについて](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)」 |
| デフォルトブランチ以外のブランチ名の変更 | 「[ブランチの名前を変更する](/github/administering-a-repository/renaming-a-branch)」 |
| リポジトリ内のコミット、プルリクエスト、Issue に関するコメントの作成、編集、削除 | <ul><li>「[Issue について](/github/managing-your-work-on-github/about-issues)」</li><li>「[プル リクエストへコメントする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)」</li><li>「[混乱を生むコメントを管理する](/communities/moderating-comments-and-conversations/managing-disruptive-comments)」</li></ul> |
| リポジトリ内の Issue の作成、割り当て、クローズ、再オープン | 「[Issue で作業を管理する](/github/managing-your-work-on-github/managing-your-work-with-issues)」 |
| リポジトリ内の Issue とプルリクエストのラベル管理 | 「[Issue と Pull Request のラベル付け](/github/managing-your-work-on-github/labeling-issues-and-pull-requests)」 |
| リポジトリ内の Issue とプルリクエストのマイルストーン管理 | 「[Issue と Pull Request のマイルストーンの作成と削除](/github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests)」 |
| リポジトリ内の Issue またはプルリクエストを重複としてマーク | 「[Issue と Pull Request の重複について](/github/managing-your-work-on-github/about-duplicate-issues-and-pull-requests)」 |
| リポジトリ内のプルリクエストの作成、マージ、クローズ | 「[プル リクエストで、作業に対する変更を提案する](/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests)」 |
| プルリクエストの自動マージの有効化または無効化 | 「[プル リクエストを自動的にマージする](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)」
| リポジトリ内のプルリクエストに提案された変更を適用 |「[プル リクエストでのフィードバックを取り込む](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request)」 |
| リポジトリのフォークからプルリクエストを作成 | 「[フォークからプル リクエストを作成する](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)」 |
| プルリクエストのマージ可能性に影響するプルリクエストについてレビューを送信 | 「[プル リクエストで提案された変更をレビューする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)」 |
| リポジトリ用のウィキの作成と編集 | 「[ウィキについて](/communities/documenting-your-project-with-wikis/about-wikis)」 |
| リポジトリ用のリリースの作成と編集 | 「[リポジトリのリリースを管理する](/github/administering-a-repository/managing-releases-in-a-repository)」 |
| リポジトリのコードオーナーの定義 | 「[コード オーナーについて](/articles/about-code-owners)」 |{% ifversion fpt or ghae or ghec %}
| パッケージの公開、表示、インストール | 「[パッケージの公開と管理](/github/managing-packages-with-github-packages/publishing-and-managing-packages)」 |{% endif %}
| リポジトリでコラボレーターである自身を削除する | 「[コラボレーターのリポジトリから自分を削除する](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository)」 |

## 参考資料

- 「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」
