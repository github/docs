---
title: 변경된 파일이 GitHub에 표시되는 방식 사용자 지정
intro: 기본적으로 특정 파일이 diff에 표시되거나 리포지토리 언어에 대해 카운팅되지 않도록 하려면 *.gitattributes* 파일의 `linguist-generated` 특성으로 표시할 수 있습니다.
redirect_from:
  - /articles/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/managing-repository-settings/customizing-how-changed-files-appear-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: How changed files appear
ms.openlocfilehash: 2ba6dc8286cab0ef493289d8ae39283209dae8b4
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145136569'
---
*.gitattributes* 파일을 사용하여 지정된 특성이 있는 지정된 “패턴”과 일치하는 파일을 표시합니다. *.gitattributes* 파일은 _.gitignore_ 파일과 일치하기 위해 동일한 규칙을 사용합니다. 자세한 내용은 Git 설명서의 [패턴 형식](https://www.git-scm.com/docs/gitignore#_pattern_format)을 참조하세요.

1. *.gitattributes* 파일이 아직 없는 경우 리포지토리의 루트에 *.gitattributes* 파일을 만듭니다.
2. 리포지토리의 언어 통계에 대해 무시되고 기본적으로 diff에서 숨겨지려는 경로를 표시하거나 표시 해제하려면 `linguist-generated` 특성을 사용합니다.

  예를 들어 `search/index.json`을 생성된 파일로 표시하려면 *.gitattributes* 에 다음 줄을 추가합니다.

  ```
search/index.json linguist-generated=true
  ```

## 추가 참고 자료
- Linguist 설명서의 “[생성된 코드](https://github.com/github/linguist/blob/master/docs/overrides.md#generated-code)”
- “[새 파일 만들기](/articles/creating-new-files/)”
