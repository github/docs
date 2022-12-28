---
title: 파일에 대한 영구 링크 가져오기
intro: '{% 데이터 variables.location.product_location %}에서 파일을 볼 때 "y" 키를 눌러 표시되는 정확한 버전의 파일로 URL을 permalink로 업데이트할 수 있습니다.'
redirect_from:
  - /articles/getting-a-permanent-link-to-a-file
  - /articles/how-do-i-get-a-permanent-link-from-file-view-to-permanent-blob-url
  - /articles/getting-permanent-links-to-files
  - /github/managing-files-in-a-repository/getting-permanent-links-to-files
  - /github/managing-files-in-a-repository/managing-files-on-github/getting-permanent-links-to-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Permanent links to files
ms.openlocfilehash: 21ba04eb41e5f32a2eca44616593827eeb7604d0
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099293'
---
{% tip %}

**팁**: {% data variables.product.product_name %}의 페이지에서 “?”를 눌러 사용 가능한 모든 바로 가기 키를 확인합니다.

{% endtip %}

## 파일 보기는 분기에 최신 버전을 표시합니다.

{% 데이터 variables.location.product_location %}에서 파일을 볼 때 일반적으로 분기의 현재 헤드에 버전이 표시됩니다.  예를 들면 다음과 같습니다.

* [https://github.com/github/codeql/blob/**main**/README.md](https://github.com/github/codeql/blob/main/README.md)

GitHub의 `codeql` 리포지토리를 참조하고`main`에는 분기의 현재 버전의 `README.md` 파일이 표시됩니다.

분기의 헤드에 있는 파일의 버전은 새 커밋이 만들어질 때 변경될 수 있으므로 일반 URL을 복사하는 경우 나중에 누군가가 볼 때 파일 내용이 동일하지 않을 수 있습니다.

## <kbd>Y</kbd> 키를 눌러 특정 커밋의 파일에 대한 고정 링크

표시되는 특정 파일 버전에 대한 영구 링크의 경우 URL(예: 위 예제의 `main` 부분)에 분기 이름을 사용하는 대신 커밋 ID를 입력합니다. 그러면 해당 커밋의 정확한 파일 버전에 영구적으로 연결됩니다.  예를 들면 다음과 같습니다.

* [https://github.com/github/codeql/blob/**b212af08a6cffbb434f3c8a2795a579e092792fd**/README.md](https://github.com/github/codeql/blob/b212af08a6cffbb434f3c8a2795a579e092792fd/README.md)

`main`은(는) 특정 커밋 ID로 바뀌고 파일 콘텐츠는 변경되지 않습니다.

그러나 직접 커밋 SHA를 조회하는 것은 불편하므로 바로 가기로 <kbd>y</kbd>를 입력하여 URL을 고정 링크 버전으로 자동으로 업데이트할 수 있습니다.  그런 다음, URL을 공유하는 모든 사용자가 본 내용을 정확하게 볼 수 있다는 것을 알고 URL을 복사할 수 있습니다.

{% tip %}

**팁**: 분기 이름, 특정 커밋 SHA 또는 태그를 포함하여 URL에서 커밋으로 확인할 수 있는 식별자를 배치할 수 있습니다.

{% endtip %}

## 코드 조각에 대한 고정 링크 만들기

파일 또는 끌어오기 요청의 특정 버전에서 특정 줄 또는 코드 줄 범위에 대한 영구 링크를 만들 수 있습니다. 자세한 내용은 “[코드 조각에 대한 영구 링크 만들기](/articles/creating-a-permanent-link-to-a-code-snippet/)”를 참조하세요.

## 추가 참고 자료

- “[GitHub 리포지토리 보관](/articles/archiving-a-github-repository)”
