---
title: Adding a security policy to your repository(리포지토리에 보안 정책 추가)
intro: 리포지토리에 보안 정책을 추가하여 프로젝트의 보안 취약성을 보고하는 방법에 대한 지침을 제공할 수 있습니다.
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
  - /github/code-security/security-advisories/adding-a-security-policy-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Security policies
  - Vulnerabilities
  - Repositories
  - Health
shortTitle: Add a security policy
ms.openlocfilehash: ef4a256c06b9149bd9db8d7afdce974dd1d29f0d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159271'
---
## 보안 정책 정보

사용자에게 프로젝트의 보안 취약성을 보고하기 위한 지침을 제공하려면{% ifversion fpt or ghes or ghec %} 리포지토리의 루트에 _SECURITY.md_ 파일, `docs` 또는 `.github` 폴더를 추가할 수 있습니다.{% else %} 리포지토리의 루트나 `docs` 폴더에 _SECURITY.md_ 파일을 추가할 수 있습니다.{% endif %} 누군가가 리포지토리에 문제를 발생시키면 프로젝트의 보안 정책에 대한 링크가 표시됩니다.

{% ifversion not ghae %}
<!-- no public repos in GHAE -->
조직 또는 개인 계정에 대한 기본 보안 정책을 만들 수 있습니다. 자세한 내용은 “[기본 커뮤니티 상태 파일 만들기](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”를 참조하세요.
{% endif %}

{% tip %}

**팁:** 사용자가 보안 정책을 찾을 수 있도록 리포지토리의 다른 위치(예: 추가 정보 파일)에서 _SECURITY.md_ 파일에 연결할 수 있습니다. 자세한 내용은 “[추가 정보](/articles/about-readmes)”를 참조하세요.

{% endtip %}

{% ifversion fpt or ghec %} 누군가 프로젝트의 보안 취약점을 보고한 후 {% data variables.product.prodname_security_advisories %}를 사용하여 취약점에 대한 정보를 공개, 수정, 게시할 수 있습니다. {% data variables.product.prodname_dotcom %}의 취약성을 보고하고 공개하는 프로세스에 대한 자세한 내용은 “[보안 취약성의 조정된 공개 정보](/code-security/security-advisories/guidance-on-reporting-and-writing/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)”를 참조하세요. 리포지토리 보안 권고에 대한 자세한 내용은 "[리포지토리 보안 권고 정보](/github/managing-security-vulnerabilities/about-github-security-advisories)"를 참조하세요.

{% data reusables.repositories.github-security-lab %} {% endif %} {% ifversion ghes or ghae %}
<!-- alternative to the content about GitHub Security Advisories in the dotcom article -->
보안 보고 지침을 명확하게 사용할 수 있도록 하여 사용자가 선호하는 통신 채널을 통해 리포지토리에서 찾은 모든 보안 취약성을 쉽게 보고할 수 있습니다.
{% endif %}

## Adding a security policy to your repository(리포지토리에 보안 정책 추가)

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
3. 왼쪽 사이드바에서 **보안 정책** 을 클릭합니다.
  ![보안 정책 탭](/assets/images/help/security/security-policy-tab.png)
4. **설치 시작** 을 클릭합니다.
  ![시작 설정 단추](/assets/images/help/security/start-setup-security-policy-button.png)
5. 새 _SECURITY.md_ 파일에서 지원되는 프로젝트 버전에 대한 정보와 취약성 보고 방법을 추가합니다.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## 추가 참고 자료

- “[리포지토리 보안 유지](/code-security/getting-started/securing-your-repository)”{% ifversion not ghae %}
- “[정상 기여를 위해 프로젝트 설정](/communities/setting-up-your-project-for-healthy-contributions)”{% endif %}{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}
