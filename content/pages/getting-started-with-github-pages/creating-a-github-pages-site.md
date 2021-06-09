---
title: Creating a GitHub Pages site
intro: 'You can create a {% data variables.product.prodname_pages %} site in a new or existing repository.'
redirect_from:
  - /articles/creating-pages-manually/
  - /articles/creating-project-pages-manually/
  - /articles/creating-project-pages-from-the-command-line/
  - /articles/creating-project-pages-using-the-command-line/
  - /articles/creating-a-github-pages-site
  - /github/working-with-github-pages/creating-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pages
---

{% data reusables.pages.org-owners-can-restrict-pages-creation %}

### 사이트 생성을 위한 레포지토리 만들기

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
{% data reusables.pages.create-repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

### 사이트 생성

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.decide-publishing-source %}
3. 배포할 소스가 이미 있다면 해당 배포 소스로 진입하십시오. 만일 없다면, 새로 하나 생성해 주십시오.
4. 배포 소스의 루트 경로에 여러분의 사이트의 메인 페이지에 보여질 콘텐츠가 담긴 `index.md`라는 파일을 하나 생성하십시오.
{% data reusables.pages.configure-publishing-source %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.pages.choose-visibility %}{% endif %}
{% data reusables.pages.visit-site %}

{% data reusables.pages.admin-must-push %}

### 다음 단계

새로운 파일을 추가함으로서 사이트에 더 많은 페이지들을 추가할 수 있습니다. 각각의 파일은 배포 소스와 동일한 디렉토리 구조를 통해 사이트에 전시됩니다. 예를 들어, 여러분의 프로젝트 사이트가 `gh-pages` 브랜치에 배포 소스가 있고, `gh-pages` 브랜치에 `/about/contact-us.md`이라는 새로운 파일을 생성하였을 때, 해당 파일은 {% if currentVersion == "free-pro-team@latest" %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.html`에서 보여집니다.

사이트에 테마를 적용하여 시각적인 커스터마이징을 할 수도 있습니다. 자세한 사항은 {% if currentVersion == "free-pro-team@latest" %}"[테마 선택기를 사용하여 {% data variables.product.prodname_pages %} 사이트에 테마 적용하기](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser){% else %}"[Jekyll를 이용하여 {% data variables.product.prodname_pages %} 사이트에 테마 적용하기](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll){% endif %}."를 참조해 주시기 바랍니다. 

사이트를 더욱 다양하게 커스터마이징을 하길 원한다면 {% data variables.product.prodname_pages %}을 지원하기 위한 내장된 정적 사이트 생성기인 Jekyll을 사용할 수도 있습니다. 자세한 사항은 "[About {% data variables.product.prodname_pages %} and Jekyll](/articles/about-github-pages-and-jekyll)."을 참조해주세요. 

### 더 읽어보기 

- "[{% data variables.product.prodname_pages %} 사이트 빌드 시 발생하는 Jekyll 에러 해결법](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
- "[저장소 내의 브랜치들을 생성 및 삭제하기](/articles/creating-and-deleting-branches-within-your-repository)"
- "[새로운 파일 생성하기](/articles/creating-new-files)"
