---
title: 커밋 뷰 간의 차이점
intro: 선택한 보기 메서드에 따라 커밋 기록의 차이가 보일 수도 있습니다.
redirect_from:
  - /articles/differences-between-commit-views
  - /github/committing-changes-to-your-project/differences-between-commit-views
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/differences-between-commit-views
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Commit views
ms.openlocfilehash: 2b5d59d385f815bd09c853e398d372bb4c861650
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145137092'
---
{% data variables.product.product_name %}에서 다음을 통해 리포지토리의 커밋 기록을 볼 수 있습니다.

- 리포지토리의 [커밋 페이지](https://github.com/mozilla/rust/commits/master)로 직접 이동
- 파일을 클릭한 다음 **기록** 을 클릭하여 [특정 파일에 대한 커밋 기록](https://github.com/mozilla/rust/commits/master/README.md)을 가져옵니다.

이 두 개의 커밋 보기는 때때로 _서로 다른_ 정보를 표시할 수 있습니다. 단일 파일의 기록은 리포지토리의 커밋 기록에 있는 커밋을 생략할 수 있습니다.

Git에는 리포지토리의 기록을 표시하는 여러 가지 방법이 있습니다. Git은 단일 파일의 기록을 표시할 때 파일을 변경하지 않은 커밋을 생략하여 기록을 간소화합니다. 모든 커밋을 보고 파일을 터치했는지 여부를 결정하는 대신, 병합할 때 해당 분기가 파일의 최종 내용에 영향을 주지 않으면 Git은 전체 분기를 생략합니다. 파일을 터치한 분기의 커밋은 표시되지 않습니다.

파일의 커밋 기록의 경우 {% data variables.product.product_name %}는 이 간단한 전략을 명시적으로 따릅니다. 최종 결과에 기여하지 않은 커밋을 제거하여 기록을 더 간단하게 만듭니다. 예를 들어 측면 분기를 변경 후 되돌린 경우 해당 커밋은 분기 기록에 표시되지 않습니다. 따라서 파일에 영향을 주는 커밋만 표시되므로 분기를 좀 더 효율적으로 검토할 수 있습니다.

잘린 이 보기에는 사용자가 원하는 정보가 항상 포함되지는 않을 수 있습니다. 전체 기록을 볼 수 있도록 {% data variables.product.product_name %}는 리포지토리의 커밋 페이지에 대한 자세한 정보가 포함된 보기를 제공합니다.

Git에서 커밋 기록을 고려하는 방법에 대한 자세한 내용은 `git log` 도움말 문서의 [“기록 단순화”](https://git-scm.com/docs/git-log#_history_simplification) 섹션을 참조하세요.

## 추가 참고 자료

- “[커밋 서명](/articles/signing-commits)”
- “[커밋 검색](/search-github/searching-on-github/searching-commits)”
