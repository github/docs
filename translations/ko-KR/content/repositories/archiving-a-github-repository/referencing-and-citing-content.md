---
title: 콘텐츠 참조 및 인용
intro: 타사 도구를 사용하여 GitHub에서 콘텐츠를 인용하고 참조할 수 있습니다.
redirect_from:
  - /articles/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/referencing-and-citing-content
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Reference & cite content
ms.openlocfilehash: 8630d83f90cc702a4be910264584ad57a988ff59
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099229'
---
## Zenodo를 사용하여 리포지토리에 대한 영구 식별자 발급

학술 문헌에서 리포지토리를 더 쉽게 참조할 수 있도록 하려면 DOI(디지털 개체 식별자)라고도 하는 영구 식별자를 만들 수 있습니다. 데이터 보관 도구 [Zenodo](https://zenodo.org/about) 를 사용하여 {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}에 리포지토리를 보관하고 보관에 대한 DOI를 실행할 수 있습니다.

{% tip %}

**팁:**
- Zenodo는 퍼블릭 리포지토리에만 액세스할 수 있으므로 보관하려는 리포지토리가 [퍼블릭](/articles/making-a-private-repository-public)인지 확인하세요.
- 조직에 속한 리포지토리를 보관하려는 경우 조직 소유자는 Zenodo 애플리케이션에 대한 [액세스를 승인](/articles/approving-oauth-apps-for-your-organization)해야 할 수 있습니다.
- 내 작업을 다시 사용할 수 있는 방법을 독자가 알 수 있도록 리포지토리에 [라이선스](/articles/open-source-licensing)를 포함해야 합니다.

{% endtip %}

1. [Zenodo](http://zenodo.org/)로 이동합니다.
2. 화면의 왼쪽 상단에서 **로그인** 을 클릭합니다. ![Zenodo 로그인 단추](/assets/images/help/repository/zenodo_login.png)
3. **GitHub로 로그인** 을 클릭합니다. ![GitHub로 Zenodo에 로그인](/assets/images/help/repository/zenodo_login_with_github.png)
4. 액세스 권한에 대한 정보를 검토한 다음 **애플리케이션 권한 부여** 를 클릭합니다. ![Zenodo 권한 부여](/assets/images/help/repository/zenodo_authorize.png)
5. [Zenodo GitHub 페이지](https://zenodo.org/account/settings/github/)로 이동합니다. ![Zenodo GitHub 페이지](/assets/images/help/repository/zenodo_github_page.png)
6. 보관하려는 리포지토리 이름 오른쪽에 있는 단추를 **끄기** 에서 **켜기** 로 전환하여 보관할 수 있도록 설정합니다. ![리포지토리에서 Zenodo 보관 사용](/assets/images/help/repository/zenodo_toggle_on.png)

Zenodo는 리포지토리를 보관하고 새 {% data variables.product.product_name %} [릴리스](/articles/about-releases/)를 만들 때마다 새 DOI를 발급합니다. “[릴리스 만들기](/articles/creating-releases/)”의 단계에 따라 새 릴리스를 만듭니다.

## Figshare를 사용하여 연구 자료 공개 및 인용

학계는 데이터 관리 서비스 [Figshare](http://figshare.com)를 사용하여 연구 자료를 공개 및 인용할 수 있습니다. 자세한 내용은 [Figshare의 지원 사이트](https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account)를 참조하세요.
