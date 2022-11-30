---
title: Jekyll을 사용하여 GitHub 페이지 사이트에 대한 Markdown 프로세서 설정
intro: 'Markdown 프로세서를 선택하여 {% data variables.product.prodname_pages %} 사이트에서 Markdown을 렌더링하는 방법을 결정할 수 있습니다.'
redirect_from:
  - /articles/migrating-your-pages-site-from-maruku
  - /articles/updating-your-markdown-processor-to-kramdown
  - /articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Set Markdown processor
ms.openlocfilehash: 218877ee598afd47352d1e72a2ecb845f901c8b9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145137856'
---
리포지토리에 대한 쓰기 권한이 있는 사용자는 {% data variables.product.prodname_pages %} 사이트에 대한 Markdown 프로세서를 설정할 수 있습니다.

{% data variables.product.prodname_pages %}는 [kramdown](http://kramdown.gettalong.org/) 및 {% data variables.product.prodname_dotcom %}의 자체 Markdown 프로세서를 지원하며, 이는 {% data variables.product.product_name %}를 통해 [GFM({% data variables.product.prodname_dotcom %} Flavored Markdown) ](https://github.github.com/gfm/)을 렌더링하는 데 사용됩니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 쓰기 및 서식 지정 정보](/articles/about-writing-and-formatting-on-github)”를 참조하세요.

{% data variables.product.prodname_dotcom %} Flavored Markdown을 두 프로세서에서 모두 사용할 수 있지만 GFM 프로세서만 {% data variables.product.product_name %}에 표시되는 결과와 항상 일치합니다.

{% data reusables.pages.navigate-site-repo %}
2. 리포지토리에서 *_config.yml* 파일을 검색합니다.
{% data reusables.repositories.edit-file %}
4. `markdown:`로 시작하는 줄을 찾아 값을 `kramdown` 또는 `GFM`으로 변경합니다.
  ![config.yml의 Markdown 설정](/assets/images/help/pages/config-markdown-value.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## 추가 참고 자료

- [kramdown 설명서](https://kramdown.gettalong.org/documentation.html)
- [{% data variables.product.prodname_dotcom %} Flavored Markdown 사양](https://github.github.com/gfm/)
