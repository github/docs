---
title: 여러 계정 관리
intro: '하나의 워크스테이션을 사용하여 {% 데이터 variables.location.product_location %}에서 둘 이상의 계정에 대한 프로젝트에 기여하는 경우 Git 구성을 수정하여 기여 프로세스를 간소화할 수 있습니다.'
versions:
  feature: multiple-accounts-one-workstation
topics:
  - Accounts
  - Git
  - GitHub
shortTitle: Manage multiple accounts
ms.openlocfilehash: bbf77f262cc6bfb32e53b254ad45d42ec9328d61
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098237'
---
## 여러 계정 관리 정보

경우에 따라 {% 데이터 variables.location.product_location %}에서 여러 계정을 사용해야 할 수 있습니다. 예를 들어 오픈 소스 기여를 위한 개인 계정이 있을 수 있으며, 고용주는 엔터프라이즈 내에서 사용자 계정을 만들고 관리할 수도 있습니다. 

{% 데이터 variables.enterprise.prodname_managed_user %}을(를) 사용하여 {% 데이터 variables.location.product_location %}의 공개 프로젝트에 참여할 수 없으므로 개인 계정을 사용하여 해당 리소스에 기여해야 합니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서의 “[{% data variables.product.prodname_emus %} 정보]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts){% ifversion fpt %}”를 참조하세요.{% elsif ghec %}."{% endif %}

워크스테이션 하나를 사용하여 두 계정에서 기여하려는 경우 혼합한 프로토콜을 사용하여 리포지토리 데이터에 액세스하거나 리포지토리별로 자격 증명을 사용하여 Git에서 기여를 간소화할 수 있습니다.

{% warning %}

**경고**: 워크스테이션 하나를 사용하여 별도 계정 두 개에 기여하는 경우 주의해야 합니다. 둘 이상의 계정을 관리하면 실수로 내부 코드가 유출될 가능성이 높아질 수 있습니다.

{% endwarning %}

{% 데이터 variables.enterprise.prodname_managed_user %}을(를) 사용할 필요가 없는 경우 {% 데이터 variables.product.company_short %}은(는) {% 데이터 variables.location.product_location %}에서 모든 작업에 하나의 개인 계정을 사용하는 것이 좋습니다. 단일 개인 계정을 사용하면 하나의 ID를 사용하여 개인, 오픈 소스 또는 전문 프로젝트의 조합에 기여할 수 있습니다. 다른 사용자는 계정을 초대하여 개인 리포지토리와 조직 소유 리포지토리 둘 다에 기여할 수 있으며, 이 계정은 여러 조직 또는 기업의 구성원일 수 있습니다.

## HTTPS 및 SSH를 사용하여 두 계정에 기여

워크스테이션 하나에서 계정 두 개에 기여하는 경우 각 계정에 대해 다른 프로토콜 및 자격 증명을 사용하여 리포지토리에 액세스할 수 있습니다. 

Git은 HTTPS 또는 SSH 프로토콜을 사용하여 {% 데이터 variables.location.product_location %}의 리포지토리에서 데이터에 액세스하고 업데이트할 수 있습니다. 리포지토리를 복제하는 데 사용하는 프로토콜은 리포지토리에 액세스할 때 워크스테이션이 인증하는 데 사용할 자격 증명을 결정합니다. 계정 관리에 이 방법을 사용하면 HTTPS 연결에 사용할 계정의 자격 증명을 저장하고 SSH 연결에 사용할 다른 계정에 SSH 키를 업로드합니다.

{% data variables.product.product_name %}에서 리포지토리를 복제하기 위한 HTTPS 또는 SSH URL을 둘 다 찾을 수 있습니다. 자세한 내용은 “[리포지토리 복제](/repositories/creating-and-managing-repositories/cloning-a-repository)”를 참조하세요.

SSH를 사용하여 {% data variables.product.product_name %}의 리포지토리에 액세스하는 방법에 대한 자세한 내용은 “[SSH를 사용하여 {% data variables.product.prodname_dotcom %}에 연결](/authentication/connecting-to-github-with-ssh)”을 참조하세요.

## HTTPS 및 {% 데이터 variables.product.pat_generic %}s을(를) 사용하여 여러 계정에 기여

또는 두 계정에 HTTPS 프로토콜을 사용하려는 경우 각 리포지토리에 대해 서로 다른 자격 증명을 저장하도록 Git을 구성하여 각 계정에 대해 서로 다른 {% 데이터 variables.product.pat_generic %}s을(를) 사용할 수 있습니다.

{% mac %}

{% data reusables.git.open-terminal %} {% data reusables.git.confirm-credential-manager %} {% data reusables.git.clear-the-stored-credentials %} {% data reusables.git.no-credential-manager %}
   - 출력이 `osxkeychain`인 경우 macOS KeyChain을 사용합니다. 자격 증명을 지우려면 다음 명령을 입력합니다.

     ```shell{:copy}
     git credential-osxkeychain erase https://github.com
     ```
   {% data reusables.git.clear-stored-gcm-credentials %} {% data reusables.git.cache-on-repository-path %} {% data reusables.accounts.create-personal-access-tokens %} {% data reusables.git.provide-credentials %}

{% endmac %}

{% windows %}

1. Git Bash를 엽니다.
{% data reusables.git.confirm-credential-manager %} {% data reusables.git.clear-the-stored-credentials %} {% data reusables.git.no-credential-manager %} {% data reusables.git.clear-stored-gcm-credentials %}
   - 출력이 `wincred`인 경우 Windows Credential Manager를 사용합니다. 자격 증명을 지우려면 다음 명령을 입력합니다.

     ```shell{:copy}
     cmdkey /delete:LegacyGeneric:target=git:https://github.com
     ```
{% data reusables.git.cache-on-repository-path %} {% data reusables.accounts.create-personal-access-tokens %} {% data reusables.git.provide-credentials %}

{% endwindows %}

{% linux %}

{% data reusables.git.open-terminal %} {% data reusables.git.confirm-credential-manager %} {% data reusables.git.clear-the-stored-credentials %} {% data reusables.git.no-credential-manager %} {% data reusables.git.clear-stored-gcm-credentials %} {% data reusables.git.cache-on-repository-path %} {% data reusables.accounts.create-personal-access-tokens %} {% data reusables.git.provide-credentials %}

{% endlinux %}

## SSH 및 `GIT_SSH_COMMAND`를 사용하여 여러 계정에 기여

두 계정에 대해 SSH 프로토콜을 사용하려는 경우 각 계정에 대해 서로 다른 SSH 키를 사용할 수 있습니다. SSH 사용에 대한 자세한 내용은 “[SSH를 사용하여 {% data variables.product.prodname_dotcom %}에 연결](/authentication/connecting-to-github-with-ssh)”을 참조하세요.

워크스테이션에 복제하는 리포지토리마다 다른 SSH 키를 사용하려면 Git 작업에 대한 셸 래퍼 함수를 작성해야 합니다. 이 함수는 다음 단계를 수행해야 합니다.
1. `git config --get remote.origin.url`과 같은 명령을 사용하여 소유자와 함께 리포지토리의 전체 이름을 확인합니다.
2. 인증에 정확한 SSH 키를 선택합니다.
3. 그에 따라 `GIT_SSH_COMMAND`를 수정합니다. `GIT_SSH_COMMAND`에 대한 자세한 내용은 Git 설명서의 [환경 변수](https://git-scm.com/docs/git#Documentation/git.txt-codeGITSSHCOMMANDcode)를 참조하세요.

예를 들어 다음 명령은 환경 변수를 설정 `GIT_SSH_COMMAND` 하여 인증을 **_위해 PATH/TO/KEY/FILE_** 의 프라이빗 키 파일을 사용하여 {% 데이터 variables.location.product_location %}에 **_OWNER_**/**_REPOSITORY_** 라는 리포지토리를 복제하는 SSH 명령을 지정합니다.

<pre>
GIT_SSH_COMMAND='ssh -i <em>PATH/TO/KEY/FILE</em> -o IdentitiesOnly=yes' git clone git@github.com:<em>OWNER</em>/<em>REPOSITORY</em>
</pre>
