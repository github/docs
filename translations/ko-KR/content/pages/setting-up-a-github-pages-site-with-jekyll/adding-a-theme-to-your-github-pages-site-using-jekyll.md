---
title: Jekyll을 사용하여 GitHub Pages 사이트에 테마 추가
intro: 테마를 추가하고 사용자 지정하여 Jekyll 사이트를 개인 설정할 수 있습니다.
redirect_from:
  - /articles/customizing-css-and-html-in-your-jekyll-theme
  - /articles/adding-a-jekyll-theme-to-your-github-pages-site
  - /articles/adding-a-theme-to-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll
  - /pages/getting-started-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Add theme to Pages site
ms.openlocfilehash: 33969695e96aa0629b2811e2742ca3093e58139a
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147644797'
---
리포지토리에 대한 쓰기 권한이 있는 사용자는 Jekyll을 사용하여 {% data variables.product.prodname_pages %} 사이트에 테마를 추가할 수 있습니다.

{% data reusables.pages.test-locally %}

## 테마 추가

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
2. *_config.yml* 로 이동합니다.
{% data reusables.repositories.edit-file %}
4. 테마 이름의 파일에 새 줄을 추가합니다.
   - 지원되는 테마를 사용하려면 테마 리포지토리의 추가 정보에서와 같이 `theme: THEME-NAME`을 입력하여 _THEME-NAME_ 을 테마 이름으로 바꿉니다. 지원되는 테마 목록은 {% data variables.product.prodname_pages %} 사이트에서 “[지원되는 테마](https://pages.github.com/themes/)”를 참조하세요.
   ![구성 파일에서 지원되는 테마](/assets/images/help/pages/add-theme-to-config-file.png)
   - {% data variables.product.prodname_dotcom %}에 호스트된 다른 Jekyll 테마를 사용하려면 테마 리포지토리의 추가 정보와 같이 `remote_theme: THEME-NAME`을 입력하여 THEME-NAME을 테마 이름으로 바꿉니다.
   ![구성 파일에서 지원되지 않는 테마](/assets/images/help/pages/add-remote-theme-to-config-file.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## 테마의 CSS 사용자 지정

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
1. _/assets/css/style.scss_ 라는 새 파일을 만듭니다.
2. 다음 콘텐츠를 파일의 맨 위에 추가합니다.
  ```scss
  ---
  ---

  @import "{% raw %}{{ site.theme }}{% endraw %}";
  ```
3. `@import` 줄 바로 뒤의 사용자 지정 CSS 또는 Sass(가져오기 포함)를 추가합니다.

## 테마의 HTML 레이아웃 사용자 지정

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

1. {% data variables.product.prodname_dotcom %}에서 테마의 원본 리포지토리로 이동합니다. 예를 들어 Minima의 원본 리포지토리는 https://github.com/jekyll/minima 입니다.
2. *_layouts* 폴더에서 테마의 _default.html_ 파일로 이동합니다.
3. 파일 콘텐츠를 복사합니다.
{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
6. *_layouts/default.html* 라는 파일을 만듭니다.
7. 이전에 복사한 기본 레이아웃 콘텐츠를 붙여넣습니다.
8. 원하는 대로 레이아웃을 사용자 지정합니다.

## 추가 참고 자료

- “[새 파일 만들기](/articles/creating-new-files)”
