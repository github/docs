---
title: 마이그레이션 정보
intro: '마이그레이션은 원본 위치({% data variables.product.prodname_dotcom_the_website %} 조직 또는 {% data variables.product.prodname_ghe_server %} 인스턴스 중 하나)에서 대상 {% data variables.product.prodname_ghe_server %} 인스턴스로 데이터를 전송하는 프로세스입니다.  마이그레이션을 사용하여 플랫폼을 변경하거나 인스턴스에서 하드웨어를 업그레이드할 때 데이터를 전송할 수 있습니다.'
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
ms.openlocfilehash: 08c736c4e183a42aca7d15c7313547754cc6ac0d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098813'
---
## 마이그레이션 유형

수행할 수 있는 마이그레이션에는 세 가지 유형이 있습니다.

- {% data variables.product.prodname_ghe_server %} 인스턴스에서 다른 {% data variables.product.prodname_ghe_server %} 인스턴스로 마이그레이션합니다. 인스턴스의 모든 사용자 또는 조직이 소유한 리포지토리 수를 마이그레이션할 수 있습니다. 마이그레이션을 수행하기 전에 두 인스턴스에 대한 사이트 관리자 액세스 권한이 있어야 합니다.
- {% data variables.product.prodname_dotcom_the_website %} 조직에서 {% data variables.product.prodname_ghe_server %} 인스턴스로 마이그레이션합니다. 조직에서 소유한 리포지토리를 원하는 수만큼 마이그레이션할 수 있습니다. 마이그레이션을 수행하기 전에 {% data variables.product.prodname_dotcom_the_website %} 조직에 대한 [관리 액세스 권한](/enterprise/user/articles/permission-levels-for-an-organization/)과 대상 인스턴스에 대한 사이트 관리자 액세스 권한이 있어야 합니다.
- *평가판 실행* 은 [준비 인스턴스](/enterprise/admin/guides/installation/setting-up-a-staging-instance/)로 데이터를 가져오는 마이그레이션입니다. 이는 마이그레이션이 {% 데이터 variables.location.product_location %}에 적용된 *경우 어떤 일이* 발생하는지 확인하는 데 유용할 수 있습니다. **프로덕션 인스턴스로 데이터를 가져오기 전에 스테이징 인스턴스에서 평가판을 실행하는 것이 좋습니다.**

## 마이그레이션된 데이터

마이그레이션에서는 모든 것이 리포지토리를 중심으로 진행됩니다. 리포지토리와 연결된 대부분의 데이터를 마이그레이션할 수 있습니다. 예를 들어 조직 내의 리포지토리는 리포지토리 *및* 조직뿐만 아니라 리포지토리에 연결된 모든 사용자, 팀, 문제 및 끌어오기 요청을 마이그레이션합니다.

아래 표의 항목은 리포지토리를 사용하여 마이그레이션할 수 있습니다. {% data variables.large_files.product_name_short %} 자산을 포함하여 마이그레이션된 데이터 목록에 표시되지 않는 모든 항목을 마이그레이션할 수 없습니다.

{% data reusables.enterprise_migrations.fork-persistence %}

|  마이그레이션된 리포지토리와 연결된 데이터 | 참고  |
|---------------------------------------------|--------|
| 사용자 | 사용자의 **@mentions** 이 대상과 일치하도록 재작성되었습니다.
| 조직 | 조직의 이름과 세부 정보가 마이그레이션됩니다.
| 리포지토리 | 대상과 일치하도록 Git 트리, Blob, 커밋 및 라인에 대한 링크를 다시 작성합니다. 마이그레이터는 최대 3개의 리포지토리 리디렉션을 팔로우합니다. 내부 리포지토리는 프라이빗 리포지토리로 마이그레이션됩니다. 보관 상태는 설정되지 않습니다.
| Wikis | 모든 Wiki 데이터가 마이그레이션됩니다.
| Teams | 사용자의 **@mentions** 이 대상과 일치하도록 재작성되었습니다.
| 마일스톤 | 타임스탬프는 유지됩니다.
| 프로젝트 보드 | 리포지토리 및 리포지토리를 소유한 조직과 연결된 프로젝트 보드가 마이그레이션됩니다.
| 문제 | 문제 참조 및 타임스탬프는 유지됩니다.
| 문제 설명 | 설명에 대한 상호 참조는 대상 인스턴스에 대해 다시 작성됩니다.
| 끌어오기 요청 | 끌어오기 요청에 대한 상호 참조는 대상과 일치하도록 다시 작성됩니다. 타임스탬프는 유지됩니다.
| 끌어오기 요청 검토 | 끌어오기 요청 검토 및 관련 데이터가 마이그레이션됩니다.
| 끌어오기 요청 검토 설명 | 설명에 대한 상호 참조는 대상 인스턴스에 대해 다시 작성됩니다. 타임스탬프는 유지됩니다.
| 커밋 설명 | 설명에 대한 상호 참조는 대상 인스턴스에 대해 다시 작성됩니다. 타임스탬프는 유지됩니다.
| 릴리스 | 모든 릴리스 데이터가 마이그레이션됩니다.
| 끌어오기 요청 또는 문제에 대해 수행된 작업 | 끌어오기 요청 또는 문제(예: 사용자 할당, 제목 변경 및 레이블 수정)에 대한 모든 수정 사항은 각 작업에 대한 타임스탬프와 함께 유지됩니다.
|  첨부 파일 | [문제 및 끌어오기 요청에 대한 첨부 파일](/articles/file-attachments-on-issues-and-pull-requests)은 마이그레이션됩니다. 마이그레이션의 일부로 이 기능을 사용하지 않도록 설정할 수 있습니다.
| Webhook | 활성 웹후크만 마이그레이션됩니다.
| 리포지토리 배포 키 | 리포지토리 배포 키가 마이그레이션됩니다.
| 보호된 분기 | 보호된 분기 설정 및 연결된 데이터가 마이그레이션됩니다.
