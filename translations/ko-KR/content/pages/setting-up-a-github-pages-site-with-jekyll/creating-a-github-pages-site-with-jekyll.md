---
title: Jekyll을 사용하여 GitHub Pages 사이트 만들기
intro: 'Jekyll을 사용하여 새 리포지토리 또는 기존 리포지토리에서 {% data variables.product.prodname_pages %} 사이트를 만들 수 있습니다.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/creating-a-github-pages-site-with-jekyll
  - /github/working-with-github-pages/creating-a-github-pages-site-with-jekyll
permissions: 'People with admin permissions for a repository can create a {% data variables.product.prodname_pages %} site with Jekyll.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create site with Jekyll
ms.openlocfilehash: 3624c1902d1c3392db37fdb467c55189b9e2539e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094651'
---
{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## 필수 조건

Jekyll을 사용하여 {% data variables.product.prodname_pages %} 사이트를 만들려면 먼저 Jekyll 및 Git을 설치해야 합니다. 자세한 내용은 Jekyll 설명서의 [설치](https://jekyllrb.com/docs/installation/) 및 “[Git 설정](/articles/set-up-git)”을 참조하세요.

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## 사이트에 대한 리포지토리 만들기

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %} {% data reusables.repositories.owner-drop-down %} {% indented_data_reference reusables.pages.emu-org-only spaces=3 %} {% data reusables.pages.create-repo-name %} {% data reusables.repositories.choose-repo-visibility %}

## 사이트 만들기

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.command_line.open_the_multi_os_terminal %}
1. 리포지토리의 로컬 복사본이 아직 없는 경우 사이트의 원본 파일을 저장할 위치로 이동하여 _PARENT-FOLDER_ 를 리포지토리의 폴더를 포함하려는 폴더로 변경합니다.
  ```shell
  $ cd PARENT-FOLDER
  ```
1. 아직 로컬 Git 리포지토리를 초기화하지 않은 경우 Git 리포지토리를 초기화하고 _REPOSITORY-NAME_ 을 리포지토리 이름으로 변경합니다.
  ```shell
  $ git init REPOSITORY-NAME
  > Initialized empty Git repository in /Users/octocat/my-site/.git/
  # Creates a new folder on your computer, initialized as a Git repository
  ```
  4. 디렉터리를 리포지토리로 변경합니다.
  ```shell
  $ cd REPOSITORY-NAME
  # Changes the working directory
  ```
{% data reusables.pages.decide-publishing-source %} {% data reusables.pages.navigate-publishing-source %} 예를 들어 기본 분기의 `docs` 폴더에서 사이트를 게시하도록 선택한 경우 디렉터리를 만들고 `docs` 폴더로 변경합니다.
 ```shell
 $ mkdir docs
 # Creates a new folder called docs
 $ cd docs
 ```
 `gh-pages` 분기에서 사이트를 게시하도록 선택한 경우 `gh-pages` 분기를 만들고 체크 아웃합니다.
 ```shell
 $ git checkout --orphan gh-pages
 # Creates a new branch, with no history or contents, called gh-pages, and switches to the gh-pages branch
 $ git rm -rf .
 # Removes the contents from your default branch from the working directory
 ```
1. 새 Jekyll 사이트를 만들려면 다음 `jekyll new` 명령을 사용합니다.
   ```shell
   $ jekyll new --skip-bundle .
   # Creates a Jekyll site in the current directory
   ```
1. Jekyll이 만든 Gemfile을 엽니다.
1. 이 줄을 주석으로 처리하려면 `gem "jekyll"`로 시작하는 줄의 시작 부분에 ‘#’을 추가합니다.
1. `# gem "github-pages"`로 시작하는 줄을 편집하여 `github-pages` gem을 추가합니다. 줄을 다음으로 변경합니다.

   ```shell
   gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
   ```

   _GITHUB-PAGES-VERSION_ 을 지원되는 최신 버전의 `github-pages` gem으로 바꿉니다. “[종속성 버전](https://pages.github.com/versions/)”에서 이 버전을 찾을 수 있습니다.

   올바른 버전 Jekyll은 `github-pages` gem의 종속성으로 설치됩니다.
1. Gemfile을 저장하고 닫습니다.
1. 명령줄에서 `bundle install`을 실행합니다.
1. 필요한 경우 `_config.yml` 파일을 편집합니다. 리포지토리가 하위 디렉터리에서 호스트되는 경우 상대 경로에 필요합니다.  자세한 내용은 “[하위 폴더를 새 리포지토리로 분할](/github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository)”을 참조하세요.
   ```yml
   domain: my-site.github.io       # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
   url: https://my-site.github.io  # the base hostname and protocol for your site, e.g. http://example.com
   baseurl: /REPOSITORY-NAME/      # place folder name if the site is served in a subfolder
  ```
1. 필요에 따라 사이트를 로컬로 테스트합니다. 자세한 내용은 “[Jekyll을 사용하여 로컬로 {% data variables.product.prodname_pages %} 사이트 테스트](/articles/testing-your-github-pages-site-locally-with-jekyll)”를 참조하세요.
1. 작업을 추가하고 커밋합니다.
```shell
git add .
git commit -m 'Initial GitHub pages site with Jekyll'
```
1. {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}에 리포지토리를 원격으로 추가합니다. {% ifversion ghes 또는 ghae %}_HOSTNAME_ 을 엔터프라이즈의 호스트 이름으로, {% endif %} _USER_ 를 리포지토리{% ifversion ghes 또는 ghae %},{% endif %} 및 _REPOSITORY_ 를 리포지토리의 이름으로 소유한 계정으로 바꿔야 합니다.
```shell
{% ifversion fpt or ghec %}
$ git remote add origin https://github.com/USER/REPOSITORY.git
{% else %}
$ git remote add origin https://HOSTNAME/USER/REPOSITORY.git
{% endif %}
```
1. {% data variables.product.product_name %}에 리포지토리를 푸시하여 _BRANCH_ 를 작업 중인 분기의 이름으로 바꿔야 합니다.
   ```shell
   $ git push -u origin BRANCH
   ```
{% data reusables.pages.configure-publishing-source %} {% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% data reusables.pages.choose-visibility %} {% data reusables.pages.visit-site %} {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## 다음 단계

사이트에 새 페이지 또는 게시물을 추가하려면 “[Jekyll을 사용하여 {% data variables.product.prodname_pages %} 사이트에 콘텐츠 추가](/articles/adding-content-to-your-github-pages-site-using-jekyll)”를 참조하세요.

{% data reusables.pages.add-jekyll-theme %} 자세한 내용은 “[Jekyll을 사용하여 {% data variables.product.prodname_pages %} 사이트에 테마 추가](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)”를 참조하세요.
