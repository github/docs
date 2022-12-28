---
title: GitHub 페이지 사이트에 대한 Jekyll 빌드 오류 문제 해결
intro: 'Jekyll 빌드 오류 메시지를 사용하여 {% data variables.product.prodname_pages %} 사이트의 문제를 해결할 수 있습니다.'
redirect_from:
  - /articles/page-build-failed-missing-docs-folder
  - /articles/page-build-failed-invalid-submodule
  - /articles/page-build-failed-missing-submodule
  - /articles/page-build-failed-markdown-errors
  - /articles/page-build-failed-config-file-error
  - /articles/page-build-failed-unknown-tag-error
  - /articles/page-build-failed-tag-not-properly-terminated
  - /articles/page-build-failed-tag-not-properly-closed
  - /articles/page-build-failed-file-does-not-exist-in-includes-directory
  - /articles/page-build-failed-file-is-a-symlink
  - /articles/page-build-failed-symlink-does-not-exist-within-your-sites-repository
  - /articles/page-build-failed-file-is-not-properly-utf-8-encoded
  - /articles/page-build-failed-invalid-post-date
  - /articles/page-build-failed-invalid-sass-or-scss
  - /articles/page-build-failed-invalid-highlighter-language
  - /articles/page-build-failed-relative-permalinks-configured
  - /articles/page-build-failed-syntax-error-in-for-loop
  - /articles/page-build-failed-invalid-yaml-in-data-file
  - /articles/page-build-failed-date-is-not-a-valid-datetime
  - /articles/troubleshooting-github-pages-builds
  - /articles/troubleshooting-jekyll-builds
  - /articles/troubleshooting-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Troubleshoot Jekyll errors
ms.openlocfilehash: 224f626df144ad249a799767984118778202e7b4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883467'
---
## 빌드 오류 문제 해결

Jekyll이 로컬로 또는 {% data variables.product.product_name %}에서 {% data variables.product.prodname_pages %} 사이트를 빌드하는 동안 오류가 발생하면 오류 메시지를 사용하여 문제를 해결할 수 있습니다. 오류 메시지 및 오류 메시지를 보는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트의 Jekyll 빌드 오류 정보](/articles/about-jekyll-build-errors-for-github-pages-sites)”를 참조하세요.

일반적인 오류 메시지를 받은 경우 일반적인 문제를 확인하세요.
- 지원되지 않는 플러그 인을 사용하고 있습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 및 Jekyll 정보](/articles/about-github-pages-and-jekyll#plugins)”를 참조하세요.{% ifversion fpt or ghec %}
- 리포지토리가 리포지토리 크기 제한을 초과했습니다. 자세한 내용은 “[내 디스크 할당량이란?](/articles/what-is-my-disk-quota)”을 참조하세요.{% endif %}
- *_config.yml* 파일에서 `source` 설정을 변경했습니다. {% ifversion pages-custom-workflow %}분기에서 사이트를 게시하는 경우 {% endif %}{% data variables.product.prodname_pages %}이(가) 빌드 프로세스 중에 이 설정을 재정의합니다.
- 게시된 파일의 파일 이름에 지원되지 않는 콜론(`:`)이 있습니다.

특정 오류 메시지를 받은 경우 아래 오류 메시지에 대한 문제 해결 정보를 검토하세요.

{% ifversion pages-custom-workflow %}오류를 수정한 후 사이트의 원본 분기로 변경 내용을 푸시하거나(분기에서 게시하는 경우) 사용자 지정 {% data variables.product.prodname_actions %} 워크플로를 트리거하여 다른 빌드를 트리거합니다({% data variables.product.prodname_actions %}을 사용하여 게시하는 경우).{% else %}오류를 수정한 후 사이트의 게시 원본에 변경 내용을 푸시하여 {% data variables.product.product_name %}에서 다른 빌드를 트리거합니다.{% endif %}

## 구성 파일 오류

이 오류는 *_config.yml* 파일에 구문 오류가 포함되어 있으므로 사이트를 빌드하지 못했음을 의미합니다.

문제를 해결하려면 *_config.yml* 파일이 다음 규칙을 따르는지 확인합니다.

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

## 날짜가 유효한 날짜/시간이 아님

이 오류는 사이트의 페이지 중 하나에 잘못된 날짜/시간이 포함되어 있음을 의미합니다.

문제를 해결하려면 오류 메시지의 파일과 파일의 레이아웃에서 날짜 관련 Liquid 필터에 대한 호출을 검색합니다. 날짜 관련 Liquid 필터에 전달된 모든 변수에 모든 경우에 값이 있고 `nil` 또는 `""`를 전달하지 않는지 확인합니다. 자세한 내용은 Liquid 설명서의 “[Liquid 필터](https://help.shopify.com/en/themes/liquid/filters)”를 참조하세요.

## 포함 디렉터리에 파일이 없음

이 오류는 코드가 *_includes* 디렉터리에 없는 파일을 참조한다는 의미입니다.

{% data reusables.pages.search-for-includes %} 참조한 파일이 *_includes 디렉터리* 에 없는 경우 파일을 복사하거나 *_includes* 디렉터리로 이동합니다.

## 파일이 symlink임

이 오류는 코드가 사이트의 게시된 파일에 존재하지 않는 가기 링크(symlink)된 파일을 참조함을 의미합니다.

{% data reusables.pages.search-for-includes %} 참조한 파일이 symlink된 경우 파일을 복사하거나 *_includes* 디렉터리로 이동합니다.

## 파일이 UTF-8로 제대로 인코딩되지 않았습니다.

이 오류는 컴퓨터가 이러한 기호를 예상하도록 지시하지 않고 `日本語`과 같은 라틴 문자가 아닌 문자를 사용했음을 의미합니다.

문제를 해결하려면 *_config.yml* 파일에 다음 줄을 추가하여 UTF-8 인코딩을 강제 실행하세요.
```yaml
encoding: UTF-8
```

## 잘못된 강조 표시자 언어

이 오류는 구성 파일에 [Rouge](https://github.com/jneen/rouge) 또는 [Pygments](http://pygments.org/) 이외의 구문 강조 표시자를 지정했음을 의미합니다.

문제를 해결하려면 *_config.yml* 파일을 업데이트하여 [Rouge](https://github.com/jneen/rouge) 또는 [Pygments](http://pygments.org/)를 지정하세요. 자세한 내용은 “[{% data variables.product.product_name %} 및 Jekyll 정보](/articles/about-github-pages-and-jekyll#syntax-highlighting)”를 참조하세요.

## 잘못된 게시 날짜

이 오류는 사이트의 게시물에 파일 이름 또는 YAML 전문에 잘못된 날짜가 포함되어 있음을 의미합니다.

문제를 해결하려면 모든 날짜가 UTC의 YYYY-MM-DD HH:MM:SS 형식이고 실제 달력 날짜인지 확인합니다. UTC에서 오프셋이 있는 표준 시간대를 지정하려면 YYYY-MM-DD HH:MM:SS +/-TTTT 형식(예: `2014-04-18 11:30:00 +0800`)을 사용합니다.

*_config.yml* 파일에서 날짜 형식을 지정하는 경우 형식이 올바른지 확인합니다.

## 잘못된 Sass 또는 SCSS

이 오류는 리포지토리에 잘못된 콘텐츠가 있는 Sass 또는 SCSS 파일이 포함되어 있음을 의미합니다.

문제를 해결하려면 오류 메시지에 포함된 줄 번호에서 잘못된 Sass 또는 SCSS를 검토합니다. 향후 오류를 방지하려면 원하는 텍스트 편집기를 위해 Sass 또는 SCSS Linter를 설치합니다.

## 잘못된 하위 모듈

이 오류는 리포지토리에 제대로 초기화되지 않은 하위 모듈이 포함되어 있음을 의미합니다.

{% data reusables.pages.remove-submodule %}

하위 모듈을 사용하려면 하위 모듈(`http://` 아님)을 참조할 때 `https://`를 사용하고 하위 모듈이 퍼블릭 리포지토리에 있는지 확인합니다.

## 데이터 파일의 잘못된 YAML

이 오류는 *_data* 폴더에 있는 하나 이상의 파일에 잘못된 YAML이 포함되어 있음을 의미합니다.

문제를 해결하려면 *_data* 폴더의 YAML 파일이 다음 규칙을 따르는지 확인합니다.

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

Jekyll 데이터 파일에 대한 자세한 내용은 Jekyll 설명서의 “[데이터 파일](https://jekyllrb.com/docs/datafiles/)”을 참조하세요.

## Markdown 오류

이 오류는 리포지토리에 Markdown 오류가 포함되어 있음을 의미합니다.

문제를 해결하려면 지원되는 Markdown 프로세서를 사용하고 있는지 확인합니다. 자세한 내용은 “[Jekyll을 사용하여 {% data variables.product.prodname_pages %} 사이트에 대한 Markdown 프로세서 설정](/articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll)”을 참조하세요.

그런 다음 오류 메시지의 파일이 유효한 Markdown 구문을 사용하는지 확인합니다. 자세한 내용은 Daring Fireball의 “[Markdown: 구문](https://daringfireball.net/projects/markdown/syntax)”을 참조하세요.

## 문서 폴더 누락

이 오류는 분기의 `docs` 폴더를 게시 원본으로 선택했지만 해당 분기의 리포지토리 루트에 `docs` 폴더가 없음을 의미합니다.

문제를 해결하려면 `docs` 폴더가 실수로 이동된 경우 게시 원본에서 선택한 분기의 리포지토리 루트로 `docs` 폴더를 다시 이동하세요. `docs` 폴더가 실수로 삭제된 경우 다음 중 하나를 수행할 수 있습니다.
- Git을 사용하여 삭제를 되돌리거나 실행 취소합니다. 자세한 내용은 Git 설명서의 “[git-revert](https://git-scm.com/docs/git-revert.html)”를 참조하세요.
- 게시 원본에 대해 선택한 분기의 리포지토리 루트에 새 `docs` 폴더를 만들고 사이트의 원본 파일을 폴더에 추가합니다. 자세한 내용은 “[새 파일 만들기](/articles/creating-new-files)”를 참조하세요.
- 게시 원본을 변경합니다. 자세한 내용은 “[{% data variables.product.prodname_pages %}에 대한 게시 원본 구성](/articles/configuring-a-publishing-source-for-github-pages)”을 참조하세요.

## 누락된 하위 모듈

이 오류는 리포지토리에 존재하지 않거나 제대로 초기화되지 않은 하위 모듈이 포함되어 있음을 의미합니다.

{% data reusables.pages.remove-submodule %}

하위 모듈을 사용하려면 이를 초기화하세요. 자세한 내용은 [Pro Git](https://git-scm.com/book/en/v2/Git-Tools-Submodules) 책의 “_Git 도구 - 하위 모듈_”을 참조하세요.

## 구성된 상대 고정 링크

이 오류는 *_config.yml* 파일에 {% data variables.product.prodname_pages %}에서 지원하지 않는 상대 고정 링크가 있음을 의미합니다.

고정 링크는 사이트의 특정 페이지를 참조하는 영구적인 URL입니다. 절대 고정 링크는 사이트의 루트로 시작하는 반면 상대 고정 링크는 참조 페이지가 포함된 폴더에서 시작합니다. {% data variables.product.prodname_pages %} 및 Jekyll은 더 이상 상대 고정 링크를 지원하지 않습니다. 고정 링크에 대한 자세한 내용은 Jekyll 문서의 “[고정 링크](https://jekyllrb.com/docs/permalinks/)”를 참조하세요.

문제를 해결하려면 *_config.yml* 파일에서 `relative_permalinks` 줄을 제거하고 사이트의 모든 상대 고정 링크를 절대 고정 링크로 다시 서식 지정하세요. 자세한 내용은 “[파일 편집](/repositories/working-with-files/managing-files/editing-files)”을 참조하세요.

## 사이트의 리포지토리에 Symlink가 존재하지 않음

이 오류는 사이트에 게시된 파일에 존재하지 않는 바로 가기 링크(symlink)가 사이트에 포함되어 있음을 의미합니다. 바로 가기 링크에 대한 자세한 내용은 Wikipedia의 “[바로 가기 링크](https://en.wikipedia.org/wiki/Symbolic_link)”를 참조하세요.

문제를 해결하려면 오류 메시지의 파일이 사이트를 구축하는 데 사용되는지 확인합니다. 그렇지 않은 경우 또는 파일을 바로 가기 링크로 사용하지 않으려면 파일을 삭제하세요. 사이트를 구축하는 데 바로 가기 링크 파일이 필요한 경우 바로 가기 링크가 참조하는 파일이나 디렉터리가 사이트의 게시된 파일에 있는지 확인하세요. 외부 자산을 포함하려면 {% ifversion fpt or ghec %}`git submodule` 또는 {% endif %}[Bower](https://bower.io/)와 같은 타사 패키지 관리자를 사용하는 것이 좋습니다.{% ifversion fpt or ghec %} 자세한 내용은 “[{% data variables.product.prodname_pages %}를 사용하여 하위 모듈 사용](/articles/using-submodules-with-github-pages)”을 참조하세요.{% endif %}

## ‘for’ 루프의 구문 오류

이 오류는 코드에 Liquid `for` 루프 선언에 잘못된 구문이 포함되어 있음을 의미합니다.

문제를 해결하려면 오류 메시지의 파일에 있는 모든 `for` 루프에 올바른 구문이 있는지 확인하세요. `for` 루프의 적절한 구문에 대한 자세한 내용은 Liquid 문서의 “[반복 태그](https://help.shopify.com/en/themes/liquid/tags/iteration-tags#for)”를 참조하세요.

## 태그가 제대로 닫혀 있지 않음

이 오류 메시지는 코드에 제대로 닫혀 있지 않은 논리 태그가 포함되어 있음을 의미합니다. 예를 들어 {% raw %}`{% capture example_variable %}`은 `{% endcapture %}`{% endraw %}로 닫아야 합니다.

문제를 해결하려면 오류 메시지의 파일에 있는 모든 논리 태그가 제대로 닫혀 있는지 확인하세요. 자세한 내용은 Liquid 설명서의 “[Liquid 태그](https://help.shopify.com/en/themes/liquid/tags)”를 참조하세요.

## 태그가 제대로 종료되지 않음

이 오류는 코드에 제대로 종료되지 않은 출력 태그가 포함되어 있음을 의미합니다. 예를 들어 `{{ page.title }}`{% endraw %} 대신 {% raw %}`{{ page.title }`인 경우입니다.

문제를 해결하려면 오류 메시지의 파일에 있는 모든 출력 태그가 `}}`로 종료되었는지 확인하십시오. 자세한 내용은 Liquid 설명서의 “[Liquid 개체](https://help.shopify.com/en/themes/liquid/objects)”를 참조하세요.

## 알 수 없는 태그 오류

이 오류는 코드에 인식할 수 없는 Liquid 태그가 포함되어 있음을 의미합니다.

문제를 해결하려면 오류 메시지의 파일에 있는 모든 Liquid 태그가 Jekyll의 기본 변수와 일치하고 태그 이름에 오타가 없는지 확인합니다. 기본 변수 목록은 Jekyll 설명서의 “[변수](https://jekyllrb.com/docs/variables/)”를 참조하세요.

지원되지 않는 플러그 인은 인식할 수 없는 태그의 일반적인 원본입니다. 사이트를 로컬에서 생성하고 고정 파일을 {% data variables.product.product_name %}에 푸시하여 사이트에서 지원되지 않는 플러그 인을 사용하는 경우 플러그 인이 Jekyll의 기본 변수에 없는 태그를 도입하고 있지 않은지 확인하세요. 지원되는 플러그 인 목록은 “[{% data variables.product.prodname_pages %} 및 Jekyll 정보](/articles/about-github-pages-and-jekyll#plugins)”를 참조하세요.
