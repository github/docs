---
title: GitHub Pages 사이트 만들기
intro: '새 리포지토리 또는 기존 리포지토리에서 {% data variables.product.prodname_pages %} 사이트를 만들 수 있습니다.'
redirect_from:
  - /articles/creating-pages-manually
  - /articles/creating-project-pages-manually
  - /articles/creating-project-pages-from-the-command-line
  - /articles/creating-project-pages-using-the-command-line
  - /articles/creating-a-github-pages-site
  - /github/working-with-github-pages/creating-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create a GitHub Pages site
ms.openlocfilehash: 45e7dead10f3f54b5c18d63352a037d04d49cb98
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147643951'
---
{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## 사이트에 대한 리포지토리 만들기

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %} {% data reusables.repositories.owner-drop-down %} {% indented_data_reference reusables.pages.emu-org-only spaces=3 %} {% data reusables.pages.create-repo-name %} {% data reusables.repositories.choose-repo-visibility %} {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}

## 사이트 만들기

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.decide-publishing-source %}
1. 사이트에 대한 항목 파일을 만듭니다. {% data variables.product.prodname_pages %}은(는) 사이트에 대한 항목 파일로 `index.html`, `index.md`, 또는`README.md` 파일을 찾습니다.

   {% ifversion pages-custom-workflow %}게시 원본이 분기 및 폴더인 경우 항목 파일은 원본 분기의 원본 폴더 최상위 수준에 있어야 합니다. 예를 들어 게시 원본이 `main` 분기의 `/docs` 폴더인 경우, 항목 파일은 `main`이라는 분기의 `/docs` 폴더에 있어야 합니다.

   게시 원본이 {% data variables.product.prodname_actions %} 워크플로인 경우 배포하는 아티팩트에 아티팩트 최상위 수준에 있는 항목 파일이 포함되어야 합니다. 항목 파일을 리포지토리에 추가하는 대신 워크플로가 실행되면 {% data variables.product.prodname_actions %} 워크플로에서 항목 파일을 생성하도록 선택할 수 있습니다.{% else %} 항목 파일은 선택한 게시 원본의 최상위 수준에 있어야 합니다. 예를 들어 게시 원본이 `main` 분기의 `/docs` 폴더인 경우, 항목 파일은 `main`이라는 분기의 `/docs` 폴더에 있어야 합니다.{% endif %} {% data reusables.pages.configure-publishing-source %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% data reusables.pages.choose-visibility %} {% data reusables.pages.visit-site %} {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## 다음 단계

더 많은 새 파일을 만들어 사이트에 페이지를 더 추가할 수 있습니다. 각 파일은 게시 원본과 동일한 디렉터리 구조로 사이트에서 사용할 수 있습니다. 예를 들어 프로젝트 사이트의 게시 원본이 `gh-pages` 분기이고 `gh-pages` 분기에 `/about/contact-us.md`라는 새 파일을 만드는 경우 파일은 {% ifversion fpt or ghec %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.html`에서 사용할 수 있습니다.

테마를 추가하여 사이트의 모습과 느낌을 사용자 지정할 수도 있습니다. 자세한 내용은 “[Jekyll을 사용하여 {% data variables.product.prodname_pages %} 사이트에 테마 추가](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)”를 참조하세요.

사이트를 더욱 사용자 지정하려면 {% data variables.product.prodname_pages %}에 대한 기본 제공 지원이 포함된 정적 사이트 생성기인 Jekyll을 사용할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 및 Jekyll 정보](/articles/about-github-pages-and-jekyll)”를 참조하세요.

## 추가 참고 자료

- “[{% data variables.product.prodname_pages %} 사이트에 대한 Jekyll 빌드 오류 문제 해결](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)”
- “[리포지토리 내에서 분기 만들기 및 삭제](/articles/creating-and-deleting-branches-within-your-repository)”
- “[새 파일 만들기](/articles/creating-new-files)”
