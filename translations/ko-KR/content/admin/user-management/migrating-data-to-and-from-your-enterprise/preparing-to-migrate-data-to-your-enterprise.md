---
title: 엔터프라이즈로 데이터 마이그레이션 준비
intro: '마이그레이션 보관을 생성한 후 대상 {% data variables.product.prodname_ghe_server %} 인스턴스로 데이터를 가져올 수 있습니다. 대상 인스턴스에 변경 내용을 영구적으로 적용하기 전에 잠재적 충돌에 대한 변경 내용을 검토할 수 있습니다.'
redirect_from:
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
  - /enterprise/admin/migrations/reviewing-migration-conflicts
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise
  - /enterprise/admin/user-management/preparing-to-migrate-data-to-your-enterprise
  - /admin/user-management/preparing-to-migrate-data-to-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
shortTitle: Prepare to migrate data
ms.openlocfilehash: 0f46ff54e6563945ab63a1845f2609ee8fb90a0e
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009121'
---
## {% data variables.product.prodname_ghe_server %}(으)로 가져올 마이그레이션 데이터 준비

1. [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) 명령을 사용하여 원본 인스턴스 또는 조직에서 생성된 마이그레이션 보관 파일을 {% data variables.product.prodname_ghe_server %} 대상으로 복사합니다.

    ```shell
    $ scp -P 122 PATH-TO-MIGRATION-GUID.tar.gz admin@HOSTNAME:/home/admin/
    ```

{% data reusables.enterprise_installation.ssh-into-target-instance %}

3. `ghe-migrator prepare` 명령을 사용하여 대상 인스턴스에서 가져올 보관 파일을 준비하고 후속 단계에서 사용할 새 마이그레이션 GUID를 생성합니다.

    ```shell
    ghe-migrator prepare /home/admin/MIGRATION-GUID.tar.gz
    ```

    * 새로운 가져오기를 시작하려면 `ghe-migrator prepare`를 다시 실행하고 새 마이그레이션 GUID를 가져옵니다.
    * {% data reusables.enterprise_migrations.specify-staging-path %}

## 마이그레이션 충돌 목록 생성

1. 마이그레이션 GUID와 함께 `ghe-migrator conflicts` 명령을 사용하여 *conflicts.csv* 파일을 생성합니다.
    ```shell
    $ ghe-migrator conflicts -g MIGRATION-GUID > conflicts.csv
    ```
    - 충돌이 보고되지 않으면 “[엔터프라이즈로 데이터 마이그레이션](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/)”의 다음 단계에 따라 데이터를 안전하게 가져올 수 있습니다.
2. 충돌이 있는 경우 [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) 명령을 사용하여 *conflicts.csv* 를 로컬 컴퓨터에 복사합니다.
  ```shell
  $ scp -P 122 admin@HOSTNAME:conflicts.csv ~/Desktop
  ```
3. “[마이그레이션 충돌 해결 또는 사용자 지정 매핑 설정](#resolving-migration-conflicts-or-setting-up-custom-mappings)”을 계속 진행합니다.

## 마이그레이션 충돌 검토

1. 텍스트 편집기 또는 [CSV 호환 스프레드시트 소프트웨어](https://en.wikipedia.org/wiki/Comma-separated_values#Application_support)를 사용하여 *conflicts.csv* 를 엽니다.
2. 아래 예제 및 참조 테이블의 지침에 따라 *conflicts.csv* 파일을 검토하여 가져오기 시 적절한 작업이 수행되는지 확인합니다.

*conflicts.csv* 파일에는 충돌 및 권장 작업의 *마이그레이션 맵* 이 포함되어 있습니다. 마이그레이션 맵에는 원본에서 마이그레이션되는 데이터와 대상에 데이터가 적용되는 방법이 모두 나열되어 있습니다.

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map` |
| `organization` | `https://example-gh.source/octo-org` | `https://example-gh.target/octo-org` | `map` |
| `repository`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/widgets` | `rename` |
| `team`         | `https://example-gh.source/orgs/octo-org/teams/admins` | `https://example-gh.target/orgs/octo-org/teams/admins` | `merge` |

*conflicts.csv* 의 각 행은 다음 정보를 제공합니다.

|    Name      | 설명   |
|--------------|---------------|
| `model_name` | 데이터 유형이 변경되는 중입니다. |
| `source_url` | 데이터의 원본 URL입니다. |
| `target_url` | 데이터에 대해 예상되는 대상 URL입니다.  |
| `recommended_action` | 데이터를 가져올 때 기본 설정 작업 `ghe-migrator`가 수행됩니다.  |

### 각 레코드 유형에 대해 가능한 매핑

데이터를 전송할 때 `ghe-migrator`에서 수행할 수 있는 여러 가지 매핑 작업이 있습니다.

| `action`      | 설명 | 적용 가능한 모델 |
|------------------------|-------------|-------------------|
| `import`      | (기본값) 원본의 데이터를 대상으로 가져옵니다. | 모든 레코드 형식
| `map`         | 원본의 데이터는 대상의 기존 데이터로 대체됩니다. | 사용자, 조직, 리포지토리
| `rename`      | 원본의 데이터는 이름이 변경된 다음 대상에 복사됩니다. | 사용자, 조직, 리포지토리
| `map_or_rename` | 대상이 있는 경우 해당 대상에 매핑합니다. 그렇지 않으면 가져온 모델의 이름을 바꿉니다. | 사용자
| `merge`       | 원본의 데이터는 대상의 기존 데이터와 결합됩니다. | Teams

***conflicts.csv* 파일을 검토하고 적절한 작업이 수행되고 있는지 확인하는 데 [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data)를 사용하는 것이 좋습니다.** 모든 항목이 제대로 표시되면 “[엔터프라이즈로 데이터 마이그레이션](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server)”을 계속할 수 있습니다.


## 마이그레이션 충돌 해결 또는 사용자 지정 매핑 설정

`ghe-migrator`에서 수행하는 변경 사항이 잘못되었다고 생각하면 *conflicts.csv* 에서 데이터를 변경하여 수정할 수 있습니다. *conflicts.csv* 에서 모든 행을 변경할 수 있습니다.

예를 들어 원본의 `octocat` 사용자가 대상의 `octocat`으로 매핑되고 있는 것을 알게 되었다고 가정해 보겠습니다.

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map`

사용자를 대상의 다른 사용자에게 매핑하도록 선택할 수 있습니다. `octocat`이 실제 대상에서 `monalisa`여야 함을 알고 있다고 가정해 보겠습니다. `monalisa`를 참조하도록 *conflicts.csv* 에서 `target_url` 열을 변경할 수 있습니다.

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `map`

또 다른 예로, 대상 인스턴스에서 `octo-org/widgets` 리포지토리의 이름을 `octo-org/amazing-widgets`로 바꾸려면 `target_url`을 `octo-org/amazing-widgets`로, `recommend_action`을 `rename`으로 변경합니다.

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `repository`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/amazing-widgets` | `rename`   |

### 사용자 지정 매핑 추가

마이그레이션의 일반적인 시나리오에서 마이그레이션된 사용자는 원본에 있는 사용자 이름과 대상에 있는 사용자 이름이 달라야 합니다.

원본의 사용자 이름 목록과 대상의 사용자 이름 목록이 지정된 경우 사용자 지정 매핑을 사용하여 CSV 파일을 빌드한 다음 적용하여 마이그레이션이 끝날 때 각 사용자의 사용자 이름과 콘텐츠가 올바르게 특성화되도록 할 수 있습니다.

[`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) 명령을 사용하여 사용자 지정 매핑을 적용하는 데 필요한 CSV 형식으로 마이그레이션되는 사용자의 CSV를 신속하게 생성할 수 있습니다.

```shell
$ ghe-migrator audit -m user -g MIGRATION-GUID > users.csv
```

이제 해당 CSV를 편집하고 매핑하거나 이름을 바꾸려는 사용자별로 새 URL을 입력한 다음, 필요한 경우 네 번째 열에 `map` 또는 `rename`을 포함하도록 업데이트할 수 있습니다.

예를 들어 대상 `https://example-gh.target`에서 `octocat` 사용자의 이름을 `monalisa`로 변경하려면 열을 생성해 다음 콘텐츠를 포함해야 합니다.

| `model_name`   | `source_url`   | `target_url` | `state` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `rename`

동일한 프로세스를 사용하여 사용자 지정 매핑을 지원하는 각 레코드에 대해 매핑을 만들 수 있습니다. 자세한 내용은 [레코드에 대한 가능한 매핑 표](/enterprise/admin/guides/migrations/reviewing-migration-conflicts#possible-mappings-for-each-record-type)를 참조하세요.

### 수정된 마이그레이션 데이터 적용

1. 변경한 후 [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) 명령을 사용하여 수정된 *conflicts.csv*(또는 올바른 형식의 다른 매핑 *.csv* 파일)를 대상 인스턴스에 적용합니다.

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@HOSTNAME:/home/admin/
    ```

2. `ghe-migrator map` 명령을 사용하여 마이그레이션 데이터를 다시 매핑하고 수정된 *.csv* 파일 및 마이그레이션 GUID에 경로를 전달합니다.

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g MIGRATION-GUID
    ```

3. `ghe-migrator map -i conflicts.csv  -g MIGRATION-GUID` 명령을 사용하여 충돌이 여전히 존재한다고 보고받은 경우 마이그레이션 충돌 해결 프로세스를 다시 실행합니다.
