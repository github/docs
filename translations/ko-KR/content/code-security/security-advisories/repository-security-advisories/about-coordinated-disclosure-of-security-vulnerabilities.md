---
title: 보안 취약성의 조정된 공개 정보
intro: 취약성 공개는 보안 보고자 및 리포지토리 유지 관리자 간의 조정된 노력입니다.
redirect_from:
- /code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities
- /code-security/repository-security-advisories/about-coordinated-disclosure-of-security-vulnerabilities
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Security advisories
- Vulnerabilities
shortTitle: Coordinated disclosure
ms.openlocfilehash: c451554e08b4193ca20f9af8a5e694750808bf19
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: "148114154"
---
## 업계의 취약성 공개 정보

{% data reusables.security-advisory.disclosing-vulnerabilities %}

취약성에 대한 초기 보고서는 비공개로 이루어지며, 전체 세부 정보는 유지 관리자가 문제를 인정하고 수정 또는 패치를 사용할 수 있게 한 후에만 게시되고 경우에 따라 패치를 설치하는 데 더 많은 시간을 허용하기 위해 지연이 있을 수 있습니다. 자세한 내용은 OWASP 치트 시트 시리즈 웹사이트에서 “[취약성 공개에 대한 OWASP 치트 시트 시리즈](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html#commercial-and-open-source-software)”를 참조하세요.

### 취약성 보고자를 위한 모범 사례

취약성을 유지 관리자에게 비공개로 보고하는 것이 좋습니다. 취약점 보고자는 가능하면 다음을 피하는 것이 좋습니다.
- 유지 관리자에게 수정 기회를 주지 않고 취약성을 공개적으로 공개합니다.
- 유지 관리기를 무시합니다.
- 수정된 버전의 코드를 사용할 수 있게 되기 전에 취약성을 공개합니다.
- 퍼블릭 장려금 프로그램이 없는 문제를 보고하면서 그에 대한 보상을 기대합니다.

취약성 보고자가 유지 관리자에게 연락을 시도했지만 응답을 받지 못했거나 공개하기 위해 너무 오래 기다려야 하는 경우 일정 기간 후에 공개적으로 취약성을 공개하는 것은 허용됩니다. 

취약성 보고자는 보고 프로세스의 일부로 공개 정책의 조건을 명확하게 명시하는 것이 좋습니다. 취약성 보고자가 엄격한 정책을 준수하지 않더라도 의도한 취약성 공개에 대해 타임라인 측면에서 유지 관리자에 대한 명확한 기대치를 설정하는 것이 좋습니다. 공개 정책의 예는 GitHub Security Lab 웹 사이트의 “[보안 랩의 공개 정책](https://securitylab.github.com/advisories#policy)”을 참조하세요.

### 유지 관리자를 위한 모범 사례

유지 관리자는 취약성에 대한 보고서를 수신할 방법과 위치를 명확하게 지정하는 것이 좋습니다. 이 정보를 명확하게 사용할 수 없는 경우 취약성 보고자는 사용자에게 연락하는 방법을 모르고 git 커밋 기록에서 개발자 메일 주소를 추출하여 적절한 보안 연락처를 찾으려고 할 수 있습니다. 이로 인해 마찰, 보고서 손실 또는 해결되지 않은 보고서 게시가 발생할 수 있습니다.

유지 관리자는 적시에 취약성을 공개해야 합니다. 리포지토리에 보안 취약성이 있는 경우 다음을 수행하는 것이 좋습니다.
- 응답과 공개 모두에서 취약성을 간단한 버그가 아닌 보안 문제로 취급합니다. 예를 들어 릴리스 정보에서 문제가 보안 취약성임을 명시적으로 언급해야 합니다.
- 조사에 사용할 수 있는 즉각적인 리소스가 없더라도 가능한 한 빨리 취약성 보고서 수신을 확인합니다. 이렇게 하면 신속하게 대응하고 행동한다는 메시지를 보내고 귀하와 취약성 보고자 사이의 나머지 상호 작용에서 긍정적인 분위기를 조성합니다.
- 보고서의 영향과 진실성을 확인할 때 취약성 보고자가 참여하도록 합니다. 취약성 보고자는 이미 다양한 시나리오에서 취약성을 고려하는 데 시간을 할애했을 것이며 그중 일부는 귀하가 고려하지 않았을 수 있습니다.
- 취약성 보고자가 제공하는 우려와 조언을 신중하게 고려하여 적합한 방식으로 문제를 해결합니다. 종종 취약성 보고자는 보안 연구 배경 없이 놓치기 쉬운 특정 비정상 사례 및 수정 우회에 대한 지식이 있습니다.
- 발견에 대한 기여를 인정할 때 항상 취약성 보고자를 언급하세요.
- 가능한 한 빨리 수정 사항을 게시하는 것을 목표로 합니다.
- 취약성을 공개할 때 더 넓은 에코시스템에 문제 및 수정 사항을 알립니다. 프로젝트의 현재 개발 분기에서 인식된 보안 문제가 해결되었지만 커밋 또는 후속 릴리스가 보안 수정 또는 릴리스로 명시적으로 표시되지 않는 경우를 보는 것은 드문 일이 아닙니다. 이로 인해 다운스트림 소비자에게 문제가 발생할 수 있습니다.

보안 취약성의 세부 정보를 공개한다고 해서 유지 관리자가 나쁘게 보이지는 않습니다. 보안 취약성은 소프트웨어의 모든 곳에 존재하며 사용자는 코드에서 보안 취약성을 공개하기 위한 명확하고 확립된 프로세스가 있는 유지 관리자를 신뢰합니다.

## {% data variables.product.prodname_dotcom %}에 대한 프로젝트의 취약성 보고 및 정보 공개

{% data variables.product.prodname_dotcom_the_website %}에 대한 프로젝트의 취약성을 보고하고 공개하는 프로세스는 다음과 같습니다.

 취약성을 보고하려는 취약성 보고자(예: 보안 연구원)인 경우 먼저 관련 리포지토리에 대한 보안 정책이 있는지 확인합니다. 자세한 내용은 “[보안 정책 정보](/code-security/getting-started/adding-a-security-policy-to-your-repository#about-security-policies)”를 참조하세요. 보안 정책이 있는 경우 이를 읽고 해당 리포지토리에 대한 보안 팀에 문의하기 전에 프로세스를 이해합니다. 
 
 보안 정책이 마련되지 않은 경우 유지 관리자와 개인 통신 수단을 설정하는 가장 효율적인 방법은 선호하는 보안 연락처를 요청하는 문제를 만드는 것입니다. 문제가 즉시 공개적으로 표시되므로 버그에 대한 정보를 포함하지 않아야 합니다. 통신이 설정되면 유지 관리자가 나중에 사용할 보안 정책을 정의할 것을 제안할 수 있습니다.

{% note %}

**참고**: _npm만 해당_ - npm 패키지에 포함된 맬웨어 보고서를 받으면 비공개로 연락을 드리겠습니다. 이 문제를 적시에 해결하지 않으면 공개할 것입니다. 자세한 내용은 npm Docs 웹 사이트의 “[npm 패키지에서 맬웨어 보고](https://docs.npmjs.com/reporting-malware-in-an-npm-package)”를 참조하세요.

{% endnote %}

 {% data variables.product.prodname_dotcom_the_website %}에서 보안 취약성을 발견한 경우 조정된 공개 프로세스를 통해 취약성을 보고하세요. 자세한 내용은 [{% data variables.product.prodname_dotcom %} 보안 버그 장려금](https://bounty.github.com/) 웹 사이트를 참조하세요.

 유지 관리자인 경우 리포지토리에 대한 보안 정책을 설정하거나 프로젝트의 추가 정보 파일과 같이 보안 보고 지침을 명확하게 사용할 수 있도록 하여 파이프라인의 시작 부분에서 프로세스의 소유권을 가져올 수 있습니다. 보안 정책 추가에 대한 자세한 내용은 “[보안 정책 정보](/code-security/getting-started/adding-a-security-policy-to-your-repository#about-security-policies)”를 참조하세요. 보안 정책이 없는 경우 취약성 보고자가 메일을 보내거나 비공개로 연락을 시도할 가능성이 큽니다. 또는 누군가가 보안 문제에 대한 세부 정보와 함께 (퍼블릭) 문제를 열 수 있습니다.

 유지 관리자로서 코드의 취약성을 공개하려면 먼저 {% data variables.product.prodname_dotcom %}의 패키지 리포지토리에 보안 공지 초안을 만듭니다. {% data reusables.security-advisory.security-advisory-overview %} 자세한 내용은 "[리포지토리 보안 권고 정보](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories)"를 참조하세요.


 시작하려면 “[리포지토리 보안 공지 만들기](/code-security/repository-security-advisories/creating-a-repository-security-advisory)”를 참조하세요.
