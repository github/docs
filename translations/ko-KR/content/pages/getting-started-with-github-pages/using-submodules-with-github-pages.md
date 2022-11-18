---
title: GitHub Pages에서 하위 모듈 사용
intro: '{% data variables.product.prodname_pages %}와 함께 하위 모듈을 사용하여 사이트 코드에 다른 프로젝트를 포함할 수 있습니다.'
redirect_from:
  - /articles/using-submodules-with-pages
  - /articles/using-submodules-with-github-pages
  - /github/working-with-github-pages/using-submodules-with-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Use submodules with Pages
ms.openlocfilehash: cfe863c3a7d77d006ee4c78e9d58302fb01e4dd4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880800'
---
{% data variables.product.prodname_pages %} 사이트의 리포지토리에 하위 모듈이 포함되어 있으면 사이트가 빌드될 때 해당 콘텐츠를 자동으로 풀(pull)합니다.

{% data variables.product.prodname_pages %} 서버는 프라이빗 리포지토리에 액세스할 수 없으므로 퍼블릭 리포지토리를 가리키는 하위 모듈만 사용할 수 있습니다.

중첩된 하위 모듈을 포함하여 하위 모듈에 대한 `https://` 읽기 전용 URL을 사용합니다. _.gitmodules_ 파일에서 이 변경을 수행할 수 있습니다.

## 추가 참고 자료

- _Pro Git_ 설명서의 “[Git 도구 - 하위 모듈](https://git-scm.com/book/en/Git-Tools-Submodules)”
- “[{% data variables.product.prodname_pages %} 사이트에 대한 Jekyll 빌드 오류 문제 해결](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)”
