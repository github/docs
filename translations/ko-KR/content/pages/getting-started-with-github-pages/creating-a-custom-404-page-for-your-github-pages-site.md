---
title: GitHub Pages 사이트에 대한 사용자 지정 404 페이지 만들기
intro: 사용자가 사이트의 존재하지 않는 페이지에 액세스하려고 할 때 사용자 지정 404 오류 페이지를 표시할 수 있습니다.
redirect_from:
  - /articles/custom-404-pages
  - /articles/creating-a-custom-404-page-for-your-github-pages-site
  - /github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create custom 404 page
ms.openlocfilehash: 1b10946277d90773b847b929d85a3b6cf8212a4e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880567'
---
{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %} {% data reusables.files.add-file %}
3. 파일 이름 필드에 `404.html` 또는 `404.md`를 입력합니다.
  ![파일 이름 필드](/assets/images/help/pages/404-file-name.png)
4. `404.md` 파일의 이름을 지정한 경우 파일의 시작 부분에 다음 YAML 프런트 매터(front matter)를 추가합니다.
  ```yaml
  ---
  permalink: /404.html
  ---
  ```
5. YAML 프런트 매터가 있는 경우 그 아래에서 404 페이지에 표시할 콘텐츠를 추가합니다.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## 추가 참고 자료

- Jekyll 설명서의 [프런트 매터](http://jekyllrb.com/docs/frontmatter)
