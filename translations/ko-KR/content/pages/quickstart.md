---
title: GitHub Pages 빠른 시작
intro: '{% data variables.product.prodname_pages %}를 사용하여 일부 오픈 소스 프로젝트를 소개하거나, 블로그를 호스트하거나, 이력서를 공유할 수도 있습니다. 이 가이드는 다음 번 웹 사이트 만들기를 시작할 때 도움이 됩니다.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pages
shortTitle: Quickstart
product: '{% data reusables.gated-features.pages %}'
ms.openlocfilehash: d82ba5899bb3b98efbd5b69672472ef0d39e2353
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147643863'
---
## 소개

{% data variables.product.prodname_pages %}는 {% data variables.product.product_name %}를 통해 호스트되고 게시되는 퍼블릭 웹 페이지입니다. 시작하고 실행하는 가장 빠른 방법은 Jekyll 테마 선택기를 사용하여 미리 만들어진 테마를 로드하는 것입니다. 그런 다음 {% data variables.product.prodname_pages %} 콘텐츠 및 스타일을 수정할 수 있습니다.

이 가이드에서는 `username.github.io`에서 사용자 사이트를 만드는 작업을 안내합니다.

## 웹 사이트 만들기

{% data reusables.repositories.create_new %}
1. 리포지토리 이름으로 `username.github.io`를 입력합니다. `username`을 {% data variables.product.prodname_dotcom %} 사용자 이름으로 바꿉니다. 예를 들어 사용자 이름이 `octocat`이면 리포지토리 이름은 `octocat.github.io`입니다.
   ![리포지토리 이름 필드](/assets/images/help/pages/create-repository-name-pages.png) {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. "빌드 및 배포"의 "원본"에서 **분기에서 배포** 를 선택합니다.
1. "빌드 및 배포"의 "분기"에서 **없음** 또는 **분기** 드롭다운 메뉴를 사용하여 게시 원본을 선택합니다.

   ![게시 원본을 선택할 수 있는 드롭다운 메뉴](/assets/images/help/pages/publishing-source-drop-down.png)
1. 필요에 따라 리포지토리의 `README.md` 파일을 엽니다. `README.md` 파일에서 사이트의 콘텐츠를 작성하게 됩니다. 지금 파일을 편집하거나 기본 콘텐츠를 유지할 수 있습니다.
1. `username.github.io`를 방문하여 새 웹 사이트를 봅니다. **참고:** {% data variables.product.product_name %}에 변경 내용을 푸시한 후 사이트 변경 내용이 게시되려면 최대 10분이 걸릴 수 있습니다.

## 제목 및 설명 변경

기본적으로 사이트의 제목은 `username.github.io`입니다. 리포지토리에서 `_config.yml` 파일을 편집하여 제목을 변경할 수 있습니다. 사이트에 대한 설명을 추가할 수도 있습니다.

1. 리포지토리의 **코드** 탭을 클릭합니다.
1. 파일 목록에서 `_config.yml`을 클릭하여 파일을 엽니다.
1. {% octicon "pencil" aria-label="The edit icon" %} 아이콘을 클릭하여 파일을 편집합니다.
1. `_config.yml` 파일에는 사이트의 테마를 지정하는 줄이 이미 포함되어 있습니다. `title:` 뒤에 원하는 제목이 표시되는 새 줄을 추가합니다. `description:` 뒤에 원하는 설명이 표시되는 새 줄을 추가합니다. 예를 들면 다음과 같습니다.

   ```yaml
   theme: jekyll-theme-minimal
   title: Octocat's homepage
   description: Bookmark this to keep an eye on my project updates!
   ```

1. 파일 편집을 마쳤으면 **변경 내용 커밋** 을 클릭합니다.

## 다음 단계

사이트에 페이지를 추가하는 방법에 대한 자세한 내용은 “[Jekyll을 사용하여 GitHub Pages 사이트에 콘텐츠 추가](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites)”를 참조하세요.

Jekyll을 사용하여 {% data variables.product.prodname_pages %} 사이트를 설정하는 방법에 대한 자세한 내용은 “[GitHub Pages 및 Jekyll 정보](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)”를 참조하세요.
