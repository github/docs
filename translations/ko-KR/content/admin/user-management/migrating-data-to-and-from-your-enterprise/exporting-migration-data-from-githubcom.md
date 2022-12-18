---
title: GitHub.com에서 마이그레이션 데이터 내보내기
intro: 'API를 사용하여 마이그레이션할 리포지토리를 선택한 다음, {% data variables.product.prodname_ghe_server %} 인스턴스로 가져올 수 있는 마이그레이션 보관 파일을 생성하여 {% data variables.product.prodname_dotcom_the_website %}의 조직에서 마이그레이션 데이터를 내보낼 수 있습니다.'
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
ms.openlocfilehash: f39ec628f3b1b59767b30ef35689a63f3e57da4f
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008956'
---
## {% data variables.product.prodname_dotcom %}에서 원본 조직 준비

1. 원본 조직의 리포지토리에 대한 [소유자 권한](/articles/permission-levels-for-an-organization/)이 있는지 확인합니다.

2. {% data variables.product.prodname_dotcom_the_website %}에서의 {% data reusables.enterprise_migrations.token-generation %}

{% data reusables.enterprise_migrations.make-a-list %}

## 조직의 리포지토리 내보내기

{% data reusables.enterprise_migrations.fork-persistence %}

{% data variables.product.prodname_dotcom_the_website %}에서 리포지토리 데이터를 내보내려면 [마이그레이션 API](/free-pro-team@latest/rest/migrations)를 사용합니다.

마이그레이션 API는 현재 미리 보기 기간이므로 나중에 엔드포인트 및 매개 변수가 변경될 수 있습니다.
## 마이그레이션 보관 파일 생성

{% data reusables.enterprise_migrations.locking-repositories %}

1. 조직 구성원에게 마이그레이션을 수행할 예정임을 알립니다. 내보내는 리포지토리 수에 따라 몇 분 정도 걸릴 수 있습니다. 가져오기를 포함한 전체 마이그레이션에 몇 시간이 소요될 수 있으므로 전체 프로세스가 소요되는 시간을 결정하기 위해 평가판을 실행하는 것이 좋습니다. 자세한 내용은 “[마이그레이션 정보](/enterprise/admin/migrations/about-migrations#types-of-migrations)”를 참조하세요.

2. `POST` 요청을 [마이그레이션 엔드포인트](/free-pro-team@latest/rest/migrations#start-an-organization-migration)로 전송하여 마이그레이션을 시작하세요. 필요한 사항:
    * 인증용 액세스 토큰
    * 마이그레이션할 [리포지토리 목록](/free-pro-team@latest/rest/repos#list-organization-repositories):
      ```shell
      curl -H "Authorization: Bearer GITHUB_ACCESS_TOKEN" \
      -X POST \
      -H "Accept: application/vnd.github+json" \
      -d'{"lock_repositories":true,"repositories":["ORG_NAME</em>/REPO_NAME", "ORG_NAME/REPO_NAME"]}' \
      https://api.github.com/orgs/ORG_NAME/migrations
      ```
    *  리포지토리를 마이그레이션하기 전에 잠그려면 `lock_repositories`가 `true`로 설정되었는지 확인합니다. 적극 권장 사항입니다.
    * 엔드포인트에 `exclude_attachments: true`를 전달하여 첨부 파일을 제외할 수 있습니다. {% data reusables.enterprise_migrations.exclude-file-attachments %} 최종 보관 크기는 20GB 미만이어야 합니다.

  이 요청은 마이그레이션을 나타내는 고유의 `id`를 반환합니다. 마이그레이션 API에 대한 후속 호출에 필요합니다.

3. [마이그레이션 상태 엔드포인트](/free-pro-team@latest/rest/migrations#get-an-organization-migration-status)에 `GET` 요청을 보내 마이그레이션 상태를 가져옵니다. 필요한 사항:
    * 인증용 액세스 토큰
    * 마이그레이션의 고유 `id` :
      ```shell
      curl -H "Authorization: Bearer GITHUB_ACCESS_TOKEN" \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/ORG_NAME/migrations/ID
      ```

  마이그레이션은 다음 상태 중 하나일 수 있습니다.
    * `pending` - 마이그레이션이 아직 시작되지 않았음을 의미합니다.
    * `exporting` - 마이그레이션이 진행 중임을 의미합니다.
    * `exported` - 마이그레이션이 성공적으로 완료되었음을 의미합니다.
    * `failed` - 마이그레이션이 실패했음을 의미합니다.

4. 마이그레이션을 내보낸 후 [마이그레이션 다운로드 엔드포인트](/free-pro-team@latest/rest/migrations#download-an-organization-migration-archive)에 `GET` 요청을 전송하여 마이그레이션 보관 파일을 다운로드합니다. 필요한 사항:
    * 인증용 액세스 토큰
    * 마이그레이션의 고유 `id` :
      ```shell
      curl -H "Authorization: Bearer GITHUB_ACCESS_TOKEN" \
      -H "Accept: application/vnd.github+json" \
      -L -o migration_archive.tar.gz \
      https://api.github.com/orgs/ORG_NAME/migrations/ID/archive
      ```

5. 마이그레이션 보관 파일은 7일 후에 자동으로 삭제됩니다. 더 빨리 삭제하려는 경우 [마이그레이션 보관 삭제 엔드포인트](/free-pro-team@latest/rest/migrations#delete-an-organization-migration-archive)에 `DELETE` 요청을 보낼 수 있습니다. 필요한 사항:
    * 인증용 액세스 토큰
    * 마이그레이션의 고유 `id` :
      ```shell
      curl -H "Authorization: Bearer GITHUB_ACCESS_TOKEN" \
      -X DELETE \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/ORG_NAME/migrations/ID/archive
      ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
