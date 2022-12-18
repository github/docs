---
title: 커밋 서명 확인 정보
intro: 'GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} 또는 S/MIME를 사용하여 태그에 서명하고 로컬로 커밋할 수 있습니다. 이러한 태그 또는 커밋은 {% data variables.product.product_name %}에서 확인된 것으로 표시되므로 다른 사용자가 신뢰할 수 있는 원본에서 변경 내용을 확인할 수 있습니다.'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures
  - /articles/about-gpg
  - /articles/about-commit-signature-verification
  - /github/authenticating-to-github/about-commit-signature-verification
  - /github/authenticating-to-github/managing-commit-signature-verification/about-commit-signature-verification
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Commit signature verification
ms.openlocfilehash: 057552cd3004c4a29cf12a4676b949bfda2a77f2
ms.sourcegitcommit: 53fb7ebd6bb3da16ded794c4e0c50b0746f7a162
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101685'
---
## 커밋 서명 확인 정보

커밋 및 태그에 로컬로 서명하여 다른 사용자에게 변경 내용의 출처에 대한 확신을 줄 수 있습니다. 커밋 또는 태그에 암호화적으로 확인할 수 있는 GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} 또는 S/MIME 서명이 있는 경우 {% data variables.product.product_name %}는 커밋 또는 태그 {% ifversion fpt or ghec %}“확인됨” 또는 “부분적으로 확인됨”을 표시합니다.{% else %}“확인됨”을 표시합니다.{% endif %}

![확인된 커밋](/assets/images/help/commits/verified-commit.png)

{% ifversion ghes or ghae %} 커밋 또는 태그에 확인할 수 없는 서명이 있는 경우 {% data variables.product.product_name %}는 커밋 또는 태그를 “미확인”으로 표시합니다.
{% endif %}

{% ifversion ssh-commit-verification %} 대부분의 개별 사용자의 경우 GPG 또는 SSH가 커밋 서명에 가장 적합한 선택입니다. S/MIME 서명은 일반적으로 대규모 조직에서 필요합니다. SSH 서명은 가장 간단하게 생성할 수 있습니다. 기존 인증 키를 {% data variables.product.product_name %}에 업로드하여 서명 키로 사용할 수도 있습니다. GPG 서명 키 생성은 SSH 키를 생성하는 것보다 더 복잡하지만 GPG에는 SSH에 없는 기능이 있습니다. GPG 키는 더 이상 사용되지 않을 때 만료되거나 철회될 수 있습니다. {% data variables.product.product_name %}에는 키가 손상된 것으로 표시되지 않는 한 “확인됨”과 같은 키로 서명된 커밋이 표시됩니다. SSH 키에는 이 기능이 없습니다.
{% endif %}

{% ifversion fpt or ghec %} 커밋 및 태그는 경계 모드를 사용하도록 설정했는지 여부에 따라 다음과 같은 확인 상태를 갖습니다. 기본적으로 경계 모드는 사용하도록 설정되지 않습니다. 경계 모드를 사용하도록 설정하는 방법에 대한 자세한 내용은 “[모든 커밋에 대한 확인 상태 표시](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)”를 참조하세요.

{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

커밋 서명은 커밋 승인과 다릅니다. 커밋 승인에 대한 자세한 내용은 “[리포지토리에 대한 커밋 승인 정책 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)”를 참조하세요.

### 기본 상태

| 상태         | 설명 |
| -------------- | ----------- |
| **Verified**   | 커밋이 서명되고 서명이 성공적으로 확인되었습니다.
| **미확인** | 커밋이 서명되었지만 서명을 확인할 수 없습니다.
| 확인 상태 없음 | 커밋이 서명되지 않았습니다.

### 재지정 및 병합용 서명 확인
{% data reusables.pull_requests.rebase_and_merge_verification %}

자세한 내용은 “[내 커밋 재지정 및 병합](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github#rebasing-and-merging-your-commits)”을 참조하세요.

### 경계 모드가 설정된 상태

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

{% endif %}


리포지토리 관리자는 분기에 필요한 커밋 서명을 적용하여 서명 및 확인되지 않은 모든 커밋을 차단할 수 있습니다. 자세한 내용은 “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches#require-signed-commits)”를 참조하세요.

{% data reusables.identity-and-permissions.verification-status-check %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% ifversion ghes %}사이트 관리자가 웹 커밋 서명을 사용하도록 설정한 경우 {% data variables.product.product_name %}은(는) 자동으로 GPG를 사용하여 웹 인터페이스를 사용하여 커밋에 서명합니다. {% data variables.product.product_name %}이(가) 서명한 커밋은 확인된 상태가 됩니다. `https://HOSTNAME/web-flow.gpg`에서 사용할 수 있는 퍼블릭 키를 사용하여 로컬로 서명을 확인할 수 있습니다. 자세한 내용은 “[웹 커밋 서명 구성](/admin/configuration/configuring-your-enterprise/configuring-web-commit-signing)”을 참조하세요.
{% else %}{% data variables.product.prodname_dotcom %}은(는) 자동으로 GPG를 사용하여 웹 인터페이스를 사용하여 커밋에 서명합니다. {% data variables.product.prodname_dotcom %}이(가) 서명한 커밋은 확인된 상태가 됩니다. https://github.com/web-flow.gpg 에서 사용할 수 있는 퍼블릭 키를 사용하여 로컬로 서명을 확인할 수 있습니다. 키의 전체 지문은 `5DE3 E050 9C47 EA3C F04A 42D3 4AEE 18F8 3AFD EB23`입니다.

필요에 따라 {% data variables.product.prodname_dotcom %} GPG가 {% data variables.product.prodname_github_codespaces %}에서 커밋에 서명하도록 선택할 수 있습니다. Codespace에 대해 GPG 확인을 사용하도록 설정하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}에 대한 GPG 확인 관리](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)”를 참조하세요.{% endif %} {% endif %}

## GPG 커밋 서명 확인

GPG를 사용하여 직접 생성하는 GPG 키를 사용하여 커밋에 서명할 수 있습니다.

{% 데이터 variables.product.product_name %}은(는) OpenPGP 라이브러리를 사용하여 {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}에서 계정에 추가한 공개 키에 대해 로컬로 서명된 커밋 및 태그를 암호화하여 확인할 수 있는지 확인합니다.

GPG를 사용하여 커밋에 서명하고 {% data variables.product.product_name %}에서 해당 커밋을 확인하려면 다음 단계를 수행합니다.

1. [기존 GPG 키 확인](/articles/checking-for-existing-gpg-keys)
2. [새 GPG 키 생성](/articles/generating-a-new-gpg-key)
3. [GitHub 계정에 GPG 키 추가](/articles/adding-a-gpg-key-to-your-github-account)
4. [서명 키에 대해 Git에 알리기](/articles/telling-git-about-your-signing-key)
5. [커밋 서명](/articles/signing-commits)
6. [태그 서명](/articles/signing-tags)

{% ifversion ssh-commit-verification %}
## SSH 커밋 서명 확인

SSH를 사용하여 직접 생성하는 SSH 키를 사용하여 커밋에 서명할 수 있습니다. 자세한 내용은 [Git 참조 설명서를](https://git-scm.com/docs/git-config#Documentation/git-config.txt-usersigningKey) `user.Signingkey`참조하세요. 이미 SSH 키를 사용하여 {% data variables.product.product_name %}(으)로 인증한 경우 서명 키로 사용하기 위해 동일한 키를 다시 업로드할 수도 있습니다. 계정에 추가할 수 있는 서명 키의 개수에는 제한이 없습니다.

{% 데이터 variables.product.product_name %}는 [오픈 소스](https://github.com/github/ssh_data) Ruby 라이브러리인 ssh_data 사용하여 {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 계정에 추가한 공개 키에 대해 로컬로 서명된 커밋 및 태그를 암호화하여 확인할 수 있는지 확인합니다.

{% data reusables.gpg.ssh-git-version %}

SSH를 사용하여 커밋에 서명하고 {% data variables.product.product_name %}에서 해당 커밋을 확인하려면 다음 단계를 수행합니다.

1. [기존 SSH 키 확인](/articles/checking-for-existing-ssh-keys)
2. [새 SSH 키 생성](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
3. [GitHub 계정에 SSH 서명 키 추가](/articles/adding-a-new-ssh-key-to-your-github-account)
4. [서명 키에 대해 Git에 알리기](/articles/telling-git-about-your-signing-key)
5. [커밋 서명](/articles/signing-commits)
6. [태그 서명](/articles/signing-tags)

{% endif %}
## S/MIME 커밋 서명 확인

S/MIME를 사용하여 조직에서 발급한 X.509 키로 커밋에 서명할 수 있습니다.

{% data variables.product.product_name %}은(는) Mozilla 브라우저에서 사용하는 것과 동일한 신뢰 저장소인 [Debian ca-certificates 패키지](https://packages.debian.org/bullseye/ca-certificates)를 사용하여 신뢰할 수 있는 루트 인증서의 퍼블릭 키에 대해 로컬로 서명된 커밋 및 태그를 암호화하여 확인할 수 있는지 확인합니다.

{% data reusables.gpg.smime-git-version %}

S/MIME를 사용하여 커밋에 서명하고 {% data variables.product.product_name %}에서 해당 커밋을 확인하려면 다음 단계를 수행합니다.

1. [서명 키에 대해 Git에 알리기](/articles/telling-git-about-your-signing-key)
2. [커밋 서명](/articles/signing-commits)
3. [태그 서명](/articles/signing-tags)

퍼블릭 키를 {% data variables.product.product_name %}에 업로드할 필요가 없습니다.

{% ifversion fpt or ghec %}
## 봇에 대한 서명 확인

커밋 서명이 필요한 조직 및 {% data variables.product.prodname_github_apps %}은(는) 봇을 사용하여 커밋에 서명할 수 있습니다. 커밋 또는 태그에 암호화된 확인이 가능한 봇 서명이 있는 경우 {% data variables.product.product_name %}은(는) 커밋 또는 태그를 확인된 것으로 표시합니다.

요청이 {% data variables.product.prodname_github_app %} 또는 봇으로 확인 및 인증되고 사용자 지정 작성자 정보, 사용자 지정 커밋자 정보, 커밋 API와 같은 사용자 지정 서명 정보가 없는 경우에만 봇에 대한 서명 확인이 작동합니다.
{% endif %}

## 추가 참고 자료

- “[커밋 서명](/articles/signing-commits)”
- “[태그 서명](/articles/signing-tags)”
- “[커밋 서명 확인 문제 해결](/articles/troubleshooting-commit-signature-verification)”
