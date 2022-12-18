---
title: GitHub Pages 및 Jekyll 정보
intro: 'Jekyll은 {% data variables.product.prodname_pages %}를 기본적으로 지원하는 정적 사이트 생성기입니다.'
redirect_from:
  - /articles/about-jekyll-themes-on-github
  - /articles/configuring-jekyll
  - /articles/configuring-jekyll-plugins
  - /articles/using-syntax-highlighting-on-github-pages
  - /articles/files-that-start-with-an-underscore-are-missing
  - /articles/sitemaps-for-github-pages
  - /articles/search-engine-optimization-for-github-pages
  - /articles/repository-metadata-on-github-pages
  - /articles/atom-rss-feeds-for-github-pages
  - /articles/redirects-on-github-pages
  - /articles/emoji-on-github-pages
  - /articles/mentions-on-github-pages
  - /articles/using-jekyll-plugins-with-github-pages
  - /articles/adding-jekyll-plugins-to-a-github-pages-site
  - /articles/about-github-pages-and-jekyll
  - /github/working-with-github-pages/about-github-pages-and-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: GitHub Pages & Jekyll
ms.openlocfilehash: b0f97750f7fb4999e3b33c768ad2495f4c0b6719
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147648209'
---
## Jekyll 정보

Jekyll은 {% data variables.product.prodname_pages %} 및 간소화된 빌드 프로세스를 기본적으로 지원하는 정적 사이트 생성기입니다. Jekyll은 Markdown 및 HTML 파일을 가져와 선택한 레이아웃에 따라 완전한 정적 웹 사이트를 만듭니다. Jekyll은 사이트에 동적 콘텐츠를 로드하는 템플릿 언어인 Markdown 및 Liquid를 지원합니다. 자세한 내용은 [Jekyll](https://jekyllrb.com/)을 참조하세요.

Jekyll은 Windows에서 공식적으로 지원되지 않습니다. 자세한 내용은 Jekyll 설명서의 “[Windows의 Jekyll](http://jekyllrb.com/docs/windows/#installation)”을 참조하세요.

{% data variables.product.prodname_pages %}에서 Jekyll을 사용하는 것이 좋습니다. 원하는 경우 다른 정적 사이트 생성기를 사용하거나 로컬로 또는 다른 서버에서 자체 빌드 프로세스를 사용자 지정할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 정보](/articles/about-github-pages#static-site-generators)”를 참조하세요.

## {% data variables.product.prodname_pages %} 사이트에서 Jekyll 구성

*_config.yml* 파일을 편집하여 사이트의 테마 및 플러그 인과 같은 대부분의 Jekyll 설정을 구성할 수 있습니다. 자세한 내용은 Jekyll 설명서의 “[구성](https://jekyllrb.com/docs/configuration/)”을 참조하세요.

{% data variables.product.prodname_pages %} 사이트에 대해 일부 구성 설정은 변경할 수 없습니다.

```yaml
lsi: false
safe: true
source: [your repo's top level directory]
incremental: false
highlighter: rouge
gist:
  noscript: false
kramdown:
  math_engine: mathjax
  syntax_highlighter: rouge
```

기본적으로 Jekyll은 다음과 같은 파일 또는 폴더를 빌드하지 않습니다.
- `/node_modules` 또는 `/vendor`라는 폴더에 있음
- `_`, `.` 또는 `#`로 시작함
- `~`로 끝남
- 구성 파일의 `exclude` 설정에 의해 제외됨

Jekyll이 해당 파일을 처리하도록 하려면 구성 파일에서 `include` 설정을 사용할 수 있습니다.

## 프런트 매터

{% data reusables.pages.about-front-matter %}

`site.github`를 게시물 또는 페이지에 추가하여 리포지토리 참조 메타데이터를 사이트에 추가할 수 있습니다. 자세한 내용은 Jekyll 메타데이터 설명서에서 “[`site.github` 사용](https://jekyll.github.io/github-metadata/site.github/)”을 참조하세요.

## 테마

{% data reusables.pages.add-jekyll-theme %} 자세한 내용은 Jekyll 설명서의 “[테마](https://jekyllrb.com/docs/themes/)”를 참조하세요.

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %}에서 지원되는 테마를 사이트에 추가할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_pages %} 사이트의 “[지원되는 테마](https://pages.github.com/themes/)”와 “[Jekyll을 사용하여 {% data variables.product.prodname_pages %} 사이트에 테마 추가](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)”를 참조하세요.

{% data variables.product.prodname_dotcom %}에서 호스트되는 다른 오픈 소스 Jekyll 테마를 사용하려면 테마를 수동으로 추가할 수 있습니다.{% else %} 사이트에 테마를 수동으로 추가할 수 있습니다.{% endif %} 자세한 내용은{% ifversion fpt or ghec %} [{% data variables.product.prodname_dotcom %}에 호스트된 테마](https://github.com/topics/jekyll-theme)와{% else %} {% data variables.product.prodname_pages %} 사이트의 “[지원되는 테마](https://pages.github.com/themes/)” 및{% endif %} “[Jekyll을 사용하여 {% data variables.product.prodname_pages %} 사이트에 테마 추가](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)”를 참조하세요.

테마의 파일을 편집하여 테마의 기본값을 재정의할 수 있습니다. 자세한 내용은 테마 설명서와, Jekyll 설명서의 “[테마의 기본값 재정의](https://jekyllrb.com/docs/themes/#overriding-theme-defaults)”를 참조하세요.

## 플러그 인

Jekyll 플러그 인을 다운로드하거나 만들어 사이트의 Jekyll 기능을 확장할 수 있습니다. 예를 들어 [jemoji](https://github.com/jekyll/jemoji) 플러그 인을 사용하면 {% data variables.product.prodname_dotcom %}에서와 동일한 방식으로 사이트의 모든 페이지에서 {% data variables.product.prodname_dotcom %} 버전의 이모지를 사용할 수 있습니다. 자세한 내용은 Jekyll 설명서의 “[플러그 인](https://jekyllrb.com/docs/plugins/)”을 참조하세요.

{% data variables.product.prodname_pages %}는 기본적으로 사용하도록 설정되며 사용하지 않도록 설정할 수 없는 플러그 인을 사용합니다.
- [`jekyll-coffeescript`](https://github.com/jekyll/jekyll-coffeescript)
- [`jekyll-default-layout`](https://github.com/benbalter/jekyll-default-layout)
- [`jekyll-gist`](https://github.com/jekyll/jekyll-gist)
- [`jekyll-github-metadata`](https://github.com/jekyll/github-metadata)
- [`jekyll-optional-front-matter`](https://github.com/benbalter/jekyll-optional-front-matter)
- [`jekyll-paginate`](https://github.com/jekyll/jekyll-paginate)
- [`jekyll-readme-index`](https://github.com/benbalter/jekyll-readme-index)
- [`jekyll-titles-from-headings`](https://github.com/benbalter/jekyll-titles-from-headings)
- [`jekyll-relative-links`](https://github.com/benbalter/jekyll-relative-links)

`plugins`_config.yml *파일의* 설정에 플러그 인의 gem을 추가하여 추가 플러그 인을 사용하도록 설정할 수 있습니다. 자세한 내용은 Jekyll 설명서의 “[구성](https://jekyllrb.com/docs/configuration/)”을 참조하세요.

지원되는 플러그 인 목록은 {% data variables.product.prodname_pages %} 사이트의 “[종속성 버전](https://pages.github.com/versions/)”을 참조하세요.  특정 플러그 인에 대한 사용 정보는 플러그 인의 설명서를 참조하세요.

{% tip %}

**팁:** {% data variables.product.prodname_pages %} gem을 지속적으로 업데이트하여 모든 플러그 인의 최신 버전을 사용하도록 보장할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_pages %} 사이트에서 “[Jekyll을 사용하여 로컬로 GitHub Pages 사이트 테스트](/articles/testing-your-github-pages-site-locally-with-jekyll#updating-the-github-pages-gem)” 및 “[종속성 버전](https://pages.github.com/versions/)”을 참조하세요.

{% endtip %}

{% data variables.product.prodname_pages %}는 지원되지 않는 플러그 인을 사용하여 사이트를 빌드할 수 없습니다. 지원되지 않는 플러그 인을 사용하려면 사이트를 로컬로 생성한 다음 사이트의 정적 파일을 {% data variables.product.product_name %}에 푸시합니다.

## 구문 강조 표시

사이트를 더 쉽게 읽을 수 있도록 {% data variables.product.prodname_pages %} 사이트에서 코드 조각이 {% data variables.product.product_name %}에서 강조 표시된 것과 동일한 방식으로 강조 표시됩니다. {% data variables.product.product_name %}의 구문 강조 표시에 대한 자세한 내용은 “[코드 블록 만들기 및 강조 표시](/articles/creating-and-highlighting-code-blocks)”를 참조하세요.

기본적으로 사이트의 코드 블록은 Jekyll에 의해 강조 표시됩니다. Jekyll은 [Pygments](https://github.com/jneen/rouge)와 호환되는 [Rouge](http://pygments.org/) 강조 표시자를 사용합니다. Pygments는 사용되지 않으며 Jekyll 4에서 지원되지 않습니다. *_config.yml* 파일에서 Pygments를 지정하면 대체로 Rouge가 사용됩니다. Jekyll은 다른 구문 강조 표시자를 사용할 수 없으며 *_config.yml* 파일에 다른 구문 강조 표시자를 지정하면 페이지 빌드 경고가 표시됩니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트에 대한 Jekyll 빌드 오류 정보](/articles/about-jekyll-build-errors-for-github-pages-sites)”를 참조하세요.

`highlight.js`와 같은 다른 강조 표시자를 사용하려면 프로젝트의 *_config.yml* 파일을 업데이트하여 Jekyll 구문 강조 표시를 사용하지 않도록 설정해야 합니다.

```yaml
kramdown:
  syntax_highlighter_opts:
    disable : true
```

테마에 구문 강조 표시를 위한 CSS가 포함되지 않은 경우 CSS를 강조 표시하는 {% data variables.product.prodname_dotcom %}의 구문을 생성하고 프로젝트의 `style.css` 파일에 추가할 수 있습니다.

```shell
$ rougify style github > style.css
```

## 로컬로 사이트 빌드

{% data reusables.pages.test-locally %}
