---
title: 종속성 제출
intro: 종속성 제출 API를 사용하면 프로젝트에 대해 프로젝트를 빌드하거나 컴파일할 때 확인되는 종속성과 같은 종속성을 제출할 수 있습니다.
versions:
  feature: dependency-submission-api
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 72ffb8376c33972ab02c0a5fb48504b92fef3cec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080740'
---
## 종속성 제출 API 정보

{% data reusables.dependency-submission.dependency-submission-api-beta %}

{% data reusables.dependency-submission.about-dependency-submission %}

종속성은 스냅샷 형식으로 종속성 제출 API에 제출됩니다. 스냅샷은 커밋 SHA 및 기타 메타데이터와 연결된 종속성 집합으로, 커밋에 대한 리포지토리의 현재 상태를 반영합니다.  미리 만들어진 작업을 사용하거나 프로젝트를 빌드할 때마다 고유한 작업을 만들어 종속성을 필요한 형식으로 종속성 제출 API에 제출할 수 있습니다. 종속성 제출 API 사용에 대한 자세한 내용은 “[종속성 제출 API 사용](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)”을 참조하세요.

종속성 그래프에 포함할 종속성 제출 API에 여러 종속성 집합을 제출할 수 있습니다. 이 API는 스냅샷의 `job.correlator` 속성 및 `detector.name` 범주를 사용하여 각 워크플로에 대한 최신 제출이 표시되도록 합니다. `correlator` 속성 자체는 독립적인 제출을 고유하게 유지하는 데 사용하는 기본 필드입니다. 예를 들어 `correlator`은 작업 실행 `<GITHUB_WORKFLOW> <GITHUB_JOB>`에서 사용할 수 있는 두 변수의 간단한 조합일 수 있습니다.
