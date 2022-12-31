---
title: 엔터프라이즈에서 마이그레이션 데이터 내보내기
intro: '플랫폼을 변경하거나 평가판 인스턴스에서 프로덕션 인스턴스로 이동하려면 인스턴스를 준비하고, 리포지토리를 잠그고, 마이그레이션 보관 파일을 생성하여 {% data variables.product.prodname_ghe_server %} 인스턴스에서 마이그레이션 데이터를 내보낼 수 있습니다.'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-enterprise
  - /enterprise/admin/migrations/exporting-migration-data-from-github-enterprise-server
  - /enterprise/admin/migrations/preparing-the-github-enterprise-server-source-instance
  - /enterprise/admin/migrations/exporting-the-github-enterprise-server-source-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-enterprise-source-instance
  - /enterprise/admin/guides/migrations/exporting-the-github-enterprise-source-repositories
  - /enterprise/admin/user-management/exporting-migration-data-from-your-enterprise
  - /admin/user-management/exporting-migration-data-from-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - API
  - Enterprise
  - Migration
shortTitle: Export from your enterprise
ms.openlocfilehash: 0e72232137588cd9da36e55245fa341d0603ca0b
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094291'
---
## {% data variables.product.prodname_ghe_server %} 원본 인스턴스 준비

1. {% data variables.product.prodname_ghe_server %} 원본의 사이트 관리자인지 확인합니다. 이 작업을 수행하는 가장 좋은 방법은 [인스턴스에 SSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)할 수 있는지 확인하는 것입니다.

2. {% data variables.product.prodname_ghe_server %} 원본 인스턴스의 {% data reusables.enterprise_migrations.token-generation %}

{% data reusables.enterprise_migrations.make-a-list %}

## {% data variables.product.prodname_ghe_server %} 원본 리포지토리 내보내기

{% data reusables.enterprise_migrations.locking-repositories %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 내보내기용 리포지토리를 준비하려면 리포지토리의 URL과 함께 `ghe-migrator add` 명령을 사용합니다.
    * 리포지토리를 잠그는 경우 `--lock`과 함께 명령을 추가합니다. 무료 평가판을 실행하는 경우 `--lock`은 필요하지 않습니다.
      ```shell
      $ ghe-migrator add https://HOSTNAME/USERNAME/REPO-NAME --lock
      ```
    * 명령에 `--exclude_attachments`를 추가하여 첨부 파일을 제외할 수 있습니다. {% data reusables.enterprise_migrations.exclude-file-attachments %}
    * 내보내기를 위해 여러 리포지토리를 한 번에 준비하려면 다른 라인에 있는 각 리포지토리 URL을 나열하는 텍스트 파일을 만들고, `-i` 플래그 및 텍스트 파일의 경로와 함께 `ghe-migrator add` 명령을 실행합니다.
      ```shell
      $ ghe-migrator add -i PATH/TO/YOUR/REPOSITORY_URL.txt
      ```

3. 메시지가 표시되면 {% data variables.product.prodname_ghe_server %}의 사용자 이름을 입력합니다.
  ```shell
  Enter username authorized for migration:  admin
  ```
4. {% 데이터 variables.product.pat_generic %}을(를) 묻는 메시지가 표시되면 "[{% 데이터 variables.product.prodname_ghe_server %} 원본 인스턴스 준비](#preparing-the-github-enterprise-server-source-instance)"에서 만든 액세스 토큰을 입력합니다.
  ```shell
  Enter {% data variables.product.pat_generic %}:  **************
  ```
5. `ghe-migrator add`가 완료되면 이 내보내기를 식별하기 위해 생성된 고유의 “마이그레이션 GUID”와 내보내기에 추가된 리소스 목록을 출력합니다. `ghe-migrator add` 이후에 생성된 마이그레이션 GUID 및 동일한 내보내기에서 `ghe-migrator`가 계속 작동하도록 지시하는 `ghe-migrator export` 단계를 사용합니다.
  ```shell
  > 101 models added to export
  > Migration GUID: EXAMPLE-MIGRATION-GUID
  > Number of records in this migration:
  > users                        |  5
  > organizations                |  1
  > repositories                 |  1
  > teams                        |  3
  > protected_branches           |  1
  > pull_request_reviews         |  1
  > milestones                   |  1
  > issues                       |  3
  > pull_requests                |  5
  > pull_request_review_comments |  4
  > commit_comments              |  2
  > issue_comments               | 10
  > issue_events                 | 63
  > releases                     |  3
  > attachments                  |  4
  > projects                     |  2
  ```
  기존 마이그레이션 GUID를 사용하여 새 리포지토리를 추가할 때마다 기존 내보내기가 업데이트됩니다. 마이그레이션 GUID 없이 `ghe-migrator add`를 다시 실행하면 새 내보내기가 시작되고 새 마이그레이션 GUID가 생성됩니다. **가져오기를 위해 마이그레이션 준비를 시작할 때 내보내기 하는 동안 생성된 마이그레이션 GUID는 다시 사용하지 마세요**.

3. 원본 리포지토리를 잠근 경우 `ghe-migrator target_url` 명령을 사용하여 리포지토리의 새 위치에 연결되는 리포지토리 페이지에서 사용자 지정 잠금 메시지를 설정할 수 있습니다. 5단계에서 원본 리포지토리 URL, 대상 리포지토리 URL 및 마이그레이션 GUID를 전달합니다.

  ```shell
  $ ghe-migrator target_url https://HOSTNAME/USERNAME/REPO-NAME https://TARGET-HOSTNAME/TARGET-USER-NAME/TARGET-REPO-NAME -g MIGRATION-GUID
  ```

6. 동일한 내보내기에서 리포지토리를 더 추가하려면 `-g` 플래그와 함께 `ghe-migrator add` 명령을 사용합니다. 5단계에서 새 리포지토리 URL 및 마이그레이션 GUID를 전달합니다.
  ```shell
  $ ghe-migrator add https://HOSTNAME/USERNAME/OTHER-REPO-NAME -g MIGRATION-GUID --lock
  ```
7. 리포지토리 추가를 마쳤으면 `-g` 플래그가 있는 `ghe-migrator export` 명령과 5단계의 마이그레이션 GUID를 사용하여 마이그레이션 보관 파일을 생성합니다.
    ```shell
    $ ghe-migrator export -g MIGRATION-GUID
    > Archive saved to: /data/github/current/tmp/MIGRATION-GUID.tar.gz
    ```
    * {% data reusables.enterprise_migrations.specify-staging-path %}

8. {% 데이터 variables.location.product_location %}에 대한 연결을 닫습니다.
  ```shell
  $ exit
  > logout
  > Connection to HOSTNAME closed.
  ```
9. [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) 명령을 사용하여 마이그레이션 보관 파일을 컴퓨터에 복사합니다. 보관 파일의 이름은 마이그레이션 GUID로 지정됩니다.
  ```shell
  $ scp -P 122 admin@HOSTNAME:/data/github/current/tmp/MIGRATION-GUID.tar.gz ~/Desktop
  ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
