---
title: Jekyll을 사용하여 GitHub Pages 사이트에 콘텐츠 추가
intro: '새 페이지를 추가하거나 {% data variables.product.prodname_pages %}의 Jekyll 사이트에 게시할 수 있습니다.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/adding-content-to-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/adding-content-to-your-github-pages-site-using-jekyll
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Add content to Pages site
ms.openlocfilehash: 030e4e7877c091ef3c05acb62bee37b455d5ce6b
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009242'
---
리포지토리에 대한 쓰기 권한이 있는 사용자는 Jekyll을 사용하여 {% data variables.product.prodname_pages %} 사이트에 콘텐츠를 추가할 수 있습니다.

## Jekyll 사이트의 콘텐츠 정보

{% data variables.product.prodname_pages %}의 Jekyll 사이트에 콘텐츠를 추가하려면 먼저 Jekyll 사이트를 만들어야 합니다. 자세한 내용은 “[Jekyll을 사용하여 {% data variables.product.prodname_pages %} 사이트 만들기](/articles/creating-a-github-pages-site-with-jekyll)”를 참조하세요.

Jekyll 사이트의 주요 콘텐츠 유형은 페이지와 게시물입니다. 페이지는 "정보" 페이지와 같이 특정 날짜와 연결되지 않은 독립 실행형 콘텐츠용입니다. 기본 Jekyll 사이트에는 `YOUR-SITE-URL/about`에 있는 사이트의 페이지로 렌더링되는 `about.md`라는 파일이 포함되어 있습니다. 해당 파일의 내용을 편집하여 "정보" 페이지를 개인 설정할 수 있으며 "정보" 페이지를 템플릿으로 사용하여 새 페이지를 만들 수 있습니다. 자세한 내용은 Jekyll 설명서의 “[페이지](https://jekyllrb.com/docs/pages/)”를 참조하세요.

게시물은 블로그 게시물입니다. 기본 Jekyll 사이트에는 기본 게시 파일이 포함된 `_posts`라는 디렉터리가 포함되어 있습니다. 해당 게시물의 콘텐츠를 편집할 수 있으며 기본 게시물을 템플릿으로 사용하여 새 게시물을 만들 수 있습니다. 자세한 내용은 Jekyll 설명서의 “[게시물](https://jekyllrb.com/docs/posts/)”을 참조하세요.

테마에는 사이트의 새 페이지와 게시물에 자동으로 적용되는 기본 레이아웃, 포함 및 스타일시트가 포함되어 있지만 이러한 기본값을 재정의할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 및 Jekyll 정보](/articles/about-github-pages-and-jekyll#themes)”를 참조하세요.

{% data reusables.pages.about-front-matter %}

{% data reusables.pages.test-locally %}

## 사이트에 새 페이지 추가

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
3. 게시 원본의 루트에서 _PAGE-NAME.md_ 라는 페이지에 대한 새 파일을 만들고 _PAGE-NAME_ 을 페이지의 의미 있는 파일 이름으로 대체합니다.
4. 다음 YAML 프런트매터를 파일 맨 위에 추가하고 _PAGE TITLE_ 을 페이지 제목으로, _URL-PATH_ 를 페이지의 URL에 원하는 경로로 바꿉니다. 예를 들어 사이트의 기본 URL이 `https://octocat.github.io`이고 _URL-PATH_ 가 `/about/contact/`인 경우 페이지는 `https://octocat.github.io/about/contact`에 있습니다.
  ```shell
  layout: page
  title: "PAGE-TITLE"
  permalink: /URL-PATH
  ```
5. 프런트매터 아래에 페이지의 콘텐츠를 추가합니다.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% data reusables.files.choose_pull_request %} {% data reusables.files.merge_pull_request %} {% data reusables.files.write_commit_message_pull_request %} {% data reusables.files.confirm_merge %} {% data reusables.files.delete_branch %}

## 사이트에 새 게시물 추가

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
3. `_posts` 디렉터리로 이동합니다.
4. _YYYY-MM-DD-NAME-OF-POST.md_ 라는 새 파일을 만들고 _YYYY-MM-DD_ 를 게시물의 날짜로, _NAME-OF-POST_ 를 게시물 이름으로 바꿉니다.
4. 다음 YAML 프런트매터를 파일 맨 위에 추가하고 _POST TITLE_ 을 게시물의 제목으로, _YYYY-MM-DD hh:mm:ss -0000_ 을 게시물의 날짜 및 시간으로, _CATEGORY-1_ 및 _CATEGORY-2_ 를 게시물에 원하는 만큼의 범주로 바꿉니다.
  ```shell
  layout: post
  title: "POST-TITLE"
  date: YYYY-MM-DD hh:mm:ss -0000
  categories: CATEGORY-1 CATEGORY-2
  ```
5. 프런트매터 아래에 게시물의 콘텐츠를 추가합니다.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% data reusables.files.choose_pull_request %} {% data reusables.files.merge_pull_request %} {% data reusables.files.write_commit_message_pull_request %} {% data reusables.files.confirm_merge %} {% data reusables.files.delete_branch %}

이제 게시물이 사이트에 올라와야 합니다! 사이트의 기본 URL이 `https://octocat.github.io`인 경우 새 게시물은 `https://octocat.github.io/YYYY/MM/DD/TITLE.html`에 있습니다.

## 다음 단계

{% data reusables.pages.add-jekyll-theme %} 자세한 내용은 “[Jekyll을 사용하여 {% data variables.product.prodname_pages %} 사이트에 테마 추가](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)”를 참조하세요.
