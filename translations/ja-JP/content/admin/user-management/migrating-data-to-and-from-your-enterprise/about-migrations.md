---
title: 移行について
intro: '移行とは、 *"ソース"* の場所 ({% data variables.product.prodname_dotcom_the_website %} Organization か {% data variables.product.prodname_ghe_server %} インスタンスのいずれか) から *"ターゲット"* となる {% data variables.product.prodname_ghe_server %} インスタンスにデータを転送するプロセスです。 移行は、プラットフォームを変更したり、インスタンスのハードウェアをアップグレードしたりする場合にデータを転送するのに利用できます。'
redirect_from:
  - /enterprise/admin/migrations/about-migrations
  - /enterprise/admin/user-management/about-migrations
  - /admin/user-management/about-migrations
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Migration
ms.openlocfilehash: accb9c62655f8825077a00e05a93182b36cd6e8d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147541184'
---
## 移行の種類

行える移行は3種類あります。

- {% data variables.product.prodname_ghe_server %} インスタンスから別の {% data variables.product.prodname_ghe_server %} インスタンスへの移行。 インスタンス上の任意のユーザあるいはOrganizationが所有する任意の数のリポジトリを移行できます。 移行を行う前に、双方のインスタンスにサイト管理者としてアクセスできなければなりません。
- {% data variables.product.prodname_dotcom_the_website %} Organization から {% data variables.product.prodname_ghe_server %} インスタンスへの移行。 Organizationが所有する任意の数のリポジトリを移行できます。 移行を実行する前に、{% data variables.product.prodname_dotcom_the_website %} Organization への[管理アクセス](/enterprise/user/articles/permission-levels-for-an-organization/)と、ターゲット インスタンスへのサイト管理者アクセスが必要です。
- *テスト実行* は、[ステージング インスタンス](/enterprise/admin/guides/installation/setting-up-a-staging-instance/)にデータをインポートする移行です。 これらは、移行が {% data variables.product.product_location %} に適用された場合に何が *起こるか* を確認するのに役立ちます。 **運用インスタンスへデータをインポートする前に、ステージング インスタンスでテスト実行を行うことを強くおすすめします。**

## データの移行

移行においては、すべての事項についてリポジトリが中心になります。 リポジトリに関係するほとんどのデータは移行できます。 たとえば Organization 内のリポジトリは、リポジトリ *および* その Organization、またそのリポジトリに関連付けられているユーザー、Team、Issue、pull request のすべてを移行します。

以下の表の項目はレポジトリと共に移行できます。 移行されたデータのリストに表示されていない項目は、{% data variables.large_files.product_name_short %} 資産を含めて移行できません。

{% data reusables.enterprise_migrations.fork-persistence %}

|  移行されたリポジトリに関連するデータ | Notes  |
|---------------------------------------------|--------|
| ユーザー | ユーザーの **@mentions** は、ターゲットに一致するように書き直されます。
| 組織 | Organizationの名前と詳細は移行されます。
| リポジトリ | Git ツリー、blob、コミット、および行へのリンクは、ターゲットにマッチするよう書き換えられます。 移行者がリダイレクトできるリポジトリの上限は 3 つです。 内部リポジトリはプライベート リポジトリとして移行されます。 アーカイブ状態は未設定です。
| Wiki | すべてのWikiのデータは移行されます。
| Teams | Team の **@mentions** は、ターゲットに一致するように書き直されます。
| マイルストーン | タイムスタンプは保持されます。
| プロジェクトボード | リポジトリやリポジトリを所有するOrganizationに関連するプロジェクトボードは移行されます。
| 発行 | Issueへの参照とタイムスタンプは保持されます。
| Issueのコメント | コメントへの相互参照は、ターゲットインスタンスに合わせて書き換えられます。
| Pull Request | プルリクエストへの相互参照はターゲットにマッチするよう書き換えられます。 タイムスタンプは保持されます。
| プルリクエストのレビュー | プルリクエストのレビューと関連データは移行されます。
| プルリクエストのレビューのコメント | コメントへの相互参照は、ターゲットインスタンスに合わせて書き換えられます。 タイムスタンプは保持されます。
| コミットのコメント | コメントへの相互参照は、ターゲットインスタンスに合わせて書き換えられます。 タイムスタンプは保持されます。
| リリース | すべてのリリースデータは移行されます。
| プルリクエストあるいはIssueに対して行われたアクション | ユーザの割り当て、タイトルの変更、ラベルの変更など、プルリクエストあるいはIssueに対するすべての変更は、それぞれのアクションのタイムスタンプと共に保持されます。
|  添付ファイル | [Issue と pull request の添付ファイル](/articles/file-attachments-on-issues-and-pull-requests)が移行されます。 移行に関するこの機能は無効化できます。
| Webhooks | アクティブなwebhookのみが移行されます。
| リポジトリのデプロイキー | リポジトリのデプロイキーは移行されます。
| 保護されたブランチ | 保護されたブランチの設定と関連データは移行されます。
