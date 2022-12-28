---
title: 위키 정보
intro: 리포지토리에 대한 설명서를 wiki에 호스트하여 다른 사용자가 사용하고 프로젝트에 참여할 수 있습니다.
redirect_from:
  - /articles/about-github-wikis
  - /articles/about-wikis
  - /github/building-a-strong-community/about-wikis
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 71d5b7c074247a0deaff74a3101425e49d31ad59
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099350'
---
{% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 모든 리포지토리에는 위키라는 문서를 호스팅하기 위한 섹션이 제공됩니다. 리포지토리의 wiki를 사용하여 프로젝트 사용 방법, 프로젝트를 설계한 방법 또는 핵심 원칙 등 프로젝트에 대한 긴 형식의 콘텐츠를 공유할 수 있습니다. 추가 정보 파일을 참조하면 프로젝트의 용도를 빠르게 파악할 수 있는 반면에 wiki를 사용하면 추가 문서를 제공할 수 있습니다. 자세한 내용은 “[추가 정보](/articles/about-readmes)”를 참조하세요.

wiki를 사용하면 {% data variables.product.product_name %}의 다른 곳과 마찬가지로 콘텐츠를 작성할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 쓰기 및 서식 지정 시작](/articles/getting-started-with-writing-and-formatting-on-github)”을 참조하세요. [오픈 소스 Markup 라이브러리](https://github.com/github/markup)를 사용하여 다양한 형식을 HTML로 변환하므로 Markdown 또는 지원되는 다른 형식으로 작성하도록 선택할 수 있습니다. 

{% data reusables.getting-started.math-and-diagrams %}

{% ifversion fpt 또는 ghes 또는 ghec %} 공용 리포지토리에서 위키를 만드는 경우 {% ifversion ghes %}에 액세스할 수 있는 모든 사용자가 {% 데이터 variables.location.product_location %}{% else %}public{% endif %}에 액세스할 수 있습니다. {% endif %}프라이빗{% ifversion ghec or ghes %} 또는 내부{% endif %} 리포지토리에서 wiki를 작성한 경우 해당 리포지토리에 대한 액세스 권한이 있는 {% ifversion fpt or ghes or ghec %}사람{% elsif ghae %}엔터프라이즈 구성원{% endif %}만 wiki에 액세스할 수 있습니다. 자세한 내용은 “[리포지토리 표시 여부 설정](/articles/setting-repository-visibility)”을 참조하세요.

{% data variables.product.product_name %}에서 직접 wiki를 편집하거나 wiki 파일을 로컬로 편집할 수 있습니다. 기본적으로 리포지토리에 대한 쓰기 액세스 권한이 있는 사용자만 위키를 변경할 수 있습니다. {% 데이터 variables.location.product_location %}의 모든 사용자가 내부{% else %}a public{% endif %} 리포지토리의 {% ifversion ghae %}에서 wiki에 기여할 수 있도록 허용할 수 있습니다. 자세한 내용은 “[wiki에 대한 액세스 권한 변경](/communities/documenting-your-project-with-wikis/changing-access-permissions-for-wikis)”을 참조하세요.

{% note %}

**참고:** 검색 엔진은 wiki의 내용을 인덱싱하지 않습니다. 검색 엔진에서 콘텐츠를 인덱싱하려면 퍼블릭 리포지토리에서 [{% data variables.product.prodname_pages %}](/pages)를 사용할 수 있습니다.

{% endnote %}

## 추가 참고 자료

- “[ 페이지 추가 또는 편집](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)”
- “[wiki에 대한 바닥글 또는 사이드바 만들기](/communities/documenting-your-project-with-wikis/creating-a-footer-or-sidebar-for-your-wiki)”
- “[wiki 콘텐츠 편집](/communities/documenting-your-project-with-wikis/editing-wiki-content)”
- “[wiki의 변경 기록 보기](/articles/viewing-a-wiki-s-history-of-changes)”
- “[wiki 검색](/search-github/searching-on-github/searching-wikis)”
