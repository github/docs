---
title: Jekyll을 사용하여 로컬로 GitHub Pages 사이트 테스트
intro: '{% data variables.product.prodname_pages %} 사이트를 로컬로 빌드하여 사이트의 변경 내용을 미리 확인하고 테스트할 수 있습니다.'
redirect_from:
  - /articles/setting-up-your-pages-site-locally-with-jekyll
  - /articles/setting-up-your-github-pages-site-locally-with-jekyll
  - /articles/testing-your-github-pages-site-locally-with-jekyll
  - /github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Test site locally with Jekyll
ms.openlocfilehash: 9db3a964ee38afa191f7fed31cfa032128460f48
ms.sourcegitcommit: 3268914369fb29540e4d88ee5e56bc7a41f2a60e
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/26/2022
ms.locfileid: '148111309'
---
리포지토리에 대한 읽기 권한이 있는 사용자는 로컬에서 {% data variables.product.prodname_pages %} 사이트를 테스트할 수 있습니다.

## 필수 조건

Jekyll을 사용하여 사이트를 테스트하려면 먼저 다음을 수행해야 합니다.
  - [Jekyll](https://jekyllrb.com/docs/installation/) 설치
  - Jekyll 사이트를 만듭니다. 자세한 내용은 “[Jekyll을 사용하여 {% data variables.product.prodname_pages %} 사이트 만들기](/articles/creating-a-github-pages-site-with-jekyll)”를 참조하세요.

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## 로컬로 사이트 빌드

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.pages.navigate-publishing-source %}
3. `bundle install`을 실행합니다.
3. Jekyll 사이트를 로컬로 실행합니다.
  ```shell
  $ bundle exec jekyll serve
  > Configuration file: /Users/octocat/my-site/_config.yml
  >            Source: /Users/octocat/my-site
  >       Destination: /Users/octocat/my-site/_site
  > Incremental build: disabled. Enable with --incremental
  >      Generating...
  >                    done in 0.309 seconds.
  > Auto-regeneration: enabled for '/Users/octocat/my-site'
  > Configuration file: /Users/octocat/my-site/_config.yml
  >    Server address: http://127.0.0.1:4000/
  >  Server running... press ctrl-c to stop.
  ```
  {% note %}

  **참고:** Ruby 3.0 이상을 설치한 경우(Homebrew 통해 기본 버전을 설치한 경우) 이 단계에서 오류가 발생할 수 있습니다. 이러한 버전의 Ruby가 더 이상 설치되어 있지 `webrick` 않으므로
  
  오류를 해결하려면 를 실행 `bundle add webrick`한 다음 를 다시 실행 `bundle exec jekyll serve`합니다.
  {% endnote %}

3. 사이트를 미리 보려면 웹 브라우저에서 `http://localhost:4000`으로 이동합니다.

## {% data variables.product.prodname_pages %} gem 업데이트

Jekyll은 자주 업데이트되는 활성 오픈 소스 프로젝트입니다. 컴퓨터의 `github-pages` gem이 {% data variables.product.prodname_pages %} 서버의 `github-pages` gem과 함께 오래된 경우 사이트를 로컬로 구축할 때와 {% data variables.product.product_name %}에 게시할 때와 다르게 보일 수 있습니다. 이를 방지하려면 컴퓨터에서 `github-pages` gem을 정기적으로 업데이트하세요.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. `github-pages` gem을 업데이트합니다.
    - Bundler를 설치한 경우 `bundle update github-pages`를 실행합니다.
    - Bundler가 설치되어 있지 않으면 `gem update github-pages`를 실행합니다.

## 추가 참고 자료

- Jekyll 설명서의 [{% data variables.product.prodname_pages %}](http://jekyllrb.com/docs/github-pages/)
