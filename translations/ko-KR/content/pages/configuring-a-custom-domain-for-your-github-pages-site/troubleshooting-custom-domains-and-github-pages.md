---
title: 사용자 지정 도메인 및 GitHub Pages 문제 해결
intro: '일반적인 오류를 확인하여 {% data variables.product.prodname_pages %} 사이트의 사용자 지정 도메인 또는 HTTPS 문제를 해결할 수 있습니다.'
redirect_from:
  - /articles/my-custom-domain-isn-t-working
  - /articles/custom-domain-isn-t-working
  - /articles/troubleshooting-custom-domains
  - /articles/troubleshooting-custom-domains-and-github-pages
  - /github/working-with-github-pages/troubleshooting-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Troubleshoot a custom domain
ms.openlocfilehash: ce6251dbe96d531462c5c664dc9000f138059889
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147428390'
---
## _CNAME_ 오류

{% ifversion pages-custom-workflow %}사용자 지정 {% data variables.product.prodname_actions %} 워크플로에서 게시하는 경우 _CNAME_ 파일은 모두 무시되므로 필요하지 않습니다.{% endif %}

분기에서 게시하는 경우 사용자 지정 도메인은 게시 원본의 루트에 있는 _CNAME_ 파일에 저장됩니다. 이 파일은 리포지토리 설정을 통해 또는 수동으로 추가하거나 업데이트할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트의 사용자 지정 도메인 관리](/articles/managing-a-custom-domain-for-your-github-pages-site)”를 참조하세요.

사이트가 올바른 도메인에서 렌더링되도록 하려면 _CNAME_ 파일이 리포지토리에 여전히 있는지 확인하세요. 예를 들어 많은 정적 사이트 생성기는 리포지토리로 강제 푸시하는데, 이로 인해 사용자 지정 도메인을 구성할 때 리포지토리에 추가된 _CNAME_ 파일을 덮어쓸 수 있습니다. 사이트를 로컬로 빌드하고 생성된 파일을 {% data variables.product.product_name %}로 푸시하는 경우 먼저 _CNAME_ 파일을 로컬 리포지토리에 추가한 커밋을 끌어와서 이 파일이 빌드에 포함되도록 해야 합니다.

그런 다음 _CNAME_ 파일의 형식이 올바르게 지정되었는지 확인합니다.

- _CNAME_ 파일 이름은 모두 대문자여야 합니다.
- _CNAME_ 파일에는 도메인이 하나만 포함될 수 있습니다. 사이트에 여러 도메인을 가리키려면 DNS 공급자를 통해 리디렉션을 설정해야 합니다.
- _CNAME_ 파일에는 도메인 이름만 포함되어야 합니다. `www.example.com`, `blog.example.com` 또는 `example.com`).
- 도메인 이름은 모든 {% data variables.product.prodname_pages %} 사이트에서 고유해야 합니다. 예를 들어 다른 리포지토리의 _CNAME_ 파일에 `example.com`이 포함된 경우 리포지토리의 _CNAME_ 파일에서 `example.com`을 사용할 수 없습니다.

## 잘못된 DNS 구성

사이트의 기본 도메인을 사용자 지정 도메인으로 가리키는 데 문제가 있는 경우 DNS 공급자에게 문의하세요.

다음 방법 중 하나를 사용하여 사용자 지정 도메인의 DNS 레코드가 올바르게 구성되었는지 여부를 테스트할 수도 있습니다.

- CLI 도구(예: `dig`). 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트에 대한 사용자 지정 도메인 관리](/articles/managing-a-custom-domain-for-your-github-pages-site)를 참조하세요.
- 온라인 DNS 조회 도구

## 지원되지 않는 사용자 지정 도메인 이름

사용자 지정 도메인이 지원되지 않는 경우 도메인을 지원되는 도메인으로 변경해야 할 수 있습니다. DNS 공급자에게 문의하여 도메인 이름에 대한 전달 서비스를 제공하는지 확인할 수도 있습니다.

사이트가 다음을 수행하지 않는지 확인하세요.
- 둘 이상의 apex 도메인을 사용합니다. 예를 들어 `example.com` 및 `anotherexample.com`이 포함되어 있습니다.
- 둘 이상의 `www` 하위 도메인을 사용합니다. 예를 들어 `www.example.com` 및 `www.anotherexample.com`이 포함되어 있습니다.
- apex 도메인과 사용자 지정 하위 도메인을 둘 다 사용합니다. 예를 들어 `example.com` 및 `docs.example.com`이 포함되어 있습니다.

  한 가지 예외는 `www` 하위 도메인입니다. 올바르게 구성된 경우 `www` 하위 도메인이 자동으로 apex 도메인으로 리디렉션됩니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트의 사용자 지정 도메인 관리](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)”를 참조하세요.

{% data reusables.pages.wildcard-dns-warning %}

지원되지 않는 사용자 지정 도메인 목록은 “[사용자 지정 도메인 및 {% data variables.product.prodname_pages %} 정보](/articles/about-custom-domains-and-github-pages/#supported-custom-domains)”를 참조하세요.

## HTTPS 오류

`CNAME`, `ALIAS`, `ANAME` 또는 `A` DNS 레코드를 사용하여 올바르게 구성된 사용자 지정 도메인을 사용하는 {% data variables.product.prodname_pages %} 사이트에는 HTTPS를 통해 액세스할 수 있습니다. 자세한 내용은 “[를 사용하여 {% data variables.product.prodname_pages %} 사이트 보호](/articles/securing-your-github-pages-site-with-https)”를 참조하세요.

사용자 지정 도메인을 구성한 후 HTTPS를 통해 사이트를 사용할 수 있게 되는 데 최대 1시간이 걸릴 수 있습니다. 기존 DNS 설정을 업데이트한 후에는 HTTPS를 사용하도록 설정하는 프로세스를 트리거하기 위해 사용자 지정 도메인을 제거하고 사이트의 리포지토리에 다시 추가해야 할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트의 사용자 지정 도메인 관리](/articles/managing-a-custom-domain-for-your-github-pages-site)”를 참조하세요.

CAA(인증 기관 권한 부여) 레코드를 사용하는 경우 HTTPS를 통해 사이트에 액세스하려면 `letsencrypt.org` 값과 함께 CAA 레코드가 하나 이상 있어야 합니다. 자세한 내용은 Let's Encrypt 설명서의 “[CAA(인증 기관 권한 부여)](https://letsencrypt.org/docs/caa/)”를 참조하세요.

## Linux에서 URL 서식 지정

사이트의 URL에 대시로 시작하거나 끝나는 사용자 이름 또는 조직 이름이 포함되어 있거나 연속 대시가 포함된 경우 Linux를 사용하여 검색하는 사용자는 사이트를 방문하려고 할 때 서버 오류가 발생합니다. 이 문제를 해결하려면 {% data variables.product.product_name %} 사용자 이름을 변경하여 영숫자가 아닌 문자를 제거합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 사용자 이름 변경](/articles/changing-your-github-username/)”을 참조하세요.

## 브라우저 캐시

최근에 사용자 지정 도메인을 변경하거나 제거했으며 브라우저에서 새 URL에 액세스할 수 없는 경우 새 URL에 도달하려면 브라우저의 캐시를 지워야 할 수 있습니다. 캐시 지우기에 관한 자세한 내용은 브라우저의 설명서를 참조하세요.
