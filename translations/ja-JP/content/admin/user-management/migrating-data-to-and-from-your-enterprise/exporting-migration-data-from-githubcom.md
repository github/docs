---
title: GitHub.comからの移行データのエクスポート
intro: 'API を使用して移行するリポジトリを選択し、{% data variables.product.prodname_ghe_server %} インスタンスにインポートできる移行アーカイブを生成することで、{% data variables.product.prodname_dotcom_the_website %} 上の Organization から移行データをエクスポートできます。'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-com
  - /enterprise/admin/migrations/exporting-migration-data-from-githubcom
  - /enterprise/admin/migrations/preparing-the-githubcom-source-organization
  - /enterprise/admin/migrations/exporting-the-githubcom-organizations-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-com-source-organization
  - /enterprise/admin/guides/migrations/exporting-the-github-com-organization-s-repositories
  - /enterprise/admin/user-management/exporting-migration-data-from-githubcom
  - /admin/user-management/exporting-migration-data-from-githubcom
versions:
  ghes: '*'
type: how_to
topics:
  - API
  - Enterprise
  - Migration
shortTitle: Export data from GitHub.com
ms.openlocfilehash: 07c74c41312fe5818390bba206072bf95e5bc00c
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717870'
---
## {% data variables.product.prodname_dotcom %} でソース Organization を準備する

1. ソース Organization のリポジトリに対する[所有者のアクセス許可](/articles/permission-levels-for-an-organization/)があることを確認します。

2. {% data variables.product.prodname_dotcom_the_website %}上の {% data reusables.enterprise_migrations.token-generation %}。

{% data reusables.enterprise_migrations.make-a-list %}

## Organization のリポジトリのエクスポート

{% data reusables.enterprise_migrations.fork-persistence %}

{% data variables.product.prodname_dotcom_the_website %} からリポジトリ データをエクスポートするには、[Migrations API](/free-pro-team@latest/rest/migrations) を使用します。

移行APIは現在プレビュー期間です。すなわち、エンドポイントとパラメータは将来変更されることがあります。
## 移行アーカイブの生成

{% data reusables.enterprise_migrations.locking-repositories %}

1. 移行を行うOrganizationのメンバーに通知します。 エクスポートには、対象のリポジトリ数に応じて数分がかかることがあります。 インポートを含む完全な移行には何時間もかかる可能性があるため、完全な処理にかかる時間を判断するためにまず試行することをおすすめします。 詳細については、「[移行について](/enterprise/admin/migrations/about-migrations#types-of-migrations)」を参照してください。

2. `POST` 要求を[移行エンドポイント](/free-pro-team@latest/rest/migrations#start-an-organization-migration)に送信して、移行を開始します。 必要なものは次のとおりです。
    * 認証のためのアクセストークン。
    * 移行する[リポジトリのリスト](/free-pro-team@latest/rest/repos#list-organization-repositories):
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -X POST \
      -H "Accept: application/vnd.github+json" \
      -d'{"lock_repositories":true,"repositories":["<em>orgname</em>/<em>reponame</em>", "<em>orgname</em>/<em>reponame</em>"]}' \
      https://api.github.com/orgs/<em>orgname</em>/migrations
      ```
    *  移行する前にリポジトリをロックする場合は、`lock_repositories` が `true` に設定されていることを確認します。 これについては強くおすすめします。
    * エンドポイントに `exclude_attachments: true` を渡すことで、添付ファイルを除外できます。 {% data reusables.enterprise_migrations.exclude-file-attachments %} 最終的なアーカイブのサイズは 20 GB 未満である必要があります。

  この要求により、移行を表す一意の `id` が返されます。 これは次の移行 API の呼び出しに必要となります。

3. 移行の状態をフェッチするには、[移行の状態エンドポイント](/free-pro-team@latest/rest/migrations#get-an-organization-migration-status)に `GET` 要求を送信します。 必要なものは次のとおりです。
    * 認証のためのアクセストークン。
    * 移行の一意の `id`:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>
      ```

  移行のステータスは以下のいずれかになります:
    * `pending`: 移行はまだ開始されていないことを意味します。
    * `exporting`: 移行が進行中であることを意味します。
    * `exported`: 移行が正常に完了したことを意味します。
    * `failed`: 移行が失敗したことを意味します。

4. 移行がエクスポートされたら、[移行ダウンロード エンドポイント](/free-pro-team@latest/rest/migrations#download-an-organization-migration-archive)に `GET` 要求を送信して移行アーカイブをダウンロードします。 必要なものは次のとおりです。
    * 認証のためのアクセストークン。
    * 移行の一意の `id`:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github+json" \
      -L -o migration_archive.tar.gz \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```

5. 移行アーカイブは 7 日間経過すると自動的に削除されます。 より早く削除する場合は、[移行アーカイブ削除エンドポイント](/free-pro-team@latest/rest/migrations#delete-an-organization-migration-archive)に `DELETE` 要求を送信できます。 必要なものは次のとおりです。
    * 認証のためのアクセストークン。
    * 移行の一意の `id`:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -X DELETE \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
