---
title: GitHub Pages 정보
intro: '{% 데이터 variables.product.prodname_pages %}을(를) 사용하여 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}의 리포지토리에서 직접 본인, 조직 또는 프로젝트에 대한 웹 사이트를 호스트할 수 있습니다.'
redirect_from:
  - /articles/what-are-github-pages
  - /articles/what-is-github-pages
  - /articles/user-organization-and-project-pages
  - /articles/using-a-static-site-generator-other-than-jekyll
  - /articles/mime-types-on-github-pages
  - /articles/should-i-rename-usernamegithubcom-repositories-to-usernamegithubio
  - /articles/about-github-pages
  - /github/working-with-github-pages/about-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
ms.openlocfilehash: 1717726156a59f5f1216e62707d7c0fa26518956
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094443'
---
## {% data variables.product.prodname_pages %} 정보

{% data variables.product.prodname_pages %}는 {% data variables.product.product_name %}의 리포지토리에서 HTML, CSS 및 JavaScript 파일을 직접 가져와서 필요에 따라 빌드 프로세스를 통해 파일을 실행하고 웹 사이트를 게시하는 정적 사이트 호스팅 서비스입니다. {% data variables.product.prodname_pages %} 사이트의 예는 [{% data variables.product.prodname_pages %} 예제 컬렉션](https://github.com/collections/github-pages-examples)에서 확인할 수 있습니다.

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %}의 `github.io` 도메인 또는 사용자 지정 도메인에서 사이트를 호스트할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %}에서 사용자 지정 도메인 사용](/articles/using-a-custom-domain-with-github-pages)”을 참조하세요.
{% endif %}

{% ifversion fpt or ghec %} {% data reusables.pages.about-private-publishing %} 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서에서 [ "{% data variables.product.prodname_pages %} 사이트의 표시 유형 변경]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site){% ifversion fpt %}"을 참조하세요.{% else %}."{% endif %} {% endif %}

시작하려면 “[{% data variables.product.prodname_pages %} 사이트 만들기](/articles/creating-a-github-pages-site)”를 참조하세요.

{% ifversion fpt or ghes or ghec %} 조직 소유자는 조직의 리포지토리에서 {% data variables.product.prodname_pages %} 사이트의 게시를 사용하지 않도록 설정할 수 있습니다. 자세한 내용은 “[조직의 {% data variables.product.prodname_pages %} 사이트의 게시 관리](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”를 참조하세요.
{% endif %}

## {% data variables.product.prodname_pages %} 사이트 유형

{% data variables.product.prodname_pages %} 사이트에는 프로젝트, 사용자 및 조직, 이렇게 세 가지 유형이 있습니다. 프로젝트 사이트는 JavaScript 라이브러리 또는 레시피 컬렉션과 같이 {% data variables.product.product_name %}에서 호스트되는 특정 프로젝트에 연결됩니다. 사용자 및 조직 사이트는 {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 특정 계정에 연결됩니다.

사용자 사이트를 게시하려면 {% ifversion fpt or ghec %}`<username>.github.io`{% else %}`<username>.<hostname>`{% endif %}이라는 개인 계정이 소유한 리포지토리를 만들어야 합니다. 조직 사이트를 게시하려면 {% ifversion fpt or ghec %}`<organization>.github.io`{% else %}`<organization>.<hostname>`{% endif %}이라는 조직이 소유한 리포지토리를 만들어야 합니다. {% ifversion fpt or ghec %}사용자 지정 도메인을 사용하지 않는 한 사용자 및 조직 사이트는 `http(s)://<username>.github.io` 또는 `http(s)://<organization>.github.io`에서 사용할 수 있습니다.{% elsif ghae %}사용자 및 조직 사이트는 `http(s)://pages.<hostname>/<username>` 또는 `http(s)://pages.<hostname>/<organization>`에서 사용할 수 있습니다.{% endif %}

프로젝트 사이트의 원본 파일은 프로젝트와 동일한 리포지토리에 저장됩니다. {% ifversion fpt or ghec %}사용자 지정 도메인을 사용하지 않는 경우 프로젝트 사이트는 `http(s)://<username>.github.io/<repository>` 또는 `http(s)://<organization>.github.io/<repository>`에서 사용할 수 있습니다.{% elsif ghae %}프로젝트 사이트는 `http(s)://pages.<hostname>/<username>/<repository>/` 또는 `http(s)://pages.<hostname>/<organization>/<repository>/`에서 사용할 수 있습니다.{% endif %}

{% ifversion ghec %} 사이트를 비공개로 게시하는 경우 사이트의 URL이 달라집니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트의 표시 유형 변경](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)”을 참조하세요.
{% endif %}

{% ifversion fpt or ghec %} 사용자 지정 도메인이 사이트의 URL에 미치는 영향에 대한 자세한 내용은 “[사용자 지정 도메인 및 {% data variables.product.prodname_pages %} 정보](/articles/about-custom-domains-and-github-pages)”를 참조하세요.
{% endif %}

{% data variables.product.product_name %}에서 각 계정에 대해 하나의 사용자 또는 조직 사이트만 만들 수 있습니다. 조직 또는 개인 계정이 소유하든 관계 없이 프로젝트 사이트는 무제한입니다.

{% ifversion ghes %} 사이트를 사용할 수 있는 URL은 {% 데이터 variables.location.product_location %}에 하위 도메인 격리를 사용할 수 있는지 여부에 따라 달라집니다.

| 사이트 유형 | 하위 도메인 격리 사용 | 하위 도메인 격리 사용 안 함 |
| ------------ | --------------------------- | ---------------------------- |
사용자 | `http(s)://pages.<hostname>/<username>` | `http(s)://<hostname>/pages/<username>` |
조직 | `http(s)://pages.<hostname>/<organization>` | `http(s)://<hostname>/pages/<organization>` |
개인 계정이 소유한 프로젝트 사이트 | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/`
조직 계정이 소유한 프로젝트 사이트 | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

자세한 내용은 “[하위 도메인 격리 사용](/enterprise/admin/installation/enabling-subdomain-isolation)”을 참조하거나 사이트 관리자에게 문의하세요.
{% endif %}

## {% data variables.product.prodname_pages %} 사이트에 대한 원본 게시

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.pages-about-publishing-source %}

자세한 내용은 "[GitHub Pages 사이트에 대한 게시 원본 구성](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)"을(를) 참조하세요.

{% ifversion ghec %}
## {% data variables.product.prodname_emus %}에 대한 제한 사항
{% 데이터 variables.enterprise.prodname_managed_user %}인 경우 {% 데이터 variables.product.prodname_pages %}의 사용이 제한됩니다.

  - {% data variables.product.prodname_pages %} 사이트는 조직이 소유한 리포지토리에서만 게시할 수 있습니다.
  - {% data variables.product.prodname_pages %} 사이트는 엔터프라이즈의 다른 멤버에게만 표시됩니다.
  - 조직 사이트(이름이 지정된 `<organization>.github.io`리포지토리에서 게시된 사이트)를 만들 수 없습니다.

{% data variables.product.prodname_emus %}에 대한 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)”를 참조하세요.
{% endif %}

## 정적 사이트 생성기

{% data variables.product.prodname_pages %}는 리포지토리에 푸시하는 정적 파일을 게시합니다. 사용자 고유의 정적 파일을 만들거나 정적 사이트 생성기를 사용하여 자동으로 사이트를 빌드할 수 있습니다. 로컬 또는 다른 서버에서 사용자 고유의 빌드 프로세스를 사용자 지정할 수도 있습니다.

{% ifversion pages-custom-workflow %}

사용자 지정 빌드 프로세스 또는 Jekyll 이외의 정적 사이트 생성기를 사용하는 경우 {% data variables.product.prodname_actions %}을(를) 작성하여 사이트를 빌드하고 게시할 수 있습니다. {% data variables.product.product_name %}은(는) 여러 정적 사이트 생성기에 대한 시작 워크플로를 제공합니다. 자세한 내용은 "[GitHub Pages 사이트에 대한 게시 원본 구성](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)"을(를) 참조하세요.

원본 분기에서 사이트를 게시하는 경우 {% data variables.product.prodname_pages %}은(는) Jekyll을 사용하여 기본적으로 사이트를 빌드합니다. Jekyll 이외의 정적 사이트 생성기를 사용하려면 {% data variables.product.prodname_actions %}을(를) 작성하여 사이트를 빌드하고 게시하는 것이 좋습니다. 그렇지 않으면 게시 원본의 루트에서 `.nojekyll`이라는 빈 파일을 만들어 Jekyll 빌드 프로세스를 사용하지 않도록 설정한 다음 정적 사이트 생성기의 지침에 따라 사이트를 로컬로 빌드합니다.

{% else %}

{% data variables.product.prodname_pages %} 및 간소화된 빌드 프로세스를 기본적으로 지원하는 정적 사이트 생성기인 Jekyll을 사용하는 것이 좋습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 및 Jekyll 정보](/articles/about-github-pages-and-jekyll)”를 참조하세요.

{% data variables.product.prodname_pages %}는 기본적으로 Jekyll을 사용하여 사이트를 빌드합니다. Jekyll 이외의 정적 사이트 생성기를 사용하려면 게시 원본의 루트에서 `.nojekyll`하는 빈 파일을 만들어 Jekyll 빌드 프로세스를 사용하지 않도록 설정한 다음 정적 사이트 생성기의 지침에 따라 사이트를 로컬로 빌드합니다.

{% endif %}

{% data variables.product.prodname_pages %}에서는 PHP, Ruby 또는 Python과 같은 서버 쪽 언어를 지원하지 않습니다.

## {% data variables.product.prodname_pages %}의 사용 제한

{% ifversion fpt or ghec %} {% data variables.product.prodname_pages %} 사이트는 2016년 6월 15일 이후에 만들었으며 `github.io` 도메인 사용은 HTTPS를 통해 제공됩니다. 2016년 6월 15일 이전에 사이트를 만든 경우 사이트로의 트래픽에 대해 HTTPS 지원을 사용하도록 설정할 수 있습니다. 자세한 내용은 “[HTTPS를 사용하여 {% data variables.product.prodname_pages %} 사이트 보호](/articles/securing-your-github-pages-site-with-https)”를 참조하세요.

### 허용되지 않는 사용
{% endif %} {% data variables.product.prodname_pages %}는 온라인 비즈니스, 전자 상거래 사이트 또는 상업적 거래를 촉진하거나 SaaS(Software as a Service)를 제공하는 데 주로 사용되는 다른 웹 사이트를 실행하기 위한 무료 웹 호스팅 서비스로 사용할 수 없습니다. {% data reusables.pages.no_sensitive_data_pages %}

또한 {% data variables.product.prodname_pages %}의 사용에는 풍부한 구성표, 외설적인 콘텐츠, 폭력적이거나 위협적인 콘텐츠 또는 활동에 대한 제한을 포함하여 [GitHub 서비스 약관](/free-pro-team@latest/github/site-policy/github-terms-of-service/)이 적용됩니다.

### 사용 제한
{% data variables.product.prodname_pages %} 사이트에는 다음과 같은 사용 제한이 적용됩니다.

  - {% data variables.product.prodname_pages %} 소스 리포지토리의 권장 제한은 1GB입니다.{% ifversion fpt or ghec %} 자세한 내용은 “[내 디스크 할당량이란?](/articles/what-is-my-disk-quota/#file-and-repository-size-limitations)” {% endif %}
  - 게시된 {% data variables.product.prodname_pages %} 사이트는 1GB 이하일 수 있습니다.
{% ifversion fpt or ghec %}
  - {% data variables.product.prodname_pages %} 사이트에는 매월 100GB의 *소프트* 대역폭 제한이 있습니다.
  - {% data variables.product.prodname_pages %} 사이트에는 시간당 10개의 *소프트* 제한이 있습니다.{% ifversion pages-custom-workflow %} 사용자 지정 {% data variables.product.prodname_actions %} 워크플로를 사용하여 사이트를 빌드하고 게시하는 경우에는 이 제한이 적용되지 않습니다.{% endif %}
  - 모든 {% data variables.product.prodname_pages %} 사이트에 일관된 서비스 품질을 제공하기 위해 속도 제한이 적용될 수 있습니다. 이러한 속도 제한은 {% data variables.product.prodname_pages %}의 합법적인 사용을 방해하기 위한 것이 아닙니다. 요청이 속도 제한을 트리거하는 경우 정보를 제공하는 HTML 본문과 함께 HTTP 상태 코드가 `429`인 적절한 응답을 받게 됩니다.

사이트가 이러한 사용 할당량을 초과하면 사이트를 제공하지 못하거나 {% data variables.contact.contact_support %}에서 사이트 앞에 타사 CDN(Content Distribution Network)을 배치하거나, 릴리스와 같은 다른 {% data variables.product.prodname_dotcom %} 기능을 사용하거나, 요구 사항에 더 잘 맞는 다른 호스팅 서비스로 이동하는 등 사이트에 미치는 영향을 줄이기 위한 전략을 제안하는 친절한 메일을 받을 수 있습니다.

{% endif %}

## {% data variables.product.prodname_pages %}의 MIME 형식

MIME 형식은 서버가 브라우저로 보내는 헤더로, 브라우저에서 요청한 파일의 특성 및 형식에 대한 정보를 제공합니다. {% data variables.product.prodname_pages %}는 수천 개의 파일 확장명 중 750개 이상의 MIME 형식을 지원합니다. 지원되는 MIME 형식 목록은 [mime-db 프로젝트에서](https://github.com/jshttp/mime-db) 생성됩니다.

파일별 또는 리포지토리별로 사용자 지정 MIME 형식을 지정할 수는 없지만 {% data variables.product.prodname_pages %}에서 사용할 MIME 형식을 추가하거나 수정할 수 있습니다. 자세한 내용은 [mime-db 기여 지침](https://github.com/jshttp/mime-db#adding-custom-media-types).

{% ifversion fpt %}
## 데이터 수집

{% data variables.product.prodname_pages %} 사이트를 방문하면 방문자가 {% data variables.product.prodname_dotcom %}에 로그인했는지 여부에 관계없이 보안 목적으로 방문자의 IP 주소가 기록되고 저장됩니다. {% data variables.product.prodname_dotcom %}의 보안 사례에 대한 자세한 내용은 <a href="/articles/github-privacy-statement/" class="dotcom-only">{% data variables.product.prodname_dotcom %} 개인정보처리방침</a>을 참조하세요.
{% endif %}

## 추가 참고 자료

- {% data variables.product.prodname_learning %}의 [{% data variables.product.prodname_pages %}](https://github.com/skills/github-pages)
- “[{% data variables.product.prodname_pages %}](/rest/reference/repos#pages)”
