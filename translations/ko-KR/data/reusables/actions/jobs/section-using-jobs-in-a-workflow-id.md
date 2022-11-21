---
ms.openlocfilehash: dd25f74bf039724130494c7bd4d55e44760f620b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114228"
---
`jobs.<job_id>`를 사용하여 작업에 고유 식별자를 지정합니다. `job_id` 키는 문자열이고 해당 값은 작업 구성 데이터 맵입니다. `<job_id>`를 `jobs` 개체에 고유한 문자열로 바꿔야 합니다. `<job_id>`는 문자 또는 `_`로 시작해야 하며 영숫자, `-` 또는 `_`만 포함해야 합니다.

#### 예: 작업 만들기

이 예제에서는 두 개의 작업이 생성되었으며 해당 `job_id` 값은 `my_first_job`과 `my_second_job`입니다.

```yaml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```
