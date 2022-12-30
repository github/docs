---
title: Git 데이터베이스 API 시작
intro: 'Git 데이터베이스 API를 사용하면 {% data variables.product.product_name %}에서 Git 데이터베이스에 원시 Git 개체를 읽고 쓰고 참조(분기 헤드 및 태그)를 나열하고 업데이트할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Get started - Git Database API
ms.openlocfilehash: b7044e299602de42a2c880df8da4a6f19ef9334b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135921'
---
## 개요 

기본적으로 데이터베이스에 직접 원시 개체를 만들고 분기 참조를 업데이트하여 Git을 설치하지 않고도 Git에서 수행할 수 있는 모든 작업을 기술적으로 수행할 수 있으므로 API를 통해 많은 Git 기능을 다시 구현할 수 있습니다.

Git 데이터베이스 API 함수는 Git 리포지토리가 비어 있거나 사용할 수 없는 경우 `409 Conflict`를 반환합니다.  사용할 수 없는 리포지토리는 일반적으로 {% data variables.product.product_name %}이(가) 리포지토리를 만드는 중임을 의미합니다. 빈 리포지토리의 경우 “[파일 콘텐츠 만들기 또는 업데이트](/rest/reference/repos#create-or-update-file-contents)” 엔드포인트를 사용하여 콘텐츠를 만들고 Git 데이터베이스 API를 사용할 수 있도록 리포지토리를 초기화할 수 있습니다. 이 응답 상태가 지속되면 {% data variables.contact.contact_support %}에 문의하세요.

![Git 데이터베이스 개요](/assets/images/git-database-overview.png)

Git 개체 데이터베이스에 대한 자세한 내용은 Pro Git 책의 [Git Internals](http://git-scm.com/book/en/v1/Git-Internals) 챕터를 참조하세요.

예를 들어 리포지토리의 파일에 대한 변경 내용을 커밋하려는 경우 다음을 수행합니다.

* 현재 커밋 개체 가져오기
* 가리키는 트리 검색
* 해당 특정 파일 경로에 대해 트리에 있는 Blob 개체의 콘텐츠 검색
* 어떻게든 콘텐츠를 변경하고 새 콘텐츠가 포함된 새 Blob 개체를 게시하여 Blob SHA 다시 가져오기
* 해당 파일 경로 포인터가 트리 SHA를 다시 가져오는 새 Blob SHA로 대체된 새 트리 개체 게시
* 현재 커밋 SHA를 부모 및 새 트리 SHA로 사용하여 새 커밋 개체를 만들고 커밋 SHA 다시 가져오기
* 새 커밋 SHA를 가리키도록 분기 참조 업데이트

복잡해 보일 수 있지만 모델을 이해하고 API로 할 수 있는 많은 작업을 열면 실제로 매우 간단합니다.

## 끌어오기 요청의 병합 가능성 확인

{% warning %}

**경고** 이 콘텐츠는 경고 없이 오래되었으므로 `merge` Git 참조 업데이트를 위해 Git을 직접 사용하거나 [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/rest/reference/git#get-a-reference)를 사용하지 마세요.

{% endwarning %}

소비 API는 테스트 병합 커밋을 만들기 위해 끌어오기 요청을 명시적으로 요청해야 합니다. 테스트 병합 커밋은 UI에서 끌어오기 요청을 보고 “병합” 단추가 표시되거나 REST API를 사용하여 끌어오기 요청을 [가져오거나](/rest/reference/pulls#get-a-pull-request), [만들거나](/rest/reference/pulls#create-a-pull-request), [편집](/rest/reference/pulls#update-a-pull-request)할 때 만들어집니다. 이 요청이 없으면 다음에 누군가가 끌어오기 요청을 볼 때까지 `merge` Git 참조가 만료됩니다.

현재 오래된 `merge` Git 참조를 생성하는 폴링 메서드를 사용하는 경우 GitHub는 다음 단계를 사용하여 기본 분기에서 최신 변경 내용을 가져오는 것이 좋습니다.

1. 끌어오기 요청 웹후크를 받습니다.
2. 병합 커밋 후보를 만들기 위한 백그라운드 작업을 시작하려면 [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request)를 호출합니다.
3. [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request)를 사용하여 리포지토리를 폴링하여 `mergeable` 특성이 `true` 또는 `false`인지 확인합니다. Git을 직접 사용하거나 이전 단계를 수행한 후에만 `merge` Git 참조에 대한 업데이트를 위해 [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/rest/reference/git#get-a-reference)를 사용할 수 있습니다.
