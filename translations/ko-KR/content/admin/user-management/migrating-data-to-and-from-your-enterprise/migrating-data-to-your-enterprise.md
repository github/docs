---
title: 데이터를 엔터프라이즈로 마이그레이션
intro: '마이그레이션 보관을 생성한 후 대상 {% data variables.product.prodname_ghe_server %} 인스턴스로 데이터를 가져올 수 있습니다. 대상 인스턴스에 변경 내용을 영구적으로 적용하기 전에 잠재적 충돌에 대한 변경 내용을 검토할 수 있습니다.'
redirect_from:
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise
  - /enterprise/admin/migrations/applying-the-imported-data-on-github-enterprise-server
  - /enterprise/admin/migrations/reviewing-migration-data
  - /enterprise/admin/migrations/completing-the-import-on-github-enterprise-server
  - /enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise
  - /enterprise/admin/guides/migrations/reviewing-the-imported-data
  - /enterprise/admin/guides/migrations/completing-the-import-on-github-enterprise
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise-server
  - /enterprise/admin/user-management/migrating-data-to-your-enterprise
  - /admin/user-management/migrating-data-to-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
shortTitle: Import to your enterprise
ms.openlocfilehash: 9c8e31f1b20eb6c71ab6a31c5d202100e345e82d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093675'
---
## 가져온 데이터를 {% data variables.product.prodname_ghe_server %}에 적용

데이터를 엔터프라이즈로 마이그레이션하려면 먼저 데이터를 준비하고 충돌을 해결해야 합니다. 자세한 내용은 "[엔터프라이즈로의 데이터 마이그레이션 준비](/admin/user-management/preparing-to-migrate-data-to-your-enterprise)"를 참조하세요.

데이터를 준비하고 충돌을 해결한 후에는 가져온 데이터를 {% data variables.product.product_name %}에 적용할 수 있습니다.

{% data reusables.enterprise_installation.ssh-into-target-instance %}

2. `ghe-migrator import` 명령을 사용하여 가져오기 프로세스를 시작합니다. 필요한 사항:
    * 마이그레이션 GUID입니다. 자세한 내용은 "[엔터프라이즈로의 데이터 마이그레이션 준비](/admin/user-management/preparing-to-migrate-data-to-your-enterprise)"를 참조하세요.
    * 인증을 위해 {% 데이터 variables.product.pat_generic %}. 사용하는 {% 데이터 variables.product.pat_generic %}은(는) 사이트 관리자 권한 인증에만 해당하며 특정 범위{% ifversion pat-v2 %} 또는 권한{% endif %}이(가) 필요하지 않습니다. 자세한 내용은 "[%}variables.product.pat_generic {% 데이터 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요.

    ```shell
    $ ghe-migrator import /home/admin/MIGRATION-GUID.tar.gz -g MIGRATION-GUID -u USERNAME -p TOKEN

    > Starting GitHub::Migrator
    > Import 100% complete /
    ```

    * {% data reusables.enterprise_migrations.specify-staging-path %}

## 마이그레이션 데이터 검토

기본적으로 `ghe-migrator audit`에서는 모든 레코드를 반환합니다. 또한 다음을 기준으로 레코드를 필터링할 수 있습니다.

  * 레코드 유형.
  * 레코드 상태.

레코드 유형은 [마이그레이션된 데이터](/enterprise/admin/guides/migrations/about-migrations/#migrated-data)에 있는 레코드 유형과 일치합니다.

## 레코드 유형 필터

|      레코드 형식      | 필터 이름  |
|-----------------------|--------|
| 사용자           | `user`
| 조직   | `organization`
| 리포지토리    | `repository`
| Teams           | `team`
| 마일스톤      | `milestone`
| 프로젝트 보드  | `project`
| 문제          | `issue`
| 문제 설명  | `issue_comment`
| 끌어오기 요청   | `pull_request`
| 끌어오기 요청 검토 | `pull_request_review`
| 커밋 설명 | `commit_comment`
| 끌어오기 요청 검토 설명 | `pull_request_review_comment`
| 릴리스 | `release`
| 끌어오기 요청 또는 문제에 대해 수행된 작업 | `issue_event`
| 보호된 분기 | `protected_branch`

## 레코드 상태 필터

| 레코드 상태    | 설명    |
|-----------------|----------------|
| `export`        | 레코드를 내보냅니다. |
| `import`        | 레코드를 가져옵니다. |
| `map`           | 레코드를 매핑합니다. |
| `rename`        | 레코드의 이름을 변경합니다. |
| `merge`         | 레코드를 병합합니다. |
| `exported`      | 레코드를 내보냈습니다. |
| `imported`      | 레코드를 가져왔습니다. |
| `mapped`        | 레코드를 매핑했습니다. |
| `renamed`       | 레코드의 이름을 변경했습니다. |
| `merged`        | 레코드를 병합했습니다. |
| `failed_export` | 레코드를 내보내지 못했습니다. |
| `failed_import` | 레코드를 가져오지 못했습니다. |
| `failed_map`    | 레코드를 매핑하지 못했습니다. |
| `failed_rename` | 레코드의 이름을 변경하지 못했습니다. |
| `failed_merge`  | 레코드를 병합하지 못했습니다. |

## 감사된 레코드 필터링

`ghe-migrator audit` 명령을 사용하면 `-m` 플래그를 사용하여 레코드 형식을 기준으로 필터링할 수 있습니다. 마찬가지로 `-s` 플래그를 사용하여 가져오기 상태를 필터링할 수 있습니다. 이 명령은 다음과 같습니다.

```shell
$ ghe-migrator audit -m RECORD_TYPE -s STATE -g MIGRATION-GUID
```

예를 들어 성공적으로 가져온 모든 조직과 팀을 보려면 다음을 입력합니다.
```shell
$ ghe-migrator audit -m organization,team -s mapped,renamed -g MIGRATION-GUID
> model_name,source_url,target_url,state
> organization,https://gh.source/octo-org/,https://ghe.target/octo-org/,renamed
```

**실패한 모든 가져오기를 감사하는 것이 좋습니다.** 이렇게 하려면 다음을 입력하세요.
```shell
$ ghe-migrator audit -s failed_import,failed_map,failed_rename,failed_merge -g MIGRATION-GUID
> model_name,source_url,target_url,state
> user,https://gh.source/octocat,https://gh.target/octocat,failed
> repository,https://gh.source/octo-org/octo-project,https://ghe.target/octo-org/octo-project,failed
```

실패한 가져오기에 관한 우려 사항이 있다면 {% data variables.contact.contact_ent_support %}에 문의하세요.

## {% data variables.product.prodname_ghe_server %}에서의 가져오기 완료

마이그레이션이 대상 인스턴스에 적용되고 마이그레이션을 검토한 후에는, 리포지토리의 잠금을 해제하고 원본에서 삭제합니다. 원본 데이터를 삭제하기 전에 2주 정도 대기하여 모든 요소가 예상대로 작동하는지 확인하는 것이 좋습니다.

## 대상 인스턴스에서 리포지토리 잠금 해제

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.enterprise_migrations.unlocking-on-instances %}

## 원본에서 리포지토리 잠금 해제

### {% data variables.product.prodname_dotcom_the_website %}에서 조직의 리포지토리 잠금 해제

{% data variables.product.prodname_dotcom_the_website %} 조직에서 리포지토리의 잠금을 해제하려면 `DELETE` 요청을 [마이그레이션 잠금 해제 엔드포인트](/free-pro-team@latest/rest/migrations#unlock-an-organization-repository)로 보냅니다. 필요한 사항:
  * 인증용 액세스 토큰
  * 마이그레이션의 고유 `id`
  * 잠금 해제할 리포지토리의 이름

```shell
curl -H "Authorization: Bearer GITHUB_ACCESS_TOKEN" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/ORG-NAME/migrations/ID/repos/REPO_NAME/lock
```

### {% data variables.product.prodname_dotcom_the_website %}에서 조직의 리포지토리 삭제

{% data variables.product.prodname_dotcom_the_website %} 조직의 리포지토리를 잠금 해제한 후에는 [리포지토리 삭제 엔드포인트](/rest/repos/#delete-a-repository)를 사용하여, 이전에 마이그레이션한 모든 리포지토리를 삭제해야 합니다. 인증용 액세스 토큰이 필요합니다.
```shell
curl -H "Authorization: Bearer GITHUB_ACCESS_TOKEN" -X DELETE \
  https://api.github.com/repos/ORG-NAME/REPO_NAME
```

### {% data variables.product.prodname_ghe_server %} 인스턴스에서 리포지토리 잠금 해제

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.enterprise_migrations.unlocking-on-instances %}
