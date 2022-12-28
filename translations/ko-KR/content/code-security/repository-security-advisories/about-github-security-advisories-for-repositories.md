---
title: 리포지토리에 대한 GitHub 보안 공지 정보
intro: '{% data variables.product.prodname_security_advisories %}를 사용하여 리포지토리의 보안 취약성에 대한 정보를 비공개로 논의하고 수정하고 게시할 수 있습니다.'
redirect_from:
- /articles/about-maintainer-security-advisories
- /github/managing-security-vulnerabilities/about-maintainer-security-advisories
- /github/managing-security-vulnerabilities/about-github-security-advisories
- /code-security/security-advisories/about-github-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Security advisories
- Vulnerabilities
- CVEs
shortTitle: Repository security advisories
ms.openlocfilehash: 5c8ad99a2bee30f52a185fa15421bc6b23429fbf
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145087577"
---
{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## {% data variables.product.prodname_security_advisories %} 정보

{% data reusables.security-advisory.disclosing-vulnerabilities %} 자세한 내용은 “[보안 취약성의 조정된 정보 공개](/code-security/repository-security-advisories/about-coordinated-disclosure-of-security-vulnerabilities)”를 참조하세요.

{% data reusables.security-advisory.security-advisory-overview %}

{% data variables.product.prodname_security_advisories %}를 사용하여 다음을 수행할 수 있습니다.

1. 초안 보안 공지를 만들고 초안을 사용하여 취약성이 프로젝트에 미치는 영향을 비공개로 논의합니다. 자세한 내용은 “[리포지토리 보안 공지 만들기](/code-security/repository-security-advisories/creating-a-repository-security-advisory)”를 참조하세요.
2. 프라이빗 협업을 통해 임시 프라이빗 포크의 취약성을 해결합니다.
3. 패치가 릴리스되면 보안 공지를 게시하여 커뮤니티에 취약성을 경고합니다. 자세한 내용은 “[리포지토리 보안 공지 게시](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)”를 참조하세요.

{% data reusables.repositories.security-advisories-republishing %}

보안 공지에 기여한 개인의 기여를 인정할 수 있습니다. 자세한 내용은 “[리포지토리 보안 공지 편집](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories)”을 참조하세요.

{% data reusables.repositories.security-guidelines %}

리포지토리에서 보안 공지를 만든 경우 보안 공지는 리포지토리에 남아 있습니다. 종속성 그래프에서 지원하는 에코시스템에 대한 보안 공지를 [github.com/advisories](https://github.com/advisories) {% data variables.product.prodname_advisory_database %}에 게시합니다. 누구나 {% data variables.product.prodname_advisory_database %}에 게시된 공지에 변경 내용을 제출할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_advisory_database %}에서 보안 공지 편집](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)”을 참조하세요.

특히 npm에 대한 보안 공지가 있는 경우 npm 보안 공지에 공지를 게시합니다. 자세한 내용은 [npmjs.com/advisories](https://www.npmjs.com/advisories)를 참조하세요.

{% data reusables.repositories.github-security-lab %}

## CVE ID 번호

{% data variables.product.prodname_security_advisories %}는 CVE(Common Vulnerabilities and Exposures) 목록의 기초를 기반으로 합니다. {% data variables.product.prodname_dotcom %}의 보안 공지 양식은 CVE 설명 형식과 일치하는 표준화된 양식입니다. 

{% data variables.product.prodname_dotcom %}는 CNA(CVE Numbering Authority)이며 CVE ID 번호를 할당할 권한이 있습니다. 자세한 내용은 CVE 웹 사이트의 “[CVE 정보](https://www.cve.org/About/Overview)” 및 “[CVE Numbering Authorities](https://www.cve.org/ProgramOrganization/CNAs)”를 참조하세요.

{% data variables.product.prodname_dotcom %}에서 퍼블릭 리포지토리에 대한 보안 공지를 만들 때 보안 취약성에 대한 기존 CVE ID 번호를 제공하는 옵션이 있습니다. {% data reusables.repositories.request-security-advisory-cve-id %}

보안 공지를 게시하고 {% data variables.product.prodname_dotcom %}에서 취약성에 CVE ID 번호를 할당하면 {% data variables.product.prodname_dotcom %}는 CVE를 MITRE 데이터베이스에 게시합니다.
자세한 내용은 “[리포지토리 보안 공지 게시](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)”를 참조하세요.

## 게시된 보안 공지에 대한 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.github-reviews-security-advisories %}
