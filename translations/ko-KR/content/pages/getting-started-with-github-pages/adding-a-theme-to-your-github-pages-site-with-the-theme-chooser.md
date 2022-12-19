---
title: 테마 선택기를 사용하여 GitHub Pages 사이트에 테마 추가
intro: '{% data variables.product.prodname_pages %} 사이트에 테마를 추가하여 사이트의 모양과 느낌을 사용자 지정할 수 있습니다.'
redirect_from:
- /articles/creating-a-github-pages-site-with-the-jekyll-theme-chooser
- /articles/adding-a-jekyll-theme-to-your-github-pages-site-with-the-jekyll-theme-chooser
- /articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
- /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
- Pages
shortTitle: Add theme to a Pages site
permissions: People with admin permissions for a repository can use the theme chooser to add a theme to a {% data variables.product.prodname_pages %} site.
ms.openlocfilehash: b38ce81802b5137f49fef076ffdc5a16392a446d
ms.sourcegitcommit: febc27cb8f2d53c97b51e614a941931f85ae5d95
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/27/2022
ms.locfileid: "147428367"
---
## <a name="about-the-theme-chooser"></a>테마 선택기 정보

{% ifversion pages-custom-workflow %}

{% note %}

**참고**: 사용자 지정 {% data variables.product.prodname_actions %} 워크플로를 사용하여 게시된 {% data variables.product.prodname_pages %} 사이트에는 Jekyll 테마 선택이 지원되지 않습니다. Jekyll을 사용하여 사이트를 빌드하고 사용자 지정 {% data variables.product.prodname_actions %} 워크플로를 사용하여 사이트를 게시하는 경우 `_config.yml` 파일을 편집하여 테마를 추가할 수 있습니다. 자세한 내용은 "[Jekyll을 사용하여 GitHub Pages 사이트에 테마 추가](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll)"를 참조하세요.

{% endnote %}

{% endif %}

테마 선택기가 Jekyll 테마를 리포지토리에 추가합니다. Jekyll에 대한 자세한 내용은 “[{% data variables.product.prodname_pages %} 및 Jekyll 정보](/articles/about-github-pages-and-jekyll)”를 참조하세요.

테마 선택기가 작동하는 방식은 리포지토리가 퍼블릭인지 프라이빗인지에 따라 달라집니다.
  - {% data variables.product.prodname_pages %}이(가) 이미 리포지토리에 사용하도록 설정된 경우 테마 선택기는 현재 게시 원본에 테마를 추가합니다.
  - 리포지토리가 퍼블릭이고 {% data variables.product.prodname_pages %}이(가) 리포지토리에 대해 사용하지 않도록 설정된 경우 테마 선택기를 사용하면 {% data variables.product.prodname_pages %}을(를) 사용하도록 설정하고 기본 분기를 게시 원본으로 구성합니다.
  - 리포지토리가 프라이빗이고 {% data variables.product.prodname_pages %}이(가) 리포지토리에 대해 사용하지 않도록 설정된 경우 테마 선택기를 사용하려면 먼저 게시 원본을 구성하여 {% data variables.product.prodname_pages %}을(를) 사용하도록 설정해야 합니다.

게시 원본에 대한 자세한 내용은 “[{% data variables.product.prodname_pages %} 정보](/articles/about-github-pages#publishing-sources-for-github-pages-sites)”를 참조하세요.

과거에 Jekyll 테마를 리포지토리에 수동으로 추가한 경우 테마 선택기를 사용한 후에도 해당 파일이 적용될 수 있습니다. 충돌을 방지하려면 테마 선택기를 사용하기 전에 수동으로 추가된 테마 폴더와 파일을 모두 제거합니다. 자세한 내용은 “[Jekyll을 사용하여 {% data variables.product.prodname_pages %} 사이트에 테마 추가](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)”를 참조하세요.

## <a name="adding-a-theme-with-the-theme-chooser"></a>테마 선택기를 사용하여 테마 추가

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. “{% data variables.product.prodname_pages %}”에서 **테마 선택** 또는 **테마 변경** 을 클릭합니다.
  ![테마 선택 단추](/assets/images/help/pages/choose-a-theme.png)
4. 페이지 위쪽에서 원하는 테마를 클릭한 다음 **테마 선택** 을 클릭합니다.
  ![테마 옵션 및 테마 선택 단추](/assets/images/help/pages/select-theme.png)
5. 사이트의 *README.md* 파일을 편집하라는 메시지가 표시될 수 있습니다.
   - 나중에 파일을 편집하려면 **취소** 를 클릭합니다.
   ![파일을 편집할 때 취소 링크](/assets/images/help/pages/cancel-edit.png)
   - 지금 파일을 편집하려면 “[파일 편집](/repositories/working-with-files/managing-files/editing-files)”을 참조하세요.

선택한 테마가 리포지토리의 markdown 파일에 자동으로 적용됩니다. 리포지토리의 HTML 파일에 테마를 적용하려면 각 파일에 레이아웃을 지정하는 YAML 전면 문제를 추가해야 합니다. 자세한 내용은 Jekyll 사이트에서 “[전문](https://jekyllrb.com/docs/front-matter/)”을 참조하세요.

## <a name="further-reading"></a>추가 참고 자료

- Jekyll 사이트의 [테마](https://jekyllrb.com/docs/themes/)
