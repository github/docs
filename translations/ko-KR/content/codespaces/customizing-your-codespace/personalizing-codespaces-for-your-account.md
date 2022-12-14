---
title: 계정에 대한 codespace 사용자 지정
shortTitle: Personalize your codespaces
intro: '{% data variables.product.product_name %}의 리포지토리를 사용하거나 설정 동기화를 사용하여 `dotfiles` {% data variables.product.prodname_codespaces %}를 개인 설정할 수 있습니다.'
redirect_from:
- /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
- /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
- /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Set up
- Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 2c136318f3eff0a8caed8900520b8eb8a7772add
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "146681351"
---
## <a name="about-personalizing--data-variablesproductprodname_codespaces-"></a>{% data variables.product.prodname_codespaces %} 사용자 지정 정보

개발 환경을 사용하는 경우 기본 설정 및 워크플로에 설정 및 도구를 사용자 지정하는 것이 중요한 단계입니다. {% data variables.product.prodname_codespaces %}를 사용하면 두 가지 방식으로 코드스페이스를 사용자 지정할 수 있습니다.

- [설정 동기화](#settings-sync) - {% data variables.product.prodname_codespaces %}와 {% data variables.product.prodname_vscode %}의 다른 인스턴스 간에 {% data variables.product.prodname_vscode %}를 사용하고 공유할 수 있습니다.
- [Dot 파일](#dotfiles) – `dotfiles` 리포지토리를 사용하여 스크립트, 셸 기본 설정, 기타 구성을 지정할 수 있습니다.

{% data variables.product.prodname_codespaces %} 사용자 지정은 사용자가 만든 모든 codespace에 적용됩니다.

프로젝트 유지 관리자는 누구나 만든 리포지토리의 모든 코드스페이스에 적용되는 기본 구성을 정의할 수도 있습니다. 자세한 내용은 “[프로젝트에 대한 {% data variables.product.prodname_codespaces %} 구성](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)”

## <a name="settings-sync"></a>설정 동기화

설정 동기화를 사용하면 여러 컴퓨터와 {% data variables.product.prodname_vscode %} 인스턴스에 걸쳐 설정, 바로 가기 키, 코드 조각, 확장, UI 상태와 같은 구성을 공유할 수 있습니다.

설정 동기화를 사용하려면 작업 표시줄의 왼쪽 하단에서 {% octicon "gear" aria-label="The gear icon" %} 아이콘을 선택하고 **설정 동기화 켜기** 를 클릭합니다. 대화 상자에서 동기화하려는 설정을 선택합니다.

![관리 메뉴의 설정 동기화 옵션](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

자세한 내용은 {% data variables.product.prodname_vscode %} 설명서의 [설정 동기화 가이드](https://code.visualstudio.com/docs/editor/settings-sync)를 참조하세요.

## <a name="dotfiles"></a>Dot 파일

Dot 파일은 시스템의 애플리케이션 및 셸 구성을 제어하는 `.`로 시작하는 Unix와 유사한 시스템의 파일 및 폴더입니다. {% data variables.product.prodname_dotcom %}의 리포지토리에 dot 파일을 저장하고 관리할 수 있습니다. dot 파일 리포지토리에 포함할 항목에 대한 조언과 자습서는 [GitHub에서 dot 파일 실행](https://dotfiles.github.io/)을 참조하세요.

dot 파일 리포지토리에는 셸 별칭 및 기본 설정, 설치하려는 도구 또는 만들려는 다른 코드스페이스 사용자 지정이 포함될 수 있습니다.

[{% data variables.product.prodname_codespaces %} 설정](https://github.com/settings/codespaces)에서 해당 리포지토리를 선택하여 소유한 리포지토리의 dot 파일을 사용하도록 {% data variables.product.prodname_codespaces %}를 구성할 수 있습니다.

새 codespace를 만들면 {% data variables.product.prodname_dotcom %}는 선택한 리포지토리를 codespace 환경에 복제하고 환경을 설정하기 위해 다음 파일 중 하나를 찾습니다.

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _script/bootstrap_
* _setup.sh_
* _setup_
* _script/setup_

해당 파일을 찾을 수 없는 경우 `.`로 시작하는 선택한 dot 파일 리포지토리의 모든 파일 또는 폴더가 codespace의 `~` 또는 `$HOME` 디렉터리로 symlink 됩니다.

선택한 dot 파일 리포지토리에 대한 변경 내용은 각 새 codespace에만 적용되며 기존 codespace에는 영향을 주지 않습니다.

{% note %}

**참고:** 현재 {% data variables.product.prodname_codespaces %}는 `dotfiles` 리포지토리를 통한 {% data variables.product.prodname_vscode %} 편집기에서의 사용자 설정 사용자 지정을 지원하지 않습니다. 프로젝트 리포지토리의 특정 프로젝트에 대한 기본 작업 영역 및 원격 [Codespace] 설정을 설정할 수 있습니다.  자세한 내용은 “[개발 컨테이너 소개](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)”를 참조하세요.

{% endnote %}

### <a name="enabling-your-dotfiles-repository-for--data-variablesproductprodname_codespaces-"></a>{% data variables.product.prodname_codespaces %}에 대한 dot 파일 리포지토리 사용

선택한 dot 파일 리포지토리를 사용하여 {% data variables.product.prodname_codespaces %} 환경을 사용자 지정할 수 있습니다. dot 파일 리포지토리를 선택하면 스크립트, 기본 설정, 구성을 추가할 수 있습니다. 그런 다음 개인 {% data variables.product.prodname_codespaces %} 설정 페이지에서 dot 파일을 사용하도록 설정해야 합니다.

{% warning %}

**경고:** Dot 파일에는 예기치 않은 코드 또는 악성 코드가 포함될 수 있는 임의의 스크립트를 실행하는 기능이 있습니다. dot 파일 리포지토리를 설치하기 전에 스크립트가 예기치 않은 작업을 수행하지 않도록 하는 것이 좋습니다.

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. “Dot 파일”에서 {% data variables.product.prodname_codespaces %}가 만드는 모든 새 codespace에 dot 파일을 자동으로 설치하도록 **자동으로 dot 파일 설치** 를 선택합니다.
   ![dot 파일 설치](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. dot 파일을 설치하려는 리포지토리를 선택합니다.
   ![dot 파일 리포지토리 선택](/assets/images/help/codespaces/select-dotfiles-repo.png)

스크립트, 기본 설정, 구성 파일을 dot 파일 리포지토리에 추가하거나 원할 때마다 기존 파일을 편집할 수 있습니다. 설정 변경 내용은 새 codespace에서만 선택됩니다.

codespace가 dot 파일에서 구성 설정을 선택하지 못하는 경우 “[{% data variables.product.prodname_codespaces %}에 대한 dot 파일 문제 해결](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces)”을 참조하세요.

## <a name="other-available-settings"></a>기타 사용 가능한 설정

추가 [{% data variables.product.prodname_codespaces %} 설정](https://github.com/settings/codespaces)을 사용하여 {% data variables.product.prodname_codespaces %}를 사용자 지정할 수도 있습니다.

- 기본 지역을 설정하려면 “[{% data variables.product.prodname_codespaces %}에 대한 기본 영역 설정](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)”을 참조하세요.
- 편집기를 설정하려면 “[{% data variables.product.prodname_codespaces %}에 대한 기본 편집기 설정](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces)”을 참조하세요.
- 암호화된 비밀을 추가하려면 “[{% data variables.product.prodname_codespaces %}에 대해 암호화된 비밀 관리](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)”를 참조하세요.
- GPG 확인을 사용하려면 “[{% data variables.product.prodname_codespaces %}에 대한 GPG 확인 관리](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)”를 참조하세요.
- codespace가 다른 리포지토리에 액세스할 수 있도록 하려면 “[{% data variables.product.prodname_codespaces %}에 대한 액세스 및 보안 관리](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)”를 참조하세요.

## <a name="further-reading"></a>추가 참고 자료

* “[새 리포지토리 만들기](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)”
